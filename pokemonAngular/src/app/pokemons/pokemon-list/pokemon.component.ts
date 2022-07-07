import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { Pokemon } from '../utils/types';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon.compoment.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemonData: Pokemon[] = [];
  findPokemon = '';
  limit: number = 50;
  offset: number = 0;
  searchedPokemons: Pokemon[] = [];
  loading: boolean;

  constructor(private pokedexService: PokedexService) {
    this.loading = false;
  }

  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    this.pokemonData = [];
    this.pokedexService
      .getPokemonList(this.limit, this.offset)
      .subscribe((data: { results: Pokemon[] }) => {
        this.pokemonData = [...this.pokemonData, ...data.results];
        this.searchedPokemons = this.pokemonData;
        this.loading = false;
        this.offset += this.limit;
      });
  }

  searchPokemon(pokemon: string) {
    this.pokemonData = this.searchedPokemons.filter((res) =>
      res.name.includes(pokemon)
    );
  }

  loadMorePokemons(): void {
    this.loading = true;
    this.getPage();
  }

}
