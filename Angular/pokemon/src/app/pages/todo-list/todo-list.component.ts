import { Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  toDo: string = ''
  //ngModel
  /*@Output()
  todosChange: EventEmitter<string> = new EventEmitter<string>();*/
  @ViewChild('toDos', { static: false}) todosElement: ElementRef;
  messages: string[] = [];
  constructor(todosElement: ElementRef) {
    this.todosElement = todosElement;
    this.messages = [];
  }

  ngOnInit(): void {
  }

  changesMade(){
    this.toDo = this.todosElement.nativeElement.value;
    this.messages.push(this.toDo)
  }

  
  createTodo(){
    this.messages.push(this.todosElement.nativeElement.value);
  }

  deleteTodo(index: number){
    console.log('click')
    this.messages.slice(index, 1)
  }
}
