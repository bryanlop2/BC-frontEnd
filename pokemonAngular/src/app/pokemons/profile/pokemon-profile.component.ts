import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetails } from '../utils/types';

@Component({
  selector: 'pokemon-profile-card',
  templateUrl: './pokemon-profile.component.html',
})
export class PokemonProfileComponent implements OnInit {
  id: any = '';
  fields?: any;
  pokemon: PokemonDetails[] = [];
  singlePokemonInfo: any;

  constructor(
    private location: Location,
    private pokedexService: PokedexService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pokedexService.getPokemonList(this.id - 1).subscribe((details) => {
      this.fields = details;
    });
  }

  goBack(): void {
    this.location.back();
    console.log(this.fields);
  }

  getInfo() {
    this.pokedexService.getPokemonDetails(this.id).subscribe(pokemon => {
      this.singlePokemonInfo = pokemon;
    });
  }
}
