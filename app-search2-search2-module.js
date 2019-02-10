(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-search2-search2-module"],{

/***/ "./src/app/search2/search2-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/search2/search2-routing.module.ts ***!
  \***************************************************/
/*! exports provided: Search2RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search2RoutingModule", function() { return Search2RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_search2_search2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/search2/search2.component */ "./src/app/search2/search2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _app_search2_search2_component__WEBPACK_IMPORTED_MODULE_2__["Search2Component"]
    }];
var Search2RoutingModule = /** @class */ (function () {
    function Search2RoutingModule() {
    }
    Search2RoutingModule.components = [
        _app_search2_search2_component__WEBPACK_IMPORTED_MODULE_2__["Search2Component"]
    ];
    Search2RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], Search2RoutingModule);
    return Search2RoutingModule;
}());



/***/ }),

/***/ "./src/app/search2/search2.component.css":
/*!***********************************************!*\
  !*** ./src/app/search2/search2.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=search], select {\n  width: 60%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 18px;\n}\n\n.searchContainer {\n  margin: auto;\n  width: 500px;\n  border-radius: 5px;\n  padding-top: 20px;\n  padding-right: 20px;\n  padding-bottom: 20px;\n  padding-left: 30px;\n}\n\nspan.space {\n  padding: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoMi9zZWFyY2gyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaDIvc2VhcmNoMi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1zZWFyY2hdLCBzZWxlY3Qge1xuICB3aWR0aDogNjAlO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zZWFyY2hDb250YWluZXIge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA1MDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuc3Bhbi5zcGFjZSB7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/search2/search2.component.html":
/*!************************************************!*\
  !*** ./src/app/search2/search2.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"text-align:center\">\n  <h3>Demo 5</h3>\n</div>\n\n<div class =\"searchContainer\" >\n  <input [formControl]=\"searchControl\"  type=\"search\"  id=\"searchbyCountry\"  placeholder=\"Search Country\" >\n</div>\n\n\n<app-country-table\n[countries]=\"countries$ | async\"\n[errorMessage]=\"errorMessage$ | async\"\n[isLoading]=\"isLoading$ | async\" >\n</app-country-table>\n\n\n"

/***/ }),

/***/ "./src/app/search2/search2.component.ts":
/*!**********************************************!*\
  !*** ./src/app/search2/search2.component.ts ***!
  \**********************************************/
/*! exports provided: Search2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search2Component", function() { return Search2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_search2_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/search2/store */ "./src/app/search2/store/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Search2Component = /** @class */ (function () {
    function Search2Component(store$) {
        this.store$ = store$;
    }
    Search2Component.prototype.ngOnInit = function () {
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.populateCountries();
        this.isLoading$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_app_search2_store__WEBPACK_IMPORTED_MODULE_2__["Search2StoreSelectors"].selectSearch2Loading));
        this.countries$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_app_search2_store__WEBPACK_IMPORTED_MODULE_2__["Search2StoreSelectors"].selectSearch2Countries));
        this.errorMessage$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_app_search2_store__WEBPACK_IMPORTED_MODULE_2__["Search2StoreSelectors"].selectSearch2Error));
    };
    Search2Component.prototype.populateCountries = function () {
        var _this = this;
        this.searchControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (searchText) { return searchText && searchText.trim(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (searchText) {
            var filteredResult = searchText.length > 2 && searchText.length < 15;
            return filteredResult;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])())
            .subscribe(function (searchKey) {
            _this.store$.dispatch(new _app_search2_store__WEBPACK_IMPORTED_MODULE_2__["Search2StoreActions"].Search2CountriesRequest(searchKey));
        });
    };
    Search2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search2',
            template: __webpack_require__(/*! ./search2.component.html */ "./src/app/search2/search2.component.html"),
            styles: [__webpack_require__(/*! ./search2.component.css */ "./src/app/search2/search2.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], Search2Component);
    return Search2Component;
}());



/***/ }),

/***/ "./src/app/search2/search2.module.ts":
/*!*******************************************!*\
  !*** ./src/app/search2/search2.module.ts ***!
  \*******************************************/
/*! exports provided: Search2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search2Module", function() { return Search2Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_search2_search2_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/search2/search2-routing.module */ "./src/app/search2/search2-routing.module.ts");
/* harmony import */ var _app_search2_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/search2/store */ "./src/app/search2/store/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Search2Module = /** @class */ (function () {
    function Search2Module() {
    }
    Search2Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature('search2', _app_search2_store__WEBPACK_IMPORTED_MODULE_2__["search2Reducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([_app_search2_store__WEBPACK_IMPORTED_MODULE_2__["Search2Effects"]]),
                _app_search2_search2_routing_module__WEBPACK_IMPORTED_MODULE_1__["Search2RoutingModule"]
            ],
            declarations: [_app_search2_search2_routing_module__WEBPACK_IMPORTED_MODULE_1__["Search2RoutingModule"].components]
        })
    ], Search2Module);
    return Search2Module;
}());



/***/ }),

/***/ "./src/app/search2/store/index.ts":
/*!****************************************!*\
  !*** ./src/app/search2/store/index.ts ***!
  \****************************************/
/*! exports provided: Search2StoreActions, Search2Effects, search2Reducer, Search2StoreSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_search2_store_search2_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/search2/store/search2.actions */ "./src/app/search2/store/search2.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Search2StoreActions", function() { return _app_search2_store_search2_actions__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _app_search2_store_search2_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/search2/store/search2.effects */ "./src/app/search2/store/search2.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search2Effects", function() { return _app_search2_store_search2_effects__WEBPACK_IMPORTED_MODULE_1__["Search2Effects"]; });

/* harmony import */ var _app_search2_store_search2_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/search2/store/search2.reducer */ "./src/app/search2/store/search2.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "search2Reducer", function() { return _app_search2_store_search2_reducer__WEBPACK_IMPORTED_MODULE_2__["search2Reducer"]; });

/* harmony import */ var _app_search2_store_search2_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/search2/store/search2.selectors */ "./src/app/search2/store/search2.selectors.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Search2StoreSelectors", function() { return _app_search2_store_search2_selectors__WEBPACK_IMPORTED_MODULE_3__; });







/***/ }),

/***/ "./src/app/search2/store/search2-state.interface.ts":
/*!**********************************************************!*\
  !*** ./src/app/search2/store/search2-state.interface.ts ***!
  \**********************************************************/
/*! exports provided: selectCountryId, sortByName, search2Entityadapter, initialState, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCountryId", function() { return selectCountryId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByName", function() { return sortByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search2Entityadapter", function() { return search2Entityadapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
var _a;

// Method to select primary key. if primary key is 'id' then this is not needed
function selectCountryId(country) {
    // In this case this would be optional since primary key is id
    return country.name;
}
/* A compare function used to sort the collection. The comparer function
is only needed if the collection needs to be sorted before being displayed.
Set to false to leave the collection unsorted, which is more performant
during CRUD operations. */
function sortByName(a, b) {
    return a.name.localeCompare(b.name);
}
var search2Entityadapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])({
    selectId: selectCountryId,
    sortComparer: sortByName
});
var initialState = search2Entityadapter.getInitialState({
    isLoading: false,
    error: null
});
// Out-of-the-box, created entity adapter provides built-in default selectors
var selectIds = (_a = search2Entityadapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


/***/ }),

/***/ "./src/app/search2/store/search2.actions.ts":
/*!**************************************************!*\
  !*** ./src/app/search2/store/search2.actions.ts ***!
  \**************************************************/
/*! exports provided: ActionTypes, Search2CountriesRequest, Search2CountriesSuccess, Search2CountriesFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search2CountriesRequest", function() { return Search2CountriesRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search2CountriesSuccess", function() { return Search2CountriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search2CountriesFailure", function() { return Search2CountriesFailure; });
/* harmony import */ var _app_root_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/root-store */ "./src/app/root-store/index.ts");

// TypeScript enum’s are immutable
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["SEARCH2_COUNTRIES_REQUEST"] = "[Search2 Page] Search Countries Request";
    ActionTypes["SEARCH2_COUNTRIES_SUCCESS"] = "[Search2 Page] Search Countries Success";
    ActionTypes["SEARCH2_COUNTRIES_FAILURE"] = "[Search2 Page] Search Countries Failure";
})(ActionTypes || (ActionTypes = {}));
// To ensure NgRX actions have unique names across the application.
// This prevents any duplicate actions being dispatched.
Object(_app_root_store__WEBPACK_IMPORTED_MODULE_0__["isActionNameUnique"])(ActionTypes);
var Search2CountriesRequest = /** @class */ (function () {
    function Search2CountriesRequest(payload) {
        this.payload = payload;
        this.type = ActionTypes.SEARCH2_COUNTRIES_REQUEST;
    }
    return Search2CountriesRequest;
}());

var Search2CountriesSuccess = /** @class */ (function () {
    function Search2CountriesSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.SEARCH2_COUNTRIES_SUCCESS;
    }
    return Search2CountriesSuccess;
}());

var Search2CountriesFailure = /** @class */ (function () {
    function Search2CountriesFailure(payload) {
        this.payload = payload;
        this.type = ActionTypes.SEARCH2_COUNTRIES_FAILURE;
    }
    return Search2CountriesFailure;
}());



/***/ }),

/***/ "./src/app/search2/store/search2.effects.ts":
/*!**************************************************!*\
  !*** ./src/app/search2/store/search2.effects.ts ***!
  \**************************************************/
/*! exports provided: Search2Effects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search2Effects", function() { return Search2Effects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_search2_store_search2_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/search2/store/search2.actions */ "./src/app/search2/store/search2.actions.ts");
/* harmony import */ var _core_services_country_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/country.service */ "./src/app/core/services/country.service.ts");
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






var Search2Effects = /** @class */ (function () {
    function Search2Effects(countryService, actions$) {
        var _this = this;
        this.countryService = countryService;
        this.actions$ = actions$;
        this.search2CountriesEffects$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_app_search2_store_search2_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SEARCH2_COUNTRIES_REQUEST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (searchKey) {
            return _this.countryService.getCountries(searchKey).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (countries) { return (new _app_search2_store_search2_actions__WEBPACK_IMPORTED_MODULE_1__["Search2CountriesSuccess"](countries)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _app_search2_store_search2_actions__WEBPACK_IMPORTED_MODULE_1__["Search2CountriesFailure"](error)); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], Search2Effects.prototype, "search2CountriesEffects$", void 0);
    Search2Effects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_core_services_country_service__WEBPACK_IMPORTED_MODULE_2__["CountryService"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]])
    ], Search2Effects);
    return Search2Effects;
}());



/***/ }),

/***/ "./src/app/search2/store/search2.reducer.ts":
/*!**************************************************!*\
  !*** ./src/app/search2/store/search2.reducer.ts ***!
  \**************************************************/
/*! exports provided: search2Reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search2Reducer", function() { return search2Reducer; });
/* harmony import */ var _app_search2_store_search2_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/search2/store/search2.actions */ "./src/app/search2/store/search2.actions.ts");
/* harmony import */ var _search2_state_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search2-state.interface */ "./src/app/search2/store/search2-state.interface.ts");
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


function search2Reducer(state, action) {
    if (state === void 0) { state = _search2_state_interface__WEBPACK_IMPORTED_MODULE_1__["initialState"]; }
    switch (action.type) {
        case _app_search2_store_search2_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].SEARCH2_COUNTRIES_REQUEST:
            return __assign({}, state, { isLoading: true, error: null });
        case _app_search2_store_search2_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].SEARCH2_COUNTRIES_SUCCESS: {
            return _search2_state_interface__WEBPACK_IMPORTED_MODULE_1__["search2Entityadapter"].addAll(action.payload, __assign({}, state, { isLoading: false, error: null }));
        }
        case _app_search2_store_search2_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].SEARCH2_COUNTRIES_FAILURE:
            return __assign({}, state, { isLoading: false, error: action.payload });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/search2/store/search2.selectors.ts":
/*!****************************************************!*\
  !*** ./src/app/search2/store/search2.selectors.ts ***!
  \****************************************************/
/*! exports provided: selectSearch2Error, selectSearch2Loading, selectSearch2Countries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSearch2Error", function() { return selectSearch2Error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSearch2Loading", function() { return selectSearch2Loading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSearch2Countries", function() { return selectSearch2Countries; });
/* harmony import */ var _app_search2_store_search2_state_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/search2/store/search2-state.interface */ "./src/app/search2/store/search2-state.interface.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


// Selector functions
var selectSearch2State = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('search2');
var selectSearch2Error = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectSearch2State, function (state) { return state.error; });
var selectSearch2Loading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectSearch2State, function (state) { return state.isLoading; });
// Create the default selectors
var selectSearch2Countries = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectSearch2State, 
// using created entity adapter's built-in selectors
_app_search2_store_search2_state_interface__WEBPACK_IMPORTED_MODULE_0__["selectAll"]);


/***/ })

}]);
//# sourceMappingURL=app-search2-search2-module.js.map