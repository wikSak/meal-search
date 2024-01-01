import { Component, OnInit } from '@angular/core';
import { MealService } from './meal.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'meal-search';
  apiLoaded = false;
  constructor(public mealS: MealService){
   
  }

    ngOnInit(): void {
      if (!this.apiLoaded) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
        this.apiLoaded = true;
      }
    
    }
}
