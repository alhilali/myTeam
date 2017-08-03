webpackJsonp([7],{

/***/ 1116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(1182);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchPageModule = (function () {
    function SearchPageModule() {
    }
    return SearchPageModule;
}());
SearchPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]
        ]
    })
], SearchPageModule);

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 1182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
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
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.type = 'teams';
        this.query = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.searchTeams();
    }
    SearchPage.prototype.searchTeams = function () {
        this.items = this.db.list('teams/', {
            query: {
                orderByChild: 'name',
                startAt: this.query,
                limitToFirst: 5
            }
        });
    };
    SearchPage.prototype.searchPlayers = function () {
        this.items = this.db.list('users/', {
            query: {
                orderByChild: 'username',
                startAt: this.query,
                limitToFirst: 5
            }
        });
    };
    SearchPage.prototype.getItems = function (ev) {
        // set val to the value of the searchbar
        var query = ev.target.value;
        if (query && this.type == 'players')
            query = query.toLowerCase();
        if (query)
            this.query.next(query);
    };
    SearchPage.prototype.open = function (item) {
        if (this.type == 'teams')
            this.navCtrl.push('TeamPage', { id: item.$key });
        else if (this.type == 'players')
            this.navCtrl.push('PlayerPage', { username: item.originalUsername });
    };
    SearchPage.prototype.segmentChanged = function (ev) {
        this.queryString = '';
        if (ev.value == 'teams')
            this.searchTeams();
        if (ev.value == 'players')
            this.searchPlayers();
        //this.query.next(this.queryString)
    };
    SearchPage.prototype.onClear = function (event) {
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/search/search.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-searchbar [(ngModel)]="queryString" (ionInput)="getItems($event)" placeholder=\'بحث\'></ion-searchbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-segment color="orange" mode="md" [(ngModel)]="type" (ionChange)="segmentChanged($event)">\n    <ion-segment-button value="teams">\n      فريق\n    </ion-segment-button>\n    <ion-segment-button value="players">\n      لاعب\n    </ion-segment-button>\n  </ion-segment>\n  <ion-list *ngIf="queryString && queryString.length>0">\n    <button ion-item clear *ngFor="let item of items | async" (click)="open(item)">\n      <ion-row>\n          <ion-avatar padding-right>\n            <img *ngIf="type == \'players\'" src="{{item.profilePic}}" alt="">\n            <img *ngIf="type == \'teams\'" src="{{item.logo}}" alt="">\n          </ion-avatar>\n          <h2 style="margin: 0 0 8px;" id="itemInfo" margin-bottom>{{ item.name }}</h2>\n          <p *ngIf="type == \'players\'" color="orange">&nbsp;{{item.username}}@</p>\n          <p *ngIf="type == \'teams\'" color="orange">&nbsp;{{item.city}}</p>\n      </ion-row>\n    </button>\n  </ion-list>\n  <p text-center *ngIf=\'((items | async)?.length == 0) && queryString && (queryString.length != 0)\'>\n    لا يوجد نتائج\n  </p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/search/search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=7.js.map