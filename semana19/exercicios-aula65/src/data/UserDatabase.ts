import { BaseDataBase } from "./BaseDatabase";
import { User } from "../model/User";

export class UserDatabase extends BaseDataBase {
  protected tableName: string = process.env.USERS_TABLE_NAME as string;

  private toModel(dbModel?: any): User | undefined {
    return (
      dbModel &&
      new User(
        dbModel.id,
        dbModel.name,
        dbModel.email,
        dbModel.password,
        dbModel.role
      )
    );
  }

  public async createUser(user: User): Promise<void> {
    await super.getConnection().raw(`
        INSERT INTO ${this.tableName} (id, user_name, email, user_pwd, user_role)
        VALUES (
          '${user.getId()}', 
          '${user.getName()}', 
          '${user.getEmail()}',
          '${user.getPassword()}', 
          '${user.getRole()}'
        )`);
  }

  public async getUserByEmail(email: string): Promise<User | undefined> {
    const result = await super.getConnection().raw(`
      SELECT * from ${this.tableName} WHERE email = '${email}'
      `);
    return this.toModel(result[0][0]);
  }

  public async getById(id: string): Promise<User | undefined> {
    const result = await super.getConnection().raw(`
      SELECT * from ${this.tableName} WHERE id = '${id}'
      `);
    return this.toModel(result[0][0]);
  }

  public async getAllUsers(): Promise<User[]> {
    const result = await super.getConnection().raw(`
      SELECT * from ${this.tableName}
    `);
    return result[0].map((res: any) => {
      return this.toModel(res);
    });
  }
}
