### Exercício 1

a) Recebemos um array de arrays, no qual o primeiro item deste é a informação que solicitamos pela query;
b) Code:
~~~typescript
const getActorByName = async (actorName: string): Promise<any> =>{
  const r = await connection.raw(`
    SELECT * FROM Actor
    WHERE name LIKE '%${actorName}%'
  `)
  console.log(r[0][0])
  return r[0][0]
};
~~~
c) Code:
~~~typescript
const getGenderCount = async (gender: 'male' | 'female'): Promise<any> =>{
  const r = await connection.raw(`
    SELECT COUNT(*) FROM Actor
    WHERE gender = '${gender}'
  `);
  console.log(r[0][0]['COUNT(*)']);
  return r[0][0]['COUNT(*)']
};
~~~

### Exercício 2

a) Code:
~~~typescript
const updateSalary = async (id:number, salary: number): Promise<void> =>{
  const r = await connection('Actor')
  .update({
    salary: `${salary}`,
  })
  .where('id', '=', `00${id}`);
  r === 1 ? console.log('Sucesso!') : console.log('Algo deu errado. Tente novamente!')
};
~~~
b) Code:
~~~typescript
const deleteActor = async (id: number): Promise<void> =>{
  const r = await connection
  .delete()
  .from('Actor')
  .where('id', '=', `00${id}`);
  r === 1 ? console.log('Sucesso!') : console.log('Algo deu errado. Tente novamente!');
};
~~~
c) Code:
~~~typescript
const getGenderSalaryAvg = async (gender: 'male' | 'female'): Promise<any> =>{
  const r = await connection('Actor')
  .avg('salary')
  .where('gender', '=', `${gender}`)

  console.log(r[0]['avg(`salary`)']);
  return r[0]['avg(`salary`)'];
};
~~~

### Exercício 3

a) Pois está recebendo o valor correspondente ao id desejado pelo path param;
b) Elas devolvem uma response correspondente a sucesso ou erro da request feita;
c) Code:
~~~typescript
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
~~~

### Exercicio 4

a) Code:
~~~typescript
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
~~~
b) Code:
~~~typescript
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
~~~

### Exercicio 5

Code:
~~~typescript
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
~~~

### Exercicio 6

Code:
~~~typescript
const getAllFilms = async (): Promise<any> =>{
  const r = await connection('Film')
  .select('*');
  return r
};
app.get('/film/all', async (req: express.Request, res: express.Response)=>{
  try{
    const r = getAllFilms();
    
    res.send(r).status(200);
  }catch(e){
    res.send(
      {message: e.message}
    )
    .status(400)
  };
});
~~~

### Exercicio 7

Code:
~~~typescript
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
~~~

## Fim dos Exercicios