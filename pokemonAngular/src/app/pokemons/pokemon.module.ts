import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PokemonListComponent } from './pokemon-list/pokemon.component';
import { FormsModule } from '@angular/forms';
import { PokedexService } from "./pokedex.service";
import { CoreModule } from '../core/core.module';

@NgModule({
    declarations: [
        PokemonListComponent        
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CoreModule
    ],
    exports: [
        PokemonListComponent        
    ],
    providers: [PokedexService]
})
export class PokemonModule { }