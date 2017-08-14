webpackJsonp([0],{

/***/ 1106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTeamPageModule", function() { return EditTeamPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_team__ = __webpack_require__(1181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditTeamPageModule = (function () {
    function EditTeamPageModule() {
    }
    return EditTeamPageModule;
}());
EditTeamPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__edit_team__["a" /* EditTeamPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_team__["a" /* EditTeamPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__edit_team__["a" /* EditTeamPage */]
        ]
    })
], EditTeamPageModule);

//# sourceMappingURL=edit-team.module.js.map

/***/ }),

/***/ 1125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isDef = isDef;
exports.isJustDef = isJustDef;
exports.isFunction = isFunction;
exports.isObject = isObject;
exports.isNonNullObject = isNonNullObject;
exports.isNonArrayObject = isNonArrayObject;
exports.isString = isString;
exports.isNumber = isNumber;
exports.isNativeBlob = isNativeBlob;
exports.isNativeBlobDefined = isNativeBlobDefined;
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * @return False if the object is undefined or null, true otherwise.
 */
function isDef(p) {
    return p != null;
}
function isJustDef(p) {
    return p !== void 0;
}
function isFunction(p) {
    return typeof p === 'function';
}
function isObject(p) {
    return (typeof p === 'undefined' ? 'undefined' : _typeof(p)) === 'object';
}
function isNonNullObject(p) {
    return isObject(p) && p !== null;
}
function isNonArrayObject(p) {
    return isObject(p) && !Array.isArray(p);
}
function isString(p) {
    return typeof p === 'string' || p instanceof String;
}
function isNumber(p) {
    return typeof p === 'number' || p instanceof Number;
}
function isNativeBlob(p) {
    return isNativeBlobDefined() && p instanceof Blob;
}
function isNativeBlobDefined() {
    return typeof Blob !== 'undefined';
}
//# sourceMappingURL=type.js.map


/***/ }),

/***/ 1126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Code = exports.errors = exports.FirebaseStorageError = undefined;
exports.prependCode = prependCode;
exports.unknown = unknown;
exports.objectNotFound = objectNotFound;
exports.bucketNotFound = bucketNotFound;
exports.projectNotFound = projectNotFound;
exports.quotaExceeded = quotaExceeded;
exports.unauthenticated = unauthenticated;
exports.unauthorized = unauthorized;
exports.retryLimitExceeded = retryLimitExceeded;
exports.invalidChecksum = invalidChecksum;
exports.canceled = canceled;
exports.invalidEventName = invalidEventName;
exports.invalidUrl = invalidUrl;
exports.invalidDefaultBucket = invalidDefaultBucket;
exports.noDefaultBucket = noDefaultBucket;
exports.cannotSliceBlob = cannotSliceBlob;
exports.serverFileWrongSize = serverFileWrongSize;
exports.noDownloadURL = noDownloadURL;
exports.invalidArgument = invalidArgument;
exports.invalidArgumentCount = invalidArgumentCount;
exports.appDeleted = appDeleted;
exports.invalidRootOperation = invalidRootOperation;
exports.invalidFormat = invalidFormat;
exports.internalError = internalError;

var _constants = __webpack_require__(1129);

var FirebaseStorageError = function () {
    function FirebaseStorageError(code, message) {
        this.code_ = prependCode(code);
        this.message_ = 'Firebase Storage: ' + message;
        this.serverResponse_ = null;
        this.name_ = 'FirebaseError';
    }
    FirebaseStorageError.prototype.codeProp = function () {
        return this.code;
    };
    FirebaseStorageError.prototype.codeEquals = function (code) {
        return prependCode(code) === this.codeProp();
    };
    FirebaseStorageError.prototype.serverResponseProp = function () {
        return this.serverResponse_;
    };
    FirebaseStorageError.prototype.setServerResponseProp = function (serverResponse) {
        this.serverResponse_ = serverResponse;
    };
    Object.defineProperty(FirebaseStorageError.prototype, "name", {
        get: function get() {
            return this.name_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError.prototype, "code", {
        get: function get() {
            return this.code_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError.prototype, "message", {
        get: function get() {
            return this.message_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseStorageError.prototype, "serverResponse", {
        get: function get() {
            return this.serverResponse_;
        },
        enumerable: true,
        configurable: true
    });
    return FirebaseStorageError;
}(); /**
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
exports.FirebaseStorageError = FirebaseStorageError;
var errors = exports.errors = {};
var Code = exports.Code = {
    // Shared between all platforms
    UNKNOWN: 'unknown',
    OBJECT_NOT_FOUND: 'object-not-found',
    BUCKET_NOT_FOUND: 'bucket-not-found',
    PROJECT_NOT_FOUND: 'project-not-found',
    QUOTA_EXCEEDED: 'quota-exceeded',
    UNAUTHENTICATED: 'unauthenticated',
    UNAUTHORIZED: 'unauthorized',
    RETRY_LIMIT_EXCEEDED: 'retry-limit-exceeded',
    INVALID_CHECKSUM: 'invalid-checksum',
    CANCELED: 'canceled',
    // JS specific
    INVALID_EVENT_NAME: 'invalid-event-name',
    INVALID_URL: 'invalid-url',
    INVALID_DEFAULT_BUCKET: 'invalid-default-bucket',
    NO_DEFAULT_BUCKET: 'no-default-bucket',
    CANNOT_SLICE_BLOB: 'cannot-slice-blob',
    SERVER_FILE_WRONG_SIZE: 'server-file-wrong-size',
    NO_DOWNLOAD_URL: 'no-download-url',
    INVALID_ARGUMENT: 'invalid-argument',
    INVALID_ARGUMENT_COUNT: 'invalid-argument-count',
    APP_DELETED: 'app-deleted',
    INVALID_ROOT_OPERATION: 'invalid-root-operation',
    INVALID_FORMAT: 'invalid-format',
    INTERNAL_ERROR: 'internal-error'
};
function prependCode(code) {
    return 'storage/' + code;
}
function unknown() {
    var message = 'An unknown error occurred, please check the error payload for ' + 'server response.';
    return new FirebaseStorageError(Code.UNKNOWN, message);
}
function objectNotFound(path) {
    return new FirebaseStorageError(Code.OBJECT_NOT_FOUND, "Object '" + path + "' does not exist.");
}
function bucketNotFound(bucket) {
    return new FirebaseStorageError(Code.BUCKET_NOT_FOUND, "Bucket '" + bucket + "' does not exist.");
}
function projectNotFound(project) {
    return new FirebaseStorageError(Code.PROJECT_NOT_FOUND, "Project '" + project + "' does not exist.");
}
function quotaExceeded(bucket) {
    return new FirebaseStorageError(Code.QUOTA_EXCEEDED, "Quota for bucket '" + bucket + "' exceeded, please view quota on " + 'https://firebase.google.com/pricing/.');
}
function unauthenticated() {
    var message = 'User is not authenticated, please authenticate using Firebase ' + 'Authentication and try again.';
    return new FirebaseStorageError(Code.UNAUTHENTICATED, message);
}
function unauthorized(path) {
    return new FirebaseStorageError(Code.UNAUTHORIZED, "User does not have permission to access '" + path + "'.");
}
function retryLimitExceeded() {
    return new FirebaseStorageError(Code.RETRY_LIMIT_EXCEEDED, 'Max retry time for operation exceeded, please try again.');
}
function invalidChecksum(path, checksum, calculated) {
    return new FirebaseStorageError(Code.INVALID_CHECKSUM, "Uploaded/downloaded object '" + path + "' has checksum '" + checksum + "' which does not match '" + calculated + "'. Please retry the upload/download.");
}
function canceled() {
    return new FirebaseStorageError(Code.CANCELED, 'User canceled the upload/download.');
}
function invalidEventName(name) {
    return new FirebaseStorageError(Code.INVALID_EVENT_NAME, "Invalid event name '" + name + "'.");
}
function invalidUrl(url) {
    return new FirebaseStorageError(Code.INVALID_URL, "Invalid URL '" + url + "'.");
}
function invalidDefaultBucket(bucket) {
    return new FirebaseStorageError(Code.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + bucket + "'.");
}
function noDefaultBucket() {
    return new FirebaseStorageError(Code.NO_DEFAULT_BUCKET, 'No default bucket ' + "found. Did you set the '" + _constants.configOption + "' property when initializing the app?");
}
function cannotSliceBlob() {
    return new FirebaseStorageError(Code.CANNOT_SLICE_BLOB, 'Cannot slice blob for upload. Please retry the upload.');
}
function serverFileWrongSize() {
    return new FirebaseStorageError(Code.SERVER_FILE_WRONG_SIZE, 'Server recorded incorrect upload file size, please retry the upload.');
}
function noDownloadURL() {
    return new FirebaseStorageError(Code.NO_DOWNLOAD_URL, 'The given file does not have any download URLs.');
}
function invalidArgument(index, fnName, message) {
    return new FirebaseStorageError(Code.INVALID_ARGUMENT, 'Invalid argument in `' + fnName + '` at index ' + index + ': ' + message);
}
function invalidArgumentCount(argMin, argMax, fnName, real) {
    var countPart;
    var plural;
    if (argMin === argMax) {
        countPart = argMin;
        plural = argMin === 1 ? 'argument' : 'arguments';
    } else {
        countPart = 'between ' + argMin + ' and ' + argMax;
        plural = 'arguments';
    }
    return new FirebaseStorageError(Code.INVALID_ARGUMENT_COUNT, 'Invalid argument count in `' + fnName + '`: Expected ' + countPart + ' ' + plural + ', received ' + real + '.');
}
function appDeleted() {
    return new FirebaseStorageError(Code.APP_DELETED, 'The Firebase app was deleted.');
}
/**
 * @param name The name of the operation that was invalid.
 */
function invalidRootOperation(name) {
    return new FirebaseStorageError(Code.INVALID_ROOT_OPERATION, "The operation '" + name + "' cannot be performed on a root reference, create a non-root " + "reference using child, such as .child('file.png').");
}
/**
 * @param format The format that was not valid.
 * @param message A message describing the format violation.
 */
function invalidFormat(format, message) {
    return new FirebaseStorageError(Code.INVALID_FORMAT, "String does not match format '" + format + "': " + message);
}
/**
 * @param message A message describing the internal error.
 */
function internalError(message) {
    throw new FirebaseStorageError(Code.INTERNAL_ERROR, 'Internal error: ' + message);
}
//# sourceMappingURL=error.js.map


/***/ }),

/***/ 1127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.make = make;
exports.resolve = resolve;
exports.reject = reject;

var _promise = __webpack_require__(63);

function make(resolver) {
  return new _promise.PromiseImpl(resolver);
}
/**
 * @template T
 */
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * @fileoverview Implements the promise abstraction interface for external
 * (public SDK) packaging, which just passes through to the firebase-app impl.
 */
/**
 * @template T
 * @param {function((function(T): void),
 *                  (function(!Error): void))} resolver
 */
function resolve(value) {
  return _promise.PromiseImpl.resolve(value);
}
function reject(error) {
  return _promise.PromiseImpl.reject(error);
}
//# sourceMappingURL=promise_external.js.map


/***/ }),

/***/ 1128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.contains = contains;
exports.forEach = forEach;
exports.clone = clone;
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * @fileoverview Contains methods for working with objects.
 */
function contains(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
function forEach(obj, f) {
    for (var key in obj) {
        if (contains(obj, key)) {
            f(key, obj[key]);
        }
    }
}
function clone(obj) {
    if (obj == null) {
        return {};
    }
    var c = {};
    forEach(obj, function (key, val) {
        c[key] = val;
    });
    return c;
}
//# sourceMappingURL=object.js.map


/***/ }),

/***/ 1129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDomainBase = setDomainBase;
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * @fileoverview Constants used in the Firebase Storage library.
 */
/**
 * Domain and scheme for API calls.
 */
var domainBase = exports.domainBase = 'https://firebasestorage.googleapis.com';
/**
 * Domain and scheme for object downloads.
 */
var downloadBase = exports.downloadBase = 'https://firebasestorage.googleapis.com';
/**
 * Base URL for non-upload calls to the API.
 */
var apiBaseUrl = exports.apiBaseUrl = '/v0';
/**
 * Base URL for upload calls to the API.
 */
var apiUploadBaseUrl = exports.apiUploadBaseUrl = '/v0';
function setDomainBase(domainBase) {
  domainBase = domainBase;
}
var configOption = exports.configOption = 'storageBucket';
/**
 * 1 minute
 */
var shortMaxOperationRetryTime = exports.shortMaxOperationRetryTime = 1 * 60 * 1000;
/**
 * 2 minutes
 */
var defaultMaxOperationRetryTime = exports.defaultMaxOperationRetryTime = 2 * 60 * 1000;
/**
 * 10 minutes
 */
var defaultMaxUploadRetryTime = exports.defaultMaxUploadRetryTime = 10 * 60 * 100;
/**
 * This is the value of Number.MIN_SAFE_INTEGER, which is not well supported
 * enough for us to use it directly.
 */
var minSafeInteger = exports.minSafeInteger = -9007199254740991;
//# sourceMappingURL=constants.js.map


/***/ }),

/***/ 1130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Location = undefined;

var _error = __webpack_require__(1126);

var errorsExports = _interopRequireWildcard(_error);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @struct
 */
var Location = function () {
    function Location(bucket, path) {
        this.bucket = bucket;
        this.path_ = path;
    }
    Object.defineProperty(Location.prototype, "path", {
        get: function get() {
            return this.path_;
        },
        enumerable: true,
        configurable: true
    });
    Location.prototype.fullServerUrl = function () {
        var encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o/' + encode(this.path);
    };
    Location.prototype.bucketOnlyServerUrl = function () {
        var encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o';
    };
    Location.makeFromBucketSpec = function (bucketString) {
        var bucketLocation;
        try {
            bucketLocation = Location.makeFromUrl(bucketString);
        } catch (e) {
            // Not valid URL, use as-is. This lets you put bare bucket names in
            // config.
            return new Location(bucketString, '');
        }
        if (bucketLocation.path === '') {
            return bucketLocation;
        } else {
            throw errorsExports.invalidDefaultBucket(bucketString);
        }
    };
    Location.makeFromUrl = function (url) {
        var location = null;
        var bucketDomain = '([A-Za-z0-9.\\-]+)';
        function gsModify(loc) {
            if (loc.path.charAt(loc.path.length - 1) === '/') {
                loc.path_ = loc.path_.slice(0, -1);
            }
        }
        var gsPath = '(/(.*))?$';
        var path = '(/([^?#]*).*)?$';
        var gsRegex = new RegExp('^gs://' + bucketDomain + gsPath, 'i');
        var gsIndices = { bucket: 1, path: 3 };
        function httpModify(loc) {
            loc.path_ = decodeURIComponent(loc.path);
        }
        var version = 'v[A-Za-z0-9_]+';
        var httpRegex = new RegExp('^https?://firebasestorage\\.googleapis\\.com/' + version + '/b/' + bucketDomain + '/o' + path, 'i');
        var httpIndices = { bucket: 1, path: 3 };
        var groups = [{ regex: gsRegex, indices: gsIndices, postModify: gsModify }, { regex: httpRegex, indices: httpIndices, postModify: httpModify }];
        for (var i = 0; i < groups.length; i++) {
            var group = groups[i];
            var captures = group.regex.exec(url);
            if (captures) {
                var bucketValue = captures[group.indices.bucket];
                var pathValue = captures[group.indices.path];
                if (!pathValue) {
                    pathValue = '';
                }
                location = new Location(bucketValue, pathValue);
                group.postModify(location);
                break;
            }
        }
        if (location == null) {
            throw errorsExports.invalidUrl(url);
        }
        return location;
    };
    return Location;
}(); /**
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
 * @fileoverview Functionality related to the parsing/composition of bucket/
 * object location.
 */
exports.Location = Location;
//# sourceMappingURL=location.js.map


/***/ }),

/***/ 1131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */

/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


Object.defineProperty(exports, "__esModule", {
    value: true
});
var CODES = {
    AVAILABLE_IN_WINDOW: 'only-available-in-window',
    AVAILABLE_IN_SW: 'only-available-in-sw',
    SHOULD_BE_INHERITED: 'should-be-overriden',
    BAD_SENDER_ID: 'bad-sender-id',
    INCORRECT_GCM_SENDER_ID: 'incorrect-gcm-sender-id',
    PERMISSION_DEFAULT: 'permission-default',
    PERMISSION_BLOCKED: 'permission-blocked',
    UNSUPPORTED_BROWSER: 'unsupported-browser',
    NOTIFICATIONS_BLOCKED: 'notifications-blocked',
    FAILED_DEFAULT_REGISTRATION: 'failed-serviceworker-registration',
    SW_REGISTRATION_EXPECTED: 'sw-registration-expected',
    GET_SUBSCRIPTION_FAILED: 'get-subscription-failed',
    INVALID_SAVED_TOKEN: 'invalid-saved-token',
    SW_REG_REDUNDANT: 'sw-reg-redundant',
    TOKEN_SUBSCRIBE_FAILED: 'token-subscribe-failed',
    TOKEN_SUBSCRIBE_NO_TOKEN: 'token-subscribe-no-token',
    TOKEN_SUBSCRIBE_NO_PUSH_SET: 'token-subscribe-no-push-set',
    USE_SW_BEFORE_GET_TOKEN: 'use-sw-before-get-token',
    INVALID_DELETE_TOKEN: 'invalid-delete-token',
    DELETE_TOKEN_NOT_FOUND: 'delete-token-not-found',
    DELETE_SCOPE_NOT_FOUND: 'delete-scope-not-found',
    BG_HANDLER_FUNCTION_EXPECTED: 'bg-handler-function-expected',
    NO_WINDOW_CLIENT_TO_MSG: 'no-window-client-to-msg',
    UNABLE_TO_RESUBSCRIBE: 'unable-to-resubscribe',
    NO_FCM_TOKEN_FOR_RESUBSCRIBE: 'no-fcm-token-for-resubscribe',
    FAILED_TO_DELETE_TOKEN: 'failed-to-delete-token',
    NO_SW_IN_REG: 'no-sw-in-reg',
    BAD_SCOPE: 'bad-scope',
    BAD_VAPID_KEY: 'bad-vapid-key',
    BAD_SUBSCRIPTION: 'bad-subscription',
    BAD_TOKEN: 'bad-token',
    BAD_PUSH_SET: 'bad-push-set',
    FAILED_DELETE_VAPID_KEY: 'failed-delete-vapid-key'
};
var ERROR_MAP = (_a = {}, _a[CODES.AVAILABLE_IN_WINDOW] = 'This method is available in a Window context.', _a[CODES.AVAILABLE_IN_SW] = 'This method is available in a service worker ' + 'context.', _a[CODES.SHOULD_BE_INHERITED] = 'This method should be overriden by ' + 'extended classes.', _a[CODES.BAD_SENDER_ID] = "Please ensure that 'messagingSenderId' is set " + 'correctly in the options passed into firebase.initializeApp().', _a[CODES.PERMISSION_DEFAULT] = 'The required permissions were not granted and ' + 'dismissed instead.', _a[CODES.PERMISSION_BLOCKED] = 'The required permissions were not granted and ' + 'blocked instead.', _a[CODES.UNSUPPORTED_BROWSER] = "This browser doesn't support the API's " + 'required to use the firebase SDK.', _a[CODES.NOTIFICATIONS_BLOCKED] = 'Notifications have been blocked.', _a[CODES.FAILED_DEFAULT_REGISTRATION] = 'We are unable to register the ' + 'default service worker. {$browserErrorMessage}', _a[CODES.SW_REGISTRATION_EXPECTED] = 'A service worker registration was the ' + 'expected input.', _a[CODES.GET_SUBSCRIPTION_FAILED] = 'There was an error when trying to get ' + 'any existing Push Subscriptions.', _a[CODES.INVALID_SAVED_TOKEN] = 'Unable to access details of the saved token.', _a[CODES.SW_REG_REDUNDANT] = 'The service worker being used for push was made ' + 'redundant.', _a[CODES.TOKEN_SUBSCRIBE_FAILED] = 'A problem occured while subscribing the ' + 'user to FCM: {$message}', _a[CODES.TOKEN_SUBSCRIBE_NO_TOKEN] = 'FCM returned no token when subscribing ' + 'the user to push.', _a[CODES.TOKEN_SUBSCRIBE_NO_PUSH_SET] = 'FCM returned an invalid response ' + 'when getting an FCM token.', _a[CODES.USE_SW_BEFORE_GET_TOKEN] = 'You must call useServiceWorker() before ' + 'calling getToken() to ensure your service worker is used.', _a[CODES.INVALID_DELETE_TOKEN] = 'You must pass a valid token into ' + 'deleteToken(), i.e. the token from getToken().', _a[CODES.DELETE_TOKEN_NOT_FOUND] = 'The deletion attempt for token could not ' + 'be performed as the token was not found.', _a[CODES.DELETE_SCOPE_NOT_FOUND] = 'The deletion attempt for service worker ' + 'scope could not be performed as the scope was not found.', _a[CODES.BG_HANDLER_FUNCTION_EXPECTED] = 'The input to ' + 'setBackgroundMessageHandler() must be a function.', _a[CODES.NO_WINDOW_CLIENT_TO_MSG] = 'An attempt was made to message a ' + 'non-existant window client.', _a[CODES.UNABLE_TO_RESUBSCRIBE] = 'There was an error while re-subscribing ' + 'the FCM token for push messaging. Will have to resubscribe the ' + 'user on next visit. {$message}', _a[CODES.NO_FCM_TOKEN_FOR_RESUBSCRIBE] = 'Could not find an FCM token ' + 'and as a result, unable to resubscribe. Will have to resubscribe the ' + 'user on next visit.', _a[CODES.FAILED_TO_DELETE_TOKEN] = 'Unable to delete the currently saved token.', _a[CODES.NO_SW_IN_REG] = 'Even though the service worker registration was ' + 'successful, there was a problem accessing the service worker itself.', _a[CODES.INCORRECT_GCM_SENDER_ID] = "Please change your web app manifest's " + "'gcm_sender_id' value to '103953800507' to use Firebase messaging.", _a[CODES.BAD_SCOPE] = 'The service worker scope must be a string with at ' + 'least one character.', _a[CODES.BAD_VAPID_KEY] = 'The public VAPID key must be a string with at ' + 'least one character.', _a[CODES.BAD_SUBSCRIPTION] = 'The subscription must be a valid ' + 'PushSubscription.', _a[CODES.BAD_TOKEN] = 'The FCM Token used for storage / lookup was not ' + 'a valid token string.', _a[CODES.BAD_PUSH_SET] = 'The FCM push set used for storage / lookup was not ' + 'not a valid push set string.', _a[CODES.FAILED_DELETE_VAPID_KEY] = 'The VAPID key could not be deleted.', _a);
exports.default = {
    codes: CODES,
    map: ERROR_MAP
};

var _a;
module.exports = exports['default'];
//# sourceMappingURL=errors.js.map


/***/ }),

/***/ 1132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StringData = exports.StringFormat = undefined;
exports.formatValidator = formatValidator;
exports.dataFromString = dataFromString;
exports.utf8Bytes_ = utf8Bytes_;
exports.percentEncodedBytes_ = percentEncodedBytes_;
exports.base64Bytes_ = base64Bytes_;
exports.dataURLBytes_ = dataURLBytes_;
exports.dataURLContentType_ = dataURLContentType_;

var _error = __webpack_require__(1126);

var errorsExports = _interopRequireWildcard(_error);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var StringFormat = exports.StringFormat = {
    RAW: 'raw',
    BASE64: 'base64',
    BASE64URL: 'base64url',
    DATA_URL: 'data_url'
}; /**
   * Copyright 2017 Google Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
function formatValidator(stringFormat) {
    switch (stringFormat) {
        case StringFormat.RAW:
        case StringFormat.BASE64:
        case StringFormat.BASE64URL:
        case StringFormat.DATA_URL:
            return;
        default:
            throw 'Expected one of the event types: [' + StringFormat.RAW + ', ' + StringFormat.BASE64 + ', ' + StringFormat.BASE64URL + ', ' + StringFormat.DATA_URL + '].';
    }
}
/**
 * @struct
 */
var StringData = function () {
    function StringData(data, opt_contentType) {
        this.data = data;
        this.contentType = opt_contentType || null;
    }
    return StringData;
}();
exports.StringData = StringData;
function dataFromString(format, string) {
    switch (format) {
        case StringFormat.RAW:
            return new StringData(utf8Bytes_(string));
        case StringFormat.BASE64:
        case StringFormat.BASE64URL:
            return new StringData(base64Bytes_(format, string));
        case StringFormat.DATA_URL:
            return new StringData(dataURLBytes_(string), dataURLContentType_(string));
    }
    // assert(false);
    throw errorsExports.unknown();
}
function utf8Bytes_(string) {
    var b = [];
    for (var i = 0; i < string.length; i++) {
        var c = string.charCodeAt(i);
        if (c <= 127) {
            b.push(c);
        } else {
            if (c <= 2047) {
                b.push(192 | c >> 6, 128 | c & 63);
            } else {
                if ((c & 64512) == 55296) {
                    // The start of a surrogate pair.
                    var valid = i < string.length - 1 && (string.charCodeAt(i + 1) & 64512) == 56320;
                    if (!valid) {
                        // The second surrogate wasn't there.
                        b.push(239, 191, 189);
                    } else {
                        var hi = c;
                        var lo = string.charCodeAt(++i);
                        c = 65536 | (hi & 1023) << 10 | lo & 1023;
                        b.push(240 | c >> 18, 128 | c >> 12 & 63, 128 | c >> 6 & 63, 128 | c & 63);
                    }
                } else {
                    if ((c & 64512) == 56320) {
                        // Invalid low surrogate.
                        b.push(239, 191, 189);
                    } else {
                        b.push(224 | c >> 12, 128 | c >> 6 & 63, 128 | c & 63);
                    }
                }
            }
        }
    }
    return new Uint8Array(b);
}
function percentEncodedBytes_(string) {
    var decoded;
    try {
        decoded = decodeURIComponent(string);
    } catch (e) {
        throw errorsExports.invalidFormat(StringFormat.DATA_URL, 'Malformed data URL.');
    }
    return utf8Bytes_(decoded);
}
function base64Bytes_(format, string) {
    switch (format) {
        case StringFormat.BASE64:
            {
                var hasMinus = string.indexOf('-') !== -1;
                var hasUnder = string.indexOf('_') !== -1;
                if (hasMinus || hasUnder) {
                    var invalidChar = hasMinus ? '-' : '_';
                    throw errorsExports.invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64url encoded?");
                }
                break;
            }
        case StringFormat.BASE64URL:
            {
                var hasPlus = string.indexOf('+') !== -1;
                var hasSlash = string.indexOf('/') !== -1;
                if (hasPlus || hasSlash) {
                    var invalidChar = hasPlus ? '+' : '/';
                    throw errorsExports.invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64 encoded?");
                }
                string = string.replace(/-/g, '+').replace(/_/g, '/');
                break;
            }
    }
    var bytes;
    try {
        bytes = atob(string);
    } catch (e) {
        throw errorsExports.invalidFormat(format, 'Invalid character found');
    }
    var array = new Uint8Array(bytes.length);
    for (var i = 0; i < bytes.length; i++) {
        array[i] = bytes.charCodeAt(i);
    }
    return array;
}
/**
 * @struct
 */
var DataURLParts = function () {
    function DataURLParts(dataURL) {
        this.base64 = false;
        this.contentType = null;
        var matches = dataURL.match(/^data:([^,]+)?,/);
        if (matches === null) {
            throw errorsExports.invalidFormat(StringFormat.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
        }
        var middle = matches[1] || null;
        if (middle != null) {
            this.base64 = endsWith(middle, ';base64');
            this.contentType = this.base64 ? middle.substring(0, middle.length - ';base64'.length) : middle;
        }
        this.rest = dataURL.substring(dataURL.indexOf(',') + 1);
    }
    return DataURLParts;
}();
function dataURLBytes_(string) {
    var parts = new DataURLParts(string);
    if (parts.base64) {
        return base64Bytes_(StringFormat.BASE64, parts.rest);
    } else {
        return percentEncodedBytes_(parts.rest);
    }
}
function dataURLContentType_(string) {
    var parts = new DataURLParts(string);
    return parts.contentType;
}
function endsWith(s, end) {
    var longEnough = s.length >= end.length;
    if (!longEnough) {
        return false;
    }
    return s.substring(s.length - end.length) === end;
}
//# sourceMappingURL=string.js.map


/***/ }),

/***/ 1133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArgSpec = undefined;
exports.validate = validate;
exports.and_ = and_;
exports.stringSpec = stringSpec;
exports.uploadDataSpec = uploadDataSpec;
exports.metadataSpec = metadataSpec;
exports.nonNegativeNumberSpec = nonNegativeNumberSpec;
exports.looseObjectSpec = looseObjectSpec;
exports.nullFunctionSpec = nullFunctionSpec;

var _error = __webpack_require__(1126);

var errorsExports = _interopRequireWildcard(_error);

var _metadata = __webpack_require__(1134);

var MetadataUtils = _interopRequireWildcard(_metadata);

var _type = __webpack_require__(1125);

var type = _interopRequireWildcard(_type);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @param name Name of the function.
 * @param specs Argument specs.
 * @param passed The actual arguments passed to the function.
 * @throws {fbs.Error} If the arguments are invalid.
 */
function validate(name, specs, passed) {
    var minArgs = specs.length;
    var maxArgs = specs.length;
    for (var i = 0; i < specs.length; i++) {
        if (specs[i].optional) {
            minArgs = i;
            break;
        }
    }
    var validLength = minArgs <= passed.length && passed.length <= maxArgs;
    if (!validLength) {
        throw errorsExports.invalidArgumentCount(minArgs, maxArgs, name, passed.length);
    }
    for (var i = 0; i < passed.length; i++) {
        try {
            specs[i].validator(passed[i]);
        } catch (e) {
            if (e instanceof Error) {
                throw errorsExports.invalidArgument(i, name, e.message);
            } else {
                throw errorsExports.invalidArgument(i, name, e);
            }
        }
    }
}
/**
 * @struct
 */
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ArgSpec = function () {
    function ArgSpec(validator, opt_optional) {
        var self = this;
        this.validator = function (p) {
            if (self.optional && !type.isJustDef(p)) {
                return;
            }
            validator(p);
        };
        this.optional = !!opt_optional;
    }
    return ArgSpec;
}();
exports.ArgSpec = ArgSpec;
function and_(v1, v2) {
    return function (p) {
        v1(p);
        v2(p);
    };
}
function stringSpec(opt_validator, opt_optional) {
    function stringValidator(p) {
        if (!type.isString(p)) {
            throw 'Expected string.';
        }
    }
    var validator;
    if (opt_validator) {
        validator = and_(stringValidator, opt_validator);
    } else {
        validator = stringValidator;
    }
    return new ArgSpec(validator, opt_optional);
}
function uploadDataSpec() {
    function validator(p) {
        var valid = p instanceof Uint8Array || p instanceof ArrayBuffer || type.isNativeBlobDefined() && p instanceof Blob;
        if (!valid) {
            throw 'Expected Blob or File.';
        }
    }
    return new ArgSpec(validator);
}
function metadataSpec(opt_optional) {
    return new ArgSpec(MetadataUtils.metadataValidator, opt_optional);
}
function nonNegativeNumberSpec() {
    function validator(p) {
        var valid = type.isNumber(p) && p >= 0;
        if (!valid) {
            throw 'Expected a number 0 or greater.';
        }
    }
    return new ArgSpec(validator);
}
function looseObjectSpec(opt_validator, opt_optional) {
    function validator(p) {
        var isLooseObject = p === null || type.isDef(p) && p instanceof Object;
        if (!isLooseObject) {
            throw 'Expected an Object.';
        }
        if (opt_validator !== undefined && opt_validator !== null) {
            opt_validator(p);
        }
    }
    return new ArgSpec(validator, opt_optional);
}
function nullFunctionSpec(opt_optional) {
    function validator(p) {
        var valid = p === null || type.isFunction(p);
        if (!valid) {
            throw 'Expected a Function.';
        }
    }
    return new ArgSpec(validator, opt_optional);
}
//# sourceMappingURL=args.js.map


/***/ }),

/***/ 1134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Mapping = undefined;
exports.noXform_ = noXform_;
exports.xformPath = xformPath;
exports.getMappings = getMappings;
exports.addRef = addRef;
exports.fromResource = fromResource;
exports.fromResourceString = fromResourceString;
exports.toResourceString = toResourceString;
exports.metadataValidator = metadataValidator;

var _json = __webpack_require__(1151);

var json = _interopRequireWildcard(_json);

var _location = __webpack_require__(1130);

var _path = __webpack_require__(1140);

var path = _interopRequireWildcard(_path);

var _type = __webpack_require__(1125);

var type = _interopRequireWildcard(_type);

var _url = __webpack_require__(1135);

var UrlUtils = _interopRequireWildcard(_url);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function noXform_(metadata, value) {
    return value;
}
/**
 * @struct
 */
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Mapping = function () {
    function Mapping(server, opt_local, opt_writable, opt_xform) {
        this.server = server;
        this.local = opt_local || server;
        this.writable = !!opt_writable;
        this.xform = opt_xform || noXform_;
    }
    return Mapping;
}();
exports.Mapping = Mapping;

var mappings_ = null;
function xformPath(fullPath) {
    var valid = type.isString(fullPath);
    if (!valid || fullPath.length < 2) {
        return fullPath;
    } else {
        fullPath = fullPath;
        return path.lastComponent(fullPath);
    }
}
function getMappings() {
    if (mappings_) {
        return mappings_;
    }
    var mappings = [];
    mappings.push(new Mapping('bucket'));
    mappings.push(new Mapping('generation'));
    mappings.push(new Mapping('metageneration'));
    mappings.push(new Mapping('name', 'fullPath', true));
    function mappingsXformPath(metadata, fullPath) {
        return xformPath(fullPath);
    }
    var nameMapping = new Mapping('name');
    nameMapping.xform = mappingsXformPath;
    mappings.push(nameMapping);
    /**
     * Coerces the second param to a number, if it is defined.
     */
    function xformSize(metadata, size) {
        if (type.isDef(size)) {
            return +size;
        } else {
            return size;
        }
    }
    var sizeMapping = new Mapping('size');
    sizeMapping.xform = xformSize;
    mappings.push(sizeMapping);
    mappings.push(new Mapping('timeCreated'));
    mappings.push(new Mapping('updated'));
    mappings.push(new Mapping('md5Hash', null, true));
    mappings.push(new Mapping('cacheControl', null, true));
    mappings.push(new Mapping('contentDisposition', null, true));
    mappings.push(new Mapping('contentEncoding', null, true));
    mappings.push(new Mapping('contentLanguage', null, true));
    mappings.push(new Mapping('contentType', null, true));
    mappings.push(new Mapping('metadata', 'customMetadata', true));
    /**
     * Transforms a comma-separated string of tokens into a list of download
     * URLs.
     */
    function xformTokens(metadata, tokens) {
        var valid = type.isString(tokens) && tokens.length > 0;
        if (!valid) {
            // This can happen if objects are uploaded through GCS and retrieved
            // through list, so we don't want to throw an Error.
            return [];
        }
        var encode = encodeURIComponent;
        var tokensList = tokens.split(',');
        var urls = tokensList.map(function (token) {
            var bucket = metadata['bucket'];
            var path = metadata['fullPath'];
            var urlPart = '/b/' + encode(bucket) + '/o/' + encode(path);
            var base = UrlUtils.makeDownloadUrl(urlPart);
            var queryString = UrlUtils.makeQueryString({
                alt: 'media',
                token: token
            });
            return base + queryString;
        });
        return urls;
    }
    mappings.push(new Mapping('downloadTokens', 'downloadURLs', false, xformTokens));
    mappings_ = mappings;
    return mappings_;
}
function addRef(metadata, authWrapper) {
    function generateRef() {
        var bucket = metadata['bucket'];
        var path = metadata['fullPath'];
        var loc = new _location.Location(bucket, path);
        return authWrapper.makeStorageReference(loc);
    }
    Object.defineProperty(metadata, 'ref', { get: generateRef });
}
function fromResource(authWrapper, resource, mappings) {
    var metadata = {};
    metadata['type'] = 'file';
    var len = mappings.length;
    for (var i = 0; i < len; i++) {
        var mapping = mappings[i];
        metadata[mapping.local] = mapping.xform(metadata, resource[mapping.server]);
    }
    addRef(metadata, authWrapper);
    return metadata;
}
function fromResourceString(authWrapper, resourceString, mappings) {
    var obj = json.jsonObjectOrNull(resourceString);
    if (obj === null) {
        return null;
    }
    var resource = obj;
    return fromResource(authWrapper, resource, mappings);
}
function toResourceString(metadata, mappings) {
    var resource = {};
    var len = mappings.length;
    for (var i = 0; i < len; i++) {
        var mapping = mappings[i];
        if (mapping.writable) {
            resource[mapping.server] = metadata[mapping.local];
        }
    }
    return JSON.stringify(resource);
}
function metadataValidator(p) {
    var validType = p && type.isObject(p);
    if (!validType) {
        throw 'Expected Metadata object.';
    }
    for (var key in p) {
        var val = p[key];
        if (key === 'customMetadata') {
            if (!type.isObject(val)) {
                throw 'Expected object for \'customMetadata\' mapping.';
            }
        } else {
            if (type.isNonNullObject(val)) {
                throw "Mapping for '" + key + "' cannot be an object.";
            }
        }
    }
}
//# sourceMappingURL=metadata.js.map


/***/ }),

/***/ 1135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.makeNormalUrl = makeNormalUrl;
exports.makeDownloadUrl = makeDownloadUrl;
exports.makeUploadUrl = makeUploadUrl;
exports.makeQueryString = makeQueryString;

var _constants = __webpack_require__(1129);

var constants = _interopRequireWildcard(_constants);

var _object = __webpack_require__(1128);

var object = _interopRequireWildcard(_object);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * @fileoverview Functions to create and manipulate URLs for the server API.
 */
function makeNormalUrl(urlPart) {
    return constants.domainBase + constants.apiBaseUrl + urlPart;
}
function makeDownloadUrl(urlPart) {
    return constants.downloadBase + constants.apiBaseUrl + urlPart;
}
function makeUploadUrl(urlPart) {
    return constants.domainBase + constants.apiUploadBaseUrl + urlPart;
}
function makeQueryString(params) {
    var encode = encodeURIComponent;
    var queryPart = '?';
    object.forEach(params, function (key, val) {
        var nextPart = encode(key) + '=' + encode(val);
        queryPart = queryPart + nextPart + '&';
    });
    // Chop off the extra '&' or '?' on the end
    queryPart = queryPart.slice(0, -1);
    return queryPart;
}
//# sourceMappingURL=url.js.map


/***/ }),

/***/ 1136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.contains = contains;
exports.clone = clone;
exports.remove = remove;
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * Returns true if the object is contained in the array (compared with ===).
 * @template T
 */
function contains(array, elem) {
    return array.indexOf(elem) !== -1;
}
/**
 * Returns a shallow copy of the array or array-like object (e.g. arguments).
 * @template T
 */
function clone(arraylike) {
    return Array.prototype.slice.call(arraylike);
}
/**
 * Removes the given element from the given array, if it is contained.
 * Directly modifies the passed-in array.
 * @template T
 */
function remove(array, elem) {
    var i = array.indexOf(elem);
    if (i !== -1) {
        array.splice(i, 1);
    }
}
//# sourceMappingURL=array.js.map


/***/ }),

/***/ 1137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.taskStateFromInternalTaskState = taskStateFromInternalTaskState;
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var TaskEvent = exports.TaskEvent = {
    /** Triggered whenever the task changes or progress is updated. */
    STATE_CHANGED: 'state_changed'
};
var InternalTaskState = exports.InternalTaskState = {
    RUNNING: 'running',
    PAUSING: 'pausing',
    PAUSED: 'paused',
    SUCCESS: 'success',
    CANCELING: 'canceling',
    CANCELED: 'canceled',
    ERROR: 'error'
};
var TaskState = exports.TaskState = {
    /** The task is currently transferring data. */
    RUNNING: 'running',
    /** The task was paused by the user. */
    PAUSED: 'paused',
    /** The task completed successfully. */
    SUCCESS: 'success',
    /** The task was canceled. */
    CANCELED: 'canceled',
    /** The task failed with an error. */
    ERROR: 'error'
};
function taskStateFromInternalTaskState(state) {
    switch (state) {
        case InternalTaskState.RUNNING:
        case InternalTaskState.PAUSING:
        case InternalTaskState.CANCELING:
            return TaskState.RUNNING;
        case InternalTaskState.PAUSED:
            return TaskState.PAUSED;
        case InternalTaskState.SUCCESS:
            return TaskState.SUCCESS;
        case InternalTaskState.CANCELED:
            return TaskState.CANCELED;
        case InternalTaskState.ERROR:
            return TaskState.ERROR;
        default:
            // TODO(andysoto): assert(false);
            return TaskState.ERROR;
    }
}
//# sourceMappingURL=taskenums.js.map


/***/ }),

/***/ 1138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * @enum{number}
 */
var ErrorCode = exports.ErrorCode = undefined;
(function (ErrorCode) {
    ErrorCode[ErrorCode["NO_ERROR"] = 0] = "NO_ERROR";
    ErrorCode[ErrorCode["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
    ErrorCode[ErrorCode["ABORT"] = 2] = "ABORT";
})(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
//# sourceMappingURL=xhrio.js.map


/***/ }),

/***/ 1139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Reference = undefined;

var _args = __webpack_require__(1133);

var args = _interopRequireWildcard(_args);

var _blob = __webpack_require__(1141);

var _error = __webpack_require__(1126);

var errorsExports = _interopRequireWildcard(_error);

var _location = __webpack_require__(1130);

var _metadata = __webpack_require__(1134);

var metadata = _interopRequireWildcard(_metadata);

var _object = __webpack_require__(1128);

var object = _interopRequireWildcard(_object);

var _path = __webpack_require__(1140);

var path = _interopRequireWildcard(_path);

var _requests = __webpack_require__(1142);

var requests = _interopRequireWildcard(_requests);

var _string = __webpack_require__(1132);

var fbsString = _interopRequireWildcard(_string);

var _type = __webpack_require__(1125);

var type = _interopRequireWildcard(_type);

var _task = __webpack_require__(1154);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Provides methods to interact with a bucket in the Firebase Storage service.
 * @param location An fbs.location, or the URL at
 *     which to base this object, in one of the following forms:
 *         gs://<bucket>/<object-path>
 *         http[s]://firebasestorage.googleapis.com/
 *                     <api-version>/b/<bucket>/o/<object-path>
 *     Any query or fragment strings will be ignored in the http[s]
 *     format. If no value is passed, the storage object will use a URL based on
 *     the project ID of the base firebase.App instance.
 */
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * @fileoverview Defines the Firebase Storage Reference class.
 */
var Reference = function () {
    function Reference(authWrapper, location) {
        this.authWrapper = authWrapper;
        if (location instanceof _location.Location) {
            this.location = location;
        } else {
            this.location = _location.Location.makeFromUrl(location);
        }
    }
    /**
     * @return The URL for the bucket and path this object references,
     *     in the form gs://<bucket>/<object-path>
     * @override
     */
    Reference.prototype.toString = function () {
        args.validate('toString', [], arguments);
        return 'gs://' + this.location.bucket + '/' + this.location.path;
    };
    Reference.prototype.newRef = function (authWrapper, location) {
        return new Reference(authWrapper, location);
    };
    Reference.prototype.mappings = function () {
        return metadata.getMappings();
    };
    /**
     * @return A reference to the object obtained by
     *     appending childPath, removing any duplicate, beginning, or trailing
     *     slashes.
     */
    Reference.prototype.child = function (childPath) {
        args.validate('child', [args.stringSpec()], arguments);
        var newPath = path.child(this.location.path, childPath);
        var location = new _location.Location(this.location.bucket, newPath);
        return this.newRef(this.authWrapper, location);
    };
    Object.defineProperty(Reference.prototype, "parent", {
        /**
         * @return A reference to the parent of the
         *     current object, or null if the current object is the root.
         */
        get: function get() {
            var newPath = path.parent(this.location.path);
            if (newPath === null) {
                return null;
            }
            var location = new _location.Location(this.location.bucket, newPath);
            return this.newRef(this.authWrapper, location);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "root", {
        /**
         * @return An reference to the root of this
         *     object's bucket.
         */
        get: function get() {
            var location = new _location.Location(this.location.bucket, '');
            return this.newRef(this.authWrapper, location);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "bucket", {
        get: function get() {
            return this.location.bucket;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "fullPath", {
        get: function get() {
            return this.location.path;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "name", {
        get: function get() {
            return path.lastComponent(this.location.path);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "storage", {
        get: function get() {
            return this.authWrapper.service();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Uploads a blob to this object's location.
     * @param data The blob to upload.
     * @return An UploadTask that lets you control and
     *     observe the upload.
     */
    Reference.prototype.put = function (data, metadata) {
        if (metadata === void 0) {
            metadata = null;
        }
        args.validate('put', [args.uploadDataSpec(), args.metadataSpec(true)], arguments);
        this.throwIfRoot_('put');
        return new _task.UploadTask(this, this.authWrapper, this.location, this.mappings(), new _blob.FbsBlob(data), metadata);
    };
    /**
     * Uploads a string to this object's location.
     * @param string The string to upload.
     * @param opt_format The format of the string to upload.
     * @return An UploadTask that lets you control and
     *     observe the upload.
     */
    Reference.prototype.putString = function (string, format, opt_metadata) {
        if (format === void 0) {
            format = _string.StringFormat.RAW;
        }
        args.validate('putString', [args.stringSpec(), args.stringSpec(fbsString.formatValidator, true), args.metadataSpec(true)], arguments);
        this.throwIfRoot_('putString');
        var data = fbsString.dataFromString(format, string);
        var metadata = object.clone(opt_metadata);
        if (!type.isDef(metadata['contentType']) && type.isDef(data.contentType)) {
            metadata['contentType'] = data.contentType;
        }
        return new _task.UploadTask(this, this.authWrapper, this.location, this.mappings(), new _blob.FbsBlob(data.data, true), metadata);
    };
    /**
     * Deletes the object at this location.
     * @return A promise that resolves if the deletion succeeds.
     */
    Reference.prototype.delete = function () {
        args.validate('delete', [], arguments);
        this.throwIfRoot_('delete');
        var self = this;
        return this.authWrapper.getAuthToken().then(function (authToken) {
            var requestInfo = requests.deleteObject(self.authWrapper, self.location);
            return self.authWrapper.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     *     A promise that resolves with the metadata for this object. If this
     *     object doesn't exist or metadata cannot be retreived, the promise is
     *     rejected.
     */
    Reference.prototype.getMetadata = function () {
        args.validate('getMetadata', [], arguments);
        this.throwIfRoot_('getMetadata');
        var self = this;
        return this.authWrapper.getAuthToken().then(function (authToken) {
            var requestInfo = requests.getMetadata(self.authWrapper, self.location, self.mappings());
            return self.authWrapper.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     * Updates the metadata for this object.
     * @param metadata The new metadata for the object.
     *     Only values that have been explicitly set will be changed. Explicitly
     *     setting a value to null will remove the metadata.
     * @return A promise that resolves
     *     with the new metadata for this object.
     *     @see firebaseStorage.Reference.prototype.getMetadata
     */
    Reference.prototype.updateMetadata = function (metadata) {
        args.validate('updateMetadata', [args.metadataSpec()], arguments);
        this.throwIfRoot_('updateMetadata');
        var self = this;
        return this.authWrapper.getAuthToken().then(function (authToken) {
            var requestInfo = requests.updateMetadata(self.authWrapper, self.location, metadata, self.mappings());
            return self.authWrapper.makeRequest(requestInfo, authToken).getPromise();
        });
    };
    /**
     * @return A promise that resolves with the download
     *     URL for this object.
     */
    Reference.prototype.getDownloadURL = function () {
        args.validate('getDownloadURL', [], arguments);
        this.throwIfRoot_('getDownloadURL');
        return this.getMetadata().then(function (metadata) {
            var url = metadata['downloadURLs'][0];
            if (type.isDef(url)) {
                return url;
            } else {
                throw errorsExports.noDownloadURL();
            }
        });
    };
    Reference.prototype.throwIfRoot_ = function (name) {
        if (this.location.path === '') {
            throw errorsExports.invalidRootOperation(name);
        }
    };
    return Reference;
}();
exports.Reference = Reference;
//# sourceMappingURL=reference.js.map


/***/ }),

/***/ 1140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parent = parent;
exports.child = child;
exports.lastComponent = lastComponent;
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * @fileoverview Contains helper methods for manipulating paths.
 */
/**
 * @return Null if the path is already at the root.
 */
function parent(path) {
    if (path.length == 0) {
        return null;
    }
    var index = path.lastIndexOf('/');
    if (index === -1) {
        return '';
    }
    var newPath = path.slice(0, index);
    return newPath;
}
function child(path, childPath) {
    var canonicalChildPath = childPath.split('/').filter(function (component) {
        return component.length > 0;
    }).join('/');
    if (path.length === 0) {
        return canonicalChildPath;
    } else {
        return path + '/' + canonicalChildPath;
    }
}
/**
 * Returns the last component of a path.
 * '/foo/bar' -> 'bar'
 * '/foo/bar/baz/' -> 'baz/'
 * '/a' -> 'a'
 */
function lastComponent(path) {
    var index = path.lastIndexOf('/', path.length - 2);
    if (index === -1) {
        return path;
    } else {
        return path.slice(index + 1);
    }
}
//# sourceMappingURL=path.js.map


/***/ }),

/***/ 1141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FbsBlob = undefined;

var _fs = __webpack_require__(1152);

var fs = _interopRequireWildcard(_fs);

var _string = __webpack_require__(1132);

var string = _interopRequireWildcard(_string);

var _type = __webpack_require__(1125);

var type = _interopRequireWildcard(_type);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @param opt_elideCopy If true, doesn't copy mutable input data
 *     (e.g. Uint8Arrays). Pass true only if you know the objects will not be
 *     modified after this blob's construction.
 */
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * @file Provides a Blob-like wrapper for various binary types (including the
 * native Blob type). This makes it possible to upload types like ArrayBuffers,
 * making uploads possible in environments without the native Blob type.
 */
var FbsBlob = function () {
    function FbsBlob(data, opt_elideCopy) {
        var size = 0;
        var blobType = '';
        if (type.isNativeBlob(data)) {
            this.data_ = data;
            size = data.size;
            blobType = data.type;
        } else if (data instanceof ArrayBuffer) {
            if (opt_elideCopy) {
                this.data_ = new Uint8Array(data);
            } else {
                this.data_ = new Uint8Array(data.byteLength);
                this.data_.set(new Uint8Array(data));
            }
            size = this.data_.length;
        } else if (data instanceof Uint8Array) {
            if (opt_elideCopy) {
                this.data_ = data;
            } else {
                this.data_ = new Uint8Array(data.length);
                this.data_.set(data);
            }
            size = data.length;
        }
        this.size_ = size;
        this.type_ = blobType;
    }
    FbsBlob.prototype.size = function () {
        return this.size_;
    };
    FbsBlob.prototype.type = function () {
        return this.type_;
    };
    FbsBlob.prototype.slice = function (startByte, endByte) {
        if (type.isNativeBlob(this.data_)) {
            var realBlob = this.data_;
            var sliced = fs.sliceBlob(realBlob, startByte, endByte);
            if (sliced === null) {
                return null;
            }
            return new FbsBlob(sliced);
        } else {
            var slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
            return new FbsBlob(slice, true);
        }
    };
    FbsBlob.getBlob = function () {
        var var_args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            var_args[_i] = arguments[_i];
        }
        if (type.isNativeBlobDefined()) {
            var blobby = var_args.map(function (val) {
                if (val instanceof FbsBlob) {
                    return val.data_;
                } else {
                    return val;
                }
            });
            return new FbsBlob(fs.getBlob.apply(null, blobby));
        } else {
            var uint8Arrays = var_args.map(function (val) {
                if (type.isString(val)) {
                    return string.dataFromString(_string.StringFormat.RAW, val).data;
                } else {
                    // Blobs don't exist, so this has to be a Uint8Array.
                    return val.data_;
                }
            });
            var finalLength_1 = 0;
            uint8Arrays.forEach(function (array) {
                finalLength_1 += array.byteLength;
            });
            var merged_1 = new Uint8Array(finalLength_1);
            var index_1 = 0;
            uint8Arrays.forEach(function (array) {
                for (var i = 0; i < array.length; i++) {
                    merged_1[index_1++] = array[i];
                }
            });
            return new FbsBlob(merged_1, true);
        }
    };
    FbsBlob.prototype.uploadData = function () {
        return this.data_;
    };
    return FbsBlob;
}();
exports.FbsBlob = FbsBlob;
//# sourceMappingURL=blob.js.map


/***/ }),

/***/ 1142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.resumableUploadChunkSize = exports.ResumableUploadStatus = undefined;
exports.handlerCheck = handlerCheck;
exports.metadataHandler = metadataHandler;
exports.sharedErrorHandler = sharedErrorHandler;
exports.objectErrorHandler = objectErrorHandler;
exports.getMetadata = getMetadata;
exports.updateMetadata = updateMetadata;
exports.deleteObject = deleteObject;
exports.determineContentType_ = determineContentType_;
exports.metadataForUpload_ = metadataForUpload_;
exports.multipartUpload = multipartUpload;
exports.checkResumeHeader_ = checkResumeHeader_;
exports.createResumableUpload = createResumableUpload;
exports.getResumableUploadStatus = getResumableUploadStatus;
exports.continueResumableUpload = continueResumableUpload;

var _array = __webpack_require__(1136);

var array = _interopRequireWildcard(_array);

var _blob = __webpack_require__(1141);

var _error = __webpack_require__(1126);

var errorsExports = _interopRequireWildcard(_error);

var _metadata = __webpack_require__(1134);

var MetadataUtils = _interopRequireWildcard(_metadata);

var _object = __webpack_require__(1128);

var object = _interopRequireWildcard(_object);

var _requestinfo = __webpack_require__(1153);

var _type = __webpack_require__(1125);

var type = _interopRequireWildcard(_type);

var _url = __webpack_require__(1135);

var UrlUtils = _interopRequireWildcard(_url);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Throws the UNKNOWN FirebaseStorageError if cndn is false.
 */
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function handlerCheck(cndn) {
    if (!cndn) {
        throw errorsExports.unknown();
    }
}
function metadataHandler(authWrapper, mappings) {
    function handler(xhr, text) {
        var metadata = MetadataUtils.fromResourceString(authWrapper, text, mappings);
        handlerCheck(metadata !== null);
        return metadata;
    }
    return handler;
}
function sharedErrorHandler(location) {
    function errorHandler(xhr, err) {
        var newErr;
        if (xhr.getStatus() === 401) {
            newErr = errorsExports.unauthenticated();
        } else {
            if (xhr.getStatus() === 402) {
                newErr = errorsExports.quotaExceeded(location.bucket);
            } else {
                if (xhr.getStatus() === 403) {
                    newErr = errorsExports.unauthorized(location.path);
                } else {
                    newErr = err;
                }
            }
        }
        newErr.setServerResponseProp(err.serverResponseProp());
        return newErr;
    }
    return errorHandler;
}
function objectErrorHandler(location) {
    var shared = sharedErrorHandler(location);
    function errorHandler(xhr, err) {
        var newErr = shared(xhr, err);
        if (xhr.getStatus() === 404) {
            newErr = errorsExports.objectNotFound(location.path);
        }
        newErr.setServerResponseProp(err.serverResponseProp());
        return newErr;
    }
    return errorHandler;
}
function getMetadata(authWrapper, location, mappings) {
    var urlPart = location.fullServerUrl();
    var url = UrlUtils.makeNormalUrl(urlPart);
    var method = 'GET';
    var timeout = authWrapper.maxOperationRetryTime();
    var requestInfo = new _requestinfo.RequestInfo(url, method, metadataHandler(authWrapper, mappings), timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function updateMetadata(authWrapper, location, metadata, mappings) {
    var urlPart = location.fullServerUrl();
    var url = UrlUtils.makeNormalUrl(urlPart);
    var method = 'PATCH';
    var body = MetadataUtils.toResourceString(metadata, mappings);
    var headers = { 'Content-Type': 'application/json; charset=utf-8' };
    var timeout = authWrapper.maxOperationRetryTime();
    var requestInfo = new _requestinfo.RequestInfo(url, method, metadataHandler(authWrapper, mappings), timeout);
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function deleteObject(authWrapper, location) {
    var urlPart = location.fullServerUrl();
    var url = UrlUtils.makeNormalUrl(urlPart);
    var method = 'DELETE';
    var timeout = authWrapper.maxOperationRetryTime();
    function handler(xhr, text) {}
    var requestInfo = new _requestinfo.RequestInfo(url, method, handler, timeout);
    requestInfo.successCodes = [200, 204];
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function determineContentType_(metadata, blob) {
    return metadata && metadata['contentType'] || blob && blob.type() || 'application/octet-stream';
}
function metadataForUpload_(location, blob, opt_metadata) {
    var metadata = object.clone(opt_metadata);
    metadata['fullPath'] = location.path;
    metadata['size'] = blob.size();
    if (!metadata['contentType']) {
        metadata['contentType'] = determineContentType_(null, blob);
    }
    return metadata;
}
function multipartUpload(authWrapper, location, mappings, blob, opt_metadata) {
    var urlPart = location.bucketOnlyServerUrl();
    var headers = {
        'X-Goog-Upload-Protocol': 'multipart'
    };
    function genBoundary() {
        var str = '';
        for (var i = 0; i < 2; i++) {
            str = str + Math.random().toString().slice(2);
        }
        return str;
    }
    var boundary = genBoundary();
    headers['Content-Type'] = 'multipart/related; boundary=' + boundary;
    var metadata = metadataForUpload_(location, blob, opt_metadata);
    var metadataString = MetadataUtils.toResourceString(metadata, mappings);
    var preBlobPart = '--' + boundary + '\r\n' + 'Content-Type: application/json; charset=utf-8\r\n\r\n' + metadataString + '\r\n--' + boundary + '\r\n' + 'Content-Type: ' + metadata['contentType'] + '\r\n\r\n';
    var postBlobPart = '\r\n--' + boundary + '--';
    var body = _blob.FbsBlob.getBlob(preBlobPart, blob, postBlobPart);
    if (body === null) {
        throw errorsExports.cannotSliceBlob();
    }
    var urlParams = { name: metadata['fullPath'] };
    var url = UrlUtils.makeUploadUrl(urlPart);
    var method = 'POST';
    var timeout = authWrapper.maxUploadRetryTime();
    var requestInfo = new _requestinfo.RequestInfo(url, method, metadataHandler(authWrapper, mappings), timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param current The number of bytes that have been uploaded so far.
 * @param total The total number of bytes in the upload.
 * @param opt_finalized True if the server has finished the upload.
 * @param opt_metadata The upload metadata, should
 *     only be passed if opt_finalized is true.
 * @struct
 */
var ResumableUploadStatus = function () {
    function ResumableUploadStatus(current, total, finalized, metadata) {
        this.current = current;
        this.total = total;
        this.finalized = !!finalized;
        this.metadata = metadata || null;
    }
    return ResumableUploadStatus;
}();
exports.ResumableUploadStatus = ResumableUploadStatus;
function checkResumeHeader_(xhr, opt_allowed) {
    var status;
    try {
        status = xhr.getResponseHeader('X-Goog-Upload-Status');
    } catch (e) {
        handlerCheck(false);
    }
    var allowed = opt_allowed || ['active'];
    handlerCheck(array.contains(allowed, status));
    return status;
}
function createResumableUpload(authWrapper, location, mappings, blob, opt_metadata) {
    var urlPart = location.bucketOnlyServerUrl();
    var metadata = metadataForUpload_(location, blob, opt_metadata);
    var urlParams = { name: metadata['fullPath'] };
    var url = UrlUtils.makeUploadUrl(urlPart);
    var method = 'POST';
    var headers = {
        'X-Goog-Upload-Protocol': 'resumable',
        'X-Goog-Upload-Command': 'start',
        'X-Goog-Upload-Header-Content-Length': blob.size(),
        'X-Goog-Upload-Header-Content-Type': metadata['contentType'],
        'Content-Type': 'application/json; charset=utf-8'
    };
    var body = MetadataUtils.toResourceString(metadata, mappings);
    var timeout = authWrapper.maxUploadRetryTime();
    function handler(xhr, text) {
        checkResumeHeader_(xhr);
        var url;
        try {
            url = xhr.getResponseHeader('X-Goog-Upload-URL');
        } catch (e) {
            handlerCheck(false);
        }
        handlerCheck(type.isString(url));
        return url;
    }
    var requestInfo = new _requestinfo.RequestInfo(url, method, handler, timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 */
function getResumableUploadStatus(authWrapper, location, url, blob) {
    var headers = { 'X-Goog-Upload-Command': 'query' };
    function handler(xhr, text) {
        var status = checkResumeHeader_(xhr, ['active', 'final']);
        var sizeString;
        try {
            sizeString = xhr.getResponseHeader('X-Goog-Upload-Size-Received');
        } catch (e) {
            handlerCheck(false);
        }
        var size = parseInt(sizeString, 10);
        handlerCheck(!isNaN(size));
        return new ResumableUploadStatus(size, blob.size(), status === 'final');
    }
    var method = 'POST';
    var timeout = authWrapper.maxUploadRetryTime();
    var requestInfo = new _requestinfo.RequestInfo(url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * Any uploads via the resumable upload API must transfer a number of bytes
 * that is a multiple of this number.
 */
var resumableUploadChunkSize = exports.resumableUploadChunkSize = 256 * 1024;
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 * @param chunkSize Number of bytes to upload.
 * @param opt_status The previous status.
 *     If not passed or null, we start from the beginning.
 * @throws fbs.Error If the upload is already complete, the passed in status
 *     has a final size inconsistent with the blob, or the blob cannot be sliced
 *     for upload.
 */
function continueResumableUpload(location, authWrapper, url, blob, chunkSize, mappings, opt_status, opt_progressCallback) {
    // TODO(andysoto): standardize on internal asserts
    // assert(!(opt_status && opt_status.finalized));
    var status = new ResumableUploadStatus(0, 0);
    if (opt_status) {
        status.current = opt_status.current;
        status.total = opt_status.total;
    } else {
        status.current = 0;
        status.total = blob.size();
    }
    if (blob.size() !== status.total) {
        throw errorsExports.serverFileWrongSize();
    }
    var bytesLeft = status.total - status.current;
    var bytesToUpload = bytesLeft;
    if (chunkSize > 0) {
        bytesToUpload = Math.min(bytesToUpload, chunkSize);
    }
    var startByte = status.current;
    var endByte = startByte + bytesToUpload;
    var uploadCommand = bytesToUpload === bytesLeft ? 'upload, finalize' : 'upload';
    var headers = {
        'X-Goog-Upload-Command': uploadCommand,
        'X-Goog-Upload-Offset': status.current
    };
    var body = blob.slice(startByte, endByte);
    if (body === null) {
        throw errorsExports.cannotSliceBlob();
    }
    function handler(xhr, text) {
        // TODO(andysoto): Verify the MD5 of each uploaded range:
        // the 'x-range-md5' header comes back with status code 308 responses.
        // We'll only be able to bail out though, because you can't re-upload a
        // range that you previously uploaded.
        var uploadStatus = checkResumeHeader_(xhr, ['active', 'final']);
        var newCurrent = status.current + bytesToUpload;
        var size = blob.size();
        var metadata;
        if (uploadStatus === 'final') {
            metadata = metadataHandler(authWrapper, mappings)(xhr, text);
        } else {
            metadata = null;
        }
        return new ResumableUploadStatus(newCurrent, size, uploadStatus === 'final', metadata);
    }
    var method = 'POST';
    var timeout = authWrapper.maxUploadRetryTime();
    var requestInfo = new _requestinfo.RequestInfo(url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.progressCallback = opt_progressCallback || null;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
//# sourceMappingURL=requests.js.map


/***/ }),

/***/ 1143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */

/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _errors = __webpack_require__(674);

var _errors2 = __webpack_require__(1131);

var _errors3 = _interopRequireDefault(_errors2);

var _tokenManager = __webpack_require__(1166);

var _tokenManager2 = _interopRequireDefault(_tokenManager);

var _notificationPermission = __webpack_require__(1145);

var _notificationPermission2 = _interopRequireDefault(_notificationPermission);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SENDER_ID_OPTION_NAME = 'messagingSenderId';
var ControllerInterface = function () {
    /**
     * An interface of the Messaging Service API
     * @param {!firebase.app.App} app
     */
    function ControllerInterface(app) {
        var _this = this;
        this.errorFactory_ = new _errors.ErrorFactory('messaging', 'Messaging', _errors3.default.map);
        if (!app.options[SENDER_ID_OPTION_NAME] || typeof app.options[SENDER_ID_OPTION_NAME] !== 'string') {
            throw this.errorFactory_.create(_errors3.default.codes.BAD_SENDER_ID);
        }
        this.messagingSenderId_ = app.options[SENDER_ID_OPTION_NAME];
        this.tokenManager_ = new _tokenManager2.default();
        this.app = app;
        this.INTERNAL = {};
        this.INTERNAL.delete = function () {
            return _this.delete;
        };
    }
    /**
     * @export
     * @return {Promise<string> | Promise<null>} Returns a promise that
     * resolves to an FCM token.
     */
    ControllerInterface.prototype.getToken = function () {
        var _this = this;
        // Check with permissions
        var currentPermission = this.getNotificationPermission_();
        if (currentPermission !== _notificationPermission2.default.granted) {
            if (currentPermission === _notificationPermission2.default.denied) {
                return Promise.reject(this.errorFactory_.create(_errors3.default.codes.NOTIFICATIONS_BLOCKED));
            }
            // We must wait for permission to be granted
            return Promise.resolve(null);
        }
        return this.getSWRegistration_().then(function (registration) {
            return _this.tokenManager_.getSavedToken(_this.messagingSenderId_, registration).then(function (token) {
                if (token) {
                    return token;
                }
                return _this.tokenManager_.createToken(_this.messagingSenderId_, registration);
            });
        });
    };
    /**
     * This method deletes tokens that the token manager looks after and then
     * unregisters the push subscription if it exists.
     * @export
     * @param {string} token
     * @return {Promise<void>}
     */
    ControllerInterface.prototype.deleteToken = function (token) {
        var _this = this;
        return this.tokenManager_.deleteToken(token).then(function () {
            return _this.getSWRegistration_().then(function (registration) {
                if (registration) {
                    return registration.pushManager.getSubscription();
                }
            }).then(function (subscription) {
                if (subscription) {
                    return subscription.unsubscribe();
                }
            });
        });
    };
    ControllerInterface.prototype.getSWRegistration_ = function () {
        throw this.errorFactory_.create(_errors3.default.codes.SHOULD_BE_INHERITED);
    };
    //
    // The following methods should only be available in the window.
    //
    ControllerInterface.prototype.requestPermission = function () {
        throw this.errorFactory_.create(_errors3.default.codes.AVAILABLE_IN_WINDOW);
    };
    /**
     * @export
     * @param {!ServiceWorkerRegistration} registration
     */
    ControllerInterface.prototype.useServiceWorker = function (registration) {
        throw this.errorFactory_.create(_errors3.default.codes.AVAILABLE_IN_WINDOW);
    };
    /**
     * @export
     * @param {!firebase.Observer|function(*)} nextOrObserver
     * @param {function(!Error)=} optError
     * @param {function()=} optCompleted
     * @return {!function()}
     */
    ControllerInterface.prototype.onMessage = function (nextOrObserver, optError, optCompleted) {
        throw this.errorFactory_.create(_errors3.default.codes.AVAILABLE_IN_WINDOW);
    };
    /**
     * @export
     * @param {!firebase.Observer|function()} nextOrObserver An observer object
     * or a function triggered on token refresh.
     * @param {function(!Error)=} optError Optional A function
     * triggered on token refresh error.
     * @param {function()=} optCompleted Optional function triggered when the
     * observer is removed.
     * @return {!function()} The unsubscribe function for the observer.
     */
    ControllerInterface.prototype.onTokenRefresh = function (nextOrObserver, optError, optCompleted) {
        throw this.errorFactory_.create(_errors3.default.codes.AVAILABLE_IN_WINDOW);
    };
    //
    // The following methods are used by the service worker only.
    //
    /**
     * @export
     * @param {function(Object)} callback
     */
    ControllerInterface.prototype.setBackgroundMessageHandler = function (callback) {
        throw this.errorFactory_.create(_errors3.default.codes.AVAILABLE_IN_SW);
    };
    //
    // The following methods are used by the service themselves and not exposed
    // publicly or not expected to be used by developers.
    //
    /**
     * This method is required to adhere to the Firebase interface.
     * It closes any currently open indexdb database connections.
     */
    ControllerInterface.prototype.delete = function () {
        this.tokenManager_.closeDatabase();
    };
    /**
     * Returns the current Notification Permission state.
     * @private
     * @return {string} The currenct permission state.
     */
    ControllerInterface.prototype.getNotificationPermission_ = function () {
        return Notification.permission;
    };
    /**
     * @protected
     * @returns {TokenManager}
     */
    ControllerInterface.prototype.getTokenManager = function () {
        return this.tokenManager_;
    };
    return ControllerInterface;
}();
exports.default = ControllerInterface;
module.exports = exports['default'];
//# sourceMappingURL=controller-interface.js.map


/***/ }),

/***/ 1144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */

/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


Object.defineProperty(exports, "__esModule", {
    value: true
});
var FCM_APPLICATION_SERVER_KEY = [0x04, 0x33, 0x94, 0xf7, 0xdf, 0xa1, 0xeb, 0xb1, 0xdc, 0x03, 0xa2, 0x5e, 0x15, 0x71, 0xdb, 0x48, 0xd3, 0x2e, 0xed, 0xed, 0xb2, 0x34, 0xdb, 0xb7, 0x47, 0x3a, 0x0c, 0x8f, 0xc4, 0xcc, 0xe1, 0x6f, 0x3c, 0x8c, 0x84, 0xdf, 0xab, 0xb6, 0x66, 0x3e, 0xf2, 0x0c, 0xd4, 0x8b, 0xfe, 0xe3, 0xf9, 0x76, 0x2f, 0x14, 0x1c, 0x63, 0x08, 0x6a, 0x6f, 0x2d, 0xb1, 0x1a, 0x95, 0xb0, 0xce, 0x37, 0xc0, 0x9c, 0x6e];
var SUBSCRIPTION_DETAILS = {
    userVisibleOnly: true,
    applicationServerKey: new Uint8Array(FCM_APPLICATION_SERVER_KEY)
};
exports.default = {
    ENDPOINT: 'https://fcm.googleapis.com',
    APPLICATION_SERVER_KEY: FCM_APPLICATION_SERVER_KEY,
    SUBSCRIPTION_OPTIONS: SUBSCRIPTION_DETAILS
};
module.exports = exports['default'];
//# sourceMappingURL=fcm-details.js.map


/***/ }),

/***/ 1145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */

/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    granted: 'granted',
    default: 'default',
    denied: 'denied'
};
module.exports = exports['default'];
//# sourceMappingURL=notification-permission.js.map


/***/ }),

/***/ 1146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */

/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// These fields are strings to prevent closure from thinking goog.getMsg
// should be used to initialise the values

Object.defineProperty(exports, "__esModule", {
    value: true
});
var PARAMS = {
    TYPE_OF_MSG: 'firebase-messaging-msg-type',
    DATA: 'firebase-messaging-msg-data'
};
// This value isn't using the TYPE_OF_MSG short hand as closure
// expects the variable to be defined via goog.getMsg
var msgType = {
    PUSH_MSG_RECEIVED: 'push-msg-received',
    NOTIFICATION_CLICKED: 'notification-clicked'
};
var createNewMsg = function createNewMsg(msgType, msgData) {
    var message = (_a = {}, _a[PARAMS.TYPE_OF_MSG] = msgType, _a[PARAMS.DATA] = msgData, _a);
    return message;
    var _a;
};
exports.default = {
    PARAMS: PARAMS,
    TYPES_OF_MSG: msgType,
    createNewMsg: createNewMsg
};
module.exports = exports['default'];
//# sourceMappingURL=worker-page-message.js.map


/***/ }),

/***/ 1147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _app = __webpack_require__(45);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(214);

__webpack_require__(62);

__webpack_require__(1148);

__webpack_require__(1164);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export the single instance of firebase
exports.default = _app2.default; /**
                                 * Copyright 2017 Google Inc.
                                 *
                                 * Licensed under the Apache License, Version 2.0 (the "License");
                                 * you may not use this file except in compliance with the License.
                                 * You may obtain a copy of the License at
                                 *
                                 *   http://www.apache.org/licenses/LICENSE-2.0
                                 *
                                 * Unless required by applicable law or agreed to in writing, software
                                 * distributed under the License is distributed on an "AS IS" BASIS,
                                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                 * See the License for the specific language governing permissions and
                                 * limitations under the License.
                                 */

module.exports = exports['default'];
//# sourceMappingURL=firebase-browser.js.map


/***/ }),

/***/ 1148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registerStorage = registerStorage;

var _string = __webpack_require__(1132);

var _taskenums = __webpack_require__(1137);

var _xhriopool = __webpack_require__(1149);

var _reference = __webpack_require__(1139);

var _service = __webpack_require__(1158);

var _app = __webpack_require__(45);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Type constant for Firebase Storage.
 */
var STORAGE_TYPE = 'storage'; /**
                              * Copyright 2017 Google Inc.
                              *
                              * Licensed under the Apache License, Version 2.0 (the "License");
                              * you may not use this file except in compliance with the License.
                              * You may obtain a copy of the License at
                              *
                              *   http://www.apache.org/licenses/LICENSE-2.0
                              *
                              * Unless required by applicable law or agreed to in writing, software
                              * distributed under the License is distributed on an "AS IS" BASIS,
                              * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                              * See the License for the specific language governing permissions and
                              * limitations under the License.
                              */

function factory(app, unused, opt_url) {
    return new _service.Service(app, new _xhriopool.XhrIoPool(), opt_url);
}
function registerStorage(instance) {
    var namespaceExports = {
        // no-inline
        TaskState: _taskenums.TaskState,
        TaskEvent: _taskenums.TaskEvent,
        StringFormat: _string.StringFormat,
        Storage: _service.Service,
        Reference: _reference.Reference
    };
    instance.INTERNAL.registerService(STORAGE_TYPE, factory, namespaceExports, undefined,
    // Allow multiple storage instances per app.
    true);
}
registerStorage(_app2.default);
//# sourceMappingURL=storage.js.map


/***/ }),

/***/ 1149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.XhrIoPool = undefined;

var _xhrio_network = __webpack_require__(1150);

/**
 * Factory-like class for creating XhrIo instances.
 */
var XhrIoPool = function () {
    function XhrIoPool() {}
    XhrIoPool.prototype.createXhrIo = function () {
        return new _xhrio_network.NetworkXhrIo();
    };
    return XhrIoPool;
}(); /**
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
exports.XhrIoPool = XhrIoPool;
//# sourceMappingURL=xhriopool.js.map


/***/ }),

/***/ 1150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NetworkXhrIo = undefined;

var _error = __webpack_require__(1126);

var errorsExports = _interopRequireWildcard(_error);

var _object = __webpack_require__(1128);

var object = _interopRequireWildcard(_object);

var _promise_external = __webpack_require__(1127);

var promiseimpl = _interopRequireWildcard(_promise_external);

var _type = __webpack_require__(1125);

var type = _interopRequireWildcard(_type);

var _xhrio = __webpack_require__(1138);

var XhrIoExports = _interopRequireWildcard(_xhrio);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * We use this instead of goog.net.XhrIo because goog.net.XhrIo is hyuuuuge and
 * doesn't work in React Native on Android.
 */
var NetworkXhrIo = function () {
    function NetworkXhrIo() {
        var _this = this;
        this.sent_ = false;
        this.xhr_ = new XMLHttpRequest();
        this.errorCode_ = XhrIoExports.ErrorCode.NO_ERROR;
        this.sendPromise_ = promiseimpl.make(function (resolve, reject) {
            _this.xhr_.addEventListener('abort', function (event) {
                _this.errorCode_ = XhrIoExports.ErrorCode.ABORT;
                resolve(_this);
            });
            _this.xhr_.addEventListener('error', function (event) {
                _this.errorCode_ = XhrIoExports.ErrorCode.NETWORK_ERROR;
                resolve(_this);
            });
            _this.xhr_.addEventListener('load', function (event) {
                resolve(_this);
            });
        });
    }
    /**
     * @override
     */
    NetworkXhrIo.prototype.send = function (url, method, opt_body, opt_headers) {
        var _this = this;
        if (this.sent_) {
            throw errorsExports.internalError('cannot .send() more than once');
        }
        this.sent_ = true;
        this.xhr_.open(method, url, true);
        if (type.isDef(opt_headers)) {
            var headers = opt_headers;
            object.forEach(headers, function (key, val) {
                _this.xhr_.setRequestHeader(key, val.toString());
            });
        }
        if (type.isDef(opt_body)) {
            this.xhr_.send(opt_body);
        } else {
            this.xhr_.send();
        }
        return this.sendPromise_;
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getErrorCode = function () {
        if (!this.sent_) {
            throw errorsExports.internalError('cannot .getErrorCode() before sending');
        }
        return this.errorCode_;
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getStatus = function () {
        if (!this.sent_) {
            throw errorsExports.internalError('cannot .getStatus() before sending');
        }
        try {
            return this.xhr_.status;
        } catch (e) {
            return -1;
        }
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getResponseText = function () {
        if (!this.sent_) {
            throw errorsExports.internalError('cannot .getResponseText() before sending');
        }
        return this.xhr_.responseText;
    };
    /**
     * Aborts the request.
     * @override
     */
    NetworkXhrIo.prototype.abort = function () {
        this.xhr_.abort();
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.getResponseHeader = function (header) {
        return this.xhr_.getResponseHeader(header);
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.addUploadProgressListener = function (listener) {
        if (type.isDef(this.xhr_.upload)) {
            this.xhr_.upload.addEventListener('progress', listener);
        }
    };
    /**
     * @override
     */
    NetworkXhrIo.prototype.removeUploadProgressListener = function (listener) {
        if (type.isDef(this.xhr_.upload)) {
            this.xhr_.upload.removeEventListener('progress', listener);
        }
    };
    return NetworkXhrIo;
}(); /**
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
exports.NetworkXhrIo = NetworkXhrIo;
//# sourceMappingURL=xhrio_network.js.map


/***/ }),

/***/ 1151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.jsonObjectOrNull = jsonObjectOrNull;

var _type = __webpack_require__(1125);

var type = _interopRequireWildcard(_type);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Returns the Object resulting from parsing the given JSON, or null if the
 * given string does not represent a JSON object.
 */
function jsonObjectOrNull(s) {
    var obj;
    try {
        obj = JSON.parse(s);
    } catch (e) {
        return null;
    }
    if (type.isNonArrayObject(obj)) {
        return obj;
    } else {
        return null;
    }
} /**
  * Copyright 2017 Google Inc.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */
//# sourceMappingURL=json.js.map


/***/ }),

/***/ 1152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBlob = getBlob;
exports.sliceBlob = sliceBlob;

var _type = __webpack_require__(1125);

var type = _interopRequireWildcard(_type);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function getBlobBuilder() {
    if (typeof BlobBuilder !== 'undefined') {
        return BlobBuilder;
    } else if (typeof WebKitBlobBuilder !== 'undefined') {
        return WebKitBlobBuilder;
    } else {
        return undefined;
    }
}
/**
 * Concatenates one or more values together and converts them to a Blob.
 *
 * @param var_args The values that will make up the resulting blob.
 * @return The blob.
 */
function getBlob() {
    var var_args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        var_args[_i] = arguments[_i];
    }
    var BlobBuilder = getBlobBuilder();
    if (BlobBuilder !== undefined) {
        var bb = new BlobBuilder();
        for (var i = 0; i < var_args.length; i++) {
            bb.append(var_args[i]);
        }
        return bb.getBlob();
    } else {
        if (type.isNativeBlobDefined()) {
            return new Blob(var_args);
        } else {
            throw Error("This browser doesn't seem to support creating Blobs");
        }
    }
}
/**
 * Slices the blob. The returned blob contains data from the start byte
 * (inclusive) till the end byte (exclusive). Negative indices cannot be used.
 *
 * @param blob The blob to be sliced.
 * @param start Index of the starting byte.
 * @param end Index of the ending byte.
 * @return The blob slice or null if not supported.
 */
function sliceBlob(blob, start, end) {
    if (blob.webkitSlice) {
        return blob.webkitSlice(start, end);
    } else if (blob.mozSlice) {
        return blob.mozSlice(start, end);
    } else if (blob.slice) {
        return blob.slice(start, end);
    }
    return null;
}
//# sourceMappingURL=fs.js.map


/***/ }),

/***/ 1153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
var RequestInfo = function () {
    function RequestInfo(url, method,
    /**
       * Returns the value with which to resolve the request's promise. Only called
       * if the request is successful. Throw from this function to reject the
       * returned Request's promise with the thrown error.
       * Note: The XhrIo passed to this function may be reused after this callback
       * returns. Do not keep a reference to it in any way.
       */
    handler, timeout) {
        this.url = url;
        this.method = method;
        this.handler = handler;
        this.timeout = timeout;
        this.urlParams = {};
        this.headers = {};
        this.body = null;
        this.errorHandler = null;
        /**
         * Called with the current number of bytes uploaded and total size (-1 if not
         * computable) of the request body (i.e. used to report upload progress).
         */
        this.progressCallback = null;
        this.successCodes = [200];
        this.additionalRetryCodes = [];
    }
    return RequestInfo;
}();
exports.RequestInfo = RequestInfo;
//# sourceMappingURL=requestinfo.js.map


/***/ }),

/***/ 1154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UploadTask = undefined;

var _taskenums = __webpack_require__(1137);

var fbsTaskEnums = _interopRequireWildcard(_taskenums);

var _observer = __webpack_require__(1155);

var _tasksnapshot = __webpack_require__(1156);

var _args = __webpack_require__(1133);

var fbsArgs = _interopRequireWildcard(_args);

var _array = __webpack_require__(1136);

var fbsArray = _interopRequireWildcard(_array);

var _async = __webpack_require__(1157);

var _error = __webpack_require__(1126);

var errors = _interopRequireWildcard(_error);

var _promise_external = __webpack_require__(1127);

var fbsPromiseimpl = _interopRequireWildcard(_promise_external);

var _requests = __webpack_require__(1142);

var fbsRequests = _interopRequireWildcard(_requests);

var _type = __webpack_require__(1125);

var typeUtils = _interopRequireWildcard(_type);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Represents a blob being uploaded. Can be used to pause/resume/cancel the
 * upload and manage callbacks for various events.
 */
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * @fileoverview Defines types for interacting with blob transfer tasks.
 */
var UploadTask = function () {
    /**
     * @param ref The firebaseStorage.Reference object this task came
     *     from, untyped to avoid cyclic dependencies.
     * @param blob The blob to upload.
     */
    function UploadTask(ref, authWrapper, location, mappings, blob, metadata) {
        if (metadata === void 0) {
            metadata = null;
        }
        var _this = this;
        this.transferred_ = 0;
        this.needToFetchStatus_ = false;
        this.needToFetchMetadata_ = false;
        this.observers_ = [];
        this.error_ = null;
        this.uploadUrl_ = null;
        this.request_ = null;
        this.chunkMultiplier_ = 1;
        this.resolve_ = null;
        this.reject_ = null;
        this.ref_ = ref;
        this.authWrapper_ = authWrapper;
        this.location_ = location;
        this.blob_ = blob;
        this.metadata_ = metadata;
        this.mappings_ = mappings;
        this.resumable_ = this.shouldDoResumable_(this.blob_);
        this.state_ = _taskenums.InternalTaskState.RUNNING;
        this.errorHandler_ = function (error) {
            _this.request_ = null;
            _this.chunkMultiplier_ = 1;
            if (error.codeEquals(errors.Code.CANCELED)) {
                _this.needToFetchStatus_ = true;
                _this.completeTransitions_();
            } else {
                _this.error_ = error;
                _this.transition_(_taskenums.InternalTaskState.ERROR);
            }
        };
        this.metadataErrorHandler_ = function (error) {
            _this.request_ = null;
            if (error.codeEquals(errors.Code.CANCELED)) {
                _this.completeTransitions_();
            } else {
                _this.error_ = error;
                _this.transition_(_taskenums.InternalTaskState.ERROR);
            }
        };
        this.promise_ = fbsPromiseimpl.make(function (resolve, reject) {
            _this.resolve_ = resolve;
            _this.reject_ = reject;
            _this.start_();
        });
        // Prevent uncaught rejections on the internal promise from bubbling out
        // to the top level with a dummy handler.
        this.promise_.then(null, function () {});
    }
    UploadTask.prototype.makeProgressCallback_ = function () {
        var _this = this;
        var sizeBefore = this.transferred_;
        return function (loaded, total) {
            _this.updateProgress_(sizeBefore + loaded);
        };
    };
    UploadTask.prototype.shouldDoResumable_ = function (blob) {
        return blob.size() > 256 * 1024;
    };
    UploadTask.prototype.start_ = function () {
        if (this.state_ !== _taskenums.InternalTaskState.RUNNING) {
            // This can happen if someone pauses us in a resume callback, for example.
            return;
        }
        if (this.request_ !== null) {
            return;
        }
        if (this.resumable_) {
            if (this.uploadUrl_ === null) {
                this.createResumable_();
            } else {
                if (this.needToFetchStatus_) {
                    this.fetchStatus_();
                } else {
                    if (this.needToFetchMetadata_) {
                        // Happens if we miss the metadata on upload completion.
                        this.fetchMetadata_();
                    } else {
                        this.continueUpload_();
                    }
                }
            }
        } else {
            this.oneShotUpload_();
        }
    };
    UploadTask.prototype.resolveToken_ = function (callback) {
        var _this = this;
        this.authWrapper_.getAuthToken().then(function (authToken) {
            switch (_this.state_) {
                case _taskenums.InternalTaskState.RUNNING:
                    callback(authToken);
                    break;
                case _taskenums.InternalTaskState.CANCELING:
                    _this.transition_(_taskenums.InternalTaskState.CANCELED);
                    break;
                case _taskenums.InternalTaskState.PAUSING:
                    _this.transition_(_taskenums.InternalTaskState.PAUSED);
                    break;
                default:
            }
        });
    };
    // TODO(andysoto): assert false
    UploadTask.prototype.createResumable_ = function () {
        var _this = this;
        this.resolveToken_(function (authToken) {
            var requestInfo = fbsRequests.createResumableUpload(_this.authWrapper_, _this.location_, _this.mappings_, _this.blob_, _this.metadata_);
            var createRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = createRequest;
            createRequest.getPromise().then(function (url) {
                _this.request_ = null;
                _this.uploadUrl_ = url;
                _this.needToFetchStatus_ = false;
                _this.completeTransitions_();
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.fetchStatus_ = function () {
        var _this = this;
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        var url = this.uploadUrl_;
        this.resolveToken_(function (authToken) {
            var requestInfo = fbsRequests.getResumableUploadStatus(_this.authWrapper_, _this.location_, url, _this.blob_);
            var statusRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = statusRequest;
            statusRequest.getPromise().then(function (status) {
                status = status;
                _this.request_ = null;
                _this.updateProgress_(status.current);
                _this.needToFetchStatus_ = false;
                if (status.finalized) {
                    _this.needToFetchMetadata_ = true;
                }
                _this.completeTransitions_();
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.continueUpload_ = function () {
        var _this = this;
        var chunkSize = fbsRequests.resumableUploadChunkSize * this.chunkMultiplier_;
        var status = new fbsRequests.ResumableUploadStatus(this.transferred_, this.blob_.size());
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        var url = this.uploadUrl_;
        this.resolveToken_(function (authToken) {
            var requestInfo;
            try {
                requestInfo = fbsRequests.continueResumableUpload(_this.location_, _this.authWrapper_, url, _this.blob_, chunkSize, _this.mappings_, status, _this.makeProgressCallback_());
            } catch (e) {
                _this.error_ = e;
                _this.transition_(_taskenums.InternalTaskState.ERROR);
                return;
            }
            var uploadRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = uploadRequest;
            uploadRequest.getPromise().then(function (newStatus) {
                _this.increaseMultiplier_();
                _this.request_ = null;
                _this.updateProgress_(newStatus.current);
                if (newStatus.finalized) {
                    _this.metadata_ = newStatus.metadata;
                    _this.transition_(_taskenums.InternalTaskState.SUCCESS);
                } else {
                    _this.completeTransitions_();
                }
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.increaseMultiplier_ = function () {
        var currentSize = fbsRequests.resumableUploadChunkSize * this.chunkMultiplier_;
        // Max chunk size is 32M.
        if (currentSize < 32 * 1024 * 1024) {
            this.chunkMultiplier_ *= 2;
        }
    };
    UploadTask.prototype.fetchMetadata_ = function () {
        var _this = this;
        this.resolveToken_(function (authToken) {
            var requestInfo = fbsRequests.getMetadata(_this.authWrapper_, _this.location_, _this.mappings_);
            var metadataRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = metadataRequest;
            metadataRequest.getPromise().then(function (metadata) {
                _this.request_ = null;
                _this.metadata_ = metadata;
                _this.transition_(_taskenums.InternalTaskState.SUCCESS);
            }, _this.metadataErrorHandler_);
        });
    };
    UploadTask.prototype.oneShotUpload_ = function () {
        var _this = this;
        this.resolveToken_(function (authToken) {
            var requestInfo = fbsRequests.multipartUpload(_this.authWrapper_, _this.location_, _this.mappings_, _this.blob_, _this.metadata_);
            var multipartRequest = _this.authWrapper_.makeRequest(requestInfo, authToken);
            _this.request_ = multipartRequest;
            multipartRequest.getPromise().then(function (metadata) {
                _this.request_ = null;
                _this.metadata_ = metadata;
                _this.updateProgress_(_this.blob_.size());
                _this.transition_(_taskenums.InternalTaskState.SUCCESS);
            }, _this.errorHandler_);
        });
    };
    UploadTask.prototype.updateProgress_ = function (transferred) {
        var old = this.transferred_;
        this.transferred_ = transferred;
        // A progress update can make the "transferred" value smaller (e.g. a
        // partial upload not completed by server, after which the "transferred"
        // value may reset to the value at the beginning of the request).
        if (this.transferred_ !== old) {
            this.notifyObservers_();
        }
    };
    UploadTask.prototype.transition_ = function (state) {
        if (this.state_ === state) {
            return;
        }
        switch (state) {
            case _taskenums.InternalTaskState.CANCELING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING);
                this.state_ = state;
                if (this.request_ !== null) {
                    this.request_.cancel();
                }
                break;
            case _taskenums.InternalTaskState.PAUSING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING);
                this.state_ = state;
                if (this.request_ !== null) {
                    this.request_.cancel();
                }
                break;
            case _taskenums.InternalTaskState.RUNNING:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.PAUSING);
                var wasPaused = this.state_ === _taskenums.InternalTaskState.PAUSED;
                this.state_ = state;
                if (wasPaused) {
                    this.notifyObservers_();
                    this.start_();
                }
                break;
            case _taskenums.InternalTaskState.PAUSED:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSING);
                this.state_ = state;
                this.notifyObservers_();
                break;
            case _taskenums.InternalTaskState.CANCELED:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.CANCELING);
                this.error_ = errors.canceled();
                this.state_ = state;
                this.notifyObservers_();
                break;
            case _taskenums.InternalTaskState.ERROR:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this.state_ = state;
                this.notifyObservers_();
                break;
            case _taskenums.InternalTaskState.SUCCESS:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this.state_ = state;
                this.notifyObservers_();
                break;
        }
    };
    UploadTask.prototype.completeTransitions_ = function () {
        switch (this.state_) {
            case _taskenums.InternalTaskState.PAUSING:
                this.transition_(_taskenums.InternalTaskState.PAUSED);
                break;
            case _taskenums.InternalTaskState.CANCELING:
                this.transition_(_taskenums.InternalTaskState.CANCELED);
                break;
            case _taskenums.InternalTaskState.RUNNING:
                this.start_();
                break;
            default:
                // TODO(andysoto): assert(false);
                break;
        }
    };
    Object.defineProperty(UploadTask.prototype, "snapshot", {
        get: function get() {
            var externalState = fbsTaskEnums.taskStateFromInternalTaskState(this.state_);
            return new _tasksnapshot.UploadTaskSnapshot(this.transferred_, this.blob_.size(), externalState, this.metadata_, this, this.ref_);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds a callback for an event.
     * @param type The type of event to listen for.
     */
    UploadTask.prototype.on = function (type, nextOrObserver, error, completed) {
        if (nextOrObserver === void 0) {
            nextOrObserver = undefined;
        }
        if (error === void 0) {
            error = undefined;
        }
        if (completed === void 0) {
            completed = undefined;
        }
        function typeValidator(_p) {
            if (type !== _taskenums.TaskEvent.STATE_CHANGED) {
                throw "Expected one of the event types: [" + _taskenums.TaskEvent.STATE_CHANGED + "].";
            }
        }
        var nextOrObserverMessage = 'Expected a function or an Object with one of ' + '`next`, `error`, `complete` properties.';
        var nextValidator = fbsArgs.nullFunctionSpec(true).validator;
        var observerValidator = fbsArgs.looseObjectSpec(null, true).validator;
        function nextOrObserverValidator(p) {
            try {
                nextValidator(p);
                return;
            } catch (e) {}
            try {
                observerValidator(p);
                var anyDefined = typeUtils.isJustDef(p['next']) || typeUtils.isJustDef(p['error']) || typeUtils.isJustDef(p['complete']);
                if (!anyDefined) {
                    throw '';
                }
                return;
            } catch (e) {
                throw nextOrObserverMessage;
            }
        }
        var specs = [fbsArgs.stringSpec(typeValidator), fbsArgs.looseObjectSpec(nextOrObserverValidator, true), fbsArgs.nullFunctionSpec(true), fbsArgs.nullFunctionSpec(true)];
        fbsArgs.validate('on', specs, arguments);
        var self = this;
        function makeBinder(specs) {
            function binder(nextOrObserver, error, opt_complete) {
                if (specs !== null) {
                    fbsArgs.validate('on', specs, arguments);
                }
                var observer = new _observer.Observer(nextOrObserver, error, completed);
                self.addObserver_(observer);
                return function () {
                    self.removeObserver_(observer);
                };
            }
            return binder;
        }
        function binderNextOrObserverValidator(p) {
            if (p === null) {
                throw nextOrObserverMessage;
            }
            nextOrObserverValidator(p);
        }
        var binderSpecs = [fbsArgs.looseObjectSpec(binderNextOrObserverValidator), fbsArgs.nullFunctionSpec(true), fbsArgs.nullFunctionSpec(true)];
        var typeOnly = !(typeUtils.isJustDef(nextOrObserver) || typeUtils.isJustDef(error) || typeUtils.isJustDef(completed));
        if (typeOnly) {
            return makeBinder(binderSpecs);
        } else {
            return makeBinder(null)(nextOrObserver, error, completed);
        }
    };
    /**
     * This object behaves like a Promise, and resolves with its snapshot data
     * when the upload completes.
     * @param onFulfilled The fulfillment callback. Promise chaining works as normal.
     * @param onRejected The rejection callback.
     */
    UploadTask.prototype.then = function (onFulfilled, onRejected) {
        // These casts are needed so that TypeScript can infer the types of the
        // resulting Promise.
        return this.promise_.then(onFulfilled, onRejected);
    };
    /**
     * Equivalent to calling `then(null, onRejected)`.
     */
    UploadTask.prototype.catch = function (onRejected) {
        return this.then(null, onRejected);
    };
    /**
     * Adds the given observer.
     */
    UploadTask.prototype.addObserver_ = function (observer) {
        this.observers_.push(observer);
        this.notifyObserver_(observer);
    };
    /**
     * Removes the given observer.
     */
    UploadTask.prototype.removeObserver_ = function (observer) {
        fbsArray.remove(this.observers_, observer);
    };
    UploadTask.prototype.notifyObservers_ = function () {
        var _this = this;
        this.finishPromise_();
        var observers = fbsArray.clone(this.observers_);
        observers.forEach(function (observer) {
            _this.notifyObserver_(observer);
        });
    };
    UploadTask.prototype.finishPromise_ = function () {
        if (this.resolve_ !== null) {
            var triggered = true;
            switch (fbsTaskEnums.taskStateFromInternalTaskState(this.state_)) {
                case _taskenums.TaskState.SUCCESS:
                    (0, _async.async)(this.resolve_.bind(null, this.snapshot))();
                    break;
                case _taskenums.TaskState.CANCELED:
                case _taskenums.TaskState.ERROR:
                    var toCall = this.reject_;
                    (0, _async.async)(toCall.bind(null, this.error_))();
                    break;
                default:
                    triggered = false;
                    break;
            }
            if (triggered) {
                this.resolve_ = null;
                this.reject_ = null;
            }
        }
    };
    UploadTask.prototype.notifyObserver_ = function (observer) {
        var externalState = fbsTaskEnums.taskStateFromInternalTaskState(this.state_);
        switch (externalState) {
            case _taskenums.TaskState.RUNNING:
            case _taskenums.TaskState.PAUSED:
                if (observer.next !== null) {
                    (0, _async.async)(observer.next.bind(observer, this.snapshot))();
                }
                break;
            case _taskenums.TaskState.SUCCESS:
                if (observer.complete !== null) {
                    (0, _async.async)(observer.complete.bind(observer))();
                }
                break;
            case _taskenums.TaskState.CANCELED:
            case _taskenums.TaskState.ERROR:
                if (observer.error !== null) {
                    (0, _async.async)(observer.error.bind(observer, this.error_))();
                }
                break;
            default:
                // TODO(andysoto): assert(false);
                if (observer.error !== null) {
                    (0, _async.async)(observer.error.bind(observer, this.error_))();
                }
        }
    };
    /**
     * Resumes a paused task. Has no effect on a currently running or failed task.
     * @return True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.resume = function () {
        fbsArgs.validate('resume', [], arguments);
        var valid = this.state_ === _taskenums.InternalTaskState.PAUSED || this.state_ === _taskenums.InternalTaskState.PAUSING;
        if (valid) {
            this.transition_(_taskenums.InternalTaskState.RUNNING);
        }
        return valid;
    };
    /**
     * Pauses a currently running task. Has no effect on a paused or failed task.
     * @return True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.pause = function () {
        fbsArgs.validate('pause', [], arguments);
        var valid = this.state_ === _taskenums.InternalTaskState.RUNNING;
        if (valid) {
            this.transition_(_taskenums.InternalTaskState.PAUSING);
        }
        return valid;
    };
    /**
     * Cancels a currently running or paused task. Has no effect on a complete or
     * failed task.
     * @return True if the operation took effect, false if ignored.
     */
    UploadTask.prototype.cancel = function () {
        fbsArgs.validate('cancel', [], arguments);
        var valid = this.state_ === _taskenums.InternalTaskState.RUNNING || this.state_ === _taskenums.InternalTaskState.PAUSING;
        if (valid) {
            this.transition_(_taskenums.InternalTaskState.CANCELING);
        }
        return valid;
    };
    return UploadTask;
}();
exports.UploadTask = UploadTask;
//# sourceMappingURL=task.js.map


/***/ }),

/***/ 1155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Observer = undefined;

var _type = __webpack_require__(1125);

var type = _interopRequireWildcard(_type);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @struct
 */
var Observer = function () {
    function Observer(nextOrObserver, opt_error, opt_complete) {
        var asFunctions = type.isFunction(nextOrObserver) || type.isDef(opt_error) || type.isDef(opt_complete);
        if (asFunctions) {
            this.next = nextOrObserver;
            this.error = opt_error || null;
            this.complete = opt_complete || null;
        } else {
            var observer = nextOrObserver;
            this.next = observer.next || null;
            this.error = observer.error || null;
            this.complete = observer.complete || null;
        }
    }
    return Observer;
}(); /**
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
exports.Observer = Observer;
//# sourceMappingURL=observer.js.map


/***/ }),

/***/ 1156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
var UploadTaskSnapshot = function () {
    function UploadTaskSnapshot(bytesTransferred, totalBytes, state, metadata, task, ref) {
        this.bytesTransferred = bytesTransferred;
        this.totalBytes = totalBytes;
        this.state = state;
        this.metadata = metadata;
        this.task = task;
        this.ref = ref;
    }
    Object.defineProperty(UploadTaskSnapshot.prototype, "downloadURL", {
        get: function get() {
            if (this.metadata !== null) {
                var urls = this.metadata['downloadURLs'];
                if (urls != null && urls[0] != null) {
                    return urls[0];
                } else {
                    return null;
                }
            } else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    return UploadTaskSnapshot;
}();
exports.UploadTaskSnapshot = UploadTaskSnapshot;
//# sourceMappingURL=tasksnapshot.js.map


/***/ }),

/***/ 1157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.async = async;

var _promise_external = __webpack_require__(1127);

var promiseimpl = _interopRequireWildcard(_promise_external);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Returns a function that invokes f with its arguments asynchronously as a
 * microtask, i.e. as soon as possible after the current script returns back
 * into browser code.
 */
function async(f) {
    return function () {
        var argsToForward = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argsToForward[_i] = arguments[_i];
        }
        promiseimpl.resolve(true).then(function () {
            f.apply(null, argsToForward);
        });
    };
} /**
  * Copyright 2017 Google Inc.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */
/**
 * @fileoverview Method for invoking a callback asynchronously.
 */
//# sourceMappingURL=async.js.map


/***/ }),

/***/ 1158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ServiceInternals = exports.Service = undefined;

var _args = __webpack_require__(1133);

var args = _interopRequireWildcard(_args);

var _authwrapper = __webpack_require__(1159);

var _location = __webpack_require__(1130);

var _promise_external = __webpack_require__(1127);

var fbsPromiseImpl = _interopRequireWildcard(_promise_external);

var _request = __webpack_require__(1162);

var RequestExports = _interopRequireWildcard(_request);

var _reference = __webpack_require__(1139);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * A service that provides firebaseStorage.Reference instances.
 * @param opt_url gs:// url to a custom Storage Bucket
 *
 * @struct
 */
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Service = function () {
    function Service(app, pool, url) {
        this.bucket_ = null;
        function maker(authWrapper, loc) {
            return new _reference.Reference(authWrapper, loc);
        }
        this.authWrapper_ = new _authwrapper.AuthWrapper(app, maker, RequestExports.makeRequest, this, pool);
        this.app_ = app;
        if (url != null) {
            this.bucket_ = _location.Location.makeFromBucketSpec(url);
        } else {
            var authWrapperBucket = this.authWrapper_.bucket();
            if (authWrapperBucket != null) {
                this.bucket_ = new _location.Location(authWrapperBucket, '');
            }
        }
        this.internals_ = new ServiceInternals(this);
    }
    /**
     * Returns a firebaseStorage.Reference for the given path in the default
     * bucket.
     */
    Service.prototype.ref = function (path) {
        function validator(path) {
            if (/^[A-Za-z]+:\/\//.test(path)) {
                throw 'Expected child path but got a URL, use refFromURL instead.';
            }
        }
        args.validate('ref', [args.stringSpec(validator, true)], arguments);
        if (this.bucket_ == null) {
            throw new Error('No Storage Bucket defined in Firebase Options.');
        }
        var ref = new _reference.Reference(this.authWrapper_, this.bucket_);
        if (path != null) {
            return ref.child(path);
        } else {
            return ref;
        }
    };
    /**
     * Returns a firebaseStorage.Reference object for the given absolute URL,
     * which must be a gs:// or http[s]:// URL.
     */
    Service.prototype.refFromURL = function (url) {
        function validator(p) {
            if (!/^[A-Za-z]+:\/\//.test(p)) {
                throw 'Expected full URL but got a child path, use ref instead.';
            }
            try {
                _location.Location.makeFromUrl(p);
            } catch (e) {
                throw 'Expected valid full URL but got an invalid one.';
            }
        }
        args.validate('refFromURL', [args.stringSpec(validator, false)], arguments);
        return new _reference.Reference(this.authWrapper_, url);
    };
    Object.defineProperty(Service.prototype, "maxUploadRetryTime", {
        get: function get() {
            return this.authWrapper_.maxUploadRetryTime();
        },
        enumerable: true,
        configurable: true
    });
    Service.prototype.setMaxUploadRetryTime = function (time) {
        args.validate('setMaxUploadRetryTime', [args.nonNegativeNumberSpec()], arguments);
        this.authWrapper_.setMaxUploadRetryTime(time);
    };
    Object.defineProperty(Service.prototype, "maxOperationRetryTime", {
        get: function get() {
            return this.authWrapper_.maxOperationRetryTime();
        },
        enumerable: true,
        configurable: true
    });
    Service.prototype.setMaxOperationRetryTime = function (time) {
        args.validate('setMaxOperationRetryTime', [args.nonNegativeNumberSpec()], arguments);
        this.authWrapper_.setMaxOperationRetryTime(time);
    };
    Object.defineProperty(Service.prototype, "app", {
        get: function get() {
            return this.app_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Service.prototype, "INTERNAL", {
        get: function get() {
            return this.internals_;
        },
        enumerable: true,
        configurable: true
    });
    return Service;
}();
exports.Service = Service;
/**
 * @struct
 */

var ServiceInternals = function () {
    function ServiceInternals(service) {
        this.service_ = service;
    }
    /**
     * Called when the associated app is deleted.
     * @see {!fbs.AuthWrapper.prototype.deleteApp}
     */
    ServiceInternals.prototype.delete = function () {
        this.service_.authWrapper_.deleteApp();
        return fbsPromiseImpl.resolve(undefined);
    };
    return ServiceInternals;
}();
exports.ServiceInternals = ServiceInternals;
//# sourceMappingURL=service.js.map


/***/ }),

/***/ 1159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AuthWrapper = undefined;

var _constants = __webpack_require__(1129);

var constants = _interopRequireWildcard(_constants);

var _error2 = __webpack_require__(1126);

var errorsExports = _interopRequireWildcard(_error2);

var _failrequest = __webpack_require__(1160);

var _location = __webpack_require__(1130);

var _promise_external = __webpack_require__(1127);

var promiseimpl = _interopRequireWildcard(_promise_external);

var _requestmap = __webpack_require__(1161);

var _type = __webpack_require__(1125);

var type = _interopRequireWildcard(_type);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @param app If null, getAuthToken always resolves with null.
 * @param service The storage service associated with this auth wrapper.
 *     Untyped to avoid circular type dependencies.
 * @struct
 */
var AuthWrapper = function () {
    function AuthWrapper(app, maker, requestMaker, service, pool) {
        this.bucket_ = null;
        this.deleted_ = false;
        this.app_ = app;
        if (this.app_ !== null) {
            var options = this.app_.options;
            if (type.isDef(options)) {
                this.bucket_ = AuthWrapper.extractBucket_(options);
            }
        }
        this.storageRefMaker_ = maker;
        this.requestMaker_ = requestMaker;
        this.pool_ = pool;
        this.service_ = service;
        this.maxOperationRetryTime_ = constants.defaultMaxOperationRetryTime;
        this.maxUploadRetryTime_ = constants.defaultMaxUploadRetryTime;
        this.requestMap_ = new _requestmap.RequestMap();
    }
    AuthWrapper.extractBucket_ = function (config) {
        var bucketString = config[constants.configOption] || null;
        if (bucketString == null) {
            return null;
        }
        var loc = _location.Location.makeFromBucketSpec(bucketString);
        return loc.bucket;
    };
    AuthWrapper.prototype.getAuthToken = function () {
        // TODO(andysoto): remove ifDef checks after firebase-app implements stubs
        // (b/28673818).
        if (this.app_ !== null && type.isDef(this.app_.INTERNAL) && type.isDef(this.app_.INTERNAL.getToken)) {
            return this.app_.INTERNAL.getToken().then(function (response) {
                if (response !== null) {
                    return response.accessToken;
                } else {
                    return null;
                }
            }, function (_error) {
                return null;
            });
        } else {
            return promiseimpl.resolve(null);
        }
    };
    AuthWrapper.prototype.bucket = function () {
        if (this.deleted_) {
            throw errorsExports.appDeleted();
        } else {
            return this.bucket_;
        }
    };
    /**
     * The service associated with this auth wrapper. Untyped to avoid circular
     * type dependencies.
     */
    AuthWrapper.prototype.service = function () {
        return this.service_;
    };
    /**
     * Returns a new firebaseStorage.Reference object referencing this AuthWrapper
     * at the given Location.
     * @param loc The Location.
     * @return Actually a firebaseStorage.Reference, typing not allowed
     *     because of circular dependency problems.
     */
    AuthWrapper.prototype.makeStorageReference = function (loc) {
        return this.storageRefMaker_(this, loc);
    };
    AuthWrapper.prototype.makeRequest = function (requestInfo, authToken) {
        if (!this.deleted_) {
            var request = this.requestMaker_(requestInfo, authToken, this.pool_);
            this.requestMap_.addRequest(request);
            return request;
        } else {
            return new _failrequest.FailRequest(errorsExports.appDeleted());
        }
    };
    /**
     * Stop running requests and prevent more from being created.
     */
    AuthWrapper.prototype.deleteApp = function () {
        this.deleted_ = true;
        this.app_ = null;
        this.requestMap_.clear();
    };
    AuthWrapper.prototype.maxUploadRetryTime = function () {
        return this.maxUploadRetryTime_;
    };
    AuthWrapper.prototype.setMaxUploadRetryTime = function (time) {
        this.maxUploadRetryTime_ = time;
    };
    AuthWrapper.prototype.maxOperationRetryTime = function () {
        return this.maxOperationRetryTime_;
    };
    AuthWrapper.prototype.setMaxOperationRetryTime = function (time) {
        this.maxOperationRetryTime_ = time;
    };
    return AuthWrapper;
}();
exports.AuthWrapper = AuthWrapper;
//# sourceMappingURL=authwrapper.js.map


/***/ }),

/***/ 1160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FailRequest = undefined;

var _promise_external = __webpack_require__(1127);

var promiseimpl = _interopRequireWildcard(_promise_external);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * A request whose promise always fails.
 * @struct
 * @template T
 */
var FailRequest = function () {
    function FailRequest(error) {
        this.promise_ = promiseimpl.reject(error);
    }
    /** @inheritDoc */
    FailRequest.prototype.getPromise = function () {
        return this.promise_;
    };
    /** @inheritDoc */
    FailRequest.prototype.cancel = function (appDelete) {
        if (appDelete === void 0) {
            appDelete = false;
        }
    };
    return FailRequest;
}();
exports.FailRequest = FailRequest;
//# sourceMappingURL=failrequest.js.map


/***/ }),

/***/ 1161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RequestMap = undefined;

var _object = __webpack_require__(1128);

var object = _interopRequireWildcard(_object);

var _constants = __webpack_require__(1129);

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @struct
 */
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var RequestMap = function () {
    function RequestMap() {
        this.map_ = {};
        this.id_ = constants.minSafeInteger;
    }
    /**
     * Registers the given request with this map.
     * The request is unregistered when it completes.
     * @param r The request to register.
     */
    RequestMap.prototype.addRequest = function (r) {
        var id = this.id_;
        this.id_++;
        this.map_[id] = r;
        var self = this;
        function unmap() {
            delete self.map_[id];
        }
        r.getPromise().then(unmap, unmap);
    };
    /**
     * Cancels all registered requests.
     */
    RequestMap.prototype.clear = function () {
        object.forEach(this.map_, function (key, val) {
            if (val) {
                val.cancel(true);
            }
        });
        this.map_ = {};
    };
    return RequestMap;
}();
exports.RequestMap = RequestMap;
//# sourceMappingURL=requestmap.js.map


/***/ }),

/***/ 1162:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RequestEndStatus = undefined;
exports.addAuthHeader_ = addAuthHeader_;
exports.addVersionHeader_ = addVersionHeader_;
exports.makeRequest = makeRequest;

var _array = __webpack_require__(1136);

var array = _interopRequireWildcard(_array);

var _backoff = __webpack_require__(1163);

var backoff = _interopRequireWildcard(_backoff);

var _error = __webpack_require__(1126);

var errorsExports = _interopRequireWildcard(_error);

var _object = __webpack_require__(1128);

var object = _interopRequireWildcard(_object);

var _promise_external = __webpack_require__(1127);

var promiseimpl = _interopRequireWildcard(_promise_external);

var _type = __webpack_require__(1125);

var type = _interopRequireWildcard(_type);

var _url = __webpack_require__(1135);

var UrlUtils = _interopRequireWildcard(_url);

var _xhrio = __webpack_require__(1138);

var XhrIoExports = _interopRequireWildcard(_xhrio);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @struct
 * @template T
 */
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * @fileoverview Defines methods used to actually send HTTP requests from
 * abstract representations.
 */
var NetworkRequest = function () {
    function NetworkRequest(url, method, headers, body, successCodes, additionalRetryCodes, callback, errorCallback, timeout, progressCallback, pool) {
        this.pendingXhr_ = null;
        this.backoffId_ = null;
        this.resolve_ = null;
        this.reject_ = null;
        this.canceled_ = false;
        this.appDelete_ = false;
        this.url_ = url;
        this.method_ = method;
        this.headers_ = headers;
        this.body_ = body;
        this.successCodes_ = successCodes.slice();
        this.additionalRetryCodes_ = additionalRetryCodes.slice();
        this.callback_ = callback;
        this.errorCallback_ = errorCallback;
        this.progressCallback_ = progressCallback;
        this.timeout_ = timeout;
        this.pool_ = pool;
        var self = this;
        this.promise_ = promiseimpl.make(function (resolve, reject) {
            self.resolve_ = resolve;
            self.reject_ = reject;
            self.start_();
        });
    }
    /**
     * Actually starts the retry loop.
     */
    NetworkRequest.prototype.start_ = function () {
        var self = this;
        function doTheRequest(backoffCallback, canceled) {
            if (canceled) {
                backoffCallback(false, new RequestEndStatus(false, null, true));
                return;
            }
            var xhr = self.pool_.createXhrIo();
            self.pendingXhr_ = xhr;
            function progressListener(progressEvent) {
                var loaded = progressEvent.loaded;
                var total = progressEvent.lengthComputable ? progressEvent.total : -1;
                if (self.progressCallback_ !== null) {
                    self.progressCallback_(loaded, total);
                }
            }
            if (self.progressCallback_ !== null) {
                xhr.addUploadProgressListener(progressListener);
            }
            xhr.send(self.url_, self.method_, self.body_, self.headers_).then(function (xhr) {
                if (self.progressCallback_ !== null) {
                    xhr.removeUploadProgressListener(progressListener);
                }
                self.pendingXhr_ = null;
                xhr = xhr;
                var hitServer = xhr.getErrorCode() === XhrIoExports.ErrorCode.NO_ERROR;
                var status = xhr.getStatus();
                if (!hitServer || self.isRetryStatusCode_(status)) {
                    var wasCanceled = xhr.getErrorCode() === XhrIoExports.ErrorCode.ABORT;
                    backoffCallback(false, new RequestEndStatus(false, null, wasCanceled));
                    return;
                }
                var successCode = array.contains(self.successCodes_, status);
                backoffCallback(true, new RequestEndStatus(successCode, xhr));
            });
        }
        /**
         * @param requestWentThrough True if the request eventually went
         *     through, false if it hit the retry limit or was canceled.
         */
        function backoffDone(requestWentThrough, status) {
            var resolve = self.resolve_;
            var reject = self.reject_;
            var xhr = status.xhr;
            if (status.wasSuccessCode) {
                try {
                    var result = self.callback_(xhr, xhr.getResponseText());
                    if (type.isJustDef(result)) {
                        resolve(result);
                    } else {
                        resolve();
                    }
                } catch (e) {
                    reject(e);
                }
            } else {
                if (xhr !== null) {
                    var err = errorsExports.unknown();
                    err.setServerResponseProp(xhr.getResponseText());
                    if (self.errorCallback_) {
                        reject(self.errorCallback_(xhr, err));
                    } else {
                        reject(err);
                    }
                } else {
                    if (status.canceled) {
                        var err = self.appDelete_ ? errorsExports.appDeleted() : errorsExports.canceled();
                        reject(err);
                    } else {
                        var err = errorsExports.retryLimitExceeded();
                        reject(err);
                    }
                }
            }
        }
        if (this.canceled_) {
            backoffDone(false, new RequestEndStatus(false, null, true));
        } else {
            this.backoffId_ = backoff.start(doTheRequest, backoffDone, this.timeout_);
        }
    };
    /** @inheritDoc */
    NetworkRequest.prototype.getPromise = function () {
        return this.promise_;
    };
    /** @inheritDoc */
    NetworkRequest.prototype.cancel = function (appDelete) {
        this.canceled_ = true;
        this.appDelete_ = appDelete || false;
        if (this.backoffId_ !== null) {
            backoff.stop(this.backoffId_);
        }
        if (this.pendingXhr_ !== null) {
            this.pendingXhr_.abort();
        }
    };
    NetworkRequest.prototype.isRetryStatusCode_ = function (status) {
        // The codes for which to retry came from this page:
        // https://cloud.google.com/storage/docs/exponential-backoff
        var isFiveHundredCode = status >= 500 && status < 600;
        var extraRetryCodes = [
        // Request Timeout: web server didn't receive full request in time.
        408,
        // Too Many Requests: you're getting rate-limited, basically.
        429];
        var isExtraRetryCode = array.contains(extraRetryCodes, status);
        var isRequestSpecificRetryCode = array.contains(this.additionalRetryCodes_, status);
        return isFiveHundredCode || isExtraRetryCode || isRequestSpecificRetryCode;
    };
    return NetworkRequest;
}();
/**
 * A collection of information about the result of a network request.
 * @param opt_canceled Defaults to false.
 * @struct
 */
var RequestEndStatus = function () {
    function RequestEndStatus(wasSuccessCode, xhr, opt_canceled) {
        this.wasSuccessCode = wasSuccessCode;
        this.xhr = xhr;
        this.canceled = !!opt_canceled;
    }
    return RequestEndStatus;
}();
exports.RequestEndStatus = RequestEndStatus;
function addAuthHeader_(headers, authToken) {
    if (authToken !== null && authToken.length > 0) {
        headers['Authorization'] = 'Firebase ' + authToken;
    }
}
function addVersionHeader_(headers) {
    var number = typeof firebase !== 'undefined' ? firebase.SDK_VERSION : 'AppManager';
    headers['X-Firebase-Storage-Version'] = 'webjs/' + number;
}
/**
 * @template T
 */
function makeRequest(requestInfo, authToken, pool) {
    var queryPart = UrlUtils.makeQueryString(requestInfo.urlParams);
    var url = requestInfo.url + queryPart;
    var headers = object.clone(requestInfo.headers);
    addAuthHeader_(headers, authToken);
    addVersionHeader_(headers);
    return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, pool);
}
//# sourceMappingURL=request.js.map


/***/ }),

/***/ 1163:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.start = start;
exports.stop = stop;
/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * @param f May be invoked
 *     before the function returns.
 * @param callback Get all the arguments passed to the function
 *     passed to f, including the initial boolean.
 */
function start(f, callback, timeout) {
    // TODO(andysoto): make this code cleaner (probably refactor into an actual
    // type instead of a bunch of functions with state shared in the closure)
    var waitSeconds = 1;
    // Would type this as "number" but that doesn't work for Node so ¯\_(ツ)_/¯
    var timeoutId = null;
    var hitTimeout = false;
    var cancelState = 0;
    function canceled() {
        return cancelState === 2;
    }
    var triggeredCallback = false;
    function triggerCallback() {
        if (!triggeredCallback) {
            triggeredCallback = true;
            callback.apply(null, arguments);
        }
    }
    function callWithDelay(millis) {
        timeoutId = setTimeout(function () {
            timeoutId = null;
            f(handler, canceled());
        }, millis);
    }
    function handler(success) {
        var var_args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            var_args[_i - 1] = arguments[_i];
        }
        if (triggeredCallback) {
            return;
        }
        if (success) {
            triggerCallback.apply(null, arguments);
            return;
        }
        var mustStop = canceled() || hitTimeout;
        if (mustStop) {
            triggerCallback.apply(null, arguments);
            return;
        }
        if (waitSeconds < 64) {
            /* TODO(andysoto): don't back off so quickly if we know we're offline. */
            waitSeconds *= 2;
        }
        var waitMillis;
        if (cancelState === 1) {
            cancelState = 2;
            waitMillis = 0;
        } else {
            waitMillis = (waitSeconds + Math.random()) * 1000;
        }
        callWithDelay(waitMillis);
    }
    var stopped = false;
    function stop(wasTimeout) {
        if (stopped) {
            return;
        }
        stopped = true;
        if (triggeredCallback) {
            return;
        }
        if (timeoutId !== null) {
            if (!wasTimeout) {
                cancelState = 2;
            }
            clearTimeout(timeoutId);
            callWithDelay(0);
        } else {
            if (!wasTimeout) {
                cancelState = 1;
            }
        }
    }
    callWithDelay(0);
    setTimeout(function () {
        hitTimeout = true;
        stop(true);
    }, timeout);
    return stop;
}
/**
 * Stops the retry loop from repeating.
 * If the function is currently "in between" retries, it is invoked immediately
 * with the second parameter as "true". Otherwise, it will be invoked once more
 * after the current invocation finishes iff the current invocation would have
 * triggered another retry.
 */
function stop(id) {
    id(false);
}
//# sourceMappingURL=backoff.js.map


/***/ }),

/***/ 1164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */

/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registerMessaging = registerMessaging;

var _windowController = __webpack_require__(1165);

var _windowController2 = _interopRequireDefault(_windowController);

var _swController = __webpack_require__(1169);

var _swController2 = _interopRequireDefault(_swController);

var _app = __webpack_require__(45);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registerMessaging(instance) {
    var messagingName = 'messaging';
    var factoryMethod = function factoryMethod(app) {
        if (self && 'ServiceWorkerGlobalScope' in self) {
            return new _swController2.default(app);
        }
        // Assume we are in the window context.
        return new _windowController2.default(app);
    };
    var namespaceExports = {
        // no-inline
        Messaging: _windowController2.default
    };
    instance.INTERNAL.registerService(messagingName, factoryMethod, namespaceExports);
}
registerMessaging(_app2.default);
//# sourceMappingURL=messaging.js.map


/***/ }),

/***/ 1165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */

/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _controllerInterface = __webpack_require__(1143);

var _controllerInterface2 = _interopRequireDefault(_controllerInterface);

var _errors = __webpack_require__(1131);

var _errors2 = _interopRequireDefault(_errors);

var _workerPageMessage = __webpack_require__(1146);

var _workerPageMessage2 = _interopRequireDefault(_workerPageMessage);

var _defaultSw = __webpack_require__(1168);

var _defaultSw2 = _interopRequireDefault(_defaultSw);

var _notificationPermission = __webpack_require__(1145);

var _notificationPermission2 = _interopRequireDefault(_notificationPermission);

var _subscribe = __webpack_require__(676);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var WindowController = function (_super) {
    __extends(WindowController, _super);
    /**
     * A service that provides a MessagingService instance.
     * @param {!firebase.app.App} app
     */
    function WindowController(app) {
        var _this = _super.call(this, app) || this;
        /**
         * @private
         * @type {ServiceWorkerRegistration}
         */
        _this.registrationToUse_;
        /**
         * @private
         * @type {Promise}
         */
        _this.manifestCheckPromise_;
        /**
         * @private
         * @type {firebase.Observer}
         */
        _this.messageObserver_ = null;
        /**
         * @private {!firebase.Subscribe} The subscribe function to the onMessage
         * observer.
         */
        _this.onMessage_ = (0, _subscribe.createSubscribe)(function (observer) {
            _this.messageObserver_ = observer;
        });
        /**
         * @private
         * @type {firebase.Observer}
         */
        _this.tokenRefreshObserver_ = null;
        _this.onTokenRefresh_ = (0, _subscribe.createSubscribe)(function (observer) {
            _this.tokenRefreshObserver_ = observer;
        });
        _this.setupSWMessageListener_();
        return _this;
    }
    /**
     * This method returns an FCM token if it can be generated.
     * The return promise will reject if the browser doesn't support
     * FCM, if permission is denied for notifications or it's not
     * possible to generate a token.
     * @export
     * @return {Promise<string> | Promise<null>} Returns a promise the
     * resolves to an FCM token or null if permission isn't granted.
     */
    WindowController.prototype.getToken = function () {
        var _this = this;
        // Check that the required API's are available
        if (!this.isSupported_()) {
            return Promise.reject(this.errorFactory_.create(_errors2.default.codes.UNSUPPORTED_BROWSER));
        }
        return this.manifestCheck_().then(function () {
            return _super.prototype.getToken.call(_this);
        });
    };
    /**
     * The method checks that a manifest is defined and has the correct GCM
     * sender ID.
     * @private
     * @return {Promise} Returns a promise that resolves if the manifest matches
     * our required sender ID
     */
    WindowController.prototype.manifestCheck_ = function () {
        var _this = this;
        if (this.manifestCheckPromise_) {
            return this.manifestCheckPromise_;
        }
        var manifestTag = document.querySelector('link[rel="manifest"]');
        if (!manifestTag) {
            this.manifestCheckPromise_ = Promise.resolve();
        } else {
            this.manifestCheckPromise_ = fetch(manifestTag.href).then(function (response) {
                return response.json();
            }).catch(function () {
                // If the download or parsing fails allow check.
                // We only want to error if we KNOW that the gcm_sender_id is incorrect.
                return Promise.resolve();
            }).then(function (manifestContent) {
                if (!manifestContent) {
                    return;
                }
                if (!manifestContent['gcm_sender_id']) {
                    return;
                }
                if (manifestContent['gcm_sender_id'] !== '103953800507') {
                    throw _this.errorFactory_.create(_errors2.default.codes.INCORRECT_GCM_SENDER_ID);
                }
            });
        }
        return this.manifestCheckPromise_;
    };
    /**
     * Request permission if it is not currently granted
     * @export
     * @returns {Promise} Resolves if the permission was granted, otherwise
     * rejects
     */
    WindowController.prototype.requestPermission = function () {
        var _this = this;
        if (Notification.permission === _notificationPermission2.default.granted) {
            return Promise.resolve();
        }
        return new Promise(function (resolve, reject) {
            var managePermissionResult = function managePermissionResult(result) {
                if (result === _notificationPermission2.default.granted) {
                    return resolve();
                } else if (result === _notificationPermission2.default.denied) {
                    return reject(_this.errorFactory_.create(_errors2.default.codes.PERMISSION_BLOCKED));
                } else {
                    return reject(_this.errorFactory_.create(_errors2.default.codes.PERMISSION_DEFAULT));
                }
            };
            // The Notification.requestPermission API was changed to
            // return a promise so now have to handle both in case
            // browsers stop support callbacks for promised version
            var permissionPromise = Notification.requestPermission(function (result) {
                if (permissionPromise) {
                    // Let the promise manage this
                    return;
                }
                managePermissionResult(result);
            });
            if (permissionPromise) {
                // Prefer the promise version as it's the future API.
                permissionPromise.then(managePermissionResult);
            }
        });
    };
    /**
     * This method allows a developer to override the default service worker and
     * instead use a custom service worker.
     * @export
     * @param {!ServiceWorkerRegistration} registration The service worker
     * registration that should be used to receive the push messages.
     */
    WindowController.prototype.useServiceWorker = function (registration) {
        if (!(registration instanceof ServiceWorkerRegistration)) {
            throw this.errorFactory_.create(_errors2.default.codes.SW_REGISTRATION_EXPECTED);
        }
        if (typeof this.registrationToUse_ !== 'undefined') {
            throw this.errorFactory_.create(_errors2.default.codes.USE_SW_BEFORE_GET_TOKEN);
        }
        this.registrationToUse_ = registration;
    };
    /**
     * @export
     * @param {!firebase.Observer|function(*)} nextOrObserver An observer object
     * or a function triggered on message.
     * @param {function(!Error)=} optError Optional A function triggered on
     * message error.
     * @param {function()=} optCompleted Optional function triggered when the
     * observer is removed.
     * @return {!function()} The unsubscribe function for the observer.
     */
    WindowController.prototype.onMessage = function (nextOrObserver, optError, optCompleted) {
        return this.onMessage_(nextOrObserver, optError, optCompleted);
    };
    /**
     * @export
     * @param {!firebase.Observer|function()} nextOrObserver An observer object
     * or a function triggered on token refresh.
     * @param {function(!Error)=} optError Optional A function
     * triggered on token refresh error.
     * @param {function()=} optCompleted Optional function triggered when the
     * observer is removed.
     * @return {!function()} The unsubscribe function for the observer.
     */
    WindowController.prototype.onTokenRefresh = function (nextOrObserver, optError, optCompleted) {
        return this.onTokenRefresh_(nextOrObserver, optError, optCompleted);
    };
    /**
     * Given a registration, wait for the service worker it relates to
     * become activer
     * @private
     * @param  {ServiceWorkerRegistration} registration Registration to wait
     * for service worker to become active
     * @return {Promise<!ServiceWorkerRegistration>} Wait for service worker
     * registration to become active
     */
    WindowController.prototype.waitForRegistrationToActivate_ = function (registration) {
        var _this = this;
        var serviceWorker = registration.installing || registration.waiting || registration.active;
        return new Promise(function (resolve, reject) {
            if (!serviceWorker) {
                // This is a rare scenario but has occured in firefox
                reject(_this.errorFactory_.create(_errors2.default.codes.NO_SW_IN_REG));
                return;
            }
            // Because the Promise function is called on next tick there is a
            // small chance that the worker became active or redundant already.
            if (serviceWorker.state === 'activated') {
                resolve(registration);
                return;
            }
            if (serviceWorker.state === 'redundant') {
                reject(_this.errorFactory_.create(_errors2.default.codes.SW_REG_REDUNDANT));
                return;
            }
            var stateChangeListener = function stateChangeListener() {
                if (serviceWorker.state === 'activated') {
                    resolve(registration);
                } else if (serviceWorker.state === 'redundant') {
                    reject(_this.errorFactory_.create(_errors2.default.codes.SW_REG_REDUNDANT));
                } else {
                    // Return early and wait to next state change
                    return;
                }
                serviceWorker.removeEventListener('statechange', stateChangeListener);
            };
            serviceWorker.addEventListener('statechange', stateChangeListener);
        });
    };
    /**
     * This will regiater the default service worker and return the registration
     * @private
     * @return {Promise<!ServiceWorkerRegistration>} The service worker
     * registration to be used for the push service.
     */
    WindowController.prototype.getSWRegistration_ = function () {
        var _this = this;
        if (this.registrationToUse_) {
            return this.waitForRegistrationToActivate_(this.registrationToUse_);
        }
        // Make the registration null so we know useServiceWorker will not
        // use a new service worker as registrationToUse_ is no longer undefined
        this.registrationToUse_ = null;
        return navigator.serviceWorker.register(_defaultSw2.default.path, {
            scope: _defaultSw2.default.scope
        }).catch(function (err) {
            throw _this.errorFactory_.create(_errors2.default.codes.FAILED_DEFAULT_REGISTRATION, {
                browserErrorMessage: err.message
            });
        }).then(function (registration) {
            return _this.waitForRegistrationToActivate_(registration).then(function () {
                _this.registrationToUse_ = registration;
                // We update after activation due to an issue with Firefox v49 where
                // a race condition occassionally causes the service work to not
                // install
                registration.update();
                return registration;
            });
        });
    };
    /**
     * This method will set up a message listener to handle
     * events from the service worker that should trigger
     * events in the page.
     *
     * @private
     */
    WindowController.prototype.setupSWMessageListener_ = function () {
        var _this = this;
        if (!('serviceWorker' in navigator)) {
            return;
        }
        navigator.serviceWorker.addEventListener('message', function (event) {
            if (!event.data || !event.data[_workerPageMessage2.default.PARAMS.TYPE_OF_MSG]) {
                // Not a message from FCM
                return;
            }
            var workerPageMessage = event.data;
            switch (workerPageMessage[_workerPageMessage2.default.PARAMS.TYPE_OF_MSG]) {
                case _workerPageMessage2.default.TYPES_OF_MSG.PUSH_MSG_RECEIVED:
                case _workerPageMessage2.default.TYPES_OF_MSG.NOTIFICATION_CLICKED:
                    var pushMessage = workerPageMessage[_workerPageMessage2.default.PARAMS.DATA];
                    _this.messageObserver_.next(pushMessage);
                    break;
                default:
                    // Noop.
                    break;
            }
        }, false);
    };
    /**
     * Checks to see if the required API's are valid or not.
     * @private
     * @return {boolean} Returns true if the desired APIs are available.
     */
    WindowController.prototype.isSupported_ = function () {
        return 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window && 'fetch' in window && ServiceWorkerRegistration.prototype.hasOwnProperty('showNotification') && PushSubscription.prototype.hasOwnProperty('getKey');
    };
    return WindowController;
}(_controllerInterface2.default);
exports.default = WindowController;
module.exports = exports['default'];
//# sourceMappingURL=window-controller.js.map


/***/ }),

/***/ 1166:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */

/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _errors = __webpack_require__(674);

var _errors2 = __webpack_require__(1131);

var _errors3 = _interopRequireDefault(_errors2);

var _arrayBufferToBase = __webpack_require__(1167);

var _arrayBufferToBase2 = _interopRequireDefault(_arrayBufferToBase);

var _fcmDetails = __webpack_require__(1144);

var _fcmDetails2 = _interopRequireDefault(_fcmDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FCM_TOKEN_DETAILS_DB = 'fcm_token_details_db';
var FCM_TOKEN_OBJ_STORE = 'fcm_token_object_Store';
var FCM_TOKEN_DETAILS_DB_VERSION = 1;
var TokenManager = function () {
    function TokenManager() {
        this.errorFactory_ = new _errors.ErrorFactory('messaging', 'Messaging', _errors3.default.map);
        this.openDbPromise_ = null;
    }
    /**
     * Get the indexedDB as a promsie.
     * @private
     * @return {Promise<IDBDatabase>} The IndexedDB database
     */
    TokenManager.prototype.openDatabase_ = function () {
        if (this.openDbPromise_) {
            return this.openDbPromise_;
        }
        this.openDbPromise_ = new Promise(function (resolve, reject) {
            var request = indexedDB.open(FCM_TOKEN_DETAILS_DB, FCM_TOKEN_DETAILS_DB_VERSION);
            request.onerror = function (event) {
                reject(event.target.error);
            };
            request.onsuccess = function (event) {
                resolve(event.target.result);
            };
            request.onupgradeneeded = function (event) {
                var db = event.target.result;
                var objectStore = db.createObjectStore(FCM_TOKEN_OBJ_STORE, {
                    keyPath: 'swScope'
                });
                // Make sure the sender ID can be searched
                objectStore.createIndex('fcmSenderId', 'fcmSenderId', {
                    unique: false
                });
                objectStore.createIndex('fcmToken', 'fcmToken', {
                    unique: true
                });
            };
        });
        return this.openDbPromise_;
    };
    /**
     * Close the currently open database.
     * @return {Promise<?>} Returns the result of the promise chain.
     */
    TokenManager.prototype.closeDatabase = function () {
        var _this = this;
        if (this.openDbPromise_) {
            return this.openDbPromise_.then(function (db) {
                db.close();
                _this.openDbPromise_ = null;
            });
        }
        return Promise.resolve();
    };
    /**
     * Given a token, this method will look up the details in indexedDB.
     * @public
     * @param {string} fcmToken
     * @return {Promise<Object>} The details associated with that token.
     */
    TokenManager.prototype.getTokenDetailsFromToken = function (fcmToken) {
        return this.openDatabase_().then(function (db) {
            return new Promise(function (resolve, reject) {
                var transaction = db.transaction([FCM_TOKEN_OBJ_STORE]);
                var objectStore = transaction.objectStore(FCM_TOKEN_OBJ_STORE);
                var index = objectStore.index('fcmToken');
                var request = index.get(fcmToken);
                request.onerror = function (event) {
                    reject(event.target.error);
                };
                request.onsuccess = function (event) {
                    resolve(event.target.result);
                };
            });
        });
    };
    TokenManager.prototype.getTokenDetailsFromSWScope_ = function (swScope) {
        return this.openDatabase_().then(function (db) {
            return new Promise(function (resolve, reject) {
                var transaction = db.transaction([FCM_TOKEN_OBJ_STORE]);
                var objectStore = transaction.objectStore(FCM_TOKEN_OBJ_STORE);
                var scopeRequest = objectStore.get(swScope);
                scopeRequest.onerror = function (event) {
                    reject(event.target.error);
                };
                scopeRequest.onsuccess = function (event) {
                    resolve(event.target.result);
                };
            });
        });
    };
    TokenManager.prototype.getAllTokenDetailsForSenderId_ = function (senderId) {
        return this.openDatabase_().then(function (db) {
            return new Promise(function (resolve, reject) {
                var transaction = db.transaction([FCM_TOKEN_OBJ_STORE]);
                var objectStore = transaction.objectStore(FCM_TOKEN_OBJ_STORE);
                var senderIdTokens = [];
                var cursorRequest = objectStore.openCursor();
                cursorRequest.onerror = function (event) {
                    reject(event.target.error);
                };
                cursorRequest.onsuccess = function (event) {
                    var cursor = event.target.result;
                    if (cursor) {
                        if (cursor.value['fcmSenderId'] === senderId) {
                            senderIdTokens.push(cursor.value);
                        }
                        cursor.continue();
                    } else {
                        resolve(senderIdTokens);
                    }
                };
            });
        });
    };
    /**
     * Given a PushSubscription and messagingSenderId, get an FCM token.
     * @public
     * @param  {string} senderId The 'messagingSenderId' to tie the token to.
     * @param  {PushSubscription} subscription The PushSusbcription to "federate".
     * @param  {string=} pushSet If defined this will swap the subscription for
     * matching FCM token.
     * @return {Promise<!Object>} Returns the FCM token to be used in place
     * of the PushSubscription.
     */
    TokenManager.prototype.subscribeToFCM = function (senderId, subscription, pushSet) {
        var _this = this;
        var p256dh = (0, _arrayBufferToBase2.default)(subscription['getKey']('p256dh'));
        var auth = (0, _arrayBufferToBase2.default)(subscription['getKey']('auth'));
        var fcmSubscribeBody = "authorized_entity=" + senderId + "&" + ("endpoint=" + subscription.endpoint + "&") + ("encryption_key=" + p256dh + "&") + ("encryption_auth=" + auth);
        if (pushSet) {
            fcmSubscribeBody += "&pushSet=" + pushSet;
        }
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var subscribeOptions = {
            method: 'POST',
            headers: headers,
            body: fcmSubscribeBody
        };
        return fetch(_fcmDetails2.default.ENDPOINT + '/fcm/connect/subscribe', subscribeOptions).then(function (response) {
            return response.json();
        }).then(function (response) {
            var fcmTokenResponse = response;
            if (fcmTokenResponse['error']) {
                var message = fcmTokenResponse['error']['message'];
                throw _this.errorFactory_.create(_errors3.default.codes.TOKEN_SUBSCRIBE_FAILED, {
                    message: message
                });
            }
            if (!fcmTokenResponse['token']) {
                throw _this.errorFactory_.create(_errors3.default.codes.TOKEN_SUBSCRIBE_NO_TOKEN);
            }
            if (!fcmTokenResponse['pushSet']) {
                throw _this.errorFactory_.create(_errors3.default.codes.TOKEN_SUBSCRIBE_NO_PUSH_SET);
            }
            return {
                token: fcmTokenResponse['token'],
                pushSet: fcmTokenResponse['pushSet']
            };
        });
    };
    /**
     * Checks the that fields in the PushSubscription are equivalent to the
     * details stores in the masterTokenDetails.
     * @private
     * @param  {PushSubscription} subscription The push subscription we expect
     * the master token to match.
     * @param  {Object}  masterTokenDetails The saved details we wish to compare
     * with the PushSubscription
     * @return {boolean} true if the subscription and token details are
     * equivalent.
     */
    TokenManager.prototype.isSameSubscription_ = function (subscription, masterTokenDetails) {
        // getKey() isn't defined in the PushSubscription externs file, hence
        // subscription['getKey']('<key name>').
        return subscription.endpoint === masterTokenDetails['endpoint'] && (0, _arrayBufferToBase2.default)(subscription['getKey']('auth')) === masterTokenDetails['auth'] && (0, _arrayBufferToBase2.default)(subscription['getKey']('p256dh')) === masterTokenDetails['p256dh'];
    };
    /**
     * Save the details for the fcm token for re-use at a later date.
     * @private
     * @param  {string} senderId The 'messagingSenderId' used for this project
     * @param  {ServiceWorkerRegistration} swRegistration The service worker
     * used to subscribe the user for web push
     * @param  {PushSubscription} subscription The push subscription passed to
     * FCM for the current token.
     * @param  {string} fcmToken The FCM token currently used on this
     * device.
     * @param  {string} fcmPushSet The FCM push tied to the fcm token.
     * @return {Promise<void>}
     */
    TokenManager.prototype.saveTokenDetails_ = function (senderId, swRegistration, subscription, fcmToken, fcmPushSet) {
        var details = {
            swScope: swRegistration.scope,
            endpoint: subscription.endpoint,
            auth: (0, _arrayBufferToBase2.default)(subscription['getKey']('auth')),
            p256dh: (0, _arrayBufferToBase2.default)(subscription['getKey']('p256dh')),
            fcmToken: fcmToken,
            fcmPushSet: fcmPushSet,
            fcmSenderId: senderId
        };
        return this.openDatabase_().then(function (db) {
            return new Promise(function (resolve, reject) {
                var transaction = db.transaction([FCM_TOKEN_OBJ_STORE], 'readwrite');
                var objectStore = transaction.objectStore(FCM_TOKEN_OBJ_STORE);
                var request = objectStore.put(details);
                request.onerror = function (event) {
                    reject(event.target.error);
                };
                request.onsuccess = function (event) {
                    resolve();
                };
            });
        });
    };
    /**
     * Returns the saved FCM Token if one is available and still valid,
     * otherwise `null` is returned.
     * @param {string} senderId This should be the sender ID associated with the
     * FCM Token being retrieved.
     * @param {ServiceWorkerRegistration} swRegistration Registration to be used
     * to subscribe the user to push.
     * @return {Promise<string> | Promise} Returns the saved FCM Token if
     * avilable and valid.
     * @export
     */
    TokenManager.prototype.getSavedToken = function (senderId, swRegistration) {
        var _this = this;
        if (!(swRegistration instanceof ServiceWorkerRegistration)) {
            return Promise.reject(this.errorFactory_.create(_errors3.default.codes.SW_REGISTRATION_EXPECTED));
        }
        if (typeof senderId !== 'string' || senderId.length === 0) {
            return Promise.reject(this.errorFactory_.create(_errors3.default.codes.BAD_SENDER_ID));
        }
        return this.getAllTokenDetailsForSenderId_(senderId).then(function (allTokenDetails) {
            if (allTokenDetails.length === 0) {
                return;
            }
            var index = allTokenDetails.findIndex(function (tokenDetails) {
                return swRegistration.scope === tokenDetails['swScope'] && senderId === tokenDetails['fcmSenderId'];
            });
            if (index === -1) {
                return;
            }
            return allTokenDetails[index];
        }).then(function (tokenDetails) {
            if (!tokenDetails) {
                return;
            }
            return swRegistration.pushManager.getSubscription().catch(function (err) {
                throw _this.errorFactory_.create(_errors3.default.codes.GET_SUBSCRIPTION_FAILED);
            }).then(function (subscription) {
                if (subscription && _this.isSameSubscription_(subscription, tokenDetails)) {
                    return tokenDetails['fcmToken'];
                }
            });
        });
    };
    /**
     * Creates a new FCM token.
     */
    TokenManager.prototype.createToken = function (senderId, swRegistration) {
        var _this = this;
        if (typeof senderId !== 'string' || senderId.length === 0) {
            return Promise.reject(this.errorFactory_.create(_errors3.default.codes.BAD_SENDER_ID));
        }
        if (!(swRegistration instanceof ServiceWorkerRegistration)) {
            return Promise.reject(this.errorFactory_.create(_errors3.default.codes.SW_REGISTRATION_EXPECTED));
        }
        // Check for existing subscription first
        var subscription;
        var fcmTokenDetails;
        return swRegistration.pushManager.getSubscription().then(function (subscription) {
            if (subscription) {
                return subscription;
            }
            return swRegistration.pushManager.subscribe(_fcmDetails2.default.SUBSCRIPTION_OPTIONS);
        }).then(function (sub) {
            subscription = sub;
            return _this.subscribeToFCM(senderId, subscription);
        }).then(function (tokenDetails) {
            fcmTokenDetails = tokenDetails;
            return _this.saveTokenDetails_(senderId, swRegistration, subscription, fcmTokenDetails['token'], fcmTokenDetails['pushSet']);
        }).then(function () {
            return fcmTokenDetails['token'];
        });
    };
    /**
     * This method deletes details of the current FCM token.
     * It's returning a promise in case we need to move to an async
     * method for deleting at a later date.
     * @param {string} token Token to be deleted
     * @return {Promise<Object>} Resolves once the FCM token details have been
     * deleted and returns the deleted details.
     */
    TokenManager.prototype.deleteToken = function (token) {
        var _this = this;
        if (typeof token !== 'string' || token.length === 0) {
            return Promise.reject(this.errorFactory_.create(_errors3.default.codes.INVALID_DELETE_TOKEN));
        }
        return this.getTokenDetailsFromToken(token).then(function (details) {
            if (!details) {
                throw _this.errorFactory_.create(_errors3.default.codes.DELETE_TOKEN_NOT_FOUND);
            }
            return _this.openDatabase_().then(function (db) {
                return new Promise(function (resolve, reject) {
                    var transaction = db.transaction([FCM_TOKEN_OBJ_STORE], 'readwrite');
                    var objectStore = transaction.objectStore(FCM_TOKEN_OBJ_STORE);
                    var request = objectStore.delete(details['swScope']);
                    request.onerror = function (event) {
                        reject(event.target.error);
                    };
                    request.onsuccess = function (event) {
                        if (event.target.result === 0) {
                            reject(_this.errorFactory_.create(_errors3.default.codes.FAILED_TO_DELETE_TOKEN));
                            return;
                        }
                        resolve(details);
                    };
                });
            });
        });
    };
    return TokenManager;
}();
exports.default = TokenManager;
module.exports = exports['default'];
//# sourceMappingURL=token-manager.js.map


/***/ }),

/***/ 1167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (arrayBuffer) {
    var base64String = toBase64(arrayBuffer);
    return base64String.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
};

/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function toBase64(arrayBuffer) {
    var uint8Version = new Uint8Array(arrayBuffer);
    return window.btoa(String.fromCharCode.apply(null, uint8Version));
}
;
module.exports = exports['default'];
//# sourceMappingURL=array-buffer-to-base64.js.map


/***/ }),

/***/ 1168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */

/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    path: '/firebase-messaging-sw.js',
    scope: '/firebase-cloud-messaging-push-scope'
};
module.exports = exports['default'];
//# sourceMappingURL=default-sw.js.map


/***/ }),

/***/ 1169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v4.2.0
Build: rev-d6b2db4
Terms: https://firebase.google.com/terms/ */

/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _controllerInterface = __webpack_require__(1143);

var _controllerInterface2 = _interopRequireDefault(_controllerInterface);

var _errors = __webpack_require__(1131);

var _errors2 = _interopRequireDefault(_errors);

var _workerPageMessage = __webpack_require__(1146);

var _workerPageMessage2 = _interopRequireDefault(_workerPageMessage);

var _fcmDetails = __webpack_require__(1144);

var _fcmDetails2 = _interopRequireDefault(_fcmDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var FCM_MSG = 'FCM_MSG';
var SWController = function (_super) {
    __extends(SWController, _super);
    function SWController(app) {
        var _this = _super.call(this, app) || this;
        self.addEventListener('push', function (e) {
            return _this.onPush_(e);
        }, false);
        self.addEventListener('pushsubscriptionchange', function (e) {
            return _this.onSubChange_(e);
        }, false);
        self.addEventListener('notificationclick', function (e) {
            return _this.onNotificationClick_(e);
        }, false);
        /**
         * @private
         * @type {function(Object)|null}
         */
        _this.bgMessageHandler_ = null;
        return _this;
    }
    /**
    * A handler for push events that shows notifications based on the content of
    * the payload.
    *
    * The payload must be a JSON-encoded Object with a `notification` key. The
    * value of the `notification` property will be used as the NotificationOptions
    * object passed to showNotification. Additionally, the `title` property of the
    * notification object will be used as the title.
    *
    * If there is no notification data in the payload then no notification will be
    * shown.
    * @private
    */
    SWController.prototype.onPush_ = function (event) {
        var _this = this;
        var msgPayload;
        try {
            msgPayload = event.data.json();
        } catch (err) {
            // Not JSON so not an FCM message
            return;
        }
        var handleMsgPromise = this.hasVisibleClients_().then(function (hasVisibleClients) {
            if (hasVisibleClients) {
                // Do not need to show a notification.
                if (msgPayload.notification || _this.bgMessageHandler_) {
                    // Send to page
                    return _this.sendMessageToWindowClients_(msgPayload);
                }
                return;
            }
            var notificationDetails = _this.getNotificationData_(msgPayload);
            if (notificationDetails) {
                var notificationTitle = notificationDetails.title || '';
                return self.registration.showNotification(notificationTitle, notificationDetails);
            } else if (_this.bgMessageHandler_) {
                return _this.bgMessageHandler_(msgPayload);
            }
        });
        event.waitUntil(handleMsgPromise);
    };
    /**
    * @private
    */
    SWController.prototype.onSubChange_ = function (event) {
        var _this = this;
        var promiseChain = this.getToken().then(function (token) {
            if (!token) {
                // We can't resubscribe if we don't have an FCM token for this scope.
                throw _this.errorFactory_.create(_errors2.default.codes.NO_FCM_TOKEN_FOR_RESUBSCRIBE);
            }
            var tokenDetails = null;
            var tokenManager = _this.getTokenManager();
            return tokenManager.getTokenDetailsFromToken(token).then(function (details) {
                tokenDetails = details;
                if (!tokenDetails) {
                    throw _this.errorFactory_.create(_errors2.default.codes.INVALID_SAVED_TOKEN);
                }
                // Attempt to get a new subscription
                return self.registration.pushManager.subscribe(_fcmDetails2.default.SUBSCRIPTION_OPTIONS);
            }).then(function (newSubscription) {
                // Send new subscription to FCM.
                return tokenManager.subscribeToFCM(tokenDetails.fcmSenderId, newSubscription, tokenDetails.fcmPushSet);
            }).catch(function (err) {
                // The best thing we can do is log this to the terminal so
                // developers might notice the error.
                return tokenManager.deleteToken(tokenDetails.fcmToken).then(function () {
                    throw _this.errorFactory_.create(_errors2.default.codes.UNABLE_TO_RESUBSCRIBE, {
                        message: err
                    });
                });
            });
        });
        event.waitUntil(promiseChain);
    };
    /**
    * @private
    */
    SWController.prototype.onNotificationClick_ = function (event) {
        var _this = this;
        if (!(event.notification && event.notification.data && event.notification.data[FCM_MSG])) {
            // Not an FCM notification, do nothing.
            return;
        }
        // Prevent other listeners from receiving the event
        event.stopImmediatePropagation();
        event.notification.close();
        var msgPayload = event.notification.data[FCM_MSG];
        var clickAction = msgPayload['notification']['click_action'];
        if (!clickAction) {
            // Nothing to do.
            return;
        }
        var promiseChain = this.getWindowClient_(clickAction).then(function (windowClient) {
            if (!windowClient) {
                // Unable to find window client so need to open one.
                return self.clients.openWindow(clickAction);
            }
            return windowClient;
        }).then(function (windowClient) {
            if (!windowClient) {
                // Window Client will not be returned if it's for a third party origin.
                return;
            }
            // Delete notification data from payload before sending to the page.
            var notificationData = msgPayload['notification'];
            delete msgPayload['notification'];
            var internalMsg = _workerPageMessage2.default.createNewMsg(_workerPageMessage2.default.TYPES_OF_MSG.NOTIFICATION_CLICKED, msgPayload);
            // Attempt to send a message to the client to handle the data
            // Is affected by: https://github.com/slightlyoff/ServiceWorker/issues/728
            return _this.attemptToMessageClient_(windowClient, internalMsg);
        });
        event.waitUntil(promiseChain);
    };
    /**
     * @private
     * @param {Object} msgPayload
     * @return {NotificationOptions|undefined}
     */
    SWController.prototype.getNotificationData_ = function (msgPayload) {
        if (!msgPayload) {
            return;
        }
        if (_typeof(msgPayload.notification) !== 'object') {
            return;
        }
        var notificationInformation = Object.assign({}, msgPayload.notification);
        // Put the message payload under FCM_MSG name so we can identify the
        // notification as being an FCM notification vs a notification from
        // somewhere else (i.e. normal web push or developer generated
        // notification).
        notificationInformation['data'] = (_a = {}, _a[FCM_MSG] = msgPayload, _a);
        return notificationInformation;
        var _a;
    };
    /**
     * Calling setBackgroundMessageHandler will opt in to some specific
     * behaviours.
     * 1.) If a notification doesn't need to be shown due to a window already
     * being visible, then push messages will be sent to the page.
     * 2.) If a notification needs to be shown, and the message contains no
     * notification data this method will be called
     * and the promise it returns will be passed to event.waitUntil.
     * If you do not set this callback then all push messages will let and the
     * developer can handle them in a their own 'push' event callback
     * @export
     * @param {function(Object)} callback The callback to be called when a push
     * message is received and a notification must be shown. The callback will
     * be given the data from the push message.
     */
    SWController.prototype.setBackgroundMessageHandler = function (callback) {
        if (callback && typeof callback !== 'function') {
            throw this.errorFactory_.create(_errors2.default.codes.BG_HANDLER_FUNCTION_EXPECTED);
        }
        this.bgMessageHandler_ = callback;
    };
    /**
     * @private
     * @param {string} url The URL to look for when focusing a client.
     * @return {Object} Returns an existing window client or a newly opened
     * WindowClient.
     */
    SWController.prototype.getWindowClient_ = function (url) {
        // Use URL to normalize the URL when comparing to windowClients.
        // This at least handles whether to include trailing slashes or not
        var parsedURL = new URL(url).href;
        return self.clients.matchAll({
            type: 'window',
            includeUncontrolled: true
        }).then(function (clientList) {
            var suitableClient = null;
            for (var i = 0; i < clientList.length; i++) {
                var parsedClientUrl = new URL(clientList[i].url).href;
                if (parsedClientUrl === parsedURL) {
                    suitableClient = clientList[i];
                    break;
                }
            }
            if (suitableClient) {
                suitableClient.focus();
                return suitableClient;
            }
        });
    };
    /**
     * This message will attempt to send the message to a window client.
     * @private
     * @param {Object} client The WindowClient to send the message to.
     * @param {Object} message The message to send to the client.
     * @returns {Promise} Returns a promise that resolves after sending the
     * message. This does not guarantee that the message was successfully
     * received.
     */
    SWController.prototype.attemptToMessageClient_ = function (client, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!client) {
                return reject(_this.errorFactory_.create(_errors2.default.codes.NO_WINDOW_CLIENT_TO_MSG));
            }
            client.postMessage(message);
            resolve();
        });
    };
    /**
     * @private
     * @returns {Promise<boolean>} If there is currently a visible WindowClient,
     * this method will resolve to true, otherwise false.
     */
    SWController.prototype.hasVisibleClients_ = function () {
        return self.clients.matchAll({
            type: 'window',
            includeUncontrolled: true
        }).then(function (clientList) {
            return clientList.some(function (client) {
                return client.visibilityState === 'visible';
            });
        });
    };
    /**
     * @private
     * @param {Object} msgPayload The data from the push event that should be sent
     * to all available pages.
     * @returns {Promise} Returns a promise that resolves once the message
     * has been sent to all WindowClients.
     */
    SWController.prototype.sendMessageToWindowClients_ = function (msgPayload) {
        var _this = this;
        return self.clients.matchAll({
            type: 'window',
            includeUncontrolled: true
        }).then(function (clientList) {
            var internalMsg = _workerPageMessage2.default.createNewMsg(_workerPageMessage2.default.TYPES_OF_MSG.PUSH_MSG_RECEIVED, msgPayload);
            return Promise.all(clientList.map(function (client) {
                return _this.attemptToMessageClient_(client, internalMsg);
            }));
        });
    };
    /**
     * This will register the default service worker and return the registration.
     * @private
     * @return {Promise<!ServiceWorkerRegistration>} The service worker
     * registration to be used for the push service.
     */
    SWController.prototype.getSWRegistration_ = function () {
        return Promise.resolve(self.registration);
    };
    return SWController;
}(_controllerInterface2.default);
exports.default = SWController;
module.exports = exports['default'];
//# sourceMappingURL=sw-controller.js.map


/***/ }),

/***/ 1181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(1147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(44);
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
 * Generated class for the EditTeamPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EditTeamPage = (function () {
    function EditTeamPage(navCtrl, navParams, view, afAuth, db, actionSheetCtrl, camera, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.afAuth = afAuth;
        this.db = db;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.toast = toast;
        this.team = {};
    }
    EditTeamPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.teamSub = this.db.object('teams/' + this.navParams.get('team').$key)
            .subscribe(function (data) {
            _this.team = data;
        });
    };
    EditTeamPage.prototype.update = function (team) {
        this.db.object('teams/' + this.navParams.get('team').$key)
            .update({ name: team.name, city: team.city });
        this.toast.create({
            message: 'تم التحديث  بنجاح',
            duration: 2200,
            dismissOnPageChange: true,
            position: 'top'
        }).present();
    };
    EditTeamPage.prototype.changePhoto = function (type) {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
            targetWidth: 600,
            targetHeight: 300
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.storage().ref();
            var filename = _this.navParams.get('team').$key;
            var imageRef = storageRef.child(filename + "/" + type + ".jpg");
            imageRef.putString(base64Image, __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.storage.StringFormat.DATA_URL)
                .then(function (snap) {
                var ref = _this.db.object('/teams/' + _this.navParams.get('team').$key);
                if (type == 'logo')
                    ref.update({ logo: snap.downloadURL });
                else
                    ref.update({ bg: snap.downloadURL });
            });
        }, function (err) {
            // Handle error
        });
    };
    EditTeamPage.prototype.deletePic = function (type) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.storage().ref();
        var filename = this.navParams.get('team').$key;
        var imageRef = storageRef.child(filename + "/" + type + ".jpg");
        imageRef.delete().then(function () {
            if (type == 'logo') {
                _this.db.object('/teams/' + _this.navParams.get('team').$key + '/logo')
                    .set('http://playerleague.it/uploads/club/242d7e5ff1bd143ca11fd4d4b0dd1f8a.png');
            }
            else {
                _this.db.object('/teams/' + _this.navParams.get('team').$key + '/bg')
                    .remove();
            }
        }).catch(function (error) {
            // Uh-oh, an error occurred!
            console.log(error);
        });
    };
    EditTeamPage.prototype.presentActionSheet = function (type) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: type == 'logo' ? 'تغيير الشعار' : 'تغيير الخلفية',
                    handler: function () {
                        _this.changePhoto(type);
                    }
                }, {
                    text: 'حذف',
                    role: 'destructive',
                    handler: function () {
                        _this.deletePic(type);
                    }
                }, {
                    text: 'إلغاء',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    EditTeamPage.prototype.closeModal = function () {
        this.teamSub.unsubscribe();
        this.view.dismiss();
    };
    return EditTeamPage;
}());
EditTeamPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-team',template:/*ion-inline-start:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/edit-team/edit-team.html"*/'<!--\n  Generated template for the EditProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n\n    <ion-buttons start>\n      <button ion-button (click)="closeModal()">إغلاق</button>\n    </ion-buttons>\n    <ion-title>إعدادات الفريق</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card class="card1">\n    <button ion-item (click)="presentActionSheet(\'logo\')">\n      <div *ngIf="team.logo" class="avatar" [ngStyle]="{ \'background-image\': \'url(\' + team.logo + \')\'}"></div>\n    </button>\n    <button ion-item (click)="presentActionSheet(\'bg\')">\n      <div *ngIf="team.bg" class="avatar" [ngStyle]="{ \'background-image\': \'url(\' + team.bg + \')\'}"></div>\n      <div *ngIf="!team.bg" class="avatar" style="background-image: url(\'https://www.buscandonomes.com.br/_img/xthumb-default.gif.pagespeed.ic.yQYWf40TN9.png\');"></div>\n    </button>\n    <ion-item>\n      <ion-input [(ngModel)]="team.name" name="name" type="text" placeholder="اسم فريقك" required>\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>المدينة</ion-label>\n      <ion-select [(ngModel)]="team.city" name="city" interface=\'popover\'>\n        <ion-option value="الرياض" selected>الرياض</ion-option>\n        <ion-option value="جده">جده</ion-option>\n        <ion-option value="الدمام">الدمام</ion-option>\n      </ion-select>\n    </ion-item>\n    <div text-center padding>\n      <button block ion-button color="orange" (click)="update(team)">تحديث</button>\n    </div>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/saudalhilali/Desktop/startUp/myTeam/src/pages/edit-team/edit-team.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */]])
], EditTeamPage);

//# sourceMappingURL=edit-team.js.map

/***/ })

});
//# sourceMappingURL=0.js.map