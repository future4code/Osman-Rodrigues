import moment from 'moment';
import JSONFileMng from './JSONFileMng';
import Transaction from './Transaction';

const dbFile = new JSONFileMng('database.json');
const db = dbFile.getFile();

class Account{
  private name: string
  private id: number
  private cpf: number
  private birth: moment.Moment
  private balance: number
  private transactions: Object[]
  
  constructor(
    userName?: string, userCpf?: number, birthDate?: string
    ){
      this.name = userName ? userName : ''
      this.id = userCpf ? userCpf : 0
      this.cpf = userCpf ? userCpf : 0
      this.birth = birthDate ? moment(birthDate, 'DD/MM/YYYY') : moment()
      this.balance = 0
      this.transactions = []
  };

  public getUserAcc =()=>{
   const account = {
      user: {
        name: this.name,
        cpf: this.cpf,
        birth: this.birth
      },
      balance: this.balance,
      transactions: this.transactions
    }
    return account
  };

  public getBalance =(userCpf: number)=> console.log(
      `
      Seu saldo é:
      * R$ ${db.accounts[userCpf].balance.toFixed(2)} *
      `
    );

  public addBalance = (userCpf: number, value: number, description?: string) =>{
    if(! db.accounts[userCpf]){
      console.log('Não há conta registrada no CPF informado.') 
      return
    };
    const newBalance: number =db.accounts[userCpf].balance + value;
    const newTransaction = new Transaction(
      value,
      description ? description : 'Crédito em conta'
    );
    const accTransacitons = db.accounts[userCpf].transactions;
    accTransacitons.push(newTransaction);
    const attAccBalance = {
      ...db, accounts: {
        ...db.accounts, [userCpf]:{
          ...db.accounts[userCpf], balance: newBalance
        }
      }
    };
    dbFile.attFile(attAccBalance)
    console.log(
      `
      Crédito realizado com sucesso!
      * Saldo anterior: R$ ${db.accounts[userCpf].balance.toFixed(2)} *
      * Valor creditado: R$ ${value.toFixed(2)} *
      * Novo saldo: R$ ${newBalance.toFixed(2)} *
      * ----- Descrição do crédito -----
      ${description && newTransaction.description}
      `
      );
    }
};
export default Account