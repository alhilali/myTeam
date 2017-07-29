webpackJsonp([10],{

/***/ 1108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageModule", function() { return PostPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post__ = __webpack_require__(1173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(675);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__post__["a" /* PostPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__post__["a" /* PostPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__post__["a" /* PostPage */]
        ]
    })
], PostPageModule);

//# sourceMappingURL=post.module.js.map

/***/ }),

/***/ 1173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_myTeamDB__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(59);
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
 * Generated class for the PostPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PostPage = (function () {
    function PostPage(navCtrl, navParams, teamDB, afAuth, db, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teamDB = teamDB;
        this.afAuth = afAuth;
        this.db = db;
        this.actionSheetCtrl = actionSheetCtrl;
        this.authorInfo = {};
        this.comment = '';
        this.post = this.navParams.get('post');
        this.currentUserID = this.afAuth.auth.currentUser.uid;
    }
    PostPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.teamDB.getUserInfo(this.post.by).then(function (data) {
            _this.authorInfo = data;
        });
        this.comments = this.db.list('timeline/' + this.post.$key + '/comments', {
            query: {
                orderByChild: 'timestamp'
            }
        });
    };
    PostPage.prototype.sendComment = function () {
        var _this = this;
        var time = __WEBPACK_IMPORTED_MODULE_5_moment__().format("HH:mm:ss");
        var date = __WEBPACK_IMPORTED_MODULE_5_moment__().format("L");
        this.db.list('timeline/' + this.post.$key + '/comments').push({
            by: this.afAuth.auth.currentUser.uid,
            message: this.comment,
            date: date,
            time: time,
            timestamp: new Date().getTime()
        }).then(function () {
            _this.comment = '';
            // Refresh comment
        });
    };
    PostPage.prototype.deleteComment = function (comment) {
        this.db.object('timeline/' + this.post.$key + '/comments/' + comment.$key).remove();
    };
    PostPage.prototype.options = function () {
        var _this = this;
        var actionSheet;
        var btns;
        if (this.post.by == this.afAuth.auth.currentUser.uid) {
            btns = [
                {
                    text: 'حذف',
                    role: 'destructive',
                    handler: function () {
                        _this.db.object('timeline/' + _this.post.$key).remove();
                        _this.navCtrl.pop();
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
        else {
            btns = [
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-post',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/post/post.html"*/'<!--\n  Generated template for the PostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>التفاصيل</ion-title>\n    <ion-buttons end>\n      <button (click)="options()" ion-button clear icon-only>\n        <ion-icon name="md-more" color="white"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <post [post]="post" className="postCard">\n    <p padding-top>\n      {{post.info}}\n    </p>\n  </post>\n  <ion-item-divider>التعليقات</ion-item-divider>\n  <ion-list no-margin>\n    <ion-item-sliding *ngFor="let comment of comments | async">\n      <ion-item class="fixedBorder">\n        <span item-start>\n        <ion-avatar>\n          <profile-pic ID="{{comment.by}}" type="user"></profile-pic>\n        </ion-avatar>\n      </span>\n        <h3 no-margin>\n          <name ID="{{comment.by}}" type="user"></name>\n        </h3>\n        <p no-margin text-right>\n          {{comment.message}}\n        </p>\n      </ion-item>\n      <ion-item-options *ngIf="currentUserID == comment.by" side="left">\n        <button (click)="deleteComment(comment)" ion-button icon-only color="danger">\n          <ion-icon name="md-trash"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n<ion-footer dir="rtl" class="bottomBar">\n  <ion-row align-items-center>\n    <ion-col col-9>\n      <ion-input [(ngModel)]="comment" placeholder="ادخل تعليقك" type="text"></ion-input>\n    </ion-col>\n    <ion-col col-3>\n      <ion-buttons end>\n        <button ion-button (click)="sendComment()" round color="gold" [disabled]="comment.length == 0" small>\n          <ion-icon name="md-checkmark" class="largeIcon" color="green"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/post/post.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__helpers_myTeamDB__["a" /* MyTeamDB */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ActionSheetController */]])
], PostPage);

//# sourceMappingURL=post.js.map

/***/ })

});
//# sourceMappingURL=10.main.js.map