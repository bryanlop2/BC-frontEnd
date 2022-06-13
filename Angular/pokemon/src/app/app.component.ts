import { Component, Input } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './pages/todo-list/todo-list.component.html',
  styleUrls: ['./pages/todo-list/todo-list.component.css']
})
export class AppComponent {
  @Input()
  toDo: string = '';
  title = 'pokemon';
}
