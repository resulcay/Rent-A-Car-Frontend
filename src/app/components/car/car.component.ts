import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[] = []
  dataLoaded: boolean = false
  filterText = ""

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"]) {
        this.fetchCarsByBrand(params["brandId"])
      }
      else if (params["colorId"]) {
        this.fetchCarsByColor(params["colorId"])
      }
      else {
        this.fetchAllCars()
      }
    })
  }

  fetchAllCars() {
    this.carService.fetchAllCars().subscribe((response) => {
      this.cars = response.data
      this.dataLoaded = true
    })
  }

  fetchCarsByBrand(brandId: number) {
    this.carService.fetchCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data
      this.dataLoaded = true
    })
  }

  fetchCarsByColor(colorId: number) {
    this.carService.fetchCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data
      this.dataLoaded = true
    })
  }
}
