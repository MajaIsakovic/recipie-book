import { Component, OnInit } from '@angular/core';
import { Recipie } from '../recipie.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  recipies: Recipie[] = [
    new Recipie('Test name', 'Test decription', 'https://www.uaex.edu/life-skills-wellness/food-nutrition/eating-well/EFNEP/images/Recipes-Banner.jpg'),
    new Recipie('Torta', 'Torta njam njam', 'https://i2.wp.com/www.sugarspunrun.com/wp-content/uploads/2018/01/Vanilla-Cake-Recipe-1-of-1.jpg'),
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
