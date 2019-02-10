(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/core/services/country.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/country.service.ts ***!
  \**************************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_country_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/country.model */ "./src/app/core/services/country.model.ts");
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





var CountryService = /** @class */ (function () {
    function CountryService(http) {
        this.http = http;
    }
    CountryService.prototype.getCountryDetail = function (countryName) {
        return this.http.get("https://restcountries.eu/rest/v2/name/" + countryName + "?fullText=true")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
            console.log(response);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var country = new _core_services_country_model__WEBPACK_IMPORTED_MODULE_2__["Country"]();
            var countryResponse = response[0];
            country.name = countryResponse.name;
            country.capital = countryResponse.capital;
            country.region = countryResponse.region;
            country.population = countryResponse.population;
            country.currency = countryResponse.currencies[0].code;
            country.flag = countryResponse.flag;
            return country;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleAndThrowRemoteError.bind(this)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            console.log('Clean up your resource here ');
        }));
    };
    CountryService.prototype.getCountries = function (searchKey) {
        return this.http.get("https://restcountries.eu/rest/v2/name/" + searchKey)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var countries = [];
            response.forEach(function (countryResponse) {
                var country = new _core_services_country_model__WEBPACK_IMPORTED_MODULE_2__["Country"]();
                country.name = countryResponse.name;
                country.capital = countryResponse.capital;
                country.region = countryResponse.region;
                country.population = countryResponse.population;
                country.currency = countryResponse.currencies[0].code;
                country.flag = countryResponse.flag;
                countries.push(country);
            });
            return countries;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleAndThrowRemoteError.bind(this)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            console.log('Clean up your resource here ');
        }));
    };
    CountryService.prototype.handleAndThrowRemoteError = function (error) {
        var errorMessage = 'An error occurred: ';
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
    CountryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], CountryService);
    return CountryService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map