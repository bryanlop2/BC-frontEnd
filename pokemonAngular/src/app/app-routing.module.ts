import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemons/pokemon-list/pokemon.component';

const routes: Routes = [
    {
        path: 'pokedex',
        component: PokemonListComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class PokemonRoutingModule { }