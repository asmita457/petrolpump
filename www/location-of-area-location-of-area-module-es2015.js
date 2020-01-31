(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["location-of-area-location-of-area-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/location-of-area/location-of-area.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/location-of-area/location-of-area.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title class=\"Padding0\">\n        <div class=\"TitleHeader\">\n          <div class=\"TitleText\">\n            <button ion-button class=\"BackButton\" (click)=\"goBackword()\"></button>\n            <!-- <i class=\"material-icons\" style=\"color: white;\">\n              menu\n              </i> -->\n              <div style=\"width: 90%; overflow: hidden; text-overflow: ellipsis;\">\n            {{siteName}}\n          </div>\n          </div>\n          <!-- <div style=\"width: 10%;text-align: right;margin-left: 5px;\">\n              <button class=\"LogoutBtn\" (click)=\"logout()\">Logout</button>\n    \n            </div> -->\n        </div>\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <div class=\"MainContainer\">\n    <div class=\"search-filter-container\">\n        \n      <div class=\"SearchOption\"  style=\"width: 92%;\">\n        <div class=\"SearchDiv\">\n          <input class=\"valid\" type=\"text\" [(ngModel)]=\"search_text\" placeholder=\"Search\" name=\"name\" />\n      </div>\n      </div>\n     \n  \n     </div>\n     <div class=\"ListContainer\">\n  \n     <div class=\"ListItem\">\n       <div class=\"SingleListItem\">\n        <mat-card class=\"ListCard\" *ngFor=\"let task of all_tasks |filter:search_text\" (click)=\"showSubTask(task)\">\n        <div style=\"width: 100%;padding: 10px;\">\n  \n            <div style=\"display: inline-flex;width: 100%;\">\n                <div class=\"SiteName\">\n      \n                    <p style=\"margin: 0;\">{{task.name}}</p>\n          \n                  </div>\n                  <!-- <div style=\"width: 20%;text-align: right;font-size: 1rem;\">\n                      {{task.cmpltPercentage}} %\n                  </div> -->\n                </div>\n\n          <!-- <div class=\"SiteName\">\n  \n            <p style=\"margin: 0;\">{{task.name}}</p>\n  \n          </div> -->\n          \n          <div *ngIf=\"task.description != null || task.description != undefined\" class=\"SiteDescription\">\n  \n              <p style=\"margin: 0;\">{{task.description}}</p>\n    \n            </div>\n  \n        \n        </div>\n        </mat-card>\n  \n       </div>\n     </div>\n  \n  \n    </div>\n  </div>\n  \n  </ion-content>");

/***/ }),

/***/ "./src/app/location-of-area/location-of-area-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/location-of-area/location-of-area-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: LocationOfAreaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationOfAreaPageRoutingModule", function() { return LocationOfAreaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _location_of_area_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location-of-area.page */ "./src/app/location-of-area/location-of-area.page.ts");




const routes = [
    {
        path: '',
        component: _location_of_area_page__WEBPACK_IMPORTED_MODULE_3__["LocationOfAreaPage"]
    }
];
let LocationOfAreaPageRoutingModule = class LocationOfAreaPageRoutingModule {
};
LocationOfAreaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LocationOfAreaPageRoutingModule);



/***/ }),

/***/ "./src/app/location-of-area/location-of-area.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/location-of-area/location-of-area.module.ts ***!
  \*************************************************************/
/*! exports provided: LocationOfAreaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationOfAreaPageModule", function() { return LocationOfAreaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _location_of_area_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./location-of-area-routing.module */ "./src/app/location-of-area/location-of-area-routing.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _location_of_area_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./location-of-area.page */ "./src/app/location-of-area/location-of-area.page.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");









let LocationOfAreaPageModule = class LocationOfAreaPageModule {
};
LocationOfAreaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _location_of_area_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocationOfAreaPageRoutingModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"]
        ],
        declarations: [_location_of_area_page__WEBPACK_IMPORTED_MODULE_7__["LocationOfAreaPage"]]
    })
], LocationOfAreaPageModule);



/***/ }),

/***/ "./src/app/location-of-area/location-of-area.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/location-of-area/location-of-area.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 1.3rem;\n  width: 80%;\n  color: #ffffff;\n  font-weight: 700;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleSider {\n  display: inline-block;\n  text-align: right;\n  font-size: 1rem;\n  font-weight: 600;\n  width: 100%;\n}\n\n.BackButton {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.search-filter-container {\n  width: 100%;\n  height: 45px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 8px;\n}\n\n.SearchOption {\n  width: 90%;\n}\n\n.FilterOption {\n  width: 10%;\n}\n\n.SearchDiv {\n  width: 100%;\n  height: 100%;\n  margin: 0 4% 0 4%;\n}\n\ninput.valid {\n  /* border-color: #28a745; */\n  background-image: url('FilterSearch.png');\n  background-repeat: no-repeat;\n  background-size: 20px 20px;\n  background-position: 95% center;\n  height: 37px;\n  width: 100%;\n  padding-left: 20px;\n  /* padding-right: 20px; */\n  outline-width: 0;\n  border-width: 0;\n  font-size: 13px;\n  font-weight: 400;\n  background-color: #fff;\n  border-radius: 15px;\n  outline-color: white;\n}\n\n.MainContainer {\n  width: 100%;\n  background-color: #F1F4F8;\n  height: 100%;\n}\n\n.ListItem {\n  width: 100%;\n}\n\n.ListCard {\n  padding: 10px !important;\n  width: 92%;\n  margin: 4%;\n}\n\n.SingleListItem {\n  width: 100%;\n}\n\n.SiteName {\n  font-size: 1rem;\n  font-weight: 600;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.SiteDescription {\n  font-size: 0.8rem;\n  font-weight: 500;\n  font-family: \"Roboto\", sans-serif;\n  color: #535252;\n}\n\n.LogoutBtn {\n  background-color: transparent;\n  color: #fff;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 0.8px;\n  line-height: 19px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FycmF5cG9pbnRlci9EZXNrdG9wL3BldHJvbHB1bXBhcHAvc3JjL2FwcC9sb2NhdGlvbi1vZi1hcmVhL2xvY2F0aW9uLW9mLWFyZWEucGFnZS5zY3NzIiwic3JjL2FwcC9sb2NhdGlvbi1vZi1hcmVhL2xvY2F0aW9uLW9mLWFyZWEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUVBLFlBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksMkJBQUE7RUFBQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFJQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7QUNGSjs7QURJQTtFQUNJLFVBQUE7QUNESjs7QURHQTtFQUNJLFVBQUE7QUNBSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBSUEsaUJBQUE7QUNGSjs7QURJQTtFQUNJLDJCQUFBO0VBRUEseUNBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNGSjs7QURJQztFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUVBLFlBQUE7QUNGTDs7QURJQztFQUNJLFdBQUE7QUNETDs7QURHQztFQUNJLHdCQUFBO0VBRUQsVUFBQTtFQUNBLFVBQUE7QUNESjs7QURHQztFQUNJLFdBQUE7QUNBTDs7QURJQztFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0FDREw7O0FER0M7RUFDRyxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0FDQUo7O0FERUE7RUFFSSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9uLW9mLWFyZWEvbG9jYXRpb24tb2YtYXJlYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuVGl0bGVIZWFkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gcGFkZGluZzogMCAxMHB4IDAgMTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuLlRpdGxlVGV4dHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgd2lkdGg6IDgwJTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uVGl0bGVTaWRlcntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjpyaWdodDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB3aWR0aDogMTAwJTtcblxufVxuLkJhY2tCdXR0b257XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmcnKSBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLnNlYXJjaC1maWx0ZXItY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDVweDtcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmdiKDE3MywgMTcyLCAxNzIpO1xuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTczLCAxNzIsIDE3Mik7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG59XG4uU2VhcmNoT3B0aW9ue1xuICAgIHdpZHRoOiA5MCU7XG59XG4uRmlsdGVyT3B0aW9ue1xuICAgIHdpZHRoOiAxMCU7XG59XG4uU2VhcmNoRGl2e1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgLy8gcGFkZGluZzogM3B4IDAgM3B4IDA7XG4gICAgbWFyZ2luOiAwIDQlIDAgNCU7O1xufVxuaW5wdXQudmFsaWQge1xuICAgIC8qIGJvcmRlci1jb2xvcjogIzI4YTc0NTsgKi9cbiAgICAvLyBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL0ZpbHRlclNlYXJjaC5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDk1JSBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzN3B4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiAyMHB4OyAqL1xuICAgIG91dGxpbmUtd2lkdGg6IDA7XG4gICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBvdXRsaW5lLWNvbG9yOiB3aGl0ZTtcbiB9XG4gLk1haW5Db250YWluZXJ7XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGNEY4O1xuICAgIC8vICBwYWRkaW5nOiAxMHB4O1xuICAgICBoZWlnaHQ6IDEwMCU7XG4gfVxuIC5MaXN0SXRlbXtcbiAgICAgd2lkdGg6IDEwMCU7XG4gfVxuIC5MaXN0Q2FyZHtcbiAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAgIC8vICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHdpZHRoOiA5MiU7XG4gICAgbWFyZ2luOiA0JTtcbiB9XG4gLlNpbmdsZUxpc3RJdGVte1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAvLyAgbWluLWhlaWdodDogNTBweDtcblxuIH1cbiAuU2l0ZU5hbWV7XG4gICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XG4gfVxuIC5TaXRlRGVzY3JpcHRpb257XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogcmdiKDgzLCA4MiwgODIpO1xufVxuLkxvZ291dEJ0bntcbiBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogI2ZmZjtcdFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyxzYW5zLXNlcmlmO1x0XG4gICAgZm9udC1zaXplOiAxNXB4O1x0XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcdFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjhweDtcdFxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICB9IiwiLlRpdGxlSGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5UaXRsZVRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHdpZHRoOiA4MCU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uVGl0bGVTaWRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5CYWNrQnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2JhY2tfd2hpdGUucG5nXCIpIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5zZWFyY2gtZmlsdGVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5TZWFyY2hPcHRpb24ge1xuICB3aWR0aDogOTAlO1xufVxuXG4uRmlsdGVyT3B0aW9uIHtcbiAgd2lkdGg6IDEwJTtcbn1cblxuLlNlYXJjaERpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMCA0JSAwIDQlO1xufVxuXG5pbnB1dC52YWxpZCB7XG4gIC8qIGJvcmRlci1jb2xvcjogIzI4YTc0NTsgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL0ZpbHRlclNlYXJjaC5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5NSUgY2VudGVyO1xuICBoZWlnaHQ6IDM3cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIC8qIHBhZGRpbmctcmlnaHQ6IDIwcHg7ICovXG4gIG91dGxpbmUtd2lkdGg6IDA7XG4gIGJvcmRlci13aWR0aDogMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBvdXRsaW5lLWNvbG9yOiB3aGl0ZTtcbn1cblxuLk1haW5Db250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjRGODtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uTGlzdEl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLkxpc3RDYXJkIHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogOTIlO1xuICBtYXJnaW46IDQlO1xufVxuXG4uU2luZ2xlTGlzdEl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLlNpdGVOYW1lIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLlNpdGVEZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM1MzUyNTI7XG59XG5cbi5Mb2dvdXRCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjhweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/location-of-area/location-of-area.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/location-of-area/location-of-area.page.ts ***!
  \***********************************************************/
/*! exports provided: LocationOfAreaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationOfAreaPage", function() { return LocationOfAreaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-call.service */ "./src/app/services/api-call.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/loader/loader.service */ "./src/app/services/loader/loader.service.ts");
/* harmony import */ var _confirmation_popup_confirmation_popup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../confirmation-popup/confirmation-popup.page */ "./src/app/confirmation-popup/confirmation-popup.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_networkproviderservices_networkproviderservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/networkproviderservices/networkproviderservice.service */ "./src/app/services/networkproviderservices/networkproviderservice.service.ts");









let LocationOfAreaPage = class LocationOfAreaPage {
    constructor(apiCall, router, activedRoute, loader, dialog, network) {
        this.apiCall = apiCall;
        this.router = router;
        this.activedRoute = activedRoute;
        this.loader = loader;
        this.dialog = dialog;
        this.network = network;
        this.all_tasks = [];
    }
    ngOnInit() {
        this.loader.showBlockingLoaderAuth();
        let tmp = this.activedRoute.snapshot.params['siteId'];
        let name = this.activedRoute.snapshot.params['siteName'];
        let access = this.activedRoute.snapshot.params['updateAccess'];
        this.siteName = name;
        this.siteId = tmp;
        this.updateAccess = parseInt(access);
        console.log("access", this.updateAccess);
        this.getTasks();
    }
    getTasks() {
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].version + "sites/" + this.siteId + "/tasks?page=0&size=200";
        this.apiCall.get(url).subscribe(MyResponse => {
            console.log("My Response", MyResponse);
            this.all_tasks = MyResponse['result']['list'];
            this.loader.hideBlockingLoaderAuth();
        }, error => {
            this.network.CheckNetworkStatus();
            this.network.onPageLoadCheckInternet();
            this.loader.hideBlockingLoaderAuth();
            // this.networkServices.checkInternetConnection();
        });
    }
    goBackword() {
        window.history.back();
    }
    showSubTask(task) {
        this.router.navigate(['sites/' + this.siteId + '/location-of-area/' + task.id + "/" + this.updateAccess + '/work-description']);
    }
    logout() {
        let send_data = {};
        send_data['text'] = "Do you really want to logout ?";
        send_data['button2'] = "Cancel";
        send_data['button1'] = "Logout";
        const dialogRef = this.dialog.open(_confirmation_popup_confirmation_popup_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmationPopupPage"], {
            width: '450px',
            data: send_data
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log("result", result);
            if (result['is_success'] == 1) {
                this.router.navigate(['login']);
            }
        });
    }
};
LocationOfAreaPage.ctorParameters = () => [
    { type: _services_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _services_networkproviderservices_networkproviderservice_service__WEBPACK_IMPORTED_MODULE_8__["NetworkproviderserviceService"] }
];
LocationOfAreaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-location-of-area',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./location-of-area.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/location-of-area/location-of-area.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./location-of-area.page.scss */ "./src/app/location-of-area/location-of-area.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
        _services_networkproviderservices_networkproviderservice_service__WEBPACK_IMPORTED_MODULE_8__["NetworkproviderserviceService"]])
], LocationOfAreaPage);



/***/ })

}]);
//# sourceMappingURL=location-of-area-location-of-area-module-es2015.js.map