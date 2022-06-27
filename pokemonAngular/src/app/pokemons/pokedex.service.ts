import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './utils/types';
import { Observable } from "rxjs/internal/Observable";
import { catchError } from "rxjs";

@Injectable()
export class PokedexService {
    private pokemonURL: string = 'https://pokeapi.co/api/v2/pokemon';
    private searchURL: string = 'https://pokeapi.co/api/v2/pokemon'

    constructor(private http: HttpClient) { }

    getPokemons(pokemonId: string | number) {
        return this.http.get(`${this.pokemonURL}/${pokemonId}`)
    }

    searchPokemon(pokemonName: string) {
        return this.http.get(`${this.searchURL}/${pokemonName}`);
    }

}