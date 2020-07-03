import * as fs from 'fs';

enum filePath{
  TEACHERS = './src/database/teachers.json',
  STUDENTS = './src/database/students.json',
  MISSIONS = './src/database/missions.json',
};

class JSONFileMng{
  getDbTeachers =(): Object => JSON.parse(fs.readFileSync(filePath.TEACHERS).toString());
  getDbStudents =(): Object => JSON.parse(fs.readFileSync(filePath.STUDENTS).toString());
  getDbMissions =(): Object => JSON.parse(fs.readFileSync(filePath.MISSIONS).toString());
  attDbTeachers =(newDbTeachers: Object): void => {
    fs.writeFileSync(filePath.TEACHERS, JSON.stringify(newDbTeachers,null, 2))
  };
  attDbStudents =(newDbStudents: Object): void => {
    fs.writeFileSync(filePath.STUDENTS, JSON.stringify(newDbStudents,null, 2))
  };
  attDbMissions =(newDbMissions: Object): void => {
    fs.writeFileSync(filePath.MISSIONS ,JSON.stringify(newDbMissions,null, 2))
  };
};
export default JSONFileMng