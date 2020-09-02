import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Cocolate', 100),
    new Ingredient('Lemon', 3),
    new Ingredient('Apple', 7)
  ];

  constructor() { }

  ngOnInit() {
  }

}
