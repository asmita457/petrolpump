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
  displayImage = "../../assets/download.png";

  getCusstomers = [

    {
      "name": "asmi",
      "mobile": "1234567890",
      "amount": "2500",
      "address" : "Mumbai"
    },
    {
      "name": "asmitaaa",
      "mobile": "1234567890",
      "amount": "1000",
      "address":"Ahmednagar"
    },
    {
      "name": "asmitaaaa",
      "mobile": "1234567890",
      "amount": "5000",
      "address":"Pune"
    },
    {
      "name": "asmi",
      "mobile": "1234567890",
      "amount": "2500",
      "address":"Pune"
    },
  
    {
      "name": "asmi",
      "mobile": "1234567890",
      "amount": "2500",
      "address" : "Mumbai"
    },
    {
      "name": "asmitaaa",
      "mobile": "1234567890",
      "amount": "1000",
      "address":"Ahmednagar"
    },
    {
      "name": "asmitaaaa",
      "mobile": "1234567890",
      "amount": "5000",
      "address":"Pune"
    },
    {
      "name": "asmi",
      "mobile": "1234567890",
      "amount": "2500",
      "address":"Pune"
    },

    {
      "name": "asmi",
      "mobile": "1234567890",
      "amount": "2500",
      "address" : "Mumbai"
    },
    {
      "name": "asmitaaa",
      "mobile": "1234567890",
      "amount": "1000",
      "address":"Ahmednagar"
    },
    {
      "name": "asmitaaaa",
      "mobile": "1234567890",
      "amount": "5000",
      "address":"Pune"
    },
    {
      "name": "asmi",
      "mobile": "1234567890",
      "amount": "2500",
      "address":"Pune"
    },
  ]
  all_sites: any = [];
  user_data;

  constructor(
    public apiCall: ApiCallService,
    public router: Router,
    public dialog: MatDialog,
    public loader: LoaderService,
    public network: NetworkproviderserviceService,
    public storage: Storage,
    private menu: MenuController,
    public toast: ToastController
  ) {
    this.currentColor = 'blue';

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

    this.getSites();
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

      // this.networkServices.checkInternetConnection();

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

  logout() {

    let send_data = {};
    send_data['text'] = "Do you really want to logout ?";
    send_data['button2'] = "Cancel";
    send_data['button1'] = "Logout";

    const dialogRef = this.dialog.open(ConfirmationPopupPage, {
      width: '450px',
      data: send_data
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log("result", result);
      if (result['is_success'] == 1) {
        this.storage.remove('cepl_user_data').then(() => {

          this.router.navigate(['login']);
        })
      }
    });

  }


  updateRecord() {
    this.checkRecordStatus = "update";
    this.router.navigate(['/addcustomer', { checkstatus: this.checkRecordStatus }]);
  }


  deleteRecord() {
    this.presentToast("Record deleted successfully");
  }

  addCustomaer() {
    this.checkRecordStatus = "add";
    this.router.navigate(['/addcustomer', { checkstatus: this.checkRecordStatus }]);
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

  detailInfo(k) {
    
    // let arraySize = this.getCusstomers.length;
    // for(let i = 0; i< arraySize ; i++ ){
    //   console.log("this.getCusstomers[i] ::" +JSON.stringify(this.getCusstomers[i]));
    //   if(k == i){
    //     this.displayDetail = 1;
    //   }
    // }
    // console.log("display index more:"+k);
    this.displayDetail = 1;
    this.displayImage = "../../assets/up-arrow.png";
  }

  lessInfo(j){
   
    // console.log("display index less:"+j);
    // let arraySize = this.getCusstomers.length;
    // for(let i = 0; i< arraySize ; i++ ){
    //   console.log("this.getCusstomers[i] ::" +JSON.stringify(this.getCusstomers[i]));
    //   if( j == i)
    //   {
    //     this.displayDetail = 0;
    //   }
     
    // }
    this.displayDetail = 0;
    this.displayImage = "../../assets/download.png";

  }

}
