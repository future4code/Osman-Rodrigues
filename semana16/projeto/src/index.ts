import * as knex from 'knex';
import * as dotenv from 'dotenv';

import * as express from 'express';
import {AddressInfo} from 'net';

import * as crypto from 'crypto';

//Getting .env variables
dotenv.config();

//Setting DB connection
const connection = knex({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

//Setting api
const app = express();
//Setting api middleware
app.use(express.json());

//Creating DB entities
//User
const createUserTable = async (): Promise<void> =>{

  try{
    const r = connection.schema.createTable('TasksUser', (t)=>{
      t.string('id', 12).primary(),
      t.string('name').notNullable(),
      t.string('nickname', 10),
      t.string('email', 60).notNullable()
    });
    console.log('Tabela criada com sucesso!')
    console.log(r)
  }
  catch(e){
    console.log(e.sqlMessage)
  };
};

createUserTable();

//const test = crypto.randomBytes(12).toString('hex');
//console.log(test)
