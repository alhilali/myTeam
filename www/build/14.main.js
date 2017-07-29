webpackJsonp([14],{

/***/ 1104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchPageModule", function() { return MatchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match__ = __webpack_require__(1169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(675);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MatchPageModule = (function () {
    function MatchPageModule() {
    }
    return MatchPageModule;
}());
MatchPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__match__["a" /* MatchPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__match__["a" /* MatchPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__match__["a" /* MatchPage */]
        ]
    })
], MatchPageModule);

//# sourceMappingURL=match.module.js.map

/***/ }),

/***/ 1169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_myTeamDB__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(96);
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
 * Generated class for the MatchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MatchPage = (function () {
    function MatchPage(navCtrl, navParams, view, teamDB, db, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.teamDB = teamDB;
        this.db = db;
        this.afAuth = afAuth;
        this.homeTeam = {};
        this.awayTeam = {};
        this.previousGames = [];
        this.currentUser = false;
        this.requestInfo = this.navParams.get('request');
        this.request = this.db.object('/matches/' + this.requestInfo.$key);
        if (this.afAuth.auth.currentUser.uid == this.requestInfo.toUID)
            this.currentUser = true;
    }
    MatchPage.prototype.ionViewDidLoad = function () {
        this.initData();
    };
    MatchPage.prototype.initData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.teamDB.getTeamInfo(this.requestInfo.homeTeam).then(function (data) {
                            _this.homeTeam = data;
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.teamDB.getTeamInfo(this.requestInfo.awayTeam).then(function (data) {
                                _this.awayTeam = data;
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MatchPage.prototype.acceptMatch = function () {
        // Update request status
        this.db.object('/matches/' + this.requestInfo.$key).update({ status: 'approved' });
        // Add match to home team DB
        this.db.object('/teams/' + this.requestInfo.homeTeam + '/upcomingMatches/'
            + this.requestInfo.$key).set({
            homeTeam: this.requestInfo.homeTeam,
            awayTeam: this.requestInfo.awayTeam,
            date: this.requestInfo.date
        });
        // Add match to away team DB
        this.db.object('/teams/' + this.requestInfo.awayTeam + '/upcomingMatches/'
            + this.requestInfo.$key).set({
            homeTeam: this.requestInfo.homeTeam,
            awayTeam: this.requestInfo.awayTeam,
            date: this.requestInfo.date
        });
    };
    MatchPage.prototype.declineMatch = function () {
        this.view.dismiss();
        this.db.object('/matches/' + this.requestInfo.$key).remove();
    };
    MatchPage.prototype.openTeam = function (team) {
        this.navCtrl.push('TeamPage', { team: team });
    };
    MatchPage.prototype.closeModel = function () {
        this.view.dismiss();
    };
    return MatchPage;
}());
MatchPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-match',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/match/match.html"*/'<!--\n  Generated template for the MatchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>تفاصيل المباراة</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-row *ngIf="(request | async)?.status == \'pending\' && currentUser" align-items-stretch>\n    <ion-col col-7>\n      <p text-start>هل ترغب بالموافقه على المباراة؟</p>\n    </ion-col>\n    <ion-col no-padding style="padding-left: 10px">\n      <p text-left>\n        <button (click)="acceptMatch()" ion-button color="secondary" small>موافق</button>\n        <button (click)="declineMatch()" ion-button color="danger" outline small>إلغاء</button>\n      </p>\n    </ion-col>\n  </ion-row>\n  <ion-card class="card1">\n    <ion-grid>\n      <ion-row>\n        <ion-col text-center>\n          <img class="logo" on-tap=\'openTeam(homeTeam)\' src="{{homeTeam.logo}}" alt=""> {{homeTeam.name}}\n          <h1>0</h1>\n        </ion-col>\n        <ion-col text-center style="padding-top: 60px;">\n          <h3>VS</h3>\n          <date requestID="{{requestInfo.$key}}" day="true"></date>\n          <p>{{(request | async)?.time}}<br> {{(request | async)?.stadium}}\n          </p>\n        </ion-col>\n        <ion-col text-center>\n          <img class="logo" on-tap=\'openTeam(awayTeam)\' src="{{awayTeam.logo}}" alt=""> {{awayTeam.name}}\n          <h1>0</h1>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n  <ion-item-divider>\n    المباريات السابقه\n  </ion-item-divider>\n  <ion-list no-margin>\n    <ion-item class="fixedBorder">\n      <div *ngIf="previousGames.length == 0" text-center>\n        لا توجد مباريات سابقة\n      </div>\n      <ion-item *ngIf="previousGames.length != 0" class="fixedBorder">\n\n      </ion-item>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/match/match.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__helpers_myTeamDB__["a" /* MyTeamDB */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuth */]])
], MatchPage);

//# sourceMappingURL=match.js.map

/***/ })

});
//# sourceMappingURL=14.main.js.map