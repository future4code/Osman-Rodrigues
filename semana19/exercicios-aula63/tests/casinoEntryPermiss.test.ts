import {casinoEntryPermiss} from '../src/utils';
import {CasinoCustomer, Casino, Country, Nacionality} from '../src/models';

describe('casinoEntryPermiss', ()=>{
  test('Should be contain at least 2 allowed customers and 1 not allowed customer', ()=>{
    const casino: Casino ={
      name: 'CasinoEUA',
      local: Country.EUA,
    };
    const customers: CasinoCustomer[] = [
      {name: 'Jofrey', nacionality: Nacionality.BR, age: 19},
      {name: 'John', nacionality: Nacionality.EUA, age: 21},
      {name: 'Melissa', nacionality: Nacionality.BR, age: 19},
      {name: 'Ana', nacionality: Nacionality.EUA, age: 21} 
    ];

    const permission = casinoEntryPermiss(casino, customers);

    expect(permission.notAllowed.length).toBeGreaterThan(1)
    expect(permission.allowed.length).toBeGreaterThanOrEqual(2)
  });
});

/*
{name: 'Jofrey', nacionality: Nacionality.BR, age: 19}
{name: 'John', nacionality: Nacionality.EUA, age: 21},
{name: 'Melissa', nacionality: Nacionality.BR, age: 19},
{name: 'Ana', nacionality: Nacionality.EUA, age: 21} 
*/