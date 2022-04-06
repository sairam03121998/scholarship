import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  sai: any;
  p: number=0;
  constructor(public service:LoginService, private router:Router) {}

 
  ngOnInit(): void {
    this.getLoginData();
    

   }
   private getLoginData():void{
    this.service.getLogin().subscribe(result=>
     {
       this.sai=result;
     });
  }
   form = new FormGroup({
    
    StudentID: new FormControl('', [
      Validators.required
     
      
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
    if((this.form.value.StudentID==ram.studentId) && (this.form.value.password==ram.password))
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
        this.router.navigate(['/home']); 
        
  }
  else
    {
      alert("Invalid Login Details");
    }
  }
}
