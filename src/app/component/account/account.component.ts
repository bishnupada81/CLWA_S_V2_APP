import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  public accountVerification = new FormGroup({
    account: new FormControl("",
         [Validators.required,
         Validators.pattern('^[0-9]*$'),
         Validators.maxLength(15),
         Validators.minLength(15)]
         ),
  })

  public get account() {
    return this.accountVerification.get('account')
  }

  public accountVerificationFormSubmit() : void{
    this._router.navigateByUrl('/amount');
  }
}
