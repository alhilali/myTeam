webpackJsonp([18],{

/***/ 1097:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPlayerPageModule", function() { return AddPlayerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_player__ = __webpack_require__(1162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddPlayerPageModule = (function () {
    function AddPlayerPageModule() {
    }
    return AddPlayerPageModule;
}());
AddPlayerPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__add_player__["a" /* AddPlayerPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_player__["a" /* AddPlayerPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__add_player__["a" /* AddPlayerPage */]
        ]
    })
], AddPlayerPageModule);

//# sourceMappingURL=add-player.module.js.map

/***/ }),

/***/ 1162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPlayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_myTeamDB__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators_username__ = __webpack_require__(674);
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
 * Generated class for the AddPlayerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AddPlayerPage = (function () {
    function AddPlayerPage(view, navCtrl, navParams, db, teamDB, _form, unameValid) {
        var _this = this;
        this.view = view;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.teamDB = teamDB;
        this._form = _form;
        this.unameValid = unameValid;
        this.player = {};
        this.user = {};
        this.team = navParams.get('team');
        var usernameValidator = function (control) {
            return unameValid.checkValidUsername(control);
        };
        var teamValidator = function (control) {
            return unameValid.checkTeam(control, _this.team.$key);
        };
        this.requestPlayerForm = _form.group({
            "username": ['',
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('^[a-zA-Z0-9_.-]*$')]),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].composeAsync([usernameValidator, teamValidator])]
        });
    }
    AddPlayerPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    AddPlayerPage.prototype.requestAddPlayer = function (player) {
        return __awaiter(this, void 0, void 0, function () {
            var user, playersList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.teamDB.findUID(player.username.toLowerCase()).then(function (data) {
                            user = data;
                        })];
                    case 1:
                        _a.sent();
                        if (this.requestPlayerForm.valid && user.$key) {
                            // Add request to player
                            this.db.object('/users/' + user.$key + '/requests/' + this.team.$key)
                                .set({
                                teamId: this.team.$key,
                                dateRequested: new Date().toDateString()
                            });
                            playersList = this.db.object('/playersList/' + this.team.$key + '/' + user.$key);
                            playersList.set({ uid: user.$key, status: 'pending' });
                            this.teamDB.unsubscribeAll();
                            this.view.dismiss();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AddPlayerPage.prototype.ionViewWillLeave = function () {
        this.teamDB.unsubscribeAll();
    };
    return AddPlayerPage;
}());
AddPlayerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-player',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/add-player/add-player.html"*/'<!--\n  Generated template for the AddPlayerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button start (click)="closeModal()" ion-button clear icon-only style="height: 22px">\n      <ion-icon color="light" name="close"></ion-icon>\n    </button>\n    <ion-title>اضف لاعب</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card class="card1">\n    <ion-card-header>\n      المعرف الشخصي للاعب الذي تريد اضافته\n    </ion-card-header>\n    <form name="requestPlayerForm" novalidate>\n      <div [formGroup]=\'requestPlayerForm\'>\n        <ion-item dir="ltr">\n          <ion-label>\n            <h1>@</h1></ion-label>\n          <ion-input type="text" [(ngModel)]="player.username" formControlName=\'username\' placeholder="username"></ion-input>\n        </ion-item>\n\n        <ion-row>\n          <ion-col center text-center>\n            <button ion-button color="secondary" (click)="requestAddPlayer(player)" [disabled]="requestPlayerForm.invalid">إضافة\n              <ion-icon padding name="person-add"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n\n        <div padding>\n          <p *ngIf="!requestPlayerForm.controls.username.valid && !requestPlayerForm.controls.username.pending && (requestPlayerForm.controls.username.dirty)" style="color: #ea6153;">\n            {{requestPlayerForm.controls.username.errors.message}}\n          </p>\n          <p *ngIf="requestPlayerForm.controls.username.pending">\n            جاري التأكد من اسم المستخدم...\n          </p>\n        </div>\n\n      </div>\n    </form>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/add-player/add-player.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3__helpers_myTeamDB__["a" /* MyTeamDB */],
        __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_5__validators_username__["a" /* UsernameValidator */]])
], AddPlayerPage);

//# sourceMappingURL=add-player.js.map

/***/ })

});
//# sourceMappingURL=18.js.map