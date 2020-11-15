import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private form: FormBuilder) {
    this.loginForm = this.form.group({
      username: '',
      password: ''
    });
   }

  ngOnInit(): void {
  }

  save(): void{
    console.log(this.loginForm.value.username);
    console.log(this.loginForm.value.password);
  }

}
