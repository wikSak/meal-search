import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveRecipeComponent } from './active-recipe.component';

describe('ActiveRecipeComponent', () => {
  let component: ActiveRecipeComponent;
  let fixture: ComponentFixture<ActiveRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
