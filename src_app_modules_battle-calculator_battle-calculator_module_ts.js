"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_battle-calculator_battle-calculator_module_ts"],{

/***/ 1423:
/*!**************************************!*\
  !*** ./src/app/data/donors.const.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "donors": () => (/* binding */ donors)
/* harmony export */ });
const donors = [
    "Dane Šoba",
    "Bret Snow",
    "Jason Flick",
    "Arthur Lejars",
    "Luca Accomazzi",
    "Spencer Renfro"
];


/***/ }),

/***/ 2220:
/*!******************************************!*\
  !*** ./src/app/data/unit-codes.const.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "carryUnitCodes": () => (/* binding */ carryUnitCodes),
/* harmony export */   "modifierCodes": () => (/* binding */ modifierCodes),
/* harmony export */   "unitCodes": () => (/* binding */ unitCodes)
/* harmony export */ });
const unitCodes = {
    wa: 'Warrior',
    ri: 'Rider',
    ar: 'Archer',
    de: 'Defender',
    kn: 'Knight',
    ok: 'Old Knight',
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
    ko: 'Old Kiton',
    ph: 'Phychi',
    ex: 'Exida',
    ra: 'Raychi',
    do: 'Doomux',
    ce: 'Centipede',
    se: 'Segment',
    da: 'Dagger',
    cl: 'Cloak'
};
const carryUnitCodes = {
    bo: 'Boat',
    sh: 'Ship',
    bs: 'Battleship',
};
const modifierCodes = {
    p: 'Poisoned',
    b: 'Boosted',
    // x: 'Exploding',
    v: 'Veteran',
    nr: 'No Retaliation',
    d: '1.5x Def bonus ',
    w: '4x Def bonus (City Wall)',
};


/***/ }),

/***/ 7868:
/*!*******************************************!*\
  !*** ./src/app/models/unit-data.model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitFormType": () => (/* binding */ UnitFormType)
/* harmony export */ });
var UnitFormType;
(function (UnitFormType) {
    UnitFormType["ATTACKER"] = "attacker";
    UnitFormType["DEFENDER"] = "defender";
})(UnitFormType || (UnitFormType = {}));


/***/ }),

/***/ 7269:
/*!********************************************************************!*\
  !*** ./src/app/modules/battle-calculator/about/about.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _data_donors_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/donors.const */ 1423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _shared_donate_button_donate_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/donate-button/donate-button.component */ 9169);







function AboutComponent_ion_item_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item")(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const donor_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](donor_r1);
} }
class AboutComponent {
    constructor(http) {
        this.http = http;
        this.donors = _data_donors_const__WEBPACK_IMPORTED_MODULE_0__.donors;
    }
    ngOnInit() {
        this.http.get('https://api.jsonbin.io/v3/b/63579d340e6a79321e33d0c6', {
            headers: {
                'X-Access-key': '$2b$10$nQOf93Atg5wJAhGNNjQzxeMgVzWw9dGRn59AZUVGdk7D/sAsojGii'
            }
        }).subscribe((data) => {
            if (data?.record) {
                this.donors = data.record;
            }
        });
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 24, vars: 1, consts: [["name", "heart", 2, "color", "red"], [1, "donors-list"], ["lines", "none"], [4, "ngFor", "ngForOf"], ["href", "https://discordapp.com/users/692361022190780436"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Thanks for donating ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1)(5, "ion-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AboutComponent_ion_item_6_Template, 3, 1, "ion-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Creator");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-list", 2)(11, "ion-item")(12, "ion-label")(13, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "NarelTheDev");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-note");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Calculation logic updated as of v2.2.9.8251 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " of the actual game \"The Battle of Polytopia\".");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "br")(21, "br")(22, "app-donate-button")(23, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.donors);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _shared_donate_button_donate_button_component__WEBPACK_IMPORTED_MODULE_1__.DonateButtonComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\nion-title[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.donors-list[_ngcontent-%COMP%] {\n  max-height: 256px;\n  overflow-y: auto;\n}\n\n.donors-list[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-block: 0;\n}\n\n.donors-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]::part(native) {\n  min-height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtBQUFKIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5kb25vcnMtbGlzdCB7XHJcbiAgbWF4LWhlaWdodDoyNTZweDtcclxuICBvdmVyZmxvdy15OmF1dG87XHJcblxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBtYXJnaW4tYmxvY2s6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pdGVtOjpwYXJ0KG5hdGl2ZSkge1xyXG4gICAgbWluLWhlaWdodDogNDBweDtcclxuICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 3904:
/*!***********************************************************************!*\
  !*** ./src/app/modules/battle-calculator/battle-calculator.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BattleCalculatorPageModule": () => (/* binding */ BattleCalculatorPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _battle_calculator_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battle-calculator.page */ 8500);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 2271);
/* harmony import */ var _one_on_one_one_one_one_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./one-on-one/one-one-one.component */ 6432);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _battle_battle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./battle/battle.component */ 2230);
/* harmony import */ var _br_modal_br_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./br-modal/br-modal.component */ 8022);
/* harmony import */ var _code_code_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code/code.component */ 7151);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ 7269);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);














class BattleCalculatorPageModule {
}
BattleCalculatorPageModule.ɵfac = function BattleCalculatorPageModule_Factory(t) { return new (t || BattleCalculatorPageModule)(); };
BattleCalculatorPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: BattleCalculatorPageModule });
BattleCalculatorPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild([
            {
                path: '',
                component: _battle_calculator_page__WEBPACK_IMPORTED_MODULE_0__.BattleCalculatorPage
            }
        ])] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](BattleCalculatorPageModule, { declarations: [_battle_calculator_page__WEBPACK_IMPORTED_MODULE_0__.BattleCalculatorPage, _one_on_one_one_one_one_component__WEBPACK_IMPORTED_MODULE_2__.OneOnOneComponent, _battle_battle_component__WEBPACK_IMPORTED_MODULE_3__.BattleComponent, _br_modal_br_modal_component__WEBPACK_IMPORTED_MODULE_4__.BrModalComponent, _code_code_component__WEBPACK_IMPORTED_MODULE_5__.CodeComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_6__.AboutComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule] }); })();


/***/ }),

/***/ 8500:
/*!*********************************************************************!*\
  !*** ./src/app/modules/battle-calculator/battle-calculator.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BattleCalculatorPage": () => (/* binding */ BattleCalculatorPage)
/* harmony export */ });
/* harmony import */ var D_Coding_Personal_projects_polytopia_calculator_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _battle_battle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./battle/battle.component */ 2230);
/* harmony import */ var _br_modal_br_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./br-modal/br-modal.component */ 8022);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_battle_result_mini_battle_result_mini_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/battle-result-mini/battle-result-mini.component */ 8683);
/* harmony import */ var _one_on_one_one_one_one_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./one-on-one/one-one-one.component */ 6432);
/* harmony import */ var _code_code_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code/code.component */ 7151);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ 7269);













const _c0 = ["ionContent"];
const _c1 = ["ionSlides"];
const _c2 = ["ionSegment"];
const _c3 = ["battle"];

function BattleCalculatorPage_ion_footer_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-footer")(1, "app-battle-result-mini", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("touchstart", function BattleCalculatorPage_ion_footer_29_Template_app_battle_result_mini_touchstart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](!ctx_r5.isExecutingBattleMatches && ctx_r5.showBattleResultModal($event));
    })("mousedown", function BattleCalculatorPage_ion_footer_29_Template_app_battle_result_mini_mousedown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](!ctx_r7.isExecutingBattleMatches && ctx_r7.showBattleResultModal($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isInvalid", ctx_r4.resultData.isInvalid)("isExecutingBattleMatches", ctx_r4.isExecutingBattleMatches)("battleResultStatistics", ctx_r4.resultData.battleResultStatistics);
  }
}

class BattleCalculatorPage {
  constructor(cdr, modalController, elRef) {
    this.cdr = cdr;
    this.modalController = modalController;
    this.elRef = elRef; // onTop = true;

    this.activeSlideIndex = parseInt(localStorage.getItem('activeSlideIndex')) || 0; // isContentScrollable = false;

    this.slideOpts = {
      allowTouchMove: false,
      autoHeight: true
    };
  }

  ngOnInit() {}

  ngAfterViewInit() {// await this.checkIfScrollable();
  }

  onOneOnOneChange(data) {
    this.oneOnOneData = data; // this.cdr.detectChanges();
    // await this.checkIfScrollable();
  }

  onBattleChange(data) {
    this.battleData = data; // this.cdr.detectChanges();
    // await this.checkIfScrollable();
  }

  onCodeChange(data) {
    this.codeData = data; // this.cdr.detectChanges();
    // await this.checkIfScrollable();
  }

  scrollToBattleResult() {
    if (this.isOneOnOne) {
      this.ionContent.scrollToBottom(100);
    } else {
      const battleResultEl = this.elRef.nativeElement.querySelector('app-battle .optimal-result-block');
      battleResultEl && battleResultEl.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  }

  get isExecutingBattleMatches() {
    if (this.isOneOnOne) {
      return false;
    } else {
      return this.battleComponent.isExecutingBattleMatches;
    }
  }

  get isOneOnOne() {
    return this.activeSlideIndex === 1;
  }

  get isBattle() {
    return this.activeSlideIndex === 2;
  }

  get isCode() {
    return this.activeSlideIndex === 0;
  }

  get resultData() {
    if (this.isOneOnOne) {
      return this.oneOnOneData || {};
    } else if (this.isBattle) {
      return this.battleData || {};
    } else if (this.isCode) {
      return this.codeData || {};
    } else {
      return {};
    }
  } // async checkIfScrollable() {
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


  onSlideChange() {
    var _this = this;

    return (0,D_Coding_Personal_projects_polytopia_calculator_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.activeSlideIndex = yield _this.ionSlides.getActiveIndex();
      localStorage.setItem('activeSlideIndex', _this.activeSlideIndex + '');
    })();
  } // hasOneOnOneResult() {
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


  showBattleResultModal(event) {
    var _this2 = this;

    return (0,D_Coding_Personal_projects_polytopia_calculator_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      event.preventDefault();
      event.stopPropagation();

      if (_this2.isShowingModalInProgress || _this2.resultData.isInvalid) {
        return;
      }

      _this2.isShowingModalInProgress = true;
      const data = _this2.resultData;

      if (!_this2.isOneOnOne) {
        data.multi = true;
      }

      _this2.modal = yield _this2.modalController.create({
        component: _br_modal_br_modal_component__WEBPACK_IMPORTED_MODULE_2__.BrModalComponent,
        cssClass: 'br-modal',
        mode: 'ios',
        componentProps: data,
        swipeToClose: true,
        showBackdrop: true,
        backdropDismiss: true
      });
      yield _this2.modal.present();
      _this2.isShowingModalInProgress = false;
    })();
  }

  onSegmentChange(event) {
    this.ionSlides.slideTo(event.detail.value);
  }

}

BattleCalculatorPage.ɵfac = function BattleCalculatorPage_Factory(t) {
  return new (t || BattleCalculatorPage)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef));
};

BattleCalculatorPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: BattleCalculatorPage,
  selectors: [["app-battle-calculator"]],
  viewQuery: function BattleCalculatorPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c2, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c3, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.ionContent = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.ionSlides = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.ionSegment = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.battleComponent = _t.first);
    }
  },
  decls: 30,
  vars: 5,
  consts: [["slot", "start"], ["slot", "end", 1, "mode-toggle", 3, "value", "scrollable", "ionChange"], ["ionSegment", ""], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3", "layout", "label-hide"], ["name", "heart", 2, "color", "red"], [3, "scrollEvents"], ["ionContent", ""], [3, "options", "ionSlideWillChange"], ["ionSlides", ""], [3, "resultChange"], ["battle", ""], [4, "ngIf"], ["tappable", "", 1, "battle-result-sticky", 3, "isInvalid", "isExecutingBattleMatches", "battleResultStatistics", "touchstart", "mousedown"]],
  template: function BattleCalculatorPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Polytopia");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Calculator");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "ion-segment", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ionChange", function BattleCalculatorPage_Template_ion_segment_ionChange_6_listener($event) {
        return ctx.onSegmentChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "ion-segment-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " Code ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "ion-segment-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Simple ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "ion-segment-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, " Battle ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "ion-segment-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "ion-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "ion-content", 8, 9)(18, "ion-slides", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ionSlideWillChange", function BattleCalculatorPage_Template_ion_slides_ionSlideWillChange_18_listener() {
        return ctx.onSlideChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "ion-slide")(21, "app-code", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("resultChange", function BattleCalculatorPage_Template_app_code_resultChange_21_listener($event) {
        return ctx.onCodeChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "ion-slide")(23, "app-one-on-one", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("resultChange", function BattleCalculatorPage_Template_app_one_on_one_resultChange_23_listener($event) {
        return ctx.onOneOnOneChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "ion-slide")(25, "app-battle", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("resultChange", function BattleCalculatorPage_Template_app_battle_resultChange_25_listener($event) {
        return ctx.onBattleChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "ion-slide");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "app-about");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, BattleCalculatorPage_ion_footer_29_Template, 2, 3, "ion-footer", 14);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.activeSlideIndex)("scrollable", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("scrollEvents", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx.slideOpts);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.resultData.battleResults);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSlide, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSlides, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.SelectValueAccessor, _shared_battle_result_mini_battle_result_mini_component__WEBPACK_IMPORTED_MODULE_3__.BattleResultMiniComponent, _one_on_one_one_one_one_component__WEBPACK_IMPORTED_MODULE_4__.OneOnOneComponent, _battle_battle_component__WEBPACK_IMPORTED_MODULE_1__.BattleComponent, _code_code_component__WEBPACK_IMPORTED_MODULE_5__.CodeComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_6__.AboutComponent],
  styles: [".mode-toggle[_ngcontent-%COMP%] {\n  width: 360px;\n  margin: auto;\n}\n.mode-toggle[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  align-items: center;\n  --padding-start: 6px;\n  --padding-end: 6px;\n}\n.mode-toggle[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]::part(native) {\n  min-width: auto;\n}\nion-title[_ngcontent-%COMP%] {\n  color: #e47b0c;\n  font-size: 20px;\n  text-align: center;\n  padding-left: 16px;\n}\nion-title[_ngcontent-%COMP%]   br[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 500px) {\n  ion-title[_ngcontent-%COMP%] {\n    font-size: 18px;\n    text-align: left;\n    line-height: 100%;\n    padding-top: 5px;\n    padding-right: 8px;\n    padding-left: 10px;\n  }\n  ion-title[_ngcontent-%COMP%]   br[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.show-battle-result[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  margin-right: 5px;\n  opacity: 0.3;\n}\n.show-battle-result[_ngcontent-%COMP%]   .swords-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\nion-footer[_ngcontent-%COMP%]::before {\n  display: none;\n}\n.battle-result-sticky[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 0px 0px 2px #bbbbbb;\n  border: 1px solid #eaeaea;\n  background-color: white;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n@media (prefers-color-scheme: dark) {\n  .battle-result-sticky[_ngcontent-%COMP%] {\n    border: 1px solid #292929;\n    background-color: #292929;\n    border-top-left-radius: 15px;\n    border-top-right-radius: 15px;\n    color: var(--ion-text-color);\n  }\n}\n@media (min-width: 768px) {\n  .fab-scroll-toggle[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhdHRsZS1jYWxjdWxhdG9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBQUo7QUFFSTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUFSO0FBRUk7RUFDSSxlQUFBO0FBQVI7QUFJQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQURKO0FBRUk7RUFDSSxhQUFBO0FBQVI7QUFHSTtFQVRKO0lBVVEsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUFBTjtFQUVNO0lBQ0ksY0FBQTtFQUFWO0FBQ0Y7QUFVQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBUEo7QUFTSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBUFI7QUFZQTtFQUNJLGFBQUE7QUFUSjtBQVlBO0VBQ0ksV0FBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFUSjtBQVlBO0VBQ0k7SUFDSSx5QkFBQTtJQUNBLHlCQUFBO0lBQ0EsNEJBQUE7SUFDQSw2QkFBQTtJQUNBLDRCQUFBO0VBVE47QUFDRjtBQVlBO0VBQ0k7SUFDSSxhQUFBO0VBVk47QUFDRiIsImZpbGUiOiJiYXR0bGUtY2FsY3VsYXRvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1vZGUtdG9nZ2xlIHtcclxuICAgIHdpZHRoOiAzNjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA2cHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogNnB4O1xyXG4gICAgfVxyXG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uOjpwYXJ0KG5hdGl2ZSkge1xyXG4gICAgICAgIG1pbi13aWR0aDogYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZTQ3YjBjO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgYnIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cclxuICAgICAgICBiciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gLmZhYi1zY3JvbGwtdG9nZ2xlIHtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuLy8gICAgIG9wYWNpdHk6IDAuMztcclxuLy8gfVxyXG5cclxuLnNob3ctYmF0dGxlLXJlc3VsdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgXHJcbiAgICAuc3dvcmRzLWljb24ge1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgIH1cclxuICBcclxufVxyXG5cclxuaW9uLWZvb3Rlcjo6YmVmb3JlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5iYXR0bGUtcmVzdWx0LXN0aWNreSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4ICNiYmJiYmI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcclxuICAgIC5iYXR0bGUtcmVzdWx0LXN0aWNreSB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzI5MjkyOTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZmFiLXNjcm9sbC10b2dnbGUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9ICAgIFxyXG59Il19 */"]
});

/***/ }),

/***/ 2230:
/*!**********************************************************************!*\
  !*** ./src/app/modules/battle-calculator/battle/battle.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BattleComponent": () => (/* binding */ BattleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/unit-stats.const */ 6959);
/* harmony import */ var _services_google_analytics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/google-analytics.service */ 3135);
/* harmony import */ var _validators_carried_unit_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../validators/carried-unit.validator */ 8029);
/* harmony import */ var _validators_max_hp_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../validators/max-hp.validator */ 9058);
/* harmony import */ var _data_unit_list_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/unit-list.const */ 7575);
/* harmony import */ var _utils_execute_battle_matches_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/execute-battle-matches.util */ 6122);
/* harmony import */ var _models_unit_data_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/unit-data.model */ 7868);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _shared_unit_form_unit_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/unit-form/unit-form.component */ 6589);

















function BattleComponent_ng_container_6_ion_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item")(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BattleComponent_ng_container_6_ion_item_2_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11); const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r9.moveUp("attacker", i_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Move up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BattleComponent_ng_container_6_ion_item_2_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11); const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r12.moveDown("attacker", i_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " Move down ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const isFirst_r5 = ctx_r14.first;
    const isLast_r4 = ctx_r14.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("disabled", isFirst_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("disabled", isLast_r4);
} }
function BattleComponent_ng_container_6_ion_item_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BattleComponent_ng_container_6_ion_item_3_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17); const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r15.removeOffenseUnit(i_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function BattleComponent_ng_container_6_ion_item_divider_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-item-divider");
} }
function BattleComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-unit-form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, BattleComponent_ng_container_6_ion_item_2_Template, 7, 4, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, BattleComponent_ng_container_6_ion_item_3_Template, 2, 0, "ion-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, BattleComponent_ng_container_6_ion_item_divider_4_Template, 1, 0, "ion-item-divider", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.index;
    const isLast_r4 = ctx.last;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroupName", i_r3)("multi", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.attackerForms.length > 1 && !ctx_r0.battleForm.get("getOptimalResult").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.attackerForms.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !isLast_r4);
} }
function BattleComponent_ng_container_13_ion_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item")(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BattleComponent_ng_container_13_ion_item_2_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r27); const i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r25.moveUp("defender", i_r19)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Move up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BattleComponent_ng_container_13_ion_item_2_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r27); const i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r28.moveDown("defender", i_r19)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " Move down ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const isFirst_r21 = ctx_r30.first;
    const isLast_r20 = ctx_r30.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("disabled", isFirst_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("disabled", isLast_r20);
} }
function BattleComponent_ng_container_13_ion_item_3_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BattleComponent_ng_container_13_ion_item_3_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33); const i_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r31.removeDefenseUnit(i_r19)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function BattleComponent_ng_container_13_ion_item_divider_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ion-item-divider");
} }
function BattleComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-unit-form", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, BattleComponent_ng_container_13_ion_item_2_Template, 7, 4, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, BattleComponent_ng_container_13_ion_item_3_Template, 2, 0, "ion-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, BattleComponent_ng_container_13_ion_item_divider_4_Template, 1, 0, "ion-item-divider", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r19 = ctx.index;
    const isLast_r20 = ctx.last;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroupName", i_r19)("multi", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.defenderForms.length > 1 && !ctx_r1.battleForm.get("getOptimalResult").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.defenderForms.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !isLast_r20);
} }
class BattleComponent {
    constructor(fb, cdr, googleAnalytics) {
        this.fb = fb;
        this.cdr = cdr;
        this.googleAnalytics = googleAnalytics;
        this.attackerUnits = _data_unit_list_const__WEBPACK_IMPORTED_MODULE_4__.attackerUnits;
        this.defenderUnits = _data_unit_list_const__WEBPACK_IMPORTED_MODULE_4__.defenderUnits;
        this.landUnits = _data_unit_list_const__WEBPACK_IMPORTED_MODULE_4__.landUnits;
        this.resultChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        this.battleForm = this.fb.group({
            attackers: fb.array([this.createAttackerForm()]),
            defenders: fb.array([this.createDefenderForm()]),
            getOptimalResult: false
        });
        this.battleForm.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.startWith)(this.battleForm.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.onDestroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)(() => {
            this.isExecutingBattleMatches = true;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(() => this.showBattleResults()))
            .subscribe(({ battleResults = [], battleResultStatistics, isInvalid }) => {
            this.battleResults = battleResults;
            this.battleResultStatistics = battleResultStatistics;
            const showingOptimalResult = this.battleForm.get('getOptimalResult').value;
            this.resultChange.emit({ battleResults, battleResultStatistics, showingOptimalResult, isInvalid });
            this.isExecutingBattleMatches = false;
            this.cdr.detectChanges();
        });
    }
    get attackerForms() {
        return this.battleForm.get('attackers').controls;
    }
    get defenderForms() {
        return this.battleForm.get('defenders').controls;
    }
    createAttackerForm() {
        const attacker = this.attackerUnits[0];
        const attackerStat = _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_0__.unitStats[attacker];
        const carriedUnit = this.landUnits[0];
        return this.fb.group({
            unit: attacker,
            carriedUnit: carriedUnit,
            hp: [attackerStat.hp, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(0)]],
            isVeteran: false,
            freeFromRetaliation: false,
            isBoosted: false,
            spawnCount: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(1)]
        }, { validators: [_validators_max_hp_validator__WEBPACK_IMPORTED_MODULE_3__.maxHpValidator, _validators_carried_unit_validator__WEBPACK_IMPORTED_MODULE_2__.carriedUnitValidator] });
    }
    createDefenderForm() {
        const defender = this.defenderUnits[0];
        const defenderStat = _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_0__.unitStats[defender];
        const carriedUnit = this.landUnits[0];
        return this.fb.group({
            unit: defender,
            carriedUnit: carriedUnit,
            hp: [defenderStat.hp, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(0)]],
            isVeteran: false,
            withDefenseBonus: false,
            withWallBonus: false,
            isPoisoned: false,
            spawnCount: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(1)]
        }, { validators: [_validators_max_hp_validator__WEBPACK_IMPORTED_MODULE_3__.maxHpValidator, _validators_carried_unit_validator__WEBPACK_IMPORTED_MODULE_2__.carriedUnitValidator] });
    }
    addOffenseUnit() {
        this.battleForm.get('attackers').push(this.createAttackerForm());
    }
    addDefenseUnit() {
        this.battleForm.get('defenders').push(this.createDefenderForm());
    }
    removeOffenseUnit(i) {
        this.battleForm.get('attackers').removeAt(i);
    }
    removeDefenseUnit(i) {
        this.battleForm.get('defenders').removeAt(i);
    }
    move(unitFormType, currentIndex, shift) {
        const formArrayName = unitFormType === _models_unit_data_model__WEBPACK_IMPORTED_MODULE_6__.UnitFormType.ATTACKER ? 'attackers' : 'defenders';
        const formArray = this.battleForm.get(formArrayName);
        let newIndex = currentIndex + shift;
        if (newIndex === -1 || newIndex == formArray.length) {
            return;
        }
        const currentFormGroup = formArray.at(currentIndex);
        formArray.removeAt(currentIndex);
        formArray.insert(newIndex, currentFormGroup);
    }
    moveUp(unitFormType, currentIndex) {
        this.move(unitFormType, currentIndex, -1);
    }
    moveDown(unitFormType, currentIndex) {
        this.move(unitFormType, currentIndex, 1);
    }
    toggleGetOptimalResult() {
        const currentValue = this.battleForm.get('getOptimalResult').value;
        this.battleForm.get('getOptimalResult').setValue(!currentValue);
    }
    showBattleResults() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_16__.Observable((subscriber) => {
            if (!this.battleForm.valid) {
                subscriber.next({ isInvalid: true });
                subscriber.complete();
                return;
            }
            const attackers = this.getUnits('attackers');
            const defenders = this.getUnits('defenders');
            this.googleAnalytics.emitEvent('battle calculate', 'method', `${attackers.map(attacker => attacker.unit).join(', ')} vs ${defenders.map(defender => defender.unit).join(', ')}`, { attackers: attackers, defenders: defenders }, 1);
            const getOptimalResult = this.battleForm.get('getOptimalResult').value;
            if (typeof Worker !== 'undefined') {
                // Create a new
                const battleMatchesWorker = new Worker(__webpack_require__.tu(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("src_app_modules_battle-calculator_battle_battle_worker_ts"), __webpack_require__.b)), { type: undefined });
                battleMatchesWorker.onmessage = ({ data }) => {
                    subscriber.next(data);
                    subscriber.complete();
                    battleMatchesWorker.terminate();
                };
                battleMatchesWorker.postMessage({ attackers, defenders, getOptimalResult });
                return {
                    unsubscribe: () => {
                        subscriber.complete();
                        battleMatchesWorker.terminate();
                    }
                };
            }
            else {
                // Web Workers are not supported in this environment.
                // You should add a fallback so that your program still executes correctly.
                subscriber.next((0,_utils_execute_battle_matches_util__WEBPACK_IMPORTED_MODULE_5__.executeBattleMatches)(attackers, defenders, getOptimalResult));
                subscriber.complete();
            }
        });
    }
    getUnits(unitType) {
        const units = [];
        this.battleForm.get(unitType).value.forEach((unit) => {
            for (let i = 0; i < unit.spawnCount; i++) {
                units.push({ ...unit });
            }
        });
        return units;
    }
    ngOnInit() { }
    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}
BattleComponent.ɵfac = function BattleComponent_Factory(t) { return new (t || BattleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_google_analytics_service__WEBPACK_IMPORTED_MODULE_1__.GoogleAnalyticsService)); };
BattleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: BattleComponent, selectors: [["app-battle"]], outputs: { resultChange: "resultChange" }, decls: 23, vars: 3, consts: [[3, "formGroup"], [1, "two-column-wrapper"], ["formArrayName", "attackers", 4, "ngFor", "ngForOf"], ["color", "success", 3, "click"], ["src", "/assets/add-circle-outline.svg", 1, "add-icon"], ["formArrayName", "defenders", 4, "ngFor", "ngForOf"], [1, "optimal-result-block"], ["formControlName", "getOptimalResult"], [3, "click"], ["formArrayName", "attackers"], ["unitFormType", "attacker", 3, "formGroupName", "multi"], [4, "ngIf"], ["color", "danger", 3, "click", 4, "ngIf"], [1, "half-width", 3, "click"], ["name", "arrow-up-circle-outline", "size", "medium"], ["name", "arrow-down-circle-outline", "size", "medium"], ["color", "danger", 3, "click"], ["name", "trash-bin-outline", 1, "delete-icon"], ["formArrayName", "defenders"], ["unitFormType", "defender", 3, "formGroupName", "multi"], ["src", "/assets/trash-bin-outline.svg", 1, "delete-icon"]], template: function BattleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "ion-list")(3, "ion-item-divider")(4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Offense Units");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, BattleComponent_ng_container_6_Template, 5, 5, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ion-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BattleComponent_Template_ion_item_click_7_listener() { return ctx.addOffenseUnit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "ion-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "ion-list")(10, "ion-item-divider")(11, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Defense Units");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, BattleComponent_ng_container_13_Template, 5, 5, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "ion-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BattleComponent_Template_ion_item_click_14_listener() { return ctx.addDefenseUnit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "ion-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "ion-checkbox", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "ion-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BattleComponent_Template_ion_label_click_18_listener() { return ctx.toggleGetOptimalResult(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Get most optimal result");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "ion-note");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Note: Uncheck this if battle execution takes too long due to high number of units, unchecking this will then execute the moves in the order units are entered.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.battleForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.attackerForms);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.defenderForms);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonItemDivider, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.BooleanValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormArrayName, _shared_unit_form_unit_form_component__WEBPACK_IMPORTED_MODULE_7__.UnitFormComponent], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n}\n\nform[_ngcontent-%COMP%], .two-column-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.delete-icon[_ngcontent-%COMP%], .add-icon[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n}\n\n.half-width[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: center;\n  padding: 10px;\n}\n\n.half-width.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.half-width[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  display: inline-block;\n}\n\n.optimal-result-block[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-top: 20px;\n}\n\n.optimal-result-block[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-left: 6px;\n  font-size: 15px;\n  text-indent: 0;\n  display: inline-block;\n}\n\n.paypal-form[_ngcontent-%COMP%] {\n  display: block;\n}\n\nion-list[_ngcontent-%COMP%] {\n  padding: 0;\n  margin-top: 20px;\n}\n\napp-battle-result[_ngcontent-%COMP%] {\n  flex: 1;\n  display: block;\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n\nion-title[_ngcontent-%COMP%] {\n  color: var(--ion-text-color);\n}\n\n@media (min-width: 768px) {\n  .two-column-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: flex-start;\n  }\n  ion-list[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  ion-list[_ngcontent-%COMP%]:first-child {\n    margin: 20px 5px 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhdHRsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0k7RUFDSSxZQUFBO0FBQ1I7O0FBRUk7RUFDSSxzQkFBQTtFQUNBLHFCQUFBO0FBQVI7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBR0k7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQURSOztBQUtBO0VBQ0ksY0FBQTtBQUZKOztBQUtBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7RUFDSSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFNQTtFQUNJLDRCQUFBO0FBSEo7O0FBV0E7RUFLSTtJQUNJLGFBQUE7SUFDQSx1QkFBQTtFQVpOO0VBY0U7SUFDSSxPQUFBO0VBWk47RUFjTTtJQUNJLHFCQUFBO0VBWlY7QUFDRiIsImZpbGUiOiJiYXR0bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbiAgXHJcbmZvcm0sIC50d28tY29sdW1uLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5kZWxldGUtaWNvbiwgLmFkZC1pY29uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uaGFsZi13aWR0aCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgICBvcGFjaXR5OiAuNTtcclxuICAgIH1cclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5vcHRpbWFsLXJlc3VsdC1ibG9jayB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgICAmID4gKiB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB0ZXh0LWluZGVudDogMDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wYXlwYWwtZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuICBcclxuYXBwLWJhdHRsZS1yZXN1bHQge1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcclxufVxyXG5cclxuLy8gYmF0dGxlIHJlc3VsdCBpcyBzaG93biBhcyBtb2RhbCBpbiBzbWFsbCBzY3JlZW5zXHJcbi8vIGFwcC1iYXR0bGUtcmVzdWx0IHtcclxuLy8gICAgIGRpc3BsYXk6IG5vbmU7XHJcbi8vIH1cclxuICBcclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAvLyBhcHAtYmF0dGxlLXJlc3VsdCB7XHJcbiAgICAvLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLnR3by1jb2x1bW4td3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIH1cclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgICBmbGV4OiAxO1xyXG5cclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDVweCAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 8022:
/*!**************************************************************************!*\
  !*** ./src/app/modules/battle-calculator/br-modal/br-modal.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrModalComponent": () => (/* binding */ BrModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_battle_result_battle_result_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/battle-result/battle-result.component */ 9620);
/* harmony import */ var _shared_battle_result_mini_battle_result_mini_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/battle-result-mini/battle-result-mini.component */ 8683);
/* harmony import */ var _shared_donate_button_donate_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/donate-button/donate-button.component */ 9169);







function BrModalComponent_app_battle_result_mini_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-battle-result-mini", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("battleResultStatistics", ctx_r0.battleResultStatistics);
} }
function BrModalComponent_app_battle_result_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-battle-result", 4);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("multi", ctx_r1.multi)("battleResults", ctx_r1.battleResults)("battleResultStatistics", ctx_r1.battleResultStatistics)("showingOptimalResult", ctx_r1.showingOptimalResult);
} }
class BrModalComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    dismiss() {
        this.modalCtrl.dismiss();
    }
}
BrModalComponent.ɵfac = function BrModalComponent_Factory(t) { return new (t || BrModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController)); };
BrModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BrModalComponent, selectors: [["app-br-modal"]], inputs: { battleResults: "battleResults", battleResultStatistics: "battleResultStatistics", multi: "multi", showingOptimalResult: "showingOptimalResult" }, decls: 10, vars: 2, consts: [[3, "battleResultStatistics", 4, "ngIf"], [3, "multi", "battleResults", "battleResultStatistics", "showingOptimalResult", 4, "ngIf"], [1, "close-button", 3, "click"], [3, "battleResultStatistics"], [3, "multi", "battleResults", "battleResultStatistics", "showingOptimalResult"]], template: function BrModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BrModalComponent_app_battle_result_mini_1_Template, 1, 1, "app-battle-result-mini", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, BrModalComponent_app_battle_result_3_Template, 1, 4, "app-battle-result", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "br")(5, "br")(6, "app-donate-button")(7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BrModalComponent_Template_ion_button_click_8_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.battleResultStatistics);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.battleResults);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _shared_battle_result_battle_result_component__WEBPACK_IMPORTED_MODULE_0__.BattleResultComponent, _shared_battle_result_mini_battle_result_mini_component__WEBPACK_IMPORTED_MODULE_1__.BattleResultMiniComponent, _shared_donate_button_donate_button_component__WEBPACK_IMPORTED_MODULE_2__.DonateButtonComponent], styles: [".close-button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  right: 15px;\n  width: 150px;\n  text-align: center;\n  width: 100px;\n  padding: 6px;\n  --border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFBSiIsImZpbGUiOiJici1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG9zZS1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 7151:
/*!******************************************************************!*\
  !*** ./src/app/modules/battle-calculator/code/code.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeComponent": () => (/* binding */ CodeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var _data_unit_codes_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/unit-codes.const */ 2220);
/* harmony import */ var _data_unit_list_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/unit-list.const */ 7575);
/* harmony import */ var _utils_execute_battle_matches_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/execute-battle-matches.util */ 6122);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var src_app_utils_calculate_max_hp_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/calculate-max-hp.util */ 724);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 3819);














const _c0 = ["textareaHighlighter"];
function CodeComponent_ion_text_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-text", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
} }
function CodeComponent_ion_text_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-text", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Hit enter to set defender unit.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Format: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mark", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " hp\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mark", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "modifier");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function CodeComponent_ion_item_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item")(1, "mark");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unitCodes_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](unitCodes_r5[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", unitCodes_r5[1], "");
} }
function CodeComponent_ion_item_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item")(1, "mark", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const modifierCodes_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](modifierCodes_r6[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", modifierCodes_r6[1], "");
} }
class CodeComponent {
    constructor(fb, cdr, sanitizer) {
        this.fb = fb;
        this.cdr = cdr;
        this.sanitizer = sanitizer;
        this.resultChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.unitsByCode = Object.entries(_data_unit_codes_const__WEBPACK_IMPORTED_MODULE_0__.unitCodes).concat(Object.entries(_data_unit_codes_const__WEBPACK_IMPORTED_MODULE_0__.carryUnitCodes));
        this.modifiersByCode = Object.entries(_data_unit_codes_const__WEBPACK_IMPORTED_MODULE_0__.modifierCodes);
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    }
    ngOnInit() {
        this.codeForm = this.fb.group({
            code: '',
            getOptimalResult: false
        });
        this.codeForm.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(this.codeForm.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.onDestroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(() => this.showBattleResults()))
            .subscribe(({ battleResults = [], battleResultStatistics, isInvalid }) => {
            const showingOptimalResult = this.codeForm.get('getOptimalResult').value;
            this.resultChange.emit({ battleResults, battleResultStatistics, showingOptimalResult, isInvalid });
            this.cdr.detectChanges();
        });
        this.codeForm.get('code').valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.onDestroy$))
            .subscribe(val => {
            let highlightedText = val || '';
            Object.keys(_data_unit_codes_const__WEBPACK_IMPORTED_MODULE_0__.unitCodes).concat(Object.keys(_data_unit_codes_const__WEBPACK_IMPORTED_MODULE_0__.carryUnitCodes)).forEach(code => {
                highlightedText = highlightedText.replaceAll(`${code}`, `<xx>${code}</xx>`);
            });
            Object.keys(_data_unit_codes_const__WEBPACK_IMPORTED_MODULE_0__.modifierCodes).forEach(code => {
                highlightedText = highlightedText.replaceAll(` ${code}`, `<x> ${code}</x>`);
                highlightedText = highlightedText.replaceAll(`${code} `, `<x>${code} </x>`);
            });
            highlightedText = highlightedText.replaceAll(" ", '&nbsp;');
            highlightedText = highlightedText.replaceAll('<x>', '<mark class="modifier">');
            highlightedText = highlightedText.replaceAll('</x>', '</mark>');
            highlightedText = highlightedText.replaceAll('<xx>', '<mark class="unit">');
            highlightedText = highlightedText.replaceAll('</xx>', '</mark>');
            highlightedText = highlightedText.replaceAll("\n", '<br />');
            this.highlightedText = this.sanitizer.bypassSecurityTrustHtml(highlightedText);
        });
    }
    parseAttackers(codes) {
        const attackers = codes.map(code => {
            let unit, hp, carriedUnit, carryUnit;
            const codeParts = code.split(' ').map(c => c.trim());
            codeParts.forEach((str) => {
                if (_data_unit_codes_const__WEBPACK_IMPORTED_MODULE_0__.carryUnitCodes[str]) {
                    carryUnit = _data_unit_codes_const__WEBPACK_IMPORTED_MODULE_0__.carryUnitCodes[str];
                }
                const unitByCode = _data_unit_codes_const__WEBPACK_IMPORTED_MODULE_0__.unitCodes[str];
                if (unitByCode && _data_unit_list_const__WEBPACK_IMPORTED_MODULE_1__.attackerUnits.includes(unitByCode)) {
                    unit = unitByCode;
                }
                else if (unitByCode && !_data_unit_list_const__WEBPACK_IMPORTED_MODULE_1__.attackerUnits.includes(unitByCode)) {
                    this.errorMessage = `Attacker: ${unit} cannot be an attacker`;
                }
                if (Number.isInteger(parseInt(str))) {
                    hp = parseInt(str);
                }
            });
            const isVeteran = codeParts.includes('v');
            const isBoosted = codeParts.includes('b');
            const freeFromRetaliation = codeParts.includes('nr');
            if (carryUnit && !_data_unit_list_const__WEBPACK_IMPORTED_MODULE_1__.landUnits.includes(unit)) {
                this.errorMessage = `Attacker: ${carryUnit} cannot carry ${unit ? unit : 'nothing'}`;
                return null;
            }
            else if (carryUnit && _data_unit_list_const__WEBPACK_IMPORTED_MODULE_1__.landUnits.includes(unit)) {
                carriedUnit = unit;
                unit = carryUnit;
            }
            if (!unit || !hp) {
                return null;
            }
            const attacker = { unit, carriedUnit, hp, isVeteran, isBoosted, freeFromRetaliation };
            const maxHp = (0,src_app_utils_calculate_max_hp_util__WEBPACK_IMPORTED_MODULE_3__.calculateMaxHp)(attacker);
            if (hp > maxHp) {
                this.errorMessage = `Attacker: ${unit} exceeds max hp: ${maxHp}`;
                return null;
            }
            return attacker;
        });
        return attackers.filter(val => val !== null);
    }
    parseDefenders(codes) {
        const defenders = codes.map(code => {
            let unit, hp, carriedUnit, carryUnit;
            const codeParts = code.split(' ').map(c => c.trim());
            codeParts.forEach((str) => {
                if (_data_unit_codes_const__WEBPACK_IMPORTED_MODULE_0__.carryUnitCodes[str]) {
                    carryUnit = _data_unit_codes_const__WEBPACK_IMPORTED_MODULE_0__.carryUnitCodes[str];
                }
                const unitByCode = _data_unit_codes_const__WEBPACK_IMPORTED_MODULE_0__.unitCodes[str];
                if (unitByCode && _data_unit_list_const__WEBPACK_IMPORTED_MODULE_1__.defenderUnits.includes(unitByCode)) {
                    unit = unitByCode;
                }
                else if (unitByCode && !_data_unit_list_const__WEBPACK_IMPORTED_MODULE_1__.defenderUnits.includes(unitByCode)) {
                    this.errorMessage = `Defender: ${unit} cannot be a defender`;
                }
                if (Number.isInteger(parseInt(str))) {
                    hp = parseInt(str);
                }
            });
            const isVeteran = codeParts.includes('v');
            let withDefenseBonus;
            if (codeParts.includes('w')) {
                withDefenseBonus = 'withWall';
            }
            else if (codeParts.includes('d')) {
                withDefenseBonus = 'withoutWall';
            }
            const isPoisoned = codeParts.includes('p');
            if (carryUnit && !_data_unit_list_const__WEBPACK_IMPORTED_MODULE_1__.landUnits.includes(unit)) {
                this.errorMessage = `Defender: ${carryUnit} cannot carry ${unit ? unit : 'nothing'}`;
                return null;
            }
            else if (carryUnit && _data_unit_list_const__WEBPACK_IMPORTED_MODULE_1__.landUnits.includes(unit)) {
                carriedUnit = unit;
                unit = carryUnit;
            }
            if (!unit || !hp) {
                return null;
            }
            const defender = { unit, carriedUnit, hp, isVeteran, withDefenseBonus, isPoisoned, freeFromRetaliation: false };
            const maxHp = (0,src_app_utils_calculate_max_hp_util__WEBPACK_IMPORTED_MODULE_3__.calculateMaxHp)(defender);
            if (hp > maxHp) {
                this.errorMessage = `Defender: ${unit} exceeds max hp: ${maxHp}`;
                return null;
            }
            return defender;
        });
        return defenders.filter(val => val !== null);
    }
    showBattleResults() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_10__.Observable((subscriber) => {
            const code = this.codeForm.get('code').value || '';
            const [attackersCodeStr, defendersCodeStr] = code.split("\n");
            if (!attackersCodeStr || !defendersCodeStr) {
                subscriber.next({ isInvalid: true });
                subscriber.complete();
                return;
            }
            ;
            const attackers = this.parseAttackers(attackersCodeStr.split(','));
            const defenders = this.parseDefenders(defendersCodeStr.split(','));
            if (attackers.length <= 0 || defenders.length <= 0) {
                subscriber.next({ isInvalid: true });
                subscriber.complete();
                return;
            }
            ;
            this.errorMessage = '';
            // this.googleAnalytics.emitEvent(
            //   'battle calculate', 'method', `${attackers.map(attacker => attacker.unit).join(', ')} vs ${defenders.map(defender => defender.unit).join(', ')}`,
            //   { attackers: attackers, defenders: defenders }, 1);
            const getOptimalResult = this.codeForm.get('getOptimalResult').value;
            if (typeof Worker !== 'undefined') {
                // Create a new
                const battleMatchesWorker = new Worker(__webpack_require__.tu(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("src_app_modules_battle-calculator_code_battle_worker_ts"), __webpack_require__.b)), { type: undefined });
                battleMatchesWorker.onmessage = ({ data }) => {
                    subscriber.next(data);
                    subscriber.complete();
                    battleMatchesWorker.terminate();
                };
                battleMatchesWorker.postMessage({ attackers, defenders, getOptimalResult });
                return {
                    unsubscribe: () => {
                        subscriber.complete();
                        battleMatchesWorker.terminate();
                    }
                };
            }
            else {
                // Web Workers are not supported in this environment.
                // You should add a fallback so that your program still executes correctly.
                subscriber.next((0,_utils_execute_battle_matches_util__WEBPACK_IMPORTED_MODULE_2__.executeBattleMatches)(attackers, defenders, getOptimalResult));
                subscriber.complete();
            }
        });
    }
    toggleGetOptimalResult() {
        const currentValue = this.codeForm.get('getOptimalResult').value;
        this.codeForm.get('getOptimalResult').setValue(!currentValue);
    }
    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}
CodeComponent.ɵfac = function CodeComponent_Factory(t) { return new (t || CodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer)); };
CodeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CodeComponent, selectors: [["app-code"]], viewQuery: function CodeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.textAreaHighlighter = _t.first);
    } }, outputs: { resultChange: "resultChange" }, decls: 27, vars: 6, consts: [[3, "formGroup"], [1, "textarea-label"], ["formControlName", "code", "placeholder", "wa 10, he 5 b \n de 15"], [1, "textarea-highlighter", 3, "innerHTML"], ["textareaHighlighter", ""], ["color", "danger", "class", "invalid-text", 4, "ngIf"], ["color", "medium", "class", "code-instruction", 4, "ngIf"], [1, "two-column-wrapper"], [4, "ngFor", "ngForOf"], ["color", "danger", 1, "invalid-text"], ["name", "alert-circle-outline"], ["color", "medium", 1, "code-instruction"], ["name", "information-circle-outline"], [1, "unit"], [1, "modifier"]], template: function CodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0)(1, "ion-list")(2, "ion-item-divider")(3, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Type codes to calculate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-item-group")(6, "ion-item")(7, "ion-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Attacker: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Defender: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "ion-textarea", 2)(12, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, CodeComponent_ion_text_14_Template, 3, 1, "ion-text", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, CodeComponent_ion_text_15_Template, 10, 0, "ion-text", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 7)(17, "ion-list")(18, "ion-item-divider")(19, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Units");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, CodeComponent_ion_item_21_Template, 4, 2, "ion-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "ion-list")(23, "ion-item-divider")(24, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Modifiers");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, CodeComponent_ion_item_26_Template, 4, 2, "ion-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.codeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx.highlightedText, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.unitsByCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.modifiersByCode);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonItemDivider, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonTextarea, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n}\n\nion-list[_ngcontent-%COMP%] {\n  padding: 0;\n  margin-top: 20px;\n}\n\nion-title[_ngcontent-%COMP%] {\n  color: var(--ion-text-color);\n  margin-bottom: 12px;\n}\n\nion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: #666666;\n  color: var(--ion-color-step-600, #666666);\n}\n\n.optimal-result-block[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-top: 20px;\n}\n\n.optimal-result-block[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-left: 6px;\n  font-size: 15px;\n  text-indent: 0;\n  display: inline-block;\n}\n\n.invalid-text[_ngcontent-%COMP%] {\n  font-size: 15px;\n  display: inline-block;\n}\n\n.invalid-text[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.two-column-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n}\n\n.two-column-wrapper[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.two-column-wrapper[_ngcontent-%COMP%]   mark[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-success-tint);\n  padding: 0px 6px;\n  border-radius: 4px;\n  display: inline-block;\n  margin-right: 8px;\n}\n\n.two-column-wrapper[_ngcontent-%COMP%]   mark.modifier[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-primary-tint);\n}\n\n.textarea-label[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\nion-textarea[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 0;\n  font-size: 18px;\n}\n\n.code-instruction[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  position: relative;\n  top: 2px;\n}\n\n.code-instruction[_ngcontent-%COMP%], .invalid-text[_ngcontent-%COMP%] {\n  margin-block: 10px;\n  display: block;\n}\n\n[_nghost-%COMP%]     .textarea-highlighter {\n  position: absolute;\n  left: 84.9px;\n  top: 18px;\n  z-index: 1;\n  pointer-events: none;\n  font-size: 18px;\n}\n\n[_nghost-%COMP%]     .textarea-highlighter mark, [_nghost-%COMP%]     .code-instruction mark {\n  background: none;\n}\n\n[_nghost-%COMP%]     .textarea-highlighter mark.unit, [_nghost-%COMP%]     .code-instruction mark.unit {\n  color: var(--ion-color-success-tint);\n}\n\n[_nghost-%COMP%]     .textarea-highlighter mark.modifier, [_nghost-%COMP%]     .code-instruction mark.modifier {\n  color: var(--ion-color-primary-tint);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFBQSx5Q0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNFO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFDTjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUVFO0VBQ0ksc0JBQUE7QUFBTjs7QUFPRTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUpOOztBQUtNO0VBQ0ksT0FBQTtBQUhWOztBQU1NO0VBQ0UsK0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQUpSOztBQU1NO0VBQ0UsK0NBQUE7QUFKUjs7QUFPQTtFQUNFLGVBQUE7QUFKRjs7QUFNQTtFQUVFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBSkY7O0FBU0k7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQU5OOztBQVdNO0VBQ0UsZ0JBQUE7QUFUUjs7QUFVUTtFQUNFLG9DQUFBO0FBUlY7O0FBVVE7RUFDRSxvQ0FBQTtBQVJWIiwiZmlsZSI6ImNvZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuaW9uLWl0ZW0gaW9uLWxhYmVsIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjY2NjY2KVxyXG59XHJcblxyXG4ub3B0aW1hbC1yZXN1bHQtYmxvY2sge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgJiA+ICoge1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIHRleHQtaW5kZW50OiAwO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG4uaW52YWxpZC10ZXh0IHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4gIC50d28tY29sdW1uLXdyYXBwZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgaW9uLWxpc3Qge1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbWFyayB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludCk7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDZweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICB9XHJcbiAgICAgIG1hcmsubW9kaWZpZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQpO1xyXG4gICAgICB9XHJcbiAgfVxyXG4udGV4dGFyZWEtbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5pb24tdGV4dGFyZWEge1xyXG4gIC8vIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5jb2RlLWluc3RydWN0aW9uIGlvbi1pY29uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAycHg7XHJcbn1cclxuXHJcbi5jb2RlLWluc3RydWN0aW9uLCAuaW52YWxpZC10ZXh0IHtcclxuICBtYXJnaW4tYmxvY2s6IDEwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuOmhvc3Qge1xyXG5cclxuICA6Om5nLWRlZXAgIHtcclxuICAgIC50ZXh0YXJlYS1oaWdobGlnaHRlciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogODQuOXB4O1xyXG4gICAgICB0b3A6IDE4cHg7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHRhcmVhLWhpZ2hsaWdodGVyLCAuY29kZS1pbnN0cnVjdGlvbiB7XHJcblxyXG4gICAgICBtYXJrIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICYudW5pdCB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYubW9kaWZpZXIge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgICBcclxufSJdfQ== */"] });


/***/ }),

/***/ 6432:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/battle-calculator/one-on-one/one-one-one.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OneOnOneComponent": () => (/* binding */ OneOnOneComponent)
/* harmony export */ });
/* harmony import */ var D_Coding_Personal_projects_polytopia_calculator_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _data_unit_list_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/unit-list.const */ 7575);
/* harmony import */ var _validators_max_hp_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../validators/max-hp.validator */ 9058);
/* harmony import */ var _utils_calculate_damage_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/calculate-damage.util */ 2150);
/* harmony import */ var _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/unit-stats.const */ 6959);
/* harmony import */ var _validators_carried_unit_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../validators/carried-unit.validator */ 8029);
/* harmony import */ var _services_google_analytics_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/google-analytics.service */ 3135);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _shared_unit_form_unit_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/unit-form/unit-form.component */ 6589);
















class OneOnOneComponent {
  constructor(fb, googleAnalytics) {
    this.fb = fb;
    this.googleAnalytics = googleAnalytics;
    this.attackerUnits = _data_unit_list_const__WEBPACK_IMPORTED_MODULE_1__.attackerUnits;
    this.defenderUnits = _data_unit_list_const__WEBPACK_IMPORTED_MODULE_1__.defenderUnits;
    this.landUnits = _data_unit_list_const__WEBPACK_IMPORTED_MODULE_1__.landUnits;
    this.resultChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
  }

  ngOnInit() {
    const attacker = this.attackerUnits[0];
    const attackerStat = _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_4__.unitStats[attacker];
    const defender = this.defenderUnits[0];
    const defenderStat = _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_4__.unitStats[defender];
    const carriedUnit = this.landUnits[0];
    this.oneOnOneForm = this.fb.group({
      attacker: this.fb.group({
        unit: attacker,
        carriedUnit: carriedUnit,
        hp: [attackerStat.hp, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(0)]],
        isVeteran: false,
        isBoosted: false,
        freeFromRetaliation: false
      }, {
        validators: [_validators_max_hp_validator__WEBPACK_IMPORTED_MODULE_2__.maxHpValidator, _validators_carried_unit_validator__WEBPACK_IMPORTED_MODULE_5__.carriedUnitValidator]
      }),
      defender: this.fb.group({
        unit: defender,
        carriedUnit: carriedUnit,
        hp: [defenderStat.hp, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(0)]],
        isVeteran: false,
        isPoisoned: false,
        withDefenseBonus: false,
        withWallBonus: false
      }, {
        validators: [_validators_max_hp_validator__WEBPACK_IMPORTED_MODULE_2__.maxHpValidator, _validators_carried_unit_validator__WEBPACK_IMPORTED_MODULE_5__.carriedUnitValidator]
      })
    });
    this.oneOnOneForm.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(this.oneOnOneForm.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.onDestroy$)).subscribe(() => {
      this.showBattleResult();
    });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  showBattleResult() {
    var _this = this;

    return (0,D_Coding_Personal_projects_polytopia_calculator_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.oneOnOneForm.valid) {
        _this.battleResult = null;
        _this.battleResultStatistics = null;

        _this.resultChange.emit({
          battleResults: [],
          battleResultStatistics: null,
          isInvalid: true
        });

        return;
      }

      const attackerData = _this.oneOnOneForm.get('attacker').value;

      const defenderData = _this.oneOnOneForm.get('defender').value;

      const {
        attackDamage,
        defenseDamage,
        defenderNewHp,
        attackerNewHp,
        splashedNewHp
      } = (0,_utils_calculate_damage_util__WEBPACK_IMPORTED_MODULE_3__.calculateDamage)(attackerData, defenderData);
      attackerData.origHp = attackerData.hp;
      attackerData.newHp = attackerNewHp;
      attackerData.attackDamage = Math.min(attackDamage, defenderData.hp - defenderNewHp);
      defenderData.origHp = defenderData.hp;
      defenderData.newHp = defenderNewHp;
      defenderData.splashedNewHp = splashedNewHp;
      defenderData.defenseDamage = Math.min(defenseDamage, attackerData.hp - attackerNewHp);
      ;
      _this.battleResult = {
        attacker: attackerData,
        defender: defenderData
      };
      _this.battleResultStatistics = {
        attackerSurvivors: [attackerData],
        defenderSurvivors: [defenderData],
        defendersKilled: [],
        attackersKilled: [],
        unusedAttackerUnits: [],
        untouchedDefenderUnits: [],
        totalAttackDamage: attackerData.attackDamage,
        totalDefenseDamage: defenderData.defenseDamage
      };

      _this.resultChange.emit({
        battleResults: [_this.battleResult],
        battleResultStatistics: _this.battleResultStatistics,
        isInvalid: false
      });

      _this.googleAnalytics.emitEvent('one-on-one calculate', 'method', `${attackerData.unit} vs ${defenderData.unit}`, {
        attacker: attackerData,
        defender: defenderData
      }, 1);
    })();
  }

}

OneOnOneComponent.ɵfac = function OneOnOneComponent_Factory(t) {
  return new (t || OneOnOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_google_analytics_service__WEBPACK_IMPORTED_MODULE_6__.GoogleAnalyticsService));
};

OneOnOneComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: OneOnOneComponent,
  selectors: [["app-one-on-one"]],
  outputs: {
    resultChange: "resultChange"
  },
  decls: 11,
  vars: 1,
  consts: [[3, "formGroup"], ["formGroupName", "attacker", "unitFormType", "attacker"], ["formGroupName", "defender", "unitFormType", "defender"]],
  template: function OneOnOneComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 0)(1, "ion-list")(2, "ion-item-divider")(3, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Offense Unit");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-unit-form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "ion-list")(7, "ion-item-divider")(8, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Defense Unit");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "app-unit-form", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.oneOnOneForm);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonItemDivider, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupName, _shared_unit_form_unit_form_component__WEBPACK_IMPORTED_MODULE_7__.UnitFormComponent],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n}\n\nion-list[_ngcontent-%COMP%] {\n  padding: 0;\n  margin-top: 20px;\n}\n\napp-battle-result[_ngcontent-%COMP%] {\n  flex: 1;\n  display: block;\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n\n.paypal-form[_ngcontent-%COMP%] {\n  display: block;\n}\n\nion-title[_ngcontent-%COMP%] {\n  color: var(--ion-text-color);\n}\n\nform[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 700px;\n}\n\n@media (min-width: 768px) {\n  form[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: flex-start;\n  }\n  ion-list[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  ion-list[_ngcontent-%COMP%]:first-child {\n    margin: 20px 5px 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uZS1vbi1vbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLE9BQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7QUFDRjs7QUFRQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQUxGOztBQVFBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsdUJBQUE7RUFMRjtFQU9BO0lBQ0UsT0FBQTtFQUxGO0VBT0U7SUFDRSxxQkFBQTtFQUxKO0FBQ0YiLCJmaWxlIjoib25lLW9uLW9uZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmFwcC1iYXR0bGUtcmVzdWx0IHtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnBheXBhbC1mb3JtIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xyXG59XHJcblxyXG5cclxuLy8gYmF0dGxlIHJlc3VsdCBpcyBzaG93biBhcyBtb2RhbCBpbiBzbWFsbCBzY3JlZW5zXHJcbi8vIGFwcC1iYXR0bGUtcmVzdWx0IHtcclxuLy8gICBkaXNwbGF5OiBub25lO1xyXG4vLyB9XHJcblxyXG5mb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiA3MDBweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG4gIGlvbi1saXN0IHtcclxuICAgIGZsZXg6IDE7XHJcblxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbjogMjBweCA1cHggMjBweDtcclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"]
});

/***/ }),

/***/ 8683:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/shared/battle-result-mini/battle-result-mini.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BattleResultMiniComponent": () => (/* binding */ BattleResultMiniComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);



function BattleResultMiniComponent_ion_text_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-text", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Please fix invalid inputs.\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BattleResultMiniComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-spinner", 10)(2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Executing battle matches");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BattleResultMiniComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14)(1, "ion-thumbnail", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-text", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const survivor_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/attacker_units/", survivor_r9.unit, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", survivor_r9.newHp, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](survivor_r9.hp - survivor_r9.newHp ? "(-" + (survivor_r9.hp - survivor_r9.newHp) + ")" : "");
} }
function BattleResultMiniComponent_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14)(1, "ion-thumbnail", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-text", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const killed_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/attacker_units/", killed_r10.unit, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", killed_r10.newHp, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(-", killed_r10.origHp, ")");
} }
function BattleResultMiniComponent_div_10_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14)(1, "ion-thumbnail", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-note");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "(unused)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const unused_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/attacker_units/", unused_r11.unit, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", unused_r11.hp, ") ");
} }
function BattleResultMiniComponent_div_10_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14)(1, "ion-thumbnail", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-text", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const survivor_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/defender_units/", survivor_r12.unit, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", survivor_r12.newHp, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((survivor_r12.preservedHp || survivor_r12.origHp) - survivor_r12.newHp ? "(-" + ((survivor_r12.preservedHp || survivor_r12.origHp) - survivor_r12.newHp) + ")" : "");
} }
function BattleResultMiniComponent_div_10_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14)(1, "ion-thumbnail", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-text", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const killed_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/defender_units/", killed_r13.unit, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", killed_r13.newHp, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(-", killed_r13.preservedHp || killed_r13.hp, ")");
} }
function BattleResultMiniComponent_div_10_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14)(1, "ion-thumbnail", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-note");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "(untouched)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const untouched_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/defender_units/", untouched_r14.unit, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", untouched_r14.hp, ") ");
} }
function BattleResultMiniComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BattleResultMiniComponent_div_10_div_2_Template, 6, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BattleResultMiniComponent_div_10_div_3_Template, 6, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BattleResultMiniComponent_div_10_div_4_Template, 6, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BattleResultMiniComponent_div_10_div_6_Template, 6, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BattleResultMiniComponent_div_10_div_7_Template, 6, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BattleResultMiniComponent_div_10_div_8_Template, 6, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.battleResultStatistics.attackerSurvivors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.battleResultStatistics.attackersKilled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.battleResultStatistics.unusedAttackerUnits);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.battleResultStatistics.defenderSurvivors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.battleResultStatistics.defendersKilled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.battleResultStatistics.untouchedDefenderUnits);
} }
class BattleResultMiniComponent {
}
BattleResultMiniComponent.ɵfac = function BattleResultMiniComponent_Factory(t) { return new (t || BattleResultMiniComponent)(); };
BattleResultMiniComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BattleResultMiniComponent, selectors: [["app-battle-result-mini"]], inputs: { battleResultStatistics: "battleResultStatistics", isInvalid: "isInvalid", isExecutingBattleMatches: "isExecutingBattleMatches" }, decls: 11, vars: 3, consts: [[1, "drag-line"], [1, "fight-result-text"], [1, "swords-icon"], ["src", "assets/other/BigSwords.png"], ["color", "danger", "class", "invalid-text", 4, "ngIf"], ["class", "loading-message", 4, "ngIf"], ["class", "two-column", 4, "ngIf"], ["color", "danger", 1, "invalid-text"], ["name", "alert-circle-outline"], [1, "loading-message"], ["color", "success", "name", "lines"], [1, "two-column"], [2, "width", "50%"], ["class", "summary-unit-block", 4, "ngFor", "ngForOf"], [1, "summary-unit-block"], [1, "unit-image"], [3, "src"], ["color", "danger"]], template: function BattleResultMiniComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-text")(2, "h2", 1)(3, "ion-thumbnail", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Fight Result ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-thumbnail", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BattleResultMiniComponent_ion_text_8_Template, 3, 0, "ion-text", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BattleResultMiniComponent_div_9_Template, 6, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BattleResultMiniComponent_div_10_Template, 9, 6, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isInvalid && !ctx.isExecutingBattleMatches);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExecutingBattleMatches);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isExecutingBattleMatches && ctx.battleResultStatistics);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonThumbnail], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.fight-result-text[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.swords-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  vertical-align: top;\n  margin: 0 15px;\n}\n\n.two-column[_ngcontent-%COMP%] {\n  display: flex;\n  text-align: left;\n  margin-top: 15px;\n  padding-bottom: 20px;\n}\n\n.two-column[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  border-right: 1px solid #dedddd;\n}\n\n.unit-image[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 20px;\n}\n\n.unit-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.summary-unit-block[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 10px;\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 1.2px;\n}\n\n.summary-unit-block[_ngcontent-%COMP%]   .unit-image[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n\n.drag-line[_ngcontent-%COMP%] {\n  display: block;\n  width: 100px;\n  height: 3px;\n  background: #d6d2d2;\n  border-radius: 10px;\n  margin: 5px auto 0;\n}\n\n.invalid-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 20px;\n  display: inline-block;\n}\n\n.invalid-text[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  position: relative;\n  top: 3px;\n}\n\n.loading-message[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\n.loading-message[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n\n@media (prefers-color-scheme: dark) {\n  [_nghost-%COMP%] {\n    background-color: #292929;\n    color: var(--ion-text-color);\n  }\n  .drag-line[_ngcontent-%COMP%] {\n    background: #424242;\n  }\n  .two-column[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n    border-right: 1px solid #424242;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhdHRsZS1yZXN1bHQtbWluaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7QUFFSjs7QUFBQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFHSjs7QUFEQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFJSjs7QUFGSTtFQUNJLCtCQUFBO0FBSVI7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQUdKOztBQURJO0VBQ0ksc0JBQUE7S0FBQSxtQkFBQTtBQUdSOztBQUNBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFFSjs7QUFBSTtFQUNFLGNBQUE7QUFFTjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBQUNSOztBQUlBO0VBQ0ksZ0JBQUE7QUFESjs7QUFHSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRFI7O0FBS0E7RUFDSTtJQUNJLHlCQUFBO0lBQ0EsNEJBQUE7RUFGTjtFQUtFO0lBQ0ksbUJBQUE7RUFITjtFQU9NO0lBQ0ksK0JBQUE7RUFMVjtBQUNGIiwiZmlsZSI6ImJhdHRsZS1yZXN1bHQtbWluaS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5maWdodC1yZXN1bHQtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLnN3b3Jkcy1pY29uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIG1hcmdpbjogMCAxNXB4O1xyXG59XHJcbi50d28tY29sdW1uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cclxuICAgID4gZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGVkZGRkO1xyXG4gICAgfVxyXG59XHJcblxyXG4udW5pdC1pbWFnZSB7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zdW1tYXJ5LXVuaXQtYmxvY2sge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XHJcbiAgXHJcbiAgICAudW5pdC1pbWFnZSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZHJhZy1saW5lIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDZkMmQyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogNXB4IGF1dG8gMDtcclxufVxyXG5cclxuLmludmFsaWQtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAzcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ubG9hZGluZy1tZXNzYWdlIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcblxyXG4gICAgaW9uLXNwaW5uZXIge1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xyXG4gICAgOmhvc3Qge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICAuZHJhZy1saW5lIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xyXG4gICAgfVxyXG5cclxuICAgIC50d28tY29sdW1uIHsgICAgXHJcbiAgICAgICAgPiBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAgIzQyNDI0MjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 9620:
/*!*************************************************************************!*\
  !*** ./src/app/modules/shared/battle-result/battle-result.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BattleResultComponent": () => (/* binding */ BattleResultComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);



function BattleResultComponent_ng_container_13_ion_text_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-text", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Survived");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BattleResultComponent_ng_container_13_ion_text_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-text", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Destroyed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BattleResultComponent_ng_container_13_ng_container_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const br_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", br_r1.defender.splashedNewHp, " (on splash damage)");
} }
function BattleResultComponent_ng_container_13_ion_text_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-text", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Survived");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BattleResultComponent_ng_container_13_ion_text_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-text", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Destroyed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BattleResultComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr")(2, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr")(5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "(Offense)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-thumbnail", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td")(12, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-note", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td")(17, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BattleResultComponent_ng_container_13_ion_text_20_Template, 2, 0, "ion-text", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, BattleResultComponent_ng_container_13_ion_text_21_Template, 2, 0, "ion-text", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr")(23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-thumbnail", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td")(28, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ion-note", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td")(33, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, BattleResultComponent_ng_container_13_ng_container_35_Template, 4, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, BattleResultComponent_ng_container_13_ion_text_37_Template, 2, 0, "ion-text", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, BattleResultComponent_ng_container_13_ion_text_38_Template, 2, 0, "ion-text", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const br_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r2 + 1, "", ctx_r0.getOrderSuperscript(i_r2), " move");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", br_r1.attacker.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/attacker_units/", br_r1.attacker.unit, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", br_r1.attacker.origHp, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](br_r1.defender.defenseDamage > 0 ? "(-" + br_r1.defender.defenseDamage + ")" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](br_r1.attacker.newHp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", br_r1.attacker.newHp > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", br_r1.attacker.newHp === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", br_r1.defender.unit, " (Defense) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/defender_units/", br_r1.defender.unit, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", br_r1.defender.origHp, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](br_r1.attacker.attackDamage > 0 ? "(-" + br_r1.attacker.attackDamage + ")" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](br_r1.defender.newHp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", br_r1.defender.splashedNewHp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", br_r1.defender.newHp > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", br_r1.defender.newHp === 0);
} }
class BattleResultComponent {
    getAttacker(i) {
        return this.battleResults[i].attacker;
    }
    getDefender(i) {
        return this.battleResults[i].defender;
    }
    getAttackDamageColor(i) {
        return this.assessColor(this.getAttacker(i).attackDamage, this.getDefender(i).defenseDamage);
    }
    getDefenseDamageColor(i) {
        return this.assessColor(this.getDefender(i).defenseDamage, this.getAttacker(i).attackDamage);
    }
    assessColor(statA, statB) {
        if (statA > statB) {
            return 'success';
        }
        else if (statA < statB) {
            return 'danger';
        }
        else {
            return null;
        }
    }
    getOrderSuperscript(i) {
        const orderNumber = i + 1;
        if (orderNumber > 10 && orderNumber < 20) {
            return `th`;
        }
        else if (orderNumber % 10 === 1) {
            return `st`;
        }
        else if (orderNumber % 10 === 2) {
            return `nd`;
        }
        else if (orderNumber % 10 === 3) {
            return `rd`;
        }
        else {
            return `th`;
        }
    }
}
BattleResultComponent.ɵfac = function BattleResultComponent_Factory(t) { return new (t || BattleResultComponent)(); };
BattleResultComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BattleResultComponent, selectors: [["app-battle-result"]], inputs: { battleResults: "battleResults", battleResultStatistics: "battleResultStatistics", multi: "multi", showingOptimalResult: "showingOptimalResult" }, decls: 14, vars: 1, consts: [[1, "table-title"], ["scope", ""], [4, "ngFor", "ngForOf"], ["colspan", "4", 1, "move-order-text"], [1, "unit-image"], [3, "src"], ["color", "danger"], ["color", "success", 4, "ngIf"], ["color", "danger", 4, "ngIf"], [4, "ngIf"], ["color", "success"]], template: function BattleResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Attack moves breakdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table")(3, "thead")(4, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Original HP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "New HP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BattleResultComponent_ng_container_13_Template, 39, 17, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.battleResults);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonThumbnail], styles: [".unit-image[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 20px;\n}\n.unit-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\nion-card-content[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.move-order-text[_ngcontent-%COMP%] {\n  text-align: center !important;\n  font-weight: 500;\n}\n.summary-unit-block[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px;\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 1.2px;\n}\n.summary-unit-block[_ngcontent-%COMP%]   .unit-image[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.table-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  font-weight: 500;\n  display: block;\n}\n.swords-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 25px;\n  height: 25px;\n  vertical-align: top;\n  margin: 0 15px;\n}\ntable[_ngcontent-%COMP%] {\n  border-spacing: 0;\n  width: 100%;\n  border-collapse: collapse;\n  border: 1px solid var(--ion-item-background);\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-item-background);\n  text-align: left;\n  padding: 5px 15px;\n  font-size: 15px;\n  vertical-align: top;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: normal;\n  background: var(--ion-item-background);\n}\n@media (prefers-color-scheme: dark) {\n  table[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: 1px solid #565656;\n  }\n  table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background: #424242;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhdHRsZS1yZXN1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQUNGO0FBQ0U7RUFDRSxzQkFBQTtLQUFBLG1CQUFBO0FBQ0o7QUFHQTtFQUNFLGVBQUE7QUFBRjtBQUdBO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtBQUFGO0FBR0E7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUFGO0FBRUU7RUFDRSxjQUFBO0FBQUo7QUFJQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFERjtBQUlBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQURGO0FBSUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLDRDQUFBO0FBREY7QUFHRTtFQUNFLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQURKO0FBSUU7RUFDRSxtQkFBQTtFQUNBLHNDQUFBO0FBRko7QUFNQTtFQUVJO0lBQ0UseUJBQUE7RUFKSjtFQU1FO0lBQ0UsbUJBQUE7RUFKSjtBQUNGIiwiZmlsZSI6ImJhdHRsZS1yZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudW5pdC1pbWFnZSB7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5cclxuICBpbWcge1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnQge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLm1vdmUtb3JkZXItdGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnN1bW1hcnktdW5pdC1ibG9jayB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxLjJweDtcclxuXHJcbiAgLnVuaXQtaW1hZ2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4udGFibGUtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc3dvcmRzLWljb24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBtYXJnaW46IDAgMTVweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCk7XHJcblxyXG4gIHRoLCB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kKTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgfVxyXG5cclxuICB0aCB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XHJcbiAgdGFibGUge1xyXG4gICAgJiwgdGgsIHRkIHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzU2NTY1NjtcclxuICAgIH1cclxuICAgIHRoIHtcclxuICAgICAgYmFja2dyb3VuZDogIzQyNDI0MjtcclxuICAgIH1cclxuICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 9169:
/*!*************************************************************************!*\
  !*** ./src/app/modules/shared/donate-button/donate-button.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonateButtonComponent": () => (/* binding */ DonateButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);


const _c0 = function () { return { header: "Select Unit" }; };
class DonateButtonComponent {
    constructor() { }
    ngOnInit() { }
}
DonateButtonComponent.ɵfac = function DonateButtonComponent_Factory(t) { return new (t || DonateButtonComponent)(); };
DonateButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DonateButtonComponent, selectors: [["app-donate-button"]], decls: 55, vars: 3, consts: [[1, "currency-select"], ["interface", "action-sheet", "value", "Q2Z5D48F4YMXL", 3, "interfaceOptions"], ["select", ""], ["value", "52CNVTXALEQXL"], ["value", "P4Z2NJR2QRMQJ"], ["value", "YL3YTLC7QWREJ"], ["value", "UJX3JEYNVPZ4W"], ["value", "TYGY99HRPWJ4A"], ["value", "3YP34QNUFWA6Q"], ["value", "KCCND26B7RZ2E"], ["value", "WK6FFCMNAMENQ"], ["value", "L69898APZD5HU"], ["value", "UXGG6LV6UMTA8"], ["value", "XR2YFSVCDUMSC"], ["value", "Y2LW58MN7MYBY"], ["value", "FMABDARCXQFCJ"], ["value", "XDHWYJWRUPEC8"], ["value", "HJSHMTDBF5Z5A"], ["value", "TBE58BFGVVVLN"], ["value", "JBUWFSGNLEYVY"], ["value", "LAQXFNFMJ8U9S"], ["value", "EDX9FZXEFQYGY"], ["value", "QR4M289JUZ4SU"], ["value", "44CPPATC3T8HC"], ["value", "U5B3VTYBQKQM8"], ["value", "Q2Z5D48F4YMXL"], ["ngNoForm", "", "action", "https://www.paypal.com/donate", "method", "post", "target", "_top", 1, "paypal-form"], ["type", "hidden", "name", "hosted_button_id", 3, "value"], ["type", "image", "src", "https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif", "border", "0", "name", "submit", "title", "PayPal - The safer, easier way to pay online!", "alt", "Donate with PayPal button"], ["alt", "", "border", "0", "src", "https://www.paypal.com/en_US/i/scr/pixel.gif", "width", "1", "height", "1"]], template: function DonateButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select currency:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-select", 1, 2)(5, "ion-select-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "AUD $");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-select-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "BRL R$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-select-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "CAD $");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-select-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "CHF Fr.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-select-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "CZK K\u010D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-select-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "DKK kr.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-select-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "EUR \u20AC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-select-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "GBP \u00A3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-select-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "HKD $");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-select-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "HUF Ft");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-select-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "ILS \u20AA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ion-select-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "JPY \u200E\u00A5\u200E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ion-select-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u200EMXN $\u200E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ion-select-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "NOK kr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ion-select-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "NZD $");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ion-select-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u200EPHP \u20B1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ion-select-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "PLN gr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ion-select-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "RUB \u20BD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ion-select-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "SEK kr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ion-select-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "SGD $");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ion-select-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "THB \u0E3F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ion-select-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "TWD $");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ion-select-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "USD $");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 27)(53, "input", 28)(54, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _r0.value);
    } }, dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.SelectValueAccessor], styles: [".currency-select[_ngcontent-%COMP%] {\n  width: 230px;\n  margin: auto;\n}\n.currency-select[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  display: inline-flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbmF0ZS1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUFKO0FBRUk7RUFDRSxzQkFBQTtFQUNBLG9CQUFBO0FBQU4iLCJmaWxlIjoiZG9uYXRlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY3VycmVuY3ktc2VsZWN0IHtcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICBcclxuICAgIGlvbi1zZWxlY3Qge1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 2271:
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _unit_form_unit_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unit-form/unit-form.component */ 6589);
/* harmony import */ var _battle_result_battle_result_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./battle-result/battle-result.component */ 9620);
/* harmony import */ var _donate_button_donate_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donate-button/donate-button.component */ 9169);
/* harmony import */ var _battle_result_mini_battle_result_mini_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./battle-result-mini/battle-result-mini.component */ 8683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);








class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_unit_form_unit_form_component__WEBPACK_IMPORTED_MODULE_0__.UnitFormComponent, _battle_result_battle_result_component__WEBPACK_IMPORTED_MODULE_1__.BattleResultComponent, _battle_result_mini_battle_result_mini_component__WEBPACK_IMPORTED_MODULE_3__.BattleResultMiniComponent, _donate_button_donate_button_component__WEBPACK_IMPORTED_MODULE_2__.DonateButtonComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule], exports: [_unit_form_unit_form_component__WEBPACK_IMPORTED_MODULE_0__.UnitFormComponent, _battle_result_battle_result_component__WEBPACK_IMPORTED_MODULE_1__.BattleResultComponent, _battle_result_mini_battle_result_mini_component__WEBPACK_IMPORTED_MODULE_3__.BattleResultMiniComponent, _donate_button_donate_button_component__WEBPACK_IMPORTED_MODULE_2__.DonateButtonComponent] }); })();


/***/ }),

/***/ 6589:
/*!*****************************************************************!*\
  !*** ./src/app/modules/shared/unit-form/unit-form.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitFormComponent": () => (/* binding */ UnitFormComponent)
/* harmony export */ });
/* harmony import */ var D_Coding_Personal_projects_polytopia_calculator_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 8623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var src_app_models_unit_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/unit-data.model */ 7868);
/* harmony import */ var src_app_utils_calculate_max_hp_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/calculate-max-hp.util */ 724);
/* harmony import */ var _data_unit_list_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/unit-list.const */ 7575);
/* harmony import */ var _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/unit-stats.const */ 6959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 3819);













const _c0 = ["hpInputComponent"];
const _c1 = ["countInputComponent"];

function UnitFormComponent_ion_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-img", 13);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("src", "/assets/", ctx_r0.unitFormType, "_units/", ctx_r0.selectedUnit, ".png");
  }
}

function UnitFormComponent_ion_select_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const unitOption_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", unitOption_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", unitOption_r11, " ");
  }
}

function UnitFormComponent_ion_item_7_ion_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-img", 13);
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("src", "/assets/", ctx_r12.unitFormType, "_units/", ctx_r12.selectedCarriedUnit, ".png");
  }
}

function UnitFormComponent_ion_item_7_ion_select_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const carriedUnitOption_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", carriedUnitOption_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", carriedUnitOption_r14, " ");
  }
}

const _c2 = function (a1) {
  return {
    header: "Select Unit",
    cssClass: a1
  };
};

function UnitFormComponent_ion_item_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 1)(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Carried Unit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, UnitFormComponent_ion_item_7_ion_img_3_Template, 1, 2, "ion-img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, UnitFormComponent_ion_item_7_ion_select_option_5_Template, 2, 2, "ion-select-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.selectedCarriedUnit);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c2, ctx_r2.unitFormType + "-carried-unit-option"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.carriedUnitOptions);
  }
}

function UnitFormComponent_ion_item_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 1)(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Is veteran?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-checkbox", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UnitFormComponent_ion_note_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-note", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("(Max: ", ctx_r4.maxHp, ")");
  }
}

function UnitFormComponent_ion_item_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 1)(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Spawn count");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 7)(4, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UnitFormComponent_ion_item_21_Template_ion_icon_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.decreaseSpawnCount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionFocus", function UnitFormComponent_ion_item_21_Template_ion_input_ionFocus_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.selectText($event));
    })("contextmenu", function UnitFormComponent_ion_item_21_Template_ion_input_contextmenu_6_listener($event) {
      return $event.preventDefault();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7)(9, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UnitFormComponent_ion_item_21_Template_ion_icon_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r20.increaseSpawnCount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "ion-ripple-effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}

function UnitFormComponent_ion_item_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 1)(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Free from retaliation?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UnitFormComponent_ion_item_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 1)(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Is boosted?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-checkbox", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UnitFormComponent_ion_item_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 1)(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Is poisoned?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-checkbox", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UnitFormComponent_ion_radio_group_25_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 1)(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "1.5 \u00D7 Def bonus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-note");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "(City/Forest/Mountain/Ocean)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ion-radio", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UnitFormComponent_ion_radio_group_25_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item", 1)(1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "4 \u00D7 Def bonus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-note");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "(City Wall)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "ion-radio", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function UnitFormComponent_ion_radio_group_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-radio-group", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UnitFormComponent_ion_radio_group_25_ion_item_1_Template, 6, 0, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, UnitFormComponent_ion_radio_group_25_ion_item_2_Template, 6, 0, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("allowEmptySelection", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r10.hasDefenseBonus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r10.hasWallDefenseBonus);
  }
}

class UnitFormComponent {
  constructor(controlContainer) {
    this.controlContainer = controlContainer;
    this.carriedUnitOptions = _data_unit_list_const__WEBPACK_IMPORTED_MODULE_3__.landUnits;
    this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  }

  ngOnInit() {
    const isAttackerFormType = this.unitFormType === src_app_models_unit_data_model__WEBPACK_IMPORTED_MODULE_1__.UnitFormType.ATTACKER;
    this.unitOptions = isAttackerFormType ? _data_unit_list_const__WEBPACK_IMPORTED_MODULE_3__.attackerUnits : _data_unit_list_const__WEBPACK_IMPORTED_MODULE_3__.defenderUnits;
    this.form = this.controlContainer.control;
    this.setMaxHp();
    const hpInput = this.form.get('hp');
    this.form.get('isVeteran').valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.onDestroy$)).subscribe(() => {
      this.setMaxHp();

      if (hpInput.pristine || !hpInput.valid) {
        this.form.get('hp').reset(this.maxHp);
      }
    });
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(this.form.get('unit').valueChanges, this.form.get('carriedUnit').valueChanges).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.onDestroy$)).subscribe(() => {
      this.setMaxHp();
      hpInput.reset(this.maxHp, {
        emitEvent: false
      });

      if (this.isDefenderForm) {
        this.form.get('isPoisoned').reset(false, {
          emitEvent: false
        });
      } else {
        this.form.get('isBoosted').reset(false, {
          emitEvent: false
        });
      }

      this.form.get('isVeteran') && this.form.get('isVeteran').reset(false, {
        emitEvent: false
      });
      this.form.get('withDefenseBonus') && this.form.get('withDefenseBonus').reset(false, {
        emitEvent: false
      });
      this.form.get('withWallBonus') && this.form.get('withWallBonus').reset(false, {
        emitEvent: false
      });
      this.form.updateValueAndValidity();
    });

    if (isAttackerFormType) {
      this.form.get('unit').valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.onDestroy$)).subscribe(unit => {
        if (_data_unit_list_const__WEBPACK_IMPORTED_MODULE_3__.longRangeUnits.includes(unit)) {
          this.form.get('freeFromRetaliation').setValue(true);
        } else {
          this.form.get('freeFromRetaliation').setValue(false);
        }
      });
    }
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  get selectedUnit() {
    return this.form.get('unit').value;
  }

  get selectedCarriedUnit() {
    return this.form.get('carriedUnit').value;
  }

  get hasVeterance() {
    if (this.hasCarrySkill) {
      // if unit carries another unit, check the carried unit veterance
      const carriedUnit = this.form.get('carriedUnit').value;
      return _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_4__.unitStats[carriedUnit].veteranHp;
    }

    return _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_4__.unitStats[this.selectedUnit].veteranHp;
  }

  get isPoisoned() {
    return this.form.get('isPoisoned').value;
  }

  get hasDefenseBonus() {
    return _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_4__.unitStats[this.selectedUnit].defenseBonus;
  }

  get hasWallDefenseBonus() {
    return _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_4__.unitStats[this.selectedUnit].wallBonus;
  }

  get hasCarrySkill() {
    return _data_unit_list_const__WEBPACK_IMPORTED_MODULE_3__.carryUnits.includes(this.selectedUnit);
  }

  get isLongRangeUnit() {
    return _data_unit_list_const__WEBPACK_IMPORTED_MODULE_3__.longRangeUnits.includes(this.selectedUnit);
  }

  get isDefenderForm() {
    return this.unitFormType === src_app_models_unit_data_model__WEBPACK_IMPORTED_MODULE_1__.UnitFormType.DEFENDER;
  }

  setMaxHp() {
    this.maxHp = (0,src_app_utils_calculate_max_hp_util__WEBPACK_IMPORTED_MODULE_2__.calculateMaxHp)(this.form.getRawValue());
  }

  decreaseHp() {
    const hpInput = this.form.get('hp');
    const curValue = hpInput.value || 0;

    if (curValue > 0) {
      hpInput.setValue(parseInt(curValue, 10) - 1);
      hpInput.updateValueAndValidity(); // (await this.hpInputComponent.getInputElement()).focus();
    }
  }

  increaseHp() {
    const hpInput = this.form.get('hp');
    const curValue = hpInput.value || 0;
    hpInput.setValue(parseInt(curValue, 10) + 1);
    hpInput.updateValueAndValidity(); // (await this.hpInputComponent.getInputElement()).focus();
  }

  decreaseSpawnCount() {
    const countInput = this.form.get('spawnCount');
    const curValue = countInput.value || 0;

    if (curValue > 0) {
      countInput.setValue(parseInt(curValue, 10) - 1);
      countInput.updateValueAndValidity(); // (await this.countInputComponent.getInputElement()).focus();
    }
  }

  increaseSpawnCount() {
    const countInput = this.form.get('spawnCount');
    const curValue = countInput.value || 0;
    countInput.setValue(parseInt(curValue, 10) + 1);
    countInput.updateValueAndValidity(); // (await this.countInputComponent.getInputElement()).focus();
  }

  selectText(event) {
    return (0,D_Coding_Personal_projects_polytopia_calculator_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const input = yield event.target.getInputElement();
      input.select();
    })();
  }

}

UnitFormComponent.ɵfac = function UnitFormComponent_Factory(t) {
  return new (t || UnitFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.ControlContainer));
};

UnitFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: UnitFormComponent,
  selectors: [["app-unit-form"]],
  viewQuery: function UnitFormComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.hpInputComponent = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.countInputComponent = _t.first);
    }
  },
  inputs: {
    unitFormType: "unitFormType",
    multi: "multi"
  },
  decls: 26,
  vars: 14,
  consts: [[3, "formGroup"], ["tappable", ""], ["class", "unit-image", 3, "src", 4, "ngIf"], ["tappable", "", "formControlName", "unit", "interface", "action-sheet", 3, "interfaceOptions"], [3, "value", 4, "ngFor", "ngForOf"], ["tappable", "", 4, "ngIf"], ["inputmode", "numeric", 4, "ngIf"], ["slot", "end", 1, "range-arrows-container", "ion-activatable", "ripple-parent"], ["tappable", "", "slot", "end", "src", "/assets/chevron-back-outline.svg", 1, "input-hp-arrow", 3, "click"], ["slot", "end", "tappable", "", "type", "text", "formControlName", "hp", "inputmode", "numeric", "enterkeyhint", "done", "pattern", "^([0-9])+$", 1, "input-hp", 3, "ionFocus", "contextmenu"], ["hpInputComponent", ""], ["tappable", "", "src", "/assets/chevron-forward-outline.svg", 1, "input-hp-arrow", 3, "click"], ["formControlName", "withDefenseBonus", 3, "allowEmptySelection", 4, "ngIf"], [1, "unit-image", 3, "src"], [3, "value"], ["tappable", "", "formControlName", "carriedUnit", "interface", "action-sheet", 3, "interfaceOptions"], ["tappable", "", "slot", "end", "formControlName", "isVeteran"], ["inputmode", "numeric"], ["tappable", "", "slot", "end", "src", "/assets/chevron-back-outline.svg", 1, "input-count-arrow", 3, "click"], ["tappable", "", "slot", "end", "type", "text", "formControlName", "spawnCount", "inputmode", "numeric", "enterkeyhint", "done", "pattern", "^([0-9])+$", 1, "input-count", 3, "ionFocus", "contextmenu"], ["countInputComponent", ""], ["tappable", "", "slot", "end", "src", "/assets/chevron-forward-outline.svg", 1, "input-count-arrow", 3, "click"], ["tappable", "", "slot", "end", "formControlName", "freeFromRetaliation"], ["tappable", "", "slot", "end", "formControlName", "isBoosted"], ["tappable", "", "slot", "end", "formControlName", "isPoisoned"], ["formControlName", "withDefenseBonus", 3, "allowEmptySelection"], ["tappable", "", "slot", "end", "value", "withoutWall"], ["tappable", "", "slot", "end", "value", "withWall"]],
  template: function UnitFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item-group", 0)(1, "ion-item", 1)(2, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Unit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, UnitFormComponent_ion_img_4_Template, 1, 2, "ion-img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-select", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, UnitFormComponent_ion_select_option_6_Template, 2, 2, "ion-select-option", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, UnitFormComponent_ion_item_7_Template, 6, 5, "ion-item", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, UnitFormComponent_ion_item_8_Template, 4, 0, "ion-item", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-item", 1)(10, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "HP ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, UnitFormComponent_ion_note_12_Template, 2, 1, "ion-note", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 7)(14, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UnitFormComponent_Template_ion_icon_click_14_listener() {
        return ctx.decreaseHp();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "ion-ripple-effect");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "ion-input", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionFocus", function UnitFormComponent_Template_ion_input_ionFocus_16_listener($event) {
        return ctx.selectText($event);
      })("contextmenu", function UnitFormComponent_Template_ion_input_contextmenu_16_listener($event) {
        return $event.preventDefault();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 7)(19, "ion-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UnitFormComponent_Template_ion_icon_click_19_listener() {
        return ctx.increaseHp();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "ion-ripple-effect");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, UnitFormComponent_ion_item_21_Template, 11, 0, "ion-item", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, UnitFormComponent_ion_item_22_Template, 4, 0, "ion-item", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, UnitFormComponent_ion_item_23_Template, 4, 0, "ion-item", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, UnitFormComponent_ion_item_24_Template, 4, 0, "ion-item", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, UnitFormComponent_ion_radio_group_25_Template, 3, 3, "ion-radio-group", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectedUnit);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("interfaceOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c2, ctx.unitFormType + "-unit-option"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.unitOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasCarrySkill);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasVeterance);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.maxHp);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.multi);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLongRangeUnit && !ctx.isDefenderForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isDefenderForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isDefenderForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isDefenderForm && !ctx.isPoisoned);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonRadio, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonRadioGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonRippleEffect, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.RadioValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName],
  styles: [".input-hp[_ngcontent-%COMP%], .input-count[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 30px;\n  display: block;\n  margin-left: 0px;\n  flex: initial;\n  margin-right: 10px;\n}\n\n.input-hp-arrow[_ngcontent-%COMP%], .input-count-arrow[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.unit-image[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  margin-left: 10px;\n}\n\n.range-arrows-container[_ngcontent-%COMP%] {\n  margin-left: 0;\n  display: inline-flex;\n  font-size: 30px;\n  padding-inline: 8px;\n  padding-block: 6px;\n}\n\n  .defender-unit-option .action-sheet-button .action-sheet-button-inner:before,   .defender-carried-unit-option .action-sheet-button .action-sheet-button-inner:before,   .attacker-unit-option .action-sheet-button .action-sheet-button-inner:before,   .attacker-carried-unit-option .action-sheet-button .action-sheet-button-inner:before {\n  display: block;\n  width: 40px;\n  height: 40px;\n  margin-right: 15px;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(2) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Warrior.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(3) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Rider.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(4) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Defender.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(5) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Swordsman.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(6) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Archer.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(7) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Catapult.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(8) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Knight.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(9) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Old Knight.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(10) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Giant.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(11) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Boat.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(12) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Ship.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(13) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Battleship.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(14) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Mind Bender.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(15) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Amphibian.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(16) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Crab.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(17) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Tridention.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(18) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Polytaur.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(19) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Navalon.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(20) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Dragon Egg.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(21) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Baby Dragon.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(22) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Fire Dragon.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(23) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Mooni.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(24) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Ice Archer.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(25) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Battle Sled.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(26) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Ice Fortress.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(27) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Gaami.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(28) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Shaman.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(29) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Hexapod.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(30) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Phychi.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(31) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Raychi.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(32) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Kiton.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(33) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Old Kiton.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(34) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Doomux.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(35) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Exida.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(36) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Centipede.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(37) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Segment.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(38) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Nature Bunny.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(39) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Dinghy.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(40) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Cloak.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-unit-option .action-sheet-button:nth-child(41) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Dagger.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-carried-unit-option .action-sheet-button:nth-child(2) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Warrior.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-carried-unit-option .action-sheet-button:nth-child(3) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Rider.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-carried-unit-option .action-sheet-button:nth-child(4) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Defender.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-carried-unit-option .action-sheet-button:nth-child(5) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Swordsman.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-carried-unit-option .action-sheet-button:nth-child(6) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Archer.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-carried-unit-option .action-sheet-button:nth-child(7) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Catapult.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-carried-unit-option .action-sheet-button:nth-child(8) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Mind Bender.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-carried-unit-option .action-sheet-button:nth-child(9) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Knight.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-carried-unit-option .action-sheet-button:nth-child(10) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Old Knight.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-carried-unit-option .action-sheet-button:nth-child(11) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Giant.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-carried-unit-option .action-sheet-button:nth-child(12) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Polytaur.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-carried-unit-option .action-sheet-button:nth-child(13) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Nature Bunny.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-carried-unit-option .action-sheet-button:nth-child(14) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Cloak.png\");\n  background-size: 100% 100%;\n}\n\n  .defender-carried-unit-option .action-sheet-button:nth-child(15) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/defender_units/Dagger.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(2) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Warrior.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(3) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Rider.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(4) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Defender.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(5) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Swordsman.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(6) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Archer.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(7) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Catapult.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(8) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Knight.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(9) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Old Knight.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(10) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Giant.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(11) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Boat.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(12) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Ship.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(13) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Battleship.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(14) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Amphibian.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(15) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Crab.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(16) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Tridention.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(17) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Polytaur.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(18) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Navalon.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(19) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Baby Dragon.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(20) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Fire Dragon.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(21) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Ice Archer.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(22) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Battle Sled.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(23) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Ice Fortress.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(24) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Gaami.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(25) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Shaman.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(26) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Hexapod.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(27) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Phychi.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(28) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Raychi.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(29) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Kiton.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(30) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Old Kiton.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(31) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Doomux.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(32) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Exida.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(33) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Centipede.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(34) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Segment.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-unit-option .action-sheet-button:nth-child(35) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Dagger.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-carried-unit-option .action-sheet-button:nth-child(2) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Warrior.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-carried-unit-option .action-sheet-button:nth-child(3) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Rider.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-carried-unit-option .action-sheet-button:nth-child(4) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Defender.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-carried-unit-option .action-sheet-button:nth-child(5) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Swordsman.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-carried-unit-option .action-sheet-button:nth-child(6) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Archer.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-carried-unit-option .action-sheet-button:nth-child(7) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Catapult.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-carried-unit-option .action-sheet-button:nth-child(8) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Mind Bender.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-carried-unit-option .action-sheet-button:nth-child(9) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Knight.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-carried-unit-option .action-sheet-button:nth-child(10) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Old Knight.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-carried-unit-option .action-sheet-button:nth-child(11) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Giant.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-carried-unit-option .action-sheet-button:nth-child(12) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Polytaur.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-carried-unit-option .action-sheet-button:nth-child(13) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Nature Bunny.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-carried-unit-option .action-sheet-button:nth-child(14) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Cloak.png\");\n  background-size: 100% 100%;\n}\n\n  .attacker-carried-unit-option .action-sheet-button:nth-child(15) .action-sheet-button-inner:before {\n  content: \"\";\n  background: url(\"/assets/attacker_units/Dagger.png\");\n  background-size: 100% 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaXQtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFFRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUFOOztBQUlBO0VBQ0ksY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFTUTs7OztFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBSFo7O0FBWUk7RUFDSSxXQUFBO0VBQ0EscURBQUE7RUFDQSwwQkFBQTtBQVRSOztBQU1JO0VBQ0ksV0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7QUFIUjs7QUFBSTtFQUNJLFdBQUE7RUFDQSxzREFBQTtFQUNBLDBCQUFBO0FBR1I7O0FBTkk7RUFDSSxXQUFBO0VBQ0EsdURBQUE7RUFDQSwwQkFBQTtBQVNSOztBQVpJO0VBQ0ksV0FBQTtFQUNBLG9EQUFBO0VBQ0EsMEJBQUE7QUFlUjs7QUFsQkk7RUFDSSxXQUFBO0VBQ0Esc0RBQUE7RUFDQSwwQkFBQTtBQXFCUjs7QUF4Qkk7RUFDSSxXQUFBO0VBQ0Esb0RBQUE7RUFDQSwwQkFBQTtBQTJCUjs7QUE5Qkk7RUFDSSxXQUFBO0VBQ0Esd0RBQUE7RUFDQSwwQkFBQTtBQWlDUjs7QUFwQ0k7RUFDSSxXQUFBO0VBQ0EsbURBQUE7RUFDQSwwQkFBQTtBQXVDUjs7QUExQ0k7RUFDSSxXQUFBO0VBQ0Esa0RBQUE7RUFDQSwwQkFBQTtBQTZDUjs7QUFoREk7RUFDSSxXQUFBO0VBQ0Esa0RBQUE7RUFDQSwwQkFBQTtBQW1EUjs7QUF0REk7RUFDSSxXQUFBO0VBQ0Esd0RBQUE7RUFDQSwwQkFBQTtBQXlEUjs7QUE1REk7RUFDSSxXQUFBO0VBQ0EseURBQUE7RUFDQSwwQkFBQTtBQStEUjs7QUFsRUk7RUFDSSxXQUFBO0VBQ0EsdURBQUE7RUFDQSwwQkFBQTtBQXFFUjs7QUF4RUk7RUFDSSxXQUFBO0VBQ0Esa0RBQUE7RUFDQSwwQkFBQTtBQTJFUjs7QUE5RUk7RUFDSSxXQUFBO0VBQ0Esd0RBQUE7RUFDQSwwQkFBQTtBQWlGUjs7QUFwRkk7RUFDSSxXQUFBO0VBQ0Esc0RBQUE7RUFDQSwwQkFBQTtBQXVGUjs7QUExRkk7RUFDSSxXQUFBO0VBQ0EscURBQUE7RUFDQSwwQkFBQTtBQTZGUjs7QUFoR0k7RUFDSSxXQUFBO0VBQ0Esd0RBQUE7RUFDQSwwQkFBQTtBQW1HUjs7QUF0R0k7RUFDSSxXQUFBO0VBQ0EseURBQUE7RUFDQSwwQkFBQTtBQXlHUjs7QUE1R0k7RUFDSSxXQUFBO0VBQ0EseURBQUE7RUFDQSwwQkFBQTtBQStHUjs7QUFsSEk7RUFDSSxXQUFBO0VBQ0EsbURBQUE7RUFDQSwwQkFBQTtBQXFIUjs7QUF4SEk7RUFDSSxXQUFBO0VBQ0Esd0RBQUE7RUFDQSwwQkFBQTtBQTJIUjs7QUE5SEk7RUFDSSxXQUFBO0VBQ0EseURBQUE7RUFDQSwwQkFBQTtBQWlJUjs7QUFwSUk7RUFDSSxXQUFBO0VBQ0EsMERBQUE7RUFDQSwwQkFBQTtBQXVJUjs7QUExSUk7RUFDSSxXQUFBO0VBQ0EsbURBQUE7RUFDQSwwQkFBQTtBQTZJUjs7QUFoSkk7RUFDSSxXQUFBO0VBQ0Esb0RBQUE7RUFDQSwwQkFBQTtBQW1KUjs7QUF0Skk7RUFDSSxXQUFBO0VBQ0EscURBQUE7RUFDQSwwQkFBQTtBQXlKUjs7QUE1Skk7RUFDSSxXQUFBO0VBQ0Esb0RBQUE7RUFDQSwwQkFBQTtBQStKUjs7QUFsS0k7RUFDSSxXQUFBO0VBQ0Esb0RBQUE7RUFDQSwwQkFBQTtBQXFLUjs7QUF4S0k7RUFDSSxXQUFBO0VBQ0EsbURBQUE7RUFDQSwwQkFBQTtBQTJLUjs7QUE5S0k7RUFDSSxXQUFBO0VBQ0EsdURBQUE7RUFDQSwwQkFBQTtBQWlMUjs7QUFwTEk7RUFDSSxXQUFBO0VBQ0Esb0RBQUE7RUFDQSwwQkFBQTtBQXVMUjs7QUExTEk7RUFDSSxXQUFBO0VBQ0EsbURBQUE7RUFDQSwwQkFBQTtBQTZMUjs7QUFoTUk7RUFDSSxXQUFBO0VBQ0EsdURBQUE7RUFDQSwwQkFBQTtBQW1NUjs7QUF0TUk7RUFDSSxXQUFBO0VBQ0EscURBQUE7RUFDQSwwQkFBQTtBQXlNUjs7QUE1TUk7RUFDSSxXQUFBO0VBQ0EsMERBQUE7RUFDQSwwQkFBQTtBQStNUjs7QUFsTkk7RUFDSSxXQUFBO0VBQ0Esb0RBQUE7RUFDQSwwQkFBQTtBQXFOUjs7QUF4Tkk7RUFDSSxXQUFBO0VBQ0EsbURBQUE7RUFDQSwwQkFBQTtBQTJOUjs7QUE5Tkk7RUFDSSxXQUFBO0VBQ0Esb0RBQUE7RUFDQSwwQkFBQTtBQWlPUjs7QUF6Tkk7RUFDSSxXQUFBO0VBQ0EscURBQUE7RUFDQSwwQkFBQTtBQTROUjs7QUEvTkk7RUFDSSxXQUFBO0VBQ0EsbURBQUE7RUFDQSwwQkFBQTtBQWtPUjs7QUFyT0k7RUFDSSxXQUFBO0VBQ0Esc0RBQUE7RUFDQSwwQkFBQTtBQXdPUjs7QUEzT0k7RUFDSSxXQUFBO0VBQ0EsdURBQUE7RUFDQSwwQkFBQTtBQThPUjs7QUFqUEk7RUFDSSxXQUFBO0VBQ0Esb0RBQUE7RUFDQSwwQkFBQTtBQW9QUjs7QUF2UEk7RUFDSSxXQUFBO0VBQ0Esc0RBQUE7RUFDQSwwQkFBQTtBQTBQUjs7QUE3UEk7RUFDSSxXQUFBO0VBQ0EseURBQUE7RUFDQSwwQkFBQTtBQWdRUjs7QUFuUUk7RUFDSSxXQUFBO0VBQ0Esb0RBQUE7RUFDQSwwQkFBQTtBQXNRUjs7QUF6UUk7RUFDSSxXQUFBO0VBQ0Esd0RBQUE7RUFDQSwwQkFBQTtBQTRRUjs7QUEvUUk7RUFDSSxXQUFBO0VBQ0EsbURBQUE7RUFDQSwwQkFBQTtBQWtSUjs7QUFyUkk7RUFDSSxXQUFBO0VBQ0Esc0RBQUE7RUFDQSwwQkFBQTtBQXdSUjs7QUEzUkk7RUFDSSxXQUFBO0VBQ0EsMERBQUE7RUFDQSwwQkFBQTtBQThSUjs7QUFqU0k7RUFDSSxXQUFBO0VBQ0EsbURBQUE7RUFDQSwwQkFBQTtBQW9TUjs7QUF2U0k7RUFDSSxXQUFBO0VBQ0Esb0RBQUE7RUFDQSwwQkFBQTtBQTBTUjs7QUFsU0k7RUFDSSxXQUFBO0VBQ0EscURBQUE7RUFDQSwwQkFBQTtBQXFTUjs7QUF4U0k7RUFDSSxXQUFBO0VBQ0EsbURBQUE7RUFDQSwwQkFBQTtBQTJTUjs7QUE5U0k7RUFDSSxXQUFBO0VBQ0Esc0RBQUE7RUFDQSwwQkFBQTtBQWlUUjs7QUFwVEk7RUFDSSxXQUFBO0VBQ0EsdURBQUE7RUFDQSwwQkFBQTtBQXVUUjs7QUExVEk7RUFDSSxXQUFBO0VBQ0Esb0RBQUE7RUFDQSwwQkFBQTtBQTZUUjs7QUFoVUk7RUFDSSxXQUFBO0VBQ0Esc0RBQUE7RUFDQSwwQkFBQTtBQW1VUjs7QUF0VUk7RUFDSSxXQUFBO0VBQ0Esb0RBQUE7RUFDQSwwQkFBQTtBQXlVUjs7QUE1VUk7RUFDSSxXQUFBO0VBQ0Esd0RBQUE7RUFDQSwwQkFBQTtBQStVUjs7QUFsVkk7RUFDSSxXQUFBO0VBQ0EsbURBQUE7RUFDQSwwQkFBQTtBQXFWUjs7QUF4Vkk7RUFDSSxXQUFBO0VBQ0Esa0RBQUE7RUFDQSwwQkFBQTtBQTJWUjs7QUE5Vkk7RUFDSSxXQUFBO0VBQ0Esa0RBQUE7RUFDQSwwQkFBQTtBQWlXUjs7QUFwV0k7RUFDSSxXQUFBO0VBQ0Esd0RBQUE7RUFDQSwwQkFBQTtBQXVXUjs7QUExV0k7RUFDSSxXQUFBO0VBQ0EsdURBQUE7RUFDQSwwQkFBQTtBQTZXUjs7QUFoWEk7RUFDSSxXQUFBO0VBQ0Esa0RBQUE7RUFDQSwwQkFBQTtBQW1YUjs7QUF0WEk7RUFDSSxXQUFBO0VBQ0Esd0RBQUE7RUFDQSwwQkFBQTtBQXlYUjs7QUE1WEk7RUFDSSxXQUFBO0VBQ0Esc0RBQUE7RUFDQSwwQkFBQTtBQStYUjs7QUFsWUk7RUFDSSxXQUFBO0VBQ0EscURBQUE7RUFDQSwwQkFBQTtBQXFZUjs7QUF4WUk7RUFDSSxXQUFBO0VBQ0EseURBQUE7RUFDQSwwQkFBQTtBQTJZUjs7QUE5WUk7RUFDSSxXQUFBO0VBQ0EseURBQUE7RUFDQSwwQkFBQTtBQWlaUjs7QUFwWkk7RUFDSSxXQUFBO0VBQ0Esd0RBQUE7RUFDQSwwQkFBQTtBQXVaUjs7QUExWkk7RUFDSSxXQUFBO0VBQ0EseURBQUE7RUFDQSwwQkFBQTtBQTZaUjs7QUFoYUk7RUFDSSxXQUFBO0VBQ0EsMERBQUE7RUFDQSwwQkFBQTtBQW1hUjs7QUF0YUk7RUFDSSxXQUFBO0VBQ0EsbURBQUE7RUFDQSwwQkFBQTtBQXlhUjs7QUE1YUk7RUFDSSxXQUFBO0VBQ0Esb0RBQUE7RUFDQSwwQkFBQTtBQSthUjs7QUFsYkk7RUFDSSxXQUFBO0VBQ0EscURBQUE7RUFDQSwwQkFBQTtBQXFiUjs7QUF4Ykk7RUFDSSxXQUFBO0VBQ0Esb0RBQUE7RUFDQSwwQkFBQTtBQTJiUjs7QUE5Ykk7RUFDSSxXQUFBO0VBQ0Esb0RBQUE7RUFDQSwwQkFBQTtBQWljUjs7QUFwY0k7RUFDSSxXQUFBO0VBQ0EsbURBQUE7RUFDQSwwQkFBQTtBQXVjUjs7QUExY0k7RUFDSSxXQUFBO0VBQ0EsdURBQUE7RUFDQSwwQkFBQTtBQTZjUjs7QUFoZEk7RUFDSSxXQUFBO0VBQ0Esb0RBQUE7RUFDQSwwQkFBQTtBQW1kUjs7QUF0ZEk7RUFDSSxXQUFBO0VBQ0EsbURBQUE7RUFDQSwwQkFBQTtBQXlkUjs7QUE1ZEk7RUFDSSxXQUFBO0VBQ0EsdURBQUE7RUFDQSwwQkFBQTtBQStkUjs7QUFsZUk7RUFDSSxXQUFBO0VBQ0EscURBQUE7RUFDQSwwQkFBQTtBQXFlUjs7QUF4ZUk7RUFDSSxXQUFBO0VBQ0Esb0RBQUE7RUFDQSwwQkFBQTtBQTJlUjs7QUFuZUk7RUFDSSxXQUFBO0VBQ0EscURBQUE7RUFDQSwwQkFBQTtBQXNlUjs7QUF6ZUk7RUFDSSxXQUFBO0VBQ0EsbURBQUE7RUFDQSwwQkFBQTtBQTRlUjs7QUEvZUk7RUFDSSxXQUFBO0VBQ0Esc0RBQUE7RUFDQSwwQkFBQTtBQWtmUjs7QUFyZkk7RUFDSSxXQUFBO0VBQ0EsdURBQUE7RUFDQSwwQkFBQTtBQXdmUjs7QUEzZkk7RUFDSSxXQUFBO0VBQ0Esb0RBQUE7RUFDQSwwQkFBQTtBQThmUjs7QUFqZ0JJO0VBQ0ksV0FBQTtFQUNBLHNEQUFBO0VBQ0EsMEJBQUE7QUFvZ0JSOztBQXZnQkk7RUFDSSxXQUFBO0VBQ0EseURBQUE7RUFDQSwwQkFBQTtBQTBnQlI7O0FBN2dCSTtFQUNJLFdBQUE7RUFDQSxvREFBQTtFQUNBLDBCQUFBO0FBZ2hCUjs7QUFuaEJJO0VBQ0ksV0FBQTtFQUNBLHdEQUFBO0VBQ0EsMEJBQUE7QUFzaEJSOztBQXpoQkk7RUFDSSxXQUFBO0VBQ0EsbURBQUE7RUFDQSwwQkFBQTtBQTRoQlI7O0FBL2hCSTtFQUNJLFdBQUE7RUFDQSxzREFBQTtFQUNBLDBCQUFBO0FBa2lCUjs7QUFyaUJJO0VBQ0ksV0FBQTtFQUNBLDBEQUFBO0VBQ0EsMEJBQUE7QUF3aUJSOztBQTNpQkk7RUFDSSxXQUFBO0VBQ0EsbURBQUE7RUFDQSwwQkFBQTtBQThpQlI7O0FBampCSTtFQUNJLFdBQUE7RUFDQSxvREFBQTtFQUNBLDBCQUFBO0FBb2pCUiIsImZpbGUiOiJ1bml0LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtaHAsIC5pbnB1dC1jb3VudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIGZsZXg6IHVuc2V0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uaW5wdXQtaHAtYXJyb3csIC5pbnB1dC1jb3VudC1hcnJvdyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi51bml0LWltYWdlIHtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgbWFyZ2luOiB7XHJcbiAgICAgIHRvcDogNXB4O1xyXG4gICAgICBib3R0b206IDVweDtcclxuICAgICAgbGVmdDogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLnJhbmdlLWFycm93cy1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHBhZGRpbmctaW5saW5lOiA4cHg7XHJcbiAgICBwYWRkaW5nLWJsb2NrOiA2cHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCB7XHJcbiAgICAuZGVmZW5kZXItdW5pdC1vcHRpb24sXHJcbiAgICAuZGVmZW5kZXItY2FycmllZC11bml0LW9wdGlvbixcclxuICAgIC5hdHRhY2tlci11bml0LW9wdGlvbixcclxuICAgIC5hdHRhY2tlci1jYXJyaWVkLXVuaXQtb3B0aW9uIHtcclxuICAgICAgICAuYWN0aW9uLXNoZWV0LWJ1dHRvbiAgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXI6YmVmb3JlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDsgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIE1ha2Ugc3VyZSBkZWZlbmRlclVuaXRzLCBhdHRhY2tlclVuaXRzLCBsYW5nVW5pdHMgbGlzdCBpcyBzeW5jIGluIGRhdGEvdW5pdC1saXN0LmNvbnN0LnRzIGluIHRlcm1zIG9mIG9yZGVyIGFuZCB1bml0c1xyXG4kZGVmZW5kZXJVbml0czogJ1dhcnJpb3InLCAnUmlkZXInLCAnRGVmZW5kZXInLCAnU3dvcmRzbWFuJywgJ0FyY2hlcicsICdDYXRhcHVsdCcsICdLbmlnaHQnLCAnT2xkIEtuaWdodCcsICdHaWFudCcsICdCb2F0JywgJ1NoaXAnLCAnQmF0dGxlc2hpcCcsICdNaW5kIEJlbmRlcicsICdBbXBoaWJpYW4nLCAnQ3JhYicsICdUcmlkZW50aW9uJywgJ1BvbHl0YXVyJywgJ05hdmFsb24nLCAnRHJhZ29uIEVnZycsICdCYWJ5IERyYWdvbicsICdGaXJlIERyYWdvbicsICdNb29uaScsICdJY2UgQXJjaGVyJywgJ0JhdHRsZSBTbGVkJywgJ0ljZSBGb3J0cmVzcycsICdHYWFtaScsICdTaGFtYW4nLCAnSGV4YXBvZCcsICdQaHljaGknLCAnUmF5Y2hpJywgJ0tpdG9uJywgJ09sZCBLaXRvbicsICdEb29tdXgnLCAnRXhpZGEnLCAnQ2VudGlwZWRlJywgJ1NlZ21lbnQnLCAnTmF0dXJlIEJ1bm55JywgJ0RpbmdoeScsICdDbG9haycsICdEYWdnZXInO1xyXG4kaTogMjtcclxuQGVhY2ggJHVuaXQgaW4gJGRlZmVuZGVyVW5pdHMge1xyXG4gICAgOjpuZy1kZWVwIC5kZWZlbmRlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoI3skaX0pIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9kZWZlbmRlcl91bml0cy8jeyR1bml0fS5wbmdcIik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcblxyXG4gICAgfVxyXG4gICAgJGk6ICRpICsgMTtcclxufVxyXG4kY2FycmllZFVuaXRzOiAnV2FycmlvcicsICdSaWRlcicsICdEZWZlbmRlcicsICdTd29yZHNtYW4nLCAnQXJjaGVyJywgJ0NhdGFwdWx0JywgJ01pbmQgQmVuZGVyJywgJ0tuaWdodCcsICdPbGQgS25pZ2h0JywgJ0dpYW50JywgJ1BvbHl0YXVyJywgJ05hdHVyZSBCdW5ueScsICdDbG9haycsICdEYWdnZXInO1xyXG4kaTogMjtcclxuQGVhY2ggJHVuaXQgaW4gJGNhcnJpZWRVbml0cyB7XHJcbiAgICA6Om5nLWRlZXAgLmRlZmVuZGVyLWNhcnJpZWQtdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKCN7JGl9KSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvZGVmZW5kZXJfdW5pdHMvI3skdW5pdH0ucG5nXCIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgfVxyXG4gICAgJGk6ICRpICsgMTtcclxufVxyXG5cclxuJGF0dGFja2VyVW5pdHM6ICdXYXJyaW9yJywgJ1JpZGVyJywgJ0RlZmVuZGVyJywgJ1N3b3Jkc21hbicsICdBcmNoZXInLCAnQ2F0YXB1bHQnLCAnS25pZ2h0JywgJ09sZCBLbmlnaHQnLCAnR2lhbnQnLCAnQm9hdCcsICdTaGlwJywgJ0JhdHRsZXNoaXAnLCAnQW1waGliaWFuJywgJ0NyYWInLCAnVHJpZGVudGlvbicsICdQb2x5dGF1cicsICdOYXZhbG9uJywgJ0JhYnkgRHJhZ29uJywgJ0ZpcmUgRHJhZ29uJywgJ0ljZSBBcmNoZXInLCAnQmF0dGxlIFNsZWQnLCAnSWNlIEZvcnRyZXNzJywgJ0dhYW1pJywgJ1NoYW1hbicsICdIZXhhcG9kJywgJ1BoeWNoaScsICdSYXljaGknLCAnS2l0b24nLCAnT2xkIEtpdG9uJywgJ0Rvb211eCcsICdFeGlkYScsICdDZW50aXBlZGUnLCAnU2VnbWVudCcsICdEYWdnZXInO1xyXG4kaTogMjtcclxuQGVhY2ggJHVuaXQgaW4gJGF0dGFja2VyVW5pdHMge1xyXG4gICAgOjpuZy1kZWVwIC5hdHRhY2tlci11bml0LW9wdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbjpudGgtY2hpbGQoI3skaX0pIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9hdHRhY2tlcl91bml0cy8jeyR1bml0fS5wbmdcIik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICB9XHJcbiAgICAkaTogJGkgKyAxO1xyXG59XHJcblxyXG4kY2FycmllZFVuaXRzOiAnV2FycmlvcicsICdSaWRlcicsICdEZWZlbmRlcicsICdTd29yZHNtYW4nLCAnQXJjaGVyJywgJ0NhdGFwdWx0JywgJ01pbmQgQmVuZGVyJywgJ0tuaWdodCcsICdPbGQgS25pZ2h0JywgJ0dpYW50JywgJ1BvbHl0YXVyJywgJ05hdHVyZSBCdW5ueScsICdDbG9haycsICdEYWdnZXInO1xyXG4kaTogMjtcclxuQGVhY2ggJHVuaXQgaW4gJGNhcnJpZWRVbml0cyB7XHJcbiAgICA6Om5nLWRlZXAgLmF0dGFja2VyLWNhcnJpZWQtdW5pdC1vcHRpb24gLmFjdGlvbi1zaGVldC1idXR0b246bnRoLWNoaWxkKCN7JGl9KSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lcjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYXR0YWNrZXJfdW5pdHMvI3skdW5pdH0ucG5nXCIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgfVxyXG4gICAgJGk6ICRpICsgMTtcclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 3135:
/*!******************************************************!*\
  !*** ./src/app/services/google-analytics.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleAnalyticsService": () => (/* binding */ GoogleAnalyticsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class GoogleAnalyticsService {
    emitEvent(eventName, eventCategory, eventLabel = null, eventParams, eventValue = null) {
        gtag('event', eventName, {
            event_category: eventCategory,
            event_label: eventLabel,
            event_params: eventParams,
            event_value: eventValue
        });
    }
}
GoogleAnalyticsService.ɵfac = function GoogleAnalyticsService_Factory(t) { return new (t || GoogleAnalyticsService)(); };
GoogleAnalyticsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GoogleAnalyticsService, factory: GoogleAnalyticsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8029:
/*!******************************************************!*\
  !*** ./src/app/validators/carried-unit.validator.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "carriedUnitValidator": () => (/* binding */ carriedUnitValidator)
/* harmony export */ });
/* harmony import */ var _data_unit_list_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/unit-list.const */ 7575);

function carriedUnitValidator(fg) {
    const unit = fg.get('unit').value;
    if (_data_unit_list_const__WEBPACK_IMPORTED_MODULE_0__.carryUnits.includes(unit) && !fg.get('carriedUnit').value) {
        return { required: true, name: 'carriedUnit' };
    }
    return null;
}


/***/ }),

/***/ 9058:
/*!************************************************!*\
  !*** ./src/app/validators/max-hp.validator.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "maxHpValidator": () => (/* binding */ maxHpValidator)
/* harmony export */ });
/* harmony import */ var _utils_calculate_max_hp_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/calculate-max-hp.util */ 724);

function maxHpValidator(fg) {
    const maxHp = (0,_utils_calculate_max_hp_util__WEBPACK_IMPORTED_MODULE_0__.calculateMaxHp)(fg.value);
    const hp = fg.get('hp').value;
    if (hp <= maxHp) {
        return null;
    }
    const errors = { max: true };
    fg.get('hp').setErrors(errors);
    return errors;
}


/***/ }),

/***/ 823:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounceTime": () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ 14);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 328);


function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
  return source => source.lift(new DebounceTimeOperator(dueTime, scheduler));
}

class DebounceTimeOperator {
  constructor(dueTime, scheduler) {
    this.dueTime = dueTime;
    this.scheduler = scheduler;
  }

  call(subscriber, source) {
    return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
  }

}

class DebounceTimeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber {
  constructor(destination, dueTime, scheduler) {
    super(destination);
    this.dueTime = dueTime;
    this.scheduler = scheduler;
    this.debouncedSubscription = null;
    this.lastValue = null;
    this.hasValue = false;
  }

  _next(value) {
    this.clearDebounce();
    this.lastValue = value;
    this.hasValue = true;
    this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
  }

  _complete() {
    this.debouncedNext();
    this.destination.complete();
  }

  debouncedNext() {
    this.clearDebounce();

    if (this.hasValue) {
      const {
        lastValue
      } = this;
      this.lastValue = null;
      this.hasValue = false;
      this.destination.next(lastValue);
    }
  }

  clearDebounce() {
    const debouncedSubscription = this.debouncedSubscription;

    if (debouncedSubscription !== null) {
      this.remove(debouncedSubscription);
      debouncedSubscription.unsubscribe();
      this.debouncedSubscription = null;
    }
  }

}

function dispatchNext(subscriber) {
  subscriber.debouncedNext();
}

/***/ }),

/***/ 5921:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/takeUntil.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "takeUntil": () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerSubscribe */ 2831);

function takeUntil(notifier) {
  return source => source.lift(new TakeUntilOperator(notifier));
}

class TakeUntilOperator {
  constructor(notifier) {
    this.notifier = notifier;
  }

  call(subscriber, source) {
    const takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
    const notifierSubscription = (0,_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.innerSubscribe)(this.notifier, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleInnerSubscriber(takeUntilSubscriber));

    if (notifierSubscription && !takeUntilSubscriber.seenValue) {
      takeUntilSubscriber.add(notifierSubscription);
      return source.subscribe(takeUntilSubscriber);
    }

    return takeUntilSubscriber;
  }

}

class TakeUntilSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleOuterSubscriber {
  constructor(destination) {
    super(destination);
    this.seenValue = false;
  }

  notifyNext() {
    this.seenValue = true;
    this.complete();
  }

  notifyComplete() {}

}

/***/ }),

/***/ 8987:
/*!********************************************************!*\
  !*** ./node_modules/@angular/common/fesm2020/http.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTTP_INTERCEPTORS": () => (/* binding */ HTTP_INTERCEPTORS),
/* harmony export */   "HttpBackend": () => (/* binding */ HttpBackend),
/* harmony export */   "HttpClient": () => (/* binding */ HttpClient),
/* harmony export */   "HttpClientJsonpModule": () => (/* binding */ HttpClientJsonpModule),
/* harmony export */   "HttpClientModule": () => (/* binding */ HttpClientModule),
/* harmony export */   "HttpClientXsrfModule": () => (/* binding */ HttpClientXsrfModule),
/* harmony export */   "HttpContext": () => (/* binding */ HttpContext),
/* harmony export */   "HttpContextToken": () => (/* binding */ HttpContextToken),
/* harmony export */   "HttpErrorResponse": () => (/* binding */ HttpErrorResponse),
/* harmony export */   "HttpEventType": () => (/* binding */ HttpEventType),
/* harmony export */   "HttpHandler": () => (/* binding */ HttpHandler),
/* harmony export */   "HttpHeaderResponse": () => (/* binding */ HttpHeaderResponse),
/* harmony export */   "HttpHeaders": () => (/* binding */ HttpHeaders),
/* harmony export */   "HttpParams": () => (/* binding */ HttpParams),
/* harmony export */   "HttpRequest": () => (/* binding */ HttpRequest),
/* harmony export */   "HttpResponse": () => (/* binding */ HttpResponse),
/* harmony export */   "HttpResponseBase": () => (/* binding */ HttpResponseBase),
/* harmony export */   "HttpUrlEncodingCodec": () => (/* binding */ HttpUrlEncodingCodec),
/* harmony export */   "HttpXhrBackend": () => (/* binding */ HttpXhrBackend),
/* harmony export */   "HttpXsrfTokenExtractor": () => (/* binding */ HttpXsrfTokenExtractor),
/* harmony export */   "JsonpClientBackend": () => (/* binding */ JsonpClientBackend),
/* harmony export */   "JsonpInterceptor": () => (/* binding */ JsonpInterceptor),
/* harmony export */   "XhrFactory": () => (/* binding */ XhrFactory),
/* harmony export */   "ɵHttpInterceptingHandler": () => (/* binding */ HttpInterceptingHandler)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1133);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/**
 * @license Angular v14.2.7
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */






/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 * @publicApi
 */

class HttpHandler {}
/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 * @publicApi
 */


class HttpBackend {}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Represents the header configuration options for an HTTP request.
 * Instances are immutable. Modifying methods return a cloned
 * instance with the change. The original object is never changed.
 *
 * @publicApi
 */


class HttpHeaders {
  /**  Constructs a new HTTP header object with the given values.*/
  constructor(headers) {
    /**
     * Internal map of lowercased header names to the normalized
     * form of the name (the form seen first).
     */
    this.normalizedNames = new Map();
    /**
     * Queued updates to be materialized the next initialization.
     */

    this.lazyUpdate = null;

    if (!headers) {
      this.headers = new Map();
    } else if (typeof headers === 'string') {
      this.lazyInit = () => {
        this.headers = new Map();
        headers.split('\n').forEach(line => {
          const index = line.indexOf(':');

          if (index > 0) {
            const name = line.slice(0, index);
            const key = name.toLowerCase();
            const value = line.slice(index + 1).trim();
            this.maybeSetNormalizedName(name, key);

            if (this.headers.has(key)) {
              this.headers.get(key).push(value);
            } else {
              this.headers.set(key, [value]);
            }
          }
        });
      };
    } else {
      this.lazyInit = () => {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          assertValidHeaders(headers);
        }

        this.headers = new Map();
        Object.keys(headers).forEach(name => {
          let values = headers[name];
          const key = name.toLowerCase();

          if (typeof values === 'string') {
            values = [values];
          }

          if (values.length > 0) {
            this.headers.set(key, values);
            this.maybeSetNormalizedName(name, key);
          }
        });
      };
    }
  }
  /**
   * Checks for existence of a given header.
   *
   * @param name The header name to check for existence.
   *
   * @returns True if the header exists, false otherwise.
   */


  has(name) {
    this.init();
    return this.headers.has(name.toLowerCase());
  }
  /**
   * Retrieves the first value of a given header.
   *
   * @param name The header name.
   *
   * @returns The value string if the header exists, null otherwise
   */


  get(name) {
    this.init();
    const values = this.headers.get(name.toLowerCase());
    return values && values.length > 0 ? values[0] : null;
  }
  /**
   * Retrieves the names of the headers.
   *
   * @returns A list of header names.
   */


  keys() {
    this.init();
    return Array.from(this.normalizedNames.values());
  }
  /**
   * Retrieves a list of values for a given header.
   *
   * @param name The header name from which to retrieve values.
   *
   * @returns A string of values if the header exists, null otherwise.
   */


  getAll(name) {
    this.init();
    return this.headers.get(name.toLowerCase()) || null;
  }
  /**
   * Appends a new value to the existing set of values for a header
   * and returns them in a clone of the original instance.
   *
   * @param name The header name for which to append the values.
   * @param value The value to append.
   *
   * @returns A clone of the HTTP headers object with the value appended to the given header.
   */


  append(name, value) {
    return this.clone({
      name,
      value,
      op: 'a'
    });
  }
  /**
   * Sets or modifies a value for a given header in a clone of the original instance.
   * If the header already exists, its value is replaced with the given value
   * in the returned object.
   *
   * @param name The header name.
   * @param value The value or values to set or override for the given header.
   *
   * @returns A clone of the HTTP headers object with the newly set header value.
   */


  set(name, value) {
    return this.clone({
      name,
      value,
      op: 's'
    });
  }
  /**
   * Deletes values for a given header in a clone of the original instance.
   *
   * @param name The header name.
   * @param value The value or values to delete for the given header.
   *
   * @returns A clone of the HTTP headers object with the given value deleted.
   */


  delete(name, value) {
    return this.clone({
      name,
      value,
      op: 'd'
    });
  }

  maybeSetNormalizedName(name, lcName) {
    if (!this.normalizedNames.has(lcName)) {
      this.normalizedNames.set(lcName, name);
    }
  }

  init() {
    if (!!this.lazyInit) {
      if (this.lazyInit instanceof HttpHeaders) {
        this.copyFrom(this.lazyInit);
      } else {
        this.lazyInit();
      }

      this.lazyInit = null;

      if (!!this.lazyUpdate) {
        this.lazyUpdate.forEach(update => this.applyUpdate(update));
        this.lazyUpdate = null;
      }
    }
  }

  copyFrom(other) {
    other.init();
    Array.from(other.headers.keys()).forEach(key => {
      this.headers.set(key, other.headers.get(key));
      this.normalizedNames.set(key, other.normalizedNames.get(key));
    });
  }

  clone(update) {
    const clone = new HttpHeaders();
    clone.lazyInit = !!this.lazyInit && this.lazyInit instanceof HttpHeaders ? this.lazyInit : this;
    clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
    return clone;
  }

  applyUpdate(update) {
    const key = update.name.toLowerCase();

    switch (update.op) {
      case 'a':
      case 's':
        let value = update.value;

        if (typeof value === 'string') {
          value = [value];
        }

        if (value.length === 0) {
          return;
        }

        this.maybeSetNormalizedName(update.name, key);
        const base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
        base.push(...value);
        this.headers.set(key, base);
        break;

      case 'd':
        const toDelete = update.value;

        if (!toDelete) {
          this.headers.delete(key);
          this.normalizedNames.delete(key);
        } else {
          let existing = this.headers.get(key);

          if (!existing) {
            return;
          }

          existing = existing.filter(value => toDelete.indexOf(value) === -1);

          if (existing.length === 0) {
            this.headers.delete(key);
            this.normalizedNames.delete(key);
          } else {
            this.headers.set(key, existing);
          }
        }

        break;
    }
  }
  /**
   * @internal
   */


  forEach(fn) {
    this.init();
    Array.from(this.normalizedNames.keys()).forEach(key => fn(this.normalizedNames.get(key), this.headers.get(key)));
  }

}
/**
 * Verifies that the headers object has the right shape: the values
 * must be either strings or arrays. Throws an error if an invalid
 * header value is present.
 */


function assertValidHeaders(headers) {
  for (const [key, value] of Object.entries(headers)) {
    if (typeof value !== 'string' && !Array.isArray(value)) {
      throw new Error(`Unexpected value of the \`${key}\` header provided. ` + `Expecting either a string or an array, but got: \`${value}\`.`);
    }
  }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Provides encoding and decoding of URL parameter and query-string values.
 *
 * Serializes and parses URL parameter keys and values to encode and decode them.
 * If you pass URL query parameters without encoding,
 * the query parameters can be misinterpreted at the receiving end.
 *
 *
 * @publicApi
 */


class HttpUrlEncodingCodec {
  /**
   * Encodes a key name for a URL parameter or query-string.
   * @param key The key name.
   * @returns The encoded key name.
   */
  encodeKey(key) {
    return standardEncoding(key);
  }
  /**
   * Encodes the value of a URL parameter or query-string.
   * @param value The value.
   * @returns The encoded value.
   */


  encodeValue(value) {
    return standardEncoding(value);
  }
  /**
   * Decodes an encoded URL parameter or query-string key.
   * @param key The encoded key name.
   * @returns The decoded key name.
   */


  decodeKey(key) {
    return decodeURIComponent(key);
  }
  /**
   * Decodes an encoded URL parameter or query-string value.
   * @param value The encoded value.
   * @returns The decoded value.
   */


  decodeValue(value) {
    return decodeURIComponent(value);
  }

}

function paramParser(rawParams, codec) {
  const map = new Map();

  if (rawParams.length > 0) {
    // The `window.location.search` can be used while creating an instance of the `HttpParams` class
    // (e.g. `new HttpParams({ fromString: window.location.search })`). The `window.location.search`
    // may start with the `?` char, so we strip it if it's present.
    const params = rawParams.replace(/^\?/, '').split('&');
    params.forEach(param => {
      const eqIdx = param.indexOf('=');
      const [key, val] = eqIdx == -1 ? [codec.decodeKey(param), ''] : [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))];
      const list = map.get(key) || [];
      list.push(val);
      map.set(key, list);
    });
  }

  return map;
}
/**
 * Encode input string with standard encodeURIComponent and then un-encode specific characters.
 */


const STANDARD_ENCODING_REGEX = /%(\d[a-f0-9])/gi;
const STANDARD_ENCODING_REPLACEMENTS = {
  '40': '@',
  '3A': ':',
  '24': '$',
  '2C': ',',
  '3B': ';',
  '3D': '=',
  '3F': '?',
  '2F': '/'
};

function standardEncoding(v) {
  return encodeURIComponent(v).replace(STANDARD_ENCODING_REGEX, (s, t) => {
    var _STANDARD_ENCODING_RE;

    return (_STANDARD_ENCODING_RE = STANDARD_ENCODING_REPLACEMENTS[t]) !== null && _STANDARD_ENCODING_RE !== void 0 ? _STANDARD_ENCODING_RE : s;
  });
}

function valueToString(value) {
  return `${value}`;
}
/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immutable; all mutation operations return a new instance.
 *
 * @publicApi
 */


class HttpParams {
  constructor(options = {}) {
    this.updates = null;
    this.cloneFrom = null;
    this.encoder = options.encoder || new HttpUrlEncodingCodec();

    if (!!options.fromString) {
      if (!!options.fromObject) {
        throw new Error(`Cannot specify both fromString and fromObject.`);
      }

      this.map = paramParser(options.fromString, this.encoder);
    } else if (!!options.fromObject) {
      this.map = new Map();
      Object.keys(options.fromObject).forEach(key => {
        const value = options.fromObject[key]; // convert the values to strings

        const values = Array.isArray(value) ? value.map(valueToString) : [valueToString(value)];
        this.map.set(key, values);
      });
    } else {
      this.map = null;
    }
  }
  /**
   * Reports whether the body includes one or more values for a given parameter.
   * @param param The parameter name.
   * @returns True if the parameter has one or more values,
   * false if it has no value or is not present.
   */


  has(param) {
    this.init();
    return this.map.has(param);
  }
  /**
   * Retrieves the first value for a parameter.
   * @param param The parameter name.
   * @returns The first value of the given parameter,
   * or `null` if the parameter is not present.
   */


  get(param) {
    this.init();
    const res = this.map.get(param);
    return !!res ? res[0] : null;
  }
  /**
   * Retrieves all values for a  parameter.
   * @param param The parameter name.
   * @returns All values in a string array,
   * or `null` if the parameter not present.
   */


  getAll(param) {
    this.init();
    return this.map.get(param) || null;
  }
  /**
   * Retrieves all the parameters for this body.
   * @returns The parameter names in a string array.
   */


  keys() {
    this.init();
    return Array.from(this.map.keys());
  }
  /**
   * Appends a new value to existing values for a parameter.
   * @param param The parameter name.
   * @param value The new value to add.
   * @return A new body with the appended value.
   */


  append(param, value) {
    return this.clone({
      param,
      value,
      op: 'a'
    });
  }
  /**
   * Constructs a new body with appended values for the given parameter name.
   * @param params parameters and values
   * @return A new body with the new value.
   */


  appendAll(params) {
    const updates = [];
    Object.keys(params).forEach(param => {
      const value = params[param];

      if (Array.isArray(value)) {
        value.forEach(_value => {
          updates.push({
            param,
            value: _value,
            op: 'a'
          });
        });
      } else {
        updates.push({
          param,
          value: value,
          op: 'a'
        });
      }
    });
    return this.clone(updates);
  }
  /**
   * Replaces the value for a parameter.
   * @param param The parameter name.
   * @param value The new value.
   * @return A new body with the new value.
   */


  set(param, value) {
    return this.clone({
      param,
      value,
      op: 's'
    });
  }
  /**
   * Removes a given value or all values from a parameter.
   * @param param The parameter name.
   * @param value The value to remove, if provided.
   * @return A new body with the given value removed, or with all values
   * removed if no value is specified.
   */


  delete(param, value) {
    return this.clone({
      param,
      value,
      op: 'd'
    });
  }
  /**
   * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
   * separated by `&`s.
   */


  toString() {
    this.init();
    return this.keys().map(key => {
      const eKey = this.encoder.encodeKey(key); // `a: ['1']` produces `'a=1'`
      // `b: []` produces `''`
      // `c: ['1', '2']` produces `'c=1&c=2'`

      return this.map.get(key).map(value => eKey + '=' + this.encoder.encodeValue(value)).join('&');
    }) // filter out empty values because `b: []` produces `''`
    // which results in `a=1&&c=1&c=2` instead of `a=1&c=1&c=2` if we don't
    .filter(param => param !== '').join('&');
  }

  clone(update) {
    const clone = new HttpParams({
      encoder: this.encoder
    });
    clone.cloneFrom = this.cloneFrom || this;
    clone.updates = (this.updates || []).concat(update);
    return clone;
  }

  init() {
    if (this.map === null) {
      this.map = new Map();
    }

    if (this.cloneFrom !== null) {
      this.cloneFrom.init();
      this.cloneFrom.keys().forEach(key => this.map.set(key, this.cloneFrom.map.get(key)));
      this.updates.forEach(update => {
        switch (update.op) {
          case 'a':
          case 's':
            const base = (update.op === 'a' ? this.map.get(update.param) : undefined) || [];
            base.push(valueToString(update.value));
            this.map.set(update.param, base);
            break;

          case 'd':
            if (update.value !== undefined) {
              let base = this.map.get(update.param) || [];
              const idx = base.indexOf(valueToString(update.value));

              if (idx !== -1) {
                base.splice(idx, 1);
              }

              if (base.length > 0) {
                this.map.set(update.param, base);
              } else {
                this.map.delete(update.param);
              }
            } else {
              this.map.delete(update.param);
              break;
            }

        }
      });
      this.cloneFrom = this.updates = null;
    }
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * A token used to manipulate and access values stored in `HttpContext`.
 *
 * @publicApi
 */


class HttpContextToken {
  constructor(defaultValue) {
    this.defaultValue = defaultValue;
  }

}
/**
 * Http context stores arbitrary user defined values and ensures type safety without
 * actually knowing the types. It is backed by a `Map` and guarantees that keys do not clash.
 *
 * This context is mutable and is shared between cloned requests unless explicitly specified.
 *
 * @usageNotes
 *
 * ### Usage Example
 *
 * ```typescript
 * // inside cache.interceptors.ts
 * export const IS_CACHE_ENABLED = new HttpContextToken<boolean>(() => false);
 *
 * export class CacheInterceptor implements HttpInterceptor {
 *
 *   intercept(req: HttpRequest<any>, delegate: HttpHandler): Observable<HttpEvent<any>> {
 *     if (req.context.get(IS_CACHE_ENABLED) === true) {
 *       return ...;
 *     }
 *     return delegate.handle(req);
 *   }
 * }
 *
 * // inside a service
 *
 * this.httpClient.get('/api/weather', {
 *   context: new HttpContext().set(IS_CACHE_ENABLED, true)
 * }).subscribe(...);
 * ```
 *
 * @publicApi
 */


class HttpContext {
  constructor() {
    this.map = new Map();
  }
  /**
   * Store a value in the context. If a value is already present it will be overwritten.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   * @param value The value to store.
   *
   * @returns A reference to itself for easy chaining.
   */


  set(token, value) {
    this.map.set(token, value);
    return this;
  }
  /**
   * Retrieve the value associated with the given token.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   *
   * @returns The stored value or default if one is defined.
   */


  get(token) {
    if (!this.map.has(token)) {
      this.map.set(token, token.defaultValue());
    }

    return this.map.get(token);
  }
  /**
   * Delete the value associated with the given token.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   *
   * @returns A reference to itself for easy chaining.
   */


  delete(token) {
    this.map.delete(token);
    return this;
  }
  /**
   * Checks for existence of a given token.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   *
   * @returns True if the token exists, false otherwise.
   */


  has(token) {
    return this.map.has(token);
  }
  /**
   * @returns a list of tokens currently stored in the context.
   */


  keys() {
    return this.map.keys();
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Determine whether the given HTTP method may include a body.
 */


function mightHaveBody(method) {
  switch (method) {
    case 'DELETE':
    case 'GET':
    case 'HEAD':
    case 'OPTIONS':
    case 'JSONP':
      return false;

    default:
      return true;
  }
}
/**
 * Safely assert whether the given value is an ArrayBuffer.
 *
 * In some execution environments ArrayBuffer is not defined.
 */


function isArrayBuffer(value) {
  return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 */


function isBlob(value) {
  return typeof Blob !== 'undefined' && value instanceof Blob;
}
/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
 */


function isFormData(value) {
  return typeof FormData !== 'undefined' && value instanceof FormData;
}
/**
 * Safely assert whether the given value is a URLSearchParams instance.
 *
 * In some execution environments URLSearchParams is not defined.
 */


function isUrlSearchParams(value) {
  return typeof URLSearchParams !== 'undefined' && value instanceof URLSearchParams;
}
/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * @publicApi
 */


class HttpRequest {
  constructor(method, url, third, fourth) {
    this.url = url;
    /**
     * The request body, or `null` if one isn't set.
     *
     * Bodies are not enforced to be immutable, as they can include a reference to any
     * user-defined data type. However, interceptors should take care to preserve
     * idempotence by treating them as such.
     */

    this.body = null;
    /**
     * Whether this request should be made in a way that exposes progress events.
     *
     * Progress events are expensive (change detection runs on each event) and so
     * they should only be requested if the consumer intends to monitor them.
     */

    this.reportProgress = false;
    /**
     * Whether this request should be sent with outgoing credentials (cookies).
     */

    this.withCredentials = false;
    /**
     * The expected response type of the server.
     *
     * This is used to parse the response appropriately before returning it to
     * the requestee.
     */

    this.responseType = 'json';
    this.method = method.toUpperCase(); // Next, need to figure out which argument holds the HttpRequestInit
    // options, if any.

    let options; // Check whether a body argument is expected. The only valid way to omit
    // the body argument is to use a known no-body method like GET.

    if (mightHaveBody(this.method) || !!fourth) {
      // Body is the third argument, options are the fourth.
      this.body = third !== undefined ? third : null;
      options = fourth;
    } else {
      // No body required, options are the third argument. The body stays null.
      options = third;
    } // If options have been passed, interpret them.


    if (options) {
      // Normalize reportProgress and withCredentials.
      this.reportProgress = !!options.reportProgress;
      this.withCredentials = !!options.withCredentials; // Override default response type of 'json' if one is provided.

      if (!!options.responseType) {
        this.responseType = options.responseType;
      } // Override headers if they're provided.


      if (!!options.headers) {
        this.headers = options.headers;
      }

      if (!!options.context) {
        this.context = options.context;
      }

      if (!!options.params) {
        this.params = options.params;
      }
    } // If no headers have been passed in, construct a new HttpHeaders instance.


    if (!this.headers) {
      this.headers = new HttpHeaders();
    } // If no context have been passed in, construct a new HttpContext instance.


    if (!this.context) {
      this.context = new HttpContext();
    } // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.


    if (!this.params) {
      this.params = new HttpParams();
      this.urlWithParams = url;
    } else {
      // Encode the parameters to a string in preparation for inclusion in the URL.
      const params = this.params.toString();

      if (params.length === 0) {
        // No parameters, the visible URL is just the URL given at creation time.
        this.urlWithParams = url;
      } else {
        // Does the URL already have query parameters? Look for '?'.
        const qIdx = url.indexOf('?'); // There are 3 cases to handle:
        // 1) No existing parameters -> append '?' followed by params.
        // 2) '?' exists and is followed by existing query string ->
        //    append '&' followed by params.
        // 3) '?' exists at the end of the url -> append params directly.
        // This basically amounts to determining the character, if any, with
        // which to join the URL and parameters.

        const sep = qIdx === -1 ? '?' : qIdx < url.length - 1 ? '&' : '';
        this.urlWithParams = url + sep + params;
      }
    }
  }
  /**
   * Transform the free-form body into a serialized format suitable for
   * transmission to the server.
   */


  serializeBody() {
    // If no body is present, no need to serialize it.
    if (this.body === null) {
      return null;
    } // Check whether the body is already in a serialized form. If so,
    // it can just be returned directly.


    if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) || isUrlSearchParams(this.body) || typeof this.body === 'string') {
      return this.body;
    } // Check whether the body is an instance of HttpUrlEncodedParams.


    if (this.body instanceof HttpParams) {
      return this.body.toString();
    } // Check whether the body is an object or array, and serialize with JSON if so.


    if (typeof this.body === 'object' || typeof this.body === 'boolean' || Array.isArray(this.body)) {
      return JSON.stringify(this.body);
    } // Fall back on toString() for everything else.


    return this.body.toString();
  }
  /**
   * Examine the body and attempt to infer an appropriate MIME type
   * for it.
   *
   * If no such type can be inferred, this method will return `null`.
   */


  detectContentTypeHeader() {
    // An empty body has no content type.
    if (this.body === null) {
      return null;
    } // FormData bodies rely on the browser's content type assignment.


    if (isFormData(this.body)) {
      return null;
    } // Blobs usually have their own content type. If it doesn't, then
    // no type can be inferred.


    if (isBlob(this.body)) {
      return this.body.type || null;
    } // Array buffers have unknown contents and thus no type can be inferred.


    if (isArrayBuffer(this.body)) {
      return null;
    } // Technically, strings could be a form of JSON data, but it's safe enough
    // to assume they're plain strings.


    if (typeof this.body === 'string') {
      return 'text/plain';
    } // `HttpUrlEncodedParams` has its own content-type.


    if (this.body instanceof HttpParams) {
      return 'application/x-www-form-urlencoded;charset=UTF-8';
    } // Arrays, objects, boolean and numbers will be encoded as JSON.


    if (typeof this.body === 'object' || typeof this.body === 'number' || typeof this.body === 'boolean') {
      return 'application/json';
    } // No type could be inferred.


    return null;
  }

  clone(update = {}) {
    var _update$context;

    // For method, url, and responseType, take the current value unless
    // it is overridden in the update hash.
    const method = update.method || this.method;
    const url = update.url || this.url;
    const responseType = update.responseType || this.responseType; // The body is somewhat special - a `null` value in update.body means
    // whatever current body is present is being overridden with an empty
    // body, whereas an `undefined` value in update.body implies no
    // override.

    const body = update.body !== undefined ? update.body : this.body; // Carefully handle the boolean options to differentiate between
    // `false` and `undefined` in the update args.

    const withCredentials = update.withCredentials !== undefined ? update.withCredentials : this.withCredentials;
    const reportProgress = update.reportProgress !== undefined ? update.reportProgress : this.reportProgress; // Headers and params may be appended to if `setHeaders` or
    // `setParams` are used.

    let headers = update.headers || this.headers;
    let params = update.params || this.params; // Pass on context if needed

    const context = (_update$context = update.context) !== null && _update$context !== void 0 ? _update$context : this.context; // Check whether the caller has asked to add headers.

    if (update.setHeaders !== undefined) {
      // Set every requested header.
      headers = Object.keys(update.setHeaders).reduce((headers, name) => headers.set(name, update.setHeaders[name]), headers);
    } // Check whether the caller has asked to set params.


    if (update.setParams) {
      // Set every requested param.
      params = Object.keys(update.setParams).reduce((params, param) => params.set(param, update.setParams[param]), params);
    } // Finally, construct the new HttpRequest using the pieces from above.


    return new HttpRequest(method, url, body, {
      params,
      headers,
      context,
      reportProgress,
      responseType,
      withCredentials
    });
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Type enumeration for the different kinds of `HttpEvent`.
 *
 * @publicApi
 */


var HttpEventType;

(function (HttpEventType) {
  /**
   * The request was sent out over the wire.
   */
  HttpEventType[HttpEventType["Sent"] = 0] = "Sent";
  /**
   * An upload progress event was received.
   */

  HttpEventType[HttpEventType["UploadProgress"] = 1] = "UploadProgress";
  /**
   * The response status code and headers were received.
   */

  HttpEventType[HttpEventType["ResponseHeader"] = 2] = "ResponseHeader";
  /**
   * A download progress event was received.
   */

  HttpEventType[HttpEventType["DownloadProgress"] = 3] = "DownloadProgress";
  /**
   * The full response including the body was received.
   */

  HttpEventType[HttpEventType["Response"] = 4] = "Response";
  /**
   * A custom event from an interceptor or a backend.
   */

  HttpEventType[HttpEventType["User"] = 5] = "User";
})(HttpEventType || (HttpEventType = {}));
/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * @publicApi
 */


class HttpResponseBase {
  /**
   * Super-constructor for all responses.
   *
   * The single parameter accepted is an initialization hash. Any properties
   * of the response passed there will override the default values.
   */
  constructor(init, defaultStatus = 200
  /* HttpStatusCode.Ok */
  , defaultStatusText = 'OK') {
    // If the hash has values passed, use them to initialize the response.
    // Otherwise use the default values.
    this.headers = init.headers || new HttpHeaders();
    this.status = init.status !== undefined ? init.status : defaultStatus;
    this.statusText = init.statusText || defaultStatusText;
    this.url = init.url || null; // Cache the ok value to avoid defining a getter.

    this.ok = this.status >= 200 && this.status < 300;
  }

}
/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * @publicApi
 */


class HttpHeaderResponse extends HttpResponseBase {
  /**
   * Create a new `HttpHeaderResponse` with the given parameters.
   */
  constructor(init = {}) {
    super(init);
    this.type = HttpEventType.ResponseHeader;
  }
  /**
   * Copy this `HttpHeaderResponse`, overriding its contents with the
   * given parameter hash.
   */


  clone(update = {}) {
    // Perform a straightforward initialization of the new HttpHeaderResponse,
    // overriding the current parameters with new ones if given.
    return new HttpHeaderResponse({
      headers: update.headers || this.headers,
      status: update.status !== undefined ? update.status : this.status,
      statusText: update.statusText || this.statusText,
      url: update.url || this.url || undefined
    });
  }

}
/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * @publicApi
 */


class HttpResponse extends HttpResponseBase {
  /**
   * Construct a new `HttpResponse`.
   */
  constructor(init = {}) {
    super(init);
    this.type = HttpEventType.Response;
    this.body = init.body !== undefined ? init.body : null;
  }

  clone(update = {}) {
    return new HttpResponse({
      body: update.body !== undefined ? update.body : this.body,
      headers: update.headers || this.headers,
      status: update.status !== undefined ? update.status : this.status,
      statusText: update.statusText || this.statusText,
      url: update.url || this.url || undefined
    });
  }

}
/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * @publicApi
 */


class HttpErrorResponse extends HttpResponseBase {
  constructor(init) {
    // Initialize with a default status of 0 / Unknown Error.
    super(init, 0, 'Unknown Error');
    this.name = 'HttpErrorResponse';
    /**
     * Errors are never okay, even when the status code is in the 2xx success range.
     */

    this.ok = false; // If the response was successful, then this was a parse error. Otherwise, it was
    // a protocol-level failure of some sort. Either the request failed in transit
    // or the server returned an unsuccessful status code.

    if (this.status >= 200 && this.status < 300) {
      this.message = `Http failure during parsing for ${init.url || '(unknown url)'}`;
    } else {
      this.message = `Http failure response for ${init.url || '(unknown url)'}: ${init.status} ${init.statusText}`;
    }

    this.error = init.error || null;
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
 * the given `body`. This function clones the object and adds the body.
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.
 *
 */


function addBody(options, body) {
  return {
    body,
    headers: options.headers,
    context: options.context,
    observe: options.observe,
    params: options.params,
    reportProgress: options.reportProgress,
    responseType: options.responseType,
    withCredentials: options.withCredentials
  };
}
/**
 * Performs HTTP requests.
 * This service is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies based on
 * the signature that is called (mainly the values of `observe` and `responseType`).
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.

 *
 * @usageNotes
 * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
 *
 * ### HTTP Request Example
 *
 * ```
 *  // GET heroes whose name contains search term
 * searchHeroes(term: string): observable<Hero[]>{
 *
 *  const params = new HttpParams({fromString: 'name=term'});
 *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
 * }
 * ```
 *
 * Alternatively, the parameter string can be used without invoking HttpParams
 * by directly joining to the URL.
 * ```
 * this.httpClient.request('GET', this.heroesUrl + '?' + 'name=term', {responseType:'json'});
 * ```
 *
 *
 * ### JSONP Example
 * ```
 * requestJsonp(url, callback = 'callback') {
 *  return this.httpClient.jsonp(this.heroesURL, callback);
 * }
 * ```
 *
 * ### PATCH Example
 * ```
 * // PATCH one of the heroes' name
 * patchHero (id: number, heroName: string): Observable<{}> {
 * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
 *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
 *    .pipe(catchError(this.handleError('patchHero')));
 * }
 * ```
 *
 * @see [HTTP Guide](guide/http)
 * @see [HTTP Request](api/common/http/HttpRequest)
 *
 * @publicApi
 */


class HttpClient {
  constructor(handler) {
    this.handler = handler;
  }
  /**
   * Constructs an observable for a generic HTTP request that, when subscribed,
   * fires the request through the chain of registered interceptors and on to the
   * server.
   *
   * You can pass an `HttpRequest` directly as the only parameter. In this case,
   * the call returns an observable of the raw `HttpEvent` stream.
   *
   * Alternatively you can pass an HTTP method as the first parameter,
   * a URL string as the second, and an options hash containing the request body as the third.
   * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
   * type of returned observable.
   *   * The `responseType` value determines how a successful response body is parsed.
   *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
   * object as a type parameter to the call.
   *
   * The `observe` value determines the return type, according to what you are interested in
   * observing.
   *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
   * progress events by default.
   *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
   * where the `T` parameter depends on the `responseType` and any optionally provided type
   * parameter.
   *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
   *
   */


  request(first, url, options = {}) {
    let req; // First, check whether the primary argument is an instance of `HttpRequest`.

    if (first instanceof HttpRequest) {
      // It is. The other arguments must be undefined (per the signatures) and can be
      // ignored.
      req = first;
    } else {
      // It's a string, so it represents a URL. Construct a request based on it,
      // and incorporate the remaining arguments (assuming `GET` unless a method is
      // provided.
      // Figure out the headers.
      let headers = undefined;

      if (options.headers instanceof HttpHeaders) {
        headers = options.headers;
      } else {
        headers = new HttpHeaders(options.headers);
      } // Sort out parameters.


      let params = undefined;

      if (!!options.params) {
        if (options.params instanceof HttpParams) {
          params = options.params;
        } else {
          params = new HttpParams({
            fromObject: options.params
          });
        }
      } // Construct the request.


      req = new HttpRequest(first, url, options.body !== undefined ? options.body : null, {
        headers,
        context: options.context,
        params,
        reportProgress: options.reportProgress,
        // By default, JSON is assumed to be returned for all calls.
        responseType: options.responseType || 'json',
        withCredentials: options.withCredentials
      });
    } // Start with an Observable.of() the initial request, and run the handler (which
    // includes all interceptors) inside a concatMap(). This way, the handler runs
    // inside an Observable chain, which causes interceptors to be re-run on every
    // subscription (this also makes retries re-run the handler, including interceptors).


    const events$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.concatMap)(req => this.handler.handle(req))); // If coming via the API signature which accepts a previously constructed HttpRequest,
    // the only option is to get the event stream. Otherwise, return the event stream if
    // that is what was requested.

    if (first instanceof HttpRequest || options.observe === 'events') {
      return events$;
    } // The requested stream contains either the full response or the body. In either
    // case, the first step is to filter the event stream to extract a stream of
    // responses(s).


    const res$ = events$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof HttpResponse)); // Decide which stream to return.

    switch (options.observe || 'body') {
      case 'body':
        // The requested stream is the body. Map the response stream to the response
        // body. This could be done more simply, but a misbehaving interceptor might
        // transform the response body into a different format and ignore the requested
        // responseType. Guard against this by validating that the response is of the
        // requested type.
        switch (req.responseType) {
          case 'arraybuffer':
            return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
              // Validate that the body is an ArrayBuffer.
              if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                throw new Error('Response is not an ArrayBuffer.');
              }

              return res.body;
            }));

          case 'blob':
            return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
              // Validate that the body is a Blob.
              if (res.body !== null && !(res.body instanceof Blob)) {
                throw new Error('Response is not a Blob.');
              }

              return res.body;
            }));

          case 'text':
            return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
              // Validate that the body is a string.
              if (res.body !== null && typeof res.body !== 'string') {
                throw new Error('Response is not a string.');
              }

              return res.body;
            }));

          case 'json':
          default:
            // No validation needed for JSON responses, as they can be of any type.
            return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => res.body));
        }

      case 'response':
        // The response stream was requested directly, so return it.
        return res$;

      default:
        // Guard against new future observe types being added.
        throw new Error(`Unreachable: unhandled observe type ${options.observe}}`);
    }
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `DELETE` request to execute on the server. See the individual overloads for
   * details on the return type.
   *
   * @param url     The endpoint URL.
   * @param options The HTTP options to send with the request.
   *
   */


  delete(url, options = {}) {
    return this.request('DELETE', url, options);
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `GET` request to execute on the server. See the individual overloads for
   * details on the return type.
   */


  get(url, options = {}) {
    return this.request('GET', url, options);
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `HEAD` request to execute on the server. The `HEAD` method returns
   * meta information about the resource without transferring the
   * resource itself. See the individual overloads for
   * details on the return type.
   */


  head(url, options = {}) {
    return this.request('HEAD', url, options);
  }
  /**
   * Constructs an `Observable` that, when subscribed, causes a request with the special method
   * `JSONP` to be dispatched via the interceptor pipeline.
   * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
   * API endpoints that don't support newer,
   * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
   * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
   * requests even if the API endpoint is not located on the same domain (origin) as the client-side
   * application making the request.
   * The endpoint API must support JSONP callback for JSONP requests to work.
   * The resource API returns the JSON response wrapped in a callback function.
   * You can pass the callback function name as one of the query parameters.
   * Note that JSONP requests can only be used with `GET` requests.
   *
   * @param url The resource URL.
   * @param callbackParam The callback function name.
   *
   */


  jsonp(url, callbackParam) {
    return this.request('JSONP', url, {
      params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
      observe: 'body',
      responseType: 'json'
    });
  }
  /**
   * Constructs an `Observable` that, when subscribed, causes the configured
   * `OPTIONS` request to execute on the server. This method allows the client
   * to determine the supported HTTP methods and other capabilities of an endpoint,
   * without implying a resource action. See the individual overloads for
   * details on the return type.
   */


  options(url, options = {}) {
    return this.request('OPTIONS', url, options);
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `PATCH` request to execute on the server. See the individual overloads for
   * details on the return type.
   */


  patch(url, body, options = {}) {
    return this.request('PATCH', url, addBody(options, body));
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `POST` request to execute on the server. The server responds with the location of
   * the replaced resource. See the individual overloads for
   * details on the return type.
   */


  post(url, body, options = {}) {
    return this.request('POST', url, addBody(options, body));
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
   * with a new set of values.
   * See the individual overloads for details on the return type.
   */


  put(url, body, options = {}) {
    return this.request('PUT', url, addBody(options, body));
  }

}

HttpClient.ɵfac = function HttpClient_Factory(t) {
  return new (t || HttpClient)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](HttpHandler));
};

HttpClient.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: HttpClient,
  factory: HttpClient.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpClient, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: HttpHandler
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 *
 */


class HttpInterceptorHandler {
  constructor(next, interceptor) {
    this.next = next;
    this.interceptor = interceptor;
  }

  handle(req) {
    return this.interceptor.intercept(req, this.next);
  }

}
/**
 * A multi-provider token that represents the array of registered
 * `HttpInterceptor` objects.
 *
 * @publicApi
 */


const HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('HTTP_INTERCEPTORS');

class NoopInterceptor {
  intercept(req, next) {
    return next.handle(req);
  }

}

NoopInterceptor.ɵfac = function NoopInterceptor_Factory(t) {
  return new (t || NoopInterceptor)();
};

NoopInterceptor.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: NoopInterceptor,
  factory: NoopInterceptor.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NoopInterceptor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.


let nextRequestId = 0;
/**
 * When a pending <script> is unsubscribed we'll move it to this document, so it won't be
 * executed.
 */

let foreignDocument; // Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.

const JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.'; // Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.

const JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
const JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.'; // Error text given when a request is passed to the JsonpClientBackend that has
// headers set

const JSONP_ERR_HEADERS_NOT_SUPPORTED = 'JSONP requests do not support headers.';
/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 *
 */

class JsonpCallbackContext {}
/**
 * Processes an `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 * @see `HttpHandler`
 * @see `HttpXhrBackend`
 *
 * @publicApi
 */


class JsonpClientBackend {
  constructor(callbackMap, document) {
    this.callbackMap = callbackMap;
    this.document = document;
    /**
     * A resolved promise that can be used to schedule microtasks in the event handlers.
     */

    this.resolvedPromise = Promise.resolve();
  }
  /**
   * Get the name of the next callback method, by incrementing the global `nextRequestId`.
   */


  nextCallback() {
    return `ng_jsonp_callback_${nextRequestId++}`;
  }
  /**
   * Processes a JSONP request and returns an event stream of the results.
   * @param req The request object.
   * @returns An observable of the response events.
   *
   */


  handle(req) {
    // Firstly, check both the method and response type. If either doesn't match
    // then the request was improperly routed here and cannot be handled.
    if (req.method !== 'JSONP') {
      throw new Error(JSONP_ERR_WRONG_METHOD);
    } else if (req.responseType !== 'json') {
      throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
    } // Check the request headers. JSONP doesn't support headers and
    // cannot set any that were supplied.


    if (req.headers.keys().length > 0) {
      throw new Error(JSONP_ERR_HEADERS_NOT_SUPPORTED);
    } // Everything else happens inside the Observable boundary.


    return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => {
      // The first step to make a request is to generate the callback name, and replace the
      // callback placeholder in the URL with the name. Care has to be taken here to ensure
      // a trailing &, if matched, gets inserted back into the URL in the correct place.
      const callback = this.nextCallback();
      const url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${callback}$1`); // Construct the <script> tag and point it at the URL.

      const node = this.document.createElement('script');
      node.src = url; // A JSONP request requires waiting for multiple callbacks. These variables
      // are closed over and track state across those callbacks.
      // The response object, if one has been received, or null otherwise.

      let body = null; // Whether the response callback has been called.

      let finished = false; // Set the response callback in this.callbackMap (which will be the window
      // object in the browser. The script being loaded via the <script> tag will
      // eventually call this callback.

      this.callbackMap[callback] = data => {
        // Data has been received from the JSONP script. Firstly, delete this callback.
        delete this.callbackMap[callback]; // Set state to indicate data was received.

        body = data;
        finished = true;
      }; // cleanup() is a utility closure that removes the <script> from the page and
      // the response callback from the window. This logic is used in both the
      // success, error, and cancellation paths, so it's extracted out for convenience.


      const cleanup = () => {
        // Remove the <script> tag if it's still on the page.
        if (node.parentNode) {
          node.parentNode.removeChild(node);
        } // Remove the response callback from the callbackMap (window object in the
        // browser).


        delete this.callbackMap[callback];
      }; // onLoad() is the success callback which runs after the response callback
      // if the JSONP script loads successfully. The event itself is unimportant.
      // If something went wrong, onLoad() may run without the response callback
      // having been invoked.


      const onLoad = event => {
        // We wrap it in an extra Promise, to ensure the microtask
        // is scheduled after the loaded endpoint has executed any potential microtask itself,
        // which is not guaranteed in Internet Explorer and EdgeHTML. See issue #39496
        this.resolvedPromise.then(() => {
          // Cleanup the page.
          cleanup(); // Check whether the response callback has run.

          if (!finished) {
            // It hasn't, something went wrong with the request. Return an error via
            // the Observable error path. All JSONP errors have status 0.
            observer.error(new HttpErrorResponse({
              url,
              status: 0,
              statusText: 'JSONP Error',
              error: new Error(JSONP_ERR_NO_CALLBACK)
            }));
            return;
          } // Success. body either contains the response body or null if none was
          // returned.


          observer.next(new HttpResponse({
            body,
            status: 200
            /* HttpStatusCode.Ok */
            ,
            statusText: 'OK',
            url
          })); // Complete the stream, the response is over.

          observer.complete();
        });
      }; // onError() is the error callback, which runs if the script returned generates
      // a Javascript error. It emits the error via the Observable error channel as
      // a HttpErrorResponse.


      const onError = error => {
        cleanup(); // Wrap the error in a HttpErrorResponse.

        observer.error(new HttpErrorResponse({
          error,
          status: 0,
          statusText: 'JSONP Error',
          url
        }));
      }; // Subscribe to both the success (load) and error events on the <script> tag,
      // and add it to the page.


      node.addEventListener('load', onLoad);
      node.addEventListener('error', onError);
      this.document.body.appendChild(node); // The request has now been successfully sent.

      observer.next({
        type: HttpEventType.Sent
      }); // Cancellation handler.

      return () => {
        if (!finished) {
          this.removeListeners(node);
        } // And finally, clean up the page.


        cleanup();
      };
    });
  }

  removeListeners(script) {
    // Issue #34818
    // Changing <script>'s ownerDocument will prevent it from execution.
    // https://html.spec.whatwg.org/multipage/scripting.html#execute-the-script-block
    if (!foreignDocument) {
      foreignDocument = this.document.implementation.createHTMLDocument();
    }

    foreignDocument.adoptNode(script);
  }

}

JsonpClientBackend.ɵfac = function JsonpClientBackend_Factory(t) {
  return new (t || JsonpClientBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](JsonpCallbackContext), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT));
};

JsonpClientBackend.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: JsonpClientBackend,
  factory: JsonpClientBackend.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](JsonpClientBackend, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: JsonpCallbackContext
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT]
      }]
    }];
  }, null);
})();
/**
 * Identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * @see `HttpInterceptor`
 *
 * @publicApi
 */


class JsonpInterceptor {
  constructor(jsonp) {
    this.jsonp = jsonp;
  }
  /**
   * Identifies and handles a given JSONP request.
   * @param req The outgoing request object to handle.
   * @param next The next interceptor in the chain, or the backend
   * if no interceptors remain in the chain.
   * @returns An observable of the event stream.
   */


  intercept(req, next) {
    if (req.method === 'JSONP') {
      return this.jsonp.handle(req);
    } // Fall through for normal HTTP requests.


    return next.handle(req);
  }

}

JsonpInterceptor.ɵfac = function JsonpInterceptor_Factory(t) {
  return new (t || JsonpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](JsonpClientBackend));
};

JsonpInterceptor.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: JsonpInterceptor,
  factory: JsonpInterceptor.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](JsonpInterceptor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: JsonpClientBackend
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Determine an appropriate URL for the response, by checking either
 * XMLHttpRequest.responseURL or the X-Request-URL header.
 */

function getResponseUrl(xhr) {
  if ('responseURL' in xhr && xhr.responseURL) {
    return xhr.responseURL;
  }

  if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
    return xhr.getResponseHeader('X-Request-URL');
  }

  return null;
}
/**
 * Uses `XMLHttpRequest` to send requests to a backend server.
 * @see `HttpHandler`
 * @see `JsonpClientBackend`
 *
 * @publicApi
 */


class HttpXhrBackend {
  constructor(xhrFactory) {
    this.xhrFactory = xhrFactory;
  }
  /**
   * Processes a request and returns a stream of response events.
   * @param req The request object.
   * @returns An observable of the response events.
   */


  handle(req) {
    // Quick check to give a better error message when a user attempts to use
    // HttpClient.jsonp() without installing the HttpClientJsonpModule
    if (req.method === 'JSONP') {
      throw new Error(`Attempted to construct Jsonp request without HttpClientJsonpModule installed.`);
    } // Everything happens on Observable subscription.


    return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => {
      // Start by setting up the XHR object with request method, URL, and withCredentials flag.
      const xhr = this.xhrFactory.build();
      xhr.open(req.method, req.urlWithParams);

      if (!!req.withCredentials) {
        xhr.withCredentials = true;
      } // Add all the requested headers.


      req.headers.forEach((name, values) => xhr.setRequestHeader(name, values.join(','))); // Add an Accept header if one isn't present already.

      if (!req.headers.has('Accept')) {
        xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
      } // Auto-detect the Content-Type header if one isn't present already.


      if (!req.headers.has('Content-Type')) {
        const detectedType = req.detectContentTypeHeader(); // Sometimes Content-Type detection fails.

        if (detectedType !== null) {
          xhr.setRequestHeader('Content-Type', detectedType);
        }
      } // Set the responseType if one was requested.


      if (req.responseType) {
        const responseType = req.responseType.toLowerCase(); // JSON responses need to be processed as text. This is because if the server
        // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
        // xhr.response will be null, and xhr.responseText cannot be accessed to
        // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
        // is parsed by first requesting text and then applying JSON.parse.

        xhr.responseType = responseType !== 'json' ? responseType : 'text';
      } // Serialize the request body if one is present. If not, this will be set to null.


      const reqBody = req.serializeBody(); // If progress events are enabled, response headers will be delivered
      // in two events - the HttpHeaderResponse event and the full HttpResponse
      // event. However, since response headers don't change in between these
      // two events, it doesn't make sense to parse them twice. So headerResponse
      // caches the data extracted from the response whenever it's first parsed,
      // to ensure parsing isn't duplicated.

      let headerResponse = null; // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
      // state, and memoizes it into headerResponse.

      const partialFromXhr = () => {
        if (headerResponse !== null) {
          return headerResponse;
        }

        const statusText = xhr.statusText || 'OK'; // Parse headers from XMLHttpRequest - this step is lazy.

        const headers = new HttpHeaders(xhr.getAllResponseHeaders()); // Read the response URL from the XMLHttpResponse instance and fall back on the
        // request URL.

        const url = getResponseUrl(xhr) || req.url; // Construct the HttpHeaderResponse and memoize it.

        headerResponse = new HttpHeaderResponse({
          headers,
          status: xhr.status,
          statusText,
          url
        });
        return headerResponse;
      }; // Next, a few closures are defined for the various events which XMLHttpRequest can
      // emit. This allows them to be unregistered as event listeners later.
      // First up is the load event, which represents a response being fully available.


      const onLoad = () => {
        // Read response state from the memoized partial data.
        let {
          headers,
          status,
          statusText,
          url
        } = partialFromXhr(); // The body will be read out if present.

        let body = null;

        if (status !== 204
        /* HttpStatusCode.NoContent */
        ) {
          // Use XMLHttpRequest.response if set, responseText otherwise.
          body = typeof xhr.response === 'undefined' ? xhr.responseText : xhr.response;
        } // Normalize another potential bug (this one comes from CORS).


        if (status === 0) {
          status = !!body ? 200
          /* HttpStatusCode.Ok */
          : 0;
        } // ok determines whether the response will be transmitted on the event or
        // error channel. Unsuccessful status codes (not 2xx) will always be errors,
        // but a successful status code can still result in an error if the user
        // asked for JSON data and the body cannot be parsed as such.


        let ok = status >= 200 && status < 300; // Check whether the body needs to be parsed as JSON (in many cases the browser
        // will have done that already).

        if (req.responseType === 'json' && typeof body === 'string') {
          // Save the original body, before attempting XSSI prefix stripping.
          const originalBody = body;
          body = body.replace(XSSI_PREFIX, '');

          try {
            // Attempt the parse. If it fails, a parse error should be delivered to the user.
            body = body !== '' ? JSON.parse(body) : null;
          } catch (error) {
            // Since the JSON.parse failed, it's reasonable to assume this might not have been a
            // JSON response. Restore the original body (including any XSSI prefix) to deliver
            // a better error response.
            body = originalBody; // If this was an error request to begin with, leave it as a string, it probably
            // just isn't JSON. Otherwise, deliver the parsing error to the user.

            if (ok) {
              // Even though the response status was 2xx, this is still an error.
              ok = false; // The parse error contains the text of the body that failed to parse.

              body = {
                error,
                text: body
              };
            }
          }
        }

        if (ok) {
          // A successful response is delivered on the event stream.
          observer.next(new HttpResponse({
            body,
            headers,
            status,
            statusText,
            url: url || undefined
          })); // The full body has been received and delivered, no further events
          // are possible. This request is complete.

          observer.complete();
        } else {
          // An unsuccessful request is delivered on the error channel.
          observer.error(new HttpErrorResponse({
            // The error in this case is the response body (error from the server).
            error: body,
            headers,
            status,
            statusText,
            url: url || undefined
          }));
        }
      }; // The onError callback is called when something goes wrong at the network level.
      // Connection timeout, DNS error, offline, etc. These are actual errors, and are
      // transmitted on the error channel.


      const onError = error => {
        const {
          url
        } = partialFromXhr();
        const res = new HttpErrorResponse({
          error,
          status: xhr.status || 0,
          statusText: xhr.statusText || 'Unknown Error',
          url: url || undefined
        });
        observer.error(res);
      }; // The sentHeaders flag tracks whether the HttpResponseHeaders event
      // has been sent on the stream. This is necessary to track if progress
      // is enabled since the event will be sent on only the first download
      // progress event.


      let sentHeaders = false; // The download progress event handler, which is only registered if
      // progress events are enabled.

      const onDownProgress = event => {
        // Send the HttpResponseHeaders event if it hasn't been sent already.
        if (!sentHeaders) {
          observer.next(partialFromXhr());
          sentHeaders = true;
        } // Start building the download progress event to deliver on the response
        // event stream.


        let progressEvent = {
          type: HttpEventType.DownloadProgress,
          loaded: event.loaded
        }; // Set the total number of bytes in the event if it's available.

        if (event.lengthComputable) {
          progressEvent.total = event.total;
        } // If the request was for text content and a partial response is
        // available on XMLHttpRequest, include it in the progress event
        // to allow for streaming reads.


        if (req.responseType === 'text' && !!xhr.responseText) {
          progressEvent.partialText = xhr.responseText;
        } // Finally, fire the event.


        observer.next(progressEvent);
      }; // The upload progress event handler, which is only registered if
      // progress events are enabled.


      const onUpProgress = event => {
        // Upload progress events are simpler. Begin building the progress
        // event.
        let progress = {
          type: HttpEventType.UploadProgress,
          loaded: event.loaded
        }; // If the total number of bytes being uploaded is available, include
        // it.

        if (event.lengthComputable) {
          progress.total = event.total;
        } // Send the event.


        observer.next(progress);
      }; // By default, register for load and error events.


      xhr.addEventListener('load', onLoad);
      xhr.addEventListener('error', onError);
      xhr.addEventListener('timeout', onError);
      xhr.addEventListener('abort', onError); // Progress events are only enabled if requested.

      if (req.reportProgress) {
        // Download progress is always enabled if requested.
        xhr.addEventListener('progress', onDownProgress); // Upload progress depends on whether there is a body to upload.

        if (reqBody !== null && xhr.upload) {
          xhr.upload.addEventListener('progress', onUpProgress);
        }
      } // Fire the request, and notify the event stream that it was fired.


      xhr.send(reqBody);
      observer.next({
        type: HttpEventType.Sent
      }); // This is the return from the Observable function, which is the
      // request cancellation handler.

      return () => {
        // On a cancellation, remove all registered event listeners.
        xhr.removeEventListener('error', onError);
        xhr.removeEventListener('abort', onError);
        xhr.removeEventListener('load', onLoad);
        xhr.removeEventListener('timeout', onError);

        if (req.reportProgress) {
          xhr.removeEventListener('progress', onDownProgress);

          if (reqBody !== null && xhr.upload) {
            xhr.upload.removeEventListener('progress', onUpProgress);
          }
        } // Finally, abort the in-flight request.


        if (xhr.readyState !== xhr.DONE) {
          xhr.abort();
        }
      };
    });
  }

}

HttpXhrBackend.ɵfac = function HttpXhrBackend_Factory(t) {
  return new (t || HttpXhrBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.XhrFactory));
};

HttpXhrBackend.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: HttpXhrBackend,
  factory: HttpXhrBackend.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpXhrBackend, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.XhrFactory
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('XSRF_COOKIE_NAME');
const XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('XSRF_HEADER_NAME');
/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * @publicApi
 */

class HttpXsrfTokenExtractor {}
/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */


class HttpXsrfCookieExtractor {
  constructor(doc, platform, cookieName) {
    this.doc = doc;
    this.platform = platform;
    this.cookieName = cookieName;
    this.lastCookieString = '';
    this.lastToken = null;
    /**
     * @internal for testing
     */

    this.parseCount = 0;
  }

  getToken() {
    if (this.platform === 'server') {
      return null;
    }

    const cookieString = this.doc.cookie || '';

    if (cookieString !== this.lastCookieString) {
      this.parseCount++;
      this.lastToken = (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__["ɵparseCookieValue"])(cookieString, this.cookieName);
      this.lastCookieString = cookieString;
    }

    return this.lastToken;
  }

}

HttpXsrfCookieExtractor.ɵfac = function HttpXsrfCookieExtractor_Factory(t) {
  return new (t || HttpXsrfCookieExtractor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](XSRF_COOKIE_NAME));
};

HttpXsrfCookieExtractor.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: HttpXsrfCookieExtractor,
  factory: HttpXsrfCookieExtractor.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpXsrfCookieExtractor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [XSRF_COOKIE_NAME]
      }]
    }];
  }, null);
})();
/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */


class HttpXsrfInterceptor {
  constructor(tokenService, headerName) {
    this.tokenService = tokenService;
    this.headerName = headerName;
  }

  intercept(req, next) {
    const lcUrl = req.url.toLowerCase(); // Skip both non-mutating requests and absolute URLs.
    // Non-mutating requests don't require a token, and absolute URLs require special handling
    // anyway as the cookie set
    // on our origin is not the same as the token expected by another origin.

    if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') || lcUrl.startsWith('https://')) {
      return next.handle(req);
    }

    const token = this.tokenService.getToken(); // Be careful not to overwrite an existing header of the same name.

    if (token !== null && !req.headers.has(this.headerName)) {
      req = req.clone({
        headers: req.headers.set(this.headerName, token)
      });
    }

    return next.handle(req);
  }

}

HttpXsrfInterceptor.ɵfac = function HttpXsrfInterceptor_Factory(t) {
  return new (t || HttpXsrfInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](HttpXsrfTokenExtractor), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](XSRF_HEADER_NAME));
};

HttpXsrfInterceptor.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: HttpXsrfInterceptor,
  factory: HttpXsrfInterceptor.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpXsrfInterceptor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: HttpXsrfTokenExtractor
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [XSRF_HEADER_NAME]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * An injectable `HttpHandler` that applies multiple interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * The interceptors are loaded lazily from the injector, to allow
 * interceptors to themselves inject classes depending indirectly
 * on `HttpInterceptingHandler` itself.
 * @see `HttpInterceptor`
 */


class HttpInterceptingHandler {
  constructor(backend, injector) {
    this.backend = backend;
    this.injector = injector;
    this.chain = null;
  }

  handle(req) {
    if (this.chain === null) {
      const interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
      this.chain = interceptors.reduceRight((next, interceptor) => new HttpInterceptorHandler(next, interceptor), this.backend);
    }

    return this.chain.handle(req);
  }

}

HttpInterceptingHandler.ɵfac = function HttpInterceptingHandler_Factory(t) {
  return new (t || HttpInterceptingHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](HttpBackend), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector));
};

HttpInterceptingHandler.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: HttpInterceptingHandler,
  factory: HttpInterceptingHandler.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpInterceptingHandler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: HttpBackend
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector
    }];
  }, null);
})();
/**
 * Constructs an `HttpHandler` that applies interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * Use as a factory function within `HttpClientModule`.
 *
 *
 */


function interceptingHandler(backend, interceptors = []) {
  if (!interceptors) {
    return backend;
  }

  return interceptors.reduceRight((next, interceptor) => new HttpInterceptorHandler(next, interceptor), backend);
}
/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 *
 */


function jsonpCallbackContext() {
  if (typeof window === 'object') {
    return window;
  }

  return {};
}
/**
 * Configures XSRF protection support for outgoing requests.
 *
 * For a server that supports a cookie-based XSRF protection system,
 * use directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no names are supplied, the default cookie name is `XSRF-TOKEN`
 * and the default header name is `X-XSRF-TOKEN`.
 *
 * @publicApi
 */


class HttpClientXsrfModule {
  /**
   * Disable the default XSRF protection.
   */
  static disable() {
    return {
      ngModule: HttpClientXsrfModule,
      providers: [{
        provide: HttpXsrfInterceptor,
        useClass: NoopInterceptor
      }]
    };
  }
  /**
   * Configure XSRF protection.
   * @param options An object that can specify either or both
   * cookie name or header name.
   * - Cookie name default is `XSRF-TOKEN`.
   * - Header name default is `X-XSRF-TOKEN`.
   *
   */


  static withOptions(options = {}) {
    return {
      ngModule: HttpClientXsrfModule,
      providers: [options.cookieName ? {
        provide: XSRF_COOKIE_NAME,
        useValue: options.cookieName
      } : [], options.headerName ? {
        provide: XSRF_HEADER_NAME,
        useValue: options.headerName
      } : []]
    };
  }

}

HttpClientXsrfModule.ɵfac = function HttpClientXsrfModule_Factory(t) {
  return new (t || HttpClientXsrfModule)();
};

HttpClientXsrfModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: HttpClientXsrfModule
});
HttpClientXsrfModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [HttpXsrfInterceptor, {
    provide: HTTP_INTERCEPTORS,
    useExisting: HttpXsrfInterceptor,
    multi: true
  }, {
    provide: HttpXsrfTokenExtractor,
    useClass: HttpXsrfCookieExtractor
  }, {
    provide: XSRF_COOKIE_NAME,
    useValue: 'XSRF-TOKEN'
  }, {
    provide: XSRF_HEADER_NAME,
    useValue: 'X-XSRF-TOKEN'
  }]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpClientXsrfModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
    args: [{
      providers: [HttpXsrfInterceptor, {
        provide: HTTP_INTERCEPTORS,
        useExisting: HttpXsrfInterceptor,
        multi: true
      }, {
        provide: HttpXsrfTokenExtractor,
        useClass: HttpXsrfCookieExtractor
      }, {
        provide: XSRF_COOKIE_NAME,
        useValue: 'XSRF-TOKEN'
      }, {
        provide: XSRF_HEADER_NAME,
        useValue: 'X-XSRF-TOKEN'
      }]
    }]
  }], null, null);
})();
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */


class HttpClientModule {}

HttpClientModule.ɵfac = function HttpClientModule_Factory(t) {
  return new (t || HttpClientModule)();
};

HttpClientModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: HttpClientModule
});
HttpClientModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [HttpClient, {
    provide: HttpHandler,
    useClass: HttpInterceptingHandler
  }, HttpXhrBackend, {
    provide: HttpBackend,
    useExisting: HttpXhrBackend
  }],
  imports: [HttpClientXsrfModule.withOptions({
    cookieName: 'XSRF-TOKEN',
    headerName: 'X-XSRF-TOKEN'
  })]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpClientModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
    args: [{
      /**
       * Optional configuration for XSRF protection.
       */
      imports: [HttpClientXsrfModule.withOptions({
        cookieName: 'XSRF-TOKEN',
        headerName: 'X-XSRF-TOKEN'
      })],

      /**
       * Configures the [dependency injector](guide/glossary#injector) where it is imported
       * with supporting services for HTTP communications.
       */
      providers: [HttpClient, {
        provide: HttpHandler,
        useClass: HttpInterceptingHandler
      }, HttpXhrBackend, {
        provide: HttpBackend,
        useExisting: HttpXhrBackend
      }]
    }]
  }], null, null);
})();
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for JSONP.
 * Without this module, Jsonp requests reach the backend
 * with method JSONP, where they are rejected.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */


class HttpClientJsonpModule {}

HttpClientJsonpModule.ɵfac = function HttpClientJsonpModule_Factory(t) {
  return new (t || HttpClientJsonpModule)();
};

HttpClientJsonpModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: HttpClientJsonpModule
});
HttpClientJsonpModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [JsonpClientBackend, {
    provide: JsonpCallbackContext,
    useFactory: jsonpCallbackContext
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: JsonpInterceptor,
    multi: true
  }]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpClientJsonpModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
    args: [{
      providers: [JsonpClientBackend, {
        provide: JsonpCallbackContext,
        useFactory: jsonpCallbackContext
      }, {
        provide: HTTP_INTERCEPTORS,
        useClass: JsonpInterceptor,
        multi: true
      }]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * @publicApi
 * @see `XhrFactory`
 * @deprecated
 * `XhrFactory` has moved, please import `XhrFactory` from `@angular/common` instead.
 */


const XhrFactory = _angular_common__WEBPACK_IMPORTED_MODULE_6__.XhrFactory;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_modules_battle-calculator_battle-calculator_module_ts.js.map