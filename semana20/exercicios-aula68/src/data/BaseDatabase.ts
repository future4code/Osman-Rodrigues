import knex from "knex"
import Knex from "knex"

export abstract class BaseDatabase{
  private static connection: Knex | null = null;
  
  public getConnection(tableName?:string): Knex{
    if(!BaseDatabase.connection){
        BaseDatabase.connection = knex({
            client: "mysql",
            connection: {
                host: process.env.DB_HOST,
                port: 3306,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME
            }
        })
    }

    return BaseDatabase.connection
  };

  public async destroyConnection() {
      await BaseDatabase.connection.destroy()
      BaseDatabase.connection = null;
  };
};