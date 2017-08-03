webpackJsonp([4],{

/***/ 1117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPageModule", function() { return TeamPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team__ = __webpack_require__(1183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(672);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TeamPageModule = (function () {
    function TeamPageModule() {
    }
    return TeamPageModule;
}());
TeamPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__team__["a" /* TeamPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__team__["a" /* TeamPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__team__["a" /* TeamPage */]
        ]
    })
], TeamPageModule);

//# sourceMappingURL=team.module.js.map

/***/ }),

/***/ 1183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_myTeamDB__ = __webpack_require__(38);
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






/**
 * Generated class for the TeamPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TeamPage = (function () {
    function TeamPage(navCtrl, navParams, db, afAuth, modal, teamDB, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.afAuth = afAuth;
        this.modal = modal;
        this.teamDB = teamDB;
        this.alertCtrl = alertCtrl;
        this.team = {};
        this.isCaptain = false;
        this.playersList = [];
        this.section = '0';
        this.months = [];
        this.team.logo = '';
        this.team.bg = '';
        this.team.$key = this.navParams.get('id');
    }
    TeamPage.prototype.ngAfterViewInit = function () {
        this.bottomSlides = this.slides.toArray()[1];
        this.bottomSlides.lockSwipes(true);
    };
    TeamPage.prototype.ionViewDidEnter = function () {
        this.loadTeam();
        this.loadPlayers();
    };
    TeamPage.prototype.loadTeam = function () {
        var _this = this;
        this.teamSub = this.db.object('teams/' + this.team.$key).subscribe(function (data) {
            _this.team = data;
            if (_this.teamDB.loggedIn && _this.team.captain == _this.teamDB.userInfo.uid)
                _this.isCaptain = true;
            if (!_this.team.bg)
                _this.team.bg = 'http://2.bp.blogspot.com/-IxU2acVSDds/UPPNBOwulyI/AAAAAAAACGU/3RaskOb8upk/s1600/Old+Trafford+wallpapers+12.jpg';
        });
    };
    TeamPage.prototype.loadPlayers = function () {
        var _this = this;
        this.playersListSub = this.db.list('playersList/' + this.team.$key)
            .subscribe(function (data) {
            _this.playersList = [];
            var i;
            for (i = 0; i < data.length; i++) {
                if (data[i].status != 'pending') {
                    _this.db.object('users/' + data[i].uid).take(1).subscribe(function (user) {
                        _this.playersList.push(user);
                    });
                }
            }
        });
    };
    TeamPage.prototype.segmentChanged = function (event) {
        if (event.value == '2')
            this.loadGames();
        this.bottomSlides.lockSwipes(false);
        this.bottomSlides.slideTo(event.value, 500);
        this.bottomSlides.lockSwipes(true);
    };
    TeamPage.prototype.slideChanged = function () {
        var currentIndex = this.bottomSlides.getActiveIndex();
        this.section = currentIndex + '';
        if (currentIndex == 2)
            this.loadGames();
    };
    TeamPage.prototype.loadGames = function () {
        this.matches = this.db.list('/teams/' + this.team.$key + '/upcomingMatches/');
        this.setUpMonths();
    };
    TeamPage.prototype.setUpMonths = function () {
        var _this = this;
        this.matches.take(1).subscribe(function (data) {
            data.forEach(function (match) {
                _this.db.object('matches/' + match.$key).take(1).subscribe(function (matchInfo) {
                    var monthNum = matchInfo.date.substring(0, 2);
                    var monthName = __WEBPACK_IMPORTED_MODULE_5_moment__(monthNum, 'MM').format('MMMM');
                    var index = _this.months.map(function (e) { return e.num; }).indexOf(monthNum);
                    if (index == -1)
                        _this.months.push({ name: monthName, num: monthNum });
                });
            });
        });
    };
    TeamPage.prototype.openMatchRequest = function (request) {
        this.navCtrl.push('MatchPage', { request: request });
    };
    TeamPage.prototype.removePlayer = function (player) {
        if (player.$key == this.team.captain) {
            this.alertCtrl.create({
                title: 'خطأ في حذف لاعب',
                subTitle: 'لا يمكنك حذف كابتن الفريق',
                buttons: ['حسناً'],
            }).present();
        }
        else
            this.showConfirm(player);
    };
    TeamPage.prototype.showConfirm = function (player) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'هل انت متأكد من حذف اللاعب؟',
            message: 'لا يمكن التراجع بعد تنفيذ العملية',
            buttons: [
                {
                    text: 'إلغاء',
                    handler: function () {
                        //console.log('Cancel clicked');
                    }
                },
                {
                    text: 'متأكد',
                    handler: function () {
                        _this.db.object('users/' + player.$key + '/myTeams/' + _this.team.$key).remove();
                        _this.db.object('playersList/' + _this.team.$key + '/' + player.$key).remove();
                    }
                }
            ]
        });
        confirm.present();
    };
    TeamPage.prototype.ionViewWillLeave = function () {
        this.playersListSub.unsubscribe();
        this.teamSub.unsubscribe();
        this.teamDB.unsubscribeAll();
    };
    TeamPage.prototype.showPlayer = function (player) {
        this.navCtrl.push('PlayerPage', { username: player.originalUsername });
    };
    TeamPage.prototype.addPlayer = function () {
        var myModal = this.modal.create('AddPlayerPage', { team: this.team });
        myModal.present();
    };
    TeamPage.prototype.requestMatch = function () {
        var myModal = this.modal.create('RequestMatchPage', { team: this.team });
        myModal.present();
    };
    return TeamPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* QueryList */])
], TeamPage.prototype, "slides", void 0);
TeamPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])({
        segment: 'team/:id',
        defaultHistory: ['MyTeamPage']
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-team',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/team/team.html"*/'<!--\n  Generated template for the TeamPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{team.name}}</ion-title>\n    <ion-buttons end>\n      <button (click)=\'requestMatch()\' ion-button icon-only color="royal">\n          <ion-icon name="md-calendar"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <div class="hero" [ngStyle]="{ \'background-image\': \'url(\' + team.bg + \')\'}">\n    <div class="topContent">\n      <ion-slides class="topSlides" pager dir="rtl">\n        <ion-slide>\n          <div class="teamAvatar" [ngStyle]="{ \'background-image\': \'url(\' + team.logo + \')\'}"></div>\n          <h3 class="white bold">{{team.name}}</h3>\n          <h5 class="white">{{team.city}}</h5>\n          <button style="position: absolute;top: 70px;left: 70px;" *ngIf="isCaptain" (click)=\'addPlayer()\' ion-button clear icon-only\n            color="white">\n                <ion-icon name="person-add"></ion-icon>\n            </button>\n        </ion-slide>\n        <ion-slide>\n          <team-bar style="line-height: 2;" teamID="{{team.$key}}"></team-bar>\n        </ion-slide>\n        <ion-slide>\n          <ion-chip color="gold">\n            <ion-label>متقدم الترتيب</ion-label>\n          </ion-chip>\n          <ion-chip color="lightBlue">\n            <ion-label>لعب نظيف</ion-label>\n          </ion-chip>\n          <ion-chip color="darkBlue">\n            <ion-label>شيء اخر</ion-label>\n          </ion-chip>\n          <h5 class="white">تأسس الفريق: {{team.estDate}}</h5>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </div>\n\n  <ion-toolbar no-padding color="white" mode="md">\n    <ion-segment color="orange" mode="md" [(ngModel)]="section" (ionChange)="segmentChanged($event)">\n      <ion-segment-button value="0">\n        <ion-icon name="ios-people"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value="1">\n        <ion-icon name="md-trophy"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value="2">\n        <ion-icon name="md-calendar"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content fullscreen #myContent>\n  <div class="profileBottom">\n    <ion-slides dir="rtl" parallax="true" (ionSlideWillChange)="slideChanged()">\n      <ion-slide>\n        <ion-list no-margin>\n          <ion-item-divider>لاعبي الفريق</ion-item-divider>\n          <ion-item-sliding *ngFor="let player of playersList">\n            <ion-item class="fixedBorder">\n              <ion-row on-tap="showPlayer(player)" align-items-center>\n                <p class="chip {{player.position}}">\n                  {{player.position}}\n                </p>\n                <ion-avatar padding-right>\n                  <profile-pic className="avatar" ID="{{player.$key}}" type="user"></profile-pic>\n                </ion-avatar>\n                <h2 style="margin: 0 0 8px;">{{player.name}}</h2> &nbsp;\n                <p>{{player.originalUsername}}@</p>\n                <ion-col>\n                  <p class="captainChip" *ngIf="this.team.captain == player.$key">\n                    كابتن</p>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n            <ion-item-options *ngIf="this.team.captain != player.$key && isCaptain == true" side="left">\n              <button (click)="removePlayer(player)" ion-button icon-only color="danger">\n                <ion-icon name="md-trash"></ion-icon>\n              </button>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-slide>\n      <ion-slide>\n        <ion-item-divider>\n          البطولات\n        </ion-item-divider>\n        <h6 text-center>قريباً</h6>\n      </ion-slide>\n      <ion-slide>\n        <ion-list no-margin>\n          <ion-item-divider>\n            التقويم\n          </ion-item-divider>\n          <span *ngFor="let month of months">\n            <ion-item-divider class="monthLabel">\n              {{month.name}}\n            </ion-item-divider>\n            <span *ngFor="let match of matches | async">\n              <ion-item *ngIf="match.date.substring(0, 2) == month.num" class="fixedBorder" (click)="openMatchRequest(match)">\n                <match-item text-center home="{{match.homeTeam}}" away="{{match.awayTeam}}"></match-item>\n                <date text-center requestID="{{match.$key}}" day="true"></date>\n              </ion-item>\n            </span>\n          </span>\n        </ion-list>\n        <div padding *ngIf="months?.length == 0">\n          <h6 text-center>لا توجد مباريات</h6>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/team/team.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4__helpers_myTeamDB__["a" /* MyTeamDB */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], TeamPage);

//# sourceMappingURL=team.js.map

/***/ })

});
//# sourceMappingURL=4.js.map