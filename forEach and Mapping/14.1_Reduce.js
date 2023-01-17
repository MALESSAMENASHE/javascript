
// Write the following functions using the reduce built-in function.
// 1. max
// 2. the sum of even numbers
// 3. average

const arr=[201,15,220,500,15,100]
// const arr2 = arr.reduce((a,b) =>{
//     if(a>b) return a;
//             return b;
        
//     })

// console.log(arr2);

const arr3 = arr.reduce((a,b) =>{
    if((b%2)===0) b=0;
        return a+b;
    })

console.log(arr3);


const arr4=arr.reduce((a,b)=> {

    return (a+b)
})/(arr.length);

console.log(arr4);