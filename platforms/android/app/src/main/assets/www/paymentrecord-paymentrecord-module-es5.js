function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paymentrecord-paymentrecord-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/paymentrecord/paymentrecord.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paymentrecord/paymentrecord.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaymentrecordPaymentrecordPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-row>\n      <ion-col size=\"2\">\n        <button ion-button class=\"BackButton\" (click)=\"goBackword()\" style=\"margin:5px\"></button>\n      </ion-col>\n      <ion-col size=\"10\"  class=\"TitleHeader TitleText\">\n        <ion-label>Payment Details</ion-label>\n      </ion-col>\n    </ion-row>\n   \n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <table class=\"tableback\" align=\"center\">\n    <tr class=\"tablebackground\">\n      <th class=\"tablebackground\">Date</th>\n      <th class=\"tablebackground\">Credited</th>\n      <th class=\"tablebackground\">Debited</th>\n      \n    </tr>\n    <tr *ngFor=\"let lg of getBalanceDetail\">\n      <td class=\"tablebackground\" align=\"center\">{{lg.date}}</td>\n      <td tooltip=\"lg.credited\" class=\"tablebackground\" align=\"center\">{{lg.credited}}</td>\n      <td class=\"tablebackground\" align=\"center\">\n          <span  style=\"color: black;\" >{{lg.debited}}</span> \n      </td>\n     \n    </tr>\n    </table>\n  <button mat-raised-button class=\"FixedButton\" (click)=\"updateBalance()\"> <img src=\"../../assets/AddRestro.png\"\n    width=\"30\" height=\"30\"> </button>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/paymentrecord/paymentrecord-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/paymentrecord/paymentrecord-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: PaymentrecordPageRoutingModule */

  /***/
  function srcAppPaymentrecordPaymentrecordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentrecordPageRoutingModule", function () {
      return PaymentrecordPageRoutingModule;
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


    var _paymentrecord_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./paymentrecord.page */
    "./src/app/paymentrecord/paymentrecord.page.ts");

    var routes = [{
      path: '',
      component: _paymentrecord_page__WEBPACK_IMPORTED_MODULE_3__["PaymentrecordPage"]
    }];

    var PaymentrecordPageRoutingModule = function PaymentrecordPageRoutingModule() {
      _classCallCheck(this, PaymentrecordPageRoutingModule);
    };

    PaymentrecordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PaymentrecordPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/paymentrecord/paymentrecord.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/paymentrecord/paymentrecord.module.ts ***!
    \*******************************************************/

  /*! exports provided: PaymentrecordPageModule */

  /***/
  function srcAppPaymentrecordPaymentrecordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentrecordPageModule", function () {
      return PaymentrecordPageModule;
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


    var _paymentrecord_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./paymentrecord-routing.module */
    "./src/app/paymentrecord/paymentrecord-routing.module.ts");
    /* harmony import */


    var _paymentrecord_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./paymentrecord.page */
    "./src/app/paymentrecord/paymentrecord.page.ts");

    var PaymentrecordPageModule = function PaymentrecordPageModule() {
      _classCallCheck(this, PaymentrecordPageModule);
    };

    PaymentrecordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _paymentrecord_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentrecordPageRoutingModule"]],
      declarations: [_paymentrecord_page__WEBPACK_IMPORTED_MODULE_6__["PaymentrecordPage"]]
    })], PaymentrecordPageModule);
    /***/
  },

  /***/
  "./src/app/paymentrecord/paymentrecord.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/paymentrecord/paymentrecord.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaymentrecordPaymentrecordPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".BackButton {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.FixedButton {\n  width: 65px;\n  height: 65px;\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  border-radius: 50%;\n  color: white;\n  z-index: 10;\n  background-color: #d2691e;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 1.3rem;\n  width: 81%;\n  color: #ffffff;\n  font-weight: 700;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.new-background-color {\n  --background: #d2691e;\n}\n\n.tablebackground {\n  margin-top: 20%;\n  border: 1px solid #000000;\n  padding: 10px;\n  width: 90%;\n}\n\n.tableback {\n  margin-top: 5%;\n  border: 1px solid #000000;\n  padding: 10px;\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FycmF5cG9pbnRlci9EZXNrdG9wL3BldHJvbHB1bXBhcHAvc3JjL2FwcC9wYXltZW50cmVjb3JkL3BheW1lbnRyZWNvcmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYXltZW50cmVjb3JkL3BheW1lbnRyZWNvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0NBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNELGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0NIOztBREVBO0VBQ0ksV0FBQTtFQUVBLFlBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksMkJBQUE7RUFBQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FKOztBRElBO0VBQ0kscUJBQUE7QUNESjs7QURLQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvcGF5bWVudHJlY29yZC9wYXltZW50cmVjb3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5CYWNrQnV0dG9ue1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2JhY2tfd2hpdGUucG5nJykgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5GaXhlZEJ1dHRvbntcbiAgICB3aWR0aDo2NXB4O1xuICAgIGhlaWdodDogNjVweDtcbiAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgIGJvdHRvbTogMjBweDtcbiAgIHJpZ2h0OiAyMHB4O1xuICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICBjb2xvcjp3aGl0ZTtcbiAgIHotaW5kZXg6IDEwO1xuICAgYmFja2dyb3VuZC1jb2xvcjogI2QyNjkxZTtcbn1cblxuLlRpdGxlSGVhZGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cbi5UaXRsZVRleHR7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIHdpZHRoOiA4MSU7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbi5uZXctYmFja2dyb3VuZC1jb2xvcntcbiAgICAtLWJhY2tncm91bmQ6ICNkMjY5MWU7XG59XG5cblxuLnRhYmxlYmFja2dyb3VuZHtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDsgXG4gICAgcGFkZGluZzogMTBweDsgXG4gICAgd2lkdGg6IDkwJTtcbn1cblxuLnRhYmxlYmFja3tcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwOyBcbiAgICBwYWRkaW5nOiAxMHB4OyBcbiAgICB3aWR0aDogOTAlO1xufVxuIiwiLkJhY2tCdXR0b24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmdcIikgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLkZpeGVkQnV0dG9uIHtcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogNjVweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMTA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMjY5MWU7XG59XG5cbi5UaXRsZUhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uVGl0bGVUZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB3aWR0aDogODElO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZDI2OTFlO1xufVxuXG4udGFibGViYWNrZ3JvdW5kIHtcbiAgbWFyZ2luLXRvcDogMjAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogOTAlO1xufVxuXG4udGFibGViYWNrIHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiA5MCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/paymentrecord/paymentrecord.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/paymentrecord/paymentrecord.page.ts ***!
    \*****************************************************/

  /*! exports provided: PaymentrecordPage */

  /***/
  function srcAppPaymentrecordPaymentrecordPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentrecordPage", function () {
      return PaymentrecordPage;
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


    var _updatebalance_updatebalance_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../updatebalance/updatebalance.page */
    "./src/app/updatebalance/updatebalance.page.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var PaymentrecordPage =
    /*#__PURE__*/
    function () {
      function PaymentrecordPage(dialog, router) {
        _classCallCheck(this, PaymentrecordPage);

        this.dialog = dialog;
        this.router = router;
        this.getBalanceDetail = [{
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }, {
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }, {
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }, {
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }, {
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }, {
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }, {
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }, {
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }, {
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }, {
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }, {
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }, {
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }, {
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }, {
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }, {
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }, {
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }, {
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }, {
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }, {
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }, {
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }, {
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }, {
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }, {
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }, {
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }, {
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }, {
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }, {
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }, {
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }, {
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }, {
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }, {
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }, {
          "date": "01/02/2020",
          "credited": "2000",
          "debited": "2500"
        }];
      }

      _createClass(PaymentrecordPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "updateBalance",
        value: function updateBalance() {
          var _this = this;

          var dialogRef = this.dialog.open(_updatebalance_updatebalance_page__WEBPACK_IMPORTED_MODULE_2__["UpdatebalancePage"], {
            width: '450px'
          });
          dialogRef.afterClosed().subscribe(function (result) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      dialogRef.close(); // this.router.navigate(['/paymentrecord']);

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          });
        }
      }, {
        key: "goBackword",
        value: function goBackword() {
          this.router.navigate(['sites']);
        }
      }]);

      return PaymentrecordPage;
    }();

    PaymentrecordPage.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    PaymentrecordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-paymentrecord',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./paymentrecord.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/paymentrecord/paymentrecord.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./paymentrecord.page.scss */
      "./src/app/paymentrecord/paymentrecord.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], PaymentrecordPage);
    /***/
  }
}]);
//# sourceMappingURL=paymentrecord-paymentrecord-module-es5.js.map