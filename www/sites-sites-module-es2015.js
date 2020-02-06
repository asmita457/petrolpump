(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sites-sites-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sites/sites.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sites/sites.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <!-- <ion-toolbar class=\"new-background-color\"> -->\n  <ion-toolbar color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"Padding0\" style=\"padding: 0;\">\n      <div class=\"TitleHeader\">\n        <div class=\"TitleText\">\n\n          <div style=\"width: 80%; font-size:17 \">\n            Customers\n          </div>\n        </div>\n\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <div align=\"lefft\" style=\"margin: 10px\">\n    <ion-searchbar type=\"text\" debounce=\"500\" (ionInput)=\"getItems($event)\"></ion-searchbar>\n    <ion-list *ngIf=\"isItemAvailable\">\n        <ion-item *ngFor=\"let item of items\">{{ item }}</ion-item>\n    </ion-list>\n  \n  </div>\n \n  <div *ngFor=\"let daata of getCusstomers; index as i\">\n    <ion-item (click)=\"getCustomerDetailInfo(daata)\" style=\"margin-left:-20px\">\n      <div style=\"margin-left:30px\">\n       \n    <button style=\"width:35px; height: 35px; border-radius: 50%;margin-right: 15px ; color: #ffffff\" [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even' \">{{daata.name.charAt(0) | uppercase}}</button>\n      </div>\n      {{daata.name | titlecase}}\n    </ion-item>\n  </div>\n \n  <ion-item>\n  </ion-item>\n\n\n  <div class=\"editCss\" (click)=\"addCustomaer()\">\n   \n\n      <ion-label style=\"color:white;\" align=\"center\">Add Customer</ion-label>\n    \n    </div>\n\n<!-- <button mat-raised-button class=\"FixedButton\" (click)=\"addCustomaer()\"> <img\n  src=\"../../assets/AddRestro.png\" width=\"30\" height=\"30\"> </button> -->\n</ion-content>\n\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleSider {\n  display: inline-block;\n  text-align: right;\n  width: 100%;\n}\n\n.BackButton {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.search-filter-container {\n  width: 100%;\n  height: 45px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 8px;\n}\n\n.SearchOption {\n  width: 90%;\n}\n\n.FilterOption {\n  width: 10%;\n}\n\n.SearchDiv {\n  width: 100%;\n  height: 100%;\n  margin: 0 4% 0 4%;\n}\n\ninput.valid {\n  /* border-color: #28a745; */\n  background-image: url('FilterSearch.png');\n  background-repeat: no-repeat;\n  background-size: 20px 20px;\n  background-position: 95% center;\n  height: 37px;\n  width: 100%;\n  padding-left: 20px;\n  /* padding-right: 20px; */\n  outline-width: 0;\n  border-width: 0;\n  font-size: 13px;\n  font-weight: 400;\n  background-color: #fff;\n  border-radius: 15px;\n  outline-color: white;\n}\n\n.MainContainer {\n  width: 100%;\n  background-color: #F1F4F8;\n  height: 100%;\n}\n\n.ListItem {\n  width: 100%;\n}\n\n.ListCard {\n  width: 92%;\n  margin: 4%;\n}\n\n.SingleListItem {\n  width: 100%;\n}\n\n.SiteName {\n  font-size: 1rem;\n  font-weight: 600;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.SiteDescription {\n  font-size: 0.8rem;\n  font-weight: 500;\n  font-family: \"Roboto\", sans-serif;\n  color: #535252;\n}\n\n.LogoutBtn {\n  background-color: transparent;\n  color: #fff;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 0.8px;\n  line-height: 19px;\n}\n\n.FixedButton {\n  width: 65px;\n  height: 65px;\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  border-radius: 50%;\n  color: white;\n  z-index: 10;\n  background-color: #3255f3;\n}\n\n.new-background-color {\n  --background: #d2691e;\n}\n\n.odd {\n  background-color: #f08132;\n}\n\n.even {\n  background-color: #ee38b7;\n}\n\n.editCss {\n  width: 50%;\n  margin-left: 45%;\n  margin-right: 10px;\n  background-color: #3255f3;\n  display: inline-block;\n  text-align: center;\n  padding: 11px;\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FycmF5cG9pbnRlci9EZXNrdG9wL3BldHJvbHB1bXBhcHAvc3JjL2FwcC9zaXRlcy9zaXRlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpdGVzL3NpdGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFFQSxZQUFBO0VBQ0EsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNBSjs7QURHQTtFQUNJLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUVBLHlCQUFBO1VBQUEsbUJBQUE7QUNESjs7QURHQTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFHQSxXQUFBO0FDRko7O0FES0E7RUFDSSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBSUEsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0FDTEo7O0FET0E7RUFDSSxVQUFBO0FDSko7O0FETUE7RUFDSSxVQUFBO0FDSEo7O0FES0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUlBLGlCQUFBO0FDTEo7O0FET0E7RUFDSSwyQkFBQTtFQUVBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDTEo7O0FET0M7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFFQSxZQUFBO0FDTEw7O0FET0M7RUFDSSxXQUFBO0FDSkw7O0FETUM7RUFHRyxVQUFBO0VBQ0EsVUFBQTtBQ0xKOztBRE9DO0VBQ0ksV0FBQTtBQ0pMOztBRFFDO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7QUNMTDs7QURPQztFQUNHLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUNKSjs7QURNQTtFQUVJLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0pKOztBRE1FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDRCxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNISDs7QURPQTtFQUNJLHFCQUFBO0FDSko7O0FET0E7RUFDSSx5QkFBQTtBQ0pKOztBRE1FO0VBQ0UseUJBQUE7QUNISjs7QURRQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0YsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNFLG1CQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9zaXRlcy9zaXRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuVGl0bGVIZWFkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gcGFkZGluZzogMCAxMHB4IDAgMTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuLlRpdGxlVGV4dHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIHdpZHRoOiA4MSU7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgLy8gZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLlRpdGxlU2lkZXJ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246cmlnaHQ7XG4gICAgLy8gZm9udC1zaXplOiAxcmVtO1xuICAgIC8vIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgd2lkdGg6IDEwMCU7XG5cbn1cbi5CYWNrQnV0dG9ue1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2JhY2tfd2hpdGUucG5nJykgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5zZWFyY2gtZmlsdGVyLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgLy8gcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNzMsIDE3MiwgMTcyKTtcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE3MywgMTcyLCAxNzIpO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xufVxuLlNlYXJjaE9wdGlvbntcbiAgICB3aWR0aDogOTAlO1xufVxuLkZpbHRlck9wdGlvbntcbiAgICB3aWR0aDogMTAlO1xufVxuLlNlYXJjaERpdntcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxOHB4O1xuICAgIC8vIHBhZGRpbmc6IDNweCAwIDNweCAwO1xuICAgIG1hcmdpbjogMCA0JSAwIDQlOztcbn1cbmlucHV0LnZhbGlkIHtcbiAgICAvKiBib3JkZXItY29sb3I6ICMyOGE3NDU7ICovXG4gICAgLy8gcGFkZGluZy1yaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9GaWx0ZXJTZWFyY2gucG5nJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5NSUgY2VudGVyO1xuICAgIGhlaWdodDogMzdweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgLyogcGFkZGluZy1yaWdodDogMjBweDsgKi9cbiAgICBvdXRsaW5lLXdpZHRoOiAwO1xuICAgIGJvcmRlci13aWR0aDogMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgb3V0bGluZS1jb2xvcjogd2hpdGU7XG4gfVxuIC5NYWluQ29udGFpbmVye1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjRGODtcbiAgICAvLyAgcGFkZGluZzogMTBweDtcbiAgICAgaGVpZ2h0OiAxMDAlO1xuIH1cbiAuTGlzdEl0ZW17XG4gICAgIHdpZHRoOiAxMDAlO1xuIH1cbiAuTGlzdENhcmR7XG4gICAgLy8gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgICAvLyAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB3aWR0aDogOTIlO1xuICAgIG1hcmdpbjogNCU7XG4gfVxuIC5TaW5nbGVMaXN0SXRlbXtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gIG1pbi1oZWlnaHQ6IDUwcHg7XG5cbiB9XG4gLlNpdGVOYW1le1xuICAgICBmb250LXNpemU6IDFyZW07XG4gICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyxzYW5zLXNlcmlmO1xuIH1cbiAuU2l0ZURlc2NyaXB0aW9ue1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHJnYig4MywgODIsIDgyKTtcbn1cbi5Mb2dvdXRCdG57XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogI2ZmZjtcdFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyxzYW5zLXNlcmlmO1x0XG4gICAgZm9udC1zaXplOiAxNXB4O1x0XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcdFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjhweDtcdFxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICB9XG4gIC5GaXhlZEJ1dHRvbntcbiAgICB3aWR0aDo2NXB4O1xuICAgIGhlaWdodDogNjVweDtcbiAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgIGJvdHRvbTogMjBweDtcbiAgIHJpZ2h0OiAyMHB4O1xuICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICBjb2xvcjp3aGl0ZTtcbiAgIHotaW5kZXg6IDEwO1xuICAgYmFja2dyb3VuZC1jb2xvcjogIzMyNTVmMztcbn1cblxuXG4ubmV3LWJhY2tncm91bmQtY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZDI2OTFlO1xufVxuXG4ub2Rke1xuICAgIGJhY2tncm91bmQtY29sb3I6I2YwODEzMjtcbiAgfVxuICAuZXZlbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCA1NiwgMTgzKTtcbiAgfVxuXG5cblxuLmVkaXRDc3N7ICAgXG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDo0NSU7XG4gICAgbWFyZ2luLXJpZ2h0OjEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyNTVmMztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOjExcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB9IiwiLlRpdGxlSGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5UaXRsZVRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxOXB4O1xuICB3aWR0aDogODElO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLlRpdGxlU2lkZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLkJhY2tCdXR0b24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmdcIikgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLnNlYXJjaC1maWx0ZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDVweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLlNlYXJjaE9wdGlvbiB7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5GaWx0ZXJPcHRpb24ge1xuICB3aWR0aDogMTAlO1xufVxuXG4uU2VhcmNoRGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwIDQlIDAgNCU7XG59XG5cbmlucHV0LnZhbGlkIHtcbiAgLyogYm9yZGVyLWNvbG9yOiAjMjhhNzQ1OyAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvRmlsdGVyU2VhcmNoLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDk1JSBjZW50ZXI7XG4gIGhlaWdodDogMzdweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgLyogcGFkZGluZy1yaWdodDogMjBweDsgKi9cbiAgb3V0bGluZS13aWR0aDogMDtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG91dGxpbmUtY29sb3I6IHdoaXRlO1xufVxuXG4uTWFpbkNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGNEY4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5MaXN0SXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uTGlzdENhcmQge1xuICB3aWR0aDogOTIlO1xuICBtYXJnaW46IDQlO1xufVxuXG4uU2luZ2xlTGlzdEl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLlNpdGVOYW1lIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLlNpdGVEZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM1MzUyNTI7XG59XG5cbi5Mb2dvdXRCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjhweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG59XG5cbi5GaXhlZEJ1dHRvbiB7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI1NWYzO1xufVxuXG4ubmV3LWJhY2tncm91bmQtY29sb3Ige1xuICAtLWJhY2tncm91bmQ6ICNkMjY5MWU7XG59XG5cbi5vZGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA4MTMyO1xufVxuXG4uZXZlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTM4Yjc7XG59XG5cbi5lZGl0Q3NzIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDQ1JTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI1NWYzO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTFweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufSJdfQ== */");

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/loader/loader.service */ "./src/app/services/loader/loader.service.ts");
/* harmony import */ var _services_networkproviderservices_networkproviderservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/networkproviderservices/networkproviderservice.service */ "./src/app/services/networkproviderservices/networkproviderservice.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









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
        // displayDetail = 0;
        this.getCusstomers = [
            {
                "name": "llllllllll jjjjjjjjjjj",
                "mobile": "",
                "amount": "2500",
                "address": "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
                "email": "lllll@gmail.com",
                "note": "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
                "imagepath": "https://image.shutterstock.com/image-vector/get-ready-advertising-sign-megaphone-600w-1037346505.jpg"
            },
            {
                "name": "smitaaa belhekar",
                "mobile": "1234567890",
                "amount": "1000",
                "address": "Ahmednagar",
                "email": "smitaaa@gmail.com",
                "imagepath": ""
            },
            {
                "name": "asmita belhekar",
                "mobile": "9527902622",
                "amount": "5000",
                "address": "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
                "email": "asmita@gmail.com",
                "note": "aaaaaaaaaaaaaaaa",
                "imagepath": "https://image.flaticon.com/icons/svg/145/145852.svg"
            },
            {
                "name": "sejal belhekar",
                "mobile": "1234567890",
                "amount": "2500",
                "address": "Pune",
                "email": "",
                "note": "aaaaaaaaaaaaaaaa",
                "imagepath": ""
            },
            {
                "name": "priya abc",
                "mobile": "1234567890",
                "amount": "2500",
                "address": "Mumbai",
                "email": "priya@gmail.com",
                "note": "aaaaaaaaaaaaaaaa",
                "imagepath": "https://image.flaticon.com/icons/svg/145/145852.svg"
            },
            {
                "name": "asmi belhekar",
                "mobile": "9527902622",
                "amount": "1000",
                "address": "Ahmednagar",
                "email": "asmi@gmail.com",
                "note": "aaaaaaaaaaaaaaaa",
                "imagepath": ""
            },
            {
                "name": "kiran kokate",
                "mobile": "9096467346",
                "amount": "5000",
                "address": "Pune",
                "email": "kiran@gmail.com",
                "note": "",
                "imagepath": "https://image.flaticon.com/icons/svg/145/145859.svg"
            },
            {
                "name": "ccccc dddd",
                "mobile": "1234567890",
                "amount": "2500",
                "address": "Pune",
                "note": "aaaaaaaaaaaaaaaa",
                "email": "ccccc@gmail.com",
                "imagepath": ""
            },
            {
                "name": "dhananjay raut",
                "mobile": "1234567890",
                "amount": "2500",
                "address": "Mumbai",
                "note": "aaaaaaaaaaaaaaaa",
                "email": "dhananjay@gmail.com",
                "imagepath": "https://image.shutterstock.com/image-vector/get-ready-advertising-sign-megaphone-600w-1037346505.jpg"
            },
            {
                "name": "cccc ppppp",
                "mobile": "1234567890",
                "amount": "1000",
                "address": "Ahmednagar",
                "note": "aaaaaaaaaaaaaaaa",
                "email": "ccc@gmail.com",
                "imagepath": ""
            },
            {
                "name": "cccc hhhhhhh ",
                "mobile": "1234567890",
                "amount": "5000",
                "address": "Pune",
                "note": "aaaaaaaaaaaaaaaa",
                "email": "chchch@gmail.com",
                "imagepath": ""
            },
            {
                "name": "aaaaaaa zzzz",
                "mobile": "1234567890",
                "amount": "2500",
                "address": "",
                "note": "aaaaaaaaaaaaaaaa",
                "email": "azazazaz@gmail.com",
                "imagepath": "https://image.shutterstock.com/image-vector/get-ready-advertising-sign-megaphone-600w-1037346505.jpg"
            },
            {
                "name": "smitaaa belhekar",
                "mobile": "1234567890",
                "amount": "1000",
                "address": "Ahmednagar",
                "note": "aaaaaaaaaaaaaaaa",
                "email": "smitaaa@gmail.com",
                "imagepath": ""
            },
            {
                "name": "aaaaaaaa   zzzz",
                "mobile": "1234567890",
                "amount": "2500",
                "address": "Pune",
                "note": "",
                "email": "azazazaz@gmail.com",
                "imagepath": "https://image.shutterstock.com/image-vector/get-ready-advertising-sign-megaphone-600w-1037346505.jpg"
            },
        ];
        this.all_sites = [];
        this.isItemAvailable = false;
        this.items = [];
        this.currentColor = 'blue';
    }
    // initializeItems() {
    //   this.items = ["Ram", "gopi", "dravid"];
    // }
    // getItems(ev: any) {
    //   this.initializeItems();
    //   const val = ev.target.value;
    //   console.log("search text:" + ev.target.value);
    //   if (val && val.trim() != '') {
    //     this.isItemAvailable = true;
    //     this.items = this.items.filter((item) => {
    //       return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
    //     })
    //   }
    // }
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
        this.getCusstomers.sort((a, b) => a.name.localeCompare(b.name));
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
    addCustomaer() {
        this.checkRecordStatus = "add";
        let detailCustomerdata = {
            "fname": "",
            "mobile": "",
            "address": "",
            "email": "",
            "checkstatus": this.checkRecordStatus,
            "note": ""
        };
        this.router.navigate(['/addcustomer', { detailCustomerdata: JSON.stringify(detailCustomerdata) }]);
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
    getCustomerDetailInfo(data) {
        console.log("getdata::" + JSON.stringify(data));
        let detailData = {
            "name": data.name,
            "mobile": data.mobile,
            "address": data.address,
            "lname": data.lname,
            "amount": data.amount,
            "imagepath": data.imagepath,
            "email": data.email,
            "note": data.note
        };
        this.router.navigate(['customerdetail', { detailData: JSON.stringify(detailData) }]);
    }
};
SitesPage.ctorParameters = () => [
    { type: _services_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
    { type: _services_networkproviderservices_networkproviderservice_service__WEBPACK_IMPORTED_MODULE_6__["NetworkproviderserviceService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] }
];
SitesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sites',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sites.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sites/sites.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sites.page.scss */ "./src/app/sites/sites.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
        _services_networkproviderservices_networkproviderservice_service__WEBPACK_IMPORTED_MODULE_6__["NetworkproviderserviceService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"]])
], SitesPage);



/***/ })

}]);
//# sourceMappingURL=sites-sites-module-es2015.js.map