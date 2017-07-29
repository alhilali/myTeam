webpackJsonp([4],{

/***/ 1114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPageModule", function() { return TeamPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team__ = __webpack_require__(1179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(675);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__team__["a" /* TeamPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__team__["a" /* TeamPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__team__["a" /* TeamPage */]
        ]
    })
], TeamPageModule);

//# sourceMappingURL=team.module.js.map

/***/ }),

/***/ 1179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_myTeamDB__ = __webpack_require__(50);
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
        this.teamSub = this.db.object('teams/' + this.navParams.get('team').$key).subscribe(function (data) {
            _this.team = data;
            if (_this.team.captain == _this.afAuth.auth.currentUser.uid)
                _this.isCaptain = true;
            if (!_this.team.bg)
                _this.team.bg = 'http://2.bp.blogspot.com/-IxU2acVSDds/UPPNBOwulyI/AAAAAAAACGU/3RaskOb8upk/s1600/Old+Trafford+wallpapers+12.jpg';
        });
    };
    TeamPage.prototype.loadPlayers = function () {
        var _this = this;
        this.playersListSub = this.db.list('playersList/' + this.navParams.get('team').$key)
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
        this.navCtrl.push('PlayerPage', { player: player });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* QueryList */])
], TeamPage.prototype, "slides", void 0);
TeamPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-team',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/team/team.html"*/'<!--\n  Generated template for the TeamPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{team.name}}</ion-title>\n    <ion-buttons end>\n      <button (click)=\'requestMatch()\' ion-button icon-only color="royal">\n          <ion-icon name="md-calendar"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <shrinking-segment-header [scrollArea]="myContent" headerHeight="185" class="hero" [ngStyle]="{ \'background-image\': \'url(\' + team.bg + \')\'}">\n    <div class="topContent">\n      <ion-slides class="topSlides" pager dir="rtl">\n        <ion-slide>\n          <div class="teamAvatar" [ngStyle]="{ \'background-image\': \'url(\' + team.logo + \')\'}"></div>\n          <div class="infoSlideBottom">\n            <h3 class="white bold">{{team.name}}</h3>\n            <h5 class="white">{{team.city}}</h5>\n            <button style="    position: absolute;top: 70px;left: 70px;" *ngIf="isCaptain" (click)=\'addPlayer()\' ion-button clear icon-only\n              color="white">\n                <ion-icon name="person-add"></ion-icon>\n            </button>\n          </div>\n        </ion-slide>\n        <ion-slide>\n          <team-bar teamID="{{team.$key}}"></team-bar>\n          <ion-chip color="gold">\n            <ion-label>متقدم الترتيب</ion-label>\n          </ion-chip>\n          <ion-chip color="lightBlue">\n            <ion-label>لعب نظيف</ion-label>\n          </ion-chip>\n          <ion-chip color="darkBlue">\n            <ion-label>شيء اخر</ion-label>\n          </ion-chip>\n        </ion-slide>\n        <ion-slide>\n          <h5 class="white">تأسس الفريق: {{team.estDate}}</h5>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </shrinking-segment-header>\n\n  <ion-toolbar no-padding color="white" mode="md">\n    <ion-segment color="orange" mode="md" [(ngModel)]="section" (ionChange)="segmentChanged($event)">\n      <ion-segment-button value="0">\n        <ion-icon class="largeIcon" name="ios-people"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value="1">\n        <ion-icon class="largeIcon" name="md-trophy"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value="2">\n        <ion-icon class="largeIcon" name="md-calendar"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content fullscreen #myContent>\n  <div class="profileBottom">\n    <ion-slides dir="rtl" parallax="true" (ionSlideWillChange)="slideChanged()">\n      <ion-slide>\n        <ion-list no-margin>\n          <ion-item-divider>لاعبي الفريق</ion-item-divider>\n          <ion-item class="fixedBorder" *ngFor="let player of playersList">\n            <span item-start>\n                <profile-pic className="avatar" ID="{{player.$key}}" type="user"></profile-pic>\n              </span>\n            <span item-content>\n                <ion-chip color="orange">\n                  <ion-label>{{player.position}}</ion-label>\n                </ion-chip>\n                <button ion-button clear (click)=\'showPlayer(player)\'>\n                  <h2>{{player.name}}</h2>\n                </button>\n              </span>\n            <span *ngIf="this.team.captain == player.$key" item-end>\n                <ion-chip color="gold">\n                  <ion-label>كابتن</ion-label>\n                </ion-chip>\n              </span>\n            <span *ngIf="this.team.captain != player.$key && isCaptain == true" item-end>\n                <ion-icon (click)="removePlayer(player)" color="danger" class="largeIcon" name="trash"></ion-icon>\n              </span>\n          </ion-item>\n        </ion-list>\n      </ion-slide>\n      <ion-slide>\n        <ion-item-divider>\n          البطولات\n        </ion-item-divider>\n        <h6 text-center>قريباً</h6>\n      </ion-slide>\n      <ion-slide>\n        <ion-list no-margin>\n          <ion-item-divider>\n            التقويم\n          </ion-item-divider>\n          <span *ngFor="let month of months">\n            <ion-item-divider class="monthLabel">\n              {{month.name}}\n            </ion-item-divider>\n            <span *ngFor="let match of matches | async">\n              <ion-item *ngIf="match.date.substring(0, 2) == month.num" class="fixedBorder" (click)="openMatchRequest(match)">\n                <match-item text-center home="{{match.homeTeam}}" away="{{match.awayTeam}}"></match-item>\n                <date text-center requestID="{{match.$key}}" day="true"></date>\n              </ion-item>\n            </span>\n          </span>\n        </ion-list>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/team/team.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4__helpers_myTeamDB__["a" /* MyTeamDB */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* AlertController */]])
], TeamPage);

//# sourceMappingURL=team.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map