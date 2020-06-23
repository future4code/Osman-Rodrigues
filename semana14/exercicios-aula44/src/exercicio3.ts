type response ={
  items: number, odds: number, sum: number  
}

const arrayDispatch =(array: number[]): response =>{

  const arrTotalItems: number = array.length;
  let oddsCounter: number = 0;
  array.forEach(number=> number % 2 !== 0 && oddsCounter ++);
  let arrSum: number = 0;
  array.forEach(number=> arrSum += number);

  return{
    items: arrTotalItems,
    odds: oddsCounter,
    sum: arrSum
  }
};
const numbersList: number[] = [1,2,3,4,5];
const result: response = arrayDispatch(numbersList);
console.log(result);