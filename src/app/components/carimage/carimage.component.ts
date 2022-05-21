import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-carimage',
  templateUrl: './carimage.component.html',
  styleUrls: ['./carimage.component.css']
})
export class CarimageComponent implements OnInit {

  images: Image[] = []


  constructor(private carImageService: CarimageService) { }

  ngOnInit(): void {
    this.fetchImage()
  }

  fetchImage() {
    this.carImageService.fetchImages().subscribe(response => {
      this.images = response.data
    })
  }
}
