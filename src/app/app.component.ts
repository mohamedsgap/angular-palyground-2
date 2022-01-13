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
  showDetails: boolean = false;
  counter: number = 0;
  list: number[] = [];
  resetUsername() {
    this.username = '';
  }

  showTextDetails() {
    this.showDetails = !this.showDetails;
    this.counter = this.counter + 1;
    this.list.push(this.counter);
  }

  changeBackgroudColor(num: number) {
    return num >= 5 ? 'blue' : 'orange';
  }
}
