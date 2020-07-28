import {performPurchase} from '../src/utils';
import {User} from '../src/models';

describe('perforPurchase', ()=>{
  test('Should be return a new user', ()=>{
    const user: User = {name: 'Hendrix', balance: 200}
    const newUser = performPurchase(user, 200);

    expect(newUser).not.toEqual(undefined);
  });
});