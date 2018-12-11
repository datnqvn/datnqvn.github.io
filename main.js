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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"about\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-md-6 col-sm-6\">\n              <div class=\"block wow fadeInLeft\" data-wow-delay=\".3s\" data-wow-duration=\"500ms\">\n                  <h2>\n                  ABOUT ME\n                  </h2>\n                  <p>\n                      Hello, I’m a UI/UX Designer & Front End Developer from Victoria, Australia. I hold a master degree of Web Design from the World University.And scrambled it to make a type specimen book. It has survived not only five centuries\n                  </p>\n                  <p>\n                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, adipisci voluptatum repudiandae, natus impedit repellat aut officia illum at assumenda iusto reiciendis placeat. Temporibus, vero.\n                  </p>\n              </div>\n              \n          </div>\n          <div class=\"col-md-6 col-sm-6\">\n              <div class=\"block wow fadeInRight\" data-wow-delay=\".3s\" data-wow-duration=\"500ms\">\n                  <img src=\"images/about/about.jpg\" alt=\"\">\n              </div>\n          </div>\n      </div>\n  </div>\n</section> <!-- /#about -->"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

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
        this.title = 'timeblog';
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _hero_area_hero_area_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hero-area/hero-area.component */ "./src/app/hero-area/hero-area.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _works_works_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./works/works.component */ "./src/app/works/works.component.ts");
/* harmony import */ var _feature_feature_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./feature/feature.component */ "./src/app/feature/feature.component.ts");
/* harmony import */ var _call_to_action_call_to_action_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./call-to-action/call-to-action.component */ "./src/app/call-to-action/call-to-action.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _hero_area_hero_area_component__WEBPACK_IMPORTED_MODULE_9__["HeroAreaComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _works_works_component__WEBPACK_IMPORTED_MODULE_11__["WorksComponent"],
                _feature_feature_component__WEBPACK_IMPORTED_MODULE_12__["FeatureComponent"],
                _call_to_action_call_to_action_component__WEBPACK_IMPORTED_MODULE_13__["CallToActionComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"] },
                    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"] },
                    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"] }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/call-to-action/call-to-action.component.css":
/*!*************************************************************!*\
  !*** ./src/app/call-to-action/call-to-action.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/call-to-action/call-to-action.component.html":
/*!**************************************************************!*\
  !*** ./src/app/call-to-action/call-to-action.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"call-to-action\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-md-12\">\n              <div class=\"block\">\n                  <h2 class=\"title wow fadeInDown\" data-wow-delay=\".3s\" data-wow-duration=\"500ms\">SO WHAT YOU THINK ?</h2>\n                  <p class=\"wow fadeInDown\" data-wow-delay=\".5s\" data-wow-duration=\"500ms\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,<br>possimus commodi, fugiat magnam temporibus vero magni recusandae? Dolore, maxime praesentium.</p>\n                  <a routerLink=\"/contact\" class=\"btn btn-default btn-contact wow fadeInDown\" data-wow-delay=\".7s\" data-wow-duration=\"500ms\">Contact With Me</a>\n              </div>\n          </div>\n          \n      </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/call-to-action/call-to-action.component.ts":
/*!************************************************************!*\
  !*** ./src/app/call-to-action/call-to-action.component.ts ***!
  \************************************************************/
/*! exports provided: CallToActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallToActionComponent", function() { return CallToActionComponent; });
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

var CallToActionComponent = /** @class */ (function () {
    function CallToActionComponent() {
    }
    CallToActionComponent.prototype.ngOnInit = function () {
    };
    CallToActionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-call-to-action',
            template: __webpack_require__(/*! ./call-to-action.component.html */ "./src/app/call-to-action/call-to-action.component.html"),
            styles: [__webpack_require__(/*! ./call-to-action.component.css */ "./src/app/call-to-action/call-to-action.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CallToActionComponent);
    return CallToActionComponent;
}());



/***/ }),

/***/ "./src/app/contact.service.ts":
/*!************************************!*\
  !*** ./src/app/contact.service.ts ***!
  \************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactService = /** @class */ (function () {
    function ContactService(http) {
        this.http = http;
        this.apiUrl = '//localhost:3000';
    }
    ContactService.prototype.SubmitContact = function (request) {
        return this.http.post(this.apiUrl + '/contacts/', request);
    };
    ContactService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n        ================================================== \n            Global Page Section Start\n        ================================================== -->\n<section class=\"global-page-header\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"block\">\n                    <h2>Contact</h2>\n                    <ol class=\"breadcrumb\">\n                        <li>\n                            <a href=\"index.html\">\n                                <i class=\"ion-ios-home\"></i>\n                                Home\n                            </a>\n                        </li>\n                        <li class=\"active\">Contact</li>\n                    </ol>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n<!-- \n================================================== \n  Contact Section Start\n================================================== -->\n<section id=\"contact-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"block\">\n                    <h2 class=\"subtitle wow fadeInDown\" data-wow-duration=\"500ms\" data-wow-delay=\".3s\">Contact With Me</h2>\n                    <p class=\"subtitle-des wow fadeInDown\" data-wow-duration=\"500ms\" data-wow-delay=\".5s\">\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, ea!\n                        consectetur adipisicing elit. Dolore, ea!\n                    </p>\n                    <div class=\"contact-form\">\n                        <form id=\"contact-form\" method=\"#\" action=\"#\" role=\"form\">\n                            <div class=\"form-group wow fadeInDown\" data-wow-duration=\"500ms\" data-wow-delay=\".8s\">\n                                <input type=\"number\" placeholder=\"Your Id\" class=\"form-control\" name=\"id\" id=\"id\"\n                                    [(ngModel)]=\"Id\">\n                            </div>\n                            <div class=\"form-group wow fadeInDown\" data-wow-duration=\"500ms\" data-wow-delay=\".6s\">\n                                <input type=\"text\" placeholder=\"Your Name\" class=\"form-control\" name=\"name\" id=\"name\"\n                                    [(ngModel)]=\"FullName\">\n                            </div>\n\n                            <div class=\"form-group wow fadeInDown\" data-wow-duration=\"500ms\" data-wow-delay=\".8s\">\n                                <input type=\"email\" placeholder=\"Your Email\" class=\"form-control\" name=\"email\" id=\"email\"\n                                    [(ngModel)]=\"Email\">\n                            </div>\n                            <div class=\"form-group wow fadeInDown\" data-wow-duration=\"500ms\" data-wow-delay=\".8s\">\n                                <input type=\"tel\" placeholder=\"Your phone\" class=\"form-control\" name=\"phone\" id=\"phone\"\n                                    [(ngModel)]=\"Phone\">\n                            </div>\n\n                            <div class=\"form-group wow fadeInDown\" data-wow-duration=\"500ms\" data-wow-delay=\"1s\">\n                                <input type=\"text\" placeholder=\"Subject\" class=\"form-control\" name=\"subject\" id=\"subject\"\n                                    [(ngModel)]=\"Subject\">\n                            </div>\n\n                            <div class=\"form-group wow fadeInDown\" data-wow-duration=\"500ms\" data-wow-delay=\"1.2s\">\n                                <textarea rows=\"6\" placeholder=\"Message\" class=\"form-control\" name=\"message\" id=\"message\"\n                                    [(ngModel)]=\"Messages\"></textarea>\n                            </div>\n\n                            <div id=\"success\" class=\"success\">\n                                Thank you. The Mailman is on His Way :)\n                            </div>\n\n                            <div id=\"error\" class=\"error\">\n                                Sorry, don't know what happened. Try later :(\n                            </div>\n\n                            <div id=\"submit\" class=\"wow fadeInDown\" data-wow-duration=\"500ms\" data-wow-delay=\"1.4s\">\n                                <input type=\"button\" id=\"contact-submit\" class=\"btn btn-default btn-send\" value=\"Send Message\"\n                                    (click)=\"OnSubmit()\">\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"map-area\">\n                    <h2 class=\"subtitle  wow fadeInDown\" data-wow-duration=\"500ms\" data-wow-delay=\".3s\">Find Us</h2>\n                    <p class=\"subtitle-des wow fadeInDown\" data-wow-duration=\"500ms\" data-wow-delay=\".5s\">\n                        Si aute quis eu proident o cupidatat ne anim nescius, et est praesentibus, o quorum vidisse\n                        expetendis, nostrud eram quibusdam ad nam nostrud ubi.\n\n                    </p>\n                    <div class=\"map\">\n                        <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.277552998015!2d90.3678744!3d23.773128800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0ae4adf3cb9%3A0x7f2cf443b764e4a4!2sShishu+Mela!5e0!3m2!1sen!2s!4v1435516022247\"\n                            width=\"100%\" height=\"400\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row address-details\">\n            <div class=\"col-md-3\">\n                <div class=\"address wow fadeInLeft\" data-wow-duration=\"500ms\" data-wow-delay=\".3s\">\n                    <i class=\"ion-ios-location-outline\"></i>\n                    <h5>125 , Kings Street,Melbourne <br>United Kingdom,600562</h5>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"address wow fadeInLeft\" data-wow-duration=\"500ms\" data-wow-delay=\".5s\">\n                    <i class=\"ion-ios-location-outline\"></i>\n                    <h5>125 , Kings Street,Melbourne <br>United Kingdom,600562</h5>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"email wow fadeInLeft\" data-wow-duration=\"500ms\" data-wow-delay=\".7s\">\n                    <i class=\"ion-ios-email-outline\"></i>\n                    <p>support@themefisher.com<br>support@themefisher.com</p>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"phone wow fadeInLeft\" data-wow-duration=\"500ms\" data-wow-delay=\".9s\">\n                    <i class=\"ion-ios-telephone-outline\"></i>\n                    <p>+07 052 245 022<br>+07 999 999 999</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contact.service */ "./src/app/contact.service.ts");
/* harmony import */ var _request_submit_contact_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request/submit-contact-request */ "./src/app/request/submit-contact-request.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = /** @class */ (function () {
    function ContactComponent(contactService) {
        this.contactService = contactService;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.OnSubmit = function () {
        var _this = this;
        this.contactService.SubmitContact(new _request_submit_contact_request__WEBPACK_IMPORTED_MODULE_2__["SubmitContactRequest"]({
            FullName: this.FullName,
            Email: this.Email,
            Phone: this.Phone,
            Subject: this.Subject,
            Messages: this.Messages
        }))
            .subscribe(function (response) {
            console.log(response);
            _this.Id = response.id;
        });
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/feature/feature.component.css":
/*!***********************************************!*\
  !*** ./src/app/feature/feature.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feature/feature.component.html":
/*!************************************************!*\
  !*** ./src/app/feature/feature.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"feature\">\n  <div class=\"container\">\n      <div class=\"section-heading\">\n          <h1 class=\"title wow fadeInDown\" data-wow-delay=\".3s\">Offer From Me</h1>\n          <p class=\"wow fadeInDown\" data-wow-delay=\".5s\">\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,<br> quasi dolores numquam dolor vero ex, tempora commodi repellendus quod laborum.\n          </p>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-md-4 col-lg-4 col-xs-12\">\n              <div class=\"media wow fadeInUp animated\" data-wow-duration=\"500ms\" data-wow-delay=\"300ms\">\n                  <div class=\"media-left\">\n                      <div class=\"icon\">\n                          <i class=\"ion-ios-flask-outline\"></i>\n                      </div>\n                  </div>\n                  <div class=\"media-body\">\n                      <h4 class=\"media-heading\">Media heading</h4>\n                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, sint.</p>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-4 col-lg-4 col-xs-12\">\n              <div class=\"media wow fadeInDown animated\" data-wow-duration=\"500ms\" data-wow-delay=\"600ms\">\n                  <div class=\"media-left\">\n                      <div class=\"icon\">\n                          <i class=\"ion-ios-lightbulb-outline\"></i>\n                      </div>\n                  </div>\n                  <div class=\"media-body\">\n                      <h4 class=\"media-heading\">Well documented.</h4>\n                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, sint.</p>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-4 col-lg-4 col-xs-12\">\n              <div class=\"media wow fadeInDown animated\" data-wow-duration=\"500ms\" data-wow-delay=\"900ms\">\n                  <div class=\"media-left\">\n                      <div class=\"icon\">\n                          <i class=\"ion-ios-lightbulb-outline\"></i>\n                      </div>\n                  </div>\n                  <div class=\"media-body\">\n                      <h4 class=\"media-heading\">Well documented.</h4>\n                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, sint.</p>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-4 col-lg-4 col-xs-12\">\n              <div class=\"media wow fadeInDown animated\" data-wow-duration=\"500ms\" data-wow-delay=\"1200ms\">\n                  <div class=\"media-left\">\n                      <div class=\"icon\">\n                          <i class=\"ion-ios-americanfootball-outline\"></i>\n                      </div>\n                  </div>\n                  <div class=\"media-body\">\n                      <h4 class=\"media-heading\">Free updates</h4>\n                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, sint.</p>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-4 col-lg-4 col-xs-12\">\n              <div class=\"media wow fadeInDown animated\" data-wow-duration=\"500ms\" data-wow-delay=\"1500ms\">\n                  <div class=\"media-left\">\n                      <div class=\"icon\">\n                          <i class=\"ion-ios-keypad-outline\"></i>\n                      </div>\n                  </div>\n                  <div class=\"media-body\">\n                      <h4 class=\"media-heading\">Solid Support</h4>\n                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, sint.</p>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-4 col-lg-4 col-xs-12\">\n              <div class=\"media wow fadeInDown animated\" data-wow-duration=\"500ms\" data-wow-delay=\"1800ms\">\n                  <div class=\"media-left\">\n                      <div class=\"icon\">\n                          <i class=\"ion-ios-barcode-outline\"></i>\n                      </div>\n                  </div>\n                  <div class=\"media-body\">\n                      <h4 class=\"media-heading\">Simple Installation</h4>\n                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, sint.</p>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</section> <!-- /#feature -->"

/***/ }),

/***/ "./src/app/feature/feature.component.ts":
/*!**********************************************!*\
  !*** ./src/app/feature/feature.component.ts ***!
  \**********************************************/
/*! exports provided: FeatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureComponent", function() { return FeatureComponent; });
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

var FeatureComponent = /** @class */ (function () {
    function FeatureComponent() {
    }
    FeatureComponent.prototype.ngOnInit = function () {
    };
    FeatureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feature',
            template: __webpack_require__(/*! ./feature.component.html */ "./src/app/feature/feature.component.html"),
            styles: [__webpack_require__(/*! ./feature.component.css */ "./src/app/feature/feature.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeatureComponent);
    return FeatureComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\n  <div class=\"container\">\n      <div class=\"col-md-8\">\n          <p class=\"copyright\">Copyright: <span><script>document.write(new Date().getFullYear())</script></span> Design and Developed by <a href=\"http://www.Themefisher.com\" target=\"_blank\">Themefisher</a>. <br> \n              Get More \n              <a href=\"https://themefisher.com/free-bootstrap-templates/\" target=\"_blank\">\n                  Free Bootstrap Templates\n              </a>\n          </p>\n      </div>\n      <div class=\"col-md-4\">\n          <!-- Social Media -->\n          <ul class=\"social\">\n              <li>\n                  <a href=\"http://wwww.fb.com/themefisher\" class=\"Facebook\">\n                      <i class=\"ion-social-facebook\"></i>\n                  </a>\n              </li>\n              <li>\n                  <a href=\"http://wwww.twitter.com/themefisher\" class=\"Twitter\">\n                      <i class=\"ion-social-twitter\"></i>\n                  </a>\n              </li>\n              <li>\n                  <a href=\"#\" class=\"Linkedin\">\n                      <i class=\"ion-social-linkedin\"></i>\n                  </a>\n              </li>\n              <li>\n                  <a href=\"http://wwww.fb.com/themefisher\" class=\"Google Plus\">\n                      <i class=\"ion-social-googleplus\"></i>\n                  </a>\n              </li>\n          </ul>\n      </div>\n  </div>\n</footer> <!-- /#footer -->"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"top-bar\" class=\"fixed-top animated-header\">\n  <div class=\"container\">\n      <div class=\"navbar-header\">\n          <!-- responsive nav button -->\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          </button>\n          <!-- /responsive nav button -->\n          \n          <!-- logo -->\n          <div class=\"navbar-brand\">\n              <a routerLink=\"\" >\n                  <img src=\"src/assets/images/logo.png\" alt=\"\">\n              </a>\n          </div>\n          <!-- /logo -->\n      </div>\n      <!-- main menu -->\n      <nav class=\"collapse navbar-collapse navbar-right\" role=\"navigation\">\n          <div class=\"main-menu\">\n              <ul class=\"nav navbar-nav navbar-right\">\n                  <li>\n                      <a routerLink='home' >Home</a>\n                  </li>\n                  <li><a href=\"about.html\">About</a></li>\n                  <li><a href=\"service.html\">Service</a></li>\n                  <li class=\"dropdown\">\n                      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Pages <span class=\"caret\"></span></a>\n                      <div class=\"dropdown-menu\">\n                          <ul>\n                              <li><a href=\"404.html\">404 Page</a></li>\n                              <li><a href=\"gallery.html\">Gallery</a></li>\n                          </ul>\n                      </div>\n                  </li>\n                  <li class=\"dropdown\">\n                      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Blog <span class=\"caret\"></span></a>\n                      <div class=\"dropdown-menu\">\n                          <ul>\n                              <li><a href=\"blog-fullwidth.html\">Blog Full</a></li>\n                              <li><a href=\"blog-left-sidebar.html\">Blog Left sidebar</a></li>\n                              <li><a href=\"blog-right-sidebar.html\">Blog Right sidebar</a></li>\n                          </ul>\n                      </div>\n                  </li>\n                  <li><a routerLink='contact'>Contact</a></li>\n              </ul>\n          </div>\n      </nav>\n      <!-- /main nav -->\n  </div>\n</header>"

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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/hero-area/hero-area.component.css":
/*!***************************************************!*\
  !*** ./src/app/hero-area/hero-area.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hero-area/hero-area.component.html":
/*!****************************************************!*\
  !*** ./src/app/hero-area/hero-area.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"hero-area\" >\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-md-12 text-center\">\n              <div class=\"block wow fadeInUp\" data-wow-delay=\".3s\">\n                  <!-- Slider -->\n                  <section class=\"cd-intro\">\n                      <h1 class=\"wow fadeInUp animated cd-headline slide\" data-wow-delay=\".4s\" >\n                      <span>HI, MY NAME IS JONATHON & I AM A</span><br>\n                      <span class=\"cd-words-wrapper\">\n                          <b class=\"is-visible\">DESIGNER</b>\n                          <b>DEVELOPER</b>\n                          <b>FATHER</b>\n                      </span>\n                      </h1>\n                      </section> <!-- cd-intro -->\n                      <!-- /.slider -->\n                      <h2 class=\"wow fadeInUp animated\" data-wow-delay=\".6s\" >\n                          With 10 years experience, I've occupied many roles including digital design director,<br> web designer and developer. This site showcases some of my work.\n                      </h2>\n                      <a class=\"btn-lines dark light wow fadeInUp animated smooth-scroll btn btn-default btn-green\" data-wow-delay=\".9s\" href=\"#works\" data-section=\"#works\">View Works</a>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </section><!--/#main-slider-->"

/***/ }),

/***/ "./src/app/hero-area/hero-area.component.ts":
/*!**************************************************!*\
  !*** ./src/app/hero-area/hero-area.component.ts ***!
  \**************************************************/
/*! exports provided: HeroAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroAreaComponent", function() { return HeroAreaComponent; });
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

var HeroAreaComponent = /** @class */ (function () {
    function HeroAreaComponent() {
    }
    HeroAreaComponent.prototype.ngOnInit = function () {
    };
    HeroAreaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero-area',
            template: __webpack_require__(/*! ./hero-area.component.html */ "./src/app/hero-area/hero-area.component.html"),
            styles: [__webpack_require__(/*! ./hero-area.component.css */ "./src/app/hero-area/hero-area.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroAreaComponent);
    return HeroAreaComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-hero-area></app-hero-area>\n<app-about></app-about>\n<app-works></app-works>\n<app-feature></app-feature>\n<app-call-to-action></app-call-to-action>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/request/submit-contact-request.ts":
/*!***************************************************!*\
  !*** ./src/app/request/submit-contact-request.ts ***!
  \***************************************************/
/*! exports provided: SubmitContactRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitContactRequest", function() { return SubmitContactRequest; });
var SubmitContactRequest = /** @class */ (function () {
    function SubmitContactRequest(init) {
        if (init) {
            Object.assign(this, init);
        }
    }
    return SubmitContactRequest;
}());



/***/ }),

/***/ "./src/app/works/works.component.css":
/*!*******************************************!*\
  !*** ./src/app/works/works.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/works/works.component.html":
/*!********************************************!*\
  !*** ./src/app/works/works.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"works\" class=\"works\">\n  <div class=\"container\">\n      <div class=\"section-heading\">\n          <h1 class=\"title wow fadeInDown\" data-wow-delay=\".3s\">Latest Works</h1>\n          <p class=\"wow fadeInDown\" data-wow-delay=\".5s\">\n              Aliquam lobortis. Maecenas vestibulum mollis diam. Pellentesque auctor neque nec urna. Nulla sit amet est. Aenean posuere <br> tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.\n          </p>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-sm-4 col-xs-12\">\n              <figure class=\"wow fadeInLeft animated portfolio-item\" data-wow-duration=\"500ms\" data-wow-delay=\"0ms\">\n                  <div class=\"img-wrapper\">\n                      <img src=\"src/assets/images/portfolio/item-1.jpg\" class=\"img-responsive\" alt=\"this is a title\" >\n                      <div class=\"overlay\">\n                          <div class=\"buttons\">\n                              <a rel=\"gallery\" class=\"fancybox\" href=\"src/assets/images/portfolio/item-1.jpg\">Demo</a>\n                              <a target=\"_blank\" href=\"single-portfolio.html\">Details</a>\n                          </div>\n                      </div>\n                  </div>\n                  <figcaption>\n                  <h4>\n                  <a href=\"#\">\n                      Dew Drop\n                  </a>\n                  </h4>\n                  <p>\n                      Redesigne UI Concept\n                  </p>\n                  </figcaption>\n              </figure>\n          </div>\n          <div class=\"col-sm-4 col-xs-12\">\n              <figure class=\"wow fadeInLeft animated\" data-wow-duration=\"500ms\" data-wow-delay=\"300ms\">\n                  <div class=\"img-wrapper\">\n                      <img src=\"src/assets/images/portfolio/item-2.jpg\" class=\"img-responsive\" alt=\"this is a title\" >\n                      <div class=\"overlay\">\n                          <div class=\"buttons\">\n                              <a rel=\"gallery\" class=\"fancybox\" href=\"src/assets/images/portfolio/item-2.jpg\">Demo</a>\n                              <a target=\"_blank\" href=\"single-portfolio.html\">Details</a>\n                          </div>\n                      </div>\n                  </div>\n                  <figcaption>\n                  <h4>\n                  <a href=\"#\">\n                      Bottle Mockup\n                  </a>\n                  </h4>\n                  <p>\n                      Lorem ipsum dolor sit.\n                  </p>\n                  </figcaption>\n              </figure>\n          </div>\n          <div class=\"col-sm-4 col-xs-12\">\n              <figure class=\"wow fadeInLeft animated\" data-wow-duration=\"500ms\" data-wow-delay=\"300ms\">\n                  <div class=\"img-wrapper\">\n                      <img src=\"src/assets/images/portfolio/item-3.jpg\" class=\"img-responsive\" alt=\"\" >\n                      <div class=\"overlay\">\n                          <div class=\"buttons\">\n                              <a rel=\"gallery\" class=\"fancybox\" href=\"src/assets/images/portfolio/item-3.jpg\">Demo</a>\n                              <a target=\"_blank\" href=\"single-portfolio.html\">Details</a>\n                          </div>\n                      </div>\n                  </div>\n                  <figcaption>\n                  <h4>\n                  <a href=\"#\">\n                      Table Design\n                  </a>\n                  </h4>\n                  <p>\n                      Lorem ipsum dolor sit amet.\n                  </p>\n                  </figcaption>\n              </figure>\n          </div>\n          <div class=\"col-sm-4 col-xs-12\">\n              <figure class=\"wow fadeInLeft animated\" data-wow-duration=\"500ms\" data-wow-delay=\"600ms\">\n                  <div class=\"img-wrapper\">\n                      <img src=\"src/assets/images/portfolio/item-4.jpg\" class=\"img-responsive\" alt=\"\" >\n                      <div class=\"overlay\">\n                          <div class=\"buttons\">\n                              <a rel=\"gallery\" class=\"fancybox\" href=\"src/assets/images/portfolio/item-4.jpg\">Demo</a>\n                              <a target=\"_blank\" href=\"single-portfolio.html\">Details</a>\n                          </div>\n                      </div>\n                  </div>\n                  <figcaption>\n                  <h4>\n                  <a href=\"#\">\n                      Make Up elements\n                  </a>\n                  </h4>\n                  <p>\n                      Lorem ipsum dolor.\n                  </p>\n                  </figcaption>\n              </figure>\n          </div>\n          <div class=\"col-sm-4 col-xs-12\">\n              <figure class=\"wow fadeInLeft animated\" data-wow-duration=\"500ms\" data-wow-delay=\"900ms\">\n                  <div class=\"img-wrapper\">\n                      <img src=\"src/assets/images/portfolio/item-5.jpg\" class=\"img-responsive\" alt=\"\" >\n                      <div class=\"overlay\">\n                          <div class=\"buttons\">\n                              <a rel=\"gallery\" class=\"fancybox\" href=\"src/assets/images/portfolio/item-5.jpg\">Demo</a>\n                              <a target=\"_blank\" href=\"single-portfolio.html\">Details</a>\n                          </div>\n                      </div>\n                  </div>\n                  <figcaption>\n                  <h4>\n                  <a href=\"#\">\n                      Shoping Bag Concept\n                  </a>\n                  </h4>\n                  <p>\n                      Lorem ipsum dolor.\n                  </p>\n                  </figcaption>\n              </figure>\n          </div>\n          <div class=\"col-sm-4 col-xs-12\">\n              <figure class=\"wow fadeInLeft animated\" data-wow-duration=\"500ms\" data-wow-delay=\"1200ms\">\n                  <div class=\"img-wrapper\">\n                      <img src=\"src/assets/images/portfolio/item-6.jpg\" class=\"img-responsive\" alt=\"\" >\n                      <div class=\"overlay\">\n                          <div class=\"buttons\">\n                              <a rel=\"gallery\" class=\"fancybox\" href=\"src/assets/images/portfolio/item-6.jpg\">Demo</a>\n                              <a target=\"_blank\" href=\"single-portfolio.html\">Details</a>\n                          </div>\n                      </div>\n                  </div>\n                  <figcaption>\n                  <h4>\n                  <a href=\"#\">\n                      Caramel Bottle\n                  </a>\n                  </h4>\n                  <p>\n                      Lorem ipsum dolor.\n                  </p>\n                  </figcaption>\n              </figure>\n          </div>\n      </div>\n  </div>\n</section> <!-- #works -->"

/***/ }),

/***/ "./src/app/works/works.component.ts":
/*!******************************************!*\
  !*** ./src/app/works/works.component.ts ***!
  \******************************************/
/*! exports provided: WorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksComponent", function() { return WorksComponent; });
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

var WorksComponent = /** @class */ (function () {
    function WorksComponent() {
    }
    WorksComponent.prototype.ngOnInit = function () {
    };
    WorksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-works',
            template: __webpack_require__(/*! ./works.component.html */ "./src/app/works/works.component.html"),
            styles: [__webpack_require__(/*! ./works.component.css */ "./src/app/works/works.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WorksComponent);
    return WorksComponent;
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

module.exports = __webpack_require__(/*! E:\Sources\Pet\demo\timeblog\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map