import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ExpertSignService } from './expert-sign.service';

@Component({
  selector: 'app-expert-sign',
  templateUrl: './expert-sign.component.html',
  styleUrls: ['./expert-sign.component.css']
})
export class ExpertSignComponent implements OnInit {
  temp = new Subject()
  buyDiv: boolean = true;
  exert_form: boolean = false
  check_url = false
  msg: any = {}
  constructor(private authService: AuthService, private cookieService: CookieService, private router: Router, private _expertService: ExpertSignService) {

  };

  becomeExpertForm = new FormGroup({
    screen_name: new FormControl(null, [Validators.required]),
    first_name: new FormControl(null, [Validators.required]),
    last_name: new FormControl(null, [Validators.required]),
    City: new FormControl(null, [Validators.required]),
    state: new FormControl(null, [Validators.required]),
    zip: new FormControl(null, [Validators.required]),
    country: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    screen_check: new FormControl(null, [Validators.required]),
    terms: new FormControl(null, [Validators.required]),
    Address: new FormControl(null, [Validators.required])
  })


  get becomeExpertFormC() {
    return this.becomeExpertForm.controls;
  }

  public get screen_name() {
    return this.becomeExpertForm.get('screen_name')
  }
  public get first_name() {
    return this.becomeExpertForm.get('first_name')
  }
  public get last_name() {
    return this.becomeExpertForm.get('last_name')
  }
  public get City() {
    return this.becomeExpertForm.get('City')
  }
  public get state() {
    return this.becomeExpertForm.get('state')
  }
  public get zip() {
    return this.becomeExpertForm.get('zip')
  }

  public get country() {
    return this.becomeExpertForm.get('country')
  }
  public get phone() {
    return this.becomeExpertForm.get('phone')
  }
  public get screen_check() {
    return this.becomeExpertForm.get('screen_check')
  }
  public get terms() {
    return this.becomeExpertForm.get('terms')
  }
  public get Address() {
    return this.becomeExpertForm.get('Address')
  }

  ngOnInit(): void {
    this.cookieValue = this.cookieService.get('fax');
    this._expertService.buyDiv.subscribe((res) => {
      alert("okkkkkkkk")

    })
    if (this.cookieValue == 2) {
      // name
      // this._expertService.buyDiv.next(false)

      this.exert_form = !this.exert_form
      this.buyDiv = !this.buyDiv
      if (this.buyDiv == true) {
        this.router.navigate(['/'])
      }
    } else if (this.cookieValue == 3) {
      window.location.href = '/'
    }

  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.

  }
  cookieValue: any
  rzp1: any

  buy() {
    // console.log(this.buyPack.value.val, "packtype", packT, price);
    this.authService.pay({ amount: 500 }).subscribe((res: any,) => {
      // console.log();
      if (res.message) {
        console.log(res.message);
        alert("buy successfull from your account balance")
      } else if (res.result) {
        console.log(res.result);
        var options = {
          "key": "rzp_test_JVwXX3wTpMQa30", // Enter the Key ID generated from the Dashboard
          "amount": res.result.account, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          "currency": "INR",
          "name": "Psychicleaders Transactions",
          "description": "Test Transaction",
          "image": "../assets/logo.png",
          "order_id": res.result.id, //This is a sample Order ID. Pass the `id` obtained in the previous step
          "handler": (response: any) => {
            this.temp.next(true)
            this.check_url = true;

            this.authService.expertPay(response).subscribe((res: any) => {
              console.log(res, "payment success");
              this.cookieService.set('fax', '2');
              localStorage.setItem('payment_url', "1")
              if (this.check_url) {
                alert(this.check_url)
                window.location.href = '/expert-signUp';
              }
            })
          },
          "prefill": {
            "name": "Gaurav Kumar",

            "email": "gaurav.kumar@example.com",
            "contact": "9999999999"
          },
          "notes": {
            "address": "Razorpay Corporate Office"
          },
          "theme": {
            "color": "#3399cc"
          }
        }


        this.rzp1 = new this.authService.nativeWindow.Razorpay(options);
        this.rzp1.on('payment.failed', function (response: any) {
          console.log("HERE WE ARE IN THE PAYMENT FAIL");


          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
        });
        this.rzp1.open()
      }
    });


  };


  becomeExpert() {
    if (this.becomeExpertForm.valid) {
      console.log(this.becomeExpertForm.value);
      this.authService.expertSignUp(this.becomeExpertForm.value).subscribe((res) => {
        this.cookieService.set('fax', '3');
        alert("Congratulations now you expert stage")
        window.location.href = '/'
      }, (err) => {
        const errorMsg = err.error.errors[0].msg ? err.error.errors[0].msg : null;
        this.msg['err'] = errorMsg
      })
    }
  }
}
