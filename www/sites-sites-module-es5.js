function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sites-sites-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sites/sites.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sites/sites.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSitesSitesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <!-- <ion-toolbar class=\"new-background-color\"> -->\n  <ion-toolbar color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"Padding0\" style=\"padding: 0;\">\n      <div class=\"TitleHeader\">\n        <div class=\"TitleText\">\n\n          &nbsp;&nbsp;&nbsp;\n          <div style=\"width: 80%; overflow: hidden; text-overflow: ellipsis;\">\n            Customers\n          </div>\n        </div>\n\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<!-- <ion-content> -->\n<!-- <div class=\"search-filter-container\">\n\n  <div class=\"SearchOption\" style=\"width: 92%;\">\n    <div class=\"SearchDiv\">\n      <input class=\"valid\" type=\"text\" [(ngModel)]=\"search_text\" placeholder=\"Search\" name=\"name\" />\n    </div>\n  </div>\n\n\n</div> -->\n\n<ion-content>\n\n  <div align=\"center\">\n    <ion-searchbar type=\"text\" debounce=\"500\" (ionInput)=\"getItems($event)\"></ion-searchbar>\n    <ion-list *ngIf=\"isItemAvailable\">\n        <ion-item *ngFor=\"let item of items\">{{ item }}</ion-item>\n    </ion-list>\n  \n  </div>\n \n  <!-- <div align=\"center\" style=\"margin: 10px\">\n    <ion-searchbar placeholder=\"Search Contact\" style=\"border-radius: 10%;height: 60px; width: 80%\">\n    </ion-searchbar>\n  </div> -->\n  <div *ngFor=\"let daata of getCusstomers; index as i\">\n    <ion-item (click)=\"getCustomerDetailInfo(daata)\" style=\"margin-left:-20px\">\n      <div style=\"margin-left:30px\">\n        <img *ngIf=\"daata.imagepath == '' \" src=\"../../assets/acnt.png\"\n        style=\"width:30px; height: 30px;border-radius: 50% ; border: 1px solid #dfdcdc; margin-right:20px\" />\n      <img *ngIf=\"daata.imagepath != '' \" src=\"{{daata.imagepath}}\"\n        style=\"width:30px; height: 30px;border-radius: 50%;  border: 1px solid #817d7d; margin-right:20px\" />\n     \n    \n      </div>\n      {{daata.name}}\n    </ion-item>\n  </div>\n  <!-- <div style=\"margin:10%\">\n\n    <p *ngIf=\"aContact != empty || aContact != '' || aContact != null || aContact != undefined\">A</p>\n    <div *ngFor=\"let daata of aContact; index as i\">\n      <ion-item *ngIf=\"aContact != empty || aContact != '' || aContact != null || aContact != undefined\" (click)=\"getCustomerDetailInfo()\">\n        <button\n          style=\"width:35px; height: 35px; border-radius:50% ; margin-right: 20px; background-color: tomato;\">A</button>\n        {{daata}}\n      </ion-item>\n    </div>\n\n    <p *ngIf=\"bContact != empty || bContact != '' || bContact != null || bContact != undefined\">B</p>\n    <div *ngFor=\"let daata of bContact; index as i\">\n      <ion-item *ngIf=\"bContact != empty || bContact != '' || bContact != null || bContact != undefined\">\n        <button\n          style=\"width:35px; height: 35px; border-radius:50% ; margin-right: 20px; background-color: tomato;\">B</button>\n        {{daata}}\n      </ion-item>\n    </div>\n\n    <p *ngIf=\"cContact != empty || cContact != '' || cContact != null || cContact != undefined\">C</p>\n    <div *ngFor=\"let daata of cContact; index as i\">\n      <ion-item *ngIf=\"cContact != empty || cContact != '' || cContact != null || cContact != undefined\">\n        <button\n          style=\"width:35px; height: 35px; border-radius:50% ; margin-right: 20px; background-color: tomato;\">C</button>\n        {{daata}}\n      </ion-item>\n    </div>\n\n    <p *ngIf=\"dContact != empty || dContact != '' || dContact != null || dContact != undefined\">D</p>\n    <div *ngFor=\"let daata of dContact; index as i\">\n      <ion-item *ngIf=\"dContact != empty || dContact != '' || dContact != null || dContact != undefined\">\n        <button style=\"width:35px; height: 35px; border-radius:50% ; margin-right: 20px; background-color: tomato;\">D</button>\n        {{daata}}\n      </ion-item>\n    </div>\n\n    <p *ngIf=\"eContact != null || eContact != empty || eContact != undefined || eContact.length != 0\">E</p>\n    <div *ngFor=\"let daata of eContact; index as i\">\n      <ion-item *ngIf=\"eContact != null || eContact != empty || eContact != undefined || eContact.length != 0\">\n        <button style=\"width:35px; height: 35px; border-radius:50% ; margin-right: 20px; background-color: tomato;\">E</button>\n        {{daata}}\n      </ion-item>\n    </div>\n\n    <p *ngIf=\"fContact != empty || fContact != '' || fContact != null || fContact != undefined\">F</p>\n    <div *ngFor=\"let daata of fContact; index as i\">\n      <ion-item *ngIf=\"fContact != empty || fContact != '' || fContact != null || fContact != undefined\">\n        <button style=\"width:35px; height: 35px; border-radius:50% ; margin-right: 20px; background-color: tomato;\">F</button>\n        {{daata}}\n      </ion-item>\n    </div>\n\n    <p *ngIf=\"gContact != empty || gContact != '' || gContact != null || gContact != undefined\">G</p>\n    <div *ngFor=\"let daata of gContact; index as i\">\n      <ion-item *ngIf=\"gContact != empty || gContact != '' || gContact != null || gContact != undefined\">\n        <button style=\"width:35px; height: 35px; border-radius:50% ; margin-right: 20px; background-color: tomato;\">G</button>\n        {{daata}}\n      </ion-item>\n    </div>\n\n    <p *ngIf=\"hContact != empty || hContact != '' || hContact != null || hContact != undefined\">H</p>\n    <div *ngFor=\"let daata of hContact; index as i\">\n      <ion-item *ngIf=\"hContact != empty || hContact != '' || hContact != null || hContact != undefined\">\n        <button style=\"width:35px; height: 35px; border-radius:50% ; margin-right: 20px; background-color: tomato;\">H</button>\n        {{daata}}\n      </ion-item>\n    </div>\n\n    <p *ngIf=\"iContact != empty || iContact != '' || iContact != null || iContact != undefined\">I</p>\n    <div *ngFor=\"let daata of iContact; index as i\">\n      <ion-item *ngIf=\"iContact != empty || iContact != '' || iContact != null || iContact != undefined\">\n        <button style=\"width:35px; height: 35px; border-radius:50% ; margin-right: 20px; background-color: tomato;\">I</button>\n        {{daata}}\n      </ion-item>\n    </div>\n\n    <p *ngIf=\"jContact != empty || jContact != '' || jContact != null || jContact != undefined\">J</p>\n    <div *ngFor=\"let daata of jContact; index as i\">\n      <ion-item *ngIf=\"jContact != empty || jContact != '' || jContact != null || jContact != undefined\">\n        <button style=\"width:35px; height: 35px; border-radius:50% ; margin-right: 20px; background-color: tomato;\">J</button>\n        {{daata}}\n      </ion-item>\n    </div>\n\n    <p *ngIf=\"kContact != empty || kContact != '' || kContact != null || kContact != undefined\">K</p>\n    <div *ngFor=\"let daata of kContact; index as i\">\n      <ion-item *ngIf=\"kContact != empty || kContact != '' || kContact != null || kContact != undefined\">\n        <button style=\"width:35px; height: 35px; border-radius:50% ; margin-right: 20px; background-color: tomato;\">K</button>\n        {{daata}}\n      </ion-item>\n    </div>\n\n    <p *ngIf=\"lContact != empty || lContact != '' || lContact != null || lContact != undefined\">L</p>\n    <div *ngFor=\"let daata of lContact; index as i\">\n      <ion-item *ngIf=\"lContact != empty || lContact != '' || lContact != null || lContact != undefined\">\n        <button style=\"width:35px; height: 35px; border-radius:50% ; margin-right: 20px; background-color: tomato;\">L</button>\n        {{daata}}\n      </ion-item>\n    </div>\n\n    <p *ngIf=\"mContact != empty || mContact != '' || mContact != null || mContact != undefined\">M</p>\n    <div *ngFor=\"let daata of mContact; index as i\">\n      <ion-item *ngIf=\"mContact != empty || mContact != '' || mContact != null || mContact != undefined\">\n        <button style=\"width:35px; height: 35px; border-radius:50% ; margin-right: 20px; background-color: tomato;\">M</button>\n        {{daata}}\n      </ion-item>\n    </div>\n\n    <p *ngIf=\"nContact != empty || nContact != '' || nContact != null || nContact != undefined\">N</p>\n    <div *ngFor=\"let daata of nContact; index as i\">\n      <ion-item *ngIf=\"nContact != empty || nContact != '' || nContact != null || nContact != undefined\">\n        <button style=\"width:35px; height: 35px; border-radius:50% ; margin-right: 20px; background-color: tomato;\">N</button>\n        {{daata}}\n      </ion-item>\n    </div>\n\n    <p *ngIf=\"oContact != empty || oContact != '' || oContact != null || oContact != undefined\">O</p>\n    <div *ngFor=\"let daata of oContact; index as i\">\n      <ion-item *ngIf=\"oContact != empty || oContact != '' || oContact != null || oContact != undefined\">\n        <button style=\"width:35px; height: 35px; border-radius:50% ; margin-right: 20px; background-color: tomato;\">O</button>\n        {{daata}}\n      </ion-item>\n    </div>\n\n    <p *ngIf=\"pContact != empty || pContact != '' || pContact != null || pContact != undefined\">P</p>\n    <div *ngFor=\"let daata of pContact; index as i\">\n      <ion-item *ngIf=\"pContact != empty || pContact != '' || pContact != null || pContact != undefined\">\n        <button style=\"width:35px; height: 35px; border-radius:50% ; margin-right: 20px; background-color: tomato;\">P</button>\n        {{daata}}\n      </ion-item>\n    </div>\n\n    <p *ngIf=\"qContact != empty || qContact != '' || qContact != null || qContact != undefined\">Q</p>\n    <div *ngFor=\"let daata of qContact; index as i\">\n      <ion-item *ngIf=\"qContact != empty || qContact != '' || qContact != null || qContact != undefined\">\n        <button style=\"width:35px; height: 35px; border-radius:50% ; margin-right: 20px; background-color: tomato;\">Q</button>\n        {{daata}}\n      </ion-item>\n    </div>\n\n    <p *ngIf=\"rContact != empty || rContact != '' || rContact != null || rContact != undefined\">R</p>\n    <div *ngFor=\"let daata of rContact; index as i\">\n      <ion-item *ngIf=\"rContact != empty || rContact != '' || rContact != null || rContact != undefined\">\n        <button style=\"width:35px; height: 35px; border-radius:50% ; margin-right: 20px; background-color: tomato;\">R</button>\n        {{daata}}\n      </ion-item>\n    </div>\n\n    <p *ngIf=\"sContact != empty || sContact != '' || sContact != null || sContact != undefined\">S</p>\n    <div *ngFor=\"let daata of sContact; index as i\">\n      <ion-item *ngIf=\"sContact != empty || sContact != '' || sContact != null || sContact != undefined\">\n        <button style=\"width:35px; height: 35px; border-radius:50% ; margin-right: 20px; background-color: tomato;\">S</button>\n        {{daata}}\n      </ion-item>\n    </div>\n\n    <p *ngIf=\"tContact != empty || tContact != '' || tContact != null || tContact != undefined\">T</p>\n    <div *ngFor=\"let daata of tContact; index as i\">\n      <ion-item *ngIf=\"tContact != empty || tContact != '' || tContact != null || tContact != undefined\">\n        <button style=\"width:35px; height: 35px; border-radius:50% ; margin-right: 20px; background-color: tomato;\">T</button>\n        {{daata}}\n      </ion-item>\n    </div>\n\n    <p *ngIf=\"uContact != empty || uContact != '' || uContact != null || uContact != undefined\">U</p>\n    <div *ngFor=\"let daata of uContact; index as i\">\n      <ion-item *ngIf=\"uContact != empty || uContact != '' || uContact != null || uContact != undefined\">\n        <button style=\"width:35px; height: 35px; border-radius:50% ; margin-right: 20px; background-color: tomato;\">U</button>\n        {{daata}}\n      </ion-item>\n    </div>\n\n    <p *ngIf=\"vContact != empty || vContact != '' || vContact != null || vContact != undefined\">V</p>\n    <div *ngFor=\"let daata of vContact; index as i\">\n      <ion-item *ngIf=\"vContact != empty || vContact != '' || vContact != null || vContact != undefined\">\n        <button style=\"width:35px; height: 35px; border-radius:50% ; margin-right: 20px; background-color: tomato;\">V</button>\n        {{daata}}\n      </ion-item>\n    </div>\n\n    <p *ngIf=\"wContact != empty || wContact != '' || wContact != null || wContact != undefined\">W</p>\n    <div *ngFor=\"let daata of wContact; index as i\">\n      <ion-item *ngIf=\"wContact != empty || wContact != '' || wContact != null || wContact != undefined\">\n        <button style=\"width:35px; height: 35px; border-radius:50% ; margin-right: 20px; background-color: tomato;\">W</button>\n        {{daata}}\n      </ion-item>\n    </div>\n\n    <p *ngIf=\"xContact != empty || xContact != '' || xContact != null || xContact != undefined\">X</p>\n    <div *ngFor=\"let daata of xContact; index as i\">\n      <ion-item *ngIf=\"xContact != empty || xContact != '' || xContact != null || xContact != undefined\">\n        <button style=\"width:35px; height: 35px; border-radius:50% ; margin-right: 20px; background-color: tomato;\">X</button>\n        {{daata}}\n      </ion-item>\n    </div>\n\n    <p *ngIf=\"yContact != empty || yContact != '' || yContact != null || yContact != undefined\">Y</p>\n    <div *ngFor=\"let daata of yContact; index as i\">\n      <ion-item *ngIf=\"yContact != empty || yContact != '' || yContact != null || yContact != undefined\">\n        <button style=\"width:35px; height: 35px; border-radius:50% ; margin-right: 20px; background-color: tomato;\">Y</button>\n        {{daata}}\n      </ion-item>\n    </div>\n\n    <p *ngIf=\"zContact != empty || zContact != '' || zContact != null || zContact != undefined\">Z</p>\n    <div *ngFor=\"let daata of zContact; index as i\">\n      <ion-item *ngIf=\"zContact != empty || zContact != '' || zContact != null || zContact != undefined\">\n        <button style=\"width:35px; height: 35px; border-radius:50% ; margin-right: 20px; background-color: tomato;\">Z</button>\n        {{daata}}\n      </ion-item>\n\n    </div>\n\n  </div> -->\n\n  <ion-item>\n  </ion-item>\n</ion-content>\n\n\n<button mat-raised-button class=\"FixedButton\" (click)=\"addCustomaer()\"> <img\n    src=\"../../assets/AddRestro.png\" width=\"30\" height=\"30\"> </button>\n<!-- </ion-content> -->";
    /***/
  },

  /***/
  "./src/app/sites/sites-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/sites/sites-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: SitesPageRoutingModule */

  /***/
  function srcAppSitesSitesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SitesPageRoutingModule", function () {
      return SitesPageRoutingModule;
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


    var _sites_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sites.page */
    "./src/app/sites/sites.page.ts");

    var routes = [{
      path: '',
      component: _sites_page__WEBPACK_IMPORTED_MODULE_3__["SitesPage"]
    }];

    var SitesPageRoutingModule = function SitesPageRoutingModule() {
      _classCallCheck(this, SitesPageRoutingModule);
    };

    SitesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SitesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/sites/sites.module.ts":
  /*!***************************************!*\
    !*** ./src/app/sites/sites.module.ts ***!
    \***************************************/

  /*! exports provided: SitesPageModule */

  /***/
  function srcAppSitesSitesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SitesPageModule", function () {
      return SitesPageModule;
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


    var _sites_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sites-routing.module */
    "./src/app/sites/sites-routing.module.ts");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/ng2-search-filter.js");
    /* harmony import */


    var _sites_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./sites.page */
    "./src/app/sites/sites.page.ts");

    var SitesPageModule = function SitesPageModule() {
      _classCallCheck(this, SitesPageModule);
    };

    SitesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _sites_routing_module__WEBPACK_IMPORTED_MODULE_5__["SitesPageRoutingModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"]],
      declarations: [_sites_page__WEBPACK_IMPORTED_MODULE_8__["SitesPage"]]
    })], SitesPageModule);
    /***/
  },

  /***/
  "./src/app/sites/sites.page.scss":
  /*!***************************************!*\
    !*** ./src/app/sites/sites.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppSitesSitesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 1.3rem;\n  width: 81%;\n  color: #ffffff;\n  font-weight: 700;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleSider {\n  display: inline-block;\n  text-align: right;\n  font-size: 1rem;\n  font-weight: 600;\n  width: 100%;\n}\n\n.BackButton {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.search-filter-container {\n  width: 100%;\n  height: 45px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 8px;\n}\n\n.SearchOption {\n  width: 90%;\n}\n\n.FilterOption {\n  width: 10%;\n}\n\n.SearchDiv {\n  width: 100%;\n  height: 100%;\n  margin: 0 4% 0 4%;\n}\n\ninput.valid {\n  /* border-color: #28a745; */\n  background-image: url('FilterSearch.png');\n  background-repeat: no-repeat;\n  background-size: 20px 20px;\n  background-position: 95% center;\n  height: 37px;\n  width: 100%;\n  padding-left: 20px;\n  /* padding-right: 20px; */\n  outline-width: 0;\n  border-width: 0;\n  font-size: 13px;\n  font-weight: 400;\n  background-color: #fff;\n  border-radius: 15px;\n  outline-color: white;\n}\n\n.MainContainer {\n  width: 100%;\n  background-color: #F1F4F8;\n  height: 100%;\n}\n\n.ListItem {\n  width: 100%;\n}\n\n.ListCard {\n  width: 92%;\n  margin: 4%;\n}\n\n.SingleListItem {\n  width: 100%;\n}\n\n.SiteName {\n  font-size: 1rem;\n  font-weight: 600;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.SiteDescription {\n  font-size: 0.8rem;\n  font-weight: 500;\n  font-family: \"Roboto\", sans-serif;\n  color: #535252;\n}\n\n.LogoutBtn {\n  background-color: transparent;\n  color: #fff;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 0.8px;\n  line-height: 19px;\n}\n\n.FixedButton {\n  width: 65px;\n  height: 65px;\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  border-radius: 50%;\n  color: white;\n  z-index: 10;\n  background-color: #3255f3;\n}\n\n.new-background-color {\n  --background: #d2691e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FycmF5cG9pbnRlci9EZXNrdG9wL3BldHJvbHB1bXBhcHAvc3JjL2FwcC9zaXRlcy9zaXRlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpdGVzL3NpdGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFFQSxZQUFBO0VBQ0EsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNBSjs7QURHQTtFQUNJLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNBSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBSUEsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0FDRko7O0FESUE7RUFDSSxVQUFBO0FDREo7O0FER0E7RUFDSSxVQUFBO0FDQUo7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUlBLGlCQUFBO0FDRko7O0FESUE7RUFDSSwyQkFBQTtFQUVBLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDRko7O0FESUM7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFFQSxZQUFBO0FDRkw7O0FESUM7RUFDSSxXQUFBO0FDREw7O0FER0M7RUFHRyxVQUFBO0VBQ0EsVUFBQTtBQ0ZKOztBRElDO0VBQ0ksV0FBQTtBQ0RMOztBREtDO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7QUNGTDs7QURJQztFQUNHLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUNESjs7QURHQTtFQUVJLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0RKOztBREdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDRCxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNBSDs7QURJQTtFQUNJLHFCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9zaXRlcy9zaXRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuVGl0bGVIZWFkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gcGFkZGluZzogMCAxMHB4IDAgMTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuLlRpdGxlVGV4dHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgd2lkdGg6IDgxJTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uVGl0bGVTaWRlcntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjpyaWdodDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB3aWR0aDogMTAwJTtcblxufVxuLkJhY2tCdXR0b257XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmcnKSBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLnNlYXJjaC1maWx0ZXItY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDVweDtcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmdiKDE3MywgMTcyLCAxNzIpO1xuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTczLCAxNzIsIDE3Mik7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG59XG4uU2VhcmNoT3B0aW9ue1xuICAgIHdpZHRoOiA5MCU7XG59XG4uRmlsdGVyT3B0aW9ue1xuICAgIHdpZHRoOiAxMCU7XG59XG4uU2VhcmNoRGl2e1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgLy8gcGFkZGluZzogM3B4IDAgM3B4IDA7XG4gICAgbWFyZ2luOiAwIDQlIDAgNCU7O1xufVxuaW5wdXQudmFsaWQge1xuICAgIC8qIGJvcmRlci1jb2xvcjogIzI4YTc0NTsgKi9cbiAgICAvLyBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL0ZpbHRlclNlYXJjaC5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDk1JSBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzN3B4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiAyMHB4OyAqL1xuICAgIG91dGxpbmUtd2lkdGg6IDA7XG4gICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBvdXRsaW5lLWNvbG9yOiB3aGl0ZTtcbiB9XG4gLk1haW5Db250YWluZXJ7XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGNEY4O1xuICAgIC8vICBwYWRkaW5nOiAxMHB4O1xuICAgICBoZWlnaHQ6IDEwMCU7XG4gfVxuIC5MaXN0SXRlbXtcbiAgICAgd2lkdGg6IDEwMCU7XG4gfVxuIC5MaXN0Q2FyZHtcbiAgICAvLyAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAgIC8vICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHdpZHRoOiA5MiU7XG4gICAgbWFyZ2luOiA0JTtcbiB9XG4gLlNpbmdsZUxpc3RJdGVte1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAvLyAgbWluLWhlaWdodDogNTBweDtcblxuIH1cbiAuU2l0ZU5hbWV7XG4gICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XG4gfVxuIC5TaXRlRGVzY3JpcHRpb257XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogcmdiKDgzLCA4MiwgODIpO1xufVxuLkxvZ291dEJ0bntcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjZmZmO1x0XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XHRcbiAgICBmb250LXNpemU6IDE1cHg7XHRcbiAgICBmb250LXdlaWdodDogNTAwO1x0XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1x0XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIH1cbiAgLkZpeGVkQnV0dG9ue1xuICAgIHdpZHRoOjY1cHg7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICAgcG9zaXRpb246IGZpeGVkO1xuICAgYm90dG9tOiAyMHB4O1xuICAgcmlnaHQ6IDIwcHg7XG4gICBib3JkZXItcmFkaXVzOjUwJTtcbiAgIGNvbG9yOndoaXRlO1xuICAgei1pbmRleDogMTA7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI1NWYzO1xufVxuXG5cbi5uZXctYmFja2dyb3VuZC1jb2xvcntcbiAgICAtLWJhY2tncm91bmQ6ICNkMjY5MWU7XG59IiwiLlRpdGxlSGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5UaXRsZVRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHdpZHRoOiA4MSU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uVGl0bGVTaWRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5CYWNrQnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2JhY2tfd2hpdGUucG5nXCIpIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5zZWFyY2gtZmlsdGVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5TZWFyY2hPcHRpb24ge1xuICB3aWR0aDogOTAlO1xufVxuXG4uRmlsdGVyT3B0aW9uIHtcbiAgd2lkdGg6IDEwJTtcbn1cblxuLlNlYXJjaERpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMCA0JSAwIDQlO1xufVxuXG5pbnB1dC52YWxpZCB7XG4gIC8qIGJvcmRlci1jb2xvcjogIzI4YTc0NTsgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL0ZpbHRlclNlYXJjaC5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5NSUgY2VudGVyO1xuICBoZWlnaHQ6IDM3cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIC8qIHBhZGRpbmctcmlnaHQ6IDIwcHg7ICovXG4gIG91dGxpbmUtd2lkdGg6IDA7XG4gIGJvcmRlci13aWR0aDogMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBvdXRsaW5lLWNvbG9yOiB3aGl0ZTtcbn1cblxuLk1haW5Db250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjRGODtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uTGlzdEl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLkxpc3RDYXJkIHtcbiAgd2lkdGg6IDkyJTtcbiAgbWFyZ2luOiA0JTtcbn1cblxuLlNpbmdsZUxpc3RJdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5TaXRlTmFtZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5TaXRlRGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNTM1MjUyO1xufVxuXG4uTG9nb3V0QnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xufVxuXG4uRml4ZWRCdXR0b24ge1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA2NXB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAxMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyNTVmMztcbn1cblxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZDI2OTFlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/sites/sites.page.ts":
  /*!*************************************!*\
    !*** ./src/app/sites/sites.page.ts ***!
    \*************************************/

  /*! exports provided: SitesPage */

  /***/
  function srcAppSitesSitesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SitesPage", function () {
      return SitesPage;
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


    var _services_api_call_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/api-call.service */
    "./src/app/services/api-call.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/loader/loader.service */
    "./src/app/services/loader/loader.service.ts");
    /* harmony import */


    var _services_networkproviderservices_networkproviderservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/networkproviderservices/networkproviderservice.service */
    "./src/app/services/networkproviderservices/networkproviderservice.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var SitesPage =
    /*#__PURE__*/
    function () {
      function SitesPage(apiCall, router, dialog, loader, network, storage, menu, toast) {
        _classCallCheck(this, SitesPage);

        this.apiCall = apiCall;
        this.router = router;
        this.dialog = dialog;
        this.loader = loader;
        this.network = network;
        this.storage = storage;
        this.menu = menu;
        this.toast = toast;
        this.displayDetail = 0;
        this.getCusstomers = [{
          "name": "llllllllll jjjjjjjjjjj",
          "mobile": "",
          "amount": "2500",
          "address": "Mumbai",
          "email": "lllll@gmail.com",
          "imagepath": "https://image.shutterstock.com/image-vector/get-ready-advertising-sign-megaphone-600w-1037346505.jpg"
        }, {
          "name": "smitaaa belhekar",
          "mobile": "1234567890",
          "amount": "1000",
          "address": "Ahmednagar",
          "email": "smitaaa@gmail.com",
          "imagepath": ""
        }, {
          "name": "asmita belhekar",
          "mobile": "9527902622",
          "amount": "5000",
          "address": "Pune",
          "email": "asmita@gmail.com",
          "imagepath": "https://image.flaticon.com/icons/svg/145/145852.svg"
        }, {
          "name": "sejal belhekar",
          "mobile": "1234567890",
          "amount": "2500",
          "address": "Pune",
          "email": "",
          "imagepath": ""
        }, {
          "name": "priya abc",
          "mobile": "1234567890",
          "amount": "2500",
          "address": "Mumbai",
          "email": "priya@gmail.com",
          "imagepath": "https://image.flaticon.com/icons/svg/145/145852.svg"
        }, {
          "name": "asmi belhekar",
          "mobile": "9527902622",
          "amount": "1000",
          "address": "Ahmednagar",
          "email": "asmi@gmail.com",
          "imagepath": ""
        }, {
          "name": "kiran kokate",
          "mobile": "9096467346",
          "amount": "5000",
          "address": "Pune",
          "email": "kiran@gmail.com",
          "imagepath": "https://image.flaticon.com/icons/svg/145/145859.svg"
        }, {
          "name": "ccccc dddd",
          "mobile": "1234567890",
          "amount": "2500",
          "address": "Pune",
          "email": "ccccc@gmail.com",
          "imagepath": ""
        }, {
          "name": "dhananjay raut",
          "mobile": "1234567890",
          "amount": "2500",
          "address": "Mumbai",
          "email": "dhananjay@gmail.com",
          "imagepath": "https://image.shutterstock.com/image-vector/get-ready-advertising-sign-megaphone-600w-1037346505.jpg"
        }, {
          "name": "cccc ppppp",
          "mobile": "1234567890",
          "amount": "1000",
          "address": "Ahmednagar",
          "email": "ccc@gmail.com",
          "imagepath": ""
        }, {
          "name": "cccc hhhhhhh ",
          "mobile": "1234567890",
          "amount": "5000",
          "address": "Pune",
          "email": "chchch@gmail.com",
          "imagepath": ""
        }, {
          "name": "aaaaaaa zzzz",
          "mobile": "1234567890",
          "amount": "2500",
          "address": "",
          "email": "azazazaz@gmail.com",
          "imagepath": "https://image.shutterstock.com/image-vector/get-ready-advertising-sign-megaphone-600w-1037346505.jpg"
        }, {
          "name": "smitaaa belhekar",
          "mobile": "1234567890",
          "amount": "1000",
          "address": "Ahmednagar",
          "email": "smitaaa@gmail.com",
          "imagepath": ""
        }, {
          "name": "asmita belhekar",
          "mobile": "9527902622",
          "amount": "5000",
          "address": "Pune",
          "email": "asmita@gmail.com",
          "imagepath": "https://image.flaticon.com/icons/svg/145/145852.svg"
        }, {
          "name": "sejal belhekar",
          "mobile": "1234567890",
          "amount": "2500",
          "address": "Pune",
          "email": "",
          "imagepath": ""
        }, {
          "name": "priya abc",
          "mobile": "1234567890",
          "amount": "2500",
          "address": "Mumbai",
          "email": "priya@gmail.com",
          "imagepath": "https://image.flaticon.com/icons/svg/145/145852.svg"
        }, {
          "name": "asmi belhekar",
          "mobile": "9527902622",
          "amount": "1000",
          "address": "Ahmednagar",
          "email": "asmi@gmail.com",
          "imagepath": ""
        }, {
          "name": "kiran kokate",
          "mobile": "9096467346",
          "amount": "5000",
          "address": "Pune",
          "email": "kiran@gmail.com",
          "imagepath": "https://image.flaticon.com/icons/svg/145/145859.svg"
        }, {
          "name": "ccccc dddd",
          "mobile": "1234567890",
          "amount": "2500",
          "address": "Pune",
          "email": "ccccc@gmail.com",
          "imagepath": ""
        }, {
          "name": "dhananjay raut",
          "mobile": "1234567890",
          "amount": "2500",
          "address": "Mumbai",
          "email": "dhananjay@gmail.com",
          "imagepath": "https://image.shutterstock.com/image-vector/get-ready-advertising-sign-megaphone-600w-1037346505.jpg"
        }, {
          "name": "cccc  ppppp",
          "mobile": "1234567890",
          "amount": "1000",
          "address": "Ahmednagar",
          "email": "ccc@gmail.com",
          "imagepath": ""
        }, {
          "name": "cccc  hhhhhhh ",
          "mobile": "1234567890",
          "amount": "5000",
          "address": "Pune",
          "email": "chchch@gmail.com",
          "imagepath": ""
        }, {
          "name": "aaaaaaaa   zzzz",
          "mobile": "1234567890",
          "amount": "2500",
          "address": "Pune",
          "email": "azazazaz@gmail.com",
          "imagepath": "https://image.shutterstock.com/image-vector/get-ready-advertising-sign-megaphone-600w-1037346505.jpg"
        }];
        this.all_sites = [];
        this.aContact = [];
        this.bContact = [];
        this.cContact = [];
        this.dContact = [];
        this.eContact = [];
        this.fContact = [];
        this.gContact = [];
        this.hContact = [];
        this.iContact = [];
        this.jContact = [];
        this.kContact = [];
        this.lContact = [];
        this.mContact = [];
        this.nContact = [];
        this.oContact = [];
        this.pContact = [];
        this.qContact = [];
        this.rContact = [];
        this.sContact = [];
        this.tContact = [];
        this.uContact = [];
        this.vContact = [];
        this.wContact = [];
        this.xContact = [];
        this.yContact = [];
        this.zContact = [];
        this.finalList = [];
        this.otherContact = [];
        this.isItemAvailable = false;
        this.items = [];
        this.currentColor = 'blue';
      }

      _createClass(SitesPage, [{
        key: "initializeItems",
        value: function initializeItems() {
          this.items = ["Ram", "gopi", "dravid"];
        }
      }, {
        key: "getItems",
        value: function getItems(ev) {
          this.initializeItems();
          var val = ev.target.value;
          console.log("search text:" + ev.target.value);

          if (val && val.trim() != '') {
            this.isItemAvailable = true;
            this.items = this.items.filter(function (item) {
              return item.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
          }
        }
      }, {
        key: "openFirst",
        value: function openFirst() {
          this.menu.enable(true, 'first');
          this.menu.open('first');
        }
      }, {
        key: "openEnd",
        value: function openEnd() {
          this.menu.open('end');
        }
      }, {
        key: "openCustom",
        value: function openCustom() {
          this.menu.enable(true, 'custom');
          this.menu.open('custom');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          for (var i = 0; i < this.getCusstomers.length; i++) {
            console.log("display this.getCusstomers['name'] ::" + this.getCusstomers[i]['name']);
            this.finalList.push(this.getCusstomers[i]['name']);
          }

          console.log("display array inserted:" + this.finalList);
          console.log("display array sorted:" + this.finalList.sort());
          this.finalList = this.getCusstomers['name'];
          this.getCusstomers.sort(function (a, b) {
            return a.name.localeCompare(b.name);
          });
          this.getSites();
          this.getContactList();
          this.storage.get("cepl_user_data").then(function (val) {
            var tmp = JSON.parse(val);
            _this.user_data = tmp;
          });
          var tmp = this.network.CheckNetworkStatus();
          console.log("network status", tmp);
          var ttt = this.network.checkInternetConnection();
          console.log("network status", ttt);
          var net = this.network.getNetworkStatus();
          console.log("network status3", net);
        }
      }, {
        key: "getContactList",
        value: function getContactList() {
          for (var i = 0; i < this.getCusstomers.length; i++) {
            this.finalList = this.getCusstomers[i]['name'];
            var x = this.getCusstomers[i].name;

            if (x.charAt(0) == "A" || x.charAt(0) == 'a') {
              this.aContact.push(this.getCusstomers[i].name);
              console.log("get aContact details:" + this.aContact);
            } else if (x.charAt(0) == "B" || x.charAt(0) == 'b') {
              this.bContact.push(this.getCusstomers[i].name);
              console.log("get bContact details:" + this.bContact);
            } else if (x.charAt(0) == "C" || x.charAt(0) == 'c') {
              this.cContact.push(this.getCusstomers[i].name);
              console.log("get cContact details:" + this.cContact);
            } else if (x.charAt(0) == "D" || x.charAt(0) == 'd') {
              this.dContact.push(this.getCusstomers[i].name);
              console.log("get dContact details:" + this.dContact);
            } else if (x.charAt(0) == "E" || x.charAt(0) == 'e') {
              this.eContact.push(this.getCusstomers[i].name);
              console.log("get eContact details:" + this.eContact);
            } else if (x.charAt(0) == "F" || x.charAt(0) == 'f') {
              this.fContact.push(this.getCusstomers[i].name);
              console.log("get fContact details:" + this.fContact);
            } else if (x.charAt(0) == "G" || x.charAt(0) == 'g') {
              this.gContact.push(this.getCusstomers[i].name);
              console.log("get gContact details:" + this.gContact);
            } else if (x.charAt(0) == "H" || x.charAt(0) == 'h') {
              this.hContact.push(this.getCusstomers[i].name);
              console.log("get hContact details:" + this.hContact);
            } else if (x.charAt(0) == "I" || x.charAt(0) == 'i') {
              this.iContact.push(this.getCusstomers[i].name);
              console.log("get iContact details:" + this.iContact);
            } else if (x.charAt(0) == "J" || x.charAt(0) == 'j') {
              this.jContact.push(this.getCusstomers[i].name);
              console.log("get Contact details:" + this.jContact);
            } else if (x.charAt(0) == "K" || x.charAt(0) == 'k') {
              this.kContact.push(this.getCusstomers[i].name);
              console.log("get Contact details:" + this.kContact);
            } else if (x.charAt(0) == "L" || x.charAt(0) == 'l') {
              this.lContact.push(this.getCusstomers[i].name);
              console.log("get Contact details:" + this.lContact);
            } else if (x.charAt(0) == "M" || x.charAt(0) == 'm') {
              this.mContact.push(this.getCusstomers[i].name);
              console.log("get Contact details:" + this.mContact);
            } else if (x.charAt(0) == "N" || x.charAt(0) == 'n') {
              this.nContact.push(this.getCusstomers[i].name);
              console.log("get Contact details:" + this.nContact);
            } else if (x.charAt(0) == "O" || x.charAt(0) == 'o') {
              this.oContact.push(this.getCusstomers[i].name);
              console.log("get Contact details:" + this.oContact);
            } else if (x.charAt(0) == "P" || x.charAt(0) == 'p') {
              this.pContact.push(this.getCusstomers[i].name);
              console.log("get Contact details:" + this.pContact);
            } else if (x.charAt(0) == "Q" || x.charAt(0) == 'q') {
              this.qContact.push(this.getCusstomers[i].name);
              console.log("get Contact details:" + this.qContact);
            } else if (x.charAt(0) == "R" || x.charAt(0) == 'r') {
              this.rContact.push(this.getCusstomers[i].name);
              console.log("get Contact details:" + this.rContact);
            } else if (x.charAt(0) == "S" || x.charAt(0) == 's') {
              this.sContact.push(this.getCusstomers[i].name);
              console.log("get Contact details:" + this.sContact);
            } else if (x.charAt(0) == "T" || x.charAt(0) == 't') {
              this.tContact.push(this.getCusstomers[i].name);
              console.log("get Contact details:" + this.tContact);
            } else if (x.charAt(0) == "U" || x.charAt(0) == 'u') {
              this.uContact.push(this.getCusstomers[i].name);
              console.log("get Contact details:" + this.uContact);
            } else if (x.charAt(0) == "V" || x.charAt(0) == 'v') {
              this.vContact.push(this.getCusstomers[i].name);
              console.log("get Contact details:" + this.vContact);
            } else if (x.charAt(0) == "W" || x.charAt(0) == 'w') {
              this.wContact.push(this.getCusstomers[i].name);
              console.log("get Contact details:" + this.wContact);
            } else if (x.charAt(0) == "X" || x.charAt(0) == 'x') {
              this.xContact.push(this.getCusstomers[i].name);
            } else if (x.charAt(0) == "Y" || x.charAt(0) == 'y') {
              this.yContact.push(this.getCusstomers[i].name);
              console.log("get Contact details:" + this.yContact);
            } else if (x.charAt(0) == "Z" || x.charAt(0) == 'z') {
              this.zContact.push(this.getCusstomers[i].name);
              console.log("get Contact details:" + this.zContact);
            }
          }

          console.log("sorted list:" + this.finalList);
        }
      }, {
        key: "doSomething",
        value: function doSomething() {
          console.log("check onchange::");
        }
      }, {
        key: "getSites",
        value: function getSites() {
          var _this2 = this;

          this.loader.showBlockingLoaderAuth();
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].version + "sites?page=0&size=200";
          this.apiCall.get(url).subscribe(function (MyResponse) {
            console.log("My Response", MyResponse);
            _this2.all_sites = MyResponse['result']['list'];

            _this2.loader.hideBlockingLoaderAuth();
          }, function (error) {
            _this2.network.CheckNetworkStatus();

            _this2.network.onPageLoadCheckInternet();

            _this2.loader.hideBlockingLoaderAuth();
          });
        }
      }, {
        key: "showTask",
        value: function showTask(site) {
          console.log("user id", this.user_data);
          var update_access = 0;

          if (site.users.length != 0) {
            for (var i = 0; i < site.users.length; i++) {
              if (site.users[i] == this.user_data['id']) {
                update_access = 1;
                break;
              }
            }
          }

          console.log("siteId", site.id);
          this.router.navigate(['sites/' + site.id + "/" + site.name + "/" + update_access + '/location-of-area']);
        } // logout() {
        //   let send_data = {};
        //   send_data['text'] = "Do you really want to logout ?";
        //   send_data['button2'] = "Cancel";
        //   send_data['button1'] = "Logout";
        //   const dialogRef = this.dialog.open(ConfirmationPopupPage, {
        //     width: '450px',
        //     data: send_data
        //   });
        //   dialogRef.afterClosed().subscribe(result => {
        //     console.log("result", result);
        //     if (result['is_success'] == 1) {
        //       this.storage.remove('cepl_user_data').then(() => {
        //         this.router.navigate(['login']);
        //       })
        //     }
        //   });
        // }

      }, {
        key: "updateRecord",
        value: function updateRecord() {
          this.checkRecordStatus = "update";
          this.router.navigate(['/addcustomer', {
            checkstatus: this.checkRecordStatus
          }]);
        }
      }, {
        key: "deleteRecord",
        value: function deleteRecord() {
          this.presentToast("Record deleted successfully");
        }
      }, {
        key: "addCustomaer",
        value: function addCustomaer() {
          this.checkRecordStatus = "add";
          var detailCustomerdata = {
            "fname": "",
            "mobile": "",
            "address": "",
            "email": "",
            "checkstatus": this.checkRecordStatus
          };
          this.router.navigate(['/addcustomer', {
            detailCustomerdata: JSON.stringify(detailCustomerdata)
          }]); // this.checkRecordStatus = "add";
          // this.router.navigate(['/addcustomer', { checkstatus: this.checkRecordStatus }]);
        }
      }, {
        key: "presentToast",
        value: function presentToast(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toast.create({
                      message: message,
                      duration: 4000
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getBalanceDetail",
        value: function getBalanceDetail() {
          this.router.navigate(['/paymentrecord']); // this.presentToast("Check pending balance");
        } // detailInfo(k) {
        //   this.displayDetail = 1;
        //   this.displayImage = "../../assets/up-arrow.png";
        // }
        // lessInfo(j) {
        //   this.displayDetail = 0;
        //   this.displayImage = "../../assets/download.png";
        // }

      }, {
        key: "getCustomerDetailInfo",
        value: function getCustomerDetailInfo(data) {
          console.log("getdata::" + JSON.stringify(data));
          var detailData = {
            "name": data.name,
            "mobile": data.mobile,
            "address": data.address,
            "lname": data.lname,
            "amount": data.amount,
            "imagepath": data.imagepath,
            "email": data.email
          };
          this.router.navigate(['customerdetail', {
            detailData: JSON.stringify(detailData)
          }]);
        }
      }]);

      return SitesPage;
    }();

    SitesPage.ctorParameters = function () {
      return [{
        type: _services_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }, {
        type: _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"]
      }, {
        type: _services_networkproviderservices_networkproviderservice_service__WEBPACK_IMPORTED_MODULE_7__["NetworkproviderserviceService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"]
      }];
    };

    SitesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sites',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sites.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sites/sites.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sites.page.scss */
      "./src/app/sites/sites.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"], _services_networkproviderservices_networkproviderservice_service__WEBPACK_IMPORTED_MODULE_7__["NetworkproviderserviceService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"]])], SitesPage);
    /***/
  }
}]);
//# sourceMappingURL=sites-sites-module-es5.js.map