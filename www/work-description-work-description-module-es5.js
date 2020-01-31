function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["work-description-work-description-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/work-description/work-description.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/work-description/work-description.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWorkDescriptionWorkDescriptionPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title class=\"Padding0\" style=\"padding: 0 10px 0 10px !important;\">\n        <div class=\"TitleHeader\">\n          <div class=\"TitleText\">\n            <div style=\"width: 10%;\">\n            <button ion-button class=\"BackButton\" (click)=\"goBackword()\"></button>\n            <!-- <i class=\"material-icons\" style=\"color: white;\">\n              menu\n              </i> -->\n            </div>\n            <div style=\"width: 90%; overflow: hidden; text-overflow: ellipsis;\">\n            {{taskName}}\n          </div>\n          </div>\n          <!-- <div style=\"width: 10%;text-align: right;margin-left: 5px;\">\n            <button class=\"LogoutBtn\" (click)=\"logout()\">Logout</button>\n  \n          </div> -->\n        </div>\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n    <div class=\"MainContainer\">\n        <div class=\"search-filter-container\">\n            \n          <div class=\"SearchOption\"  style=\"width: 92%;\">\n            <div class=\"SearchDiv\">\n              <input class=\"valid\" type=\"text\" [(ngModel)]=\"search_text\" placeholder=\"Search\" name=\"name\" />\n          </div>\n          </div>\n         \n      \n         </div>\n         <div class=\"ListContainer\">\n      \n         <div class=\"ListItem\">\n           <div class=\"SingleListItem\">\n            <mat-card class=\"ListCard\" *ngFor=\"let task of all_subtasks |filter:search_text;let i = index\">\n            <div style=\"width: 100%;padding: 10px;\">\n\n              <div style=\"display: inline-flex;width: 100%;margin-bottom: 10px;\">\n                <div class=\"SiteName\" style=\"width: 50%;overflow: hidden;text-overflow: ellipsis;\">\n      \n                    <p style=\"margin: 0;\">{{task.name}}</p>\n          \n                  </div>\n                  <div style=\"width: 50%;text-align: right;\">\n                      <span *ngIf=\"task.status == 'NOT STARTED'\" style=\"color: darkred;\">{{task.status}}</span> \n                      <span *ngIf=\"task.status == 'IN PROCESS'\" style=\"color: orange;\">{{task.status}}</span> \n                      <span *ngIf=\"task.status == 'COMPLETED'\" style=\"color: green;\">{{task.status}}</span> \n                  </div>\n                </div>\n\n                <mat-form-field *ngIf=\"updateAccess == 1\">\n                    <mat-label>Update Status</mat-label>\n                    <mat-select [(ngModel)]=\"tempArray[i].status\">\n                      <mat-option *ngFor=\"let stat of status\" [value]=\"stat\" (click)=\"updateStatus(i)\">\n                        {{stat}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n\n                  <table *ngIf=\"task.logs.length != 0\">\n                      <tr>\n                        <th>Updated Date</th>\n                        <th>Updated By</th>\n                        <th>Status</th>\n                        \n                      </tr>\n                      <tr *ngFor=\"let lg of task.logs\">\n                        <td>{{lg.updatedAt | date: 'dd/MM/yyyy' }}</td>\n                        <td tooltip=\"lg.updatedBy\" style=\"width: 90px; overflow: hidden;text-overflow: ellipsis;\">{{lg.updatedBy}}</td>\n                        <td>\n                            <span *ngIf=\"lg.status == 'NOT STARTED'\" style=\"color: darkred;\">{{lg.status}}</span> \n                            <span *ngIf=\"lg.status == 'IN PROCESS'\" style=\"color: orange;\">{{lg.status}}</span> \n                            <span *ngIf=\"lg.status == 'COMPLETED'\" style=\"color: green;\">{{lg.status}}</span> \n                        </td>\n                       \n                      </tr>\n                      </table>\n\n                      <div style=\"width: 100%;text-align: left;\" *ngIf=\"task.logs.length != 0\">\n                      <button mat-raised-button class=\"ViewBtn\" (click)=\"viewDetails(task)\"><i class=\"material-icons\">\n                          remove_red_eye\n                          </i>View</button>\n                    </div>\n                  <!-- <p class=\"StatusClass\" *ngFor=\"let lg of task.logs\"> {{lg.updatedAt | date: 'dd/MM/yyyy' }} &nbsp;&nbsp; {{lg.updatedBy}} &nbsp;&nbsp; \n                    <span *ngIf=\"lg.status == 'Not Started'\" style=\"color: darkred;\">{{lg.status}}</span> \n                    <span *ngIf=\"lg.status == 'In Progress'\" style=\"color: orange;\">{{lg.status}}</span> \n                    <span *ngIf=\"lg.status == 'Completed'\" style=\"color: green;\">{{lg.status}}</span> \n\n                   </p> -->\n      \n              <!-- <div class=\"SiteName\">\n      \n                <p style=\"margin: 0;\">{{task.name}}</p>\n      \n              </div>\n              \n              <div *ngIf=\"task.description != null || task.description != undefined\" class=\"SiteDescription\">\n      \n                  <p style=\"margin: 0;\">{{task.description}}</p>\n        \n                </div> -->\n      \n            \n            </div>\n            </mat-card>\n      \n           </div>\n         </div>\n      \n      \n        </div>\n      </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/work-description/work-description-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/work-description/work-description-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: WorkDescriptionPageRoutingModule */

  /***/
  function srcAppWorkDescriptionWorkDescriptionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkDescriptionPageRoutingModule", function () {
      return WorkDescriptionPageRoutingModule;
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


    var _work_description_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./work-description.page */
    "./src/app/work-description/work-description.page.ts");

    var routes = [{
      path: '',
      component: _work_description_page__WEBPACK_IMPORTED_MODULE_3__["WorkDescriptionPage"]
    }];

    var WorkDescriptionPageRoutingModule = function WorkDescriptionPageRoutingModule() {
      _classCallCheck(this, WorkDescriptionPageRoutingModule);
    };

    WorkDescriptionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WorkDescriptionPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/work-description/work-description.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/work-description/work-description.module.ts ***!
    \*************************************************************/

  /*! exports provided: WorkDescriptionPageModule */

  /***/
  function srcAppWorkDescriptionWorkDescriptionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkDescriptionPageModule", function () {
      return WorkDescriptionPageModule;
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


    var _work_description_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./work-description-routing.module */
    "./src/app/work-description/work-description-routing.module.ts");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var _work_description_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./work-description.page */
    "./src/app/work-description/work-description.page.ts");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/ng2-search-filter.js");

    var WorkDescriptionPageModule = function WorkDescriptionPageModule() {
      _classCallCheck(this, WorkDescriptionPageModule);
    };

    WorkDescriptionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _work_description_routing_module__WEBPACK_IMPORTED_MODULE_5__["WorkDescriptionPageRoutingModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"]],
      declarations: [_work_description_page__WEBPACK_IMPORTED_MODULE_7__["WorkDescriptionPage"]]
    })], WorkDescriptionPageModule);
    /***/
  },

  /***/
  "./src/app/work-description/work-description.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/work-description/work-description.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWorkDescriptionWorkDescriptionPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 1.2rem;\n  width: 80%;\n  color: #ffffff;\n  font-weight: 700;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleSider {\n  display: inline-block;\n  text-align: right;\n  font-size: 1rem;\n  font-weight: 600;\n  width: 100%;\n}\n\n.BackButton {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.search-filter-container {\n  width: 100%;\n  height: 45px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 8px;\n}\n\n.SearchOption {\n  width: 90%;\n}\n\n.FilterOption {\n  width: 10%;\n}\n\n.SearchDiv {\n  width: 100%;\n  height: 100%;\n  margin: 0 4% 0 4%;\n}\n\ninput.valid {\n  /* border-color: #28a745; */\n  background-image: url('FilterSearch.png');\n  background-repeat: no-repeat;\n  background-size: 20px 20px;\n  background-position: 95% center;\n  height: 37px;\n  width: 100%;\n  padding-left: 20px;\n  /* padding-right: 20px; */\n  outline-width: 0;\n  border-width: 0;\n  font-size: 13px;\n  font-weight: 400;\n  background-color: #fff;\n  border-radius: 15px;\n  outline-color: white;\n}\n\n.MainContainer {\n  width: 100%;\n  background-color: #F1F4F8;\n  height: 100%;\n}\n\n.ListItem {\n  width: 100%;\n}\n\n.ListCard {\n  padding: 10px !important;\n  width: 92%;\n  margin: 4%;\n}\n\n.SingleListItem {\n  width: 100%;\n}\n\n.SiteName {\n  font-size: 1rem;\n  font-weight: 600;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.SiteDescription {\n  font-size: 0.8rem;\n  font-weight: 500;\n  font-family: \"Roboto\", sans-serif;\n  color: #535252;\n}\n\n.StatusClass {\n  font-size: 0.9rem;\n  font-weight: 400;\n  font-family: \"Roboto\", sans-serif;\n  color: #353434;\n}\n\ntable {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n  font-size: 0.8rem;\n}\n\ntd, th {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px;\n}\n\n.LogoutBtn {\n  background-color: transparent;\n  color: #fff;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 0.8px;\n  line-height: 19px;\n}\n\n.ViewBtn {\n  box-sizing: border-box;\n  height: 40px;\n  background-color: #3880ff;\n  color: #FFFFFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 0.8px;\n  line-height: 19px;\n  margin-top: 10px;\n  box-shadow: 0 4px 8px 2px #FFF3E0, 0 2px 2px 0 #FFF3E0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FycmF5cG9pbnRlci9EZXNrdG9wL3BldHJvbHB1bXBhcHAvc3JjL2FwcC93b3JrLWRlc2NyaXB0aW9uL3dvcmstZGVzY3JpcHRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC93b3JrLWRlc2NyaXB0aW9uL3dvcmstZGVzY3JpcHRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUVBLFlBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksMkJBQUE7RUFBQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFJQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7QUNGSjs7QURJQTtFQUNJLFVBQUE7QUNESjs7QURHQTtFQUNJLFVBQUE7QUNBSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBSUEsaUJBQUE7QUNGSjs7QURJQTtFQUNJLDJCQUFBO0VBRUEseUNBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNGSjs7QURJQztFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUVBLFlBQUE7QUNGTDs7QURJQztFQUNJLFdBQUE7QUNETDs7QURHQztFQUNJLHdCQUFBO0VBRUQsVUFBQTtFQUNBLFVBQUE7QUNESjs7QURHQztFQUNJLFdBQUE7QUNBTDs7QURJQztFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0FDREw7O0FER0M7RUFDRyxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0FDQUo7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQ0U7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0VKOztBRElBO0VBRUksNkJBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDRko7O0FES0U7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFJQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNEQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC93b3JrLWRlc2NyaXB0aW9uL3dvcmstZGVzY3JpcHRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlRpdGxlSGVhZGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cbi5UaXRsZVRleHR7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLlRpdGxlU2lkZXJ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246cmlnaHQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgd2lkdGg6IDEwMCU7XG5cbn1cbi5CYWNrQnV0dG9ue1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2JhY2tfd2hpdGUucG5nJykgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5zZWFyY2gtZmlsdGVyLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgLy8gcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNzMsIDE3MiwgMTcyKTtcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE3MywgMTcyLCAxNzIpO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xufVxuLlNlYXJjaE9wdGlvbntcbiAgICB3aWR0aDogOTAlO1xufVxuLkZpbHRlck9wdGlvbntcbiAgICB3aWR0aDogMTAlO1xufVxuLlNlYXJjaERpdntcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxOHB4O1xuICAgIC8vIHBhZGRpbmc6IDNweCAwIDNweCAwO1xuICAgIG1hcmdpbjogMCA0JSAwIDQlOztcbn1cbmlucHV0LnZhbGlkIHtcbiAgICAvKiBib3JkZXItY29sb3I6ICMyOGE3NDU7ICovXG4gICAgLy8gcGFkZGluZy1yaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9GaWx0ZXJTZWFyY2gucG5nJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5NSUgY2VudGVyO1xuICAgIGhlaWdodDogMzdweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgLyogcGFkZGluZy1yaWdodDogMjBweDsgKi9cbiAgICBvdXRsaW5lLXdpZHRoOiAwO1xuICAgIGJvcmRlci13aWR0aDogMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgb3V0bGluZS1jb2xvcjogd2hpdGU7XG4gfVxuIC5NYWluQ29udGFpbmVye1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjRGODtcbiAgICAvLyAgcGFkZGluZzogMTBweDtcbiAgICAgaGVpZ2h0OiAxMDAlO1xuIH1cbiAuTGlzdEl0ZW17XG4gICAgIHdpZHRoOiAxMDAlO1xuIH1cbiAuTGlzdENhcmR7XG4gICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgICAvLyAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB3aWR0aDogOTIlO1xuICAgIG1hcmdpbjogNCU7XG4gfVxuIC5TaW5nbGVMaXN0SXRlbXtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gIG1pbi1oZWlnaHQ6IDUwcHg7XG5cbiB9XG4gLlNpdGVOYW1le1xuICAgICBmb250LXNpemU6IDFyZW07XG4gICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyxzYW5zLXNlcmlmO1xuIH1cbiAuU2l0ZURlc2NyaXB0aW9ue1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHJnYig4MywgODIsIDgyKTtcbn1cbi5TdGF0dXNDbGFzc3tcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyxzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiByZ2IoNTMsIDUyLCA1Mik7XG59XG50YWJsZSB7XG4gICAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cbiAgXG4gIHRkLCB0aCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxuICBcbi8vICAgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xuLy8gICB9XG4uTG9nb3V0QnRue1xuIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjZmZmO1x0XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XHRcbiAgICBmb250LXNpemU6IDE1cHg7XHRcbiAgICBmb250LXdlaWdodDogNTAwO1x0XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1x0XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIH1cblxuICAuVmlld0J0bntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1x0XG4gICAgaGVpZ2h0OiA0MHB4O1x0XG4gICAgLy8gd2lkdGg6IDEzMXB4O1x0XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgI0ZGRkZGRjtcdFxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDI1cHg7XHRcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg4MGZmO1xuICAgIGNvbG9yOiAjRkZGRkZGO1x0XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XHRcbiAgICBmb250LXNpemU6IDE1cHg7XHRcbiAgICBmb250LXdlaWdodDogNTAwO1x0XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1x0XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMnB4ICNGRkYzRTAsIDAgMnB4IDJweCAwICNGRkYzRTA7XG59IiwiLlRpdGxlSGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5UaXRsZVRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHdpZHRoOiA4MCU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uVGl0bGVTaWRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5CYWNrQnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2JhY2tfd2hpdGUucG5nXCIpIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5zZWFyY2gtZmlsdGVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5TZWFyY2hPcHRpb24ge1xuICB3aWR0aDogOTAlO1xufVxuXG4uRmlsdGVyT3B0aW9uIHtcbiAgd2lkdGg6IDEwJTtcbn1cblxuLlNlYXJjaERpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMCA0JSAwIDQlO1xufVxuXG5pbnB1dC52YWxpZCB7XG4gIC8qIGJvcmRlci1jb2xvcjogIzI4YTc0NTsgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL0ZpbHRlclNlYXJjaC5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5NSUgY2VudGVyO1xuICBoZWlnaHQ6IDM3cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIC8qIHBhZGRpbmctcmlnaHQ6IDIwcHg7ICovXG4gIG91dGxpbmUtd2lkdGg6IDA7XG4gIGJvcmRlci13aWR0aDogMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBvdXRsaW5lLWNvbG9yOiB3aGl0ZTtcbn1cblxuLk1haW5Db250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjRGODtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uTGlzdEl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLkxpc3RDYXJkIHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogOTIlO1xuICBtYXJnaW46IDQlO1xufVxuXG4uU2luZ2xlTGlzdEl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLlNpdGVOYW1lIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLlNpdGVEZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM1MzUyNTI7XG59XG5cbi5TdGF0dXNDbGFzcyB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzNTM0MzQ7XG59XG5cbnRhYmxlIHtcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbnRkLCB0aCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLkxvZ291dEJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbn1cblxuLlZpZXdCdG4ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODgwZmY7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMnB4ICNGRkYzRTAsIDAgMnB4IDJweCAwICNGRkYzRTA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/work-description/work-description.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/work-description/work-description.page.ts ***!
    \***********************************************************/

  /*! exports provided: WorkDescriptionPage */

  /***/
  function srcAppWorkDescriptionWorkDescriptionPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkDescriptionPage", function () {
      return WorkDescriptionPage;
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


    var _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/loader/loader.service */
    "./src/app/services/loader/loader.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _confirmation_popup_confirmation_popup_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../confirmation-popup/confirmation-popup.page */
    "./src/app/confirmation-popup/confirmation-popup.page.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _work_details_work_details_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../work-details/work-details.page */
    "./src/app/work-details/work-details.page.ts");
    /* harmony import */


    var _services_networkproviderservices_networkproviderservice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../services/networkproviderservices/networkproviderservice.service */
    "./src/app/services/networkproviderservices/networkproviderservice.service.ts");

    var WorkDescriptionPage =
    /*#__PURE__*/
    function () {
      function WorkDescriptionPage(apiCall, router, activedRoute, loader, dialog, storage, network) {
        _classCallCheck(this, WorkDescriptionPage);

        this.apiCall = apiCall;
        this.router = router;
        this.activedRoute = activedRoute;
        this.loader = loader;
        this.dialog = dialog;
        this.storage = storage;
        this.network = network;
        this.all_subtasks = [];
        this.status = ['NOT STARTED', 'IN PROCESS', 'COMPLETED'];
        this.tempArray = [];
      }

      _createClass(WorkDescriptionPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.storage.get("cepl_user_data").then(function (data) {
            console.log(data);
            data = JSON.parse(data);
            _this.userName = data['name'];
          });
          var tmp = this.activedRoute.snapshot.params['siteId'];
          var ytr = this.activedRoute.snapshot.params['taskId'];
          var access = this.activedRoute.snapshot.params['updateAccess'];
          var name = this.activedRoute.snapshot.params['taskName'];
          this.taskId = ytr;
          this.taskName = name;
          this.siteId = tmp;
          this.updateAccess = parseInt(access);
          this.getTasks();
          this.getSubTasks();
        }
      }, {
        key: "getTasks",
        value: function getTasks() {
          var _this2 = this;

          this.loader.showBlockingLoaderAuth();
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].version + "sites/" + this.siteId + "/tasks/" + this.taskId;
          this.apiCall.get(url).subscribe(function (MyResponse) {
            console.log("My Response", MyResponse);
            _this2.taskName = MyResponse['result']['name'];

            _this2.loader.hideBlockingLoaderAuth();
          }, function (error) {
            _this2.network.CheckNetworkStatus();

            _this2.network.onPageLoadCheckInternet();

            _this2.loader.hideBlockingLoaderAuth(); // this.networkServices.checkInternetConnection();

          });
        }
      }, {
        key: "getSubTasks",
        value: function getSubTasks() {
          var _this3 = this;

          this.loader.showBlockingLoaderAuth();
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].version + "sites/" + this.siteId + "/tasks/" + this.taskId + "/subtasks?page=0&size=200";
          this.apiCall.get(url).subscribe(function (MyResponse) {
            console.log("My Response", MyResponse);
            _this3.all_subtasks = MyResponse['result']['list'];

            for (var i = 0; i < _this3.all_subtasks.length; i++) {
              _this3.tempArray.push({});
            }

            _this3.loader.hideBlockingLoaderAuth();
          }, function (error) {
            _this3.network.CheckNetworkStatus();

            _this3.network.onPageLoadCheckInternet();

            _this3.loader.hideBlockingLoaderAuth(); // this.networkServices.checkInternetConnection();

          });
        }
      }, {
        key: "updateStatus",
        value: function updateStatus(index) {
          console.log(this.tempArray[index]['status']);
          this.confirmation(index);
        }
      }, {
        key: "goBackword",
        value: function goBackword() {
          window.history.back();
        }
      }, {
        key: "confirmation",
        value: function confirmation(index) {
          var _this4 = this;

          var send_data = {};
          send_data['text'] = "Do you really want to update status ?";
          send_data['button2'] = "Cancel";
          send_data['button1'] = "Update";
          var dialogRef = this.dialog.open(_confirmation_popup_confirmation_popup_page__WEBPACK_IMPORTED_MODULE_7__["ConfirmationPopupPage"], {
            width: '450px',
            data: send_data
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log("result", result);

            if (result['is_success'] == 1) {
              // let msg = "Resetted Password Send Successfully";
              // this.presentToast(msg);
              console.log(_this4.userName);
              var pushlog = {};
              pushlog['status'] = _this4.tempArray[index]['status'];
              pushlog['updatedBy'] = _this4.userName;
              pushlog['updatedAt'] = new Date();

              _this4.all_subtasks[index]['logs'].push(pushlog);

              var prepared_data = {};
              prepared_data['name'] = _this4.all_subtasks[index]['name'];
              prepared_data['description'] = _this4.all_subtasks[index]['description'] == null || _this4.all_subtasks[index]['description'] == undefined ? " " : _this4.all_subtasks[index]['description'];
              prepared_data['status'] = _this4.tempArray[index]['status'];
              prepared_data['logs'] = _this4.all_subtasks[index]['logs'];
              console.log("prepared data", prepared_data);

              _this4.loader.showBlockingLoaderAuth();

              var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].version + "sites/" + _this4.siteId + "/tasks/" + _this4.taskId + "/subtasks/" + _this4.all_subtasks[index]['id'];

              _this4.apiCall.put(url, prepared_data).subscribe(function (MyResponse) {
                console.log("My Response", MyResponse);
                _this4.tempArray[index]['status'] = null;
                _this4.all_subtasks[index] = MyResponse['result'][0];

                _this4.loader.hideBlockingLoaderAuth();
              }, function (error) {
                _this4.network.CheckNetworkStatus();

                _this4.network.onPageLoadCheckInternet();

                _this4.loader.hideBlockingLoaderAuth(); // this.networkServices.checkInternetConnection();

              });
            }
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this5 = this;

          var send_data = {};
          send_data['text'] = "Do you really want to logout ?";
          send_data['button2'] = "Cancel";
          send_data['button1'] = "Logout";
          var dialogRef = this.dialog.open(_confirmation_popup_confirmation_popup_page__WEBPACK_IMPORTED_MODULE_7__["ConfirmationPopupPage"], {
            width: '450px',
            data: send_data
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log("result", result);

            if (result['is_success'] == 1) {
              _this5.router.navigate(['login']);
            }
          });
        }
      }, {
        key: "viewDetails",
        value: function viewDetails(obj) {
          console.log("array", obj);
          var send_data = {};
          send_data['data'] = obj;
          var dialogRef = this.dialog.open(_work_details_work_details_page__WEBPACK_IMPORTED_MODULE_9__["WorkDetailsPage"], {
            width: '450px',
            data: send_data
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log("result", result);

            if (result['is_success'] == 1) {// this.router.navigate(['login'])
            }
          });
        }
      }]);

      return WorkDescriptionPage;
    }();

    WorkDescriptionPage.ctorParameters = function () {
      return [{
        type: _services_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
      }, {
        type: _services_networkproviderservices_networkproviderservice_service__WEBPACK_IMPORTED_MODULE_10__["NetworkproviderserviceService"]
      }];
    };

    WorkDescriptionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-work-description',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./work-description.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/work-description/work-description.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./work-description.page.scss */
      "./src/app/work-description/work-description.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_call_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"], _services_networkproviderservices_networkproviderservice_service__WEBPACK_IMPORTED_MODULE_10__["NetworkproviderserviceService"]])], WorkDescriptionPage);
    /***/
  }
}]);
//# sourceMappingURL=work-description-work-description-module-es5.js.map