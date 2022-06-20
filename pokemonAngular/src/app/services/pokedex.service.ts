import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Observable } from "rxjs/internal/Observable";

export interface PokemonData {
    name: string;
    url: string;
}

export interface PokemonDetails {
    id: number;
    name: number;
    sprite: string;
}

@Injectable()
export class PokedexService {
    private pokemonURL: string = 'https://pokeapi.co/api/v2/pokemon';
    
    constructor(private http: HttpClient) { }

    getPokemons(pokemonId: string | number) {
        return this.http.get(`${this.pokemonURL}/${pokemonId}`)
    }

}