import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter();
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe name num 1',
      'a test recipe desc num 1',
      'https://live.staticflickr.com/65535/51404482607_a8c4170ede.jpg'
    ),
    new Recipe(
      'A test recipe name num 2',
      'a test recipe desc num 2',
      'https://live.staticflickr.com/65535/51404482607_a8c4170ede.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
