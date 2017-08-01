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




/**
 * Generated class for the PlayerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PlayerPage = (function () {
    function PlayerPage(navCtrl, navParams, afAuth, db, modlCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.db = db;
        this.modlCtrl = modlCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.player = {};
        this.prmPlayer = {};
        this.playerID = '';
        this.currentUser = false;
        this.myTeams = [];
        this.section = '0';
        this.prmPlayer = navParams.get('player');
        if (!this.prmPlayer)
            this.playerID = navParams.get('playerID');
        else
            this.playerID = this.prmPlayer.$key;
        this.player.bg = '';
    }
    PlayerPage.prototype.ionViewWillLoad = function () {
        if (this.playerID == this.afAuth.auth.currentUser.uid)
            this.currentUser = true;
        this.loadPlayer();
    };
    PlayerPage.prototype.ngAfterViewInit = function () {
        this.bottomSlides = this.slides.toArray()[1];
        this.bottomSlides.lockSwipes(true);
    };
    PlayerPage.prototype.ionViewDidLoad = function () {
        this.loadPlayer();
        this.loadMyTeams();
    };
    PlayerPage.prototype.loadPlayer = function () {
        var _this = this;
        if (this.playerSub)
            this.playerSub.unsubscribe();
        this.playerSub = this.db.object('users/' + this.playerID)
            .subscribe(function (data) {
            _this.player = data;
            if (!_this.player.bg)
                _this.player.bg = 'http://www.publicdomainpictures.net/pictures/50000/nahled/sunset-profile-background.jpg';
        });
    };
    PlayerPage.prototype.loadMyTeams = function () {
        var _this = this;
        this.db.list('users/' + this.playerID
            + '/myTeams').take(1).subscribe(function (data) {
            _this.myTeams = [];
            var i;
            for (i = 0; i < data.length; i++) {
                _this.db.object('teams/' + data[i].teamId).take(1).subscribe(function (team) {
                    _this.myTeams.push(team);
                });
            }
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
        if (!this.currentUser) {
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
                            '/blocked/' + _this.playerID)
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
    PlayerPage.prototype.ionViewWillLeave = function () {
        this.playerSub.unsubscribe();
    };
    PlayerPage.prototype.editProfilePage = function () {
        this.playerSub.unsubscribe();
        var modal = this.modlCtrl.create('EditProfilePage', { player: this.player });
        modal.present();
    };
    PlayerPage.prototype.openTeam = function (team) {
        this.navCtrl.push('TeamPage', { id: team.$key });
    };
    return PlayerPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* QueryList */])
], PlayerPage.prototype, "slides", void 0);
PlayerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-player',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/player/player.html"*/'<!--\n  Generated template for the PlayerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons end>\n      <button (click)="options()" ion-button icon-only>\n        <ion-icon name="md-more" color="white"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{player.name}}</ion-title>\n  </ion-navbar>\n\n  <div class="hero" [ngStyle]="{ \'background-image\': \'url(\' + player.bg + \')\'}">\n    <div class="topContent">\n      <ion-slides pager dir="rtl">\n        <ion-slide>\n          <profile-pic className="avatar" ID="{{playerID}}" type="user"></profile-pic>\n          <h3 class="white bold">{{player.name}}</h3>\n          <h5 class="white">{{player.originalUsername}}@</h5>\n        </ion-slide>\n        <ion-slide>\n\n          <player-bar style="line-height: 1;" playerID="{{player.$key}}"></player-bar>\n          <ion-chip color="gold">\n            <ion-label>{{player.position}}</ion-label>\n          </ion-chip>\n          <ion-chip color="lightBlue">\n            <ion-label>صانع العاب</ion-label>\n          </ion-chip>\n          <ion-chip color="darkBlue">\n            <ion-label>مهاري</ion-label>\n          </ion-chip>\n        </ion-slide>\n        <ion-slide>\n          <h5 class="white">تواصل معي:</h5>\n          <div class="socialIcons">\n            <ion-icon class="largeIcon" name="logo-twitter"></ion-icon>\n            <ion-icon class="largeIcon" name="logo-facebook"></ion-icon>\n            <ion-icon class="largeIcon" name="logo-instagram"></ion-icon>\n            <ion-icon class="largeIcon" name="logo-snapchat"></ion-icon>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </div>\n\n  <ion-toolbar no-padding color="white" mode="md">\n    <ion-segment class="segment" color="orange" mode="md" [(ngModel)]="section" (ionChange)="segmentChanged($event)">\n      <ion-segment-button value="0">\n        <ion-icon name="md-football"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value="1">\n        <ion-icon name="md-trophy"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value="2">\n        <ion-icon name="md-medal"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content fullscreen #myContent>\n  <div class="profileBottom">\n    <ion-slides dir="rtl" parallax="true" (ionSlideWillChange)="slideChanged()">\n      <ion-slide>\n        <ion-item-divider>فرق اللاعب</ion-item-divider>\n        <ion-row align-items-start *ngIf="myTeams?.length > 0">\n          <ion-col col-4 col-sm no-padding wrap *ngFor="let team of myTeams">\n            <ion-card class="profileCards">\n              <img class="logo" on-tap=\'openTeam(team)\' src="{{team.logo}}" alt="">\n              <div class="bg" *ngIf=\'team.bg\' on-tap=\'openTeam(team)\' [ngStyle]="{ \'background-image\': \'url(\' + team.bg + \')\'}">\n              </div>\n              <div class="bg" *ngIf=\'!team.bg\' on-tap=\'openTeam(team)\' style="background-image: url(\'https://www.buscandonomes.com.br/_img/xthumb-default.gif.pagespeed.ic.yQYWf40TN9.png\')">\n              </div>\n              <div class="card-title">\n                {{team.name}}\n              </div>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-slide>\n      <ion-slide>\n        <ion-item-divider>\n          احصائيات اللاعب\n        </ion-item-divider>\n        <h6 text-center>قريباً</h6>\n      </ion-slide>\n      <ion-slide>\n        <ion-item-divider>\n          ميداليات اللاعب\n        </ion-item-divider>\n        <h6 text-center>قريباً</h6>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/player/player.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], PlayerPage);

//# sourceMappingURL=player.js.map

/***/ })

});
//# sourceMappingURL=11.js.map