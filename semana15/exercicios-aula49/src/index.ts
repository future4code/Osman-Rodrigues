import {User, Customer, Employee, Seller} from './models/classes';

//instancias
const user1 = new User('usr1', 'usr1@user.com', 'John', 'jhon1');
const customer1 = new Customer('cstr1', 'cstr1@customer.com', 'Marie', 'marie1', 'Visa');
const employee1 = new Employee('epy1', 'Jimmy', 'epy1@employee.com', 'jimmy1', 1500, '30/06/2020');
const seller1 = new Seller('slr1', 'Foxie','slr1@seller.com', 'foxie1', 2500, '30/06/2020');
const seller2 = new Seller('slr2', 'Katy','slr2@seller.com', 'katy2', 2500, '25/06/2020');

//1. 
//a) Não, pois é um atributo privado e sem nenhum getter relacionado.
//b) 1 vez.

//2.
//a) 1 vez.
//b) 2 vezes, pois a primeira vez por conta da instancia user1 que cria diretamente na superclasse
// e a segunda vez por conta do super utilizado na subclasse da instancia customer1

//3.
/* console.log(
  customer1.getEmail(), customer1.getId(), customer1.getName(),
  customer1.purchaseTotal, customer1.getCreditCard(),
); */
//4.
customer1.introduceYourself()

//5. ver em models/classes.ts, linha 35

//6. 
//a) 3 vezes.
//b) r. nome, id, email e data de admissão
console.log(
  employee1.getAdmissionDate(), employee1.getBaseSalary(), employee1.getEmail(),
  employee1.getId(), employee1.getName(), employee1.calculateTotalSalary()
);
//7. ver em models/classes.ts, linha 72

//8. 
//a) todos nome, id, email, senha, salário base e data de admissão
//b) r. todos, pois não houve restrição alguma
/* console.log(seller1.getName())
console.log(seller1.getEmail())
console.log(seller1.getId())
console.log(seller1.getAdmissionDate())
console.log(seller1.getBaseSalary())
console.log(seller1.calculateTotalSalary()) */

//9. r. sim, pois dei console.log na propriedade após acrescer o valor da mesma, tudo no mesmo método
//seller1.setSalesQuantity(100);

//10. 
//a)r. os valores 50 e 3150, correspondentes a quantidade de vendas e ao salário total da Katy
seller2.setSalesQuantity(50);
const totalSalary = seller2.calculateTotalSalary();
console.log(totalSalary);

//11.
