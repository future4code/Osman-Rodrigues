import {v4} from 'uuid';
import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

class IdGenerator{
  public generate(): string{
    return v4();
  }
};

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

export {IdGenerator, UsersDb}