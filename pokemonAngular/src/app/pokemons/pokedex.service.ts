import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon, PokemonProfile } from './utils/types';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  constructor(private http: HttpClient) {}
  private api = 'https://pokeapi.co/api/v2';
  private evolution = 'evolution-chain';

  getPokemonList(limit: number, offset: number) {
    return this.http.get(
      `${this.api}/pokemon?limit=${limit}&offset=${offset}`
    ) as Observable<{ results: Pokemon[] }>;
  }

  getPokemonDetails(pokemon: number | string) {
    return this.http.get(this.api + '/pokemon/' + pokemon);
  }

  getPokemonSpecies(pokemon: number | string) {
    return this.http.get(`${this.api}/pokemon-species/${pokemon}`) as Observable<{ results: PokemonProfile[] }>;
  }

  getPokemonGeneration(pokemon: number | string) {
    return this.http.get(`${this.api}/generation/${pokemon}`);
  }

  getPokemonEvolutiontree(pokemon: number | string) {
    return this.http.get(`${this.api}/${this.evolution}/${pokemon}`)
  }

  getPokemonImage(pokemon: number | string) {
    return this.http.get(`${this.api}/${this.evolution}/${pokemon}`)
  }

  evolutionId(id: number): number {
    if(id <=3){
      return 1
    }else if( id >3 && id <=6){
      return 2
    }else if( id >6 && id <=9){
      return 3
    }else{
      return 4
    }
  }
}
