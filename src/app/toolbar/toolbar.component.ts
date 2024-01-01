import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  isFavourite = false;
  searchText = '';
  constructor(public mealS: MealService) { }

  ngOnInit(): void {
  }
  @HostListener('window:keydown', ['$event']) spaceEvent(event: any) {
    if(event.key === 'Enter'){
      this.mealS.searchEmitter.emit(this.searchText);
    }
  }

  toggleFavourites() {
    this.isFavourite = !this.isFavourite;
  }

}
