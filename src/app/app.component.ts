import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [];

  onServerCreated(serverData) {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content,
    });
  }
}
