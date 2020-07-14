### Exercicio 1

a) Concordo com o uso de strings para gerar ids, pois a possibilidade de combinações aumentam e ficam mais eficientes;

b) Code:
~~~typescript
class IdGenerator{
  public generate(): string{
    return v4();
  }
};
~~~

### Exercicio 2

a) O código em questão estabelece conexão com o banco de dados utilizando do knex e variaveis de ambient do dotenv, alimentando o mesmo com informações de um novo usuário, utilizando o query builder;

b) Query:
~~~sql
CREATE TABLE Users_E55(
	id VARCHAR(32) PRIMARY KEY,
  user_name VARCHAR (100) NOT NULL,
	email VARCHAR(50) NOT NULL,
	user_pwd VARCHAR(16) NOT NULL,  
)
~~~

c) Code:
~~~typescript
class UsersDb{
  private userTableName = process.env.USERS_TABLE_NAME;
  private connection = knex({
    client: 'mysql',
    connection:{
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
  });

  public async createUser(
    id: string, name: string, email: string, password: string
  ): Promise<any>{
    try{
      const r = await this.connection(this.userTableName)
      .insert({
        id,
        user_name: name,
        user_pwd: password,
        email
      });
      return 'Sucess!'
    }catch(e){
      return {message: e.sqlMessage || e.message}
    };
  };
};
~~~

d) Code:
~~~typescript
const idGen = new IdGenerator();
const id = idGen.generate();

const useUserDb = new UsersDb();
useUserDb.createUser(id, 'Mary Jackson', 'jackson@mary.com', 'mj1234jm')
~~~

### Exercício 3

a) Pois ela garante ao jwt que a variavel de ambiente que armazena a chave secreta como uma string, evitando quaisquer problemas relacionados a esse elemento fundamental para o processo;

b) Code:
~~~typescript
class Authenticator{
  private static EXPIRES_IN = '1min';

  public generateToken(input: AuthenticationData): string{
    const token = jwt.sign(
      {id: input.id}, 
      process.env.JWT_KEY as string,
      {expiresIn: Authenticator.EXPIRES_IN}
    );

    return token;
  };
};
~~~

### Exercício 4

a) Code:
~~~typescript
app.post('/signup', async(req: Request, res: Response)=>{
  try{
    const id = idGen.generate();
    const body = req.body;
    const token = tokenGen.generateToken({id});

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
~~~

b) Code:
~~~typescript
app.post('/signup', async(req: Request, res: Response)=>{
  const id = idGen.generate();
  const body = req.body;
  const token = tokenGen.generateToken({id});

  try{
     if(! body.email || body.email.trim() === '' || ! body.email.includes('@')){
      throw {message: 'Incorrect or missed email.'}
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
~~~

c) Code:
~~~typescript
app.post('/signup', async(req: Request, res: Response)=>{
  const id = idGen.generate();
  const body = req.body;
  const token = tokenGen.generateToken({id});

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
~~~

### Exercicio 5 

a) Code:
~~~typescript
...class UserDB{
   public async getUserByEmail(
    email: string
  ): Promise<any>{
    try{
     const r = await this.connection(this.userTableName)
      .select('*')
      .where({
        email
      });
      return r[0];
    }catch(e){
      throw {message: e.sqlMessage || e.message}
    };
  };
};
~~~

b) Code: 
~~~typescript
const getByEmail= async(email: string) => {
  const r = await useUserDb.getUserByEmail(email);
  console.log(r)
};
getByEmail('julian@percy.com');
~~~

### Exercicio 6

a), b), c) Code:
~~~typescript
app.post('/login', async (req: Request, res: Response): 
  Promise<any> =>{
  const id = idGen.generate();
  const body = req.body;
  const token = tokenGen.generateToken({id});

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
~~~

### Exercicio 7

a) Garante que o payload (parte do jwt fundamental e que guarda as informações que serão coletadas) irá retornar algum tipo de dado obrigatoriamente;

b) Code:
~~~typescript
...class Authenticator{

  public getData(token: string): AuthenticationData{
    const payload = jwt.verify(
      token,
      process.env.JWT_KEY as string
    ) as any;
    const result = {
      id: payload.id
    };
    return result;
  };
};
~~~

### Exercicio 8

a) Code: 
~~~typescript
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
~~~ 

## Fim dos Exercicios
