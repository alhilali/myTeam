webpackJsonp([19],{

/***/ 1100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseUsernamePageModule", function() { return ChooseUsernamePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__choose_username__ = __webpack_require__(1170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChooseUsernamePageModule = (function () {
    function ChooseUsernamePageModule() {
    }
    return ChooseUsernamePageModule;
}());
ChooseUsernamePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__choose_username__["a" /* ChooseUsernamePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__choose_username__["a" /* ChooseUsernamePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__choose_username__["a" /* ChooseUsernamePage */]
        ]
    })
], ChooseUsernamePageModule);

//# sourceMappingURL=choose-username.module.js.map

/***/ }),

/***/ 1170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseUsernamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_username__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(51);
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
 * Generated class for the ChooseUsernamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChooseUsernamePage = (function () {
    function ChooseUsernamePage(navCtrl, navParams, db, _form, unameValid, mdlController, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this._form = _form;
        this.unameValid = unameValid;
        this.mdlController = mdlController;
        this.loadingCtrl = loadingCtrl;
        var usernameValidator = function (control) {
            return unameValid.checkUsername(control);
        };
        this.registerForm = this._form.group({
            "username": ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z0-9_.-]*$')]), usernameValidator]
        });
        this.navCtrl.swipeBackEnabled = false;
        this.username = this.navParams.get('twitterUsername') + '';
    }
    ChooseUsernamePage.prototype.register = function () {
        var loginLoading = this.loadingCtrl.create({
            dismissOnPageChange: true,
            spinner: 'crescent'
        });
        loginLoading.present();
        var userInfo = this.db.object('/users/' + this.navParams.get('user').uid);
        userInfo.update({
            originalUsername: this.username,
            username: this.username.toLowerCase(),
        });
        var usernameInfo = this.db.object('/usernames/' + this.username.toLowerCase());
        usernameInfo.set({
            twitter: 'true'
        });
        this.navCtrl.setRoot('TabsPage');
    };
    ChooseUsernamePage.prototype.openTerms = function () {
        this.mdlController.create('TermsPage').present();
    };
    return ChooseUsernamePage;
}());
ChooseUsernamePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-choose-username',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/choose-username/choose-username.html"*/'<ion-content padding-top>\n  <div class="login" padding>\n    <div class="welcomeTop">\n      <img class="AppLogo" src="https://image.ibb.co/ih434a/logo_main_dark.png" alt="">\n    </div>\n    <form name="registerForm" novalidate padding>\n      <div class="register" [formGroup]=\'registerForm\' padding>\n\n        <h5 text-center>تبقت خطوة اخيرة، اختر المعرف الشخصي</h5>\n        <ion-item dir="ltr">\n          <ion-label>\n            <h2>@</h2>\n          </ion-label>\n          <ion-input type="text" [(ngModel)]="username" [class.invalid]="!registerForm.controls.username.valid" formControlName=\'username\'\n            placeholder="Username"></ion-input>\n        </ion-item>\n\n        <button ion-button block [disabled]="!registerForm.valid" (click)="register()" color="gold">إتمام التسجيل</button>\n        <p text-right style="margin: 0px;">\n          التسجيل يعني موافقتك على\n          <button style="margin-bottom: 15px;" ion-button clear (click)="openTerms()" no-padding small>الشروط والأحكام.</button>\n        </p>\n        <div class="errorMessages">\n          <p *ngIf="username != \'\' && !registerForm.controls.username.valid && !registerForm.controls.username.pending" style="color: #ea6153;">\n            <ion-icon name="bug"></ion-icon>\n            اسم المستخدم غير متاح، الرجاء اختيار اسم آخر.\n          </p>\n        </div>\n      </div>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/choose-username/choose-username.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__validators_username__["a" /* UsernameValidator */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], ChooseUsernamePage);

//# sourceMappingURL=choose-username.js.map

/***/ })

});
//# sourceMappingURL=19.js.map