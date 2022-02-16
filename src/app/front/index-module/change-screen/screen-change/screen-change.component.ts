import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-screen-change',
  templateUrl: './screen-change.component.html',
  styleUrls: ['./screen-change.component.css']
})
export class ScreenChangeComponent implements OnInit {

  err:any = {}
  changeName = new FormGroup({
    screen_name: new FormControl(null, [Validators.required])
  })
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  changeScreen() {
    this.authService.changeScreen(this.changeName.value).subscribe((res) => {
      if (res) {
        console.log(res);
        // const errorMsg = err.error.errors[0].msg ? err.error.errors[0].msg : null;
        this.changeName.reset()
        this.err['msg'] = 'added successfully'
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
