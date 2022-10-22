(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-battle-calculator-battle-calculator-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/battle-calculator/battle-calculator.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/battle-calculator/battle-calculator.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title slot=\"start\">Polytopia<br>Calculator</ion-title>\r\n    <ion-segment slot=\"end\" (ionChange)=\"onSegmentChange($event)\" class=\"mode-toggle\" #ionSegment [value]=\"activeSlideIndex\">\r\n      <ion-segment-button value=\"0\">\r\n        Code\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"1\">\r\n        Simple\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"3\">\r\n        Battle\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content #ionContent [scrollEvents]=\"true\">\r\n\r\n  <ion-slides (ionSlideWillChange)=\"onSlideChange()\" #ionSlides [options]=\"slideOpts\">\r\n    <ion-slide>\r\n      <app-code (resultChange)=\"onCodeChange($event)\"></app-code>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <app-one-on-one (resultChange)=\"onOneOnOneChange($event)\"></app-one-on-one>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <app-battle #battle (resultChange)=\"onBattleChange($event)\"></app-battle>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" class=\"show-battle-result\">\r\n    <ion-fab-button (click)=\"scrollToBattleResult()\"  color=\"medium\">\r\n      <ion-thumbnail class=\"swords-icon\"><img src=\"assets/other/BigSwords.png\"/></ion-thumbnail>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n   -->\r\n<!-- \r\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"isContentScrollable\" class=\"fab-scroll-toggle\">\r\n<ion-fab-button (click)=\"toggleScroll()\" color=\"medium\">\r\n  <ion-icon name=\"arrow-down-outline\" *ngIf=\"onTop\"></ion-icon>\r\n  <ion-icon name=\"arrow-up-outline\" *ngIf=\"!onTop\"></ion-icon>\r\n</ion-fab-button>\r\n</ion-fab> -->\r\n</ion-content>\r\n<ion-footer>\r\n  <app-battle-result-mini tappable class=\"battle-result-sticky\" (touchstart)=\"!isExecutingBattleMatches && showBattleResultModal($event)\" (mousedown)=\"!isExecutingBattleMatches && showBattleResultModal($event)\"\r\n   [isInvalid]=\"resultData.isInvalid\" [isExecutingBattleMatches]=\"isExecutingBattleMatches\" [battleResultStatistics]=\"resultData.battleResultStatistics\"></app-battle-result-mini>\r\n   \r\n</ion-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/battle-calculator/battle/battle.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/battle-calculator/battle/battle.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"battleForm\">\r\n  <div class=\"two-column-wrapper\">\r\n\r\n    <ion-list>\r\n      <ion-item-divider>\r\n        <ion-title>Offense Units</ion-title>\r\n      </ion-item-divider>\r\n      <ng-container formArrayName=\"attackers\" *ngFor=\"let attacker of attackerForms; let i=index; let isLast = last; let isFirst = first\">\r\n        <app-unit-form [formGroupName]=\"i\" unitFormType=\"attacker\" [multi]=true></app-unit-form>\r\n        <ion-item *ngIf=\"attackerForms.length > 1 && !battleForm.get('getOptimalResult').value\">\r\n          <div class=\"half-width\" [class.disabled]=\"isFirst\" (click)=\"moveUp('attacker', i)\">\r\n            Move up\r\n            <ion-icon name=\"arrow-up-circle-outline\" size=\"medium\"></ion-icon>\r\n          </div>\r\n          <div class=\"half-width\"  [class.disabled]=\"isLast\" (click)=\"moveDown('attacker', i)\">\r\n            Move down\r\n            <ion-icon name=\"arrow-down-circle-outline\" size=\"medium\"></ion-icon>\r\n          </div>\r\n        </ion-item>\r\n        <ion-item color=\"danger\" *ngIf=\"attackerForms.length > 1\" (click)=\"removeOffenseUnit(i)\">\r\n          <ion-icon class=\"delete-icon\" name=\"trash-bin-outline\"></ion-icon>\r\n        </ion-item>\r\n        <ion-item-divider *ngIf=\"!isLast\">\r\n        </ion-item-divider>\r\n      </ng-container>\r\n\r\n      <ion-item color=\"success\" (click)=\"addOffenseUnit()\">\r\n        <ion-icon class=\"add-icon\" src=\"/assets/add-circle-outline.svg\"></ion-icon>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-list>\r\n      <ion-item-divider>\r\n        <ion-title>Defense Units</ion-title>\r\n      </ion-item-divider>\r\n      <ng-container formArrayName=\"defenders\" *ngFor=\"let defender of defenderForms; let i=index; let isLast = last; let isFirst = first\">\r\n        <app-unit-form [formGroupName]=\"i\" unitFormType=\"defender\" [multi]=\"true\"></app-unit-form>\r\n        <ion-item *ngIf=\"defenderForms.length > 1 && !battleForm.get('getOptimalResult').value\">\r\n          <div class=\"half-width\"  [class.disabled]=\"isFirst\" (click)=\"moveUp('defender', i)\">\r\n            Move up\r\n            <ion-icon name=\"arrow-up-circle-outline\" size=\"medium\"></ion-icon>\r\n          </div>\r\n          <div class=\"half-width\"  [class.disabled]=\"isLast\" (click)=\"moveDown('defender', i)\">\r\n            Move down\r\n            <ion-icon name=\"arrow-down-circle-outline\" size=\"medium\"></ion-icon>\r\n          </div>\r\n        </ion-item>\r\n        <ion-item color=\"danger\" *ngIf=\"defenderForms.length > 1\" (click)=\"removeDefenseUnit(i)\">\r\n          <ion-icon class=\"delete-icon\" src=\"/assets/trash-bin-outline.svg\"></ion-icon>\r\n        </ion-item>        \r\n        <ion-item-divider *ngIf=\"!isLast\">\r\n        </ion-item-divider>\r\n      </ng-container>\r\n      <ion-item color=\"success\" (click)=\"addDefenseUnit()\">\r\n        <ion-icon class=\"add-icon\" src=\"/assets/add-circle-outline.svg\"></ion-icon>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n  <div class=\"optimal-result-block\">\r\n    <ion-checkbox formControlName=\"getOptimalResult\"></ion-checkbox>\r\n    <ion-label (click)=\"toggleGetOptimalResult()\">Get most optimal result</ion-label><br>\r\n    <ion-note>Note: Uncheck this if battle execution takes too long due to high number of units, unchecking this will then execute the moves in the order units are entered.</ion-note>\r\n  </div>\r\n</form>\r\n<!-- <app-battle-result *ngIf=\"battleResults && !isExecutingBattleMatches\" [multi]=\"true\"\r\n  [battleResults]=\"battleResults\" [battleResultStatistics]=\"battleResultStatistics\" [showingOptimalResult]=\"battleForm.get('getOptimalResult').value\"></app-battle-result> -->\r\n<br>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/battle-calculator/br-modal/br-modal.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/battle-calculator/br-modal/br-modal.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <app-battle-result-mini *ngIf=\"battleResultStatistics\" [battleResultStatistics]=\"battleResultStatistics\"></app-battle-result-mini>\r\n</ion-header>\r\n<ion-content>\r\n  <app-battle-result *ngIf=\"battleResults\" [multi]=\"multi\"\r\n  [battleResults]=\"battleResults\" [battleResultStatistics]=\"battleResultStatistics\" [showingOptimalResult]=\"showingOptimalResult\"></app-battle-result>\r\n  <br>\r\n  <br>\r\n  <app-donate-button></app-donate-button>\r\n  <br>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/battle-calculator/code/code.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/battle-calculator/code/code.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <form [formGroup]=\"codeForm\">\r\n  <ion-list>\r\n    <ion-item-divider>\r\n      <ion-title>Type codes to calculate</ion-title>\r\n    </ion-item-divider>\r\n    <ion-item-group>\r\n      <ion-item>\r\n        <ion-label>Attacker: <br> Defender: </ion-label>\r\n        <ion-textarea formControlName=\"code\" ></ion-textarea>\r\n        <div class=\"textarea-highlighter\" #textareaHighlighter [innerHTML]=\"highlightedText\"></div>\r\n        <!-- placeholder=\"wa 10 b v nr &#10; de 15 p v d\" -->\r\n      </ion-item>\r\n    </ion-item-group>\r\n  </ion-list>\r\n  <ion-text *ngIf=\"errorMessage\" color=\"danger\" class=\"invalid-text\">\r\n    <ion-icon name=\"alert-circle-outline\"></ion-icon>\r\n    {{errorMessage}}\r\n  </ion-text>\r\n  <ion-text *ngIf=\"!errorMessage\" color=\"medium\" class=\"invalid-text\">\r\n    <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n    Hit enter to set defender unit.\r\n  </ion-text>\r\n  <div class=\"optimal-result-block\">\r\n    <ion-checkbox formControlName=\"getOptimalResult\"></ion-checkbox>\r\n    <ion-label (click)=\"toggleGetOptimalResult()\">Get most optimal result</ion-label><br>\r\n    <ion-note>Note: Uncheck this if battle execution takes too long due to high number of units, unchecking this will then execute the moves in the order units are entered.</ion-note>\r\n  </div>\r\n</form>\r\n\r\n<div class=\"two-column-wrapper\">\r\n  <ion-list>\r\n    <ion-item-divider>\r\n      <ion-title>Units</ion-title>\r\n    </ion-item-divider>\r\n    <ion-item *ngFor=\"let unitCodes of unitsByCode\"><mark>{{unitCodes[0]}}</mark> {{unitCodes[1]}}</ion-item>\r\n  </ion-list>\r\n  <ion-list>\r\n    <ion-item-divider>\r\n      <ion-title>Modifiers</ion-title>\r\n    </ion-item-divider>\r\n    <ion-item *ngFor=\"let modifierCodes of modifiersByCode\"><mark class=\"modifier\">{{modifierCodes[0]}}</mark> {{modifierCodes[1]}}</ion-item>\r\n  </ion-list>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/battle-calculator/one-on-one/one-on-one.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/battle-calculator/one-on-one/one-on-one.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"oneOnOneForm\">\r\n  <ion-list>\r\n    <ion-item-divider>\r\n      <ion-title>Offense Unit</ion-title>\r\n    </ion-item-divider>\r\n    <app-unit-form formGroupName=\"attacker\" unitFormType=\"attacker\"></app-unit-form>\r\n  </ion-list>\r\n  <ion-list>\r\n    <ion-item-divider>\r\n      <ion-title>Defense Unit</ion-title>\r\n    </ion-item-divider>\r\n    <app-unit-form formGroupName=\"defender\" unitFormType=\"defender\"></app-unit-form>\r\n  </ion-list>\r\n</form>\r\n<br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/battle-result-mini/battle-result-mini.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/battle-result-mini/battle-result-mini.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"drag-line\"></span>\r\n<ion-text>\r\n  <h2 class=\"fight-result-text\">\r\n    <ion-thumbnail class=\"swords-icon\"><img src=\"assets/other/BigSwords.png\"/></ion-thumbnail>\r\n    Fight Result\r\n    <ion-thumbnail class=\"swords-icon\"><img src=\"assets/other/BigSwords.png\"/></ion-thumbnail>\r\n  </h2>\r\n</ion-text> \r\n<ion-text *ngIf=\"isInvalid && !isExecutingBattleMatches\" color=\"danger\" class=\"invalid-text\">\r\n  <ion-icon name=\"alert-circle-outline\"></ion-icon>\r\n  Please fix invalid inputs.\r\n</ion-text>\r\n\r\n<div class=\"loading-message\" *ngIf=\"isExecutingBattleMatches\">\r\n  <ion-spinner color=\"success\" name=\"lines\"></ion-spinner><br>\r\n  <span>Executing battle matches</span>\r\n  <br>\r\n</div>\r\n<div *ngIf=\"!isExecutingBattleMatches && battleResultStatistics\" class=\"two-column\">\r\n  <div style=\"width: 50%\">\r\n    <div class=\"summary-unit-block\" *ngFor=\"let survivor of battleResultStatistics.attackerSurvivors\">\r\n      <ion-thumbnail class=\"unit-image\"><img src=\"assets/attacker_units/{{ survivor.unit }}.png\"/></ion-thumbnail>\r\n      ({{survivor.newHp}}) <ion-text color=\"danger\">{{(survivor.hp - survivor.newHp) ? '(-'+(survivor.hp - survivor.newHp)+')': ''}}</ion-text>\r\n    </div>\r\n    <div class=\"summary-unit-block\" *ngFor=\"let killed of battleResultStatistics.attackersKilled\">\r\n      <ion-thumbnail class=\"unit-image\"><img src=\"assets/attacker_units/{{ killed.unit }}.png\"/></ion-thumbnail>\r\n      ({{killed.newHp}}) <ion-text color=\"danger\">(-{{killed.origHp}})</ion-text>\r\n    </div>\r\n    <div class=\"summary-unit-block\" *ngFor=\"let unused of battleResultStatistics.unusedAttackerUnits\">\r\n      <ion-thumbnail class=\"unit-image\"><img src=\"assets/attacker_units/{{ unused.unit }}.png\"/></ion-thumbnail>\r\n      ({{unused.hp}}) <ion-note>(unused)</ion-note>\r\n    </div>\r\n  </div>\r\n  <div style=\"width: 50%\">\r\n    <div class=\"summary-unit-block\" *ngFor=\"let survivor of battleResultStatistics.defenderSurvivors\">\r\n      <ion-thumbnail class=\"unit-image\"><img src=\"assets/defender_units/{{ survivor.unit }}.png\"/></ion-thumbnail>\r\n      ({{survivor.newHp}}) <ion-text color=\"danger\">{{((survivor.preservedHp || survivor.origHp) - survivor.newHp) ? '(-'+((survivor.preservedHp || survivor.origHp) - survivor.newHp)+')': ''}}</ion-text>\r\n    </div>\r\n    <div class=\"summary-unit-block\" *ngFor=\"let killed of battleResultStatistics.defendersKilled\">\r\n      <ion-thumbnail class=\"unit-image\"><img src=\"assets/defender_units/{{ killed.unit }}.png\"/></ion-thumbnail>\r\n      ({{killed.newHp}}) <ion-text color=\"danger\">(-{{killed.preservedHp || killed.hp}})</ion-text>\r\n    </div>\r\n    <div class=\"summary-unit-block\" *ngFor=\"let untouched of battleResultStatistics.untouchedDefenderUnits\">\r\n      <ion-thumbnail class=\"unit-image\"><img src=\"assets/defender_units/{{ untouched.unit }}.png\"/></ion-thumbnail>\r\n      ({{untouched.hp}}) <ion-note>(untouched)</ion-note>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/battle-result/battle-result.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/battle-result/battle-result.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <span *ngIf=\"multi\" class=\"table-title\">Battle Summary</span> -->\r\n<!-- <ion-note *ngIf=\"multi\">Note: Follow the attack moves breakdown below to achieve same result.</ion-note> -->\r\n<!-- <table *ngIf=\"multi\">\r\n  <thead>\r\n    <th scope=\"\">Offense Units</th>\r\n    <th scope=\"\">Defense Units</th>\r\n  </thead>\r\n  <tbody>\r\n    <tr>\r\n      <td style=\"width: 50%\">\r\n        <h4>Survivors</h4>\r\n        <div class=\"summary-unit-block\" *ngFor=\"let survivor of battleResultStatistics.attackerSurvivors\">\r\n          <ion-thumbnail class=\"unit-image\"><img src=\"assets/attacker_units/{{ survivor.unit }}.png\"/></ion-thumbnail>\r\n          ({{survivor.newHp}}) <ion-text color=\"danger\">{{(survivor.hp - survivor.newHp) ? '(-'+(survivor.hp - survivor.newHp)+')': ''}}</ion-text>\r\n        </div>\r\n        <div class=\"summary-unit-block\" *ngFor=\"let unused of battleResultStatistics.unusedAttackerUnits\">\r\n          <ion-thumbnail class=\"unit-image\"><img src=\"assets/attacker_units/{{ unused.unit }}.png\"/></ion-thumbnail>\r\n          ({{unused.hp}}) <ion-note>(unused)</ion-note>\r\n        </div>\r\n        <ion-text *ngIf=\"battleResultStatistics.attackerSurvivors.length === 0 && battleResultStatistics.unusedAttackerUnits.length === 0\">\t&mdash;</ion-text>\r\n        <h4>Destroyed</h4>\r\n        <div *ngFor=\"let killed of battleResultStatistics.attackersKilled\">\r\n          <ion-thumbnail class=\"unit-image\"><img src=\"assets/attacker_units/{{ killed.unit }}.png\"/></ion-thumbnail>\r\n          ({{killed.newHp}}) <ion-text color=\"danger\">(-{{killed.origHp}})</ion-text>\r\n        </div>\r\n        <ion-text *ngIf=\"battleResultStatistics.attackersKilled.length === 0\">&mdash;</ion-text>\r\n      </td>\r\n      <td style=\"width: 50%\">\r\n        <h4>Survivors</h4>\r\n        <div class=\"summary-unit-block\" *ngFor=\"let survivor of battleResultStatistics.defenderSurvivors\">\r\n          <ion-thumbnail class=\"unit-image\"><img src=\"assets/defender_units/{{ survivor.unit }}.png\"/></ion-thumbnail>\r\n          ({{survivor.newHp}}) <ion-text color=\"danger\">{{((survivor.preservedHp || survivor.origHp) - survivor.newHp) ? '(-'+((survivor.preservedHp || survivor.origHp) - survivor.newHp)+')': ''}}</ion-text>\r\n        </div>\r\n        <div class=\"summary-unit-block\" *ngFor=\"let untouched of battleResultStatistics.untouchedDefenderUnits\">\r\n          <ion-thumbnail class=\"unit-image\"><img src=\"assets/defender_units/{{ untouched.unit }}.png\"/></ion-thumbnail>\r\n          ({{untouched.hp}}) <ion-note>(untouched)</ion-note>\r\n        </div>\r\n        <ion-text *ngIf=\"battleResultStatistics.defenderSurvivors.length === 0 && battleResultStatistics.untouchedDefenderUnits.length === 0\">&mdash;</ion-text>\r\n        <h4>Destroyed</h4>\r\n        <div *ngFor=\"let killed of battleResultStatistics.defendersKilled\">\r\n          <ion-thumbnail class=\"unit-image\"><img src=\"assets/defender_units/{{ killed.unit }}.png\"/></ion-thumbnail>\r\n          ({{killed.newHp}}) <ion-text color=\"danger\">(-{{killed.preservedHp || killed.hp}})</ion-text>\r\n        </div>\r\n        <ion-text *ngIf=\"battleResultStatistics.defendersKilled.length === 0\">&mdash;</ion-text>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n<br>\r\n<br> -->\r\n\r\n<span class=\"table-title\">Attack moves breakdown</span>\r\n<!-- <ion-note *ngIf=\"showingOptimalResult\">Note: Showing the order of attack moves that achieves most optimal results.</ion-note> -->\r\n<table>\r\n  <thead>\r\n    <th scope=\"\">Unit</th>\r\n    <th scope=\"\">Original HP</th>\r\n    <th scope=\"\">New HP</th>\r\n    <th scope=\"\">Status</th>\r\n  </thead>\r\n  <tbody>\r\n    <ng-container *ngFor=\"let br of battleResults; let i = index;\">\r\n      <tr>\r\n        <td colspan=\"4\" class=\"move-order-text\">{{i+1}}{{getOrderSuperscript(i)}} move</td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          {{br.attacker.unit}} <span>(Offense)</span>\r\n          <ion-thumbnail class=\"unit-image\"><img src=\"assets/attacker_units/{{ br.attacker.unit }}.png\"/></ion-thumbnail>\r\n        </td>\r\n        <td>\r\n          <ion-text>{{ br.attacker.origHp }} <ion-note color=\"danger\">{{br.defender.defenseDamage > 0 ? '(-'+br.defender.defenseDamage+')' : ''}}</ion-note></ion-text>\r\n        </td>\r\n        <td>\r\n          <ion-text>{{ br.attacker.newHp }}</ion-text>\r\n        </td>\r\n        <td>\r\n          <ion-text *ngIf=\"br.attacker.newHp > 0\" color=\"success\">Survived</ion-text>\r\n          <ion-text *ngIf=\"br.attacker.newHp === 0\" color=\"danger\">Destroyed</ion-text>  \r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          {{br.defender.unit}} (Defense)\r\n          <ion-thumbnail class=\"unit-image\"><img src=\"assets/defender_units/{{ br.defender.unit }}.png\"/></ion-thumbnail>\r\n        </td>\r\n        <td>\r\n          <ion-text>{{ br.defender.origHp }} <ion-note color=\"danger\">{{br.attacker.attackDamage > 0 ? '(-'+br.attacker.attackDamage+')' : ''}}</ion-note></ion-text>\r\n        </td>\r\n        <td>\r\n          <ion-text>{{ br.defender.newHp }}</ion-text>\r\n          <ng-container *ngIf=\"br.defender.splashedNewHp\">\r\n            <br>\r\n            <ion-text>{{ br.defender.splashedNewHp }} (on splash damage)</ion-text>\r\n          </ng-container>\r\n        </td>\r\n        <td>\r\n          <ion-text *ngIf=\"br.defender.newHp > 0\" color=\"success\">Survived</ion-text>\r\n          <ion-text *ngIf=\"br.defender.newHp === 0\" color=\"danger\">Destroyed</ion-text>  \r\n        </td>\r\n      </tr>\r\n    </ng-container>\r\n\r\n  </tbody>\r\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/donate-button/donate-button.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/donate-button/donate-button.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"currency-select\" >\r\n  <ion-label>Select currency:</ion-label>\r\n  <ion-select interface=\"action-sheet\" [interfaceOptions]=\"{header: 'Select Unit'}\" #select value=\"Q2Z5D48F4YMXL\">\r\n    <ion-select-option value=\"52CNVTXALEQXL\">AUD $</ion-select-option>\r\n    <ion-select-option value=\"P4Z2NJR2QRMQJ\">BRL R$</ion-select-option>\r\n    <ion-select-option value=\"YL3YTLC7QWREJ\">CAD $</ion-select-option>\r\n    <ion-select-option value=\"UJX3JEYNVPZ4W\">CHF Fr.</ion-select-option>\r\n    <ion-select-option value=\"TYGY99HRPWJ4A\">CZK Kč</ion-select-option>\r\n    <ion-select-option value=\"3YP34QNUFWA6Q\">DKK kr.</ion-select-option>\r\n    <ion-select-option value=\"KCCND26B7RZ2E\">EUR €</ion-select-option>\r\n    <ion-select-option value=\"WK6FFCMNAMENQ\">GBP £</ion-select-option>\r\n    <ion-select-option value=\"L69898APZD5HU\">HKD $</ion-select-option>\r\n    <ion-select-option value=\"UXGG6LV6UMTA8\">HUF Ft</ion-select-option>\r\n    <ion-select-option value=\"XR2YFSVCDUMSC\">ILS ₪</ion-select-option>\r\n    <ion-select-option value=\"Y2LW58MN7MYBY\">JPY ‎¥‎</ion-select-option>\r\n    <ion-select-option value=\"FMABDARCXQFCJ\">‎MXN $‎</ion-select-option>\r\n    <ion-select-option value=\"XDHWYJWRUPEC8\">NOK kr</ion-select-option>\r\n    <ion-select-option value=\"HJSHMTDBF5Z5A\">NZD $</ion-select-option>\r\n    <ion-select-option value=\"TBE58BFGVVVLN\">‎PHP ₱</ion-select-option>\r\n    <ion-select-option value=\"JBUWFSGNLEYVY\">PLN gr</ion-select-option>\r\n    <ion-select-option value=\"LAQXFNFMJ8U9S\">RUB ₽</ion-select-option>\r\n    <ion-select-option value=\"EDX9FZXEFQYGY\">SEK kr</ion-select-option>\r\n    <ion-select-option value=\"QR4M289JUZ4SU\">SGD $</ion-select-option>\r\n    <ion-select-option value=\"44CPPATC3T8HC\">THB ฿</ion-select-option>\r\n    <ion-select-option value=\"U5B3VTYBQKQM8\">TWD $</ion-select-option>\r\n    <ion-select-option value=\"Q2Z5D48F4YMXL\">USD $</ion-select-option>\r\n  </ion-select>\r\n</div>\r\n<form class=\"paypal-form\" ngNoForm action=\"https://www.paypal.com/donate\" method=\"post\" target=\"_top\">\r\n  <input type=\"hidden\" name=\"hosted_button_id\" [value]=\"select.value\" />\r\n  <input type=\"image\" src=\"https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif\" border=\"0\" name=\"submit\" title=\"PayPal - The safer, easier way to pay online!\" alt=\"Donate with PayPal button\" />\r\n  <img alt=\"\" border=\"0\" src=\"https://www.paypal.com/en_US/i/scr/pixel.gif\" width=\"1\" height=\"1\" />\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/unit-form/unit-form.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/unit-form/unit-form.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item-group [formGroup]=\"form\">\r\n  <ion-item tappable>\r\n    <ion-label>\r\n      Unit\r\n    </ion-label>\r\n    <ion-img class=\"unit-image\" *ngIf=\"selectedUnit\" src=\"/assets/{{unitFormType}}_units/{{selectedUnit}}.png\"></ion-img>\r\n    <ion-select tappable formControlName=\"unit\" interface=\"action-sheet\" [interfaceOptions]=\"{header: 'Select Unit', cssClass: unitFormType + '-unit-option'}\">\r\n      <ion-select-option *ngFor=\"let unitOption of unitOptions\" [value]=\"unitOption\">\r\n        {{ unitOption }}\r\n      </ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-item tappable *ngIf=\"hasCarrySkill\">\r\n    <ion-label>\r\n      Carried Unit\r\n    </ion-label>\r\n    <ion-img class=\"unit-image\" *ngIf=\"selectedCarriedUnit\" src=\"/assets/{{unitFormType}}_units/{{selectedCarriedUnit}}.png\"></ion-img>\r\n    <ion-select tappable formControlName=\"carriedUnit\" interface=\"action-sheet\" [interfaceOptions]=\"{header: 'Select Unit', cssClass: unitFormType + '-carried-unit-option'}\">\r\n      <ion-select-option *ngFor=\"let carriedUnitOption of carriedUnitOptions\" [value]=\"carriedUnitOption\">\r\n        {{ carriedUnitOption }}\r\n      </ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-item tappable *ngIf=\"hasVeterance\">\r\n    <ion-label>Is veteran?</ion-label>\r\n    <ion-checkbox tappable slot=\"end\" formControlName=\"isVeteran\"></ion-checkbox>\r\n  </ion-item>\r\n\r\n  <ion-item tappable>\r\n    <ion-label>HP <ion-note *ngIf=\"maxHp\" inputmode=\"numeric\">(Max: {{ maxHp }})</ion-note></ion-label>\r\n    <div slot=\"end\" class=\"range-arrows-container ion-activatable ripple-parent\">\r\n      <ion-icon tappable slot=\"end\" class=\"input-hp-arrow\" src=\"/assets/chevron-back-outline.svg\" (click)=\"decreaseHp()\"></ion-icon>\r\n      <ion-ripple-effect></ion-ripple-effect>\r\n    </div>\r\n    <ion-input slot=\"end\" tappable  class=\"input-hp\" type=\"text\" formControlName=\"hp\" (ionFocus)=\"selectText($event)\"\r\n      (contextmenu)=\"$event.preventDefault()\" inputmode=\"numeric\" enterkeyhint=\"done\" pattern=\"^([0-9])+$\" #hpInputComponent></ion-input>\r\n    <div slot=\"end\" class=\"range-arrows-container ion-activatable ripple-parent\">\r\n        <ion-icon tappable class=\"input-hp-arrow\" src=\"/assets/chevron-forward-outline.svg\" (click)=\"increaseHp()\"></ion-icon>\r\n      <ion-ripple-effect></ion-ripple-effect>\r\n    </div>\r\n  </ion-item>\r\n\r\n  <ion-item tappable *ngIf=\"multi\">\r\n    <ion-label>Spawn count</ion-label>\r\n    <div slot=\"end\" class=\"range-arrows-container ion-activatable ripple-parent\">\r\n      <ion-icon tappable slot=\"end\" class=\"input-count-arrow\" src=\"/assets/chevron-back-outline.svg\" (click)=\"decreaseSpawnCount()\"></ion-icon>\r\n      <ion-ripple-effect></ion-ripple-effect>\r\n    </div>\r\n    <ion-input tappable slot=\"end\"  class=\"input-count\" type=\"text\" formControlName=\"spawnCount\" (ionFocus)=\"selectText($event)\"\r\n      (contextmenu)=\"$event.preventDefault()\" inputmode=\"numeric\" enterkeyhint=\"done\" pattern=\"^([0-9])+$\" #countInputComponent></ion-input>\r\n    <div slot=\"end\" class=\"range-arrows-container ion-activatable ripple-parent\">\r\n        <ion-icon tappable slot=\"end\" class=\"input-count-arrow\" src=\"/assets/chevron-forward-outline.svg\" (click)=\"increaseSpawnCount()\"></ion-icon>\r\n      <ion-ripple-effect></ion-ripple-effect>\r\n    </div>\r\n  </ion-item>\r\n\r\n  <ion-item tappable *ngIf=\"isLongRangeUnit && !isDefenderForm\">\r\n    <ion-label>Free from retaliation?</ion-label>\r\n    <ion-checkbox tappable slot=\"end\" formControlName=\"freeFromRetaliation\"></ion-checkbox>\r\n  </ion-item>\r\n\r\n  <ion-item tappable *ngIf=\"!isDefenderForm\">\r\n    <ion-label>Is boosted?</ion-label>\r\n    <ion-checkbox tappable slot=\"end\" formControlName=\"isBoosted\"></ion-checkbox>\r\n  </ion-item>\r\n\r\n  <ion-item tappable *ngIf=\"isDefenderForm\">\r\n    <ion-label>Is poisoned?</ion-label>\r\n    <ion-checkbox tappable slot=\"end\" formControlName=\"isPoisoned\"></ion-checkbox>\r\n  </ion-item>\r\n\r\n  <ion-radio-group *ngIf=\"isDefenderForm && !isPoisoned\" formControlName=\"withDefenseBonus\" [allowEmptySelection]=\"true\">\r\n    <ion-item tappable *ngIf=\"hasDefenseBonus\">\r\n      <ion-label>1.5 &times; Def bonus <ion-note>(City/Forest/Mountain/Ocean)</ion-note></ion-label>\r\n      <ion-radio tappable slot=\"end\" value=\"withoutWall\"></ion-radio>\r\n    </ion-item>\r\n\r\n    <ion-item tappable *ngIf=\"hasWallDefenseBonus\">\r\n      <ion-label>4 &times; Def bonus <ion-note>(City Wall)</ion-note></ion-label>\r\n      <ion-radio tappable slot=\"end\" value=\"withWall\"></ion-radio>\r\n    </ion-item>\r\n  </ion-radio-group>\r\n\r\n\r\n\r\n</ion-item-group>");

/***/ }),

/***/ "./node_modules/worker-plugin/dist/loader.js?{\"name\":\"0\"}!./src/app/modules/battle-calculator/code/battle.worker.ts":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/worker-plugin/dist/loader.js?{"name":"0"}!./src/app/modules/battle-calculator/code/battle.worker.ts ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0.worker.js"

/***/ }),

/***/ "./node_modules/worker-plugin/dist/loader.js?{\"name\":\"1\"}!./src/app/modules/battle-calculator/battle/battle.worker.ts":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/worker-plugin/dist/loader.js?{"name":"1"}!./src/app/modules/battle-calculator/battle/battle.worker.ts ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1.worker.js"

/***/ }),

/***/ "./src/app/data/unit-codes.const.ts":
/*!******************************************!*\
  !*** ./src/app/data/unit-codes.const.ts ***!
  \******************************************/
/*! exports provided: unitCodes, carryUnitCodes, modifierCodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unitCodes", function() { return unitCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carryUnitCodes", function() { return carryUnitCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifierCodes", function() { return modifierCodes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var unitCodes = {
    wa: 'Warrior',
    ri: 'Rider',
    ar: 'Archer',
    de: 'Defender',
    kn: 'Knight',
    // ok: 'Old Knight',
    sw: 'Swordsman',
    ca: 'Catapult',
    gi: 'Giant',
    cr: 'Crab',
    tr: 'Tridention',
    po: 'Polytaur',
    na: 'Navalon',
    ga: 'Gaami',
    mb: 'Mind Bender',
    eg: 'Dragon Egg',
    bd: 'Baby Dragon',
    dr: 'Fire Dragon',
    mo: 'Mooni',
    sl: 'Battle Sled',
    if: 'Ice Fortress',
    ia: 'Ice Archer',
    sm: 'Shaman',
    he: 'Hexapod',
    ki: 'Kiton',
    // ko: 'Old Kiton',
    ph: 'Phychi',
    ex: 'Exida',
    ra: 'Raychi',
    do: 'Doomux',
    ce: 'Centipede',
    se: 'Segment',
    da: 'Dagger',
    cl: 'Cloak'
};
var carryUnitCodes = {
    bo: 'Boat',
    sh: 'Ship',
    bs: 'Battleship',
};
var modifierCodes = {
    p: 'Poisoned',
    b: 'Boosted',
    // x: 'Exploding',
    v: 'Veteran',
    d: '1.5x Def bonus ',
    w: '4x Def bonus (City Wall)',
};


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
/* harmony import */ var _br_modal_br_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./br-modal/br-modal.component */ "./src/app/modules/battle-calculator/br-modal/br-modal.component.ts");
/* harmony import */ var _code_code_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./code/code.component */ "./src/app/modules/battle-calculator/code/code.component.ts");












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
            entryComponents: [_br_modal_br_modal_component__WEBPACK_IMPORTED_MODULE_10__["BrModalComponent"]],
            declarations: [_battle_calculator_page__WEBPACK_IMPORTED_MODULE_5__["BattleCalculatorPage"], _one_on_one_one_one_one_component__WEBPACK_IMPORTED_MODULE_7__["OneOnOneComponent"], _battle_battle_component__WEBPACK_IMPORTED_MODULE_9__["BattleComponent"], _br_modal_br_modal_component__WEBPACK_IMPORTED_MODULE_10__["BrModalComponent"], _code_code_component__WEBPACK_IMPORTED_MODULE_11__["CodeComponent"]]
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
/* harmony default export */ __webpack_exports__["default"] = (".mode-toggle {\n  width: 260px;\n  margin: auto;\n}\n\nion-title {\n  color: #e47b0c;\n  font-size: 20px;\n  text-align: center;\n  padding-left: 16px;\n}\n\nion-title br {\n  display: none;\n}\n\n@media (max-width: 600px) {\n  ion-title {\n    font-size: 18px;\n    text-align: left;\n    padding-left: 16px;\n    line-height: 100%;\n    padding-top: 5px;\n  }\n  ion-title br {\n    display: block;\n  }\n}\n\n.show-battle-result {\n  margin-bottom: 20px;\n  margin-right: 5px;\n  opacity: 0.3;\n}\n\n.show-battle-result .swords-icon {\n  width: 30px;\n  height: 30px;\n}\n\nion-footer::before {\n  display: none;\n}\n\n.battle-result-sticky {\n  width: 100%;\n  box-shadow: 0px 0px 2px #bbbbbb;\n  border: 1px solid #eaeaea;\n  background-color: white;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n\n@media (prefers-color-scheme: dark) {\n  .battle-result-sticky {\n    border: 1px solid #292929;\n    background-color: #292929;\n    border-top-left-radius: 15px;\n    border-top-right-radius: 15px;\n    color: var(--ion-text-color);\n  }\n}\n\n@media (min-width: 768px) {\n  .fab-scroll-toggle {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9iYXR0bGUtY2FsY3VsYXRvci9EOlxcQ29kaW5nXFxQZXJzb25hbFxccHJvamVjdHNcXHBvbHl0b3BpYS1jYWxjdWxhdG9yL3NyY1xcYXBwXFxtb2R1bGVzXFxiYXR0bGUtY2FsY3VsYXRvclxcYmF0dGxlLWNhbGN1bGF0b3IucGFnZS5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2JhdHRsZS1jYWxjdWxhdG9yL2JhdHRsZS1jYWxjdWxhdG9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURDSTtFQUNJLGFBQUE7QUNDUjs7QURFSTtFQVRKO0lBVVEsZUFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VDQ047RURDTTtJQUNJLGNBQUE7RUNDVjtBQUNGOztBRFNBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNOSjs7QURRSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDTlI7O0FEV0E7RUFDSSxhQUFBO0FDUko7O0FEV0E7RUFDSSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ1JKOztBRFdBO0VBQ0k7SUFDSSx5QkFBQTtJQUNBLHlCQUFBO0lBQ0EsNEJBQUE7SUFDQSw2QkFBQTtJQUNBLDRCQUFBO0VDUk47QUFDRjs7QURXQTtFQUNJO0lBQ0ksYUFBQTtFQ1ROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2JhdHRsZS1jYWxjdWxhdG9yL2JhdHRsZS1jYWxjdWxhdG9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubW9kZS10b2dnbGUge1xyXG4gICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgY29sb3I6ICNlNDdiMGM7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICBiciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuXHJcbiAgICAgICAgYnIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIC5mYWItc2Nyb2xsLXRvZ2dsZSB7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbi8vICAgICBvcGFjaXR5OiAwLjM7XHJcbi8vIH1cclxuXHJcbi5zaG93LWJhdHRsZS1yZXN1bHQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gIFxyXG4gICAgLnN3b3Jkcy1pY29uIHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgXHJcbn1cclxuXHJcbmlvbi1mb290ZXI6OmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYmF0dGxlLXJlc3VsdC1zdGlja3kge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAjYmJiYmJiO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XHJcbiAgICAuYmF0dGxlLXJlc3VsdC1zdGlja3kge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyOTI5Mjk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmZhYi1zY3JvbGwtdG9nZ2xlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfSAgICBcclxufSIsIi5tb2RlLXRvZ2dsZSB7XG4gIHdpZHRoOiAyNjBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogI2U0N2IwYztcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cbmlvbi10aXRsZSBiciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgaW9uLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgfVxuICBpb24tdGl0bGUgYnIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbi5zaG93LWJhdHRsZS1yZXN1bHQge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgb3BhY2l0eTogMC4zO1xufVxuLnNob3ctYmF0dGxlLXJlc3VsdCAuc3dvcmRzLWljb24ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG5pb24tZm9vdGVyOjpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYmF0dGxlLXJlc3VsdC1zdGlja3kge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAycHggI2JiYmJiYjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xufVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIC5iYXR0bGUtcmVzdWx0LXN0aWNreSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzI5MjkyOTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5mYWItc2Nyb2xsLXRvZ2dsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */");

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
/* harmony import */ var _battle_battle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./battle/battle.component */ "./src/app/modules/battle-calculator/battle/battle.component.ts");
/* harmony import */ var _br_modal_br_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./br-modal/br-modal.component */ "./src/app/modules/battle-calculator/br-modal/br-modal.component.ts");





var BattleCalculatorPage = /** @class */ (function () {
    function BattleCalculatorPage(cdr, modalController, elRef) {
        this.cdr = cdr;
        this.modalController = modalController;
        this.elRef = elRef;
        // onTop = true;
        this.activeSlideIndex = 0;
        // isContentScrollable = false;
        this.slideOpts = {
            allowTouchMove: false,
            autoHeight: true
        };
    }
    BattleCalculatorPage.prototype.ngOnInit = function () { };
    BattleCalculatorPage.prototype.ngAfterViewInit = function () {
        // await this.checkIfScrollable();
    };
    BattleCalculatorPage.prototype.onOneOnOneChange = function (data) {
        this.oneOnOneData = data;
        // this.cdr.detectChanges();
        // await this.checkIfScrollable();
    };
    BattleCalculatorPage.prototype.onBattleChange = function (data) {
        this.battleData = data;
        // this.cdr.detectChanges();
        // await this.checkIfScrollable();
    };
    BattleCalculatorPage.prototype.onCodeChange = function (data) {
        this.codeData = data;
        // this.cdr.detectChanges();
        // await this.checkIfScrollable();
    };
    BattleCalculatorPage.prototype.scrollToBattleResult = function () {
        if (this.isOneOnOne) {
            this.ionContent.scrollToBottom(100);
        }
        else {
            var battleResultEl = this.elRef.nativeElement.querySelector('app-battle .optimal-result-block');
            battleResultEl && battleResultEl.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
    };
    Object.defineProperty(BattleCalculatorPage.prototype, "isExecutingBattleMatches", {
        get: function () {
            if (this.isOneOnOne) {
                return false;
            }
            else {
                return this.battleComponent.isExecutingBattleMatches;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BattleCalculatorPage.prototype, "isOneOnOne", {
        get: function () {
            return this.activeSlideIndex === 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BattleCalculatorPage.prototype, "isBattle", {
        get: function () {
            return this.activeSlideIndex === 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BattleCalculatorPage.prototype, "resultData", {
        get: function () {
            if (this.isOneOnOne) {
                return this.oneOnOneData || {};
            }
            else if (this.isBattle) {
                return this.battleData || {};
            }
            else {
                return this.codeData || {};
            }
        },
        enumerable: true,
        configurable: true
    });
    // async checkIfScrollable() {
    //   const scrollableElement = await this.ionContent.getScrollElement();
    //   this.isContentScrollable = scrollableElement.scrollHeight > scrollableElement.clientHeight;
    //   this.cdr.detectChanges();
    // }
    // toggleScroll() {
    //   if (this.onTop) {
    //     this.ionContent.scrollToBottom(100);
    //     this.onTop = false;
    //   } else {
    //     this.ionContent.scrollToTop(100);
    //     this.onTop = true;
    //   }
    // }
    // async onScroll() {
    //   const scrollableElement = await this.ionContent.getScrollElement();
    //   if (scrollableElement.scrollTop > 0) {
    //     this.onTop = false;
    //   } else {
    //     this.onTop = true;
    //   }
    // }
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
    // hasOneOnOneResult() {
    //   return this.oneOnOneData && this.oneOnOneData.battleResults;
    // }
    // hasBattleResult() {
    //   return this.battleData && this.battleData.battleResults;
    // }
    // showBattleResultButton() {
    //   if (this.activeSlideIndex === 0) {
    //     return this.hasOneOnOneResult();
    //   } else {
    //     return this.hasBattleResult();
    //   }
    // }
    BattleCalculatorPage.prototype.showBattleResultModal = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        event.preventDefault();
                        event.stopPropagation();
                        if (this.isShowingModalInProgress || this.resultData.isInvalid) {
                            return [2 /*return*/];
                        }
                        this.isShowingModalInProgress = true;
                        data = this.resultData;
                        if (!this.isOneOnOne) {
                            data.multi = true;
                        }
                        _a = this;
                        return [4 /*yield*/, this.modalController.create({
                                component: _br_modal_br_modal_component__WEBPACK_IMPORTED_MODULE_4__["BrModalComponent"],
                                cssClass: 'br-modal',
                                mode: 'ios',
                                componentProps: data,
                                swipeToClose: true,
                                showBackdrop: true,
                                backdropDismiss: true
                            })];
                    case 1:
                        _a.modal = _b.sent();
                        return [4 /*yield*/, this.modal.present()];
                    case 2:
                        _b.sent();
                        this.isShowingModalInProgress = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    BattleCalculatorPage.prototype.onSegmentChange = function (event) {
        this.ionSlides.slideTo(event.detail.value);
    };
    BattleCalculatorPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('battle', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _battle_battle_component__WEBPACK_IMPORTED_MODULE_3__["BattleComponent"])
    ], BattleCalculatorPage.prototype, "battleComponent", void 0);
    BattleCalculatorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-battle-calculator',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./battle-calculator.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/battle-calculator/battle-calculator.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./battle-calculator.page.scss */ "./src/app/modules/battle-calculator/battle-calculator.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
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
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\nform, .two-column-wrapper {\n  width: 100%;\n}\n\n.delete-icon, .add-icon {\n  display: block;\n  margin: auto;\n}\n\n.half-width {\n  width: 50%;\n  text-align: center;\n  padding: 10px;\n}\n\n.half-width.disabled {\n  opacity: 0.5;\n}\n\n.half-width ion-icon {\n  vertical-align: middle;\n  display: inline-block;\n}\n\n.optimal-result-block {\n  text-align: left;\n  margin-top: 20px;\n}\n\n.optimal-result-block > * {\n  vertical-align: middle;\n  margin-left: 6px;\n  font-size: 15px;\n  text-indent: 0;\n  display: inline-block;\n}\n\n.paypal-form {\n  display: block;\n}\n\nion-list {\n  padding: 0;\n  margin-top: 20px;\n}\n\napp-battle-result {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: block;\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n\nion-title {\n  color: var(--ion-text-color);\n}\n\n@media (min-width: 768px) {\n  .two-column-wrapper {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: start;\n            align-items: flex-start;\n  }\n\n  ion-list {\n    -webkit-box-flex: 1;\n            flex: 1;\n  }\n  ion-list:first-child {\n    margin: 20px 5px 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9iYXR0bGUtY2FsY3VsYXRvci9iYXR0bGUvRDpcXENvZGluZ1xcUGVyc29uYWxcXHByb2plY3RzXFxwb2x5dG9waWEtY2FsY3VsYXRvci9zcmNcXGFwcFxcbW9kdWxlc1xcYmF0dGxlLWNhbGN1bGF0b3JcXGJhdHRsZVxcYmF0dGxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2JhdHRsZS1jYWxjdWxhdG9yL2JhdHRsZS9iYXR0bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENJO0VBQ0ksWUFBQTtBQ0NSOztBREVJO0VBQ0ksc0JBQUE7RUFDQSxxQkFBQTtBQ0FSOztBRElBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0RKOztBREdJO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNEUjs7QURLQTtFQUNJLGNBQUE7QUNGSjs7QURLQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBREtBO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURNQTtFQUNJLDRCQUFBO0FDSEo7O0FEV0E7RUFLSTtJQUNJLG9CQUFBO0lBQUEsYUFBQTtJQUNBLHdCQUFBO1lBQUEsdUJBQUE7RUNaTjs7RURjRTtJQUNJLG1CQUFBO1lBQUEsT0FBQTtFQ1hOO0VEYU07SUFDSSxxQkFBQTtFQ1hWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2JhdHRsZS1jYWxjdWxhdG9yL2JhdHRsZS9iYXR0bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbiAgXHJcbmZvcm0sIC50d28tY29sdW1uLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5kZWxldGUtaWNvbiwgLmFkZC1pY29uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uaGFsZi13aWR0aCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgICBvcGFjaXR5OiAuNTtcclxuICAgIH1cclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5vcHRpbWFsLXJlc3VsdC1ibG9jayB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgICAmID4gKiB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB0ZXh0LWluZGVudDogMDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wYXlwYWwtZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuICBcclxuYXBwLWJhdHRsZS1yZXN1bHQge1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcclxufVxyXG5cclxuLy8gYmF0dGxlIHJlc3VsdCBpcyBzaG93biBhcyBtb2RhbCBpbiBzbWFsbCBzY3JlZW5zXHJcbi8vIGFwcC1iYXR0bGUtcmVzdWx0IHtcclxuLy8gICAgIGRpc3BsYXk6IG5vbmU7XHJcbi8vIH1cclxuICBcclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAvLyBhcHAtYmF0dGxlLXJlc3VsdCB7XHJcbiAgICAvLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLnR3by1jb2x1bW4td3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIH1cclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgICBmbGV4OiAxO1xyXG5cclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDVweCAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmZvcm0sIC50d28tY29sdW1uLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRlbGV0ZS1pY29uLCAuYWRkLWljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaGFsZi13aWR0aCB7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5oYWxmLXdpZHRoLmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuLmhhbGYtd2lkdGggaW9uLWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5vcHRpbWFsLXJlc3VsdC1ibG9jayB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ub3B0aW1hbC1yZXN1bHQtYmxvY2sgPiAqIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWluZGVudDogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucGF5cGFsLWZvcm0ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5hcHAtYmF0dGxlLXJlc3VsdCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnR3by1jb2x1bW4td3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuXG4gIGlvbi1saXN0IHtcbiAgICBmbGV4OiAxO1xuICB9XG4gIGlvbi1saXN0OmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW46IDIwcHggNXB4IDIwcHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/battle-calculator/battle/battle.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/battle-calculator/battle/battle.component.ts ***!
  \**********************************************************************/
/*! exports provided: BattleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack__worker__1) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattleComponent", function() { return BattleComponent; });
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
/* harmony import */ var _models_unit_data_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../models/unit-data.model */ "./src/app/models/unit-data.model.ts");












var BattleComponent = /** @class */ (function () {
    function BattleComponent(fb, cdr, googleAnalytics) {
        var _this = this;
        this.fb = fb;
        this.cdr = cdr;
        this.googleAnalytics = googleAnalytics;
        this.attackerUnits = _data_unit_list_const__WEBPACK_IMPORTED_MODULE_9__["attackerUnits"];
        this.defenderUnits = _data_unit_list_const__WEBPACK_IMPORTED_MODULE_9__["defenderUnits"];
        this.landUnits = _data_unit_list_const__WEBPACK_IMPORTED_MODULE_9__["landUnits"];
        this.resultChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.battleForm = this.fb.group({
            attackers: fb.array([this.createAttackerForm()]),
            defenders: fb.array([this.createDefenderForm()]),
            getOptimalResult: false
        });
        this.battleForm.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(this.battleForm.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.onDestroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
            _this.isExecutingBattleMatches = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.showBattleResults(); }))
            .subscribe(function (_a) {
            var _b = _a.battleResults, battleResults = _b === void 0 ? [] : _b, battleResultStatistics = _a.battleResultStatistics, isInvalid = _a.isInvalid;
            _this.battleResults = battleResults;
            _this.battleResultStatistics = battleResultStatistics;
            var showingOptimalResult = _this.battleForm.get('getOptimalResult').value;
            _this.resultChange.emit({ battleResults: battleResults, battleResultStatistics: battleResultStatistics, showingOptimalResult: showingOptimalResult, isInvalid: isInvalid });
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
            isBoosted: false,
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
            isPoisoned: false,
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
    BattleComponent.prototype.move = function (unitFormType, currentIndex, shift) {
        var formArrayName = unitFormType === _models_unit_data_model__WEBPACK_IMPORTED_MODULE_11__["UnitFormType"].ATTACKER ? 'attackers' : 'defenders';
        var formArray = this.battleForm.get(formArrayName);
        var newIndex = currentIndex + shift;
        if (newIndex === -1 || newIndex == formArray.length) {
            return;
        }
        var currentFormGroup = formArray.at(currentIndex);
        formArray.removeAt(currentIndex);
        formArray.insert(newIndex, currentFormGroup);
    };
    BattleComponent.prototype.moveUp = function (unitFormType, currentIndex) {
        this.move(unitFormType, currentIndex, -1);
    };
    BattleComponent.prototype.moveDown = function (unitFormType, currentIndex) {
        this.move(unitFormType, currentIndex, 1);
    };
    BattleComponent.prototype.toggleGetOptimalResult = function () {
        var currentValue = this.battleForm.get('getOptimalResult').value;
        this.battleForm.get('getOptimalResult').setValue(!currentValue);
    };
    BattleComponent.prototype.showBattleResults = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (subscriber) {
            if (!_this.battleForm.valid) {
                subscriber.next({ isInvalid: true });
                subscriber.complete();
                return;
            }
            var attackers = _this.getUnits('attackers');
            var defenders = _this.getUnits('defenders');
            _this.googleAnalytics.emitEvent('battle calculate', 'method', attackers.map(function (attacker) { return attacker.unit; }).join(', ') + " vs " + defenders.map(function (defender) { return defender.unit; }).join(', '), { attackers: attackers, defenders: defenders }, 1);
            var getOptimalResult = _this.battleForm.get('getOptimalResult').value;
            if (typeof Worker !== 'undefined') {
                // Create a new
                var battleMatchesWorker_1 = new Worker(__webpack__worker__1, {  });
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
    ], BattleComponent.prototype, "resultChange", void 0);
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


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/worker-plugin/dist/loader.js?{"name":"1"}!./battle.worker */ "./node_modules/worker-plugin/dist/loader.js?{\"name\":\"1\"}!./src/app/modules/battle-calculator/battle/battle.worker.ts")))

/***/ }),

/***/ "./src/app/modules/battle-calculator/br-modal/br-modal.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/battle-calculator/br-modal/br-modal.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".close-button {\n  position: absolute;\n  bottom: 20px;\n  right: 15px;\n  width: 150px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9iYXR0bGUtY2FsY3VsYXRvci9ici1tb2RhbC9EOlxcQ29kaW5nXFxQZXJzb25hbFxccHJvamVjdHNcXHBvbHl0b3BpYS1jYWxjdWxhdG9yL3NyY1xcYXBwXFxtb2R1bGVzXFxiYXR0bGUtY2FsY3VsYXRvclxcYnItbW9kYWxcXGJyLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2JhdHRsZS1jYWxjdWxhdG9yL2JyLW1vZGFsL2JyLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9iYXR0bGUtY2FsY3VsYXRvci9ici1tb2RhbC9ici1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG9zZS1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCIuY2xvc2UtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/battle-calculator/br-modal/br-modal.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/battle-calculator/br-modal/br-modal.component.ts ***!
  \**************************************************************************/
/*! exports provided: BrModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrModalComponent", function() { return BrModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");



var BrModalComponent = /** @class */ (function () {
    function BrModalComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    BrModalComponent.prototype.ngOnInit = function () { };
    BrModalComponent.prototype.dismiss = function () {
        this.modalCtrl.dismiss();
    };
    BrModalComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], BrModalComponent.prototype, "battleResults", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], BrModalComponent.prototype, "battleResultStatistics", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], BrModalComponent.prototype, "multi", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], BrModalComponent.prototype, "showingOptimalResult", void 0);
    BrModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-br-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./br-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/battle-calculator/br-modal/br-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./br-modal.component.scss */ "./src/app/modules/battle-calculator/br-modal/br-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], BrModalComponent);
    return BrModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/battle-calculator/code/code.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/battle-calculator/code/code.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  max-width: 700px;\n}\n\nion-list {\n  padding: 0;\n  margin-top: 20px;\n}\n\nion-title {\n  color: var(--ion-text-color);\n  margin-bottom: 12px;\n}\n\nion-item ion-label {\n  color: var(--ion-color-step-600, #666666);\n}\n\n.optimal-result-block {\n  text-align: left;\n  margin-top: 20px;\n}\n\n.optimal-result-block > * {\n  vertical-align: middle;\n  margin-left: 6px;\n  font-size: 15px;\n  text-indent: 0;\n  display: inline-block;\n}\n\n.invalid-text {\n  font-size: 15px;\n  display: inline-block;\n}\n\n.invalid-text ion-icon {\n  vertical-align: middle;\n}\n\nmark {\n  background-color: var(--ion-color-success-tint);\n  padding: 0px 6px;\n  border-radius: 4px;\n  display: inline-block;\n  margin-right: 8px;\n}\n\nmark.modifier {\n  background-color: var(--ion-color-primary-tint);\n}\n\n@media (min-width: 768px) {\n  .two-column-wrapper {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: start;\n            align-items: flex-start;\n  }\n\n  ion-list {\n    -webkit-box-flex: 1;\n            flex: 1;\n  }\n  ion-list:first-child {\n    margin: 20px 5px 20px;\n  }\n}\n\nion-textarea {\n  position: relative;\n  z-index: 0;\n}\n\n:host ::ng-deep .textarea-highlighter {\n  position: absolute;\n  left: 76px;\n  top: 18px;\n  z-index: 1;\n  pointer-events: 0;\n}\n\n:host ::ng-deep .textarea-highlighter mark {\n  background: none;\n}\n\n:host ::ng-deep .textarea-highlighter mark.unit {\n  color: var(--ion-color-success-tint);\n}\n\n:host ::ng-deep .textarea-highlighter mark.modifier {\n  color: var(--ion-color-primary-tint);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9iYXR0bGUtY2FsY3VsYXRvci9jb2RlL0Q6XFxDb2RpbmdcXFBlcnNvbmFsXFxwcm9qZWN0c1xccG9seXRvcGlhLWNhbGN1bGF0b3Ivc3JjXFxhcHBcXG1vZHVsZXNcXGJhdHRsZS1jYWxjdWxhdG9yXFxjb2RlXFxjb2RlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2JhdHRsZS1jYWxjdWxhdG9yL2NvZGUvY29kZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSx5Q0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENFO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNDTjs7QURHQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREVFO0VBQ0ksc0JBQUE7QUNBTjs7QURJQTtFQUNFLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURHQTtFQUNFLCtDQUFBO0FDQUY7O0FER0E7RUFFRTtJQUNJLG9CQUFBO0lBQUEsYUFBQTtJQUNBLHdCQUFBO1lBQUEsdUJBQUE7RUNESjs7RURHQTtJQUNJLG1CQUFBO1lBQUEsT0FBQTtFQ0FKO0VERUk7SUFDSSxxQkFBQTtFQ0FSO0FBQ0Y7O0FESUE7RUFFRSxrQkFBQTtFQUNBLFVBQUE7QUNIRjs7QURRSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNMTjs7QURNTTtFQUNFLGdCQUFBO0FDSlI7O0FES1E7RUFDRSxvQ0FBQTtBQ0hWOztBREtRO0VBQ0Usb0NBQUE7QUNIViIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmF0dGxlLWNhbGN1bGF0b3IvY29kZS9jb2RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXgtd2lkdGg6IDcwMHB4O1xyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuaW9uLWl0ZW0gaW9uLWxhYmVsIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjY2NjY2KVxyXG59XHJcblxyXG4ub3B0aW1hbC1yZXN1bHQtYmxvY2sge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgJiA+ICoge1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIHRleHQtaW5kZW50OiAwO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG4uaW52YWxpZC10ZXh0IHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG59XHJcblxyXG5tYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy10aW50KTtcclxuICBwYWRkaW5nOiAwcHggNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxubWFyay5tb2RpZmllciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG5cclxuICAudHdvLWNvbHVtbi13cmFwcGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG4gIGlvbi1saXN0IHtcclxuICAgICAgZmxleDogMTtcclxuXHJcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDVweCAyMHB4O1xyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb24tdGV4dGFyZWEge1xyXG4gIC8vIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG46aG9zdCB7XHJcblxyXG4gIDo6bmctZGVlcCAge1xyXG4gICAgLnRleHRhcmVhLWhpZ2hsaWdodGVyIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiA3NnB4O1xyXG4gICAgICB0b3A6IDE4cHg7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiAwO1xyXG4gICAgICBtYXJrIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICYudW5pdCB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYubW9kaWZpZXIge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAgIFxyXG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbn1cblxuaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG5pb24taXRlbSBpb24tbGFiZWwge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjY2NjY2KTtcbn1cblxuLm9wdGltYWwtcmVzdWx0LWJsb2NrIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5vcHRpbWFsLXJlc3VsdC1ibG9jayA+ICoge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtaW5kZW50OiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5pbnZhbGlkLXRleHQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5pbnZhbGlkLXRleHQgaW9uLWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5tYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludCk7XG4gIHBhZGRpbmc6IDBweCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxubWFyay5tb2RpZmllciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnR3by1jb2x1bW4td3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuXG4gIGlvbi1saXN0IHtcbiAgICBmbGV4OiAxO1xuICB9XG4gIGlvbi1saXN0OmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW46IDIwcHggNXB4IDIwcHg7XG4gIH1cbn1cbmlvbi10ZXh0YXJlYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50ZXh0YXJlYS1oaWdobGlnaHRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNzZweDtcbiAgdG9wOiAxOHB4O1xuICB6LWluZGV4OiAxO1xuICBwb2ludGVyLWV2ZW50czogMDtcbn1cbjpob3N0IDo6bmctZGVlcCAudGV4dGFyZWEtaGlnaGxpZ2h0ZXIgbWFyayB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRleHRhcmVhLWhpZ2hsaWdodGVyIG1hcmsudW5pdCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy10aW50KTtcbn1cbjpob3N0IDo6bmctZGVlcCAudGV4dGFyZWEtaGlnaGxpZ2h0ZXIgbWFyay5tb2RpZmllciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/battle-calculator/code/code.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/battle-calculator/code/code.component.ts ***!
  \******************************************************************/
/*! exports provided: CodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack__worker__0) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeComponent", function() { return CodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _data_unit_codes_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/unit-codes.const */ "./src/app/data/unit-codes.const.ts");
/* harmony import */ var _data_unit_list_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/unit-list.const */ "./src/app/data/unit-list.const.ts");
/* harmony import */ var _utils_execute_battle_matches_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/execute-battle-matches.util */ "./src/app/utils/execute-battle-matches.util.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_utils_calculate_max_hp_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/utils/calculate-max-hp.util */ "./src/app/utils/calculate-max-hp.util.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");










var CodeComponent = /** @class */ (function () {
    function CodeComponent(fb, cdr, sanitizer) {
        this.fb = fb;
        this.cdr = cdr;
        this.sanitizer = sanitizer;
        this.resultChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.unitsByCode = Object.entries(_data_unit_codes_const__WEBPACK_IMPORTED_MODULE_3__["unitCodes"]).concat(Object.entries(_data_unit_codes_const__WEBPACK_IMPORTED_MODULE_3__["carryUnitCodes"]));
        this.modifiersByCode = Object.entries(_data_unit_codes_const__WEBPACK_IMPORTED_MODULE_3__["modifierCodes"]);
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    CodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.codeForm = this.fb.group({
            code: '',
            getOptimalResult: false
        });
        this.codeForm.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this.codeForm.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.onDestroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function () { return _this.showBattleResults(); }))
            .subscribe(function (_a) {
            var _b = _a.battleResults, battleResults = _b === void 0 ? [] : _b, battleResultStatistics = _a.battleResultStatistics, isInvalid = _a.isInvalid;
            var showingOptimalResult = _this.codeForm.get('getOptimalResult').value;
            _this.resultChange.emit({ battleResults: battleResults, battleResultStatistics: battleResultStatistics, showingOptimalResult: showingOptimalResult, isInvalid: isInvalid });
            _this.cdr.detectChanges();
        });
        this.codeForm.get('code').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.onDestroy$))
            .subscribe(function (val) {
            var highlightedText = val || '';
            Object.keys(_data_unit_codes_const__WEBPACK_IMPORTED_MODULE_3__["unitCodes"]).concat(Object.keys(_data_unit_codes_const__WEBPACK_IMPORTED_MODULE_3__["carryUnitCodes"])).forEach(function (code) {
                highlightedText = highlightedText.replaceAll("" + code, "<xx>" + code + " </xx>");
            });
            Object.keys(_data_unit_codes_const__WEBPACK_IMPORTED_MODULE_3__["modifierCodes"]).forEach(function (code) {
                highlightedText = highlightedText.replaceAll(" " + code, "<x> " + code + "</x>");
                highlightedText = highlightedText.replaceAll(code + " ", "<x>" + code + " </x>");
            });
            highlightedText = highlightedText.replaceAll('<x>', '<mark class="modifier">');
            highlightedText = highlightedText.replaceAll('</x>', '</mark>');
            highlightedText = highlightedText.replaceAll('<xx>', '<mark class="unit">');
            highlightedText = highlightedText.replaceAll('</xx>', '</mark>');
            highlightedText = highlightedText.replaceAll("\n", '<br />');
            _this.highlightedText = _this.sanitizer.bypassSecurityTrustHtml(highlightedText);
        });
    };
    CodeComponent.prototype.parseAttackers = function (codes) {
        var _this = this;
        var attackers = codes.map(function (code) {
            var unit, hp, carriedUnit, carryUnit;
            var codeParts = code.split(' ').map(function (c) { return c.trim(); });
            codeParts.forEach(function (str) {
                if (_data_unit_codes_const__WEBPACK_IMPORTED_MODULE_3__["carryUnitCodes"][str]) {
                    carryUnit = _data_unit_codes_const__WEBPACK_IMPORTED_MODULE_3__["carryUnitCodes"][str];
                }
                var unitByCode = _data_unit_codes_const__WEBPACK_IMPORTED_MODULE_3__["unitCodes"][str];
                if (unitByCode && _data_unit_list_const__WEBPACK_IMPORTED_MODULE_4__["attackerUnits"].includes(unitByCode)) {
                    unit = unitByCode;
                }
                else if (unitByCode && !_data_unit_list_const__WEBPACK_IMPORTED_MODULE_4__["attackerUnits"].includes(unitByCode)) {
                    _this.errorMessage = "Attacker: " + unit + " cannot be an attacker";
                }
                if (Number.isInteger(parseInt(str))) {
                    hp = parseInt(str);
                }
            });
            var isVeteran = codeParts.includes('v');
            var isBoosted = codeParts.includes('b');
            var freeFromRetaliation = codeParts.includes('nr');
            if (carryUnit && !_data_unit_list_const__WEBPACK_IMPORTED_MODULE_4__["landUnits"].includes(unit)) {
                _this.errorMessage = "Attacker: " + carryUnit + " cannot carry " + (unit ? unit : 'nothing');
                return null;
            }
            else if (carryUnit && _data_unit_list_const__WEBPACK_IMPORTED_MODULE_4__["landUnits"].includes(unit)) {
                carriedUnit = unit;
                unit = carryUnit;
            }
            if (!unit || !hp) {
                return null;
            }
            var attacker = { unit: unit, carriedUnit: carriedUnit, hp: hp, isVeteran: isVeteran, isBoosted: isBoosted, freeFromRetaliation: freeFromRetaliation };
            var maxHp = Object(src_app_utils_calculate_max_hp_util__WEBPACK_IMPORTED_MODULE_8__["calculateMaxHp"])(attacker);
            if (hp > maxHp) {
                _this.errorMessage = "Attacker: " + unit + " exceeds max hp: " + maxHp;
                return null;
            }
            return attacker;
        });
        return attackers.filter(function (val) { return val !== null; });
    };
    CodeComponent.prototype.parseDefenders = function (codes) {
        var _this = this;
        var defenders = codes.map(function (code) {
            var unit, hp, carriedUnit, carryUnit;
            var codeParts = code.split(' ').map(function (c) { return c.trim(); });
            codeParts.forEach(function (str) {
                if (_data_unit_codes_const__WEBPACK_IMPORTED_MODULE_3__["carryUnitCodes"][str]) {
                    carryUnit = _data_unit_codes_const__WEBPACK_IMPORTED_MODULE_3__["carryUnitCodes"][str];
                }
                var unitByCode = _data_unit_codes_const__WEBPACK_IMPORTED_MODULE_3__["unitCodes"][str];
                if (unitByCode && _data_unit_list_const__WEBPACK_IMPORTED_MODULE_4__["defenderUnits"].includes(unitByCode)) {
                    unit = unitByCode;
                }
                else if (unitByCode && !_data_unit_list_const__WEBPACK_IMPORTED_MODULE_4__["defenderUnits"].includes(unitByCode)) {
                    _this.errorMessage = "Defender: " + unit + " cannot be a defender";
                }
                if (Number.isInteger(parseInt(str))) {
                    hp = parseInt(str);
                }
            });
            var isVeteran = codeParts.includes('v');
            var withDefenseBonus;
            if (codeParts.includes('w')) {
                withDefenseBonus = 'withWall';
            }
            else if (codeParts.includes('d')) {
                withDefenseBonus = 'withoutWall';
            }
            var isPoisoned = codeParts.includes('p');
            if (carryUnit && !_data_unit_list_const__WEBPACK_IMPORTED_MODULE_4__["landUnits"].includes(unit)) {
                _this.errorMessage = "Defender: " + carryUnit + " cannot carry " + (unit ? unit : 'nothing');
                return null;
            }
            else if (carryUnit && _data_unit_list_const__WEBPACK_IMPORTED_MODULE_4__["landUnits"].includes(unit)) {
                carriedUnit = unit;
                unit = carryUnit;
            }
            if (!unit || !hp) {
                return null;
            }
            var defender = { unit: unit, carriedUnit: carriedUnit, hp: hp, isVeteran: isVeteran, withDefenseBonus: withDefenseBonus, isPoisoned: isPoisoned, freeFromRetaliation: false };
            var maxHp = Object(src_app_utils_calculate_max_hp_util__WEBPACK_IMPORTED_MODULE_8__["calculateMaxHp"])(defender);
            if (hp > maxHp) {
                _this.errorMessage = "Defender: " + unit + " exceeds max hp: " + maxHp;
                return null;
            }
            return defender;
        });
        return defenders.filter(function (val) { return val !== null; });
    };
    CodeComponent.prototype.showBattleResults = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (subscriber) {
            var code = _this.codeForm.get('code').value || '';
            var _a = code.split("\n"), attackersCodeStr = _a[0], defendersCodeStr = _a[1];
            if (!attackersCodeStr || !defendersCodeStr) {
                subscriber.next({ isInvalid: true });
                subscriber.complete();
                return;
            }
            ;
            var attackers = _this.parseAttackers(attackersCodeStr.split(','));
            var defenders = _this.parseDefenders(defendersCodeStr.split(','));
            if (attackers.length <= 0 || defenders.length <= 0) {
                subscriber.next({ isInvalid: true });
                subscriber.complete();
                return;
            }
            ;
            _this.errorMessage = '';
            // this.googleAnalytics.emitEvent(
            //   'battle calculate', 'method', `${attackers.map(attacker => attacker.unit).join(', ')} vs ${defenders.map(defender => defender.unit).join(', ')}`,
            //   { attackers: attackers, defenders: defenders }, 1);
            var getOptimalResult = _this.codeForm.get('getOptimalResult').value;
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
                subscriber.next(Object(_utils_execute_battle_matches_util__WEBPACK_IMPORTED_MODULE_5__["executeBattleMatches"])(attackers, defenders, getOptimalResult));
                subscriber.complete();
            }
        });
    };
    CodeComponent.prototype.toggleGetOptimalResult = function () {
        var currentValue = this.codeForm.get('getOptimalResult').value;
        this.codeForm.get('getOptimalResult').setValue(!currentValue);
    };
    CodeComponent.prototype.ngOnDestroy = function () {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    };
    CodeComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CodeComponent.prototype, "resultChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('textareaHighlighter', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CodeComponent.prototype, "textAreaHighlighter", void 0);
    CodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-code',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./code.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/battle-calculator/code/code.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./code.component.scss */ "./src/app/modules/battle-calculator/code/code.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]])
    ], CodeComponent);
    return CodeComponent;
}());


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/worker-plugin/dist/loader.js?{"name":"0"}!./battle.worker */ "./node_modules/worker-plugin/dist/loader.js?{\"name\":\"0\"}!./src/app/modules/battle-calculator/code/battle.worker.ts")))

/***/ }),

/***/ "./src/app/modules/battle-calculator/one-on-one/one-on-one.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/battle-calculator/one-on-one/one-on-one.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\nion-list {\n  padding: 0;\n  margin-top: 20px;\n}\n\napp-battle-result {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: block;\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n\n.paypal-form {\n  display: block;\n}\n\nion-title {\n  color: var(--ion-text-color);\n}\n\nform {\n  width: 100%;\n  min-height: 700px;\n}\n\n@media (min-width: 768px) {\n  form {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: start;\n            align-items: flex-start;\n  }\n\n  ion-list {\n    -webkit-box-flex: 1;\n            flex: 1;\n  }\n  ion-list:first-child {\n    margin: 20px 5px 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9iYXR0bGUtY2FsY3VsYXRvci9vbmUtb24tb25lL0Q6XFxDb2RpbmdcXFBlcnNvbmFsXFxwcm9qZWN0c1xccG9seXRvcGlhLWNhbGN1bGF0b3Ivc3JjXFxhcHBcXG1vZHVsZXNcXGJhdHRsZS1jYWxjdWxhdG9yXFxvbmUtb24tb25lXFxvbmUtb24tb25lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2JhdHRsZS1jYWxjdWxhdG9yL29uZS1vbi1vbmUvb25lLW9uLW9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0FDQ0Y7O0FEUUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUNMRjs7QURRQTtFQUNFO0lBQ0Usb0JBQUE7SUFBQSxhQUFBO0lBQ0Esd0JBQUE7WUFBQSx1QkFBQTtFQ0xGOztFRE9BO0lBQ0UsbUJBQUE7WUFBQSxPQUFBO0VDSkY7RURNRTtJQUNFLHFCQUFBO0VDSko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmF0dGxlLWNhbGN1bGF0b3Ivb25lLW9uLW9uZS9vbmUtb24tb25lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuYXBwLWJhdHRsZS1yZXN1bHQge1xyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ucGF5cGFsLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XHJcbn1cclxuXHJcblxyXG4vLyBiYXR0bGUgcmVzdWx0IGlzIHNob3duIGFzIG1vZGFsIGluIHNtYWxsIHNjcmVlbnNcclxuLy8gYXBwLWJhdHRsZS1yZXN1bHQge1xyXG4vLyAgIGRpc3BsYXk6IG5vbmU7XHJcbi8vIH1cclxuXHJcbmZvcm0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDcwMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBmb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB9XHJcbiAgaW9uLWxpc3Qge1xyXG4gICAgZmxleDogMTtcclxuXHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luOiAyMHB4IDVweCAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuYXBwLWJhdHRsZS1yZXN1bHQge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnBheXBhbC1mb3JtIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNzAwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBmb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgaW9uLWxpc3Qge1xuICAgIGZsZXg6IDE7XG4gIH1cbiAgaW9uLWxpc3Q6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbjogMjBweCA1cHggMjBweDtcbiAgfVxufSJdfQ== */");

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
        this.fb = fb;
        this.googleAnalytics = googleAnalytics;
        this.attackerUnits = _data_unit_list_const__WEBPACK_IMPORTED_MODULE_5__["attackerUnits"];
        this.defenderUnits = _data_unit_list_const__WEBPACK_IMPORTED_MODULE_5__["defenderUnits"];
        this.landUnits = _data_unit_list_const__WEBPACK_IMPORTED_MODULE_5__["landUnits"];
        this.resultChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    OneOnOneComponent.prototype.ngOnInit = function () {
        var _this = this;
        var attacker = this.attackerUnits[0];
        var attackerStat = _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_8__["unitStats"][attacker];
        var defender = this.defenderUnits[0];
        var defenderStat = _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_8__["unitStats"][defender];
        var carriedUnit = this.landUnits[0];
        this.oneOnOneForm = this.fb.group({
            attacker: this.fb.group({
                unit: attacker,
                carriedUnit: carriedUnit,
                hp: [attackerStat.hp, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
                isVeteran: false,
                isBoosted: false,
                freeFromRetaliation: false,
            }, { validators: [_validators_max_hp_validator__WEBPACK_IMPORTED_MODULE_6__["maxHpValidator"], _validators_carried_unit_validator__WEBPACK_IMPORTED_MODULE_9__["carriedUnitValidator"]] }),
            defender: this.fb.group({
                unit: defender,
                carriedUnit: carriedUnit,
                hp: [defenderStat.hp, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]],
                isVeteran: false,
                isPoisoned: false,
                withDefenseBonus: false,
                withWallBonus: false
            }, { validators: [_validators_max_hp_validator__WEBPACK_IMPORTED_MODULE_6__["maxHpValidator"], _validators_carried_unit_validator__WEBPACK_IMPORTED_MODULE_9__["carriedUnitValidator"]] })
        });
        this.oneOnOneForm.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(this.oneOnOneForm.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.onDestroy$))
            .subscribe(function () {
            _this.showBattleResult();
        });
    };
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
                    this.battleResultStatistics = null;
                    this.resultChange.emit({ battleResults: [], battleResultStatistics: null, isInvalid: true });
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
                this.battleResultStatistics = {
                    attackerSurvivors: [attackerData],
                    defenderSurvivors: [defenderData],
                    defendersKilled: [],
                    attackersKilled: [],
                    unusedAttackerUnits: [],
                    untouchedDefenderUnits: [],
                    totalAttackDamage: attackerData.attackDamage,
                    totalDefenseDamage: defenderData.defenseDamage
                };
                this.resultChange.emit({ battleResults: [this.battleResult], battleResultStatistics: this.battleResultStatistics, isInvalid: false });
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
    ], OneOnOneComponent.prototype, "resultChange", void 0);
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

/***/ "./src/app/modules/shared/battle-result-mini/battle-result-mini.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/shared/battle-result-mini/battle-result-mini.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n\n.fight-result-text {\n  font-size: 20px;\n}\n\n.swords-icon {\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  vertical-align: top;\n  margin: 0 15px;\n}\n\n.two-column {\n  display: -webkit-box;\n  display: flex;\n  text-align: left;\n  margin-top: 15px;\n  padding-bottom: 20px;\n}\n\n.two-column > div:first-child {\n  border-right: 1px solid #dedddd;\n}\n\n.unit-image {\n  width: 30px;\n  height: 30px;\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 20px;\n}\n\n.unit-image img {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.summary-unit-block {\n  display: inline-block;\n  padding: 0 10px;\n  font-size: 16px;\n}\n\n.summary-unit-block .unit-image {\n  margin-left: 0;\n}\n\n.drag-line {\n  display: block;\n  width: 100px;\n  height: 3px;\n  background: #d6d2d2;\n  border-radius: 10px;\n  margin: 5px auto 0;\n}\n\n.invalid-text {\n  font-size: 15px;\n  margin-bottom: 20px;\n  display: inline-block;\n}\n\n.invalid-text ion-icon {\n  vertical-align: middle;\n}\n\n.loading-message {\n  margin-top: 50px;\n}\n\n.loading-message ion-spinner {\n  width: 40px;\n  height: 40px;\n}\n\n@media (prefers-color-scheme: dark) {\n  :host {\n    background-color: #292929;\n    color: var(--ion-text-color);\n  }\n\n  .drag-line {\n    background: #424242;\n  }\n\n  .two-column > div:first-child {\n    border-right: 1px solid #424242;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvYmF0dGxlLXJlc3VsdC1taW5pL0Q6XFxDb2RpbmdcXFBlcnNvbmFsXFxwcm9qZWN0c1xccG9seXRvcGlhLWNhbGN1bGF0b3Ivc3JjXFxhcHBcXG1vZHVsZXNcXHNoYXJlZFxcYmF0dGxlLXJlc3VsdC1taW5pXFxiYXR0bGUtcmVzdWx0LW1pbmkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2JhdHRsZS1yZXN1bHQtbWluaS9iYXR0bGUtcmVzdWx0LW1pbmkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDR0o7O0FEREE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNJSjs7QURGSTtFQUNJLCtCQUFBO0FDSVI7O0FEQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ0dKOztBRERJO0VBQ0ksc0JBQUE7S0FBQSxtQkFBQTtBQ0dSOztBRENBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREFJO0VBQ0UsY0FBQTtBQ0VOOztBREVBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0NKOztBRENJO0VBQ0ksc0JBQUE7QUNDUjs7QURJQTtFQUNJLGdCQUFBO0FDREo7O0FER0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0RSOztBREtBO0VBQ0k7SUFDSSx5QkFBQTtJQUNBLDRCQUFBO0VDRk47O0VES0U7SUFDSSxtQkFBQTtFQ0ZOOztFRE1NO0lBQ0ksK0JBQUE7RUNIVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvYmF0dGxlLXJlc3VsdC1taW5pL2JhdHRsZS1yZXN1bHQtbWluaS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5maWdodC1yZXN1bHQtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLnN3b3Jkcy1pY29uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIG1hcmdpbjogMCAxNXB4O1xyXG59XHJcbi50d28tY29sdW1uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cclxuICAgID4gZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGVkZGRkO1xyXG4gICAgfVxyXG59XHJcblxyXG4udW5pdC1pbWFnZSB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zdW1tYXJ5LXVuaXQtYmxvY2sge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIFxyXG4gICAgLnVuaXQtaW1hZ2Uge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxufVxyXG5cclxuLmRyYWctbGluZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogI2Q2ZDJkMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvIDA7XHJcbn1cclxuXHJcbi5pbnZhbGlkLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5sb2FkaW5nLW1lc3NhZ2Uge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuXHJcbiAgICBpb24tc3Bpbm5lciB7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XHJcbiAgICA6aG9zdCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIC5kcmFnLWxpbmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM0MjQyNDI7XHJcbiAgICB9XHJcblxyXG4gICAgLnR3by1jb2x1bW4geyAgICBcclxuICAgICAgICA+IGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICAjNDI0MjQyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZpZ2h0LXJlc3VsdC10ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uc3dvcmRzLWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1hcmdpbjogMCAxNXB4O1xufVxuXG4udHdvLWNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLnR3by1jb2x1bW4gPiBkaXY6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGVkZGRkO1xufVxuXG4udW5pdC1pbWFnZSB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4udW5pdC1pbWFnZSBpbWcge1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uc3VtbWFyeS11bml0LWJsb2NrIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5zdW1tYXJ5LXVuaXQtYmxvY2sgLnVuaXQtaW1hZ2Uge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLmRyYWctbGluZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kOiAjZDZkMmQyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDVweCBhdXRvIDA7XG59XG5cbi5pbnZhbGlkLXRleHQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5pbnZhbGlkLXRleHQgaW9uLWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubG9hZGluZy1tZXNzYWdlIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5sb2FkaW5nLW1lc3NhZ2UgaW9uLXNwaW5uZXIge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIDpob3N0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIH1cblxuICAuZHJhZy1saW5lIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xuICB9XG5cbiAgLnR3by1jb2x1bW4gPiBkaXY6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0MjQyNDI7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/shared/battle-result-mini/battle-result-mini.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/shared/battle-result-mini/battle-result-mini.component.ts ***!
  \***********************************************************************************/
/*! exports provided: BattleResultMiniComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattleResultMiniComponent", function() { return BattleResultMiniComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BattleResultMiniComponent = /** @class */ (function () {
    function BattleResultMiniComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BattleResultMiniComponent.prototype, "battleResultStatistics", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], BattleResultMiniComponent.prototype, "isInvalid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], BattleResultMiniComponent.prototype, "isExecutingBattleMatches", void 0);
    BattleResultMiniComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-battle-result-mini',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./battle-result-mini.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/battle-result-mini/battle-result-mini.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./battle-result-mini.component.scss */ "./src/app/modules/shared/battle-result-mini/battle-result-mini.component.scss")).default]
        })
    ], BattleResultMiniComponent);
    return BattleResultMiniComponent;
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
/* harmony default export */ __webpack_exports__["default"] = (".unit-image {\n  width: 30px;\n  height: 30px;\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 20px;\n}\n.unit-image img {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\nion-card-content {\n  font-size: 15px;\n}\n.move-order-text {\n  text-align: center !important;\n  font-weight: 500;\n}\n.summary-unit-block {\n  display: inline-block;\n  padding: 10px;\n  font-size: 16px;\n}\n.summary-unit-block .unit-image {\n  margin-left: 0;\n}\n.table-title {\n  font-size: 16px;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  font-weight: 500;\n  display: block;\n}\n.swords-icon {\n  display: inline-block;\n  width: 25px;\n  height: 25px;\n  vertical-align: top;\n  margin: 0 15px;\n}\ntable {\n  border-spacing: 0;\n  width: 100%;\n  border-collapse: collapse;\n  border: 1px solid var(--ion-item-background);\n}\ntable th, table td {\n  border: 1px solid var(--ion-item-background);\n  text-align: left;\n  padding: 5px 15px;\n  font-size: 15px;\n  vertical-align: top;\n}\ntable th {\n  font-weight: normal;\n  background: var(--ion-item-background);\n}\n@media (prefers-color-scheme: dark) {\n  table, table th, table td {\n    border: 1px solid #565656;\n  }\n  table th {\n    background: #424242;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvYmF0dGxlLXJlc3VsdC9EOlxcQ29kaW5nXFxQZXJzb25hbFxccHJvamVjdHNcXHBvbHl0b3BpYS1jYWxjdWxhdG9yL3NyY1xcYXBwXFxtb2R1bGVzXFxzaGFyZWRcXGJhdHRsZS1yZXN1bHRcXGJhdHRsZS1yZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2JhdHRsZS1yZXN1bHQvYmF0dGxlLXJlc3VsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7QURDRTtFQUNFLHNCQUFBO0tBQUEsbUJBQUE7QUNDSjtBREdBO0VBQ0UsZUFBQTtBQ0FGO0FER0E7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0FDQUY7QURHQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNBRjtBREVFO0VBQ0UsY0FBQTtBQ0FKO0FESUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDREY7QURJQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNERjtBRElBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSw0Q0FBQTtBQ0RGO0FER0U7RUFDRSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNESjtBRElFO0VBQ0UsbUJBQUE7RUFDQSxzQ0FBQTtBQ0ZKO0FETUE7RUFFSTtJQUNFLHlCQUFBO0VDSko7RURNRTtJQUNFLG1CQUFBO0VDSko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2JhdHRsZS1yZXN1bHQvYmF0dGxlLXJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51bml0LWltYWdlIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcblxyXG4gIGltZyB7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4ubW92ZS1vcmRlci10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uc3VtbWFyeS11bml0LWJsb2NrIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gIC51bml0LWltYWdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLnRhYmxlLXRpdGxlIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnN3b3Jkcy1pY29uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgbWFyZ2luOiAwIDE1cHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBib3JkZXItc3BhY2luZzogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQpO1xyXG5cclxuICB0aCwgdGQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCk7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIH1cclxuXHJcbiAgdGgge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xyXG4gIHRhYmxlIHtcclxuICAgICYsIHRoLCB0ZCB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NjU2NTY7XHJcbiAgICB9XHJcbiAgICB0aCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM0MjQyNDI7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiLnVuaXQtaW1hZ2Uge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLnVuaXQtaW1hZ2UgaW1nIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLm1vdmUtb3JkZXItdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3VtbWFyeS11bml0LWJsb2NrIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uc3VtbWFyeS11bml0LWJsb2NrIC51bml0LWltYWdlIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi50YWJsZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnN3b3Jkcy1pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBtYXJnaW46IDAgMTVweDtcbn1cblxudGFibGUge1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQpO1xufVxudGFibGUgdGgsIHRhYmxlIHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG50YWJsZSB0aCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQpO1xufVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIHRhYmxlLCB0YWJsZSB0aCwgdGFibGUgdGQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NjU2NTY7XG4gIH1cbiAgdGFibGUgdGgge1xuICAgIGJhY2tncm91bmQ6ICM0MjQyNDI7XG4gIH1cbn0iXX0= */");

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
        if (orderNumber > 10 && orderNumber < 20) {
            return "th";
        }
        else if (orderNumber % 10 === 1) {
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
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

/***/ "./src/app/modules/shared/donate-button/donate-button.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/shared/donate-button/donate-button.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".currency-select {\n  width: 230px;\n  margin: auto;\n}\n.currency-select ion-select {\n  vertical-align: middle;\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvZG9uYXRlLWJ1dHRvbi9EOlxcQ29kaW5nXFxQZXJzb25hbFxccHJvamVjdHNcXHBvbHl0b3BpYS1jYWxjdWxhdG9yL3NyY1xcYXBwXFxtb2R1bGVzXFxzaGFyZWRcXGRvbmF0ZS1idXR0b25cXGRvbmF0ZS1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2RvbmF0ZS1idXR0b24vZG9uYXRlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDQUo7QURFSTtFQUNFLHNCQUFBO0VBQ0EsMkJBQUE7RUFBQSxvQkFBQTtBQ0FOIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvZG9uYXRlLWJ1dHRvbi9kb25hdGUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jdXJyZW5jeS1zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIFxyXG4gICAgaW9uLXNlbGVjdCB7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgfVxyXG59IiwiLmN1cnJlbmN5LXNlbGVjdCB7XG4gIHdpZHRoOiAyMzBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmN1cnJlbmN5LXNlbGVjdCBpb24tc2VsZWN0IHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/shared/donate-button/donate-button.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/shared/donate-button/donate-button.component.ts ***!
  \*************************************************************************/
/*! exports provided: DonateButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonateButtonComponent", function() { return DonateButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DonateButtonComponent = /** @class */ (function () {
    function DonateButtonComponent() {
    }
    DonateButtonComponent.prototype.ngOnInit = function () { };
    DonateButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-donate-button',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./donate-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/donate-button/donate-button.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./donate-button.component.scss */ "./src/app/modules/shared/donate-button/donate-button.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DonateButtonComponent);
    return DonateButtonComponent;
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
/* harmony import */ var _donate_button_donate_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./donate-button/donate-button.component */ "./src/app/modules/shared/donate-button/donate-button.component.ts");
/* harmony import */ var _battle_result_mini_battle_result_mini_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./battle-result-mini/battle-result-mini.component */ "./src/app/modules/shared/battle-result-mini/battle-result-mini.component.ts");









var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_unit_form_unit_form_component__WEBPACK_IMPORTED_MODULE_5__["UnitFormComponent"], _battle_result_battle_result_component__WEBPACK_IMPORTED_MODULE_6__["BattleResultComponent"], _battle_result_mini_battle_result_mini_component__WEBPACK_IMPORTED_MODULE_8__["BattleResultMiniComponent"], _donate_button_donate_button_component__WEBPACK_IMPORTED_MODULE_7__["DonateButtonComponent"]],
            exports: [_unit_form_unit_form_component__WEBPACK_IMPORTED_MODULE_5__["UnitFormComponent"], _battle_result_battle_result_component__WEBPACK_IMPORTED_MODULE_6__["BattleResultComponent"], _battle_result_mini_battle_result_mini_component__WEBPACK_IMPORTED_MODULE_8__["BattleResultMiniComponent"], _donate_button_donate_button_component__WEBPACK_IMPORTED_MODULE_7__["DonateButtonComponent"]],
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
/* harmony default export */ __webpack_exports__["default"] = (".input-hp, .input-count {\n  text-align: center;\n  width: 30px;\n  display: block;\n  margin-left: 0px;\n  -webkit-box-flex: unset;\n          flex: unset;\n  margin-right: 10px;\n}\n\n.input-hp-arrow, .input-count-arrow {\n  cursor: pointer;\n}\n\n.unit-image {\n  width: 35px;\n  height: 35px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  margin-left: 10px;\n}\n\n.range-arrows-container {\n  margin-left: 0;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  font-size: 20px;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button .action-sheet-button-inner:before,\n::ng-deep .defender-carried-unit-option .action-sheet-button .action-sheet-button-inner:before,\n::ng-deep .attacker-unit-option .action-sheet-button .action-sheet-button-inner:before,\n::ng-deep .attacker-carried-unit-option .action-sheet-button .action-sheet-button-inner:before {\n  display: block;\n  width: 40px;\n  height: 40px;\n  margin-right: 15px;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(2) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Warrior.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(3) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Rider.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(4) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Defender.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(5) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Swordsman.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(6) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Archer.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(7) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Catapult.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(8) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Knight.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(9) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Giant.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(10) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Boat.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(11) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Ship.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(12) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Battleship.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(13) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Mind Bender.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(14) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Amphibian.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(15) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Crab.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(16) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Tridention.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(17) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Polytaur.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(18) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Navalon.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(19) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Dragon Egg.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(20) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Baby Dragon.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(21) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Fire Dragon.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(22) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Mooni.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(23) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Ice Archer.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(24) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Battle Sled.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(25) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Ice Fortress.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(26) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Gaami.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(27) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Shaman.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(28) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Hexapod.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(29) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Phychi.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(30) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Raychi.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(31) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Kiton.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(32) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Doomux.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(33) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Exida.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(34) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Centipede.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(35) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Segment.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(36) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Nature Bunny.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(37) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Dagger.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(38) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Cloak.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-unit-option .action-sheet-button:nth-child(39) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Dinghy.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-carried-unit-option .action-sheet-button:nth-child(2) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Warrior.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-carried-unit-option .action-sheet-button:nth-child(3) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Rider.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-carried-unit-option .action-sheet-button:nth-child(4) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Defender.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-carried-unit-option .action-sheet-button:nth-child(5) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Swordsman.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-carried-unit-option .action-sheet-button:nth-child(6) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Archer.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-carried-unit-option .action-sheet-button:nth-child(7) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Catapult.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-carried-unit-option .action-sheet-button:nth-child(8) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Mind Bender.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-carried-unit-option .action-sheet-button:nth-child(9) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Knight.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-carried-unit-option .action-sheet-button:nth-child(10) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Giant.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-carried-unit-option .action-sheet-button:nth-child(11) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Polytaur.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-carried-unit-option .action-sheet-button:nth-child(12) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Nature Bunny.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-carried-unit-option .action-sheet-button:nth-child(13) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Cloak.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .defender-carried-unit-option .action-sheet-button:nth-child(14) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Dagger.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(2) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Warrior.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(3) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Rider.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(4) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Defender.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(5) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Swordsman.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(6) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Archer.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(7) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Catapult.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(8) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Knight.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(9) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Giant.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(10) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Boat.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(11) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Ship.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(12) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Battleship.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(13) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Amphibian.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(14) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Crab.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(15) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Tridention.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(16) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Polytaur.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(17) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Navalon.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(18) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Baby Dragon.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(19) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Fire Dragon.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(20) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Ice Archer.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(21) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Battle Sled.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(22) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Ice Fortress.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(23) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Gaami.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(24) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Shaman.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(25) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Hexapod.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(26) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Phychi.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(27) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Raychi.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(28) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Kiton.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(29) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Doomux.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(30) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Exida.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(31) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Centipede.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(32) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Segment.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-unit-option .action-sheet-button:nth-child(33) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Dagger.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-carried-unit-option .action-sheet-button:nth-child(2) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Warrior.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-carried-unit-option .action-sheet-button:nth-child(3) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Rider.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-carried-unit-option .action-sheet-button:nth-child(4) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Defender.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-carried-unit-option .action-sheet-button:nth-child(5) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Swordsman.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-carried-unit-option .action-sheet-button:nth-child(6) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Archer.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-carried-unit-option .action-sheet-button:nth-child(7) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Catapult.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-carried-unit-option .action-sheet-button:nth-child(8) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Mind Bender.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-carried-unit-option .action-sheet-button:nth-child(9) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Knight.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-carried-unit-option .action-sheet-button:nth-child(10) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Giant.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-carried-unit-option .action-sheet-button:nth-child(11) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Polytaur.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-carried-unit-option .action-sheet-button:nth-child(12) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Nature Bunny.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-carried-unit-option .action-sheet-button:nth-child(13) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Cloak.png\");\n  background-size: 100% 100%;\n}\n\n::ng-deep .attacker-carried-unit-option .action-sheet-button:nth-child(14) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Dagger.png\");\n  background-size: 100% 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvdW5pdC1mb3JtL0Q6XFxDb2RpbmdcXFBlcnNvbmFsXFxwcm9qZWN0c1xccG9seXRvcGlhLWNhbGN1bGF0b3Ivc3JjXFxhcHBcXG1vZHVsZXNcXHNoYXJlZFxcdW5pdC1mb3JtXFx1bml0LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL3VuaXQtZm9ybS91bml0LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtVQUFBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFFRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0FOOztBRElBO0VBQ0ksY0FBQTtFQUNBLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSxlQUFBO0FDREo7O0FEU1E7Ozs7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0haOztBRFlJO0VBQ0ksV0FBQTtFQUNBLHFEQUFBO0VBQ0EsMEJBQUE7QUNUUjs7QURNSTtFQUNJLFdBQUE7RUFDQSxtREFBQTtFQUNBLDBCQUFBO0FDSFI7O0FEQUk7RUFDSSxXQUFBO0VBQ0Esc0RBQUE7RUFDQSwwQkFBQTtBQ0dSOztBRE5JO0VBQ0ksV0FBQTtFQUNBLHVEQUFBO0VBQ0EsMEJBQUE7QUNTUjs7QURaSTtFQUNJLFdBQUE7RUFDQSxvREFBQTtFQUNBLDBCQUFBO0FDZVI7O0FEbEJJO0VBQ0ksV0FBQTtFQUNBLHNEQUFBO0VBQ0EsMEJBQUE7QUNxQlI7O0FEeEJJO0VBQ0ksV0FBQTtFQUNBLG9EQUFBO0VBQ0EsMEJBQUE7QUMyQlI7O0FEOUJJO0VBQ0ksV0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7QUNpQ1I7O0FEcENJO0VBQ0ksV0FBQTtFQUNBLGtEQUFBO0VBQ0EsMEJBQUE7QUN1Q1I7O0FEMUNJO0VBQ0ksV0FBQTtFQUNBLGtEQUFBO0VBQ0EsMEJBQUE7QUM2Q1I7O0FEaERJO0VBQ0ksV0FBQTtFQUNBLHdEQUFBO0VBQ0EsMEJBQUE7QUNtRFI7O0FEdERJO0VBQ0ksV0FBQTtFQUNBLHlEQUFBO0VBQ0EsMEJBQUE7QUN5RFI7O0FENURJO0VBQ0ksV0FBQTtFQUNBLHVEQUFBO0VBQ0EsMEJBQUE7QUMrRFI7O0FEbEVJO0VBQ0ksV0FBQTtFQUNBLGtEQUFBO0VBQ0EsMEJBQUE7QUNxRVI7O0FEeEVJO0VBQ0ksV0FBQTtFQUNBLHdEQUFBO0VBQ0EsMEJBQUE7QUMyRVI7O0FEOUVJO0VBQ0ksV0FBQTtFQUNBLHNEQUFBO0VBQ0EsMEJBQUE7QUNpRlI7O0FEcEZJO0VBQ0ksV0FBQTtFQUNBLHFEQUFBO0VBQ0EsMEJBQUE7QUN1RlI7O0FEMUZJO0VBQ0ksV0FBQTtFQUNBLHdEQUFBO0VBQ0EsMEJBQUE7QUM2RlI7O0FEaEdJO0VBQ0ksV0FBQTtFQUNBLHlEQUFBO0VBQ0EsMEJBQUE7QUNtR1I7O0FEdEdJO0VBQ0ksV0FBQTtFQUNBLHlEQUFBO0VBQ0EsMEJBQUE7QUN5R1I7O0FENUdJO0VBQ0ksV0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7QUMrR1I7O0FEbEhJO0VBQ0ksV0FBQTtFQUNBLHdEQUFBO0VBQ0EsMEJBQUE7QUNxSFI7O0FEeEhJO0VBQ0ksV0FBQTtFQUNBLHlEQUFBO0VBQ0EsMEJBQUE7QUMySFI7O0FEOUhJO0VBQ0ksV0FBQTtFQUNBLDBEQUFBO0VBQ0EsMEJBQUE7QUNpSVI7O0FEcElJO0VBQ0ksV0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7QUN1SVI7O0FEMUlJO0VBQ0ksV0FBQTtFQUNBLG9EQUFBO0VBQ0EsMEJBQUE7QUM2SVI7O0FEaEpJO0VBQ0ksV0FBQTtFQUNBLHFEQUFBO0VBQ0EsMEJBQUE7QUNtSlI7O0FEdEpJO0VBQ0ksV0FBQTtFQUNBLG9EQUFBO0VBQ0EsMEJBQUE7QUN5SlI7O0FENUpJO0VBQ0ksV0FBQTtFQUNBLG9EQUFBO0VBQ0EsMEJBQUE7QUMrSlI7O0FEbEtJO0VBQ0ksV0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7QUNxS1I7O0FEeEtJO0VBQ0ksV0FBQTtFQUNBLG9EQUFBO0VBQ0EsMEJBQUE7QUMyS1I7O0FEOUtJO0VBQ0ksV0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7QUNpTFI7O0FEcExJO0VBQ0ksV0FBQTtFQUNBLHVEQUFBO0VBQ0EsMEJBQUE7QUN1TFI7O0FEMUxJO0VBQ0ksV0FBQTtFQUNBLHFEQUFBO0VBQ0EsMEJBQUE7QUM2TFI7O0FEaE1JO0VBQ0ksV0FBQTtFQUNBLDBEQUFBO0VBQ0EsMEJBQUE7QUNtTVI7O0FEdE1JO0VBQ0ksV0FBQTtFQUNBLG9EQUFBO0VBQ0EsMEJBQUE7QUN5TVI7O0FENU1JO0VBQ0ksV0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7QUMrTVI7O0FEbE5JO0VBQ0ksV0FBQTtFQUNBLG9EQUFBO0VBQ0EsMEJBQUE7QUNxTlI7O0FEN01JO0VBQ0ksV0FBQTtFQUNBLHFEQUFBO0VBQ0EsMEJBQUE7QUNnTlI7O0FEbk5JO0VBQ0ksV0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7QUNzTlI7O0FEek5JO0VBQ0ksV0FBQTtFQUNBLHNEQUFBO0VBQ0EsMEJBQUE7QUM0TlI7O0FEL05JO0VBQ0ksV0FBQTtFQUNBLHVEQUFBO0VBQ0EsMEJBQUE7QUNrT1I7O0FEck9JO0VBQ0ksV0FBQTtFQUNBLG9EQUFBO0VBQ0EsMEJBQUE7QUN3T1I7O0FEM09JO0VBQ0ksV0FBQTtFQUNBLHNEQUFBO0VBQ0EsMEJBQUE7QUM4T1I7O0FEalBJO0VBQ0ksV0FBQTtFQUNBLHlEQUFBO0VBQ0EsMEJBQUE7QUNvUFI7O0FEdlBJO0VBQ0ksV0FBQTtFQUNBLG9EQUFBO0VBQ0EsMEJBQUE7QUMwUFI7O0FEN1BJO0VBQ0ksV0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7QUNnUVI7O0FEblFJO0VBQ0ksV0FBQTtFQUNBLHNEQUFBO0VBQ0EsMEJBQUE7QUNzUVI7O0FEelFJO0VBQ0ksV0FBQTtFQUNBLDBEQUFBO0VBQ0EsMEJBQUE7QUM0UVI7O0FEL1FJO0VBQ0ksV0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7QUNrUlI7O0FEclJJO0VBQ0ksV0FBQTtFQUNBLG9EQUFBO0VBQ0EsMEJBQUE7QUN3UlI7O0FEaFJJO0VBQ0ksV0FBQTtFQUNBLHFEQUFBO0VBQ0EsMEJBQUE7QUNtUlI7O0FEdFJJO0VBQ0ksV0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7QUN5UlI7O0FENVJJO0VBQ0ksV0FBQTtFQUNBLHNEQUFBO0VBQ0EsMEJBQUE7QUMrUlI7O0FEbFNJO0VBQ0ksV0FBQTtFQUNBLHVEQUFBO0VBQ0EsMEJBQUE7QUNxU1I7O0FEeFNJO0VBQ0ksV0FBQTtFQUNBLG9EQUFBO0VBQ0EsMEJBQUE7QUMyU1I7O0FEOVNJO0VBQ0ksV0FBQTtFQUNBLHNEQUFBO0VBQ0EsMEJBQUE7QUNpVFI7O0FEcFRJO0VBQ0ksV0FBQTtFQUNBLG9EQUFBO0VBQ0EsMEJBQUE7QUN1VFI7O0FEMVRJO0VBQ0ksV0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7QUM2VFI7O0FEaFVJO0VBQ0ksV0FBQTtFQUNBLGtEQUFBO0VBQ0EsMEJBQUE7QUNtVVI7O0FEdFVJO0VBQ0ksV0FBQTtFQUNBLGtEQUFBO0VBQ0EsMEJBQUE7QUN5VVI7O0FENVVJO0VBQ0ksV0FBQTtFQUNBLHdEQUFBO0VBQ0EsMEJBQUE7QUMrVVI7O0FEbFZJO0VBQ0ksV0FBQTtFQUNBLHVEQUFBO0VBQ0EsMEJBQUE7QUNxVlI7O0FEeFZJO0VBQ0ksV0FBQTtFQUNBLGtEQUFBO0VBQ0EsMEJBQUE7QUMyVlI7O0FEOVZJO0VBQ0ksV0FBQTtFQUNBLHdEQUFBO0VBQ0EsMEJBQUE7QUNpV1I7O0FEcFdJO0VBQ0ksV0FBQTtFQUNBLHNEQUFBO0VBQ0EsMEJBQUE7QUN1V1I7O0FEMVdJO0VBQ0ksV0FBQTtFQUNBLHFEQUFBO0VBQ0EsMEJBQUE7QUM2V1I7O0FEaFhJO0VBQ0ksV0FBQTtFQUNBLHlEQUFBO0VBQ0EsMEJBQUE7QUNtWFI7O0FEdFhJO0VBQ0ksV0FBQTtFQUNBLHlEQUFBO0VBQ0EsMEJBQUE7QUN5WFI7O0FENVhJO0VBQ0ksV0FBQTtFQUNBLHdEQUFBO0VBQ0EsMEJBQUE7QUMrWFI7O0FEbFlJO0VBQ0ksV0FBQTtFQUNBLHlEQUFBO0VBQ0EsMEJBQUE7QUNxWVI7O0FEeFlJO0VBQ0ksV0FBQTtFQUNBLDBEQUFBO0VBQ0EsMEJBQUE7QUMyWVI7O0FEOVlJO0VBQ0ksV0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7QUNpWlI7O0FEcFpJO0VBQ0ksV0FBQTtFQUNBLG9EQUFBO0VBQ0EsMEJBQUE7QUN1WlI7O0FEMVpJO0VBQ0ksV0FBQTtFQUNBLHFEQUFBO0VBQ0EsMEJBQUE7QUM2WlI7O0FEaGFJO0VBQ0ksV0FBQTtFQUNBLG9EQUFBO0VBQ0EsMEJBQUE7QUNtYVI7O0FEdGFJO0VBQ0ksV0FBQTtFQUNBLG9EQUFBO0VBQ0EsMEJBQUE7QUN5YVI7O0FENWFJO0VBQ0ksV0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7QUMrYVI7O0FEbGJJO0VBQ0ksV0FBQTtFQUNBLG9EQUFBO0VBQ0EsMEJBQUE7QUNxYlI7O0FEeGJJO0VBQ0ksV0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7QUMyYlI7O0FEOWJJO0VBQ0ksV0FBQTtFQUNBLHVEQUFBO0VBQ0EsMEJBQUE7QUNpY1I7O0FEcGNJO0VBQ0ksV0FBQTtFQUNBLHFEQUFBO0VBQ0EsMEJBQUE7QUN1Y1I7O0FEMWNJO0VBQ0ksV0FBQTtFQUNBLG9EQUFBO0VBQ0EsMEJBQUE7QUM2Y1I7O0FEcmNJO0VBQ0ksV0FBQTtFQUNBLHFEQUFBO0VBQ0EsMEJBQUE7QUN3Y1I7O0FEM2NJO0VBQ0ksV0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7QUM4Y1I7O0FEamRJO0VBQ0ksV0FBQTtFQUNBLHNEQUFBO0VBQ0EsMEJBQUE7QUNvZFI7O0FEdmRJO0VBQ0ksV0FBQTtFQUNBLHVEQUFBO0VBQ0EsMEJBQUE7QUMwZFI7O0FEN2RJO0VBQ0ksV0FBQTtFQUNBLG9EQUFBO0VBQ0EsMEJBQUE7QUNnZVI7O0FEbmVJO0VBQ0ksV0FBQTtFQUNBLHNEQUFBO0VBQ0EsMEJBQUE7QUNzZVI7O0FEemVJO0VBQ0ksV0FBQTtFQUNBLHlEQUFBO0VBQ0EsMEJBQUE7QUM0ZVI7O0FEL2VJO0VBQ0ksV0FBQTtFQUNBLG9EQUFBO0VBQ0EsMEJBQUE7QUNrZlI7O0FEcmZJO0VBQ0ksV0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7QUN3ZlI7O0FEM2ZJO0VBQ0ksV0FBQTtFQUNBLHNEQUFBO0VBQ0EsMEJBQUE7QUM4ZlI7O0FEamdCSTtFQUNJLFdBQUE7RUFDQSwwREFBQTtFQUNBLDBCQUFBO0FDb2dCUjs7QUR2Z0JJO0VBQ0ksV0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7QUMwZ0JSOztBRDdnQkk7RUFDSSxXQUFBO0VBQ0Esb0RBQUE7RUFDQSwwQkFBQTtBQ2doQlIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC91bml0LWZvcm0vdW5pdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWhwLCAuaW5wdXQtY291bnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBmbGV4OiB1bnNldDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmlucHV0LWhwLWFycm93LCAuaW5wdXQtY291bnQtYXJyb3cge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udW5pdC1pbWFnZSB7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIG1hcmdpbjoge1xyXG4gICAgICB0b3A6IDVweDtcclxuICAgICAgYm90dG9tOiA1cHg7XHJcbiAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yYW5nZS1hcnJvd3MtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCB7XHJcbiAgICAuZGVmZW5kZXItdW5pdC1vcHRpb24sXHJcbiAgICAuZGVmZW5kZXItY2FycmllZC11bml0LW9wdGlvbixcclxuICAgIC5hdHRhY2tlci11bml0LW9wdGlvbixcclxuICAgIC5hdHRhY2tlci1jYXJyaWVkLXVuaXQtb3B0aW9uIHtcclxuICAgICAgICAuYWN0aW9uLXNoZWV0LWJ1dHRvbiAgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDsgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIE1ha2Ugc3VyZSBkZWZlbmRlclVuaXRzLCBhdHRhY2tlclVuaXRzLCBsYW5nVW5pdHMgbGlzdCBpcyBzeW5jIGluIGRhdGEvdW5pdC1saXN0LmNvbnN0LnRzIGluIHRlcm1zIG9mIG9yZGVyIGFuZCB1bml0c1xyXG4kZGVmZW5kZXJVbml0czogJ1dhcnJpb3InLCAnUmlkZXInLCAnRGVmZW5kZXInLCAnU3dvcmRzbWFuJywgJ0FyY2hlcicsICdDYXRhcHVsdCcsICdLbmlnaHQnLCAnR2lhbnQnLCAnQm9hdCcsICdTaGlwJywgJ0JhdHRsZXNoaXAnLCAnTWluZCBCZW5kZXInLCAnQW1waGliaWFuJywgJ0NyYWInLCAnVHJpZGVudGlvbicsICdQb2x5dGF1cicsICdOYXZhbG9uJywgJ0RyYWdvbiBFZ2cnLCAnQmFieSBEcmFnb24nLCAnRmlyZSBEcmFnb24nLCAnTW9vbmknLCAnSWNlIEFyY2hlcicsICdCYXR0bGUgU2xlZCcsICdJY2UgRm9ydHJlc3MnLCAnR2FhbWknLCAnU2hhbWFuJywgJ0hleGFwb2QnLCAnUGh5Y2hpJywgJ1JheWNoaScsICdLaXRvbicsICdEb29tdXgnLCAnRXhpZGEnLCAnQ2VudGlwZWRlJywgJ1NlZ21lbnQnLCAnTmF0dXJlIEJ1bm55JywgJ0RhZ2dlcicsICdDbG9haycsICdEaW5naHknO1xyXG4kaTogMjtcclxuQGVhY2ggJHVuaXQgaW4gJGRlZmVuZGVyVW5pdHMge1xyXG4gICAgOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoI3skaX0pIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9kZWZlbmRlcl91bml0cy8jeyR1bml0fS5wbmdcIik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcblxyXG4gICAgfVxyXG4gICAgJGk6ICRpICsgMTtcclxufVxyXG4kY2FycmllZFVuaXRzOiAnV2FycmlvcicsICdSaWRlcicsICdEZWZlbmRlcicsICdTd29yZHNtYW4nLCAnQXJjaGVyJywgJ0NhdGFwdWx0JywgJ01pbmQgQmVuZGVyJywgJ0tuaWdodCcsICdHaWFudCcsICdQb2x5dGF1cicsICdOYXR1cmUgQnVubnknLCAnQ2xvYWsnLCAnRGFnZ2VyJztcclxuJGk6IDI7XHJcbkBlYWNoICR1bml0IGluICRjYXJyaWVkVW5pdHMge1xyXG4gICAgOjpuZy1kZWVwIC5kZWZlbmRlci1jYXJyaWVkLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgjeyRpfSkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2RlZmVuZGVyX3VuaXRzLyN7JHVuaXR9LnBuZ1wiKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIH1cclxuICAgICRpOiAkaSArIDE7XHJcbn1cclxuXHJcbiRhdHRhY2tlclVuaXRzOiAnV2FycmlvcicsICdSaWRlcicsICdEZWZlbmRlcicsICdTd29yZHNtYW4nLCAnQXJjaGVyJywgJ0NhdGFwdWx0JywgJ0tuaWdodCcsICdHaWFudCcsICdCb2F0JywgJ1NoaXAnLCAnQmF0dGxlc2hpcCcsICdBbXBoaWJpYW4nLCAnQ3JhYicsICdUcmlkZW50aW9uJywgJ1BvbHl0YXVyJywgJ05hdmFsb24nLCAnQmFieSBEcmFnb24nLCAnRmlyZSBEcmFnb24nLCAnSWNlIEFyY2hlcicsICdCYXR0bGUgU2xlZCcsICdJY2UgRm9ydHJlc3MnLCAnR2FhbWknLCAnU2hhbWFuJywgJ0hleGFwb2QnLCAnUGh5Y2hpJywgJ1JheWNoaScsICdLaXRvbicsICdEb29tdXgnLCAnRXhpZGEnLCAnQ2VudGlwZWRlJywgJ1NlZ21lbnQnLCAnRGFnZ2VyJztcclxuJGk6IDI7XHJcbkBlYWNoICR1bml0IGluICRhdHRhY2tlclVuaXRzIHtcclxuICAgIDo6bmctZGVlcCAuYXR0YWNrZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKCN7JGl9KSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYXR0YWNrZXJfdW5pdHMvI3skdW5pdH0ucG5nXCIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgfVxyXG4gICAgJGk6ICRpICsgMTtcclxufVxyXG5cclxuJGNhcnJpZWRVbml0czogJ1dhcnJpb3InLCAnUmlkZXInLCAnRGVmZW5kZXInLCAnU3dvcmRzbWFuJywgJ0FyY2hlcicsICdDYXRhcHVsdCcsICdNaW5kIEJlbmRlcicsICdLbmlnaHQnLCAnR2lhbnQnLCAnUG9seXRhdXInLCAnTmF0dXJlIEJ1bm55JywgJ0Nsb2FrJywgJ0RhZ2dlcic7XHJcbiRpOiAyO1xyXG5AZWFjaCAkdW5pdCBpbiAkY2FycmllZFVuaXRzIHtcclxuICAgIDo6bmctZGVlcCAuYXR0YWNrZXItY2FycmllZC11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoI3skaX0pIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlcl91bml0cy8jeyR1bml0fS5wbmdcIik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICB9XHJcbiAgICAkaTogJGkgKyAxO1xyXG59XHJcbiIsIi5pbnB1dC1ocCwgLmlucHV0LWNvdW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIGZsZXg6IHVuc2V0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5pbnB1dC1ocC1hcnJvdywgLmlucHV0LWNvdW50LWFycm93IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udW5pdC1pbWFnZSB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnJhbmdlLWFycm93cy1jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUsXG46Om5nLWRlZXAgLmRlZmVuZGVyLWNhcnJpZWQtdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b24gLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlLFxuOjpuZy1kZWVwIC5hdHRhY2tlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUsXG46Om5nLWRlZXAgLmF0dGFja2VyLWNhcnJpZWQtdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b24gLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMikgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9kZWZlbmRlcl91bml0cy9XYXJyaW9yLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuZGVmZW5kZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDMpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXJfdW5pdHMvUmlkZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoNCkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9kZWZlbmRlcl91bml0cy9EZWZlbmRlci5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmRlZmVuZGVyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCg1KSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2RlZmVuZGVyX3VuaXRzL1N3b3Jkc21hbi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmRlZmVuZGVyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCg2KSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2RlZmVuZGVyX3VuaXRzL0FyY2hlci5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmRlZmVuZGVyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCg3KSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2RlZmVuZGVyX3VuaXRzL0NhdGFwdWx0LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuZGVmZW5kZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDgpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXJfdW5pdHMvS25pZ2h0LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuZGVmZW5kZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDkpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXJfdW5pdHMvR2lhbnQucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMTApIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXJfdW5pdHMvQm9hdC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmRlZmVuZGVyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgxMSkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9kZWZlbmRlcl91bml0cy9TaGlwLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuZGVmZW5kZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDEyKSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2RlZmVuZGVyX3VuaXRzL0JhdHRsZXNoaXAucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMTMpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXJfdW5pdHMvTWluZCBCZW5kZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMTQpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXJfdW5pdHMvQW1waGliaWFuLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuZGVmZW5kZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDE1KSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2RlZmVuZGVyX3VuaXRzL0NyYWIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMTYpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXJfdW5pdHMvVHJpZGVudGlvbi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmRlZmVuZGVyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgxNykgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9kZWZlbmRlcl91bml0cy9Qb2x5dGF1ci5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmRlZmVuZGVyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgxOCkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9kZWZlbmRlcl91bml0cy9OYXZhbG9uLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuZGVmZW5kZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDE5KSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2RlZmVuZGVyX3VuaXRzL0RyYWdvbiBFZ2cucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMjApIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXJfdW5pdHMvQmFieSBEcmFnb24ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMjEpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXJfdW5pdHMvRmlyZSBEcmFnb24ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMjIpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXJfdW5pdHMvTW9vbmkucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMjMpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXJfdW5pdHMvSWNlIEFyY2hlci5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmRlZmVuZGVyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgyNCkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9kZWZlbmRlcl91bml0cy9CYXR0bGUgU2xlZC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmRlZmVuZGVyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgyNSkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9kZWZlbmRlcl91bml0cy9JY2UgRm9ydHJlc3MucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMjYpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXJfdW5pdHMvR2FhbWkucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMjcpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXJfdW5pdHMvU2hhbWFuLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuZGVmZW5kZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDI4KSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2RlZmVuZGVyX3VuaXRzL0hleGFwb2QucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMjkpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXJfdW5pdHMvUGh5Y2hpLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuZGVmZW5kZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDMwKSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2RlZmVuZGVyX3VuaXRzL1JheWNoaS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmRlZmVuZGVyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgzMSkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9kZWZlbmRlcl91bml0cy9LaXRvbi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmRlZmVuZGVyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgzMikgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9kZWZlbmRlcl91bml0cy9Eb29tdXgucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMzMpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXJfdW5pdHMvRXhpZGEucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMzQpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXJfdW5pdHMvQ2VudGlwZWRlLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuZGVmZW5kZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDM1KSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2RlZmVuZGVyX3VuaXRzL1NlZ21lbnQucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMzYpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXJfdW5pdHMvTmF0dXJlIEJ1bm55LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuZGVmZW5kZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDM3KSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2RlZmVuZGVyX3VuaXRzL0RhZ2dlci5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmRlZmVuZGVyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgzOCkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9kZWZlbmRlcl91bml0cy9DbG9hay5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmRlZmVuZGVyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgzOSkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9kZWZlbmRlcl91bml0cy9EaW5naHkucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci1jYXJyaWVkLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgyKSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2RlZmVuZGVyX3VuaXRzL1dhcnJpb3IucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci1jYXJyaWVkLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgzKSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2RlZmVuZGVyX3VuaXRzL1JpZGVyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuZGVmZW5kZXItY2FycmllZC11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoNCkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9kZWZlbmRlcl91bml0cy9EZWZlbmRlci5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmRlZmVuZGVyLWNhcnJpZWQtdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDUpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXJfdW5pdHMvU3dvcmRzbWFuLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuZGVmZW5kZXItY2FycmllZC11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoNikgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9kZWZlbmRlcl91bml0cy9BcmNoZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci1jYXJyaWVkLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCg3KSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2RlZmVuZGVyX3VuaXRzL0NhdGFwdWx0LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuZGVmZW5kZXItY2FycmllZC11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoOCkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9kZWZlbmRlcl91bml0cy9NaW5kIEJlbmRlci5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmRlZmVuZGVyLWNhcnJpZWQtdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDkpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXJfdW5pdHMvS25pZ2h0LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuZGVmZW5kZXItY2FycmllZC11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMTApIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXJfdW5pdHMvR2lhbnQucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5kZWZlbmRlci1jYXJyaWVkLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgxMSkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9kZWZlbmRlcl91bml0cy9Qb2x5dGF1ci5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmRlZmVuZGVyLWNhcnJpZWQtdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDEyKSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2RlZmVuZGVyX3VuaXRzL05hdHVyZSBCdW5ueS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmRlZmVuZGVyLWNhcnJpZWQtdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDEzKSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2RlZmVuZGVyX3VuaXRzL0Nsb2FrLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuZGVmZW5kZXItY2FycmllZC11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMTQpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXJfdW5pdHMvRGFnZ2VyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuYXR0YWNrZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDIpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYXR0YWNrZXJfdW5pdHMvV2Fycmlvci5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmF0dGFja2VyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgzKSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2F0dGFja2VyX3VuaXRzL1JpZGVyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuYXR0YWNrZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDQpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYXR0YWNrZXJfdW5pdHMvRGVmZW5kZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5hdHRhY2tlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoNSkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlcl91bml0cy9Td29yZHNtYW4ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5hdHRhY2tlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoNikgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlcl91bml0cy9BcmNoZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5hdHRhY2tlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoNykgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlcl91bml0cy9DYXRhcHVsdC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmF0dGFja2VyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCg4KSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2F0dGFja2VyX3VuaXRzL0tuaWdodC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmF0dGFja2VyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCg5KSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2F0dGFja2VyX3VuaXRzL0dpYW50LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuYXR0YWNrZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDEwKSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2F0dGFja2VyX3VuaXRzL0JvYXQucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5hdHRhY2tlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMTEpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYXR0YWNrZXJfdW5pdHMvU2hpcC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmF0dGFja2VyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgxMikgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlcl91bml0cy9CYXR0bGVzaGlwLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuYXR0YWNrZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDEzKSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2F0dGFja2VyX3VuaXRzL0FtcGhpYmlhbi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmF0dGFja2VyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgxNCkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlcl91bml0cy9DcmFiLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuYXR0YWNrZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDE1KSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2F0dGFja2VyX3VuaXRzL1RyaWRlbnRpb24ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5hdHRhY2tlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMTYpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYXR0YWNrZXJfdW5pdHMvUG9seXRhdXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5hdHRhY2tlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMTcpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYXR0YWNrZXJfdW5pdHMvTmF2YWxvbi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmF0dGFja2VyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgxOCkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlcl91bml0cy9CYWJ5IERyYWdvbi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmF0dGFja2VyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgxOSkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlcl91bml0cy9GaXJlIERyYWdvbi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmF0dGFja2VyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgyMCkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlcl91bml0cy9JY2UgQXJjaGVyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuYXR0YWNrZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDIxKSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2F0dGFja2VyX3VuaXRzL0JhdHRsZSBTbGVkLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuYXR0YWNrZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDIyKSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2F0dGFja2VyX3VuaXRzL0ljZSBGb3J0cmVzcy5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmF0dGFja2VyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgyMykgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlcl91bml0cy9HYWFtaS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmF0dGFja2VyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgyNCkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlcl91bml0cy9TaGFtYW4ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5hdHRhY2tlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMjUpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYXR0YWNrZXJfdW5pdHMvSGV4YXBvZC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmF0dGFja2VyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgyNikgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlcl91bml0cy9QaHljaGkucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5hdHRhY2tlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMjcpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYXR0YWNrZXJfdW5pdHMvUmF5Y2hpLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuYXR0YWNrZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDI4KSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2F0dGFja2VyX3VuaXRzL0tpdG9uLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuYXR0YWNrZXItdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDI5KSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2F0dGFja2VyX3VuaXRzL0Rvb211eC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmF0dGFja2VyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgzMCkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlcl91bml0cy9FeGlkYS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmF0dGFja2VyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgzMSkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlcl91bml0cy9DZW50aXBlZGUucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5hdHRhY2tlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMzIpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYXR0YWNrZXJfdW5pdHMvU2VnbWVudC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmF0dGFja2VyLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgzMykgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlcl91bml0cy9EYWdnZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5hdHRhY2tlci1jYXJyaWVkLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgyKSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2F0dGFja2VyX3VuaXRzL1dhcnJpb3IucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5hdHRhY2tlci1jYXJyaWVkLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgzKSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2F0dGFja2VyX3VuaXRzL1JpZGVyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuYXR0YWNrZXItY2FycmllZC11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoNCkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlcl91bml0cy9EZWZlbmRlci5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmF0dGFja2VyLWNhcnJpZWQtdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDUpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYXR0YWNrZXJfdW5pdHMvU3dvcmRzbWFuLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuYXR0YWNrZXItY2FycmllZC11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoNikgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlcl91bml0cy9BcmNoZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5hdHRhY2tlci1jYXJyaWVkLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCg3KSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2F0dGFja2VyX3VuaXRzL0NhdGFwdWx0LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuYXR0YWNrZXItY2FycmllZC11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoOCkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlcl91bml0cy9NaW5kIEJlbmRlci5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmF0dGFja2VyLWNhcnJpZWQtdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDkpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYXR0YWNrZXJfdW5pdHMvS25pZ2h0LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuYXR0YWNrZXItY2FycmllZC11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMTApIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYXR0YWNrZXJfdW5pdHMvR2lhbnQucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5hdHRhY2tlci1jYXJyaWVkLXVuaXQtb3B0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uOm50aC1jaGlsZCgxMSkgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlcl91bml0cy9Qb2x5dGF1ci5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmF0dGFja2VyLWNhcnJpZWQtdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDEyKSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2F0dGFja2VyX3VuaXRzL05hdHVyZSBCdW5ueS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmF0dGFja2VyLWNhcnJpZWQtdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKDEzKSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2F0dGFja2VyX3VuaXRzL0Nsb2FrLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbjo6bmctZGVlcCAuYXR0YWNrZXItY2FycmllZC11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoMTQpIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYXR0YWNrZXJfdW5pdHMvRGFnZ2VyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59Il19 */");

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
            hpInput.reset(_this.maxHp, { emitEvent: false });
            if (_this.isDefenderForm) {
                _this.form.get('isPoisoned').reset(false, { emitEvent: false });
            }
            else {
                _this.form.get('isBoosted').reset(false, { emitEvent: false });
            }
            _this.form.get('isVeteran') && _this.form.get('isVeteran').reset(false, { emitEvent: false });
            _this.form.get('withDefenseBonus') && _this.form.get('withDefenseBonus').reset(false, { emitEvent: false });
            _this.form.get('withWallBonus') && _this.form.get('withWallBonus').reset(false, { emitEvent: false });
            _this.form.updateValueAndValidity();
        });
        if (isAttackerFormType) {
            this.form.get('unit').valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.onDestroy$))
                .subscribe(function (unit) {
                if (_data_unit_list_const__WEBPACK_IMPORTED_MODULE_8__["longRangeUnits"].includes(unit)) {
                    _this.form.get('freeFromRetaliation').setValue(true);
                }
                else {
                    _this.form.get('freeFromRetaliation').setValue(false);
                }
            });
        }
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
    Object.defineProperty(UnitFormComponent.prototype, "isPoisoned", {
        get: function () {
            return this.form.get('isPoisoned').value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UnitFormComponent.prototype, "hasDefenseBonus", {
        get: function () {
            return _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_9__["unitStats"][this.selectedUnit].defenseBonus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UnitFormComponent.prototype, "hasWallDefenseBonus", {
        get: function () {
            return _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_9__["unitStats"][this.selectedUnit].wallBonus;
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
        var hpInput = this.form.get('hp');
        var curValue = hpInput.value || 0;
        if (curValue > 0) {
            hpInput.setValue(parseInt(curValue, 10) - 1);
            hpInput.updateValueAndValidity();
            // (await this.hpInputComponent.getInputElement()).focus();
        }
    };
    UnitFormComponent.prototype.increaseHp = function () {
        var hpInput = this.form.get('hp');
        var curValue = hpInput.value || 0;
        hpInput.setValue(parseInt(curValue, 10) + 1);
        hpInput.updateValueAndValidity();
        // (await this.hpInputComponent.getInputElement()).focus();
    };
    UnitFormComponent.prototype.decreaseSpawnCount = function () {
        var countInput = this.form.get('spawnCount');
        var curValue = countInput.value || 0;
        if (curValue > 0) {
            countInput.setValue(parseInt(curValue, 10) - 1);
            countInput.updateValueAndValidity();
            // (await this.countInputComponent.getInputElement()).focus();
        }
    };
    UnitFormComponent.prototype.increaseSpawnCount = function () {
        var countInput = this.form.get('spawnCount');
        var curValue = countInput.value || 0;
        countInput.setValue(parseInt(curValue, 10) + 1);
        countInput.updateValueAndValidity();
        // (await this.countInputComponent.getInputElement()).focus();
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