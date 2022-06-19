import { Component } from "@angular/core";


@Component({
    selector: 'app-card',
    templateUrl: './card.compoment.html',
    styleUrls: ['./card.component.css']
})

export class CardComponent {
    private pokemonURL = 'https://pokeapi.co/api/v2/';

    constructor() { }

}