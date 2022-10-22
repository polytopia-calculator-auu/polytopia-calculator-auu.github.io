/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/@ngtools/webpack/src/index.js!./src/app/modules/battle-calculator/battle/battle.worker.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@ngtools/webpack/src/index.js!./src/app/modules/battle-calculator/battle/battle.worker.ts":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src!./src/app/modules/battle-calculator/battle/battle.worker.ts ***!
  \*******************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_utils_execute_battle_matches_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utils/execute-battle-matches.util */ "./src/app/utils/execute-battle-matches.util.ts");
/// <reference lib="webworker" />


addEventListener('message', function (_a) {
    var data = _a.data;
    var attackers = data.attackers, defenders = data.defenders, getOptimalResult = data.getOptimalResult;
    postMessage(Object(src_app_utils_execute_battle_matches_util__WEBPACK_IMPORTED_MODULE_1__["executeBattleMatches"])(attackers, defenders, getOptimalResult));
});


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
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
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

/***/ "./src/app/data/unit-list.const.ts":
/*!*****************************************!*\
  !*** ./src/app/data/unit-list.const.ts ***!
  \*****************************************/
/*! exports provided: attackerUnits, defenderUnits, noDefenseUnits, freezingUnits, landUnits, carryUnits, longRangeUnits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attackerUnits", function() { return attackerUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defenderUnits", function() { return defenderUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noDefenseUnits", function() { return noDefenseUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freezingUnits", function() { return freezingUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "landUnits", function() { return landUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carryUnits", function() { return carryUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "longRangeUnits", function() { return longRangeUnits; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var attackerUnits = [
    'Warrior',
    'Rider',
    'Defender',
    'Swordsman',
    'Archer',
    'Catapult',
    'Knight',
    'Giant',
    'Boat',
    'Ship',
    'Battleship',
    'Amphibian',
    'Crab',
    'Tridention',
    'Polytaur',
    'Navalon',
    'Baby Dragon',
    'Fire Dragon',
    'Ice Archer',
    'Battle Sled',
    'Ice Fortress',
    'Gaami',
    'Shaman',
    'Hexapod',
    'Phychi',
    'Raychi',
    'Kiton',
    'Doomux',
    'Exida',
    'Centipede',
    'Segment',
    'Dagger',
];
var defenderUnits = [
    'Warrior',
    'Rider',
    'Defender',
    'Swordsman',
    'Archer',
    'Catapult',
    'Knight',
    'Giant',
    'Boat',
    'Ship',
    'Battleship',
    'Mind Bender',
    'Amphibian',
    'Crab',
    'Tridention',
    'Polytaur',
    'Navalon',
    'Dragon Egg',
    'Baby Dragon',
    'Fire Dragon',
    'Mooni',
    'Ice Archer',
    'Battle Sled',
    'Ice Fortress',
    'Gaami',
    'Shaman',
    'Hexapod',
    'Phychi',
    'Raychi',
    'Kiton',
    'Doomux',
    'Exida',
    'Centipede',
    'Segment',
    'Nature Bunny',
    'Dinghy',
    'Cloak',
    'Dagger',
];
var noDefenseUnits = ['Mooni', 'Ice Archer', 'Dragon Egg', 'Mind Bender', 'Segment'];
var freezingUnits = ['Ice Archer', 'Phychi', 'Dagger'];
var landUnits = [
    'Warrior',
    'Rider',
    'Defender',
    'Swordsman',
    'Archer',
    'Catapult',
    'Mind Bender',
    'Knight',
    'Giant',
    'Polytaur',
    'Nature Bunny'
];
var carryUnits = [
    'Boat',
    'Ship',
    'Battleship'
];
var longRangeUnits = [
    'Archer',
    'Catapult',
    'Boat',
    'Ship',
    'Battleship',
    'Fire Dragon',
    'Ice Archer',
    'Ice Fortress',
    'Phychi',
    'Exida'
];


/***/ }),

/***/ "./src/app/data/unit-stats.const.ts":
/*!******************************************!*\
  !*** ./src/app/data/unit-stats.const.ts ***!
  \******************************************/
/*! exports provided: unitStats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unitStats", function() { return unitStats; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var unitStats = {
    Warrior: {
        attack: 2,
        defense: 2,
        hp: 10,
        veteranHp: 15,
        defenseBonus: 1.5,
        wallBonus: 4
    },
    Rider: {
        attack: 2,
        defense: 1,
        hp: 10,
        veteranHp: 15,
        defenseBonus: 1.5,
        wallBonus: 4
    },
    Defender: {
        attack: 1,
        defense: 3,
        hp: 15,
        veteranHp: 20,
        defenseBonus: 1.5,
        wallBonus: 4
    },
    Swordsman: {
        attack: 3,
        defense: 3,
        hp: 15,
        veteranHp: 20,
        defenseBonus: 1.5,
        wallBonus: 4
    },
    Archer: {
        attack: 2,
        defense: 1,
        hp: 10,
        veteranHp: 15,
        defenseBonus: 1.5,
        wallBonus: 4
    },
    Catapult: {
        attack: 4,
        defense: 0,
        hp: 10,
        veteranHp: 15,
        defenseBonus: 0,
        wallBonus: 0
    },
    Knight: {
        attack: 3.5,
        defense: 1,
        hp: 10,
        veteranHp: 20,
        defenseBonus: 1.5,
        wallBonus: 4
    },
    Giant: {
        attack: 5,
        defense: 4,
        hp: 40,
        veteranHp: null,
        defenseBonus: 1.5,
        wallBonus: 0
    },
    Boat: {
        attack: 1,
        defense: 1,
        hp: 10,
        veteranHp: null,
        defenseBonus: 1.5,
        wallBonus: 0
    },
    Ship: {
        attack: 2,
        defense: 2,
        hp: 10,
        veteranHp: null,
        defenseBonus: 1.5,
        wallBonus: 0
    },
    Battleship: {
        attack: 4,
        defense: 3,
        hp: 10,
        veteranHp: null,
        defenseBonus: 1.5,
        wallBonus: 0
    },
    Amphibian: {
        attack: 2,
        defense: 1,
        hp: 10,
        veteranHp: 15,
        defenseBonus: 1.5,
        wallBonus: 4
    },
    Tridention: {
        attack: 3,
        defense: 1,
        hp: 15,
        veteranHp: 20,
        defenseBonus: 1.5,
        wallBonus: 4
    },
    Crab: {
        attack: 4,
        defense: 4,
        hp: 40,
        veteranHp: null,
        defenseBonus: 1.5,
        wallBonus: 4
    },
    'Battle Sled': {
        attack: 3,
        defense: 2,
        hp: 15,
        veteranHp: 20,
        defenseBonus: 1.5,
        wallBonus: 4
    },
    Polytaur: {
        attack: 3,
        defense: 1,
        hp: 15,
        veteranHp: null,
        defenseBonus: 1.5,
        wallBonus: 4
    },
    Navalon: {
        attack: 4,
        defense: 4,
        hp: 30,
        veteranHp: null,
        defenseBonus: 1.5,
        wallBonus: 0
    },
    'Mind Bender': {
        attack: 0,
        defense: 1,
        hp: 10,
        veteranHp: null,
        defenseBonus: 1.5,
        wallBonus: 0
    },
    'Ice Fortress': {
        attack: 4,
        defense: 3,
        hp: 20,
        veteranHp: 25,
        defenseBonus: 1.5,
        wallBonus: 4
    },
    'Ice Archer': {
        attack: 0.1,
        defense: 1,
        hp: 10,
        veteranHp: 15,
        defenseBonus: 1.5,
        wallBonus: 4
    },
    'Dragon Egg': {
        attack: 0,
        defense: 2,
        hp: 10,
        veteranHp: null,
        defenseBonus: 1.5,
        wallBonus: 4
    },
    'Baby Dragon': {
        attack: 3,
        defense: 3,
        hp: 15,
        veteranHp: null,
        defenseBonus: 1.5,
        wallBonus: 0
    },
    'Fire Dragon': {
        attack: 4,
        defense: 3,
        hp: 20,
        veteranHp: null,
        defenseBonus: 1.5,
        wallBonus: 0
    },
    Mooni: {
        attack: 0,
        defense: 2,
        hp: 10,
        veteranHp: null,
        defenseBonus: 1.5,
        wallBonus: 0
    },
    'Nature Bunny': {
        attack: 0,
        defense: 1,
        hp: 20,
        veteranHp: null,
        defenseBonus: 0,
        wallBonus: 0
    },
    Gaami: {
        attack: 4,
        defense: 4,
        hp: 30,
        veteranHp: 35,
        defenseBonus: 1.5,
        wallBonus: 4
    },
    Shaman: {
        attack: 1,
        defense: 1,
        hp: 10,
        veteranHp: null,
        defenseBonus: 1.5,
        wallBonus: 0
    },
    Hexapod: {
        attack: 3,
        defense: 1,
        hp: 5,
        veteranHp: 10,
        defenseBonus: 1.5,
        wallBonus: 0
    },
    Phychi: {
        attack: 1,
        defense: 1,
        hp: 5,
        veteranHp: 10,
        defenseBonus: 1.5,
        wallBonus: 0
    },
    Raychi: {
        attack: 3,
        defense: 2,
        hp: 15,
        veteranHp: 20,
        defenseBonus: 1.5,
        wallBonus: 0
    },
    Kiton: {
        attack: 1,
        defense: 3,
        hp: 20,
        veteranHp: 25,
        defenseBonus: 1.5,
        wallBonus: 0
    },
    Doomux: {
        attack: 4,
        defense: 2,
        hp: 20,
        veteranHp: 25,
        defenseBonus: 1.5,
        wallBonus: 0
    },
    Exida: {
        attack: 3,
        defense: 1,
        hp: 10,
        veteranHp: 25,
        defenseBonus: 1.5,
        wallBonus: 0
    },
    Centipede: {
        attack: 4,
        defense: 3,
        hp: 20,
        veteranHp: null,
        defenseBonus: 1.5,
        wallBonus: 0
    },
    Segment: {
        attack: 2,
        defense: 2,
        hp: 10,
        veteranHp: null,
        defenseBonus: 1.5,
        wallBonus: 0
    },
    Dinghy: {
        attack: 0,
        defense: 0.5,
        hp: 5,
        veteranHp: null,
        defenseBonus: 0,
        wallBonus: 0
    },
    Cloak: {
        attack: 0,
        defense: 0.5,
        hp: 5,
        veteranHp: null,
        defenseBonus: 0,
        wallBonus: 0
    },
    Dagger: {
        attack: 2,
        defense: 2,
        hp: 10,
        veteranHp: null,
        defenseBonus: 1.5,
        wallBonus: 0
    }
};


/***/ }),

/***/ "./src/app/utils/calculate-damage.util.ts":
/*!************************************************!*\
  !*** ./src/app/utils/calculate-damage.util.ts ***!
  \************************************************/
/*! exports provided: calculateDamage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateDamage", function() { return calculateDamage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/unit-stats.const */ "./src/app/data/unit-stats.const.ts");
/* harmony import */ var _calculate_max_hp_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculate-max-hp.util */ "./src/app/utils/calculate-max-hp.util.ts");
/* harmony import */ var _data_unit_list_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/unit-list.const */ "./src/app/data/unit-list.const.ts");




var BOOSTED_FACTOR = .5;
var POISONED_FACTOR = .8;
function calculateDamage(attacker, defender) {
    var attackerStat = _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_1__["unitStats"][attacker.unit];
    var defenderStat = _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_1__["unitStats"][defender.unit];
    var attackerMaxHp = Object(_calculate_max_hp_util__WEBPACK_IMPORTED_MODULE_2__["calculateMaxHp"])(attacker);
    var defenderMaxHp = Object(_calculate_max_hp_util__WEBPACK_IMPORTED_MODULE_2__["calculateMaxHp"])(defender);
    var attackStat = attackerStat.attack;
    if (attacker.isBoosted) {
        attackStat += BOOSTED_FACTOR;
    }
    var defenseStat = defenderStat.defense;
    var defenseBonus = 1;
    if (defender.isPoisoned) {
        defenseBonus = POISONED_FACTOR;
    }
    else if (defender.withDefenseBonus && !defender.isPoisoned) {
        defenseBonus = defender.withDefenseBonus === 'withWall' ? defenderStat.wallBonus : defenderStat.defenseBonus;
    }
    var attackForce = attackStat * (attacker.hp / attackerMaxHp).toFixed(16);
    var defenseForce = defenseStat * defenseBonus * (defender.hp / defenderMaxHp).toFixed(16);
    var totalForce = attackForce + defenseForce;
    var accelerator = 4.5;
    var attackDamageTemp = (attackForce / totalForce).toFixed(16) * attackStat * accelerator;
    var defenseDamageTemp = (defenseForce / totalForce).toFixed(16) * defenseStat * accelerator;
    var attackDamage = Math.round(attackDamageTemp);
    var defenseDamage = Math.round(defenseDamageTemp);
    var defenderNewHp = Math.max(defender.hp - attackDamage, 0);
    var splashedNewHp = null;
    if (attacker.unit === 'Fire Dragon') {
        splashedNewHp = Math.max(defender.hp - Math.floor(attackDamage / 2), 0);
    }
    var attackerNewHp = attacker.hp;
    var noRetaliation = attacker.freeFromRetaliation
        || _data_unit_list_const__WEBPACK_IMPORTED_MODULE_3__["noDefenseUnits"].includes(defender.unit)
        || _data_unit_list_const__WEBPACK_IMPORTED_MODULE_3__["freezingUnits"].includes(attacker.unit);
    if (defenderNewHp > 0 && !noRetaliation) {
        attackerNewHp = Math.max(attacker.hp - defenseDamage, 0);
    }
    else {
        defenseDamage = 0;
    }
    return { attackDamage: attackDamage, defenseDamage: defenseDamage, defenderNewHp: defenderNewHp, attackerNewHp: attackerNewHp, splashedNewHp: splashedNewHp };
}


/***/ }),

/***/ "./src/app/utils/calculate-max-hp.util.ts":
/*!************************************************!*\
  !*** ./src/app/utils/calculate-max-hp.util.ts ***!
  \************************************************/
/*! exports provided: calculateMaxHp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateMaxHp", function() { return calculateMaxHp; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/unit-stats.const */ "./src/app/data/unit-stats.const.ts");
/* harmony import */ var _data_unit_list_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/unit-list.const */ "./src/app/data/unit-list.const.ts");



function calculateMaxHp(unit) {
    if (!unit.unit) {
        return null;
    }
    // For units with carry skills, such as Boat, Ship and Battleship
    // their health and maxHealth varies based on the unit they are carrying
    // so we will use the carried unit stat for getting maxHp
    var unitStat;
    if (_data_unit_list_const__WEBPACK_IMPORTED_MODULE_2__["carryUnits"].includes(unit.unit)) {
        if (!unit.carriedUnit) {
            return null;
        }
        unitStat = _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_1__["unitStats"][unit.carriedUnit];
    }
    else {
        unitStat = _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_1__["unitStats"][unit.unit];
    }
    return unit.isVeteran && unitStat.veteranHp ? unitStat.veteranHp : unitStat.hp;
}


/***/ }),

/***/ "./src/app/utils/combine.util.ts":
/*!***************************************!*\
  !*** ./src/app/utils/combine.util.ts ***!
  \***************************************/
/*! exports provided: combine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combine", function() { return combine; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function combine(arrA, arrB) {
    var result = [];
    arrA.forEach(function (a) {
        arrB.forEach(function (b) {
            result.push([a, b]);
        });
    });
    return result;
}


/***/ }),

/***/ "./src/app/utils/deep-clone.util.ts":
/*!******************************************!*\
  !*** ./src/app/utils/deep-clone.util.ts ***!
  \******************************************/
/*! exports provided: deepClone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepClone", function() { return deepClone; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}


/***/ }),

/***/ "./src/app/utils/execute-battle-matches.util.ts":
/*!******************************************************!*\
  !*** ./src/app/utils/execute-battle-matches.util.ts ***!
  \******************************************************/
/*! exports provided: executeBattleMatches, executeBattle, getBattleResultStatistic, calculateBattleResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeBattleMatches", function() { return executeBattleMatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeBattle", function() { return executeBattle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBattleResultStatistic", function() { return getBattleResultStatistic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateBattleResult", function() { return calculateBattleResult; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _calculate_damage_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculate-damage.util */ "./src/app/utils/calculate-damage.util.ts");
/* harmony import */ var _combine_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./combine.util */ "./src/app/utils/combine.util.ts");
/* harmony import */ var _deep_clone_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deep-clone.util */ "./src/app/utils/deep-clone.util.ts");
/* harmony import */ var _permute_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./permute.util */ "./src/app/utils/permute.util.ts");





function executeBattleMatches(attackers, defenders, getOptimalResult) {
    var attackersPermutations = getOptimalResult ? Object(_permute_util__WEBPACK_IMPORTED_MODULE_4__["permute"])(attackers) : [attackers];
    var defenderPermutations = getOptimalResult ? Object(_permute_util__WEBPACK_IMPORTED_MODULE_4__["permute"])(defenders) : [defenders];
    var matches = Object(_combine_util__WEBPACK_IMPORTED_MODULE_2__["combine"])(attackersPermutations, defenderPermutations);
    matches.forEach(function (match) {
        var attacker_ = Object(_deep_clone_util__WEBPACK_IMPORTED_MODULE_3__["deepClone"])(match[0]);
        var defenders_ = Object(_deep_clone_util__WEBPACK_IMPORTED_MODULE_3__["deepClone"])(match[1]);
        var _a = executeBattle(attacker_, defenders_), battleResults = _a.battleResults, unusedAttackerUnits = _a.unusedAttackerUnits, untouchedDefenderUnits = _a.untouchedDefenderUnits, defenderSurvivors = _a.defenderSurvivors;
        var battleResultsStatistic = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, getBattleResultStatistic(battleResults), { unusedAttackerUnits: unusedAttackerUnits, untouchedDefenderUnits: untouchedDefenderUnits, defenderSurvivors: defenderSurvivors });
        match.push(battleResults);
        match.push(battleResultsStatistic);
    });
    matches
        .sort(function (matchA, matchB) {
        var a = matchA[3];
        var damageScoreA = a.totalAttackDamage - a.totalDefenseDamage;
        var b = matchB[3];
        var damageScoreB = b.totalAttackDamage - b.totalDefenseDamage;
        return damageScoreB - damageScoreA;
    })
        .sort(function (matchA, matchB) {
        var a = matchA[3];
        var survivalScoreA = (a.attackerSurvivors.length + a.unusedAttackerUnits.length + a.defendersKilled.length) - (a.defenderSurvivors.length + a.attackersKilled.length + a.untouchedDefenderUnits.length);
        var b = matchB[3];
        var survivalScoreB = (b.attackerSurvivors.length + b.unusedAttackerUnits.length + b.defendersKilled.length) - (b.defenderSurvivors.length + b.attackersKilled.length + b.untouchedDefenderUnits.length);
        return survivalScoreB - survivalScoreA;
    });
    var battleResults = matches[0][2];
    var battleResultStatistics = matches[0][3];
    return { battleResults: battleResults, battleResultStatistics: battleResultStatistics };
}
function executeBattle(attackers, defenders) {
    var battleResults = [];
    var unusedAttackerUnits = [];
    var defenderSurvivors = [];
    var lastDefenderAttacked = 0;
    attackers.forEach(function (attacker) {
        var defenderIndex = defenders.findIndex(function (d) { return d.hp > 0; });
        if (typeof defenderIndex !== 'number' || defenderIndex < 0) {
            unusedAttackerUnits.push(attacker);
            return;
        }
        var defender = defenders[defenderIndex];
        var battleResult = calculateBattleResult(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, attacker), tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, defender));
        lastDefenderAttacked = defenderIndex;
        // preserve the original hp for logging in battle summary table
        if (!defender.preservedHp) {
            defender.preservedHp = defender.hp;
        }
        // use newHp as current defender.hp on next attack
        defender.hp = battleResult.defender.newHp;
        battleResults.push(battleResult);
    });
    var untouchedDefenderUnits = defenders.slice(lastDefenderAttacked + 1);
    var lastBattleDefender = battleResults[battleResults.length - 1].defender;
    if (lastBattleDefender.newHp > 0) {
        defenderSurvivors.push(lastBattleDefender);
    }
    return { battleResults: battleResults, unusedAttackerUnits: unusedAttackerUnits, untouchedDefenderUnits: untouchedDefenderUnits, defenderSurvivors: defenderSurvivors };
}
function getBattleResultStatistic(battleResults) {
    var attackerSurvivors = [];
    var attackersKilled = [];
    var defendersKilled = [];
    var totalAttackDamage = 0;
    var totalDefenseDamage = 0;
    battleResults.forEach(function (br) {
        if (br.attacker.newHp > 0) {
            attackerSurvivors.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, br.attacker));
        }
        else {
            attackersKilled.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, br.attacker));
        }
        if (br.defender.newHp === 0) {
            defendersKilled.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, br.defender));
        }
        totalAttackDamage += br.attacker.attackDamage;
        totalDefenseDamage += br.defender.defenseDamage;
    });
    return {
        attackerSurvivors: attackerSurvivors,
        attackersKilled: attackersKilled,
        defendersKilled: defendersKilled,
        totalAttackDamage: totalAttackDamage,
        totalDefenseDamage: totalDefenseDamage
    };
}
function calculateBattleResult(attackerData, defenderData) {
    var _a = Object(_calculate_damage_util__WEBPACK_IMPORTED_MODULE_1__["calculateDamage"])(attackerData, defenderData), attackDamage = _a.attackDamage, defenseDamage = _a.defenseDamage, defenderNewHp = _a.defenderNewHp, attackerNewHp = _a.attackerNewHp, splashedNewHp = _a.splashedNewHp;
    attackerData.origHp = attackerData.hp;
    attackerData.newHp = attackerNewHp;
    attackerData.attackDamage = Math.min(attackDamage, defenderData.hp - defenderNewHp);
    defenderData.origHp = defenderData.hp;
    defenderData.newHp = defenderNewHp;
    defenderData.splashedNewHp = splashedNewHp;
    defenderData.defenseDamage = Math.min(defenseDamage, attackerData.hp - attackerNewHp);
    return {
        attacker: attackerData,
        defender: defenderData
    };
}


/***/ }),

/***/ "./src/app/utils/permute.util.ts":
/*!***************************************!*\
  !*** ./src/app/utils/permute.util.ts ***!
  \***************************************/
/*! exports provided: permute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "permute", function() { return permute; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function permute(arr) {
    var result = [];
    if (arr.length === 0)
        return [];
    if (arr.length === 1)
        return [arr];
    for (var i = 0; i < arr.length; i++) {
        var curItem = arr[i];
        var remainingItems = arr.slice(0, i).concat(arr.slice(i + 1));
        var remainingItemsPermuted = permute(remainingItems);
        for (var j = 0; j < remainingItemsPermuted.length; j++) {
            var permutedArray = [curItem].concat(remainingItemsPermuted[j]);
            result.push(permutedArray);
        }
    }
    return result;
}


/***/ })

/******/ });
//# sourceMappingURL=1.worker.js.map