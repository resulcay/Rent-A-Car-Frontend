import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors: Color[] = []
  currentColor: Color = { id: 0, colorName: "" }

  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    this.fetchColors()
  }

  fetchColors() {
    this.colorService.fetchColors().subscribe((response) => {
      this.colors = response.data
    })
  }

  setColorFunc() {
    if (this.currentColor.id == 0 || this.currentColor.colorName == "") {
      return "list-group-item active"
    }
    else { return "list-group-item" }
  }

  setCurrentBrand(color: Color) {
    this.currentColor = color
  }

  checkIfCurrentColor(color: Color) {
    if (color == this.currentColor) {
      return "list-group-item active"
    } else {
      return "list-group-item"
    }
  }

  colorResetter() {
    this.currentColor = { id: 0, colorName: "" }
  }

}
