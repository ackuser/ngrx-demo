(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-lazy-load-lazy-load-module"],{

/***/ "./src/app/lazy-load/lazy-load-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/lazy-load/lazy-load-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: LazyLoadRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadRoutingModule", function() { return LazyLoadRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_lazy_load_lazy_load_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/lazy-load/lazy-load.component */ "./src/app/lazy-load/lazy-load.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _app_lazy_load_lazy_load_component__WEBPACK_IMPORTED_MODULE_2__["LazyLoadComponent"]
    }];
var LazyLoadRoutingModule = /** @class */ (function () {
    function LazyLoadRoutingModule() {
    }
    LazyLoadRoutingModule.components = [
        _app_lazy_load_lazy_load_component__WEBPACK_IMPORTED_MODULE_2__["LazyLoadComponent"]
    ];
    LazyLoadRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LazyLoadRoutingModule);
    return LazyLoadRoutingModule;
}());



/***/ }),

/***/ "./src/app/lazy-load/lazy-load.component.css":
/*!***************************************************!*\
  !*** ./src/app/lazy-load/lazy-load.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nbutton, input[type=button] {\n  width: 40%;\n  background-color: #4CAF50;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 18px;\n}\n\nbutton, input[type=button]:hover {\n  background-color: #45a049;\n}\n\n.searchContainer {\n  margin: auto;\n  width: 500px;\n  border-radius: 5px;\n  padding-top: 20px;\n  padding-right: 20px;\n  padding-bottom: 20px;\n  padding-left: 30px;\n}\n\nspan.space {\n  padding: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF6eS1sb2FkL2xhenktbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2xhenktbG9hZC9sYXp5LWxvYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuYnV0dG9uLCBpbnB1dFt0eXBlPWJ1dHRvbl0ge1xuICB3aWR0aDogNDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE0cHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5idXR0b24sIGlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XG59XG5cbi5zZWFyY2hDb250YWluZXIge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA1MDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuc3Bhbi5zcGFjZSB7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/lazy-load/lazy-load.component.html":
/*!****************************************************!*\
  !*** ./src/app/lazy-load/lazy-load.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h3>Demo 2</h3>\n</div>\n<div>\n  <h2>{{ message$ | async }}</h2>\n  <button (click)=\"translateInEnglish()\">English</button>\n  <span class=\"space\"></span>\n  <button (click)=\"translateInSpanish()\">Spanish</button>\n  <span class=\"space\"></span>\n  <button (click)=\"resetMessage()\">Reset Message</button>\n</div>\n"

/***/ }),

/***/ "./src/app/lazy-load/lazy-load.component.ts":
/*!**************************************************!*\
  !*** ./src/app/lazy-load/lazy-load.component.ts ***!
  \**************************************************/
/*! exports provided: LazyLoadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadComponent", function() { return LazyLoadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_lazy_load_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/lazy-load/store */ "./src/app/lazy-load/store/index.ts");
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



var LazyLoadComponent = /** @class */ (function () {
    function LazyLoadComponent(store$) {
        this.store$ = store$;
    }
    LazyLoadComponent.prototype.ngOnInit = function () {
        this.message$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_app_lazy_load_store__WEBPACK_IMPORTED_MODULE_1__["LazyLoadStoreSelectors"].selectMessage));
    };
    LazyLoadComponent.prototype.translateInEnglish = function () {
        this.store$.dispatch(new _app_lazy_load_store__WEBPACK_IMPORTED_MODULE_1__["LazyLoadStoreActions"].EnglishTranslator());
    };
    LazyLoadComponent.prototype.translateInSpanish = function () {
        this.store$.dispatch(new _app_lazy_load_store__WEBPACK_IMPORTED_MODULE_1__["LazyLoadStoreActions"].SpanishTranslator());
    };
    LazyLoadComponent.prototype.resetMessage = function () {
        this.store$.dispatch(new _app_lazy_load_store__WEBPACK_IMPORTED_MODULE_1__["LazyLoadStoreActions"].ResetTranslator());
    };
    LazyLoadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lazy-load',
            template: __webpack_require__(/*! ./lazy-load.component.html */ "./src/app/lazy-load/lazy-load.component.html"),
            styles: [__webpack_require__(/*! ./lazy-load.component.css */ "./src/app/lazy-load/lazy-load.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], LazyLoadComponent);
    return LazyLoadComponent;
}());



/***/ }),

/***/ "./src/app/lazy-load/lazy-load.module.ts":
/*!***********************************************!*\
  !*** ./src/app/lazy-load/lazy-load.module.ts ***!
  \***********************************************/
/*! exports provided: LazyLoadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadModule", function() { return LazyLoadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_lazy_load_lazy_load_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/lazy-load/lazy-load-routing.module */ "./src/app/lazy-load/lazy-load-routing.module.ts");
/* harmony import */ var _app_lazy_load_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/lazy-load/store */ "./src/app/lazy-load/store/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LazyLoadModule = /** @class */ (function () {
    function LazyLoadModule() {
    }
    LazyLoadModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_app_lazy_load_lazy_load_routing_module__WEBPACK_IMPORTED_MODULE_1__["LazyLoadRoutingModule"].components],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                /**
               * StoreModule.forFeature is imported in this feature module, accepting a reducer
               * function or object map of reducer functions. It is used for composing state
               * from feature modules. These modules can be loaded eagerly or lazily and
               * will be dynamically added to the root state. First argument is name of the
               * feature state and second argument is a reducer or object map of reducer
               * which manages feature state
               */
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('lazyLoad', _app_lazy_load_store__WEBPACK_IMPORTED_MODULE_2__["lazyLoadReducer"]),
                _app_lazy_load_lazy_load_routing_module__WEBPACK_IMPORTED_MODULE_1__["LazyLoadRoutingModule"]
            ]
        })
    ], LazyLoadModule);
    return LazyLoadModule;
}());



/***/ }),

/***/ "./src/app/lazy-load/store/index.ts":
/*!******************************************!*\
  !*** ./src/app/lazy-load/store/index.ts ***!
  \******************************************/
/*! exports provided: LazyLoadStoreActions, lazyLoadReducer, LazyLoadStoreSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_lazy_load_store_lazy_load_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/lazy-load/store/lazy-load.actions */ "./src/app/lazy-load/store/lazy-load.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "LazyLoadStoreActions", function() { return _app_lazy_load_store_lazy_load_actions__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _app_lazy_load_store_lazy_load_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/lazy-load/store/lazy-load.reducer */ "./src/app/lazy-load/store/lazy-load.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lazyLoadReducer", function() { return _app_lazy_load_store_lazy_load_reducer__WEBPACK_IMPORTED_MODULE_1__["lazyLoadReducer"]; });

/* harmony import */ var _app_lazy_load_store_lazy_load_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/lazy-load/store/lazy-load.selectors */ "./src/app/lazy-load/store/lazy-load.selectors.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "LazyLoadStoreSelectors", function() { return _app_lazy_load_store_lazy_load_selectors__WEBPACK_IMPORTED_MODULE_2__; });






/***/ }),

/***/ "./src/app/lazy-load/store/lazy-load-state.interface.ts":
/*!**************************************************************!*\
  !*** ./src/app/lazy-load/store/lazy-load-state.interface.ts ***!
  \**************************************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
var initialState = {
    message: ''
};


/***/ }),

/***/ "./src/app/lazy-load/store/lazy-load.actions.ts":
/*!******************************************************!*\
  !*** ./src/app/lazy-load/store/lazy-load.actions.ts ***!
  \******************************************************/
/*! exports provided: ActionTypes, EnglishTranslator, SpanishTranslator, ResetTranslator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnglishTranslator", function() { return EnglishTranslator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpanishTranslator", function() { return SpanishTranslator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetTranslator", function() { return ResetTranslator; });
/* harmony import */ var _app_root_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/root-store */ "./src/app/root-store/index.ts");

// TypeScript enum’s are immutable
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["ENGLISH"] = "[Lazy-Load Page] English Translation";
    ActionTypes["SPANISH"] = "[Lazy-Load Page] Spanish Translation";
    ActionTypes["RESET"] = "[Lazy-Load Page] Reset Translation";
})(ActionTypes || (ActionTypes = {}));
// To ensure NgRX actions have unique names across the application.
// This prevents any duplicate actions being dispatched.
Object(_app_root_store__WEBPACK_IMPORTED_MODULE_0__["isActionNameUnique"])(ActionTypes);
var EnglishTranslator = /** @class */ (function () {
    function EnglishTranslator() {
        this.type = ActionTypes.ENGLISH;
    }
    return EnglishTranslator;
}());

var SpanishTranslator = /** @class */ (function () {
    function SpanishTranslator() {
        this.type = ActionTypes.SPANISH;
    }
    return SpanishTranslator;
}());

var ResetTranslator = /** @class */ (function () {
    function ResetTranslator() {
        this.type = ActionTypes.RESET;
    }
    return ResetTranslator;
}());



/***/ }),

/***/ "./src/app/lazy-load/store/lazy-load.reducer.ts":
/*!******************************************************!*\
  !*** ./src/app/lazy-load/store/lazy-load.reducer.ts ***!
  \******************************************************/
/*! exports provided: lazyLoadReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazyLoadReducer", function() { return lazyLoadReducer; });
/* harmony import */ var _app_lazy_load_store_lazy_load_state_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/lazy-load/store/lazy-load-state.interface */ "./src/app/lazy-load/store/lazy-load-state.interface.ts");
/* harmony import */ var _app_lazy_load_store_lazy_load_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/lazy-load/store/lazy-load.actions */ "./src/app/lazy-load/store/lazy-load.actions.ts");
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


function lazyLoadReducer(state, action) {
    if (state === void 0) { state = _app_lazy_load_store_lazy_load_state_interface__WEBPACK_IMPORTED_MODULE_0__["initialState"]; }
    switch (action.type) {
        case _app_lazy_load_store_lazy_load_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].ENGLISH:
            return __assign({}, state, { message: 'Hello World' });
        case _app_lazy_load_store_lazy_load_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SPANISH:
            return __assign({}, state, { message: 'Hola Mundo' });
        case _app_lazy_load_store_lazy_load_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].RESET:
            return __assign({}, state, _app_lazy_load_store_lazy_load_state_interface__WEBPACK_IMPORTED_MODULE_0__["initialState"]);
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/lazy-load/store/lazy-load.selectors.ts":
/*!********************************************************!*\
  !*** ./src/app/lazy-load/store/lazy-load.selectors.ts ***!
  \********************************************************/
/*! exports provided: selectMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMessage", function() { return selectMessage; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

// Selector functions
var selectLazyLoadFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('lazyLoad');
var selectMessage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectLazyLoadFeatureState, function (state) { return state.message; });


/***/ })

}]);
//# sourceMappingURL=app-lazy-load-lazy-load-module.js.map