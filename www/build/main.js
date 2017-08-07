webpackJsonp([22],{

/***/ 1093:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyDfhBMtNNoqLVWO91UMRkriwCHMVstN1Fw",
    authDomain: "myteam-29a5b.firebaseapp.com",
    databaseURL: "https://myteam-29a5b.firebaseio.com",
    projectId: "myteam-29a5b",
    storageBucket: "myteam-29a5b.appspot.com",
    messagingSenderId: "1091890097761"
};
//# sourceMappingURL=app.firebase.config.js.map

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 223;

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-player-to-team/add-player-to-team.module": [
		1099,
		21
	],
	"../pages/add-player/add-player.module": [
		1098,
		20
	],
	"../pages/choose-username/choose-username.module": [
		1100,
		19
	],
	"../pages/compose/compose.module": [
		1101,
		18
	],
	"../pages/edit-profile/edit-profile.module": [
		1102,
		1
	],
	"../pages/edit-team/edit-team.module": [
		1103,
		0
	],
	"../pages/home/home.module": [
		1104,
		17
	],
	"../pages/login/login.module": [
		1106,
		16
	],
	"../pages/match/match.module": [
		1107,
		15
	],
	"../pages/my-team/my-team.module": [
		1110,
		3
	],
	"../pages/notification/notification.module": [
		1111,
		2
	],
	"../pages/player/player.module": [
		1112,
		14
	],
	"../pages/post/post.module": [
		1113,
		13
	],
	"../pages/register/register.module": [
		1115,
		12
	],
	"../pages/request-match/request-match.module": [
		1097,
		11
	],
	"../pages/search/search.module": [
		1116,
		10
	],
	"../pages/settings/settings.module": [
		1117,
		9
	],
	"../pages/start-team/start-team.module": [
		1109,
		8
	],
	"../pages/tabs/tabs.module": [
		1108,
		7
	],
	"../pages/team/team.module": [
		1118,
		6
	],
	"../pages/terms/terms.module": [
		1114,
		5
	],
	"../pages/welcome/welcome.module": [
		1105,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 266;

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTeamDB; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
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




var MyTeamDB = (function () {
    function MyTeamDB(db, afAuth) {
        var _this = this;
        this.db = db;
        this.afAuth = afAuth;
        this.loggedIn = false;
        this.userInfo = {};
        this.afAuth.auth.onAuthStateChanged(function (user) {
            if (user) {
                _this.userInfo = user;
                _this.loggedIn = true;
            }
            else
                _this.loggedIn = false;
        });
    }
    MyTeamDB.prototype.findUID = function (username) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.list('users/', {
                query: {
                    orderByChild: 'username',
                    equalTo: username.toLowerCase()
                }
            }).take(1).subscribe(function (data) {
                if (data && data.length > 0)
                    resolve(data[0]);
                else
                    resolve(null);
            });
        });
    };
    MyTeamDB.prototype.findEmail = function (username) {
        var _this = this;
        if (this.usernamesSub)
            this.usernamesSub.unsubscribe();
        return new Promise(function (resolve) {
            var users = _this.db.list('usernames/', {
                query: {
                    orderByKey: true,
                    equalTo: username.toLowerCase()
                }
            });
            _this.usernamesSub = users.subscribe(function (data) {
                if (data[0])
                    resolve(data[0].email);
                else
                    resolve(null);
                _this.usernamesSub.unsubscribe();
            });
        });
    };
    MyTeamDB.prototype.getUserInfo = function (uid) {
        var _this = this;
        return new Promise(function (resolve) {
            var userInfo = _this.db.object('users/' + uid)
                .take(1).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    MyTeamDB.prototype.getTeamPlayers = function (teamId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.list('/playersList/' + teamId)
                .take(1).subscribe(function (data) {
                if (data && data.length >= 1)
                    resolve(data);
            });
        });
    };
    MyTeamDB.prototype.getMyTeamsIds = function (userId) {
        var _this = this;
        if (this.myTeamsSub)
            this.myTeamsSub.unsubscribe();
        return new Promise(function (resolve) {
            var myTeams = _this.db.list('/users/' + userId + '/myTeams/');
            _this.myTeamsSub = myTeams.subscribe(function (data) {
                resolve(data);
                _this.myTeamsSub.unsubscribe();
            });
        });
    };
    MyTeamDB.prototype.getMyTeams = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var myTeams = [];
            _this.db.list('users/' + _this.afAuth.auth.currentUser.uid
                + '/myTeams').take(1).subscribe(function (data) {
                if (data.length == 0)
                    resolve(null);
                var i = 0;
                for (i = 0; i < data.length; i++) {
                    _this.db.object('teams/' + data[i].teamId).take(1).subscribe(function (teamInfo) {
                        myTeams.push(teamInfo);
                    });
                    if (i == data.length - 1)
                        resolve(myTeams);
                }
            });
        });
    };
    MyTeamDB.prototype.getMyTeamsCaptain = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var myTeams = [];
            var teams = _this.db.list('teams/', {
                query: {
                    orderByChild: 'captain',
                    equalTo: _this.afAuth.auth.currentUser.uid
                }
            });
            teams.take(1).subscribe(function (data) {
                if (data.length == 0)
                    resolve(null);
                var i = 0;
                for (i = 0; i < data.length; i++) {
                    _this.db.object('teams/' + data[i].$key).take(1).subscribe(function (teamInfo) {
                        myTeams.push(teamInfo);
                    });
                    if (i == data.length - 1)
                        resolve(myTeams);
                }
            });
        });
    };
    MyTeamDB.prototype.getRequestsId = function (userId) {
        var _this = this;
        if (this.reqSub)
            this.reqSub.unsubscribe();
        return new Promise(function (resolve) {
            var myTeams = _this.db.list('/users/' + userId + '/requests/');
            _this.reqSub = myTeams.subscribe(function (data) {
                resolve(data);
                _this.reqSub.unsubscribe();
            });
        });
    };
    MyTeamDB.prototype.getRequests = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var requests, myRequestsInfo, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRequestsId(userId).then(function (data) {
                            requests = data;
                        })];
                    case 1:
                        _a.sent();
                        myRequestsInfo = [];
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < requests.length)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.gettTeamInfo(requests[i].$key).then(function (data) {
                                myRequestsInfo.push(data);
                            })];
                    case 3:
                        _a.sent();
                        if (i == requests.length - 1) {
                            return [2 /*return*/, new Promise(function (resolve) {
                                    resolve(myRequestsInfo);
                                })];
                        }
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MyTeamDB.prototype.getTeamInfo = function (teamId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.object('teams/' + teamId)
                .take(1).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    MyTeamDB.prototype.gettTeamInfo = function (teamId) {
        var _this = this;
        if (this.teammInfoSub)
            this.teammInfoSub.unsubscribe();
        var teamInfo = this.db.object('teams/' + teamId);
        return new Promise(function (resolve) {
            _this.teammInfoSub = teamInfo.subscribe(function (data) {
                resolve(data);
                _this.teammInfoSub.unsubscribe();
            });
        });
    };
    MyTeamDB.prototype.sendRequestToPlayer = function (playerID, teamID) {
        // Add request to player
        this.db.list('/users/' + playerID + '/requests/')
            .push({
            teamID: teamID,
            dateRequested: __WEBPACK_IMPORTED_MODULE_3_moment__["utc"]().format('YYYY-MM-DD HH:mm:ss'),
            timestamp: new Date().getTime(),
            type: 'teamRequest'
        });
        // Add player to playersList temporary
        var playersList = this.db.object('/playersList/' + teamID + '/' + playerID);
        playersList.set({ uid: playerID, status: 'pending' });
    };
    MyTeamDB.prototype.checkTeamPlayers = function (teamId, playerID) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.db.list('playersList/' + teamId, {
                            query: {
                                orderByChild: 'uid',
                                equalTo: playerID
                            }
                        }).take(1).subscribe(function (data) {
                            if (data.length > 0)
                                resolve({ "message": "اللاعب متواجد في الفريق حالياً" });
                            else
                                resolve(null);
                        });
                    })];
            });
        });
    };
    MyTeamDB.prototype.sendMatchRequest = function (matchInfo) {
        var matchKey = this.db.list('matches/').push({
            fromUID: matchInfo.fromUID,
            toUID: matchInfo.toUID,
            homeTeam: matchInfo.homeTeam,
            awayTeam: matchInfo.awayTeam,
            date: matchInfo.date,
            day: matchInfo.day,
            time: matchInfo.time,
            stadium: matchInfo.stadium,
            dateRequested: __WEBPACK_IMPORTED_MODULE_3_moment__["utc"]().format('YYYY-MM-DD HH:mm:ss'),
            status: 'pending'
        }).key;
        var ref = this.db.object('users/' + matchInfo.toUID + '/requests/' + matchKey);
        var info = {
            matchID: matchKey,
            fromUID: matchInfo.fromUID,
            homeTeam: matchInfo.homeTeam,
            timestamp: new Date().getTime(),
            type: 'matchRequest'
        };
        ref.set(info);
    };
    MyTeamDB.prototype.getTeamHomeGames = function (teamID) {
        var _this = this;
        return new Promise(function (resolve) {
            var games = [];
            var ref = _this.db.list("/matches/", {
                query: {
                    orderByChild: 'homeTeam',
                    equalTo: teamID
                }
            }).take(1).subscribe(function (request) {
                if (request.length == 0)
                    resolve(null);
                var _loop_1 = function (i) {
                    if (request[i].status != 'pending') {
                        _this.db.object('teams/' + request[i].awayTeam)
                            .take(1).subscribe(function (data) {
                            games.push({ requestInfo: request[i], teamInfo: data });
                        });
                    }
                    if (i == request.length - 1)
                        resolve(games);
                };
                for (var i = 0; i < request.length; i++) {
                    _loop_1(i);
                }
            });
        });
    };
    MyTeamDB.prototype.getTeamAwayGames = function (teamID) {
        var _this = this;
        return new Promise(function (resolve) {
            var games = [];
            var ref = _this.db.list("/matches/", {
                query: {
                    orderByChild: 'awayTeam',
                    equalTo: teamID
                }
            }).take(1).subscribe(function (request) {
                if (request.length == 0)
                    resolve(null);
                var _loop_2 = function (i) {
                    if (request[i].status != 'pending') {
                        _this.db.object('teams/' + request[i].awayTeam)
                            .take(1).subscribe(function (data) {
                            games.push({ requestInfo: request[i], teamInfo: data });
                        });
                    }
                    if (i == request.length - 1)
                        resolve(games);
                };
                for (var i = 0; i < request.length; i++) {
                    _loop_2(i);
                }
            });
        });
    };
    MyTeamDB.prototype.getAllGames = function (teamID) {
        var _this = this;
        return new Promise(function (resolve) {
            var games = [];
            var ref = _this.db.list("/matches/")
                .take(1).subscribe(function (request) {
                if (request.length == 0)
                    resolve(null);
                var _loop_3 = function (i) {
                    if (request[i].status != 'pending' && request[i].homeTeam == teamID) {
                        _this.db.object('teams/' + request[i].awayTeam)
                            .take(1).subscribe(function (data) {
                            games.push({ requestInfo: request[i], teamInfo: data, home: true });
                        });
                    }
                    if (request[i].status != 'pending' && request[i].awayTeam == teamID) {
                        _this.db.object('teams/' + request[i].homeTeam)
                            .take(1).subscribe(function (data) {
                            games.push({ requestInfo: request[i], teamInfo: data, home: false });
                        });
                    }
                    if (i == request.length - 1)
                        resolve(games);
                };
                for (var i = 0; i < request.length; i++) {
                    _loop_3(i);
                }
            });
        });
    };
    MyTeamDB.prototype.getAllPosts = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var ref = _this.db.list("timeline/", {
                query: {
                    orderByChild: 'timestamp'
                }
            })
                .take(1).subscribe(function (posts) {
                resolve(posts);
            });
        });
    };
    MyTeamDB.prototype.getPosts = function (type) {
        var _this = this;
        return new Promise(function (resolve) {
            var ref = _this.db.list("timeline/", {
                query: {
                    orderByChild: 'timestamp'
                }
            })
                .take(1).subscribe(function (posts) {
                var postsArray = [];
                for (var i = 0; i < posts.length; i++) {
                    var postInfo = posts[i];
                    if (postInfo.type == type)
                        postsArray.push(postInfo);
                    if (i == posts.length - 1)
                        resolve(postsArray);
                }
            });
        });
    };
    MyTeamDB.prototype.getCommentsNum = function (postID) {
        var _this = this;
        return new Promise(function (resolve) {
            var ref = _this.db.list('timeline/' + postID + '/comments/')
                .take(1).subscribe(function (comments) {
                resolve(comments.length);
            });
        });
    };
    MyTeamDB.prototype.getLikesNum = function (postID) {
        var _this = this;
        return new Promise(function (resolve) {
            var ref = _this.db.list('timeline/' + postID + '/likes/')
                .take(1).subscribe(function (likes) {
                resolve(likes.length);
            });
        });
    };
    MyTeamDB.prototype.like = function (postID) {
        this.db.list('timeline/' + postID + '/likes/').push({ id: this.afAuth.auth.currentUser.uid });
    };
    MyTeamDB.prototype.unlike = function (postID) {
        var _this = this;
        this.db.list('timeline/' + postID + '/likes/', {
            query: {
                orderByChild: 'id',
                equalTo: this.afAuth.auth.currentUser.uid
            }
        })
            .take(1).subscribe(function (like) {
            _this.db.object('timeline/' + postID + '/likes/' + like[0].$key).remove();
        });
    };
    MyTeamDB.prototype.likeOrNot = function (postID) {
        var _this = this;
        return new Promise(function (resolve) {
            var ref = _this.db.list('timeline/' + postID + '/likes/', {
                query: {
                    orderByChild: 'id',
                    equalTo: _this.afAuth.auth.currentUser.uid
                }
            })
                .take(1).subscribe(function (likes) {
                if (likes.length > 0)
                    resolve(true);
                else
                    resolve(false);
            });
        });
    };
    MyTeamDB.prototype.getLoggedInUser = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.afAuth.auth.onAuthStateChanged(function (user) {
                if (user)
                    resolve(user.uid);
                else
                    resolve(null);
            });
        });
    };
    MyTeamDB.prototype.getPostInfo = function (postID) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.object('timeline/' + postID).take(1).subscribe(function (data) {
                if (data)
                    resolve(data);
                else
                    resolve(null);
            });
        });
    };
    MyTeamDB.prototype.getMatchInfo = function (matchID) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.object('matches/' + matchID).take(1).subscribe(function (data) {
                if (data)
                    resolve(data);
                else
                    resolve(null);
            });
        });
    };
    MyTeamDB.prototype.ionViewWillLeave = function () {
        this.unsubscribeAll();
    };
    MyTeamDB.prototype.unsubscribeAll = function () {
        if (this.reqSub)
            this.reqSub.unsubscribe();
        if (this.usrInfoSub)
            this.usrInfoSub.unsubscribe();
        if (this.usersSub)
            this.usersSub.unsubscribe();
        if (this.teamInfoSub)
            this.teamInfoSub.unsubscribe();
        if (this.teamPlayersSub)
            this.teamPlayersSub.unsubscribe();
        if (this.myTeamsSub)
            this.myTeamsSub.unsubscribe();
        if (this.teammInfoSub)
            this.teammInfoSub.unsubscribe();
    };
    return MyTeamDB;
}());
MyTeamDB = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
], MyTeamDB);

//# sourceMappingURL=myTeamDB.js.map

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player_post_card_player_post_card__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_bar_player_bar__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_bar_team_bar__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_pic_profile_pic__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__date_date__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_post__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shrinking_segment_header_shrinking_segment_header__ = __webpack_require__(768);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__team_card_team_card__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__match_item_match_item__ = __webpack_require__(770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__name_name__ = __webpack_require__(771);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__profile_pic_profile_pic__["a" /* ProfilePicComponent */],
            __WEBPACK_IMPORTED_MODULE_6__date_date__["a" /* DateComponent */],
            __WEBPACK_IMPORTED_MODULE_7__post_post__["a" /* PostComponent */],
            __WEBPACK_IMPORTED_MODULE_9__team_card_team_card__["a" /* TeamCardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__match_item_match_item__["a" /* MatchItemComponent */],
            __WEBPACK_IMPORTED_MODULE_11__name_name__["a" /* NameComponent */],
            __WEBPACK_IMPORTED_MODULE_2__team_bar_team_bar__["a" /* TeamBarComponent */],
            __WEBPACK_IMPORTED_MODULE_1__player_bar_player_bar__["a" /* PlayerBarComponent */],
            __WEBPACK_IMPORTED_MODULE_0__player_post_card_player_post_card__["a" /* PlayerPostCardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__shrinking_segment_header_shrinking_segment_header__["a" /* ShrinkingSegmentHeader */]
        ],
        imports: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* IonicModule */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__profile_pic_profile_pic__["a" /* ProfilePicComponent */],
            __WEBPACK_IMPORTED_MODULE_6__date_date__["a" /* DateComponent */],
            __WEBPACK_IMPORTED_MODULE_7__post_post__["a" /* PostComponent */],
            __WEBPACK_IMPORTED_MODULE_9__team_card_team_card__["a" /* TeamCardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__match_item_match_item__["a" /* MatchItemComponent */],
            __WEBPACK_IMPORTED_MODULE_11__name_name__["a" /* NameComponent */],
            __WEBPACK_IMPORTED_MODULE_2__team_bar_team_bar__["a" /* TeamBarComponent */],
            __WEBPACK_IMPORTED_MODULE_1__player_bar_player_bar__["a" /* PlayerBarComponent */],
            __WEBPACK_IMPORTED_MODULE_0__player_post_card_player_post_card__["a" /* PlayerPostCardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__shrinking_segment_header_shrinking_segment_header__["a" /* ShrinkingSegmentHeader */]
        ]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsernameValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
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



var UsernameValidator = (function () {
    function UsernameValidator(db, teamDB) {
        this.db = db;
        this.teamDB = teamDB;
        this.valid = false;
    }
    UsernameValidator.prototype.checkUsername = function (control) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.list('usernames/', {
                query: {
                    orderByKey: true,
                    equalTo: control.value.toLowerCase()
                }
            }).subscribe(function (data) {
                if (data.length > 0) {
                    resolve({
                        "username taken": true
                    });
                }
                else
                    resolve(null);
            });
        });
    };
    UsernameValidator.prototype.checkEditUsername = function (control, currentUsername) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.list('usernames/', {
                query: {
                    orderByKey: true,
                    equalTo: control.value.toLowerCase()
                }
            }).subscribe(function (data) {
                if (data.length > 0 && currentUsername != data[0].$key) {
                    resolve({
                        "username taken": true
                    });
                }
                else
                    resolve(null);
            });
        });
    };
    UsernameValidator.prototype.checkTeam = function (control, teamId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.teamDB.findUID(control.value.toLowerCase()).then(function (data) {
                            user = data;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve) {
                                if (user) {
                                    _this.db.list('playersList/' + teamId, {
                                        query: {
                                            orderByChild: 'uid',
                                            equalTo: user.$key
                                        }
                                    }).take(1).subscribe(function (data) {
                                        if (data.length > 0) {
                                            if (data[0].status == 'enrolled')
                                                resolve({ "message": "اللاعب متواجد في الفريق حالياً" });
                                            else
                                                resolve({ "message": "اللاعب لم يقبل الإضافة بعد" });
                                        }
                                        else
                                            resolve(null);
                                    });
                                }
                                else {
                                    resolve(null);
                                }
                            })];
                }
            });
        });
    };
    UsernameValidator.prototype.checkValidUsername = function (control) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.list('usernames/', {
                query: {
                    orderByKey: true,
                    equalTo: control.value.toLowerCase()
                }
            }).subscribe(function (data) {
                if (data.length > 0) {
                    resolve(null);
                }
                else {
                    resolve({
                        "message": "اسم المستخدم غير صحيح، الرجاء التأكد."
                    });
                }
                ;
            });
        });
    };
    return UsernameValidator;
}());
UsernameValidator = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__helpers_myTeamDB__["a" /* MyTeamDB */]])
], UsernameValidator);

//# sourceMappingURL=username.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(685);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_username__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_myTeamDB__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_cloud_angular__ = __webpack_require__(1027);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(1092);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_firebase_config__ = __webpack_require__(1093);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_twitter_connect__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_social_sharing__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_keyboard__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ion2_calendar__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_components_module__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__ = __webpack_require__(1094);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var cloudSettings = {
    'core': {
        'app_id': '22320c44'
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {
                backButtonText: '',
                swipeBackEnabled: true,
                tabsHideOnSubPages: true,
            }, {
                links: [
                    { loadChildren: '../pages/request-match/request-match.module#RequestMatchPageModule', name: 'RequestMatchPage', segment: 'request-match', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-player/add-player.module#AddPlayerPageModule', name: 'AddPlayerPage', segment: 'add-player', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-player-to-team/add-player-to-team.module#AddPlayerToTeamPageModule', name: 'AddPlayerToTeamPage', segment: 'add-player-to-team', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/choose-username/choose-username.module#ChooseUsernamePageModule', name: 'ChooseUsernamePage', segment: 'choose-username', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/compose/compose.module#ComposePageModule', name: 'ComposePage', segment: 'compose', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-team/edit-team.module#EditTeamPageModule', name: 'EditTeamPage', segment: 'edit-team', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: ['WelcomePage'] },
                    { loadChildren: '../pages/match/match.module#MatchPageModule', name: 'MatchPage', segment: 'match/:id', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'mytabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/start-team/start-team.module#StartTeamPageModule', name: 'StartTeamPage', segment: 'start-team', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-team/my-team.module#MyTeamPageModule', name: 'MyTeamPage', segment: 'myteam', priority: 'low', defaultHistory: ['TabsPage', 'MyTeamPage'] },
                    { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/player/player.module#PlayerPageModule', name: 'PlayerPage', segment: 'player/:username', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/post/post.module#PostPageModule', name: 'PostPage', segment: 'post/:id', priority: 'low', defaultHistory: ['PostPage', 'HomePage'] },
                    { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: ['WelcomePage'] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/team/team.module#TeamPageModule', name: 'TeamPage', segment: 'team/:id', priority: 'low', defaultHistory: ['MyTeamPage'] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__app_firebase_config__["a" /* FIREBASE_CONFIG */]),
            __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_16_ion2_calendar__["b" /* CalendarModule */],
            __WEBPACK_IMPORTED_MODULE_17__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_cloud_angular__["a" /* CloudModule */].forRoot(cloudSettings)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__helpers_myTeamDB__["a" /* MyTeamDB */],
            __WEBPACK_IMPORTED_MODULE_3__validators_username__["a" /* UsernameValidator */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_twitter_connect__["a" /* TwitterConnect */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_social_sharing__["a" /* SocialSharing */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 757:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 305,
	"./af.js": 305,
	"./ar": 306,
	"./ar-dz": 307,
	"./ar-dz.js": 307,
	"./ar-kw": 308,
	"./ar-kw.js": 308,
	"./ar-ly": 309,
	"./ar-ly.js": 309,
	"./ar-ma": 310,
	"./ar-ma.js": 310,
	"./ar-sa": 311,
	"./ar-sa.js": 311,
	"./ar-tn": 312,
	"./ar-tn.js": 312,
	"./ar.js": 306,
	"./az": 313,
	"./az.js": 313,
	"./be": 314,
	"./be.js": 314,
	"./bg": 315,
	"./bg.js": 315,
	"./bn": 316,
	"./bn.js": 316,
	"./bo": 317,
	"./bo.js": 317,
	"./br": 318,
	"./br.js": 318,
	"./bs": 319,
	"./bs.js": 319,
	"./ca": 320,
	"./ca.js": 320,
	"./cs": 321,
	"./cs.js": 321,
	"./cv": 322,
	"./cv.js": 322,
	"./cy": 323,
	"./cy.js": 323,
	"./da": 324,
	"./da.js": 324,
	"./de": 325,
	"./de-at": 326,
	"./de-at.js": 326,
	"./de-ch": 327,
	"./de-ch.js": 327,
	"./de.js": 325,
	"./dv": 328,
	"./dv.js": 328,
	"./el": 329,
	"./el.js": 329,
	"./en-au": 330,
	"./en-au.js": 330,
	"./en-ca": 331,
	"./en-ca.js": 331,
	"./en-gb": 332,
	"./en-gb.js": 332,
	"./en-ie": 333,
	"./en-ie.js": 333,
	"./en-nz": 334,
	"./en-nz.js": 334,
	"./eo": 335,
	"./eo.js": 335,
	"./es": 336,
	"./es-do": 337,
	"./es-do.js": 337,
	"./es.js": 336,
	"./et": 338,
	"./et.js": 338,
	"./eu": 339,
	"./eu.js": 339,
	"./fa": 340,
	"./fa.js": 340,
	"./fi": 341,
	"./fi.js": 341,
	"./fo": 342,
	"./fo.js": 342,
	"./fr": 343,
	"./fr-ca": 344,
	"./fr-ca.js": 344,
	"./fr-ch": 345,
	"./fr-ch.js": 345,
	"./fr.js": 343,
	"./fy": 346,
	"./fy.js": 346,
	"./gd": 347,
	"./gd.js": 347,
	"./gl": 348,
	"./gl.js": 348,
	"./gom-latn": 349,
	"./gom-latn.js": 349,
	"./he": 350,
	"./he.js": 350,
	"./hi": 351,
	"./hi.js": 351,
	"./hr": 352,
	"./hr.js": 352,
	"./hu": 353,
	"./hu.js": 353,
	"./hy-am": 354,
	"./hy-am.js": 354,
	"./id": 355,
	"./id.js": 355,
	"./is": 356,
	"./is.js": 356,
	"./it": 357,
	"./it.js": 357,
	"./ja": 358,
	"./ja.js": 358,
	"./jv": 359,
	"./jv.js": 359,
	"./ka": 360,
	"./ka.js": 360,
	"./kk": 361,
	"./kk.js": 361,
	"./km": 362,
	"./km.js": 362,
	"./kn": 363,
	"./kn.js": 363,
	"./ko": 364,
	"./ko.js": 364,
	"./ky": 365,
	"./ky.js": 365,
	"./lb": 366,
	"./lb.js": 366,
	"./lo": 367,
	"./lo.js": 367,
	"./lt": 368,
	"./lt.js": 368,
	"./lv": 369,
	"./lv.js": 369,
	"./me": 370,
	"./me.js": 370,
	"./mi": 371,
	"./mi.js": 371,
	"./mk": 372,
	"./mk.js": 372,
	"./ml": 373,
	"./ml.js": 373,
	"./mr": 374,
	"./mr.js": 374,
	"./ms": 375,
	"./ms-my": 376,
	"./ms-my.js": 376,
	"./ms.js": 375,
	"./my": 377,
	"./my.js": 377,
	"./nb": 378,
	"./nb.js": 378,
	"./ne": 379,
	"./ne.js": 379,
	"./nl": 380,
	"./nl-be": 381,
	"./nl-be.js": 381,
	"./nl.js": 380,
	"./nn": 382,
	"./nn.js": 382,
	"./pa-in": 383,
	"./pa-in.js": 383,
	"./pl": 384,
	"./pl.js": 384,
	"./pt": 385,
	"./pt-br": 386,
	"./pt-br.js": 386,
	"./pt.js": 385,
	"./ro": 387,
	"./ro.js": 387,
	"./ru": 388,
	"./ru.js": 388,
	"./sd": 389,
	"./sd.js": 389,
	"./se": 390,
	"./se.js": 390,
	"./si": 391,
	"./si.js": 391,
	"./sk": 392,
	"./sk.js": 392,
	"./sl": 393,
	"./sl.js": 393,
	"./sq": 394,
	"./sq.js": 394,
	"./sr": 395,
	"./sr-cyrl": 396,
	"./sr-cyrl.js": 396,
	"./sr.js": 395,
	"./ss": 397,
	"./ss.js": 397,
	"./sv": 398,
	"./sv.js": 398,
	"./sw": 399,
	"./sw.js": 399,
	"./ta": 400,
	"./ta.js": 400,
	"./te": 401,
	"./te.js": 401,
	"./tet": 402,
	"./tet.js": 402,
	"./th": 403,
	"./th.js": 403,
	"./tl-ph": 404,
	"./tl-ph.js": 404,
	"./tlh": 405,
	"./tlh.js": 405,
	"./tr": 406,
	"./tr.js": 406,
	"./tzl": 407,
	"./tzl.js": 407,
	"./tzm": 408,
	"./tzm-latn": 409,
	"./tzm-latn.js": 409,
	"./tzm.js": 408,
	"./uk": 410,
	"./uk.js": 410,
	"./ur": 411,
	"./ur.js": 411,
	"./uz": 412,
	"./uz-latn": 413,
	"./uz-latn.js": 413,
	"./uz.js": 412,
	"./vi": 414,
	"./vi.js": 414,
	"./x-pseudo": 415,
	"./x-pseudo.js": 415,
	"./yo": 416,
	"./yo.js": 416,
	"./zh-cn": 417,
	"./zh-cn.js": 417,
	"./zh-hk": 418,
	"./zh-hk.js": 418,
	"./zh-tw": 419,
	"./zh-tw.js": 419
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 757;

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerPostCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_myTeamDB__ = __webpack_require__(38);
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
 * Generated class for the PlayerPostCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var PlayerPostCardComponent = (function () {
    function PlayerPostCardComponent(teamDB) {
        this.teamDB = teamDB;
        this.numMatches = 0;
        this.userInfo = {};
    }
    PlayerPostCardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        Promise.resolve().then(function () {
            _this.teamDB.getUserInfo(_this.playerID).then(function (user) {
                _this.userInfo = user;
            });
        });
    };
    return PlayerPostCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('playerID'),
    __metadata("design:type", Object)
], PlayerPostCardComponent.prototype, "playerID", void 0);
PlayerPostCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'player-post-card',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/components/player-post-card/player-post-card.html"*/'<div style="position: relative; padding: 10px; margin-top: 5px">\n  <div *ngIf=\'userInfo.bg\' class="playerBg" [ngStyle]="{ \'background-image\': \'url(\' + userInfo.bg + \')\'}">\n\n  </div>\n  <div *ngIf=\'!userInfo.bg\' class="playerBg" style="background-image: url(http://www.publicdomainpictures.net/pictures/50000/nahled/sunset-profile-background.jpg)">\n\n  </div>\n  <div class="playerBar">\n    <player-bar playerID="{{playerID}}"></player-bar>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/components/player-post-card/player-post-card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__helpers_myTeamDB__["a" /* MyTeamDB */]])
], PlayerPostCardComponent);

//# sourceMappingURL=player-post-card.js.map

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_myTeamDB__ = __webpack_require__(38);
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
 * Generated class for the PlayerBarComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var PlayerBarComponent = (function () {
    function PlayerBarComponent(teamDB) {
        this.teamDB = teamDB;
        this.numMatches = 0;
        this.userInfo = {};
    }
    PlayerBarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        Promise.resolve().then(function () {
            _this.teamDB.getUserInfo(_this.playerID).then(function (user) {
                _this.userInfo = user;
            });
        });
    };
    return PlayerBarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('playerID'),
    __metadata("design:type", Object)
], PlayerBarComponent.prototype, "playerID", void 0);
PlayerBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'player-bar',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/components/player-bar/player-bar.html"*/'<ion-row justify-content-center style="height: 100px">\n  <ion-col col-3>\n    <ion-icon padding-horizontal class="largeIcon" name="ios-stats" color=\'lightBlue\'></ion-icon>\n    <p *ngIf="numMatches == 0" style="color: white">\n      لا يوجد\n    </p>\n    <p *ngIf="numMatches > 0" style="color: white">\n      {{numMatches}}\n    </p>\n  </ion-col>\n  <p style="font-weight: bold; font-size: large; color: white">\n    &middot;\n  </p>\n  <ion-col col-3>\n    <ion-icon padding-horizontal class="largeIcon" name="ios-football" color=\'gold\'></ion-icon>\n    <p style="color: white">\n      لا يوجد\n    </p>\n  </ion-col>\n  <p style="font-weight: bold; font-size: large; color: white">\n    &middot;\n  </p>\n  <ion-col col-3 no-padding>\n    <ion-icon padding-horizontal class="largeIcon" name="ios-pulse" color=\'orange\'></ion-icon>\n    <p style="color: white">\n      لا يوجد\n    </p>\n  </ion-col>\n</ion-row>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/components/player-bar/player-bar.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__helpers_myTeamDB__["a" /* MyTeamDB */]])
], PlayerBarComponent);

//# sourceMappingURL=player-bar.js.map

/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(51);
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
 * Generated class for the TeamBarComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var TeamBarComponent = (function () {
    function TeamBarComponent(db) {
        this.db = db;
        this.playersNum = 0;
    }
    TeamBarComponent.prototype.ngAfterViewInit = function () {
        this.setData();
    };
    TeamBarComponent.prototype.ngOnChanges = function () {
        this.setData();
    };
    TeamBarComponent.prototype.setData = function () {
        var _this = this;
        Promise.resolve().then(function () {
            _this.db.list('playersList/' + _this.teamID).take(1).subscribe(function (data) {
                var count = 0;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].status == "enrolled")
                        count++;
                }
                _this.playersNum = count;
            });
        });
    };
    return TeamBarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('teamID'),
    __metadata("design:type", Object)
], TeamBarComponent.prototype, "teamID", void 0);
TeamBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'team-bar',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/components/team-bar/team-bar.html"*/'<ion-row justify-content-center style="height: 100px">\n  <ion-col col-3>\n    <ion-icon padding-horizontal class="largeIcon" name="ios-people" color=\'lightBlue\'></ion-icon>\n    <p *ngIf="playersNum == 0" style="color: white">\n      لا يوجد\n    </p>\n    <p *ngIf="playersNum > 0" style="color: white">\n      {{playersNum}}\n    </p>\n  </ion-col>\n  <p style="font-weight: bold; font-size: large; color: white">\n    &middot;\n  </p>\n  <ion-col col-3>\n    <ion-icon padding-horizontal class="largeIcon" name="md-trophy" color=\'gold\'></ion-icon>\n    <p style="color: white">\n      لا يوجد\n    </p>\n  </ion-col>\n  <p style="font-weight: bold; font-size: large; color: white">\n    &middot;\n  </p>\n  <ion-col col-3 no-padding>\n    <div class="set-size charts-container">\n      <div class="pie-wrapper progress-0">\n        <span class="label"><span class="smaller">%</span>NA</span>\n        <div class="pie">\n          <div class="left-side half-circle"></div>\n          <div class="right-side half-circle"></div>\n        </div>\n      </div>\n    </div>\n    <div class="matchesStat" dir="ltr">\n      <ion-row justify-content-center>\n        <ion-col align-self-baseline no-padding col-sm-1>\n          <ion-icon color="gold" name="ios-arrow-up"></ion-icon>\n          <p>0</p>\n        </ion-col>\n        <ion-col align-self-baseline no-padding col-sm-1>\n          <ion-icon color="danger" name="ios-arrow-down"></ion-icon>\n          <p>0</p>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-col>\n</ion-row>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/components/team-bar/team-bar.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], TeamBarComponent);

//# sourceMappingURL=team-bar.js.map

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_myTeamDB__ = __webpack_require__(38);
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
 * Generated class for the ProfilePicComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var ProfilePicComponent = (function () {
    function ProfilePicComponent(teamDB) {
        this.teamDB = teamDB;
        this.profilePic = '';
    }
    ProfilePicComponent.prototype.ngAfterViewInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.setData();
                return [2 /*return*/];
            });
        });
    };
    ProfilePicComponent.prototype.ngOnChanges = function () {
        this.setData();
    };
    ProfilePicComponent.prototype.setData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var pic;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.type == 'user' && this.id)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.teamDB.getUserInfo(this.id).then(function (user) {
                                pic = user.profilePic;
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(this.type == 'team' && this.id)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.teamDB.getTeamInfo(this.id).then(function (user) {
                                pic = user.logo;
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        Promise.resolve().then(function () {
                            if (!pic)
                                _this.profilePic = 'http://playerleague.it/uploads/club/242d7e5ff1bd143ca11fd4d4b0dd1f8a.png';
                            else
                                _this.profilePic = pic;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return ProfilePicComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('ID'),
    __metadata("design:type", Object)
], ProfilePicComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('className'),
    __metadata("design:type", Object)
], ProfilePicComponent.prototype, "className", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('type'),
    __metadata("design:type", Object)
], ProfilePicComponent.prototype, "type", void 0);
ProfilePicComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'profile-pic',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/components/profile-pic/profile-pic.html"*/'<img class="{{className}}" src="{{profilePic}}" alt="">\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/components/profile-pic/profile-pic.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__helpers_myTeamDB__["a" /* MyTeamDB */]])
], ProfilePicComponent);

//# sourceMappingURL=profile-pic.js.map

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(51);
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
 * Generated class for the MatchItemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var DateComponent = (function () {
    function DateComponent(db) {
        this.db = db;
        this.formatedDate = "";
        __WEBPACK_IMPORTED_MODULE_1_moment__["updateLocale"]('en', {
            relativeTime: {
                future: 'in %s',
                past: '%s',
                s: 'Now',
                ss: '%ss',
                m: '1m',
                mm: '%dm',
                h: '1hr',
                hh: '%dh',
                d: '1d',
                dd: '%dd',
                M: '1mo',
                MM: '%dM',
                y: 'yr',
                yy: '%dY'
            }
        });
    }
    DateComponent.prototype.ngAfterViewInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.setData();
                return [2 /*return*/];
            });
        });
    };
    DateComponent.prototype.ngOnChanges = function () {
        this.setData();
    };
    DateComponent.prototype.setData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                Promise.resolve().then(function () {
                    if (_this.date) {
                        if (_this.day !== null && _this.day == "true") {
                            _this.formatedDate = __WEBPACK_IMPORTED_MODULE_1_moment__(_this.date, "MM/DD/YYYY").locale('ar-sa').format('dddd') + " ";
                            _this.formatedDate += __WEBPACK_IMPORTED_MODULE_1_moment__(_this.date, "MM/DD/YYYY").locale('ar-sa').format('ll');
                        }
                        else {
                            var momentDate = __WEBPACK_IMPORTED_MODULE_1_moment__["utc"](_this.date, "YYYY-MM-DD HH:mm:ss").local().format("YYYY-MM-DD HH:mm:ss");
                            _this.formatedDate = __WEBPACK_IMPORTED_MODULE_1_moment__(momentDate).fromNow();
                        }
                    }
                    else if (_this.reqID) {
                        _this.db.object('/matches/' + _this.reqID).take(1).subscribe(function (data) {
                            if (_this.day !== null && _this.day == "true")
                                _this.formatedDate = __WEBPACK_IMPORTED_MODULE_1_moment__(data.date, "MM/DD/YYYY").locale('ar-sa').format('dddd') + " ";
                            _this.formatedDate += __WEBPACK_IMPORTED_MODULE_1_moment__(data.date, "MM/DD/YYYY").locale('ar-sa').format('ll');
                        });
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    return DateComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('requestID'),
    __metadata("design:type", Object)
], DateComponent.prototype, "reqID", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('date'),
    __metadata("design:type", Object)
], DateComponent.prototype, "date", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('day'),
    __metadata("design:type", Object)
], DateComponent.prototype, "day", void 0);
DateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'date',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/components/date/date.html"*/'<!-- Generated template for the DateComponent component -->\n<p>\n  {{formatedDate}}\n</p>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/components/date/date.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], DateComponent);

//# sourceMappingURL=date.js.map

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_myTeamDB__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
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
 * Generated class for the PostComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var PostComponent = (function () {
    function PostComponent(teamDB, navCtrl, modal, db) {
        this.teamDB = teamDB;
        this.navCtrl = navCtrl;
        this.modal = modal;
        this.db = db;
        this.postInfo = {};
        this.user = {};
        this.date = '';
        this.teamInfo = {};
    }
    PostComponent.prototype.ngAfterViewInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var res_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.postInfo.by) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.teamDB.getPostInfo(this.postID).then(function (data) {
                                res_1 = data;
                                _this.postInfo = res_1;
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        Promise.resolve().then(function () {
                            if (_this.postInfo.type == 'match') {
                                _this.month = __WEBPACK_IMPORTED_MODULE_4_moment__(_this.postInfo.matchDate, 'MM/DD/YYYY').format('MMM');
                                _this.day = __WEBPACK_IMPORTED_MODULE_4_moment__(_this.postInfo.matchDate, 'MM/DD/YYYY').format('D');
                                _this.teamDB.getTeamInfo(_this.postInfo.teamID).then(function (data) {
                                    _this.teamInfo = data;
                                });
                            }
                            _this.teamDB.getUserInfo(_this.postInfo.by).then(function (data) {
                                _this.user = data;
                            });
                            _this.commentsNum = _this.db.list('timeline/' + _this.postInfo.$key + '/comments/');
                            _this.likes = _this.db.list('timeline/' + _this.postInfo.$key + '/likes/');
                            if (_this.teamDB.loggedIn) {
                                _this.liked = _this.db.list('timeline/' + _this.postInfo.$key + '/likes/', {
                                    query: {
                                        orderByChild: 'id',
                                        equalTo: _this.teamDB.userInfo.uid
                                    }
                                });
                            }
                            // const converted = tzMoment.tz(this.postInfo.date, 'Asia/Riyadh').format();
                            // const shortConverted = converted.substring(0, 19);
                            // console.log(shortConverted);
                            var momentDate = __WEBPACK_IMPORTED_MODULE_4_moment__["utc"](_this.postInfo.date, "YYYY-MM-DD HH:mm:ss").local().format("YYYY-MM-DD HH:mm:ss");
                            _this.date = __WEBPACK_IMPORTED_MODULE_4_moment__(momentDate).fromNow();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PostComponent.prototype.like = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.teamDB.loggedIn) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.teamDB.like(this.postInfo.$key)];
                    case 1:
                        _a.sent();
                        this.db.object('users/' + this.postInfo.by + '/notifications/' + this.postInfo.$key + this.teamDB.userInfo.uid)
                            .set({
                            player: this.teamDB.userInfo.uid,
                            title: this.postInfo.title,
                            type: 'likedPost',
                            postID: this.postInfo.$key,
                            timestamp: new Date().getTime(),
                            date: __WEBPACK_IMPORTED_MODULE_4_moment__["utc"]().format('YYYY-MM-DD HH:mm:ss')
                        });
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    PostComponent.prototype.unlike = function () {
        if (this.teamDB.loggedIn) {
            this.teamDB.unlike(this.postInfo.$key);
            //this.liked = false;
            //this.likesNum--;
        }
    };
    PostComponent.prototype.openPlayer = function () {
        this.navCtrl.push('PlayerPage', { username: this.user.originalUsername });
    };
    PostComponent.prototype.requestPlayer = function () {
        if (this.teamDB.loggedIn) {
            this.modal.create('AddPlayerToTeamPage', { player: this.user }).present();
        }
    };
    PostComponent.prototype.openPlayerLike = function (uid) {
        var _this = this;
        this.teamDB.getUserInfo(uid).then(function (data) {
            _this.navCtrl.push('PlayerPage', { username: data.originalUsername });
        });
    };
    PostComponent.prototype.openPost = function () {
        this.navCtrl.push('PostPage', { id: this.postInfo.$key });
    };
    PostComponent.prototype.openTeam = function () {
        this.navCtrl.push('TeamPage', { id: this.teamInfo.$key });
    };
    PostComponent.prototype.requestMatch = function () {
        if (this.teamDB.loggedIn) {
            this.modal.create('RequestMatchPage', { team: this.teamInfo, givenDate: this.postInfo.matchDate }).present();
        }
    };
    return PostComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])('className'),
    __metadata("design:type", Object)
], PostComponent.prototype, "className", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])('type'),
    __metadata("design:type", Object)
], PostComponent.prototype, "type", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])('post'),
    __metadata("design:type", Object)
], PostComponent.prototype, "postInfo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Input */])('postID'),
    __metadata("design:type", Object)
], PostComponent.prototype, "postID", void 0);
PostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'post',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/components/post/post.html"*/'<!-- Generated template for the PostComponent component -->\n<ion-card [@fadeInOut] [ngClass]="className ? className : \'card1\'">\n  <ion-item style="height: 70px;">\n    <ion-avatar margin-top item-start>\n      <img class="postAvatar" on-tap="openPlayer()" src="{{user.profilePic}}" alt="">\n    </ion-avatar>\n    <p class="author">\n      <span id="name">{{user.name}}</span><br> {{user.originalUsername}}@\n    </p>\n    <div class="topLeft">\n      <div *ngIf="postInfo.type == \'match\'" on-tap="requestMatch()" class="icon_calendar">\n        <em></em><em></em>\n        <label>{{month}}</label>\n        <span><h1>{{day}}</h1></span>\n      </div>\n      <div *ngIf="postInfo.type == \'player\'" on-tap="requestPlayer()">\n        <span [ngSwitch]="user.position">\n          <span *ngSwitchCase="\'GK\'" class="chip red">حارس</span>\n\n        <span *ngSwitchCase="\'DF\'" class="chip green">دفاع</span>\n\n        <span *ngSwitchCase="\'CM\'" class="chip gold">وسط</span>\n\n        <span *ngSwitchCase="\'AT\'" class="chip blue">مهاجم</span>\n        </span>\n      </div>\n    </div>\n  </ion-item>\n  <ion-card-content>\n    <h2>{{postInfo.title}}</h2>\n    <ng-content></ng-content>\n  </ion-card-content>\n  <div *ngIf="postInfo.type == \'match\'" [@fadeInOut] class="infoPlaceholder">\n    <img *ngIf="teamInfo.bg" on-tap="openTeam()" class="bg" src="{{teamInfo.bg}}" alt="">\n    <img on-tap="openTeam()" class="logo" src="{{teamInfo.logo}}" alt="">\n    <h1 class="teamName">{{teamInfo.name}}</h1>\n    <div class="teamBar">\n      <team-bar teamID="{{postInfo.teamID}}"></team-bar>\n    </div>\n  </div>\n  <player-post-card *ngIf="postInfo.type == \'player\'" playerID="{{postInfo.by}}"></player-post-card>\n  <p class="postInfo" *ngIf="postInfo.info" padding>\n    {{postInfo.info}}\n  </p>\n  <ion-row class="postInfoBar">\n    <ion-col class="likes">\n      <ion-row padding-left align-items-center>\n        <button no-padding (click)="like()" *ngIf="(liked | async)?.length == 0" ion-button icon-left clear small>\n         <ion-icon name="md-heart-outline" color="danger"></ion-icon>\n        </button>\n        <button no-padding (click)="unlike()" *ngIf="(liked | async)?.length > 0" ion-button icon-left clear small>\n          <ion-icon name="md-heart" color="danger"></ion-icon>\n        </button>\n        <p class="likesNum">{{(likes | async)?.length}}</p>\n        <ion-col *ngIf="(likes | async)?.length > 0" col-9 class="likesPreview">\n          <ion-slides dir="rtl" slidesPerView="6">\n            <ion-slide *ngFor="let player of likes | async">\n              <profile-pic on-tap="openPlayerLike(player.id)" className="likeAvatar" ID="{{player.id}}" type="user"></profile-pic>\n            </ion-slide>\n          </ion-slides>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n    <ion-col class="comments">\n      <ion-row padding-left align-items-center>\n        <button no-padding (click)="openPost()" ion-button icon-left clear small>\n          <ion-icon name="text" color="gold"></ion-icon>\n        </button>\n        <p>{{(commentsNum | async)?.length}}</p>\n      </ion-row>\n    </ion-col>\n    <ion-col col-2 class="date" center text-end>\n      <ion-note dir="ltr">\n        <date date="{{postInfo.date}}"></date>\n      </ion-note>\n    </ion-col>\n  </ion-row>\n</ion-card>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/components/post/post.html"*/,
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* trigger */])('fadeInOut', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_29" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* style */])({ opacity: '0' })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_29" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* style */])({ opacity: '1' })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* transition */])('void <=> *', Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* animate */])('400ms ease-in'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__helpers_myTeamDB__["a" /* MyTeamDB */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__helpers_myTeamDB__["a" /* MyTeamDB */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object])
], PostComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=post.js.map

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShrinkingSegmentHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShrinkingSegmentHeader = (function () {
    function ShrinkingSegmentHeader(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ShrinkingSegmentHeader.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
        this.scrollContent = this.scrollArea._elementRef.nativeElement.getElementsByClassName('profileBottom')[0];
        this.scrollArea.ionScroll.subscribe(function (ev) {
            _this.resizeHeader(ev);
        });
        this.scrollArea.ionScrollEnd.subscribe(function (ev) {
            if (ev.scrollTop <= 1)
                _this.renderer.setElementStyle(_this.scrollContent, 'top', _this.newHeaderHeight + 116 + 'px');
        });
    };
    ShrinkingSegmentHeader.prototype.resizeHeader = function (ev) {
        var _this = this;
        ev.domWrite(function () {
            _this.newHeaderHeight = _this.headerHeight - ev.scrollTop;
            if (_this.newHeaderHeight < 0) {
                _this.newHeaderHeight = 0;
            }
            if (_this.newHeaderHeight <= _this.headerHeight) {
                _this.renderer.setElementStyle(_this.element.nativeElement, 'height', _this.newHeaderHeight + 'px');
            }
        });
    };
    return ShrinkingSegmentHeader;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('scrollArea'),
    __metadata("design:type", Object)
], ShrinkingSegmentHeader.prototype, "scrollArea", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('headerHeight'),
    __metadata("design:type", Number)
], ShrinkingSegmentHeader.prototype, "headerHeight", void 0);
ShrinkingSegmentHeader = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'shrinking-segment-header',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/components/shrinking-segment-header/shrinking-segment-header.html"*/'<!-- Generated template for the ShrinkingSegmentHeaderComponent component -->\n<ng-content></ng-content>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/components/shrinking-segment-header/shrinking-segment-header.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer */]])
], ShrinkingSegmentHeader);

//# sourceMappingURL=shrinking-segment-header.js.map

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_myTeamDB__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(51);
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
 * Generated class for the TeamCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var TeamCardComponent = (function () {
    function TeamCardComponent(teamDB, navCtrl, modal, afAuth, db, actionSheetCtrl, alertCtrl) {
        this.teamDB = teamDB;
        this.navCtrl = navCtrl;
        this.modal = modal;
        this.afAuth = afAuth;
        this.db = db;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.teamInfo = {};
        this.isCaptain = false;
    }
    TeamCardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        Promise.resolve().then(function () {
            _this.teamDB.getTeamInfo(_this.team.$key).then(function (data) {
                _this.teamInfo = data;
                _this.isCaptain = _this.teamInfo.captain == _this.afAuth.auth.currentUser.uid;
            });
        });
    };
    TeamCardComponent.prototype.presentActionSheet = function (team) {
        var _this = this;
        var actionSheet;
        var btns;
        if (team.captain == this.afAuth.auth.currentUser.uid) {
            btns = [
                {
                    text: 'اجعل الفريق المفضل',
                    handler: function () {
                    }
                },
                {
                    text: 'إعدادات الفريق',
                    handler: function () {
                        var editModal = _this.modal.create("EditTeamPage", { team: team });
                        editModal.present();
                        editModal.onWillDismiss(function (data) {
                            //this.loadTeams();
                        });
                    }
                },
                {
                    text: 'حذف الفريق',
                    role: 'destructive',
                    handler: function () {
                        actionSheet.dismiss().then(function () {
                            _this.deleteTeam(team);
                        });
                        return false;
                    }
                }, {
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
                    text: 'اجعل الفريق المفضل',
                    handler: function () {
                    }
                },
                {
                    text: 'انسحب من الفريق',
                    role: 'destructive',
                    handler: function () {
                        actionSheet.dismiss().then(function () {
                            _this.exitTeam(_this.afAuth.auth.currentUser.uid, team.$key);
                        });
                        return false;
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
    TeamCardComponent.prototype.deleteTeam = function (team) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'هل انت متأكد من حذف الفريق؟',
            message: 'لا يمكن التراجع بعد تنفيذ العملية',
            buttons: [
                {
                    text: 'متأكد',
                    handler: function () {
                        var dataToDelete = {};
                        dataToDelete['teams/' + team.$key] = null;
                        dataToDelete['playersList/' + team.$key] = null;
                        _this.db.list('playersList/' + team.$key).take(1).subscribe(function (data) {
                            var i;
                            for (i = 0; i < data.length; i++) {
                                dataToDelete['users/' + data[i].uid + '/myTeams/' + team.$key] = null;
                                dataToDelete['users/' + data[i].uid + '/requests/' + team.$key] = null;
                                if (i == data.length - 1) {
                                    _this.db.object('/').update(dataToDelete);
                                }
                            }
                        });
                    }
                },
                {
                    text: 'إلغاء',
                    handler: function () {
                        //console.log('Cancel clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    TeamCardComponent.prototype.exitTeam = function (playerId, teamId) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'هل انت متأكد من الانسحاب من الفريق؟',
            message: 'لا يمكن التراجع بعد تنفيذ العملية',
            buttons: [
                {
                    text: 'متأكد',
                    handler: function () {
                        var dataToDelete = {};
                        dataToDelete['users/' + playerId + '/myTeams/' + teamId] = null;
                        dataToDelete['playersList/' + teamId + '/' + playerId] = null;
                        _this.db.object('/').update(dataToDelete);
                    }
                },
                {
                    text: 'إلغاء',
                    handler: function () {
                        //console.log('Cancel clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    TeamCardComponent.prototype.openTeam = function (team) {
        this.navCtrl.push('TeamPage', { id: team.$key });
    };
    return TeamCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('className'),
    __metadata("design:type", Object)
], TeamCardComponent.prototype, "className", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('team'),
    __metadata("design:type", Object)
], TeamCardComponent.prototype, "team", void 0);
TeamCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'team-card',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/components/team-card/team-card.html"*/'<!-- Generated template for the TeamCardComponent component -->\n<ion-card [@fadeInOut] [ngClass]="className ? className : \'card1\'">\n  <ion-item>\n    <ion-avatar item-start>\n      <img on-tap=\'openTeam(teamInfo)\' src="{{teamInfo.logo}}" alt="">\n    </ion-avatar>\n    <ion-row>\n      <h2>{{teamInfo.name}}</h2>\n      <span *ngIf="isCaptain" class="captain">C</span>\n    </ion-row>\n    <p>{{teamInfo.city}}</p>\n    <div class="more" text-left>\n      <button ion-button (click)=\'presentActionSheet(teamInfo)\' clear>\n        <ion-icon class="mdIcon" name="ios-more"></ion-icon>\n      </button>\n    </div>\n  </ion-item>\n  <div *ngIf=\'teamInfo.bg\' class="bg" on-tap=\'openTeam(teamInfo)\' [ngStyle]="{ \'background-image\': \'url(\' + teamInfo.bg + \')\'}">\n\n  </div>\n  <div *ngIf=\'!teamInfo.bg\' class="bg" on-tap=\'openTeam(teamInfo)\' style="background-image: url(https://www.buscandonomes.com.br/_img/xthumb-default.gif.pagespeed.ic.yQYWf40TN9.png">\n\n  </div>\n  <div class="card-content" text-center>\n    <team-bar teamID="{{team.$key}}"></team-bar>\n  </div>\n</ion-card>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/components/team-card/team-card.html"*/,
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* trigger */])('fadeInOut', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({ opacity: '0' })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_29" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* style */])({ opacity: '1' })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* transition */])('void <=> *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* animate */])('300ms ease-in'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__helpers_myTeamDB__["a" /* MyTeamDB */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], TeamCardComponent);

//# sourceMappingURL=team-card.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_myTeamDB__ = __webpack_require__(38);
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
 * Generated class for the MatchItemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var MatchItemComponent = (function () {
    function MatchItemComponent(teamDB) {
        this.teamDB = teamDB;
    }
    MatchItemComponent.prototype.ngAfterViewInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var homeName, awayName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.teamDB.getTeamInfo(this.home).then(function (data) {
                            homeName = data.name;
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.teamDB.getTeamInfo(this.away).then(function (data) {
                                awayName = data.name;
                            })];
                    case 2:
                        _a.sent();
                        Promise.resolve().then(function () {
                            if (!homeName)
                                _this.homeName = 'غير متوفر';
                            else
                                _this.homeName = homeName;
                            if (!awayName)
                                _this.awayName = 'غير متوفر';
                            else
                                _this.awayName = awayName;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return MatchItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('home'),
    __metadata("design:type", Object)
], MatchItemComponent.prototype, "home", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('away'),
    __metadata("design:type", Object)
], MatchItemComponent.prototype, "away", void 0);
MatchItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'match-item',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/components/match-item/match-item.html"*/'<!-- Generated template for the MatchItemComponent component -->\n<div>\n  <ion-row justify-content-center>\n    <ion-col col-2>\n      <profile-pic className="matchLogo" ID="{{home}}" type="team"></profile-pic>\n    </ion-col>\n    <ion-col col-8>\n      <ion-row justify-content-center nowrap>\n        <div class="teamName">{{homeName}}</div>\n        <div style="margin-left: 3px; margin-right: 3px;">vs</div>\n        <div class="teamName">{{awayName}}</div>\n      </ion-row>\n    </ion-col>\n    <ion-col col-2>\n      <profile-pic className="matchLogo" ID="{{away}}" type="team"></profile-pic>\n    </ion-col>\n  </ion-row>\n</div>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/components/match-item/match-item.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_1__helpers_myTeamDB__["a" /* MyTeamDB */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__helpers_myTeamDB__["a" /* MyTeamDB */]])
], MatchItemComponent);

//# sourceMappingURL=match-item.js.map

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_myTeamDB__ = __webpack_require__(38);
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
 * Generated class for the UserNameComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var NameComponent = (function () {
    function NameComponent(teamDB) {
        this.teamDB = teamDB;
        this.name = '';
    }
    NameComponent.prototype.ngAfterViewInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.setData();
                return [2 /*return*/];
            });
        });
    };
    NameComponent.prototype.ngOnChanges = function () {
        this.setData();
    };
    NameComponent.prototype.setData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var name;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.type == 'user' && this.id)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.teamDB.getUserInfo(this.id).then(function (user) {
                                name = user.originalUsername;
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        if (!(this.type == 'team' && this.id)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.teamDB.getTeamInfo(this.id).then(function (team) {
                                name = team.name;
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        Promise.resolve().then(function () {
                            if (!name)
                                _this.name = 'غير متوفر';
                            else if (_this.type == 'user')
                                _this.name = name + '@';
                            else
                                _this.name = name;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return NameComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('ID'),
    __metadata("design:type", Object)
], NameComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('type'),
    __metadata("design:type", Object)
], NameComponent.prototype, "type", void 0);
NameComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'name',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/components/name/name.html"*/'<!-- Generated template for the UserNameComponent component -->\n{{name}}\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/components/name/name.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__helpers_myTeamDB__["a" /* MyTeamDB */]])
], NameComponent);

//# sourceMappingURL=name.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_native__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_web_animations_js_web_animations_min__ = __webpack_require__(1026);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_web_animations_js_web_animations_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_web_animations_js_web_animations_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(640);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(afAuth, platform, statusBar, splashScreen, keyboard) {
        var _this = this;
        this.afAuth = afAuth;
        this.platform = platform;
        this.keyboard = keyboard;
        this.rootPage = 'WelcomePage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Deeplinks */].route({
                '#/mytabs/tab-3/search': 'SearchPage',
                '#/mytabs/tab-0/player:username': 'PlayerPage'
            });
            if (_this.keyboard) {
                _this.keyboard.hideKeyboardAccessoryBar(false);
            }
            statusBar.styleDefault();
            setTimeout(function () {
                splashScreen.hide();
            }, 650);
            //splashScreen.hide();
        });
    }
    MyApp.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            __WEBPACK_IMPORTED_MODULE_3_ionic_native__["a" /* Deeplinks */].routeWithNavController(_this.navChild, {
                '#/mytabs/tab-3/search': 'SearchPage',
                '#/mytabs/tab-0/player:username': 'PlayerPage'
            }).subscribe(function (match) {
                console.log('Successfully routed', match);
            }, function (nomatch) {
                console.warn('Unmatched Route', nomatch);
            });
        });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
], MyApp.prototype, "navChild", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/app/app.html"*/'<ion-nav [root]="rootPage" swipeBackEnabled="true"></ion-nav>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[680]);
//# sourceMappingURL=main.js.map