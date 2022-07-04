import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
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

    constructor(private pokedexService: PokedexService,
        private router: Router) { 
            //this.loadMorePokemons()
        }
    
    ngOnInit(): void {
        this.pokedexService.getPokemonList(this.offset, this.limit)
        .subscribe((data: {results: Pokemon[]}) => {this.pokemonData = [...this.pokemonData, ...data.results];
        this.searchedPokemons = this.pokemonData});
        //this.offset += this.limit;
    }

    getBackgroundColors(pokemon: Pokemon) {
        let color
        const mainColors = Object.values(colors);
        if(pokemon.url)
        color = mainColors[this.getId(pokemon.url)-1];
        return color;
    }

    searchPokemon(pokemon: string) {
        console.log(pokemon);
        this.pokemonData = this.searchedPokemons.filter(
            res => res.name.includes(pokemon)
        )
    }

    getNumbers(pokemon: Pokemon) {
        if(pokemon.url)
        return ('00' + this.getId(pokemon.url)).slice(-3);
        else
        return undefined
    }

    getImages(pokemon: Pokemon) {
        if(pokemon.url)
        return getPokemonImageUri(this.getId(pokemon.url))
        else
        return null
    }

    getId(link: string) {
        const url = link.split('/'),
        index = url[url.length - 2];
        return +index;
    }

    loadMorePokemons(): number {
        console.log('click this button');
        return this.offset += 50;
    }

    goToPokemonProfile(pokemon: Pokemon) {
        if(pokemon.url)
        this.router.navigate([`/pokedex/${this.getId(pokemon.url)}`])
    }
}