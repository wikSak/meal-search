import { Component, OnInit } from '@angular/core';
import { MealService } from './meal.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'meal-search';

  constructor(public mealS: MealService){
   
  }

    ngOnInit(): void {
 
    }
}
