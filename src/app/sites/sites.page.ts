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
  displayDetail = 0;

  getCusstomers = [

    {
      "name": "llllllllll jjjjjjjjjjj",
      "mobile": "",
      "amount": "2500",
      "address": "Mumbai",
      "email" : "lllll@gmail.com",
      "imagepath" : "https://image.shutterstock.com/image-vector/get-ready-advertising-sign-megaphone-600w-1037346505.jpg"
    },
    {
      "name": "smitaaa belhekar",
      "mobile": "1234567890",
      "amount": "1000",
      "address": "Ahmednagar",
      "email" : "smitaaa@gmail.com",
      "imagepath": ""
    },
    {
      "name": "asmita belhekar",
      "mobile": "9527902622",
      "amount": "5000",
      "address": "Pune",
      "email" : "asmita@gmail.com",
      "imagepath" : "https://image.flaticon.com/icons/svg/145/145852.svg"

    },
    {
      "name": "sejal belhekar",
      "mobile": "1234567890",
      "amount": "2500",
      "address": "Pune",
      "email" : "",
      "imagepath": ""
    },

    {
      "name": "priya abc",
      "mobile": "1234567890",
      "amount": "2500",
      "address": "Mumbai",
      "email" : "priya@gmail.com",
      "imagepath" : "https://image.flaticon.com/icons/svg/145/145852.svg"

    },
    {
      "name": "asmi belhekar",
      "mobile": "9527902622",
      "amount": "1000",
      "address": "Ahmednagar",
      "email" : "asmi@gmail.com",
      "imagepath": ""
    },
    {
      "name": "kiran kokate",
      "mobile": "9096467346",
      "amount": "5000",
      "address": "Pune",
      "email" : "kiran@gmail.com",
      "imagepath" : "https://image.flaticon.com/icons/svg/145/145859.svg"

    },
    {
      "name": "ccccc dddd",
      "mobile": "1234567890",
      "amount": "2500",
      "address": "Pune",
      "email" : "ccccc@gmail.com",
      "imagepath": ""
    },

    {
      "name": "dhananjay raut",
      "mobile": "1234567890",
      "amount": "2500",
      "address": "Mumbai",
      "email" : "dhananjay@gmail.com",
      "imagepath" : "https://image.shutterstock.com/image-vector/get-ready-advertising-sign-megaphone-600w-1037346505.jpg"

    },
    {
      "name": "cccc ppppp",
      "mobile": "1234567890",
      "amount": "1000",
      "address": "Ahmednagar",
      "email" : "ccc@gmail.com",
      "imagepath": ""
    },
    {
      "name": "cccc hhhhhhh ",
      "mobile": "1234567890",
      "amount": "5000",
      "address": "Pune",
      "email" : "chchch@gmail.com",
      "imagepath": ""
    },
    {
      "name": "aaaaaaa zzzz",
      "mobile": "1234567890",
      "amount": "2500",
      "address": "",
      "email" : "azazazaz@gmail.com",
      "imagepath" : "https://image.shutterstock.com/image-vector/get-ready-advertising-sign-megaphone-600w-1037346505.jpg"

    },
    {
      "name": "smitaaa belhekar",
      "mobile": "1234567890",
      "amount": "1000",
      "address": "Ahmednagar",
      "email" : "smitaaa@gmail.com",
      "imagepath": ""
    },
    {
      "name": "asmita belhekar",
      "mobile": "9527902622",
      "amount": "5000",
      "address": "Pune",
      "email" : "asmita@gmail.com",
      "imagepath" : "https://image.flaticon.com/icons/svg/145/145852.svg"

    },
    {
      "name": "sejal belhekar",
      "mobile": "1234567890",
      "amount": "2500",
      "address": "Pune",
      "email" : "",
      "imagepath": ""
    },

    {
      "name": "priya abc",
      "mobile": "1234567890",
      "amount": "2500",
      "address": "Mumbai",
      "email" : "priya@gmail.com",
      "imagepath" : "https://image.flaticon.com/icons/svg/145/145852.svg"

    },
    {
      "name": "asmi belhekar",
      "mobile": "9527902622",
      "amount": "1000",
      "address": "Ahmednagar",
      "email" : "asmi@gmail.com",
      "imagepath": ""
    },
    {
      "name": "kiran kokate",
      "mobile": "9096467346",
      "amount": "5000",
      "address": "Pune",
      "email" : "kiran@gmail.com",
      "imagepath" : "https://image.flaticon.com/icons/svg/145/145859.svg"

    },
    {
      "name": "ccccc dddd",
      "mobile": "1234567890",
      "amount": "2500",
      "address": "Pune",
      "email" : "ccccc@gmail.com",
      "imagepath": ""
    },

    {
      "name": "dhananjay raut",
      "mobile": "1234567890",
      "amount": "2500",
      "address": "Mumbai",
      "email" : "dhananjay@gmail.com",
      "imagepath" : "https://image.shutterstock.com/image-vector/get-ready-advertising-sign-megaphone-600w-1037346505.jpg"

    },
    {
      "name": "cccc  ppppp",
      "mobile": "1234567890",
      "amount": "1000",
      "address": "Ahmednagar",
      "email" : "ccc@gmail.com",
      "imagepath": ""
    },
    {
      "name": "cccc  hhhhhhh ",
      "mobile": "1234567890",
      "amount": "5000",
      "address": "Pune",
      "email" : "chchch@gmail.com",
      "imagepath": ""
    },
    {
      "name": "aaaaaaaa   zzzz",
      "mobile": "1234567890",
      "amount": "2500",
      "address": "Pune",
      "email" : "azazazaz@gmail.com",
      "imagepath" : "https://image.shutterstock.com/image-vector/get-ready-advertising-sign-megaphone-600w-1037346505.jpg"

    },
  ]
  all_sites: any = [];
  user_data;

  aContact: any = [];
  bContact: any = [];
  cContact: any = [];
  dContact: any = [];
  eContact: any = [];
  fContact: any = [];
  gContact: any = [];
  hContact: any = [];
  iContact: any = [];
  jContact: any = [];
  kContact: any = [];
  lContact: any = [];
  mContact: any = [];
  nContact: any = [];
  oContact: any = [];
  pContact: any = [];
  qContact: any = [];
  rContact: any = [];
  sContact: any = [];
  tContact: any = [];
  uContact: any = [];
  vContact: any = [];
  wContact: any = [];
  xContact: any = [];
  yContact: any = [];
  zContact: any = [];

  finalList: any = [];
  otherContact: any = [];
  isItemAvailable = false;
  items : any = [];
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


  initializeItems(){
    this.items = ["Ram","gopi", "dravid"];
    }
   
    getItems(ev: any) {
      
    this.initializeItems();
   
    const val = ev.target.value;
    console.log("search text:"+ev.target.value);
    if (val && val.trim() != '') {
        this.isItemAvailable = true;
        this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
    }
    }
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
    for (let i = 0; i < this.getCusstomers.length; i++) {
      this.finalList.push(this.getCusstomers[i]['name'])

    }
   
    this.finalList = this.getCusstomers['name'];
    this.getCusstomers.sort((a, b) => a.name.localeCompare(b.name));

    this.getSites();
    this.getContactList();

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


  getContactList() {
    for (let i = 0; i < this.getCusstomers.length; i++) {
      this.finalList = this.getCusstomers[i]['name'];

      var x = this.getCusstomers[i].name;

      if (x.charAt(0) == "A" || x.charAt(0) == 'a') {
        this.aContact.push(this.getCusstomers[i].name);
        console.log("get aContact details:" + this.aContact);
      }
      else if (x.charAt(0) == "B" || x.charAt(0) == 'b') {
        this.bContact.push(this.getCusstomers[i].name);
        console.log("get bContact details:" + this.bContact);
      }
      else if (x.charAt(0) == "C" || x.charAt(0) == 'c') {
        this.cContact.push(this.getCusstomers[i].name);
        console.log("get cContact details:" + this.cContact);
      }
      else if (x.charAt(0) == "D" || x.charAt(0) == 'd') {
        this.dContact.push(this.getCusstomers[i].name);
        console.log("get dContact details:" + this.dContact);
      }
      else if (x.charAt(0) == "E" || x.charAt(0) == 'e') {
        this.eContact.push(this.getCusstomers[i].name);
        console.log("get eContact details:" + this.eContact);
      }
      else if (x.charAt(0) == "F" || x.charAt(0) == 'f') {
        this.fContact.push(this.getCusstomers[i].name);
        console.log("get fContact details:" + this.fContact);
      }
      else if (x.charAt(0) == "G" || x.charAt(0) == 'g') {
        this.gContact.push(this.getCusstomers[i].name);
        console.log("get gContact details:" + this.gContact);
      }
      else if (x.charAt(0) == "H" || x.charAt(0) == 'h') {
        this.hContact.push(this.getCusstomers[i].name);
        console.log("get hContact details:" + this.hContact);
      }
      else if (x.charAt(0) == "I" || x.charAt(0) == 'i') {
        this.iContact.push(this.getCusstomers[i].name);
        console.log("get iContact details:" + this.iContact);
      }
      else if (x.charAt(0) == "J" || x.charAt(0) == 'j') {
        this.jContact.push(this.getCusstomers[i].name);
        console.log("get Contact details:" + this.jContact);
      } else if (x.charAt(0) == "K" || x.charAt(0) == 'k') {
        this.kContact.push(this.getCusstomers[i].name);
        console.log("get Contact details:" + this.kContact);
      }
      else if (x.charAt(0) == "L" || x.charAt(0) == 'l') {
        this.lContact.push(this.getCusstomers[i].name);
        console.log("get Contact details:" + this.lContact);
      }
      else if (x.charAt(0) == "M" || x.charAt(0) == 'm') {
        this.mContact.push(this.getCusstomers[i].name);
        console.log("get Contact details:" + this.mContact);
      }
      else if (x.charAt(0) == "N" || x.charAt(0) == 'n') {
        this.nContact.push(this.getCusstomers[i].name);
        console.log("get Contact details:" + this.nContact);
      }
      else if (x.charAt(0) == "O" || x.charAt(0) == 'o') {
        this.oContact.push(this.getCusstomers[i].name);
        console.log("get Contact details:" + this.oContact);
      } else if (x.charAt(0) == "P" || x.charAt(0) == 'p') {
        this.pContact.push(this.getCusstomers[i].name);
        console.log("get Contact details:" + this.pContact);
      }
      else if (x.charAt(0) == "Q" || x.charAt(0) == 'q') {
        this.qContact.push(this.getCusstomers[i].name);
        console.log("get Contact details:" + this.qContact);
      }
      else if (x.charAt(0) == "R" || x.charAt(0) == 'r') {
        this.rContact.push(this.getCusstomers[i].name);
        console.log("get Contact details:" + this.rContact);
      }
      else if (x.charAt(0) == "S" || x.charAt(0) == 's') {
        this.sContact.push(this.getCusstomers[i].name);
        console.log("get Contact details:" + this.sContact);
      }
      else if (x.charAt(0) == "T" || x.charAt(0) == 't') {
        this.tContact.push(this.getCusstomers[i].name);
        console.log("get Contact details:" + this.tContact);
      }
      else if (x.charAt(0) == "U" || x.charAt(0) == 'u') {
        this.uContact.push(this.getCusstomers[i].name);
        console.log("get Contact details:" + this.uContact);
      }
      else if (x.charAt(0) == "V" || x.charAt(0) == 'v') {
        this.vContact.push(this.getCusstomers[i].name);
        console.log("get Contact details:" + this.vContact);
      }
      else if (x.charAt(0) == "W" || x.charAt(0) == 'w') {
        this.wContact.push(this.getCusstomers[i].name);
        console.log("get Contact details:" + this.wContact);
      }
      else if (x.charAt(0) == "X" || x.charAt(0) == 'x') {
        this.xContact.push(this.getCusstomers[i].name);
      }
      else if (x.charAt(0) == "Y" || x.charAt(0) == 'y') {
        this.yContact.push(this.getCusstomers[i].name);
        console.log("get Contact details:" + this.yContact);
      }
      else if (x.charAt(0) == "Z" || x.charAt(0) == 'z') {
        this.zContact.push(this.getCusstomers[i].name);
        console.log("get Contact details:" + this.zContact);
      }

    }

  }


  getSites() {

    this.loader.showBlockingLoaderAuth();

    let url = environment.base_url + environment.version + "sites?page=0&size=200";
    this.apiCall.get(url).subscribe(MyResponse => {

      console.log("My Response", MyResponse);
      this.all_sites = MyResponse['result']['list'];
      this.loader.hideBlockingLoaderAuth();
    }, error => {
      this.network.CheckNetworkStatus();
      this.network.onPageLoadCheckInternet();
      this.loader.hideBlockingLoaderAuth();
    })

  }

  showTask(site) {

    console.log("user id", this.user_data);
    let update_access = 0
    if (site.users.length != 0) {
      for (let i = 0; i < site.users.length; i++) {
        if (site.users[i] == this.user_data['id']) {
          update_access = 1;
          break
        }
      }
    }

    console.log("siteId", site.id);
    this.router.navigate(['sites/' + site.id + "/" + site.name + "/" + update_access + '/location-of-area'])


  }

  // logout() {

  //   let send_data = {};
  //   send_data['text'] = "Do you really want to logout ?";
  //   send_data['button2'] = "Cancel";
  //   send_data['button1'] = "Logout";

  //   const dialogRef = this.dialog.open(ConfirmationPopupPage, {
  //     width: '450px',
  //     data: send_data
  //   });

  //   dialogRef.afterClosed().subscribe(result => {

  //     console.log("result", result);
  //     if (result['is_success'] == 1) {
  //       this.storage.remove('cepl_user_data').then(() => {

  //         this.router.navigate(['login']);
  //       })
  //     }
  //   });

  // }


  updateRecord() {
    this.checkRecordStatus = "update";
    this.router.navigate(['/addcustomer', { checkstatus: this.checkRecordStatus }]);
  }


  deleteRecord() {
    this.presentToast("Record deleted successfully");
  }

  addCustomaer() {

    this.checkRecordStatus = "add";

    let detailCustomerdata = {
      "fname" : "",
      "mobile" : "",
      "address" : "",
      "email" : "",
      "checkstatus" : this.checkRecordStatus
    }
    this.router.navigate(['/addcustomer', { detailCustomerdata: JSON.stringify(detailCustomerdata) }]);

    // this.checkRecordStatus = "add";
    // this.router.navigate(['/addcustomer', { checkstatus: this.checkRecordStatus }]);
  }

  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }

  getBalanceDetail() {
    this.router.navigate(['/paymentrecord']);
    // this.presentToast("Check pending balance");
  }

  // detailInfo(k) {

  //   this.displayDetail = 1;
  //   this.displayImage = "../../assets/up-arrow.png";
  // }

  // lessInfo(j) {

  //   this.displayDetail = 0;
  //   this.displayImage = "../../assets/download.png";

  // }

  getCustomerDetailInfo(data) {
    console.log("getdata::" + JSON.stringify(data));

    let detailData = 
      {
        "name": data.name,
        "mobile" : data.mobile,
        "address" : data.address,
        "lname" : data.lname,
        "amount" : data.amount,
        "imagepath" : data.imagepath,
        "email": data.email
      }
    
    
    this.router.navigate(['customerdetail',{detailData : JSON.stringify(detailData)}])
  }

}
