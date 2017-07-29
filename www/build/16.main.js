webpackJsonp([16],{

/***/ 1102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(1167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(675);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])
        ]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 1167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_myTeamDB__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(afAuth, modal, teamDB, actionSheetCtrl, navCtrl) {
        this.afAuth = afAuth;
        this.modal = modal;
        this.teamDB = teamDB;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.currentUser = {};
        this.blur = false;
        this.type = 'all';
        this.currentUserId = this.afAuth.auth.currentUser.uid;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.loadUser();
        this.loadPosts('all');
    };
    HomePage.prototype.loadUser = function () {
        var _this = this;
        this.teamDB.getUserInfo(this.afAuth.auth.currentUser.uid)
            .then(function (user) {
            _this.currentUser = user;
        });
    };
    HomePage.prototype.loadPosts = function (type) {
        var _this = this;
        var result;
        if (type == 'all') {
            this.teamDB.getAllPosts().then(function (data) {
                result = data;
                _this.posts = result;
                _this.posts.reverse();
            });
        }
        else {
            this.teamDB.getPosts(type).then(function (data) {
                result = data;
                _this.posts = result;
                _this.posts.reverse();
            });
        }
    };
    HomePage.prototype.segmentChanged = function () {
        this.loadPosts(this.type);
    };
    HomePage.prototype.doRefresh = function (refresher) {
        this.loadUser();
        this.loadPosts(this.type);
        setTimeout(function () {
            //console.log('Async operation has ended');
            refresher.complete();
        }, 1000);
    };
    HomePage.prototype.openModal = function () {
        this.navCtrl.push('PlayerPage', { player: this.currentUser });
    };
    HomePage.prototype.compose = function () {
        var _this = this;
        var myModal = this.modal.create('ComposePage', { player: this.currentUser });
        myModal.present();
        this.blur = true;
        myModal.onWillDismiss(function (data) {
            _this.blur = false;
            if (data.postDone)
                _this.loadPosts(_this.type);
        });
    };
    return HomePage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Content */])
], HomePage.prototype, "content", void 0);
HomePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons end>\n      <button (click)="openModal()" ion-button icon-only>\n        <profile-pic className="avatar" type="user" ID="{{currentUserId}}"></profile-pic>\n      </button>\n    </ion-buttons>\n    <ion-buttons start>\n      <button padding-right (click)="compose()" ion-button icon-only>\n        <ion-icon name="ios-albums-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>الرئيسية</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content [ngClass]="blur ? \'blur\' : \'unblur\'">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="اسحب للتحديث" refreshingSpinner="dots" refreshingText="جاري التحديث...">\n\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-segment padding-horizontal [(ngModel)]="type" color="orange" mode="md" (ionChange)="segmentChanged()">\n    <ion-segment-button value="all">عام</ion-segment-button>\n    <ion-segment-button value="match">مباريات</ion-segment-button>\n    <ion-segment-button value="players">لاعبين</ion-segment-button>\n  </ion-segment>\n  <ion-list>\n    <post *ngFor="let post of posts" [post]="post"></post>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__helpers_myTeamDB__["a" /* MyTeamDB */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=16.main.js.map