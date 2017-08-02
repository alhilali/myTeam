webpackJsonp([11],{

/***/ 1109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerPageModule", function() { return PlayerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player__ = __webpack_require__(1174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(672);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PlayerPageModule = (function () {
    function PlayerPageModule() {
    }
    return PlayerPageModule;
}());
PlayerPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__player__["a" /* PlayerPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__player__["a" /* PlayerPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__player__["a" /* PlayerPage */]
        ]
    })
], PlayerPageModule);

//# sourceMappingURL=player.module.js.map

/***/ }),

/***/ 1174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_myTeamDB__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(51);
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
 * Generated class for the PlayerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PlayerPage = (function () {
    function PlayerPage(navCtrl, navParams, afAuth, db, teamDB, modlCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.db = db;
        this.teamDB = teamDB;
        this.modlCtrl = modlCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.player = {};
        this.myTeams = [];
        this.section = '0';
        this.player.username = navParams.get('username');
        this.player.bg = '';
    }
    PlayerPage.prototype.ionViewWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.auth.onAuthStateChanged(function (user) {
                            if (user)
                                _this.currentUID = user.uid;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlayerPage.prototype.ngAfterViewInit = function () {
        this.bottomSlides = this.slides.toArray()[1];
        this.bottomSlides.lockSwipes(true);
    };
    PlayerPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.teamDB.findUID(this.player.username).then(function (data) {
                            userInfo = data;
                            _this.player = userInfo;
                            if (!_this.player.bg)
                                _this.player.bg = 'http://www.publicdomainpictures.net/pictures/50000/nahled/sunset-profile-background.jpg';
                        })];
                    case 1:
                        _a.sent();
                        this.loadMyTeams();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlayerPage.prototype.loadMyTeams = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.db.list('users/' + this.player.$key
                    + '/myTeams').take(1).subscribe(function (data) {
                    _this.myTeams = [];
                    var i;
                    for (i = 0; i < data.length; i++) {
                        _this.db.object('teams/' + data[i].teamId).take(1).subscribe(function (team) {
                            _this.myTeams.push(team);
                        });
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    PlayerPage.prototype.segmentChanged = function (event) {
        this.bottomSlides.lockSwipes(false);
        this.bottomSlides.slideTo(event.value, 500);
        this.bottomSlides.lockSwipes(true);
    };
    PlayerPage.prototype.slideChanged = function () {
        var currentIndex = this.bottomSlides.getActiveIndex();
        this.section = currentIndex + '';
    };
    PlayerPage.prototype.addPlayer = function () {
        var modal = this.modlCtrl.create('AddPlayerToTeamPage', { player: this.player });
        modal.present();
    };
    PlayerPage.prototype.options = function () {
        var _this = this;
        var actionSheet;
        var btns;
        if (this.currentUID != this.player.$key) {
            btns = [
                {
                    text: 'إضافة اللاعب',
                    handler: function () {
                        _this.addPlayer();
                    }
                },
                {
                    text: 'Block',
                    role: 'destructive',
                    handler: function () {
                        _this.db.object('users/' + _this.afAuth.auth.currentUser.uid +
                            '/blocked/' + _this.player.$key)
                            .set({ status: 'blocked' });
                        _this.navCtrl.pop();
                    }
                },
                {
                    text: 'إلغاء',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ];
        }
        else {
            btns = [
                {
                    text: 'تعديل بياناتي',
                    handler: function () {
                        _this.editProfilePage();
                    }
                },
                {
                    text: 'إلغاء',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ];
        }
        actionSheet = this.actionSheetCtrl.create({
            buttons: btns
        });
        actionSheet.present();
    };
    PlayerPage.prototype.editProfilePage = function () {
        var modal = this.modlCtrl.create('EditProfilePage', { player: this.player });
        modal.present();
    };
    PlayerPage.prototype.openTeam = function (team) {
        this.navCtrl.push('TeamPage', { id: team.$key });
    };
    return PlayerPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* QueryList */])
], PlayerPage.prototype, "slides", void 0);
PlayerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPage */])({
        segment: 'player/:username'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-player',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/player/player.html"*/'<!--\n  Generated template for the PlayerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons *ngIf="teamDB.loggedIn" end>\n      <button (click)="options()" ion-button icon-only>\n        <ion-icon name="md-more" color="white"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{player.name}}</ion-title>\n  </ion-navbar>\n\n  <div class="hero" [ngStyle]="{ \'background-image\': \'url(\' + player.bg + \')\'}">\n    <div class="topContent">\n      <ion-slides pager dir="rtl">\n        <ion-slide>\n          <img class="avatar" src="{{player.profilePic}}" alt="">\n          <h3 class="white bold">{{player.name}}</h3>\n          <h5 class="white">{{player.originalUsername}}@</h5>\n        </ion-slide>\n        <ion-slide>\n\n          <player-bar style="line-height: 1;" playerID="{{player.$key}}"></player-bar>\n          <ion-chip color="gold">\n            <ion-label>{{player.position}}</ion-label>\n          </ion-chip>\n          <ion-chip color="lightBlue">\n            <ion-label>صانع العاب</ion-label>\n          </ion-chip>\n          <ion-chip color="darkBlue">\n            <ion-label>مهاري</ion-label>\n          </ion-chip>\n        </ion-slide>\n        <ion-slide>\n          <h5 class="white">تواصل معي:</h5>\n          <div class="socialIcons">\n            <ion-icon class="largeIcon" name="logo-twitter"></ion-icon>\n            <ion-icon class="largeIcon" name="logo-facebook"></ion-icon>\n            <ion-icon class="largeIcon" name="logo-instagram"></ion-icon>\n            <ion-icon class="largeIcon" name="logo-snapchat"></ion-icon>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </div>\n\n  <ion-toolbar no-padding color="white" mode="md">\n    <ion-segment class="segment" color="orange" mode="md" [(ngModel)]="section" (ionChange)="segmentChanged($event)">\n      <ion-segment-button value="0">\n        <ion-icon name="md-football"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value="1">\n        <ion-icon name="md-trophy"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value="2">\n        <ion-icon name="md-medal"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content fullscreen #myContent>\n  <div class="profileBottom">\n    <ion-slides dir="rtl" parallax="true" (ionSlideWillChange)="slideChanged()">\n      <ion-slide>\n        <ion-item-divider>فرق اللاعب</ion-item-divider>\n        <ion-row align-items-start *ngIf="myTeams?.length > 0">\n          <ion-col col-4 col-sm no-padding wrap *ngFor="let team of myTeams">\n            <ion-card class="profileCards">\n              <img class="logo" on-tap=\'openTeam(team)\' src="{{team.logo}}" alt="">\n              <div class="bg" *ngIf=\'team.bg\' on-tap=\'openTeam(team)\' [ngStyle]="{ \'background-image\': \'url(\' + team.bg + \')\'}">\n              </div>\n              <div class="bg" *ngIf=\'!team.bg\' on-tap=\'openTeam(team)\' style="background-image: url(\'https://www.buscandonomes.com.br/_img/xthumb-default.gif.pagespeed.ic.yQYWf40TN9.png\')">\n              </div>\n              <div class="card-title">\n                {{team.name}}\n              </div>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-slide>\n      <ion-slide>\n        <ion-item-divider>\n          احصائيات اللاعب\n        </ion-item-divider>\n        <h6 text-center>قريباً</h6>\n      </ion-slide>\n      <ion-slide>\n        <ion-item-divider>\n          ميداليات اللاعب\n        </ion-item-divider>\n        <h6 text-center>قريباً</h6>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/player/player.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_0__helpers_myTeamDB__["a" /* MyTeamDB */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */]])
], PlayerPage);

//# sourceMappingURL=player.js.map

/***/ })

});
//# sourceMappingURL=11.js.map