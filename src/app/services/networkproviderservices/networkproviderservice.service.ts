import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
// import { Dialogs } from '@ionic-native/dialogs/ngx';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Platform } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NetworkproviderserviceService {


  checkStatus: any;
  online : boolean;

  public NetworkStatus: BehaviorSubject<boolean>;
  private WatchConnect: Subscription;
  private WatchDisconnect: Subscription;
  constructor(public network: Network,
    public toastController: ToastController,
    // public dialogs: Dialogs,
    public platform: Platform,
    private http: HttpClient) { 
    
      console.log('Hello NetworkConnectivityProvider');
      this.NetworkStatus = new BehaviorSubject(false);            // Assume Network is offline
      this.CheckNetworkStatus();
      this.CreateNetworkObserverSubscriptions();
  }
  
  checkInternetConnection() {
    this.network.onDisconnect().subscribe(() => {
      // this.presentToast()
      this.online = false;
      console.log(window.location.pathname);

      // this.dialogs.alert('You are not connected to the internet');
    });
    this.network.onConnect().subscribe((val) => {
      // this.presentSuccessToast()
      console.log("conn",val);
      this.online = true;
      // this.dialogs.alert('You are connected to the internet');
      // setTimeout(() => {
      // }, 2000);
    });
  }

  getNetworkStatus(){
    return this.online;
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'You are not connected to the internet',
      duration: 2000,
      cssClass: 'my-custom-fail-class',
    });
    toast.present();
  }

  async presentSuccessToast() {
    const toast = await this.toastController.create({
      message: "You are connected to the internet",
      cssClass:"my-custom-success-class",
      duration: 2000
    });
    toast.present();
  }

  CheckNetworkStatus() {
    if (this.platform.is('cordova')) {
      if (this.network.type === undefined || this.network.type === null || this.network.type === 'unknown') {
        this.online = false;

        this.UpdateNetworkStatus(false);
      } else {
        this.online = true;

        this.UpdateNetworkStatus(true);
      }
    } else {
      this.UpdateNetworkStatus(navigator.onLine);
    }
    return this.network.type;
  }

   onPageLoadCheckInternet() {

    this.checkStatus = this.CheckNetworkStatus();
    
    if (!navigator.onLine) {
      this.presentToast()
    }
    else {
    }
    return this.checkStatus;
  }

  CreateNetworkObserverSubscriptions() {
    this.WatchConnect = this.network.onConnect().subscribe(
      data => { 
        console.log("data",data);
        this.UpdateNetworkStatus(true); },
      error => { console.log(error); }
    );
    this.WatchDisconnect = this.network.onDisconnect().subscribe(
      data => { this.UpdateNetworkStatus(false); },
      error => { console.log(error); }
    );
  }

  UpdateNetworkStatus(IsOnline: boolean) {
    console.log('Network ', (IsOnline == true ? 'Online' : 'Offline'));
    this.NetworkStatus.next(IsOnline);
    return IsOnline;
  }
}
