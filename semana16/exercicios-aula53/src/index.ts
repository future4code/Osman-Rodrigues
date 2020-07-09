import * as knex from 'knex';
import * as dotenv from 'dotenv';

import * as express from 'express';
import {AddressInfo} from 'net';

import axios from 'axios';

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
const server = app.listen(process.env.PORT || 3333, ()=>{
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
const getGenderCount = async (gender: string): Promise<any> =>{
  const r = await connection.raw(`
    SELECT COUNT(*) FROM Actor
    WHERE gender = '${gender}'
  `);
  //console.log(r[0][0]['COUNT(*)']);
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
//3
//c)
app.get("/actor", async (req, res)=>{
  try{
    const gender = req.query.gender
    const genderCount = await getGenderCount(gender as string);
    res.send({genderCount}).status(200);
  }catch(e){
    res.send({
      message: e.message
    })
    .status(400);
  };
});

//4.
//a)
app.post('/actor', async (
  req: express.Request, res: express.Response
  )=>{
    try{
      const body = req.body;
      const r = await updateSalary(body.id, body.salary);
      console.log(r);
      console.log('Atualização bem sucedida!');
      res.send().status(200);
    }catch(e){
      res.send({
        message: e.message,
      })
      .status(400);
    };
});
//b)
app.delete('/actor/:id', async (
  req: express.Request, res: express.Response
  )=>{
    try{
      const r = await deleteActor(Number(req.params.id));
      console.log(r);
      console.log('Remoção bem sucedida!');
      res.send().status(200);
    }catch(e){
      res.send({
        message: e.message,
      })
      .status(400);
    };
});
//5.
const registerFilm = async (
  id: string, title: string, synopsis: string, release_date: string, 
  rating: number, playing_limit_date: string
): Promise<void> =>{
  const r = await connection('Film')
  .insert(
    {
      id,
      title,
      synopsis,
      release_date,
      rating,
      playing_limit_date
    }
  );
};

app.post('/film', async (
  req: express.Request, res: express.Response
  )=>{
  const b = req.body;
  
  try{
    const r = await registerFilm(
      b.id,
      b.title,
      b.synopsis,
      b.release_date,
      b.rating,
      b.playing_limit_date
    );
    console.log('Filme registrado com sucesso!');
    res.send().status(200);
  }catch(e){
    res.send({
      message: e.message,
    })
    .status(400);
  };
});
//6.
const getAllFilms = async (): Promise<any> =>{
  const r = await connection('Film')
  .select('*');
  return r
};

app.get('/film/all', async (req: express.Request, res: express.Response)=>{
  try{
    const r = await getAllFilms();
    
    res.send(r).status(200);
  }catch(e){
    res.send(
      {message: e.message}
    )
    .status(400)
  };
});
//7.
const getFilmByKeyword = async (keyword: string ): Promise<any> =>{
  const r = await connection('Film')
  .select('*')
  .where('title', 'like', `%${keyword}%`)
  .orWhere('synopsis', 'like', `%${keyword}%`);

  return r
};
app.get('/film/search', async (
  req: express.Request, res: express.Response
  )=>{
    try{
      const r = await getFilmByKeyword(req.query.keyword as string);

      res.send(r).status(200);
    }catch(e){
      res.send({
        message: e.message,
      })
      .status(400);
    };
});

//Tests

//axios.get('http://localhost:3333/film/all');
/* axios.post('http://localhost:3333/film', {
  id: '008',
  title: 'Tropa de Elite 2: o Inimigo agora É Outro',
  synopsis: 'O Capitão Nascimento, agora mais experiente, trabalha como sub-secretário de Inteligência na secretaria de Segurança do Rio de Janeiro.',
  release_date: '2010-10-08',
  rating: 9.6,
  playing_limit_date: '2012-10-08',
}); */
//axios.post('http://localhost:3000/actor', {id: 4, salary: 575000});
//axios.delete('http://localhost:3000/actor/5');

//getActorByName('Adriana');
//getGenderCount('female');
//updateSalary(1, 300000);
//deleteActor(1);
//getGenderSalaryAvg('female');