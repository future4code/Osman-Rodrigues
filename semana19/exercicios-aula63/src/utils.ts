import {User, Casino, CasinoCustomer, Country, Nacionality} from './models';

const performPurchase = (user: User, value: number) =>{
 return user.balance >= value ? 
  {
    name: user.name,
    balance: user.balance - value
  } 
  : undefined;
};

const casinoEntryPermiss = (
  casino: Casino, customers: CasinoCustomer[]
  ): {allowed: CasinoCustomer[], notAllowed: CasinoCustomer[]} =>{
    switch (casino.local) {
      case Country.EUA:
        const allowedNA = customers.filter(
          customer => customer.age >= 21
        );
        const notAllowedNA = customers.filter(
          customer => customer.age < 21
        );
        return {allowed: allowedNA, notAllowed: notAllowedNA};

      case Country.BR:
        const allowedBR = customers.filter(
          customer => customer.age >= 18
        );
        const notAllowedBR = customers.filter(
          customer => customer.age < 18
        );
        return {allowed: allowedBR, notAllowed: notAllowedBR};
    }
};



export{performPurchase, casinoEntryPermiss};