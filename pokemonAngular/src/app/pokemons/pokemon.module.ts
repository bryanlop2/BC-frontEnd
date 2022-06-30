import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PokemonListComponent } from './pokemon-list/pokemon.component';
import { FormsModule } from '@angular/forms';
import { PokedexService } from "./pokedex.service";
import { CoreModule } from '../core/core.module';
import { PokemonProfileComponent } from './profile/pokemon-profile.component';
import { PokemonRoutingModule } from '../app-routing.module';

@NgModule({
    declarations: [
        PokemonListComponent,
        PokemonProfileComponent        
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CoreModule,
        
    ],
    exports: [
        PokemonListComponent,
        PokemonProfileComponent,
        PokemonRoutingModule        
    ],
    providers: [PokedexService]
})
export class PokemonModule { }