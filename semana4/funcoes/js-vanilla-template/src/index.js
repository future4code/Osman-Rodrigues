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
let euSouCaxorruNao = (tempoDeVida) =>{
    idadeDeCatioro = tempoDeVida*7;
    return idadeDeCatioro
}   

//b.
let infosPessoais = (nome, idade, endereço, estuda) => {
    
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
let meDigaOSec = (ano) =>{
    let romanos = ['I', 'V', 'X'];
    let doisUltimos = String(ano)[2] + String(ano)[3];
    let ultimosConvert = Number(doisUltimos);
    let doisIniciais = String(ano)[0] + String(ano)[1];
    let iniciaisConvert = Number(doisIniciais);
    
    let seculo = 0;

    if(ultimosConvert > 0){
        seculo += iniciaisConvert;
        seculo = [seculo];
    }else{
        seculo = iniciaisConvert + 1;
        seculo = [seculo]; 
    }

    for(let numero of seculo){
        numero1 = String(numero)[0]
        numero2 = String(numero)[1]
        numero1N = Number(numero1)
        numero2N = Number(numero2)

        if(Number(numero1)<4){
            switch()

        }
    }



    
}