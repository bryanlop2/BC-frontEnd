import { Component } from "@angular/core";


@Component({
    selector: 'app-card',
    templateUrl: './card.compoment.html',
    styleUrls: ['./card.component.css']
})

export class CardComponent {

    constructor() { }

    getPrincipalType(list: any[]) {
        return list.filter(type => type.slot === 1)[0]?.type.name;
    }
}