import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe name num 1',
      'a test recipe desc num 1',
      'https://live.staticflickr.com/65535/51404482607_a8c4170ede.jpg',
      [new Ingredient('meat', 1), new Ingredient('potato', 5)]
    ),
    new Recipe(
      'A test recipe name num 2',
      'a test recipe desc num 2',
      'https://live.staticflickr.com/65535/51404482607_a8c4170ede.jpg',
      [new Ingredient('chiecked', 5), new Ingredient('tomato', 10)]
    ),
  ];
  constructor(private slService: ShoppingListService) {}
  getRecipe() {
    return this.recipes.slice();
  }
  addToShoppingList(ingredients: Ingredient[]) {
    this.slService.withIngredients(ingredients);
  }
}
