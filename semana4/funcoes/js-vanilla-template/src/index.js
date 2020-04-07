//**Exercícios de interpretação de código**
//1. 
//a. array = [];
//b. array = [0,1,0,1, 2, 3];
//c. array = [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5];
//
//2.
//a.0, 2 e Undefined;
//b. Sim, pois no escopo do condicional if ele verifica se 
//o item correspondente está de fato naquele endereço de índice.
//
//3.
//A function em questão armazena o resultado da soma dos itens e 
//da multiplicação entre os itens de um array. O melhor nome para 
//ela é: chessusNaGalileia.

//Exercícios de escrita de código
//
//4.
//a.
let verIdadeDeCatioro = (tempoDeVida) =>{
    idadeDeCatioro = tempoDeVida*7;
    return idadeDeCatioro
}   

//b.
let emitirInfosPessoais = (nome, idade, endereço, estuda) => {
    
    if(estuda === true){
        let estudante = 'sou';
        estuda = estudante
    }else{
        let estudante = 'não sou';
        estuda = estudante
    }
    let infos = 'Eu sou '+nome+', tenho '+idade+' anos, moro em '+endereço+' e '+
    estuda+' estudante.';
    return infos
}
//5.
let verOSeculo = (ano) =>{
    let romanos = ['I', 'V', 'X'];
    let doisUltimos = String(ano)[2] + String(ano)[3];
    let ultimosConvert = Number(doisUltimos);
    let doisIniciais = String(ano)[0] + String(ano)[1];
    let iniciaisConvert = Number(doisIniciais);
    console.log(doisUltimos)
    console.log(doisIniciais)
    
    let seculo = 0;

    if(ultimosConvert > 0){
        seculo += iniciaisConvert+1;
        seculo = [seculo];
    }else{
        seculo = iniciaisConvert;
        seculo = [seculo]; 
    }

    for(let numero of seculo){
        numero1 = String(numero)[0]
        numero2 = String(numero)[1]
        numero1N = Number(numero1)
        numero2N = Number(numero2)

        if(numero1N<3){
            console.log('passou 0')
            switch(numero1N){
                case 1:
                    numero1 = romanos[2]
                    break;
                case 2:
                    numero1 = romanos[2]+romanos[2]
                    break
                default:
                    numero1 = romanos[2]
                    break
            }
            if(numero2N<4){
                console.log('passou 1')
                switch(numero2N){
                    case 1:
                        numero2 = romanos[0]
                        break;
                    case 2:
                        numero2 = romanos[0]+romanos[0]
                        break;
                    case 3:
                        numero2 = romanos[0]+romanos[0]+romanos[0]
                        break;
                    default:
                        numero2 = ''
                        break;
                }
            }else if(numero2N === 4){
                console.log('passou 2')
                numero2 = romanos[0]+romanos[1]
            }else if(numero2N === 5){
                console.log('passou 3')
                numero2 = romanos[1]
            }else if(numero2N>5){
                console.log('passou 4')
                switch(numero2N){
                    case 6:
                        numero2 = romanos[1]+romanos[0]
                        break;
                    case 7:
                        numero2 = romanos[1]+romanos[0]+romanos[0]
                        break;
                    case 8:
                        numero2 = romanos[1]+romanos[0]+romanos[0]+romanos[0]
                        break;
                    case 9:
                        numero2 = romanos[0]+romanos[2]
                        break;
                    default:
                        numero2 = ''
                        break;
                }
            }
        seculo = [numero1+numero2]
        }
    }
    
    return 'O ano '+ano+' pertence ao século '+seculo[0]+'.';
}
//6.
const array1 = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

//a.
let tamanhoDoArray = (array) =>{
    return 'Quantidade de elementos neste array: '+array.length
} 
//b.
let esteNumEPar = (numero) => {
    if(numero !== undefined){
        if(numero%2===0){
            return true
        }else{
            return false
        }
    }    
}
//c.
let saberOsPares = (array) =>{
    const pares =[]
    for(let numero of array){
        let par = numero%2;
        if(par===0){
            pares.push(par)
        }
    }
    return 'Este array possui '+pares.length+' números pares.'
}
//d.
let saberOsPares2 = (array) =>{
    const pares =[]
    for(let numero of array){
        if(esteNumEPar(numero)){
            pares.push(numero)
        }
    }
    return 'Este array possui '+pares.length+' números pares.'
} 