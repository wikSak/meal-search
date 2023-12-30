import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  @Output() searchEmitter = new EventEmitter;
  constructor(private http: HttpClient) { }

  public fetchInitialMeals() {
    return this.http.get("https://www.themealdb.com/api/json/v1/1/search.php?s=Soup")
  }
  public searchByName(text:string) {
    return this.http.get("https://www.themealdb.com/api/json/v1/1/search.php?s="+text)
  }
}