(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"@app/crud/crud.module": [
		"./src/app/crud/crud.module.ts",
		"default~app-crud-crud-module~app-crud2-crud2-module~app-search2-search2-module",
		"default~app-crud-crud-module~app-crud2-crud2-module",
		"common",
		"app-crud-crud-module"
	],
	"@app/crud2/crud2.module": [
		"./src/app/crud2/crud2.module.ts",
		"default~app-crud-crud-module~app-crud2-crud2-module~app-search2-search2-module",
		"default~app-crud-crud-module~app-crud2-crud2-module",
		"common",
		"app-crud2-crud2-module"
	],
	"@app/lazy-load/lazy-load.module": [
		"./src/app/lazy-load/lazy-load.module.ts",
		"app-lazy-load-lazy-load-module"
	],
	"@app/search/search.module": [
		"./src/app/search/search.module.ts",
		"common",
		"app-search-search-module"
	],
	"@app/search2/search2.module": [
		"./src/app/search2/search2.module.ts",
		"default~app-crud-crud-module~app-crud2-crud2-module~app-search2-search2-module",
		"common",
		"app-search2-search2-module"
	],
	"@app/side-effects/side-effects.module": [
		"./src/app/side-effects/side-effects.module.ts",
		"common",
		"app-side-effects-side-effects-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/basic/basic.component */ "./src/app/basic/basic.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'basic' },
    { path: 'basic', component: _app_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["BasicComponent"] },
    { path: 'lazy-load', loadChildren: '@app/lazy-load/lazy-load.module#LazyLoadModule' },
    { path: 'side-effects', loadChildren: '@app/side-effects/side-effects.module#SideEffectsModule' },
    { path: 'search', loadChildren: '@app/search/search.module#SearchModule' },
    { path: 'search2', loadChildren: '@app/search2/search2.module#Search2Module' },
    { path: 'crud', loadChildren: '@app/crud/crud.module#CrudModule' },
    { path: 'crud2', loadChildren: '@app/crud2/crud2.module#Crud2Module' },
    { path: '**', pathMatch: 'full', component: _app_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["BasicComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-loader\n[errorMessage]=\"errorMessage$ | async\"\n[isLoading]=\"isLoading$ | async\" >\n</app-loader>\n<main>\n  <router-outlet></router-outlet>\n</main>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_root_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/root-store */ "./src/app/root-store/index.ts");
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



var AppComponent = /** @class */ (function () {
    function AppComponent(store$) {
        this.store$ = store$;
        this.title = 'ngrx-demo';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.isLoading$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_app_root_store__WEBPACK_IMPORTED_MODULE_1__["AppInitSelectors"].selectIsLoading));
        this.errorMessage$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_app_root_store__WEBPACK_IMPORTED_MODULE_1__["AppInitSelectors"].selectError));
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_basic_basic_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/basic/basic.module */ "./src/app/basic/basic.module.ts");
/* harmony import */ var _app_root_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/root-store */ "./src/app/root-store/index.ts");
/* harmony import */ var _app_root_store_app_init_app_init_store_facade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/root-store/app-init/app-init-store.facade */ "./src/app/root-store/app-init/app-init-store.facade.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/core.module */ "./src/app/core/core.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                _app_root_store__WEBPACK_IMPORTED_MODULE_5__["RootStoreModule"],
                _app_basic_basic_module__WEBPACK_IMPORTED_MODULE_4__["BasicModule"],
                _app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
                    useFactory: _app_root_store_app_init_app_init_store_facade__WEBPACK_IMPORTED_MODULE_6__["initApplication"],
                    deps: [_app_root_store_app_init_app_init_store_facade__WEBPACK_IMPORTED_MODULE_6__["AppInitStoreFacade"]],
                    multi: true
                },
            ],
            bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/basic/basic-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/basic/basic-routing.module.ts ***!
  \***********************************************/
/*! exports provided: BasicRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicRoutingModule", function() { return BasicRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/basic/basic.component */ "./src/app/basic/basic.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: 'basic',
        component: _app_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["BasicComponent"]
    }];
var BasicRoutingModule = /** @class */ (function () {
    function BasicRoutingModule() {
    }
    BasicRoutingModule.components = [
        _app_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["BasicComponent"]
    ];
    BasicRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BasicRoutingModule);
    return BasicRoutingModule;
}());



/***/ }),

/***/ "./src/app/basic/basic.component.css":
/*!*******************************************!*\
  !*** ./src/app/basic/basic.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardContainer {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\n  justify-items: center;\n  padding: 2rem;\n  margin: auto;\n  width: 24rem;\n  height: 20rem;\n  cursor: pointer;\n  background: #ffffff;\n  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjMwJSIgc3RvcC1jb2xvcj0iI2Y2ZjZmNiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjMwJSIgc3RvcC1jb2xvcj0iI2Y2ZjZmNiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlNWU1ZTUiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);\n  background: linear-gradient(to bottom,  #ffffff 0%,#f6f6f6 30%,#f6f6f6 30%,#e5e5e5 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#e5e5e5',GradientType=0 );\n  color: black;\n  border-radius: 1.75rem;\n  border-top: 1px solid #cecece;\n  border-bottom: 1px solid #E6E6E6;\n  -webkit-animation: 1.25s ease-in-out 0ms 1 fadein;\n          animation: 1.25s ease-in-out 0ms 1 fadein;\n}\n\nbutton, input[type=button] {\n  width: 40%;\n  background-color: #4CAF50;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 18px;\n}\n\nbutton, input[type=button]:hover {\n  background-color: #45a049;\n}\n\n.searchContainer {\n  margin: auto;\n  width: 500px;\n  border-radius: 5px;\n  padding-top: 20px;\n  padding-right: 20px;\n  padding-bottom: 20px;\n  padding-left: 30px;\n}\n\nspan.space {\n  padding: 1rem;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzaWMvYmFzaWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsK0JBQStCO0VBQy9CLHlDQUF5QztFQUN6QyxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsMjBCQUEyMEI7RUFNMzBCLHdGQUF3RjtFQUN4RixtSEFBbUg7RUFDbkgsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLGlEQUF5QztVQUF6Qyx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9iYXNpYy9iYXNpYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRDb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcbiAgYm94LXNoYWRvdzogMCAwIDJyZW0gcmdiYSgwLCAwLCAyNTUsIDAuMSk7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMnJlbTtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMjRyZW07XG4gIGhlaWdodDogMjByZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlBL1BnbzhjM1puSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZDJsa2RHZzlJakV3TUNVaUlHaGxhV2RvZEQwaU1UQXdKU0lnZG1sbGQwSnZlRDBpTUNBd0lERWdNU0lnY0hKbGMyVnlkbVZCYzNCbFkzUlNZWFJwYnowaWJtOXVaU0krQ2lBZ1BHeHBibVZoY2tkeVlXUnBaVzUwSUdsa1BTSm5jbUZrTFhWaloyY3RaMlZ1WlhKaGRHVmtJaUJuY21Ga2FXVnVkRlZ1YVhSelBTSjFjMlZ5VTNCaFkyVlBibFZ6WlNJZ2VERTlJakFsSWlCNU1UMGlNQ1VpSUhneVBTSXdKU0lnZVRJOUlqRXdNQ1VpUGdvZ0lDQWdQSE4wYjNBZ2IyWm1jMlYwUFNJd0pTSWdjM1J2Y0MxamIyeHZjajBpSTJabVptWm1aaUlnYzNSdmNDMXZjR0ZqYVhSNVBTSXhJaTgrQ2lBZ0lDQThjM1J2Y0NCdlptWnpaWFE5SWpNd0pTSWdjM1J2Y0MxamIyeHZjajBpSTJZMlpqWm1OaUlnYzNSdmNDMXZjR0ZqYVhSNVBTSXhJaTgrQ2lBZ0lDQThjM1J2Y0NCdlptWnpaWFE5SWpNd0pTSWdjM1J2Y0MxamIyeHZjajBpSTJZMlpqWm1OaUlnYzNSdmNDMXZjR0ZqYVhSNVBTSXhJaTgrQ2lBZ0lDQThjM1J2Y0NCdlptWnpaWFE5SWpFd01DVWlJSE4wYjNBdFkyOXNiM0k5SWlObE5XVTFaVFVpSUhOMGIzQXRiM0JoWTJsMGVUMGlNU0l2UGdvZ0lEd3ZiR2x1WldGeVIzSmhaR2xsYm5RK0NpQWdQSEpsWTNRZ2VEMGlNQ0lnZVQwaU1DSWdkMmxrZEdnOUlqRWlJR2hsYVdkb2REMGlNU0lnWm1sc2JEMGlkWEpzS0NObmNtRmtMWFZqWjJjdFoyVnVaWEpoZEdWa0tTSWdMejRLUEM5emRtYyspO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICAjZmZmZmZmIDAlLCAjZjZmNmY2IDMwJSwgI2Y2ZjZmNiAzMCUsICNlNWU1ZTUgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsI2ZmZmZmZiksIGNvbG9yLXN0b3AoMzAlLCNmNmY2ZjYpLCBjb2xvci1zdG9wKDMwJSwjZjZmNmY2KSwgY29sb3Itc3RvcCgxMDAlLCNlNWU1ZTUpKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgI2ZmZmZmZiAwJSwjZjZmNmY2IDMwJSwjZjZmNmY2IDMwJSwjZTVlNWU1IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAgI2ZmZmZmZiAwJSwjZjZmNmY2IDMwJSwjZjZmNmY2IDMwJSwjZTVlNWU1IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgICNmZmZmZmYgMCUsI2Y2ZjZmNiAzMCUsI2Y2ZjZmNiAzMCUsI2U1ZTVlNSAxMDAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgICNmZmZmZmYgMCUsI2Y2ZjZmNiAzMCUsI2Y2ZjZmNiAzMCUsI2U1ZTVlNSAxMDAlKTtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZmZmZmYnLCBlbmRDb2xvcnN0cj0nI2U1ZTVlNScsR3JhZGllbnRUeXBlPTAgKTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxLjc1cmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NlY2VjZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFNkU2RTY7XG4gIGFuaW1hdGlvbjogMS4yNXMgZWFzZS1pbi1vdXQgMG1zIDEgZmFkZWluO1xufVxuXG5idXR0b24sIGlucHV0W3R5cGU9YnV0dG9uXSB7XG4gIHdpZHRoOiA0MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbmJ1dHRvbiwgaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcbn1cblxuLnNlYXJjaENvbnRhaW5lciB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDUwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG5zcGFuLnNwYWNlIHtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/basic/basic.component.html":
/*!********************************************!*\
  !*** ./src/app/basic/basic.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h3>Demo 1</h3>\n</div>\n<div>\n<h2>{{ message$ | async }}</h2>\n  <button (click)=\"translateInEnglish()\">English</button>\n  <span class=\"space\"></span>\n  <button (click)=\"translateInSpanish()\">Spanish</button>\n  <span class=\"space\"></span>\n  <button (click)=\"resetMessage()\">Reset Message</button>\n</div>\n<br><br>\n<div>\n  <h2>{{ status$ | async}}</h2>\n  <button (click)=\"on()\">ON</button>\n  <span class=\"space\"></span>\n  <button (click)=\"off()\">OFF</button>\n  <span class=\"space\"></span>\n  <button (click)=\"resetSwitch()\">Reset Switch</button>\n</div>\n<br><br>\n<div>\n  <h5>Click Log Out to clear the store to default state. Verify using Redux Dev Tool</h5>\n  <button (click)=\"logOut()\">Log Out</button>\n</div>\n<br><br>\n<div>\n  <h5>Application Environment Config Settings, loaded into store during application start via APP_INITIALIZER</h5>\n  <app-config-table [appEnvConfig]=\"appEnvConfig$ | async\"></app-config-table>\n</div>\n\n"

/***/ }),

/***/ "./src/app/basic/basic.component.ts":
/*!******************************************!*\
  !*** ./src/app/basic/basic.component.ts ***!
  \******************************************/
/*! exports provided: BasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicComponent", function() { return BasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_basic_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/basic/store */ "./src/app/basic/store/index.ts");
/* harmony import */ var _app_root_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/root-store */ "./src/app/root-store/index.ts");
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





var BasicComponent = /** @class */ (function () {
    function BasicComponent(store$) {
        this.store$ = store$;
    }
    BasicComponent.prototype.ngOnInit = function () {
        this.message$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])('basic'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response.message.message;
        }));
        this.status$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_app_basic_store__WEBPACK_IMPORTED_MODULE_1__["BasicStoreSelectors"].selectSwitchStatus));
        this.appEnvConfig$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_app_root_store__WEBPACK_IMPORTED_MODULE_2__["AppInitSelectors"].selectConfig));
    };
    BasicComponent.prototype.translateInEnglish = function () {
        this.store$.dispatch(new _app_basic_store__WEBPACK_IMPORTED_MODULE_1__["MessageStoreActions"].EnglishTranslator());
    };
    BasicComponent.prototype.translateInSpanish = function () {
        this.store$.dispatch(new _app_basic_store__WEBPACK_IMPORTED_MODULE_1__["MessageStoreActions"].SpanishTranslator());
    };
    BasicComponent.prototype.resetMessage = function () {
        this.store$.dispatch(new _app_basic_store__WEBPACK_IMPORTED_MODULE_1__["MessageStoreActions"].ResetTranslator());
    };
    BasicComponent.prototype.on = function () {
        this.store$.dispatch(new _app_basic_store__WEBPACK_IMPORTED_MODULE_1__["SwitchStoreActions"].SwitchON(true));
    };
    BasicComponent.prototype.off = function () {
        this.store$.dispatch(new _app_basic_store__WEBPACK_IMPORTED_MODULE_1__["SwitchStoreActions"].SwitchOFF(false));
    };
    BasicComponent.prototype.resetSwitch = function () {
        this.store$.dispatch(new _app_basic_store__WEBPACK_IMPORTED_MODULE_1__["SwitchStoreActions"].ResetSwitch());
    };
    BasicComponent.prototype.logOut = function () {
        this.store$.dispatch(new _app_root_store__WEBPACK_IMPORTED_MODULE_2__["RootStoreActions"].LogoutToHome());
    };
    BasicComponent.prototype.loadAppConfig = function () {
        this.store$.dispatch(new _app_root_store__WEBPACK_IMPORTED_MODULE_2__["AppConfigActions"].AppConfigLoadRequest());
    };
    BasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic',
            template: __webpack_require__(/*! ./basic.component.html */ "./src/app/basic/basic.component.html"),
            styles: [__webpack_require__(/*! ./basic.component.css */ "./src/app/basic/basic.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], BasicComponent);
    return BasicComponent;
}());



/***/ }),

/***/ "./src/app/basic/basic.module.ts":
/*!***************************************!*\
  !*** ./src/app/basic/basic.module.ts ***!
  \***************************************/
/*! exports provided: BasicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicModule", function() { return BasicModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_basic_basic_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/basic/basic-routing.module */ "./src/app/basic/basic-routing.module.ts");
/* harmony import */ var _app_basic_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/basic/store */ "./src/app/basic/store/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BasicModule = /** @class */ (function () {
    function BasicModule() {
    }
    BasicModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
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
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('basic', _app_basic_store__WEBPACK_IMPORTED_MODULE_2__["BasicStoreState"].basicReducers),
                _app_basic_basic_routing_module__WEBPACK_IMPORTED_MODULE_1__["BasicRoutingModule"] // always import routing module as the last imported module
            ],
            declarations: [_app_basic_basic_routing_module__WEBPACK_IMPORTED_MODULE_1__["BasicRoutingModule"].components]
        })
    ], BasicModule);
    return BasicModule;
}());



/***/ }),

/***/ "./src/app/basic/store/basic-state.interface.ts":
/*!******************************************************!*\
  !*** ./src/app/basic/store/basic-state.interface.ts ***!
  \******************************************************/
/*! exports provided: basicReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basicReducers", function() { return basicReducers; });
/* harmony import */ var _app_basic_store_message_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/basic/store/message.reducer */ "./src/app/basic/store/message.reducer.ts");
/* harmony import */ var _app_basic_store_switch_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/basic/store/switch.reducer */ "./src/app/basic/store/switch.reducer.ts");


/**
 * Here basic feature module state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 * Signature matches BasicState interface
 */
var basicReducers = {
    message: _app_basic_store_message_reducer__WEBPACK_IMPORTED_MODULE_0__["messageReducer"],
    switch: _app_basic_store_switch_reducer__WEBPACK_IMPORTED_MODULE_1__["switchReducer"]
};


/***/ }),

/***/ "./src/app/basic/store/basic.selector.ts":
/*!***********************************************!*\
  !*** ./src/app/basic/store/basic.selector.ts ***!
  \***********************************************/
/*! exports provided: selectSwitchState, selectSwitchStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSwitchState", function() { return selectSwitchState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSwitchStatus", function() { return selectSwitchStatus; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

// Selector functions
// Look up feature state from store using  feature state name 'basic'
var selectBasicFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('basic');
// createSelector function can take up to eight selector functions
// as arguments, each one referencing to different slices of state.
// The last argumet to createSelector is treated as  “projector function”
var selectSwitchState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBasicFeatureState, function (state) { return state.switch; });
var selectSwitchStatus = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSwitchState, function (state) { return state.hasStatus; });


/***/ }),

/***/ "./src/app/basic/store/index.ts":
/*!**************************************!*\
  !*** ./src/app/basic/store/index.ts ***!
  \**************************************/
/*! exports provided: BasicStoreSelectors, BasicStoreState, MessageStoreActions, SwitchStoreActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_basic_store_basic_state_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/basic/store/basic-state.interface */ "./src/app/basic/store/basic-state.interface.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "BasicStoreState", function() { return _app_basic_store_basic_state_interface__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _app_basic_store_basic_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/basic/store/basic.selector */ "./src/app/basic/store/basic.selector.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "BasicStoreSelectors", function() { return _app_basic_store_basic_selector__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _app_basic_store_message_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/basic/store/message.actions */ "./src/app/basic/store/message.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "MessageStoreActions", function() { return _app_basic_store_message_actions__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _app_basic_store_switch_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/basic/store/switch.actions */ "./src/app/basic/store/switch.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "SwitchStoreActions", function() { return _app_basic_store_switch_actions__WEBPACK_IMPORTED_MODULE_3__; });







/***/ }),

/***/ "./src/app/basic/store/message-state.interface.ts":
/*!********************************************************!*\
  !*** ./src/app/basic/store/message-state.interface.ts ***!
  \********************************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
var initialState = {
    message: ''
};


/***/ }),

/***/ "./src/app/basic/store/message.actions.ts":
/*!************************************************!*\
  !*** ./src/app/basic/store/message.actions.ts ***!
  \************************************************/
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
    ActionTypes["ENGLISH"] = "[Basic Page] English Translation";
    ActionTypes["SPANISH"] = "[Basic Page] Spanish Translation";
    ActionTypes["RESET"] = "[Basic Page] Reset Translation";
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

/***/ "./src/app/basic/store/message.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/basic/store/message.reducer.ts ***!
  \************************************************/
/*! exports provided: messageReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageReducer", function() { return messageReducer; });
/* harmony import */ var _app_basic_store_message_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/basic/store/message.actions */ "./src/app/basic/store/message.actions.ts");
/* harmony import */ var _message_state_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-state.interface */ "./src/app/basic/store/message-state.interface.ts");
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


function messageReducer(state, action) {
    if (state === void 0) { state = _message_state_interface__WEBPACK_IMPORTED_MODULE_1__["initialState"]; }
    switch (action.type) {
        case _app_basic_store_message_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].ENGLISH:
            return __assign({}, state, { message: 'Hello World' });
        case _app_basic_store_message_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].SPANISH:
            return __assign({}, state, { message: 'Hola Mundo' });
        case _app_basic_store_message_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].RESET:
            return __assign({}, state, _message_state_interface__WEBPACK_IMPORTED_MODULE_1__["initialState"]);
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/basic/store/switch-state.interface.ts":
/*!*******************************************************!*\
  !*** ./src/app/basic/store/switch-state.interface.ts ***!
  \*******************************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
var initialState = {
    hasStatus: false
};


/***/ }),

/***/ "./src/app/basic/store/switch.actions.ts":
/*!***********************************************!*\
  !*** ./src/app/basic/store/switch.actions.ts ***!
  \***********************************************/
/*! exports provided: ActionTypes, SwitchON, SwitchOFF, ResetSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchON", function() { return SwitchON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchOFF", function() { return SwitchOFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetSwitch", function() { return ResetSwitch; });
/* harmony import */ var _app_root_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/root-store */ "./src/app/root-store/index.ts");

var ActionTypes;
(function (ActionTypes) {
    ActionTypes["ON"] = "[Basic Page] ON Switch";
    ActionTypes["OFF"] = "[Basic Page] OFF Switch";
    ActionTypes["RESET"] = "[Basic Page] Reset Switch";
})(ActionTypes || (ActionTypes = {}));
// To ensure NgRX actions have unique names across the application.
// This prevents any duplicate actions being dispatched.
Object(_app_root_store__WEBPACK_IMPORTED_MODULE_0__["isActionNameUnique"])(ActionTypes);
var SwitchON = /** @class */ (function () {
    function SwitchON(payload) {
        this.payload = payload;
        this.type = ActionTypes.ON;
    }
    return SwitchON;
}());

var SwitchOFF = /** @class */ (function () {
    function SwitchOFF(payload) {
        this.payload = payload;
        this.type = ActionTypes.OFF;
    }
    return SwitchOFF;
}());

var ResetSwitch = /** @class */ (function () {
    function ResetSwitch() {
        this.type = ActionTypes.RESET;
    }
    return ResetSwitch;
}());



/***/ }),

/***/ "./src/app/basic/store/switch.reducer.ts":
/*!***********************************************!*\
  !*** ./src/app/basic/store/switch.reducer.ts ***!
  \***********************************************/
/*! exports provided: switchReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchReducer", function() { return switchReducer; });
/* harmony import */ var _app_basic_store_switch_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/basic/store/switch.actions */ "./src/app/basic/store/switch.actions.ts");
/* harmony import */ var _switch_state_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switch-state.interface */ "./src/app/basic/store/switch-state.interface.ts");
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


function switchReducer(state, action) {
    if (state === void 0) { state = _switch_state_interface__WEBPACK_IMPORTED_MODULE_1__["initialState"]; }
    switch (action.type) {
        case _app_basic_store_switch_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].ON:
            return __assign({}, state, { hasStatus: action.payload });
        case _app_basic_store_switch_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].OFF:
            return __assign({}, state, { hasStatus: action.payload });
        case _app_basic_store_switch_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].RESET:
            return __assign({}, state, _switch_state_interface__WEBPACK_IMPORTED_MODULE_1__["initialState"]);
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/core/core.constants.ts":
/*!****************************************!*\
  !*** ./src/app/core/core.constants.ts ***!
  \****************************************/
/*! exports provided: CoreConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreConstants", function() { return CoreConstants; });
var CoreConstants = /** @class */ (function () {
    function CoreConstants() {
    }
    // tslint:disable-next-line:max-line-length
    CoreConstants.NUMERIC_REGEXP = "[0-9]*";
    CoreConstants.NAME_REGEXP = "^[a-zA-Z ]*$";
    return CoreConstants;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _core_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/loader/loader.component */ "./src/app/core/loader/loader.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
            ],
            declarations: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _core_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"]],
            exports: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _core_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"]],
            providers: []
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/header/header.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainHeader {\n  width: 100%;\n  display: grid;\n  grid-gap: 2px;\n  grid-template-columns: 300px 100px 150px 150px 120px 170px 170px 150px;\n  grid-template-rows: 1fr;\n  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\n  height: 4rem;\n  margin: 0;\n  align-items: center;\n  background-color: #253b56;\n  color: white;\n}\n\n.logoText {\n  letter-spacing: 0.1rem;\n  display: inline;\n  margin: 0.5rem 0;\n  padding-left: 6px;\n}\n\n.menuText {\n  letter-spacing: 0.1rem;\n  display: inline;\n  margin: 0.5rem 0;\n}\n\n.menuText a:hover {\n  cursor:pointer;\n\tcursor:hand;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYixzRUFBc0U7RUFDdEUsdUJBQXVCO0VBQ3ZCLHlDQUF5QztFQUN6QyxZQUFZO0VBQ1osU0FBUztFQUNULG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0NBQ2YsV0FBVztBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbkhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMnB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDEwMHB4IDE1MHB4IDE1MHB4IDEyMHB4IDE3MHB4IDE3MHB4IDE1MHB4O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgYm94LXNoYWRvdzogMCAwIDJyZW0gcmdiYSgwLCAwLCAyNTUsIDAuMSk7XG4gIGhlaWdodDogNHJlbTtcbiAgbWFyZ2luOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUzYjU2O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5sb2dvVGV4dCB7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG59XG5cbi5tZW51VGV4dCB7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbn1cblxuLm1lbnVUZXh0IGE6aG92ZXIge1xuICBjdXJzb3I6cG9pbnRlcjtcblx0Y3Vyc29yOmhhbmQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/core/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"mainHeader\">\n  <h3 class=\"logoText\">Angular NGRX Demo</h3>\n  <h6 class=\"menuText\"><a  (click)=\"goBasic()\" >Basic</a></h6>\n  <h6 class=\"menuText\"><a  (click)=\"goLazyLoad()\" >Lazy-Load</a></h6>\n  <h6 class=\"menuText\"><a  (click)=\"goSideEffects()\" >Side-Effects</a></h6>\n  <h6 class=\"menuText\"><a  (click)=\"goSearch()\" >Search</a></h6>\n  <h6 class=\"menuText\"><a  (click)=\"goSearch2()\" >Entity-Search</a></h6>\n  <h6 class=\"menuText\"><a  (click)=\"goCrud()\" >Entity-CRUD</a></h6>\n  <h6 class=\"menuText\"><a  (click)=\"goCrud2()\" >Facade</a></h6>\n</header>\n"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.goBasic = function () {
        this.router.navigate(['basic']);
    };
    HeaderComponent.prototype.goLazyLoad = function () {
        this.router.navigate(['lazy-load']);
    };
    HeaderComponent.prototype.goSideEffects = function () {
        this.router.navigate(['side-effects']);
    };
    HeaderComponent.prototype.goSearch = function () {
        this.router.navigate(['search']);
    };
    HeaderComponent.prototype.goSearch2 = function () {
        this.router.navigate(['search2']);
    };
    HeaderComponent.prototype.goCrud = function () {
        this.router.navigate(['crud']);
    };
    HeaderComponent.prototype.goCrud2 = function () {
        this.router.navigate(['crud2']);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/core/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/loader/loader.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/loader/loader.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert-error {\n  margin: 10px 0px;\n  padding:12px;\n  color: #D8000C;\n  background-color: #FFD2D2;\n  margin:10px 22px;\n  font-size:16px;\n  vertical-align:middle;\n}\n\n.loader {\n  position: absolute;\n  left: 40%;\n  top: 50%;\n  z-index: 1;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #253b56;\n  border-bottom: 16px solid#253b56;\n  width: 80px;\n  height: 80px;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxZQUFZO0VBQ1osMENBQTBDO0VBQzFDLGtDQUFrQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0LWVycm9yIHtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgcGFkZGluZzoxMnB4O1xuICBjb2xvcjogI0Q4MDAwQztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDJEMjtcbiAgbWFyZ2luOjEwcHggMjJweDtcbiAgZm9udC1zaXplOjE2cHg7XG4gIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcbn1cblxuLmxvYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNDAlO1xuICB0b3A6IDUwJTtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMjUzYjU2O1xuICBib3JkZXItYm90dG9tOiAxNnB4IHNvbGlkIzI1M2I1NjtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/core/loader/loader.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/loader/loader.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"isLoading\">\n  <div class=\"loader\"></div>\n</ng-container>\n\n<div *ngIf=\"errorMessage\" class=\"alert-error\">\n  {{ errorMessage }}\n</div>\n"

/***/ }),

/***/ "./src/app/core/loader/loader.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/loader/loader.component.ts ***!
  \*************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LoaderComponent.prototype, "errorMessage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], LoaderComponent.prototype, "isLoading", void 0);
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/core/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/core/loader/loader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/core/services/config.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/config.service.ts ***!
  \*************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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





var ConfigService = /** @class */ (function () {
    // private apiAppConfigURL = `api/config`;
    function ConfigService(http) {
        this.http = http;
    }
    ConfigService.prototype.loadAppConfig = function () {
        /* In real world you will get it from configuration file*/
        var envConfigFilePath = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].configFilePath;
        return this.http.get(envConfigFilePath)
            // return this.http.get<any>(this.apiAppConfigURL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            if (Object.keys(response).length === 0) {
                // if configuration is empty, throw error
                throw new Error('Application Configuration is empty');
            }
            else {
                return response;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleAndThrowRemoteError.bind(this)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            console.log('Clean up your resource here ');
        }));
    };
    ConfigService.prototype.handleAndThrowRemoteError = function (error) {
        var errorMessage = 'An error occurred while loading appliation config: ';
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error('Error caught while making remote Service call', error);
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage += "An error occurred at client: " + error.error.message;
        }
        else {
            // Server-Side Error: The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            if (error.error && error.error.status) {
                errorMessage += "Backend service returns error - " + error.error.status + ": " + error.error.message;
            }
            else {
                errorMessage += "Backend service returns error - " + error.status + ": " + error.message;
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/core/services/country.model.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/country.model.ts ***!
  \************************************************/
/*! exports provided: Country */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
var Country = /** @class */ (function () {
    function Country() {
    }
    return Country;
}());



/***/ }),

/***/ "./src/app/root-store/action-unique.ts":
/*!*********************************************!*\
  !*** ./src/app/root-store/action-unique.ts ***!
  \*********************************************/
/*! exports provided: isActionNameUnique */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isActionNameUnique", function() { return isActionNameUnique; });
/* Define a function that ensures that each action is unique. This prevents any
double actions being dispatched in the future */
var uniqueActionMap = {};
function verifyActionType(actionName) {
    // Ensures actions have unique names
    if (uniqueActionMap[actionName]) {
        console.error("Action type \"" + actionName + "\" is not unique\"");
        throw new Error("Action type \"" + actionName + "\" is not unique\"");
    }
    uniqueActionMap[actionName] = true;
}
function isActionNameUnique(ActionTypes) {
    Object.values(ActionTypes).map(function (value) { return verifyActionType(value); });
}


/***/ }),

/***/ "./src/app/root-store/app-init/app-config-state.interface.ts":
/*!*******************************************************************!*\
  !*** ./src/app/root-store/app-init/app-config-state.interface.ts ***!
  \*******************************************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
var initialState = {
    config: [],
    isLoading: false,
    error: null
};


/***/ }),

/***/ "./src/app/root-store/app-init/app-config.actions.ts":
/*!***********************************************************!*\
  !*** ./src/app/root-store/app-init/app-config.actions.ts ***!
  \***********************************************************/
/*! exports provided: ActionTypes, AppInitStart, AppInitEnd, AppConfigLoadRequest, AppConfigLoadSuccess, AppConfigLoadFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInitStart", function() { return AppInitStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInitEnd", function() { return AppInitEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigLoadRequest", function() { return AppConfigLoadRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigLoadSuccess", function() { return AppConfigLoadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigLoadFailure", function() { return AppConfigLoadFailure; });
/* harmony import */ var _action_unique__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../action-unique */ "./src/app/root-store/action-unique.ts");

var ActionTypes;
(function (ActionTypes) {
    ActionTypes["APP_INIT_START"] = "[Application Config] Start App Initializer";
    ActionTypes["APP_INIT_END"] = "[Application Config] End App Initializer";
    ActionTypes["APP_CONFIG_LOAD_REQUEST"] = "[Application Config] Load APP Config Request";
    ActionTypes["APP_CONFIG_LOAD_SUCCESS"] = "[Application Config] Load APP Config Success";
    ActionTypes["APP_CONFIG_LOAD_FAILURE"] = "[Application Config] Load APP Config Failure";
})(ActionTypes || (ActionTypes = {}));
// To ensure NgRX actions have unique names across the application.
// This prevents any duplicate actions being dispatched.
Object(_action_unique__WEBPACK_IMPORTED_MODULE_0__["isActionNameUnique"])(ActionTypes);
var AppInitStart = /** @class */ (function () {
    function AppInitStart() {
        this.type = ActionTypes.APP_INIT_START;
    }
    return AppInitStart;
}());

var AppInitEnd = /** @class */ (function () {
    function AppInitEnd() {
        this.type = ActionTypes.APP_INIT_END;
    }
    return AppInitEnd;
}());

var AppConfigLoadRequest = /** @class */ (function () {
    function AppConfigLoadRequest() {
        this.type = ActionTypes.APP_CONFIG_LOAD_REQUEST;
    }
    return AppConfigLoadRequest;
}());

var AppConfigLoadSuccess = /** @class */ (function () {
    function AppConfigLoadSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.APP_CONFIG_LOAD_SUCCESS;
    }
    return AppConfigLoadSuccess;
}());

var AppConfigLoadFailure = /** @class */ (function () {
    function AppConfigLoadFailure(payload) {
        this.payload = payload;
        this.type = ActionTypes.APP_CONFIG_LOAD_FAILURE;
    }
    return AppConfigLoadFailure;
}());



/***/ }),

/***/ "./src/app/root-store/app-init/app-config.effects.ts":
/*!***********************************************************!*\
  !*** ./src/app/root-store/app-init/app-config.effects.ts ***!
  \***********************************************************/
/*! exports provided: AppConfigEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigEffects", function() { return AppConfigEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/config.service */ "./src/app/core/services/config.service.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_config_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-config.actions */ "./src/app/root-store/app-init/app-config.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppConfigEffects = /** @class */ (function () {
    function AppConfigEffects(configService, actions$) {
        var _this = this;
        this.configService = configService;
        this.actions$ = actions$;
        this.loadAppConfigEffects$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_config_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].APP_CONFIG_LOAD_REQUEST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            return _this.configService.loadAppConfig().pipe(
            /* Use aggregator pattern:  maps an array of actions and dispatches
            actions in sequence */
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (config) {
                return [
                    new _app_config_actions__WEBPACK_IMPORTED_MODULE_5__["AppConfigLoadSuccess"](config),
                    new _app_config_actions__WEBPACK_IMPORTED_MODULE_5__["AppInitEnd"]()
                ];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _app_config_actions__WEBPACK_IMPORTED_MODULE_5__["AppConfigLoadFailure"](error)); }));
        }));
    }
    /*
    Enable or disable this effects using `ngrxOnRunEffects` life cycle hook, here
    enable the effect by dispatching the action `APP_INIT_START`, load
    app config and finally disable the effect by dispatching the action `APP_INIT_END`
    */
    AppConfigEffects.prototype.ngrxOnRunEffects = function (resolvedEffects$) {
        var _this = this;
        return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_config_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].APP_INIT_START), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function () {
            return resolvedEffects$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_app_config_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].APP_INIT_END))));
        }));
    };
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AppConfigEffects.prototype, "loadAppConfigEffects$", void 0);
    AppConfigEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_core_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]])
    ], AppConfigEffects);
    return AppConfigEffects;
}());



/***/ }),

/***/ "./src/app/root-store/app-init/app-config.reducer.ts":
/*!***********************************************************!*\
  !*** ./src/app/root-store/app-init/app-config.reducer.ts ***!
  \***********************************************************/
/*! exports provided: appConfigReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appConfigReducer", function() { return appConfigReducer; });
/* harmony import */ var _app_config_state_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-config-state.interface */ "./src/app/root-store/app-init/app-config-state.interface.ts");
/* harmony import */ var _app_config_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-config.actions */ "./src/app/root-store/app-init/app-config.actions.ts");
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


function appConfigReducer(state, action) {
    if (state === void 0) { state = _app_config_state_interface__WEBPACK_IMPORTED_MODULE_0__["initialState"]; }
    switch (action.type) {
        case _app_config_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].APP_INIT_START:
            return __assign({}, state, { isLoading: true, config: [], error: null });
        case _app_config_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].APP_CONFIG_LOAD_SUCCESS:
            return __assign({}, state, { isLoading: false, config: action.payload, error: null });
        case _app_config_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].APP_CONFIG_LOAD_FAILURE:
            return __assign({}, state, { isLoading: false, config: [], error: action.payload });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/root-store/app-init/app-init-store.facade.ts":
/*!**************************************************************!*\
  !*** ./src/app/root-store/app-init/app-init-store.facade.ts ***!
  \**************************************************************/
/*! exports provided: AppInitStoreFacade, initApplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInitStoreFacade", function() { return AppInitStoreFacade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initApplication", function() { return initApplication; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_config_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-config.actions */ "./src/app/root-store/app-init/app-config.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppInitStoreFacade = /** @class */ (function () {
    function AppInitStoreFacade(store$) {
        this.store$ = store$;
    }
    AppInitStoreFacade.prototype.loadAppConfig = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log("initializeApp:: inside promise");
            _this.store$.dispatch(new _app_config_actions__WEBPACK_IMPORTED_MODULE_2__["AppInitStart"]);
            _this.store$.dispatch(new _app_config_actions__WEBPACK_IMPORTED_MODULE_2__["AppConfigLoadRequest"]());
            resolve(true);
        });
    };
    AppInitStoreFacade = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], AppInitStoreFacade);
    return AppInitStoreFacade;
}());

function initApplication(appInitStoreFacade) {
    return function () { return appInitStoreFacade.loadAppConfig(); };
}


/***/ }),

/***/ "./src/app/root-store/app-init/app-init.selectors.ts":
/*!***********************************************************!*\
  !*** ./src/app/root-store/app-init/app-init.selectors.ts ***!
  \***********************************************************/
/*! exports provided: selectConfig, selectError, selectIsLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectConfig", function() { return selectConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectError", function() { return selectError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsLoading", function() { return selectIsLoading; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

// Selector functions
var selectAppConfigState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('config');
var selectConfig = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAppConfigState, function (state) { return state.config; });
var selectError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAppConfigState, function (state) { return state.error; });
var selectIsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAppConfigState, function (state) { return state.isLoading; });


/***/ }),

/***/ "./src/app/root-store/index.ts":
/*!*************************************!*\
  !*** ./src/app/root-store/index.ts ***!
  \*************************************/
/*! exports provided: isActionNameUnique, AppConfigActions, AppInitSelectors, RootStoreActions, RootStoreModule, RouterStoreSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_root_store_action_unique__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/root-store/action-unique */ "./src/app/root-store/action-unique.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isActionNameUnique", function() { return _app_root_store_action_unique__WEBPACK_IMPORTED_MODULE_0__["isActionNameUnique"]; });

/* harmony import */ var _app_root_store_app_init_app_config_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/root-store/app-init/app-config.actions */ "./src/app/root-store/app-init/app-config.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "AppConfigActions", function() { return _app_root_store_app_init_app_config_actions__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _app_root_store_app_init_app_init_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/root-store/app-init/app-init.selectors */ "./src/app/root-store/app-init/app-init.selectors.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "AppInitSelectors", function() { return _app_root_store_app_init_app_init_selectors__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _app_root_store_root_store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/root-store/root-store.actions */ "./src/app/root-store/root-store.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "RootStoreActions", function() { return _app_root_store_root_store_actions__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _app_root_store_root_store_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/root-store/root-store.module */ "./src/app/root-store/root-store.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RootStoreModule", function() { return _app_root_store_root_store_module__WEBPACK_IMPORTED_MODULE_4__["RootStoreModule"]; });

/* harmony import */ var _app_root_store_router_store_router_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/root-store/router-store/router.selectors */ "./src/app/root-store/router-store/router.selectors.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "RouterStoreSelectors", function() { return _app_root_store_router_store_router_selectors__WEBPACK_IMPORTED_MODULE_5__; });









/***/ }),

/***/ "./src/app/root-store/meta-reducers/clear-store.meta-reducer.ts":
/*!**********************************************************************!*\
  !*** ./src/app/root-store/meta-reducers/clear-store.meta-reducer.ts ***!
  \**********************************************************************/
/*! exports provided: clearStoreMetaReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStoreMetaReducer", function() { return clearStoreMetaReducer; });
/* harmony import */ var _app_root_store_root_store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/root-store/root-store.actions */ "./src/app/root-store/root-store.actions.ts");

// reset meta-reduce :  clear the store after the LOG_OUT action.
// If the action type is LOG_OUT we will return an undefined state and
// therefore all of the reducers will return the initial value as they are supposed to.
function clearStoreMetaReducer(reducer) {
    return function (state, action) {
        if (action.type === _app_root_store_root_store_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].LOG_OUT_TO_CLEAR_STORE) {
            state = undefined;
        }
        var nextState = reducer(state, action);
        return nextState;
    };
}


/***/ }),

/***/ "./src/app/root-store/meta-reducers/log-store.meta-reducer.ts":
/*!********************************************************************!*\
  !*** ./src/app/root-store/meta-reducers/log-store.meta-reducer.ts ***!
  \********************************************************************/
/*! exports provided: logStoreMetaReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logStoreMetaReducer", function() { return logStoreMetaReducer; });
// console.log all actions
function logStoreMetaReducer(reducer) {
    return function (state, action) {
        var nextState = reducer(state, action);
        console.groupCollapsed(action.type);
        console.log("%c prev state", "color: #9E9E9E; font-weight: bold", state);
        console.log("%c action", "color: #03A9F4; font-weight: bold", action);
        console.log("%c action payload", "color: #03A9F4; font-weight: bold", action.payload);
        console.log("%c next state", "color: #4CAF50; font-weight: bold", nextState);
        console.groupEnd();
        return nextState;
    };
}


/***/ }),

/***/ "./src/app/root-store/root-store-state.interface.ts":
/*!**********************************************************!*\
  !*** ./src/app/root-store/root-store-state.interface.ts ***!
  \**********************************************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _app_root_store_meta_reducers_clear_store_meta_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/root-store/meta-reducers/clear-store.meta-reducer */ "./src/app/root-store/meta-reducers/clear-store.meta-reducer.ts");
/* harmony import */ var _app_root_store_meta_reducers_log_store_meta_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/root-store/meta-reducers/log-store.meta-reducer */ "./src/app/root-store/meta-reducers/log-store.meta-reducer.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngrx-store-freeze */ "./node_modules/ngrx-store-freeze/index.js");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_init_app_config_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-init/app-config.reducer */ "./src/app/root-store/app-init/app-config.reducer.ts");






var reducers = {
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["routerReducer"],
    config: _app_init_app_config_reducer__WEBPACK_IMPORTED_MODULE_5__["appConfigReducer"]
};
/**
 * Compose a map of meta reducers.
 * `clearStoreMetaReducer` - clears the store, will be useful when you want to reset the
 * store as soon as user logs out of the application.
 * `storeFreeze` - prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 * `logStoreMetaReducer` - logs store actions, action payload, previous state,
 * current state. Useful for debugging during development
 */
var metaReducers = [
    _app_root_store_meta_reducers_clear_store_meta_reducer__WEBPACK_IMPORTED_MODULE_0__["clearStoreMetaReducer"]
];
if (!_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    metaReducers.unshift(ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_4__["storeFreeze"], _app_root_store_meta_reducers_log_store_meta_reducer__WEBPACK_IMPORTED_MODULE_1__["logStoreMetaReducer"]);
}


/***/ }),

/***/ "./src/app/root-store/root-store.actions.ts":
/*!**************************************************!*\
  !*** ./src/app/root-store/root-store.actions.ts ***!
  \**************************************************/
/*! exports provided: ActionTypes, LogoutToClearStore, LogoutToHome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutToClearStore", function() { return LogoutToClearStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutToHome", function() { return LogoutToHome; });
/* harmony import */ var _app_root_store_action_unique__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/root-store/action-unique */ "./src/app/root-store/action-unique.ts");

var ActionTypes;
(function (ActionTypes) {
    ActionTypes["LOG_OUT_TO_CLEAR_STORE"] = "[ Application ] Logout to Clear Application Store";
    ActionTypes["LOG_OUT_TO_HOME"] = "[ Application ] Logout to Redirect User to Home Page";
})(ActionTypes || (ActionTypes = {}));
Object(_app_root_store_action_unique__WEBPACK_IMPORTED_MODULE_0__["isActionNameUnique"])(ActionTypes);
var LogoutToClearStore = /** @class */ (function () {
    function LogoutToClearStore() {
        this.type = ActionTypes.LOG_OUT_TO_CLEAR_STORE;
    }
    return LogoutToClearStore;
}());

var LogoutToHome = /** @class */ (function () {
    function LogoutToHome() {
        this.type = ActionTypes.LOG_OUT_TO_HOME;
    }
    return LogoutToHome;
}());



/***/ }),

/***/ "./src/app/root-store/root-store.effects.ts":
/*!**************************************************!*\
  !*** ./src/app/root-store/root-store.effects.ts ***!
  \**************************************************/
/*! exports provided: RootStoreEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootStoreEffects", function() { return RootStoreEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_root_store_root_store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/root-store/root-store.actions */ "./src/app/root-store/root-store.actions.ts");
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






var RootStoreEffects = /** @class */ (function () {
    function RootStoreEffects(actions$, router) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        // On Logout navigate user to home screen and dispatch action to reducer to clear the store
        this.logOutUserEffects$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_app_root_store_root_store_actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].LOG_OUT_TO_HOME), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { _this.router.navigate(['basic']); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return (new _app_root_store_root_store_actions__WEBPACK_IMPORTED_MODULE_2__["LogoutToClearStore"]()); }));
        /*
          ROOT_EFFECTS_INIT gets triggered before  APP_INITIALIZER complete its task.
          Here is the work around
          https://github.com/ngrx/platform/issues/931
        */
        this.init$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ROOT_EFFECTS_INIT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return console.log('All the Root Effects has been added and registered'); }));
    }
    /*
    OnInitEffects gets invoked before ROOT_EFFECTS_INIT.
    */
    RootStoreEffects.prototype.ngrxOnInitEffects = function () {
        console.log('Root Effects has been Initialized');
        return { type: '[RootEffects]: Init' };
    };
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], RootStoreEffects.prototype, "logOutUserEffects$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], RootStoreEffects.prototype, "init$", void 0);
    RootStoreEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RootStoreEffects);
    return RootStoreEffects;
}());



/***/ }),

/***/ "./src/app/root-store/root-store.module.ts":
/*!*************************************************!*\
  !*** ./src/app/root-store/root-store.module.ts ***!
  \*************************************************/
/*! exports provided: RootStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootStoreModule", function() { return RootStoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_root_store_app_init_app_config_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/root-store/app-init/app-config.effects */ "./src/app/root-store/app-init/app-config.effects.ts");
/* harmony import */ var _app_root_store_root_store_state_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/root-store/root-store-state.interface */ "./src/app/root-store/root-store-state.interface.ts");
/* harmony import */ var _app_root_store_root_store_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/root-store/root-store.effects */ "./src/app/root-store/root-store.effects.ts");
/* harmony import */ var _app_root_store_router_store_custom_serializer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/root-store/router-store/custom-serializer */ "./src/app/root-store/router-store/custom-serializer.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var RootStoreModule = /** @class */ (function () {
    function RootStoreModule() {
    }
    RootStoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                /**
                * StoreModule.forRoot is imported once in the root module, accepting a reducer
                * function or object map of reducer functions. If passed an object of
                * reducers, combineReducers will be run creating your application
                * meta-reducer. This returns all providers for an @ngrx/store
                * based application. GenerallyIt forRoot is register with Global level reducer to
                * manage global state like authorization, analytics etc.
                * routerReducer is out of the box reducer provided by '@ngrx/router-store'
                * to manage latest router's state in store. Router state consists of route params,
                * query params, url, outlet, routeConfig, data
                *
                */
                _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot(_app_root_store_root_store_state_interface__WEBPACK_IMPORTED_MODULE_3__["reducers"], { metaReducers: _app_root_store_root_store_state_interface__WEBPACK_IMPORTED_MODULE_3__["metaReducers"] }),
                /**
                 * EffectsModule.forRoot() is imported once in the root module and
                 * sets up the effects class to be initialized immediately when the
                 * application starts.
                 */
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([_app_root_store_app_init_app_config_effects__WEBPACK_IMPORTED_MODULE_2__["AppConfigEffects"], _app_root_store_root_store_effects__WEBPACK_IMPORTED_MODULE_4__["RootStoreEffects"]]),
                /**
                 * Store devtools instrument the store retaining past versions of state
                 * and recalculating new states. This enables powerful time-travel
                 * debugging. To use the debugger, install the Redux Devtools extension for either
                 * Chrome or Firefox. Note that you must instrument after importing StoreModule
                 * StoreDev Tool should be enabled only for non-production environments
                 */
                // Connects RouterModule with StoreModule
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_8__["StoreRouterConnectingModule"].forRoot({}),
                _env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
                    ? []
                    : _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"].instrument({
                        name: 'RA NGRX Demo',
                        maxAge: 30 // retains last 30 states/actions
                    })
            ],
            providers: [{ provide: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_8__["RouterStateSerializer"], useClass: _app_root_store_router_store_custom_serializer__WEBPACK_IMPORTED_MODULE_5__["CustomSerializer"] }],
        })
    ], RootStoreModule);
    return RootStoreModule;
}());



/***/ }),

/***/ "./src/app/root-store/router-store/custom-serializer.ts":
/*!**************************************************************!*\
  !*** ./src/app/root-store/router-store/custom-serializer.ts ***!
  \**************************************************************/
/*! exports provided: CustomSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSerializer", function() { return CustomSerializer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomSerializer = /** @class */ (function () {
    function CustomSerializer() {
    }
    CustomSerializer.prototype.serialize = function (routerStateSnapshot) {
        var route = routerStateSnapshot.root;
        while (route.firstChild) {
            route = route.firstChild;
        }
        var url = routerStateSnapshot.url, queryParams = routerStateSnapshot.root.queryParams;
        var params = route.params;
        /* Only return an object including the URL, params and query params
        instead of the entire snapshot consists of URL, params, query paramas,
        paramMap, queryParamMap, outlet, data, routeConfig, queryParams to avoid
        performance issue
        */
        return { url: url, params: params, queryParams: queryParams };
    };
    CustomSerializer = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CustomSerializer);
    return CustomSerializer;
}());



/***/ }),

/***/ "./src/app/root-store/router-store/router.selectors.ts":
/*!*************************************************************!*\
  !*** ./src/app/root-store/router-store/router.selectors.ts ***!
  \*************************************************************/
/*! exports provided: selectRouterReducerState, selectRouteParameters, selectRouteQueryParams, selectRouteURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRouterReducerState", function() { return selectRouterReducerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRouteParameters", function() { return selectRouteParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRouteQueryParams", function() { return selectRouteQueryParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRouteURL", function() { return selectRouteURL; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var selectRouterReducerState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('router');
var selectRouteParameters = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectRouterReducerState, function (routerReducerState) { return routerReducerState.state.params; });
var selectRouteQueryParams = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectRouterReducerState, function (routerReducerState) { return routerReducerState.state.queryParams; });
var selectRouteURL = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectRouterReducerState, function (routerReducerState) { return routerReducerState.state.url; });


/***/ }),

/***/ "./src/app/shared/config-table/config-table.component.css":
/*!****************************************************************!*\
  !*** ./src/app/shared/config-table/config-table.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n *\tCSS STYLES FOR TABLES\n */\n table {\n  width: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbmZpZy10YWJsZS9jb25maWctdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtDQUNEO0VBQ0MsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbmZpZy10YWJsZS9jb25maWctdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICpcdENTUyBTVFlMRVMgRk9SIFRBQkxFU1xuICovXG4gdGFibGUge1xuICB3aWR0aDogNTAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/config-table/config-table.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/config-table/config-table.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\n  <tbody>\n    <tr>\n      <th>Application Environment Configurations</th>\n    </tr>\n    <tr>\n      <td>{{ appEnvConfig.env }}</td>\n    </tr>\n    <tr>\n      <td>{{ appEnvConfig.webAPIURL }}</td>\n    </tr>\n    <tr>\n      <td>{{ appEnvConfig.authURL }}</td>\n    </tr>\n    <tr>\n      <td>{{ appEnvConfig.port }}</td>\n    </tr>\n  </tbody>\n</table>\n\n"

/***/ }),

/***/ "./src/app/shared/config-table/config-table.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/config-table/config-table.component.ts ***!
  \***************************************************************/
/*! exports provided: ConfigTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigTableComponent", function() { return ConfigTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigTableComponent = /** @class */ (function () {
    function ConfigTableComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConfigTableComponent.prototype, "appEnvConfig", void 0);
    ConfigTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-config-table',
            template: __webpack_require__(/*! ./config-table.component.html */ "./src/app/shared/config-table/config-table.component.html"),
            styles: [__webpack_require__(/*! ./config-table.component.css */ "./src/app/shared/config-table/config-table.component.css")]
        })
    ], ConfigTableComponent);
    return ConfigTableComponent;
}());



/***/ }),

/***/ "./src/app/shared/country-card/country-card.component.css":
/*!****************************************************************!*\
  !*** ./src/app/shared/country-card/country-card.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardContainer {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\n  justify-items: center;\n  padding: 2rem;\n  margin: auto;\n  width: 24rem;\n  height: 20rem;\n  cursor: pointer;\n  background: #ffffff;\n  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjMwJSIgc3RvcC1jb2xvcj0iI2Y2ZjZmNiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjMwJSIgc3RvcC1jb2xvcj0iI2Y2ZjZmNiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlNWU1ZTUiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);\n  background: linear-gradient(to bottom,  #ffffff 0%,#f6f6f6 30%,#f6f6f6 30%,#e5e5e5 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#e5e5e5',GradientType=0 );\n  color: black;\n  border-radius: 1.75rem;\n  border-top: 1px solid #cecece;\n  border-bottom: 1px solid #E6E6E6;\n  -webkit-animation: 1.25s ease-in-out 0ms 1 fadein;\n          animation: 1.25s ease-in-out 0ms 1 fadein;\n}\n\n.cardTitleText {\n  text-transform: uppercase;\n  font-size: 1.4rem;\n  letter-spacing: 0.1rem;\n  margin-bottom: 0rem;\n}\n\n.label-black {\n  font-size: 1.2rem;\n  text-align: center;\n  color: black;\n}\n\n.dataText-black {\n  font-size: 1rem;\n  text-align: center;\n  color: black;\n}\n\n.flagIconContainer {\n  width: 10rem;\n  display: flex;\n  justify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvdW50cnktY2FyZC9jb3VudHJ5LWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsK0JBQStCO0VBQy9CLHlDQUF5QztFQUN6QyxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsMjBCQUEyMEI7RUFNMzBCLHdGQUF3RjtFQUN4RixtSEFBbUg7RUFDbkgsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLGlEQUF5QztVQUF6Qyx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY291bnRyeS1jYXJkL2NvdW50cnktY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRDb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcbiAgYm94LXNoYWRvdzogMCAwIDJyZW0gcmdiYSgwLCAwLCAyNTUsIDAuMSk7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMnJlbTtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMjRyZW07XG4gIGhlaWdodDogMjByZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlBL1BnbzhjM1puSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZDJsa2RHZzlJakV3TUNVaUlHaGxhV2RvZEQwaU1UQXdKU0lnZG1sbGQwSnZlRDBpTUNBd0lERWdNU0lnY0hKbGMyVnlkbVZCYzNCbFkzUlNZWFJwYnowaWJtOXVaU0krQ2lBZ1BHeHBibVZoY2tkeVlXUnBaVzUwSUdsa1BTSm5jbUZrTFhWaloyY3RaMlZ1WlhKaGRHVmtJaUJuY21Ga2FXVnVkRlZ1YVhSelBTSjFjMlZ5VTNCaFkyVlBibFZ6WlNJZ2VERTlJakFsSWlCNU1UMGlNQ1VpSUhneVBTSXdKU0lnZVRJOUlqRXdNQ1VpUGdvZ0lDQWdQSE4wYjNBZ2IyWm1jMlYwUFNJd0pTSWdjM1J2Y0MxamIyeHZjajBpSTJabVptWm1aaUlnYzNSdmNDMXZjR0ZqYVhSNVBTSXhJaTgrQ2lBZ0lDQThjM1J2Y0NCdlptWnpaWFE5SWpNd0pTSWdjM1J2Y0MxamIyeHZjajBpSTJZMlpqWm1OaUlnYzNSdmNDMXZjR0ZqYVhSNVBTSXhJaTgrQ2lBZ0lDQThjM1J2Y0NCdlptWnpaWFE5SWpNd0pTSWdjM1J2Y0MxamIyeHZjajBpSTJZMlpqWm1OaUlnYzNSdmNDMXZjR0ZqYVhSNVBTSXhJaTgrQ2lBZ0lDQThjM1J2Y0NCdlptWnpaWFE5SWpFd01DVWlJSE4wYjNBdFkyOXNiM0k5SWlObE5XVTFaVFVpSUhOMGIzQXRiM0JoWTJsMGVUMGlNU0l2UGdvZ0lEd3ZiR2x1WldGeVIzSmhaR2xsYm5RK0NpQWdQSEpsWTNRZ2VEMGlNQ0lnZVQwaU1DSWdkMmxrZEdnOUlqRWlJR2hsYVdkb2REMGlNU0lnWm1sc2JEMGlkWEpzS0NObmNtRmtMWFZqWjJjdFoyVnVaWEpoZEdWa0tTSWdMejRLUEM5emRtYyspO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICAjZmZmZmZmIDAlLCAjZjZmNmY2IDMwJSwgI2Y2ZjZmNiAzMCUsICNlNWU1ZTUgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsI2ZmZmZmZiksIGNvbG9yLXN0b3AoMzAlLCNmNmY2ZjYpLCBjb2xvci1zdG9wKDMwJSwjZjZmNmY2KSwgY29sb3Itc3RvcCgxMDAlLCNlNWU1ZTUpKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgI2ZmZmZmZiAwJSwjZjZmNmY2IDMwJSwjZjZmNmY2IDMwJSwjZTVlNWU1IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAgI2ZmZmZmZiAwJSwjZjZmNmY2IDMwJSwjZjZmNmY2IDMwJSwjZTVlNWU1IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgICNmZmZmZmYgMCUsI2Y2ZjZmNiAzMCUsI2Y2ZjZmNiAzMCUsI2U1ZTVlNSAxMDAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgICNmZmZmZmYgMCUsI2Y2ZjZmNiAzMCUsI2Y2ZjZmNiAzMCUsI2U1ZTVlNSAxMDAlKTtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZmZmZmYnLCBlbmRDb2xvcnN0cj0nI2U1ZTVlNScsR3JhZGllbnRUeXBlPTAgKTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxLjc1cmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NlY2VjZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFNkU2RTY7XG4gIGFuaW1hdGlvbjogMS4yNXMgZWFzZS1pbi1vdXQgMG1zIDEgZmFkZWluO1xufVxuXG4uY2FyZFRpdGxlVGV4dCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwcmVtO1xufVxuXG4ubGFiZWwtYmxhY2sge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5kYXRhVGV4dC1ibGFjayB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5mbGFnSWNvbkNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/country-card/country-card.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/country-card/country-card.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ng-container *ngIf=\"isLoading\">\n  <div class=\"loader\"></div>\n</ng-container>\n<section class=\"cardContainer\" *ngIf=\"country\">\n  <span class=\"cardTitleText\">{{ country?.name }}</span>\n    <div class=\"flagIconContainer\" >\n     <img [src]=\"country?.flag\" height=\"200\" width=\"300\" >\n    </div>\n    <div>\n        <span class=\"label-black\">Captial :</span>\n        <span class=\"dataTex-blackt\">{{ country?.capital }}</span>\n    </div>\n    <div>\n        <span class=\"label-black\">Region :</span>\n        <span class=\"dataText-black\">{{ country?.region }}</span>\n    </div>\n    <div>\n      <span class=\"label-black\">Population :</span>\n      <span class=\"dataText-black\">{{ country?.population | number }}</span>\n  </div>\n  <div>\n      <span class=\"label-black\">Currency :</span>\n      <span class=\"dataText-black\">{{ country?.currency }}</span>\n  </div>\n</section>\n<div *ngIf=\"errorMessage\" class=\"alert-error\">\n {{ errorMessage }}\n</div>\n"

/***/ }),

/***/ "./src/app/shared/country-card/country-card.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/country-card/country-card.component.ts ***!
  \***************************************************************/
/*! exports provided: CountryCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryCardComponent", function() { return CountryCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CountryCardComponent = /** @class */ (function () {
    function CountryCardComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CountryCardComponent.prototype, "country", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CountryCardComponent.prototype, "errorMessage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CountryCardComponent.prototype, "isLoading", void 0);
    CountryCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            selector: 'app-country-card',
            template: __webpack_require__(/*! ./country-card.component.html */ "./src/app/shared/country-card/country-card.component.html"),
            styles: [__webpack_require__(/*! ./country-card.component.css */ "./src/app/shared/country-card/country-card.component.css")]
        })
    ], CountryCardComponent);
    return CountryCardComponent;
}());



/***/ }),

/***/ "./src/app/shared/country-table/country-table.component.css":
/*!******************************************************************!*\
  !*** ./src/app/shared/country-table/country-table.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb3VudHJ5LXRhYmxlL2NvdW50cnktdGFibGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/country-table/country-table.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shared/country-table/country-table.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"isLoading\">\n  <div class=\"loader\"></div>\n</ng-container>\n<table>\n  <tbody>\n    <tr>\n      <th>#</th>\n      <th>Name</th>\n      <th>Flag</th>\n      <th>Capital</th>\n      <th>Region</th>\n      <th>Population</th>\n      <th>Currency</th>\n    </tr>\n    <tr *ngFor=\"let country of countries; trackBy: trackByFn; let i = index\">\n      <td>{{ i+1 }}</td>\n      <td>{{ country.name }}</td>\n      <td><img [src]=\"country?.flag\" height=\"50\" width=\"60\" ></td>\n      <td>{{ country.capital }}</td>\n      <td>{{ country.region }}</td>\n      <td>{{ country.population  | number }}</td>\n      <td>{{ country.currency }}</td>\n    </tr>\n  </tbody>\n</table>\n<div *ngIf=\"errorMessage\" class=\"alert-error\">\n  {{ errorMessage }}\n </div>\n"

/***/ }),

/***/ "./src/app/shared/country-table/country-table.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/country-table/country-table.component.ts ***!
  \*****************************************************************/
/*! exports provided: CountryTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryTableComponent", function() { return CountryTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_country_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/country.model */ "./src/app/core/services/country.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CountryTableComponent = /** @class */ (function () {
    function CountryTableComponent() {
    }
    CountryTableComponent.prototype.trackByFn = function (index, item) {
        return index;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _core_services_country_model__WEBPACK_IMPORTED_MODULE_1__["Country"])
    ], CountryTableComponent.prototype, "countries", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CountryTableComponent.prototype, "errorMessage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CountryTableComponent.prototype, "isLoading", void 0);
    CountryTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            selector: 'app-country-table',
            template: __webpack_require__(/*! ./country-table.component.html */ "./src/app/shared/country-table/country-table.component.html"),
            styles: [__webpack_require__(/*! ./country-table.component.css */ "./src/app/shared/country-table/country-table.component.css")]
        })
    ], CountryTableComponent);
    return CountryTableComponent;
}());



/***/ }),

/***/ "./src/app/shared/employee-form/employee-form.component.css":
/*!******************************************************************!*\
  !*** ./src/app/shared/employee-form/employee-form.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9lbXBsb3llZS1mb3JtL2VtcGxveWVlLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/employee-form/employee-form.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shared/employee-form/employee-form.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form novalidate (ngSubmit)=\"doAdd()\" [formGroup]=\"crudForm\">\n\n  <label for=\"name\">Name</label>\n  <input id=\"name\" type=\"text\" placeholder=\"Name (required)\"\n  formControlName=\"name\">\n  <div class='validation-error' *ngIf=\"name.invalid && name.touched\">{{ getNameControlErrorMessage() }}</div>\n  <br>\n\n  <label for=\"title\">Title</label>\n  <input id=\"title\" type=\"text\" placeholder=\"Title (required)\"\n  formControlName=\"title\">\n  <div class='validation-error' *ngIf=\"title.invalid && title.touched\">{{ getTitleControlErrorMessage() }}</div>\n  <br>\n\n  <label for=\"salary\">Salary</label>\n  <input id=\"salary\" type=\"text\" placeholder=\"Salary (required)\"\n  formControlName=\"salary\">\n  <div class='validation-error' *ngIf=\"salary.invalid && salary.touched\">{{ getSalaryControlErrorMessage() }}</div>\n  <br>\n\n  <label for=\"city\">City</label>\n  <input id=\"city\" type=\"text\" placeholder=\"City (required)\"\n  formControlName=\"city\">\n  <div class='validation-error' *ngIf=\"city.invalid && city.touched\">{{ getCityControlErrorMessage() }}</div>\n  <br><br>\n\n  <div *ngIf=\"!isEditing;  else edit\">\n    <button type=\"submit\" [disabled]='!crudForm.valid' style=\"width:80px\">Add</button>&nbsp;&nbsp;\n    <button type=\"button\" (click)='crudForm.reset()' style=\"width:80px\">Reset</button>\n  </div>\n\n  <ng-template #edit>\n    <button type=\"button\" (click)='doUpdate()' [disabled]='!crudForm.valid' class=\"update\" style=\"width:80px\">Update</button>&nbsp;&nbsp;\n    <button type=\"button\" (click)='doCancel()' style=\"width:80px\">Cancel</button>\n  </ng-template>\n\n</form>\n"

/***/ }),

/***/ "./src/app/shared/employee-form/employee-form.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/employee-form/employee-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: EmployeeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeFormComponent", function() { return EmployeeFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/core.constants */ "./src/app/core/core.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeFormComponent = /** @class */ (function () {
    function EmployeeFormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.addEmployee = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.updateEmployee = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EmployeeFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    /**
     * Life-cycle hook `ngOnChanges` is used here to pre-fill this employee form
     * form with data(employeeToEdi) received from click of Edit button in the another
     * sibling dump component `app-employee-table`. Also we do check value of `employeeToEdi`
     * because, during first time (i.e before user clicks the edit button) the employeeToEdit
     * value will be empty, so to avoid null pointer issue we do this additonal check
     */
    EmployeeFormComponent.prototype.ngOnChanges = function (changes) {
        if (this.employeeToEdit) {
            this.crudForm.setValue(this.employeeToEdit);
        }
    };
    EmployeeFormComponent.prototype.buildForm = function () {
        this.crudForm = this.formBuilder.group({
            name: ['', {
                    validators: [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(35),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_core_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].NAME_REGEXP),
                    ]
                }],
            title: ['', {
                    validators: [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_core_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].NAME_REGEXP)
                    ]
                }],
            salary: ['', {
                    validators: [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_core_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].NUMERIC_REGEXP)
                    ]
                }],
            city: ['', {
                    validators: [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_core_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].NAME_REGEXP)
                    ]
                }],
            id: '',
        });
    };
    Object.defineProperty(EmployeeFormComponent.prototype, "name", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.crudForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeFormComponent.prototype, "title", {
        get: function () {
            return this.crudForm.get('title');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeFormComponent.prototype, "salary", {
        get: function () {
            return this.crudForm.get('salary');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeFormComponent.prototype, "city", {
        get: function () {
            return this.crudForm.get('city');
        },
        enumerable: true,
        configurable: true
    });
    EmployeeFormComponent.prototype.getNameControlErrorMessage = function () {
        return this.name.hasError('required') ? 'Name is required' :
            this.name.hasError('maxlength') ? 'Maximum 35 characters are allowed' :
                this.name.hasError('pattern') ? 'Only alphabets are allowed' :
                    '';
    };
    EmployeeFormComponent.prototype.getTitleControlErrorMessage = function () {
        return this.title.hasError('required') ? 'Title is required' :
            this.title.hasError('maxlength') ? 'Maximum 25 characters are allowed' :
                this.title.hasError('pattern') ? 'Only alphabets are allowed' :
                    '';
    };
    EmployeeFormComponent.prototype.getSalaryControlErrorMessage = function () {
        return this.salary.hasError('required') ? 'Salary is required' :
            this.salary.hasError('maxlength') ? 'Maximum 10 characters are allowed' :
                this.salary.hasError('pattern') ? 'Only numeric values are allowed' :
                    '';
    };
    EmployeeFormComponent.prototype.getCityControlErrorMessage = function () {
        return this.city.hasError('required') ? 'City is required' :
            this.city.hasError('maxlength') ? 'Maximum 15 characters are allowed' :
                this.city.hasError('pattern') ? 'Only alphabets are allowed' :
                    '';
    };
    EmployeeFormComponent.prototype.doAdd = function () {
        // stop here, don't allow to submit the form  if form is invalid
        if (this.crudForm.invalid) {
            return;
        }
        else {
            this.addEmployee.emit(this.crudForm.value);
            this.doCancel();
        }
    };
    EmployeeFormComponent.prototype.doUpdate = function () {
        // stop here, don't allow to submit the form  if form is invalid
        if (this.crudForm.invalid) {
            return;
        }
        else {
            this.updateEmployee.emit(this.crudForm.value);
            this.doCancel();
        }
    };
    EmployeeFormComponent.prototype.doCancel = function () {
        this.cancel.emit(false);
        this.crudForm.reset();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EmployeeFormComponent.prototype, "employeeToEdit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], EmployeeFormComponent.prototype, "isEditing", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EmployeeFormComponent.prototype, "addEmployee", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EmployeeFormComponent.prototype, "updateEmployee", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EmployeeFormComponent.prototype, "cancel", void 0);
    EmployeeFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            selector: 'app-employee-form',
            template: __webpack_require__(/*! ./employee-form.component.html */ "./src/app/shared/employee-form/employee-form.component.html"),
            styles: [__webpack_require__(/*! ./employee-form.component.css */ "./src/app/shared/employee-form/employee-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EmployeeFormComponent);
    return EmployeeFormComponent;
}());



/***/ }),

/***/ "./src/app/shared/employee-table/employee-table.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shared/employee-table/employee-table.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9lbXBsb3llZS10YWJsZS9lbXBsb3llZS10YWJsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/employee-table/employee-table.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/employee-table/employee-table.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\n  <caption> Employee List</caption>\n  <tr>\n    <th>Id</th>\n    <th>Name</th>\n    <th>Title</th>\n    <th>Salary</th>\n    <th>City</th>\n    <th>Update</th>\n    <th>Delete</th>\n  </tr>\n  <tr *ngFor=\"let employee of employees; trackBy: trackByFn; \">\n    <td>{{ employee.id }}</td>\n    <td>{{ employee.name }}</td>\n    <td>{{ employee.title }}</td>\n    <td>{{ employee.salary | number }}</td>\n    <td>{{ employee.city }}</td>\n    <td><button type=\"button\" (click)='doEdit(employee)' class=\"update\" style=\"width:80px\">Edit</button></td>\n    <td><button type=\"button\" (click)='doDelete(employee.id)' class=\"delete\" style=\"width:80px\">Delete</button></td>\n  </tr>\n  </table>\n"

/***/ }),

/***/ "./src/app/shared/employee-table/employee-table.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/employee-table/employee-table.component.ts ***!
  \*******************************************************************/
/*! exports provided: EmployeeTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeTableComponent", function() { return EmployeeTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmployeeTableComponent = /** @class */ (function () {
    function EmployeeTableComponent() {
        this.editEmployee = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteEmployee = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EmployeeTableComponent.prototype.trackByFn = function (index, item) {
        return index;
    };
    EmployeeTableComponent.prototype.doEdit = function (employee) {
        this.editEmployee.emit(employee);
    };
    EmployeeTableComponent.prototype.doDelete = function (id) {
        this.deleteEmployee.emit(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EmployeeTableComponent.prototype, "employees", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EmployeeTableComponent.prototype, "editEmployee", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EmployeeTableComponent.prototype, "deleteEmployee", void 0);
    EmployeeTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            selector: 'app-employee-table',
            template: __webpack_require__(/*! ./employee-table.component.html */ "./src/app/shared/employee-table/employee-table.component.html"),
            styles: [__webpack_require__(/*! ./employee-table.component.css */ "./src/app/shared/employee-table/employee-table.component.css")]
        })
    ], EmployeeTableComponent);
    return EmployeeTableComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_country_card_country_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/country-card/country-card.component */ "./src/app/shared/country-card/country-card.component.ts");
/* harmony import */ var _shared_country_table_country_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/country-table/country-table.component */ "./src/app/shared/country-table/country-table.component.ts");
/* harmony import */ var _shared_employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/employee-form/employee-form.component */ "./src/app/shared/employee-form/employee-form.component.ts");
/* harmony import */ var _shared_employee_table_employee_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/employee-table/employee-table.component */ "./src/app/shared/employee-table/employee-table.component.ts");
/* harmony import */ var _config_table_config_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config-table/config-table.component */ "./src/app/shared/config-table/config-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [
                _config_table_config_table_component__WEBPACK_IMPORTED_MODULE_7__["ConfigTableComponent"],
                _shared_country_card_country_card_component__WEBPACK_IMPORTED_MODULE_3__["CountryCardComponent"],
                _shared_country_table_country_table_component__WEBPACK_IMPORTED_MODULE_4__["CountryTableComponent"],
                _shared_employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeFormComponent"],
                _shared_employee_table_employee_table_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeTableComponent"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _config_table_config_table_component__WEBPACK_IMPORTED_MODULE_7__["ConfigTableComponent"],
                _shared_country_card_country_card_component__WEBPACK_IMPORTED_MODULE_3__["CountryCardComponent"],
                _shared_country_table_country_table_component__WEBPACK_IMPORTED_MODULE_4__["CountryTableComponent"],
                _shared_employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeFormComponent"],
                _shared_employee_table_employee_table_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeTableComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    configFilePath: 'assets/config/dev.config.json'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kumaran/mydrive/personal/ngrx-demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map