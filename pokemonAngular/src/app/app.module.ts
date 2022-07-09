import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonModule } from './pokemons/pokemon.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, AppRoutingModule, HttpClientModule], //AppRoutingModule, BrowserModule, HttpClientModule
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
