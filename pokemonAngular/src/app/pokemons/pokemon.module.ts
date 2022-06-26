import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PokemonListComponent } from './pokemon-list/pokemon.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../core/header/header.component";
import { FooterComponent } from "../core/footer/footer.component";
import { PokedexService } from "./pokedex.service";

@NgModule({
    declarations: [
        PokemonListComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [
        PokemonListComponent,
        HeaderComponent,
        FooterComponent
    ],
    providers: [PokedexService]
})
export class PokemonModule { }