import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { ApiCallService } from '../services/api-call.service';
import { LoaderService } from '../services/loader/loader.service';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.page.html',
  styleUrls: ['./work-details.page.scss'],
})
export class WorkDetailsPage implements OnInit {

  confirmationText : any;
  button1 : any;
  button2 : any;
  getData : any;
  getname : any;
  displayData : any;


  constructor(
    public dialogRef: MatDialogRef<WorkDetailsPage>,
    public router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public apiCall : ApiCallService,
    public loader : LoaderService,
  ) { }

  ngOnInit() {
    // console.log(this.data) 
    this.getData = this.data;
    this.getname = this.getData.data.name;
    this.displayData = this.getData.data.logs;
    console.log("getdata :: " +JSON.stringify(this.displayData));
  }

  close(){
    let send_data = {};
    send_data['is_success'] = 0;
    this.dialogRef.close(send_data);
  }

}
