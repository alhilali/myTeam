webpackJsonp([5],{

/***/ 1095:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs__ = __webpack_require__(1160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPageModule = (function () {
    function TabsPageModule() {
    }
    return TabsPageModule;
}());
TabsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_0__tabs__["a" /* TabsPage */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__tabs__["a" /* TabsPage */])
        ]
    })
], TabsPageModule);

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 1160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage(events, db, afAuth) {
        this.events = events;
        this.db = db;
        this.afAuth = afAuth;
        this.tab1Root = 'HomePage';
        this.tab2Root = 'MyTeamPage';
        this.tab3Root = 'NotificationPage';
        this.tab4Root = 'SearchPage';
        this.userRequestsNum = 0;
        this.matchRequestsNum = 0;
    }
    TabsPage.prototype.updateBadge = function () {
        if ((this.userRequestsNum + this.matchRequestsNum) == 0)
            this.notificationNum = null;
        else
            this.notificationNum = this.userRequestsNum + this.matchRequestsNum;
    };
    TabsPage.prototype.subscribeToBadgeCountChange = function () {
        var _this = this;
        // Method to run when tab count changes
        return this.events
            .subscribe("tabs-page:badge-update", function (type) {
            if (type == 'match')
                _this.checkMatchRequests();
            else if (type == 'user')
                _this.checkUserRequests();
        });
    };
    TabsPage.prototype.checkUserRequests = function () {
        var _this = this;
        this.db.list('users/' + this.afAuth.auth.currentUser.uid
            + '/requests').take(1).subscribe(function (data) {
            _this.userRequestsNum = data.length;
            _this.updateBadge();
        });
    };
    TabsPage.prototype.checkMatchRequests = function () {
        var _this = this;
        this.db.list('matches/', {
            query: {
                orderByChild: 'toUID',
                equalTo: this.afAuth.auth.currentUser.uid
            }
        }).take(1).subscribe(function (data) {
            var count = 0;
            for (var i = 0; i < data.length; i++) {
                if (data[i].status == 'pending')
                    count++;
                if (i == data.length - 1) {
                    _this.matchRequestsNum = count;
                    _this.updateBadge();
                }
            }
        });
    };
    TabsPage.prototype.ionViewWillEnter = function () {
        this.checkUserRequests();
        this.checkMatchRequests();
        this.subscribeToBadgeCountChange();
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/tabs/tabs.html"*/'<ion-tabs tabsLayout="title-hide">\n  <ion-tab [root]="tab1Root" tabUrlPath="home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabUrlPath="myteam" tabIcon="football"></ion-tab>\n  <ion-tab [root]="tab3Root" tabUrlPath="notification" tabBadge="{{notificationNum}}" tabBadgeStyle="danger" tabIcon="ios-notifications-outline"></ion-tab>\n  <ion-tab [root]="tab4Root" tabUrlPath="search" tabIcon="search"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=5.js.map