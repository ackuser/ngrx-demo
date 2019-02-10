(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-crud-crud-module"],{

/***/ "./src/app/crud/crud-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/crud/crud-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CrudRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudRoutingModule", function() { return CrudRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_crud_crud_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/crud/crud.component */ "./src/app/crud/crud.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _app_crud_crud_component__WEBPACK_IMPORTED_MODULE_2__["CrudComponent"]
    }];
var CrudRoutingModule = /** @class */ (function () {
    function CrudRoutingModule() {
    }
    CrudRoutingModule.components = [
        _app_crud_crud_component__WEBPACK_IMPORTED_MODULE_2__["CrudComponent"]
    ];
    CrudRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CrudRoutingModule);
    return CrudRoutingModule;
}());



/***/ }),

/***/ "./src/app/crud/crud.component.css":
/*!*****************************************!*\
  !*** ./src/app/crud/crud.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3J1ZC9jcnVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQThFIiwiZmlsZSI6InNyYy9hcHAvY3J1ZC9jcnVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/crud/crud.component.html":
/*!******************************************!*\
  !*** ./src/app/crud/crud.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h3>Demo 6 - CRUD Operations using @ngrx/entity</h3>\n</div>\n<ng-container *ngIf=\"isLoading$ | async\">\n  <div class=\"loader\"></div>\n</ng-container>\n<div class=\"main\">\n  <div class='formbg'>\n    <app-employee-form\n    [employeeToEdit] = \"employeeToEdit\"\n    [isEditing]=\"isEditing\"\n    (cancel) = \"onCancel($event)\"\n    (addEmployee)=\"onAddEmployee($event)\"\n    (updateEmployee)=\"onUpdateEmployee($event)\" >\n    </app-employee-form>\n  </div>\n  <div class='tablebg'>\n    <app-employee-table\n    [employees]=\"employees$ | async\"\n    (editEmployee)=\"onEditEmployee($event)\"\n    (deleteEmployee)=\"onDeleteEmployee($event)\" >\n    </app-employee-table>\n  </div>\n</div>\n<div *ngIf=\"errorMessage$ | async\" class=\"alert-error\">\n  {{ errorMessage$ | async }}\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/crud/crud.component.ts":
/*!****************************************!*\
  !*** ./src/app/crud/crud.component.ts ***!
  \****************************************/
/*! exports provided: CrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudComponent", function() { return CrudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_crud_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/crud/store */ "./src/app/crud/store/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CrudComponent = /** @class */ (function () {
    function CrudComponent(store$) {
        this.store$ = store$;
        this.isEditing = false;
    }
    CrudComponent.prototype.ngOnInit = function () {
        this.store$.dispatch(new _app_crud_store__WEBPACK_IMPORTED_MODULE_1__["CrudStoreActions"].CRUDEmployeeLoadRequest());
        this.isLoading$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_app_crud_store__WEBPACK_IMPORTED_MODULE_1__["CrudStoreSelectors"].selectCrudLoadingStatus));
        this.employees$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_app_crud_store__WEBPACK_IMPORTED_MODULE_1__["CrudStoreSelectors"].selectCrudAllEmpolyees));
        this.errorMessage$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_app_crud_store__WEBPACK_IMPORTED_MODULE_1__["CrudStoreSelectors"].selectCrudError));
    };
    CrudComponent.prototype.onAddEmployee = function (employee) {
        employee.id = null;
        this.store$.dispatch(new _app_crud_store__WEBPACK_IMPORTED_MODULE_1__["CrudStoreActions"].CRUDEmployeeCreateRequest(employee));
    };
    CrudComponent.prototype.onUpdateEmployee = function (employee) {
        this.store$.dispatch(new _app_crud_store__WEBPACK_IMPORTED_MODULE_1__["CrudStoreActions"].CRUDEmployeeUpdateRequest(employee));
    };
    CrudComponent.prototype.onEditEmployee = function (employee) {
        this.isEditing = true;
        this.employeeToEdit = employee;
    };
    CrudComponent.prototype.onDeleteEmployee = function (id) {
        this.store$.dispatch(new _app_crud_store__WEBPACK_IMPORTED_MODULE_1__["CrudStoreActions"].CRUDEmployeeDeleteRequest(id));
    };
    CrudComponent.prototype.onCancel = function (isEdit) {
        this.isEditing = isEdit;
        this.employeeToEdit = null;
    };
    CrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crud',
            template: __webpack_require__(/*! ./crud.component.html */ "./src/app/crud/crud.component.html"),
            styles: [__webpack_require__(/*! ./crud.component.css */ "./src/app/crud/crud.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], CrudComponent);
    return CrudComponent;
}());



/***/ }),

/***/ "./src/app/crud/crud.module.ts":
/*!*************************************!*\
  !*** ./src/app/crud/crud.module.ts ***!
  \*************************************/
/*! exports provided: CrudModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudModule", function() { return CrudModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_crud_crud_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/crud/crud-routing.module */ "./src/app/crud/crud-routing.module.ts");
/* harmony import */ var _app_crud_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/crud/store */ "./src/app/crud/store/index.ts");
/* harmony import */ var _app_in_memory_api_in_memory_api_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/in-memory-api/in-memory-api.module */ "./src/app/in-memory-api/in-memory-api.module.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CrudModule = /** @class */ (function () {
    function CrudModule() {
    }
    CrudModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _app_in_memory_api_in_memory_api_module__WEBPACK_IMPORTED_MODULE_3__["InMemoryApiModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature('crud', _app_crud_store__WEBPACK_IMPORTED_MODULE_2__["crudReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_app_crud_store__WEBPACK_IMPORTED_MODULE_2__["CrudEffects"]]),
                _app_crud_crud_routing_module__WEBPACK_IMPORTED_MODULE_1__["CrudRoutingModule"]
            ],
            declarations: [_app_crud_crud_routing_module__WEBPACK_IMPORTED_MODULE_1__["CrudRoutingModule"].components]
        })
    ], CrudModule);
    return CrudModule;
}());



/***/ }),

/***/ "./src/app/crud/store/crud-state.interface.ts":
/*!****************************************************!*\
  !*** ./src/app/crud/store/crud-state.interface.ts ***!
  \****************************************************/
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

/***/ "./src/app/crud/store/crud.actions.ts":
/*!********************************************!*\
  !*** ./src/app/crud/store/crud.actions.ts ***!
  \********************************************/
/*! exports provided: ActionTypes, CRUDEmployeeLoadRequest, CRUDEmployeeLoadSuccess, CRUDEmployeeCreateRequest, CRUDEmployeeUpdateRequest, CRUDEmployeeCreateOrUpdateSuccess, CRUDEmployeeDeleteRequest, CRUDEmployeeDeleteSuccess, CRUDEmployeeFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRUDEmployeeLoadRequest", function() { return CRUDEmployeeLoadRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRUDEmployeeLoadSuccess", function() { return CRUDEmployeeLoadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRUDEmployeeCreateRequest", function() { return CRUDEmployeeCreateRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRUDEmployeeUpdateRequest", function() { return CRUDEmployeeUpdateRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRUDEmployeeCreateOrUpdateSuccess", function() { return CRUDEmployeeCreateOrUpdateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRUDEmployeeDeleteRequest", function() { return CRUDEmployeeDeleteRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRUDEmployeeDeleteSuccess", function() { return CRUDEmployeeDeleteSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRUDEmployeeFailure", function() { return CRUDEmployeeFailure; });
/* harmony import */ var _app_root_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/root-store */ "./src/app/root-store/index.ts");

// TypeScript enum’s are immutable
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["CRUD_EMPLOYEE_LOAD_REQUEST"] = "[CRUD Page] Load Employee Request";
    ActionTypes["CRUD_EMPLOYEE_LOAD_SUCCESS"] = "[CRUD Page] Load Employee Success";
    ActionTypes["CRUD_EMPLOYEE_CREATE_REQUEST"] = "[CRUD Page] Create Employee Request";
    ActionTypes["CRUD_EMPLOYEE_UPDATE_REQUEST"] = "[CRUD Page] Update Employee Request";
    ActionTypes["CRUD_EMPLOYEE_CREATE_OR_UPDATE_SUCCESS"] = "[CRUD Page] Create or Update Employee Success";
    ActionTypes["CRUD_EMPLOYEE_DELETE_REQUEST"] = "[CRUD Page] Delete Employee Request";
    ActionTypes["CRUD_EMPLOYEE_DELETE_SUCCESS"] = "[CRUD Page] Delete Employee Success";
    ActionTypes["CRUD_EMPLOYEE_FAILURE"] = "[CRUD Page] Employee Failure";
})(ActionTypes || (ActionTypes = {}));
// To ensure NgRX actions have unique names across the application.
// This prevents any duplicate actions being dispatched.
Object(_app_root_store__WEBPACK_IMPORTED_MODULE_0__["isActionNameUnique"])(ActionTypes);
var CRUDEmployeeLoadRequest = /** @class */ (function () {
    function CRUDEmployeeLoadRequest() {
        this.type = ActionTypes.CRUD_EMPLOYEE_LOAD_REQUEST;
    }
    return CRUDEmployeeLoadRequest;
}());

var CRUDEmployeeLoadSuccess = /** @class */ (function () {
    function CRUDEmployeeLoadSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.CRUD_EMPLOYEE_LOAD_SUCCESS;
    }
    return CRUDEmployeeLoadSuccess;
}());

var CRUDEmployeeCreateRequest = /** @class */ (function () {
    function CRUDEmployeeCreateRequest(payload) {
        this.payload = payload;
        this.type = ActionTypes.CRUD_EMPLOYEE_CREATE_REQUEST;
    }
    return CRUDEmployeeCreateRequest;
}());

var CRUDEmployeeUpdateRequest = /** @class */ (function () {
    function CRUDEmployeeUpdateRequest(payload) {
        this.payload = payload;
        this.type = ActionTypes.CRUD_EMPLOYEE_UPDATE_REQUEST;
    }
    return CRUDEmployeeUpdateRequest;
}());

var CRUDEmployeeCreateOrUpdateSuccess = /** @class */ (function () {
    function CRUDEmployeeCreateOrUpdateSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.CRUD_EMPLOYEE_CREATE_OR_UPDATE_SUCCESS;
    }
    return CRUDEmployeeCreateOrUpdateSuccess;
}());

var CRUDEmployeeDeleteRequest = /** @class */ (function () {
    function CRUDEmployeeDeleteRequest(payload) {
        this.payload = payload;
        this.type = ActionTypes.CRUD_EMPLOYEE_DELETE_REQUEST;
    }
    return CRUDEmployeeDeleteRequest;
}());

var CRUDEmployeeDeleteSuccess = /** @class */ (function () {
    function CRUDEmployeeDeleteSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.CRUD_EMPLOYEE_DELETE_SUCCESS;
    }
    return CRUDEmployeeDeleteSuccess;
}());

var CRUDEmployeeFailure = /** @class */ (function () {
    function CRUDEmployeeFailure(payload) {
        this.payload = payload;
        this.type = ActionTypes.CRUD_EMPLOYEE_FAILURE;
    }
    return CRUDEmployeeFailure;
}());



/***/ }),

/***/ "./src/app/crud/store/crud.effects.ts":
/*!********************************************!*\
  !*** ./src/app/crud/store/crud.effects.ts ***!
  \********************************************/
/*! exports provided: CrudEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudEffects", function() { return CrudEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_crud_store_crud_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/crud/store/crud.actions */ "./src/app/crud/store/crud.actions.ts");
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






var CrudEffects = /** @class */ (function () {
    function CrudEffects(employeeService, actions$) {
        var _this = this;
        this.employeeService = employeeService;
        this.actions$ = actions$;
        this.loadAllEmployeeEffects$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_app_crud_store_crud_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].CRUD_EMPLOYEE_LOAD_REQUEST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return _this.employeeService.getEmployees().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (employees) { return (new _app_crud_store_crud_actions__WEBPACK_IMPORTED_MODULE_1__["CRUDEmployeeLoadSuccess"](employees)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _app_crud_store_crud_actions__WEBPACK_IMPORTED_MODULE_1__["CRUDEmployeeFailure"](error)); }));
        }));
        /* Except GET, for others POST,DELET, UPADTE always use concatMap
       concatMap maintains order in which request comes , queue the request and
       returns the response in order it received whereas mergeMap does n't
       maintain order. Switch will cancel the previous request , takes only
       the latest one, switchMap is safe only for GET method. */
        this.createEmployeeEffects$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_app_crud_store_crud_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].CRUD_EMPLOYEE_CREATE_REQUEST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (employee) {
            return _this.employeeService.createEmployee(employee).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (responseEmployee) { return (new _app_crud_store_crud_actions__WEBPACK_IMPORTED_MODULE_1__["CRUDEmployeeCreateOrUpdateSuccess"](responseEmployee)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _app_crud_store_crud_actions__WEBPACK_IMPORTED_MODULE_1__["CRUDEmployeeFailure"](error)); }));
        }));
        this.updateEmployeeEffects$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_app_crud_store_crud_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].CRUD_EMPLOYEE_UPDATE_REQUEST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (employee) {
            return _this.employeeService.updateEmployee(employee).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return (new _app_crud_store_crud_actions__WEBPACK_IMPORTED_MODULE_1__["CRUDEmployeeCreateOrUpdateSuccess"](employee)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _app_crud_store_crud_actions__WEBPACK_IMPORTED_MODULE_1__["CRUDEmployeeFailure"](error)); }));
        }));
        this.deleteEmployeeEffects$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_app_crud_store_crud_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].CRUD_EMPLOYEE_DELETE_REQUEST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (id) {
            return _this.employeeService.removeEmployee(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return (new _app_crud_store_crud_actions__WEBPACK_IMPORTED_MODULE_1__["CRUDEmployeeDeleteSuccess"](id)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _app_crud_store_crud_actions__WEBPACK_IMPORTED_MODULE_1__["CRUDEmployeeFailure"](error)); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], CrudEffects.prototype, "loadAllEmployeeEffects$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], CrudEffects.prototype, "createEmployeeEffects$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], CrudEffects.prototype, "updateEmployeeEffects$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], CrudEffects.prototype, "deleteEmployeeEffects$", void 0);
    CrudEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_app_in_memory_api_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]])
    ], CrudEffects);
    return CrudEffects;
}());



/***/ }),

/***/ "./src/app/crud/store/crud.reducer.ts":
/*!********************************************!*\
  !*** ./src/app/crud/store/crud.reducer.ts ***!
  \********************************************/
/*! exports provided: crudReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crudReducer", function() { return crudReducer; });
/* harmony import */ var _app_crud_store_crud_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/crud/store/crud.actions */ "./src/app/crud/store/crud.actions.ts");
/* harmony import */ var _crud_state_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crud-state.interface */ "./src/app/crud/store/crud-state.interface.ts");
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


function crudReducer(state, action) {
    if (state === void 0) { state = _crud_state_interface__WEBPACK_IMPORTED_MODULE_1__["initialState"]; }
    switch (action.type) {
        case _app_crud_store_crud_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].CRUD_EMPLOYEE_LOAD_REQUEST:
        case _app_crud_store_crud_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].CRUD_EMPLOYEE_CREATE_REQUEST:
        case _app_crud_store_crud_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].CRUD_EMPLOYEE_UPDATE_REQUEST:
        case _app_crud_store_crud_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].CRUD_EMPLOYEE_DELETE_REQUEST: {
            return __assign({}, state, { isLoading: true, error: null });
        }
        case _app_crud_store_crud_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].CRUD_EMPLOYEE_LOAD_SUCCESS: {
            // Replace current collection with provided collection
            return _crud_state_interface__WEBPACK_IMPORTED_MODULE_1__["crudEntityadapter"].addAll(action.payload, __assign({}, state, { isLoading: false, error: null }));
        }
        case _app_crud_store_crud_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].CRUD_EMPLOYEE_CREATE_OR_UPDATE_SUCCESS: {
            // Add or Update one entity in the collection
            return _crud_state_interface__WEBPACK_IMPORTED_MODULE_1__["crudEntityadapter"].upsertOne(action.payload, __assign({}, state, { isLoading: false, error: null }));
        }
        case _app_crud_store_crud_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].CRUD_EMPLOYEE_DELETE_SUCCESS: {
            // Remove one entity from the collection
            return _crud_state_interface__WEBPACK_IMPORTED_MODULE_1__["crudEntityadapter"].removeOne(action.payload, __assign({}, state, { isLoading: false, error: null }));
        }
        case _app_crud_store_crud_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].CRUD_EMPLOYEE_FAILURE:
            return __assign({}, state, { isLoading: false, error: action.payload });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/crud/store/crud.selectors.ts":
/*!**********************************************!*\
  !*** ./src/app/crud/store/crud.selectors.ts ***!
  \**********************************************/
/*! exports provided: selectCrudError, selectCrudLoadingStatus, selectCrudAllEmpolyees */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCrudError", function() { return selectCrudError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCrudLoadingStatus", function() { return selectCrudLoadingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCrudAllEmpolyees", function() { return selectCrudAllEmpolyees; });
/* harmony import */ var _app_crud_store_crud_state_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/crud/store/crud-state.interface */ "./src/app/crud/store/crud-state.interface.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


// Selector functions
var selectCrudState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('crud');
var selectCrudError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectCrudState, function (state) { return state.error; });
var selectCrudLoadingStatus = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectCrudState, function (state) { return state.isLoading; });
// Create the default selectors
var selectCrudAllEmpolyees = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectCrudState, 
// using created entity adapter's built-in selectors
_app_crud_store_crud_state_interface__WEBPACK_IMPORTED_MODULE_0__["selectAll"]);


/***/ }),

/***/ "./src/app/crud/store/index.ts":
/*!*************************************!*\
  !*** ./src/app/crud/store/index.ts ***!
  \*************************************/
/*! exports provided: CrudStoreActions, CrudEffects, crudReducer, CrudStoreSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_crud_store_crud_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/crud/store/crud.actions */ "./src/app/crud/store/crud.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "CrudStoreActions", function() { return _app_crud_store_crud_actions__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _app_crud_store_crud_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/crud/store/crud.effects */ "./src/app/crud/store/crud.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CrudEffects", function() { return _app_crud_store_crud_effects__WEBPACK_IMPORTED_MODULE_1__["CrudEffects"]; });

/* harmony import */ var _app_crud_store_crud_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/crud/store/crud.reducer */ "./src/app/crud/store/crud.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "crudReducer", function() { return _app_crud_store_crud_reducer__WEBPACK_IMPORTED_MODULE_2__["crudReducer"]; });

/* harmony import */ var _app_crud_store_crud_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/crud/store/crud.selectors */ "./src/app/crud/store/crud.selectors.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "CrudStoreSelectors", function() { return _app_crud_store_crud_selectors__WEBPACK_IMPORTED_MODULE_3__; });







/***/ })

}]);
//# sourceMappingURL=app-crud-crud-module.js.map