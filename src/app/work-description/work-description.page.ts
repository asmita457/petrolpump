import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../services/api-call.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment'
import { LoaderService } from '../services/loader/loader.service';
import { MatDialog } from '@angular/material';
import { ConfirmationPopupPage } from '../confirmation-popup/confirmation-popup.page';
import { Storage } from '@ionic/storage';
import { WorkDetailsPage } from '../work-details/work-details.page';
import { NetworkproviderserviceService } from '../services/networkproviderservices/networkproviderservice.service';

@Component({
  selector: 'app-work-description',
  templateUrl: './work-description.page.html',
  styleUrls: ['./work-description.page.scss'],
})
export class WorkDescriptionPage implements OnInit {


  all_subtasks : any = [];
  search_text;
  siteId;
  taskId;

  taskName;
  status : any = [
    'NOT STARTED',
    'IN PROCESS',
    'COMPLETED'
  ]
  tempArray : any = [];
  userName;
  updateAccess;

  constructor(
    public apiCall : ApiCallService,
    public router : Router,
    public activedRoute : ActivatedRoute,
    public loader : LoaderService,
    public dialog : MatDialog,
    public storage : Storage,
    public network : NetworkproviderserviceService
  ) { }

  ngOnInit() {

     this.storage.get("cepl_user_data").then((data) => {

      console.log(data);
      data = JSON.parse(data)
      this.userName = data['name'];

    })

    let tmp = this.activedRoute.snapshot.params['siteId'];
    let ytr = this.activedRoute.snapshot.params['taskId'];
    let access = this.activedRoute.snapshot.params['updateAccess'];

    let name = this.activedRoute.snapshot.params['taskName'];
    this.taskId = ytr;
    this.taskName = name;
     this.siteId = tmp;
     this.updateAccess = parseInt(access);
     this.getTasks();
     this.getSubTasks();
  }

  getTasks(){

    this.loader.showBlockingLoaderAuth();
    let url = environment.base_url + environment.version + "sites/" + this.siteId + "/tasks/" + this.taskId;
      this.apiCall.get(url).subscribe(MyResponse => {

        console.log("My Response", MyResponse);
        this.taskName = MyResponse['result']['name'];
        this.loader.hideBlockingLoaderAuth();
      },error =>{
        this.network.CheckNetworkStatus();
        this.network.onPageLoadCheckInternet();
        this.loader.hideBlockingLoaderAuth();
        // this.networkServices.checkInternetConnection();

      })

  }

  getSubTasks(){

    this.loader.showBlockingLoaderAuth();

    let url = environment.base_url + environment.version + "sites/" + this.siteId + "/tasks/" + this.taskId + "/subtasks?page=0&size=200";
      this.apiCall.get(url).subscribe(MyResponse => {

        console.log("My Response", MyResponse);
        this.all_subtasks = MyResponse['result']['list'];
        for(let i=0; i < this.all_subtasks.length; i++){

          this.tempArray.push({});

        }
        this.loader.hideBlockingLoaderAuth();
      },error =>{
        this.network.CheckNetworkStatus();
        this.network.onPageLoadCheckInternet();
        this.loader.hideBlockingLoaderAuth();
        // this.networkServices.checkInternetConnection();

      })
  }

  updateStatus(index){
    console.log(this.tempArray[index]['status']);
    this.confirmation(index)
  }
  goBackword(){
    window.history.back();
  }

  confirmation(index){

    let send_data = {};
    send_data['text'] = "Do you really want to update status ?";
    send_data['button2'] = "Cancel";
    send_data['button1'] = "Update";

    const dialogRef = this.dialog.open(ConfirmationPopupPage, {
      width: '450px',
      data: send_data
    });

    dialogRef.afterClosed().subscribe( result => {
    
      console.log("result",result);
      if(result['is_success'] == 1){
        // let msg = "Resetted Password Send Successfully";
        // this.presentToast(msg);
        console.log(this.userName);
        let pushlog = {};
        pushlog['status'] = this.tempArray[index]['status'];
        pushlog['updatedBy'] = this.userName;
        pushlog['updatedAt'] = new Date();
        this.all_subtasks[index]['logs'].push(pushlog);

        let prepared_data = {};
        prepared_data['name'] = this.all_subtasks[index]['name'];
        prepared_data['description'] = this.all_subtasks[index]['description'] == null || this.all_subtasks[index]['description'] == undefined ? " " : this.all_subtasks[index]['description'];
        prepared_data['status'] = this.tempArray[index]['status'];
        
        prepared_data['logs'] = this.all_subtasks[index]['logs'];


        console.log("prepared data",prepared_data);
        this.loader.showBlockingLoaderAuth();

        let url = environment.base_url + environment.version + "sites/" + this.siteId + "/tasks/" + this.taskId + "/subtasks/" + this.all_subtasks[index]['id'];
      this.apiCall.put(url,prepared_data).subscribe(MyResponse => {

        console.log("My Response", MyResponse);
        this.tempArray[index]['status'] = null;
        this.all_subtasks[index] = MyResponse['result'][0];

       
        this.loader.hideBlockingLoaderAuth();
      },error =>{
        this.network.CheckNetworkStatus();
        this.network.onPageLoadCheckInternet();
        this.loader.hideBlockingLoaderAuth();
        // this.networkServices.checkInternetConnection();

      })


      }
      

    });

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

viewDetails(obj){

  console.log("array",obj);

  let send_data = {};
  send_data['data'] = obj;
 

  const dialogRef = this.dialog.open(WorkDetailsPage, {
    width: '450px',
    data: send_data
  });

  dialogRef.afterClosed().subscribe( result => {
  
    console.log("result",result);
    if(result['is_success'] == 1){
      // this.router.navigate(['login'])
   
    }
    

  });


}



 

}
