webpackJsonp([16],{

/***/ 1112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function() { return MessagesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages__ = __webpack_require__(1185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(673);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MessagesPageModule = (function () {
    function MessagesPageModule() {
    }
    return MessagesPageModule;
}());
MessagesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__messages__["a" /* MessagesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__messages__["a" /* MessagesPage */]),
        ],
    })
], MessagesPageModule);

//# sourceMappingURL=messages.module.js.map

/***/ }),

/***/ 1185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(76);
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
 * Generated class for the MessagesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MessagesPage = (function () {
    function MessagesPage(navCtrl, navParams, afAuth, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.db = db;
    }
    MessagesPage.prototype.ionViewDidLoad = function () {
        this.messagesList = this.db.list('users/' + this.afAuth.auth.currentUser.uid
            + '/messages/');
    };
    MessagesPage.prototype.doRefresh = function (refresher) {
        setTimeout(function () {
            //console.log('Async operation has ended');
            refresher.complete();
        }, 500);
    };
    MessagesPage.prototype.newMessage = function () {
        this.navCtrl.push('NewMessagePage');
    };
    MessagesPage.prototype.openMessage = function (messages) {
        this.navCtrl.push('MessagePage', { toUID: messages.$key });
    };
    return MessagesPage;
}());
MessagesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-messages',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/messages/messages.html"*/'<!--\n  Generated template for the MessagesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons end>\n      <button (click)=\'newMessage()\' ion-button icon-only color="royal">\n        <ion-icon name="ios-send"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>الرسائل الخاصة</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="اسحب للتحديث" refreshingSpinner="dots" refreshingText="جاري التحديث...">\n\n    </ion-refresher-content>\n  </ion-refresher>\n  <h6 *ngIf="(messagesList | async)?.length == 0" text-center>\n    لا توجد رسائل\n  </h6>\n  <ion-list no-margin>\n    <ion-item-sliding *ngFor="let messages of messagesList | async" on-tap="openMessage(messages)">\n      <ion-item no-lines>\n        <ion-avatar class="avatar" item-start>\n          <profile-pic className="avatar" ID="{{messages.$key}}" type="user"></profile-pic>\n        </ion-avatar>\n        <h3>\n          <name ID="{{messages.$key}}" type="user"></name>\n        </h3>\n        <ion-row now-wrap>\n          <h5 text-right>\n            {{messages.recentMessage}}\n          </h5> &nbsp;\n          <date id="date" date="{{messages.recentDate}}"></date>\n        </ion-row>\n      </ion-item>\n      <ion-item-options side="left" (ionSwipe)="deleteMessage(messages.$key)">\n        <button (click)="deleteMessage(messages.$key)" ion-button expandable icon-only color="danger">\n          <ion-icon name="md-trash"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/messages/messages.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], MessagesPage);

//# sourceMappingURL=messages.js.map

/***/ })

});
//# sourceMappingURL=16.js.map