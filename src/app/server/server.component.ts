import { Component } from '@angular/core'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  // Data members
  serverId: number    = 10;
  serverState: string = 'OFFLINE';

  // Methods
  getServerState() {
    return this.serverState;
  }
}
