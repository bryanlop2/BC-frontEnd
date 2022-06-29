import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PokedexService } from "../pokedex.service";
import { Pokemon } from "../utils/types";
import { colors, getPokemonImageUri } from '../utils/values';


@Component({
    selector: 'pokemon-card',
    templateUrl: './pokemon.compoment.html',
    styleUrls: ['./pokemon.component.css']
})

export class PokemonListComponent implements OnInit {
    pokemonData: Pokemon[] = [];
    findPokemon = '';
    limit: number = 50;
    offset: number = 0;
    searchedPokemons: Pokemon[] = [];

    constructor(private pokedexService: PokedexService) { }
    
    ngOnInit(): void {
        this.pokedexService.getPokemonList(this.offset, this.limit)
        .subscribe((data: {results: Pokemon[]}) => {this.pokemonData = [...this.pokemonData, ...data.results];
        this.searchedPokemons = this.pokemonData});
        this.offset += this.limit;
    }

    getBackgroundColors(index: number) {
        const mainColors = Object.values(colors);
        const color = mainColors[index];
        return color;
    }

    searchPokemon(pokemon: string) {
        console.log(pokemon);
        this.pokemonData = this.searchedPokemons.filter(
            res => res.name.includes(pokemon)
        )
    }

    getNumbers(index: number) {
        return ('00' + index).slice(-3);
    }

    getImages(index: number) {
        return getPokemonImageUri(index)
    }
}