import { Component, OnInit, Inject } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiCallService } from '../services/api-call.service';
import { LoaderService } from '../services/loader/loader.service';

@Component({
  selector: 'app-updatebalance',
  templateUrl: './updatebalance.page.html',
  styleUrls: ['./updatebalance.page.scss'],
})
export class UpdatebalancePage implements OnInit {

  constructor(public toast: ToastController,
    public router: Router,
    public dialogRef: MatDialogRef<UpdatebalancePage>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public apiCall : ApiCallService,
    public loader : LoaderService,) { }

  ngOnInit() {
  }

  updateBalanceamount(flag){
    let send_data = {};
    send_data['is_success'] = flag;
    this.dialogRef.close(send_data);
    this.presentToast("Balance updated successfully");
    this.router.navigate(['/sites']);
  }

  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }

  close(){
    this.dialogRef.close();
  }

  confirm(flag){
    let send_data = {};
    send_data['is_success'] = flag;
    this.dialogRef.close(send_data);
  }
}
