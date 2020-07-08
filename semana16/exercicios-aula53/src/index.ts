import * as knex from 'knex';
import * as dotenv from 'dotenv';

import * as express from 'express';
import {AddressInfo} from 'net';

//Config dotenv variables from .env
dotenv.config();

//Config database connection
const connection = knex({
  client: "mysql",
  connection:{
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || '3306'),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

//Config API builder
const app = express();
//Creating json middleware 
app.use(express.json());
//Starting backend server
const server = app.listen(process.env.PORT || 3000, ()=>{
  if(server){
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  }else{
    console.error(`Failure upon starting server.`);
  }
});

//Lessons
//1.
//b)
const getActorByName = async (actorName: string): Promise<any> =>{
  const r = await connection.raw(`
    SELECT * FROM Actor
    WHERE name LIKE '%${actorName}%'
  `)
  console.log(r[0][0])
  return r[0][0]
};
//c)
const getGenderCount = async (gender: 'male' | 'female'): Promise<any> =>{
  const r = await connection.raw(`
    SELECT COUNT(*) FROM Actor
    WHERE gender = '${gender}'
  `);
  console.log(r[0][0]['COUNT(*)']);
  return r[0][0]['COUNT(*)']
};

//2.
//a)
const updateSalary = async (id:number, salary: number): Promise<void> =>{
  const r = await connection('Actor')
  .update({
    salary: `${salary}`,
  })
  .where('id', '=', `00${id}`);
  r === 1 ? console.log('Sucesso!') : console.log('Algo deu errado. Tente novamente!');
};
//b)
const deleteActor = async (id: number): Promise<void> =>{
  const r = await connection
  .delete()
  .from('Actor')
  .where('id', '=', `00${id}`);
  r === 1 ? console.log('Sucesso!') : console.log('Algo deu errado. Tente novamente!');
};
//c)
const getGenderSalaryAvg = async (gender: 'male' | 'female'): Promise<any> =>{
  const r = await connection('Actor')
  .avg('salary')
  .where('gender', '=', `${gender}`)

  console.log(r[0]['avg(`salary`)']);
  return r[0]['avg(`salary`)'];
};

//getActorByName('Adriana');
//getGenderCount('female');
//updateSalary(1, 300000);
//deleteActor(1);
getGenderSalaryAvg('female');
