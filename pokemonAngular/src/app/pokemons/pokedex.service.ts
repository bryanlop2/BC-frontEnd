import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './utils/types';
import { Observable } from "rxjs/internal/Observable";
import { catchError } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class PokedexService {

    constructor(private http: HttpClient) { }
    private api = 'https://pokeapi.co/api/v2';

    getPokemonList(offset: number = 0, limit: number = 25) {
        return this.http.get(`${this.api}/pokemon?limit=${limit}&offset=${offset}`) as Observable<{results: Pokemon[]}>
    }

    getPokemons(pokemonId: string | number) {
        return this.http.get(`${this.api}/${pokemonId}`)
    }

}