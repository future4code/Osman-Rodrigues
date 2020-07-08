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

