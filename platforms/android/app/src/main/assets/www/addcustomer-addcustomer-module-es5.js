function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addcustomer-addcustomer-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/addcustomer/addcustomer.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addcustomer/addcustomer.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddcustomerAddcustomerPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-row>\n      <ion-col size=\"2\">\n        <button ion-button class=\"BackButton\" (click)=\"goBackword()\" style=\"margin:10px\"></button>\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-label  class=\"TitleHeader TitleText\">\n          {{savetext}}\n        </ion-label>\n      </ion-col>\n\n    </ion-row>\n    <!-- <ion-title class=\"Padding0\" style=\"padding: 0;\">\n      <div class=\"TitleHeader\">\n        <div class=\"TitleText\">\n          &nbsp;&nbsp;&nbsp;\n          <div style=\"width: 80%; overflow: hidden; text-overflow: ellipsis;\">\n            {{savetext}}\n          </div>\n        </div>\n      \n      </div>\n    </ion-title> -->\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-input class=\"inputCss\" style=\"margin-top:40px !important\" placeholder=\"Name\"></ion-input>\n  <ion-input class=\"inputCss\" placeholder=\"Mobile\"></ion-input>\n  <ion-input  class=\"inputCss\" placeholder=\"Amount\"></ion-input>\n  <ion-input  class=\"inputCss\" placeholder=\"Address\"></ion-input>\n\n\n  <ion-button (click)=\"addCustomerData()\" align=\"center\" style=\"margin-top:30px; margin-left:28%\">{{savetext}}</ion-button>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/addcustomer/addcustomer-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/addcustomer/addcustomer-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: AddcustomerPageRoutingModule */

  /***/
  function srcAppAddcustomerAddcustomerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddcustomerPageRoutingModule", function () {
      return AddcustomerPageRoutingModule;
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


    var _addcustomer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./addcustomer.page */
    "./src/app/addcustomer/addcustomer.page.ts");

    var routes = [{
      path: '',
      component: _addcustomer_page__WEBPACK_IMPORTED_MODULE_3__["AddcustomerPage"]
    }];

    var AddcustomerPageRoutingModule = function AddcustomerPageRoutingModule() {
      _classCallCheck(this, AddcustomerPageRoutingModule);
    };

    AddcustomerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddcustomerPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/addcustomer/addcustomer.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/addcustomer/addcustomer.module.ts ***!
    \***************************************************/

  /*! exports provided: AddcustomerPageModule */

  /***/
  function srcAppAddcustomerAddcustomerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddcustomerPageModule", function () {
      return AddcustomerPageModule;
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


    var _addcustomer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./addcustomer-routing.module */
    "./src/app/addcustomer/addcustomer-routing.module.ts");
    /* harmony import */


    var _addcustomer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./addcustomer.page */
    "./src/app/addcustomer/addcustomer.page.ts");

    var AddcustomerPageModule = function AddcustomerPageModule() {
      _classCallCheck(this, AddcustomerPageModule);
    };

    AddcustomerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _addcustomer_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddcustomerPageRoutingModule"]],
      declarations: [_addcustomer_page__WEBPACK_IMPORTED_MODULE_6__["AddcustomerPage"]]
    })], AddcustomerPageModule);
    /***/
  },

  /***/
  "./src/app/addcustomer/addcustomer.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/addcustomer/addcustomer.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddcustomerAddcustomerPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".FullWidth {\n  width: 100%;\n  margin-top: 30px;\n}\n\n.inputCss {\n  border: 1px solid #000000;\n  color: black;\n  width: 80%;\n  margin-left: 10%;\n  margin-right: 10%;\n  border-radius: 15px;\n  margin-top: 20px;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 1.3rem;\n  width: 81%;\n  color: #ffffff;\n  font-weight: 700;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.BackButton {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FycmF5cG9pbnRlci9EZXNrdG9wL3BldHJvbHB1bXBhcHAvc3JjL2FwcC9hZGRjdXN0b21lci9hZGRjdXN0b21lci5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkZGN1c3RvbWVyL2FkZGN1c3RvbWVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQyxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0QsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBRUEsWUFBQTtFQUNBLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2FkZGN1c3RvbWVyL2FkZGN1c3RvbWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5GdWxsV2lkdGh7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uaW5wdXRDc3N7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbiAgICAgY29sb3I6IGJsYWNrOyBcbiAgICAgd2lkdGg6IDgwJTsgXG4gICAgIG1hcmdpbi1sZWZ0OiAxMCU7IFxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xufVxuXG4uVGl0bGVIZWFkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gcGFkZGluZzogMCAxMHB4IDAgMTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuLlRpdGxlVGV4dHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgd2lkdGg6IDgxJTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5CYWNrQnV0dG9ue1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2JhY2tfd2hpdGUucG5nJykgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59IiwiLkZ1bGxXaWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uaW5wdXRDc3Mge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uVGl0bGVIZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLlRpdGxlVGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgd2lkdGg6IDgxJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5CYWNrQnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2JhY2tfd2hpdGUucG5nXCIpIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/addcustomer/addcustomer.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/addcustomer/addcustomer.page.ts ***!
    \*************************************************/

  /*! exports provided: AddcustomerPage */

  /***/
  function srcAppAddcustomerAddcustomerPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddcustomerPage", function () {
      return AddcustomerPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _updatebalance_updatebalance_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../updatebalance/updatebalance.page */
    "./src/app/updatebalance/updatebalance.page.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var AddcustomerPage =
    /*#__PURE__*/
    function () {
      function AddcustomerPage(route, router, toast, dialog) {
        _classCallCheck(this, AddcustomerPage);

        this.route = route;
        this.router = router;
        this.toast = toast;
        this.dialog = dialog;
      }

      _createClass(AddcustomerPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.recordstatus = this.route.snapshot.params['checkstatus'];

          if (this.recordstatus == "add") {
            this.savetext = "Add Customer";
          } else if (this.recordstatus == "update") {
            this.savetext = "Update Customer";
          }
        }
      }, {
        key: "addCustomerData",
        value: function addCustomerData() {
          var _this = this;

          if (this.recordstatus == "add") {
            this.presentToast("Record added successfully");
            var dialogRef = this.dialog.open(_updatebalance_updatebalance_page__WEBPACK_IMPORTED_MODULE_4__["UpdatebalancePage"], {
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
                        dialogRef.close();
                        this.router.navigate(['/sites']);

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          } else if (this.recordstatus == "update") {
            this.presentToast("Record updated successfully");
            this.router.navigate(['/sites']);
          }
        }
      }, {
        key: "presentToast",
        value: function presentToast(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toast.create({
                      message: message,
                      duration: 4000
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "goBackword",
        value: function goBackword() {
          this.router.navigate(['sites']);
        }
      }]);

      return AddcustomerPage;
    }();

    AddcustomerPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }];
    };

    AddcustomerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addcustomer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./addcustomer.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/addcustomer/addcustomer.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./addcustomer.page.scss */
      "./src/app/addcustomer/addcustomer.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])], AddcustomerPage);
    /***/
  }
}]);
//# sourceMappingURL=addcustomer-addcustomer-module-es5.js.map