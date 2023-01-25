//1

const arr=[1,2,3,4,5,6,7,8,9,10]
// arr.forEach(function doubleValues(num,idx){
//   arr[idx]=(num * num)
// })

// console.log(arr)

// 2
// Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.

const arr2=[1,2,3,4,5,6,7,8,9,10];
function onlyEvenValues(array) {
	finishedArray = []
	array.forEach(function(num) {
  	if(!(num % 2)) {
    	finishedArray.push(num)
    }
  })
  return finishedArray;
}
console.log(onlyEvenValues(arr2)) 

// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements
// that are strings.

// arr3=[4546,'kffk','8f8f5','jty','ikdfg']
// function showFirstAndLast(arr){
// 	const stringarr =[];
// 	arr.forEach(function (x){
		
// 		if (typeof x === "string"){
// 			stringarr.push(x);
// 		}
// 	})
// 	return [stringarr[0],stringarr[stringarr.length-1]];
// }
// console.log(showFirstAndLast(arr3))

