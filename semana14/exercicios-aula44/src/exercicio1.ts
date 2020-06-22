//a) 
let minhaString: string = 'minha string';
//minhaString = 0;
//r. o compilador não permite que uma variável tipada como string tenha atribuição de tipo number 
//b)
let meuNumero: number|string = 0;
meuNumero = '0';
//r. adicionado o | no momento da tipagem
//c)
const pessoa:{
  nome:string, idade: number, corFavorita: string
} = {
  nome: 'Marie',
  idade: 35,
  corFavorita: 'Laranja',
}
//r. declarando as tipagens de cada propriedade do objeto
//d)
enum CoresArcoiris{
  RED = 'vermelho',
  ORANGE = 'laranja',
  YELLOW = 'amarelo',
  GREEN = 'verder',
  BLUE = 'azul',
  INDIGO = 'anil',
  VIOLET = 'violeta' 
}
type pessoa = {
  nome:string, idade: number, corFavorita: CoresArcoiris
}

const pessoa2: pessoa ={
  nome:'Hendrix', idade: 78, corFavorita: CoresArcoiris.VIOLET
};
const pessoa3: pessoa ={
  nome:'Vadder', idade: 55, corFavorita: CoresArcoiris.YELLOW
};
const pessoa4: pessoa ={
  nome:"O'Riordan", idade: 49, corFavorita: CoresArcoiris.RED
};