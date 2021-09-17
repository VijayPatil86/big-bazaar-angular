import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodFruitVegetablesComponent } from './food-fruit-vegetables.component';

describe('FoodFruitVegetablesComponent', () => {
  let component: FoodFruitVegetablesComponent;
  let fixture: ComponentFixture<FoodFruitVegetablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodFruitVegetablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodFruitVegetablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
