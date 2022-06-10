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
export function getSinglePokemon(id: string | number) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
}

export async function getAllInfo(id: string | number){
  try{
    const response = await getSinglePokemon(id);
    const values = JSON.stringify(response.data);
    return values;
  }catch(error){
    console.log(error)
  }
}

export async function getTypes(id: string | number){
  try{
    const response = await getSinglePokemon(id);
    const size = Object(response.data.types)
    for(let i = 0; i < size.length; i++){
      let types = JSON.stringify(response.data.types[i].type);
      console.log(types);
    }
  }catch(error){
    console.log(error);
  }
}

export async function getMoves(id: string | number){
  try{
    const response = await getSinglePokemon(id);
    const size = Object(response.data.moves);
    const moves = JSON.stringify(response.data.moves);
    for(let i=0; i<4; i++){
      let index: number =Math.floor(Math.random()*size.length);
      let moves = JSON.stringify(response.data.moves[index].move);
      console.log(moves);
    }
    return moves;
  }catch(error){
    console.log(error);
  }
}

function getNewPokemons<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    listOfIds = [1,2,3];
  }
}

function newPokemons<T>(): any {
  return(
    target: Object,
    propertyKey: string,
    descriptor: any
  ) : TypedPropertyDescriptor<T> =>{
    const newPokemon = descriptor.value;
    descriptor.value = function(...args: any[])
    {
      return newPokemon.apply(this, args).then((res: Response) => res.json());
    };
    return descriptor;
  }
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
    //this.moves = getMoves(pokemon.move)
    // you can only choose four moves from the list of moves
    // this.moves = someFn(pokemon.moves);
  }

  displayInfo() {
    console.log(`==========================`);
    console.log(`${this.id} ${this.name}`);
    this.types.forEach(type => {
      console.log(`${type.name}`);
    });
    this.moves.forEach(move => {
      console.log(`${move.name}`);
    });
  }
}

export class PokemonTrainer {
  name: string;
  pokemons: Pokemon[] = [];
  listOfIds: number[] = [2,4];
  constructor(name: string) {
    this.name = name;
  }

  async getPokemons() {
    const listPokemons = this.listOfIds.map(id => getSinglePokemon(id));
    const results = await Promise.all(listPokemons)
    results.forEach(result => {
      this.pokemons.push(new Pokemon(result.data));
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
