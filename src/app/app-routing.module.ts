import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodFruitVegetablesComponent } from './food-fruit-vegetables/food-fruit-vegetables.component';
import { FoodBakeryDairyFrozenComponent } from './food-bakery-dairy-frozen/food-bakery-dairy-frozen.component';
import { CategoriesComponent  } from './categories/categories.component';

const routes: Routes = [
  {
    path: 'foodFruitVegetables',
    component: FoodFruitVegetablesComponent
  },
  {
    path: 'foodBakeryDairyFrozen',
    component: FoodBakeryDairyFrozenComponent
  },
  {
    path: '',
    component: CategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
