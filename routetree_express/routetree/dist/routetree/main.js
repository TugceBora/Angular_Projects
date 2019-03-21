(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _products_brand_brand_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/brand/brand.component */ "./src/app/products/brand/brand.component.ts");
/* harmony import */ var _products_details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/details/details.component */ "./src/app/products/details/details.component.ts");
/* harmony import */ var _products_category_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/category/category.component */ "./src/app/products/category/category.component.ts");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reviews/reviews.component */ "./src/app/reviews/reviews.component.ts");
/* harmony import */ var _reviews_reviewdetail_reviewdetail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reviews/reviewdetail/reviewdetail.component */ "./src/app/reviews/reviewdetail/reviewdetail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"],
        children: [
            { path: 'brand/:brand', component: _products_brand_brand_component__WEBPACK_IMPORTED_MODULE_3__["BrandComponent"] },
            { path: 'details/:id', component: _products_details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"] },
            { path: 'category/:cat', component: _products_category_category_component__WEBPACK_IMPORTED_MODULE_5__["CategoryComponent"] }
        ]
    },
    {
        path: 'reviews', component: _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_6__["ReviewsComponent"],
        children: [
            { path: 'details/:id', component: _reviews_reviewdetail_reviewdetail_component__WEBPACK_IMPORTED_MODULE_7__["ReviewdetailComponent"] },
            { path: 'author/:id', component: _products_details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"] },
            { path: 'all/:id', component: _products_category_category_component__WEBPACK_IMPORTED_MODULE_5__["CategoryComponent"] }
        ]
    }
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

module.exports = ".box{\n    margin : 5px;\n    padding : 5 px;\n    border : orangered solid 2px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'box'> <h2> Route Tree </h2> \n<a [routerLink] = \"['/products']\"> Products </a>\n<a [routerLink] = \"['/reviews']\"> Reviews </a>\n<router-outlet></router-outlet>\n</div>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'routetree';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reviews/reviews.component */ "./src/app/reviews/reviews.component.ts");
/* harmony import */ var _products_brand_brand_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/brand/brand.component */ "./src/app/products/brand/brand.component.ts");
/* harmony import */ var _products_category_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products/category/category.component */ "./src/app/products/category/category.component.ts");
/* harmony import */ var _products_details_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products/details/details.component */ "./src/app/products/details/details.component.ts");
/* harmony import */ var _reviews_author_author_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reviews/author/author.component */ "./src/app/reviews/author/author.component.ts");
/* harmony import */ var _reviews_all_all_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reviews/all/all.component */ "./src/app/reviews/all/all.component.ts");
/* harmony import */ var _reviews_reviewdetail_reviewdetail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reviews/reviewdetail/reviewdetail.component */ "./src/app/reviews/reviewdetail/reviewdetail.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"],
                _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_5__["ReviewsComponent"],
                _products_brand_brand_component__WEBPACK_IMPORTED_MODULE_6__["BrandComponent"],
                _products_category_category_component__WEBPACK_IMPORTED_MODULE_7__["CategoryComponent"],
                _products_details_details_component__WEBPACK_IMPORTED_MODULE_8__["DetailsComponent"],
                _reviews_author_author_component__WEBPACK_IMPORTED_MODULE_9__["AuthorComponent"],
                _reviews_all_all_component__WEBPACK_IMPORTED_MODULE_10__["AllComponent"],
                _reviews_reviewdetail_reviewdetail_component__WEBPACK_IMPORTED_MODULE_11__["ReviewdetailComponent"],
                _reviews_reviewdetail_reviewdetail_component__WEBPACK_IMPORTED_MODULE_11__["ReviewdetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/products/brand/brand.component.css":
/*!****************************************************!*\
  !*** ./src/app/products/brand/brand.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n    margin :5 px;\n    padding: 15 px;\n    color : black 5px solid;\n}"

/***/ }),

/***/ "./src/app/products/brand/brand.component.html":
/*!*****************************************************!*\
  !*** ./src/app/products/brand/brand.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'box'>\n    \n    \n    <button [routerLink] = \"['/products', 'details', 5 ]\">products/details/37</button>\n    <button [routerLink] = \"['/products', 'category', 5 ]\">products/category/37</button>\n</div>\n"

/***/ }),

/***/ "./src/app/products/brand/brand.component.ts":
/*!***************************************************!*\
  !*** ./src/app/products/brand/brand.component.ts ***!
  \***************************************************/
/*! exports provided: BrandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandComponent", function() { return BrandComponent; });
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

var BrandComponent = /** @class */ (function () {
    function BrandComponent() {
    }
    BrandComponent.prototype.ngOnInit = function () {
    };
    BrandComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brand',
            template: __webpack_require__(/*! ./brand.component.html */ "./src/app/products/brand/brand.component.html"),
            styles: [__webpack_require__(/*! ./brand.component.css */ "./src/app/products/brand/brand.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BrandComponent);
    return BrandComponent;
}());



/***/ }),

/***/ "./src/app/products/category/category.component.css":
/*!**********************************************************!*\
  !*** ./src/app/products/category/category.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n    margin :6px;\n    padding: 15 px;\n    border: black 5px solid;\n}"

/***/ }),

/***/ "./src/app/products/category/category.component.html":
/*!***********************************************************!*\
  !*** ./src/app/products/category/category.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'box'>\n\n\n\n    <button [routerLink] = \"['/products', 'brand', 5 ]\">products/brand/5</button>\n    <button [routerLink] = \"['/products', 'details', 5 ]\">products/details/5</button>\n    \n</div>\n"

/***/ }),

/***/ "./src/app/products/category/category.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/products/category/category.component.ts ***!
  \*********************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
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

var CategoryComponent = /** @class */ (function () {
    function CategoryComponent() {
    }
    CategoryComponent.prototype.ngOnInit = function () {
    };
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/products/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/products/category/category.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/products/details/details.component.css":
/*!********************************************************!*\
  !*** ./src/app/products/details/details.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\n    margin : 5px;\n    padding : 10 px;\n    border : greenyellow 2px solid;\n}"

/***/ }),

/***/ "./src/app/products/details/details.component.html":
/*!*********************************************************!*\
  !*** ./src/app/products/details/details.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'box'>\n  <button [routerLink] = \"['/products', 'brand', '5']\">products/brand/5></button>\n  <button [routerLink] = \"['/products', 'category', '5']\">products/category/5></button>\n</div>\n"

/***/ }),

/***/ "./src/app/products/details/details.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/products/details/details.component.ts ***!
  \*******************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
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

var DetailsComponent = /** @class */ (function () {
    function DetailsComponent() {
    }
    DetailsComponent.prototype.ngOnInit = function () {
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/products/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/products/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\n    margin : 5px;\n    padding : 10 px;\n    border : pink 5px solid;\n}"

/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'box'>\n  <h1>Products Component</h1>\n  <a [routerLink] = \"['/reviews']\"> Reviews </a> \n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
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

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/reviews/all/all.component.css":
/*!***********************************************!*\
  !*** ./src/app/reviews/all/all.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\n    margin : 5px;\n    padding : 10 px;\n    border : navy 2px solid;\n}"

/***/ }),

/***/ "./src/app/reviews/all/all.component.html":
/*!************************************************!*\
  !*** ./src/app/reviews/all/all.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'box'>\n    <button [routerLink] = \"['/reviews', 'details', 5 ]\">products/brand/5</button>\n    <button [routerLink] = \"['/reviews', 'author', 5 ]\">products/details/5</button>\n</div>\n"

/***/ }),

/***/ "./src/app/reviews/all/all.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reviews/all/all.component.ts ***!
  \**********************************************/
/*! exports provided: AllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllComponent", function() { return AllComponent; });
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

var AllComponent = /** @class */ (function () {
    function AllComponent() {
    }
    AllComponent.prototype.ngOnInit = function () {
    };
    AllComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all',
            template: __webpack_require__(/*! ./all.component.html */ "./src/app/reviews/all/all.component.html"),
            styles: [__webpack_require__(/*! ./all.component.css */ "./src/app/reviews/all/all.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AllComponent);
    return AllComponent;
}());



/***/ }),

/***/ "./src/app/reviews/author/author.component.css":
/*!*****************************************************!*\
  !*** ./src/app/reviews/author/author.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\n    margin : 5px;\n    padding : 10 px;\n    border : indigo 2px solid;\n}"

/***/ }),

/***/ "./src/app/reviews/author/author.component.html":
/*!******************************************************!*\
  !*** ./src/app/reviews/author/author.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'box'>\n    <p>\n      author works!\n    </p>\n    <button [routerLink] = \"['/reviews', 'details', 5 ]\">products/brand/5</button>\n    \n    <button [routerLink] = \"['/reviews', 'all', 5 ]\">products/category/5</button>\n    </div>\n"

/***/ }),

/***/ "./src/app/reviews/author/author.component.ts":
/*!****************************************************!*\
  !*** ./src/app/reviews/author/author.component.ts ***!
  \****************************************************/
/*! exports provided: AuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorComponent", function() { return AuthorComponent; });
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

var AuthorComponent = /** @class */ (function () {
    function AuthorComponent() {
    }
    AuthorComponent.prototype.ngOnInit = function () {
    };
    AuthorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-author',
            template: __webpack_require__(/*! ./author.component.html */ "./src/app/reviews/author/author.component.html"),
            styles: [__webpack_require__(/*! ./author.component.css */ "./src/app/reviews/author/author.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthorComponent);
    return AuthorComponent;
}());



/***/ }),

/***/ "./src/app/reviews/reviewdetail/reviewdetail.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/reviews/reviewdetail/reviewdetail.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\n    margin : 5px;\n    padding : 10 px;\n    border : gray 2px solid;\n}"

/***/ }),

/***/ "./src/app/reviews/reviewdetail/reviewdetail.component.html":
/*!******************************************************************!*\
  !*** ./src/app/reviews/reviewdetail/reviewdetail.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'box'>\n    \n    <router-outlet></router-outlet>\n  \n<button [routerLink] = \"['/reviews', 'author', 5 ]\">products/details/5</button>\n<button [routerLink] = \"['/reviews', 'all', 5 ]\">products/category/5</button>\n  </div>\n"

/***/ }),

/***/ "./src/app/reviews/reviewdetail/reviewdetail.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/reviews/reviewdetail/reviewdetail.component.ts ***!
  \****************************************************************/
/*! exports provided: ReviewdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewdetailComponent", function() { return ReviewdetailComponent; });
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

var ReviewdetailComponent = /** @class */ (function () {
    function ReviewdetailComponent() {
    }
    ReviewdetailComponent.prototype.ngOnInit = function () {
    };
    ReviewdetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reviewdetail',
            template: __webpack_require__(/*! ./reviewdetail.component.html */ "./src/app/reviews/reviewdetail/reviewdetail.component.html"),
            styles: [__webpack_require__(/*! ./reviewdetail.component.css */ "./src/app/reviews/reviewdetail/reviewdetail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReviewdetailComponent);
    return ReviewdetailComponent;
}());



/***/ }),

/***/ "./src/app/reviews/reviews.component.css":
/*!***********************************************!*\
  !*** ./src/app/reviews/reviews.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\n    margin : 5px;\n    padding : 10 px;\n    border : blue 2px solid;\n}"

/***/ }),

/***/ "./src/app/reviews/reviews.component.html":
/*!************************************************!*\
  !*** ./src/app/reviews/reviews.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'box'>\n    <h1>Reviews Component</h1>\n    <a [routerLink] = \"['/products']\"> Products </a>\n    <a [routerLink] = \"['./brand']\"> Brand </a>\n    <router-outlet></router-outlet>\n  </div>\n"

/***/ }),

/***/ "./src/app/reviews/reviews.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reviews/reviews.component.ts ***!
  \**********************************************/
/*! exports provided: ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return ReviewsComponent; });
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

var ReviewsComponent = /** @class */ (function () {
    function ReviewsComponent() {
    }
    ReviewsComponent.prototype.ngOnInit = function () {
    };
    ReviewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reviews',
            template: __webpack_require__(/*! ./reviews.component.html */ "./src/app/reviews/reviews.component.html"),
            styles: [__webpack_require__(/*! ./reviews.component.css */ "./src/app/reviews/reviews.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReviewsComponent);
    return ReviewsComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tugceboraergen/Desktop/coding_dojo/angular/routetree_express/routetree/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map