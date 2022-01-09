import { Component, OnInit } from '@angular/core';

@Component({
  // selector: [app-server], as attribute ==> using <div app-server> </div>
  // selector: '.app-sercer', as class  ==> using <div class="app-server"> </div>
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
