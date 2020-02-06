(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addcustomer-addcustomer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/addcustomer/addcustomer.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addcustomer/addcustomer.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-row>\n      <ion-col size=\"2\">\n        <ion-icon name=\"close\" style=\"width:30px; height:30px; margin:10px ;color : #ffffff\" (click)=\"goBackword()\">\n        </ion-icon>\n        <!-- <button ion-button class=\"BackButton\" (click)=\"goBackword()\" style=\"margin:10px\"></button> -->\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-label class=\"TitleHeader TitleText\" style=\"font-size: 17px;\">\n          {{savetext}}\n        </ion-label>\n      </ion-col>\n     \n    </ion-row>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <form #userForm=\"ngForm\">\n    <button style=\"width:55px; height: 55px; background-color: #bfc0c9;font-size:20px\" class=\"centerImg\">+</button>\n    <!-- <img src=\"../assets/logoapp.png\" class=\"centerImg\" (click)=\"getContactList()\"/> -->\n    <ion-row style=\"width:100%\">\n      <ion-col size=\"2\">\n        <ion-icon name=\"person\" style=\"width:25px; height:25px; color : #93959e; margin: 20px\">\n        </ion-icon>\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-row>\n          <mat-form-field style=\"width:90%; margin-right:10%\">\n            <input matInput class=\"form-control \" name=\"fname\" required [(ngModel)]=\"userModel.fname\" #fname=\"ngModel\"\n              pattern=\"[a-zA-z]+$\" placeholder=\"First Name\" />\n            <mat-error>\n              <div class=\"form-group\">\n                <div *ngIf=\"fname.invalid && (fname.dirty || fname.touched)\">\n                  First Name Is Requird\n                </div>\n              </div>\n            </mat-error>\n\n          </mat-form-field>\n        </ion-row>\n        <ion-row>\n          <mat-form-field style=\"width:90%; margin-right:10%\">\n            <input matInput class=\"form-control \" name=\"lname\" required [(ngModel)]=\"userModel.lname\" #lname=\"ngModel\"\n              pattern=\"[a-zA-z]+$\" placeholder=\"Last Name\" />\n            <mat-error>\n              <div class=\"form-group\">\n                <div *ngIf=\"lname.invalid && (lname.dirty || lname.touched)\">\n                  Last Name Is Requird\n                </div>\n              </div>\n            </mat-error>\n\n          </mat-form-field>\n        </ion-row>\n\n      </ion-col>\n    </ion-row>\n\n\n\n<ion-row>\n  <ion-col size=\"2\">\n    <ion-icon name=\"call\" style=\"width:25px; height:25px; color : #93959e; margin: 20px\">\n    </ion-icon>\n  </ion-col>\n  <ion-col size=\"10\">\n    <mat-form-field style=\"width:90%; margin-right:10%\">\n      <input matInput class=\"form-control \" name=\"mobile\" minlength=\"10\" maxlength=\"10\" required [(ngModel)]=\"userModel.mobile\" #mobile=\"ngModel\"\n        pattern=\"[0-9]+$\" placeholder=\"Mobile\" />\n      <mat-error>\n        <div class=\"form-group\">\n          <div *ngIf=\"mobile.invalid && (mobile.dirty || mobile.touched)\">\n            Mobile Number Is Requird\n          </div>\n        </div>\n      </mat-error>\n\n    </mat-form-field>\n  </ion-col>\n</ion-row>\n    \n<ion-row>\n  <ion-col size=\"2\">\n    <ion-icon name=\"mail\" style=\"width:25px; height:25px; color : #93959e; margin: 20px\">\n    </ion-icon>\n  </ion-col>\n\n  <ion-col size=\"10\">\n    <mat-form-field style=\"width:90%; margin-right:10%\">\n      <input matInput class=\"form-control \" name=\"email\" [(ngModel)]=\"userModel.email\" #email=\"ngModel\"\n        pattern=\"[a-zA-z]+$\" placeholder=\"Email\" />\n      <mat-error>\n        <div class=\"form-group\">\n          <div *ngIf=\"email.invalid && (email.dirty || email.touched)\">\n            Email Is Requird\n          </div>\n        </div>\n      </mat-error>\n\n    </mat-form-field>\n  </ion-col>\n</ion-row>\n\n   \n\n    <!-- <mat-form-field class=\"inputCss\">\n      <input matInput class=\"form-control \" name=\"amount\" required [(ngModel)]=\"userModel.amount\" #amount=\"ngModel\"\n        pattern=\"[0-9]+$\" placeholder=\"Amount\" />\n      <mat-error>\n        <div class=\"form-group\">\n          <div *ngIf=\"amount.invalid && (amount.dirty || amount.touched)\">\n            Amount Is Requird\n          </div>\n        </div>\n      </mat-error>\n    </mat-form-field> -->\n\n    <ion-row>\n      <ion-col size=\"2\">\n        <ion-icon name=\"home\" style=\"width:25px; height:25px; color : #93959e; margin: 20px\">\n        </ion-icon>\n      </ion-col>\n      <ion-col size=\"10\">\n        <mat-form-field style=\"width:90%; margin-right:10%\">\n          <textarea matInput class=\"form-control \" name=\"address\"  [(ngModel)]=\"userModel.address\" #address=\"ngModel\"\n            pattern=\"[a-zA-z]+$\" placeholder=\"Address\" ></textarea>\n          <!-- <mat-error>\n            <div class=\"form-group\">\n              <div *ngIf=\"address.invalid && (address.dirty || address.touched)\">\n                Address Is Requird\n              </div>\n            </div>\n          </mat-error> -->\n        </mat-form-field>\n    \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"2\">\n        <ion-icon name=\"document\" style=\"width:25px; height:25px; color : #93959e; margin: 20px\">\n        </ion-icon>\n      </ion-col>\n    \n      <ion-col size=\"10\">\n        <mat-form-field style=\"width:90%; margin-right:10%;\">\n          <textarea matInput class=\"form-control \" name=\"note\" [(ngModel)]=\"userModel.note\" #note=\"ngModel\"\n            pattern=\"[a-zA-z]+$\" placeholder=\"Note\" ></textarea>\n        \n        </mat-form-field>\n      </ion-col>\n    </ion-row>\n\n   \n    <div class=\"LoginClass\">\n      <button mat-raised-button\n        [disabled]=\"mobile.invalid || address.invalid || fname.invalid || lname.invalid \"\n        class=\"submitButton\" (click)=\"addCustomerData()\">Save</button>\n\n    </div>\n  </form>\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/addcustomer/addcustomer-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/addcustomer/addcustomer-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AddcustomerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcustomerPageRoutingModule", function() { return AddcustomerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addcustomer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addcustomer.page */ "./src/app/addcustomer/addcustomer.page.ts");




const routes = [
    {
        path: '',
        component: _addcustomer_page__WEBPACK_IMPORTED_MODULE_3__["AddcustomerPage"]
    }
];
let AddcustomerPageRoutingModule = class AddcustomerPageRoutingModule {
};
AddcustomerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddcustomerPageRoutingModule);



/***/ }),

/***/ "./src/app/addcustomer/addcustomer.module.ts":
/*!***************************************************!*\
  !*** ./src/app/addcustomer/addcustomer.module.ts ***!
  \***************************************************/
/*! exports provided: AddcustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcustomerPageModule", function() { return AddcustomerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addcustomer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addcustomer-routing.module */ "./src/app/addcustomer/addcustomer-routing.module.ts");
/* harmony import */ var _addcustomer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addcustomer.page */ "./src/app/addcustomer/addcustomer.page.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");








let AddcustomerPageModule = class AddcustomerPageModule {
};
AddcustomerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _addcustomer_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddcustomerPageRoutingModule"]
        ],
        declarations: [_addcustomer_page__WEBPACK_IMPORTED_MODULE_6__["AddcustomerPage"]]
    })
], AddcustomerPageModule);



/***/ }),

/***/ "./src/app/addcustomer/addcustomer.page.scss":
/*!***************************************************!*\
  !*** ./src/app/addcustomer/addcustomer.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".FullWidth {\n  width: 100%;\n  margin-top: 30px;\n}\n\n.inputCss {\n  color: black;\n  width: 70%;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin-top: 7px;\n}\n\n.labelCss {\n  margin-top: 15% !important;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 18px;\n  width: 81%;\n  color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.BackButton {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.new-background-color {\n  --background: #d2691e;\n}\n\n.buttonCss {\n  color: white;\n  width: 70%;\n  margin-left: 15%;\n  margin-right: 15%;\n  font-size: 17px;\n  padding: 12px;\n  background: #3255f3;\n  border-radius: 15px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.centerImg {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 70px;\n  margin-top: 20px;\n  height: 70px;\n  margin-top: 10%;\n  border-radius: 50%;\n}\n\n.submitButton {\n  height: 48px;\n  width: 70%;\n  margin-left: 15%;\n  margin-right: 15%;\n  border-radius: 25px;\n  background-color: #3255f3;\n  color: #FFFFFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n}\n\n.saveText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 1.3rem;\n  width: 81%;\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 14px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FycmF5cG9pbnRlci9EZXNrdG9wL3BldHJvbHB1bXBhcHAvc3JjL2FwcC9hZGRjdXN0b21lci9hZGRjdXN0b21lci5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkZGN1c3RvbWVyL2FkZGN1c3RvbWVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ssWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNELGlCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFFQSxZQUFBO0VBQ0EsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNBSjs7QURHQTtFQUNJLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUVBLHlCQUFBO1VBQUEsbUJBQUE7QUNESjs7QURJQTtFQUNJLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0kscUJBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0MsZ0JBQUE7RUFDRCxpQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFFRCxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNGSDs7QURPQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0pKOztBRE9FO0VBRUUsWUFBQTtFQUNBLFVBQUE7RUFDQyxnQkFBQTtFQUNELGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUNMSjs7QURXQTtFQUNJLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC9hZGRjdXN0b21lci9hZGRjdXN0b21lci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuRnVsbFdpZHRoe1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmlucHV0Q3Nze1xuICAgICBjb2xvcjogYmxhY2s7IFxuICAgICB3aWR0aDogNzAlOyBcbiAgICAgbWFyZ2luLWxlZnQ6IDE1JTsgXG4gICAgbWFyZ2luLXJpZ2h0OiAxNSU7XG4gICAgbWFyZ2luLXRvcDo3cHg7XG59XG5cbi5sYWJlbENzc3tcbiAgICBtYXJnaW4tdG9wOjE1JSAhaW1wb3J0YW50O1xufVxuXG4uVGl0bGVIZWFkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gcGFkZGluZzogMCAxMHB4IDAgMTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuLlRpdGxlVGV4dHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHdpZHRoOiA4MSU7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgLy8gZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uQmFja0J1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZycpIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4ubmV3LWJhY2tncm91bmQtY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZDI2OTFlO1xufVxuXG4uYnV0dG9uQ3Nze1xuICAgIGNvbG9yOiB3aGl0ZTsgXG4gICAgd2lkdGg6IDcwJTsgXG4gICAgIG1hcmdpbi1sZWZ0OiAxNSU7IFxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6ICMzMjU1ZjM7XG4gICBcbiAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICBtYXJnaW4tdG9wOjIwcHg7XG4gICBtYXJnaW4tYm90dG9tOjIwcHg7XG59XG5cblxuXG4uY2VudGVySW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgbWFyZ2luLXRvcDoxMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5cbiAgLnN1Ym1pdEJ1dHRvbntcbiAgIFxuICAgIGhlaWdodDogNDhweDtcdFxuICAgIHdpZHRoOiA3MCU7IFxuICAgICBtYXJnaW4tbGVmdDogMTUlOyBcbiAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1x0XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyNTVmMztcbiAgICBjb2xvcjogI0ZGRkZGRjtcdFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyxzYW5zLXNlcmlmO1x0XG4gICAgZm9udC1zaXplOiAxNXB4O1x0XG4gICAgLy8gcG9zaXRpb246IGZpeGVkO1xuICAgIC8vIGJvdHRvbTogMTBweDtcbiAgICAvLyByaWdodDogMTBweDtcbn1cblxuLnNhdmVUZXh0e1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB3aWR0aDogODElO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4gICIsIi5GdWxsV2lkdGgge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmlucHV0Q3NzIHtcbiAgY29sb3I6IGJsYWNrO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tbGVmdDogMTUlO1xuICBtYXJnaW4tcmlnaHQ6IDE1JTtcbiAgbWFyZ2luLXRvcDogN3B4O1xufVxuXG4ubGFiZWxDc3Mge1xuICBtYXJnaW4tdG9wOiAxNSUgIWltcG9ydGFudDtcbn1cblxuLlRpdGxlSGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5UaXRsZVRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB3aWR0aDogODElO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLkJhY2tCdXR0b24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmdcIikgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZDI2OTFlO1xufVxuXG4uYnV0dG9uQ3NzIHtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tbGVmdDogMTUlO1xuICBtYXJnaW4tcmlnaHQ6IDE1JTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjMzI1NWYzO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY2VudGVySW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA3MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uc3VibWl0QnV0dG9uIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tbGVmdDogMTUlO1xuICBtYXJnaW4tcmlnaHQ6IDE1JTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyNTVmMztcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5zYXZlVGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgd2lkdGg6IDgxJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/addcustomer/addcustomer.page.ts":
/*!*************************************************!*\
  !*** ./src/app/addcustomer/addcustomer.page.ts ***!
  \*************************************************/
/*! exports provided: AddcustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcustomerPage", function() { return AddcustomerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _confirmation_popup_confirmation_popup_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../confirmation-popup/confirmation-popup.page */ "./src/app/confirmation-popup/confirmation-popup.page.ts");






let AddcustomerPage = class AddcustomerPage {
    constructor(route, router, toast, dialog) {
        this.route = route;
        this.router = router;
        this.toast = toast;
        this.dialog = dialog;
        this.userModel = {};
    }
    ngOnInit() {
        this.recordstatus = this.route.snapshot.params['detailCustomerdata'];
        console.log("detailCustomerdata" + this.recordstatus);
        let displayArrayValues = JSON.parse(this.recordstatus);
        this.userModel['mobile'] = displayArrayValues.mobile;
        this.userModel['address'] = displayArrayValues.address;
        this.userModel['email'] = displayArrayValues.email;
        this.userModel['note'] = displayArrayValues.note;
        let fullname = displayArrayValues.fname;
        if (fullname != "") {
            let names = fullname.split(" ");
            this.userModel['fname'] = names[0];
            this.userModel['lname'] = names[(names.length - 1)];
        }
        this.checkStatus = displayArrayValues.checkstatus;
        if (this.checkStatus == "add") {
            this.savetext = "Add Customer";
        }
        else if (this.checkStatus == "update") {
            this.savetext = "Update Customer";
        }
    }
    addCustomerData() {
        if (this.checkStatus == "add") {
            this.presentToast("Record added successfully");
            // const dialogRef = this.dialog.open(UpdatebalancePage, {
            //   width: '450px',
            //   // data: send_data
            // });
            // dialogRef.afterClosed().subscribe(async result => {
            //   dialogRef.close();
            //   this.router.navigate(['/sites']);
            // });
        }
        else if (this.checkStatus == "update") {
            this.presentToast("Record updated successfully");
            this.router.navigate(['/sites']);
        }
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
    goBackword() {
        let send_data = {};
        send_data['text'] = "Are you sure you want to discard the changes?";
        send_data['button2'] = "No";
        send_data['button1'] = "Yes";
        const dialogRef = this.dialog.open(_confirmation_popup_confirmation_popup_page__WEBPACK_IMPORTED_MODULE_5__["ConfirmationPopupPage"], {
            width: '450px',
            data: send_data
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log("result", result);
            // this.router.navigate(['sites']);
        });
    }
};
AddcustomerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
AddcustomerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addcustomer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addcustomer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/addcustomer/addcustomer.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addcustomer.page.scss */ "./src/app/addcustomer/addcustomer.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
], AddcustomerPage);



/***/ })

}]);
//# sourceMappingURL=addcustomer-addcustomer-module-es2015.js.map