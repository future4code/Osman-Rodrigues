import * as fs from 'fs';

//1.a) 
//r. Utilizando o shell process process.argv
//1. b)
const ageDialog =():void =>{
  const inputName: string = process.argv[2];
  const inputAge: number = Number(process.argv[3]);
// console.log(`Olá, ${inputName}! Você tem ${inputAge} anos.`);
//1.c)
console.log(
  `Olá, ${inputName}! Você tem ${inputAge} anos. Em sete anos você terá ${inputAge+7}`
  );
};
//ageDialog()

//2.
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
//console.log(calcSimulator())
const newTask=(): void =>{
  const filePath: string = process.argv[2];
  const fileBuffer: Buffer = fs.readFileSync(filePath);
  const fileText: string = fileBuffer.toString();
  const taskName: string = process.argv[3];
  const newTasks: string = `${fileText}, ${taskName}`;
  fs.writeFileSync(filePath, newTasks)
  console.log('Tarefa criada com sucesso!')
  console.log(
    'Lista atualizada: ',
    fs.readFileSync(filePath).toString()
  )
};
//newTask();