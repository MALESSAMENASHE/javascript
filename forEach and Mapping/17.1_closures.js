
// Without running the code below, explain in your own
// words what the result of each block of code will be and
// why.

// Block 1

// var b = 1;
// function someFunction(number) {
// function otherFunction(input) {
// return b;
// }
// b = 5;
// console.log(number)
// return otherFunction;
// }
// var firstResult = someFunction(9);
// var result = firstResult(2);

//results:
//why..: 

// Block 2

// var a = 1;
// function b2() {
// a = 10;
// return;
// function a() { }
// }
// b2();
// console.log(a);

//results: 1
//why..: we gets the global a, the hader a is local .

// Block 3

 let i;
for ( i = 0; i < 3; i++) {
const log = () => {
console.log(i);
}
setTimeout(log, 1000);
}

//results: 3 3 3 
//why..: print in delay, but i keep changing .then we get print of the consolle.log(!)  