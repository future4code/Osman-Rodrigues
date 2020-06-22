const numberDispatch = (numero1: number, numero2: number): void =>{
  //a
  console.log('A soma dos números é: ', numero1+numero2);
  //b
  console.log('A subtração entre os números é: ', numero1-numero2);
  //c
  console.log('A multiplicação entre os números é: ',numero1*numero2);
  //d
  console.log('O maior entre eles é: ',numero1 > numero2 ? numero1 : numero2)
}

numberDispatch(5,3)