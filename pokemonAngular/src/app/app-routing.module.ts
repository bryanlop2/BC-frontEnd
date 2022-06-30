import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemons/pokemon-list/pokemon.component';
import { PokemonProfileComponent } from './pokemons/profile/pokemon-profile.component';

const routes: Routes = [
        {path: 'pokedex', component: PokemonListComponent},
        {path: 'pokedex/:id', component: PokemonProfileComponent},
        {path: '', redirectTo: 'pokedex', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class PokemonRoutingModule { }