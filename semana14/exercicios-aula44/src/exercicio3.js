var arrayDispatch = function (array) {
    var arrTotalItems = array.length;
    var oddsCounter = 0;
    array.forEach(function (number) { return number % 2 !== 0 && oddsCounter++; });
    var arrSum = 0;
    array.forEach(function (number) { return arrSum += number; });
    return {
        items: arrTotalItems,
        odds: oddsCounter,
        sum: arrSum
    };
};
var numbersList = [1, 2, 3, 4, 5];
var result = arrayDispatch(numbersList);
console.log(result);
