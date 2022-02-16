import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  razorpay: any
  constructor(private authService: AuthService) { }

  razorPayOptions = {
    "key": 'rzp_test_tT77VEs5QxCxXG',
    'amount': '10000',
    "currency": "INR",
    "name": "",
    "description": "",
    "order_id": "ghvjbnlkin45",

  }
  buyRazorPay(formData: any) {
    // this.dataService.
  }
  ngOnInit(): void {
  }
  options = {
    "key": "rzp_test_tT77VEs5QxCxXG", // Enter the Key ID generated from the Dashboard
    "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Acme Corp",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    // "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
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
  };

  form = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    amount: new FormControl(null, [Validators.required])
  })
  login() {
    console.log(this.form.value);

  }
  rzp1: any
  // pay() {
  //   this.authService.pay().subscribe((res: any) => {
  //     // let id = res.id
  //     console.log(res);

  //     var options = {
  //       "key": "rzp_test_JVwXX3wTpMQa30", // Enter the Key ID generated from the Dashboard
  //       "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  //       "currency": "INR",
  //       "name": "Acme Corp",
  //       "description": "Test Transaction",
  //       "image": "https://example.com/your_logo",
  //       "order_id": res.id, //This is a sample Order ID. Pass the `id` obtained in the previous step
  //       "handler": (response: any) => {
  //         // this.authService.payAf(response).subscribe((res:any)=>{
  //         //   console.log(res,"payment success");
  //         // })
  //         alert(response.razorpay_payment_id);
  //         alert(response.razorpay_order_id);
  //         alert(response.razorpay_signature);

  //         // payAfter(order_id: any, amount: any) {
  //         //   this.authService.payAf({ order_id, amount })
  //         //   this.rzp1 = new this.authService.nativeWindow.Razorpay(this.options);
  //         //   this.rzp1.open()
  //         // }

  //       },
  //       "prefill": {
  //         "name": "Gaurav Kumar",

  //         "email": "gaurav.kumar@example.com",
  //         "contact": "9999999999"
  //       },
  //       "notes": {
  //         "address": "Razorpay Corporate Office"
  //       },
  //       "theme": {
  //         "color": "#3399cc"
  //       }
  //     }
  //     this.rzp1 = new this.authService.nativeWindow.Razorpay(options);
  //     this.rzp1.open()
  //   })
  // }
  // payAfter(order_id: any, amount: any) {
  //   this.authService.payAf({ order_id, amount })
  //   this.rzp1 = new this.authService.nativeWindow.Razorpay(this.options);
  //   this.rzp1.open()
  // }
}
