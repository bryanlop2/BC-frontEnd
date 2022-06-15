import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './pages/todo-list/todo-list.component.html',
  styleUrls: ['./pages/todo-list/todo-list.component.css']
})
export class AppComponent implements OnInit {
  @Input()
  toDo: string;
  /*@Output()
  todosChange: EventEmitter<string> = new EventEmitter<string>();*/
  @ViewChild('toDos', { static: false}) todosElement: ElementRef;
  title = 'pokemon';
  messages: string[];

  constructor(todosElement: ElementRef) {
    this.todosElement = todosElement;
    this.messages = [];
    this.toDo = '';
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  changesMade(){
    this.toDo = this.todosElement.nativeElement.value;
  }

  createTodo(){
    this.messages.push(this.toDo);
  }

  deleteTodo(index: number){
    this.messages.slice(index, 1)
  }
}
