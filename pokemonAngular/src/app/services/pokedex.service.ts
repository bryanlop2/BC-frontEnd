import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Observable } from "rxjs/internal/Observable";

interface PokemonData {
    name: string;
    url: string;
}

interface PokemonDetails {
    id: number;
    order: number;
    name: string;
}

@Injectable()
export class PokedexService {
    private pokemonURL: string = 'https://pokeapi.co/api/v2/pokemon/';

    constructor(private http: HttpClient) { }

    getPokemons(limit: number = 100) : Observable<PokemonData[]> {
        return this.http.get<PokemonData[]>(this.pokemonURL + '&limit=' + limit)
        .pipe(
            map((pokemon: any) => pokemon.results)
        )
    }

    getPokemonDetail(pokemon: number | string): Observable<PokemonDetails> {
        return this.http.get<PokemonDetails>(this.pokemonURL + 'pokemon/' + pokemon);
    }

}