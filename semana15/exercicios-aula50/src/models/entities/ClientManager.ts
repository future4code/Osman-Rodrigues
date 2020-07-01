import {Client}  from '../interfaces';

//7.
class ClientManager{
  private clients: Array<Client>;
  constructor(){
    this.clients = [];
  };

  getClientsQuantity = (): number => this.clients.length;
  registerClient = (client: Client):void =>{}; 
  calculateClientBill = (registrationNumber: number): number =>{
    const matchedClient = this.clients.find(client=> client.registrationNumber === registrationNumber);

    return matchedClient ? matchedClient.calculateBill() : 0;
  };
  //8.
  calculateTotalIncome = ():number =>{
    let totalIncome = 0;
    this.clients.forEach(client =>{
      totalIncome += client.calculateBill();
    });
    return totalIncome;
  };
  removeClient = (registrationNumber: number):void =>{
    const newClients = this.clients.filter(client=> client.registrationNumber !== registrationNumber);
    this.clients = newClients;
  };
};