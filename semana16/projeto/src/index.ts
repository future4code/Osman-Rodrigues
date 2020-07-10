import * as knex from 'knex';
import * as dotenv from 'dotenv';

import * as express from 'express';
import {AddressInfo} from 'net';
import axios from 'axios';

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
//Open server
const server = app.listen(process.env.PORT || 3003, ()=>{
  if(server){
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  }else{
    console.error(`Failure upon starting server.`);
  }
});

//Creating DB entities
//User
const createUserTable = async (): Promise<void> =>{
  try{
    const r = await connection.schema.createTable('ToDoUsers', (t)=>{
      t.string('id', 12).primary(),
      t.string('name').notNullable(),
      t.string('nickname', 10),
      t.string('email', 60).notNullable()
    });
    console.log('Tabela criada com sucesso!')
  }
  catch(e){
    console.log(e.sqlMessage)
  };
};
//Tasks
const createTasksTable = async (): Promise<void> =>{
  try{
    const r = await connection.schema.createTable('ToDoTasks', (t)=>{
      t.string('id', 8).primary(),
      t.string('title', 60).notNullable(),
      t.string('description', 120),
      t.date('limit_date').notNullable(),
      t.string('creator_id', 12).notNullable(),
      t.foreign('creator_id').references('id').inTable('ToDoUsers')
    });
    console.log('Tabela criado com sucesso!');
  }
  catch(e){
    console.log(e.sqlMessage);
  };
};

//Endpoints
app.put('/user', async (req: express.Request, res: express.Response): Promise<any>=>{
  const body = req.body;
  const id = crypto.randomBytes(6).toString('hex');

  if(! body.name || body.name.trim() === ''){
    res.send({message: 'Username missed.'}).status(400)
    return
  }else if(! body.email || body.email.trim() === ''){
    res.send({message: 'E-mail missed.'}).status(400)
    return
  }else if(! body.nickname || body.nickname.trim() === ''){
    res.send({message: 'Nickname missed.'}).status(400)
    return
  };
  
  try{
    const r = await connection('ToDoUsers')
    .insert({
      id,
      name: body.name,
      nickname: body.nickname,
      email: body.email,
    });
    res.send(r).status(200);
  }catch(e){
    res.send({
      message: e.message,
    })
    .status(400);
  };
});

const newUser = async (
  name: string, nickname: string, email: string
): Promise<void> =>{
  try{
    const r = await axios.put('http://localhost:3003/user',{
      name,
      nickname,
      email
    });
    console.log(r.data);
  }catch(e){
    console.log(e.data.message);
  };
};

newUser('Marie Huana', 'Marie', 'marie@huana.com');

//createTasksTable();
//createUserTable();

//const test = crypto.randomBytes(12).toString('hex');
//console.log(test)
