webpackJsonp([8],{

/***/ 1109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartTeamPageModule", function() { return StartTeamPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__start_team__ = __webpack_require__(1179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StartTeamPageModule = (function () {
    function StartTeamPageModule() {
    }
    return StartTeamPageModule;
}());
StartTeamPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__start_team__["a" /* StartTeamPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__start_team__["a" /* StartTeamPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__start_team__["a" /* StartTeamPage */]
        ]
    })
], StartTeamPageModule);

//# sourceMappingURL=start-team.module.js.map

/***/ }),

/***/ 1179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(31);
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
 * Generated class for the StartTeamPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var StartTeamPage = (function () {
    function StartTeamPage(view, navCtrl, navParams, afAuth, db, _form, toast) {
        this.view = view;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.db = db;
        this._form = _form;
        this.toast = toast;
        this.team = {};
        this.teamForm = this._form.group({
            "name": ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            "city": ["الرياض"]
        });
    }
    StartTeamPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    StartTeamPage.prototype.saveTeam = function (team) {
        var _this = this;
        var newKey = new Date().getTime();
        var ref = this.db.object('/teams/' + newKey);
        var saveSub = this.afAuth.authState.subscribe(function (data) {
            if (data && data.uid) {
                var uid = data.uid;
                ref.set({
                    captain: uid,
                    name: team.name,
                    city: team.city || 'الرياض',
                    logo: 'http://playerleague.it/uploads/club/242d7e5ff1bd143ca11fd4d4b0dd1f8a.png',
                    bg: 'https://www.buscandonomes.com.br/_img/xthumb-default.gif.pagespeed.ic.yQYWf40TN9.png',
                    estDate: new Date().toDateString()
                });
                // Add player to players list DB
                var playersList = _this.db.object('/playersList/' + newKey + '/' + uid);
                playersList.set({ uid: uid, status: 'enrolled' });
                // Add team to user list DB
                _this.db.object('/users/' + uid + '/myTeams/' + newKey)
                    .set({ teamId: newKey, captain: uid });
                saveSub.unsubscribe();
                _this.toast.create({
                    message: 'تم انشاء فريق جديد بنجاح',
                    duration: 2200,
                    dismissOnPageChange: true,
                    position: 'top'
                }).present();
                _this.closeModal();
            }
        });
    };
    return StartTeamPage;
}());
StartTeamPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-start-team',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/start-team/start-team.html"*/'<!--\n  Generated template for the StartTeamPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="closeModal()">إغلاق</button>\n    </ion-buttons>\n    <ion-title>إبدأ فريقك</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding-vertical>\n  <ion-row class="padding-top" align-items-stretch text-center>\n    <ion-col pull-1>\n      <button (click)="closeModal()" color="orange" ion-button round small>\n          إلغاء\n        </button>\n    </ion-col>\n    <ion-col push-1>\n      <button (click)="saveTeam(team)" [disabled]=\'!teamForm.valid\' color="gold" ion-button round small>\n            حفظ\n        </button>\n    </ion-col>\n  </ion-row>\n  <ion-card class="card1">\n    <form name="myForm" novalidate>\n      <ion-list [formGroup]=\'teamForm\'>\n\n\n        <ion-item>\n          <ion-input [(ngModel)]="team.name" name="name" formControlName=\'name\' type="text" placeholder="اسم فريقك" required>\n          </ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>المدينة</ion-label>\n          <ion-select [(ngModel)]="team.city" name="city" formControlName=\'city\' interface=\'popover\'>\n            <ion-option value="الرياض" selected>الرياض</ion-option>\n            <ion-option value="جده">جده</ion-option>\n            <ion-option value="الدمام">الدمام</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </form>\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/start-team/start-team.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */]) === "function" && _g || Object])
], StartTeamPage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=start-team.js.map

/***/ })

});
//# sourceMappingURL=8.js.map