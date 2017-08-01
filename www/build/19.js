webpackJsonp([19],{

/***/ 1098:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPlayerToTeamPageModule", function() { return AddPlayerToTeamPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_player_to_team__ = __webpack_require__(1163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddPlayerToTeamPageModule = (function () {
    function AddPlayerToTeamPageModule() {
    }
    return AddPlayerToTeamPageModule;
}());
AddPlayerToTeamPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__add_player_to_team__["a" /* AddPlayerToTeamPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_player_to_team__["a" /* AddPlayerToTeamPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__add_player_to_team__["a" /* AddPlayerToTeamPage */]
        ]
    })
], AddPlayerToTeamPageModule);

//# sourceMappingURL=add-player-to-team.module.js.map

/***/ }),

/***/ 1163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPlayerToTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_myTeamDB__ = __webpack_require__(38);
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
 * Generated class for the AddPlayerToTeamPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AddPlayerToTeamPage = (function () {
    function AddPlayerToTeamPage(navCtrl, navParams, view, teamDB, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.teamDB = teamDB;
        this.alertCtrl = alertCtrl;
        this.myTeams = [];
        this.teamsSelected = [];
        this.error = false;
    }
    AddPlayerToTeamPage.prototype.ionViewDidLoad = function () {
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
    AddPlayerToTeamPage.prototype.updateTeamsSelected = function (team) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        index = this.teamsSelected.indexOf(team);
                        return [4 /*yield*/, this.teamDB.checkTeamPlayers(team.$key, this.navParams.get('player').$key).then(function (data) {
                                if (data && index < 0) {
                                    _this.presentAlert(team.name);
                                }
                            })];
                    case 1:
                        _a.sent();
                        if (index > -1)
                            this.teamsSelected.splice(index, 1);
                        else
                            this.teamsSelected.push(team);
                        // No teams selected then disable button
                        if (this.teamsSelected.length == 0)
                            this.error = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    AddPlayerToTeamPage.prototype.requestAddPlayer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var playerID, _loop_1, this_1, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.error = false;
                        playerID = this.navParams.get('player').$key;
                        _loop_1 = function (i) {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this_1.teamDB.checkTeamPlayers(this_1.teamsSelected[i].$key, playerID).then(function (data) {
                                            if (data) {
                                                _this.presentAlert(_this.teamsSelected[i].name);
                                                _this.error = true;
                                            }
                                        })];
                                    case 1:
                                        _a.sent();
                                        if (!this_1.error)
                                            this_1.teamDB.sendRequestToPlayer(playerID, this_1.teamsSelected[i].$key);
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.teamsSelected.length)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1(i)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        if (this.teamsSelected.length == 0)
                            this.alert();
                        else if (!this.error)
                            this.view.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddPlayerToTeamPage.prototype.presentAlert = function (teamName) {
        var alert = this.alertCtrl.create({
            title: 'خطأ',
            subTitle: 'سبق وتم اضافة اللاعب في فريق ' + teamName + "، الرجاء ازالة اختيار الفريق لإتمام العملية",
            buttons: ['حسناً']
        });
        alert.present();
    };
    AddPlayerToTeamPage.prototype.alert = function () {
        var alert = this.alertCtrl.create({
            title: 'خطأ',
            subTitle: "الرجاء اختيار فريق واحد على الأقل",
            buttons: ['حسناً']
        });
        alert.present();
    };
    AddPlayerToTeamPage.prototype.closeModel = function () {
        this.view.dismiss();
    };
    return AddPlayerToTeamPage;
}());
AddPlayerToTeamPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-player-to-team',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/add-player-to-team/add-player-to-team.html"*/'<!--\n  Generated template for the AddPlayerToTeamPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>طلب اضافة لاعب</ion-title>\n    <button start (click)="closeModel()" ion-button clear icon-only style="height: 22px">\n      <ion-icon color="light" name="close"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card class="card1">\n    <ion-card-header>\n      اختر الفريق الذي ترغب بإضافة اللاعب اليه\n    </ion-card-header>\n    <ion-item-group class="teamsList" *ngIf="myTeams?.length > 0 ">\n      <ion-slides pager dir="rtl" slidesPerView="3">\n        <ion-slide *ngFor="let team of myTeams">\n          <ion-checkbox item-start checked="false" (ionChange)="updateTeamsSelected(team)"></ion-checkbox>\n          <ion-card class="card1 teamCard">\n            <img src="https://cdn-arkquizzstoragelive.akamaized.net/cdn/1310e09e-7d5e-4efd-97a0-ebf63d923da0_manu.png">\n            <h2 text-center>{{team.name}}</h2>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </ion-item-group>\n    <p text-center>\n      <button padding ion-button color="secondary" (click)="requestAddPlayer()">إرسال الإضافة\n        <ion-icon padding name="person-add"></ion-icon>\n      </button>\n    </p>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/add-player-to-team/add-player-to-team.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__helpers_myTeamDB__["a" /* MyTeamDB */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], AddPlayerToTeamPage);

//# sourceMappingURL=add-player-to-team.js.map

/***/ })

});
//# sourceMappingURL=19.js.map