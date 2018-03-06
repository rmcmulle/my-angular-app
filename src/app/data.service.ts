import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    constructor() { }

    userArray = [];

    addUser = function(user: string) {
        this.userArray.push(user);
    }

    listUsers = function() {
        console.log(this.userArray);
    }

}
