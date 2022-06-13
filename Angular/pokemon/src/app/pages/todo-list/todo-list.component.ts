import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  toDo: string = ''
  //@Output()
  @ViewChild('todos', { static: false}) todosElement: ElementRef;
  constructor(todosElement: ElementRef) {
    this.todosElement = todosElement;
   }

  ngOnInit(): void {
  }

}
