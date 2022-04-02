import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  sai: any;
  p: number=0;

  constructor(public service:AdminService, private router:Router) { }

  ngOnInit(): void {

    this.getAdminData();
    
  }
  private getAdminData():void{
    this.service.getAdmin().subscribe(result=>
     {
       this.sai=result;
     });
    }
  
  form = new FormGroup({
    
    AdminID: new FormControl('', [
      Validators.required,
      
    ]),
   password: new FormControl('',[
     Validators.required,
     
   ])
  });
  get f(){  
    return this.form.controls;
  }





 
  login() {
    console.log(this.form.value);
    for(let ram of this.sai)
    {
    if((this.form.value.AdminID==ram.adminId) && (this.form.value.password==ram.password))
    {
     this.p=1; 
     break;  
    }
    // else
    // {
    //   alert("Invalid Login Details");
    // }
  }
  if(this.p==1){
    alert("Login sucessfull");
        this.router.navigate(['/admindashboard']); 
        
  }
  else
    {
      alert("Invalid Login Details");
    }
  }
}


