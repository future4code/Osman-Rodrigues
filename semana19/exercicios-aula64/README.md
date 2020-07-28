### Exercicios aula 64, semana 19

## 1.
a) code:
~~~typescript
interface Character{
  name: string,
  healthPoints: number,
  armorPoints: number,
  strength: number
}
~~~

b) code:
~~~typescript
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
~~~

## 2.
a) code:
~~~typescript
test("Shouldn't have a empty name", ()=>{
    const char1 = {
      name: '',
      healthPoints: 120,
      armorPoints: 90,
      strength: 100
    };
    const result = validateCharacter(char1);
    
    expect(result.isValid).toBe(true)
  });
~~~
b) code:
~~~typescript
test("Shouldn't have a empty health points", ()=>{
  const char2 = {
    name: 'Han Solo',
    healthPoints: null,
    armorPoints: 70,
    strength: 80
  };
  const result = validateCharacter(char2);
  
  expect(result.isValid).toBe(true)
});
~~~
c) code:
~~~typescript
test("Shouldn't have a empty strength points", ()=>{
  const char3 = {
    name: 'Mace Windu',
    healthPoints: 110,
    armorPoints: 90,
    strength: null
  };
  const result = validateCharacter(char3);
  
  expect(result.isValid).toBe(true)
}); 
~~~
d) code:
~~~typescript
test("Shouldn't have a empty armor points", ()=>{
  const char4 = {
    name: 'Gen. Grievous',
    healthPoints: 200,
    armorPoints: null,
    strength: 100
  };
  const result = validateCharacter(char4);
  
  expect(result.isValid).toBe(true)
});
~~~
e) code:
~~~typescript
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
~~~
f) code:
~~~typescript
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
~~~
g) code:
~~~typescript
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
~~~

