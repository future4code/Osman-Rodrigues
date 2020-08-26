### Exerícios aula 74
## 1.a
~~~typescript
const exercice1=(n: number): void=>{
  if(n >= 0){
    exercice1(n-1)
    console.log(n)
  }
}
~~~
## 1.b
~~~typescript
const exercice1=(n: number): void=>{
  if(n >= 0){
    console.log(n)
    exercice1(n-1)
  }
}
~~~
## 2.
~~~typescript
const exercice2=(n: number): number=>{
  if(n <= 1 ){
    return 1
  }
  return exercice2(n-1) + n
}
~~~
## 3.
~~~typescript
const exercice3=(array: any[], index = 0): void =>{
  if(index < array.length){
    console.log(array[index])
    index ++
    exercice3(array, index)
  }
}
~~~