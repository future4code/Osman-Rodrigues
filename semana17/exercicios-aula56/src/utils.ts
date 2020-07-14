import {v4} from 'uuid';
import knex from 'knex';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

dotenv.config();

enum ROLE{
  NORMAL = 'NORMAL',
  ADMIN = 'ADMIN'
};

interface AuthenticationData{
  id: string,
  email: string,
  role?: ROLE
};

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
      await this.connection(this.userTableName)
      .insert({
        id,
        user_name: name,
        user_pwd: password,
        email
      });
      return 'Sucess!'
    }catch(e){
      throw {message: e.sqlMessage || e.message}
    };
  };
  public async getUserByEmail(
    email: string
  ): Promise<any>{
    try{
     const r = await this.connection(this.userTableName)
      .select('*')
      .where({
        email
      });
      return r.length != 0 && r[0];
    }catch(e){
      throw {message: e.sqlMessage || e.message}
    };
  };
  public async getUserById(
    id: string
  ): Promise<any>{
    try{
     const r = await this.connection(this.userTableName)
      .select('*')
      .where({
        id
      });
      
      return r.length != 0;
    }catch(e){
      throw {message: e.sqlMessage || e.message}
    };
  };
};

class Authenticator{
  private static EXPIRES_IN = '1min';

  public generateToken(input: AuthenticationData): string{
    const token = jwt.sign(
      {id: input.id, email: input.email, role: input.role || undefined}, 
      process.env.JWT_KEY as string,
      {expiresIn: Authenticator.EXPIRES_IN}
    );

    return token;
  };

  public getData(token: string): AuthenticationData{
    const payload = jwt.verify(
      token,
      process.env.JWT_KEY as string
    ) as any;
    const result = {
      id: payload.id,
      email: payload.email,
      role: payload.role
    };
    return result;
  };
};

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

export {IdGenerator, UsersDb, Authenticator, HashManager}