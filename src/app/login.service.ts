import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { reg } from './register/reg.models';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
 basepath:string="http://localhost:48402/api/Logins";
  formData:reg=new reg();
  
  constructor(private http : HttpClient) { }
  // httpOptions = 
  // {  
  //   headers: new HttpHeaders({  
  //     'Content-Type': 'application/json'  
  //   })  
  // } 
   
   public getLogin():Observable<any>
   {
     return this.http.get(this.basepath);
   }

   postData(body:any)
  {
    return this.http.post(this.basepath,body)
        } 


}
