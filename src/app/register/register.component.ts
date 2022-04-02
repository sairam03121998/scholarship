import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { reg } from './reg.models';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service:LoginService, private router:Router) { }
  result : any
  selecteduser:any;
  
  ngOnInit(): void {
    this.service.getLogin().subscribe(res => this.result=res)
  }
  form = new FormGroup({
    FirstName: new FormControl('',[
      Validators.required,Validators.minLength(2),
      Validators.maxLength(16)
      
    ]),
    LastName: new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(16)
      
    ]),
    
    StudentID: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(5),
      Validators.pattern('^[0-9]*$'),
    ]),
    Email: new FormControl('',[
      Validators.required,
      Validators.email
      
    ]),
   password: new FormControl('',[
     Validators.required,

     
   ]),
   confirmpassword: new FormControl('',[
    Validators.required,
    
  ]),
  });
  get f(){  
    return this.form.controls;
  }
  
  register() {
    console.log(this.form.value);
    var x = this.form.value.StudentID;
    var y: number = +x;
    var body ={
  studentId: y, 
  password: this.form.value.password,
  firstName: this.form.value.FirstName,
  lastName: this.form.value.LastName,
  emailId: this.form.value.Email
    };
   
    
  console.log(body)
  // console.log("sai")
  this.service.postData(body).subscribe(
    (res:any) => {console.log(res)
    alert("Registration Successfull");
    this.router.navigate(['/login']);
    
}
  );
}
 
}
