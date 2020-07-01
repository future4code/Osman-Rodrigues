import {Client} from './models/interfaces';
import {Residence, Commerce, Industry} from './models/subclasses';
import Place from './models/entities/Place';
import {ResidClt} from './models/clients';

//1.
//a) Todas, pois todas as propriedades de uma interface são publicas
/* const residentCtm1: Client = {
  name: 'Marie',
  registrationNumber: 2,
  consumedEnergy: 75,
  calculateBill:()=> 2
} ;
console.log(residentCtm1.name)
console.log(residentCtm1.registrationNumber)
console.log(residentCtm1.consumedEnergy)
console.log(residentCtm1.calculateBill()) */
//2. 
//a) r. não permitiu instanciar, emitindo erro de não ser permitido instanciar classe abstrata 
//const place1 = new Place(50720312);
//b)extender ela a uma subclasse ou mudar de abstract
//3.
/* const residence1 = new Residence(4, 50505505); 
const commerce1 = new Commerce(2, 40404404); 
const indsutry1 = new Industry(10, 10101101);
console.log(residence1.getCep(), residence1.getResidentsQuantity());
console.log(commerce1.getCep(), commerce1.getFloorsQuantity());
console.log(indsutry1.getCep(), indsutry1.getMachinesQuantity()); */
//4.
//a) todas as propriedades e métodos da interface Client e da subclasse Residence, por conta de 
//implementar a primeira e extender a segunda.

//5.
//a) ambas possuem os mesmos atributos e métodos herdados da interface Client e de suas classes
//mães.
//b) possuem tarifa de consumo diferentes e uma propriedade private particular também diferentes

//6.
//a) Industy, pois é um cliente industrial, portanto com características industriais conforme
//prevê a aplicação de Industry;
//b) Client, porque se trata de um cliente da organização modelo;
//c) Para testar as magias da herança e do polimorfismo;

//7.
//r. ver ./models/entities/ClientManager.ts, linha 3.

//8.
// r. ver ./models/entities/ClientManager.ts, linha 17.
