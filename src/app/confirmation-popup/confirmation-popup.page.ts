import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { ApiCallService } from '../services/api-call.service';
import { LoaderService } from '../services/loader/loader.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.page.html',
  styleUrls: ['./confirmation-popup.page.scss'],
})
export class ConfirmationPopupPage implements OnInit {


  confirmationText : any;
  button1 : any;
  button2 : any;


  constructor(
    public dialogRef: MatDialogRef<ConfirmationPopupPage>,
    public router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public apiCall : ApiCallService,
    public loader : LoaderService,
  ) { }

  ngOnInit() {
    this.confirmationText = this.data['text'];
    this.button1 = this.data['button1'];
    this.button2 = this.data['button2'];
  }



  confirm(flag){
    let send_data = {};
    send_data['is_success'] = flag;
    this.dialogRef.close(send_data);
  }


}
