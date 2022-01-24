import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() onAddIngredients = new EventEmitter();
  name: string;
  amount: number;
  constructor() {}

  ngOnInit(): void {}

  newAddIngredients() {
    this.onAddIngredients.emit({ name: this.name, amount: this.amount });
  }
}
