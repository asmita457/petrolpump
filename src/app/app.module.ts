import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowser } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatPaginatorModule,
  MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatDialogModule, MatGridListModule, MatIconModule, MatInputModule,
  MatListModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatRadioModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSortModule,
  MatSlideToggleModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatToolbarModule,
  MatTooltipModule, MatFormFieldModule, MatExpansionModule, MatStepperModule, MatNativeDateModule,
  MatMenuModule
} from '@angular/material';
import 'hammerjs';
import { ApiCallService } from './services/api-call.service';
import { LoaderService } from './services/loader/loader.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ConfirmationPopupPage } from './confirmation-popup/confirmation-popup.page';
import { Network } from '@ionic-native/network/ngx';
import { WorkDetailsPage } from './work-details/work-details.page'

import { NetworkproviderserviceService } from './services/networkproviderservices/networkproviderservice.service'
import { UpdatebalancePage } from './updatebalance/updatebalance.page';




@NgModule({
  declarations: [
    AppComponent,
    ConfirmationPopupPage,
    WorkDetailsPage,
    UpdatebalancePage
  ],
  entryComponents: [ConfirmationPopupPage,WorkDetailsPage, UpdatebalancePage],
  imports: [
    BrowserModule,
     IonicModule.forRoot(), 
     IonicStorageModule.forRoot(),
     AppRoutingModule,
     HttpClientModule,
     BrowserAnimationsModule,
     FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatMenuModule,
    Ng2SearchPipeModule,


  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiCallService,
    LoaderService,
    Network,
    NetworkproviderserviceService,
    Ng2SearchPipeModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
