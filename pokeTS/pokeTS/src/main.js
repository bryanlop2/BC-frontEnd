"use strict";
exports.__esModule = true;
var Pokemon_1 = require("./Pokemon");
var pokemonMaster = new Pokemon_1.PokemonTrainer("Misty");
pokemonMaster.showTeam();
console.log(Promise.resolve((0, Pokemon_1.getSinglePokemon)(2)));
console.log((0, Pokemon_1.getTypes)(1));
console.log((0, Pokemon_1.getMoves)(1));
console.log((0, Pokemon_1.getAllInfo)(1));
//# sourceMappingURL=main.js.map