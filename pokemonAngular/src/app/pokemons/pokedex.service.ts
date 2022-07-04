import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './utils/types';
import { Observable } from "rxjs/internal/Observable";

@Injectable({
    providedIn: 'root'
})

export class PokedexService {

    next: number | string = 100;
    constructor(private http: HttpClient) { }
    private api = 'https://pokeapi.co/api/v2';

    getPokemonList(offset: number = 0, limit: number = 25) {
        return this.http.get(`${this.api}/pokemon?limit=${limit}&offset=${offset}`) as Observable<{results: Pokemon[]}>
    }

    getNext() {
        const url = this.next === '' ? `${this.api}?limit=100` : this.next;
    }

    getPokemonDetails(pokemon: number | string) {
        return this.http.get(this.api + '/pokemon/'+ pokemon)
    }
}