webpackJsonp([16],{

/***/ 1116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMessagePageModule", function() { return NewMessagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_message__ = __webpack_require__(1191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewMessagePageModule = (function () {
    function NewMessagePageModule() {
    }
    return NewMessagePageModule;
}());
NewMessagePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__new_message__["a" /* NewMessagePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_message__["a" /* NewMessagePage */]),
        ],
    })
], NewMessagePageModule);

//# sourceMappingURL=new-message.module.js.map

/***/ }),

/***/ 1191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewMessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
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
 * Generated class for the NewMessagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NewMessagePage = (function () {
    function NewMessagePage(navCtrl, navParams, db, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.afAuth = afAuth;
        this.query = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
    }
    NewMessagePage.prototype.ionViewDidLoad = function () {
        this.currentUID = this.afAuth.auth.currentUser.uid;
        this.players = this.db.list('users/', {
            query: {
                orderByChild: 'username',
                startAt: this.query,
                limitToFirst: 10
            }
        });
    };
    NewMessagePage.prototype.searchUsers = function () {
        this.query.next(this.input);
    };
    NewMessagePage.prototype.openMessage = function (player) {
        this.navCtrl.push('MessagePage', { toUID: player.$key });
    };
    return NewMessagePage;
}());
NewMessagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-new-message',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/new-message/new-message.html"*/'<!--\n  Generated template for the NewMessagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>رسالة جديدة</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-item class="fixedBorder">\n    <ion-label>إلى:</ion-label>\n    <ion-input type="text" value="" placeholder="ابحث..." (input)="searchUsers()" [(ngModel)]="input"></ion-input>\n  </ion-item>\n\n  <h5 *ngIf="input && input.length > 0 && (players | async)?.length == 0" text-center>\n    لا يوجد\n  </h5>\n\n  <ion-list *ngIf="input && input.length > 0" no-margin>\n    <span *ngFor="let player of players | async">\n      <button *ngIf="player.$key != currentUID" ion-item clear (click)="openMessage(player)">\n        <ion-row>\n          <ion-avatar padding-right>\n            <img src="{{player.profilePic}}" alt="">\n          </ion-avatar>\n          <h2 style="margin: 0 0 8px;" id="info" margin-bottom>{{ player.name }}</h2>\n          <p>&nbsp;{{player.username}}</p>\n        </ion-row>\n      </button>\n    </span>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/new-message/new-message.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["a" /* AngularFireAuth */]])
], NewMessagePage);

//# sourceMappingURL=new-message.js.map

/***/ })

});
//# sourceMappingURL=16.js.map