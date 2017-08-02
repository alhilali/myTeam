webpackJsonp([2],{

/***/ 1103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome__ = __webpack_require__(1168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WelcomePageModule = (function () {
    function WelcomePageModule() {
    }
    return WelcomePageModule;
}());
WelcomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */]
        ]
    })
], WelcomePageModule);

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 1168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the WelcomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var WelcomePage = (function () {
    function WelcomePage(navCtrl, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        afAuth.auth.onAuthStateChanged(function (user) {
            if (user)
                _this.navCtrl.setRoot('TabsPage');
        });
    }
    WelcomePage.prototype.loginPage = function () {
        this.navCtrl.push('LoginPage');
    };
    WelcomePage.prototype.registerPage = function () {
        this.navCtrl.push('RegisterPage');
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/welcome/welcome.html"*/'<ion-content class="welcomePage" no-bounce scroll="false">\n\n  <div class=\'wave -one\'></div>\n  <div class=\'wave -two\'></div>\n  <div class=\'wave -three\'></div>\n  <div class="welcomeTop">\n    <img class="AppLogo" src="https://image.ibb.co/ih434a/logo_main_dark.png" alt="">\n  </div>\n\n  <ion-slides pager class="welcomeSlides" loop="true" dir="rtl">\n    <ion-slide>\n      <img style="width: 20%" src="https://www.shareicon.net/download/2016/10/29/848351_cup_512x512.png" alt="">\n      <h3 text-center>\n        هل انت جاهز لقبول التحدي؟\n      </h3>\n    </ion-slide>\n    <ion-slide>\n      <img style="width: 20%" src="https://www.shareicon.net/download/2017/06/01/886647_track_512x512.png" alt="">\n      <h3 text-center>\n        ابحث عن مباريات\n      </h3>\n    </ion-slide>\n    <ion-slide>\n      <img style="width: 20%" src="http://bootwise.com/wp-content/uploads/2014/10/bootwise-icon-04.png" alt="">\n      <h3 text-center>\n        انضم لفرق اخرى\n      </h3>\n    </ion-slide>\n  </ion-slides>\n  <div class="welcomeBtns">\n    <button color="orange" ion-button block (click)="registerPage()">حساب جديد</button>\n    <button color="lightBlue" ion-button block (click)="loginPage()" outline>سجل دخول</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/welcome/welcome.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object])
], WelcomePage);

var _a, _b;
//# sourceMappingURL=welcome.js.map

/***/ })

});
//# sourceMappingURL=2.js.map