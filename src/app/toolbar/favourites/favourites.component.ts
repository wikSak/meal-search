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
  removeFavourite(meal:any) {
      this.mealS.favourites = this.mealS.favourites.filter(x => x !== meal);
      localStorage.setItem('favourites',JSON.stringify(this.mealS.favourites) );
      let fav = window.localStorage.getItem("favourites");
      
      this.mealS.favourites = JSON.parse(fav!);

  }
}
