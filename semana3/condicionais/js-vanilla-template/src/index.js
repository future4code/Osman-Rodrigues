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
//5.
//a. https://docs.google.com/presentation/d/1DiXPeu_vfPns0wbd80qJuvYjM2GeC3iCuxfTg91Xhm8/edit?usp=sharing
//b. 
const q1 = prompt('Classificação de animais! Responda sempre com s (sim) ou n (não).'+('\n')+'O animal possui ossos formando um esqueleto?[s/n]')
let q2 = null
let q3 = null
let q4 = null
let q5 = null
let q6 = null

if(q1 === 's'){
    q2 = prompt('Possui pêlos?[s/n]')
    if(q2 ==='s'){
         q3 = prompt('É racional?[s/n]')
         if(q3==='s'){
             console.log('É um ser humano')
         }else{
            console.log('É um animal não-humano')
         }
    }else if(q2!='s'){
        q4 = prompt('Possui penas?[s/n]')
        if (q4=== 's'){
            console.log('É uma ave')
        }else if (q4!= 's'){
            q5 = prompt('É terrestre?[s/n]')
            if (q5 != 's'){
                console.log('É um peixe')
            }else if(q5 === 's'){
                q6 = prompt('Este animal passa por fase aquática em seu desenvolvimento?[s/n]')
                if (q6 === 's'){
                    console.log('É um anfibio')
                }else{
                    console.log('É um reptil')
                }
            }
        }
    }
}else{
    console.log('É um invertebrado')
}