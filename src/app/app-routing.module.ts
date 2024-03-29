import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './components/add-car/add-car.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: CarComponent },
  { path: "cars", component: CarComponent },
  { path: "cars/brand/:brandId", component: CarComponent },
  { path: "cars/color/:colorId", component: CarComponent },
  { path: "cars/addcar", component: AddCarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
