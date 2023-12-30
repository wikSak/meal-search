import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  @Input() name = '';
  @Input() photo = '';

  constructor() { }

  ngOnInit(): void {
  }

}
