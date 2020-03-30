//1.Leia o código abaixo. Indique todas as mensagens impressas no console.

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado) //R: a. false  

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado) //R: b. false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado) //R: c. true

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado) //R: d. false

console.log("e. ", typeof resultado) //R: e. "boolean"

//2. Leia o código abaixo.

let array
console.log('I. ', array)

array = null
console.log('II. ', array)


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)

let i = 0
console.log('IV. ', array[i], " e ", array[i+1])

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i])

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC)

/* a. O que é `array` e como se declara em `JS`?

R: Um array é um arranjo de dados e pode ser declaro pela sintaxe 'array = [dado1, dado2,...,dadoN]'.

b. Qual o index inicial de um `array`?

R: [0]

c. Como se determinar o tamanho do `array`?

R: 'array.lenght'

d. Indique todas as mensagens impressas no console.

R: I. undefined, II. null, III. 11, IV. 3 e 4, V. 19 e 9 , VI. 3 , VII 2.  

*/
//
//Escrita de Código
//

//Formulas

/* const k = (f-32)*5/9 + 273.15
const f = (c)*9/5+32 */

//1.
//a.
let f = 77
const k = (f-32)*5/9 + 273.15
console.log('a. ' +k+'K')

//b.
let c = 80
const f = (c)*9/5+32
console.log('b. ' +f+'ºF')

//c.
c = 30
const f = (c)*9/5+32
console.log('c. '+f+'ºF')

//d.
let c = Number(prompt('Insira o valor em Graus Celsius(ºC'))
const f = (c)*9/5+32
console.log('d. '+f+'ºF')

//2.
const q1 = 'Qual o seu Pokemon favorito?'
const pq1 = prompt(q1)
console.log('1. '+q1+('\n')+'Resposta: '+pq1)

const q2 = 'Qual o seu treinador Pokemon favorito?'
const pq2 = prompt(q2)
console.log('2. '+q2+('\n')+'Resposta: '+pq2)

const q3 = 'Qual o seu Tipo Pokemon favorito?'
const pq3 = prompt(q3)
console.log('3. '+q3+('\n')+'Resposta: '+pq3)

const q4 = 'Qual a cidade de Kanto que você mais gosta?'
const pq4 = prompt(q4)
console.log('4. '+q4+('\n')+'Resposta: '+pq4)

const q5 = 'Um Mew e um Mewtwo, os dois à 80km, quem é mais forte?!'
const pq5 = prompt(q5)
console.log('5. '+q5+('\n')+'Resposta: '+pq5)

//3.
//a.
const consumo = prompt('Insira o consumo de quillowatt-hora da sua residencia:')
let desconto = 0
desconto = prompt('Caso haja, insira o valor de desconto em percentual(%):')
const gasto = (consumo * 0.05) - ((desconto/100)*(consumo*0.05))
console.log('Seu consumo representa R$ '+gasto+' em gasto com Energia Elétrica, com desconto aplicado de '+desconto+'% no gasto total.')

/* 
Desafio

 */

 //1.
 //a. 
 const lib = prompt('Insira a quantidade em Libras(lb): ')
 const convlib = lib*0.45
 console.log(lib+'lb equivalem a '+convlib+ 'kg.')
 //b. 
 const oz = prompt('Insira a quantidade em Onça(oz): ')
 const convoz = oz*0.28
 console.log(oz+'oz equivalem a '+convoz+'kg.')
 //c. 
 const mi = prompt('Insira a quantidade em Milhas(mi): ')
 const convmi = mi*1609
 console.log(mi+'mi equivalem a '+convmi+'m.')
 //d. 
 const ft = prompt('Insira a quantidade em Pés(ft): ')
 const convft = ft*5280
 console.log(ft+'ft equivalem a '+convft+'m.')
 //e. 
 const gal = prompt('Insira a quantidade em Galão(gal): ')
 const convgal = gal*3.7
 console.log(gal+'gal equivalem a '+convgal+' l.')
 //f. 
 const xic = prompt('Insira a quantidade de Xicaras: ')
 const convxic = xic*0.25
 console.log(xic+'xic equivalem a '+convxic+' l.')