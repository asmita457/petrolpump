import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UpdatebalancePage } from '../updatebalance/updatebalance.page';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.page.html',
  styleUrls: ['./addcustomer.page.scss'],
})
export class AddcustomerPage implements OnInit {

  savetext: any;
  titleText: any;
  recordstatus: any;

  constructor(public route: ActivatedRoute,
    public router: Router,
    public toast: ToastController,
    public dialog : MatDialog) { }

  ngOnInit() {
    this.recordstatus = this.route.snapshot.params['checkstatus'];
    if (this.recordstatus == "add") {
      this.savetext = "Add Customer";

    }
    else if (this.recordstatus == "update") {
      this.savetext = "Update Customer";
    }
  }


  addCustomerData() {
    if (this.recordstatus == "add") {
      this.presentToast("Record added successfully");

      const dialogRef = this.dialog.open(UpdatebalancePage, {
        width: '450px',
        // data: send_data
      });
      dialogRef.afterClosed().subscribe(async result => {
        dialogRef.close();
        this.router.navigate(['/sites']);
      });
    }
    else if (this.recordstatus == "update") {
      this.presentToast("Record updated successfully");
      this.router.navigate(['/sites']);
    }

  }

  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }


  goBackword(){
    this.router.navigate(['sites']);
  }
}
