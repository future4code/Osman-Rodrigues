### Exercicios aula 63

## 1.
a)code:
~~~typescript
interface User{
  name: string,
  balance: number
};
~~~

b)code:
~~~typescript
const performPurchase = (user: User, value: number) =>{
 return user.balance >= value ? 
  {
    name: user.name,
    balance: user.balance - value
  } 
  : undefined;
};
~~~

## 2.
a) code:
~~~typescript
test('Should be return a new user', ()=>{
    const user: User = {name: 'Hendrix', balance: 300}
    const newUser = performPurchase(user, 200);

    expect(newUser).not.toEqual(undefined);
  });
~~~
b) code:
~~~typescript
test('Should be return a new user', ()=>{
    const user: User = {name: 'Hendrix', balance: 200}
    const newUser = performPurchase(user, 200);

    expect(newUser).not.toEqual(undefined);
  });
~~~
c) code:
~~~typescript
test('Should be return undefined', ()=>{
    const user: User = {name: 'Hendrix', balance: 100}
    const newUser = performPurchase(user, 200);

    expect(newUser).toEqual(undefined);
  });
~~~

## 3.
b) code:
~~~typescript
const CasinoEntryPermission = (
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
~~~
c)r: encontrar a maneira mais clean para fazer a operação da função. 

## 4.
a) code:
~~~typescript
test('Should be return an allowed user permission', ()=>{
    const casino: Casino ={
      name: 'CasinoBR',
      local: Country.BR,
    };
    const customers: CasinoCustomer[] = [
      {name: 'José', nacionality: Nacionality.BR, age: 21}
    ];

    const permission = casinoEntryPermiss(casino, customers);

    expect(permission.allowed).toContain(customers[0]);
  });
~~~
b) code:
~~~typescript
test('Should be return an allowed user permission', ()=>{
    const casino: Casino ={
      name: 'CasinoBR',
      local: Country.BR,
    };
    const customers: CasinoCustomer[] = [
      {name: 'Jofrey', nacionality: Nacionality.EUA, age: 18}
    ];

    const permission = casinoEntryPermiss(casino, customers);

    expect(permission.allowed).toContain(customers[0]);
  });
~~~
c) code:
~~~typescript
test('Should be return an empty allowed user permission list', ()=>{
  const casino: Casino ={
    name: 'CasinoNA',
    local: Country.EUA,
  };
  const customers: CasinoCustomer[] = [
    {name: 'Jofrey', nacionality: Nacionality.BR, age: 19},
    {name: 'John', nacionality: Nacionality.EUA, age: 19},
    {name: 'Melissa', nacionality: Nacionality.BR, age: 19},
    {name: 'Ana', nacionality: Nacionality.EUA, age: 19}
  ];

  const permission = casinoEntryPermiss(casino, customers);

  expect(permission.allowed).toEqual([]);
});
~~~
d) code:
~~~typescript
test('Should be return a two dained access customers list', ()=>{
    const casino: Casino ={
      name: 'CasinoNA',
      local: Country.EUA,
    };
    const customers: CasinoCustomer[] = [
      {name: 'Jofrey', nacionality: Nacionality.BR, age: 19},
      {name: 'John', nacionality: Nacionality.EUA, age: 21},
      {name: 'Melissa', nacionality: Nacionality.BR, age: 19},
      {name: 'Ana', nacionality: Nacionality.EUA, age: 21}
    ];

    const permission = casinoEntryPermiss(casino, customers);

    expect(permission.notAllowed.length).toEqual(2);
  });
~~~

## 5.
a) code:
~~~typescript
test('Should be return an only one allowed customer', ()=>{
    const casino: Casino ={
      name: 'CasinoBR',
      local: Country.BR,
    };
    const customers: CasinoCustomer[] = [
      {name: 'Jofrey', nacionality: Nacionality.BR, age: 19},
    ];

    const permission = casinoEntryPermiss(casino, customers);

    expect(permission.allowed.length).toBeGreaterThan(0)
    expect(permission.allowed.length).not.toBeGreaterThanOrEqual(2)
  });
~~~
b) code:
~~~typescript
test('Should be return an empty not allowed customer list', ()=>{
    const casino: Casino ={
      name: 'CasinoBR',
      local: Country.BR,
    };
    const customers: CasinoCustomer[] = [
      {name: 'John', nacionality: Nacionality.EUA, age: 21},
    ];

    const permission = casinoEntryPermiss(casino, customers);

    expect(permission.notAllowed.length).toEqual(0);
  });
~~~
c) code:
~~~typescript
test('Should be contain at least one not allowed customer', ()=>{
    const casino: Casino ={
      name: 'CasinoEUA',
      local: Country.EUA,
    };
    const customers: CasinoCustomer[] = [
      {name: 'Jofrey', nacionality: Nacionality.BR, age: 19},
      {name: 'John', nacionality: Nacionality.EUA, age: 19},
      {name: 'Melissa', nacionality: Nacionality.BR, age: 19},
      {name: 'Ana', nacionality: Nacionality.EUA, age: 19} 
    ];

    const permission = casinoEntryPermiss(casino, customers);

    expect(permission.notAllowed).toContain(customers[0]);
  });
~~~
d) code:
~~~typescript
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
 ~~~
 