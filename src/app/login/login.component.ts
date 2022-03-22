import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  form: FormGroup;
  ngOnInit(): void {
    this.form = new FormGroup({
      "username": new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5),
        Validators.pattern('^[0-9]*$'),
      ]),
      "password": new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
    console.log(this.form.get("username"));

  }


  public username(){
    console.log(this.form.get("username")?.touched);

    return this.form.get("username");
  }

  
  public password(){
    return this.form.get("password");
  }
  
  login() {
    console.log(this.form.value);
  }
}
