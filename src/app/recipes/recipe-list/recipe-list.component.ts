import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe name',
      'a test recipe desc',
      'https://live.staticflickr.com/65535/51404482607_a8c4170ede.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
