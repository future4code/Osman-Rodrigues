import {IdGenerator, UsersDb} from './utils';

const idGen = new IdGenerator();
const id = idGen.generate();

const useUserDb = new UsersDb();
useUserDb.createUser(id, 'Mary Jackson', 'jackson@mary.com', 'mj1234jm')

