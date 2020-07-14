import express, {Request, Response} from 'express';
import {AddressInfo} from 'net';

import {IdGenerator, UsersDb, Authenticator} from './utils';
import { send } from 'process';

const idGen = new IdGenerator();
const useUserDb = new UsersDb();
const tokenGen = new Authenticator();

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
  const token = tokenGen.generateToken({id, email: body.email});

  try{
    if(! body.email || body.email.trim() === '' || ! body.email.includes('@')){
      throw {message: 'Incorrect or missed email.'}
    };
    if(body.password.length < 6){
      throw {message: 'Password must be more than 6 characters.'};
    };

    await useUserDb.createUser(
      id, body.name, body.email, body.password
    );
    res.send({message: `User ${body.name} successful created!`, token}).status(400);
  }catch(e){
    res.send({
      message: e.message
    })
  };
});

app.post('/login', async (req: Request, res: Response):Promise<any> =>{
  const id = idGen.generate();
  const body = req.body;
  const token = tokenGen.generateToken({id, email: body.email});

  try{
    if(! body.email || body.email.trim() === '' || ! body.email.includes('@')){
      throw {message: 'Incorrect or missed email.'}
    };
    const checkUser = await useUserDb.getUserByEmail(body.email);
    if(! checkUser){
      throw {message: 'User not found.'}
    };
    res.send(checkUser && {token}).status(200);
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

    res.send({userInfos}).status(200);
  }catch(e){
    res.send({
      message: e.message
    });
  };
});