import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { PokemonListComponent } from './pokemons/pokemon-list/pokemon.component';
import { PokemonProfileComponent } from './pokemons/profile/pokemon-profile.component';

const routes: Routes = [
  // { path: 'pokedex', component: PokemonListComponent },
  // { path: 'pokedex/:id', component: PokemonProfileComponent },
  // { path: '', redirectTo: 'pokedex', pathMatch: 'full' },
  {
    path: 'pokedex',
    loadChildren: ()=> import('./pokemons/pokemon.module').then(m => m.PokemonModule)
  },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
