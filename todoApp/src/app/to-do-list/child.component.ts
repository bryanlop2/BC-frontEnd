import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <span class="text">{{ message }}</span>
  `,
  styleUrls: ['./onchange.css'],
})
export class ChildComponent implements OnChanges {
  message: string = '';
  @Input() loggedIn: boolean = false;
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes['loggedIn'].currentValue === true) {
      this.message = 'Welcome back!';
    } else {
      this.message = 'Please log in';
    }
  }
}
