import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export interface PokemonData {
    name: string;
    url: string;
}

export interface PokemonDetails {
    index: number;
    data: Object;
}

@Injectable()
export class PokedexService {
    private pokemonURL: string = 'https://pokeapi.co/api/v2/pokemon';
    
    constructor(private http: HttpClient) { }

    getPokemons(pokemonId: string | number) {
        return this.http.get(`${this.pokemonURL}/${pokemonId}`)
    }

}