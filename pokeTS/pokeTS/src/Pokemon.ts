import axios from "axios";
/*

Pokemon class
  - one pokemon has name, id, types and moves
  

List of goals:
  - create a function to get all information of a pokemon from result of getSinglePokemon
  - get a List of types from a pokemon, assing to a variable called types
  - get a List of moves from a pokemon, you can only choose 4 moves by pokemon, those moves should be aleatory
  - fill Moves with missing data from Types you can get the information from url of the move.
  - re-write decortator to get new pokemons Ids in PokemonTrainer class 
*/

const MAX_POKEMONS = 1000;

export function getSinglePokemon(id: string | number) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
}

export async function getAllPokemonInfo(pokemon: string | number) {
  const response = await getSinglePokemon(pokemon);
  
  const name = response.data.name;
  const id = response.data.id;
  const moves: Move[] = [];
  const types: Type[] = [];

  getMoves(response, moves);

  getTypes(response, types);
  
  return {name, id, moves, types};
}

async function getTypes(response, types: Type[]){
  response.data.types.forEach(pokemonTypes => {
    const name = pokemonTypes.type.name;
    const url = pokemonTypes.type.url
    types.push({name, url});
  }) 
}

async function getMoves(response, moves: Move[]) {
  response.data.moves.forEach(pokeMoves => {
    const name = pokeMoves.move.name;
    const url = pokeMoves.move.url;
    moves.push({name, url});
  })
}

function getNewPokemons(teamSize: number){
  return function <T extends { new(...args: any[]): { } }>(constructor: T) {
    return class extends constructor {
      listOfIds = getRandomIDs(teamSize, MAX_POKEMONS);
    }
  }
}

export function getRandomIDs(size: number, max: number){
  let pokemonID: number[] = [];
  while(pokemonID.length < size){
    let random = Math.floor(Math.random()*max);
    pokemonID.push(random);
  }
  return pokemonID;
}

type Move = {
  name: string;
  url: string;
  type?: string;
  damage?: number; // power
  powerPoints?: number; // pp
  accuracy?: number;
};

type Type = {
  name: string;
  url: string;
};

export class Pokemon {
  name: string = '';
  id: number = 0;
  moves: Move[] = [];
  types: Type[] = [];

  constructor(pokemonResult: any) {
    this.buildFieldsPokemon(pokemonResult);
  }

  buildFieldsPokemon(pokemon: any) {
    this.name = pokemon.name;
    this.id = pokemon.id;
    this.moves = this.fourMoves(pokemon.moves);
    this.types = pokemon.types;
    
  }
  fourMoves(moves: Move[]){
    let selectedMove: Move[] = [];
    for(let i = 0; i < 4; i++){
      let index = Math.floor(Math.random()*moves.length);
      selectedMove.push(moves[index]);
    }
    return selectedMove;
  }

  displayInfo() {
    console.log(`============================== (＾ｖ＾)`);
    console.log(`${this.id} ${this.name}`);

    console.log('\n 🔰 Types:');
    this.types.forEach(type => {
      console.log(`- NAME: ${type.name}, URL: ${type.url}`);
    });
    console.log('\n ✨ Moves:')
    this.moves.forEach(move => {
      console.log(`- NAME: ${move.name}, URL: ${move.url}`);
    });
  }
}
@getNewPokemons(6)
export class PokemonTrainer {
  name: string;
  pokemons: Pokemon[] = [];
  listOfIds: number[] = [];
  constructor(name: string) {
    this.name = name;
  }

  async getPokemons() {
    const listPokemons = this.listOfIds.map(id => getAllPokemonInfo(id));
    const results = await Promise.all(listPokemons)
    results.forEach(result => {
      this.pokemons.push(new Pokemon(result));
    });
  }

  async showTeam() {
    await this.getPokemons();
    console.log('Trainer:', this.name);
    this.pokemons.forEach(pokemon => {
      pokemon.displayInfo();
    });
  }
}
