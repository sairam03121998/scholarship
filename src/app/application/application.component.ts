import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplyscholarService } from '../applyscholar.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  constructor(public service:ApplyscholarService, private router:Router) {}
  result : any
  selecteduser:any;
  
  ngOnInit(): void {
    
    this.service.getLogin().subscribe(res => this.result=res)
  }
  
  form = new FormGroup({
    Name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(16)
      
    ]),
    StudentID: new FormControl('', [
      Validators.required
     
    ]),
    ten: new FormControl('', [
      Validators.required,
      Validators.min(60),
      Validators.max(99)
      ]),
      BE: new FormControl('', [
        Validators.required,
        Validators.min(6.75),
        Validators.max(10),
        
        ]),
  });
  get f(){  
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    var x = this.form.value.StudentID;
    var y: number = +x;
    var a = this.form.value.ten;
    var b: number = +a;
    var c = this.form.value.BE;
    var d: number = +c;
    var body={
    
      name: this.form.value.Name, 
      studentId: y,
      _10thPercentage: a,
      bePercentage: c,
      status: "true"
  
    };
   
    
  console.log(body)
  // console.log("sai")
  this.service.postData(body).subscribe(
    (res:any) => {console.log(res)
    alert("Submitted Successfully");
    
    this.router.navigate(['/Demo']);
    
}
  );
}
} 




