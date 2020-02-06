import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sites',
    loadChildren: () => import('./sites/sites.module').then( m => m.SitesPageModule)
  },
  {
    path: 'sites/:siteId/:siteName/:updateAccess/location-of-area',
    loadChildren: () => import('./location-of-area/location-of-area.module').then( m => m.LocationOfAreaPageModule)
  },
  {
    path: 'sites/:siteId/location-of-area/:taskId/:updateAccess/work-description',
    loadChildren: () => import('./work-description/work-description.module').then( m => m.WorkDescriptionPageModule)
  },
  {
    path: 'confirmation-popup',
    loadChildren: () => import('./confirmation-popup/confirmation-popup.module').then( m => m.ConfirmationPopupPageModule)
  },
  {
    path: 'work-details',
    loadChildren: () => import('./work-details/work-details.module').then( m => m.WorkDetailsPageModule)
  },
  {
    path: 'internet-not-connected',
    loadChildren: () => import('./internet-not-connected/internet-not-connected.module').then( m => m.InternetNotConnectedPageModule)
  },
  {
    path: 'about-app',
    loadChildren: () => import('./about-app/about-app.module').then( m => m.AboutAppPageModule)
  },
  {
    path: 'terms-conditions',
    loadChildren: () => import('./terms-conditions/terms-conditions.module').then( m => m.TermsConditionsPageModule)
  },
  {
    path: 'addcustomer',
    loadChildren: () => import('./addcustomer/addcustomer.module').then( m => m.AddcustomerPageModule)
  },
  {
    path: 'paymentrecord',
    loadChildren: () => import('./paymentrecord/paymentrecord.module').then( m => m.PaymentrecordPageModule)
  },
  {
    path: 'updatebalance',
    loadChildren: () => import('./updatebalance/updatebalance.module').then( m => m.UpdatebalancePageModule)
  },
  {
    path: 'newcustomer',
    loadChildren: () => import('./newcustomer/newcustomer.module').then( m => m.NewcustomerPageModule)
  },
  {
    path: 'customerdetail',
    loadChildren: () => import('./customerdetail/customerdetail.module').then( m => m.CustomerdetailPageModule)
  },
  {
    path: 'updateamountrecord',
    loadChildren: () => import('./updateamountrecord/updateamountrecord.module').then( m => m.UpdateamountrecordPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
