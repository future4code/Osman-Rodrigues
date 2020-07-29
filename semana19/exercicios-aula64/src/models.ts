//enums

//interfaces
interface ICharacter{
  name: string,
  healthPoints: number,
  armorPoints: number,
  strength: number
};
interface ValidateCharacterOutput{
  isValid: boolean, 
  character: Character
};
interface PerformAttackOutput{
  attacker: Character, 
  defender: Character,
};
//class
class Character implements ICharacter{
  public healthPoints: number = 1500;
  constructor(
    public name: string,
    public armorPoints: number,
    public strength: number
  ){};
  public wasHitted(hitValue: number){
    this.healthPoints -= hitValue
  };
};

export {ICharacter, Character, ValidateCharacterOutput, PerformAttackOutput}