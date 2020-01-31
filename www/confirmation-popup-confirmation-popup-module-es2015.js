(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["confirmation-popup-confirmation-popup-module"],{

/***/ "./src/app/confirmation-popup/confirmation-popup-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/confirmation-popup/confirmation-popup-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ConfirmationPopupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationPopupPageRoutingModule", function() { return ConfirmationPopupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _confirmation_popup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirmation-popup.page */ "./src/app/confirmation-popup/confirmation-popup.page.ts");




const routes = [
    {
        path: '',
        component: _confirmation_popup_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmationPopupPage"]
    }
];
let ConfirmationPopupPageRoutingModule = class ConfirmationPopupPageRoutingModule {
};
ConfirmationPopupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConfirmationPopupPageRoutingModule);



/***/ }),

/***/ "./src/app/confirmation-popup/confirmation-popup.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/confirmation-popup/confirmation-popup.module.ts ***!
  \*****************************************************************/
/*! exports provided: ConfirmationPopupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationPopupPageModule", function() { return ConfirmationPopupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _confirmation_popup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirmation-popup-routing.module */ "./src/app/confirmation-popup/confirmation-popup-routing.module.ts");
/* harmony import */ var _confirmation_popup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirmation-popup.page */ "./src/app/confirmation-popup/confirmation-popup.page.ts");







let ConfirmationPopupPageModule = class ConfirmationPopupPageModule {
};
ConfirmationPopupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _confirmation_popup_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmationPopupPageRoutingModule"]
        ],
        declarations: [_confirmation_popup_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmationPopupPage"]]
    })
], ConfirmationPopupPageModule);



/***/ })

}]);
//# sourceMappingURL=confirmation-popup-confirmation-popup-module-es2015.js.map