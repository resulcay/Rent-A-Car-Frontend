import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  addCarForm: FormGroup = new FormGroup({
    description: new FormControl('', Validators.required),
    brandId: new FormControl('', Validators.required),
    colorId: new FormControl('', Validators.required),
    modelYear: new FormControl('', Validators.required),
    dailyPrice: new FormControl('', Validators.required),

  });
  constructor(private formBuilder: FormBuilder, private carService: CarService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createCarAddForm();
  }

  createCarAddForm() {
    this.addCarForm = this.formBuilder.group({
      description: ["", Validators.required],
      brandId: ["", Validators.required],
      colorId: ["", Validators.required],
      modelYear: ["", Validators.required],
      dailyPrice: ["", Validators.required],

    })
  }

  add() {

    if (this.addCarForm.valid) {
      let carModel = Object.assign({}, this.addCarForm.value)

      this.carService.add(carModel).subscribe(
        response => {
          this.toastrService.success(response.message, "Success")
        }, responseError => {
          if (responseError.error.Errors > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Failure")
            }
          }
        })
    }
    else {
      this.toastrService.error("Incorrect Form")
    }

  }

}