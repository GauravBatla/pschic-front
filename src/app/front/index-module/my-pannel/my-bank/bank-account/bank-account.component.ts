import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {
  balance: any
  data:any
  show = false
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getBal()
  };

  getBal() {
    this.authService.getAccountBalance().subscribe((res: any) => {
      console.log(res);
      this.balance = res.result[0].Amount
      // console.log(this.balance);
      
    })
  };

  transForm = new FormGroup({
    type : new FormControl(null, [Validators.required]),
    tdate1 : new FormControl(null, [Validators.required]),
    tdate2 : new FormControl(null, [Validators.required])
  })

  getTransaction(){
    console.log(this.transForm.value);
    if(this.transForm.valid){
      this.authService.getTransActions(this.transForm.value).subscribe((res:any)=>{
        if(res){
          // console.log(res);
          this.show = true
          this.data = res.result
        }
      },(err)=>{
        console.log(err);
      })
    }
  }
}
