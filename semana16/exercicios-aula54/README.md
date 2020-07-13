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

a) A query em questão busca na confluência das tabelas Movie e Rating as linhas nas quais os campos id da Movie e movie_id da Rating sejam iguais. O operador ON representa a condição que a junçõa ocorrerá, no caso a relação citada anteriormente entre id e movie_id;

b) Query:
~~~sql
SELECT movie_id, title, rate 
FROM Appreciation
INNER JOIN Film ON Appreciation.movie_id = Film.id; 
~~~

### Exercicio 4

a) Query:
~~~sql
SELECT title, movie_id, rate, comment 
FROM Appreciation
RIGHT JOIN Film ON Appreciation.movie_id = Film.id; 
~~~
b) Query:
~~~sql
SELECT film_id , title, actor_id 
FROM FilmCast
INNER JOIN Film ON FilmCast.film_id = Film.id
ORDER BY actor_id;  
~~~
c) Query:
~~~sql
SELECT title, AVG(rate) FROM Appreciation
RIGHT JOIN Film ON Appreciation.movie_id = Film.id
GROUP BY Film.id;
~~~

### Exercicio 5

a) Pois há a relação de muitos para muitos em duas situações: (i) dos filmes para com o elenco e (ii) dos atores para com o elenco. Cada join corresponde a uma relação destas;

b) Query:
~~~sql
SELECT film_id, title, actor_id, name FROM Film
LEFT JOIN FilmCast ON Film.id = FilmCast.film_id
JOIN Actor ON Actor.id = FilmCast.actor_id
ORDER BY name;
~~~
c) A query não funcionou pois não foi identificado o campo m antes de title na clausula SELECT; 

d) Query:
~~~sql
SELECT film_id, title, name, rate, comment FROM Film
LEFT JOIN FilmCast ON Film.id = FilmCast.film_id
JOIN Actor ON Actor.id = FilmCast.actor_id
LEFT JOIN Appreciation ON Appreciation.movie_id = Film.id;
~~~

### Exercicio 6

a) Um para muitos;

b) Criada tabela que representa a entidade Oscar, a qual armazena as informações de cada premio da academia recebido por determinado filme relacionado a tabela Film. Possui em seus campos as informações id (chave primaria), tipo do oscar e id do filme (chave estrangeira);

c) Code:
~~~typescript
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

setFilmOscar('001', '001', 'Pior filme de comédia')
setFilmOscar('002', '001', 'Maior comédia forçada')
setFilmOscar('003', '002', 'Melhor drama')
setFilmOscar('004', '002', 'Melhor protagonista mulher')
setFilmOscar('005', '004', 'Melhor romance')
setFilmOscar('006', '004', 'Melhor trilha sonora')
setFilmOscar('007', '008', 'Melhor enredo baseado em fatos reais')
setFilmOscar('008', '008', 'Melhor protagonista homem')
~~~

d) Query:
~~~sql
SELECT film_id, title, oscar_type
FROM Film
LEFT JOIN Oscar ON Film.id  = Oscar.film_id ;
~~~

## Fim dos Exercicios