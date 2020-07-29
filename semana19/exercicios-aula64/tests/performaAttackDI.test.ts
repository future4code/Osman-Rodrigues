import {performAttackDI} from '../src/utils';
import {ValidateCharacterOutput, PerformAttackOutput, Character} from '../src/models';

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
const char3 = new Character(
  'Nena',
  150,
  null
);


describe('performAttack', ()=>{
  test('Should return a defender with lowered health points', ()=>{
    const validator = jest.fn((character: Character ): ValidateCharacterOutput =>{
      const response: ValidateCharacterOutput = {
        isValid: true,
        character
      }
      return response
    });
    try{
      const attack = performAttackDI(char1, char2, validator);

      expect(attack.defender.healthPoints).not.toBeGreaterThanOrEqual(1500);
    }catch(e){
      expect(e.message).toEqual(undefined)
    }
  });

  test('Should return a invalid attacker or defender initial status', ()=>{
    expect.assertions(1);

    const validator = jest.fn((character: Character ): ValidateCharacterOutput =>{
      const response: ValidateCharacterOutput = {
        isValid: true,
        character
      }
      return response
    });

    try{
      const attack = performAttackDI(char3, char2, validator);
      expect(attack.attacker.strength).toBe(null);
    }catch(e){
      expect(e.message).toEqual(`Character ${char3.name} is invalid.`)
    }
  });
})