import {User} from './models';

const performPurchase = (user: User, value: number) => user || undefined;

export{performPurchase};