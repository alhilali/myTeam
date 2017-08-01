webpackJsonp([3],{

/***/ 1111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsPageModule", function() { return TermsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms__ = __webpack_require__(1176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TermsPageModule = (function () {
    function TermsPageModule() {
    }
    return TermsPageModule;
}());
TermsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__terms__["a" /* TermsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__terms__["a" /* TermsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__terms__["a" /* TermsPage */]
        ]
    })
], TermsPageModule);

//# sourceMappingURL=terms.module.js.map

/***/ }),

/***/ 1176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
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
 * Generated class for the TermsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TermsPage = (function () {
    function TermsPage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
    }
    TermsPage.prototype.closeModel = function () {
        this.view.dismiss();
    };
    return TermsPage;
}());
TermsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-terms',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/terms/terms.html"*/'<!--\n  Generated template for the TermsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Terms of Use</ion-title>\n    <button start (click)="closeModel()" ion-button clear icon-only style="height: 22px">\n      <ion-icon color="light" name="close"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding="">\n  <img class="AppLogo" src="https://image.ibb.co/ih434a/logo_main_dark.png" alt="">\n  <hr>\n  <p dir="ltr">\n    <strong>Felmal3ab</strong> App End User License Agreement<br clear="all"> This End User License Agreement (“Agreement”)\n    is between you and <strong>Felmal3ab</strong> and governs use of this app made available through the Apple App Store.\n    By installing the <strong>Felmal3ab</strong> App, you agree to be bound by this Agreement and understand that there is\n    no tolerance for objectionable content. If you do not agree with the terms and conditions of this Agreement, you are\n    not entitled to use the <strong>Felmal3ab</strong> App.<br clear="all">\n    <br clear="all"> In order to ensure <strong>Felmal3ab</strong> provides the best experience possible for everyone, we\n    strongly enforce a no tolerance policy for objectionable content. If you see inappropriate content, please use the "Report"\n    feature found under each post. <br clear="all">\n    <br clear="all"> 1. Parties This Agreement is between you and <strong>Felmal3ab</strong> only, and not Apple, Inc. (“Apple”).\n    Notwithstanding the foregoing, you acknowledge that Apple and its subsidiaries are third party beneficiaries of this\n    Agreement and Apple has the right to enforce this Agreement against you. <strong>Felmal3ab</strong>, not Apple, is solely\n    responsible for the <strong>Felmal3ab</strong> App and its content.<br>\n    <br clear="all"> 2. Privacy <strong>Felmal3ab</strong> may collect and use information about your usage of the <strong>Felmal3ab</strong>    App, including certain types of information from and about your device. <strong>Felmal3ab</strong> may use this information,\n    as long as it is in a form that does not personally identify you, to measure the use and performance of the <strong>Felmal3ab</strong>    App.<br>\n    <br clear="all"> 3. Limited License <strong>Felmal3ab</strong> grants you a limited, non-exclusive, non-transferable,\n    revocable license to use the<strong>Felmal3ab</strong> App for your personal, non-commercial purposes. You may only use\n    the\n    <strong>Felmal3ab</strong> App on Apple devices that you own or control and as permitted by the App Store Terms of Service.\n    <br clear="all"><br clear="all"> 4. Age Restrictions By using the <strong>Felmal3ab</strong> App, you represent and warrant\n    that (a) you are 17 years of age or older and you agree to be bound by this Agreement; (b) if you are under 17 years\n    of age, you have obtained verifiable consent from a parent or legal guardian; and (c) your use of the <strong>Felmal3ab</strong>    App does not violate any applicable law or regulation. Your access to the <strong>Felmal3ab</strong> App may be terminated\n    without warning if <strong>Felmal3ab</strong> believes, in its sole discretion, that you are under the age of 17 years\n    and have not obtained verifiable consent from a parent or legal guardian. If you are a parent or legal guardian and you\n    provide your consent to your child\'s use of the <strong>Felmal3ab</strong> App, you agree to be bound by this Agreement\n    in respect to your child\'s use of the <strong>Felmal3ab</strong> App.<br>\n    <br clear="all"> 5. Objectionable Content Policy Content may not be submitted to <strong>Felmal3ab</strong>, who will\n    moderate all content and ultimately decide whether or not to post a submission to the extent such content includes, is\n    in conjunction with, or alongside any, Objectionable Content. Objectionable Content includes, but is not limited to:\n    (i) sexually explicit materials; (ii) obscene, defamatory, libelous, slanderous, violent and/or unlawful content or profanity;\n    (iii) content that infringes upon the rights of any third party, including copyright, trademark, privacy, publicity or\n    other personal or proprietary right, or that is deceptive or fraudulent; (iv) content that promotes the use or sale of\n    illegal or regulated substances, tobacco products, ammunition and/or firearms; and (v) gambling, including without limitation,\n    any online casino, sports books, bingo or poker.<br>\n    <br clear="all"> 6. Warranty <strong>Felmal3ab</strong> disclaims all warranties about the <strong>Felmal3ab</strong>    App to the fullest extent permitted by law. To the extent any warranty exists under law that cannot be disclaimed, <strong>Felmal3ab</strong>,\n    not Apple, shall be solely responsible for such warranty.<br>\n    <br clear="all"> 7. Maintenance and Support <strong>Felmal3ab</strong> does provide minimal maintenance or support for\n    it but not to the extent that any maintenance or support is required by applicable law, <strong>Felmal3ab</strong>, not\n    Apple, shall be obligated to furnish any such maintenance or support.<br>\n    <br clear="all"> 8. Product Claims <strong>Felmal3ab</strong>, not Apple, is responsible for addressing any claims by\n    you relating to the <strong>Felmal3ab</strong> App or use of it, including, but not limited to: (i) any product liability\n    claim; (ii) any claim that the <strong>Felmal3ab</strong> App fails to conform to any applicable legal or regulatory\n    requirement; and (iii) any claim arising under consumer protection or similar legislation. Nothing in this Agreement\n    shall be deemed an admission that you may have such claims.<br>\n    <br clear="all"> 9. Third Party Intellectual Property Claims <strong>Felmal3ab</strong> shall not be obligated to indemnify\n    or defend you with respect to any third party claim arising out or relating to the <strong>Felmal3ab</strong> App. To\n    the extent <strong>Felmal3ab</strong> is required to provide indemnification by applicable law, <strong>Felmal3ab</strong>,\n    not Apple, shall be solely responsible for the investigation, defense, settlement and discharge of any claim that the\n    <strong>Felmal3ab</strong> App or your use of it infringes any third party intellectual property right.<br clear="all"></p>\n</ion-content>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/terms/terms.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
], TermsPage);

//# sourceMappingURL=terms.js.map

/***/ })

});
//# sourceMappingURL=3.js.map