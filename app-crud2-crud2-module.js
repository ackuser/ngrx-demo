(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-crud2-crud2-module"],{

/***/ "./src/app/crud2/crud2-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/crud2/crud2-routing.module.ts ***!
  \***********************************************/
/*! exports provided: Crud2RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Crud2RoutingModule", function() { return Crud2RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_crud2_crud2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/crud2/crud2.component */ "./src/app/crud2/crud2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _app_crud2_crud2_component__WEBPACK_IMPORTED_MODULE_2__["Crud2Component"]
    }];
var Crud2RoutingModule = /** @class */ (function () {
    function Crud2RoutingModule() {
    }
    Crud2RoutingModule.components = [
        _app_crud2_crud2_component__WEBPACK_IMPORTED_MODULE_2__["Crud2Component"]
    ];
    Crud2RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], Crud2RoutingModule);
    return Crud2RoutingModule;
}());



/***/ }),

/***/ "./src/app/crud2/crud2.component.css":
/*!*******************************************!*\
  !*** ./src/app/crud2/crud2.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3J1ZDIvY3J1ZDIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBOEUiLCJmaWxlIjoic3JjL2FwcC9jcnVkMi9jcnVkMi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG4iXX0= */"

/***/ }),

/***/ "./src/app/crud2/crud2.component.html":
/*!********************************************!*\
  !*** ./src/app/crud2/crud2.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h3>Demo 7 - @ngrx/entity CRUD with Facade Pattern</h3>\n</div>\n<ng-container *ngIf=\"isLoading$ | async\">\n  <div class=\"loader\"></div>\n</ng-container>\n<div class=\"main\">\n  <div class='formbg'>\n    <app-employee-form\n    [employeeToEdit] = \"employeeToEdit\"\n    [isEditing]=\"isEditing\"\n    (cancel) = \"onCancel($event)\"\n    (addEmployee)=\"onAddEmployee($event)\"\n    (updateEmployee)=\"onUpdateEmployee($event)\" >\n    </app-employee-form>\n  </div>\n  <div class='tablebg'>\n    <app-employee-table\n    [employees]=\"employees$ | async\"\n    (editEmployee)=\"onEditEmployee($event)\"\n    (deleteEmployee)=\"onDeleteEmployee($event)\" >\n    </app-employee-table>\n  </div>\n</div>\n<div *ngIf=\"errorMessage$ | async\" class=\"alert-error\">\n  {{ errorMessage$ | async }}\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/crud2/crud2.component.ts":
/*!******************************************!*\
  !*** ./src/app/crud2/crud2.component.ts ***!
  \******************************************/
/*! exports provided: Crud2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Crud2Component", function() { return Crud2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_crud2_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/crud2/store */ "./src/app/crud2/store/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Crud2Component = /** @class */ (function () {
    function Crud2Component(crud2StoreFacade) {
        this.crud2StoreFacade = crud2StoreFacade;
        this.isEditing = false;
    }
    Crud2Component.prototype.ngOnInit = function () {
        this.crud2StoreFacade.loadAllEmployee();
        this.isLoading$ = this.crud2StoreFacade.isLoading$;
        this.employees$ = this.crud2StoreFacade.employees$;
        this.errorMessage$ = this.crud2StoreFacade.errorMessage$;
    };
    Crud2Component.prototype.onAddEmployee = function (employee) {
        this.crud2StoreFacade.addEmployee(employee);
    };
    Crud2Component.prototype.onUpdateEmployee = function (employee) {
        this.crud2StoreFacade.updateEmployee(employee);
    };
    Crud2Component.prototype.onEditEmployee = function (employee) {
        this.isEditing = true;
        this.employeeToEdit = employee;
    };
    Crud2Component.prototype.onDeleteEmployee = function (id) {
        this.crud2StoreFacade.deleteEmployee(id);
    };
    Crud2Component.prototype.onCancel = function (isEdit) {
        this.isEditing = isEdit;
        this.employeeToEdit = null;
    };
    Crud2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crud2',
            template: __webpack_require__(/*! ./crud2.component.html */ "./src/app/crud2/crud2.component.html"),
            styles: [__webpack_require__(/*! ./crud2.component.css */ "./src/app/crud2/crud2.component.css")]
        }),
        __metadata("design:paramtypes", [_app_crud2_store__WEBPACK_IMPORTED_MODULE_1__["Crud2StoreFacade"]])
    ], Crud2Component);
    return Crud2Component;
}());



/***/ }),

/***/ "./src/app/crud2/crud2.module.ts":
/*!***************************************!*\
  !*** ./src/app/crud2/crud2.module.ts ***!
  \***************************************/
/*! exports provided: Crud2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Crud2Module", function() { return Crud2Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_crud2_crud2_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/crud2/crud2-routing.module */ "./src/app/crud2/crud2-routing.module.ts");
/* harmony import */ var _app_crud2_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/crud2/store */ "./src/app/crud2/store/index.ts");
/* harmony import */ var _app_in_memory_api_in_memory_api_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/in-memory-api/in-memory-api.module */ "./src/app/in-memory-api/in-memory-api.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var Crud2Module = /** @class */ (function () {
    function Crud2Module() {
    }
    Crud2Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _app_in_memory_api_in_memory_api_module__WEBPACK_IMPORTED_MODULE_3__["InMemoryApiModule"],
                _app_crud2_store__WEBPACK_IMPORTED_MODULE_2__["Crud2StoreModule"],
                _app_crud2_crud2_routing_module__WEBPACK_IMPORTED_MODULE_1__["Crud2RoutingModule"]
            ],
            declarations: [_app_crud2_crud2_routing_module__WEBPACK_IMPORTED_MODULE_1__["Crud2RoutingModule"].components]
        })
    ], Crud2Module);
    return Crud2Module;
}());



/***/ }),

/***/ "./src/app/crud2/store/crud2-state.interface.ts":
/*!******************************************************!*\
  !*** ./src/app/crud2/store/crud2-state.interface.ts ***!
  \******************************************************/
/*! exports provided: sortByName, crudEntityadapter, initialState, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByName", function() { return sortByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crudEntityadapter", function() { return crudEntityadapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
var _a;

// Note: Since  primary key is 'id', Method to select primary key is not needed
// unlike we did it for demo 5
/* A compare function used to sort the collection. The comparer function
is only needed if the collection needs to be sorted before being displayed.
 */
function sortByName(a, b) {
    return a.name.localeCompare(b.name);
}
/*
Setting to false to leave the collection unsorted, will sorted by id which is more performant
during CRUD operations.
*/
var crudEntityadapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])({
    sortComparer: sortByName
    // sortComparer: false
});
var initialState = crudEntityadapter.getInitialState({
    isLoading: false,
    error: null
});
// Out-of-the-box, created entity adapter provides built-in default selectors
var selectIds = (_a = crudEntityadapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


/***/ }),

/***/ "./src/app/crud2/store/crud2-store.facade.ts":
/*!***************************************************!*\
  !*** ./src/app/crud2/store/crud2-store.facade.ts ***!
  \***************************************************/
/*! exports provided: Crud2StoreFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Crud2StoreFacade", function() { return Crud2StoreFacade; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_crud2_store_crud2_store_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/crud2/store/crud2-store.module */ "./src/app/crud2/store/crud2-store.module.ts");
/* harmony import */ var _app_crud2_store_crud2_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/crud2/store/crud2.actions */ "./src/app/crud2/store/crud2.actions.ts");
/* harmony import */ var _app_crud2_store_crud2_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/crud2/store/crud2.selectors */ "./src/app/crud2/store/crud2.selectors.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Crud2StoreFacade = /** @class */ (function () {
    function Crud2StoreFacade(store$) {
        this.store$ = store$;
        // NGRX Observable Select Queries available for consumption by components
        this.isLoading$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_app_crud2_store_crud2_selectors__WEBPACK_IMPORTED_MODULE_3__["selectCrud2LoadingStatus"]));
        this.employees$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_app_crud2_store_crud2_selectors__WEBPACK_IMPORTED_MODULE_3__["selectCrud2AllEmpolyees"]));
        this.errorMessage$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_app_crud2_store_crud2_selectors__WEBPACK_IMPORTED_MODULE_3__["selectCrud2Error"]));
    }
    // NGRX Action dispatchers available for components to dispatch actions
    Crud2StoreFacade.prototype.loadAllEmployee = function () {
        this.store$.dispatch(new _app_crud2_store_crud2_actions__WEBPACK_IMPORTED_MODULE_2__["CRUD2EmployeeLoadRequest"]());
    };
    Crud2StoreFacade.prototype.addEmployee = function (employee) {
        employee.id = null;
        this.store$.dispatch(new _app_crud2_store_crud2_actions__WEBPACK_IMPORTED_MODULE_2__["CRUD2EmployeeCreateRequest"](employee));
    };
    Crud2StoreFacade.prototype.updateEmployee = function (employee) {
        this.store$.dispatch(new _app_crud2_store_crud2_actions__WEBPACK_IMPORTED_MODULE_2__["CRUD2EmployeeUpdateRequest"](employee));
    };
    Crud2StoreFacade.prototype.deleteEmployee = function (id) {
        this.store$.dispatch(new _app_crud2_store_crud2_actions__WEBPACK_IMPORTED_MODULE_2__["CRUD2EmployeeDeleteRequest"](id));
    };
    Crud2StoreFacade = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: _app_crud2_store_crud2_store_module__WEBPACK_IMPORTED_MODULE_1__["Crud2StoreModule"] }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], Crud2StoreFacade);
    return Crud2StoreFacade;
}());



/***/ }),

/***/ "./src/app/crud2/store/crud2-store.module.ts":
/*!***************************************************!*\
  !*** ./src/app/crud2/store/crud2-store.module.ts ***!
  \***************************************************/
/*! exports provided: Crud2StoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Crud2StoreModule", function() { return Crud2StoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_crud2_store_crud2_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/crud2/store/crud2.effects */ "./src/app/crud2/store/crud2.effects.ts");
/* harmony import */ var _app_crud2_store_crud2_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/crud2/store/crud2.reducer */ "./src/app/crud2/store/crud2.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var Crud2StoreModule = /** @class */ (function () {
    function Crud2StoreModule() {
    }
    Crud2StoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature('crud2', _app_crud2_store_crud2_reducer__WEBPACK_IMPORTED_MODULE_2__["crud2Reducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([_app_crud2_store_crud2_effects__WEBPACK_IMPORTED_MODULE_1__["Crud2Effects"]]),
            ]
        })
    ], Crud2StoreModule);
    return Crud2StoreModule;
}());



/***/ }),

/***/ "./src/app/crud2/store/crud2.actions.ts":
/*!**********************************************!*\
  !*** ./src/app/crud2/store/crud2.actions.ts ***!
  \**********************************************/
/*! exports provided: ActionTypes, CRUD2EmployeeLoadRequest, CRUD2EmployeeLoadSuccess, CRUD2EmployeeCreateRequest, CRUD2EmployeeUpdateRequest, CRUD2EmployeeCreateOrUpdateSuccess, CRUD2EmployeeDeleteRequest, CRUD2EmployeeDeleteSuccess, CRUD2EmployeeFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRUD2EmployeeLoadRequest", function() { return CRUD2EmployeeLoadRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRUD2EmployeeLoadSuccess", function() { return CRUD2EmployeeLoadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRUD2EmployeeCreateRequest", function() { return CRUD2EmployeeCreateRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRUD2EmployeeUpdateRequest", function() { return CRUD2EmployeeUpdateRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRUD2EmployeeCreateOrUpdateSuccess", function() { return CRUD2EmployeeCreateOrUpdateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRUD2EmployeeDeleteRequest", function() { return CRUD2EmployeeDeleteRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRUD2EmployeeDeleteSuccess", function() { return CRUD2EmployeeDeleteSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRUD2EmployeeFailure", function() { return CRUD2EmployeeFailure; });
/* harmony import */ var _app_root_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/root-store */ "./src/app/root-store/index.ts");

// TypeScript enum’s are immutable
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["CRUD2_EMPLOYEE_LOAD_REQUEST"] = "[CRUD2 Page] Load Employee Request";
    ActionTypes["CRUD2_EMPLOYEE_LOAD_SUCCESS"] = "[CRUD2 Page] Load Employee Success";
    ActionTypes["CRUD2_EMPLOYEE_CREATE_REQUEST"] = "[CRUD2 Page] Create Employee Request";
    ActionTypes["CRUD2_EMPLOYEE_UPDATE_REQUEST"] = "[CRUD2 Page] Update Employee Request";
    ActionTypes["CRUD2_EMPLOYEE_CREATE_OR_UPDATE_SUCCESS"] = "[CRUD2 Page] Create or Update Employee Success";
    ActionTypes["CRUD2_EMPLOYEE_DELETE_REQUEST"] = "[CRUD2 Page] Delete Employee Request";
    ActionTypes["CRUD2_EMPLOYEE_DELETE_SUCCESS"] = "[CRUD2 Page] Delete Employee Success";
    ActionTypes["CRUD2_EMPLOYEE_FAILURE"] = "[CRUD2 Page] Employee Failure";
})(ActionTypes || (ActionTypes = {}));
// To ensure NgRX actions have unique names across the application.
// This prevents any duplicate actions being dispatched.
Object(_app_root_store__WEBPACK_IMPORTED_MODULE_0__["isActionNameUnique"])(ActionTypes);
var CRUD2EmployeeLoadRequest = /** @class */ (function () {
    function CRUD2EmployeeLoadRequest() {
        this.type = ActionTypes.CRUD2_EMPLOYEE_LOAD_REQUEST;
    }
    return CRUD2EmployeeLoadRequest;
}());

var CRUD2EmployeeLoadSuccess = /** @class */ (function () {
    function CRUD2EmployeeLoadSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.CRUD2_EMPLOYEE_LOAD_SUCCESS;
    }
    return CRUD2EmployeeLoadSuccess;
}());

var CRUD2EmployeeCreateRequest = /** @class */ (function () {
    function CRUD2EmployeeCreateRequest(payload) {
        this.payload = payload;
        this.type = ActionTypes.CRUD2_EMPLOYEE_CREATE_REQUEST;
    }
    return CRUD2EmployeeCreateRequest;
}());

var CRUD2EmployeeUpdateRequest = /** @class */ (function () {
    function CRUD2EmployeeUpdateRequest(payload) {
        this.payload = payload;
        this.type = ActionTypes.CRUD2_EMPLOYEE_UPDATE_REQUEST;
    }
    return CRUD2EmployeeUpdateRequest;
}());

var CRUD2EmployeeCreateOrUpdateSuccess = /** @class */ (function () {
    function CRUD2EmployeeCreateOrUpdateSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.CRUD2_EMPLOYEE_CREATE_OR_UPDATE_SUCCESS;
    }
    return CRUD2EmployeeCreateOrUpdateSuccess;
}());

var CRUD2EmployeeDeleteRequest = /** @class */ (function () {
    function CRUD2EmployeeDeleteRequest(payload) {
        this.payload = payload;
        this.type = ActionTypes.CRUD2_EMPLOYEE_DELETE_REQUEST;
    }
    return CRUD2EmployeeDeleteRequest;
}());

var CRUD2EmployeeDeleteSuccess = /** @class */ (function () {
    function CRUD2EmployeeDeleteSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.CRUD2_EMPLOYEE_DELETE_SUCCESS;
    }
    return CRUD2EmployeeDeleteSuccess;
}());

var CRUD2EmployeeFailure = /** @class */ (function () {
    function CRUD2EmployeeFailure(payload) {
        this.payload = payload;
        this.type = ActionTypes.CRUD2_EMPLOYEE_FAILURE;
    }
    return CRUD2EmployeeFailure;
}());



/***/ }),

/***/ "./src/app/crud2/store/crud2.effects.ts":
/*!**********************************************!*\
  !*** ./src/app/crud2/store/crud2.effects.ts ***!
  \**********************************************/
/*! exports provided: Crud2Effects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Crud2Effects", function() { return Crud2Effects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_crud2_store_crud2_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/crud2/store/crud2.actions */ "./src/app/crud2/store/crud2.actions.ts");
/* harmony import */ var _app_in_memory_api_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/in-memory-api/employee.service */ "./src/app/in-memory-api/employee.service.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Crud2Effects = /** @class */ (function () {
    function Crud2Effects(employeeService, actions$) {
        var _this = this;
        this.employeeService = employeeService;
        this.actions$ = actions$;
        this.loadAllEmployeeEffects$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_app_crud2_store_crud2_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].CRUD2_EMPLOYEE_LOAD_REQUEST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return _this.employeeService.getEmployees().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (employees) { return (new _app_crud2_store_crud2_actions__WEBPACK_IMPORTED_MODULE_1__["CRUD2EmployeeLoadSuccess"](employees)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _app_crud2_store_crud2_actions__WEBPACK_IMPORTED_MODULE_1__["CRUD2EmployeeFailure"](error)); }));
        }));
        /* Except GET, for others POST,DELET, UPADTE always use concatMap
         concatMap maintains order in which request comes , queue the request and
         returns the response in order it received whereas mergeMap does n't
         maintain order. Switch will cancel the previous request , takes only
         the latest one, switchMap is safe only for GET method. */
        this.createEmployeeEffects$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_app_crud2_store_crud2_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].CRUD2_EMPLOYEE_CREATE_REQUEST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (employee) {
            return _this.employeeService.createEmployee(employee).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (responseEmployee) { return (new _app_crud2_store_crud2_actions__WEBPACK_IMPORTED_MODULE_1__["CRUD2EmployeeCreateOrUpdateSuccess"](responseEmployee)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _app_crud2_store_crud2_actions__WEBPACK_IMPORTED_MODULE_1__["CRUD2EmployeeFailure"](error)); }));
        }));
        this.updateEmployeeEffects$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_app_crud2_store_crud2_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].CRUD2_EMPLOYEE_UPDATE_REQUEST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (employee) {
            return _this.employeeService.updateEmployee(employee).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return (new _app_crud2_store_crud2_actions__WEBPACK_IMPORTED_MODULE_1__["CRUD2EmployeeCreateOrUpdateSuccess"](employee)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _app_crud2_store_crud2_actions__WEBPACK_IMPORTED_MODULE_1__["CRUD2EmployeeFailure"](error)); }));
        }));
        this.deleteEmployeeEffects$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_app_crud2_store_crud2_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].CRUD2_EMPLOYEE_DELETE_REQUEST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (id) {
            return _this.employeeService.removeEmployee(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return (new _app_crud2_store_crud2_actions__WEBPACK_IMPORTED_MODULE_1__["CRUD2EmployeeDeleteSuccess"](id)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _app_crud2_store_crud2_actions__WEBPACK_IMPORTED_MODULE_1__["CRUD2EmployeeFailure"](error)); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], Crud2Effects.prototype, "loadAllEmployeeEffects$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], Crud2Effects.prototype, "createEmployeeEffects$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], Crud2Effects.prototype, "updateEmployeeEffects$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], Crud2Effects.prototype, "deleteEmployeeEffects$", void 0);
    Crud2Effects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_app_in_memory_api_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]])
    ], Crud2Effects);
    return Crud2Effects;
}());



/***/ }),

/***/ "./src/app/crud2/store/crud2.reducer.ts":
/*!**********************************************!*\
  !*** ./src/app/crud2/store/crud2.reducer.ts ***!
  \**********************************************/
/*! exports provided: crud2Reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crud2Reducer", function() { return crud2Reducer; });
/* harmony import */ var _app_crud2_store_crud2_state_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/crud2/store/crud2-state.interface */ "./src/app/crud2/store/crud2-state.interface.ts");
/* harmony import */ var _app_crud2_store_crud2_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/crud2/store/crud2.actions */ "./src/app/crud2/store/crud2.actions.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


function crud2Reducer(state, action) {
    if (state === void 0) { state = _app_crud2_store_crud2_state_interface__WEBPACK_IMPORTED_MODULE_0__["initialState"]; }
    switch (action.type) {
        case _app_crud2_store_crud2_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].CRUD2_EMPLOYEE_LOAD_REQUEST:
        case _app_crud2_store_crud2_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].CRUD2_EMPLOYEE_CREATE_REQUEST:
        case _app_crud2_store_crud2_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].CRUD2_EMPLOYEE_UPDATE_REQUEST:
        case _app_crud2_store_crud2_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].CRUD2_EMPLOYEE_DELETE_REQUEST: {
            return __assign({}, state, { isLoading: true, error: null });
        }
        case _app_crud2_store_crud2_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].CRUD2_EMPLOYEE_LOAD_SUCCESS: {
            return _app_crud2_store_crud2_state_interface__WEBPACK_IMPORTED_MODULE_0__["crudEntityadapter"].addAll(action.payload, __assign({}, state, { isLoading: false, error: null }));
        }
        case _app_crud2_store_crud2_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].CRUD2_EMPLOYEE_CREATE_OR_UPDATE_SUCCESS: {
            return _app_crud2_store_crud2_state_interface__WEBPACK_IMPORTED_MODULE_0__["crudEntityadapter"].upsertOne(action.payload, __assign({}, state, { isLoading: false, error: null }));
        }
        case _app_crud2_store_crud2_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].CRUD2_EMPLOYEE_DELETE_SUCCESS: {
            return _app_crud2_store_crud2_state_interface__WEBPACK_IMPORTED_MODULE_0__["crudEntityadapter"].removeOne(action.payload, __assign({}, state, { isLoading: false, error: null }));
        }
        case _app_crud2_store_crud2_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].CRUD2_EMPLOYEE_FAILURE:
            return __assign({}, state, { isLoading: false, error: action.payload });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/crud2/store/crud2.selectors.ts":
/*!************************************************!*\
  !*** ./src/app/crud2/store/crud2.selectors.ts ***!
  \************************************************/
/*! exports provided: selectCrud2Error, selectCrud2LoadingStatus, selectCrud2AllEmpolyees */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCrud2Error", function() { return selectCrud2Error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCrud2LoadingStatus", function() { return selectCrud2LoadingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCrud2AllEmpolyees", function() { return selectCrud2AllEmpolyees; });
/* harmony import */ var _app_crud2_store_crud2_state_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/crud2/store/crud2-state.interface */ "./src/app/crud2/store/crud2-state.interface.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


// Selector functions
var selectCrud2State = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('crud2');
var selectCrud2Error = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectCrud2State, function (state) { return state.error; });
var selectCrud2LoadingStatus = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectCrud2State, function (state) { return state.isLoading; });
// Create the default selectors
var selectCrud2AllEmpolyees = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectCrud2State, 
// using created entity adapter's built-in selectors
_app_crud2_store_crud2_state_interface__WEBPACK_IMPORTED_MODULE_0__["selectAll"]);


/***/ }),

/***/ "./src/app/crud2/store/index.ts":
/*!**************************************!*\
  !*** ./src/app/crud2/store/index.ts ***!
  \**************************************/
/*! exports provided: Crud2StoreModule, Crud2StoreFacade, crud2Selectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_crud2_store_crud2_store_facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/crud2/store/crud2-store.facade */ "./src/app/crud2/store/crud2-store.facade.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Crud2StoreFacade", function() { return _app_crud2_store_crud2_store_facade__WEBPACK_IMPORTED_MODULE_0__["Crud2StoreFacade"]; });

/* harmony import */ var _app_crud2_store_crud2_store_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/crud2/store/crud2-store.module */ "./src/app/crud2/store/crud2-store.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Crud2StoreModule", function() { return _app_crud2_store_crud2_store_module__WEBPACK_IMPORTED_MODULE_1__["Crud2StoreModule"]; });

/* harmony import */ var _app_crud2_store_crud2_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/crud2/store/crud2.selectors */ "./src/app/crud2/store/crud2.selectors.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "crud2Selectors", function() { return _app_crud2_store_crud2_selectors__WEBPACK_IMPORTED_MODULE_2__; });






/***/ })

}]);
//# sourceMappingURL=app-crud2-crud2-module.js.map