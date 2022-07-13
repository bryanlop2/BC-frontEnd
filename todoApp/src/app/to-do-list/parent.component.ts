import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <div class="navBar">
      <button class="btn" (click)="userLoggedIn = true">Login</button>
      <button class="btn" (click)="userLoggedIn = false">Logout</button>
    </div>
    <app-child [loggedIn]="userLoggedIn"></app-child>
  `,
  styleUrls: ['./onchange.css']
})
export class ParentComponent implements OnInit {
  userLoggedIn: boolean = true;
  constructor() {}

  ngOnInit() {}
}
