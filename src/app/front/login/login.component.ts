import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:any
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required])
  })
 
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  login() {
    console.log(this.email)
    // this.loginForm.value
  }
}
