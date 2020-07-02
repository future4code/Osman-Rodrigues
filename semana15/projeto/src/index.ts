import {Teacher, Student, FulltimeMission} from './models/subclasses';
import {EXPERTISES} from './models/interfaces';

const profJuaum = new Teacher(
  1, 'João', 'joao@labenu.com', '02/07/1992',
  [EXPERTISES.BKD, EXPERTISES.CSS, EXPERTISES.OOP, EXPERTISES.TS]
);
const alunoJimmy = new Student(
  11, 'Hendrix', 'hendrix@jimmy.com', '27/11/1942', 
  ['tocar guitarra', 'fazer shows', 'encantar a platéia']
);
const missionCurie = new FulltimeMission(
  10, 'Curie', '30/10/2020', '30/04/2021', 0
);

//console.log(profJuaum.labenumber, profJuaum.name, profJuaum.email, profJuaum.birth);
//profJuaum.getExpertises();
//
//console.log(alunoJimmy.labenumber, alunoJimmy.name, alunoJimmy.email, alunoJimmy.birth);
//alunoJimmy.getHobbies();

missionCurie.addStudent(alunoJimmy);
missionCurie.addTeacher(profJuaum);
missionCurie.getStudentAge(alunoJimmy);