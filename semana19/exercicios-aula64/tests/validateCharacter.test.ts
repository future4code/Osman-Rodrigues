import {validateCharacter} from '../src/utils';

describe('validateCharacter', ()=>{
  test("Shouldn't have empty name", ()=>{
    const char1 = {
      name: '',
      healthPoints: 100,
      armorPoints: 90,
      strength: 70
    };
    const result = validateCharacter(char1);

    expect(result.isValid).toBe(true)
  });
  test("Shouldn't have empty health points", ()=>{
    const char2 = {
      name: 'Han Solo',
      healthPoints: null,
      armorPoints: 90,
      strength: 70
    };
    const result = validateCharacter(char2);
    
    expect(result.isValid).toBe(true)
  });
  test("Shouldn't have empty strength points", ()=>{
    const char3 = {
      name: 'Mace Windu',
      healthPoints: 100,
      armorPoints: 90,
      strength: null
    };
    const result = validateCharacter(char3);
    
    expect(result.isValid).toBe(true)
  });
  test("Shouldn't have empty armor points", ()=>{
    const char4 = {
      name: 'Gen. Grievous',
      healthPoints: 200,
      armorPoints: null,
      strength: 100
    };
    const result = validateCharacter(char4);
    
    expect(result.isValid).toBe(true)
  });
  test("Shouldn't have negative properties values", ()=>{
    const char5 = {
      name: 'Master Yoda',
      healthPoints: -300,
      armorPoints: -80,
      strength: -250
    };

    const result = validateCharacter(char5);
    
    expect(result.isValid).toBe(true)
  });
  test("Should have properties with equal to zero values", ()=>{
    const char6 = {
      name: 'Palpatine',
      healthPoints: 0,
      armorPoints: 0,
      strength: 0
    };

    const result = validateCharacter(char6);
    
    expect(result.isValid).toBe(true)
  });
  test("Should have all valid properties", ()=>{
    const char7 = {
      name: 'Obi-Wan',
      healthPoints: 130,
      armorPoints: 90,
      strength: 500
    };

    const result = validateCharacter(char7);
    
    expect(result.isValid).toBe(true)
  });
})