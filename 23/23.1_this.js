// Answer the following questions:
// Question 1:
// In your own words what will this point to and why?

(Note this is the global scope)
console.log(this);
//error, it's a global this , that not related to anything.

// Question 2:
// a. In your own words what will this point to and why?
// b. How can you fix this code?

const myObj = {
name: "Timmy",
greet: function() {
console.log(`Hello ${this.name}`);
},
};
// myObj.greet();
//a.undefined--global this;
//b.change the arrow function

// // Question 3:
// // In your own words what will this point to and why?
const myFuncDec = function () {
console.log(this);
};

//myFuncDec--because there is initialization  


// Question 4:
// // In your own words what will this point to and why?
// const myFuncArrow = () => {
// console.log(this);
// };
// myFuncArrow();
/// myFuncArrow- --because there is initialization .



// // Question 5:
// // a. In your own words, what will this point to and why?
// // b. How can you fix this code?


const element = document.querySelector(".element").addEventListener(() => {
console.log(this);
});

//a.error
//b. add  initialization  .