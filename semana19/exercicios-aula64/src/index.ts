import {validateCharacter} from './utils';

const r = validateCharacter({
  name: 'Nelson',
  healthPoints: 100,
  armorPoints: 100,
  strength: 200
});

console.log(r)
