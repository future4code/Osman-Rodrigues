import moment from 'moment';
moment.locale('pt-br');
const today = moment();

class Transaction{
  private value: number
  private date: moment.Moment
  public description: string

  constructor(
    trsactValue: number, trsactDscpt: string 
    ){
      this.value = trsactValue
      this.date = moment(today, 'DD/MM/YYYY HH:mm')
      this.description = trsactDscpt
  }
}
export default Transaction