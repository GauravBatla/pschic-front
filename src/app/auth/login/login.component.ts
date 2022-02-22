import { AfterContentChecked, AfterContentInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterContentChecked, AfterContentInit {
  email: any
  temp_dis: boolean = false
  disable = true
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required])
  })
  otpForm = new FormGroup({
    otp: new FormControl(null, [Validators.required])
  })

  constructor(private authService: AuthService, private router: Router, private cookieService: CookieService) { }

  ngOnInit(): void {
  }
  ngAfterContentInit() {
    // contentChild is set after the content has been initialized
    // this.logIt('AfterContentInit');
    // this.doSomething();
  }

  ngAfterContentChecked() {

  }

  login() {
    // console.log(this.loginForm.value.email)    verifyOtp
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe((res: any) => {
        console.log(res);
        this.temp_dis = true
        let result = res
        if (res) {
          this.email = this.loginForm.value.email;
          this.loginForm
        }
      })
    }
  }
  verigyOtp() {
    if (this.otpForm.valid) {
      this.otpForm.value['email'] = this.email
      // console.log(this.otpForm.value);
      this.authService.verifyOtp(this.otpForm.value).subscribe((res: any) => {
        let token = res.token
        let option = res.option

        localStorage.setItem('token', token);
        this.cookieService.set('fax', option.id)
        this.cookieService.set('email', option.email)
        this.cookieService.set('user_stats', option.User_Type)
        this.cookieService.set('screen_name', option.screen_name)
        this.cookieService.set('fax', option.fax)
        //  this.cookieService.set('fax',option.user_id)
        window.location.href = '/'

        console.log(res);

        if (res) {
          this.email = this.loginForm.value.email;
          this.loginForm
        }
      })
    }
  }
}
