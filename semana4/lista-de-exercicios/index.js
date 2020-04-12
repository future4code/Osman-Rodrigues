//
//1ª Parte do Projeto, da semana 4
// 
/* Exercícios de leitura de código

1.
O que o código faz: a conversão de R$ para US$ por uma função que recebe como parametro o valor em R$; 

Como faz: a partir do input de cotação do US$ (solicitado ao usuário), a função retorna o resultado da multiplicação
entre essa cotação e o valor recebido como parametro;

Valor que será impresso no console: 
R$100*cotação em US$ . 

2.
O que o código faz: calcula o montante de diferentes tipos de investimentos mediante um valor estipulado;

Como faz: a partir de uma função que recebe como parametros o tipo de investimento desejado e o valor aplicado,
o tipo repassado passa por validação em condicional switch case que atribui taxa relativa a cada modalidade, sendo
esta multiplicada ao valor aplicado. Caso não tenha sido inserido um tipo de investimento previsto, é rerotnado alerta,
caso inserido, é retornado o valor decorrente da multiplicação valor pela taxa;

Valor que será impresso no console: 
165
'TIPO DE INVESTIMENTO INFORMADO INCORRETO!' . 

3.
O que o código faz: cria dois arrays diferentes de números a partir de um terceiro array;

Como faz: após declaração dos três arrays (um de referencia e dois vazios), é aplicado um loop for of para iterar 
o array de referencia sendo separados os números pares e impares mediante validação do condicional if else, sendo
o número verificado adicionado pelo metodo .push(), caso seja par, adiconado ao array1, caso impar ao array2;

Valor que será impresso no console: 
'Quantidade total de números 14'
6
7 .

4.
O que o código faz: atribui valores correspondentes aos itens de um array de números à duas variaveis pré-definidas;

Como faz: a partir de um loop for of, responsável por iterar o array numeros, o qual valida por meio do condicional
if else se o valor do item é maior ou menor que o valor de cada variavel. Caso menor que o valor da variavel numero1,
o valor do item será atribuido a mesma, caso maior que o valor da variavel numero2, será atribuido a esta;

Valor que será impresso no console:
1590
1590 . */
//
/* Exercícios de lógica de programação

1 
a. false 
b. false 
c. true
d. true
e. true
*/
//2 
//O código não funciona, pois entrará em loop infinito uma vez que o valor de quantidadeDeNumerosPares não foi declarado.
//Correção da Implementação:
const sequenciaDePares = (quantidade) =>{
    let quantidadeDeNumerosPares = quantidade;
    let i = 0;
    while(i <= quantidadeDeNumerosPares) {
        console.log(i*2)
        i++
    }
}
//
//3.
const nomearTriangulo = (tamanhoLadoA,tamanhoLadoB, tamanhoLadoC) =>{
    if(
        typeof(tamanhoLadoA) !== 'number'||
        typeof(tamanhoLadoB) !== 'number'||
        typeof(tamanhoLadoC) !== 'number'
    ){alert('Insira apenas números!')}
    else if(tamanhoLadoA === tamanhoLadoB && tamanhoLadoA === tamanhoLadoC){
        console.log('Triangulo Equilátero')
    }else if(tamanhoLadoA !== tamanhoLadoB && tamanhoLadoA !== tamanhoLadoC){
        console.log('Triangulo Escaleno')
    }else{
        console.log('Triangulo Isósceles')
    }
}
//
//4.
const compararEstesNumeros = (numero1, numero2) =>{
    const infos = ['O maior é: ','Os números são iguais',' é divisível por ',
    ' não é divisível por ','A diferença entre eles é ',]

    if(
        typeof(numero1) !== 'number'||
        typeof(numero2) !== 'number'
    ){alert('Insira apenas números!')}
    else{
        if(numero1 > numero2){console.log(infos[0]+numero1)}
        else if(numero1 < numero2){console.log(infos[0]+numero2)}
        else if(numero1 === numero2){console.log(infos[1])};

        if(numero1%numero2===0){console.log(numero1+infos[2]+numero2)}
        else if(numero1%numero2!==0){console.log(numero1+infos[3]+numero2)};

        if(numero2%numero1===0&&numero2 === numero1){}
        else if(numero2%numero1===0){console.log(numero2+infos[2]+numero1)}
        else if(numero2%numero1!==0){console.log(numero2+infos[3]+numero1)};

        if(numero1-numero2>0){console.log(infos[4]+(numero1-numero2))}
        else if(numero1-numero2<0){console.log(infos[4]+(numero2-numero1))}
        else if(numero1 - numero2 === 0){console.log(infos[4]+0)}
    }   
}
//
//2ª Parte do Projeto, da semana 4
//
// Exercícios de Função 
//1.
const mostrarOsVices = (array) =>{
    const viceMaior = array.sort(function(a,b){return b-a})[1];
    const viceMenor = array.sort(function(a,b){return a-b})[1];
    console.log(`O segundo maior número do array é ${viceMaior}`)
    console.log(`O segundo menor número do array é ${viceMenor}`)
}

//2.
const saudaçãoLabenu = () =>{
    alert('Hello Labenu_')
}

//Exercícios de Objeto
//1.
/* Array -
Explicação: é um conjunto de dados que podem ser de diversos tipos e natureza, dispostos de forma sequencial;
Quando podemos utilizar: para guardar dados de diversos tipos e natureza;
Quando devemos utilizar: na organização e estruturação de dados e/ou informações do mesmo tipo.

Objetos -
Explicação: é um tipo de dado primário que armazena outros dados, dispostos de forma estruturada e que se 
relacionam de forma a informar sobre o dado principal. Estes são de acesso criptografado, necessitando de
uma chave para acessar seu valor;
Quando podemos utilizar: para guardar dados e/ou informações;
Quando devemos utilizar: para guardar dados e/ou informações que se relacionem para informar sobre um dado 
principal. */

//2.
const criaRetangulo = (largura, altura) =>{
    const meuRetangulo = {
        largura: largura,
        altura: altura,
        perimetro: 2*(largura+altura),
        area: largura*altura
    }
    return meuRetangulo
}

//3.
const chamadaDoMeuFilmeFavorito = () =>{

    const meuFilmeFavorito = {
        titulo: 'O Último Samurai',
        ano: '2003',
        diretor:'Edward Zwick',
        elenco: ['Tom Cruise', 'Ken Watanabe', 'Koyuki', 'Hiroyuki Sanada', 'Timothy Spall']
    };
    console.log(`Venha assistir ao filme ${meuFilmeFavorito.titulo}, de ${meuFilmeFavorito.ano}, `+
    `dirigido por ${meuFilmeFavorito.diretor} e estrelado por ${meuFilmeFavorito.elenco}.`);

    return meuFilmeFavorito
}

//4.
const anonimizarPessoa = () =>{

    const infosPessoaQualquer = {
        nome: 'Ash Ketchum',
        idade: 10,
        email: 'ketchum.ash@gmail.com',
        endereco: 'Pallet, Kanto - JPN'
    };

    infosPessoaQualquer.nome = 'ANÔNIMO';
    infosPessoaQualquer.email = '*****'+'@'+infosPessoaQualquer.email.split('@')[1];
    if(infosPessoaQualquer.idade<18){
        infosPessoaQualquer.idade = '**'
    }

    return infosPessoaQualquer
}