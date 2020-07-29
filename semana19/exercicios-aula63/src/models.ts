//ENUMs
enum Country{
  EUA = 'United States of America',
  BR = 'Brazil'
};
enum Nacionality{
  EUA = 'North American',
  BR = 'Brazilian'
};

//Interfaces
interface User{
  name: string,
  balance: number
};
interface Casino{
  name: string,
  local: Country
};

interface CasinoCustomer{
  name: string,
  nacionality: Nacionality,
  age: number
};

export {
  User, Casino, CasinoCustomer, Country,
  Nacionality 
}