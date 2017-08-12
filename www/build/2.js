webpackJsonp([2],{

/***/ 1117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification__ = __webpack_require__(1190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(1170);
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
            __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */]
        ]
    })
], NotificationPageModule);

//# sourceMappingURL=notification.module.js.map

/***/ }),

/***/ 1170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__order_by_captain_order_by_captain__ = __webpack_require__(1171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reverse_reverse__ = __webpack_require__(1172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = (function () {
    function PipesModule() {
    }
    return PipesModule;
}());
PipesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__reverse_reverse__["a" /* ReversePipe */],
            __WEBPACK_IMPORTED_MODULE_0__order_by_captain_order_by_captain__["a" /* OrderByCaptainPipe */]
        ],
        imports: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__reverse_reverse__["a" /* ReversePipe */],
            __WEBPACK_IMPORTED_MODULE_0__order_by_captain_order_by_captain__["a" /* OrderByCaptainPipe */]
        ]
    })
], PipesModule);

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 1171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByCaptainPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_myTeamDB__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
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
 * Generated class for the OrderByCaptainPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var OrderByCaptainPipe = (function () {
    function OrderByCaptainPipe(keyDiffer, _differs, teamDB) {
        this.keyDiffer = keyDiffer;
        this._differs = _differs;
        this.teamDB = teamDB;
        this.objDiffer = {};
        this.differs = this._differs.find([]).create(null);
    }
    /**
     * Takes a value and makes it lowercase.
     */
    OrderByCaptainPipe.prototype.transform = function (arr, currentUID) {
        var changes = this.differs.diff(arr);
        if (changes && arr) {
            this.cashed = arr.sort(function (a, b) {
                var AisCaptain = (a.captain == currentUID);
                var BisCaptain = (b.captain == currentUID);
                if (AisCaptain && !BisCaptain)
                    return -1;
                else if (BisCaptain && !AisCaptain)
                    return 1;
                return 0;
            });
        }
        ;
        return this.cashed;
    };
    return OrderByCaptainPipe;
}());
OrderByCaptainPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["W" /* Pipe */])({
        name: 'orderByCaptain',
        pure: false
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* KeyValueDiffers */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* IterableDiffers */], __WEBPACK_IMPORTED_MODULE_0__helpers_myTeamDB__["a" /* MyTeamDB */]])
], OrderByCaptainPipe);

//# sourceMappingURL=order-by-captain.js.map

/***/ }),

/***/ 1172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReversePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
 * Generated class for the ReversePipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var ReversePipe = (function () {
    function ReversePipe(_differs) {
        this._differs = _differs;
        this.differs = this._differs.find([]).create(null);
    }
    /**
     * Takes a value and makes it lowercase.
     */
    ReversePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var changes = this.differs.diff(value);
        if (changes && value) {
            this.cashed = value.slice().reverse();
            ;
        }
        ;
        return this.cashed;
    };
    return ReversePipe;
}());
ReversePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'reverse',
        pure: false
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* IterableDiffers */]])
], ReversePipe);

//# sourceMappingURL=reverse.js.map

/***/ }),

/***/ 1190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_myTeamDB__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(76);
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
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.teamDB.getLoggedInUser().then(function (data) {
                            _this.currentUserUid = data;
                        })];
                    case 1:
                        _a.sent();
                        this.loadRequests();
                        this.loadUserNotifications();
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationPage.prototype.loadRequests = function () {
        this.requests = this.db.list('users/' + this.currentUserUid
            + '/requests');
    };
    NotificationPage.prototype.loadUserNotifications = function () {
        this.userNotification = this.db.list('users/' + this.currentUserUid + '/notifications/', {
            query: {
                orderByChild: 'timestamp'
            }
        });
    };
    NotificationPage.prototype.doRefresh = function (refresher) {
        this.loadRequests();
        this.loadUserNotifications();
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    NotificationPage.prototype.acceptTeam = function (teamID, key) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var playersList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        playersList = [];
                        return [4 /*yield*/, this.teamDB.getTeamPlayers(teamID).then(function (players) {
                                playersList = players;
                                playersList.forEach(function (player) {
                                    if (player.status == 'enrolled') {
                                        _this.db.list('users/' + player.$key + '/notifications/').push({
                                            type: 'playerJoined',
                                            team: teamID,
                                            player: _this.currentUserUid,
                                            timestamp: new Date().getTime(),
                                            date: __WEBPACK_IMPORTED_MODULE_5_moment__["utc"]().format('YYYY-MM-DD HH:mm:ss')
                                        });
                                    }
                                });
                            })
                            // Add player to players list DB
                        ];
                    case 1:
                        _a.sent();
                        // Add player to players list DB
                        this.db.object('/playersList/' + teamID + '/' + this.currentUserUid)
                            .set({ uid: this.currentUserUid, status: 'enrolled' });
                        this.teamDB.gettTeamInfo(teamID).then(function (data) {
                            // Add team to user list DB
                            _this.db.object('/users/' + _this.currentUserUid + '/myTeams/' + teamID)
                                .update({ teamId: teamID, captain: data.captain });
                        });
                        // Remove request from user list DB
                        this.db.object('users/' + this.currentUserUid + '/requests/' + key).remove();
                        // Add notification to current User
                        this.db.list('users/' + this.currentUserUid + '/notifications/').push({
                            type: 'joinedTeam',
                            team: teamID,
                            timestamp: new Date().getTime(),
                            date: __WEBPACK_IMPORTED_MODULE_5_moment__["utc"]().format('YYYY-MM-DD HH:mm:ss')
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationPage.prototype.clearNotification = function (key) {
        this.db.object('users/' + this.currentUserUid + '/notifications/' + key).remove();
    };
    NotificationPage.prototype.clearAll = function () {
        this.db.object('users/' + this.currentUserUid + '/notifications/').remove();
    };
    NotificationPage.prototype.declineTeam = function (teamID, key) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.teamDB.getTeamInfo(teamID).then(function (team) {
                            // Notify captain that player declined team invitation
                            _this.db.list('users/' + team.captain + '/notifications/').push({
                                type: 'declinedTeamInvite',
                                team: teamID,
                                player: _this.currentUserUid,
                                timestamp: new Date().getTime(),
                                date: __WEBPACK_IMPORTED_MODULE_5_moment__["utc"]().format('YYYY-MM-DD HH:mm:ss')
                            });
                        })
                        // Remove request from user list DB
                    ];
                    case 1:
                        _a.sent();
                        // Remove request from user list DB
                        this.db.object('users/' + this.currentUserUid + '/requests/' + key).remove();
                        // Remove player from players list DB
                        this.db.object('/playersList/' + teamID + '/' + this.currentUserUid).remove();
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationPage.prototype.openTeam = function (teamID) {
        this.navCtrl.push('TeamPage', { id: teamID });
    };
    NotificationPage.prototype.openPlayer = function (playerID) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.teamDB.getUserInfo(playerID).then(function (data) {
                            _this.navCtrl.push('PlayerPage', { username: data.username });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationPage.prototype.openMatchRequest = function (requestID) {
        this.navCtrl.push('MatchPage', { id: requestID });
    };
    NotificationPage.prototype.openPost = function (postID) {
        this.navCtrl.push('PostPage', { id: postID });
    };
    NotificationPage.prototype.openMessages = function () {
        this.navCtrl.push('MessagesPage');
    };
    return NotificationPage;
}());
NotificationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-notification',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/notification/notification.html"*/'<!--\n  Generated template for the NotificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons end>\n      <button (click)=\'openMessages()\' ion-button icon-only color="royal">\n        <ion-icon name="ios-mail"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>التنبيهات</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="اسحب للتحديث" refreshingSpinner="dots" refreshingText="جاري التحديث...">\n\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-item-divider color="light">طلبات</ion-item-divider>\n  <h6 text-center *ngIf="((requests | async)?.length) == 0">لا يوجد <span>😴</span></h6>\n  <ion-item-group>\n    <ion-list no-margin>\n      <div class="fixedBorder" *ngFor="let request of requests | async">\n        <ion-item *ngIf="request.type == \'teamRequest\'">\n          <span item-start>\n            <ion-avatar on-tap=\'openTeam(request.teamID)\'>\n              <profile-pic ID="{{request.teamID}}" type="team">\n              </profile-pic>\n            </ion-avatar>\n          </span>\n          <ion-icon color="darkBlue" name="ios-person-add-outline" item-start></ion-icon>\n          <h2>\n            <name ID="{{request.teamID}}" type="team"></name>\n          </h2>\n          <span item-end style="margin-bottom: 16px;">\n            <button (click)="acceptTeam(request.teamID, request.$key)" ion-button color="secondary">موافق</button>\n            <button (click)="declineTeam(request.teamID, request.$key)" ion-button color="danger" outline>إلغاء</button>\n          </span>\n        </ion-item>\n        <ion-item *ngIf="request.type == \'matchRequest\'">\n          <span item-start>\n            <ion-avatar on-tap=\'openTeam(request.homeTeam)\'>\n              <profile-pic ID="{{request.homeTeam}}" type="team">\n              </profile-pic>\n            </ion-avatar>\n          </span>\n          <ion-icon color="darkBlue" name="ios-calendar-outline" item-start></ion-icon>\n          <h2>\n            <name ID="{{request.homeTeam}}" type="team"></name>\n          </h2>\n          <span item-end style="margin-bottom: 16px;">\n            <button (click)="openMatchRequest(request.matchID)" ion-button small outline>تفاصيل المباراة</button>\n          </span>\n        </ion-item>\n      </div>\n    </ion-list>\n  </ion-item-group>\n  <ion-item-divider>\n    <ion-row>\n      <ion-col col-9>\n        اخر التحديثات\n      </ion-col>\n\n      <ion-col col-3 on-tap="clearAll()">\n        <p style="color: red" text-end>حذف الكل</p>\n      </ion-col>\n    </ion-row>\n  </ion-item-divider>\n  <ion-list no-margin>\n    <ion-item-sliding *ngFor="let notification of userNotification | async | reverse">\n      <ion-item class="fixedBorder">\n        <ion-row align-items-center>\n          <ion-col col-1 no-padding>\n            <ion-avatar *ngIf="notification.type == \'joinedTeam\' || notification.type == \'matchAccepted\' ||  notification.type == \'matchDeclined\'"\n              on-tap="openTeam(notification.team)" margin-left>\n              <profile-pic ID="{{notification.team}}" type="team">\n              </profile-pic>\n            </ion-avatar>\n            <ion-avatar *ngIf="notification.type == \'playerJoined\' || notification.type == \'declinedTeamInvite\' || notification.type == \'postComment\' || notification.type == \'likedPost\'"\n              on-tap="openPlayer(notification.player)" margin-left>\n              <profile-pic ID="{{notification.player}}" type="user">\n              </profile-pic>\n            </ion-avatar>\n          </ion-col>\n          <ion-col col-8>\n            <ion-row>\n              <p class="notificationBody" *ngIf="notification.type == \'joinedTeam\'">\n                اتممت الانضمام لفريق\n                <span on-tap="openTeam(notification.team)" style="color: black">\n                <name ID="{{notification.team}}" type="team">\n                </name>\n                </span>\n              </p>\n              <p class="notificationBody" *ngIf="notification.type == \'matchAccepted\'">\n                فريق\n                <span on-tap="openTeam(notification.team)" style="color: black">\n                <name ID="{{notification.team}}" type="team">\n                </name>\n                </span> وافق على طلب\n                <span on-tap="openMatchRequest(notification.matchID)" style="color: black">\n                  المباراة\n                </span> مع\n                <span on-tap="openTeam(notification.otherTeam)" style="color: black">\n                <name ID="{{notification.otherTeam}}" type="team">\n                </name>\n                </span>\n              </p>\n              <p class="notificationBody" *ngIf="notification.type == \'matchDeclined\'">\n                فريق\n                <span on-tap="openTeam(notification.team)" style="color: black">\n                <name ID="{{notification.team}}" type="team">\n                </name>\n                </span> لم يوافق على طلب\n                <span on-tap="openMatchRequest(notification.matchID)" style="color: black">\n                  المباراة\n                </span> مع\n                <span on-tap="openTeam(notification.otherTeam)" style="color: black">\n                <name ID="{{notification.otherTeam}}" type="team">\n                </name>\n                </span>\n              </p>\n              <p class="notificationBody" *ngIf="notification.type == \'playerJoined\'">\n                اللاعب\n                <span on-tap="openPlayer(notification.player)" style="color: black">\n                <name ID="{{notification.player}}" type="user">\n                </name>\n              </span> انضم الى فريق\n                <span on-tap="openTeam(notification.team)" style="color: black">\n                <name ID="{{notification.team}}" type="team">\n                </name>\n                </span>\n              </p>\n              <p class="notificationBody" *ngIf="notification.type == \'declinedTeamInvite\'">\n                اللاعب\n                <span on-tap="openPlayer(notification.player)" style="color: black">\n                <name ID="{{notification.player}}" type="user">\n                </name>\n              </span> رفض الانضمام الى فريق\n                <span on-tap="openTeam(notification.team)" style="color: black">\n                <name ID="{{notification.team}}" type="team">\n                </name>\n                </span>\n              </p>\n              <p class="notificationBody" *ngIf="notification.type == \'postComment\'">\n                <span on-tap="openPost(notification.postID)" style="color: black">\n                  "{{notification.message}}"\n                </span> تعليق جديد من\n                <span on-tap="openPlayer(notification.player)" style="color: black">\n                  <name ID="{{notification.player}}" type="user">\n                  </name>\n                </span>\n              </p>\n              <p class="notificationBody" *ngIf="notification.type == \'likedPost\'">\n                ابدى اعجابه بـ\n                <span on-tap="openPost(notification.postID)" style="color: black">\n                  "{{notification.title}}"\n                </span>\n              </p>\n            </ion-row>\n          </ion-col>\n          <ion-col col-3>\n            <p style="text-align: end">\n              <date date="{{notification.date}}"></date>\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      <ion-item-options side="left" (ionSwipe)="clearNotification(notification.$key)">\n        <button (click)="clearNotification(notification.$key)" ion-button expandable icon-only color="gold">\n          <ion-icon color="white" name="md-remove-circle"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/notification/notification.html"*/,
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
//# sourceMappingURL=2.js.map