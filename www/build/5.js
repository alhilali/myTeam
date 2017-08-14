webpackJsonp([5],{

/***/ 1111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePageModule", function() { return MessagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_directives_module__ = __webpack_require__(1170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message__ = __webpack_require__(1186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(673);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__message__["a" /* MessagePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_0__directives_directives_module__["a" /* DirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__message__["a" /* MessagePage */]),
        ],
    })
], MessagePageModule);

//# sourceMappingURL=message.module.js.map

/***/ }),

/***/ 1170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flexible_keyboard_flexible_keyboard__ = __webpack_require__(1171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectivesModule = (function () {
    function DirectivesModule() {
    }
    return DirectivesModule;
}());
DirectivesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__flexible_keyboard_flexible_keyboard__["a" /* FlexibleKeyboardDirective */]],
        imports: [],
        exports: [__WEBPACK_IMPORTED_MODULE_1__flexible_keyboard_flexible_keyboard__["a" /* FlexibleKeyboardDirective */]]
    })
], DirectivesModule);

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 1171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlexibleKeyboardDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_keyboard__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
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
 * Generated class for the FlexibleKeyboardDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
var FlexibleKeyboardDirective = (function () {
    function FlexibleKeyboardDirective(element, renderer, platform, keyboard) {
        this.element = element;
        this.renderer = renderer;
        this.platform = platform;
        this.keyboard = keyboard;
        this.millis = 200;
        this.scrollTimeout = this.millis + 50;
    }
    FlexibleKeyboardDirective.prototype.ngAfterViewInit = function () {
        if (this.platform.is('ios')) {
            this.addKeyboardListeners();
        }
        this.scrollContentElelment = this.content.getScrollElement();
        this.footerElement = document.getElementsByTagName('ion-footer')[0];
        this.inputElement = document.getElementsByClassName('textarea')[0];
        this.footerElement.style.cssText = this.footerElement.style.cssText + "transition: all " + this.millis + "ms; -webkit-transition: all " +
            this.millis + "ms; -webkit-transition-timing-function: ease-out; transition-timing-function: ease-out;";
        this.scrollContentElelment.style.cssText = this.scrollContentElelment.style.cssText + "transition: all " + this.millis + "ms; -webkit-transition: all " +
            this.millis + "ms; -webkit-transition-timing-function: ease-out; transition-timing-function: ease-out;";
        this.textareaHeight = Number(this.inputElement.style.height.replace('px', ''));
        this.initialTextAreaHeight = this.textareaHeight;
        this.updateScroll('load', 500);
    };
    FlexibleKeyboardDirective.prototype.addKeyboardListeners = function () {
        var _this = this;
        this.keyboardHideSub = this.keyboard.onKeyboardHide().subscribe(function () {
            var newHeight = _this.textareaHeight - _this.initialTextAreaHeight + 28;
            var marginBottom = newHeight + 'px';
            _this.renderer.setElementStyle(_this.scrollContentElelment, 'marginBottom', marginBottom);
            _this.renderer.setElementStyle(_this.footerElement, 'marginBottom', '0px');
        });
        this.keybaordShowSub = this.keyboard.onKeyboardShow().subscribe(function (e) {
            var newHeight = (e['keyboardHeight']) + _this.textareaHeight - _this.initialTextAreaHeight;
            var marginBottom = newHeight + 28 + 'px';
            _this.renderer.setElementStyle(_this.scrollContentElelment, 'marginBottom', marginBottom);
            _this.renderer.setElementStyle(_this.footerElement, 'marginBottom', e['keyboardHeight'] + 'px');
            _this.updateScroll('keybaord show', _this.scrollTimeout);
        });
    };
    FlexibleKeyboardDirective.prototype.contentMouseDown = function (event) {
        //console.log('blurring input element :- > event type:', event.type);
        this.inputElement.blur();
    };
    FlexibleKeyboardDirective.prototype.updateScroll = function (from, timeout) {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom();
        }, timeout);
    };
    return FlexibleKeyboardDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["r" /* ContentChild */])('content'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], FlexibleKeyboardDirective.prototype, "content", void 0);
FlexibleKeyboardDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["t" /* Directive */])({
        selector: '[flexible-keyboard]',
        host: {
            '(tab)': 'contentMouseDown($event)'
        }
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_2__angular_core__["_0" /* Renderer */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_keyboard__["a" /* Keyboard */]])
], FlexibleKeyboardDirective);

//# sourceMappingURL=flexible-keyboard.js.map

/***/ }),

/***/ 1186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_keyboard__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_message_message__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(31);
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
    function MessagePage(navCtrl, navParams, keyboard, db, afAuth, msgService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.keyboard = keyboard;
        this.db = db;
        this.afAuth = afAuth;
        this.msgService = msgService;
        this.newMessage = '';
        this.toUID = navParams.get('toUID');
        if (this.keyboard) {
            this.keyboard.hideKeyboardAccessoryBar(true);
            this.keyboard.disableScroll(true);
        }
    }
    MessagePage.prototype.ionViewDidLoad = function () {
        this.currentUID = this.afAuth.auth.currentUser.uid;
        this.allMessages = this.db.list('users/' + this.currentUID +
            '/messages/' + this.toUID, {
            query: {
                orderByChild: 'timestamp'
            }
        });
        this.messageStatus = this.db.object('users/' + this.toUID +
            '/messages/' + this.currentUID + '/read');
        this.markAllMessagesRead();
    };
    MessagePage.prototype.markAllMessagesRead = function () {
        var _this = this;
        this.allMessagesSub = this.db.list('users/' + this.currentUID +
            '/messages/' + this.toUID, {
            query: {
                orderByChild: 'timestamp'
            }
        }).subscribe(function (data) {
            data.forEach(function (msg) {
                if (msg.sentBy && msg.sentBy != _this.currentUID) {
                    _this.msgService.markMsgRead(msg.$key, _this.toUID);
                }
            });
        });
    };
    MessagePage.prototype.ionViewWillLeave = function () {
        this.msgService.markRead(this.toUID);
        this.allMessagesSub.unsubscribe();
    };
    MessagePage.prototype.sendMessage = function () {
        var _this = this;
        if (this.newMessage !== '') {
            this.msgService.sendMessage(this.newMessage, this.toUID).then(function () {
                _this.content.scrollToBottom();
                _this.newMessage = '';
            });
        }
    };
    MessagePage.prototype.openUser = function () {
        this.navCtrl.push('PlayerPage', { id: this.toUID });
    };
    MessagePage.prototype.footerTouchStart = function (event) {
        if (event.target.localName !== "textarea") {
            event.preventDefault();
        }
    };
    MessagePage.prototype.touchSendButton = function (event) {
        event.preventDefault();
        this.sendMessage();
    };
    return MessagePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_13" /* ViewChild */])('content'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* Content */])
], MessagePage.prototype, "content", void 0);
MessagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
        selector: 'page-message',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/message/message.html"*/'<!--\n  Generated template for the MessagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <ion-row justify-content-center align-items-center>\n        <name tappable (click)="openUser()" ID="{{toUID}}" type="user"></name>\n      </ion-row>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content #content flexible-keyboard ionScrollEnd="hideKeybaord()">\n  <div class="chatwindow">\n    <ion-list no-lines>\n      <span *ngFor="let message of allMessages | async">\n        <ion-item *ngIf="message.message" text-wrap>\n          <ion-avatar item-left *ngIf="message.sentBy === currentUID">\n            <profile-pic className="avatar" type="user" ID="{{currentUID}}"></profile-pic>\n          </ion-avatar>\n          <div class="bubble me" *ngIf="message.sentBy === currentUID">\n            <h3>{{message.message}}</h3>\n          </div>\n          <ion-avatar item-right *ngIf="message.sentBy != currentUID">\n            <profile-pic className="avatar" type="user" ID="{{toUID}}"></profile-pic>\n          </ion-avatar>\n          <div class="bubble you" *ngIf="message.sentBy != currentUID">\n            <h3>{{message.message}}</h3>\n          </div>\n      </ion-item>\n      <div class="status" *ngIf="message.sentBy === currentUID">\n        <ion-icon *ngIf="message.read == true" class="smIcon" ios="ios-checkmark"></ion-icon>\n        <ion-icon *ngIf="message.read == true" class="smIcon" ios="ios-checkmark"></ion-icon>\n        <ion-icon *ngIf="message.read == false" class="smIcon" ios="ios-checkmark"></ion-icon>\n      </div>\n      </span>\n    </ion-list>\n  </div>\n</ion-content>\n\n<ion-footer (touchstart)="footerTouchStart($event)">\n  <ion-row align-items-center dir="rtl" class="bottomBar">\n    <ion-col col-9 no-padding>\n      <textarea class="textarea" rows="1" [(ngModel)]="newMessage" placeholder="ادخل رسالتك..." (keyup.enter)="sendMessage()">\n			</textarea>\n    </ion-col>\n    <ion-col col-3>\n      <ion-buttons end>\n        <button ion-button round color="gold" (touchstart)="touchSendButton($event)" [disabled]="newMessage.length == 0" small>\n          ارسل\n        </button>\n      </ion-buttons>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/message/message.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__ionic_native_keyboard__["a" /* Keyboard */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1__providers_message_message__["a" /* MessageProvider */]])
], MessagePage);

//# sourceMappingURL=message.js.map

/***/ })

});
//# sourceMappingURL=5.js.map