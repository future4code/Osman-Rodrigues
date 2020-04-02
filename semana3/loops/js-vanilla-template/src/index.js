//
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
//
//Desafios
//1.
/* 
'0'
'00'
'000'
'0000' 
*/
//2.

const start = Number(prompt('Abracadabra! Você está no Jogo do Bruxo.'+('\n')+
'Vamos jogar!'+('\n')+
'Jogador 1, digite um número aleatório:'))
let answer = Number(prompt('Agora, Jogador 2'+('\n')+'Chute um número até acertar:'))
let tries = 1

while(answer != start){
    
    const kicks = 'O número chutado foooi: ' + answer+('\n');
    const dibre = 'Dibrou o Acerto!'+('\n');
    if(answer > start){
        const errouPaMais = kicks+dibre+'O número chutado é maior. Chute um menor.'
        tries ++
        answer = Number(prompt(errouPaMais+('\n')+'Jogador 2'+('\n')+'Chute um número até acertar:'))
    }else{
        const errouPaMenos = kicks+dibre+'O número chutado é menor. Chute um maior.'
        tries++
        answer = Number(prompt(errouPaMenos+('\n')+'Jogador 2'+('\n')+'Chute um número até acertar:'))
    }
} console.log('Acertooou! Tentativas até a mágica acontecer: '+tries)

//3.

const rdStart = Math.floor((Math.random() * 100) + 1)
let answer = Number(prompt('Abracadabra! Você está no Jogo do Bruxo.'+('\n')+
'Vamos jogar!'+('\n')+'Chute um número entre 1 e 100 até acertar:'))
let tries = 1

while(answer != rdStart){
    
    const kicks = 'O número chutado foooi: ' + answer+('\n');
    const dibre = 'Você dibrou o acerto!'+('\n');
    if(answer > rdStart){
        const errouPaMais = kicks+dibre+'O número chutado é maior. Chute pamenos!'
        tries ++
        answer = Number(prompt(errouPaMais+('\n')+'Chute um número até acertar:'))
    }else{
        const errouPaMenos = kicks+dibre+'O número chutado é menor. Chute pamais!'
        tries++
        answer = Number(prompt(errouPaMenos+('\n')+'Chute um número até acertar:'))
    }
} console.log('É Goooool! Você foi abençoado pelo Ronaldinho Gaúcho da Sorte e por isso acertou!'+
('\n')+'Tentativas até a mágica acontecer: '+tries)

//Comentário sobre o código acima: aplicar a alteração foi fácil, porém chegar ao entendimento
//de como ela funciona e pudesse ser aplicada exige um pouco de atenção. Não sei o que poderia
//simplificar mais como foi aplicado acima. 
