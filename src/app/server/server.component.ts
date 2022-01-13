import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId: number = 1234;
  serverId2: number = 5678;
  serverStatus: string = '';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  againServerStatus() {
    return 'offline';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
