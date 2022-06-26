import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonModule } from './pokemons/pokemon.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PokemonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
