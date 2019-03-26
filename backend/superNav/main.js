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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _users_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/login/login.component */ "./src/app/users/login/login.component.ts");
/* harmony import */ var _pie_pie_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pie/pie.component */ "./src/app/pie/pie.component.ts");
/* harmony import */ var _our_products_our_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./our-products/our-products.component */ "./src/app/our-products/our-products.component.ts");
/* harmony import */ var _product_create_product_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-create/product-create.component */ "./src/app/product-create/product-create.component.ts");
/* harmony import */ var _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-edit/product-edit.component */ "./src/app/product-edit/product-edit.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _shopping_cart_edit_shopping_cart_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shopping-cart-edit/shopping-cart-edit.component */ "./src/app/shopping-cart-edit/shopping-cart-edit.component.ts");
/* harmony import */ var _big_spenders_big_spenders_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./big-spenders/big-spenders.component */ "./src/app/big-spenders/big-spenders.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _sign_in_view_sign_in_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sign-in-view/sign-in-view.component */ "./src/app/sign-in-view/sign-in-view.component.ts");





//import { AboutComponent } from './about/about.component'
//import { SignInHomePageComponent } from './sign-in-home-page/sign-in-home-page.component'








//import { DetailsOrderComponent } from './details-order/details-order.component';

var routes = [
    { path: '', redirectTo: '/home-page', pathMatch: 'full' },
    { path: 'home-page', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
    { path: 'login', component: _users_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'sign', component: _sign_in_view_sign_in_view_component__WEBPACK_IMPORTED_MODULE_13__["SignInViewComponent"] },
    //{ path: 'about', component: AboutComponent },
    // { path: 'sn-home-page', component: SignInHomePageComponent },
    { path: 'pie', component: _pie_pie_component__WEBPACK_IMPORTED_MODULE_5__["PieComponent"] },
    { path: 'our-products', component: _our_products_our_products_component__WEBPACK_IMPORTED_MODULE_6__["OurProductsComponent"] },
    { path: 'product-create', component: _product_create_product_create_component__WEBPACK_IMPORTED_MODULE_7__["ProductCreateComponent"] },
    { path: 'product-edit/:product._id/:product.name/:product.price/:product.quantity/:product.category', component: _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_8__["ProductEditComponent"] },
    { path: 'shopping-cart', component: _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_9__["ShoppingCartComponent"] },
    { path: 'shopping-cart-edit/:shopping._id/:shopping.name/:shopping.price/:shopping.quantity/:shopping.category', component: _shopping_cart_edit_shopping_cart_edit_component__WEBPACK_IMPORTED_MODULE_10__["ShoppingCartEditComponent"] },
    { path: 'big-spenders', component: _big_spenders_big_spenders_component__WEBPACK_IMPORTED_MODULE_11__["BigSpendersComponent"] },
    { path: 'orders', component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_12__["OrdersComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<title>W3.CSS Template</title>\r\n<meta charset=\"UTF-8\">\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Montserrat\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<script src=\"https://d3js.org/d3.v5.min.js\"></script>\r\n<body class=\"w3-content\" style=\"max-width:500%\">\r\n  <!-- Sidebar/menu -->\r\n  <sn-nav-bar *ngIf=\"navBar==false\"></sn-nav-bar>\r\n\r\n  <router-outlet></router-outlet>\r\n</body>\r\n</html>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _servises_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./servises/user.service */ "./src/app/servises/user.service.ts");
/* harmony import */ var _servises_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./servises/shared.service */ "./src/app/servises/shared.service.ts");






var AppComponent = /** @class */ (function () {
    function AppComponent(router, socket, userService, sharedService) {
        this.router = router;
        this.socket = socket;
        this.userService = userService;
        this.sharedService = sharedService;
        this.navBar = false;
        this.socket.emit('connection', { name: "mulmul" });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navBarSub = this.sharedService.getViewNavBarListener().subscribe(function (navBar) {
            _this.navBar = navBar;
        });
        this.router.navigate([]);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"], _servises_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _servises_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _users_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users/login/login.component */ "./src/app/users/login/login.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _users_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./users/sign-in/sign-in.component */ "./src/app/users/sign-in/sign-in.component.ts");
/* harmony import */ var angular_d3_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-d3-charts */ "./node_modules/angular-d3-charts/main.js");
/* harmony import */ var angular_d3_charts__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular_d3_charts__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _pie_pie_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pie/pie.component */ "./src/app/pie/pie.component.ts");
/* harmony import */ var _our_products_our_products_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./our-products/our-products.component */ "./src/app/our-products/our-products.component.ts");
/* harmony import */ var _product_create_product_create_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product-create/product-create.component */ "./src/app/product-create/product-create.component.ts");
/* harmony import */ var _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./product-edit/product-edit.component */ "./src/app/product-edit/product-edit.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _shopping_cart_edit_shopping_cart_edit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shopping-cart-edit/shopping-cart-edit.component */ "./src/app/shopping-cart-edit/shopping-cart-edit.component.ts");
/* harmony import */ var _big_spenders_big_spenders_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./big-spenders/big-spenders.component */ "./src/app/big-spenders/big-spenders.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./google-map/google-map.component */ "./src/app/google-map/google-map.component.ts");
/* harmony import */ var _tops_tops_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./tops/tops.component */ "./src/app/tops/tops.component.ts");
/* harmony import */ var _sign_in_view_sign_in_view_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./sign-in-view/sign-in-view.component */ "./src/app/sign-in-view/sign-in-view.component.ts");









//import { ShoppingListComponent } from './product/shopping-list/shopping-list.component';
//import { SearchComponent } from './search/search.component';



//import { AboutComponent } from './about/about.component';
//import { SignInHomePageComponent } from './sign-in-home-page/sign-in-home-page.component';









//import { DetailsOrderComponent } from './details-order/details-order.component';







var socketIoConfig = { url: 'http://localhost:3000', options: {} };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                // ShoppingListComponent,
                // SearchComponent,
                _users_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _users_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__["SignInComponent"],
                // AboutComponent,
                // SignInHomePageComponent,
                angular_d3_charts__WEBPACK_IMPORTED_MODULE_12__["DoughnutChartComponent"],
                angular_d3_charts__WEBPACK_IMPORTED_MODULE_12__["PieChartComponent"],
                angular_d3_charts__WEBPACK_IMPORTED_MODULE_12__["BarChartComponent"],
                _pie_pie_component__WEBPACK_IMPORTED_MODULE_13__["PieComponent"],
                _our_products_our_products_component__WEBPACK_IMPORTED_MODULE_14__["OurProductsComponent"],
                _product_create_product_create_component__WEBPACK_IMPORTED_MODULE_15__["ProductCreateComponent"],
                _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_16__["ProductEditComponent"],
                _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_17__["ShoppingCartComponent"],
                _shopping_cart_edit_shopping_cart_edit_component__WEBPACK_IMPORTED_MODULE_18__["ShoppingCartEditComponent"],
                _big_spenders_big_spenders_component__WEBPACK_IMPORTED_MODULE_19__["BigSpendersComponent"],
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_20__["OrdersComponent"],
                // DetailsOrderComponent,
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_24__["NavBarComponent"],
                _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_25__["GoogleMapComponent"],
                _tops_tops_component__WEBPACK_IMPORTED_MODULE_26__["TopsComponent"],
                _sign_in_view_sign_in_view_component__WEBPACK_IMPORTED_MODULE_27__["SignInViewComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_socket_io__WEBPACK_IMPORTED_MODULE_21__["SocketIoModule"].forRoot(socketIoConfig),
                _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyD-x2XCvFbeRPUUIx1yoER2DIJ088GkaWc'
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/big-spenders/big-spenders.component.css":
/*!*********************************************************!*\
  !*** ./src/app/big-spenders/big-spenders.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".w3-row-padding {\r\n  margin-left: 40%;\r\n  width: 50%;\r\n}\r\n\r\n.w3-sidebar {\r\n  font-family: \"Roboto\", sans-serif\r\n}\r\n\r\nbody, h1, h2, h3, h4, h5, h6, .w3-wide {\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlnLXNwZW5kZXJzL2JpZy1zcGVuZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLGlDQUFpQztDQUNsQzs7QUFFRDtFQUNFLHNDQUFzQztDQUN2QyIsImZpbGUiOiJzcmMvYXBwL2JpZy1zcGVuZGVycy9iaWctc3BlbmRlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53My1yb3ctcGFkZGluZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4udzMtc2lkZWJhciB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWZcclxufVxyXG5cclxuYm9keSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgLnczLXdpZGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/big-spenders/big-spenders.component.html":
/*!**********************************************************!*\
  !*** ./src/app/big-spenders/big-spenders.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Montserrat\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<div class=\"w3-container\">\r\n  <table class=\"w3-table w3-striped\">\r\n    <tr>\r\n      <th><h4><b>City</b></h4></th>\r\n      <th><h4><b>How Many Orders</b></h4></th>\r\n    </tr>\r\n    <tr *ngFor=\"let big of bigSpenders\">\r\n      <th>{{big.city}}</th>\r\n      <th>{{big.result}}</th>\r\n    </tr>\r\n  </table>\r\n</div>\r\n&nbsp;&nbsp;&nbsp;<button (click)=\"onHome()\" type=\"submit\" class=\"w3-bar-item w3-button w3-black\">Back To Home</button>\r\n\r\n"

/***/ }),

/***/ "./src/app/big-spenders/big-spenders.component.ts":
/*!********************************************************!*\
  !*** ./src/app/big-spenders/big-spenders.component.ts ***!
  \********************************************************/
/*! exports provided: BigSpendersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigSpendersComponent", function() { return BigSpendersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servises_shoppingcart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servises/shoppingcart.service */ "./src/app/servises/shoppingcart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servises_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servises/shared.service */ "./src/app/servises/shared.service.ts");





var BigSpendersComponent = /** @class */ (function () {
    function BigSpendersComponent(ShoppingCart, router, sharedService) {
        this.ShoppingCart = ShoppingCart;
        this.router = router;
        this.sharedService = sharedService;
        this.bigSpenders = [];
    }
    BigSpendersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ShoppingCart.bigSpender();
        setTimeout(function () {
            _this.bigSpendersSub = _this.ShoppingCart.getbigSpendersUpdateListener().subscribe(function (result) {
                _this.bigSpenders = result;
            });
        }, 500);
    };
    BigSpendersComponent.prototype.onHome = function () {
        this.sharedService.viewNavBar(false);
        this.router.navigate(['/home-page']);
    };
    BigSpendersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-big-spenders',
            template: __webpack_require__(/*! ./big-spenders.component.html */ "./src/app/big-spenders/big-spenders.component.html"),
            styles: [__webpack_require__(/*! ./big-spenders.component.css */ "./src/app/big-spenders/big-spenders.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servises_shoppingcart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCart"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _servises_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], BigSpendersComponent);
    return BigSpendersComponent;
}());



/***/ }),

/***/ "./src/app/google-map/google-map.component.css":
/*!*****************************************************!*\
  !*** ./src/app/google-map/google-map.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\r\n  height: 400px; /* The height is 400 pixels */\r\n  width: 100%; /* The width is the width of the web page */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ29vZ2xlLW1hcC9nb29nbGUtbWFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjLENBQUMsOEJBQThCO0VBQzdDLFlBQVksQ0FBQyw0Q0FBNEM7Q0FDMUQiLCJmaWxlIjoic3JjL2FwcC9nb29nbGUtbWFwL2dvb2dsZS1tYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAge1xyXG4gIGhlaWdodDogNDAwcHg7IC8qIFRoZSBoZWlnaHQgaXMgNDAwIHBpeGVscyAqL1xyXG4gIHdpZHRoOiAxMDAlOyAvKiBUaGUgd2lkdGggaXMgdGhlIHdpZHRoIG9mIHRoZSB3ZWIgcGFnZSAqL1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/google-map/google-map.component.html":
/*!******************************************************!*\
  !*** ./src/app/google-map/google-map.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #gmap class=\"w3-col s4\">\r\n  <!--<h4></h4>\r\n  -->\r\n  <!--  <h4>Our Braches</h4>\r\n  <!--The div element for the map -->\r\n  <!--Load the API from the specified URL\r\n  * The async attribute allows the browser to render the page while the API loads\r\n  * The key parameter will contain your own API key (which is not needed for this tutorial)\r\n  * The callback parameter executes the initMap() function\r\n  -->\r\n  <agm-map [latitude]=\"31.970131\" [longitude]=\"34.772044\">\r\n     <agm-marker [latitude]=\"lat\" [longitude]=\"long\"></agm-marker>\r\n  </agm-map>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/google-map/google-map.component.ts":
/*!****************************************************!*\
  !*** ./src/app/google-map/google-map.component.ts ***!
  \****************************************************/
/*! exports provided: GoogleMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapComponent", function() { return GoogleMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servises_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servises/user.service */ "./src/app/servises/user.service.ts");



var GoogleMapComponent = /** @class */ (function () {
    function GoogleMapComponent(userService) {
        this.userService = userService;
        this.lat = 0;
        this.long = 0;
        this.token = '';
    }
    GoogleMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cordinateSub = this.userService.getCordinateUpdateListener().subscribe(function (productData) {
            _this.lat = productData[0];
            _this.long = productData[1];
        });
    };
    GoogleMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sn-google-map',
            template: __webpack_require__(/*! ./google-map.component.html */ "./src/app/google-map/google-map.component.html"),
            styles: [__webpack_require__(/*! ./google-map.component.css */ "./src/app/google-map/google-map.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servises_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], GoogleMapComponent);
    return GoogleMapComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- Top menu on small screens -->\r\n<header class=\"w3-bar w3-top w3-hide-large w3-black w3-xlarge\">\r\n  <div class=\"w3-bar-item w3-padding-24 w3-wide\">LOGO</div>\r\n  <a href=\"javascript:void(0)\" class=\"w3-bar-item w3-button w3-padding-24 w3-right\" onclick=\"w3_open()\"><i class=\"fa fa-bars\"></i></a>\r\n</header>\r\n<!-- Overlay effect when opening sidebar on small screens -->\r\n<div class=\"w3-overlay w3-hide-large\" onclick=\"w3_close()\" style=\"cursor:pointer\" title=\"close side menu\" id=\"myOverlay\"></div>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sn-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n  height: 300px;\r\n}\r\n\r\n.w3-sidebar  {\r\n  font-family: \"Roboto\", sans-serif\r\n}\r\n\r\nbody, h1, h2, h3, h4, h5, h6, .w3-wide {\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n\r\ni.am {\r\npadding:10px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0UsaUNBQWlDO0NBQ2xDOztBQUVEO0VBQ0Usc0NBQXNDO0NBQ3ZDOztBQUNEO0FBQ0EsYUFBYTs7Q0FFWiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi53My1zaWRlYmFyICB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWZcclxufVxyXG5cclxuYm9keSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgLnczLXdpZGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5pLmFtIHtcclxucGFkZGluZzoxMHB4O1xyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<sn-header></sn-header>\r\n<!-- !PAGE CONTENT! -->\r\n<div class=\"w3-main\" style=\"margin-left:250px\">\r\n\r\n  <!-- Push down content on small screens -->\r\n  <div class=\"w3-hide-large\" style=\"margin-top:83px\"></div>\r\n\r\n  <div class=\"w3-container w3-text-grey\" id=\"jeans\">\r\n    <button (click)=\"onPie()\" class=\"w3-bar-item w3-button w3-padding\">Our Profitable</button>\r\n    <button (click)=\"onSpenderPie()\" class=\"w3-bar-item w3-button w3-padding\">Our Big Spenders</button>\r\n  </div>\r\n  <sn-tops></sn-tops>\r\n\r\n  <!-- Footer -->\r\n  <footer class=\"w3-padding-64 w3-light-grey w3-small w3-center\" id=\"footer\">\r\n    <div class=\"w3-row-padding\">\r\n      <div *ngIf=\"user==false\" class=\"w3-col s4\">\r\n        <sn-sign-in></sn-sign-in>\r\n      </div>\r\n      <div *ngIf=\"user==true\" class=\"w3-col s4\">\r\n        <h4>Hello {{username}}</h4>\r\n      </div>\r\n      <!-- google maps come here -->\r\n      <sn-google-map></sn-google-map>\r\n      <div #gmap class=\"w3-col s4\">\r\n    <!--The div element for the map -->\r\n        <!--Load the API from the specified URL\r\n    * The async attribute allows the browser to render the page while the API loads\r\n    * The key parameter will contain your own API key (which is not needed for this tutorial)\r\n    * The callback parameter executes the initMap() function\r\n    -->\r\n        <style>\r\n          #map {\r\n            height: 400px; /* The height is 400 pixels */\r\n            width: 100%; /* The width is the width of the web page */\r\n          }\r\n        </style>\r\n        <agm-map [latitude]=\"31.970131\" [longitude]=\"34.772044\">\r\n          <agm-marker [latitude]=\"lat\" [longitude]=\"long\"></agm-marker>\r\n        </agm-map>\r\n      </div>\r\n      <div class=\"w3-col s4 w3-justify\">\r\n        <h4>Store</h4>\r\n        <p><i class=\"fa fa-fw fa-map-marker\"></i> SuperNav</p>\r\n        <p><i class=\"fa fa-fw fa-phone\"></i> 03-123123123</p>\r\n        <p><i class=\"fa fa-fw fa-envelope\"></i> sn@supernav.com</p>\r\n        <h4>We accept</h4>\r\n        <p><i class=\"fa fa-fw fa-cc-amex\"></i> PayPal</p>\r\n        <p><i class=\"fa fa-fw fa-credit-card\"></i> Credit Card</p>\r\n        <br>\r\n        <i class=\"fa fa-facebook-official w3-hover-opacity w3-large\"></i>\r\n        <i class=\"fa fa-instagram w3-hover-opacity w3-large\"></i>\r\n        <i class=\"fa fa-snapchat w3-hover-opacity w3-large\"></i>\r\n        <i class=\"fa fa-pinterest-p w3-hover-opacity w3-large\"></i>\r\n        <i class=\"fa fa-twitter w3-hover-opacity w3-large\"></i>\r\n        <i class=\"fa fa-linkedin w3-hover-opacity w3-large\"></i>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n  <!-- End page content -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servises_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servises/product.service */ "./src/app/servises/product.service.ts");
/* harmony import */ var _servises_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servises/user.service */ "./src/app/servises/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servises_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../servises/shared.service */ "./src/app/servises/shared.service.ts");






var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(producrService, userService, router, sharedService) {
        this.producrService = producrService;
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.username = '';
        this.lat = 0;
        this.long = 0;
        this.user = false;
        this.admin = false;
    }
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSub = this.userService.getUserUpdateListener().subscribe(function (user) {
            _this.username = user;
        });
        this.connectSub = this.userService.getUserRoleListener().subscribe(function (connect) {
            _this.user = connect[0];
            _this.admin = connect[1];
        });
        this.cordinateSub = this.userService.getCordinateUpdateListener().subscribe(function (productData) {
            _this.lat = productData[0];
            _this.long = productData[1];
        });
    };
    HomePageComponent.prototype.onPie = function () {
        this.sharedService.viewNavBar(true);
        this.router.navigate(['/pie']);
    };
    HomePageComponent.prototype.onSpenderPie = function () {
        this.sharedService.viewNavBar(true);
        this.router.navigate(['/big-spenders']);
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sn-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servises_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _servises_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _servises_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"w3-sidebar w3-bar-block w3-white  \" style=\"z-index:3;width:250px\" id=\"mySidebar\">\r\n  <div class=\"w3-container w3-display-container w3-padding-16\">\r\n    <h3 class=\"w3-wide\"><b>SuperNav</b><img src=\"https://i.imgur.com/aFvmDfm.jpg\" alt=\"logo\" style=\"width:30%\"></h3>\r\n\r\n  </div>\r\n\r\n  <button (click)=\"onHome()\" class=\"w3-bar-item w3-button w3-padding\">Home</button>\r\n  <button (click)=\"onProducts()\" class=\"w3-bar-item w3-button w3-padding\">Our Products</button>\r\n  <button *ngIf=\"user==false\" (click)=\"onSignIn()\" class=\"w3-bar-item w3-button w3-padding\">Sign In</button>\r\n  <button *ngIf=\"user==false\" (click)=\"onLogin()\" class=\"w3-bar-item w3-button w3-padding\">Log In</button>\r\n  <button *ngIf=\"user==true\" (click)=\"onShoppingList()\" class=\"w3-bar-item w3-button w3-padding\">Our Shopping List</button>\r\n  <button *ngIf=\"user==true\" (click)=\"onOrders()\" class=\"w3-bar-item w3-button w3-padding\">Our Orders</button>\r\n  <button *ngIf=\"user==true\" (click)=\"onLogOut()\" class=\"w3-bar-item w3-button w3-padding\">Log Out</button>\r\n\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servises_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servises/user.service */ "./src/app/servises/user.service.ts");




var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.user = false;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connectSub = this.userService.getUserRoleListener().subscribe(function (connect) {
            _this.user = connect[0];
        });
    };
    NavBarComponent.prototype.onLogOut = function () {
        this.userService.logOut();
        this.onHome();
    };
    NavBarComponent.prototype.onLogin = function () {
        this.router.navigate(['/login']);
    };
    NavBarComponent.prototype.onSignIn = function () {
        this.router.navigate(['/sign']);
    };
    NavBarComponent.prototype.onHome = function () {
        this.router.navigate(['/home-page']);
    };
    NavBarComponent.prototype.onProducts = function () {
        this.router.navigate(['/our-products']);
    };
    //onUsers() {
    //  this.router.navigate(['/our-users']);
    //}
    NavBarComponent.prototype.onShoppingList = function () {
        this.router.navigate(['/shopping-cart']);
    };
    NavBarComponent.prototype.onOrders = function () {
        this.router.navigate(['/orders']);
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sn-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _servises_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/orders/orders.component.css":
/*!*********************************************!*\
  !*** ./src/app/orders/orders.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/orders/orders.component.html":
/*!**********************************************!*\
  !*** ./src/app/orders/orders.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<sn-header></sn-header>\r\n  <!-- Overlay effect when opening sidebar on small screens -->\r\n  <div class=\"w3-overlay w3-hide-large\" onclick=\"w3_close()\" style=\"cursor:pointer\" title=\"close side menu\" id=\"myOverlay\"></div>\r\n  <!-- !PAGE CONTENT! -->\r\n  <div class=\"w3-main\" style=\"margin-left:250px\">\r\n    <!-- Push down content on small screens -->\r\n    <div class=\"w3-hide-large\" style=\"margin-top:83px\"></div>\r\n    <div class=\"w3-container w3-text-grey\" id=\"jeans\">\r\n      <h1 class=\"w3-bar-item w3-text-grey w3-padding\">Our Shopping List</h1>\r\n    </div>\r\n    <mat-accordion *ngFor=\"let order of orders\">\r\n      <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                           (closed)=\"panelOpenState = false\">\r\n        <mat-expansion-panel-header class=\"w3-button w3-block w3-left-align w3-light-grey\">\r\n          <mat-panel-title>\r\n            {{order.dateCreated}}\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n            {{order.totalPrice}}\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n\r\n        <table class=\"w3-table \">\r\n          <tr>\r\n            <th><h4><b>Product Name</b></h4></th>\r\n            <th><h4><b>Product Price</b></h4></th>\r\n            <th><h4><b>Product Quantity</b></h4></th>\r\n            <th><h4><b>Product Category</b></h4></th>\r\n          </tr>\r\n          <tr *ngFor=\"let o of order.cart\">\r\n            <th><h4>{{o.name}}</h4></th>\r\n            <th><h4>{{o.price}}</h4></th>\r\n            <th><h4>{{o.quantity}}</h4></th>\r\n            <th><h4>{{o.category}}</h4></th>\r\n          </tr>\r\n        </table>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servises_shoppingcart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servises/shoppingcart.service */ "./src/app/servises/shoppingcart.service.ts");



var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(ShoppingCart) {
        this.ShoppingCart = ShoppingCart;
        this.orders = [];
        this.panelOpenState = false;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ShoppingCart.getOrders(localStorage.getItem('token'));
        this.ordersSub = this.ShoppingCart.getOrdersProductUpdateListener().subscribe(function (orders) {
            _this.orders = orders;
        });
    };
    OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/orders/orders.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servises_shoppingcart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCart"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/our-products/our-products.component.css":
/*!*********************************************************!*\
  !*** ./src/app/our-products/our-products.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n  height: 300px;\r\n}\r\n\r\n.w3-sidebar {\r\n  font-family: \"Roboto\", sans-serif\r\n}\r\n\r\nbody, h1, h2, h3, h4, h5, h6, .w3-wide {\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n\r\ni.am {\r\n  padding: 10px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3VyLXByb2R1Y3RzL291ci1wcm9kdWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0UsaUNBQWlDO0NBQ2xDOztBQUVEO0VBQ0Usc0NBQXNDO0NBQ3ZDOztBQUVEO0VBQ0UsY0FBYztDQUNmIiwiZmlsZSI6InNyYy9hcHAvb3VyLXByb2R1Y3RzL291ci1wcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLnczLXNpZGViYXIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmXHJcbn1cclxuXHJcbmJvZHksIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIC53My13aWRlIHtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmkuYW0ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/our-products/our-products.component.html":
/*!**********************************************************!*\
  !*** ./src/app/our-products/our-products.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<sn-header></sn-header>\r\n    <!-- Overlay effect when opening sidebar on small screens -->\r\n    <div class=\"w3-overlay w3-hide-large\" onclick=\"w3_close()\" style=\"cursor:pointer\" title=\"close side menu\" id=\"myOverlay\"></div>\r\n    <!-- !PAGE CONTENT! -->\r\n    <div class=\"w3-main\" style=\"margin-left:250px\">\r\n      <!-- Push down content on small screens -->\r\n      <div class=\"w3-hide-large\" style=\"margin-top:83px\"></div>\r\n      <div class=\"w3-container w3-text-grey\" id=\"jeans\">\r\n        <h1 class=\"w3-bar-item w3-text-grey w3-padding\">Our Products</h1>\r\n      </div>\r\n      &nbsp;&nbsp;&nbsp;&nbsp;<input *ngIf=\"admin==true\" placeholder=\"coca drink beer\" type=\"text\" #searchInput [(ngModel)]=\"smartsearch\" /> <button *ngIf=\"admin==true\" (click)=\"onSmartSearch()\" class=\"w3-bar-item w3-button w3-padding\">Smart Search</button>\r\n      &nbsp;&nbsp;&nbsp;&nbsp;<input type=\"text\" placeholder=\"Search By Name\" #nameInput [(ngModel)]=\"name\" />\r\n      &nbsp;&nbsp;&nbsp;&nbsp;<input type=\"number\" placeholder=\"Min Price\" #priceInput [(ngModel)]=\"minPrice\" />\r\n      &nbsp;&nbsp;&nbsp;&nbsp;<input type=\"number\" placeholder=\"Max Price\" #priceInput [(ngModel)]=\"maxPrice\" />\r\n      &nbsp;&nbsp;&nbsp;&nbsp;<input type=\"number\" placeholder=\"Min Quantity\" #quantityInput [(ngModel)]=\"minQuantity\" (input)=\"Quantity\" />\r\n      &nbsp;&nbsp;&nbsp;&nbsp;<input type=\"number\" placeholder=\"Max Quantity\" #quantityInput [(ngModel)]=\"maxQuantity\" (input)=\"Quantity\" />\r\n      <button (click)=\"onMultiSearch()\" class=\"w3-bar-item w3-button w3-padding\">Search</button>\r\n      <button *ngIf=\"admin==true\" (click)=\"onCreate()\" class=\"w3-bar-item w3-button w3-padding\">Add Product</button>\r\n      <div class=\"w3-container\">\r\n        <table class=\"w3-table w3-striped\">\r\n          <tr>\r\n            <th><h4><b>First Name</b></h4></th>\r\n            <th><h4><b>Price</b></h4></th>\r\n            <th><h4><b>Quantity</b></h4></th>\r\n          </tr>\r\n          <tr *ngFor=\"let product of ourProducts\">\r\n            <th>{{product.name}}</th>\r\n            <th>{{product.price}}</th>\r\n            <th>{{product.quantity}}</th>\r\n            <th><button *ngIf=\"admin==true\" (click)=\"onDelete(product._id)\" class=\"w3-bar-item w3-button w3-padding\">Delete</button></th>\r\n            <th><button *ngIf=\"user==true\" (click)=\"onAddToCart(product._id,product.name,product.price,product.category)\" class=\"w3-bar-item w3-button w3-padding\">Add To Cart</button></th>\r\n            <th><button *ngIf=\"admin==true\" [routerLink]=\"['/product-edit',product._id,product.name,product.price,product.quantity,product.category]\" class=\"w3-bar-item w3-button w3-padding\">Edit</button></th>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/our-products/our-products.component.ts":
/*!********************************************************!*\
  !*** ./src/app/our-products/our-products.component.ts ***!
  \********************************************************/
/*! exports provided: OurProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurProductsComponent", function() { return OurProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servises_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servises/product.service */ "./src/app/servises/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servises_shoppingcart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servises/shoppingcart.service */ "./src/app/servises/shoppingcart.service.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _servises_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../servises/user.service */ "./src/app/servises/user.service.ts");







var OurProductsComponent = /** @class */ (function () {
    function OurProductsComponent(UserService, ShoppingCart, producrService, router, socket) {
        this.UserService = UserService;
        this.ShoppingCart = ShoppingCart;
        this.producrService = producrService;
        this.router = router;
        this.socket = socket;
        this.ourProducts = [];
        this.user = false;
        this.admin = false;
        this.smartsearch = "";
        this.name = "";
        this.socket.on('new-product', function (product) {
            producrService.addProduct(product);
        });
    }
    OurProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.producrService.getProducts();
        this.productSub = this.producrService.getProductUpdateListener().subscribe(function (productData) {
            _this.ourProducts = productData;
        });
        this.connectSub = this.UserService.getUserRoleListener().subscribe(function (connect) {
            _this.user = connect[0];
            _this.admin = connect[1];
        });
    };
    OurProductsComponent.prototype.onMultiSearch = function () {
        var _this = this;
        this.producrService.getProducts();
        setTimeout(function () {
            if (_this.name != "")
                _this.ourProducts = _this.ourProducts.filter(function (res) {
                    return res.name.toLocaleLowerCase().match(_this.name.toLocaleLowerCase());
                });
            if (_this.minPrice != null)
                _this.ourProducts = _this.ourProducts.filter(function (res) {
                    return res.price >= _this.minPrice.valueOf();
                });
            if (_this.maxPrice != null)
                _this.ourProducts = _this.ourProducts.filter(function (res) {
                    return res.price < _this.maxPrice.valueOf();
                });
            if (_this.minQuantity != null)
                _this.ourProducts = _this.ourProducts.filter(function (res) {
                    return res.quantity >= _this.minQuantity.valueOf();
                });
            if (_this.maxQuantity != null)
                _this.ourProducts = _this.ourProducts.filter(function (res) {
                    return res.quantity < _this.maxQuantity.valueOf();
                });
        }, 100);
    };
    OurProductsComponent.prototype.onDelete = function (id) {
        this.producrService.deleteProduct(id);
    };
    OurProductsComponent.prototype.onCreate = function () {
        this.router.navigate(['/product-create']);
    };
    OurProductsComponent.prototype.onAddToCart = function (productId, name, price, category) {
        this.ShoppingCart.addProduct(productId, name, price, category);
    };
    OurProductsComponent.prototype.onSmartSearch = function () {
        if (this.smartsearch === "") {
            alert("Null Search");
            this.producrService.getProducts();
        }
        else {
            this.producrService.smartSearch(this.smartsearch.split(" "));
        }
    };
    OurProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-our-products',
            template: __webpack_require__(/*! ./our-products.component.html */ "./src/app/our-products/our-products.component.html"),
            styles: [__webpack_require__(/*! ./our-products.component.css */ "./src/app/our-products/our-products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servises_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _servises_shoppingcart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCart"], _servises_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"]])
    ], OurProductsComponent);
    return OurProductsComponent;
}());



/***/ }),

/***/ "./src/app/pie/pie.component.css":
/*!***************************************!*\
  !*** ./src/app/pie/pie.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BpZS9waWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pie/pie.component.html":
/*!****************************************!*\
  !*** ./src/app/pie/pie.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p></p>\r\n<button (click)=\"onHome()\" type=\"submit\" class=\"w3-bar-item w3-button w3-black\">Back To Home</button>\r\n\r\n"

/***/ }),

/***/ "./src/app/pie/pie.component.ts":
/*!**************************************!*\
  !*** ./src/app/pie/pie.component.ts ***!
  \**************************************/
/*! exports provided: PieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieComponent", function() { return PieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servises_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servises/product.service */ "./src/app/servises/product.service.ts");
/* harmony import */ var _servises_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../servises/shared.service */ "./src/app/servises/shared.service.ts");






var PieComponent = /** @class */ (function () {
    function PieComponent(router, producrService, sharedService) {
        this.router = router;
        this.producrService = producrService;
        this.sharedService = sharedService;
        this.user = false;
        this.data = [];
        this.topSalesData = [];
    }
    PieComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('token') != null)
            this.user = true;
        this.producrService.profitableFunc();
        setTimeout(function () {
            _this.productSub = _this.producrService.getProfitableUpdateListener().subscribe(function (productData) {
                _this.data = productData;
            });
            var color = d3__WEBPACK_IMPORTED_MODULE_2__["scaleOrdinal"](["red", "blue", "yellow", "brown", "cyan", "magenta", "pink", "orange", "purple", "rose", "gold", "silver"]);
            var svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"]("p").append("svg")
                .attr("width", 750)
                .attr("height", 750).append('g')
                .attr('transform', 'translate(' + (700 / 2) + ',' + (700 / 2) + ')');
            var arc = d3__WEBPACK_IMPORTED_MODULE_2__["arc"]().outerRadius(Math.min(700, 700) / 2).innerRadius(0);
            var pie = d3__WEBPACK_IMPORTED_MODULE_2__["pie"]().value(function (d) { return d.sales; }).sort(null);
            var path = svg.selectAll(".arc").data(pie(_this.data)).enter().append("g").attr("class", "arc");
            var r = 0;
            var p = Math.PI * 2;
            //var group = canvas.append("g")
            //.attr("transform", "translate(300,300)");
            path.append("path").attr("d", arc).attr("fill", function (d) { return color(d.data.ProductName); });
            path.append("text").attr("transform", function (d) { return "translate(" + arc.centroid(d) + ")"; })
                .attr("text-anchor", "middle")
                .attr("font-size", "1.2em")
                .text(function (d) { return (d.data.ProductName + "-" + d.data.sales); });
        }, 500);
    };
    PieComponent.prototype.onHome = function () {
        this.sharedService.viewNavBar(false);
        this.router.navigate(['/home-page']);
    };
    PieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sn-pie',
            template: __webpack_require__(/*! ./pie.component.html */ "./src/app/pie/pie.component.html"),
            styles: [__webpack_require__(/*! ./pie.component.css */ "./src/app/pie/pie.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _servises_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], _servises_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], PieComponent);
    return PieComponent;
}());



/***/ }),

/***/ "./src/app/product-create/product-create.component.css":
/*!*************************************************************!*\
  !*** ./src/app/product-create/product-create.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".w3-row-padding {\r\n  margin-left: 40%;\r\n  width: 50%;\r\n}\r\n\r\n.w3-sidebar {\r\n  font-family: \"Roboto\", sans-serif\r\n}\r\n\r\nbody, h1, h2, h3, h4, h5, h6, .w3-wide {\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1jcmVhdGUvcHJvZHVjdC1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxpQ0FBaUM7Q0FDbEM7O0FBRUQ7RUFDRSxzQ0FBc0M7Q0FDdkMiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LWNyZWF0ZS9wcm9kdWN0LWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnczLXJvdy1wYWRkaW5nIHtcclxuICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi53My1zaWRlYmFyIHtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZlxyXG59XHJcblxyXG5ib2R5LCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCAudzMtd2lkZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/product-create/product-create.component.html":
/*!**************************************************************!*\
  !*** ./src/app/product-create/product-create.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <footer class=\"w3-padding-64 w3-light-grey w3-small w3-center\" id=\"footer\">\r\n    <div class=\"w3-row-padding\">\r\n      <div class=\"w3-col s4\">\r\n        <h4>Create Product</h4>\r\n        <form action=\"/action_page.php\" target=\"_blank\">\r\n          <p><input #name class=\"w3-input w3-border\" type=\"text\" placeholder=\"name\" name=\"name\" required></p>\r\n          <p><input #price class=\"w3-input w3-border\" type=\"number\" placeholder=\"price\" name=\"price\" required></p>\r\n          <p><input #quantity class=\"w3-input w3-border\" type=\"number\" placeholder=\"quantity\" name=\"quantity\" required></p>\r\n          <p>\r\n            <select #category class=\"w3-input w3-border\" data-style=\"btn-info\" name=\"category\" required>\r\n              <option value=\"Fruits\">Fruits</option>\r\n              <option value=\"Milk Products\">Milk Products</option>\r\n            </select>\r\n          </p>\r\n          <button (click)=\"onCreate(name,price,quantity,category)\" type=\"submit\" class=\"w3-button w3-block w3-black\">Create</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n"

/***/ }),

/***/ "./src/app/product-create/product-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-create/product-create.component.ts ***!
  \************************************************************/
/*! exports provided: ProductCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCreateComponent", function() { return ProductCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servises_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servises/product.service */ "./src/app/servises/product.service.ts");



var ProductCreateComponent = /** @class */ (function () {
    function ProductCreateComponent(ProductService) {
        this.ProductService = ProductService;
    }
    ProductCreateComponent.prototype.onCreate = function (name, price, quantity, category) {
        this.ProductService.createProduct(name.value, price.value, quantity.value, category.value);
    };
    ProductCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sn-product-create',
            template: __webpack_require__(/*! ./product-create.component.html */ "./src/app/product-create/product-create.component.html"),
            styles: [__webpack_require__(/*! ./product-create.component.css */ "./src/app/product-create/product-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servises_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductCreateComponent);
    return ProductCreateComponent;
}());



/***/ }),

/***/ "./src/app/product-edit/product-edit.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".w3-row-padding {\r\n  margin-left: 40%;\r\n  width: 50%;\r\n}\r\n\r\n.w3-sidebar {\r\n  font-family: \"Roboto\", sans-serif\r\n}\r\n\r\nbody, h1, h2, h3, h4, h5, h6, .w3-wide {\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1lZGl0L3Byb2R1Y3QtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLGlDQUFpQztDQUNsQzs7QUFFRDtFQUNFLHNDQUFzQztDQUN2QyIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZWRpdC9wcm9kdWN0LWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53My1yb3ctcGFkZGluZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4udzMtc2lkZWJhciB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWZcclxufVxyXG5cclxuYm9keSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgLnczLXdpZGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/product-edit/product-edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <footer class=\"w3-padding-64 w3-light-grey w3-small w3-center\" id=\"footer\">\r\n    <div class=\"w3-row-padding\">\r\n      <div class=\"w3-col s4\">\r\n        <h4>Edit Product</h4>\r\n        <form action=\"/action_page.php\" target=\"_blank\">\r\n          <p><input #name class=\"w3-input w3-border\" type=\"text\" placeholder=\"name\" name=\"name\" required value=\"{{productName}}\" disabled></p>\r\n          <p><input #price class=\"w3-input w3-border\" type=\"number\" placeholder=\"price\" name=\"price\" required value=\"{{productPrice}}\"></p>\r\n          <p><input #quantity class=\"w3-input w3-border\" type=\"number\" placeholder=\"quantity\" name=\"quantity\" required value=\"{{productQuantity}}\"></p>\r\n          <p><input #category class=\"w3-input w3-border\" data-style=\"btn-info\" name=\"category\" required value=\"{{productCategory}}\" disabled></p>\r\n          <button (click)=\"onSave(name,price,quantity,category)\" type=\"submit\" class=\"w3-button w3-block w3-black\">Save</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n"

/***/ }),

/***/ "./src/app/product-edit/product-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.ts ***!
  \********************************************************/
/*! exports provided: ProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return ProductEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servises_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servises/product.service */ "./src/app/servises/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(ProductService, _route) {
        this.ProductService = ProductService;
        this._route = _route;
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        this.productId = this._route.snapshot.params['product._id'];
        this.productName = this._route.snapshot.params['product.name'];
        this.productPrice = this._route.snapshot.params['product.price'];
        this.productQuantity = this._route.snapshot.params['product.quantity'];
        this.productCategory = this._route.snapshot.params['product.category'];
    };
    ProductEditComponent.prototype.onSave = function (name, price, quantity, category) {
        this.ProductService.editProduct(this.productId, name.value, price.value, quantity.value, category.value);
    };
    ProductEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-edit',
            template: __webpack_require__(/*! ./product-edit.component.html */ "./src/app/product-edit/product-edit.component.html"),
            styles: [__webpack_require__(/*! ./product-edit.component.css */ "./src/app/product-edit/product-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servises_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "./src/app/servises/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/servises/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared.service */ "./src/app/servises/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var ProductService = /** @class */ (function () {
    function ProductService(router, http, socket, sharedService) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.socket = socket;
        this.sharedService = sharedService;
        this.products = [];
        this.profitable = [];
        this.profitableUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.profitable);
        this.productUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.products);
        this.sharedService.getTokenListener().subscribe(function (header) {
            _this.headers = header;
        });
    }
    ProductService.prototype.addProduct = function (newProduct) {
        this.products.push(newProduct);
        this.productUpdated.next(this.products.slice());
    };
    ProductService.prototype.getProducts = function () {
        var _this = this;
        this.http.get('http://localhost:3000/sn/products')
            .subscribe(function (responseData) {
            _this.products = responseData.products;
            _this.productUpdated.next(_this.products.slice());
        }, function (error) {
            alert('Error' + ":" + error.message);
        });
    };
    ProductService.prototype.topSales = function () {
        var _this = this;
        this.http.get('http://localhost:3000/sn/topSales')
            .subscribe(function (responseData) {
            _this.products = responseData.cartProducts;
            _this.productUpdated.next(_this.products.slice());
        }, function (error) {
            alert('Error' + ":" + error.message);
        });
    };
    ProductService.prototype.profitableFunc = function () {
        var _this = this;
        this.http.get('http://localhost:3000/sn/topProfitable')
            .subscribe(function (responseData) {
            _this.profitable = responseData.cartProducts;
            _this.profitableUpdated.next(_this.profitable.slice());
        }, function (error) {
            alert('Error' + ":" + error.message);
        });
    };
    ProductService.prototype.deleteProduct = function (id) {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id', id);
        this.http.delete('http://localhost:3000/sn/products/delete', { headers: this.headers, params: params })
            .subscribe(function (responseData) {
            var updateProducts = _this.products.filter(function (product) { return product._id != id; });
            _this.products = updateProducts;
            _this.productUpdated.next(_this.products.slice());
        }, function (error) {
            alert('Error' + ":" + error.message);
        });
    };
    ProductService.prototype.createProduct = function (name, price, quantity, category) {
        var _this = this;
        var createproduct = { name: name, price: price, quantity: quantity, category: category };
        this.http.post('http://localhost:3000/sn/products/create', createproduct, { headers: this.headers })
            .subscribe(function (responseData) {
            var product = {
                _id: responseData.productId,
                name: name,
                price: price,
                quantity: quantity,
                category: category
            };
            _this.socket.emit('new-product', product);
            _this.addProduct(product);
            _this.router.navigate(['/our-products']);
        }, function (error) {
            alert('Error' + ":" + error.message);
        });
    };
    ProductService.prototype.editProduct = function (id, name, price, quantity, category) {
        var _this = this;
        var editproduct = { productId: id, name: name, price: price, quantity: quantity, category: category };
        this.http.put('http://localhost:3000/sn/products/edit_product', editproduct, { headers: this.headers })
            .subscribe(function (responseData) {
            var updateProducts = _this.products.filter(function (editproduct) { return editproduct._id != id; });
            var edittedProduct = {
                _id: id,
                name: name,
                price: price,
                quantity: quantity,
                category: category
            };
            updateProducts.push(edittedProduct);
            _this.products = updateProducts;
            _this.productUpdated.next(_this.products.slice());
            _this.router.navigate(['/our-products']);
        }, function (error) {
            alert('Error' + ":" + error.message);
        });
    };
    ProductService.prototype.smartSearch = function (searchProduct) {
        var _this = this;
        this.http.post('http://localhost:3000/sn/products/smartSearch', { productNames: searchProduct }, { headers: this.headers })
            .subscribe(function (responseData) {
            _this.products = responseData.found;
            if (responseData.message === 'product dosent exist')
                alert(responseData.message);
            _this.productUpdated.next(_this.products.slice());
        }, function (error) {
            alert('Error' + ":" + error.message);
        });
    };
    ProductService.prototype.getProfitableUpdateListener = function () {
        return this.profitableUpdated.asObservable();
    };
    ProductService.prototype.getProductUpdateListener = function () {
        return this.productUpdated.asObservable();
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"], _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/servises/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/servises/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var SharedService = /** @class */ (function () {
    function SharedService() {
        this.navBar = false;
        this.navBarUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.navBar);
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        this.headerUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.headers);
        if (localStorage.getItem('token') != null) {
            this.setToken(localStorage.getItem('token'));
        }
    }
    SharedService.prototype.setToken = function (token) {
        if (this.headers.has("Authorization"))
            this.headers = this.headers.set("Authorization", token);
        else
            this.headers = this.headers.append("Authorization", token);
        this.headerUpdated.next(this.headers);
    };
    SharedService.prototype.deleteToken = function () {
        this.headers = this.headers.delete("Authorization");
        this.headerUpdated.next(this.headers);
    };
    SharedService.prototype.viewNavBar = function (bool) {
        this.navBar = bool;
        this.navBarUpdated.next(this.navBar);
    };
    SharedService.prototype.getViewNavBarListener = function () {
        return this.navBarUpdated.asObservable();
    };
    SharedService.prototype.getTokenListener = function () {
        return this.headerUpdated.asObservable();
    };
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/servises/shoppingcart.service.ts":
/*!**************************************************!*\
  !*** ./src/app/servises/shoppingcart.service.ts ***!
  \**************************************************/
/*! exports provided: ShoppingCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCart", function() { return ShoppingCart; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared.service */ "./src/app/servises/shared.service.ts");






var ShoppingCart = /** @class */ (function () {
    function ShoppingCart(http, router, sharedService) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.sharedService = sharedService;
        this.orders = [];
        this.shoppingCartProducts = [];
        this.cartUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.shoppingCartProducts);
        this.ordersUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.orders);
        this.bigUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.bigSpenders);
        this.sharedService.getTokenListener().subscribe(function (headers) {
            _this.headers = headers;
        });
    }
    ShoppingCart.prototype.getUserShoppingCart = function () {
        var _this = this;
        this.http.get('http://localhost:3000/sn/myShoppingCart', { headers: this.headers })
            .subscribe(function (responseData) {
            if (responseData.message === 'your cart is empty')
                _this.shoppingCartProducts = [];
            else
                _this.shoppingCartProducts = responseData.cartProduct.cart;
            _this.cartUpdated.next(_this.shoppingCartProducts.slice());
        }, function (error) {
            alert('Error' + ":" + error.message);
        });
    };
    ShoppingCart.prototype.addProduct = function (productId, name, price, category) {
        var _this = this;
        var addproduct = { productId: productId, quantity: 1 };
        this.http.put('http://localhost:3000/sn/myShoppingCart/addProduct', addproduct, { headers: this.headers })
            .subscribe(function (responsedata) {
            var edittedproduct = {
                _id: productId,
                name: name,
                price: price,
                quantity: 1,
                category: category
            };
            alert(responsedata.message);
            _this.shoppingCartProducts.push(edittedproduct);
            _this.cartUpdated.next(_this.shoppingCartProducts.slice());
        }, function (error) {
            alert('error' + ":" + error.message);
        });
    };
    ShoppingCart.prototype.deleteProduct = function (productId) {
        var _this = this;
        this.http.put('http://localhost:3000/sn/myShoppingCart/removeProduct', { productId: productId }, { headers: this.headers })
            .subscribe(function (responseData) {
            var updateProducts = _this.shoppingCartProducts.filter(function (product) { return product._id != productId; });
            _this.shoppingCartProducts = updateProducts;
            _this.cartUpdated.next(_this.shoppingCartProducts.slice());
        }, function (error) {
            alert('Error' + ":" + error.message);
        });
    };
    ShoppingCart.prototype.deleteCart = function () {
        var _this = this;
        this.http.delete('http://localhost:3000/sn/myShoppingCarts/delete', { headers: this.headers })
            .subscribe(function (responseData) {
            _this.shoppingCartProducts = [];
            _this.cartUpdated.next(_this.shoppingCartProducts.slice());
            _this.router.navigate(['/home-page']);
        }, function (error) {
            alert('Error' + ":" + error.message);
        });
    };
    ShoppingCart.prototype.editProduct = function (id, name, price, quantity, category) {
        var _this = this;
        var editproduct = [{ _id: id, name: name, price: price, quantity: quantity, category: category }];
        this.http.put('http://localhost:3000/sn/myShoppingCart/updateCart', { editProducts: editproduct }, { headers: this.headers })
            .subscribe(function (responseData) {
            var updateProducts = _this.shoppingCartProducts.filter(function (editproduct) { return editproduct._id != id; });
            var edittedProduct = {
                _id: id,
                name: name,
                price: price,
                quantity: quantity,
                category: category
            };
            updateProducts.push(edittedProduct);
            _this.shoppingCartProducts = updateProducts;
            _this.cartUpdated.next(_this.shoppingCartProducts.slice());
        }, function (error) {
            alert('Error' + ":" + error.message);
        });
    };
    ShoppingCart.prototype.payment = function () {
        var _this = this;
        this.http.get('http://localhost:3000/sn/myShoppingCart/payment', { headers: this.headers })
            .subscribe(function (responseData) {
            if (responseData.message === 'cart has been filterd') {
                alert(responseData.message);
                _this.shoppingCartProducts = responseData.newCart.cart;
                _this.cartUpdated.next(_this.shoppingCartProducts.slice());
            }
            else {
                _this.shoppingCartProducts = [];
                _this.cartUpdated.next(_this.shoppingCartProducts.slice());
                _this.router.navigate(['/home-page']);
            }
        }, function (error) {
            alert('Error' + ":" + error.message);
        });
    };
    ShoppingCart.prototype.bigSpender = function () {
        var _this = this;
        this.http.get('http://localhost:3000/sn/bigSpenders')
            .subscribe(function (responseData) {
            _this.bigSpenders = responseData.cities;
            _this.bigUpdated.next(_this.bigSpenders.slice());
        }, function (error) {
            alert('Error' + ":" + error.message);
        });
    };
    ShoppingCart.prototype.getOrders = function (token) {
        var _this = this;
        this.http.get('http://localhost:3000/sn/myOrders', { headers: this.headers })
            .subscribe(function (responseData) {
            if (responseData.message === 'your order list is empty') {
                alert(responseData.message);
                _this.orders = [];
            }
            else
                _this.orders = responseData.ordersProducts;
            _this.ordersUpdated.next(_this.orders.slice());
        }, function (error) {
            alert('Error' + ":" + error.message);
        });
    };
    ShoppingCart.prototype.getShoppingProductUpdateListener = function () {
        return this.cartUpdated.asObservable();
    };
    ShoppingCart.prototype.getOrdersProductUpdateListener = function () {
        return this.ordersUpdated.asObservable();
    };
    ShoppingCart.prototype.getbigSpendersUpdateListener = function () {
        return this.bigUpdated.asObservable();
    };
    ShoppingCart = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], ShoppingCart);
    return ShoppingCart;
}());



/***/ }),

/***/ "./src/app/servises/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/servises/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared.service */ "./src/app/servises/shared.service.ts");






var UserService = /** @class */ (function () {
    function UserService(http, router, sharedService) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.sharedService = sharedService;
        this.cordinate = [31.9702909, 34.768544399999996];
        this.cordinateUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.cordinate);
        this.connect = [false, false];
        this.userRole = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.connect);
        this.userName = '';
        this.userUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.userName);
        this.sharedService.getTokenListener().subscribe(function (headers) {
            _this.headers = headers;
        });
        if (this.headers.has("Authorization")) {
            this.connect[0] = true;
            this.userName = localStorage.getItem('name');
            this.userUpdated.next(this.userName);
            this.checkRole();
            this.getCordinates();
        }
    }
    UserService.prototype.createNewUser = function (user) {
        var _this = this;
        if (user.password == user.passwordConf) {
            this.http.post('http://localhost:3000/sn/users/create', user)
                .subscribe(function (responseData) {
                localStorage.setItem('token', responseData.token);
                localStorage.setItem('name', user.username);
                _this.connect[0] = true;
                _this.connect[1] = false;
                _this.userRole.next(_this.connect.slice());
                _this.userName = user.username;
                _this.userUpdated.next(_this.userName);
                _this.sharedService.setToken(responseData.token);
                _this.getCordinates();
                _this.router.navigate(['/home-page']);
            }, function (error) {
                alert('Error' + ":" + error.massage);
            });
        }
        else
            alert('Passwords do not match.');
    };
    UserService.prototype.logIn = function (user) {
        var _this = this;
        this.http.post('http://localhost:3000/sn/profile', user)
            .subscribe(function (responseData) {
            if (responseData.message != 'Wrong Credentials') {
                localStorage.setItem('token', responseData.token);
                localStorage.setItem('name', user.username);
                _this.sharedService.setToken(responseData.token);
                _this.connect[0] = true;
                _this.userName = user.username;
                _this.userUpdated.next(_this.userName);
                _this.checkRole();
                _this.getCordinates();
                _this.router.navigate(['/home-page']);
            }
            else
                alert(responseData.message);
        }, function (error) {
            alert('Error' + ":" + error.message);
        });
    };
    UserService.prototype.logOut = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        this.sharedService.deleteToken();
        this.connect[0] = false;
        this.connect[1] = false;
        this.userRole.next(this.connect.slice());
        this.userName = '';
        this.userUpdated.next(this.userName);
        this.cordinate = [31.9702909, 34.768544399999996];
        this.cordinateUpdated.next(this.cordinate.slice());
    };
    UserService.prototype.checkRole = function () {
        var _this = this;
        this.http.get('http://localhost:3000/sn/users/checkRole', { headers: this.headers })
            .subscribe(function (responseData) {
            if (responseData.message == "Admin")
                _this.connect[1] = true;
            else
                _this.connect[1] = false;
            _this.userRole.next(_this.connect.slice());
        });
    };
    UserService.prototype.getCordinates = function () {
        var _this = this;
        this.http.get('http://localhost:3000/sn/users/location', { headers: this.headers })
            .subscribe(function (responseData) {
            _this.cordinate = [responseData.lat, responseData.long];
            _this.cordinateUpdated.next(_this.cordinate.slice());
        }, function (error) {
            alert('Error' + ":" + error.message);
        });
    };
    UserService.prototype.getUserUpdateListener = function () {
        return this.userUpdated.asObservable();
    };
    UserService.prototype.getUserRoleListener = function () {
        return this.userRole.asObservable();
    };
    UserService.prototype.getCordinateUpdateListener = function () {
        return this.cordinateUpdated.asObservable();
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shopping-cart-edit/shopping-cart-edit.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/shopping-cart-edit/shopping-cart-edit.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".w3-row-padding {\r\n  margin-left: 40%;\r\n  width: 50%;\r\n}\r\n\r\n.w3-sidebar {\r\n  font-family: \"Roboto\", sans-serif\r\n}\r\n\r\nbody, h1, h2, h3, h4, h5, h6, .w3-wide {\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmctY2FydC1lZGl0L3Nob3BwaW5nLWNhcnQtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLGlDQUFpQztDQUNsQzs7QUFFRDtFQUNFLHNDQUFzQztDQUN2QyIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWNhcnQtZWRpdC9zaG9wcGluZy1jYXJ0LWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53My1yb3ctcGFkZGluZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4udzMtc2lkZWJhciB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWZcclxufVxyXG5cclxuYm9keSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgLnczLXdpZGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shopping-cart-edit/shopping-cart-edit.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shopping-cart-edit/shopping-cart-edit.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <footer class=\"w3-padding-64 w3-light-grey w3-small w3-center\" id=\"footer\">\r\n    <div class=\"w3-row-padding\">\r\n      <div class=\"w3-col s4\">\r\n        <h4>Edit Product</h4>\r\n        <form action=\"/action_page.php\" target=\"_blank\">\r\n          <p><input #name class=\"w3-input w3-border\" type=\"text\" placeholder=\"name\" name=\"name\" required value=\"{{shoppingProductName}}\" disabled></p>\r\n          <p><input #price class=\"w3-input w3-border\" type=\"number\" placeholder=\"price\" name=\"price\" required value=\"{{shoppingProductPrice}}\" disabled></p>\r\n          <p><input #quantity class=\"w3-input w3-border\" type=\"number\" placeholder=\"quantity\" name=\"quantity\" required value=\"{{shoppingProductQuantity}}\"></p>\r\n          <p><input #category class=\"w3-input w3-border\" type=\"text\" placeholder=\"category\" name=\"category\" required value=\"{{shoppingProductCategory}}\"disabled></p>\r\n          <button (click)=\"onSave(quantity)\" type=\"submit\" class=\"w3-button w3-block w3-black\">Save</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n"

/***/ }),

/***/ "./src/app/shopping-cart-edit/shopping-cart-edit.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shopping-cart-edit/shopping-cart-edit.component.ts ***!
  \********************************************************************/
/*! exports provided: ShoppingCartEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartEditComponent", function() { return ShoppingCartEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servises_shoppingcart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servises/shoppingcart.service */ "./src/app/servises/shoppingcart.service.ts");




var ShoppingCartEditComponent = /** @class */ (function () {
    function ShoppingCartEditComponent(ShoppingCart, _route, router) {
        this.ShoppingCart = ShoppingCart;
        this._route = _route;
        this.router = router;
    }
    ShoppingCartEditComponent.prototype.ngOnInit = function () {
        this.shoppingProductId = this._route.snapshot.params['shopping._id'];
        this.shoppingProductName = this._route.snapshot.params['shopping.name'];
        this.shoppingProductPrice = this._route.snapshot.params['shopping.price'];
        this.shoppingProductQuantity = this._route.snapshot.params['shopping.quantity'];
        this.shoppingProductCategory = this._route.snapshot.params['shopping.category'];
    };
    ShoppingCartEditComponent.prototype.onSave = function (quantity) {
        if (quantity.value > 0)
            this.ShoppingCart.editProduct(this.shoppingProductId, this.shoppingProductName, this.shoppingProductPrice, quantity.value, this.shoppingProductCategory);
        else
            this.ShoppingCart.deleteProduct(this.shoppingProductId);
        this.router.navigate(['/shopping-cart']);
    };
    ShoppingCartEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-cart-edit',
            template: __webpack_require__(/*! ./shopping-cart-edit.component.html */ "./src/app/shopping-cart-edit/shopping-cart-edit.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart-edit.component.css */ "./src/app/shopping-cart-edit/shopping-cart-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servises_shoppingcart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCart"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ShoppingCartEditComponent);
    return ShoppingCartEditComponent;
}());



/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".w3-row-padding {\r\n  margin-left: 40%;\r\n  width: 50%;\r\n}\r\n\r\n.w3-sidebar {\r\n  font-family: \"Roboto\", sans-serif\r\n}\r\n\r\nbody, h1, h2, h3, h4, h5, h6, .w3-wide {\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztDQUNaOztBQUVEO0VBQ0UsaUNBQWlDO0NBQ2xDOztBQUVEO0VBQ0Usc0NBQXNDO0NBQ3ZDIiwiZmlsZSI6InNyYy9hcHAvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudzMtcm93LXBhZGRpbmcge1xyXG4gIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLnczLXNpZGViYXIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmXHJcbn1cclxuXHJcbmJvZHksIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIC53My13aWRlIHtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.html":
/*!************************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<sn-header></sn-header>\r\n<!-- Overlay effect when opening sidebar on small screens -->\r\n<div class=\"w3-overlay w3-hide-large\" onclick=\"w3_close()\" style=\"cursor:pointer\" title=\"close side menu\" id=\"myOverlay\"></div>\r\n<!-- !PAGE CONTENT! -->\r\n<div class=\"w3-main\" style=\"margin-left:250px\">\r\n  <!-- Push down content on small screens -->\r\n  <div class=\"w3-hide-large\" style=\"margin-top:83px\"></div>\r\n  <div class=\"w3-container w3-text-grey\" id=\"jeans\">\r\n    <h1 class=\"w3-bar-item w3-text-grey w3-padding\">Our Shopping List</h1>\r\n  </div>\r\n  <div *ngIf=\"ourShoppingProducts.length!=0\"  class=\"w3-container\">\r\n    <table class=\"w3-table w3-striped\">\r\n      <tr>\r\n        <th><h4><b>Product Name</b></h4></th>\r\n        <th><h4><b>Price</b></h4></th>\r\n        <th><h4><b>Quantity</b></h4></th>\r\n        <th><h4><b>Full Price</b></h4></th>\r\n      </tr>\r\n      <tr *ngFor=\"let shopping of ourShoppingProducts\">\r\n        <th>{{shopping.name}}</th>\r\n        <th>{{shopping.price}}</th>\r\n        <th>{{shopping.quantity}}</th>\r\n        <th>{{shopping.quantity*shopping.price}}</th>\r\n        <th><button (click)=\"onDelete(shopping._id)\" class=\"w3-bar-item w3-button w3-padding\">Delete</button></th>\r\n        <th><button [routerLink]=\"['/shopping-cart-edit',shopping._id,shopping.name,shopping.price,shopping.quantity,shopping.category]\" class=\"w3-bar-item w3-button w3-padding\">Edit</button></th>\r\n      </tr>\r\n    </table>\r\n    <button (click)=\"onPayment()\" type=\"submit\" class=\"w3-bar-item w3-button w3-black\">Payment</button>\r\n    <button (click)=\"onDeleteCart()\" type=\"submit\" class=\"w3-bar-item w3-button w3-black\">Delete Cart</button>\r\n  </div>\r\n  <div *ngIf=\"ourShoppingProducts.length==0\">\r\n    your cart is empty !!\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servises_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servises/product.service */ "./src/app/servises/product.service.ts");
/* harmony import */ var _servises_shoppingcart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servises/shoppingcart.service */ "./src/app/servises/shoppingcart.service.ts");




var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(ShoppingCart, producrService) {
        this.ShoppingCart = ShoppingCart;
        this.producrService = producrService;
        this.ourShoppingProducts = [];
    }
    //need to add full price
    ShoppingCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ShoppingCart.getUserShoppingCart();
        this.shoppingProductSub = this.ShoppingCart.getShoppingProductUpdateListener().subscribe(function (shopping) {
            _this.ourShoppingProducts = shopping;
        }); //only with timeout the observer can get the full response.
    };
    ShoppingCartComponent.prototype.onPayment = function () {
        this.ShoppingCart.payment();
    };
    ShoppingCartComponent.prototype.onDeleteCart = function () {
        this.ShoppingCart.deleteCart();
    };
    ShoppingCartComponent.prototype.onDelete = function (productId) {
        this.ShoppingCart.deleteProduct(productId);
    };
    ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/shopping-cart/shopping-cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servises_shoppingcart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCart"], _servises_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/sign-in-view/sign-in-view.component.css":
/*!*********************************************************!*\
  !*** ./src/app/sign-in-view/sign-in-view.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".w3-row-padding {\r\n  margin-left: 40%;\r\n  width: 50%;\r\n}\r\n\r\n.w3-sidebar {\r\n  font-family: \"Roboto\", sans-serif\r\n}\r\n\r\nbody, h1, h2, h3, h4, h5, h6, .w3-wide {\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi1pbi12aWV3L3NpZ24taW4tdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLGlDQUFpQztDQUNsQzs7QUFFRDtFQUNFLHNDQUFzQztDQUN2QyIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4tdmlldy9zaWduLWluLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53My1yb3ctcGFkZGluZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4udzMtc2lkZWJhciB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWZcclxufVxyXG5cclxuYm9keSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgLnczLXdpZGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/sign-in-view/sign-in-view.component.html":
/*!**********************************************************!*\
  !*** ./src/app/sign-in-view/sign-in-view.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <footer class=\"w3-padding-64 w3-light-grey w3-small w3-center\" id=\"footer\">\r\n    <div class=\"w3-row-padding\">\r\n      <div class=\"w3-col s4\">\r\n        <sn-sign-in></sn-sign-in> \r\n      </div>\r\n    </div>\r\n  </footer>\r\n"

/***/ }),

/***/ "./src/app/sign-in-view/sign-in-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sign-in-view/sign-in-view.component.ts ***!
  \********************************************************/
/*! exports provided: SignInViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInViewComponent", function() { return SignInViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignInViewComponent = /** @class */ (function () {
    function SignInViewComponent() {
    }
    SignInViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sn-sign-in-view',
            template: __webpack_require__(/*! ./sign-in-view.component.html */ "./src/app/sign-in-view/sign-in-view.component.html"),
            styles: [__webpack_require__(/*! ./sign-in-view.component.css */ "./src/app/sign-in-view/sign-in-view.component.css")]
        })
    ], SignInViewComponent);
    return SignInViewComponent;
}());



/***/ }),

/***/ "./src/app/tops/tops.component.css":
/*!*****************************************!*\
  !*** ./src/app/tops/tops.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcHMvdG9wcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/tops/tops.component.html":
/*!******************************************!*\
  !*** ./src/app/tops/tops.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- Product grid -->\r\n<div class=\"w3-row w3-grayscale\">\r\n  <div *ngFor=\"let product of topProducts\" class=\"w3-col l3 s6\">\r\n    <div class=\"w3-container\">\r\n      <p>{{product.name}}<br><b>{{product.price}}$</b></p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tops/tops.component.ts":
/*!****************************************!*\
  !*** ./src/app/tops/tops.component.ts ***!
  \****************************************/
/*! exports provided: TopsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopsComponent", function() { return TopsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servises_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servises/product.service */ "./src/app/servises/product.service.ts");



var TopsComponent = /** @class */ (function () {
    function TopsComponent(producrService) {
        this.producrService = producrService;
        this.topProducts = [];
    }
    TopsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.producrService.topSales();
        this.productSub = this.producrService.getProductUpdateListener().subscribe(function (productData) {
            _this.topProducts = productData;
        });
    };
    TopsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sn-tops',
            template: __webpack_require__(/*! ./tops.component.html */ "./src/app/tops/tops.component.html"),
            styles: [__webpack_require__(/*! ./tops.component.css */ "./src/app/tops/tops.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servises_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], TopsComponent);
    return TopsComponent;
}());



/***/ }),

/***/ "./src/app/users/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/users/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".w3-row-padding {\r\n  margin-left: 40%;\r\n  width: 50%;\r\n}\r\n.w3-sidebar  {\r\n  font-family: \"Roboto\", sans-serif\r\n}\r\nbody, h1, h2, h3, h4, h5, h6, .w3-wide {\r\n  font-family: \"Montserrat\", sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0NBQ1o7QUFDRDtFQUNFLGlDQUFpQztDQUNsQztBQUVEO0VBQ0Usc0NBQXNDO0NBQ3ZDIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53My1yb3ctcGFkZGluZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbi53My1zaWRlYmFyICB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWZcclxufVxyXG5cclxuYm9keSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgLnczLXdpZGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/users/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/users/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <footer class=\"w3-padding-64 w3-light-grey w3-small w3-center\" id=\"footer\">\r\n    <div class=\"w3-row-padding\" fxLayout=\"row\" fxLayoutAlign=\"center center\" >\r\n      <div class=\"w3-col s4\">\r\n        <h4>Log In</h4>\r\n        <p>Questions? Go ahead.</p>\r\n        <form action=\"/action_page.php\" target=\"_blank\">\r\n          <p><input #username class=\"w3-input w3-border\" type=\"text\" placeholder=\"username\" name=\"username\" required></p>\r\n          <p><input #password class=\"w3-input w3-border\" type=\"password\" placeholder=\"password\" name=\"password\" required></p>\r\n          <button (click)=\"ngLogin(username,password)\" type=\"submit\" class=\"w3-button w3-block w3-black\">LogIn</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n"

/***/ }),

/***/ "./src/app/users/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/users/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servises_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servises/user.service */ "./src/app/servises/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.user = false;
    }
    LoginComponent.prototype.ngLogin = function (username, password) {
        var loginUser = {
            email: 'nevermind',
            username: username.value,
            password: password.value,
            passwordConf: 'nevermind',
            city: 'nevermind'
        };
        this.userService.logIn(loginUser);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sn-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/users/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/users/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _servises_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/users/sign-in/sign-in.component.css":
/*!*****************************************************!*\
  !*** ./src/app/users/sign-in/sign-in.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/users/sign-in/sign-in.component.html":
/*!******************************************************!*\
  !*** ./src/app/users/sign-in/sign-in.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "        <h4>Sign In</h4>\r\n        <form action=\"/action_page.php\" target=\"_blank\">\r\n          <p><input #username class=\"w3-input w3-border\" type=\"text\" placeholder=\"username\" name=\"username\" required></p>\r\n          <p><input #email class=\"w3-input w3-border\" type=\"email\" placeholder=\"Email\" name=\"Email\" required></p>\r\n          <p><input #password class=\"w3-input w3-border\" type=\"password\" placeholder=\"Password\" name=\"Message\" required></p>\r\n          <p><input #passwordconf class=\"w3-input w3-border\" type=\"password\" placeholder=\"Please re-enter your chosen passeord\" name=\"Message\" required></p>\r\n          <p>\r\n            <select #city class=\"w3-input w3-border\" data-style=\"btn-info\" name=\"City\" required>\r\n              <option value=\"Bat-Yam\">Bat-Yam</option>\r\n              <option value=\"Rishon le zion\">Rishon le zion</option>\r\n              <option value=\"Rhovot\">Rhovot</option>\r\n              <option value=\"Ramat gan\">Ramat gan</option>\r\n              <option value=\"Yavne\">Yavne</option>\r\n              <option value=\"Ness ziona\">Ness ziona</option>\r\n            </select>\r\n          </p>\r\n          <button (click)=\"ngSingIn(username,email,password,passwordconf,city)\" type=\"submit\" class=\"w3-button w3-block w3-black\">SignIn</button>\r\n        </form>\r\n"

/***/ }),

/***/ "./src/app/users/sign-in/sign-in.component.ts":
/*!****************************************************!*\
  !*** ./src/app/users/sign-in/sign-in.component.ts ***!
  \****************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servises_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servises/user.service */ "./src/app/servises/user.service.ts");



var SignInComponent = /** @class */ (function () {
    function SignInComponent(userService) {
        this.userService = userService;
    }
    SignInComponent.prototype.ngSingIn = function (username, email, password, passwordconf, city) {
        var SignInUser = {
            email: email.value,
            username: username.value,
            password: password.value,
            passwordConf: passwordconf.value,
            city: city.value
        };
        this.userService.createNewUser(SignInUser);
    };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sn-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/users/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/users/sign-in/sign-in.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servises_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], SignInComponent);
    return SignInComponent;
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
    production: false
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

module.exports = __webpack_require__(/*! C:\Users\daniel\Documents\GitHub\The most new version of superNav\SuperNAV\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map