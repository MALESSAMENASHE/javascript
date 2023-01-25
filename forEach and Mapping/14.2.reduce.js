
// 1. Write a function called extractOnlyValue which accepts an
// array of objects and a key and returns a new array with
// the value of each object at the key

// 3. Write a function called addKeyAndValue which accepts 3
// parameters an array of objects, key, and value, and
// returns the array of objects passed to it. with each object
// now including the key and value passed to the function


const arrA= [
    {
      A:15,
      B:20
    },
    {
      A:10,
      B:20,
    },
    {
      A:12,
      B:20,
    },
]

const extractOnlyValue =(array,key)=>
arrA.reduce((a,b)=>{
    a.push(b[key]);
    return a;

},[])


console.log(extractOnlyValue(arrA,"A"))

// 2. Write a function called countOnlyVowels which accepts a
// string and returns an object with the keys as the vowel and
// the values as the number of times the vowel appears in
// the string. This function should be case insensitive so a
// lowercase and uppercase letter should count/

const countOnlyVowels = (str) => {
    const voels = {
      a: true,
      e: true,
      i: true,
      o: true,
      u: true,
    };
    const arr = str.toLowerCase().split("");
    return arr.reduce((acc, cur) => {
      if (voels[cur]) {
        acc[cur] =( acc[cur]||0)+1;
      }
      return acc;
    }, {});
  };
  
  console.log(countOnlyVowels("The end of the world is coming hahahuheheha"));

  // 3. Write a function called addKeyAndValue which accepts 3
// parameters an array of objects, key, and value, and
// returns the array of objects passed to it. with each object
// now including the key and value passed to the function


// const addKeyAndValue = (arrOfObj,key,value) => {
//     return arrOfObj.reduce((acc,cur)=>{
//         cur[key]=value;
//         acc.push(cur);
//         return acc;
//     },[])
// }

// console.log(addKeyAndValue(arrA,'C',100))