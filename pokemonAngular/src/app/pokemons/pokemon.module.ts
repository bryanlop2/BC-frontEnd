import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PokemonListComponent } from './pokemon-list/pokemon.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../core/header/header.component";
import { FooterComponent } from "../core/footer/footer.component";
import { PokedexService } from "./pokedex.service";
import { NotFoundComponent } from '../core/notFound/notFound.component';
import { SearchComponent } from '../core/search/search.component';

@NgModule({
    declarations: [
        PokemonListComponent,
        HeaderComponent,
        FooterComponent,
        NotFoundComponent,
        SearchComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [
        PokemonListComponent,
        HeaderComponent,
        FooterComponent,
        NotFoundComponent,
        SearchComponent
    ],
    providers: [PokedexService]
})
export class PokemonModule { }