/* 
Interpretacao de Codigo
1. 
O código recebe uma resposta do usuário como const que é convertida para o tipo Number
e, logo após, passa por um bloco de condicionantes onde é comparada com o resto 0 de 
sua divisao por 2, ou seja, se a mesma é par, e assim emitir a mensagem 'Passou no teste.'.
Senão, se for ímpar (sem resto 0), emite mensagem 'Não passou no teste.'. 

2.
a. Para consultar preço de frutas.
b. "O preço da fruta Maçã é R$ 2.25"
c. O preço total seria R$ 24,55.
d. O preço da fruta  Pêra  é  R$  5.5

3.
A mensagem será 'Número 1 é menor ou igual ao 2!', pois a let mensagem está dentro do bloco
pai e sendo modificada ao longo do bloco filho de condicionantes, mudando de escopo para escopo.
*/
//
//Exercícios de escrita de código
//
//4.
//a.
const in1 = Number(prompt('Insira um número: '))
const in2 = Number(prompt('Insira outro número: '))

if(in1>in2){
    console.log('Seus números em ordem descrescente: '+in1+','+in2)
}else{
    console.log('Seus números em ordem descrescente: '+in2+','+in1)
}
//Ao inserir dois números inguais, a mensagem 'Seus números em ordem descrescente: 100,100'
//foi emitida.

//b. 
const in1 = Number(prompt('Insira o primeiro número: '))
const in2 = Number(prompt('Insira o segundo número: '))
const in3 = Number(prompt('Insira o último número: '))

if(in1>in2 && in1>in3 && in2>in3){
    console.log('Seus números em ordem descrescente: '+in1+','+in2+','+in3)
}else if(in1>in2 && in1>in3 && in2<in3){
    console.log('Seus números em ordem descrescente: '+in1+','+in3+','+in2)
}else if(in1<in2 && in1<in3 && in2>in3){
    console.log('Seus números em ordem descrescente: '+in2+','+in3+','+in1)
}else if(in1<in2 && in1<in3 && in2<in3){
    console.log('Seus números em ordem descrescente: '+in3+','+in2+','+in1)
}else if(in2>in1 && in2>in3 && in1>in3){
    console.log('Seus números em ordem descrescente: '+in2+','+in1+','+in3)
}else{
    console.log('Seus números em ordem descrescente: '+in3+','+in1+','+in2)
}

/*Ao inserir dois números inguais, a mensagem 'Seus números em ordem descrescente: 300,300,300'
foi emitida.*/

//c.
let in1 = Number(prompt('Insira o primeiro número: '))
let in2 = Number(prompt('Insira o segundo número: '))
let in3 = Number(prompt('Insira o último número: '))
 
if(in1>in2 && in1>in3 && in2>in3){
    console.log('Seus números em ordem descrescente: '+in1+','+in2+','+in3)
}else if(in1>in2 && in1>in3 && in2<in3){
    console.log('Seus números em ordem descrescente: '+in1+','+in3+','+in2)
}else if(in1<in2 && in1<in3 && in2>in3){
    console.log('Seus números em ordem descrescente: '+in2+','+in3+','+in1)
}else if(in1<in2 && in1<in3 && in2<in3){
    console.log('Seus números em ordem descrescente: '+in3+','+in2+','+in1)
}else if(in2>in1 && in2>in3 && in1>in3){
    console.log('Seus números em ordem descrescente: '+in2+','+in1+','+in3)
}else if(in3>in1 && in3>in2 && in1>in2) {
    console.log('Seus números em ordem descrescente: '+in3+','+in1+','+in2)
}else if(in1===in2 && in1===in3 && in2===in3){
        console.log('Você inseriu números iguais! Insira apenas números diferentes.')
}else{
    console.log('Você inseriu números iguais ou outros caracteres! Insira apenas números diferentes.')
}
