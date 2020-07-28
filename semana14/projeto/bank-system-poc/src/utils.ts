import * as model from './models'; 
import * as fs from 'fs';
import * as moment from 'moment';
import { format } from 'path';
import { type } from 'os';

moment.locale('pt-br');

const dbPath: string = 'database.json';
const dbBuffer: Buffer = fs.readFileSync(dbPath);
const dbBufferStr: string = dbBuffer.toString();
const db: any = JSON.parse(dbBufferStr);

export const createNewAccount = (
  name: string, cpf: number , birthDate: string, 
): void =>{
  console.log('Validando informações. Aguarde...');
  if(db.accounts[cpf]){
    console.log(`Já existe usuário(a) registrado com o CPF informado!` );
    return
  };
  if(moment().diff(moment(birthDate),"years") < 18){
    console.log('Usuário(a) menor de 18 anos!');
    return
  };
  console.log('Nova conta sendo registrada. Aguarde...');
  const newUser: model.User ={
    name: name,
    id: cpf,
    birth: moment(birthDate, 'DD/MM/YYYY')
  };
  console.log('Informações pessoais registradas! Aguarde...')
  const newAcc: model.Account = {
    user: newUser,
    balance: 0,
    statement:[]
  };
  console.log('Conta aberta e registrada! Aguarde...')
  const newDbAccs = {...db.accounts, [cpf]: newAcc } 
  const newDb = {...db, accounts: newDbAccs};
  const newDbStr = JSON.stringify(newDb, null, 2);
  fs.writeFileSync(dbPath, newDbStr); 
  console.log(
    `
    Conta bancária criada com sucesso!
    ---------- Informações ------------
    * Usuário: ${newUser.name} *
    * CPF: ${newUser.id} *
    * Nascimento: ${moment(newUser.birth).format('DD [de] MMMM [de] YYYY')} *
    * Idade: ${moment().diff(moment(newUser.birth),"years")} anos *
    * Saldo inicial: R$ ${newAcc.balance.toFixed(2)} *
    * Extrato inicial: ${newAcc.statement.length} movimentações *
    `
  );
};
export const getAccountBalance =(cpf: number): void =>{
  console.log(
    `
    Prezado(a) cliente ${db.accounts[cpf].user.name}
    ----- Informações do seu saldo -----
    * Saldo atual: R$ ${db.accounts[cpf].balance.toFixed(2)} *

    * Transações bancárias até o momento: ${db.accounts[cpf].statement.length} *
    `
  )
};
export const creditAccount =(cpf: number, value: number, description?: string): void =>{
  const today = moment();
  const newBalance: number = db.accounts[cpf].balance + value;
  const newTransaction: model.Transaction ={
    value: value,
    date: moment(today, 'DD/MM/YYYY HH:mm'),
    description: description ? description : 'Crédito em conta'
  };
  const accStatement: model.Transaction[] = db.accounts[cpf].statement;
  accStatement.push(newTransaction);
  const attAccBalance = {
    ...db, accounts: {
      ...db.accounts, [cpf]:{
        ...db.accounts[cpf], balance: newBalance
      }
    }
  };
  const attAccBalanceDbStr = JSON.stringify(attAccBalance, null, 2);
  fs.writeFileSync(dbPath, attAccBalanceDbStr); 
  console.log(
    `
    Crédito realizado com sucesso!
    * Saldo anterior: R$ ${db.accounts[cpf].balance.toFixed(2)} *
    * Valor creditado: R$ ${value.toFixed(2)} *
    * Novo saldo: R$ ${newBalance.toFixed(2)} *
    * ----- Descrição do crédito -----
    ${description && newTransaction.description}
    `
    );
};
export const debtAccount = (
  cpf: number, value: number, description: string, paymentDate?: string
  ): void=>{
    const date: moment.Moment = paymentDate ? 
    moment(paymentDate, 'DD/MM/YYYY HH:mm') : moment(moment(), 'DD/MM/YYYY HH:mm');
    const today = moment();

    if(db.accounts[cpf].balance < value){
      console.log('Saldo insuficiente para realizar a transação!')
      return
    }
    if(today.diff(date, "hours") > 12){
      console.log('Não é possível agendar pagamento futuro em datas passadas.')
      return
    }
    const debtedBalance: number = db.accounts[cpf].balance - value;
    const newTransaction: model.Transaction ={
      value: value,
      date: date,
      description: description
    };

    const accStatement: model.Transaction[] = db.accounts[cpf].statement;
    accStatement.push(newTransaction);
    const attAccBalance = {
      ...db, accounts: {
        ...db.accounts, [cpf]:{
          ...db.accounts[cpf], balance: debtedBalance
        }
      }
    };
    const attAccBalanceDbStr = JSON.stringify(attAccBalance, null, 2);
    fs.writeFileSync(dbPath, attAccBalanceDbStr); 

    console.log(
      `
      Débito realizado com sucesso!
      * Saldo anterior: R$ ${db.accounts[cpf].balance.toFixed(2)} *
      * Valor debitado: R$ ${value.toFixed(2)} *
      * Novo saldo: R$ ${debtedBalance.toFixed(2)} *
      ----- Descrição do débito -----
      ${description}
      `
    );
};
export const accountsTransfer = (
  debtClientCpf: number, creditClientCpf: number, value: number 
): void =>{
  const accToDebt = db.accounts[debtClientCpf];
  const accToCredit = db.accounts[creditClientCpf];

  if(! accToCredit){
    console.log('Cliente beneficiado não encontrado!')
    return
  }
  if(accToDebt.balance < value){
    console.log('Saldo insuficiente para realizar a transação!')
    return
  }

  debtAccount(debtClientCpf, value, `Transferência para ${accToCredit.user.name}`);
  creditAccount(creditClientCpf, value, `Transferência de ${accToDebt.user.name}`);
  console.log(`Transferência realizada com sucesso!`);
};
export const getAllAccounts =(): void=>{
  const allAcc = db.accounts;
  console.log(
    '---------- Lista de TODOS os clientes ----------'
  );
  for(const account in allAcc){
    const client: model.User = allAcc[account].user;
    console.log(
      `
      Cliente: ${client.name}
      CPF: ${client.id}
      Idade: ${moment().diff(moment(client.birth),"years")} anos
      `
    );
  }
};



