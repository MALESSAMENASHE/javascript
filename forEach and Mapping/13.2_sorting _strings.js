
const foods = ["falafel", "sabich","sabbch", "hummus",
"pizza with extra pineapple"];
// a.1. Sort the array of strings from descending to ascending
// order.
// a.2. Sort the array of strings from ascending to descending
// order.

// a.1

const desc1 = foods.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });
  console.log(desc1);


const desc2 = foods.sort((a, b) => {
    if (a < b) {
      return 1;
    }
    if (a > b) {
      return -1;
    }
    return 0;
  });
  console.log(desc2);




// b. Let's sort an array of words that includes a word with an
// uppercase:
const foodsWithUpperCase = [
"falafel",
"Sabich",
"hummus",
"pizza with extra pineapple",
];

// const desc3 = foodsWithUpperCase.sort((a, b) => {
//     if (a[0] > b[0]) {
//       return 1;
//     }
//     if (a[0] < b[0]) {
//       return -1;
//     }
//     return 0;
//   });
//   console.log(desc3);


// const desc4 = foodsWithUpperCase.sort((a, b) => {
//     if (a[0] < b[0]) {
//       return 1;
//     }
//     if (a[0] > b[0]) {
//       return -1;
//     }
//     return 0;
//   });
//   console.log(desc4);



// b.1. Sort the array of strings from descending to ascending
// order.
// b.2. Sort the array of strings from ascending to descending
// order.
// c. Longest word
const words = ["apple",
"supercalifragilisticexpialidocious",
"hi", "zoo"];
// c.1. Sort the array of strings from the longest word to the
// shortest word only using the sort function

const arr = words.slice().sort((a,b) => a.length-b.length);
console.log (arr)
// a.2
const arr2 = words.slice().sort((a,b) =>b.length - a.length);
console.log (arr2)