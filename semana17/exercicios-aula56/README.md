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
   const token = tokenGen.generateToken({id, email: body.email, role: body.role});
}
~~~



