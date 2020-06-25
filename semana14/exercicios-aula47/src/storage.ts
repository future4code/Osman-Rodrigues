import * as moment from 'moment';

export type User = {
  id: string;
	name: string;
	email: string;
};
export type newsBody = {
  title: string,
  content: string,
  date: number
};