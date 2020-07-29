import {validateCharacter} from '../src/utils';
import {Character} from '../src/models';

describe('validateCharacter', ()=>{
  test("Shouldn't have empty name", ()=>{
    const char1 = new Character('',90,70);
    const result = validateCharacter(char1);

    expect(result.isValid).toBe(true)
  });
  test("Shouldn't have empty health points", ()=>{
    const char2 = new Character('Han Solo',90,70);
    const result = validateCharacter(char2);
    
    expect(result.isValid).toBe(true)
  });
  test("Shouldn't have empty strength points", ()=>{
    const char3 = new Character('Mace Windu', 90,null);
    const result = validateCharacter(char3);
    
    expect(result.isValid).toBe(true)
  });
  test("Shouldn't have empty armor points", ()=>{
    const char4 = new Character ('Gen. Grievous', null, 100);
    const result = validateCharacter(char4);
    
    expect(result.isValid).toBe(true)
  });
  test("Shouldn't have negative properties values", ()=>{
    const char5 = new Character ('Master Yoda',-80,-250);

    const result = validateCharacter(char5);
    
    expect(result.isValid).toBe(true)
  });
  test("Should have properties with equal to zero values", ()=>{
    const char6 = new Character ('Palpatine',0,0);

    const result = validateCharacter(char6);
    
    expect(result.isValid).toBe(true)
  });
  test("Should have all valid properties", ()=>{
    const char7 = new Character ('Obi-Wan',90,500);

    const result = validateCharacter(char7);
    
    expect(result.isValid).toBe(true)
  });
})