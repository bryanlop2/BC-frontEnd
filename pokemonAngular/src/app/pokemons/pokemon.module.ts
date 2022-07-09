import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonListComponent } from './pokemon-list/pokemon.component';
import { FormsModule } from '@angular/forms';
import { PokedexService } from './pokedex.service';
import { CoreModule } from '../core/core.module';
import { PokemonProfileComponent } from './profile/pokemon-profile.component';
import { PokemonCardComponent } from './pokemon-list/pokemon-card/pokemon-card.component';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemon-routing.module';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonProfileComponent,
    PokemonCardComponent,
  ],
  imports: [CommonModule, FormsModule, CoreModule, PokemonRoutingModule],
  exports: [ ],
  providers: [],
})
export class PokemonModule {}
