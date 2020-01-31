(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sites-sites-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sites/sites.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sites/sites.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"Padding0\" style=\"padding: 0;\">\n      <div class=\"TitleHeader\">\n        <div class=\"TitleText\">\n\n          &nbsp;&nbsp;&nbsp;\n          <div style=\"width: 80%; overflow: hidden; text-overflow: ellipsis;\">\n            Customers\n          </div>\n        </div>\n        <div style=\"width: 20%;text-align: left;\">\n          <button class=\"LogoutBtn\" (click)=\"logout()\">Logout</button>\n\n        </div>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"search-filter-container\">\n\n    <div class=\"SearchOption\" style=\"width: 92%;\">\n      <div class=\"SearchDiv\">\n        <input class=\"valid\" type=\"text\" [(ngModel)]=\"search_text\" placeholder=\"Search\" name=\"name\" />\n      </div>\n    </div>\n\n\n  </div>\n\n  <div class=\"ListItem\">\n    <mat-card class=\"ListCard\" *ngFor=\"let daata of getCusstomers\">\n      <ion-row>\n        <ion-col size=\"11\">\n          <div (click)=\"getBalanceDetail()\">\n            <ion-row style=\"padding: 2px;\">\n              <ion-label>{{daata.name}}</ion-label>\n            </ion-row>\n            <ion-row style=\"padding: 2px;\">\n              <ion-label>{{daata.mobile}}</ion-label>\n            </ion-row>\n            <ion-row style=\"padding: 2px;\">\n              <ion-label>{{daata.amount}}</ion-label>\n            </ion-row>\n          </div>\n\n          <ion-row style=\"padding: 2px; width:50%\" *ngIf=\"displayDetail == 1\">\n            <ion-label>{{daata.address}}</ion-label>\n          </ion-row>\n          <!-- <ion-row *ngIf=\"displayDetail == 1\" (click)=\"lessInfo()\">\n            <img src=\"../../assets/download.png\" style=\"width:25px; height: 25px\" />\n          </ion-row> -->\n        </ion-col>\n\n        <ion-col size=\"1\">\n          <img src=\"../../assets/menudispllay.png\" style=\"width:20px; height: 20px\" [matMenuTriggerFor]=\"menu\"/>\n          <mat-menu #menu=\"matMenu\">\n            <button mat-menu-item (click)=\"updateRecord()\">Update</button>\n            <button mat-menu-item (click)=\"deleteRecord()\">Delete</button>\n          </mat-menu>\n        </ion-col>\n\n      </ion-row>\n      <ion-row style=\"margin-bottom:-16px\">\n        <ion-col size=\"11\"></ion-col>\n        <ion-col size=\"1\" >\n          <img *ngIf=\"displayDetail == 0\" src=\"{{displayImage}}\" style=\"width:15px; height: 15px\" (click)=\"detailInfo()\"/>\n          <img *ngIf=\"displayDetail == 1\" src=\"{{displayImage}}\" style=\"width:15px; height: 15px\" (click)=\"lessInfo()\"/>\n\n        </ion-col>\n\n      </ion-row>\n    </mat-card>\n\n  </div>\n\n\n  <button mat-raised-button class=\"FixedButton\" (click)=\"addCustomaer()\"> <img src=\"../../assets/AddRestro.png\"\n      width=\"30\" height=\"30\"> </button>\n</ion-content>");

/***/ }),

/***/ "./src/app/sites/sites-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/sites/sites-routing.module.ts ***!
  \***********************************************/
/*! exports provided: SitesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitesPageRoutingModule", function() { return SitesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sites_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sites.page */ "./src/app/sites/sites.page.ts");




const routes = [
    {
        path: '',
        component: _sites_page__WEBPACK_IMPORTED_MODULE_3__["SitesPage"]
    }
];
let SitesPageRoutingModule = class SitesPageRoutingModule {
};
SitesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SitesPageRoutingModule);



/***/ }),

/***/ "./src/app/sites/sites.module.ts":
/*!***************************************!*\
  !*** ./src/app/sites/sites.module.ts ***!
  \***************************************/
/*! exports provided: SitesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitesPageModule", function() { return SitesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sites_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sites-routing.module */ "./src/app/sites/sites-routing.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var _sites_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sites.page */ "./src/app/sites/sites.page.ts");









let SitesPageModule = class SitesPageModule {
};
SitesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _sites_routing_module__WEBPACK_IMPORTED_MODULE_5__["SitesPageRoutingModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"]
        ],
        declarations: [_sites_page__WEBPACK_IMPORTED_MODULE_8__["SitesPage"]]
    })
], SitesPageModule);



/***/ }),

/***/ "./src/app/sites/sites.page.scss":
/*!***************************************!*\
  !*** ./src/app/sites/sites.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 1.3rem;\n  width: 81%;\n  color: #ffffff;\n  font-weight: 700;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleSider {\n  display: inline-block;\n  text-align: right;\n  font-size: 1rem;\n  font-weight: 600;\n  width: 100%;\n}\n\n.BackButton {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.search-filter-container {\n  width: 100%;\n  height: 45px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 8px;\n}\n\n.SearchOption {\n  width: 90%;\n}\n\n.FilterOption {\n  width: 10%;\n}\n\n.SearchDiv {\n  width: 100%;\n  height: 100%;\n  margin: 0 4% 0 4%;\n}\n\ninput.valid {\n  /* border-color: #28a745; */\n  background-image: url('FilterSearch.png');\n  background-repeat: no-repeat;\n  background-size: 20px 20px;\n  background-position: 95% center;\n  height: 37px;\n  width: 100%;\n  padding-left: 20px;\n  /* padding-right: 20px; */\n  outline-width: 0;\n  border-width: 0;\n  font-size: 13px;\n  font-weight: 400;\n  background-color: #fff;\n  border-radius: 15px;\n  outline-color: white;\n}\n\n.MainContainer {\n  width: 100%;\n  background-color: #F1F4F8;\n  height: 100%;\n}\n\n.ListItem {\n  width: 100%;\n}\n\n.ListCard {\n  width: 92%;\n  margin: 4%;\n}\n\n.SingleListItem {\n  width: 100%;\n}\n\n.SiteName {\n  font-size: 1rem;\n  font-weight: 600;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.SiteDescription {\n  font-size: 0.8rem;\n  font-weight: 500;\n  font-family: \"Roboto\", sans-serif;\n  color: #535252;\n}\n\n.LogoutBtn {\n  background-color: transparent;\n  color: #fff;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 0.8px;\n  line-height: 19px;\n}\n\n.FixedButton {\n  width: 65px;\n  height: 65px;\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  border-radius: 50%;\n  color: white;\n  z-index: 10;\n  background-color: #3486E8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FycmF5cG9pbnRlci9EZXNrdG9wL3BldHJvbHB1bXBhcHAvc3JjL2FwcC9zaXRlcy9zaXRlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpdGVzL3NpdGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFFQSxZQUFBO0VBQ0EsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNBSjs7QURHQTtFQUNJLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNBSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBSUEsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0FDRko7O0FESUE7RUFDSSxVQUFBO0FDREo7O0FER0E7RUFDSSxVQUFBO0FDQUo7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUlBLGlCQUFBO0FDRko7O0FESUE7RUFDSSwyQkFBQTtFQUVBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDRko7O0FESUM7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFFQSxZQUFBO0FDRkw7O0FESUM7RUFDSSxXQUFBO0FDREw7O0FER0M7RUFHRyxVQUFBO0VBQ0EsVUFBQTtBQ0ZKOztBRElDO0VBQ0ksV0FBQTtBQ0RMOztBREtDO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7QUNGTDs7QURJQztFQUNHLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUNESjs7QURHQTtFQUVJLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0RKOztBREdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDRCxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNBSCIsImZpbGUiOiJzcmMvYXBwL3NpdGVzL3NpdGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5UaXRsZUhlYWRlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG4uVGl0bGVUZXh0e1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB3aWR0aDogODElO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5UaXRsZVNpZGVye1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiAxMDAlO1xuXG59XG4uQmFja0J1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZycpIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uc2VhcmNoLWZpbHRlci1jb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIC8vIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTczLCAxNzIsIDE3Mik7XG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxNzMsIDE3MiwgMTcyKTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDhweDtcbn1cbi5TZWFyY2hPcHRpb257XG4gICAgd2lkdGg6IDkwJTtcbn1cbi5GaWx0ZXJPcHRpb257XG4gICAgd2lkdGg6IDEwJTtcbn1cbi5TZWFyY2hEaXZ7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMThweDtcbiAgICAvLyBwYWRkaW5nOiAzcHggMCAzcHggMDtcbiAgICBtYXJnaW46IDAgNCUgMCA0JTs7XG59XG5pbnB1dC52YWxpZCB7XG4gICAgLyogYm9yZGVyLWNvbG9yOiAjMjhhNzQ1OyAqL1xuICAgIC8vIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvRmlsdGVyU2VhcmNoLnBuZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTUlIGNlbnRlcjtcbiAgICBoZWlnaHQ6IDM3cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIC8qIHBhZGRpbmctcmlnaHQ6IDIwcHg7ICovXG4gICAgb3V0bGluZS13aWR0aDogMDtcbiAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIG91dGxpbmUtY29sb3I6IHdoaXRlO1xuIH1cbiAuTWFpbkNvbnRhaW5lcntcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUY0Rjg7XG4gICAgLy8gIHBhZGRpbmc6IDEwcHg7XG4gICAgIGhlaWdodDogMTAwJTtcbiB9XG4gLkxpc3RJdGVte1xuICAgICB3aWR0aDogMTAwJTtcbiB9XG4gLkxpc3RDYXJke1xuICAgIC8vICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgLy8gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgd2lkdGg6IDkyJTtcbiAgICBtYXJnaW46IDQlO1xuIH1cbiAuU2luZ2xlTGlzdEl0ZW17XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vICBtaW4taGVpZ2h0OiA1MHB4O1xuXG4gfVxuIC5TaXRlTmFtZXtcbiAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICBmb250LWZhbWlseTogJ1JvYm90bycsc2Fucy1zZXJpZjtcbiB9XG4gLlNpdGVEZXNjcmlwdGlvbntcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyxzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiByZ2IoODMsIDgyLCA4Mik7XG59XG4uTG9nb3V0QnRue1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICNmZmY7XHRcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsc2Fucy1zZXJpZjtcdFxuICAgIGZvbnQtc2l6ZTogMTVweDtcdFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHRcbiAgICBsZXR0ZXItc3BhY2luZzogMC44cHg7XHRcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgfVxuICAuRml4ZWRCdXR0b257XG4gICAgd2lkdGg6NjVweDtcbiAgICBoZWlnaHQ6IDY1cHg7XG4gICBwb3NpdGlvbjogZml4ZWQ7XG4gICBib3R0b206IDIwcHg7XG4gICByaWdodDogMjBweDtcbiAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgY29sb3I6d2hpdGU7XG4gICB6LWluZGV4OiAxMDtcbiAgIGJhY2tncm91bmQtY29sb3I6ICMzNDg2RTg7XG59IiwiLlRpdGxlSGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5UaXRsZVRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHdpZHRoOiA4MSU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uVGl0bGVTaWRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5CYWNrQnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2JhY2tfd2hpdGUucG5nXCIpIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5zZWFyY2gtZmlsdGVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5TZWFyY2hPcHRpb24ge1xuICB3aWR0aDogOTAlO1xufVxuXG4uRmlsdGVyT3B0aW9uIHtcbiAgd2lkdGg6IDEwJTtcbn1cblxuLlNlYXJjaERpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMCA0JSAwIDQlO1xufVxuXG5pbnB1dC52YWxpZCB7XG4gIC8qIGJvcmRlci1jb2xvcjogIzI4YTc0NTsgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL0ZpbHRlclNlYXJjaC5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5NSUgY2VudGVyO1xuICBoZWlnaHQ6IDM3cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIC8qIHBhZGRpbmctcmlnaHQ6IDIwcHg7ICovXG4gIG91dGxpbmUtd2lkdGg6IDA7XG4gIGJvcmRlci13aWR0aDogMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBvdXRsaW5lLWNvbG9yOiB3aGl0ZTtcbn1cblxuLk1haW5Db250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjRGODtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uTGlzdEl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLkxpc3RDYXJkIHtcbiAgd2lkdGg6IDkyJTtcbiAgbWFyZ2luOiA0JTtcbn1cblxuLlNpbmdsZUxpc3RJdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5TaXRlTmFtZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5TaXRlRGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNTM1MjUyO1xufVxuXG4uTG9nb3V0QnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xufVxuXG4uRml4ZWRCdXR0b24ge1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA2NXB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAxMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0ODZFODtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/sites/sites.page.ts":
/*!*************************************!*\
  !*** ./src/app/sites/sites.page.ts ***!
  \*************************************/
/*! exports provided: SitesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitesPage", function() { return SitesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-call.service */ "./src/app/services/api-call.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _confirmation_popup_confirmation_popup_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../confirmation-popup/confirmation-popup.page */ "./src/app/confirmation-popup/confirmation-popup.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/loader/loader.service */ "./src/app/services/loader/loader.service.ts");
/* harmony import */ var _services_networkproviderservices_networkproviderservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/networkproviderservices/networkproviderservice.service */ "./src/app/services/networkproviderservices/networkproviderservice.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");











let SitesPage = class SitesPage {
    constructor(apiCall, router, dialog, loader, network, storage, menu, toast) {
        this.apiCall = apiCall;
        this.router = router;
        this.dialog = dialog;
        this.loader = loader;
        this.network = network;
        this.storage = storage;
        this.menu = menu;
        this.toast = toast;
        this.displayDetail = 0;
        this.displayImage = "../../assets/download.png";
        this.getCusstomers = [
            {
                "name": "asmi",
                "mobile": "1234567890",
                "amount": "2500",
                "address": "Mumbai"
            },
            {
                "name": "asmitaaa",
                "mobile": "1234567890",
                "amount": "1000",
                "address": "Ahmednagar"
            },
            {
                "name": "asmitaaaa",
                "mobile": "1234567890",
                "amount": "5000",
                "address": "Pune"
            },
            {
                "name": "asmi",
                "mobile": "1234567890",
                "amount": "2500",
                "address": "Pune"
            },
            {
                "name": "asmi",
                "mobile": "1234567890",
                "amount": "2500",
                "address": "Mumbai"
            },
            {
                "name": "asmitaaa",
                "mobile": "1234567890",
                "amount": "1000",
                "address": "Ahmednagar"
            },
            {
                "name": "asmitaaaa",
                "mobile": "1234567890",
                "amount": "5000",
                "address": "Pune"
            },
            {
                "name": "asmi",
                "mobile": "1234567890",
                "amount": "2500",
                "address": "Pune"
            },
            {
                "name": "asmi",
                "mobile": "1234567890",
                "amount": "2500",
                "address": "Mumbai"
            },
            {
                "name": "asmitaaa",
                "mobile": "1234567890",
                "amount": "1000",
                "address": "Ahmednagar"
            },
            {
                "name": "asmitaaaa",
                "mobile": "1234567890",
                "amount": "5000",
                "address": "Pune"
            },
            {
                "name": "asmi",
                "mobile": "1234567890",
                "amount": "2500",
                "address": "Pune"
            },
        ];
        this.all_sites = [];
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
        });
        let tmp = this.network.CheckNetworkStatus();
        console.log("network status", tmp);
        let ttt = this.network.checkInternetConnection();
        console.log("network status", ttt);
        let net = this.network.getNetworkStatus();
        console.log("network status3", net);
    }
    getSites() {
        this.loader.showBlockingLoaderAuth();
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].version + "sites?page=0&size=200";
        this.apiCall.get(url).subscribe(MyResponse => {
            console.log("My Response", MyResponse);
            this.all_sites = MyResponse['result']['list'];
            this.loader.hideBlockingLoaderAuth();
        }, error => {
            this.network.CheckNetworkStatus();
            this.network.onPageLoadCheckInternet();
            this.loader.hideBlockingLoaderAuth();
            // this.networkServices.checkInternetConnection();
        });
    }
    showTask(site) {
        console.log("user id", this.user_data);
        let update_access = 0;
        if (site.users.length != 0) {
            for (let i = 0; i < site.users.length; i++) {
                if (site.users[i] == this.user_data['id']) {
                    update_access = 1;
                    break;
                }
            }
        }
        console.log("siteId", site.id);
        this.router.navigate(['sites/' + site.id + "/" + site.name + "/" + update_access + '/location-of-area']);
    }
    logout() {
        let send_data = {};
        send_data['text'] = "Do you really want to logout ?";
        send_data['button2'] = "Cancel";
        send_data['button1'] = "Logout";
        const dialogRef = this.dialog.open(_confirmation_popup_confirmation_popup_page__WEBPACK_IMPORTED_MODULE_5__["ConfirmationPopupPage"], {
            width: '450px',
            data: send_data
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log("result", result);
            if (result['is_success'] == 1) {
                this.storage.remove('cepl_user_data').then(() => {
                    this.router.navigate(['login']);
                });
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
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: message,
                duration: 4000
            });
            toast.present();
        });
    }
    getBalanceDetail() {
        this.router.navigate(['/paymentrecord']);
        // this.presentToast("Check pending balance");
    }
    detailInfo() {
        this.displayDetail = 1;
        this.displayImage = "../../assets/up-arrow.png";
    }
    lessInfo() {
        this.displayDetail = 0;
        this.displayImage = "../../assets/download.png";
    }
};
SitesPage.ctorParameters = () => [
    { type: _services_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"] },
    { type: _services_networkproviderservices_networkproviderservice_service__WEBPACK_IMPORTED_MODULE_8__["NetworkproviderserviceService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"] }
];
SitesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sites',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sites.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sites/sites.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sites.page.scss */ "./src/app/sites/sites.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
        _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"],
        _services_networkproviderservices_networkproviderservice_service__WEBPACK_IMPORTED_MODULE_8__["NetworkproviderserviceService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"]])
], SitesPage);



/***/ })

}]);
//# sourceMappingURL=sites-sites-module-es2015.js.map