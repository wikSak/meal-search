import { Component, OnInit } from '@angular/core';
import { MealService } from '../meal.service';
import { Meal } from '../meal';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  meals!:Meal[];

  searchSub: Subscription;
  constructor(public mealS: MealService) {
    this.mealS.fetchInitialMeals().subscribe((response:any)=> {
      this.meals = response.meals;
    });


    this.searchSub = this.mealS.searchEmitter.subscribe((text)=>{
      this.mealS.searchByName(text).subscribe((response:any) => {
        this.meals = response.meals;
      });
    })
   }

  ngOnInit(): void {
  }

}
