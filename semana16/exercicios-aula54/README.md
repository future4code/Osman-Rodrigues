### Exercicio 1

a) É um campo de uma tabela que se relaciona com o campo de outra, permitindo relações entre as mesmas;

b) Code:
~~~typescript
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
~~~

c) A query retornou um erro o qual informava que a restrição pela foreing key não encontrou correspondencia na tabela Film;

d) Code:
~~~typescript
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
~~~
e) Retornou um erro informando que a restrição atrelada a referência da foreing key da linha filha correspondente ao filme em questão não permite deletar ou atualizar a mesma.

### Exercicio 2

a) A tabela em questão representa a entidade do Elenco dos Filmes, a qual guarda duas informações principais: identificação do filme e do ator presente em seu elenco. 

b) Code:
~~~typescript
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
  const r = await connection('FilmCast')
  .insert({
    film_id,
    actor_id
  });
  console.log('Elenco acrescido com sucesso!')
};

addActorToCast('001', '003');
addActorToCast('002', '004');
addActorToCast('004', '006');
addActorToCast('008', '007');
addActorToCast('004', '006');
addActorToCast('008', '007');
~~~

c) Não foi permitido criar o ator por conta da restrição da foreing key incompatível com a sua ligação na com o campo id da tabela Actor;

d) Retornou um erro informando que a restrição atrelada a referência da foreing key da linha filha na tabela FilmCast correspondente ao ator relacionado ao filme em questão, não permite deletar ou atualizar a mesma.

### Exercicio 3

