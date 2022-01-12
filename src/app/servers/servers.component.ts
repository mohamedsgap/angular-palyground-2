import { Component, OnInit } from '@angular/core';

@Component({
  // selector: [app-server], as attribute ==> using <div app-server> </div>
  // selector: '.app-sercer', as class  ==> using <div class="app-server"> </div>
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowAddServers: boolean = false;
  serverCreation: string = 'No server is created';

  constructor() {
    setTimeout(() => {
      this.allowAddServers = true;
    }, 5000);
  }

  ngOnInit(): void {}

  onServerCrate() {
    this.serverCreation = 'Server is created successfully';
  }
}
