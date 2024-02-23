import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  constructor(private _router: Router,private _dialogRef: MatDialogRef<PopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  public redirection() : void{
    this.closePopup();
     Swal.fire({

       title: "Withdraw Successfull",
       confirmButtonText: "Okay",

     }).then((result) => {

       this._router.navigate(['/']);

     });
  }

  public closePopup(): void{
    this._dialogRef.close();
  }

}
