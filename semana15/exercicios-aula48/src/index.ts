import JSONFileMng from './utils/JSONFileMng';
import Bank from './utils/Bank';

const bankDbFile = new JSONFileMng('database.json');
const bankDb = bankDbFile.getFile();

const useBank = new Bank();

useBank.newAccount('Julia', 99999999999, '29/06/2000');

const attBankDb = ()=>{
  const newAcc = {
    user: {
      name: "Julia",
      id: 77777777777,
      birth: "1942-11-27T03:00:00.000Z"
    },
    balance: 412.044444444,
    statement: []
  }

  const attDb = {...bankDb, accounts:{
    ...bankDb.accounts, 77777777777: newAcc
  }}
  bankDbFile.attFile(attDb)
  console.log('Banco atualizado com sucesso!')
};