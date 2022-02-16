import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  a: boolean = true
  name: any = ''
  token: any
  // token:any = sessionStorage.getItem('token')

  constructor(private authServe: AuthService) {

  }

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      this.a = false
    } else {
      this.token = localStorage.getItem('token')
      var decoded = jwt_decode(this.token);
      console.log(decoded);
    }
    this.getScreenName()
  }

  getScreenName() {
    this.authServe.getDeatils().subscribe((res: any) => {

      if (res) {
        console.log(res);
        this.name = res.result[0].screen_name
        console.log(this.name);

      }
    })
  }

  logout(){
    this.authServe.logout()
  }
}
