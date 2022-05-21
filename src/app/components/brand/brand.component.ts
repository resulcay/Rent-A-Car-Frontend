import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands: Brand[] = []
  currentBrand: Brand = { id: 0, brandName: "" }


  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.fetchBrands()
  }


  fetchBrands() {
    this.brandService.fetchBrands().subscribe(response => {
      this.brands = response.data
    })
  }

  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand
  }

  setColorFunc() {
    if (this.currentBrand.id == 0 || this.currentBrand.brandName == "") {
      return "list-group-item active"
    }
    else { return "list-group-item" }
  }

  checkIfCurrentBrand(brand: Brand) {
    if (brand == this.currentBrand) {
      return "list-group-item active"
    } else {
      return "list-group-item"
    }
  }

  brandResetter() {
    this.currentBrand = { id: 0, brandName: "" }
  }
} 
