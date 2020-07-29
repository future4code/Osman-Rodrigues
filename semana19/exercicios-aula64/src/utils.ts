import {Character, ValidateCharacterOutput} from './models';

const validateCharacter = (character: Character):{
  isValid: boolean, character: Character
}=>{
 
  let isValid = true;

  for(const key in character){
    const value = character[key as keyof Character];

    if(
      value === undefined || value === null || typeof(value) === 'number' && value < 0 ||
      typeof(value) === 'string' && value.trim() === ''
    ){
      isValid = false
      return {isValid, character}
    };
  };

  return {isValid, character}
};

const performAttack = (
  attacker: Character, defender: Character
  ):{
    attacker: Character, defender: Character
  } =>{
  const validedAttacker = validateCharacter(attacker);
  const validedDefender = validateCharacter(defender);

  if(! validedAttacker.isValid || ! validedDefender.isValid){
    throw new Error(`Character "${
      ! validedAttacker.isValid ? 
      validedAttacker.character.name :
      validedDefender.character.name
    }" is invalid.`)
  }else if(! validedAttacker.isValid && ! validedDefender.isValid){
    throw new Error(`Both characters are invalid.`)
  };

  const attackCount = attacker.strength > defender.armorPoints ? 
  attacker.strength - defender.armorPoints : 0;

  defender.wasHitted(attackCount);

  return {attacker, defender} 
};

const performAttackDI = (
  attacker: Character, defender: Character,
  validator: (input: Character)=> ValidateCharacterOutput 
  ):{
    attacker: Character, defender: Character
  } =>{
  const validedAttacker = validator(attacker);
  const validedDefender = validator(defender);

  if(! validedAttacker.isValid || ! validedDefender.isValid){
    throw new Error(`Character "${
      ! validedAttacker.isValid ? 
      validedAttacker.character.name :
      validedDefender.character.name
    }" is invalid.`)
  }else if(! validedAttacker.isValid && ! validedDefender.isValid){
    throw new Error(`Both characters are invalid.`)
  };

  const attackCount = attacker.strength > defender.armorPoints ? 
  attacker.strength - defender.armorPoints : 0;

  defender.wasHitted(attackCount);

  return {attacker, defender} 
};
export { validateCharacter, performAttack, performAttackDI }