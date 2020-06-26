//4.
const calcSimulator =(): number=>{
  const operation: string = process.argv[2];
  const number1: number = Number(process.argv[3]);
  const number2: number = Number(process.argv[4]);

  switch (operation) {
    case 'add':
      return number1 + number2;
    case 'subt':
      return number1 - number2;
    case 'mult':
      return number1 * number2;
    case 'div':
      return number1 / number2;
    default:
      console.log('Declare um operador entre add, subt, mult ou div.')
      return 0
  }
};
console.log(calcSimulator())