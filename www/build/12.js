webpackJsonp([12],{

/***/ 1121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(1194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = (function () {
    function RegisterPageModule() {
    }
    return RegisterPageModule;
}());
RegisterPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]
        ]
    })
], RegisterPageModule);

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 1194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators_username__ = __webpack_require__(675);
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
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(afAuth, toast, navCtrl, navParams, db, _form, unameValid, mdlController, loadingCtrl) {
        this.afAuth = afAuth;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this._form = _form;
        this.unameValid = unameValid;
        this.mdlController = mdlController;
        this.loadingCtrl = loadingCtrl;
        this.user = {};
        this.submitAttempt = false;
        this.usedEmail = false;
        var usernameValidator = function (control) {
            return unameValid.checkUsername(control);
        };
        this.registerForm = this._form.group({
            "name": ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('[a-zA-Z-ء-ي_ ]*'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            "username": ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z0-9_.-]*$')]), usernameValidator],
            "email": ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].email],
            "password": ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])]
        });
        this.navCtrl.swipeBackEnabled = true;
    }
    RegisterPage.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var registerLoading, result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.submitAttempt = true;
                        registerLoading = this.loadingCtrl.create({
                            dismissOnPageChange: true,
                            spinner: 'crescent'
                        });
                        if (!this.registerForm.valid) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then(function (u) {
                                var userInfo = _this.db.object('/users/' + _this.afAuth.auth.currentUser.uid);
                                userInfo.set({
                                    originalUsername: user.username,
                                    username: user.username.toLowerCase(),
                                    name: user.name,
                                    position: 'GK',
                                    profilePic: 'http://www.gscadvisory.com/wp-content/uploads/2016/04/blank.jpg',
                                    bg: 'http://www.publicdomainpictures.net/pictures/50000/nahled/sunset-profile-background.jpg'
                                });
                                var usernameInfo = _this.db.object('/usernames/' + user.username.toLowerCase());
                                usernameInfo.set({
                                    email: user.email
                                });
                            })];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            registerLoading.dismiss();
                            this.navCtrl.setRoot('TabsPage');
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        registerLoading.dismiss();
                        if (e_1.code == 'auth/email-already-in-use')
                            this.usedEmail = true;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    RegisterPage.prototype.openTerms = function () {
        this.mdlController.create('TermsPage').present();
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])({
        segment: 'register',
        defaultHistory: ['WelcomePage']
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content no-bounce>\n  <ion-row justify-content-start>\n    <ion-col col-3 text-start padding>\n      <ion-icon on-tap="goBack()" class="largeIcon" color="grey" name="ios-arrow-back"></ion-icon>\n    </ion-col>\n  </ion-row>\n  <div class="welcomeTop">\n    <img class="AppLogo" src="https://image.ibb.co/ih434a/logo_main_dark.png" alt="">\n  </div>\n  <h2 text-center>حساب جديد</h2>\n  <form name="registerForm" novalidate padding>\n    <div class="register" [formGroup]=\'registerForm\' padding>\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="user.name" [class.invalid]="!registerForm.controls.name.valid && (registerForm.controls.name.dirty || submitAttempt)"\n          formControlName=\'name\' placeholder="الاسم كامل"></ion-input>\n      </ion-item>\n      <ion-item dir="ltr">\n        <ion-label>\n          <h2>@</h2>\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="user.username" [class.invalid]="!registerForm.controls.username.valid && (registerForm.controls.username.dirty || submitAttempt)"\n          formControlName=\'username\' placeholder="Username"></ion-input>\n      </ion-item>\n      <ion-item dir="ltr">\n        <ion-label>\n          <ion-icon name="ios-mail-outline"></ion-icon>\n        </ion-label>\n        <ion-input class="email" type="text" [(ngModel)]="user.email" [class.invalid]="!registerForm.controls.email.valid && (registerForm.controls.email.dirty || submitAttempt)"\n          formControlName=\'email\' placeholder="Email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="password" [(ngModel)]="user.password" [class.invalid]="!registerForm.controls.password.valid && (registerForm.controls.password.dirty || submitAttempt)"\n          formControlName=\'password\' placeholder="الرقم السري"></ion-input>\n      </ion-item>\n\n      <button ion-button block (click)="register(user)" color="gold">التسجيل</button>\n      <p text-right style="margin: 0px;">\n        التسجيل يعني موافقتك على\n        <button style="margin-bottom: 15px;" ion-button clear (click)="openTerms()" no-padding small>الشروط والأحكام.</button>\n      </p>\n      <div class="errorMessages">\n        <p *ngIf="user.username != \'\' && !registerForm.controls.username.valid && !registerForm.controls.username.pending && (submitAttempt || registerForm.controls.username.dirty)"\n          style="color: #ea6153;">\n          <ion-icon name="bug"></ion-icon>\n          اسم المستخدم غير متاح، الرجاء اختيار اسم آخر.\n        </p>\n        <p *ngIf="usedEmail" style="color: #ea6153;">\n          <ion-icon name="bug"></ion-icon>\n          الايميل مستخدم من قبل شخص آخر.\n        </p>\n        <p *ngIf="!registerForm.controls.password.valid && (submitAttempt)" style="color: #ea6153;">\n          <ion-icon name="bug"></ion-icon>\n          يجب ان يكون الرقم السري اكثر من ٦ احرف/ارقام.</p>\n      </div>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_5__validators_username__["a" /* UsernameValidator */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=12.js.map