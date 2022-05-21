import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarimageService {

  apiUrl: string = "https://localhost:44319/api/CarImages/fetchallcarimages"

  constructor(private httpClient: HttpClient) { }

  fetchImages(): Observable<ListResponseModel<Image>> {
    return this.httpClient.get<ListResponseModel<Image>>(this.apiUrl)
  }


}
