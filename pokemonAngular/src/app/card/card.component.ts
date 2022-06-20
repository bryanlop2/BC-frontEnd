import { Component, OnInit } from "@angular/core";
import { PokedexService } from '../services/pokedex.service';


@Component({
    selector: 'app-card',
    templateUrl: './card.compoment.html',
    styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
    pokemons = [];
    pokemonData: any[] = [];

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
                data: res
            };
            this.pokemonData.push(pokemonResults);
            }
        );
        }
    }

}