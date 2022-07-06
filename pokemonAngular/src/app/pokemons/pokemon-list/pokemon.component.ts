import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokedexService } from '../pokedex.service';
import { Pokemon } from '../utils/types';
import { colors, getPokemonImageUri } from '../utils/values';

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

  constructor(private pokedexService: PokedexService, private router: Router) {
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

  getBackgroundColors(pokemon: Pokemon) {
    let color;
    const mainColors = Object.values(colors);
    if (pokemon.url) color = mainColors[this.getId(pokemon.url) - 1];
    return color;
  }

  searchPokemon(pokemon: string) {
    this.pokemonData = this.searchedPokemons.filter((res) =>
      res.name.includes(pokemon)
    );
  }

  getNumbers(pokemon: Pokemon) {
    if (pokemon.url) return ('00' + this.getId(pokemon.url)).slice(-3);
    else return undefined;
  }

  getImages(pokemon: Pokemon) {
    if (pokemon.url) return getPokemonImageUri(this.getId(pokemon.url));
    else return null;
  }

  getId(link: string) {
    const url = link.split('/'),
      index = url[url.length - 2];
    return +index;
  }

  loadMorePokemons(): void {
    this.loading = true;
    this.getPage();
  }

  goToPokemonProfile(pokemon: Pokemon) {
    if (pokemon.url)
      this.router.navigate([`/pokedex/${this.getId(pokemon.url)}`]);
  }
}
