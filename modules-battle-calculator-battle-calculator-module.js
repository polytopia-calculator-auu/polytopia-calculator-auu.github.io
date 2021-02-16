(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-battle-calculator-battle-calculator-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/battle-calculator/battle-calculator.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/battle-calculator/battle-calculator.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title size=\"large\">Polytopia Calculator</ion-title>\n  </ion-toolbar>\n    <ion-segment (ionChange)=\"onSegmentChange($event)\" class=\"mode-toggle\" #ionSegment [value]=\"activeSlideIndex\">\n      <ion-segment-button value=\"0\">\n        One vs One\n      </ion-segment-button>\n      <ion-segment-button value=\"1\">\n        Battle\n      </ion-segment-button>\n    </ion-segment>\n</ion-header>\n<ion-content #ionContent (ionScrollEnd)=\"onScroll($event)\" [scrollEvents]=\"true\">\n\n  <ion-slides (ionSlideWillChange)=\"onSlideChange($event)\" #ionSlides [options]=\"slideOpts\">\n    <ion-slide>\n      <app-one-on-one (change)=\"onOneOnOneChange($event)\"></app-one-on-one>\n    </ion-slide>\n    <ion-slide>\n      <app-battle (change)=\"onOneOnOneChange($event)\"></app-battle>\n    </ion-slide>\n  </ion-slides>\n\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"isContentScrollable\" class=\"fab-scroll-toggle\">\n<ion-fab-button (click)=\"toggleScroll()\" color=\"medium\">\n  <ion-icon name=\"arrow-down-outline\" *ngIf=\"onTop\"></ion-icon>\n  <ion-icon name=\"arrow-up-outline\" *ngIf=\"!onTop\"></ion-icon>\n</ion-fab-button>\n</ion-fab>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/battle-calculator/battle/battle.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/battle-calculator/battle/battle.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"battleForm\">\n  <div class=\"two-column-wrapper\">\n\n    <ion-list lines=\"full\">\n      <ion-item-divider>\n        <ion-title>Offense Units</ion-title>\n      </ion-item-divider>\n      <ng-container formArrayName=\"attackers\" *ngFor=\"let attacker of attackerForms; let i=index; let isLast = last\">\n        <app-unit-form [formGroupName]=\"i\" unitFormType=\"attacker\" [multi]=true></app-unit-form>\n        <ion-item color=\"danger\" *ngIf=\"attackerForms.length > 1\" (click)=\"removeOffenseUnit(i)\">\n          <ion-icon class=\"delete-icon\" name=\"trash-bin-outline\"></ion-icon>\n        </ion-item>\n        <ion-item-divider *ngIf=\"!isLast\">\n        </ion-item-divider>\n      </ng-container>\n      <ion-item color=\"success\" (click)=\"addOffenseUnit()\">\n        <ion-icon class=\"add-icon\" name=\"add-circle-outline\"></ion-icon>\n      </ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-item-divider>\n        <ion-title>Defense Units</ion-title>\n      </ion-item-divider>\n      <ng-container formArrayName=\"defenders\" *ngFor=\"let defender of defenderForms; let i=index; let isLast = last\">\n        <app-unit-form [formGroupName]=\"i\" unitFormType=\"defender\" [multi]=\"true\"></app-unit-form>\n        <ion-item color=\"danger\" *ngIf=\"defenderForms.length > 1\" (click)=\"removeDefenseUnit(i)\">\n          <ion-icon class=\"delete-icon\" name=\"trash-bin-outline\"></ion-icon>\n        </ion-item>        \n        <ion-item-divider *ngIf=\"!isLast\">\n        </ion-item-divider>\n      </ng-container>\n      <ion-item color=\"success\" (click)=\"addDefenseUnit()\">\n        <ion-icon class=\"add-icon\" name=\"add-circle-outline\"></ion-icon>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div class=\"optimal-result-block\">\n    <ion-checkbox formControlName=\"getOptimalResult\"></ion-checkbox>\n    <ion-label>Get most optimal result</ion-label><br>\n    <ion-note>Note: Uncheck this if battle execution takes too long,  you can also opt to just lessen the number of units in battle</ion-note>\n  </div>\n</form>\n<app-battle-result *ngIf=\"battleResults && !isExecutingBattleMatches\" [multi]=\"true\"\n  [battleResults]=\"battleResults\" [battleResultStatistics]=\"battleResultStatistics\" [showingOptimalResult]=\"battleForm.get('getOptimalResult').value\"></app-battle-result>\n<div class=\"loading-message\" *ngIf=\"isExecutingBattleMatches\">\n  <ion-spinner color=\"success\" name=\"lines\"></ion-spinner><br>\n  <span>Executing battle matches</span>\n</div>\n\n<br>\n<br>\n<br>\n<br>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/battle-calculator/one-on-one/one-on-one.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/battle-calculator/one-on-one/one-on-one.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"oneOnOneForm\">\n  <ion-list>\n    <ion-item-divider>\n      <ion-title>Offense Unit</ion-title>\n    </ion-item-divider>\n    <app-unit-form formGroupName=\"attacker\" unitFormType=\"attacker\"></app-unit-form>\n  </ion-list>\n  <ion-list>\n    <ion-item-divider>\n      <ion-title>Defense Unit</ion-title>\n    </ion-item-divider>\n    <app-unit-form formGroupName=\"defender\" unitFormType=\"defender\"></app-unit-form>\n  </ion-list>\n</form>\n<app-battle-result *ngIf=\"battleResult\" [battleResults]=\"[battleResult]\"></app-battle-result>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/battle-result/battle-result.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/battle-result/battle-result.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-text>\n  <h2>\n    <ion-thumbnail class=\"swords-icon\"><img src=\"assets/other/BigSwords.png\"/></ion-thumbnail>\n    Fight Result\n    <ion-thumbnail class=\"swords-icon\"><img src=\"assets/other/BigSwords.png\"/></ion-thumbnail>\n  </h2>\n</ion-text>\n\n<span *ngIf=\"multi\" class=\"table-title\">Battle Summary</span>\n<ion-note *ngIf=\"multi\">Note: Follow the attack moves breakdown below to achieve same result.</ion-note>\n<table *ngIf=\"multi\">\n  <thead>\n    <th scope=\"\">Offense Units</th>\n    <th scope=\"\">Defense Units</th>\n  </thead>\n  <tbody>\n    <tr>\n      <td>\n        <h4 *ngIf=\"battleResultStatistics.attackerSurvivors.length > 0 || battleResultStatistics.unusedAttackerUnits.length > 0\">Survivors</h4>\n        <div class=\"summary-unit-block\" *ngFor=\"let survivor of battleResultStatistics.attackerSurvivors\">\n          <ion-thumbnail class=\"unit-image\"><img src=\"assets/attacker/{{ survivor.unit }}.png\"/></ion-thumbnail>\n          ({{survivor.newHp}}) <ion-text color=\"danger\">{{(survivor.hp - survivor.newHp) ? '(-'+(survivor.hp - survivor.newHp)+')': ''}}</ion-text>\n        </div>\n        <div class=\"summary-unit-block\" *ngFor=\"let unused of battleResultStatistics.unusedAttackerUnits\">\n          <ion-thumbnail class=\"unit-image\"><img src=\"assets/attacker/{{ unused.unit }}.png\"/></ion-thumbnail>\n          ({{unused.hp}}) <ion-note>(unused)</ion-note>\n        </div>\n        <h4 *ngIf=\"battleResultStatistics.attackersKilled.length > 0\">Destroyed</h4>\n        <div *ngFor=\"let killed of battleResultStatistics.attackersKilled\">\n          <ion-thumbnail class=\"unit-image\"><img src=\"assets/attacker/{{ killed.unit }}.png\"/></ion-thumbnail>\n          ({{killed.newHp}}) <ion-text color=\"danger\">(-{{killed.origHp}})</ion-text>\n        </div>\n      </td>\n      <td>\n        <h4 *ngIf=\"battleResultStatistics.defenderSurvivors.length > 0 || battleResultStatistics.untouchedDefenderUnits.length > 0\">Survivors</h4>\n        <div class=\"summary-unit-block\" *ngFor=\"let survivor of battleResultStatistics.defenderSurvivors\">\n          <ion-thumbnail class=\"unit-image\"><img src=\"assets/defender/{{ survivor.unit }}.png\"/></ion-thumbnail>\n          ({{survivor.newHp}}) <ion-text color=\"danger\">{{((survivor.preservedHp || survivor.origHp) - survivor.newHp) ? '(-'+((survivor.preservedHp || survivor.origHp) - survivor.newHp)+')': ''}}</ion-text>\n        </div>\n        <div class=\"summary-unit-block\" *ngFor=\"let untouched of battleResultStatistics.untouchedDefenderUnits\">\n          <ion-thumbnail class=\"unit-image\"><img src=\"assets/defender/{{ untouched.unit }}.png\"/></ion-thumbnail>\n          ({{untouched.hp}}) <ion-note>(untouched)</ion-note>\n        </div>\n        <h4 *ngIf=\"battleResultStatistics.defendersKilled.length > 0\">Destroyed</h4>\n        <div *ngFor=\"let killed of battleResultStatistics.defendersKilled\">\n          <ion-thumbnail class=\"unit-image\"><img src=\"assets/defender/{{ killed.unit }}.png\"/></ion-thumbnail>\n          ({{killed.newHp}}) <ion-text color=\"danger\">(-{{killed.preservedHp || killed.hp}})</ion-text>\n        </div>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<br>\n<br>\n\n<span *ngIf=\"multi\" class=\"table-title\">Attack moves breakdown</span>\n<ion-note *ngIf=\"multi && showingOptimalResult\">Note: Showing the order of attack moves that achieves most optimal results.</ion-note>\n<table>\n  <thead>\n    <th scope=\"\">Unit</th>\n    <th scope=\"\">Original HP</th>\n    <th scope=\"\">New HP (Damage)</th>\n    <th scope=\"\">Status</th>\n  </thead>\n  <tbody>\n    <ng-container *ngFor=\"let br of battleResults; let i = index;\">\n      <tr *ngIf=\"multi\">\n        <td colspan=\"4\" class=\"move-order-text\">{{i+1}}{{getOrderSuperscript(i)}} move</td>\n      </tr>\n      <tr>\n        <td>\n          {{br.attacker.unit}} (Offense)\n          <ion-thumbnail class=\"unit-image\"><img src=\"assets/attacker/{{ br.attacker.unit }}.png\"/></ion-thumbnail>\n        </td>\n        <td>\n          <ion-text>{{ br.attacker.origHp }}</ion-text>\n        </td>\n        <td>\n          <ion-text>{{ br.attacker.newHp }} <ion-note color=\"danger\">{{br.defender.defenseDamage > 0 ? '(-'+br.defender.defenseDamage+')' : ''}}</ion-note></ion-text>\n        </td>\n        <td>\n          <ion-text *ngIf=\"br.attacker.newHp > 0\" color=\"success\">Survived</ion-text>\n          <ion-text *ngIf=\"br.attacker.newHp === 0\" color=\"danger\">Destroyed</ion-text>  \n        </td>\n      </tr>\n      <tr>\n        <td>\n          {{br.defender.unit}} (Defense)\n          <ion-thumbnail class=\"unit-image\"><img src=\"assets/defender/{{ br.defender.unit }}.png\"/></ion-thumbnail>\n        </td>\n        <td>\n          <ion-text>{{ br.defender.origHp }}</ion-text>\n        </td>\n        <td>\n          <ion-text>{{ br.defender.newHp }} <ion-note color=\"danger\">{{br.attacker.attackDamage > 0 ? '(-'+br.attacker.attackDamage+')' : ''}}</ion-note></ion-text>\n          <ng-container *ngIf=\"br.defender.splashedNewHp\">\n            <br>\n            <ion-text>{{ br.defender.splashedNewHp }} (on splash damage)</ion-text>\n          </ng-container>\n        </td>\n        <td>\n          <ion-text *ngIf=\"br.defender.newHp > 0\" color=\"success\">Survived</ion-text>\n          <ion-text *ngIf=\"br.defender.newHp === 0\" color=\"danger\">Destroyed</ion-text>  \n        </td>\n      </tr>\n    </ng-container>\n\n  </tbody>\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/unit-form/unit-form.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/unit-form/unit-form.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item-group [formGroup]=\"form\">\n  <ion-item>\n    <ion-label>\n      Unit\n    </ion-label>\n    <ion-img class=\"unit-image\" *ngIf=\"selectedUnit\" src=\"/assets/{{unitFormType}}/{{selectedUnit}}.png\"></ion-img>\n    <ion-select formControlName=\"unit\" interface=\"action-sheet\" [interfaceOptions]=\"{header: 'Select Unit', cssClass: unitFormType + '-unit-option'}\">\n      <ion-select-option *ngFor=\"let unitOption of unitOptions\" [value]=\"unitOption\">\n        {{ unitOption }}\n      </ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item *ngIf=\"hasCarrySkill\">\n    <ion-label>\n      Carried Unit\n    </ion-label>\n    <ion-img class=\"unit-image\" *ngIf=\"selectedCarriedUnit\" src=\"/assets/{{unitFormType}}/{{selectedCarriedUnit}}.png\"></ion-img>\n    <ion-select formControlName=\"carriedUnit\" interface=\"action-sheet\" [interfaceOptions]=\"{header: 'Select Unit', cssClass: unitFormType + '-carried-unit-option'}\">\n      <ion-select-option *ngFor=\"let carriedUnitOption of carriedUnitOptions\" [value]=\"carriedUnitOption\">\n        {{ carriedUnitOption }}\n      </ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item *ngIf=\"hasVeterance\">\n    <ion-label>Is veteran?</ion-label>\n    <ion-checkbox slot=\"end\" formControlName=\"isVeteran\"></ion-checkbox>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>HP <ion-note *ngIf=\"maxHp\" inputmode=\"numeric\">(Max: {{ maxHp }})</ion-note></ion-label>\n    <ion-icon slot=\"end\" class=\"input-hp-arrow\" name=\"chevron-back-outline\" (click)=\"decreaseHp()\"></ion-icon>\n    <ion-input slot=\"end\"  class=\"input-hp\" type=\"text\" formControlName=\"hp\" (ionFocus)=\"selectText($event)\"\n      (contextmenu)=\"$event.preventDefault()\" inputmode=\"numeric\" pattern=\"^([0-9])+$\" #hpInputComponent></ion-input>\n    <ion-icon slot=\"end\" class=\"input-hp-arrow\" name=\"chevron-forward-outline\" (click)=\"increaseHp()\"></ion-icon>\n  </ion-item>\n\n  <ion-item *ngIf=\"multi\">\n    <ion-label>Spawn count</ion-label>\n    <ion-icon slot=\"end\" class=\"input-count-arrow\" name=\"chevron-back-outline\" (click)=\"decreaseSpawnCount()\"></ion-icon>\n    <ion-input slot=\"end\"  class=\"input-count\" type=\"text\" formControlName=\"spawnCount\" (ionFocus)=\"selectText($event)\"\n      (contextmenu)=\"$event.preventDefault()\" inputmode=\"numeric\" pattern=\"^([0-9])+$\" #countInputComponent></ion-input>\n    <ion-icon slot=\"end\" class=\"input-count-arrow\" name=\"chevron-forward-outline\" (click)=\"increaseSpawnCount()\"></ion-icon>\n  </ion-item>\n\n  <ion-item *ngIf=\"isLongRangeUnit\">\n    <ion-label>Free from retaliation?</ion-label>\n    <ion-checkbox slot=\"end\" formControlName=\"freeFromRetaliation\"></ion-checkbox>\n  </ion-item>\n\n  <ion-radio-group *ngIf=\"isDefenderForm\" formControlName=\"withDefenseBonus\" [allowEmptySelection]=\"true\">\n    <ion-item>\n      <ion-label>1.5 &times; Def bonus <ion-note>(City/Forest/Mountain/Ocean)</ion-note></ion-label>\n      <ion-radio slot=\"end\" value=\"withoutWall\"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>4 &times; Def bonus <ion-note>(City Wall)</ion-note></ion-label>\n      <ion-radio slot=\"end\" value=\"withWall\"></ion-radio>\n    </ion-item>\n  </ion-radio-group>\n\n</ion-item-group>");

/***/ }),

/***/ "./node_modules/worker-plugin/dist/loader.js?{\"name\":\"0\"}!./src/app/modules/battle-calculator/battle/battle.worker.ts":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/worker-plugin/dist/loader.js?{"name":"0"}!./src/app/modules/battle-calculator/battle/battle.worker.ts ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0.worker.js"

/***/ }),

/***/ "./src/app/data/unit-list.const.ts":
/*!*****************************************!*\
  !*** ./src/app/data/unit-list.const.ts ***!
  \*****************************************/
/*! exports provided: attackerUnits, defenderUnits, landUnits, carryUnits, longRangeUnits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attackerUnits", function() { return attackerUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defenderUnits", function() { return defenderUnits; });
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
    'Nature Bunny'
];
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
        hp: 15,
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
    }
};


/***/ }),

/***/ "./src/app/models/unit-data.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/unit-data.model.ts ***!
  \*******************************************/
/*! exports provided: UnitFormType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitFormType", function() { return UnitFormType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var UnitFormType;
(function (UnitFormType) {
    UnitFormType["ATTACKER"] = "attacker";
    UnitFormType["DEFENDER"] = "defender";
})(UnitFormType || (UnitFormType = {}));


/***/ }),

/***/ "./src/app/modules/battle-calculator/battle-calculator.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/battle-calculator/battle-calculator.module.ts ***!
  \***********************************************************************/
/*! exports provided: BattleCalculatorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattleCalculatorPageModule", function() { return BattleCalculatorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _battle_calculator_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./battle-calculator.page */ "./src/app/modules/battle-calculator/battle-calculator.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _one_on_one_one_one_one_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./one-on-one/one-one-one.component */ "./src/app/modules/battle-calculator/one-on-one/one-one-one.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _battle_battle_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./battle/battle.component */ "./src/app/modules/battle-calculator/battle/battle.component.ts");










var BattleCalculatorPageModule = /** @class */ (function () {
    function BattleCalculatorPageModule() {
    }
    BattleCalculatorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _battle_calculator_page__WEBPACK_IMPORTED_MODULE_5__["BattleCalculatorPage"]
                    }
                ]),
            ],
            declarations: [_battle_calculator_page__WEBPACK_IMPORTED_MODULE_5__["BattleCalculatorPage"], _one_on_one_one_one_one_component__WEBPACK_IMPORTED_MODULE_7__["OneOnOneComponent"], _battle_battle_component__WEBPACK_IMPORTED_MODULE_9__["BattleComponent"]]
        })
    ], BattleCalculatorPageModule);
    return BattleCalculatorPageModule;
}());



/***/ }),

/***/ "./src/app/modules/battle-calculator/battle-calculator.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/battle-calculator/battle-calculator.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mode-toggle {\n  width: 180px;\n  margin: auto;\n}\n\n.fab-scroll-toggle {\n  margin-bottom: 60px;\n  margin-right: 5px;\n  opacity: 0.3;\n}\n\n@media (min-width: 768px) {\n  .fab-scroll-toggle {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91bWFuZGFyL3BvbHl0b3BpYS1jYWxjdWxhdG9yL3NyYy9hcHAvbW9kdWxlcy9iYXR0bGUtY2FsY3VsYXRvci9iYXR0bGUtY2FsY3VsYXRvci5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYmF0dGxlLWNhbGN1bGF0b3IvYmF0dGxlLWNhbGN1bGF0b3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDSTtJQUNJLGFBQUE7RUNBTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9iYXR0bGUtY2FsY3VsYXRvci9iYXR0bGUtY2FsY3VsYXRvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tb2RlLXRvZ2dsZSB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmZhYi1zY3JvbGwtdG9nZ2xlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIG9wYWNpdHk6IDAuMztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLmZhYi1zY3JvbGwtdG9nZ2xlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9ICAgIFxufSIsIi5tb2RlLXRvZ2dsZSB7XG4gIHdpZHRoOiAxODBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uZmFiLXNjcm9sbC10b2dnbGUge1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmZhYi1zY3JvbGwtdG9nZ2xlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/battle-calculator/battle-calculator.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/battle-calculator/battle-calculator.page.ts ***!
  \*********************************************************************/
/*! exports provided: BattleCalculatorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattleCalculatorPage", function() { return BattleCalculatorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");



var BattleCalculatorPage = /** @class */ (function () {
    function BattleCalculatorPage(cdr) {
        this.cdr = cdr;
        this.onTop = true;
        this.activeSlideIndex = 0;
        this.isContentScrollable = false;
        this.slideOpts = {
            allowTouchMove: false,
            autoHeight: true
        };
    }
    BattleCalculatorPage.prototype.ngOnInit = function () { };
    BattleCalculatorPage.prototype.ngAfterViewInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkIfScrollable()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BattleCalculatorPage.prototype.onOneOnOneChange = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkIfScrollable()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BattleCalculatorPage.prototype.checkIfScrollable = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var scrollableElement;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ionContent.getScrollElement()];
                    case 1:
                        scrollableElement = _a.sent();
                        this.isContentScrollable = scrollableElement.scrollHeight > scrollableElement.clientHeight;
                        this.cdr.detectChanges();
                        return [2 /*return*/];
                }
            });
        });
    };
    BattleCalculatorPage.prototype.toggleScroll = function () {
        if (this.onTop) {
            this.ionContent.scrollToBottom(100);
            this.onTop = false;
        }
        else {
            this.ionContent.scrollToTop(100);
            this.onTop = true;
        }
    };
    BattleCalculatorPage.prototype.onScroll = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var scrollableElement;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ionContent.getScrollElement()];
                    case 1:
                        scrollableElement = _a.sent();
                        if (scrollableElement.scrollTop > 0) {
                            this.onTop = false;
                        }
                        else {
                            this.onTop = true;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    BattleCalculatorPage.prototype.onSlideChange = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.ionSlides.getActiveIndex()];
                    case 1:
                        _a.activeSlideIndex = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BattleCalculatorPage.prototype.onSegmentChange = function (event) {
        this.ionSlides.slideTo(event.detail.value);
    };
    BattleCalculatorPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ionContent', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
    ], BattleCalculatorPage.prototype, "ionContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ionSlides', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], BattleCalculatorPage.prototype, "ionSlides", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ionSegment', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSegment"])
    ], BattleCalculatorPage.prototype, "ionSegment", void 0);
    BattleCalculatorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-battle-calculator',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./battle-calculator.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/battle-calculator/battle-calculator.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./battle-calculator.page.scss */ "./src/app/modules/battle-calculator/battle-calculator.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], BattleCalculatorPage);
    return BattleCalculatorPage;
}());



/***/ }),

/***/ "./src/app/modules/battle-calculator/battle/battle.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/battle-calculator/battle/battle.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\nform, .two-column-wrapper {\n  width: 100%;\n}\n\n.delete-icon, .add-icon {\n  display: block;\n  margin: auto;\n}\n\n.loading-message {\n  margin-top: 50px;\n}\n\n.loading-message ion-spinner {\n  width: 40px;\n  height: 40px;\n}\n\n.optimal-result-block {\n  text-align: right;\n  margin-top: 20px;\n}\n\n.optimal-result-block > * {\n  vertical-align: middle;\n  margin-left: 6px;\n  font-size: 15px;\n}\n\nion-list {\n  padding: 0;\n  margin-top: 20px;\n}\n\napp-battle-result {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: block;\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n\n@media (min-width: 768px) {\n  .two-column-wrapper {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: start;\n            align-items: flex-start;\n  }\n\n  ion-list {\n    -webkit-box-flex: 1;\n            flex: 1;\n  }\n  ion-list:first-child {\n    margin: 20px 5px 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91bWFuZGFyL3BvbHl0b3BpYS1jYWxjdWxhdG9yL3NyYy9hcHAvbW9kdWxlcy9iYXR0bGUtY2FsY3VsYXRvci9iYXR0bGUvYmF0dGxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2JhdHRsZS1jYWxjdWxhdG9yL2JhdHRsZS9iYXR0bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ1I7O0FER0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FERUk7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0FSOztBRElBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUE7RUFDSSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0RKOztBREtBO0VBQ0k7SUFDSSxvQkFBQTtJQUFBLGFBQUE7SUFDQSx3QkFBQTtZQUFBLHVCQUFBO0VDRk47O0VESUU7SUFDSSxtQkFBQTtZQUFBLE9BQUE7RUNETjtFREdNO0lBQ0kscUJBQUE7RUNEVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9iYXR0bGUtY2FsY3VsYXRvci9iYXR0bGUvYmF0dGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiAgXG5mb3JtLCAudHdvLWNvbHVtbi13cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmRlbGV0ZS1pY29uLCAuYWRkLWljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmxvYWRpbmctbWVzc2FnZSB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcblxuICAgIGlvbi1zcGlubmVyIHtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICB9XG59XG5cbi5vcHRpbWFsLXJlc3VsdC1ibG9jayB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcblxuICAgICYgPiAqIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbn1cblxuaW9uLWxpc3Qge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbiAgXG5hcHAtYmF0dGxlLXJlc3VsdCB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4gIFxuICBcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC50d28tY29sdW1uLXdyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB9XG4gICAgaW9uLWxpc3Qge1xuICAgICAgICBmbGV4OiAxO1xuXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDVweCAyMHB4O1xuICAgICAgICB9XG4gICAgfVxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmZvcm0sIC50d28tY29sdW1uLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRlbGV0ZS1pY29uLCAuYWRkLWljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubG9hZGluZy1tZXNzYWdlIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5sb2FkaW5nLW1lc3NhZ2UgaW9uLXNwaW5uZXIge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4ub3B0aW1hbC1yZXN1bHQtYmxvY2sge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5vcHRpbWFsLXJlc3VsdC1ibG9jayA+ICoge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuYXBwLWJhdHRsZS1yZXN1bHQge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC50d28tY29sdW1uLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIH1cblxuICBpb24tbGlzdCB7XG4gICAgZmxleDogMTtcbiAgfVxuICBpb24tbGlzdDpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luOiAyMHB4IDVweCAyMHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/battle-calculator/battle/battle.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/battle-calculator/battle/battle.component.ts ***!
  \**********************************************************************/
/*! exports provided: BattleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack__worker__0) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattleComponent", function() { return BattleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/unit-stats.const */ "./src/app/data/unit-stats.const.ts");
/* harmony import */ var _services_google_analytics_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/google-analytics.service */ "./src/app/services/google-analytics.service.ts");
/* harmony import */ var _validators_carried_unit_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../validators/carried-unit.validator */ "./src/app/validators/carried-unit.validator.ts");
/* harmony import */ var _validators_max_hp_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../validators/max-hp.validator */ "./src/app/validators/max-hp.validator.ts");
/* harmony import */ var _data_unit_list_const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/unit-list.const */ "./src/app/data/unit-list.const.ts");
/* harmony import */ var _utils_execute_battle_matches_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/execute-battle-matches.util */ "./src/app/utils/execute-battle-matches.util.ts");











var BattleComponent = /** @class */ (function () {
    function BattleComponent(fb, cdr, googleAnalytics) {
        var _this = this;
        this.fb = fb;
        this.cdr = cdr;
        this.googleAnalytics = googleAnalytics;
        this.attackerUnits = _data_unit_list_const__WEBPACK_IMPORTED_MODULE_9__["attackerUnits"];
        this.defenderUnits = _data_unit_list_const__WEBPACK_IMPORTED_MODULE_9__["defenderUnits"];
        this.landUnits = _data_unit_list_const__WEBPACK_IMPORTED_MODULE_9__["landUnits"];
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.battleForm = this.fb.group({
            attackers: fb.array([this.createAttackerForm()]),
            defenders: fb.array([this.createDefenderForm()]),
            getOptimalResult: true
        });
        this.battleForm.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.onDestroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
            _this.isExecutingBattleMatches = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.showBattleResults(); }))
            .subscribe(function (_a) {
            var battleResults = _a.battleResults, battleResultStatistics = _a.battleResultStatistics;
            _this.battleResults = battleResults;
            _this.battleResultStatistics = battleResultStatistics;
            _this.change.emit(battleResults);
            _this.isExecutingBattleMatches = false;
            _this.cdr.detectChanges();
        });
    }
    Object.defineProperty(BattleComponent.prototype, "attackerForms", {
        get: function () {
            return this.battleForm.get('attackers').controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BattleComponent.prototype, "defenderForms", {
        get: function () {
            return this.battleForm.get('defenders').controls;
        },
        enumerable: true,
        configurable: true
    });
    BattleComponent.prototype.createAttackerForm = function () {
        var attacker = this.attackerUnits[0];
        var attackerStat = _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_5__["unitStats"][attacker];
        var carriedUnit = this.landUnits[0];
        return this.fb.group({
            unit: attacker,
            carriedUnit: carriedUnit,
            hp: [attackerStat.hp, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
            isVeteran: false,
            freeFromRetaliation: false,
            spawnCount: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]
        }, { validators: [_validators_max_hp_validator__WEBPACK_IMPORTED_MODULE_8__["maxHpValidator"], _validators_carried_unit_validator__WEBPACK_IMPORTED_MODULE_7__["carriedUnitValidator"]] });
    };
    BattleComponent.prototype.createDefenderForm = function () {
        var defender = this.defenderUnits[0];
        var defenderStat = _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_5__["unitStats"][defender];
        var carriedUnit = this.landUnits[0];
        return this.fb.group({
            unit: defender,
            carriedUnit: carriedUnit,
            hp: [defenderStat.hp, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
            isVeteran: false,
            withDefenseBonus: false,
            withWallBonus: false,
            spawnCount: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]
        }, { validators: [_validators_max_hp_validator__WEBPACK_IMPORTED_MODULE_8__["maxHpValidator"], _validators_carried_unit_validator__WEBPACK_IMPORTED_MODULE_7__["carriedUnitValidator"]] });
    };
    BattleComponent.prototype.addOffenseUnit = function () {
        this.battleForm.get('attackers').push(this.createAttackerForm());
    };
    BattleComponent.prototype.addDefenseUnit = function () {
        this.battleForm.get('defenders').push(this.createDefenderForm());
    };
    BattleComponent.prototype.removeOffenseUnit = function (i) {
        this.battleForm.get('attackers').removeAt(i);
    };
    BattleComponent.prototype.removeDefenseUnit = function (i) {
        this.battleForm.get('defenders').removeAt(i);
    };
    BattleComponent.prototype.showBattleResults = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (subscriber) {
            if (!_this.battleForm.valid) {
                subscriber.next({});
                subscriber.complete();
                return;
            }
            var attackers = _this.getUnits('attackers');
            var defenders = _this.getUnits('defenders');
            _this.googleAnalytics.emitEvent('battle calculate', 'method', attackers.map(function (attacker) { return attacker.unit; }).join(', ') + " vs " + defenders.map(function (defender) { return defender.unit; }).join(', '), { attackers: attackers, defenders: defenders }, 1);
            var getOptimalResult = _this.battleForm.get('getOptimalResult').value;
            if (typeof Worker !== 'undefined') {
                // Create a new
                var battleMatchesWorker_1 = new Worker(__webpack__worker__0, {  });
                battleMatchesWorker_1.onmessage = function (_a) {
                    var data = _a.data;
                    subscriber.next(data);
                    subscriber.complete();
                    battleMatchesWorker_1.terminate();
                };
                battleMatchesWorker_1.postMessage({ attackers: attackers, defenders: defenders, getOptimalResult: getOptimalResult });
                return {
                    unsubscribe: function () {
                        subscriber.complete();
                        battleMatchesWorker_1.terminate();
                    }
                };
            }
            else {
                // Web Workers are not supported in this environment.
                // You should add a fallback so that your program still executes correctly.
                subscriber.next(Object(_utils_execute_battle_matches_util__WEBPACK_IMPORTED_MODULE_10__["executeBattleMatches"])(attackers, defenders, getOptimalResult));
                subscriber.complete();
            }
        });
    };
    BattleComponent.prototype.getUnits = function (unitType) {
        var units = [];
        this.battleForm.get(unitType).value.forEach(function (unit) {
            for (var i = 0; i < unit.spawnCount; i++) {
                units.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, unit));
            }
        });
        return units;
    };
    BattleComponent.prototype.ngOnInit = function () { };
    BattleComponent.prototype.ngOnDestroy = function () {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    };
    BattleComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _services_google_analytics_service__WEBPACK_IMPORTED_MODULE_6__["GoogleAnalyticsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BattleComponent.prototype, "change", void 0);
    BattleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-battle',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./battle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/battle-calculator/battle/battle.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./battle.component.scss */ "./src/app/modules/battle-calculator/battle/battle.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _services_google_analytics_service__WEBPACK_IMPORTED_MODULE_6__["GoogleAnalyticsService"]])
    ], BattleComponent);
    return BattleComponent;
}());


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/worker-plugin/dist/loader.js?{"name":"0"}!./battle.worker */ "./node_modules/worker-plugin/dist/loader.js?{\"name\":\"0\"}!./src/app/modules/battle-calculator/battle/battle.worker.ts")))

/***/ }),

/***/ "./src/app/modules/battle-calculator/one-on-one/one-on-one.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/battle-calculator/one-on-one/one-on-one.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\nion-list {\n  padding: 0;\n  margin-top: 20px;\n}\n\napp-battle-result {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: block;\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n\nform {\n  width: 100%;\n}\n\n@media (min-width: 768px) {\n  form {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: start;\n            align-items: flex-start;\n  }\n\n  ion-list {\n    -webkit-box-flex: 1;\n            flex: 1;\n  }\n  ion-list:first-child {\n    margin: 20px 5px 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91bWFuZGFyL3BvbHl0b3BpYS1jYWxjdWxhdG9yL3NyYy9hcHAvbW9kdWxlcy9iYXR0bGUtY2FsY3VsYXRvci9vbmUtb24tb25lL29uZS1vbi1vbmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYmF0dGxlLWNhbGN1bGF0b3Ivb25lLW9uLW9uZS9vbmUtb24tb25lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREdBO0VBQ0UsV0FBQTtBQ0FGOztBREdBO0VBQ0U7SUFDRSxvQkFBQTtJQUFBLGFBQUE7SUFDQSx3QkFBQTtZQUFBLHVCQUFBO0VDQUY7O0VERUE7SUFDRSxtQkFBQTtZQUFBLE9BQUE7RUNDRjtFRENFO0lBQ0UscUJBQUE7RUNDSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9iYXR0bGUtY2FsY3VsYXRvci9vbmUtb24tb25lL29uZS1vbi1vbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5pb24tbGlzdCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmFwcC1iYXR0bGUtcmVzdWx0IHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cblxuZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuICBpb24tbGlzdCB7XG4gICAgZmxleDogMTtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luOiAyMHB4IDVweCAyMHB4O1xuICAgIH1cbiAgfVxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuYXBwLWJhdHRsZS1yZXN1bHQge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuXG4gIGlvbi1saXN0IHtcbiAgICBmbGV4OiAxO1xuICB9XG4gIGlvbi1saXN0OmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW46IDIwcHggNXB4IDIwcHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/battle-calculator/one-on-one/one-one-one.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/battle-calculator/one-on-one/one-one-one.component.ts ***!
  \*******************************************************************************/
/*! exports provided: OneOnOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneOnOneComponent", function() { return OneOnOneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _data_unit_list_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/unit-list.const */ "./src/app/data/unit-list.const.ts");
/* harmony import */ var _validators_max_hp_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../validators/max-hp.validator */ "./src/app/validators/max-hp.validator.ts");
/* harmony import */ var _utils_calculate_damage_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/calculate-damage.util */ "./src/app/utils/calculate-damage.util.ts");
/* harmony import */ var _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/unit-stats.const */ "./src/app/data/unit-stats.const.ts");
/* harmony import */ var _validators_carried_unit_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../validators/carried-unit.validator */ "./src/app/validators/carried-unit.validator.ts");
/* harmony import */ var _services_google_analytics_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/google-analytics.service */ "./src/app/services/google-analytics.service.ts");











var OneOnOneComponent = /** @class */ (function () {
    function OneOnOneComponent(fb, googleAnalytics) {
        var _this = this;
        this.googleAnalytics = googleAnalytics;
        this.attackerUnits = _data_unit_list_const__WEBPACK_IMPORTED_MODULE_5__["attackerUnits"];
        this.defenderUnits = _data_unit_list_const__WEBPACK_IMPORTED_MODULE_5__["defenderUnits"];
        this.landUnits = _data_unit_list_const__WEBPACK_IMPORTED_MODULE_5__["landUnits"];
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        var attacker = this.attackerUnits[0];
        var attackerStat = _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_8__["unitStats"][attacker];
        var defender = this.defenderUnits[0];
        var defenderStat = _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_8__["unitStats"][defender];
        var carriedUnit = this.landUnits[0];
        this.oneOnOneForm = fb.group({
            attacker: fb.group({
                unit: attacker,
                carriedUnit: carriedUnit,
                hp: [attackerStat.hp, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
                isVeteran: false,
                freeFromRetaliation: false,
            }, { validators: [_validators_max_hp_validator__WEBPACK_IMPORTED_MODULE_6__["maxHpValidator"], _validators_carried_unit_validator__WEBPACK_IMPORTED_MODULE_9__["carriedUnitValidator"]] }),
            defender: fb.group({
                unit: defender,
                carriedUnit: carriedUnit,
                hp: [defenderStat.hp, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
                isVeteran: false,
                withDefenseBonus: false,
                withWallBonus: false
            }, { validators: [_validators_max_hp_validator__WEBPACK_IMPORTED_MODULE_6__["maxHpValidator"], _validators_carried_unit_validator__WEBPACK_IMPORTED_MODULE_9__["carriedUnitValidator"]] })
        });
        this.oneOnOneForm.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.onDestroy$))
            .subscribe(function () {
            _this.showBattleResult();
        });
    }
    OneOnOneComponent.prototype.ngOnInit = function () { };
    OneOnOneComponent.prototype.ngOnDestroy = function () {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    };
    OneOnOneComponent.prototype.showBattleResult = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var attackerData, defenderData, _a, attackDamage, defenseDamage, defenderNewHp, attackerNewHp, splashedNewHp;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                if (!this.oneOnOneForm.valid) {
                    this.battleResult = null;
                    this.change.emit(this.battleResult);
                    return [2 /*return*/];
                }
                attackerData = this.oneOnOneForm.get('attacker').value;
                defenderData = this.oneOnOneForm.get('defender').value;
                _a = Object(_utils_calculate_damage_util__WEBPACK_IMPORTED_MODULE_7__["calculateDamage"])(attackerData, defenderData), attackDamage = _a.attackDamage, defenseDamage = _a.defenseDamage, defenderNewHp = _a.defenderNewHp, attackerNewHp = _a.attackerNewHp, splashedNewHp = _a.splashedNewHp;
                attackerData.origHp = attackerData.hp;
                attackerData.newHp = attackerNewHp;
                attackerData.attackDamage = Math.min(attackDamage, defenderData.hp - defenderNewHp);
                defenderData.origHp = defenderData.hp;
                defenderData.newHp = defenderNewHp;
                defenderData.splashedNewHp = splashedNewHp;
                defenderData.defenseDamage = Math.min(defenseDamage, attackerData.hp - attackerNewHp);
                ;
                this.battleResult = {
                    attacker: attackerData,
                    defender: defenderData
                };
                this.change.emit(this.battleResult);
                this.googleAnalytics.emitEvent('one-on-one calculate', 'method', attackerData.unit + " vs " + defenderData.unit, { attacker: attackerData, defender: defenderData }, 1);
                return [2 /*return*/];
            });
        });
    };
    OneOnOneComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_google_analytics_service__WEBPACK_IMPORTED_MODULE_10__["GoogleAnalyticsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OneOnOneComponent.prototype, "change", void 0);
    OneOnOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-one-on-one',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./one-on-one.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/battle-calculator/one-on-one/one-on-one.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./one-on-one.component.scss */ "./src/app/modules/battle-calculator/one-on-one/one-on-one.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_google_analytics_service__WEBPACK_IMPORTED_MODULE_10__["GoogleAnalyticsService"]])
    ], OneOnOneComponent);
    return OneOnOneComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/battle-result/battle-result.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/shared/battle-result/battle-result.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".unit-image {\n  width: 35px;\n  height: 35px;\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 20px;\n}\n\nion-card-content {\n  font-size: 15px;\n}\n\n.move-order-text {\n  text-align: center !important;\n  font-weight: 500;\n}\n\n.summary-unit-block {\n  display: inline-block;\n  padding: 10px;\n  font-size: 16px;\n}\n\n.summary-unit-block .unit-image {\n  margin-left: 0;\n}\n\n.table-title {\n  font-size: 16px;\n  margin-top: 10px;\n  display: block;\n}\n\n.swords-icon {\n  display: inline-block;\n  width: 25px;\n  height: 25px;\n  vertical-align: top;\n  margin: 0 15px;\n}\n\ntable {\n  border-spacing: 0;\n  width: 100%;\n  border-collapse: collapse;\n  border: 1px solid var(--ion-item-background);\n}\n\ntable th, table td {\n  border: 1px solid var(--ion-item-background);\n  text-align: left;\n  padding: 5px 15px;\n  font-size: 15px;\n  vertical-align: top;\n}\n\ntable th {\n  font-weight: normal;\n  background: var(--ion-item-background);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91bWFuZGFyL3BvbHl0b3BpYS1jYWxjdWxhdG9yL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvYmF0dGxlLXJlc3VsdC9iYXR0bGUtcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9iYXR0bGUtcmVzdWx0L2JhdHRsZS1yZXN1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENFO0VBQ0UsY0FBQTtBQ0NKOztBREdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSw0Q0FBQTtBQ0FGOztBREVFO0VBQ0UsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0U7RUFDRSxtQkFBQTtFQUNBLHNDQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9iYXR0bGUtcmVzdWx0L2JhdHRsZS1yZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudW5pdC1pbWFnZSB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5tb3ZlLW9yZGVyLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnN1bW1hcnktdW5pdC1ibG9jayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIC51bml0LWltYWdlIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuXG4udGFibGUtdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3dvcmRzLWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1hcmdpbjogMCAxNXB4O1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCk7XG5cbiAgdGgsIHRkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kKTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG5cbiAgdGgge1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCk7XG4gIH1cbn1cbiIsIi51bml0LWltYWdlIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLm1vdmUtb3JkZXItdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3VtbWFyeS11bml0LWJsb2NrIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uc3VtbWFyeS11bml0LWJsb2NrIC51bml0LWltYWdlIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi50YWJsZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zd29yZHMtaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbWFyZ2luOiAwIDE1cHg7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kKTtcbn1cbnRhYmxlIHRoLCB0YWJsZSB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQpO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxudGFibGUgdGgge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/shared/battle-result/battle-result.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/shared/battle-result/battle-result.component.ts ***!
  \*************************************************************************/
/*! exports provided: BattleResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattleResultComponent", function() { return BattleResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BattleResultComponent = /** @class */ (function () {
    function BattleResultComponent() {
    }
    BattleResultComponent.prototype.getAttacker = function (i) {
        return this.battleResults[i].attacker;
    };
    BattleResultComponent.prototype.getDefender = function (i) {
        return this.battleResults[i].defender;
    };
    // get attackerHpColor() {
    //     return this.assessColor(this.attacker.newHp, this.defender.newHp);
    // }
    // get defenderHpColor() {
    //     return this.assessColor(this.defender.newHp, this.attacker.newHp);
    // }
    // get splashedHpColor() {
    //     return this.assessColor(this.defender.splashedNewHp, this.attacker.newHp);
    // }
    BattleResultComponent.prototype.getAttackDamageColor = function (i) {
        return this.assessColor(this.getAttacker(i).attackDamage, this.getDefender(i).defenseDamage);
    };
    BattleResultComponent.prototype.getDefenseDamageColor = function (i) {
        return this.assessColor(this.getDefender(i).defenseDamage, this.getAttacker(i).attackDamage);
    };
    BattleResultComponent.prototype.assessColor = function (statA, statB) {
        if (statA > statB) {
            return 'success';
        }
        else if (statA < statB) {
            return 'danger';
        }
        else {
            return null;
        }
    };
    BattleResultComponent.prototype.getOrderSuperscript = function (i) {
        var orderNumber = i + 1;
        if (orderNumber % 10 === 1) {
            return "st";
        }
        else if (orderNumber % 10 === 2) {
            return "nd";
        }
        else if (orderNumber % 10 === 3) {
            return "rd";
        }
        else {
            return "th";
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], BattleResultComponent.prototype, "battleResults", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], BattleResultComponent.prototype, "battleResultStatistics", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], BattleResultComponent.prototype, "multi", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], BattleResultComponent.prototype, "showingOptimalResult", void 0);
    BattleResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-battle-result',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./battle-result.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/battle-result/battle-result.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./battle-result.component.scss */ "./src/app/modules/shared/battle-result/battle-result.component.scss")).default]
        })
    ], BattleResultComponent);
    return BattleResultComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/shared.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _unit_form_unit_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unit-form/unit-form.component */ "./src/app/modules/shared/unit-form/unit-form.component.ts");
/* harmony import */ var _battle_result_battle_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./battle-result/battle-result.component */ "./src/app/modules/shared/battle-result/battle-result.component.ts");







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_unit_form_unit_form_component__WEBPACK_IMPORTED_MODULE_5__["UnitFormComponent"], _battle_result_battle_result_component__WEBPACK_IMPORTED_MODULE_6__["BattleResultComponent"]],
            exports: [_unit_form_unit_form_component__WEBPACK_IMPORTED_MODULE_5__["UnitFormComponent"], _battle_result_battle_result_component__WEBPACK_IMPORTED_MODULE_6__["BattleResultComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/modules/shared/unit-form/unit-form.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/shared/unit-form/unit-form.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input-hp, .input-count {\n  text-align: right;\n  width: 30px;\n  display: block;\n  margin-left: 0px;\n  -webkit-box-flex: unset;\n          flex: unset;\n}\n\n.input-hp-arrow, .input-count-arrow {\n  cursor: pointer;\n}\n\n.unit-image {\n  width: 35px;\n  height: 35px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  margin-left: 10px;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button .action-sheet-button-inner:before,\n::ng-deep .defender-carried-unit-option .action-sheet-button .action-sheet-button-inner:before,\n::ng-deep .attacker-unit-option .action-sheet-button .action-sheet-button-inner:before,\n::ng-deep .attacker-carried-unit-option .action-sheet-button .action-sheet-button-inner:before {\n  display: block;\n  width: 40px;\n  height: 40px;\n  margin-right: 15px;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(2) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Warrior.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(3) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Rider.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(4) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Defender.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(5) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Swordsman.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(6) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Archer.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(7) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Catapult.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(8) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Knight.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(9) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Giant.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(10) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Boat.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(11) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Ship.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(12) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Battleship.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(13) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Mind Bender.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(14) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Amphibian.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(15) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Crab.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(16) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Tridention.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(17) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Polytaur.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(18) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Navalon.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(19) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Dragon Egg.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(20) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Baby Dragon.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(21) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Fire Dragon.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(22) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Mooni.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(23) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Ice Archer.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(24) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Battle Sled.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(25) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Ice Fortress.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(26) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Gaami.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(27) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Nature Bunny.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-carried-unit-option .action-sheet-button:nth-child(2) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Warrior.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-carried-unit-option .action-sheet-button:nth-child(3) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Rider.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-carried-unit-option .action-sheet-button:nth-child(4) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Defender.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-carried-unit-option .action-sheet-button:nth-child(5) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Swordsman.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-carried-unit-option .action-sheet-button:nth-child(6) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Archer.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-carried-unit-option .action-sheet-button:nth-child(7) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Catapult.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-carried-unit-option .action-sheet-button:nth-child(8) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Mind Bender.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-carried-unit-option .action-sheet-button:nth-child(9) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Knight.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-carried-unit-option .action-sheet-button:nth-child(10) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Giant.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-carried-unit-option .action-sheet-button:nth-child(11) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender/Nature Bunny.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(2) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Warrior.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(3) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Rider.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(4) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Defender.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(5) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Swordsman.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(6) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Archer.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(7) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Catapult.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(8) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Knight.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(9) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Giant.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(10) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Boat.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(11) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Ship.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(12) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Battleship.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(13) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Amphibian.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(14) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Crab.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(15) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Tridention.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(16) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Polytaur.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(17) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Navalon.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(18) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Baby Dragon.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(19) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Fire Dragon.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(20) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Ice Archer.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(21) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Battle Sled.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(22) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Ice Fortress.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(23) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Gaami.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-carried-unit-option .action-sheet-button:nth-child(2) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Warrior.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-carried-unit-option .action-sheet-button:nth-child(3) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Rider.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-carried-unit-option .action-sheet-button:nth-child(4) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Defender.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-carried-unit-option .action-sheet-button:nth-child(5) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Swordsman.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-carried-unit-option .action-sheet-button:nth-child(6) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Archer.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-carried-unit-option .action-sheet-button:nth-child(7) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Catapult.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-carried-unit-option .action-sheet-button:nth-child(8) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Mind Bender.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-carried-unit-option .action-sheet-button:nth-child(9) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Knight.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-carried-unit-option .action-sheet-button:nth-child(10) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Giant.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-carried-unit-option .action-sheet-button:nth-child(11) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker/Nature Bunny.png\");\n  background-size: 100% 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91bWFuZGFyL3BvbHl0b3BpYS1jYWxjdWxhdG9yL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvdW5pdC1mb3JtL3VuaXQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvdW5pdC1mb3JtL3VuaXQtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO1VBQUEsV0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFFRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0FOOztBRFNROzs7O0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNIWjs7QURZSTtFQUNJLFdBQUE7RUFDQSwrQ0FBQTtFQUNBLDBCQUFBO0FDVFI7O0FETUk7RUFDSSxXQUFBO0VBQ0EsNkNBQUE7RUFDQSwwQkFBQTtBQ0hSOztBREFJO0VBQ0ksV0FBQTtFQUNBLGdEQUFBO0VBQ0EsMEJBQUE7QUNHUjs7QUROSTtFQUNJLFdBQUE7RUFDQSxpREFBQTtFQUNBLDBCQUFBO0FDU1I7O0FEWkk7RUFDSSxXQUFBO0VBQ0EsOENBQUE7RUFDQSwwQkFBQTtBQ2VSOztBRGxCSTtFQUNJLFdBQUE7RUFDQSxnREFBQTtFQUNBLDBCQUFBO0FDcUJSOztBRHhCSTtFQUNJLFdBQUE7RUFDQSw4Q0FBQTtFQUNBLDBCQUFBO0FDMkJSOztBRDlCSTtFQUNJLFdBQUE7RUFDQSw2Q0FBQTtFQUNBLDBCQUFBO0FDaUNSOztBRHBDSTtFQUNJLFdBQUE7RUFDQSw0Q0FBQTtFQUNBLDBCQUFBO0FDdUNSOztBRDFDSTtFQUNJLFdBQUE7RUFDQSw0Q0FBQTtFQUNBLDBCQUFBO0FDNkNSOztBRGhESTtFQUNJLFdBQUE7RUFDQSxrREFBQTtFQUNBLDBCQUFBO0FDbURSOztBRHRESTtFQUNJLFdBQUE7RUFDQSxtREFBQTtFQUNBLDBCQUFBO0FDeURSOztBRDVESTtFQUNJLFdBQUE7RUFDQSxpREFBQTtFQUNBLDBCQUFBO0FDK0RSOztBRGxFSTtFQUNJLFdBQUE7RUFDQSw0Q0FBQTtFQUNBLDBCQUFBO0FDcUVSOztBRHhFSTtFQUNJLFdBQUE7RUFDQSxrREFBQTtFQUNBLDBCQUFBO0FDMkVSOztBRDlFSTtFQUNJLFdBQUE7RUFDQSxnREFBQTtFQUNBLDBCQUFBO0FDaUZSOztBRHBGSTtFQUNJLFdBQUE7RUFDQSwrQ0FBQTtFQUNBLDBCQUFBO0FDdUZSOztBRDFGSTtFQUNJLFdBQUE7RUFDQSxrREFBQTtFQUNBLDBCQUFBO0FDNkZSOztBRGhHSTtFQUNJLFdBQUE7RUFDQSxtREFBQTtFQUNBLDBCQUFBO0FDbUdSOztBRHRHSTtFQUNJLFdBQUE7RUFDQSxtREFBQTtFQUNBLDBCQUFBO0FDeUdSOztBRDVHSTtFQUNJLFdBQUE7RUFDQSw2Q0FBQTtFQUNBLDBCQUFBO0FDK0dSOztBRGxISTtFQUNJLFdBQUE7RUFDQSxrREFBQTtFQUNBLDBCQUFBO0FDcUhSOztBRHhISTtFQUNJLFdBQUE7RUFDQSxtREFBQTtFQUNBLDBCQUFBO0FDMkhSOztBRDlISTtFQUNJLFdBQUE7RUFDQSxvREFBQTtFQUNBLDBCQUFBO0FDaUlSOztBRHBJSTtFQUNJLFdBQUE7RUFDQSw2Q0FBQTtFQUNBLDBCQUFBO0FDdUlSOztBRDFJSTtFQUNJLFdBQUE7RUFDQSxvREFBQTtFQUNBLDBCQUFBO0FDNklSOztBRHJJSTtFQUNJLFdBQUE7RUFDQSwrQ0FBQTtFQUNBLDBCQUFBO0FDd0lSOztBRDNJSTtFQUNJLFdBQUE7RUFDQSw2Q0FBQTtFQUNBLDBCQUFBO0FDOElSOztBRGpKSTtFQUNJLFdBQUE7RUFDQSxnREFBQTtFQUNBLDBCQUFBO0FDb0pSOztBRHZKSTtFQUNJLFdBQUE7RUFDQSxpREFBQTtFQUNBLDBCQUFBO0FDMEpSOztBRDdKSTtFQUNJLFdBQUE7RUFDQSw4Q0FBQTtFQUNBLDBCQUFBO0FDZ0tSOztBRG5LSTtFQUNJLFdBQUE7RUFDQSxnREFBQTtFQUNBLDBCQUFBO0FDc0tSOztBRHpLSTtFQUNJLFdBQUE7RUFDQSxtREFBQTtFQUNBLDBCQUFBO0FDNEtSOztBRC9LSTtFQUNJLFdBQUE7RUFDQSw4Q0FBQTtFQUNBLDBCQUFBO0FDa0xSOztBRHJMSTtFQUNJLFdBQUE7RUFDQSw2Q0FBQTtFQUNBLDBCQUFBO0FDd0xSOztBRDNMSTtFQUNJLFdBQUE7RUFDQSxvREFBQTtFQUNBLDBCQUFBO0FDOExSOztBRHRMSTtFQUNJLFdBQUE7RUFDQSwrQ0FBQTtFQUNBLDBCQUFBO0FDeUxSOztBRDVMSTtFQUNJLFdBQUE7RUFDQSw2Q0FBQTtFQUNBLDBCQUFBO0FDK0xSOztBRGxNSTtFQUNJLFdBQUE7RUFDQSxnREFBQTtFQUNBLDBCQUFBO0FDcU1SOztBRHhNSTtFQUNJLFdBQUE7RUFDQSxpREFBQTtFQUNBLDBCQUFBO0FDMk1SOztBRDlNSTtFQUNJLFdBQUE7RUFDQSw4Q0FBQTtFQUNBLDBCQUFBO0FDaU5SOztBRHBOSTtFQUNJLFdBQUE7RUFDQSxnREFBQTtFQUNBLDBCQUFBO0FDdU5SOztBRDFOSTtFQUNJLFdBQUE7RUFDQSw4Q0FBQTtFQUNBLDBCQUFBO0FDNk5SOztBRGhPSTtFQUNJLFdBQUE7RUFDQSw2Q0FBQTtFQUNBLDBCQUFBO0FDbU9SOztBRHRPSTtFQUNJLFdBQUE7RUFDQSw0Q0FBQTtFQUNBLDBCQUFBO0FDeU9SOztBRDVPSTtFQUNJLFdBQUE7RUFDQSw0Q0FBQTtFQUNBLDBCQUFBO0FDK09SOztBRGxQSTtFQUNJLFdBQUE7RUFDQSxrREFBQTtFQUNBLDBCQUFBO0FDcVBSOztBRHhQSTtFQUNJLFdBQUE7RUFDQSxpREFBQTtFQUNBLDBCQUFBO0FDMlBSOztBRDlQSTtFQUNJLFdBQUE7RUFDQSw0Q0FBQTtFQUNBLDBCQUFBO0FDaVFSOztBRHBRSTtFQUNJLFdBQUE7RUFDQSxrREFBQTtFQUNBLDBCQUFBO0FDdVFSOztBRDFRSTtFQUNJLFdBQUE7RUFDQSxnREFBQTtFQUNBLDBCQUFBO0FDNlFSOztBRGhSSTtFQUNJLFdBQUE7RUFDQSwrQ0FBQTtFQUNBLDBCQUFBO0FDbVJSOztBRHRSSTtFQUNJLFdBQUE7RUFDQSxtREFBQTtFQUNBLDBCQUFBO0FDeVJSOztBRDVSSTtFQUNJLFdBQUE7RUFDQSxtREFBQTtFQUNBLDBCQUFBO0FDK1JSOztBRGxTSTtFQUNJLFdBQUE7RUFDQSxrREFBQTtFQUNBLDBCQUFBO0FDcVNSOztBRHhTSTtFQUNJLFdBQUE7RUFDQSxtREFBQTtFQUNBLDBCQUFBO0FDMlNSOztBRDlTSTtFQUNJLFdBQUE7RUFDQSxvREFBQTtFQUNBLDBCQUFBO0FDaVRSOztBRHBUSTtFQUNJLFdBQUE7RUFDQSw2Q0FBQTtFQUNBLDBCQUFBO0FDdVRSOztBRC9TSTtFQUNJLFdBQUE7RUFDQSwrQ0FBQTtFQUNBLDBCQUFBO0FDa1RSOztBRHJUSTtFQUNJLFdBQUE7RUFDQSw2Q0FBQTtFQUNBLDBCQUFBO0FDd1RSOztBRDNUSTtFQUNJLFdBQUE7RUFDQSxnREFBQTtFQUNBLDBCQUFBO0FDOFRSOztBRGpVSTtFQUNJLFdBQUE7RUFDQSxpREFBQTtFQUNBLDBCQUFBO0FDb1VSOztBRHZVSTtFQUNJLFdBQUE7RUFDQSw4Q0FBQTtFQUNBLDBCQUFBO0FDMFVSOztBRDdVSTtFQUNJLFdBQUE7RUFDQSxnREFBQTtFQUNBLDBCQUFBO0FDZ1ZSOztBRG5WSTtFQUNJLFdBQUE7RUFDQSxtREFBQTtFQUNBLDBCQUFBO0FDc1ZSOztBRHpWSTtFQUNJLFdBQUE7RUFDQSw4Q0FBQTtFQUNBLDBCQUFBO0FDNFZSOztBRC9WSTtFQUNJLFdBQUE7RUFDQSw2Q0FBQTtFQUNBLDBCQUFBO0FDa1dSOztBRHJXSTtFQUNJLFdBQUE7RUFDQSxvREFBQTtFQUNBLDBCQUFBO0FDd1dSIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvdW5pdC1mb3JtL3VuaXQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1ocCwgLmlucHV0LWNvdW50IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIGZsZXg6IHVuc2V0O1xufVxuXG4uaW5wdXQtaHAtYXJyb3csIC5pbnB1dC1jb3VudC1hcnJvdyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udW5pdC1pbWFnZSB7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbjoge1xuICAgICAgdG9wOiA1cHg7XG4gICAgICBib3R0b206IDVweDtcbiAgICAgIGxlZnQ6IDEwcHg7XG4gICAgfVxufVxuXG46Om5nLWRlZXAge1xuICAgIC5kZWZlbmRlci11bml0LW9wdGlvbixcbiAgICAuZGVmZW5kZXItY2FycmllZC11bml0LW9wdGlvbixcbiAgICAuYXR0YWNrZXItdW5pdC1vcHRpb24sXG4gICAgLmF0dGFja2VyLWNhcnJpZWQtdW5pdC1vcHRpb24ge1xuICAgICAgICAuYWN0aW9uLXNoZWV0LWJ1dHRvbiAgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7ICAgXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIE1ha2Ugc3VyZSBkZWZlbmRlclVuaXRzLCBhdHRhY2tlclVuaXRzLCBsYW5nVW5pdHMgbGlzdCBpcyBzeW5jIGluIGRhdGEvdW5pdC1saXN0LmNvbnN0LnRzIGluIHRlcm1zIG9mIG9yZGVyIGFuZCB1bml0c1xuJGRlZmVuZGVyVW5pdHM6ICdXYXJyaW9yJywgJ1JpZGVyJywgJ0RlZmVuZGVyJywgJ1N3b3Jkc21hbicsICdBcmNoZXInLCAnQ2F0YXB1bHQnLCAnS25pZ2h0JywgJ0dpYW50JywgJ0JvYXQnLCAnU2hpcCcsICdCYXR0bGVzaGlwJywgJ01pbmQgQmVuZGVyJywgJ0FtcGhpYmlhbicsICdDcmFiJywgJ1RyaWRlbnRpb24nLCAnUG9seXRhdXInLCAnTmF2YWxvbicsICdEcmFnb24gRWdnJywgJ0JhYnkgRHJhZ29uJywgJ0ZpcmUgRHJhZ29uJywgJ01vb25pJywgJ0ljZSBBcmNoZXInLCAnQmF0dGxlIFNsZWQnLCAnSWNlIEZvcnRyZXNzJywgJ0dhYW1pJywgJ05hdHVyZSBCdW5ueSc7XG4kaTogMjtcbkBlYWNoICR1bml0IGluICRkZWZlbmRlclVuaXRzIHtcbiAgICA6Om5nLWRlZXAgLmRlZmVuZGVyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgjeyRpfSkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXIvI3skdW5pdH0ucG5nXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcblxuICAgIH1cbiAgICAkaTogJGkgKyAxO1xufVxuJGNhcnJpZWRVbml0czogJ1dhcnJpb3InLCAnUmlkZXInLCAnRGVmZW5kZXInLCAnU3dvcmRzbWFuJywgJ0FyY2hlcicsICdDYXRhcHVsdCcsICdNaW5kIEJlbmRlcicsICdLbmlnaHQnLCAnR2lhbnQnLCAnTmF0dXJlIEJ1bm55JztcbiRpOiAyO1xuQGVhY2ggJHVuaXQgaW4gJGNhcnJpZWRVbml0cyB7XG4gICAgOjpuZy1kZWVwIC5kZWZlbmRlci1jYXJyaWVkLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgjeyRpfSkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXIvI3skdW5pdH0ucG5nXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICB9XG4gICAgJGk6ICRpICsgMTtcbn1cblxuJGF0dGFja2VyVW5pdHM6ICdXYXJyaW9yJywgJ1JpZGVyJywgJ0RlZmVuZGVyJywgJ1N3b3Jkc21hbicsICdBcmNoZXInLCAnQ2F0YXB1bHQnLCAnS25pZ2h0JywgJ0dpYW50JywgJ0JvYXQnLCAnU2hpcCcsICdCYXR0bGVzaGlwJywgJ0FtcGhpYmlhbicsICdDcmFiJywgJ1RyaWRlbnRpb24nLCAnUG9seXRhdXInLCAnTmF2YWxvbicsICdCYWJ5IERyYWdvbicsICdGaXJlIERyYWdvbicsICdJY2UgQXJjaGVyJywgJ0JhdHRsZSBTbGVkJywgJ0ljZSBGb3J0cmVzcycsICdHYWFtaSc7XG4kaTogMjtcbkBlYWNoICR1bml0IGluICRhdHRhY2tlclVuaXRzIHtcbiAgICA6Om5nLWRlZXAgLmF0dGFja2VyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgjeyRpfSkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYXR0YWNrZXIvI3skdW5pdH0ucG5nXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICB9XG4gICAgJGk6ICRpICsgMTtcbn1cblxuJGNhcnJpZWRVbml0czogJ1dhcnJpb3InLCAnUmlkZXInLCAnRGVmZW5kZXInLCAnU3dvcmRzbWFuJywgJ0FyY2hlcicsICdDYXRhcHVsdCcsICdNaW5kIEJlbmRlcicsICdLbmlnaHQnLCAnR2lhbnQnLCAnTmF0dXJlIEJ1bm55JztcbiRpOiAyO1xuQGVhY2ggJHVuaXQgaW4gJGNhcnJpZWRVbml0cyB7XG4gICAgOjpuZy1kZWVwIC5hdHRhY2tlci1jYXJyaWVkLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgjeyRpfSkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYXR0YWNrZXIvI3skdW5pdH0ucG5nXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICB9XG4gICAgJGk6ICRpICsgMTtcbn1cbiIsIi5pbnB1dC1ocCwgLmlucHV0LWNvdW50IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdpZHRoOiAzMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgZmxleDogdW5zZXQ7XG59XG5cbi5pbnB1dC1ocC1hcnJvdywgLmlucHV0LWNvdW50LWFycm93IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udW5pdC1pbWFnZSB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUsXG46Om5nLWRlZXAgLmRlZmVuZGVyLWNhcnJpZWQtdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b24gLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlLFxuOjpuZy1kZWVwIC5hdHRhY2tlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUsXG46Om5nLWRlZXAgLmF0dGFja2VyLWNhcnJpZWQtdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b24gLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMikgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9kZWZlbmRlci9XYXJyaW9yLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuZGVmZW5kZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDMpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXIvUmlkZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoNCkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9kZWZlbmRlci9EZWZlbmRlci5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmRlZmVuZGVyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCg1KSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2RlZmVuZGVyL1N3b3Jkc21hbi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmRlZmVuZGVyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCg2KSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2RlZmVuZGVyL0FyY2hlci5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmRlZmVuZGVyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCg3KSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2RlZmVuZGVyL0NhdGFwdWx0LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuZGVmZW5kZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDgpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXIvS25pZ2h0LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuZGVmZW5kZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDkpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXIvR2lhbnQucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMTApIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXIvQm9hdC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmRlZmVuZGVyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgxMSkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9kZWZlbmRlci9TaGlwLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuZGVmZW5kZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDEyKSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2RlZmVuZGVyL0JhdHRsZXNoaXAucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMTMpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXIvTWluZCBCZW5kZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMTQpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXIvQW1waGliaWFuLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuZGVmZW5kZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDE1KSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2RlZmVuZGVyL0NyYWIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMTYpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXIvVHJpZGVudGlvbi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmRlZmVuZGVyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgxNykgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9kZWZlbmRlci9Qb2x5dGF1ci5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmRlZmVuZGVyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgxOCkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9kZWZlbmRlci9OYXZhbG9uLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuZGVmZW5kZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDE5KSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2RlZmVuZGVyL0RyYWdvbiBFZ2cucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMjApIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXIvQmFieSBEcmFnb24ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMjEpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXIvRmlyZSBEcmFnb24ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMjIpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXIvTW9vbmkucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMjMpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXIvSWNlIEFyY2hlci5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmRlZmVuZGVyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgyNCkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9kZWZlbmRlci9CYXR0bGUgU2xlZC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmRlZmVuZGVyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgyNSkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9kZWZlbmRlci9JY2UgRm9ydHJlc3MucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMjYpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXIvR2FhbWkucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMjcpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXIvTmF0dXJlIEJ1bm55LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuZGVmZW5kZXItY2FycmllZC11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMikgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9kZWZlbmRlci9XYXJyaW9yLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuZGVmZW5kZXItY2FycmllZC11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMykgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9kZWZlbmRlci9SaWRlci5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmRlZmVuZGVyLWNhcnJpZWQtdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDQpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXIvRGVmZW5kZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci1jYXJyaWVkLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCg1KSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2RlZmVuZGVyL1N3b3Jkc21hbi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmRlZmVuZGVyLWNhcnJpZWQtdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDYpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXIvQXJjaGVyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuZGVmZW5kZXItY2FycmllZC11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoNykgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9kZWZlbmRlci9DYXRhcHVsdC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmRlZmVuZGVyLWNhcnJpZWQtdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDgpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXIvTWluZCBCZW5kZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci1jYXJyaWVkLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCg5KSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2RlZmVuZGVyL0tuaWdodC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmRlZmVuZGVyLWNhcnJpZWQtdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDEwKSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2RlZmVuZGVyL0dpYW50LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuZGVmZW5kZXItY2FycmllZC11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMTEpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXIvTmF0dXJlIEJ1bm55LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuYXR0YWNrZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDIpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYXR0YWNrZXIvV2Fycmlvci5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmF0dGFja2VyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgzKSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2F0dGFja2VyL1JpZGVyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuYXR0YWNrZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDQpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYXR0YWNrZXIvRGVmZW5kZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5hdHRhY2tlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoNSkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlci9Td29yZHNtYW4ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5hdHRhY2tlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoNikgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlci9BcmNoZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5hdHRhY2tlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoNykgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlci9DYXRhcHVsdC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmF0dGFja2VyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCg4KSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2F0dGFja2VyL0tuaWdodC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmF0dGFja2VyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCg5KSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2F0dGFja2VyL0dpYW50LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuYXR0YWNrZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDEwKSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2F0dGFja2VyL0JvYXQucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5hdHRhY2tlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMTEpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYXR0YWNrZXIvU2hpcC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmF0dGFja2VyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgxMikgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlci9CYXR0bGVzaGlwLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuYXR0YWNrZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDEzKSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2F0dGFja2VyL0FtcGhpYmlhbi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmF0dGFja2VyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgxNCkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlci9DcmFiLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuYXR0YWNrZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDE1KSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2F0dGFja2VyL1RyaWRlbnRpb24ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5hdHRhY2tlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMTYpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYXR0YWNrZXIvUG9seXRhdXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5hdHRhY2tlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMTcpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYXR0YWNrZXIvTmF2YWxvbi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmF0dGFja2VyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgxOCkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlci9CYWJ5IERyYWdvbi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmF0dGFja2VyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgxOSkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlci9GaXJlIERyYWdvbi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmF0dGFja2VyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgyMCkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlci9JY2UgQXJjaGVyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuYXR0YWNrZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDIxKSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2F0dGFja2VyL0JhdHRsZSBTbGVkLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuYXR0YWNrZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDIyKSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2F0dGFja2VyL0ljZSBGb3J0cmVzcy5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmF0dGFja2VyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgyMykgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlci9HYWFtaS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmF0dGFja2VyLWNhcnJpZWQtdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDIpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYXR0YWNrZXIvV2Fycmlvci5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmF0dGFja2VyLWNhcnJpZWQtdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDMpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYXR0YWNrZXIvUmlkZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5hdHRhY2tlci1jYXJyaWVkLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCg0KSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2F0dGFja2VyL0RlZmVuZGVyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuYXR0YWNrZXItY2FycmllZC11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoNSkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlci9Td29yZHNtYW4ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5hdHRhY2tlci1jYXJyaWVkLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCg2KSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2F0dGFja2VyL0FyY2hlci5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmF0dGFja2VyLWNhcnJpZWQtdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDcpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYXR0YWNrZXIvQ2F0YXB1bHQucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5hdHRhY2tlci1jYXJyaWVkLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCg4KSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2F0dGFja2VyL01pbmQgQmVuZGVyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuYXR0YWNrZXItY2FycmllZC11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoOSkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlci9LbmlnaHQucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5hdHRhY2tlci1jYXJyaWVkLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgxMCkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlci9HaWFudC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmF0dGFja2VyLWNhcnJpZWQtdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDExKSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2F0dGFja2VyL05hdHVyZSBCdW5ueS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/shared/unit-form/unit-form.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/shared/unit-form/unit-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: UnitFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitFormComponent", function() { return UnitFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_models_unit_data_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/unit-data.model */ "./src/app/models/unit-data.model.ts");
/* harmony import */ var src_app_utils_calculate_max_hp_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/utils/calculate-max-hp.util */ "./src/app/utils/calculate-max-hp.util.ts");
/* harmony import */ var _data_unit_list_const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/unit-list.const */ "./src/app/data/unit-list.const.ts");
/* harmony import */ var _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/unit-stats.const */ "./src/app/data/unit-stats.const.ts");










var UnitFormComponent = /** @class */ (function () {
    function UnitFormComponent(controlContainer) {
        this.controlContainer = controlContainer;
        this.carriedUnitOptions = _data_unit_list_const__WEBPACK_IMPORTED_MODULE_8__["landUnits"];
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    UnitFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isAttackerFormType = this.unitFormType === src_app_models_unit_data_model__WEBPACK_IMPORTED_MODULE_6__["UnitFormType"].ATTACKER;
        this.unitOptions = isAttackerFormType ? _data_unit_list_const__WEBPACK_IMPORTED_MODULE_8__["attackerUnits"] : _data_unit_list_const__WEBPACK_IMPORTED_MODULE_8__["defenderUnits"];
        this.form = this.controlContainer.control;
        this.setMaxHp();
        var hpInput = this.form.get('hp');
        this.form.get('isVeteran').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.onDestroy$))
            .subscribe(function () {
            _this.setMaxHp();
            if (hpInput.pristine || !hpInput.valid) {
                _this.form.get('hp').reset(_this.maxHp);
            }
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.form.get('unit').valueChanges, this.form.get('carriedUnit').valueChanges)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.onDestroy$))
            .subscribe(function () {
            _this.setMaxHp();
            hpInput.reset(_this.maxHp);
        });
    };
    UnitFormComponent.prototype.ngOnDestroy = function () {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    };
    Object.defineProperty(UnitFormComponent.prototype, "selectedUnit", {
        get: function () {
            return this.form.get('unit').value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UnitFormComponent.prototype, "selectedCarriedUnit", {
        get: function () {
            return this.form.get('carriedUnit').value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UnitFormComponent.prototype, "hasVeterance", {
        get: function () {
            if (this.hasCarrySkill) {
                // if unit carries another unit, check the carried unit veterance
                var carriedUnit = this.form.get('carriedUnit').value;
                return _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_9__["unitStats"][carriedUnit].veteranHp;
            }
            return _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_9__["unitStats"][this.selectedUnit].veteranHp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UnitFormComponent.prototype, "hasCarrySkill", {
        get: function () {
            return _data_unit_list_const__WEBPACK_IMPORTED_MODULE_8__["carryUnits"].includes(this.selectedUnit);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UnitFormComponent.prototype, "isLongRangeUnit", {
        get: function () {
            return _data_unit_list_const__WEBPACK_IMPORTED_MODULE_8__["longRangeUnits"].includes(this.selectedUnit);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UnitFormComponent.prototype, "isDefenderForm", {
        get: function () {
            return this.unitFormType === src_app_models_unit_data_model__WEBPACK_IMPORTED_MODULE_6__["UnitFormType"].DEFENDER;
        },
        enumerable: true,
        configurable: true
    });
    UnitFormComponent.prototype.setMaxHp = function () {
        this.maxHp = Object(src_app_utils_calculate_max_hp_util__WEBPACK_IMPORTED_MODULE_7__["calculateMaxHp"])(this.form.getRawValue());
    };
    UnitFormComponent.prototype.decreaseHp = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var hpInput, curValue;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hpInput = this.form.get('hp');
                        curValue = hpInput.value || 0;
                        if (!(curValue > 0)) return [3 /*break*/, 2];
                        hpInput.setValue(curValue - 1);
                        return [4 /*yield*/, this.hpInputComponent.getInputElement()];
                    case 1:
                        (_a.sent()).focus();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    UnitFormComponent.prototype.increaseHp = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var hpInput, curValue;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hpInput = this.form.get('hp');
                        curValue = hpInput.value || 0;
                        hpInput.setValue(curValue + 1);
                        return [4 /*yield*/, this.hpInputComponent.getInputElement()];
                    case 1:
                        (_a.sent()).focus();
                        return [2 /*return*/];
                }
            });
        });
    };
    UnitFormComponent.prototype.decreaseSpawnCount = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var countInput, curValue;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        countInput = this.form.get('spawnCount');
                        curValue = countInput.value || 0;
                        if (!(curValue > 0)) return [3 /*break*/, 2];
                        countInput.setValue(curValue - 1);
                        return [4 /*yield*/, this.countInputComponent.getInputElement()];
                    case 1:
                        (_a.sent()).focus();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    UnitFormComponent.prototype.increaseSpawnCount = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var countInput, curValue;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        countInput = this.form.get('spawnCount');
                        curValue = countInput.value || 0;
                        countInput.setValue(curValue + 1);
                        return [4 /*yield*/, this.countInputComponent.getInputElement()];
                    case 1:
                        (_a.sent()).focus();
                        return [2 /*return*/];
                }
            });
        });
    };
    UnitFormComponent.prototype.selectText = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var input;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, event.target.getInputElement()];
                    case 1:
                        input = _a.sent();
                        input.select();
                        return [2 /*return*/];
                }
            });
        });
    };
    UnitFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UnitFormComponent.prototype, "unitFormType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], UnitFormComponent.prototype, "multi", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hpInputComponent', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"])
    ], UnitFormComponent.prototype, "hpInputComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('countInputComponent', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"])
    ], UnitFormComponent.prototype, "countInputComponent", void 0);
    UnitFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-unit-form',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./unit-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/unit-form/unit-form.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./unit-form.component.scss */ "./src/app/modules/shared/unit-form/unit-form.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]])
    ], UnitFormComponent);
    return UnitFormComponent;
}());



/***/ }),

/***/ "./src/app/services/google-analytics.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/google-analytics.service.ts ***!
  \******************************************************/
/*! exports provided: GoogleAnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAnalyticsService", function() { return GoogleAnalyticsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GoogleAnalyticsService = /** @class */ (function () {
    function GoogleAnalyticsService() {
    }
    GoogleAnalyticsService.prototype.emitEvent = function (eventName, eventCategory, eventLabel, eventParams, eventValue) {
        if (eventLabel === void 0) { eventLabel = null; }
        if (eventValue === void 0) { eventValue = null; }
        gtag('event', eventName, {
            event_category: eventCategory,
            event_label: eventLabel,
            event_params: eventParams,
            event_value: eventValue
        });
    };
    GoogleAnalyticsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], GoogleAnalyticsService);
    return GoogleAnalyticsService;
}());



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



function calculateDamage(attacker, defender) {
    var attackerStat = _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_1__["unitStats"][attacker.unit];
    var defenderStat = _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_1__["unitStats"][defender.unit];
    var attackerMaxHp = Object(_calculate_max_hp_util__WEBPACK_IMPORTED_MODULE_2__["calculateMaxHp"])(attacker);
    var defenderMaxHp = Object(_calculate_max_hp_util__WEBPACK_IMPORTED_MODULE_2__["calculateMaxHp"])(defender);
    var attackForce = attackerStat.attack * (attacker.hp / attackerMaxHp);
    var defenseForce = defenderStat.defense * (defender.hp / defenderMaxHp);
    if (defender.withDefenseBonus) {
        var defenseBonus = defender.withDefenseBonus === 'withWall' ? defenderStat.wallBonus : defenderStat.defenseBonus;
        if (defenseBonus) {
            defenseForce *= defenseBonus;
        }
    }
    var totalForce = attackForce + defenseForce;
    var accelerator = 4.5;
    var attackDamage = Math.round((attackForce / totalForce) * attackerStat.attack * accelerator);
    var defenseDamage = Math.round((defenseForce / totalForce) * defenderStat.defense * accelerator);
    var defenderNewHp = Math.max(defender.hp - attackDamage, 0);
    var splashedNewHp = null;
    if (attacker.unit === 'Fire Dragon') {
        splashedNewHp = Math.max(defender.hp - Math.floor(attackDamage / 2), 0);
    }
    var attackerNewHp = attacker.hp;
    var noRetalaiationUnits = ['Mooni', 'Ice Archer'];
    var freezingUnits = ['Ice Archer'];
    var noRetaliation = attacker.freeFromRetaliation || noRetalaiationUnits.includes(defender.unit) || freezingUnits.includes(attacker.unit);
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
    matches.sort(function (matchA, matchB) {
        var a = matchA[3];
        var survivalScoreA = (a.attackerSurvivors.length + a.unusedAttackerUnits.length + a.defendersKilled.length) - (a.defenderSurvivors.length + a.attackersKilled.length + a.untouchedDefenderUnits.length);
        var damageScoreA = a.totalAttackDamage - a.totalDefenseDamage;
        var b = matchB[3];
        var survivalScoreB = (b.attackerSurvivors.length + b.unusedAttackerUnits.length + b.defendersKilled.length) - (b.defenderSurvivors.length + b.attackersKilled.length + b.untouchedDefenderUnits.length);
        var damageScoreB = b.totalAttackDamage - b.totalDefenseDamage;
        if (survivalScoreA !== survivalScoreB) {
            return survivalScoreB - survivalScoreA;
        }
        else {
            return damageScoreB - damageScoreA;
        }
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
        defender.preservedHp = defender.hp;
        // use newHp as current defender.hp on next attack
        defender.hp = battleResult.defender.newHp;
        battleResults.push(battleResult);
    });
    var untouchedDefenderUnits = defenders.slice(lastDefenderAttacked + 1);
    var lastBattleDefender = battleResults[battleResults.length - 1].defender;
    debugger;
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


/***/ }),

/***/ "./src/app/validators/carried-unit.validator.ts":
/*!******************************************************!*\
  !*** ./src/app/validators/carried-unit.validator.ts ***!
  \******************************************************/
/*! exports provided: carriedUnitValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carriedUnitValidator", function() { return carriedUnitValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data_unit_list_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/unit-list.const */ "./src/app/data/unit-list.const.ts");


function carriedUnitValidator(fg) {
    var unit = fg.get('unit').value;
    if (_data_unit_list_const__WEBPACK_IMPORTED_MODULE_1__["carryUnits"].includes(unit) && !fg.get('carriedUnit').value) {
        return { required: true, name: 'carriedUnit' };
    }
    return null;
}


/***/ }),

/***/ "./src/app/validators/max-hp.validator.ts":
/*!************************************************!*\
  !*** ./src/app/validators/max-hp.validator.ts ***!
  \************************************************/
/*! exports provided: maxHpValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxHpValidator", function() { return maxHpValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_calculate_max_hp_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/calculate-max-hp.util */ "./src/app/utils/calculate-max-hp.util.ts");


function maxHpValidator(fg) {
    var maxHp = Object(_utils_calculate_max_hp_util__WEBPACK_IMPORTED_MODULE_1__["calculateMaxHp"])(fg.value);
    var hp = fg.get('hp').value;
    if (hp <= maxHp) {
        return null;
    }
    var errors = { max: true };
    fg.get('hp').setErrors(errors);
    return errors;
}


/***/ })

}]);
//# sourceMappingURL=modules-battle-calculator-battle-calculator-module.js.map