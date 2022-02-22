import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ExpertSignService {
   public buyDiv =  new Subject()
    exert_form = new BehaviorSubject(false)
    constructor() {
        this.buyDiv.next(true)
     }
    
}