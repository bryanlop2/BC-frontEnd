import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './utils/types';

@Injectable()
export class PokedexService {
    private pokemonURL: string = 'https://pokeapi.co/api/v2/pokemon';
    
    constructor(private http: HttpClient) { }

    getPokemons(pokemonId: string | number) {
        //for (let pokemonId = 1; pokemonId <= 20; pokemonId++) {
            return this.http.get(`${this.pokemonURL}/${pokemonId}`)
        //}
    }

}