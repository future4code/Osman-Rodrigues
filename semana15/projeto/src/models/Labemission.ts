import {Teacher, Student} from './subclasses';

abstract class Labemission{
  protected teachers: Teacher[];
  protected students: Student[];
  constructor(
    protected id:number, 
    protected name: string, 
    protected launch: moment.Moment, 
    protected arrival: moment.Moment,
    protected currentModule: number
  ){};
  addTeacher(teacher: Teacher): void{};
  addStudent(student: Student): void{};
  getStudentAge(student: Student): any{};
};
export default Labemission;