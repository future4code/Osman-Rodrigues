import knex from 'knex';
import Knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

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
export{BaseDataBase}