import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Meal } from 'src/app/meal';

@Component({
  selector: 'app-active-recipe',
  templateUrl: './active-recipe.component.html',
  styleUrls: ['./active-recipe.component.css']
})
export class ActiveRecipeComponent implements OnInit {
  @Input() meal!:Meal;
  id = '';
  videoUrl:any;
  ingredients:any;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getId()
    this.getIngredients();
  }
  getId() {
    this.id = this.meal.strYoutube.slice(32);
     let videoUrl = 'https://www.youtube.com/embed/' + this.id;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);

  }

  getIngredients() {
    const meal: any = {...this.meal};
    const ingredients =[];
    for (let i = 1; i < 21; i++) {
      const ingredient = meal['strIngredient'+i];
      const amount = meal['strMeasure'+i];
      
      if(ingredient && ingredient !== '') {
        ingredients.push({
          name: ingredient,
          amount: amount
        })
      }
    }
    this.ingredients = ingredients;
  }
}
