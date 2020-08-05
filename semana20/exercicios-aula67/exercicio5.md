### Exercicio 5

~~~typescript
import knex from 'knex';

interface lambdaInputDTO{
  id: string,
  name: string,
  alias: string,
  img_url: string
}

interface lambdaOutputDTO{
  statusCode: number,
  body: string
}

export const handler = async(event: lambdaInputDTO): Promise<lambdaOutputDTO>  =>{
  
  if(!event || !event.id || ! event.name || !event.alias || !event.img_url){
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Missing input" })
    };
  }

  const connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE_NAME,
    },
  })
  const tableName = 'Users_E67'
  
  try{
    await connection(tableName)
    .insert({
      id: event.id,
      name: event.name,
      alias: event.alias,
      img_url: event.img_url
    })

    return{
      statusCode: 200,
      body: JSON.stringify('Character successfully registered!')
    }
  }catch(e){
    return{
      statusCode: 400,
      body: JSON.stringify('Bad request')
    }
  }
} 
~~~