import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UpdatebalancePage } from '../updatebalance/updatebalance.page';
import { MatDialog } from '@angular/material';
import { User } from '../user';
// import {
//   Contacts,
//   ContactFieldType,
//   IContactFindOptions,
//   Contact,
//   ContactField,
//   ContactName
// } from "@ionic-native/contacts";

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


  // userModel = new User('', '', 123, 234, '');

  constructor(public route: ActivatedRoute,
    public router: Router,
    public toast: ToastController,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.recordstatus = this.route.snapshot.params['detailCustomerdata'];
    console.log("detailCustomerdata" + this.recordstatus);
    let displayArrayValues = JSON.parse(this.recordstatus);
    this.userModel['mobile'] = displayArrayValues.mobile;
    // this.userModel['fname'] = displayArrayValues.fname;
    this.userModel['address'] = displayArrayValues.address;
    this.userModel['email'] = displayArrayValues.email;

    let fullname = displayArrayValues.fname;
    if(fullname != ""){
      let names = fullname.split(" ");
      this.userModel['fname'] = names[0];
      // this.userModel['lname']= names[1];
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


  //   getContactList(){

  //     this.contacts.find(['displayName', 'name', 'phoneNumbers'], {filter: "", multiple: true})
  // .then(data => {
  // this.allContacts = data

  // });
  //   }
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
    this.router.navigate(['sites']);
  }
}
