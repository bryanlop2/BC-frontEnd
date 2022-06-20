import { Component, OnInit } from "@angular/core";
import { PokedexService } from '../services/pokedex.service';


@Component({
    selector: 'app-card',
    templateUrl: './card.compoment.html',
    styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
    pokemons = [];
    data: any[] = [];

    constructor(private pokedexService: PokedexService) { }

    ngOnInit(): void {
        this.getPokemons();
    }

    getPokemons(): void {
        let pokemonResults;
    
        for (let i = 1; i <= 100; i++) {
        this.pokedexService.getPokemons(i).subscribe(
            res => {
                pokemonResults = {
                index: i,
                name: res,
                image: res,
                color: res
            };
            //ponemos la data que viene del servicio en un arreglo
            this.data.push(pokemonResults);
            }
        );
        }
    }


    /*getData() {
        this.pokedexService.getPokemons().subscribe((
            pokemon: PokemonData[]
        )=>{this.getPokemon(pokemon)})
    }

    getPokemon(pokemons: PokemonData[]) {
        const result: Observable<PokemonDetails>[] = [];
        pokemons.map((data: PokemonData) => {
            result.push(
                this.pokedexService.getPokemonDetail(data.name)
            );
        });
    }*/
}