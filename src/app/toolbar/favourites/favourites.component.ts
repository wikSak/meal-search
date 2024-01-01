import { Component, OnInit } from '@angular/core';
import { MealService } from 'src/app/meal.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  constructor(public mealS: MealService) { }

  ngOnInit(): void {
  }

}
