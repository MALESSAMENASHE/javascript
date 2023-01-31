// 1. Build your own filter method with the help of prototypes

// Array.prototype.newFilter = function (condition){
//     const arr = [];
//     for (let i =0 ;i< this.length;i ++ ){
//         if(condition(this[i])){
//             arr.push(this[i]);
//         }
//     }
//     return arr;

// }

// const array =["Menashe","Aml","Elad","Itamar","Noa"];
// const whoIsTheKing = array.newFilter( el => el.length>6)
// console.log(whoIsTheKing);


// 2. Build your own find method with the help of prototypes


// Array.prototype.newFind = function (condition){
//     for (let i =0 ;i< this.length;i ++ ){
//         if(condition(this[i])){
//             return this[i];
//         }
//     }
// }

// const array =["Menashe","Aml","Elad","Itamar","Noa"];
// const whoIsTheKing = array.newFind(el =>  el.includes("she"));
// console.log(whoIsTheKing);


// Build your own reduce method with the help of prototypes


Array.prototype.newReduce = function (callback){
  let x=0;

    for (let i =0 ;i< this.length;i ++ ){
        callback (x=x+this[i]);
            
        }
        return x
    }


const array =[1,2,3,4,5]
const whoIsTheKing = array.newReduce((accumulator, currentValue) => accumulator + currentValue);
console.log(whoIsTheKing);