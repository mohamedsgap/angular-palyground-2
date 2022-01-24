import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Angular Course Project';
  isRecipeClicked: boolean = true;
  isShoppingListClicked: boolean = false;

  onRecipeClicked() {
    this.isRecipeClicked = true;
    this.isShoppingListClicked = false;
  }

  onShoppingListClicked() {
    this.isRecipeClicked = false;
    this.isShoppingListClicked = true;
  }
}
