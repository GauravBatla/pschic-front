import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  token: any
  user: any;
  roll: any
  flag: string | undefined
  constructor(private _route: Router) {
    this.token = sessionStorage.getItem('token')
    this.user = sessionStorage.getItem('user')
    this.roll = JSON.parse(this.user);
    //  this.flag = this.roll.user_roll
    console.log(this.token, "ok");

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.token) {
      if (this.roll.user_roll == 'admin') {
        sessionStorage.setItem('login', 'admin')
        return true
      }
      else {
        sessionStorage.setItem('login', 'false')
        this._route.navigate(['/auth'])
        return false
      }
    }
    else {
      sessionStorage.setItem('login', 'false')
      this._route.navigate(['/'])
      return false;
    }

  }

}