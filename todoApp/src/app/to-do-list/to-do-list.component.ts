import { Component } from "@angular/core";

@Component({
    selector: 'app-to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.css']
})

export class TodoListComponent {
    toDo: string = '';
    messages: string[] = [];
    iscomplete: boolean = false;

    constructor() { }

    saveToDo() {
     this.messages.push(this.toDo);
     this.toDo = '';
    }

    deleteToDo(index: number) {
        this.messages.splice(index);
    }
    
    deleteAll() {
        this.messages = [];
    }

    changeStyle() {
        this.iscomplete = !this.iscomplete;
    }

}