import { Component, OnInit } from "@angular/core";
import { PokedexService } from "../pokedex.service";
import { colors, fetchPokemon } from '../utils/values';


@Component({
    selector: 'pokemon-card',
    templateUrl: './pokemon.compoment.html',
    styleUrls: ['./pokemon.component.css']
})
//https://github.com/domini-code/filterPipe/blob/master/src/app/components/posts/posts.component.html
export class PokemonListComponent implements OnInit {
    pokemonData: any[] = [];
    pokemonBackgroundColor: string[] = [];
    findPokemon = '';
    result: string[] = [];

    constructor(private pokedexService: PokedexService) { }
    
    ngOnInit(): void {
        this.getPokemons();
        console.log(fetchPokemon());
    }

    getPokemons() {
        let pokemonData;
        
        for (let i = 1; i <= 20; i++) {
        this.pokedexService.getPokemons(i).subscribe(res => {
                pokemonData = {
                index: i,
                data: res
            };
            this.pokemonData.push(pokemonData);
        });
        }
    }

    getBackgroundColors(index: number) {
        const mainColors = Object.values(colors);
        const color = mainColors[index];
        return color;
    }

    searchPokemon(name: string) {
        let pokeData;
        console.log('escrito: ', name);
        this.pokemonData.filter(res => {
            pokeData = {
                data: res.data.name
        }
        const resulto = pokeData.data;
        if(resulto.toLowerCase().indexOf(name.toLowerCase()) > -1) {
            console.log('resultados ', resulto);
            this.result.push(resulto)
        }  
        });
    }

    getNumbers(index: number) {
        return ('00' + index).slice(-3);
    }
}