import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetails, PokemonProfile } from '../utils/types';

@Component({
  selector: 'pokemon-profile-card',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.css'],
})
export class PokemonProfileComponent implements OnInit {
  id: any;
  fields: any = {};
  pokemon: PokemonDetails[] = [];
  singlePokemonInfo: any;
  species: any;

  constructor(
    private location: Location,
    private pokedexService: PokedexService,
    private route: ActivatedRoute
  ) {
    this.id = 0;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getInfoForFields();
  }

  goBack(): void {
    this.location.back();
    console.log(this.fields);
  }

  getInfoForFields() {
    this.pokedexService.getPokemonDetails(this.id).subscribe((details) => {
      this.fields = details;
    });
  }

  getSpecies() {
    this.pokedexService.getPokemonSpecies(this.id).subscribe((species) => {
      this.species = species;
    });
  }
}
