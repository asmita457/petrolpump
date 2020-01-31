function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["terms-conditions-terms-conditions-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/terms-conditions/terms-conditions.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/terms-conditions/terms-conditions.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTermsConditionsTermsConditionsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>terms-conditions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/terms-conditions/terms-conditions-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/terms-conditions/terms-conditions-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: TermsConditionsPageRoutingModule */

  /***/
  function srcAppTermsConditionsTermsConditionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermsConditionsPageRoutingModule", function () {
      return TermsConditionsPageRoutingModule;
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


    var _terms_conditions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./terms-conditions.page */
    "./src/app/terms-conditions/terms-conditions.page.ts");

    var routes = [{
      path: '',
      component: _terms_conditions_page__WEBPACK_IMPORTED_MODULE_3__["TermsConditionsPage"]
    }];

    var TermsConditionsPageRoutingModule = function TermsConditionsPageRoutingModule() {
      _classCallCheck(this, TermsConditionsPageRoutingModule);
    };

    TermsConditionsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TermsConditionsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/terms-conditions/terms-conditions.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/terms-conditions/terms-conditions.module.ts ***!
    \*************************************************************/

  /*! exports provided: TermsConditionsPageModule */

  /***/
  function srcAppTermsConditionsTermsConditionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermsConditionsPageModule", function () {
      return TermsConditionsPageModule;
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


    var _terms_conditions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./terms-conditions-routing.module */
    "./src/app/terms-conditions/terms-conditions-routing.module.ts");
    /* harmony import */


    var _terms_conditions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./terms-conditions.page */
    "./src/app/terms-conditions/terms-conditions.page.ts");

    var TermsConditionsPageModule = function TermsConditionsPageModule() {
      _classCallCheck(this, TermsConditionsPageModule);
    };

    TermsConditionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _terms_conditions_routing_module__WEBPACK_IMPORTED_MODULE_5__["TermsConditionsPageRoutingModule"]],
      declarations: [_terms_conditions_page__WEBPACK_IMPORTED_MODULE_6__["TermsConditionsPage"]]
    })], TermsConditionsPageModule);
    /***/
  },

  /***/
  "./src/app/terms-conditions/terms-conditions.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/terms-conditions/terms-conditions.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTermsConditionsTermsConditionsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlcm1zLWNvbmRpdGlvbnMvdGVybXMtY29uZGl0aW9ucy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/terms-conditions/terms-conditions.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/terms-conditions/terms-conditions.page.ts ***!
    \***********************************************************/

  /*! exports provided: TermsConditionsPage */

  /***/
  function srcAppTermsConditionsTermsConditionsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermsConditionsPage", function () {
      return TermsConditionsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TermsConditionsPage =
    /*#__PURE__*/
    function () {
      function TermsConditionsPage() {
        _classCallCheck(this, TermsConditionsPage);
      }

      _createClass(TermsConditionsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TermsConditionsPage;
    }();

    TermsConditionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-terms-conditions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./terms-conditions.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/terms-conditions/terms-conditions.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./terms-conditions.page.scss */
      "./src/app/terms-conditions/terms-conditions.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TermsConditionsPage);
    /***/
  }
}]);
//# sourceMappingURL=terms-conditions-terms-conditions-module-es5.js.map