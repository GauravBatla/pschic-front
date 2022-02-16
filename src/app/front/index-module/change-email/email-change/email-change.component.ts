import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-email-change',
  templateUrl: './email-change.component.html',
  styleUrls: ['./email-change.component.css']
})
export class EmailChangeComponent implements OnInit {
  err: any = {}
  email: any
  temp_dis: boolean = false
  disable = true
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required])
  })
  otpForm = new FormGroup({
    otp: new FormControl(null, [Validators.required])
  })

  constructor(private authService: AuthService, private roter: Router) { }

  ngOnInit(): void {
  }
  ngAfterContentInit() {
    // contentChild is set after the content has been initialized
    // this.logIt('AfterContentInit');
    // this.doSomething();
  }

  ngAfterContentChecked() {
    // contentChild is updated after the content has been checked
    // if (this.prevHero === this.contentChild.hero) {
    // this.logIt('AfterContentChecked (no change)');
    // } else {
    // this.prevHero = this.contentChild.hero;
    // this.logIt('AfterContentChecked');
    // this.doSomething();
    // }
  }

  login() {
    // console.log(this.loginForm.value.email)    verifyOtp
    if (this.loginForm.valid) {
      this.authService.changeEmail(this.loginForm.value).subscribe((res: any) => {
        console.log(res);
        this.temp_dis = true
        let result = res
        if (res) {
          console.log(res);
          
          this.email = this.loginForm.value.email;
          this.loginForm
          this.err['msg'] = 'check email and enter otp'
          this.err['err'] = ''
        }
      }, (err) => {
        if (err) {
          console.log(err);
          
          const errorMsg = err.error.errors[0].msg ? err.error.errors[0].msg : null;
          // console.log(errorMsg);
          this.err['err'] = errorMsg
        }
      })
    }
  }
  verigyOtp() {
    if (this.otpForm.valid) {
      this.otpForm.value['email'] = this.email
      // console.log(this.otpForm.value);
      this.authService.verifyEmail(this.otpForm.value).subscribe((res: any) => {
        let token = res.token
        localStorage.removeItem('token')
        localStorage.setItem('token', token);
        // this.roter.navigate(['/'])
        this.err['msg'] = 'Email suceessfully changed'

        console.log(res);

        if (res) {
          this.email = this.loginForm.value.email;
          this.loginForm
        }
      })
    }
  }
}
