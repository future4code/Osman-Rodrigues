### Exercício 1

a) O id, name e gender foram declarados como VARCHAR pois podem ser uma sequencia de caracteres diversos e de tamanho máximo 255, sendo, inclusive, o name e gender resqueridos obrigatoriamente, não podendo serem NULL. O birth_date como corresponde a uma data foi declarado do tipo date, sendo igualmente obrigatório e por isso não nulo.

b) O SHOW DATABASES mostrou os bancos disponíveis do servidor remoto e o SHOW TABLES mostrou as tabelas existentes nestes. 

c) O DESCRIBE Actor mostrou os campos/colunas presentes na tabela em questão, apresentando type, se é null, quais são key e os valores default, além de informações extras caso tivessem.

### Exercício 2

a) Query:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```
b) 
Msg de erro: "Entrada duplicada '002' pra a chave 'PRIMARY'". 
Justificativa: O erro ocorreu pelo fato da chave primária não permitir ter dois valores iguais. Só são permitidos valores únicos para esse tipo de dado.

c) 
Msg de erro: "Quantidade de colunas não se relaciona com a quantidade na linha 1";
Justificativa: a query sugerida não incluiu na lista as colunas birth_date e gender;
Query:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
d) 
Msg de erro: "Campo 'name' não tem um valor padrão";
Justificativa: por omitir a coluna name e o valor correspondente ao nome no comando VALUE, o gerenciador atribui automaticamente um valor padrão caso este seja setado, caso contrário retorna o corrente erro;
Query:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Ariclenes Venâncio Martins",
  600000,
  "1930-03-29", 
  "male"
);
```
e) 
Msg de erro: "Trucamento de dados: Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1";
Justificativa: a query sugerida informa o valor de data como operação matemática e não como string no padrão 'YYYY-MM-DD';
Query:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```
f)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Egízio Antônio Calloni",
  840275.50,
  "1961-12-06", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Adriana Esteves Agostinho",
  920000,
  "1969-12-15", 
  "female"
);
```

### Exercício 3

a) 
```
SELECT * FROM Actor WHERE gender = "female" ;
```
b)
```
SELECT salary FROM Actor WHERE name = "Tony Ramos";
```
c)Explicação: mostra a tabela sem nenhuma informação além da primeira linha com a informação dos campos/colunas.

d)
```
SELECT * FROM Actor WHERE salary <= 500000;
```
e) 
Msg de erro: "Coluna 'nome' desconhecida no 'campo de lista'";
Query:
```
SELECT id, nome from Actor WHERE id = "002"
```

### Exercício 4

a)Explicação: a query instrui que selecione todas as colunas da tabela Actor as quais os valores de name comecem com A ou J e os valores de salary é inferior a 300 mil;

b) 
Query:
```
SELECT * FROM Actor 
WHERE name NOT LIKE "A%" AND salary BETWEEN 350000 AND 900000;
```
c)
Query:
```
SELECT * FROM Actor 
WHERE name LIKE "%G%" OR name LIKE "%g%"; 
```
d)
Query:
```
SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
AND salary BETWEEN 350000 AND 900000;
```
### Exercício 5

a)
Explicação: a query abaixo cria a tabela Film a qual possui quatro colunas/campos correspondentes as informações de um filme: id(identificador único), name (nome do filme), synopsis (sinopse), release_date (data de lançamento) e rating (avaliação), sendo todos os campos obrigatórios (não nulos); 
Query:
```
CREATE TABLE Film (
id VARCHAR(255) PRIMARY KEY, 
name VARCHAR(255) NOT NULL,
synopsis TEXT(355) NOT NULL,
release_date DATE NOT NULL,
rating FLOAT NOT NULL
);
```
b)
Query:
```
INSERT INTO Film (id, title, synopsis, release_date, rating)
VALUES (
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
"2006-01-06",
7
);
```
c)
Query:
```
INSERT INTO Film (id, title, synopsis, release_date, rating)
VALUES (
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.",
"2012-12-27",
10
);
```
d)
Query:
```
INSERT INTO Film (id, title, synopsis, release_date, rating)
VALUES (
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);
```
e)
Query:
```
INSERT INTO Film (id, title, synopsis, release_date, rating)
VALUES (
	"004",
	"Lisbela e o Prisioneiro",
	"A jovem Lisbela adora ir ao cinema e vive sonhando com os galãs de Hollywood dos filmes que assiste. Leléu é um malandro conquistador, que em meio a uma de suas muitas aventuras chega à cidade da moça. Após se conhecerem eles logo se apaixonam, mas Lisbela está de casamento marcado. Em meio às dúvidas e aos problemas familiares que a nova paixão desperta, há ainda a presença de um matador que está atrás de Leléu, devido a ele ter se envolvido com sua esposa no passado.",
	"2003-08-22",
	9.6
);
```

### Exercício 6

a)
Query:
```
SELECT id, title, rating FROM Film 
WHERE id = '004';
```
b)
Query:
```
SELECT * FROM Film 
WHERE title = 'Lisbela e o Prisioneiro';
```
c)
Query:
```
SELECT id, title, synopsis FROM  Film
WHERE rating >= 7;
```

### Exercício 7

a)
Query:
```
SELECT * FROM Film
WHERE title LIKE "%vida%";
```
b)
Query:
```
SELECT * FROM Film
WHERE title LIKE "%prisioneiro%" OR synopsis LIKE "%prisioneiro%";
```
c)
Query:
```
SELECT * FROM Film
WHERE release_date < "2020-07-06";
```
d)
Query:
```
SELECT * FROM Film
WHERE release_date < "2020-07-06" AND 
title LIKE "%prisioneiro%" OR synopsis LIKE "%prisioneiro%" AND 
rating >= 7;
```

## Fim do Exercício
