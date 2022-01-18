import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [];
  @ViewChild('inputRefWithViewChild') inputRefWithViewChild;

  onServerCreated(serverData) {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content,
    });
  }

  logRefVal(inputRef) {
    console.log('log ref', inputRef, inputRef.value);
  }
  logRefVal2() {
    console.log('log ref with viewChild', this.inputRefWithViewChild);
  }
}
