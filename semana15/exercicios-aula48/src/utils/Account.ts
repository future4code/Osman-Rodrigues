import moment from 'moment';
import JSONFileMng from './JSONFileMng';

const dbFile = new JSONFileMng('database.json');
const db = dbFile.getFile();

class Account{
  private name: string
  private id: number
  private cpf: number
  private birth: moment.Moment
  private balance: number
  private transations: Object[]
  
  constructor(
    userName: string, userCpf: number, birthDate: string
    ){
      this.name = userName
      this.id = userCpf
      this.cpf = userCpf
      this.birth = moment(birthDate, 'DD/MM/YYYY')
      this.balance = 0
      this.transations = []
  };

  public getUserAcc =()=>{
   const account = {
      user: {
        name: this.name,
        cpf: this.cpf,
        birth: this.birth
      },
      balance: this.balance,
      transations: this.transations
    }
    return account
  };

  public getBalance =()=> this.balance;

  public addBalance = (value: number, description?: string) =>{
    const today = moment();
    const newBalance: number = db.accounts[this.id].balance + value;
    const newTransaction = {
      value: value,
      date: moment(today, 'DD/MM/YYYY HH:mm'),
      description: description ? description : 'Crédito em conta'
    };
    const accStatement = db.accounts[this.cpf].statement;
    accStatement.push(newTransaction);
    const attAccBalance = {
      ...db, accounts: {
        ...db.accounts, [this.cpf]:{
          ...db.accounts[this.cpf], balance: newBalance
        }
      }
    };
    dbFile.attFile(attAccBalance)
    console.log(
      `
      Crédito realizado com sucesso!
      * Saldo anterior: R$ ${db.accounts[this.cpf].balance.toFixed(2)} *
      * Valor creditado: R$ ${value.toFixed(2)} *
      * Novo saldo: R$ ${newBalance.toFixed(2)} *
      * ----- Descrição do crédito -----
      ${description && newTransaction.description}
      `
      );
    }
};
export default Account