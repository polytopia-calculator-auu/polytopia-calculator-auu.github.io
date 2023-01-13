"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_utils_execute-battle-matches_util_ts"],{

/***/ 7575:
/*!*****************************************!*\
  !*** ./src/app/data/unit-list.const.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attackerUnits": () => (/* binding */ attackerUnits),
/* harmony export */   "carryUnits": () => (/* binding */ carryUnits),
/* harmony export */   "defenderUnits": () => (/* binding */ defenderUnits),
/* harmony export */   "freezingUnits": () => (/* binding */ freezingUnits),
/* harmony export */   "landUnits": () => (/* binding */ landUnits),
/* harmony export */   "longRangeUnits": () => (/* binding */ longRangeUnits),
/* harmony export */   "noDefenseUnits": () => (/* binding */ noDefenseUnits)
/* harmony export */ });
const attackerUnits = [
    'Warrior',
    'Rider',
    'Defender',
    'Swordsman',
    'Archer',
    'Catapult',
    'Knight',
    'Old Knight',
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
    'Old Kiton',
    'Doomux',
    'Exida',
    'Centipede',
    'Segment',
    'Dagger',
];
const defenderUnits = [
    'Warrior',
    'Rider',
    'Defender',
    'Swordsman',
    'Archer',
    'Catapult',
    'Knight',
    'Old Knight',
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
    'Old Kiton',
    'Doomux',
    'Exida',
    'Centipede',
    'Segment',
    'Nature Bunny',
    'Dinghy',
    'Cloak',
    'Dagger',
];
const noDefenseUnits = ['Mooni', 'Ice Archer', 'Dragon Egg', 'Mind Bender', 'Segment'];
const freezingUnits = ['Ice Archer', 'Phychi', 'Dagger'];
const landUnits = [
    'Warrior',
    'Rider',
    'Defender',
    'Swordsman',
    'Archer',
    'Catapult',
    'Mind Bender',
    'Knight',
    'Old Knight',
    'Giant',
    'Polytaur',
    'Nature Bunny'
];
const carryUnits = [
    'Boat',
    'Ship',
    'Battleship'
];
const longRangeUnits = [
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

/***/ 6959:
/*!******************************************!*\
  !*** ./src/app/data/unit-stats.const.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unitStats": () => (/* binding */ unitStats)
/* harmony export */ });
const unitStats = {
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
        veteranHp: 15,
        defenseBonus: 1.5,
        wallBonus: 4
    },
    'Old Knight': {
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
        hp: 15,
        veteranHp: 20,
        defenseBonus: 1.5,
        wallBonus: 0
    },
    'Old Kiton': {
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

/***/ 2150:
/*!************************************************!*\
  !*** ./src/app/utils/calculate-damage.util.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateDamage": () => (/* binding */ calculateDamage)
/* harmony export */ });
/* harmony import */ var _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/unit-stats.const */ 6959);
/* harmony import */ var _calculate_max_hp_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculate-max-hp.util */ 724);
/* harmony import */ var _data_unit_list_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/unit-list.const */ 7575);



const BOOSTED_FACTOR = .5;
const POISONED_FACTOR = .8;
function calculateDamage(attacker, defender) {
    const attackerStat = _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_0__.unitStats[attacker.unit];
    const defenderStat = _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_0__.unitStats[defender.unit];
    const attackerMaxHp = (0,_calculate_max_hp_util__WEBPACK_IMPORTED_MODULE_1__.calculateMaxHp)(attacker);
    const defenderMaxHp = (0,_calculate_max_hp_util__WEBPACK_IMPORTED_MODULE_1__.calculateMaxHp)(defender);
    let attackStat = attackerStat.attack;
    if (attacker.isBoosted) {
        attackStat += BOOSTED_FACTOR;
    }
    let defenseStat = defenderStat.defense;
    let defenseBonus = 1;
    if (defender.isPoisoned) {
        defenseBonus = POISONED_FACTOR;
    }
    else if (defender.withDefenseBonus && !defender.isPoisoned) {
        defenseBonus = defender.withDefenseBonus === 'withWall' ? defenderStat.wallBonus : defenderStat.defenseBonus;
    }
    const attackForce = attackStat * (attacker.hp / attackerMaxHp).toFixed(16);
    const defenseForce = defenseStat * defenseBonus * (defender.hp / defenderMaxHp).toFixed(16);
    const totalForce = attackForce + defenseForce;
    const accelerator = 4.5;
    const attackDamageTemp = (attackForce / totalForce).toFixed(16) * attackStat * accelerator;
    const defenseDamageTemp = (defenseForce / totalForce).toFixed(16) * defenseStat * accelerator;
    const attackDamage = Math.round(attackDamageTemp);
    let defenseDamage = Math.round(defenseDamageTemp);
    const defenderNewHp = Math.max(defender.hp - attackDamage, 0);
    let splashedNewHp = null;
    if (attacker.unit === 'Fire Dragon') {
        splashedNewHp = Math.max(defender.hp - Math.floor(attackDamage / 2), 0);
    }
    let attackerNewHp = attacker.hp;
    const noRetaliation = attacker.freeFromRetaliation
        || _data_unit_list_const__WEBPACK_IMPORTED_MODULE_2__.noDefenseUnits.includes(defender.unit)
        || _data_unit_list_const__WEBPACK_IMPORTED_MODULE_2__.freezingUnits.includes(attacker.unit);
    if (defenderNewHp > 0 && !noRetaliation) {
        attackerNewHp = Math.max(attacker.hp - defenseDamage, 0);
    }
    else {
        defenseDamage = 0;
    }
    return { attackDamage, defenseDamage, defenderNewHp, attackerNewHp, splashedNewHp };
}


/***/ }),

/***/ 724:
/*!************************************************!*\
  !*** ./src/app/utils/calculate-max-hp.util.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateMaxHp": () => (/* binding */ calculateMaxHp)
/* harmony export */ });
/* harmony import */ var _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/unit-stats.const */ 6959);
/* harmony import */ var _data_unit_list_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/unit-list.const */ 7575);


function calculateMaxHp(unit) {
    if (!unit.unit) {
        return null;
    }
    // For units with carry skills, such as Boat, Ship and Battleship
    // their health and maxHealth varies based on the unit they are carrying
    // so we will use the carried unit stat for getting maxHp
    let unitStat;
    if (_data_unit_list_const__WEBPACK_IMPORTED_MODULE_1__.carryUnits.includes(unit.unit)) {
        if (!unit.carriedUnit) {
            return null;
        }
        unitStat = _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_0__.unitStats[unit.carriedUnit];
    }
    else {
        unitStat = _data_unit_stats_const__WEBPACK_IMPORTED_MODULE_0__.unitStats[unit.unit];
    }
    return unit.isVeteran && unitStat.veteranHp ? unitStat.veteranHp : unitStat.hp;
}


/***/ }),

/***/ 4026:
/*!***************************************!*\
  !*** ./src/app/utils/combine.util.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "combine": () => (/* binding */ combine)
/* harmony export */ });
function combine(arrA, arrB) {
    const result = [];
    arrA.forEach((a) => {
        arrB.forEach((b) => {
            result.push([a, b]);
        });
    });
    return result;
}
// function combine(arrA, arrB) {
//     const result = [];
//     arrA.forEach((a) => {
//         arrB.forEach((b) => {
//             result.push(`${a},${b}`);
//         });
//     });
//     return result;
// }
// Array.from(new Set(combine([1,1,2,2,3,3,4,5,5,6], [1,1,2,2,3,3,4,5,5,6]))).map(a => a.split(',')).filter(a => (parseInt(a[0])+parseInt(a[1])) < 5)


/***/ }),

/***/ 6419:
/*!******************************************!*\
  !*** ./src/app/utils/deep-clone.util.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deepClone": () => (/* binding */ deepClone)
/* harmony export */ });
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}


/***/ }),

/***/ 6122:
/*!******************************************************!*\
  !*** ./src/app/utils/execute-battle-matches.util.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateBattleResult": () => (/* binding */ calculateBattleResult),
/* harmony export */   "executeBattle": () => (/* binding */ executeBattle),
/* harmony export */   "executeBattleMatches": () => (/* binding */ executeBattleMatches),
/* harmony export */   "getBattleResultStatistic": () => (/* binding */ getBattleResultStatistic)
/* harmony export */ });
/* harmony import */ var _calculate_damage_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculate-damage.util */ 2150);
/* harmony import */ var _combine_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./combine.util */ 4026);
/* harmony import */ var _deep_clone_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deep-clone.util */ 6419);
/* harmony import */ var _permute_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./permute.util */ 2162);




function executeBattleMatches(attackers, defenders, getOptimalResult) {
    const attackersPermutations = getOptimalResult ? (0,_permute_util__WEBPACK_IMPORTED_MODULE_3__.permute)(attackers) : [attackers];
    const defenderPermutations = getOptimalResult ? (0,_permute_util__WEBPACK_IMPORTED_MODULE_3__.permute)(defenders) : [defenders];
    const matches = (0,_combine_util__WEBPACK_IMPORTED_MODULE_1__.combine)(attackersPermutations, defenderPermutations);
    matches.forEach((match) => {
        const attacker_ = (0,_deep_clone_util__WEBPACK_IMPORTED_MODULE_2__.deepClone)(match[0]);
        const defenders_ = (0,_deep_clone_util__WEBPACK_IMPORTED_MODULE_2__.deepClone)(match[1]);
        const { battleResults, unusedAttackerUnits, untouchedDefenderUnits, defenderSurvivors } = executeBattle(attacker_, defenders_);
        const battleResultsStatistic = { ...getBattleResultStatistic(battleResults), unusedAttackerUnits, untouchedDefenderUnits, defenderSurvivors };
        match.push(battleResults);
        match.push(battleResultsStatistic);
    });
    matches
        .sort((matchA, matchB) => {
        const a = matchA[3];
        const damageScoreA = a.totalAttackDamage - a.totalDefenseDamage;
        const b = matchB[3];
        const damageScoreB = b.totalAttackDamage - b.totalDefenseDamage;
        return damageScoreB - damageScoreA;
    })
        .sort((matchA, matchB) => {
        const a = matchA[3];
        const survivalScoreA = (a.attackerSurvivors.length + a.unusedAttackerUnits.length + a.defendersKilled.length) - (a.defenderSurvivors.length + a.attackersKilled.length + a.untouchedDefenderUnits.length);
        const b = matchB[3];
        const survivalScoreB = (b.attackerSurvivors.length + b.unusedAttackerUnits.length + b.defendersKilled.length) - (b.defenderSurvivors.length + b.attackersKilled.length + b.untouchedDefenderUnits.length);
        return survivalScoreB - survivalScoreA;
    });
    const battleResults = matches[0][2];
    const battleResultStatistics = matches[0][3];
    return { battleResults, battleResultStatistics };
}
function executeBattle(attackers, defenders) {
    const battleResults = [];
    const unusedAttackerUnits = [];
    const defenderSurvivors = [];
    let lastDefenderAttacked = 0;
    attackers.forEach((attacker) => {
        const defenderIndex = defenders.findIndex((d) => d.hp > 0);
        if (typeof defenderIndex !== 'number' || defenderIndex < 0) {
            unusedAttackerUnits.push(attacker);
            return;
        }
        const defender = defenders[defenderIndex];
        const battleResult = calculateBattleResult({ ...attacker }, { ...defender });
        lastDefenderAttacked = defenderIndex;
        // preserve the original hp for logging in battle summary table
        if (!defender.preservedHp) {
            defender.preservedHp = defender.hp;
        }
        // use newHp as current defender.hp on next attack
        defender.hp = battleResult.defender.newHp;
        battleResults.push(battleResult);
    });
    const untouchedDefenderUnits = defenders.slice(lastDefenderAttacked + 1);
    const lastBattleDefender = battleResults[battleResults.length - 1].defender;
    if (lastBattleDefender.newHp > 0) {
        defenderSurvivors.push(lastBattleDefender);
    }
    return { battleResults, unusedAttackerUnits, untouchedDefenderUnits, defenderSurvivors };
}
function getBattleResultStatistic(battleResults) {
    const attackerSurvivors = [];
    const attackersKilled = [];
    const defendersKilled = [];
    let totalAttackDamage = 0;
    let totalDefenseDamage = 0;
    battleResults.forEach((br) => {
        if (br.attacker.newHp > 0) {
            attackerSurvivors.push({ ...br.attacker });
        }
        else {
            attackersKilled.push({ ...br.attacker });
        }
        if (br.defender.newHp === 0) {
            defendersKilled.push({ ...br.defender });
        }
        totalAttackDamage += br.attacker.attackDamage;
        totalDefenseDamage += br.defender.defenseDamage;
    });
    return {
        attackerSurvivors,
        attackersKilled,
        defendersKilled,
        totalAttackDamage,
        totalDefenseDamage
    };
}
function calculateBattleResult(attackerData, defenderData) {
    const { attackDamage, defenseDamage, defenderNewHp, attackerNewHp, splashedNewHp } = (0,_calculate_damage_util__WEBPACK_IMPORTED_MODULE_0__.calculateDamage)(attackerData, defenderData);
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

/***/ 2162:
/*!***************************************!*\
  !*** ./src/app/utils/permute.util.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "permute": () => (/* binding */ permute)
/* harmony export */ });
function permute(arr) {
    let result = [];
    if (arr.length === 0)
        return [];
    if (arr.length === 1)
        return [arr];
    for (let i = 0; i < arr.length; i++) {
        const curItem = arr[i];
        const remainingItems = arr.slice(0, i).concat(arr.slice(i + 1));
        const remainingItemsPermuted = permute(remainingItems);
        for (let j = 0; j < remainingItemsPermuted.length; j++) {
            const permutedArray = [curItem].concat(remainingItemsPermuted[j]);
            result.push(permutedArray);
        }
    }
    return result;
}


/***/ })

}]);
//# sourceMappingURL=default-src_app_utils_execute-battle-matches_util_ts.js.map