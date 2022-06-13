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

/*const MAX_POKEMONS = 500;

export function getSinglePokemon(id: string | number) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
}

async function getInfo(id: string) {
  const response = await getSinglePokemon(id);
  return response.data;
}

function getNewPokemonss(id: number | string){
  return function <T extends { new(...args: any[]): { } }>(constructor: T) {
    return class extends constructor {

    }
  }
}

export async function getAllInfo(id: string | number){
    const response =  getSinglePokemon(id);
    const values =  await Promise.resolve(response);
    return values;
}

export async function getInfoPokemon(pokemon: string | number) {
  const response = await getSinglePokemon(pokemon);
  
  const name = response.data.name;
  const id = response.data.id;
  const moves: Move[] = [];
  const types: Type[] = [];
  }

export async function getTypes(id: string | number){
    const response = await getSinglePokemon(id);
    const size = response.data.types
    for(let i = 0; i < size.length; i++){
      let types = JSON.stringify(response.data.types[i].type);
      console.log('Types: '+ types);
    }
}

export async function getMoves(id: string | number){
    const response = await getSinglePokemon(id);
    const size = response.data.moves;
    const moves = JSON.stringify(response.data.moves);
    for(let i=0; i<4; i++){
      let index: number =Math.floor(Math.random()*size.length);
      let moves = JSON.stringify(response.data.moves[index].move);
      console.log('Moves: ' + moves);
    }
    return moves;
}

async function getMovess(moves: Move[]){
  let fourMoves: Move[] = [];
  const size = moves.length;
  for(let i = 0; i < 4; i++){
    fourMoves = getAllInfo().map()
  }
}

function getNewPokemons<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    listOfIds = getRandomNumbers(TEAM_SIZE, NUMBER_OF_POKEMONS)
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
    /*
    this.types = getPokemonTypes(pokemon.types);
    this.moves = getRandomPokemonMoves(pokemon.moves);
    */ 
 // }

 /* async getPokemonMoves(moves: Move[]) {
    const baseMoves: Move[]; //= getRandomPokemonMoves(moves);
    const listMoves = baseMoves.map(move => getSingleMove(move.url));
    const result = await Promise.all(listMoves);
    result.forEach((result, i) =>{
      const fullMove = {
        name: result.data.name,
        url: baseMoves[i].url,
        type: result.data.type,
        damage: result.data.power,
        powerPoints: result.data.pp,
        accuracy: result.data.accuracy
      }
      this.moves.push(fullMove);
    })
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
*/


//https://firebase.google.com/docs/firestore/data-model?hl=es-419 
//https://www.iteramos.com/pregunta/85996/subcolecciones-de-consulta-de-firestore
//https://cloud.google.com/firestore/docs/query-data/queries?hl=es-419
//https://firebase.google.com/docs/firestore/query-data/queries
//https://cloud.google.com/firestore/docs/data-model?hl=es-419

