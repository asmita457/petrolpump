function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card style=\"margin-left:10%; margin-right: 10%; width: 80%; margin-top:45%\">\n\n<div *ngIf=\"is_show == 1\" class=\"MainLoginClass\" style=\"background: white; margin-top: 15px\">\n  <img src=\"../../assets/logoapp.png\" style=\"height: 100px; width: 100px; border-radius: 50%; margin-top: -15px\"/>\n\n\n  \n  <!-- <h3 class=\"TitleClass\">Khamkar Petrolium</h3> -->\n  <div class=\"LoginFormClass\">\n\n      <form name=\"entryform\" class=\"FullWidth\" #f=\"ngForm\" novalidate>\n\n\n          <mat-form-field class=\"FullWidth marginTop10\">\n              <input matInput placeholder=\"Phone Number\" (input)=\"valueEnter()\" type=\"tel\" id=\"mobile\"\n                name=\"mobile\" class=\"form-control\" required minlength=\"10\" maxlength=\"10\" [(ngModel)]=\"login.mobile\"\n                #mobile=\"ngModel\" />\n              <mat-error>\n                <div class=\"form-group\">\n                  <div *ngIf=\"mobile.invalid && (mobile.dirty || mobile.touched)\" class=\"alert alert-danger\">\n                    <div class=\"LoginError\" *ngIf=\"mobile.errors.required\">\n                      Wrong Phone Number\n                    </div>\n                     <div class=\"LoginError\" *ngIf=\"mobile.errors.minlength\">\n                      Phone Number must be at least 10 digits long.\n                    </div>\n                    <!--<div *ngIf=\"mobile.errors.maxlength\">\n                      Mobile Number must be 10 digits long.\n                    </div> -->\n  \n                  </div>\n                </div>\n              </mat-error>\n            </mat-form-field>\n\n            <mat-form-field class=\"FullWidth marginTop10\">\n                <input matInput placeholder=\"Password\" (input)=\"valueEnter()\" [type]=\"hide ? 'password' : 'text'\" id=\"password\"\n                  name=\"password\" class=\"form-control\" required  [(ngModel)]=\"login.password\"\n                  #password=\"ngModel\" />\n                  <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                <mat-error>\n                  <div class=\"form-group\">\n                    <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n                      <div class=\"LoginError\" *ngIf=\"password.errors.required\">\n                        Please Enter Password\n                      </div>\n                      \n                     \n    \n                    </div>\n                  </div>\n                </mat-error>\n              </mat-form-field>\n              <div *ngIf=\"is_error\" class=\"LoginError\">\n                  {{message}}\n                </div>\n\n\n              <div class=\"LoginClass\">\n                  <button mat-raised-button [disabled]=\"mobile.invalid || password.invalid\" class=\"LogoutBtn\" (click)=\"Login(login)\">Proceed</button>\n\n              </div>\n\n\n        </form>\n\n  </div>\n</div>\n</mat-card>\n";
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".MainLoginClass {\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.TitleClass {\n  height: 28px;\n  color: #3255f3;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1.5rem;\n  font-weight: bold;\n  line-height: 28px;\n  text-align: center;\n}\n\n.LoginFormClass {\n  width: 100%;\n  margin: 30px 0 0 0;\n}\n\n.FullWidth {\n  width: 98%;\n  margin-left: 1%;\n  margin-right: 1%;\n}\n\n.LoginError {\n  color: #FF6464;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 0.4px;\n  line-height: 16px;\n  text-align: right;\n}\n\n.LogoutBtn {\n  box-sizing: border-box;\n  height: 48px;\n  width: 94%;\n  margin-left: 3%;\n  margin-right: 3%;\n  border-radius: 25px;\n  background-color: #3255f3;\n  color: #FFFFFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 0.8px;\n  line-height: 19px;\n  margin-bottom: 25px;\n  box-shadow: 0 4px 8px 2px #FFF3E0, 0 2px 2px 0 #FFF3E0;\n}\n\n.LoginClass {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  margin-top: 30px;\n}\n\n.ForgotPassword {\n  height: 16px;\n  color: #000000;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n  font-weight: 300;\n  letter-spacing: 0.4px;\n  line-height: 16px;\n  margin: 0 0 10px 0;\n}\n\n.Sales {\n  opacity: 0.66;\n  color: #BBBBBB;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n  letter-spacing: 0.18px;\n  line-height: 14px;\n}\n\n.disabled {\n  background-color: rgba(194, 194, 194, 0.87);\n  box-shadow: 0 4px 8px 2px #FFF3E0, 0 2px 2px 0 #FFF3E0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FycmF5cG9pbnRlci9EZXNrdG9wL3BldHJvbHB1bXBhcHAvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFFQSxjQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDR0o7O0FEQUE7RUFDSSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNHSjs7QUREQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0RBQUE7QUNJSjs7QURGQTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNLSjs7QURIQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURKQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ09KOztBRExBO0VBQ0ksMkNBQUE7RUFDQSxzREFBQTtBQ1FKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLk1haW5Mb2dpbkNsYXNze1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIHBhZGRpbmc6IDQwcHggMjNweCAwIDIzcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLlRpdGxlQ2xhc3N7XG4gICAgaGVpZ2h0OiAyOHB4O1x0XG4gICAgY29sb3I6ICMzMjU1ZjM7XHRcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsc2Fucy1zZXJpZjtcdFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1x0XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHRcbiAgICBsaW5lLWhlaWdodDogMjhweDtcdFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5Mb2dpbkZvcm1DbGFzc3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDMwcHggMCAwIDA7XG59XG4uRnVsbFdpZHRoe1xuICAgIHdpZHRoOjk4JTtcbiAgICBtYXJnaW4tbGVmdDogMSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgIFxufVxuLkxvZ2luRXJyb3J7XG4gICAgY29sb3I6ICNGRjY0NjQ7XHRcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsc2Fucy1zZXJpZjtcdFxuICAgIGZvbnQtc2l6ZTogMTJweDtcdFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHRcbiAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XHRcbiAgICBsaW5lLWhlaWdodDogMTZweDtcdFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLkxvZ291dEJ0bntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1x0XG4gICAgaGVpZ2h0OiA0OHB4O1x0XG4gICAgd2lkdGg6OTQlO1xuICAgIG1hcmdpbi1sZWZ0OiAzJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHRcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI1NWYzO1xuICAgIGNvbG9yOiAjRkZGRkZGO1x0XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XHRcbiAgICBmb250LXNpemU6IDE1cHg7XHRcbiAgICBmb250LXdlaWdodDogNTAwO1x0XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1x0XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMnB4ICNGRkYzRTAsIDAgMnB4IDJweCAwICNGRkYzRTA7XG59XG4uTG9naW5DbGFzc3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uRm9yZ290UGFzc3dvcmQge1x0XG4gICAgaGVpZ2h0OiAxNnB4O1x0XG4gICAgY29sb3I6ICMwMDAwMDA7XHRcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsc2Fucy1zZXJpZjtcdFxuICAgIGZvbnQtc2l6ZTogMTJweDtcdFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHRcbiAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XHRcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG59XG4uU2FsZXN7XG4gICAgb3BhY2l0eTogMC42NjtcdFxuICAgIGNvbG9yOiAjQkJCQkJCO1x0XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XHRcbiAgICBmb250LXNpemU6IDEycHg7XHRcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xOHB4O1x0XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG59XG4uZGlzYWJsZWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTQsMTk0LDE5NCwwLjg3KTtcdFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAycHggI0ZGRjNFMCwgMCAycHggMnB4IDAgI0ZGRjNFMDtcbn0iLCIuTWFpbkxvZ2luQ2xhc3Mge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLlRpdGxlQ2xhc3Mge1xuICBoZWlnaHQ6IDI4cHg7XG4gIGNvbG9yOiAjMzI1NWYzO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uTG9naW5Gb3JtQ2xhc3Mge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAzMHB4IDAgMCAwO1xufVxuXG4uRnVsbFdpZHRoIHtcbiAgd2lkdGg6IDk4JTtcbiAgbWFyZ2luLWxlZnQ6IDElO1xuICBtYXJnaW4tcmlnaHQ6IDElO1xufVxuXG4uTG9naW5FcnJvciB7XG4gIGNvbG9yOiAjRkY2NDY0O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLkxvZ291dEJ0biB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDk0JTtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xuICBtYXJnaW4tcmlnaHQ6IDMlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI1NWYzO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDJweCAjRkZGM0UwLCAwIDJweCAycHggMCAjRkZGM0UwO1xufVxuXG4uTG9naW5DbGFzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLkZvcmdvdFBhc3N3b3JkIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xufVxuXG4uU2FsZXMge1xuICBvcGFjaXR5OiAwLjY2O1xuICBjb2xvcjogI0JCQkJCQjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMThweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk0LCAxOTQsIDE5NCwgMC44Nyk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAycHggI0ZGRjNFMCwgMCAycHggMnB4IDAgI0ZGRjNFMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _services_networkproviderservices_networkproviderservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/networkproviderservices/networkproviderservice.service */
    "./src/app/services/networkproviderservices/networkproviderservice.service.ts");
    /* harmony import */


    var _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/loader/loader.service */
    "./src/app/services/loader/loader.service.ts");
    /* harmony import */


    var _services_api_call_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/api-call.service */
    "./src/app/services/api-call.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var LoginPage =
    /*#__PURE__*/
    function () {
      function LoginPage(router, storage, network, preloader, apiCall) {
        _classCallCheck(this, LoginPage);

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

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.currentYear = new Date().getFullYear();
          this.storage.get('cepl_user_data').then(function (val) {
            console.log("login", val);
            val = JSON.parse(val);

            if (val != null) {
              _this.preloader.showBlockingLoaderAuth();

              if (val['mobile'] != null || val['mobile'] != undefined) {
                if (val['password'] != null || val['password'] != undefined) {
                  _this.preloader.hideBlockingLoaderAuth();

                  var obj = {};
                  obj['mobile'] = val['mobile'];
                  obj['password'] = val['password'];

                  _this.Login(obj);
                } else {
                  _this.preloader.hideBlockingLoaderAuth();

                  _this.login = {};
                  _this.login['mobile'] = null;
                  _this.login['password'] = null;
                  _this.is_show = 1;
                }
              } else {
                _this.preloader.hideBlockingLoaderAuth();

                _this.login = {};
                _this.login['mobile'] = null;
                _this.login['password'] = null;
                _this.is_show = 1;
              }
            } else {
              _this.preloader.hideBlockingLoaderAuth();

              _this.login = {};
              _this.login['mobile'] = null;
              _this.login['password'] = null;
              _this.is_show = 1;
            }
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.login = {};
        }
      }, {
        key: "Login",
        value: function Login(data) {
          var _this2 = this;

          this.preloader.showBlockingLoaderAuth();
          var operationsUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].base_url + _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].version + "users/login";
          this.apiCall.postWAu(operationsUrl, data).subscribe(function (MyResponse) {
            console.log(MyResponse);
            MyResponse['result']['password'] = data['password'];

            _this2.storage.set("cepl_user_data", JSON.stringify(MyResponse['result'])).then(function () {
              _this2.preloader.hideBlockingLoaderAuth();

              _this2.router.navigate(['sites']);
            });
          }, function (error) {
            // this.spinner.hide();
            _this2.is_show = 1;

            _this2.preloader.hideBlockingLoaderAuth();

            _this2.is_error = 1; // this.presentToast(error.error.message);

            _this2.message = error.error.message;
            console.log(error);
          });
        }
      }, {
        key: "valueEnter",
        value: function valueEnter() {
          this.is_error = 0;
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _services_networkproviderservices_networkproviderservice_service__WEBPACK_IMPORTED_MODULE_4__["NetworkproviderserviceService"]
      }, {
        type: _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]
      }, {
        type: _services_api_call_service__WEBPACK_IMPORTED_MODULE_6__["ApiCallService"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _services_networkproviderservices_networkproviderservice_service__WEBPACK_IMPORTED_MODULE_4__["NetworkproviderserviceService"], _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"], _services_api_call_service__WEBPACK_IMPORTED_MODULE_6__["ApiCallService"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map