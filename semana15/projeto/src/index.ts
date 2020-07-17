import {Teacher, Student, FulltimeMission, NocturnalMission} from './models/subclasses';
import {EXPERTISES} from './models/interfaces';
import {} from './models/JSONFileMng';

//Creating teachers
const profJuaum = new Teacher(
  1, 'João', 'joao@labenu.com', '02/07/1992',
  [EXPERTISES.BKD, EXPERTISES.OOP, EXPERTISES.TS]
);
const profMadinha = new Teacher(
  2, 'Amanda', 'amanda@labenu.com', '13/04/1994',
  [EXPERTISES.BKD, EXPERTISES.OOP, EXPERTISES.TS]
);
const profTeus = new Teacher(
  3, 'Mateus', 'mateus@labenu.com', '20/07/1994',
  [EXPERTISES.BKD, EXPERTISES.OOP, EXPERTISES.TS]
);
const profGoli = new Teacher(
  4, 'Golias', 'joaogoli@labenu.com', '07/07/1990',
  [EXPERTISES.BKD, EXPERTISES.OOP, EXPERTISES.TS]
);

//Creating students
const alunoJimmy = new Student(
  8, 'Hendrix', 'hendrix@jimmy.com', '27/11/1942', 
  ['tocar guitarra', 'fazer shows', 'encantar a platéia']
);
const alunaMaria = new Student(
  9, 'Marie', 'maria@joana.com', '05/09/1998', 
  ['ter fé','ter raça', 'ter gana']
);

//Creating classes
const missaoCurie = new FulltimeMission(
  10, 'Curie', '30/10/2020', '30/04/2021', 0
);
const missaoTesla = new NocturnalMission(
  11, 'Tesla', '01/05/2021', '01/11/2021', 0
);

//Including teachers in classes
missaoCurie.addTeacher(profMadinha);
missaoTesla.addTeacher(profMadinha);

missaoCurie.addTeacher(profTeus);
missaoTesla.addTeacher(profTeus);

missaoCurie.addTeacher(profJuaum);
missaoTesla.addTeacher(profJuaum);

missaoCurie.addTeacher(profGoli);
missaoTesla.addTeacher(profGoli);

//Including students in classes
missaoCurie.addStudent(alunaMaria);
missaoCurie.addStudent(alunoJimmy);

missaoTesla.addStudent(alunaMaria);
missaoTesla.addStudent(alunoJimmy);

//Registering teachers
profMadinha.registerTeacher(); 
profTeus.registerTeacher(); 
profJuaum.registerTeacher(); 
profGoli.registerTeacher(); 

//Registering students
alunoJimmy.registerStudent();
alunaMaria.registerStudent();

//Registering classes
missaoCurie.registerMission();
missaoTesla.registerMission();