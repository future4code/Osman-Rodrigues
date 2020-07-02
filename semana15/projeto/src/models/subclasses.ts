import * as moment from 'moment';
import Labemission from './Labemission';
import {Labenaut, EXPERTISES} from './interfaces';

moment.locale('pt-br');
const today = moment();

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
    console.log(`--------- Especialidades do(a) ${this.name} ----------`);
    this.expertises.forEach(expertise => console.log(expertise));
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
    console.log(`--------- Hobbys do(a) ${this.name} ----------`);
    this.hobbies.forEach(hobby => console.log(hobby));
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
  addTeacher =(teacher: Teacher) => this.teachers.push(teacher);
  addStudent = (student: Student) => this.students.push(student);
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
};