webpackJsonp([13],{

/***/ 1113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageModule", function() { return PostPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post__ = __webpack_require__(1183);
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

/***/ 1183:
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
    function PostPage(navCtrl, navParams, teamDB, afAuth, db, actionSheetCtrl, socialSharing, alertCtrl, events, toast) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teamDB = teamDB;
        this.afAuth = afAuth;
        this.db = db;
        this.actionSheetCtrl = actionSheetCtrl;
        this.socialSharing = socialSharing;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.toast = toast;
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
                            if (!_this.post.by)
                                _this.postNotFound();
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
    PostPage.prototype.postNotFound = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'خطأ',
            subTitle: 'يبدو ان المشاركة محذوفة',
            buttons: [{
                    text: 'حسناً',
                    handler: function () {
                        var redirect;
                        if (_this.navCtrl.getPrevious())
                            redirect = _this.navCtrl.getPrevious();
                        else
                            redirect = 'HomePage';
                        _this.navCtrl.setRoot(redirect);
                    }
                }]
        });
        alert.present();
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
        // Remove notigication
        this.db.object('users/' + this.post.by + '/notifications/' + comment.$key).remove();
        // Remove comment
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
                        _this.events.publish('post:deleted', _this.post.$key);
                        _this.db.object('timeline/' + _this.post.$key).remove();
                        _this.toast.create({
                            message: 'تم حذف المشاركة',
                            duration: 2200,
                            position: 'top',
                            cssClass: 'failure'
                        }).present();
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
        segment: 'post/:id',
        defaultHistory: ['PostPage', 'HomePage']
    }),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-post',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/post/post.html"*/'<!--\n  Generated template for the PostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>التفاصيل</ion-title>\n    <ion-buttons end>\n      <button (click)="options()" ion-button clear icon-only>\n        <ion-icon name="md-more" color="white"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <post [postID]="post.$key" className="postCard">\n  </post>\n  <h5 padding-horizontal text-start>\n    التعليقات\n  </h5>\n  <hr no-margin>\n  <h6 *ngIf="(comments | async)?.length == 0" text-center>\n    كن اول من يعلق\n  </h6>\n  <ion-list style="margin-bottom: 128px;" no-margin>\n    <ion-item-sliding *ngFor="let comment of comments | async">\n      <ion-item>\n        <ion-avatar on-tap="openPlayer(comment.by)" item-start>\n          <profile-pic ID="{{comment.by}}" type="user"></profile-pic>\n        </ion-avatar>\n        <h3>\n          <name ID="{{comment.by}}" type="user"></name>\n        </h3>\n        <date id="date" date="{{comment.date}}"></date>\n        <h5 text-right>\n          {{comment.message}}\n        </h5>\n      </ion-item>\n      <ion-item-options *ngIf="currentUserID == comment.by" side="left" (ionSwipe)="deleteComment(comment)">\n        <button (click)="deleteComment(comment)" ion-button expandable icon-only color="danger">\n          <ion-icon name="md-trash"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <ion-row align-items-center dir="rtl" class="bottomBar">\n    <ion-col col-9>\n      <ion-input [(ngModel)]="comment" placeholder="ادخل تعليقك" type="text"></ion-input>\n    </ion-col>\n    <ion-col col-3>\n      <ion-buttons end>\n        <button ion-button (click)="sendComment()" round color="gold" [disabled]="comment.length == 0" small>\n          <ion-icon name="md-checkmark" class="largeIcon" color="green"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/post/post.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__helpers_myTeamDB__["a" /* MyTeamDB */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__helpers_myTeamDB__["a" /* MyTeamDB */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__ionic_native_social_sharing__["a" /* SocialSharing */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ionic_native_social_sharing__["a" /* SocialSharing */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ToastController */]) === "function" && _k || Object])
], PostPage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=post.js.map

/***/ })

});
//# sourceMappingURL=13.js.map