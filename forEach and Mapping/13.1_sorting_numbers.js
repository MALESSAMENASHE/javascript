

// 1. Sort the array of numbers from descending to ascending
// order.
// 2. Sort the array of numbers from ascending to descending
// order.
const numbers = [1, -5, 666, 2, 400, 11];
let Arr = numbers.sort ((a, b) => a-b);
console.log(Arr);


let Arr2 = numbers.sort ((a, b) => b - a);
console.log(Arr2);
