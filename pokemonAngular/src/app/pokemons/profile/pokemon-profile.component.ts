import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetails, PokemonProfile } from '../utils/types';

@Component({
  selector: 'pokemon-profile-card',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.scss'],
})
export class PokemonProfileComponent implements OnInit {
  id: any;
  fields: any = [];
  pokemon: PokemonDetails[] = [];
  species: any;
  generation: any;
  evolution: any;
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
    this.getInfoForFields();
    this.getGeneration();
    this.getEvolution();
  }

  goBack(): void {
    this.location.back();
  }

  getInfoForFields() {
    this.pokedexService.getPokemonDetails(this.id).subscribe((details: PokemonProfile) => {
      this.fields = details;
      console.log(this.fields)
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
      console.log(this.generation)
    })
  }

  getNumbers() {
    return ('00' + this.id).slice(-3);
  }

  getEvolution() {
    this.pokedexService.getPokemonEvolutiontree(this.id).subscribe(evolution => {
      this.evolution = evolution;
      console.log(this.evolution)
    })
  }
}
