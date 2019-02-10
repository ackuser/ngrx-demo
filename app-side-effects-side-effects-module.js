(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-side-effects-side-effects-module"],{

/***/ "./src/app/side-effects/side-effects-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/side-effects/side-effects-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SideEffectsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideEffectsRoutingModule", function() { return SideEffectsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_side_effects_side_effects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/side-effects/side-effects.component */ "./src/app/side-effects/side-effects.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _app_side_effects_side_effects_component__WEBPACK_IMPORTED_MODULE_2__["SideEffectsComponent"]
    }];
var SideEffectsRoutingModule = /** @class */ (function () {
    function SideEffectsRoutingModule() {
    }
    SideEffectsRoutingModule.components = [
        _app_side_effects_side_effects_component__WEBPACK_IMPORTED_MODULE_2__["SideEffectsComponent"]
    ];
    SideEffectsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SideEffectsRoutingModule);
    return SideEffectsRoutingModule;
}());



/***/ }),

/***/ "./src/app/side-effects/side-effects.component.css":
/*!*********************************************************!*\
  !*** ./src/app/side-effects/side-effects.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\ninput[type=text], select {\n  width: 40%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 18px;\n}\n\nbutton, input[type=button] {\n  width: 40%;\n  background-color: #4CAF50;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 18px;\n}\n\nbutton, input[type=button]:hover {\n  background-color: #45a049;\n}\n\n.searchContainer {\n  margin: auto;\n  width: 500px;\n  border-radius: 5px;\n  padding-top: 20px;\n  padding-right: 20px;\n  padding-bottom: 20px;\n  padding-left: 30px;\n}\n\nspan.space {\n  padding: 1rem;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1lZmZlY3RzL3NpZGUtZWZmZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvc2lkZS1lZmZlY3RzL3NpZGUtZWZmZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbnB1dFt0eXBlPXRleHRdLCBzZWxlY3Qge1xuICB3aWR0aDogNDAlO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbmJ1dHRvbiwgaW5wdXRbdHlwZT1idXR0b25dIHtcbiAgd2lkdGg6IDQwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuYnV0dG9uLCBpbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xufVxuXG4uc2VhcmNoQ29udGFpbmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbnNwYW4uc3BhY2Uge1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/side-effects/side-effects.component.html":
/*!**********************************************************!*\
  !*** ./src/app/side-effects/side-effects.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h3>Demo 3</h3>\n</div>\n\n<div class =\"searchContainer\" >\n  <input type=\"text\" #searchByCountry id=\"searchByCountry\"  placeholder=\"Countryy Name\" >\n  <span class=\"space\"></span>\n  <input type=\"button\" (click)=\"populateCountryDetail(searchByCountry.value)\" value =\"Check Country Detail\" >\n</div>\n\n<app-country-card\n[country]=\"country$ | async\"\n[errorMessage]=\"errorMessage$ | async\"\n[isLoading]=\"isLoading$ | async\">\n</app-country-card>\n"

/***/ }),

/***/ "./src/app/side-effects/side-effects.component.ts":
/*!********************************************************!*\
  !*** ./src/app/side-effects/side-effects.component.ts ***!
  \********************************************************/
/*! exports provided: SideEffectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideEffectsComponent", function() { return SideEffectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_side_effects_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/side-effects/store */ "./src/app/side-effects/store/index.ts");
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



var SideEffectsComponent = /** @class */ (function () {
    function SideEffectsComponent(store$) {
        this.store$ = store$;
    }
    SideEffectsComponent.prototype.ngOnInit = function () {
        this.store$.dispatch(new _app_side_effects_store__WEBPACK_IMPORTED_MODULE_1__["SideEffectsStoreActions"].RetrieveCountryRequest('USA'));
        this.isLoading$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_app_side_effects_store__WEBPACK_IMPORTED_MODULE_1__["SideEffectsStoreSelectors"].selectIsLoading));
        this.country$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_app_side_effects_store__WEBPACK_IMPORTED_MODULE_1__["SideEffectsStoreSelectors"].selectCountryDetail));
        this.errorMessage$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_app_side_effects_store__WEBPACK_IMPORTED_MODULE_1__["SideEffectsStoreSelectors"].selectError));
    };
    SideEffectsComponent.prototype.populateCountryDetail = function (countryName) {
        this.store$.dispatch(new _app_side_effects_store__WEBPACK_IMPORTED_MODULE_1__["SideEffectsStoreActions"].RetrieveCountryRequest(countryName));
    };
    SideEffectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-effects',
            template: __webpack_require__(/*! ./side-effects.component.html */ "./src/app/side-effects/side-effects.component.html"),
            styles: [__webpack_require__(/*! ./side-effects.component.css */ "./src/app/side-effects/side-effects.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], SideEffectsComponent);
    return SideEffectsComponent;
}());



/***/ }),

/***/ "./src/app/side-effects/side-effects.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/side-effects/side-effects.module.ts ***!
  \*****************************************************/
/*! exports provided: SideEffectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideEffectsModule", function() { return SideEffectsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_side_effects_side_effects_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/side-effects/side-effects-routing.module */ "./src/app/side-effects/side-effects-routing.module.ts");
/* harmony import */ var _app_side_effects_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/side-effects/store */ "./src/app/side-effects/store/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SideEffectsModule = /** @class */ (function () {
    function SideEffectsModule() {
    }
    SideEffectsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                /**
                * StoreModule.forFeature is imported in this feature module, accepting a reducer
                * function or object map of reducer functions. It is used for composing state
                * from feature modules. These modules can be loaded eagerly or lazily and
                * will be dynamically added to the root state. First argument is name of the
                * feature state and second argument is a reducer or object map of reducer
                * which manages feature state
                */
                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature('sideEffects', _app_side_effects_store__WEBPACK_IMPORTED_MODULE_2__["sideEffectsReducer"]),
                /**
                 * EffectsModule.forFeature() is imported to register effects from this
                 * feature module and sets up the effects class to be initialized immediately
                 * when this feature module is loaded. Effects can be loaded
                 * eagerly or lazily and will be started immediately.
                 * All Effects will only be instantiated once regardless of
                 * whether they are registered once or multiple times.
                 */
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([_app_side_effects_store__WEBPACK_IMPORTED_MODULE_2__["SideEffectsEffects"]]),
                _app_side_effects_side_effects_routing_module__WEBPACK_IMPORTED_MODULE_1__["SideEffectsRoutingModule"]
            ],
            declarations: [_app_side_effects_side_effects_routing_module__WEBPACK_IMPORTED_MODULE_1__["SideEffectsRoutingModule"].components]
        })
    ], SideEffectsModule);
    return SideEffectsModule;
}());



/***/ }),

/***/ "./src/app/side-effects/store/index.ts":
/*!*********************************************!*\
  !*** ./src/app/side-effects/store/index.ts ***!
  \*********************************************/
/*! exports provided: SideEffectsStoreActions, SideEffectsEffects, sideEffectsReducer, SideEffectsStoreSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_side_effects_store_side_effects_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/side-effects/store/side-effects.actions */ "./src/app/side-effects/store/side-effects.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "SideEffectsStoreActions", function() { return _app_side_effects_store_side_effects_actions__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _app_side_effects_store_side_effects_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/side-effects/store/side-effects.effects */ "./src/app/side-effects/store/side-effects.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SideEffectsEffects", function() { return _app_side_effects_store_side_effects_effects__WEBPACK_IMPORTED_MODULE_1__["SideEffectsEffects"]; });

/* harmony import */ var _app_side_effects_store_side_effects_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/side-effects/store/side-effects.reducer */ "./src/app/side-effects/store/side-effects.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sideEffectsReducer", function() { return _app_side_effects_store_side_effects_reducer__WEBPACK_IMPORTED_MODULE_2__["sideEffectsReducer"]; });

/* harmony import */ var _app_side_effects_store_side_effects_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/side-effects/store/side-effects.selectors */ "./src/app/side-effects/store/side-effects.selectors.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "SideEffectsStoreSelectors", function() { return _app_side_effects_store_side_effects_selectors__WEBPACK_IMPORTED_MODULE_3__; });







/***/ }),

/***/ "./src/app/side-effects/store/side-effects-state.interface.ts":
/*!********************************************************************!*\
  !*** ./src/app/side-effects/store/side-effects-state.interface.ts ***!
  \********************************************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
var initialState = {
    country: null,
    isLoading: false,
    error: null
};


/***/ }),

/***/ "./src/app/side-effects/store/side-effects.actions.ts":
/*!************************************************************!*\
  !*** ./src/app/side-effects/store/side-effects.actions.ts ***!
  \************************************************************/
/*! exports provided: ActionTypes, RetrieveCountryRequest, RetrieveCountrySuccess, RetrieveCountryFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetrieveCountryRequest", function() { return RetrieveCountryRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetrieveCountrySuccess", function() { return RetrieveCountrySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetrieveCountryFailure", function() { return RetrieveCountryFailure; });
/* harmony import */ var _app_root_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/root-store */ "./src/app/root-store/index.ts");

// TypeScript enum’s are immutable
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["RETRIEVE_COUNTRY_REQUEST"] = "[Side-Effects Page] Retreive Country Request";
    ActionTypes["RETRIEVE_COUNTRY_SUCCESS"] = "[Side-Effects Page] Retreive Country Success";
    ActionTypes["RETRIEVE_COUNTRY_FAILURE"] = "[Side-Effects Page] Retreive Country Failure";
})(ActionTypes || (ActionTypes = {}));
// To ensure NgRX actions have unique names across the application.
// This prevents any duplicate actions being dispatched.
Object(_app_root_store__WEBPACK_IMPORTED_MODULE_0__["isActionNameUnique"])(ActionTypes);
var RetrieveCountryRequest = /** @class */ (function () {
    function RetrieveCountryRequest(payload) {
        this.payload = payload;
        this.type = ActionTypes.RETRIEVE_COUNTRY_REQUEST;
    }
    return RetrieveCountryRequest;
}());

var RetrieveCountrySuccess = /** @class */ (function () {
    function RetrieveCountrySuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.RETRIEVE_COUNTRY_SUCCESS;
    }
    return RetrieveCountrySuccess;
}());

var RetrieveCountryFailure = /** @class */ (function () {
    function RetrieveCountryFailure(payload) {
        this.payload = payload;
        this.type = ActionTypes.RETRIEVE_COUNTRY_FAILURE;
    }
    return RetrieveCountryFailure;
}());



/***/ }),

/***/ "./src/app/side-effects/store/side-effects.effects.ts":
/*!************************************************************!*\
  !*** ./src/app/side-effects/store/side-effects.effects.ts ***!
  \************************************************************/
/*! exports provided: SideEffectsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideEffectsEffects", function() { return SideEffectsEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_side_effects_store_side_effects_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/side-effects/store/side-effects.actions */ "./src/app/side-effects/store/side-effects.actions.ts");
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






var SideEffectsEffects = /** @class */ (function () {
    function SideEffectsEffects(countryService, actions$) {
        var _this = this;
        this.countryService = countryService;
        this.actions$ = actions$;
        this.retrieveCountryEffects$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_app_side_effects_store_side_effects_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].RETRIEVE_COUNTRY_REQUEST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (countryName) {
            return _this.countryService.getCountryDetail(countryName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (country) { return (new _app_side_effects_store_side_effects_actions__WEBPACK_IMPORTED_MODULE_1__["RetrieveCountrySuccess"](country)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _app_side_effects_store_side_effects_actions__WEBPACK_IMPORTED_MODULE_1__["RetrieveCountryFailure"](error)); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], SideEffectsEffects.prototype, "retrieveCountryEffects$", void 0);
    SideEffectsEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_core_services_country_service__WEBPACK_IMPORTED_MODULE_2__["CountryService"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]])
    ], SideEffectsEffects);
    return SideEffectsEffects;
}());



/***/ }),

/***/ "./src/app/side-effects/store/side-effects.reducer.ts":
/*!************************************************************!*\
  !*** ./src/app/side-effects/store/side-effects.reducer.ts ***!
  \************************************************************/
/*! exports provided: sideEffectsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sideEffectsReducer", function() { return sideEffectsReducer; });
/* harmony import */ var _app_side_effects_store_side_effects_state_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/side-effects/store/side-effects-state.interface */ "./src/app/side-effects/store/side-effects-state.interface.ts");
/* harmony import */ var _app_side_effects_store_side_effects_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/side-effects/store/side-effects.actions */ "./src/app/side-effects/store/side-effects.actions.ts");
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


function sideEffectsReducer(state, action) {
    if (state === void 0) { state = _app_side_effects_store_side_effects_state_interface__WEBPACK_IMPORTED_MODULE_0__["initialState"]; }
    switch (action.type) {
        case _app_side_effects_store_side_effects_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].RETRIEVE_COUNTRY_REQUEST:
            return __assign({}, state, { isLoading: true, country: null, error: null });
        case _app_side_effects_store_side_effects_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].RETRIEVE_COUNTRY_SUCCESS:
            return __assign({}, state, { isLoading: false, country: action.payload, error: null });
        case _app_side_effects_store_side_effects_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].RETRIEVE_COUNTRY_FAILURE:
            return __assign({}, state, { isLoading: false, country: null, error: action.payload });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/side-effects/store/side-effects.selectors.ts":
/*!**************************************************************!*\
  !*** ./src/app/side-effects/store/side-effects.selectors.ts ***!
  \**************************************************************/
/*! exports provided: selectCountryDetail, selectError, selectIsLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCountryDetail", function() { return selectCountryDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectError", function() { return selectError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsLoading", function() { return selectIsLoading; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

// Selector functions
var selectSideEffectsFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('sideEffects');
var selectCountryDetail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSideEffectsFeatureState, function (state) { return state.country; });
var selectError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSideEffectsFeatureState, function (state) { return state.error; });
var selectIsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSideEffectsFeatureState, function (state) { return state.isLoading; });


/***/ })

}]);
//# sourceMappingURL=app-side-effects-side-effects-module.js.map