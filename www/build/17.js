webpackJsonp([17],{

/***/ 1111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePageModule", function() { return MessagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message__ = __webpack_require__(1184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(673);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MessagePageModule = (function () {
    function MessagePageModule() {
    }
    return MessagePageModule;
}());
MessagePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__message__["a" /* MessagePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__message__["a" /* MessagePage */]),
        ],
    })
], MessagePageModule);

//# sourceMappingURL=message.module.js.map

/***/ }),

/***/ 1184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_message_message__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(34);
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
 * Generated class for the MessagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MessagePage = (function () {
    function MessagePage(navCtrl, navParams, db, afAuth, msgService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.afAuth = afAuth;
        this.msgService = msgService;
        this.newMessage = '';
        this.toUID = navParams.get('toUID');
    }
    MessagePage.prototype.ionViewDidLoad = function () {
        this.currentUID = this.afAuth.auth.currentUser.uid;
        this.allMessages = this.db.list('users/' + this.currentUID +
            '/messages/' + this.toUID, {
            query: {
                orderByChild: 'timestamp'
            }
        });
    };
    MessagePage.prototype.sendMessage = function () {
        var _this = this;
        this.msgService.sendMessage(this.newMessage, this.toUID).then(function () {
            _this.content.scrollToBottom();
            _this.newMessage = '';
        });
    };
    return MessagePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_13" /* ViewChild */])('content'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Content */])
], MessagePage.prototype, "content", void 0);
MessagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-message',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/message/message.html"*/'<!--\n  Generated template for the MessagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <ion-row justify-content-center align-items-center>\n        <name ID="{{toUID}}" type="user"></name>\n        <profile-pic class="userThumb" className="userThumb" ID="{{toUID}}" type="user"></profile-pic>\n      </ion-row>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content #content>\n  <div class="chatwindow" padding-top>\n    <ion-list no-lines>\n      <span *ngFor="let message of allMessages | async">\n        <ion-item *ngIf="message.message" text-wrap>\n          <ion-avatar item-left *ngIf="message.sentBy === currentUID">\n            <profile-pic className="avatar" type="user" ID="{{currentUID}}"></profile-pic>\n          </ion-avatar>\n          <div class="bubble me" *ngIf="message.sentBy === currentUID">\n            <h3>{{message.message}}</h3>\n          </div>\n          <ion-avatar item-right *ngIf="message.sentBy != currentUID">\n            <profile-pic className="avatar" type="user" ID="{{toUID}}"></profile-pic>\n          </ion-avatar>\n          <div class="bubble you" *ngIf="message.sentBy != currentUID">\n            <h3>{{message.message}}</h3>\n          </div>\n        </ion-item>\n      </span>\n    </ion-list>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-row align-items-center dir="rtl" class="bottomBar">\n    <ion-col col-9>\n      <ion-input [(ngModel)]="newMessage" placeholder="ادخل رسالتك" type="text"></ion-input>\n    </ion-col>\n    <ion-col col-3>\n      <ion-buttons end>\n        <button ion-button (click)="sendMessage()" round color="gold" [disabled]="newMessage.length == 0" small>\n          ارسل\n        </button>\n      </ion-buttons>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/message/message.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_0__providers_message_message__["a" /* MessageProvider */]])
], MessagePage);

//# sourceMappingURL=message.js.map

/***/ })

});
//# sourceMappingURL=17.js.map