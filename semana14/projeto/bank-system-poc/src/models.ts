import * as moment from 'moment';

export type User ={
  name: string,
  id: number,
  birth: moment.Moment
};
export type Transaction ={
  value: number,
  date: moment.Moment,
  description: string
};
export type Account ={
  user: User,
  balance: number,
  statement: Transaction[]
}