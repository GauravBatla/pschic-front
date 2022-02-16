import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  err: any = {}
  changePassword = new FormGroup({
    password: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, [Validators.required])
  })
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  changePass() {
    this.authService.changePassword(this.changePassword.value).subscribe((res) => {
      if (res) {
        console.log(res);
        // const errorMsg = err.error.errors[0].msg ? err.error.errors[0].msg : null;
        this.changePassword.reset()
        this.err['msg'] = 'added successfully'
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
