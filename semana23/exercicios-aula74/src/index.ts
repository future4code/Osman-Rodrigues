const exercice1=(n: number): void=>{
  if(n >= 0){
    console.log(n)
    exercice1(n-1)
  }
}

const exercice2=(n: number): number=>{
  if(n <= 1 ){
    return 1
  }

  return exercice2(n-1) + n
}

const exercice3=(array: any[], index = 0): void =>{
  if(index < array.length){
    console.log(array[index])
    index ++
    exercice3(array, index)
  }
}

exercice3(['a','b','c', 'd'])