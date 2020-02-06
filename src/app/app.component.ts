import { Component,ViewChild,ViewChildren,QueryList } from '@angular/core';
import { Platform, ModalController, ActionSheetController,ToastController, PopoverController, IonRouterOutlet, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoaderService } from './services/loader/loader.service';
import { Router } from '@angular/router';
import { ConfirmationPopupPage } from './confirmation-popup/confirmation-popup.page';
import { MatDialog } from '@angular/material';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  loadingBlock;
  navigate;

  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;


  lastTimeBackPress = 0;
  timePeriodToExit = 2000;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public preloader : LoaderService,
    public toast : ToastController,
    public router : Router,
    public modalCtrl: ModalController,
    private menu: MenuController,
    private actionSheetCtrl: ActionSheetController,
    private popoverCtrl: PopoverController,
    private dialog : MatDialog,
    private storage : Storage

  ) {
    this.sideMenu();
    this.initializeApp();
 
  }

  

  initializeApp() {
    this.platform.ready().then(() => {
      this.platform.backButton.subscribeWithPriority(9999, () => {
        document.addEventListener('backbutton', function (event) {
          event.preventDefault();
          event.stopPropagation();
          console.log('hello');
        }, false);
      });
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Customer",
        url   : "/sites",
        icon  : "home"
      },
      {
        title : "Record",
        url   : "/updateamountrecord",
        icon  : "home"
      },
      {
        title : "About App",
        url   : "/about-app",
        icon  : "chatboxes"
      },
      {
        title : "Terms and Conditions",
        url   : "/terms-conditions",
        icon  : "contacts"
      },
      {
        title : "Log Out",
        url   : "",
        icon  : "log-out"
      }
    ]
  }

  ngOnInit() {
    this.preloader.blockingLoaderAuth.subscribe(event => {
      this.loadingBlock = event;
    });
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

  sideMenuClicked(page) {
    if (page === 'Log Out') {
      this.logout();
      localStorage.clear();
    } 
  }
}
