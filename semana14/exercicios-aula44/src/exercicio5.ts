//Pré-história,  Idade Antiga, Idade Média, Idade Moderna,  Idade Contemporânea
//< 4000 AC, 476 DC, 1453 DC, 1789 DC, 
enum Age{
  PREHISTORIC = 'Pré-história',
  OLD = 'Idade Antiga',
  MIDDLE = 'Idade Média',
  MODERN = 'Idade Moderna',
  CONTEMPORARY = 'Idade Contemporânea',
};
const getHistoricAge =(year: number, initials: (string | void)): string=>{
  const setInitials = initials ? initials.toUpperCase() : 'DC';
  if(setInitials === 'AC'){
    if(year > 4000 && year < 100000){ return Age.PREHISTORIC}
    else if(year <= 4000){return Age.OLD}
  }else if(setInitials === 'DC'){
    if(year < 476){return Age.OLD}
    else if(year >= 476 && year < 1453){return Age.MIDDLE}
    else if(year >= 1453 && year < 1789){return Age.MODERN}
    else if(year >= 1789){ return Age.CONTEMPORARY}
  }else{
    console.log('Ano não reconhecido na história humana.')
  };
};

const getAge = getHistoricAge(15000, 'AC');
console.log(getAge)