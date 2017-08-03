webpackJsonp([2],{

/***/ 1105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome__ = __webpack_require__(1171);
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

/***/ 1171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_twitter_connect__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
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
    function WelcomePage(navCtrl, afAuth, twitter, db, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.twitter = twitter;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.twitterSubmit = false;
        afAuth.auth.onAuthStateChanged(function (user) {
            if (user && !_this.twitterSubmit)
                _this.navCtrl.setRoot('TabsPage');
        });
        this.navCtrl.swipeBackEnabled = false;
    }
    WelcomePage.prototype.loginPage = function () {
        this.navCtrl.push('LoginPage');
    };
    WelcomePage.prototype.registerPage = function () {
        this.navCtrl.push('RegisterPage');
    };
    WelcomePage.prototype.twitterLogin = function () {
        var _this = this;
        this.twitterSubmit = true;
        var loginLoading = this.loadingCtrl.create({
            dismissOnPageChange: true,
            spinner: 'crescent'
        });
        loginLoading.present();
        this.twitter.login().then(function (response) {
            var twitterCredential = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"].TwitterAuthProvider
                .credential(response.token, response.secret);
            console.log(response);
            _this.afAuth.auth.signInWithCredential(twitterCredential)
                .then(function (userProfile) {
                // check if user info exists in DB
                var userInfo = _this.db.object('/users/' + userProfile.uid);
                userInfo.take(1).subscribe(function (data) {
                    if (!data.username) {
                        var imageURL = userProfile.photoURL;
                        if (imageURL)
                            imageURL = imageURL.substring(0, imageURL.length - 11) + '.jpg';
                        userInfo.set({
                            name: userProfile.displayName,
                            position: 'GK',
                            profilePic: imageURL ? imageURL : 'http://www.gscadvisory.com/wp-content/uploads/2016/04/blank.jpg'
                        }).then(function () {
                            _this.navCtrl.push('ChooseUsernamePage', { user: userProfile, twitterUsername: response.userName });
                        });
                    }
                    else {
                        _this.navCtrl.setRoot('TabsPage');
                    }
                });
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log("Error connecting to twitter: ", error);
        });
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/welcome/welcome.html"*/'<ion-content class="welcomePage" no-bounce scroll="false">\n\n  <div class=\'wave -one\'></div>\n  <div class=\'wave -two\'></div>\n  <div class=\'wave -three\'></div>\n  <div class="welcomeTop">\n    <img class="AppLogo" src="https://image.ibb.co/ih434a/logo_main_dark.png" alt="">\n  </div>\n\n  <ion-slides pager class="welcomeSlides" loop="true" dir="rtl">\n    <ion-slide>\n      <img style="width: 20%" src="https://www.shareicon.net/download/2016/10/29/848351_cup_512x512.png" alt="">\n      <h3 text-center>\n        هل انت جاهز لقبول التحدي؟\n      </h3>\n    </ion-slide>\n    <ion-slide>\n      <img style="width: 20%" src="https://www.shareicon.net/download/2017/06/01/886647_track_512x512.png" alt="">\n      <h3 text-center>\n        ابحث عن مباريات\n      </h3>\n    </ion-slide>\n    <ion-slide>\n      <img style="width: 20%" src="http://bootwise.com/wp-content/uploads/2014/10/bootwise-icon-04.png" alt="">\n      <h3 text-center>\n        انضم لفرق اخرى\n      </h3>\n    </ion-slide>\n  </ion-slides>\n  <div class="welcomeBtns">\n    <button color="orange" ion-button block (click)="registerPage()">حساب جديد</button>\n    <ion-row>\n      <ion-col col-7 no-padding>\n        <button color="lightBlue" ion-button block (click)="loginPage()" outline>سجل دخول</button>\n      </ion-col>\n      <ion-col col-4 push-1 no-padding>\n        <button color="twitter" ion-button block (click)="twitterLogin()">\n              <ion-icon class="mdIcon" color="white" name="logo-twitter"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/welcome/welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_twitter_connect__["a" /* TwitterConnect */],
        __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* LoadingController */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ })

});
//# sourceMappingURL=2.js.map