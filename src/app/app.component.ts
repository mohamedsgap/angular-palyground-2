import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'angular-course-app';
  username: string = '';
  isBtnDisabled: boolean = this.username.length === 0;

  resetUsername() {
    this.username = '';
  }
}
