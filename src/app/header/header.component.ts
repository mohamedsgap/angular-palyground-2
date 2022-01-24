import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed: boolean = true;
  @Output() onShoppingListClicked = new EventEmitter();
  @Output() onRecipeClicked = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onShoppingListClickedX() {
    this.onShoppingListClicked.emit();
  }
  onRecipeClickedX() {
    this.onRecipeClicked.emit();
  }
}
