import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() currentSelected;
  constructor(private recipeSercive: RecipeService) {}

  ngOnInit(): void {}

  onAddToList() {
    this.recipeSercive.addToShoppingList(this.currentSelected.ingredients);
  }
}
