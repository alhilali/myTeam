webpackJsonp([16],{

/***/ 1106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(1176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 1176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_myTeamDB__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(afAuth, loadingCtrl, toast, alertCtrl, navCtrl, navParams, myTeamDB, _form) {
        this.afAuth = afAuth;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myTeamDB = myTeamDB;
        this._form = _form;
        this.user = {};
        this.loginForm = this._form.group({
            "email": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email],
            "password": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
        this.navCtrl.swipeBackEnabled = true;
    }
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loginLoading, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loginLoading = this.loadingCtrl.create({
                            dismissOnPageChange: true,
                            cssClass: 'loginLoading',
                            spinner: 'crescent'
                        });
                        loginLoading.present();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(function () {
                                _this.navCtrl.setRoot('TabsPage');
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        this.myTeamDB.findEmail(user.email).then(function (data) {
                            _this.afAuth.auth.signInWithEmailAndPassword(data, user.password).then(function () {
                                _this.navCtrl.setRoot('TabsPage');
                            })
                                .catch(function (err) {
                                loginLoading.dismiss();
                                _this.showErrorToast();
                            });
                        }).catch(function () {
                            loginLoading.dismiss();
                            _this.showErrorToast();
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    LoginPage.prototype.showErrorToast = function () {
        this.toast.create({
            message: 'الرجاء التأكد من الايميل او الرقم السري',
            duration: 1500,
            showCloseButton: true,
            dismissOnPageChange: true,
            closeButtonText: 'حسناً'
        }).present();
    };
    LoginPage.prototype.resetPassword = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'نسيت الرقم السري؟',
            message: 'سيتم ارسال رقم سري جديد الى بريدك الالكتروني',
            inputs: [
                {
                    name: 'email',
                    placeholder: 'البريد الإلكتروني'
                }
            ],
            buttons: [
                {
                    text: 'تم',
                    handler: function (data) {
                        var loading = _this.loadingCtrl.create({
                            dismissOnPageChange: true,
                            content: 'إعادة تعيين الرقم السري..'
                        });
                        loading.present();
                        _this.afAuth.auth.sendPasswordResetEmail(data.email).then(function () {
                            loading.dismiss().then(function () {
                                _this.alertUserSuccess('راجع بريدك الالكتروني', 'تم إعادة تعيين الرقم السري');
                            });
                        }, function (error) {
                            _this.alertUserError(error);
                            loading.dismiss();
                        });
                    }
                },
                {
                    text: 'إلغاء',
                    role: 'cancel',
                    handler: function (data) {
                        //console.log('Cancel clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    LoginPage.prototype.alertUserError = function (error) {
        var message = error;
        switch (error.code) {
            case 'auth/invalid-email':
                message = 'الرجاء التأكد من صيغة الايميل.';
                break;
            case 'auth/user-not-found':
                message = 'لا يوجد حساب مسجل بهذا البريد الالكتروني.';
                break;
        }
        this.alertCtrl.create({
            title: 'خطأ في اعادة تعيين الرقم السري',
            subTitle: message,
            buttons: ['حسناً'],
        }).present();
    };
    LoginPage.prototype.alertUserSuccess = function (title, message) {
        this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['حسناً'],
        }).present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])({
        segment: 'login',
        defaultHistory: ['WelcomePage']
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <ion-row justify-content-start>\n    <ion-col col-3 text-start padding>\n      <ion-icon on-tap="goBack()" class="largeIcon" color="grey" name="ios-arrow-back"></ion-icon>\n    </ion-col>\n  </ion-row>\n  <div class="login" padding>\n    <div class="welcomeTop">\n      <img class="AppLogo" src="https://image.ibb.co/ih434a/logo_main_dark.png" alt="">\n    </div>\n    <h2 text-center>تسجيل الدخول</h2>\n    <form [formGroup]="loginForm" novalidate padding>\n      <ion-item dir="ltr">\n        <ion-label>\n          <ion-icon class="largeIcon" name="ios-person-outline"></ion-icon>\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="user.email" formControlName=\'email\' placeholder="Username/Email"></ion-input>\n      </ion-item>\n\n      <ion-item dir="ltr">\n        <ion-label>\n          <ion-icon class="largeIcon" name="ios-key-outline"></ion-icon>\n        </ion-label>\n        <ion-input type="password" [(ngModel)]="user.password" formControlName=\'password\' placeholder="Password"></ion-input>\n      </ion-item>\n      <button color="orange" ion-button block (click)="login(user)">الدخول</button>\n      <p text-right style="margin: 0px;">\n        <button ion-button clear (click)="resetPassword()" small>نسيت الرقم السري؟</button>\n      </p>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__helpers_myTeamDB__["a" /* MyTeamDB */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__helpers_myTeamDB__["a" /* MyTeamDB */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _h || Object])
], LoginPage);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=16.js.map