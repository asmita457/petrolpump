(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["internet-not-connected-internet-not-connected-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/internet-not-connected/internet-not-connected.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/internet-not-connected/internet-not-connected.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>internet-not-connected</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/internet-not-connected/internet-not-connected-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/internet-not-connected/internet-not-connected-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: InternetNotConnectedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternetNotConnectedPageRoutingModule", function() { return InternetNotConnectedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _internet_not_connected_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internet-not-connected.page */ "./src/app/internet-not-connected/internet-not-connected.page.ts");




const routes = [
    {
        path: '',
        component: _internet_not_connected_page__WEBPACK_IMPORTED_MODULE_3__["InternetNotConnectedPage"]
    }
];
let InternetNotConnectedPageRoutingModule = class InternetNotConnectedPageRoutingModule {
};
InternetNotConnectedPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InternetNotConnectedPageRoutingModule);



/***/ }),

/***/ "./src/app/internet-not-connected/internet-not-connected.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/internet-not-connected/internet-not-connected.module.ts ***!
  \*************************************************************************/
/*! exports provided: InternetNotConnectedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternetNotConnectedPageModule", function() { return InternetNotConnectedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _internet_not_connected_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./internet-not-connected-routing.module */ "./src/app/internet-not-connected/internet-not-connected-routing.module.ts");
/* harmony import */ var _internet_not_connected_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./internet-not-connected.page */ "./src/app/internet-not-connected/internet-not-connected.page.ts");







let InternetNotConnectedPageModule = class InternetNotConnectedPageModule {
};
InternetNotConnectedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _internet_not_connected_routing_module__WEBPACK_IMPORTED_MODULE_5__["InternetNotConnectedPageRoutingModule"]
        ],
        declarations: [_internet_not_connected_page__WEBPACK_IMPORTED_MODULE_6__["InternetNotConnectedPage"]]
    })
], InternetNotConnectedPageModule);



/***/ }),

/***/ "./src/app/internet-not-connected/internet-not-connected.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/internet-not-connected/internet-not-connected.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludGVybmV0LW5vdC1jb25uZWN0ZWQvaW50ZXJuZXQtbm90LWNvbm5lY3RlZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/internet-not-connected/internet-not-connected.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/internet-not-connected/internet-not-connected.page.ts ***!
  \***********************************************************************/
/*! exports provided: InternetNotConnectedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternetNotConnectedPage", function() { return InternetNotConnectedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InternetNotConnectedPage = class InternetNotConnectedPage {
    constructor() { }
    ngOnInit() {
    }
};
InternetNotConnectedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-internet-not-connected',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./internet-not-connected.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/internet-not-connected/internet-not-connected.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./internet-not-connected.page.scss */ "./src/app/internet-not-connected/internet-not-connected.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InternetNotConnectedPage);



/***/ })

}]);
//# sourceMappingURL=internet-not-connected-internet-not-connected-module-es2015.js.map