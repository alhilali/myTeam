webpackJsonp([11],{

/***/ 1113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageModule", function() { return PostPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post__ = __webpack_require__(1181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(672);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PostPageModule = (function () {
    function PostPageModule() {
    }
    return PostPageModule;
}());
PostPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__post__["a" /* PostPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__post__["a" /* PostPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__post__["a" /* PostPage */]
        ]
    })
], PostPageModule);

//# sourceMappingURL=post.module.js.map

/***/ }),

/***/ 1181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_social_sharing__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_myTeamDB__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
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
 * Generated class for the PostPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PostPage = (function () {
    function PostPage(navCtrl, navParams, teamDB, afAuth, db, actionSheetCtrl, socialSharing) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teamDB = teamDB;
        this.afAuth = afAuth;
        this.db = db;
        this.actionSheetCtrl = actionSheetCtrl;
        this.socialSharing = socialSharing;
        this.post = {};
        this.comment = '';
        this.post.$key = this.navParams.get('id');
        this.afAuth.auth.onAuthStateChanged(function (user) {
            if (user)
                _this.currentUserID = user.uid;
        });
    }
    PostPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.teamDB.getPostInfo(this.post.$key).then(function (data) {
                            res = data;
                            _this.post = res;
                        })];
                    case 1:
                        _a.sent();
                        this.comments = this.db.list('timeline/' + this.post.$key + '/comments', {
                            query: {
                                orderByChild: 'timestamp'
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PostPage.prototype.sendComment = function () {
        var _this = this;
        var date = __WEBPACK_IMPORTED_MODULE_6_moment__["utc"]().format('YYYY-MM-DD HH:mm:ss');
        var commentKey = this.db.list('timeline/' + this.post.$key + '/comments').push({
            by: this.currentUserID,
            message: this.comment,
            date: date,
            timestamp: new Date().getTime()
        });
        commentKey.then(function () {
            // Notify author
            _this.db.object('users/' + _this.post.by + '/notifications/' + commentKey.key)
                .set({
                player: _this.currentUserID,
                message: _this.comment,
                type: 'postComment',
                postID: _this.post.$key,
                timestamp: new Date().getTime(),
                date: date
            });
            _this.comment = '';
        });
    };
    PostPage.prototype.deleteComment = function (comment) {
        this.db.object('timeline/' + this.post.$key + '/comments/' + comment.$key).remove();
    };
    PostPage.prototype.openPlayer = function (uid) {
        var _this = this;
        this.teamDB.getUserInfo(uid).then(function (data) {
            _this.navCtrl.push('PlayerPage', { username: data.originalUsername });
        });
    };
    PostPage.prototype.options = function () {
        var _this = this;
        var actionSheet;
        var btns;
        if (this.post.by == this.currentUserID) {
            btns = [
                {
                    text: 'مشاركة',
                    handler: function () {
                        _this.socialSharing.share(_this.post.info, _this.post.title, "https://firebasestorage.googleapis.com/v0/b/myteam-29a5b.appspot.com/o/1500455988652%2Fbg.jpg?alt=media&token=88cee9ee-6b3e-4942-a756-99242b5fcbac", "felmel3ab://");
                    }
                },
                {
                    text: 'حذف',
                    role: 'destructive',
                    handler: function () {
                        _this.db.object('timeline/' + _this.post.$key).remove();
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
                    text: 'مشاركة',
                    handler: function () {
                        _this.socialSharing.share(_this.post.info, _this.post.title, "https://firebasestorage.googleapis.com/v0/b/myteam-29a5b.appspot.com/o/1500455988652%2Fbg.jpg?alt=media&token=88cee9ee-6b3e-4942-a756-99242b5fcbac", "felmel3ab://");
                    }
                },
                {
                    text: 'Report',
                    role: 'destructive',
                    handler: function () {
                        _this.db.list('reports/').push(_this.post);
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
    return PostPage;
}());
PostPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPage */])({
        segment: 'post/:id'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-post',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/post/post.html"*/'<!--\n  Generated template for the PostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>التفاصيل</ion-title>\n    <ion-buttons end>\n      <button (click)="options()" ion-button clear icon-only>\n        <ion-icon name="md-more" color="white"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <post [postID]="post.$key" className="postCard">\n  </post>\n  <ion-item-divider>التعليقات</ion-item-divider>\n  <ion-list style="margin-bottom: 48px;" no-margin>\n    <ion-item-sliding *ngFor="let comment of comments | async">\n      <ion-item class="fixedBorder">\n        <ion-row align-items-center>\n          <ion-col col-2 no-padding>\n            <ion-avatar on-tap="openPlayer(comment.by)">\n              <profile-pic ID="{{comment.by}}" type="user"></profile-pic>\n            </ion-avatar>\n          </ion-col>\n          <ion-col col-7 style="margin-right: -12px">\n            <h3 no-margin>\n              <name ID="{{comment.by}}" type="user"></name>\n            </h3>\n            <p no-margin text-right>\n              {{comment.message}}\n            </p>\n          </ion-col>\n          <ion-col col-3>\n            <p style="text-align: end">\n              <date date="{{comment.date}}"></date>\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      <ion-item-options *ngIf="currentUserID == comment.by" side="left">\n        <button (click)="deleteComment(comment)" ion-button icon-only color="danger">\n          <ion-icon name="md-trash"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <ion-row align-items-center dir="rtl" class="bottomBar">\n    <ion-col col-9>\n      <ion-input [(ngModel)]="comment" placeholder="ادخل تعليقك" type="text"></ion-input>\n    </ion-col>\n    <ion-col col-3>\n      <ion-buttons end>\n        <button ion-button (click)="sendComment()" round color="gold" [disabled]="comment.length == 0" small>\n          <ion-icon name="md-checkmark" class="largeIcon" color="green"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/post/post.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__helpers_myTeamDB__["a" /* MyTeamDB */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_0__ionic_native_social_sharing__["a" /* SocialSharing */]])
], PostPage);

//# sourceMappingURL=post.js.map

/***/ })

});
//# sourceMappingURL=11.js.map