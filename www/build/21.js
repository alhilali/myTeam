webpackJsonp([21],{

/***/ 1104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComposePageModule", function() { return ComposePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_components_module__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compose__ = __webpack_require__(1177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComposePageModule = (function () {
    function ComposePageModule() {
    }
    return ComposePageModule;
}());
ComposePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__compose__["a" /* ComposePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__compose__["a" /* ComposePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__compose__["a" /* ComposePage */]
        ]
    })
], ComposePageModule);

//# sourceMappingURL=compose.module.js.map

/***/ }),

/***/ 1177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComposePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_myTeamDB__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ion2_calendar_dist__ = __webpack_require__(677);
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
 * Generated class for the ComposePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ComposePage = (function () {
    function ComposePage(navCtrl, navParams, view, _form, db, teamDB, calendarCtrl, alertCtrl, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this._form = _form;
        this.db = db;
        this.teamDB = teamDB;
        this.calendarCtrl = calendarCtrl;
        this.alertCtrl = alertCtrl;
        this.toast = toast;
        this.myTeams = [];
        this.post = {};
        this.date = new Date().toLocaleDateString();
        this.title = '';
        this.info = '';
        this.type = 'general';
        this.month = '';
        this.day = '';
        this.player = this.navParams.get('player');
        this.composeForm = _form.group({
            "title": ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(30),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(1),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            "info": ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(300)])]
        });
        this.matchDate = __WEBPACK_IMPORTED_MODULE_5_moment__().format('L');
        this.month = __WEBPACK_IMPORTED_MODULE_5_moment__().format('MMM');
        this.day = __WEBPACK_IMPORTED_MODULE_5_moment__().format('D');
    }
    ComposePage.prototype.segmentChanged = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.type == 'match')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.teamDB.getMyTeamsCaptain().then(function (data) {
                                _this.myTeams = data;
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ComposePage.prototype.selectTeam = function (team) {
        this.selectedTeam = team;
    };
    ComposePage.prototype.openCalendar = function () {
        var _this = this;
        this.calendarCtrl.openCalendar({
            title: 'تاريخ المباراة',
            weekdaysTitle: ["الاحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس", "الجمعة", "السبت"],
            cssClass: 'matchCalender',
            closeIcon: true,
            closeLabel: 'close',
            doneLabel: 'md-checkmark',
            doneIcon: true
        })
            .then(function (res) {
            var selectedDate = new Date(res.date.time).toDateString();
            var momentDate = __WEBPACK_IMPORTED_MODULE_5_moment__(selectedDate, 'ddd MMM D YYYY', 'en');
            _this.matchDate = momentDate.format('L');
            _this.month = momentDate.format('MMM');
            _this.day = momentDate.format('D');
        })
            .catch(function () {
            console.log("error");
        });
    };
    ComposePage.prototype.submit = function () {
        var _this = this;
        if (this.type == 'match' && !this.selectedTeam) {
            this.showError();
            return;
        }
        this.post.by = this.player.$key;
        this.post.title = this.title;
        this.post.info = this.info;
        this.post.date = __WEBPACK_IMPORTED_MODULE_5_moment__["utc"]().format('YYYY-MM-DD HH:mm:ss');
        this.post.type = this.type;
        this.post.timestamp = new Date().getTime();
        if (this.type == 'match') {
            this.post.teamID = this.selectedTeam.$key;
            this.post.matchDate = this.matchDate;
        }
        this.db.list('timeline/').push(this.post).then(function () {
            _this.toast.create({
                message: 'تم الارسال بنجاح',
                duration: 2200,
                position: 'top'
            }).present();
            _this.view.dismiss({ postDone: true });
        });
    };
    ComposePage.prototype.showError = function () {
        this.alertCtrl.create({
            title: 'خطأ',
            subTitle: 'يجب اختيار فريق',
            buttons: ['حسناً'],
        }).present();
    };
    ComposePage.prototype.closeModal = function () {
        this.view.dismiss({ postDone: false });
    };
    return ComposePage;
}());
ComposePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-compose',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/compose/compose.html"*/'<!--\n  Generated template for the ComposePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons end>\n      <button end (click)="submit()" [disabled]="composeForm.invalid" color="white" ion-button clear>\n        ارسل\n      </button>\n    </ion-buttons>\n    <ion-title>مشاركة جديده</ion-title>\n    <button start (click)="closeModal()" ion-button clear icon-only style="height: 22px">\n      <ion-icon color="light" name="close"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding-vertical>\n  <ion-row class="padding-top" align-items-stretch text-center>\n    <ion-col pull-1>\n      <button (click)="closeModal()" color="orange" ion-button round small>\n          إلغاء\n        </button>\n    </ion-col>\n    <ion-col push-1>\n      <button (click)="submit()" [disabled]="composeForm.invalid" color="gold" ion-button round small>\n            ارسل\n        </button>\n    </ion-col>\n  </ion-row>\n  <ion-card class="card1" style="margin-top: 0; margin-bottom: 0;">\n    <ion-segment class="typeSegment" [(ngModel)]="type" (ionChange)="segmentChanged()" color="orange" mode="md">\n      <ion-segment-button value="general">عام</ion-segment-button>\n      <ion-segment-button value="match">مباريات</ion-segment-button>\n      <ion-segment-button value="player">لاعبين</ion-segment-button>\n    </ion-segment>\n    <form [formGroup]="composeForm">\n      <div *ngIf="type == \'match\' && selectedTeam" style="position: relative; padding: 10px;">\n        <img class="bg" src="{{selectedTeam.bg}}" alt="">\n        <img class="teamLogo" src="{{selectedTeam.logo}}" alt="">\n        <h1 class="teamName">{{selectedTeam.name}}</h1>\n        <div class="teamBar">\n          <team-bar teamID="{{selectedTeam.$key}}"></team-bar>\n        </div>\n      </div>\n      <player-post-card *ngIf="type == \'player\'" playerID="{{player.$key}}"></player-post-card>\n      <ion-item>\n        <ion-avatar item-start>\n          <profile-pic ID="{{player.$key}}" type="user"></profile-pic>\n        </ion-avatar>\n        <h2>{{player.name}}</h2>\n        <p>{{player.originalUsername}}@</p>\n      </ion-item>\n      <ion-card-content>\n        <div padding-bottom>\n          <ion-item>\n            <ion-input no-margin [(ngModel)]="title" style="font-size: large;" placeholder="العنوان" type="text" formControlName="title"></ion-input>\n          </ion-item>\n          <ion-note [ngClass]="{\'red\': (!composeForm.controls.title.valid && composeForm.controls.title.dirty)}" style="position: absolute;"\n            *ngIf="title.length > 0">\n            {{title.length}}/30\n          </ion-note>\n        </div>\n        <hr/>\n        <ion-row *ngIf="type == \'match\' && myTeams?.length > 0">\n          <ion-col col-9>\n            <ion-slides class="teamsList" dir="rtl" slidesPerView="4">\n              <ion-slide *ngFor="let team of myTeams">\n                <img on-tap="selectTeam(team)" class="logo" src="{{team.logo}}" alt="">\n                <div class="card-title">\n                  {{team.name}}\n                </div>\n              </ion-slide>\n            </ion-slides>\n          </ion-col>\n          <ion-col col-3>\n            <div on-tap="openCalendar()" class="icon_calendar">\n              <em></em><em></em>\n              <label>{{month}}</label>\n              <span>{{day}}</span>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-item>\n          <ion-textarea class="infoArea" [(ngModel)]="info" rows="2" placeholder="معلومات اخرى (اختياري)" type="text" formControlName="info"></ion-textarea>\n        </ion-item>\n      </ion-card-content>\n    </form>\n    <ion-row>\n      <ion-col text-center>\n        <ion-note [ngClass]="{\'red\': (!composeForm.controls.info.valid && composeForm.controls.info.dirty)}" *ngIf="info.length > 0">\n          {{info.length}}/300\n        </ion-note>\n      </ion-col>\n      <ion-col>\n\n      </ion-col>\n      <ion-col center text-center>\n        <ion-note>\n          {{date}}\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/compose/compose.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_0__helpers_myTeamDB__["a" /* MyTeamDB */],
        __WEBPACK_IMPORTED_MODULE_6_ion2_calendar_dist__["a" /* CalendarController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ToastController */]])
], ComposePage);

//# sourceMappingURL=compose.js.map

/***/ })

});
//# sourceMappingURL=21.js.map