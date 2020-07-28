import {Character} from './models';

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

export { validateCharacter }