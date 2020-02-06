import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Storage } from '@ionic/storage';
import { NetworkproviderserviceService } from '../services/networkproviderservices/networkproviderservice.service';
import { LoaderService } from '../services/loader/loader.service';
import { ApiCallService } from '../services/api-call.service';
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login : any = {};
  currentYear;
  hide = true;
  is_error;
  message;
  user_data : any = {};
  is_show = 0;

  constructor(
    public router : Router,
    public storage : Storage,
    public network : NetworkproviderserviceService,
    public preloader : LoaderService,
    public apiCall : ApiCallService,


  ) { }

  ngOnInit() {
    this.currentYear = new Date().getFullYear();

    this.storage.get('cepl_user_data').then((val)=>{

      console.log("login",val);
      val = JSON.parse(val);

      if(val != null){
      this.preloader.showBlockingLoaderAuth();

        if(val['mobile'] != null || val['mobile'] != undefined){
          if(val['password'] != null || val['password'] != undefined){

            this.preloader.hideBlockingLoaderAuth();
            let obj = {};
            obj['mobile'] = val['mobile'];
            obj['password'] = val['password'];

            this.Login(obj);

          }
          else{
            this.preloader.hideBlockingLoaderAuth();
            this.login = {};
            this.login['mobile'] = null;
            this.login['password'] = null;
    
            this.is_show = 1;
          }
        }
        else{
          this.preloader.hideBlockingLoaderAuth();
          this.login = {};
          this.login['mobile'] = null;
          this.login['password'] = null;
  
          this.is_show = 1;
        }
      }
      else{
        this.preloader.hideBlockingLoaderAuth();
        this.login = {};
        this.login['mobile'] = null;
        this.login['password'] = null;

        this.is_show = 1;
      }

    })
  }
  ionViewWillEnter(){

    this.login = {};

  }

  Login(data){


    this.preloader.showBlockingLoaderAuth();
    
    let operationsUrl = environment.base_url + environment.version + "users/login";
    this.apiCall.postWAu(operationsUrl, data).subscribe(MyResponse => {


      console.log(MyResponse);


      MyResponse['result']['password'] = data['password'];
      
        this.storage.set("cepl_user_data",JSON.stringify(MyResponse['result'])).then(()=>{
          this.preloader.hideBlockingLoaderAuth();
          this.router.navigate(['updateamountrecord']);
        });
  
  
     

    }, error => {
      // this.spinner.hide();
      this.is_show = 1;
      this.preloader.hideBlockingLoaderAuth();

      this.is_error = 1;
      // this.presentToast(error.error.message);
      this.message = error.error.message;

      console.log(error)
    })


   
  }

  valueEnter() {
    this.is_error = 0;
  }

}
