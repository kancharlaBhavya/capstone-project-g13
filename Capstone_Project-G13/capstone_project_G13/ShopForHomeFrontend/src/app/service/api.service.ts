import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  // Connecting to the backend code
  getProduct() {
    return this.http.get<any>("http://main.ap-south-1.elasticbeanstalk.com/api/v1/product/getAllProduct")
      .pipe(map((res: any) => {
        return res;
      }))
  }
}