// Here is a candyStore object:
// const candyStore = {
// candies: [
// {
// name: "mint gum",
// id: "as12f",
// price: 2,
// amount: 2
// },
// {
// name: "twix",
// id: "5hd7y",
// price: 5,
// amount: 4
// },
// ],
// cashRegister: 200
// }
// function addCandy(candyStore, id, name, price) {
//   candyStore.candies.push({
//     name: name,
//     id: id,
//     price: price,
//     amount: 1,
//   });
// }
// addCandy(candyStore, "767", "Tortit", 56);
// console.log(candyStore)
// 1. Implement the following getCandy function:
// The function should return the candy element with
// // the specified id.
// function getCandy(candyStore, id) {
//   let result = candyStore.candies.find((ids) => {
//     if (ids.id == id) {
//       return ids;
//     }
//   });
//   console.log(result);
// }
// consol.log (getCandy(candyStore, "5hd7y"));
// 2. Implement the following getPrice function:
// The function should return the price (number) of the
// candy with the specified id.
// function getPrice(candyStore, id) {
//     let result = candyStore.candies.find((ids) => {
//       if (ids.id == id) {
//         return ids;
//       }
//     });
//     console.log(result.price);
//   }
  
//   consol.log (getPrice(candyStore, "5hd7y"));
// 3. Implement the following addCandy function:
// The function should add a new candy to the candy
// list in candyStore with a default amount of 1. The
// function will not return anything.
// function addCandy(candyStore, id, name, price) {
//     candyStore.candies.push({
//       name: name,
//       id: id,
//       price: price,
//       amount: 1,
//     });
//   }
//   addCandy(candyStore, "767", "Tortit", 56);
//   console.log(candyStore)
// 4. Implement the following buy function: The function
// should add the candy price to the cashRegister, and
// decrease the amount property of the relevant candy.
// function functionbuy(candyStore, id) {
//   candyStore.candies.find((ids) => {
//     if (ids.id == id) {
//       ids.amount -= 1;
//       candyStore.cashRegister += ids.price;
//     }
//   });
// }
// functionbuy(candyStore, "767");
// console.log(candyStore);


let x="5";
x=6;
console.log(typeof(x));
