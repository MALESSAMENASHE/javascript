const obj1 = {
    firstName: "Leo",
    lastName: "Messi",
    age: 34,
  };
  
  const obj2 = {};
  // for (const [key, value] of Object.entries(obj1)) {
  //   console.log(Object.assign(obj2, { `${key}`: `${value}` }));
  // }
  
  function swap(obj) {
    let result = {};
    for (let i in obj) {
      result[obj[i]] = i;
      console.log(obj[i]);
      console.log(i);
    }
    return result;
  }
  
  // i=> Key obj[i]=value
  console.log(swap(obj1));
  // obj1.firstName;
  // console.log(obj1["firstName"]);