import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-get-minutes',
  templateUrl: './get-minutes.component.html',
  styleUrls: ['./get-minutes.component.css']
})
export class GetMinutesComponent implements OnInit {

  constructor(private authService: AuthService) { }
  rzp1: any
  ngOnInit(): void {
  }
  pay(amount: any) {
    this.authService.pay({ amount: amount }).subscribe((res: any) => {
      // let id = res.id
      console.log(res);
      // let am =amount*100
      var options = {
        "key": "rzp_test_JVwXX3wTpMQa30", // Enter the Key ID generated from the Dashboard
        "amount": amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Psychicleaders Transactions",
        "description": "Test Transaction",
        "image": "../assets/logo.png",
        "order_id": res.result.id, //This is a sample Order ID. Pass the `id` obtained in the previous step
        "handler": (response: any) => {
          this.authService.payAf(response).subscribe((res: any) => {
            console.log(res, "payment success");
          }),
          alert(response.razorpay_payment_id);
          alert(response);
          alert(response.razorpay_signature);

          // payAfter(order_id: any, amount: any) {
          //   this.authService.payAf({ order_id, amount })
          //   this.rzp1 = new this.authService.nativeWindow.Razorpay(this.options);
          //   this.rzp1.open()
          // }

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
    })
  };



}
