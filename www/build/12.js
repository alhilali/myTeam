webpackJsonp([12],{

/***/ 1111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification__ = __webpack_require__(1177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(672);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */]
        ]
    })
], NotificationPageModule);

//# sourceMappingURL=notification.module.js.map

/***/ }),

/***/ 1177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_myTeamDB__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
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
 * Generated class for the NotificationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NotificationPage = (function () {
    function NotificationPage(navCtrl, navParams, db, afAuth, events, modlCtrl, teamDB) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.afAuth = afAuth;
        this.events = events;
        this.modlCtrl = modlCtrl;
        this.teamDB = teamDB;
        this.teamsRequest = [];
        this.matchRequests = [];
    }
    NotificationPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.teamDB.getLoggedInUser().then(function (data) {
                            _this.currentUserUid = data;
                        })];
                    case 1:
                        _a.sent();
                        this.loadTeamRequests();
                        this.loadMatchRequests();
                        this.loadUserNotifications();
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationPage.prototype.loadTeamRequests = function () {
        var _this = this;
        if (this.requestsSub)
            this.requestsSub.unsubscribe();
        var ref = this.db.list('users/' + this.currentUserUid
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
        if (this.matchSub)
            this.matchSub.unsubscribe();
        var ref = this.db.list('matches/', {
            query: {
                orderByChild: 'toUID',
                equalTo: this.currentUserUid
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
    NotificationPage.prototype.loadUserNotifications = function () {
        this.userNotification = this.db.list('users/' + this.currentUserUid + '/notifications/', {
            query: {
                orderByChild: 'timestamp'
            }
        });
    };
    NotificationPage.prototype.doRefresh = function (refresher) {
        this.loadTeamRequests();
        this.loadMatchRequests();
        this.loadUserNotifications();
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    NotificationPage.prototype.acceptTeam = function (team) {
        // Add player to players list DB
        var playersList = this.db.object('/playersList/' + team.$key + '/' + this.currentUserUid);
        playersList.set({ uid: this.currentUserUid, status: 'enrolled' });
        // Add team to user list DB
        this.db.object('/users/' + this.currentUserUid + '/myTeams/' + team.$key)
            .update({ teamId: team.$key });
        // Remove request from user list DB
        this.db.object('users/' + this.currentUserUid + '/requests/' + team.$key).remove();
        // Add notification to current User
        this.db.list('users/' + this.currentUserUid + '/notifications/').push({
            type: 'joinedTeam',
            by: team.$key,
            timestamps: new Date().getTime(),
            date: __WEBPACK_IMPORTED_MODULE_5_moment__["utc"]().format('YYYY-MM-DD HH:mm:ss')
        });
    };
    NotificationPage.prototype.declineTeam = function (team) {
        // Remove request from user list DB
        this.db.object('users/' + this.currentUserUid + '/requests/' + team.$key).remove();
        // Remove player from players list DB
        this.db.object('/playersList/' + team.$key + '/' + this.currentUserUid).remove();
    };
    NotificationPage.prototype.openTeam = function (teamID) {
        this.navCtrl.push('TeamPage', { id: teamID });
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
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-notification',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/notification/notification.html"*/'<!--\n  Generated template for the NotificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>التنبيهات</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="اسحب للتحديث" refreshingSpinner="dots" refreshingText="جاري التحديث...">\n\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-item-divider color="light">طلبات</ion-item-divider>\n  <h6 text-center *ngIf="teamsRequest?.length == 0 && matchRequests?.length == 0">لا يوجد <span>😴</span></h6>\n  <ion-item-group *ngIf="teamsRequest?.length > 0">\n    <ion-list no-margin>\n      <ion-item class="fixedBorder" *ngFor="let team of teamsRequest">\n        <span item-start>\n          <ion-avatar on-tap=\'openTeam(team.teamInfo.$key)\'>\n            <profile-pic ID="{{team.teamInfo.$key}}" type="team">\n            </profile-pic>\n          </ion-avatar>\n        </span>\n        <ion-icon color="darkBlue" name="ios-person-add-outline" item-start></ion-icon>\n        <h2>{{team.teamInfo.name}}</h2>\n        <span item-end style="margin-bottom: 16px;">\n          <button (click)="acceptTeam(team.teamInfo)" ion-button color="secondary">موافق</button>\n          <button (click)="declineTeam(team.teamInfo)" ion-button color="danger" outline>إلغاء</button>\n        </span>\n      </ion-item>\n    </ion-list>\n  </ion-item-group>\n  <ion-item-group *ngIf="matchRequests?.length > 0">\n    <ion-list no-margin>\n      <ion-item class="fixedBorder" *ngFor="let team of matchRequests">\n        <span item-start>\n          <ion-avatar on-tap=\'openTeam(team.teamInfo.$key)\'>\n            <profile-pic ID="{{team.teamInfo.$key}}" type="team">\n            </profile-pic>\n          </ion-avatar>\n        </span>\n        <ion-icon color="darkBlue" name="ios-calendar-outline" item-start></ion-icon>\n        <h2>{{team.teamInfo.name}}</h2>\n        <span item-end style="margin-bottom: 16px;">\n            <button (click)="openMatchRequest(team.request)" ion-button small outline>تفاصيل المباراة</button>\n          </span>\n      </ion-item>\n    </ion-list>\n  </ion-item-group>\n  <ion-item-divider>اخر التحديثات</ion-item-divider>\n  <ion-list no-margin>\n    <ion-item class="fixedBorder" *ngFor="let notification of userNotification | async">\n      <ion-row align-items-center>\n        <ion-col col-1>\n          <ion-avatar margin-left>\n            <profile-pic ID="{{notification.by}}" type="team">\n            </profile-pic>\n          </ion-avatar>\n        </ion-col>\n        <ion-col col-8>\n          <ion-row>\n            <p class="notificationBody" *ngIf="notification.type == \'joinedTeam\'">\n              اتممت الانضمام لفريق&nbsp;\n              <span on-tap="openTeam(notification.by)" style="color: black">\n                <name ID="{{notification.by}}" type="team">\n                </name>\n              </span>\n            </p>\n          </ion-row>\n        </ion-col>\n        <ion-col col-3>\n          <p style="text-align: end">\n            <date date="{{notification.date}}"></date>\n          </p>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/notification/notification.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_0__helpers_myTeamDB__["a" /* MyTeamDB */]])
], NotificationPage);

//# sourceMappingURL=notification.js.map

/***/ })

});
//# sourceMappingURL=12.js.map