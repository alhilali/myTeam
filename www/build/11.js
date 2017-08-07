webpackJsonp([11],{

/***/ 1097:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestMatchPageModule", function() { return RequestMatchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_match__ = __webpack_require__(1167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RequestMatchPageModule = (function () {
    function RequestMatchPageModule() {
    }
    return RequestMatchPageModule;
}());
RequestMatchPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__request_match__["a" /* RequestMatchPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__request_match__["a" /* RequestMatchPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__request_match__["a" /* RequestMatchPage */]
        ]
    })
], RequestMatchPageModule);

//# sourceMappingURL=request-match.module.js.map

/***/ }),

/***/ 1167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestMatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_myTeamDB__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion2_calendar_dist__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(31);
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
 * Generated class for the RequestMatchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RequestMatchPage = (function () {
    function RequestMatchPage(navCtrl, navParams, view, teamDB, _form, calendarCtrl, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.teamDB = teamDB;
        this._form = _form;
        this.calendarCtrl = calendarCtrl;
        this.toast = toast;
        this.myTeams = [];
        this.matchForm = this._form.group({
            "selectedTeam": ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            "time": ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            "stadium": ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]
        });
        this.awayTeam = navParams.get('team');
        var _date;
        if (navParams.get('givenDate'))
            _date = __WEBPACK_IMPORTED_MODULE_4_moment__(navParams.get('givenDate'), 'MM/DD/YYYY');
        else
            _date = __WEBPACK_IMPORTED_MODULE_4_moment__();
        this.date = _date.format('L');
        this.day = _date.format('ddd');
        this.dateFormated = _date.locale('ar-sa').format('ll') + ' '
            + _date.locale('ar-sa').format('dddd');
    }
    RequestMatchPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.teamDB.getMyTeamsCaptain().then(function (data) {
                            _this.myTeams = data;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RequestMatchPage.prototype.openCalendar = function () {
        var _this = this;
        var _daysConfig = [
            {
                date: new Date(2018, 8, 25),
                subTitle: 'vs Alhilal',
                marked: true
            }
        ];
        this.calendarCtrl.openCalendar({
            title: 'تاريخ المباراة',
            weekdaysTitle: ["الاحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس", "الجمعة", "السبت"],
            cssClass: 'matchCalender',
            closeIcon: true,
            closeLabel: 'close',
            doneLabel: 'md-checkmark',
            doneIcon: true,
            daysConfig: _daysConfig
        })
            .then(function (res) {
            var selectedDate = new Date(res.date.time).toDateString();
            var momentDate = __WEBPACK_IMPORTED_MODULE_4_moment__(selectedDate, 'ddd MMM D YYYY', 'en');
            _this.date = momentDate.format('L');
            _this.day = momentDate.format('dddd');
            _this.dateFormated = momentDate.locale('ar-sa').format('ll') + ' '
                + momentDate.locale('ar-sa').format('dddd');
        })
            .catch(function () {
            console.log("error");
        });
    };
    RequestMatchPage.prototype.sendRequest = function () {
        this.teamDB.sendMatchRequest({
            fromUID: this.selectedTeam.captain,
            toUID: this.awayTeam.captain,
            homeTeam: this.selectedTeam.$key,
            awayTeam: this.awayTeam.$key,
            date: this.date,
            day: this.day,
            time: this.time,
            stadium: this.stadium
        });
        // Succesful toast
        this.toast.create({
            message: 'تم إرسال طلب المباراة بنجاح',
            duration: 2200,
            position: 'top'
        }).present();
        this.view.dismiss();
    };
    RequestMatchPage.prototype.closeModel = function () {
        this.view.dismiss();
    };
    return RequestMatchPage;
}());
RequestMatchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-request-match',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/request-match/request-match.html"*/'<!--\n  Generated template for the RequestMatchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>طلب مباراة مع {{awayTeam.name}}</ion-title>\n    <button start (click)="closeModel()" ion-button clear icon-only style="height: 22px">\n      <ion-icon color="light" name="close"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding-vertical>\n  <ion-row class="padding-top" align-items-stretch text-center>\n    <ion-col pull-1>\n      <button (click)="closeModel()" color="orange" ion-button round small>\n          إلغاء\n        </button>\n    </ion-col>\n    <ion-col push-1>\n      <button [disabled]="matchForm.invalid" (click)="sendRequest()" color="gold" ion-button round small>\n             ارسل\n        </button>\n    </ion-col>\n  </ion-row>\n  <ion-card class="card1">\n    <ion-card-header>\n      طلب مباراة مع {{awayTeam.name}}\n    </ion-card-header>\n    <form name="matchForm" novalidate>\n      <div class="register" [formGroup]=\'matchForm\'>\n        <ion-list>\n          <ion-item>\n            <ion-label>فريقي</ion-label>\n            <ion-select [(ngModel)]="selectedTeam" formControlName="selectedTeam" placeholder="اختر الفريق">\n              <span *ngFor="let team of myTeams">\n                <ion-option *ngIf="team.$key != awayTeam.$key"  [value]="team">{{team.name}}</ion-option>\n              </span>\n            </ion-select>\n          </ion-item>\n\n          <button ion-item (click)="openCalendar()">\n            <ion-row>\n              <ion-col>\n                التاريخ\n              </ion-col>\n              <ion-col text-end>\n                {{dateFormated}}\n              </ion-col>\n            </ion-row>\n          </button>\n          <ion-item>\n            <ion-label>الساعة</ion-label>\n            <ion-datetime dir="ltr" [(ngModel)]="time" formControlName="time" displayFormat="h:mm A">\n            </ion-datetime>\n          </ion-item>\n          <ion-item>\n            <ion-label>الملعب</ion-label>\n            <ion-input type="text" [(ngModel)]="stadium" formControlName="stadium" placeholder="اين ستقام المباراة" value=""></ion-input>\n          </ion-item>\n        </ion-list>\n      </div>\n    </form>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/request-match/request-match.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__helpers_myTeamDB__["a" /* MyTeamDB */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__helpers_myTeamDB__["a" /* MyTeamDB */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_ion2_calendar_dist__["a" /* CalendarController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ion2_calendar_dist__["a" /* CalendarController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */]) === "function" && _g || Object])
], RequestMatchPage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=request-match.js.map

/***/ })

});
//# sourceMappingURL=11.js.map