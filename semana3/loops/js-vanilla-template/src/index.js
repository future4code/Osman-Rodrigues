//Exercícios de interpretação de código
/*1.
O código executa a soma do valor da let sum ao seu próprio valor
inicial, acrescido do valor da let i, até que as condições máximas 
do loop for sejam atendidas. O resultado ao final é '105'.
//
2. 
a. Acrescenta ao final do array determinado valor.
b. [10, 15, 25, 30]
c. [12, 15, 18, 21, 27, 30] e [12]*/
//
//Exercício de escrita de código
//3.
//a.
let array = [10, 20, 30, 40, 50]
let maior = array[0]
let menor = array[0]

for(let i=0; i<array.length; i++){
    const mn = array[i]
    if(mn > maior){
        maior = mn
    }else if(mn < menor){
        menor = mn
    }else{
        maior = mn
        menor = mn
    }
}console.log('O maior número é '+maior+' e o menor é '+menor)

//b. 
let array2 = []
for(const item of array){
    array2.push(item/10)
} console.log(array2)

//c.
let array3 = []
for(const item of array){
    if (item%2===0){
        array3.push(item)
    }
} console.log(array3)

//d.
let array4 = []
for(let i=0; i<array.length; i++){
    array4.push('O elemento do index '+i+' é '+array[i]+('\n'))
}console.log(array4)