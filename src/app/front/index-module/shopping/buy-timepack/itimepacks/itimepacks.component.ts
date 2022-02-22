import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-itimepacks',
  templateUrl: './itimepacks.component.html',
  styleUrls: ['./itimepacks.component.css']
})
export class ItimepacksComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  buyPack = new FormGroup({
    val: new FormControl(1, [Validators.required]),
  })

  // buyTimePAck (){
  //   this.authService.pay({ amount: amount }).subscribe((res: any) => {
  //     // let id = res.id
  //     console.log(res);
  //     // let am =amount*100
  //     var options = {
  //       "key": "rzp_test_JVwXX3wTpMQa30", // Enter the Key ID generated from the Dashboard
  //       "amount": amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  //       "currency": "INR",
  //       "name": "Psychicleaders Transactions",
  //       "description": "Test Transaction",
  //       "image": "../assets/logo.png",
  //       "order_id": res.result.id, //This is a sample Order ID. Pass the `id` obtained in the previous step
  //       "handler": (response: any) => {
  //         this.authService.payAf(response).subscribe((res: any) => {
  //           console.log(res, "payment success");
  //         }),
  //         alert(response.razorpay_payment_id);
  //         alert(response);
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
  //     this.rzp1.on('payment.failed', function (response: any) {
  //       console.log("HERE WE ARE IN THE PAYMENT FAIL");


  //       alert(response.error.code);
  //       alert(response.error.description);
  //       alert(response.error.source);
  //       alert(response.error.step);
  //       alert(response.error.reason);
  //       alert(response.error.metadata.order_id);
  //       alert(response.error.metadata.payment_id);
  //     });
  //     this.rzp1.open()
  //   })
  // }
  rzp1: any
  buyTimePack(packT: any, price: any) {
    console.log(this.buyPack.value.val, "packtype", packT, price);
    this.authService.buyTimePack(packT, this.buyPack.value.val, price).subscribe((res: any) => {
      // console.log();
      if (res.message) {
        this.buyPack.reset()
        console.log(res.message);
        alert("buy successfull from your account balance")
      } else if (res.result) {
        this.buyPack.reset()
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
      }
    })

  }
}
