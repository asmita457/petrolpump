function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["work-details-work-details-module"], {
  /***/
  "./src/app/work-details/work-details-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/work-details/work-details-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: WorkDetailsPageRoutingModule */

  /***/
  function srcAppWorkDetailsWorkDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkDetailsPageRoutingModule", function () {
      return WorkDetailsPageRoutingModule;
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


    var _work_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./work-details.page */
    "./src/app/work-details/work-details.page.ts");

    var routes = [{
      path: '',
      component: _work_details_page__WEBPACK_IMPORTED_MODULE_3__["WorkDetailsPage"]
    }];

    var WorkDetailsPageRoutingModule = function WorkDetailsPageRoutingModule() {
      _classCallCheck(this, WorkDetailsPageRoutingModule);
    };

    WorkDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WorkDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/work-details/work-details.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/work-details/work-details.module.ts ***!
    \*****************************************************/

  /*! exports provided: WorkDetailsPageModule */

  /***/
  function srcAppWorkDetailsWorkDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkDetailsPageModule", function () {
      return WorkDetailsPageModule;
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


    var _work_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./work-details-routing.module */
    "./src/app/work-details/work-details-routing.module.ts");
    /* harmony import */


    var _work_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./work-details.page */
    "./src/app/work-details/work-details.page.ts");

    var WorkDetailsPageModule = function WorkDetailsPageModule() {
      _classCallCheck(this, WorkDetailsPageModule);
    };

    WorkDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _work_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["WorkDetailsPageRoutingModule"]],
      declarations: [_work_details_page__WEBPACK_IMPORTED_MODULE_6__["WorkDetailsPage"]]
    })], WorkDetailsPageModule);
    /***/
  }
}]);
//# sourceMappingURL=work-details-work-details-module-es5.js.map