import {validateCharacter, performAttack} from './utils';
import {Character} from './models';

const char1 = new Character(
  'Nelson',
  150,
  200
);
const char2 = new Character(
  'Nilson',
  150,
  150
);

const attack = performAttack(char1, char2)

console.log(attack)
