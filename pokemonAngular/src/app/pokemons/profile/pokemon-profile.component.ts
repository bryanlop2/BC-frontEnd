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
  fields: any = [];
  pokemon: PokemonDetails[] = [];
  singlePokemonInfo: any;
  species: any;
  generation: any;
  profile: PokemonProfile[] = [];

  constructor(
    private location: Location,
    private pokedexService: PokedexService,
    private route: ActivatedRoute
  ) {
    this.id = 0;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.fields)
    this.getInfoForFields();
    this.getGeneration();
  }

  goBack(): void {
    this.location.back();
  }

  getInfoForFields() {
    this.pokedexService.getPokemonDetails(this.id).subscribe((details: PokemonProfile) => {
      this.fields = details;
    });
  }

  getSpecies() {
    this.pokedexService.getPokemonSpecies(this.id).subscribe((species) => {
      this.species = species;
    });
  }

  getGeneration() {
    this.pokedexService.getPokemonGeneration(this.id).subscribe((generation) => {
      this.generation = generation;
    })
  }
  getNumbers() {
    return ('00' + this.id).slice(-3);
  }
}
