### Exercicio 1

a) O round ou cost é o número de vezes que o hash irá iterar pelo processo de encrypt, sendo adiconado o salt, que é uma string aleatória. Ao final dos rounds definidos, teremos o hash. Utilizei o valor recomendado de 12 rounds, pois é um padrão que equilibra segurança e agilidade no processo;

b), c) Code:
~~~typescript
class HashManager{
  public async hash(plainText: string): Promise<string>{
    const hash = await bcrypt.hash(plainText, await bcrypt.genSalt(Number(process.env.BCRYPT_COST)));
    return hash;
  };
  public async checkHash(hash: string, plainText: string): Promise<boolean>{
    const isValid = await bcrypt.compare(plainText, hash);
    return isValid
  };
};
~~~

### Exercicio 2

a) O cadastro, pois no banco as senhas não estão hasheadas e no momento da comparação, que ocorrerá no login, nunca irá reconhecer, pois o compare do bcrypt recebe como parametro hash;

b) Code:
~~~typescript
...app.post('/signup', async(req: Request, res: Response)=>{
  try{
    const hashedPwd = await hashGen.hash(body.password);
    await useUserDb.createUser(
      id, body.name, body.email, hashedPwd
    );
  }
});
~~~

c) Code:
~~~typescript
...app.post('/login', async (req: Request, res: Response):Promise<any> =>{
  try{
    const checkPwd = await hashGen.checkHash(checkUser.user_pwd, body.password);
    if(! checkPwd){
      throw new Error('Invalid password.');
    };
  }
});
~~~

d) Não, pois ele necessita apenas do token que é gerado no endpoint de login. Uma vez que toda a validação do login foi feita e o token só é enviado após tal validação, o funcionamento do enpoint /user/profile não precisa ser alterado.

### Exercicio 3

a) Query:
~~~sql
ALTER TABLE Users_E55 
ADD user_role ENUM('NORMAL','ADMIN') NOT NULL DEFAULT 'NORMAL'
~~~ 

b) Code:
~~~typescript
enum ROLE{
  NORMAL = 'NORMAL',
  ADMIN = 'ADMIN'
};

interface AuthenticationData{
  id: string,
  email: string,
  role?: ROLE
};

...class Authenticator{
  ...public generateToken(input: AuthenticationData): string{
    const token = jwt.sign(
      {id: input.id, email: input.email, role: input.role || undefined}, 
    );
  };
}
~~~

c) Code:
~~~typescript
...app.post('/signup', async(req: Request, res: Response)=>{
   const token = tokenGen.generateToken({id, email: body.email, role: body.role});
}
~~~

d) Code:
~~~typescript
...app.post('/login', async (req: Request, res: Response):Promise<any> =>{
    const body = req.body;
    const userDbInfos = await useUserDb.getUserByEmail(body.email);
    const token = tokenGen.generateToken({
      id: userDbInfos.id, email: body.email, role: userDbInfos.user_role
    });
}
~~~

### Exercicio 4

a) Code:
~~~typescript
...app.get('/user/profile', async (req: Request, res: Response)=>{
  ...try{
    if(userInfos.role !== ROLE.NORMAL){
      throw new Error ('Unauthorized.')
    };
});
~~~

### Exercicio 5

Code:
~~~typescript
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
  }catch(e){
    res.send({
      message: e.message
    });
  };
});
~~~

### Exercicio 6

Code:
~~~typescript
app.get('/user/:id', async (req: Request, res: Response)=>{
  try{
    const token = req.headers.authorization as string;
    if(token){
      const toCatchInfosUserId = req.params.id;
      const r = await useUserDb.getUserById(toCatchInfosUserId);

      res.send({userInfos:{id: r.id, email: r.email}}).status(200);
    };
  }catch(e){
    res.send({
      message: e.message
    });
  };
});
~~~

### Exercicio 7

a) Code:
~~~typescript
abstract class BaseDataBase{
  private static connection: Knex | null = null;

  protected getConnection(): Knex{
    if(!BaseDataBase.connection){
      BaseDataBase.connection = knex({
        client: 'mysql',
        connection:{
          host: process.env.DB_HOST,
          port: 3306,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME
        },
      });
    };
    return BaseDataBase.connection;
  };
  public static async destroyConnection(): Promise<void>{
    if(BaseDataBase.connection){
      await BaseDataBase.connection.destroy();
      BaseDataBase.connection = null;
    };
  };
}
~~~

## Fim dos Exercicios

