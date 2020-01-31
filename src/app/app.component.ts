import { Component,ViewChild,ViewChildren,QueryList } from '@angular/core';
import { Platform, ModalController, ActionSheetController,ToastController, PopoverController, IonRouterOutlet, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoaderService } from './services/loader/loader.service';
import { Router } from '@angular/router';

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
        title : "Home",
        url   : "/sites",
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
    ]
  }

  ngOnInit() {
    this.preloader.blockingLoaderAuth.subscribe(event => {
      this.loadingBlock = event;
    });
  }
}
