import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  basepath:string="http://localhost:48402/api/Admins";

  constructor(private http : HttpClient) { }

  public getAdmin():Observable<any>
  {
    return this.http.get(this.basepath);
  }

  postData(body:any)
 {
   return this.http.post(this.basepath,body)
       } 
}
