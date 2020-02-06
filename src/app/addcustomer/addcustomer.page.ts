import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UpdatebalancePage } from '../updatebalance/updatebalance.page';
import { MatDialog } from '@angular/material';
import { User } from '../user';
import { ConfirmationPopupPage } from '../confirmation-popup/confirmation-popup.page';


@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.page.html',
  styleUrls: ['./addcustomer.page.scss'],
})
export class AddcustomerPage implements OnInit {

  savetext: any;
  titleText: any;
  recordstatus: any;
  allContacts: any;
  userModel: any = {}
  checkStatus : any;



  constructor(public route: ActivatedRoute,
    public router: Router,
    public toast: ToastController,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.recordstatus = this.route.snapshot.params['detailCustomerdata'];
    console.log("detailCustomerdata" + this.recordstatus);
    let displayArrayValues = JSON.parse(this.recordstatus);
    this.userModel['mobile'] = displayArrayValues.mobile;
    this.userModel['address'] = displayArrayValues.address;
    this.userModel['email'] = displayArrayValues.email;
    this.userModel['note'] = displayArrayValues.note;

    let fullname = displayArrayValues.fname;
    if(fullname != ""){
      let names = fullname.split(" ");
      this.userModel['fname'] = names[0];
      this.userModel['lname'] = names[(names.length -1)];  
    }
    
    this.checkStatus = displayArrayValues.checkstatus;
  
    if (this.checkStatus == "add") {
      this.savetext = "Add Customer";

    }
    else if (this.checkStatus == "update") {
      this.savetext = "Update Customer";
    }
  }

  addCustomerData() {
    if (this.checkStatus == "add") {
      this.presentToast("Record added successfully");

      // const dialogRef = this.dialog.open(UpdatebalancePage, {
      //   width: '450px',
      //   // data: send_data
      // });
      // dialogRef.afterClosed().subscribe(async result => {
      //   dialogRef.close();
      //   this.router.navigate(['/sites']);
      // });
    }
    else if (this.checkStatus == "update") {
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


  goBackword() {


    let send_data = {};
    send_data['text'] = "Are you sure you want to discard the changes?";
    send_data['button2'] = "No";
    send_data['button1'] = "Yes";

    const dialogRef = this.dialog.open(ConfirmationPopupPage, {
      width: '450px',
      data: send_data
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log("result", result);
      // this.router.navigate(['sites']);
    });


   
  }
}
