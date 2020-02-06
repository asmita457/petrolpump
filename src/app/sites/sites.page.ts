import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../services/api-call.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'
import { ConfirmationPopupPage } from '../confirmation-popup/confirmation-popup.page';
import { MatDialog } from '@angular/material';
import { LoaderService } from '../services/loader/loader.service';
import { NetworkproviderserviceService } from '../services/networkproviderservices/networkproviderservice.service';
import { Storage } from '@ionic/storage';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.page.html',
  styleUrls: ['./sites.page.scss'],
})
export class SitesPage implements OnInit {

  currentColor: string;
  search_text;
  checkRecordStatus: any;
  getText: any;
  // displayDetail = 0;

  getCusstomers = [

    {
      "name": "llllllllll jjjjjjjjjjj",
      "mobile": "",
      "amount": "2500",
      "address": "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
      "email": "lllll@gmail.com",
      "note": "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
      "imagepath": "https://image.shutterstock.com/image-vector/get-ready-advertising-sign-megaphone-600w-1037346505.jpg"
    },
    {
      "name": "smitaaa belhekar",
      "mobile": "1234567890",
      "amount": "1000",
      "address": "Ahmednagar",
      "email": "smitaaa@gmail.com",
      "imagepath": ""
    },
    {
      "name": "asmita belhekar",
      "mobile": "9527902622",
      "amount": "5000",
      "address": "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
      "email": "asmita@gmail.com",
      "note": "aaaaaaaaaaaaaaaa",
      "imagepath": "https://image.flaticon.com/icons/svg/145/145852.svg"

    },
    {
      "name": "sejal belhekar",
      "mobile": "1234567890",
      "amount": "2500",
      "address": "Pune",
      "email": "",
      "note": "aaaaaaaaaaaaaaaa",
      "imagepath": ""
    },

    {
      "name": "priya abc",
      "mobile": "1234567890",
      "amount": "2500",
      "address": "Mumbai",
      "email": "priya@gmail.com",
      "note": "aaaaaaaaaaaaaaaa",
      "imagepath": "https://image.flaticon.com/icons/svg/145/145852.svg"

    },
    {
      "name": "asmi belhekar",
      "mobile": "9527902622",
      "amount": "1000",
      "address": "Ahmednagar",
      "email": "asmi@gmail.com",
      "note": "aaaaaaaaaaaaaaaa",
      "imagepath": ""
    },
    {
      "name": "kiran kokate",
      "mobile": "9096467346",
      "amount": "5000",
      "address": "Pune",
      "email": "kiran@gmail.com",
      "note": "",
      "imagepath": "https://image.flaticon.com/icons/svg/145/145859.svg"

    },
    {
      "name": "ccccc dddd",
      "mobile": "1234567890",
      "amount": "2500",
      "address": "Pune",
      "note": "aaaaaaaaaaaaaaaa",
      "email": "ccccc@gmail.com",
      "imagepath": ""
    },

    {
      "name": "dhananjay raut",
      "mobile": "1234567890",
      "amount": "2500",
      "address": "Mumbai",
      "note": "aaaaaaaaaaaaaaaa",
      "email": "dhananjay@gmail.com",
      "imagepath": "https://image.shutterstock.com/image-vector/get-ready-advertising-sign-megaphone-600w-1037346505.jpg"

    },
    {
      "name": "cccc ppppp",
      "mobile": "1234567890",
      "amount": "1000",
      "address": "Ahmednagar",
      "note": "aaaaaaaaaaaaaaaa",
      "email": "ccc@gmail.com",
      "imagepath": ""
    },
    {
      "name": "cccc hhhhhhh ",
      "mobile": "1234567890",
      "amount": "5000",
      "address": "Pune",
      "note": "aaaaaaaaaaaaaaaa",
      "email": "chchch@gmail.com",
      "imagepath": ""
    },
    {
      "name": "aaaaaaa zzzz",
      "mobile": "1234567890",
      "amount": "2500",
      "address": "",
      "note": "aaaaaaaaaaaaaaaa",
      "email": "azazazaz@gmail.com",
      "imagepath": "https://image.shutterstock.com/image-vector/get-ready-advertising-sign-megaphone-600w-1037346505.jpg"

    },
    {
      "name": "smitaaa belhekar",
      "mobile": "1234567890",
      "amount": "1000",
      "address": "Ahmednagar",
      "note": "aaaaaaaaaaaaaaaa",
      "email": "smitaaa@gmail.com",
      "imagepath": ""
    },
    {
      "name": "aaaaaaaa   zzzz",
      "mobile": "1234567890",
      "amount": "2500",
      "address": "Pune",
      "note": "",
      "email": "azazazaz@gmail.com",
      "imagepath": "https://image.shutterstock.com/image-vector/get-ready-advertising-sign-megaphone-600w-1037346505.jpg"

    },
  ]
  all_sites: any = [];
  user_data;

  isItemAvailable = false;
  items: any = [];
  constructor(
    public apiCall: ApiCallService,
    public router: Router,
    public dialog: MatDialog,
    public loader: LoaderService,
    public network: NetworkproviderserviceService,
    public storage: Storage,
    private menu: MenuController,
    public toast: ToastController,

  ) {
    this.currentColor = 'blue';

  }


  // initializeItems() {
  //   this.items = ["Ram", "gopi", "dravid"];
  // }

  // getItems(ev: any) {

  //   this.initializeItems();

  //   const val = ev.target.value;
  //   console.log("search text:" + ev.target.value);
  //   if (val && val.trim() != '') {
  //     this.isItemAvailable = true;
  //     this.items = this.items.filter((item) => {
  //       return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     })
  //   }
  // }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  ngOnInit() {

    this.getCusstomers.sort((a, b) => a.name.localeCompare(b.name));

    this.storage.get("cepl_user_data").then((val) => {
      let tmp = JSON.parse(val);
      this.user_data = tmp;
    })

    let tmp = this.network.CheckNetworkStatus();
    console.log("network status", tmp);
    let ttt = this.network.checkInternetConnection();
    console.log("network status", ttt);
    let net = this.network.getNetworkStatus();
    console.log("network status3", net);

  }

  addCustomaer() {

    this.checkRecordStatus = "add";

    let detailCustomerdata = {
      "fname": "",
      "mobile": "",
      "address": "",
      "email": "",
      "checkstatus": this.checkRecordStatus,
      "note" : ""
    }
    this.router.navigate(['/addcustomer', { detailCustomerdata: JSON.stringify(detailCustomerdata) }]);

  }

  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }

  getCustomerDetailInfo(data) {
    console.log("getdata::" + JSON.stringify(data));

    let detailData =
    {
      "name": data.name,
      "mobile": data.mobile,
      "address": data.address,
      "lname": data.lname,
      "amount": data.amount,
      "imagepath": data.imagepath,
      "email": data.email,
      "note" : data.note
    }


    this.router.navigate(['customerdetail', { detailData: JSON.stringify(detailData) }])
  }

}
