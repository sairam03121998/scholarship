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
  public UpdateStatusData(obj:any,status:Boolean){
    if (status) {obj.status="Approved"}
    else{
      obj.status="Rejected"
    }
    return this.http.put(this.basepath+"/"+obj.studentId,obj)
  }
}
