import * as moment from 'moment';
import { type } from 'os';

export type Subscriber = {
  id: string;
	name: string;
	email: string;
};
export type newSubs = {
  name: string;
	email: string;
};
export type newsBody = {
  title: string,
  content: string,
  date: number
};
export type notificationBody = {
  subscriberId: string,
  message: string
};