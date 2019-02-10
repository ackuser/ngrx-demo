(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-search-search-module"],{

/***/ "./src/app/search/search-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/search/search-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SearchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutingModule", function() { return SearchRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/search/search.component */ "./src/app/search/search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _app_search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"]
    }];
var SearchRoutingModule = /** @class */ (function () {
    function SearchRoutingModule() {
    }
    SearchRoutingModule.components = [
        _app_search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"]
    ];
    SearchRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SearchRoutingModule);
    return SearchRoutingModule;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=search], select {\n  width: 60%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 18px;\n}\n\n.searchContainer {\n  margin: auto;\n  width: 500px;\n  border-radius: 5px;\n  padding-top: 20px;\n  padding-right: 20px;\n  padding-bottom: 20px;\n  padding-left: 30px;\n}\n\nspan.space {\n  padding: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPXNlYXJjaF0sIHNlbGVjdCB7XG4gIHdpZHRoOiA2MCU7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnNlYXJjaENvbnRhaW5lciB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDUwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG5zcGFuLnNwYWNlIHtcbiAgcGFkZGluZzogMXJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"text-align:center\">\n  <h3>Demo 4</h3>\n</div>\n\n<div class =\"searchContainer\" >\n  <input [formControl]=\"searchControl\"  type=\"search\"  id=\"searchbyCountry\"  placeholder=\"Search Country\" >\n</div>\n\n\n<app-country-table\n[countries]=\"countries$ | async\"\n[errorMessage]=\"errorMessage$ | async\"\n[isLoading]=\"isLoading$ | async\" >\n</app-country-table>\n\n\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_search_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/search/store */ "./src/app/search/store/index.ts");
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





var SearchComponent = /** @class */ (function () {
    function SearchComponent(store$) {
        this.store$ = store$;
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.populateCountries();
        this.isLoading$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_app_search_store__WEBPACK_IMPORTED_MODULE_2__["SearchStoreSelectors"].selectIsLoading));
        this.countries$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_app_search_store__WEBPACK_IMPORTED_MODULE_2__["SearchStoreSelectors"].selectCountries));
        this.errorMessage$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_app_search_store__WEBPACK_IMPORTED_MODULE_2__["SearchStoreSelectors"].selectError));
    };
    SearchComponent.prototype.populateCountries = function () {
        var _this = this;
        this.searchControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (searchText) { return searchText && searchText.trim(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (searchText) {
            var filteredResult = searchText.length > 2 && searchText.length < 15;
            return filteredResult;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])())
            .subscribe(function (searchKey) {
            _this.store$.dispatch(new _app_search_store__WEBPACK_IMPORTED_MODULE_2__["SearchStoreActions"].SearchCountriesRequest(searchKey));
        });
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/search/search.module.ts":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_search_search_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/search/search-routing.module */ "./src/app/search/search-routing.module.ts");
/* harmony import */ var _app_search_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/search/store */ "./src/app/search/store/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature('search', _app_search_store__WEBPACK_IMPORTED_MODULE_2__["searchReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([_app_search_store__WEBPACK_IMPORTED_MODULE_2__["SearchEffects"]]),
                _app_search_search_routing_module__WEBPACK_IMPORTED_MODULE_1__["SearchRoutingModule"]
            ],
            declarations: [_app_search_search_routing_module__WEBPACK_IMPORTED_MODULE_1__["SearchRoutingModule"].components]
        })
    ], SearchModule);
    return SearchModule;
}());



/***/ }),

/***/ "./src/app/search/store/index.ts":
/*!***************************************!*\
  !*** ./src/app/search/store/index.ts ***!
  \***************************************/
/*! exports provided: SearchStoreActions, SearchEffects, searchReducer, SearchStoreSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_search_store_search_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/search/store/search.actions */ "./src/app/search/store/search.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "SearchStoreActions", function() { return _app_search_store_search_actions__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _app_search_store_search_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/search/store/search.effects */ "./src/app/search/store/search.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchEffects", function() { return _app_search_store_search_effects__WEBPACK_IMPORTED_MODULE_1__["SearchEffects"]; });

/* harmony import */ var _app_search_store_search_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/search/store/search.reducer */ "./src/app/search/store/search.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "searchReducer", function() { return _app_search_store_search_reducer__WEBPACK_IMPORTED_MODULE_2__["searchReducer"]; });

/* harmony import */ var _app_search_store_search_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/search/store/search.selectors */ "./src/app/search/store/search.selectors.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "SearchStoreSelectors", function() { return _app_search_store_search_selectors__WEBPACK_IMPORTED_MODULE_3__; });







/***/ }),

/***/ "./src/app/search/store/search-state.interface.ts":
/*!********************************************************!*\
  !*** ./src/app/search/store/search-state.interface.ts ***!
  \********************************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
var initialState = {
    countries: [],
    isLoading: false,
    error: null
};


/***/ }),

/***/ "./src/app/search/store/search.actions.ts":
/*!************************************************!*\
  !*** ./src/app/search/store/search.actions.ts ***!
  \************************************************/
/*! exports provided: ActionTypes, SearchCountriesRequest, SearchCountriesSuccess, SearchCountriesFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCountriesRequest", function() { return SearchCountriesRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCountriesSuccess", function() { return SearchCountriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCountriesFailure", function() { return SearchCountriesFailure; });
/* harmony import */ var _app_root_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/root-store */ "./src/app/root-store/index.ts");

// TypeScript enum’s are immutable
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["SEARCH_COUNTRIES_REQUEST"] = "[Search Page] Search Countries Request";
    ActionTypes["SEARCH_COUNTRIES_SUCCESS"] = "[Search Page] Search Countries Success";
    ActionTypes["SEARCH_COUNTRIES_FAILURE"] = "[Search Page] Search Countries Failure";
})(ActionTypes || (ActionTypes = {}));
// To ensure NgRX actions have unique names across the application.
// This prevents any duplicate actions being dispatched.
Object(_app_root_store__WEBPACK_IMPORTED_MODULE_0__["isActionNameUnique"])(ActionTypes);
var SearchCountriesRequest = /** @class */ (function () {
    function SearchCountriesRequest(payload) {
        this.payload = payload;
        this.type = ActionTypes.SEARCH_COUNTRIES_REQUEST;
    }
    return SearchCountriesRequest;
}());

var SearchCountriesSuccess = /** @class */ (function () {
    function SearchCountriesSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.SEARCH_COUNTRIES_SUCCESS;
    }
    return SearchCountriesSuccess;
}());

var SearchCountriesFailure = /** @class */ (function () {
    function SearchCountriesFailure(payload) {
        this.payload = payload;
        this.type = ActionTypes.SEARCH_COUNTRIES_FAILURE;
    }
    return SearchCountriesFailure;
}());



/***/ }),

/***/ "./src/app/search/store/search.effects.ts":
/*!************************************************!*\
  !*** ./src/app/search/store/search.effects.ts ***!
  \************************************************/
/*! exports provided: SearchEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchEffects", function() { return SearchEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_search_store_search_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/search/store/search.actions */ "./src/app/search/store/search.actions.ts");
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






var SearchEffects = /** @class */ (function () {
    function SearchEffects(countryService, actions$) {
        var _this = this;
        this.countryService = countryService;
        this.actions$ = actions$;
        this.searchCountriesEffects$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_app_search_store_search_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SEARCH_COUNTRIES_REQUEST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (searchKey) {
            return _this.countryService.getCountries(searchKey).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (countries) { return (new _app_search_store_search_actions__WEBPACK_IMPORTED_MODULE_1__["SearchCountriesSuccess"](countries)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _app_search_store_search_actions__WEBPACK_IMPORTED_MODULE_1__["SearchCountriesFailure"](error)); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], SearchEffects.prototype, "searchCountriesEffects$", void 0);
    SearchEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_core_services_country_service__WEBPACK_IMPORTED_MODULE_2__["CountryService"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]])
    ], SearchEffects);
    return SearchEffects;
}());



/***/ }),

/***/ "./src/app/search/store/search.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/search/store/search.reducer.ts ***!
  \************************************************/
/*! exports provided: searchReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchReducer", function() { return searchReducer; });
/* harmony import */ var _app_search_store_search_state_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/search/store/search-state.interface */ "./src/app/search/store/search-state.interface.ts");
/* harmony import */ var _app_search_store_search_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/search/store/search.actions */ "./src/app/search/store/search.actions.ts");
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


function searchReducer(state, action) {
    if (state === void 0) { state = _app_search_store_search_state_interface__WEBPACK_IMPORTED_MODULE_0__["initialState"]; }
    switch (action.type) {
        case _app_search_store_search_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SEARCH_COUNTRIES_REQUEST:
            return __assign({}, state, { isLoading: true, countries: [], error: null });
        case _app_search_store_search_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SEARCH_COUNTRIES_SUCCESS:
            return __assign({}, state, { isLoading: false, countries: action.payload, error: null });
        case _app_search_store_search_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SEARCH_COUNTRIES_FAILURE:
            return __assign({}, state, { isLoading: false, countries: [], error: action.payload });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/search/store/search.selectors.ts":
/*!**************************************************!*\
  !*** ./src/app/search/store/search.selectors.ts ***!
  \**************************************************/
/*! exports provided: selectCountries, selectError, selectIsLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCountries", function() { return selectCountries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectError", function() { return selectError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsLoading", function() { return selectIsLoading; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

// Selector functions
var selectSearchState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('search');
var selectCountries = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSearchState, function (state) { return state.countries; });
var selectError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSearchState, function (state) { return state.error; });
var selectIsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSearchState, function (state) { return state.isLoading; });


/***/ })

}]);
//# sourceMappingURL=app-search-search-module.js.map