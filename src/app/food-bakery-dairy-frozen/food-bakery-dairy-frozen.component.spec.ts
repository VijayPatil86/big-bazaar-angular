import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodBakeryDairyFrozenComponent } from './food-bakery-dairy-frozen.component';

describe('FoodBakeryDairyFrozenComponent', () => {
  let component: FoodBakeryDairyFrozenComponent;
  let fixture: ComponentFixture<FoodBakeryDairyFrozenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodBakeryDairyFrozenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodBakeryDairyFrozenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
