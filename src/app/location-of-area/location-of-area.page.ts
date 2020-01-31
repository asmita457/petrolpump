import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../services/api-call.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment'
import { LoaderService } from '../services/loader/loader.service';
import { ConfirmationPopupPage } from '../confirmation-popup/confirmation-popup.page';
import { MatDialog } from '@angular/material';
import { NetworkproviderserviceService } from '../services/networkproviderservices/networkproviderservice.service';

@Component({
  selector: 'app-location-of-area',
  templateUrl: './location-of-area.page.html',
  styleUrls: ['./location-of-area.page.scss'],
})
export class LocationOfAreaPage implements OnInit {


  all_tasks : any = [];
  search_text;
  siteId;
  siteName;
  updateAccess;

  constructor(
    public apiCall : ApiCallService,
    public router : Router,
    public activedRoute : ActivatedRoute,
    public loader : LoaderService,
    public dialog : MatDialog,
    public network : NetworkproviderserviceService
  ) { }

  ngOnInit() {

    this.loader.showBlockingLoaderAuth();
    let tmp = this.activedRoute.snapshot.params['siteId'];
    let name = this.activedRoute.snapshot.params['siteName'];
    let access = this.activedRoute.snapshot.params['updateAccess'];

    this.siteName = name;
     this.siteId = tmp;
     this.updateAccess = parseInt(access);
     console.log("access",this.updateAccess);

     this.getTasks();

  }

  



  getTasks(){

    let url = environment.base_url + environment.version + "sites/" + this.siteId + "/tasks?page=0&size=200";
      this.apiCall.get(url).subscribe(MyResponse => {

        console.log("My Response", MyResponse);
        this.all_tasks = MyResponse['result']['list'];
        this.loader.hideBlockingLoaderAuth();
      },error =>{
        this.network.CheckNetworkStatus();
        this.network.onPageLoadCheckInternet();
        this.loader.hideBlockingLoaderAuth();
        // this.networkServices.checkInternetConnection();

      })

  }
  goBackword(){
    window.history.back();
  }

  showSubTask(task){

    
    this.router.navigate(['sites/' +this.siteId +'/location-of-area/' + task.id + "/" + this.updateAccess +'/work-description'])


  }

  logout(){

    let send_data = {};
    send_data['text'] = "Do you really want to logout ?";
    send_data['button2'] = "Cancel";
    send_data['button1'] = "Logout";
  
    const dialogRef = this.dialog.open(ConfirmationPopupPage, {
      width: '450px',
      data: send_data
    });
  
    dialogRef.afterClosed().subscribe( result => {
    
      console.log("result",result);
      if(result['is_success'] == 1){
        this.router.navigate(['login'])
     
      }
      
  
    });
  
  }

}
