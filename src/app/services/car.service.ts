import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44319/api/"
  constructor(private httpClient: HttpClient) { }

  fetchAllCars(): Observable<ListResponseModel<Car>> {
    let newPath: string = this.apiUrl + "cars/fetchallcars"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  fetchCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath: string = this.apiUrl + "cars/fetchcarsbybrandid?carId=" + brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  fetchCarsByColor(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath: string = this.apiUrl + "cars/fetchcarsbycolorid?colorId=" + colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  add(car: Car): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "cars/addcar", car)
  }
} 