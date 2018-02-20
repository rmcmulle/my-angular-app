import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  // Data members
  allowNewServer = false;
  serverCreationStatus = "Currently no server created";
  serverName = '';
  serverCreated = false;
  servers = ['Test Server', 'Test Server 2']

  // Methods
  onCreateServer() {
  this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name is: " + this.serverName;
    this.serverCreated = true;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
