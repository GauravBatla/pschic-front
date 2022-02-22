import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { MasterServicesService } from './master-services.service';

function _window(): any {
  // return the global native browser window object
  return window;
}
@Injectable({
  providedIn: 'root'
})


export class AuthService {
  constructor(private router: Router, private _http: MasterServicesService) { }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  };


  // category lIst
  productCatList() {
    return this._http.get('web/pro-catList')
  }
  // product list 
  productList(id: any) {
    return this._http.get('web/product?catId=' + id)
  }
  AllproductList() {
    return this._http.get('web/product')
  }


  // login({ email, password }: any): Observable<any> {
  //   this._http
  //   if (email === 'admin@gmail.com' && password === 'admin123') {
  //     this.setToken('abcdefghijklmnopqrstuvwxyz');
  //     return of({ name: 'Tarique Akhtar', email: 'admin@gmail.com' });
  //   }
  //   return throwError(new Error('Failed to login'));
  // }
  login(data: any) {
    return this._http.post('web/login', data)
  };
  verifyOtp(data: any) {
    return this._http.post('web/otp-verify', data)
  };
  verifyEmail(data: any) {
    return this._http.put('web/verify-emailotp', data)
  };


  // changeScreen name

  changeScreen(data: any) {
    return this._http.put('web/change-screen', data)
  }
  changePassword(data: any) {
    return this._http.put('web/changePassword', data)
  }

  changeEmail(data: any) {
    return this._http.post('web/change-eamil', data)
  }

  // get personal details
  getDeatils() {
    return this._http.get('web/personal-detail')
  }

  // add to cart 
  addProduct(data: any) {
    return this._http.post('web/add-cart', data)
  }

  GetCart() {
    return this._http.get('web/carts')
  }

  deleteCart(id: any) {
    return this._http.delete('web/delete-cart/' + id)
  }

  pay(data: any) {
    return this._http.post('web/pay', data)
  }

  payAf(data: any) {
    return this._http.post('web/purchase', data)
  };
  expertPay(data: any) {
    return this._http.post('web/expert-pay', data)
  };

  // buy time pack
  buyTimePack(pt: Number, val: Number, price: Number) {
    return this._http.get(`web/time-pack?packType=${pt}&val=${val}&price=${price}`)
  };


  // get transactions
  getAccountBalance() {
    return this._http.get('web/getBalance')
  }

  getTransActions(data: any) {
    return this._http.post('web/transAction', data)
  }
  expertSignUp(data: any) {
    return this._http.put('web/expert-signup', data)
  }
  get nativeWindow(): any {
    return _window();
  }






}