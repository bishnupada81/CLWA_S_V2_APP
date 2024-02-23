import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-amount',
  templateUrl: './enter-amount.component.html',
  styleUrls: ['./enter-amount.component.css']
})
export class EnterAmountComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }


  public amount = new FormGroup({
    amount: new FormControl("",
         [Validators.required,
         Validators.pattern('^[0-9]*$')]
         ),
  })

  public get phoneNumber() {
    return this.amount.get('amount');
  }

  public amountFormSubmit() : void{
    this._router.navigateByUrl('/pin');
  }
}
