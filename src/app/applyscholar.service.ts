import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplyscholarService {
  basepath: string = "http://localhost:48402/api/ApplyScholars";

  constructor(private http: HttpClient) { }
  public getLogin(): Observable<any> {
    return this.http.get(this.basepath);
  }

  postData(body: any) {
    return this.http.post(this.basepath, body)
  }


}


