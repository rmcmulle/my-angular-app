import { Component } from '@angular/core'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent {

  // Data members
  serverId: number    = 10;
  serverState: string = 'OFFLINE';

  constructor () {
    this.serverState = Math.random() > 0.5 ? 'online' : 'offline';
  }

  // Methods
  getServerState() {
    return this.serverState;
  }

  getColor() {
    return this.serverState === 'online' ? 'green' : 'red';
  }
}
