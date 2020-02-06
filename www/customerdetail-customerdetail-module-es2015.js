(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customerdetail-customerdetail-module"],{

/***/ "./node_modules/@ionic-native/call-number/ngx/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic-native/call-number/ngx/index.js ***!
  \*************************************************************/
/*! exports provided: CallNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallNumber", function() { return CallNumber; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CallNumber = /** @class */ (function (_super) {
    __extends(CallNumber, _super);
    function CallNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CallNumber.prototype.callNumber = function (numberToCall, bypassAppChooser) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "callNumber", { "callbackOrder": "reverse" }, arguments); };
    CallNumber.prototype.isCallSupported = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isCallSupported", {}, arguments); };
    CallNumber.pluginName = "CallNumber";
    CallNumber.plugin = "call-number";
    CallNumber.pluginRef = "plugins.CallNumber";
    CallNumber.repo = "https://github.com/Rohfosho/CordovaCallNumberPlugin";
    CallNumber.platforms = ["Android", "iOS"];
    CallNumber = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CallNumber);
    return CallNumber;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhbGwtbnVtYmVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQStCeEMsOEJBQWlCOzs7O0lBVS9DLCtCQUFVLGFBQUMsWUFBb0IsRUFBRSxnQkFBeUI7SUFTMUQsb0NBQWU7Ozs7OztJQW5CSixVQUFVO1FBRHRCLFVBQVUsRUFBRTtPQUNBLFVBQVU7cUJBaEN2QjtFQWdDZ0MsaUJBQWlCO1NBQXBDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBDYWxsIE51bWJlclxuICogQGRlc2NyaXB0aW9uXG4gKiBDYWxsIGEgbnVtYmVyIGRpcmVjdGx5IGZyb20geW91ciBDb3Jkb3ZhL0lvbmljIGFwcGxpY2F0aW9uLlxuICogKipOT1RFKio6IFRoZSBpT1MgU2ltdWxhdG9yIChhbmQgbWF5YmUgQW5kcm9pZCBTaW11bGF0b3JzKSBkbyBub3QgcHJvdmlkZSBhY2Nlc3MgdG8gdGhlIHBob25lIHN1YnN5c3RlbS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENhbGxOdW1iZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NhbGwtbnVtYmVyL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjYWxsTnVtYmVyOiBDYWxsTnVtYmVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5jYWxsTnVtYmVyLmNhbGxOdW1iZXIoXCIxODAwMTAxMDEwMVwiLCB0cnVlKVxuICogICAudGhlbihyZXMgPT4gY29uc29sZS5sb2coJ0xhdW5jaGVkIGRpYWxlciEnLCByZXMpKVxuICogICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvciBsYXVuY2hpbmcgZGlhbGVyJywgZXJyKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ2FsbE51bWJlcicsXG4gIHBsdWdpbjogJ2NhbGwtbnVtYmVyJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5DYWxsTnVtYmVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Sb2hmb3Noby9Db3Jkb3ZhQ2FsbE51bWJlclBsdWdpbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhbGxOdW1iZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDYWxscyBhIHBob25lIG51bWJlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbnVtYmVyVG9DYWxsIFRoZSBwaG9uZSBudW1iZXIgdG8gY2FsbCBhcyBhIHN0cmluZ1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGJ5cGFzc0FwcENob29zZXIgU2V0IHRvIHRydWUgdG8gYnlwYXNzIHRoZSBhcHAgY2hvb3NlciBhbmQgZ28gZGlyZWN0bHkgdG8gZGlhbGVyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgY2FsbE51bWJlcihudW1iZXJUb0NhbGw6IHN0cmluZywgYnlwYXNzQXBwQ2hvb3NlcjogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGNhbGwgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0NhbGxTdXBwb3J0ZWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/@ionic-native/sms/ngx/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@ionic-native/sms/ngx/index.js ***!
  \*****************************************************/
/*! exports provided: SMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMS", function() { return SMS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SMS = /** @class */ (function (_super) {
    __extends(SMS, _super);
    function SMS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SMS.prototype.send = function (phoneNumber, message, options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "send", { "successIndex": 3, "errorIndex": 4 }, arguments); };
    SMS.prototype.hasPermission = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "hasPermission", { "platforms": ["Android"] }, arguments); };
    SMS.pluginName = "SMS";
    SMS.plugin = "cordova-sms-plugin";
    SMS.pluginRef = "sms";
    SMS.repo = "https://github.com/cordova-sms/cordova-sms-plugin";
    SMS.platforms = ["Android", "iOS", "Windows", "Windows Phone 8"];
    SMS = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SMS);
    return SMS;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Ntcy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFvRC9DLHVCQUFpQjs7OztJQVl4QyxrQkFBSSxhQUNGLFdBQThCLEVBQzlCLE9BQWUsRUFDZixPQUFvQjtJQVl0QiwyQkFBYTs7Ozs7O0lBM0JGLEdBQUc7UUFEZixVQUFVLEVBQUU7T0FDQSxHQUFHO2NBckRoQjtFQXFEeUIsaUJBQWlCO1NBQTdCLEdBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBPcHRpb25zIGZvciBzZW5kaW5nIGFuIFNNU1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFNtc09wdGlvbnMge1xuICAvKipcbiAgICogU2V0IHRvIHRydWUgdG8gcmVwbGFjZSBcXG4gYnkgYSBuZXcgbGluZS4gRGVmYXVsdDogZmFsc2VcbiAgICovXG4gIHJlcGxhY2VMaW5lQnJlYWtzPzogYm9vbGVhbjtcblxuICBhbmRyb2lkPzogU21zT3B0aW9uc0FuZHJvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU21zT3B0aW9uc0FuZHJvaWQge1xuICAvKipcbiAgICogU2V0IHRvIFwiSU5URU5UXCIgdG8gc2VuZCBTTVMgd2l0aCB0aGUgbmF0aXZlIGFuZHJvaWQgU01TIG1lc3NhZ2luZy4gTGVhdmluZyBpdCBlbXB0eSB3aWxsIHNlbmQgdGhlIFNNUyB3aXRob3V0IG9wZW5pbmcgYW55IGFwcC5cbiAgICovXG4gIGludGVudD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBTTVNcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBjb3Jkb3ZhLXNtcy1wbHVnaW4uIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtTTVMgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Jkb3ZhLXNtcy9jb3Jkb3ZhLXNtcy1wbHVnaW4pLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU01TIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zbXMvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNtczogU01TKSB7IH1cbiAqXG4gKlxuICogLi4uXG4gKlxuICpcbiAqIC8vIFNlbmQgYSB0ZXh0IG1lc3NhZ2UgdXNpbmcgZGVmYXVsdCBvcHRpb25zXG4gKiB0aGlzLnNtcy5zZW5kKCc0MTYxMjM0NTYnLCAnSGVsbG8gd29ybGQhJyk7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBTbXNPcHRpb25zXG4gKiBTbXNPcHRpb25zQW5kcm9pZFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NNUycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtc21zLXBsdWdpbicsXG4gIHBsdWdpblJlZjogJ3NtcycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY29yZG92YS1zbXMvY29yZG92YS1zbXMtcGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnLCAnV2luZG93cyBQaG9uZSA4J11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU01TIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU2VuZHMgc21zIHRvIGEgbnVtYmVyXG4gICAqIEBwYXJhbSBwaG9uZU51bWJlciB7c3RyaW5nfHN0cmluZ1tdfSBQaG9uZSBudW1iZXJcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ30gTWVzc2FnZVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7U21zT3B0aW9uc30gT3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXNvbHZlcyBwcm9taXNlIHdoZW4gdGhlIFNNUyBoYXMgYmVlbiBzZW50XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAzLFxuICAgIGVycm9ySW5kZXg6IDRcbiAgfSlcbiAgc2VuZChcbiAgICBwaG9uZU51bWJlcjogc3RyaW5nIHwgc3RyaW5nW10sXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiBTbXNPcHRpb25zXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gbGV0cyB5b3Uga25vdyBpZiB0aGUgYXBwIGhhcyBwZXJtaXNzaW9uIHRvIHNlbmQgU01TXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgd2UgaGF2ZSBwZXJtaXNzaW9uXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxuICB9KVxuICBoYXNQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerdetail/customerdetail.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerdetail/customerdetail.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <!-- <ion-toolbar class=\"new-background-color\"> -->\n  <ion-toolbar color=\"primary\">\n\n    <ion-row>\n      <ion-col size=\"2\">\n        <button ion-button class=\"BackButton\" (click)=\"goBackword()\" style=\"margin:10px\"></button>\n      </ion-col>\n      <ion-col size=\"10\">\n\n        <div class=\"TitleHeader TitleText\">\n          Customer Detail\n        </div>\n\n      </ion-col>\n    </ion-row>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <img *ngIf=\"customerImage == '' \" src=\"../../assets/acnt.png\" class=\"centerFixedImg\" />\n  <img *ngIf=\"customerImage != '' \" src=\"{{customerImage}}\" class=\"centerImg\" />\n\n  <ion-item style=\"margin-left:-15px\">\n    <div class=\"inputCss\" style=\"margin-top:3%; font-size: 20px; margin-bottom: 15px\">\n      <ion-label align=\"center\">\n        {{customerName}}\n      </ion-label>\n    </div>\n\n  </ion-item>\n  <ion-item style=\"margin-left:-15px; \">\n\n    <ion-row style=\"height:90px; width: 100%\" align=\"center\">\n      <ion-col size=\"6\" align=\"center\" (click)=\"makeCall()\">\n        <ion-icon name=\"call\" style=\"width:30px; height:30px; color : #3255f3; margin-top: 15px\">\n        </ion-icon>\n        <ion-label style=\"color:#3255f3\">Call</ion-label>\n      </ion-col>\n      <ion-col size=\"6\" align=\"center\" (click)=\"sendMessage()\">\n        <ion-icon name=\"text\" style=\"width:30px; height:30px;color : #3255f3; margin-top: 15px\">\n        </ion-icon>\n        <ion-label style=\"color:#3255f3\">Text</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-item>\n\n  <ion-row style=\"margin-left:15px\">\n    <ion-col size=\"2\">\n      <ion-icon name=\"call\" style=\"width:30px; height:30px; color : #5b5b5e; margin-top: 12px\">\n      </ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      <ion-item>\n        <ion-row style=\"width:100%\">\n\n          <ion-label>+91</ion-label>\n          <ion-label style=\"width:5px\"></ion-label>\n          <ion-label>{{customerMobile}}</ion-label>\n\n        </ion-row>\n      \n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"margin-left:15px\">\n    <ion-col size=\"2\">\n      <ion-icon name=\"mail\" style=\"width:25px; height:28px; color : #5b5b5e; margin-top: 12px\">\n      </ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      <ion-item>\n        <ion-label>{{customerEmail}}</ion-label>\n      </ion-item>\n\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"margin-left:15px\">\n    <ion-col size=\"2\">\n      <ion-icon name=\"home\" style=\"width:25px; height:28px; color : #5b5b5e; margin-top: 12px\">\n      </ion-icon>\n    </ion-col>\n    <ion-col size=\"10\">\n      <ion-item>\n        <ion-label>{{customerAddress}}</ion-label>\n\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n \n\n  <div class=\"editCss\" style=\"margin-top:20%\" (click)=\"editDetails()\">\n    <ion-icon name=\"create\" style=\"width:20px; height:18px; color : #ffffff;\">\n    </ion-icon>\n\n      <ion-label style=\"color:white;\" align=\"center\"><b>Edit Contact</b></ion-label>\n    \n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/customerdetail/customerdetail-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/customerdetail/customerdetail-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CustomerdetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerdetailPageRoutingModule", function() { return CustomerdetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _customerdetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customerdetail.page */ "./src/app/customerdetail/customerdetail.page.ts");




const routes = [
    {
        path: '',
        component: _customerdetail_page__WEBPACK_IMPORTED_MODULE_3__["CustomerdetailPage"]
    }
];
let CustomerdetailPageRoutingModule = class CustomerdetailPageRoutingModule {
};
CustomerdetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CustomerdetailPageRoutingModule);



/***/ }),

/***/ "./src/app/customerdetail/customerdetail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/customerdetail/customerdetail.module.ts ***!
  \*********************************************************/
/*! exports provided: CustomerdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerdetailPageModule", function() { return CustomerdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _customerdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customerdetail-routing.module */ "./src/app/customerdetail/customerdetail-routing.module.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _customerdetail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customerdetail.page */ "./src/app/customerdetail/customerdetail.page.ts");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");









let CustomerdetailPageModule = class CustomerdetailPageModule {
};
CustomerdetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _customerdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomerdetailPageRoutingModule"]
        ],
        providers: [_ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_8__["SMS"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"]],
        declarations: [_customerdetail_page__WEBPACK_IMPORTED_MODULE_7__["CustomerdetailPage"]]
    })
], CustomerdetailPageModule);



/***/ }),

/***/ "./src/app/customerdetail/customerdetail.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/customerdetail/customerdetail.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".centerFixedImg {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 70px;\n  margin-top: 20px;\n  height: 70px;\n  margin-top: 15%;\n  border-radius: 42%;\n}\n\n.centerImg {\n  border: 1px solid #bdafaf;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100px;\n  margin-top: 20px;\n  height: 100px;\n  padding: 5px;\n  margin-top: 15%;\n  border-radius: 50%;\n}\n\n.inputCss {\n  color: black;\n  width: 70%;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin-top: 7px;\n}\n\n.BackButton {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 1.3rem;\n  width: 81%;\n  color: #ffffff;\n  font-weight: 700;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.editCss {\n  width: 50%;\n  margin-left: 25%;\n  margin-right: 25%;\n  background-color: #3255f3;\n  display: inline-block;\n  text-align: center;\n  padding: 11px;\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FycmF5cG9pbnRlci9EZXNrdG9wL3BldHJvbHB1bXBhcHAvc3JjL2FwcC9jdXN0b21lcmRldGFpbC9jdXN0b21lcmRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2N1c3RvbWVyZGV0YWlsL2N1c3RvbWVyZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLGVBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRko7O0FETUE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0QsaUJBQUE7RUFDQSxlQUFBO0FDSEg7O0FET0E7RUFDSSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNKSjs7QURPQTtFQUNJLFdBQUE7RUFFQSxZQUFBO0VBQ0EsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNMSjs7QURRQTtFQUNJLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNMSjs7QURRQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0YsYUFBQTtFQUNFLG1CQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lcmRldGFpbC9jdXN0b21lcmRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jZW50ZXJGaXhlZEltZyB7XG4gICAgLy8gYm9yZGVyIDogMXB4IHNvbGlkICNiZGFmYWY7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgXG4gICAgbWFyZ2luLXRvcDoxNSU7XG4gICAgYm9yZGVyLXJhZGl1czogNDIlO1xuICB9XG5cbiAgLmNlbnRlckltZyB7XG4gICAgYm9yZGVyIDogMXB4IHNvbGlkICNiZGFmYWY7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbi10b3A6MTUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG5cbi5pbnB1dENzc3tcbiAgICBjb2xvcjogYmxhY2s7IFxuICAgIHdpZHRoOiA3MCU7IFxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7IFxuICAgbWFyZ2luLXJpZ2h0OiAxNSU7XG4gICBtYXJnaW4tdG9wOjdweDtcbn1cblxuXG4uQmFja0J1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZycpIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uVGl0bGVIZWFkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gcGFkZGluZzogMCAxMHB4IDAgMTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuLlRpdGxlVGV4dHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgd2lkdGg6IDgxJTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5lZGl0Q3Nze1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDoyNSU7XG4gIG1hcmdpbi1yaWdodDoyNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjU1ZjM7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xucGFkZGluZzoxMXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufSIsIi5jZW50ZXJGaXhlZEltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNzBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBtYXJnaW4tdG9wOiAxNSU7XG4gIGJvcmRlci1yYWRpdXM6IDQyJTtcbn1cblxuLmNlbnRlckltZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZGFmYWY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLXRvcDogMTUlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5pbnB1dENzcyB7XG4gIGNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XG4gIG1hcmdpbi10b3A6IDdweDtcbn1cblxuLkJhY2tCdXR0b24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmdcIikgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLlRpdGxlSGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5UaXRsZVRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHdpZHRoOiA4MSU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZWRpdENzcyB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIG1hcmdpbi1yaWdodDogMjUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI1NWYzO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTFweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/customerdetail/customerdetail.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/customerdetail/customerdetail.page.ts ***!
  \*******************************************************/
/*! exports provided: CustomerdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerdetailPage", function() { return CustomerdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");






let CustomerdetailPage = class CustomerdetailPage {
    constructor(activatedRoute, router, callNumber, toast, sms) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.callNumber = callNumber;
        this.toast = toast;
        this.sms = sms;
        this.customerImage = "";
    }
    ngOnInit() {
        let getdetail = this.activatedRoute.snapshot.params['detailData'];
        let parseArray = JSON.parse(getdetail);
        if (parseArray.name != "") {
            this.customerName = parseArray.name;
        }
        else {
            this.customerName = "NA";
        }
        if (parseArray.mobile != "") {
            this.customerMobile = parseArray.mobile;
        }
        else {
            this.customerMobile = "NA";
        }
        if (parseArray.address != "") {
            this.customerAddress = parseArray.address;
        }
        else {
            this.customerAddress = "NA";
        }
        if (parseArray.email != "") {
            this.customerEmail = parseArray.email;
        }
        else {
            this.customerEmail = "NA";
        }
        this.customerImage = parseArray.imagepath;
        console.log("display detail data:" + JSON.parse(getdetail));
    }
    goBackword() {
        this.router.navigate(['sites']);
    }
    editDetails() {
        this.checkRecordStatus = "update";
        let detailCustomerdata = {
            "fname": this.customerName,
            "mobile": this.customerMobile,
            "address": this.customerAddress,
            "email": this.customerEmail,
            "checkstatus": this.checkRecordStatus
        };
        this.router.navigate(['/addcustomer', { detailCustomerdata: JSON.stringify(detailCustomerdata) }]);
    }
    makeCall() {
        if (this.customerMobile != "" || this.customerMobile != null || this.customerMobile != undefined) {
            this.callNumber.callNumber(this.customerMobile, true);
        }
        else {
            this.presentToast("You don''t have mobile number");
        }
    }
    sendMessage() {
        var options = {
            replaceLineBreaks: false,
            android: {
                intent: 'INTENT' // Opens Default sms app
                //intent: '' // Sends sms without opening default sms app
            }
        };
        this.sms.send(this.customerMobile, '', options)
            .then(() => {
            // alert("success");
        }, () => {
            // alert("failed");
        });
        // this.sms.send(this.customerMobile, 'Hello world!');
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
};
CustomerdetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__["CallNumber"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_5__["SMS"] }
];
CustomerdetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customerdetail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customerdetail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerdetail/customerdetail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customerdetail.page.scss */ "./src/app/customerdetail/customerdetail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__["CallNumber"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_5__["SMS"]])
], CustomerdetailPage);



/***/ })

}]);
//# sourceMappingURL=customerdetail-customerdetail-module-es2015.js.map