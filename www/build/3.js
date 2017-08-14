webpackJsonp([3],{

/***/ 1115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTeamPageModule", function() { return MyTeamPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_team__ = __webpack_require__(1190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(1172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MyTeamPageModule = (function () {
    function MyTeamPageModule() {
    }
    return MyTeamPageModule;
}());
MyTeamPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_team__["a" /* MyTeamPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_team__["a" /* MyTeamPage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__my_team__["a" /* MyTeamPage */]
        ]
    })
], MyTeamPageModule);

//# sourceMappingURL=my-team.module.js.map

/***/ }),

/***/ 1172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__order_by_captain_order_by_captain__ = __webpack_require__(1173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reverse_reverse__ = __webpack_require__(1174);
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

/***/ 1173:
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

/***/ 1174:
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_myTeamDB__ = __webpack_require__(35);
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
 * Generated class for the MyTeamPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MyTeamPage = (function () {
    function MyTeamPage(modal, navCtrl, navParams, db, afAuth, teamDB, actionSheetCtrl, alertCtrl) {
        this.modal = modal;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.afAuth = afAuth;
        this.teamDB = teamDB;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.currentLength = 0;
        this.hasNoTeams = false;
        this.matches = [];
        this.months = [];
        this.blur = false;
    }
    MyTeamPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.teamDB.getLoggedInUser().then(function (uid) {
                            if (uid)
                                _this.currentUID = uid;
                        })];
                    case 1:
                        _a.sent();
                        this.loadTeams();
                        this.loadGames();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyTeamPage.prototype.loadTeams = function () {
        this.myTeams = this.db.list('users/' + this.currentUID + '/myTeams');
    };
    MyTeamPage.prototype.loadGames = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.matches = [];
                this.db.list('users/' + this.currentUID + '/myTeams/').take(1)
                    .subscribe(function (teams) {
                    teams.forEach(function (team) {
                        _this.db.list('teams/' + team.$key + '/upcomingMatches/').take(1).subscribe(function (matches) {
                            matches.forEach(function (match) {
                                var matchIndex = _this.matches.map(function (e) { return e.$key; }).indexOf(match.$key);
                                if (matchIndex == -1)
                                    _this.matches.push(match);
                            });
                        });
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    MyTeamPage.prototype.doRefresh = function (refresher) {
        this.loadGames();
        this.loadTeams();
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    MyTeamPage.prototype.startTeam = function () {
        var myModal = this.modal.create('StartTeamPage');
        myModal.present();
        //this.blur = true;
        myModal.onWillDismiss(function (data) {
            //this.blur = false;
        });
    };
    MyTeamPage.prototype.openMatchRequest = function (requestID) {
        this.navCtrl.push('MatchPage', { id: requestID });
    };
    MyTeamPage.prototype.ionViewWillLeave = function () {
        this.teamDB.unsubscribeAll();
    };
    return MyTeamPage;
}());
MyTeamPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])({
        segment: 'myteam',
        defaultHistory: ['TabsPage', 'MyTeamPage']
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-team',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/my-team/my-team.html"*/'<!--\n  Generated template for the MyTeamPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>فريقي</ion-title>\n    <ion-buttons end>\n      <button (click)=\'startTeam()\' ion-button icon-only color="royal">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content [ngClass]="blur ? \'blur\' : \'unblur\'">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="اسحب للتحديث" refreshingSpinner="dots" refreshingText="جاري التحديث...">\n\n    </ion-refresher-content>\n  </ion-refresher>\n  <h5 padding-horizontal text-start>\n    جميع الفرق المشارك فيها\n  </h5>\n  <ion-item-group padding-bottom>\n    <ion-row *ngFor="let team of myTeams | async | orderByCaptain:currentUID">\n      <team-card style="width: 100%" [team]=\'team\'></team-card>\n    </ion-row>\n  </ion-item-group>\n  <div padding *ngIf="(myTeams | async)?.length == 0">\n    <h6 text-center>ابدأ فريقك الان</h6>\n  </div>\n  <hr>\n  <h5 padding-horizontal text-start> مبارياتي القادمة\n\n  </h5>\n  <ion-list no-margin>\n    <span *ngFor="let match of matches">\n      <ion-item class="fixedBorder" (click)="openMatchRequest(match.$key)">\n        <match-item text-center home="{{match.homeTeam}}" away="{{match.awayTeam}}"></match-item>\n        <date text-center requestID="{{match.$key}}" day="true"></date>\n      </ion-item>\n    </span>\n  </ion-list>\n  <div padding *ngIf="matches.length == 0">\n    <h6 text-center>ابحث عن مباريات في الرئيسية</h6>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/my-team/my-team.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_4__helpers_myTeamDB__["a" /* MyTeamDB */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], MyTeamPage);

//# sourceMappingURL=my-team.js.map

/***/ })

});
//# sourceMappingURL=3.js.map