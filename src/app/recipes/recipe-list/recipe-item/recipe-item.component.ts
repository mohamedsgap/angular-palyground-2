import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe;
  // @Output() onRecipeChnage = new EventEmitter();
  @Input() index: number;
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}
}
