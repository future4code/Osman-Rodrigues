import moment from 'moment';
import JSONFileMng from './JSONFileMng';
import Account from './Account';

const dbFile = new JSONFileMng('database.json');
const db = dbFile.getFile();
const getAcc = new Account;
moment.locale('pt-br')


class Bank{

  /* private name: string
  private id: number
  private birth: moment.Moment
  private balance: number
  private statement: Object[]

  constructor(
    userName: string, userCpf: number, birthDate: string
    ){
      this.name = userName
      this.id = userCpf
      this.birth = moment(birthDate, 'DD/MM/YYYY')
      this.balance = 0
      this.statement = []
  }; */

  public newAccount = (
    userName: string, userCpf: number, birthDate: string
  )=>{

    console.log('Validando informações. Aguarde...');
    if(db.accounts[userCpf]){
      console.log(`Já existe usuário(a) registrado com o CPF informado!` );
      return
    };
    if(moment().diff(moment(birthDate, 'DD/MM/YYYY'),"years") < 18){
      console.log('Usuário(a) menor de 18 anos!');
      return
    };
    console.log('Nova conta sendo registrada. Aguarde...');
    const acc = new Account(userName, userCpf, birthDate);
    const userAcc = acc.getUserAcc();
    const user = userAcc.user;
    console.log('Conta criada com sucesso! Aguarde...')

    const newDbAccs = {
      ...db.accounts, [user.cpf]: userAcc
    };
    const newDb = {...db, accounts: newDbAccs};
    dbFile.attFile(newDb);

    console.log(
      `
      Conta bancária criada com sucesso!
      ---------- Informações ------------
      * Usuário: ${user.name} *
      * CPF: ${user.cpf} *
      * Nascimento: ${moment(user.birth).format('DD [de] MMMM [de] YYYY')} *
      * Idade: ${moment().diff(moment(user.birth),"years")} anos *
      * Saldo inicial: R$ ${userAcc.balance.toFixed(2)} *
      * Extrato inicial: ${userAcc.transactions.length} movimentações *
      `
    );
  };
  public getUserBalance = (userCpf: number) => getAcc.getBalance(userCpf);
  public creditUserAccount = (
    userCpf: number, value: number, description?: string
  )=> getAcc.addBalance(userCpf, value, description);
  public getAllAcc = () =>{
    console.log(
      '---------- Registro Geral de Clientes ----------'
    );
    for(const account in db.accounts){
      const userAcc = db.accounts[account];
      console.log(
        `
        Cliente: ${userAcc.user.name}
        CPF: ${userAcc.user.cpf}
        Idade: ${moment().diff(moment(userAcc.user.birth),"years")} anos
        Saldo: R$ ${userAcc.balance.toFixed(2)}
        Transações: ${userAcc.transactions.length}
                  - 
        `
      );
    };
  };
  public findByCpfOrName = (userInfo: number | string)=>{

    let findCounter = 0;
    for(const account in db.accounts){
      const userAcc = db.accounts[account];
      if(
        userInfo === Number(account) || 
        userAcc.user.name.includes(userInfo)
        ){
        findCounter ++
        console.log(
          `
          Cliente: ${userAcc.user.name}
          CPF: ${userAcc.user.cpf}
          Idade: ${moment().diff(moment(userAcc.user.birth),"years")} anos
          Saldo: R$ ${userAcc.balance.toFixed(2)}
          Transações: ${userAcc.transactions.length}
          `
        );
      }
    }
    findCounter === 0 ? console.log('Nenhum registro encotrado.') :
    console.log(`${findCounter} registro(s) encontrado(s).`)
  };
}
export default Bank