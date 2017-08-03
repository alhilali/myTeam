webpackJsonp([16],{

/***/ 1104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(1170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(672);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 1170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_myTeamDB__ = __webpack_require__(38);
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




var HomePage = (function () {
    function HomePage(afAuth, modal, teamDB, actionSheetCtrl, navCtrl) {
        var _this = this;
        this.afAuth = afAuth;
        this.modal = modal;
        this.teamDB = teamDB;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.blur = false;
        this.type = 'all';
        this.currentUser = {};
        this.teamDB.getLoggedInUser().then(function (data) {
            _this.currentUserId = data;
        });
    }
    HomePage.prototype.ngAfterViewInit = function () {
        this.slides.autoHeight = true;
    };
    HomePage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.teamDB.getUserInfo(this.currentUserId).then(function (data) {
                            _this.currentUser = data;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.segmentChanged = function (event) {
        if (event.value == 'all')
            this.slides.slideTo(0, 500);
        else if (event.value == 'match')
            this.slides.slideTo(1, 500);
        else if (event.value == 'player')
            this.slides.slideTo(2, 500);
    };
    HomePage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        if (currentIndex == 0)
            this.type = 'all';
        if (currentIndex == 1)
            this.type = 'match';
        if (currentIndex == 2)
            this.type = 'player';
    };
    HomePage.prototype.ionViewWillLoad = function () {
        this.loadPosts('all');
        this.loadPosts('match');
        this.loadPosts('player');
    };
    HomePage.prototype.loadPosts = function (type) {
        var _this = this;
        var result;
        if (type == 'all') {
            this.teamDB.getAllPosts().then(function (data) {
                result = data;
                _this.allPosts = result;
                _this.allPosts.reverse();
            });
        }
        else if (type == 'match') {
            this.teamDB.getPosts(type).then(function (data) {
                result = data;
                _this.matchPosts = result;
                _this.matchPosts.reverse();
            });
        }
        else if (type == 'player') {
            this.teamDB.getPosts(type).then(function (data) {
                result = data;
                _this.playerPosts = result;
                _this.playerPosts.reverse();
            });
        }
    };
    HomePage.prototype.doRefresh = function (refresher) {
        this.loadPosts(this.type);
        setTimeout(function () {
            //console.log('Async operation has ended');
            refresher.complete();
        }, 1000);
    };
    HomePage.prototype.openModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push('PlayerPage', { username: this.currentUser.originalUsername });
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.compose = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var myModal;
            return __generator(this, function (_a) {
                myModal = this.modal.create('ComposePage', { player: this.currentUser });
                myModal.present();
                this.blur = true;
                myModal.onWillDismiss(function (data) {
                    _this.blur = false;
                    if (data.postDone)
                        _this.loadPosts(_this.type);
                });
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.loginPage = function () {
        this.navCtrl.push('WelcomePage');
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */])
], HomePage.prototype, "slides", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons *ngIf=\'teamDB.loggedIn\' end>\n      <button (click)="openModal()" ion-button icon-only>\n        <profile-pic className="avatar" type="user" ID="{{teamDB.userInfo.uid}}"></profile-pic>\n      </button>\n    </ion-buttons>\n    <ion-buttons *ngIf=\'!teamDB.loggedIn\' end>\n      <button (click)="loginPage()" ion-button icon-only>\n        <ion-icon name="ios-log-in"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons *ngIf=\'teamDB.loggedIn\' start>\n      <button padding-right (click)="compose()" ion-button icon-only>\n        <ion-icon name="ios-albums-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>الرئيسية</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content [ngClass]="blur ? \'blur\' : \'unblur\'">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="اسحب للتحديث" refreshingSpinner="dots" refreshingText="جاري التحديث...">\n\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-segment padding-horizontal [(ngModel)]="type" color="orange" mode="md" (ionChange)="segmentChanged($event)">\n    <ion-segment-button value="all">عام</ion-segment-button>\n    <ion-segment-button value="match">مباريات</ion-segment-button>\n    <ion-segment-button value="player">لاعبين</ion-segment-button>\n  </ion-segment>\n  <div>\n    <ion-slides dir="rtl" (ionSlideWillChange)="slideChanged()">\n\n      <ion-slide>\n        <post *ngFor="let post of allPosts" [post]="post"></post>\n      </ion-slide>\n\n      <ion-slide>\n        <post *ngFor="let post of matchPosts" [post]="post">\n        </post>\n      </ion-slide>\n\n      <ion-slide>\n        <post *ngFor="let post of playerPosts" [post]="post">\n        </post>\n      </ion-slide>\n\n    </ion-slides>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__helpers_myTeamDB__["a" /* MyTeamDB */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=16.js.map