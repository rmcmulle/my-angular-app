import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
    selector: 'app-username',
    templateUrl: './username.component.html',
    styleUrls: ['./username.component.css'],
    providers: [ DataService ]
})
export class UsernameComponent implements OnInit {

    constructor(private dataService: DataService) { }

    ngOnInit() {
    }

    // Data members
    username: string = ""
    currUser: string = ""

    // Methods
    userLogin() {
        this.currUser = this.username;
        this.dataService.addUser(this.currUser);
        this.dataService.listUsers();
    }

    userLogout() {
        this.currUser = "";
    }

    clearUsername() {
        this.username = "";
    }

}
