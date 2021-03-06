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

//1.
//b)
const createAppreciationTable = async (): Promise <void>=>{
  const r = await connection.schema.createTable('Appreciation', (table)=>{
    table.string('id').primary();
    table.text('comment').notNullable();
    table.float('rate').notNullable();
    table.string('movie_id');
    table.foreign('movie_id').references('id').inTable('Film');
  });

  console.log('Tabela criada com sucesso!');
};

const newAppreciation = async (
  id: string, comment: string, rate: number, movie_id: string, 
): Promise<void> =>{
  const r = await connection('Appreciation')
  .insert({
    id,
    comment,
    rate,
    movie_id
  });
  console.log(`Avaliação do filme registrada com sucesso!`)
};
//d)
const deleteColumn = async (film: string, column: string): Promise<void>=>{
  try{
    const r = await connection.schema.alterTable(film, (t)=>{
    t.dropColumn(column);
    });
    console.log(r);
    console.log(`Coluna excluida com sucesso!`)
  }catch(e){
    console.log(e.message)
  }
};
const deleteFilm = async (film: string): Promise<void> =>{
  try{
    const r = await connection('Film')
    .delete('*')
    .where('id', '=', film);
  }catch(e){
    console.log(e.sqlMessage);
  }; 
};

//2
//b)
const createFilmCastTable = async (): Promise <void>=>{
  const r = await connection.schema.createTable('FilmCast', (table)=>{
    table.string('film_id');
    table.string('actor_id');
    table.foreign('film_id').references('id').inTable('Film');
    table.foreign('actor_id').references('id').inTable('Actor');
  });

  console.log('Tabela criada com sucesso!');
};

const addActorToCast = async (film_id: string, actor_id: string): Promise<void> =>{
  try{
    const r = await connection('FilmCast')
    .insert({
      film_id,
      actor_id
    });
    console.log('Elenco acrescido com sucesso!');
  }catch(e){
    console.log(e.sqlMessage);
  };
};

//6
//d)
const setFilmOscar = async (
  oscarId:string, filmId: string, oscarType: string
  ): Promise<void> =>{
    const r = await connection('Oscar')
    .insert({
      id: oscarId,
      oscar_type: oscarType,
      film_id: filmId,
    })
    console.log('Oscar registrado!')
};