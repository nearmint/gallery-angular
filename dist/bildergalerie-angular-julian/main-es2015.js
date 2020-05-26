(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-gallery></app-gallery>\n<br/>\n<app-category></app-category>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Aktive Kategorien:</h3>\n<div *ngFor=\"let category of categories; let i = index\">\n    <div id=\"{{category[0]}}1\">{{ category[0] }} <button (click)='editCategory($event, category[0])'>Edit</button><button (click)=\"deleteCategory(i)\">Delete</button></div>\n    \n    <div id=\"{{category[0]}}2\" style='display: none;'><input type='text' value='{{category[0]}}' id=\"{{category[0]}}2-2\"><button (click)=\"saveCategory($event, category[0], i)\">OK</button></div>\n    \n    <!-- <div class='edit'>Edit</div> -->\n</div>\n\n\n<h3>Kategorie hinzufügen:</h3>\n\n<input type='text' id='addCategoryInput' [(ngModel)]=\"addCategoryValue\"><button (click)='addCategory()'>Add</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br/>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"formShow = !formShow\">Bild hinzufügen</button>\n<br/><br/>\n<form [ngStyle]=\"{display: formShowFunction()}\" id=\"form\">\n    <div class=\"form-group\">\n  <label>Link des Bildes:</label>\n    <input type=\"text\" placeholder=\"http://mycoolurl.com/yahoo.png\" id=\"link\" class=\"form-control\"[(ngModel)]=\"bild.link\" [value]=\"emptyString\" name=\"link\"><br/><br/>\n    </div>\n    <div class=\"form-group\">\n    <label>Beschreibung des Bildes:</label>\n  <input type=\"text\" placeholder=\"Ein richtig cooles Bild!\" id=\"beschreibung\" class=\"form-control\" [(ngModel)]=\"bild.description\" [value]=\"emptyString\" name=\"desc\"><br/><br/>\n    </div>\n  <div class=\"form-check\">\n    <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\" [(ngModel)]=\"bild.descriptionHidden\" name=\"hidden\">\n    <label class=\"form-check-label\" for=\"exampleCheck1\">Soll die Beschreibung versteckt werden?</label>\n  </div>\n<br/>\n\n<h4>Kategorien:</h4>\n\n  <div *ngFor=\"let category of categories; let i = index\">\n    <input type=\"checkbox\" id=\"category{{i}}\" name=\"{{category[0]}}\" value=\"{{category[0]}}\" (click)=\"addCategoryToImage(i)\">\n    <label for=\"category{{i}}\">{{category[0]}}</label>\n    </div>\n\n\n\n\n  <button type=\"button\" value=\"Add\" class=\"btn btn-primary\" (click)=\"addImage()\">Submit</button>\n</form>\n\n<br/><br/>\n<h4>Filter nach Kategorie: <button class=\"btn btn-info\" type=\"button\"(click)=\"resetFilter()\">Reset</button></h4>\n\n<div class=\"dropdown\">\n  <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n    Kategorie\n  </button>\n  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n    <a class=\"dropdown-item\" href=\"#\" *ngFor=\"let category of categories\" (click)=\"filterCategories(category[1])\">{{category[0]}} <br/></a>\n \n\n  </div>\n</div>\n\n\n\n\n<br/>\n<mat-grid-list cols=\"3\" rowHeight=\"250px\" id='parentContainer'>\n  \n  \n  <!-- newImages[page-1] -->\n  <mat-grid-tile *ngFor=\"let image of showImages | slice: (page-1)*6 : (page*6)\" class=\"test\">\n    <div class=\"image\" >\n      <!-- *ngIf=\"images.indexOf(image) < page*6 && images.indexOf(image) >= page*6-6 \" -->\n    <!-- <div *ngIf=\"images.indexOf(image) % 3 === 0\"></div> -->\n        <img [src]=\"image.link\" class='flexItem fill'>\n        <mat-chip><span *ngIf=\"!image.descriptionHidden\" [innerText]=\"image.description\"></span></mat-chip>\n        </div>\n      </mat-grid-tile>\n\n  \n\n  \n</mat-grid-list>\n<div *ngIf=\"page > 1\">\n\n  <button type=\"button\" (click)=\"priorPage()\" class=\"btn\">vorherige Seite</button>\n\n</div>\n<div *ngIf=\"showImages.length > page*6\">\n\n  <button type=\"button\" (click)=\"nextPage()\" class=\"btn\">nächste Seite</button>\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'bildergalerie-angular-julian';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _image_collection_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./image-collection.service */ "./src/app/image-collection.service.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"],
            _category_category_component__WEBPACK_IMPORTED_MODULE_7__["CategoryComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"]
        ],
        providers: [_image_collection_service__WEBPACK_IMPORTED_MODULE_8__["ImageCollection"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/bild.ts":
/*!*************************!*\
  !*** ./src/app/bild.ts ***!
  \*************************/
/*! exports provided: Bild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bild", function() { return Bild; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Bild {
    constructor(link = '', description = '', descriptionHidden = false, category = []) {
        this.link = link;
        this.description = description;
        this.descriptionHidden = descriptionHidden;
        this.category = category;
    }
}


/***/ }),

/***/ "./src/app/category/category.component.css":
/*!*************************************************!*\
  !*** ./src/app/category/category.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _image_collection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image-collection.service */ "./src/app/image-collection.service.ts");



let CategoryComponent = class CategoryComponent {
    constructor(imageCollection) {
        this.imageCollection = imageCollection;
        this.uniqueId = this.imageCollection.uniqueId;
        this.categories = [];
    }
    ngOnInit() {
        this.categories = this.imageCollection.categories;
    }
    editCategory(event, category) {
        event.path[1].style.display = 'none';
        document.getElementById(`${category}2`).style.display = 'inline';
    }
    saveCategory(event, category, i) {
        event.path[1].style.display = 'none';
        document.getElementById(`${category}1`).style.display = 'inline';
        this.categories[i] = document.getElementById(`${category}2-2`).value;
        localStorage.setItem("categories", JSON.stringify(this.categories));
    }
    deleteCategory(i) {
        this.categories.splice(i, 1);
        localStorage.setItem("categories", JSON.stringify(this.categories));
    }
    addCategory() {
        this.categories.push([this.addCategoryValue, this.uniqueId]);
        localStorage.setItem("categories", JSON.stringify(this.categories));
        this.uniqueId++;
        localStorage.setItem("uniqueId", JSON.stringify(this.uniqueId));
    }
};
CategoryComponent.ctorParameters = () => [
    { type: _image_collection_service__WEBPACK_IMPORTED_MODULE_2__["ImageCollection"] }
];
CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category.component.css */ "./src/app/category/category.component.css")).default]
    })
], CategoryComponent);



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n.image {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    justify-content: space-between;\n    /* align-items:center; */\n}\n\n\n\n.fill {\n    -o-object-fit: cover;\n       object-fit: cover;  \n    min-width: 100%;\n    min-height: calc(100% - 50px);\n}\n\n\n\n.image > .mat-chip {\n    margin-top: 8px;\n    min-height: 50px;\n  }\n\n\n\n.dropdown {\n    position: relative;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsd0JBQXdCO0FBQzVCOzs7O0FBSUE7SUFDSSxvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7Ozs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7Ozs7QUFHQTtJQUNFLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5pbWFnZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLyogYWxpZ24taXRlbXM6Y2VudGVyOyAqL1xufVxuXG5cblxuLmZpbGwge1xuICAgIG9iamVjdC1maXQ6IGNvdmVyOyAgXG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDUwcHgpO1xufVxuXG4uaW1hZ2UgPiAubWF0LWNoaXAge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICB9XG5cblxuICAuZHJvcGRvd24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _bild__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bild */ "./src/app/bild.ts");
/* harmony import */ var _image_collection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image-collection.service */ "./src/app/image-collection.service.ts");




let GalleryComponent = class GalleryComponent {
    constructor(imageCollection) {
        this.imageCollection = imageCollection;
        this.page = 1;
        this.images = this.imageCollection.images;
        this.showImages = this.images;
        this.addCategory = [];
        this.categories = this.imageCollection.categories;
        this.emptyString = "";
        this.formShow = false;
        this.newImages = [];
        if (this.images.length === 0) {
            this.bild = new _bild__WEBPACK_IMPORTED_MODULE_2__["Bild"]('https://images.freeimages.com/images/large-previews/851/poppies-1369329.jpg', "I'm cool", false);
            this.images.push(this.bild);
            this.bild = new _bild__WEBPACK_IMPORTED_MODULE_2__["Bild"]('https://images.freeimages.com/images/large-previews/9f7/wanna-beer-1056482.jpg', "I'm uncool", true);
            this.images.push(this.bild);
            this.bild = new _bild__WEBPACK_IMPORTED_MODULE_2__["Bild"]('https://images.freeimages.com/images/large-previews/cd8/bright-red-sunset-1446856.jpg', "Blubb", false);
            this.images.push(this.bild);
            this.bild = new _bild__WEBPACK_IMPORTED_MODULE_2__["Bild"]('https://images.freeimages.com/images/large-previews/456/skyscraper-1-1523706.jpg', "Ich bin der letzte", true);
            this.images.push(this.bild);
        }
        this.bild = new _bild__WEBPACK_IMPORTED_MODULE_2__["Bild"]();
        // for (let i = 0; i < this.images.length; i+=6) {
        //   let repeat = Math.floor(this.images.length/6);
        //   console.log(repeat);
        //   if (i === repeat) {
        //     let str = "this.newImages.push([";
        //     for(let e=(repeat*6); e < (this.images.length % 6); e++) {
        //       str += `this.images[${e}],`;
        //       console.log(str);
        //     }
        //     str += "]);";
        //   eval(str);
        //   console.log(this.newImages);
        //   }
        //   else {
        //   this.newImages.push([this.images[i],this.images[i+1],this.images[i+2],this.images[i+3],this.images[i+4],this.images[i+5]]);
        //   }
        // }
        // console.log(this.newImages);
        // console.log(this.newImages[this.page-1]);
    }
    addCategoryToImage(index) {
        if (this.addCategory[index] === true) {
            this.addCategory[index] = false;
        }
        else {
            this.addCategory[index] = true;
        }
    }
    filterCategories(cat) {
        console.log(cat);
        console.log(this.images);
        this.showImages = this.images.filter(image => image.category.includes(cat));
    }
    resetFilter() {
        this.showImages = this.imageCollection.images;
    }
    formShowFunction() {
        if (this.formShow) {
            return "inline";
        }
        return "none";
    }
    priorPage() {
        this.page -= 1;
    }
    nextPage() {
        this.page += 1;
    }
    addImage() {
        //let el = <HTMLInputElement> document.getElementById("exampleCheck1");
        //this.bild = new Bild(`${(<HTMLInputElement>document.getElementById("link")).value}`,`${(<HTMLInputElement>document.getElementById("beschreibung")).value}`,el.checked)
        console.log(this.addCategory);
        this.bild.category = [];
        for (let e = 0; e < this.addCategory.length; e++) {
            if (this.addCategory[e] === true) {
                console.log(this.categories[e][1]);
                this.bild.category.push(this.categories[e][1]);
            }
        }
        this.images.push(this.bild);
        console.log(this.bild);
        //this.emptyString = null;
        this.bild = new _bild__WEBPACK_IMPORTED_MODULE_2__["Bild"]();
        this.formShow = !this.formShow;
        this.newImages = [];
        // for (let i = 0; i < this.images.length; i+=6) {
        //   let repeat = Math.floor(this.images.length/6);
        //   console.log(repeat);
        //   if (i/6 === repeat) {
        //     let str = "this.newImages.push([";
        //     for(let e=(repeat*6); e < ((repeat*6)+(this.images.length % 6)); e++) {
        //       str += `this.images[${e}],`;
        //       console.log(str);
        //     }
        //     str += "]);";
        //   eval(str);
        //   console.log(this.newImages);
        //   }
        //   else {
        //   this.newImages.push([this.images[i],this.images[i+1],this.images[i+2],this.images[i+3],this.images[i+4],this.images[i+5]]);
        //     console.log(this.newImages);
        // }
        // }
        localStorage.setItem("photos", JSON.stringify(this.images));
        console.log(this.images.length);
        this.addCategory = [];
    }
    ngOnInit() {
        this.showImages = this.images;
    }
};
GalleryComponent.ctorParameters = () => [
    { type: _image_collection_service__WEBPACK_IMPORTED_MODULE_3__["ImageCollection"] }
];
GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gallery',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")).default]
    })
], GalleryComponent);



/***/ }),

/***/ "./src/app/image-collection.service.ts":
/*!*********************************************!*\
  !*** ./src/app/image-collection.service.ts ***!
  \*********************************************/
/*! exports provided: ImageCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCollection", function() { return ImageCollection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _bild__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bild */ "./src/app/bild.ts");


class ImageCollection {
    constructor() {
        this.images = this.loadImages();
        this.categories = this.loadCategories();
        this.uniqueId = this.loadUniqueId();
    }
    loadImages() {
        let photos;
        if (localStorage.getItem("photos")) {
            photos = JSON.parse(localStorage.getItem("photos"));
            photos = photos.map(element => {
                return new _bild__WEBPACK_IMPORTED_MODULE_1__["Bild"](element.link, element.description, element.descriptionHidden);
            });
        }
        else {
            photos = [];
        }
        return photos;
    }
    loadCategories() {
        let categories;
        if (localStorage.getItem("categories")) {
            categories = JSON.parse(localStorage.getItem("categories"));
        }
        else {
            categories = [];
        }
        return categories;
    }
    loadUniqueId() {
        let uniqueId;
        if (localStorage.getItem("uniqueId")) {
            uniqueId = JSON.parse(localStorage.getItem("uniqueId"));
        }
        else {
            uniqueId = 0;
        }
        return uniqueId;
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/florian/Documents/workspace/bildergalerie-angular-julian/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map