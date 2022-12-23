import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http: HttpClient) { }

  baseApiUrl = "http://main.ap-south-1.elasticbeanstalk.com/api/csv/upload"


  //Loading admin details from the backend
  loadAdminDetails(): Observable<Admin[]> {
    return this.http.get<Admin[]>("http://main.ap-south-1.elasticbeanstalk.com/api/v1/admin/display")
  }



  loginAdminDetails(admin: Admin): Observable<string> {
    return this.http.post("http://main.ap-south-1.elasticbeanstalk.com/api/v1/admin/login", admin, { responseType: 'text' })
  }

  logoutAdminDetails(email: string): Observable<string> {
    return this.http.get("http://main.ap-south-1.elasticbeanstalk.com/api/v1/admin/logout/" + email, { responseType: 'text' })
  }

  adminuser(): Observable<any> {
    return this.http.get<any>("http://main.ap-south-1.elasticbeanstalk.com/api/v1/admin/display");
  }

  upload(file):Observable<any> {
  
    const formData = new FormData(); 
    formData.append("file", file, file.name);
    return this.http.post(this.baseApiUrl, formData)
}

}



