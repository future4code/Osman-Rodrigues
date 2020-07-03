import * as moment from 'moment';
import Labemission from './Labemission';
import {Labenaut, EXPERTISES} from './interfaces';
import JSONFileMng from './JSONFileMng';

moment.locale('pt-br');
const today = moment();

const fileMng = new JSONFileMng();

export class Teacher implements Labenaut{
  labenumber: number;
  name: string;
  email: string;
  birth: moment.Moment;
  private expertises: EXPERTISES[];
  constructor(
    labenumber: number, name: string, email: string, birthDate: string, expertises:EXPERTISES[]
  ){
    this.labenumber = labenumber;
    this.name = name;
    this.email = email;
    this.birth = moment(birthDate, 'DD/MM/YYYY');
    this.expertises = expertises;
  };
  getExpertises = () =>{
    console.log(`$ Especialidades do(a) ${this.name} $`);
    this.expertises.forEach(expertise => console.log(expertise));
  };
  registerTeacher = ():void =>{
    const db = fileMng.getDbTeachers()
    fileMng.attDbTeachers({
      ...db, [this.labenumber]:{
        labenumber: this.labenumber,
        name: this.name,
        email: this.email,
        birth: this.birth,
        expertises: this.expertises
      }
    });
    console.log(`Professor(a) ${this.name} registrado(a) com sucesso!`)
  };
};
export class Student implements Labenaut{
  labenumber: number;
  name: string;
  email: string;
  birth: moment.Moment;
  private hobbies: string[];
  constructor(
    labenumber: number, name: string, email: string, birthDate: string, hobbies: string[]
  ){
    this.labenumber = labenumber;
    this.name = name;
    this.email = email;
    this.birth = moment(birthDate, 'DD/MM/YYYY');
    this.hobbies = hobbies;
  };
  getHobbies = () =>{
    console.log(`$ Hobbys do(a) ${this.name} $`);
    this.hobbies.forEach(hobby => console.log(hobby));
  };
  registerStudent = ():void =>{
    const db = fileMng.getDbStudents();
    fileMng.attDbStudents({
      ...db, [this.labenumber]:{
        labenumber: this.labenumber,
        name: this.name,
        email: this.email,
        birth: this.birth,
        hobbies: this.hobbies
      }
    });
    console.log(`Aluno(a) ${this.name} registrado(a) com sucesso!`)
  };
};
export class FulltimeMission extends Labemission{
  teachers: Teacher[];
  students: Student[];
  constructor(
    id: number, 
    name: string, 
    launch: string, 
    arrive: string, 
    currentModule: number,
    teachers?: Teacher[],
    students?: Student[]
  ){
    super(
      id, name, moment(launch, 'DD/MM/YYYY'), moment(arrive, 'DD/MM/YYYY'), currentModule
    );
    teachers ? this.teachers = teachers : this.teachers = [];
    students ? this.students = students : this.students = [];
  };
  addTeacher =(teacher: Teacher) =>{
    this.teachers.push(teacher);
    console.log(
      `
      Professor(a) ${teacher.name} incluso(a) na missão ${this.name}!
      `
    );
  };
  addStudent = (student: Student) =>{
    this.students.push(student);
    console.log(
      `
      Aluno(a) ${student.name} incluso(a) na missão ${this.name}!
      `
    );
  };
  getTeachers = () =>{
    console.log(
      `----- Professores da missão ${this.name} -----`
    );
    this.teachers.forEach(teacher =>{ 
      console.log(
        `
        * Nome: ${teacher.name} *
        * Idade: ${today.diff(teacher.birth, 'years')} anos *
        `
      );
      teacher.getExpertises();
    });
  };
  getStudents = () =>{
    console.log(
      `----- Alunos da missão ${this.name} -----`
    );
    this.students.forEach(student =>{ 
      console.log(
        `
        * Nome: ${student.name} *
        * Idade: ${today.diff(student.birth, 'years')} anos *
        `
      );
      student.getHobbies();
    });
  };
  getStudentAge = (currentStudent: Student)=>{
    const matchedStudent = this.students.find(student => 
      student.labenumber === currentStudent.labenumber 
    );
    console.log(
      `
      -----------------------------------------------------
      Idade do(a) estudante ${matchedStudent.name}:
      * ${today.diff(matchedStudent.birth, 'years')} anos *
      -----------------------------------------------------
      `
    );
  };
  registerMission = ():void =>{
    const db = fileMng.getDbMissions()
    fileMng.attDbMissions({
      ...db, [this.id]:{
        id: this.id,
        name: this.name,
        launch: this.launch,
        arrive: this.arrive,
        currentModule: this.currentModule,
        teachers: this.teachers,
        students: this.students
      }
    });
    console.log(`Turma ${this.name} registrada com sucesso!`)
  };
};
export class NocturnalMission extends FulltimeMission{
  constructor(
    id: number, 
    name: string, 
    launch: string, 
    arrive: string, 
    currentModule: number,
    teachers?: Teacher[],
    students?: Student[]
  ){
    super(id, `${name}-na-night`, launch, arrive, currentModule);
    teachers ? this.teachers = teachers : this.teachers = [];
    students ? this.students = students : this.students = [];
  }
};