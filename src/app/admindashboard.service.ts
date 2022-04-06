import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdmindashboardService {
  private basepath="http://localhost:48402/api/ApplyScholars"

  constructor(private http : HttpClient) { }
  public getLogin():Observable<any>
  {
    return this.http.get(this.basepath);
  }
  public UpdateStatusData(obj:any,index:number){
    return this.http.put(this.basepath+"/"+obj.studentId,obj)
  }
}
