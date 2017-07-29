webpackJsonp([13],{

/***/ 1105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTeamPageModule", function() { return MyTeamPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_team__ = __webpack_require__(1170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(675);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_team__["a" /* MyTeamPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_team__["a" /* MyTeamPage */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__my_team__["a" /* MyTeamPage */]
        ]
    })
], MyTeamPageModule);

//# sourceMappingURL=my-team.module.js.map

/***/ }),

/***/ 1170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTeamPage; });
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
        this.myTeams = [];
        this.currentLength = 0;
        this.hasNoTeams = false;
        this.matches = [];
        this.months = [];
    }
    MyTeamPage.prototype.ionViewDidLoad = function () {
        this.loadTeams();
        this.loadGames();
    };
    MyTeamPage.prototype.loadTeams = function () {
        var _this = this;
        this.myTeamsSub = this.db.list('users/' + this.afAuth.auth.currentUser.uid
            + '/myTeams').subscribe(function (data) {
            if (data.length == 0)
                _this.hasNoTeams = true;
            _this.hasNoTeams = false;
            _this.myTeams = [];
            _this.myTeams = data;
        });
    };
    MyTeamPage.prototype.loadGames = function () {
        var _this = this;
        this.matches = [];
        this.db.list('users/' + this.afAuth.auth.currentUser.uid + '/myTeams/').take(1)
            .subscribe(function (teams) {
            teams.forEach(function (team) {
                _this.db.list('teams/' + team.$key + '/upcomingMatches/').take(1).subscribe(function (matches) {
                    matches.forEach(function (match) {
                        var monthNum = match.date.substring(0, 2);
                        var monthName = __WEBPACK_IMPORTED_MODULE_5_moment__(monthNum, 'MM').format('MMMM');
                        var index = _this.months.map(function (e) { return e.num; }).indexOf(monthNum);
                        if (index == -1)
                            _this.months.push({ name: monthName, num: monthNum });
                        var matchIndex = _this.matches.map(function (e) { return e.$key; }).indexOf(match.$key);
                        if (matchIndex == -1)
                            _this.matches.push(match);
                    });
                });
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
    };
    MyTeamPage.prototype.openMatchRequest = function (request) {
        this.navCtrl.push('MatchPage', { request: request });
    };
    MyTeamPage.prototype.ionViewWillLeave = function () {
        this.myTeamsSub.unsubscribe();
        this.teamDB.unsubscribeAll();
    };
    return MyTeamPage;
}());
MyTeamPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-my-team',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/my-team/my-team.html"*/'<!--\n  Generated template for the MyTeamPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>فريقي</ion-title>\n    <ion-buttons end>\n      <button (click)=\'startTeam()\' ion-button icon-only color="royal">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="اسحب للتحديث" refreshingSpinner="dots" refreshingText="جاري التحديث...">\n\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-item-divider>\n    جميع الفرق المشارك فيها\n  </ion-item-divider>\n  <ion-item-group padding-bottom *ngIf="myTeams?.length > 0 ">\n    <ion-row *ngFor="let team of myTeams">\n      <team-card style="width: 100%" [team]=\'team\'></team-card>\n    </ion-row>\n  </ion-item-group>\n  <div *ngIf="hasNoTeams" text-center>\n    <h4>ماذا تنتظر؟</h4>\n    <button padding ion-button color="orange" (click)="startTeam()">إبدأ فريقك\n    </button>\n  </div>\n  <ion-item-divider>\n    مبارياتي القادمة\n  </ion-item-divider>\n  <ion-list no-margin>\n    <span *ngFor="let month of months">\n    <ion-item-divider class="monthLabel">\n      {{month.name}}\n    </ion-item-divider>\n    <span *ngFor="let match of matches">\n      <ion-item *ngIf="match.date.substring(0, 2) == month.num" class="fixedBorder" (click)="openMatchRequest(match)">\n        <match-item text-center home="{{match.homeTeam}}" away="{{match.awayTeam}}"></match-item>\n        <date text-center requestID="{{match.$key}}" day="true"></date>\n      </ion-item>\n    </span>\n    </span>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/my-team/my-team.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_4__helpers_myTeamDB__["a" /* MyTeamDB */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* AlertController */]])
], MyTeamPage);

//# sourceMappingURL=my-team.js.map

/***/ })

});
//# sourceMappingURL=13.main.js.map