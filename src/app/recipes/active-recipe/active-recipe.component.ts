import { Component, Input, OnInit } from '@angular/core';
import { Meal } from 'src/app/meal';

@Component({
  selector: 'app-active-recipe',
  templateUrl: './active-recipe.component.html',
  styleUrls: ['./active-recipe.component.css']
})
export class ActiveRecipeComponent implements OnInit {
  @Input() meal!:Meal;
  constructor() { }

  ngOnInit(): void {
  }

}
