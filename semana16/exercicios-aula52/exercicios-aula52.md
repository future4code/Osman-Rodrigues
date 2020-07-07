### Exercício 1

a) Deleta a coluna/campo salary da tabela Actor;
b) Altera a coluna/campo gender da tabela Actor para "sex"; 
c) Altera a coluna/campo gender da tabela Actor para o tipo VARCHAR(255); 
d) Query:
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercicio 2

a)Query:
```
UPDATE Actor 
SET name = 'Dira Paes', birth_date = '1969-06-30'
WHERE id = '003';
```
b)Query:
```
UPDATE Actor 
SET name = 'JULIANA PÃES'
WHERE name = 'Juliana Paes';
```
&
```
UPDATE Actor 
SET name = 'Juliana Paes'
WHERE name = 'JULIANA PÃES';
```
c)Query:
```
UPDATE Actor 
SET name = 'Debora Bloch', salary = 620050, birth_date = '1969-06-30'
WHERE id = '003'
```
d)O comando foi executado, porém não provocou nenhuma modificação, pois apesar do comando estar escrito de forma correta, não existe nenhum registro dentro dos parametros da Query que se relacionem com o id inexistente.

### Exercicio 3

a)Query:
```
DELETE FROM Actor 
WHERE name = 'Fernanda Montenegro';
```
b)Query:
```
DELETE FROM Actor 
WHERE salary > 1000000 
AND gender = 'male';
```

### Exercicio 4

a)Query:
```
SELECT MAX(salary) FROM Actor;
```
b)Query:
```
SELECT MIN(salary) 
FROM Actor
WHERE gender = 'female';
```
c)Query:
```
SELECT COUNT(*) 
FROM Actor
WHERE gender = 'female';
```
d)Query:
```
SELECT SUM(salary)
FROM Actor;
```

### Exercicio 5

a)Retornou uma tabela com duas colunas, COUNT(*) e gender, a qual possui duas linhas apenas, a primeira (3, male) e a segunda (3, female), indicando que a query buscou a quantidade total de atores e atrizes (3 de cada).

b)Query:
```
SELECT id, name FROM Actor
WHERE gender = 'male'
ORDER BY name DESC;
```
c)Query:
```
SELECT * FROM Actor
WHERE gender = 'male'
ORDER BY salary;
```
d)Query:
```
SELECT * FROM Actor
WHERE gender = 'male'
ORDER BY salary DESC 
LIMIT 3;
```
e)Query:
```
SELECT AVG(salary), gender 
FROM Actor
GROUP BY gender;
```

### Exercicio 6

a)Query:
```
ALTER TABLE Film 
ADD playing_limit_date DATE NOT NULL DEFAULT (CONVERT(CURDATE(), CHAR));
```
b)Query:
```
ALTER TABLE Film
ADD rating rating FLOAT;
```
c)Query:
```
UPDATE Film
SET playing_limit_date = '2020-06-06'
WHERE id = '001';
```
&
```
UPDATE Film
SET playing_limit_date = '2020-08-06'
WHERE id = '002';
```
d)O comando foi executado, mas retornou uma mensagem de que 0 linhas foram atualizadas na tabela Film.

### Exercicio 7

a)Query:
```
SELECT COUNT(*) FROM Film
WHERE rating > 7.5;
```
b)Query:
```
SELECT AVG(rating) FROM Film;
```
c)Query:
```
SELECT COUNT(*) FROM Film
WHERE playing_limit_date > '2020-07-07';
```
d)Query:
```
SELECT COUNT(*) FROM Film
WHERE release_date > CURDATE(); 
```
e)Query:
```
SELECT MAX(rating) FROM Film;
```
f)Query:
```
SELECT MIN(rating) FROM Film;
```

### Exercicio 8

a)Query:
```
SELECT * FROM Film
ORDER BY title ASC;
```
b)Query:
```
SELECT * FROM Film
ORDER BY title DESC
LIMIT 5;
```
c)Query:
```
SELECT * FROM Film
WHERE playing_limit_date >= CURDATE() 
ORDER BY playing_limit_date DESC;
```
d)Query:
```
SELECT * FROM Film
ORDER BY rating DESC
LIMIT 3;
```

## Fim dos Exercícios






































