import * as knex from 'knex';
import * as dotenv from 'dotenv';

import * as express from 'express';
import {AddressInfo} from 'net';
import axios from 'axios';

import * as crypto from 'crypto';
import * as moment from 'moment';

//Getting environment variables
dotenv.config();
moment.locale();

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
//1. Create user
app.put('/user', async (req: express.Request, res: express.Response): Promise<any>=>{
  const body = req.body;
  const id = crypto.randomBytes(6).toString('hex');

  if(! body.name || body.name.trim() === ''){
    res.send({message: 'Missing username.'}).status(400)
    return
  }else if(! body.email || body.email.trim() === ''){
    res.send({message: 'Missing e-mail.'}).status(400)
    return
  }else if(! body.nickname || body.nickname.trim() === ''){
    res.send({message: 'Missing nickname.'}).status(400)
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

//2. Get user
app.get('/user/:id', async (req: express.Request, res: express.Response)=>{
  const userId = req.params.id;
  try{
    const r = await connection('ToDoUsers')
    .select('*')
    .where('id', '=', userId);

    res.send(r[0]).status(200);
  }catch(e){
    res.send({
      message: e.message,
    })
    .status(400)
  };
});

//3. Edit user
app.post('/user/edit/:id', async (req: express.Request, res: express.Response)=>{
  const userId = req.params.id;
  const body = req.body;

  if(! userId){
    res.send({message: 'Missing user id.'}).status(400)
    return {message:''}
  };

  switch(body){
    case body.name && ! body.nickname:
      try{
        await connection('ToDoUsers')
        .where('id', '=', userId)
        .update({
          name: body.name
        });

        res.sendStatus(200);
        break
      }catch(e){
        res.send({
          message: e.message
        })
        .status(400);
        break
      };
    case ! body.name && body.nickname:
      try{
        await connection('ToDoUsers')
        .where('id', '=', userId)
        .update({
          nickname: body.nickname
        });

        res.sendStatus(200);
        break
      }catch(e){
        res.send({
          message: e.message
        })
        .status(400);
        break
      };
    case ! body.name && ! body.nickname:
      res.send({
        message: 'Inform name or nickname to update.'
      }).status(400);
    default:
      try{
        await connection('ToDoUsers')
        .where('id', '=', userId)
        .update({
          name: body.name,
          nickname: body.nickname
        });

        res.sendStatus(200);
        break
      }catch(e){
        res.send({
          message: e.message
        })
        .status(400);
        break
      };
  };
});

//4. Create task 
app.put('/task', async (req: express.Request, res: express.Response): Promise<any>=>{
  const body = req.body;
  const id = crypto.randomBytes(4).toString('hex');

  if(! body.title || body.title.trim() === ''){
    res.send({message: 'Missing task title.'}).status(400)
    return
  }else if(! body.limitDate || body.limitDate.trim() === ''){
    res.send({message: 'Missing task limit date.'}).status(400)
    return
  }else if(! body.creatorId || body.creatorId.trim() === ''){
    res.send({message: 'Missing task creator id.'}).status(400)
    return
  };
  
  try{
    await connection('ToDoTasks')
    .insert({
      id,
      title: body.title,
      description: body.description,
      limit_date: moment(body.limitDate, 'DD/MM/YYYY').format('YYYY-MM-DD'),
      creator_id: body.creatorId
    });
    res.sendStatus(200);
  }catch(e){
    res.send({
      message: e.message,
    })
    .status(400);
  };
});

//5. Get task
app.get('/task/:id', async (req: express.Request, res: express.Response)=>{
  const taskId = req.params.id;
  try{
    const r = await connection('ToDoTasks')
    .select('*')
    .where('id', '=', taskId);

    res.send(r[0]).status(200);
  }catch(e){
    res.send({
      message: e.message,
    })
    .status(400)
  };
});

//Tests
const getTaskById = async (taskId: string): Promise<any> =>{
  try{
    const r = await axios.get(`http://localhost:3003/task/${taskId}`);
    console.log(r.data);
  }catch(e){
    console.log(e.data.message)
  }
};

const newTask = async (
  creatorId: string, title: string, limitDate: string, description?: string,
): Promise<void> =>{
  try{
    const r = await axios.put('http://localhost:3003/task',{
      title,
      description,
      limitDate,
      creatorId
    });
    console.log(r.data);
  }catch(e){
    console.log(e.data.message);
  };
};

const updateUserInfos = async (
  userId: string, name?: string, nickname?: string
  ): Promise<any> =>{
    const body = {
      name,
      nickname
    };

    try{
      const r = await axios.post(`http://localhost:3003/user/edit/${userId}`, body);
      console.log(r.data);
    }catch(e){
      console.log(e.data.message);
    };
};

const getUserById = async (userId: string): Promise<any> =>{
  try{
    const r = await axios.get(`http://localhost:3003/user/${userId}`);
    console.log(r.data);
  }catch(e){
    console.log(e.data.message)
  }
};

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