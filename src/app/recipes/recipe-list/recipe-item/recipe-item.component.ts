import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe;
  @Output() onRecipeChnage = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onSelected() {
    this.onRecipeChnage.emit();
  }
}
