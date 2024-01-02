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
  activeRecipe!:Meal;
  categories = [''];
  areas = [''];
  tags =[''];
  hideRecipe = true;

  searchSub: Subscription;
  constructor(public mealS: MealService) {
    this.mealS.fetchInitialMeals().subscribe((response:any)=> {
      this.meals = response.meals;
      this.searchAttributes();
    });


    this.searchSub = this.mealS.searchEmitter.subscribe((text)=>{
      this.mealS.searchByName(text).subscribe((response:any) => {
        this.meals = response.meals;
        this.searchAttributes();
      });
    })
   }

  ngOnInit(): void {
    
  }

  searchAttributes() {
    this.categories = [];
    this.areas = [];
    this.tags = [];
    this.meals.forEach(meal => {
     if(!this.categories.includes(meal.strCategory)) {
      this.categories.push(meal.strCategory)
     }
     if(!this.areas.includes(meal.strArea)) {
      this.areas.push(meal.strArea)
     }
     this.checkTags(meal);
    });

  }
  checkTags(meal:Meal) {
    if(meal.strTags) {
      let tags = meal.strTags.replace(/\s/g, '');
      let tagsAr = tags.toUpperCase().split(',');

      tagsAr.forEach(tag => {
        if(!this.tags.includes(tag)) {
          this.tags.push(tag)    
      }
      });
    }
  }


  removeCategory(cat:string) {
    this.categories = this.categories.filter(x => x !== cat);
    this.updateMeals();
  }
  removeArea(area:string) {
    this.areas = this.areas.filter(x => x !== area);
    this.updateMeals();
  }
  removeTag(tag:string) {
    this.tags = this.tags.filter(x => x !== tag);
    let oldArr = this.meals;
    this.meals = [];

    oldArr.forEach(meal => {
      if(meal.strTags) {
        let tags = meal.strTags.replace(/\s/g, '');
        let tagsAr = tags.toUpperCase().split(',');

       if(this.tags.some(r=> tagsAr.includes(r))) {
        this.meals.push(meal);
       }

      } else {
        this.meals.push(meal)   
      }
    });
   

  }

  updateMeals(){
    let oldArr = this.meals;
    this.meals = [];
    oldArr.forEach(meal => {
      if(this.categories.includes(meal.strCategory) && this.areas.includes(meal.strArea) ) {
       this.meals.push(meal)
      }

     });
 
  }

  showInstruction(recipe: Meal){

    if(this.activeRecipe === recipe) {
     
      this.hideRecipe = !this.hideRecipe;
    } else {
      this.hideRecipe = false;
    }
    this.activeRecipe = recipe;
  }
}