// You are given a function, Pokeman, that takes three
// parameters, pokemonName, pokemonType, an array of
// different pokemon attack methods, pokemonAttackList.
// 1. Create three instances of the Pokemon and save them in
// a variable.
// 2. Using prototype properties, add the following methods:
// ● A method called callPokemon will print the following:
// “I choose you, <pokemon name>
// ● • A method called attack that takes one parameter,
// an attack number, that will print the specific attack
// method from the pokemonAttackList array as the
// following: “<pokemon name> used <attack method>”
// Call each pokemon with the 2 methods you created.
// Here is the Pokemon function:

function Pokemon(pokemonName, pokemonType,
pokemonAttackList){
this.name = pokemonName;
this.type = pokemonType;
this.attackList = pokemonAttackList;
}
Pokemon.prototype.callPokemon = function(){
    console.log("I choose you, " + this.name )

}
Pokemon.prototype.attack  = function(number){
    let x= this.attackList[number]

    console.log( this.name+" attack with " +x)
}

let aml =new Pokemon("Aml", "Dragon" , [1,2,3,4])
let eLad =new Pokemon("ELad", "Dark" , ["sneezing",4,5,8])
let itamar =new Pokemon("Itamar", "Grass" , [6,8,9,7])
let noha =new Pokemon("Noha", "Ghost" ,[6,2,3,5] )

aml.callPokemon()
eLad.attack(0)