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

a)
