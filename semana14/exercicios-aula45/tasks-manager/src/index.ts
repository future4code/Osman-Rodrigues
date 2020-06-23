import * as fs from 'fs';

const newTask=(): void =>{
  const filePath: string = process.argv[2];
  const fileBuffer: Buffer = fs.readFileSync(filePath);
  const fileText: string = fileBuffer.toString();
  const taskName: string = process.argv[3];

  const newTasks: string = fileText.trim() === '' ?
  taskName : `${fileText}, ${taskName}`;

  fs.writeFileSync(filePath, newTasks.toLowerCase())
  console.log('Tarefa criada com sucesso!')
  console.log(
    'Lista atualizada: ',
    fs.readFileSync(filePath).toString()
  )
};
newTask();