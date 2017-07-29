webpackJsonp([12],{

/***/ 1106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification__ = __webpack_require__(1171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificationPageModule = (function () {
    function NotificationPageModule() {
    }
    return NotificationPageModule;
}());
NotificationPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */]
        ]
    })
], NotificationPageModule);

//# sourceMappingURL=notification.module.js.map

/***/ }),

/***/ 1171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(59);
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





/**
 * Generated class for the NotificationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NotificationPage = (function () {
    function NotificationPage(navCtrl, navParams, db, afAuth, events, modlCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.afAuth = afAuth;
        this.events = events;
        this.modlCtrl = modlCtrl;
        this.teamsRequest = [];
        this.matchRequests = [];
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        this.loadTeamRequests();
        this.loadMatchRequests();
    };
    NotificationPage.prototype.loadTeamRequests = function () {
        var _this = this;
        var ref = this.db.list('users/' + this.afAuth.auth.currentUser.uid
            + '/requests');
        this.requestsSub = ref.subscribe(function (data) {
            _this.teamsRequest = [];
            _this.events.publish("tabs-page:badge-update", 'user');
            data.forEach(function (team) {
                _this.db.object('teams/' + team.teamId).take(1).subscribe(function (teamInfo) {
                    _this.teamsRequest.push({ teamInfo: teamInfo, dateRequested: team.dateRequested });
                });
            });
        });
    };
    NotificationPage.prototype.loadMatchRequests = function () {
        var _this = this;
        var ref = this.db.list('matches/', {
            query: {
                orderByChild: 'toUID',
                equalTo: this.afAuth.auth.currentUser.uid
            }
        });
        this.matchSub = ref.subscribe(function (data) {
            _this.events.publish("tabs-page:badge-update", 'match');
            _this.matchRequests = [];
            data.forEach(function (request) {
                if (request.status == 'pending') {
                    _this.db.object('teams/' + request.homeTeam).take(1).subscribe(function (teamInfo) {
                        _this.matchRequests.push({ teamInfo: teamInfo, request: request });
                    });
                }
            });
        });
    };
    NotificationPage.prototype.doRefresh = function (refresher) {
        this.loadTeamRequests();
        this.loadMatchRequests();
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    NotificationPage.prototype.acceptTeam = function (team) {
        var uid = this.afAuth.auth.currentUser.uid;
        // Add player to players list DB
        var playersList = this.db.object('/playersList/' + team.$key + '/' + uid);
        playersList.set({ uid: uid, status: 'enrolled' });
        // Add team to user list DB
        this.db.object('/users/' + uid + '/myTeams/' + team.$key)
            .update({ teamId: team.$key });
        // Remove request from user list DB
        this.db.object('users/' + uid + '/requests/' + team.$key).remove();
    };
    NotificationPage.prototype.declineTeam = function (team) {
        var uid = this.afAuth.auth.currentUser.uid;
        // Remove request from user list DB
        this.db.object('users/' + uid + '/requests/' + team.$key).remove();
        // Remove player from players list DB
        this.db.object('/playersList/' + team.$key + '/' + uid).remove();
    };
    NotificationPage.prototype.openTeam = function (team) {
        this.navCtrl.push('TeamPage', { team: team });
    };
    NotificationPage.prototype.openMatchRequest = function (request) {
        this.navCtrl.push('MatchPage', { request: request });
    };
    NotificationPage.prototype.ionViewWillLeave = function () {
        this.requestsSub.unsubscribe();
        this.matchSub.unsubscribe();
    };
    return NotificationPage;
}());
NotificationPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-notification',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/notification/notification.html"*/'<!--\n  Generated template for the NotificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>التنبيهات</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="اسحب للتحديث" refreshingSpinner="dots" refreshingText="جاري التحديث...">\n\n    </ion-refresher-content>\n  </ion-refresher>\n  <h6 text-center *ngIf="teamsRequest?.length == 0 && matchRequests?.length == 0">لا يوجد تنبيهات <span>😴</span></h6>\n  <ion-item-group *ngIf="teamsRequest?.length > 0">\n    <ion-item-divider color="light">الانضمام</ion-item-divider>\n    <ion-list no-margin>\n      <ion-item class="fixedBorder" *ngFor="let team of teamsRequest">\n        <span item-start>\n          <div on-tap=\'openTeam(team.teamInfo)\' class="listAvatar" style="background-image: url(\'https://cdn-arkquizzstoragelive.akamaized.net/cdn/1310e09e-7d5e-4efd-97a0-ebf63d923da0_manu.png\');"></div>\n        </span>\n        <ion-icon color="darkBlue" name="ios-person-add-outline" item-start></ion-icon>\n        <h2>{{team.teamInfo.name}}</h2>\n        <span item-end style="margin-bottom: 16px;">\n          <button (click)="acceptTeam(team.teamInfo)" ion-button color="secondary">موافق</button>\n          <button (click)="declineTeam(team.teamInfo)" ion-button color="danger" outline>إلغاء</button>\n        </span>\n      </ion-item>\n    </ion-list>\n  </ion-item-group>\n  <ion-item-group *ngIf="matchRequests?.length > 0">\n    <ion-item-divider color="light">المباريات</ion-item-divider>\n    <ion-list no-margin>\n      <ion-item class="fixedBorder" *ngFor="let team of matchRequests">\n        <span item-start>\n            <div on-tap=\'openTeam(team.teamInfo)\' class="listAvatar" style="background-image: url(\'https://cdn-arkquizzstoragelive.akamaized.net/cdn/1310e09e-7d5e-4efd-97a0-ebf63d923da0_manu.png\');"></div>\n          </span>\n        <ion-icon color="darkBlue" name="ios-calendar-outline" item-start></ion-icon>\n        <h2>{{team.teamInfo.name}}</h2>\n        <span item-end style="margin-bottom: 16px;">\n            <button (click)="openMatchRequest(team.request)" ion-button small outline>تفاصيل المباراة</button>\n          </span>\n      </ion-item>\n    </ion-list>\n  </ion-item-group>\n\n</ion-content>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/notification/notification.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
], NotificationPage);

//# sourceMappingURL=notification.js.map

/***/ })

});
//# sourceMappingURL=12.main.js.map