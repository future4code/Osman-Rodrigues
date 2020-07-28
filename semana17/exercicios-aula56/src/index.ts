import express, {Request, Response} from 'express';
import {AddressInfo} from 'net';

import {IdGenerator, UsersDb, Authenticator, HashManager, ROLE} from './utils';
import {BaseDataBase} from './models'

const idGen = new IdGenerator();
const useUserDb = new UsersDb();
const tokenGen = new Authenticator();
const hashGen = new HashManager();

const hashTest = async ()=> await hashGen.hash('ahninanab');
const hashCheck = async ()=>{
  const hash = await hashTest();
  const result = await hashGen.checkHash(hash, 'ahninanab');
  return result
};


//const token = tokenGen.generateToken({id});

//const tokenData = tokenGen.getData(token);

const app = express();
app.use(express.json());

const server = app.listen(process.env.PORT || 3003, ()=>{
  if(server){
    const address = server.address() as AddressInfo;
    console.log(`Server is running in htttp://localhost:${address.port} `);
  }else{
    console.error('Failure upon starting server.')
  }
});

app.post('/signup', async(req: Request, res: Response)=>{
  const id = idGen.generate();
  const body = req.body;
  const token = tokenGen.generateToken({id, email: body.email, role: body.role});

  try{
    if(! body.email || body.email.trim() === '' || ! body.email.includes('@')){
      throw {message: 'Incorrect or missed email.'}
    };
    if(body.password.length < 6){
      throw {message: 'Password must be more than 6 characters.'};
    };
    const hashedPwd = await hashGen.hash(body.password);
    await useUserDb.createUser(
      id, body.name, body.email, hashedPwd, body.role
    );
    res.send({message: `User ${body.name} created successfully!`, token}).status(400);
    await useUserDb.destroyConnection();
  }catch(e){
    res.send({
      message: e.message
    })
  };
});

app.post('/login', async (req: Request, res: Response):Promise<any> =>{
  const body = req.body;
  const userDbInfos = await useUserDb.getUserByEmail(body.email);
  const token = tokenGen.generateToken({
    id: userDbInfos.id, email: body.email, role: userDbInfos.user_role
  });

  try{
    if(! body.email || body.email.trim() === '' || ! body.email.includes('@')){
      throw new Error('Incorrect or missed email.');
    };
    const checkUser = await useUserDb.getUserByEmail(body.email);
    if(! checkUser){
      throw new Error('User not found.');
    };
    const checkPwd = await hashGen.checkHash(checkUser.user_pwd, body.password);
    if(! checkPwd){
      throw new Error('Invalid password.');
    };
    
    res.send(checkUser && {token}).status(200);
    await useUserDb.destroyConnection();
    
  }catch(e){
    res.send({
      message: e.message
    })
  };
});

app.get('/user/profile', async (req: Request, res: Response)=>{
  try{
    const token = req.headers.authorization as string;

    const userInfos = tokenGen.getData(token);

    if(userInfos.role !== ROLE.NORMAL){
      throw new Error ('Unauthorized.')
    };

    res.send({userInfos}).status(200);
  }catch(e){
    res.send({
      message: e.message
    });
  };
});

app.delete('/user/:id', async (req: Request, res: Response)=>{
  
  try{
    const toDeleteUserId = req.params.id;
    const token = req.headers.authorization as string;
    const AuthUserInfos = tokenGen.getData(token);

    if(AuthUserInfos.role !== ROLE.ADMIN){
      throw new Error ('Unauthorized.')
    };
    await useUserDb.deleteUser(toDeleteUserId);
    res.send({message: 'User deleted successfully.'}).status(200);
    await useUserDb.destroyConnection();
  }catch(e){
    res.send({
      message: e.message
    });
  };
});

app.get('/user/:id', async (req: Request, res: Response)=>{
  try{
    const token = req.headers.authorization as string;
    if(token){
      const toCatchInfosUserId = req.params.id;
      const r = await useUserDb.getUserById(toCatchInfosUserId);
      res.send({userInfos:{id: r.id, email: r.email}}).status(200);
      await useUserDb.destroyConnection();
    };
  }catch(e){
    res.send({
      message: e.message
    });
  };
});

