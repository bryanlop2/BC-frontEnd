import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './utils/types';
import { Observable } from "rxjs/internal/Observable";

@Injectable({
    providedIn: 'root'
})

export class PokedexService {

    constructor(private http: HttpClient) { }
    private api = 'https://pokeapi.co/api/v2';

    getPokemonList(limit: number, offset: number) {
        return this.http.get(`${this.api}/pokemon?limit=${limit}&offset=${offset}`) as Observable<{results: Pokemon[]}>
    }

    getPokemonDetails(pokemon: number | string) {
        return this.http.get(this.api + '/pokemon/'+ pokemon)
    }

    getPokemonSpecies(pokemon: number | string) {
        return this.http.get(`${this.api}/pokemon-species/${pokemon}`)
    }
}