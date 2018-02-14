import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Data members
  username: string = ""
  currUser: string = ""

  // Methods
  userLogin() {
    this.currUser = this.username;
  }

  userLogout() {
    this.currUser = "";
  }

  clearUsername() {
    this.username = "";
  }

}
