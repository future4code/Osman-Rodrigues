import * as knex from 'knex';
import * as dotenv from 'dotenv';

import * as express from 'express';
import {AddressInfo} from 'net';

dotenv.config();

const connection = knex({
  client: 'mysql',
  connection:{
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app = express();
app.use(express.json());

const server = app.listen( process.env.PORT || '3000', ()=>{
  if(server){
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`); 
  }else{
    console.error(`Failure upon starting server.`);
  };
});

async function testEndpoint(req:express.Request, res:express.Response): Promise<void>{
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor
    `)

    res.status(200).send(result[0])
  } catch (error) {
    res.status(400).send(error.message)
  }
};
app.get('/', testEndpoint);