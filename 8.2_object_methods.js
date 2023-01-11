let myCountry={
    country : 'israel' ,
    capital : 'jerusalem' ,
    language : 'hebrew' ,
    population: '9.44m',
    neighbors: ["jordan", "egypt", "suria"],

    describe: function () {
      return `${this.country} has ${this.population} their mother tongue is ${this.language} they have 3 neighboring countries ${this.neighbors} and a capital ${this.capital}`;
    },
  
    checkIsland: function () {
      if (this.neighbors === 0) {
        return true;
      } else {
        return false;
      }
    },
  };
  
  console.log(myCountry.describe());
  console.log(myCountry.checkIsland());



                
 