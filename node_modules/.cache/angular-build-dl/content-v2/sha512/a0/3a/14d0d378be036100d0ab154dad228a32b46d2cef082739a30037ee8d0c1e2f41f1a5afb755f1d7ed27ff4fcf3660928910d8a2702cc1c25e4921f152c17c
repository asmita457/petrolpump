(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"is_show == 1\" class=\"MainLoginClass\">\n\n  <h3 class=\"TitleClass\">Khamkar Petrolium</h3>\n\n  <div class=\"LoginFormClass\">\n\n      <form name=\"entryform\" class=\"FullWidth\" #f=\"ngForm\" novalidate>\n\n\n          <mat-form-field class=\"FullWidth marginTop10\">\n              <input matInput placeholder=\"Phone Number\" (input)=\"valueEnter()\" type=\"tel\" id=\"mobile\"\n                name=\"mobile\" class=\"form-control\" required minlength=\"10\" maxlength=\"10\" [(ngModel)]=\"login.mobile\"\n                #mobile=\"ngModel\" />\n              <mat-error>\n                <div class=\"form-group\">\n                  <div *ngIf=\"mobile.invalid && (mobile.dirty || mobile.touched)\" class=\"alert alert-danger\">\n                    <div class=\"LoginError\" *ngIf=\"mobile.errors.required\">\n                      Wrong Phone Number\n                    </div>\n                     <div class=\"LoginError\" *ngIf=\"mobile.errors.minlength\">\n                      Phone Number must be at least 10 digits long.\n                    </div>\n                    <!--<div *ngIf=\"mobile.errors.maxlength\">\n                      Mobile Number must be 10 digits long.\n                    </div> -->\n  \n                  </div>\n                </div>\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field class=\"FullWidth marginTop10\">\n                <input matInput placeholder=\"Password\" (input)=\"valueEnter()\" [type]=\"hide ? 'password' : 'text'\" id=\"password\"\n                  name=\"password\" class=\"form-control\" required  [(ngModel)]=\"login.password\"\n                  #password=\"ngModel\" />\n                  <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                <mat-error>\n                  <div class=\"form-group\">\n                    <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n                      <div class=\"LoginError\" *ngIf=\"password.errors.required\">\n                        Please Enter Password\n                      </div>\n                      \n                     \n    \n                    </div>\n                  </div>\n                </mat-error>\n              </mat-form-field>\n              <div *ngIf=\"is_error\" class=\"LoginError\">\n                  {{message}}\n                </div>\n\n\n              <div class=\"LoginClass\">\n                  <button mat-raised-button [disabled]=\"mobile.invalid || password.invalid\" class=\"LogoutBtn\" (click)=\"Login(login)\">Proceed</button>\n\n                  <!-- <p class=\"ForgotPassword\">Forgot Password</p> -->\n                  <!-- <p class=\"Sales\">{{currentYear}} CEPL</p> -->\n\n              </div>\n\n\n        </form>\n\n  </div>\n\n</div>");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".MainLoginClass {\n  width: 100%;\n  padding: 40px 23px 0 23px;\n  display: block;\n  text-align: center;\n}\n\n.TitleClass {\n  height: 28px;\n  color: #3880ff;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1.5rem;\n  font-weight: bold;\n  line-height: 28px;\n  text-align: center;\n}\n\n.LoginFormClass {\n  width: 100%;\n  margin: 30px 0 0 0;\n}\n\n.FullWidth {\n  width: 100%;\n  margin-top: 30px;\n}\n\n.LoginError {\n  color: #FF6464;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 0.4px;\n  line-height: 16px;\n  text-align: right;\n}\n\n.LogoutBtn {\n  box-sizing: border-box;\n  height: 48px;\n  width: 131px;\n  border-radius: 25px;\n  background-color: #3880ff;\n  color: #FFFFFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 0.8px;\n  line-height: 19px;\n  margin-bottom: 25px;\n  box-shadow: 0 4px 8px 2px #FFF3E0, 0 2px 2px 0 #FFF3E0;\n}\n\n.LoginClass {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  margin-top: 40px;\n}\n\n.ForgotPassword {\n  height: 16px;\n  color: #000000;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n  font-weight: 300;\n  letter-spacing: 0.4px;\n  line-height: 16px;\n  margin: 0 0 10px 0;\n}\n\n.Sales {\n  opacity: 0.66;\n  color: #BBBBBB;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n  letter-spacing: 0.18px;\n  line-height: 14px;\n}\n\n.disabled {\n  background-color: rgba(194, 194, 194, 0.87);\n  box-shadow: 0 4px 8px 2px #FFF3E0, 0 2px 2px 0 #FFF3E0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FycmF5cG9pbnRlci9EZXNrdG9wL3BldHJvbHB1bXBhcHAvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0lKOztBREZBO0VBQ0ksY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDS0o7O0FESEE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNEQUFBO0FDS0o7O0FESEE7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDTUo7O0FESkE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDT0o7O0FETEE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNRSjs7QUROQTtFQUNJLDJDQUFBO0VBQ0Esc0RBQUE7QUNTSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5NYWluTG9naW5DbGFzc3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA0MHB4IDIzcHggMCAyM3B4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5UaXRsZUNsYXNze1xuICAgIGhlaWdodDogMjhweDtcdFxuICAgIGNvbG9yOiAjMzg4MGZmO1x0XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XHRcbiAgICBmb250LXNpemU6IDEuNXJlbTtcdFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1x0XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHRcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uTG9naW5Gb3JtQ2xhc3N7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAzMHB4IDAgMCAwO1xufVxuLkZ1bGxXaWR0aHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uTG9naW5FcnJvcntcbiAgICBjb2xvcjogI0ZGNjQ2NDtcdFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyxzYW5zLXNlcmlmO1x0XG4gICAgZm9udC1zaXplOiAxMnB4O1x0XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcdFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcdFxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1x0XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uTG9nb3V0QnRue1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHRcbiAgICBoZWlnaHQ6IDQ4cHg7XHRcbiAgICB3aWR0aDogMTMxcHg7XHRcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjRkZGRkZGO1x0XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcdFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODgwZmY7XG4gICAgY29sb3I6ICNGRkZGRkY7XHRcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsc2Fucy1zZXJpZjtcdFxuICAgIGZvbnQtc2l6ZTogMTVweDtcdFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHRcbiAgICBsZXR0ZXItc3BhY2luZzogMC44cHg7XHRcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAycHggI0ZGRjNFMCwgMCAycHggMnB4IDAgI0ZGRjNFMDtcbn1cbi5Mb2dpbkNsYXNze1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5Gb3Jnb3RQYXNzd29yZCB7XHRcbiAgICBoZWlnaHQ6IDE2cHg7XHRcbiAgICBjb2xvcjogIzAwMDAwMDtcdFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyxzYW5zLXNlcmlmO1x0XG4gICAgZm9udC1zaXplOiAxMnB4O1x0XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcdFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcdFxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIG1hcmdpbjogMCAwIDEwcHggMDtcbn1cbi5TYWxlc3tcbiAgICBvcGFjaXR5OiAwLjY2O1x0XG4gICAgY29sb3I6ICNCQkJCQkI7XHRcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsc2Fucy1zZXJpZjtcdFxuICAgIGZvbnQtc2l6ZTogMTJweDtcdFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjE4cHg7XHRcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbn1cbi5kaXNhYmxlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NCwxOTQsMTk0LDAuODcpO1x0XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDJweCAjRkZGM0UwLCAwIDJweCAycHggMCAjRkZGM0UwO1xufSIsIi5NYWluTG9naW5DbGFzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA0MHB4IDIzcHggMCAyM3B4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uVGl0bGVDbGFzcyB7XG4gIGhlaWdodDogMjhweDtcbiAgY29sb3I6ICMzODgwZmY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5Mb2dpbkZvcm1DbGFzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDMwcHggMCAwIDA7XG59XG5cbi5GdWxsV2lkdGgge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLkxvZ2luRXJyb3Ige1xuICBjb2xvcjogI0ZGNjQ2NDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5Mb2dvdXRCdG4ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMzFweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4ODBmZjtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjhweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAycHggI0ZGRjNFMCwgMCAycHggMnB4IDAgI0ZGRjNFMDtcbn1cblxuLkxvZ2luQ2xhc3Mge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5Gb3Jnb3RQYXNzd29yZCB7XG4gIGhlaWdodDogMTZweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbn1cblxuLlNhbGVzIHtcbiAgb3BhY2l0eTogMC42NjtcbiAgY29sb3I6ICNCQkJCQkI7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NCwgMTk0LCAxOTQsIDAuODcpO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMnB4ICNGRkYzRTAsIDAgMnB4IDJweCAwICNGRkYzRTA7XG59Il19 */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_networkproviderservices_networkproviderservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/networkproviderservices/networkproviderservice.service */ "./src/app/services/networkproviderservices/networkproviderservice.service.ts");
/* harmony import */ var _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/loader/loader.service */ "./src/app/services/loader/loader.service.ts");
/* harmony import */ var _services_api_call_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api-call.service */ "./src/app/services/api-call.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");








let LoginPage = class LoginPage {
    constructor(router, storage, network, preloader, apiCall) {
        this.router = router;
        this.storage = storage;
        this.network = network;
        this.preloader = preloader;
        this.apiCall = apiCall;
        this.login = {};
        this.hide = true;
        this.user_data = {};
        this.is_show = 0;
    }
    ngOnInit() {
        this.currentYear = new Date().getFullYear();
        this.storage.get('cepl_user_data').then((val) => {
            console.log("login", val);
            val = JSON.parse(val);
            if (val != null) {
                this.preloader.showBlockingLoaderAuth();
                if (val['mobile'] != null || val['mobile'] != undefined) {
                    if (val['password'] != null || val['password'] != undefined) {
                        this.preloader.hideBlockingLoaderAuth();
                        let obj = {};
                        obj['mobile'] = val['mobile'];
                        obj['password'] = val['password'];
                        this.Login(obj);
                    }
                    else {
                        this.preloader.hideBlockingLoaderAuth();
                        this.login = {};
                        this.login['mobile'] = null;
                        this.login['password'] = null;
                        this.is_show = 1;
                    }
                }
                else {
                    this.preloader.hideBlockingLoaderAuth();
                    this.login = {};
                    this.login['mobile'] = null;
                    this.login['password'] = null;
                    this.is_show = 1;
                }
            }
            else {
                this.preloader.hideBlockingLoaderAuth();
                this.login = {};
                this.login['mobile'] = null;
                this.login['password'] = null;
                this.is_show = 1;
            }
        });
    }
    ionViewWillEnter() {
        this.login = {};
    }
    Login(data) {
        this.preloader.showBlockingLoaderAuth();
        let operationsUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].base_url + _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].version + "users/login";
        this.apiCall.postWAu(operationsUrl, data).subscribe(MyResponse => {
            console.log(MyResponse);
            MyResponse['result']['password'] = data['password'];
            this.storage.set("cepl_user_data", JSON.stringify(MyResponse['result'])).then(() => {
                this.preloader.hideBlockingLoaderAuth();
                this.router.navigate(['sites']);
            });
        }, error => {
            // this.spinner.hide();
            this.is_show = 1;
            this.preloader.hideBlockingLoaderAuth();
            this.is_error = 1;
            // this.presentToast(error.error.message);
            this.message = error.error.message;
            console.log(error);
        });
    }
    valueEnter() {
        this.is_error = 0;
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _services_networkproviderservices_networkproviderservice_service__WEBPACK_IMPORTED_MODULE_4__["NetworkproviderserviceService"] },
    { type: _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
    { type: _services_api_call_service__WEBPACK_IMPORTED_MODULE_6__["ApiCallService"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        _services_networkproviderservices_networkproviderservice_service__WEBPACK_IMPORTED_MODULE_4__["NetworkproviderserviceService"],
        _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
        _services_api_call_service__WEBPACK_IMPORTED_MODULE_6__["ApiCallService"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map