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

