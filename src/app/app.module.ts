import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesComponent } from './categories/categories.component';
import { FoodFruitVegetablesComponent } from './food-fruit-vegetables/food-fruit-vegetables.component';
import { FoodBakeryDairyFrozenComponent } from './food-bakery-dairy-frozen/food-bakery-dairy-frozen.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    FoodFruitVegetablesComponent,
    FoodBakeryDairyFrozenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
