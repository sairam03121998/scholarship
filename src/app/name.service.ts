import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {
m : string=" ";
  constructor() { }
  get(){
    return this.m;

  }
  set(h:any){
    this.m=h;
  }
}
