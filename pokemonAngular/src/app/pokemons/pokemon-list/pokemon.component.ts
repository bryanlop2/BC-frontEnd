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
    search: string = '';
    
    constructor(private pokedexService: PokedexService) { }
    filterPokemon = '';
    ngOnInit(): void {
        this.getPokemons();
    }

    getPokemons() {
        let pokemonData;
        
        for (let i = 1; i <= 150; i++) {
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

    searchPokemon(data: any) {
        const newArray: any[] = [];
        let content: any[] = newArray;
        content = content.filter(function (ele, i, array) {
            let arrayelement = ele.name.toLowerCase()
            return arrayelement.includes(data)
          })
    }

}