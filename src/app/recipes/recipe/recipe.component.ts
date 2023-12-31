import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Meal } from 'src/app/meal';
import { MealService } from 'src/app/meal.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  @Input() recipe!:Meal;
  @Input() photo = '';
  @Input() isActive = false;
  @Output() instructionEmitter = new EventEmitter;
  

  constructor(public mealS: MealService) { }

  ngOnInit(): void {
  }
  addToFavorites() {
    if(!this.checkIfFavourite(this.recipe)){
      this.mealS.favourites.push(this.recipe)
    } else {
      this.mealS.favourites = this.mealS.favourites.filter(x => x.idMeal !== this.recipe.idMeal)
    }

    localStorage.setItem('favourites',JSON.stringify(this.mealS.favourites) );
  
  }
  showInstruction() {
    this.instructionEmitter.emit();
  }

  checkIfFavourite(meal: Meal): boolean {
    const test = this.mealS.favourites.filter(recipe => recipe.idMeal === meal.idMeal);
    return test.length > 0;
  }
}
