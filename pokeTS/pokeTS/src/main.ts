import { PokemonTrainer, getSinglePokemon, getTypes, getAllInfo, getMoves } from  "./Pokemon";

const pokemonMaster = new PokemonTrainer("Misty");
pokemonMaster.showTeam();

console.log(Promise.resolve(getSinglePokemon(2)));
console.log(getTypes(1));
console.log(getMoves(1));
console.log(getAllInfo(1));