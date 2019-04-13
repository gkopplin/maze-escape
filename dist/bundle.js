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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/maze_escape.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/character.js":
/*!**************************!*\
  !*** ./lib/character.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ \"./lib/sprite.js\");\n\n\nclass Character {\n    constructor(pos, type, validMove, userPos) {\n        this.pos = pos;\n        this.type = type;\n        this.validMove = validMove;\n        this.userPos = userPos;\n        this.keyDown = this.keyDown.bind(this);\n        this.botMove = this.botMove.bind(this);\n        this.setKeyListeners = this.setKeyListeners.bind(this);\n    }\n\n    draw(ctx) {\n        const sprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({x: this.pos[0], y: this.pos[1], type: this.type});\n        sprite.draw(ctx);\n    }\n\n    setKeyListeners() {\n        document.addEventListener(\"keydown\", this.keyDown);\n    }\n\n    removeKeyListeners() {\n        document.removeEventListener(\"keydown\", this.keyDown);\n    }\n\n    updateUserPos (userPos) {\n        this.userPos = userPos;\n    }\n\n    botMove(){             \n        const xDiff = this.pos[0] - this.userPos[0];\n        const yDiff = this.pos[1] - this.userPos[1];\n\n        if (Math.abs(xDiff) > Math.abs(yDiff)) {\n            return xDiff < 0 ? this.move(\"ArrowRight\") : this.move(\"ArrowLeft\");\n        } else {\n            return yDiff < 0 ? this.move(\"ArrowDown\") : this.move(\"ArrowUp\");\n        }\n    }\n\n    move (direction) {\n        if (direction === \"Right\" || direction === \"ArrowRight\") {\n            this.pos[0] = this.validMove(this.pos, [this.pos[0] + 50, this.pos[1]]) ? this.pos[0] + 50 : this.pos[0];\n        }\n        else if (direction === \"Left\" || direction === \"ArrowLeft\") {\n            this.pos[0] = this.validMove(this.pos, [this.pos[0] - 50, this.pos[1]]) ? this.pos[0] - 50 : this.pos[0];\n        }\n        else if (direction === \"Up\" || direction === \"ArrowUp\") {\n            this.pos[1] = this.validMove(this.pos, [this.pos[0], this.pos[1] - 50]) ? this.pos[1] - 50 : this.pos[1];\n        }\n        else if (direction === \"Down\" || direction === \"ArrowDown\") {\n            this.pos[1] = this.validMove(this.pos, [this.pos[0], this.pos[1] + 50]) ? this.pos[1] + 50 : this.pos[1];\n        }\n    }\n\n    keyDown(e) {\n        if (this.type === \"user\") {\n            this.move(e.key);\n        } else {\n            this.botMove();\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Character);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY2hhcmFjdGVyLmpzP2I1NmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUE4Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsK0NBQU0sRUFBRSxnREFBZ0Q7QUFDbkY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxjO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFZSx3RUFBUyIsImZpbGUiOiIuL2xpYi9jaGFyYWN0ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3ByaXRlIGZyb20gJy4vc3ByaXRlJztcblxuY2xhc3MgQ2hhcmFjdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3MsIHR5cGUsIHZhbGlkTW92ZSwgdXNlclBvcykge1xuICAgICAgICB0aGlzLnBvcyA9IHBvcztcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy52YWxpZE1vdmUgPSB2YWxpZE1vdmU7XG4gICAgICAgIHRoaXMudXNlclBvcyA9IHVzZXJQb3M7XG4gICAgICAgIHRoaXMua2V5RG93biA9IHRoaXMua2V5RG93bi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJvdE1vdmUgPSB0aGlzLmJvdE1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZXRLZXlMaXN0ZW5lcnMgPSB0aGlzLnNldEtleUxpc3RlbmVycy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGNvbnN0IHNwcml0ZSA9IG5ldyBTcHJpdGUoe3g6IHRoaXMucG9zWzBdLCB5OiB0aGlzLnBvc1sxXSwgdHlwZTogdGhpcy50eXBlfSk7XG4gICAgICAgIHNwcml0ZS5kcmF3KGN0eCk7XG4gICAgfVxuXG4gICAgc2V0S2V5TGlzdGVuZXJzKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleURvd24pO1xuICAgIH1cblxuICAgIHJlbW92ZUtleUxpc3RlbmVycygpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlEb3duKTtcbiAgICB9XG5cbiAgICB1cGRhdGVVc2VyUG9zICh1c2VyUG9zKSB7XG4gICAgICAgIHRoaXMudXNlclBvcyA9IHVzZXJQb3M7XG4gICAgfVxuXG4gICAgYm90TW92ZSgpeyAgICAgICAgICAgICBcbiAgICAgICAgY29uc3QgeERpZmYgPSB0aGlzLnBvc1swXSAtIHRoaXMudXNlclBvc1swXTtcbiAgICAgICAgY29uc3QgeURpZmYgPSB0aGlzLnBvc1sxXSAtIHRoaXMudXNlclBvc1sxXTtcblxuICAgICAgICBpZiAoTWF0aC5hYnMoeERpZmYpID4gTWF0aC5hYnMoeURpZmYpKSB7XG4gICAgICAgICAgICByZXR1cm4geERpZmYgPCAwID8gdGhpcy5tb3ZlKFwiQXJyb3dSaWdodFwiKSA6IHRoaXMubW92ZShcIkFycm93TGVmdFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB5RGlmZiA8IDAgPyB0aGlzLm1vdmUoXCJBcnJvd0Rvd25cIikgOiB0aGlzLm1vdmUoXCJBcnJvd1VwXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZSAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwiUmlnaHRcIiB8fCBkaXJlY3Rpb24gPT09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1swXSA9IHRoaXMudmFsaWRNb3ZlKHRoaXMucG9zLCBbdGhpcy5wb3NbMF0gKyA1MCwgdGhpcy5wb3NbMV1dKSA/IHRoaXMucG9zWzBdICsgNTAgOiB0aGlzLnBvc1swXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwiTGVmdFwiIHx8IGRpcmVjdGlvbiA9PT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgICAgICAgdGhpcy5wb3NbMF0gPSB0aGlzLnZhbGlkTW92ZSh0aGlzLnBvcywgW3RoaXMucG9zWzBdIC0gNTAsIHRoaXMucG9zWzFdXSkgPyB0aGlzLnBvc1swXSAtIDUwIDogdGhpcy5wb3NbMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcIlVwXCIgfHwgZGlyZWN0aW9uID09PSBcIkFycm93VXBcIikge1xuICAgICAgICAgICAgdGhpcy5wb3NbMV0gPSB0aGlzLnZhbGlkTW92ZSh0aGlzLnBvcywgW3RoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSAtIDUwXSkgPyB0aGlzLnBvc1sxXSAtIDUwIDogdGhpcy5wb3NbMV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcIkRvd25cIiB8fCBkaXJlY3Rpb24gPT09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzFdID0gdGhpcy52YWxpZE1vdmUodGhpcy5wb3MsIFt0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0gKyA1MF0pID8gdGhpcy5wb3NbMV0gKyA1MCA6IHRoaXMucG9zWzFdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAga2V5RG93bihlKSB7XG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09IFwidXNlclwiKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmUoZS5rZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ib3RNb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/character.js\n");

/***/ }),

/***/ "./lib/display.js":
/*!************************!*\
  !*** ./lib/display.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./lib/level.js\");\n\n\nclass Display {\n\n    draw(ctx){\n        this.level = new _level__WEBPACK_IMPORTED_MODULE_0__[\"default\"](LEVEL_ONE, LEVEL_ONE_CHARS);\n        this.dead = this.level.dead;\n        this.level.draw(null, ctx);\n        this.level.setKeyListeners();\n    }\n\n    updateDead () {\n        this.dead = this.level.dead;\n    }\n\n    restart (ctx) {\n        this.level = new _level__WEBPACK_IMPORTED_MODULE_0__[\"default\"](LEVEL_ONE, LEVEL_ONE_CHARS);\n        this.level.draw(null, ctx);\n        this.level.setKeyListeners();\n        this.dead = false;\n        this.level.dead = false;\n    }\n\n    removeKeyListeners() {\n        this.level.removeCharListeners();\n        this.level.removeKeyListeners();\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Display);\n\nconst LEVEL_ONE = [\n    {0: 0, 1: 30, 2: 10, 3: 610},\n    {0: 0, 1: 30, 2: 260, 3: 10},\n    {0: 310, 1: 30, 2: 560, 3: 10},\n    {0: 0, 1: 635, 2: 720, 3: 10},\n    {0: 710, 1: 30, 2: 10, 3: 610},  \n    {0: 255, 1: 540, 2: 10, 3: 105},\n    {0: 0, 1: 335, 2: 360, 3: 10},\n    {0: 555, 1: 140, 2: 10, 3: 200},\n    {0: 405, 1: 190, 2: 10, 3: 100},\n    {0: 460, 1: 135, 2: 105, 3: 10},\n    {0: 455, 1: 135, 2: 10, 3: 55},\n    {0: 455, 1: 385, 2: 10, 3: 255},\n    {0: 610, 1: 485, 2: 100, 3: 10},\n    {0: 110, 1: 185, 2: 200, 3: 10},\n];\n\nconst LEVEL_ONE_CHARS = [\n    {0: 610, 1: 50},\n    {0: 360, 1: 300}\n];\n\nLEVEL_ONE_CHARS.forEach(Object.freeze);\nLEVEL_ONE.forEach(Object.freeze);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZGlzcGxheS5qcz9hZWJhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBNEI7O0FBRTVCOztBQUVBO0FBQ0EseUJBQXlCLDhDQUFLO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5Qiw4Q0FBSztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsc0VBQU8sRUFBQzs7QUFFdkI7QUFDQSxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDJCQUEyQjtBQUNoQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDRCQUE0QjtBQUNqQyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDhCQUE4QjtBQUNuQyxLQUFLLDhCQUE4QjtBQUNuQzs7QUFFQTtBQUNBLEtBQUssY0FBYztBQUNuQixLQUFLO0FBQ0w7O0FBRUE7QUFDQSIsImZpbGUiOiIuL2xpYi9kaXNwbGF5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExldmVsIGZyb20gJy4vbGV2ZWwnO1xuXG5jbGFzcyBEaXNwbGF5IHtcblxuICAgIGRyYXcoY3R4KXtcbiAgICAgICAgdGhpcy5sZXZlbCA9IG5ldyBMZXZlbChMRVZFTF9PTkUsIExFVkVMX09ORV9DSEFSUyk7XG4gICAgICAgIHRoaXMuZGVhZCA9IHRoaXMubGV2ZWwuZGVhZDtcbiAgICAgICAgdGhpcy5sZXZlbC5kcmF3KG51bGwsIGN0eCk7XG4gICAgICAgIHRoaXMubGV2ZWwuc2V0S2V5TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlRGVhZCAoKSB7XG4gICAgICAgIHRoaXMuZGVhZCA9IHRoaXMubGV2ZWwuZGVhZDtcbiAgICB9XG5cbiAgICByZXN0YXJ0IChjdHgpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9IG5ldyBMZXZlbChMRVZFTF9PTkUsIExFVkVMX09ORV9DSEFSUyk7XG4gICAgICAgIHRoaXMubGV2ZWwuZHJhdyhudWxsLCBjdHgpO1xuICAgICAgICB0aGlzLmxldmVsLnNldEtleUxpc3RlbmVycygpO1xuICAgICAgICB0aGlzLmRlYWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sZXZlbC5kZWFkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVtb3ZlS2V5TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmxldmVsLnJlbW92ZUNoYXJMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5sZXZlbC5yZW1vdmVLZXlMaXN0ZW5lcnMoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpc3BsYXk7XG5cbmNvbnN0IExFVkVMX09ORSA9IFtcbiAgICB7MDogMCwgMTogMzAsIDI6IDEwLCAzOiA2MTB9LFxuICAgIHswOiAwLCAxOiAzMCwgMjogMjYwLCAzOiAxMH0sXG4gICAgezA6IDMxMCwgMTogMzAsIDI6IDU2MCwgMzogMTB9LFxuICAgIHswOiAwLCAxOiA2MzUsIDI6IDcyMCwgMzogMTB9LFxuICAgIHswOiA3MTAsIDE6IDMwLCAyOiAxMCwgMzogNjEwfSwgIFxuICAgIHswOiAyNTUsIDE6IDU0MCwgMjogMTAsIDM6IDEwNX0sXG4gICAgezA6IDAsIDE6IDMzNSwgMjogMzYwLCAzOiAxMH0sXG4gICAgezA6IDU1NSwgMTogMTQwLCAyOiAxMCwgMzogMjAwfSxcbiAgICB7MDogNDA1LCAxOiAxOTAsIDI6IDEwLCAzOiAxMDB9LFxuICAgIHswOiA0NjAsIDE6IDEzNSwgMjogMTA1LCAzOiAxMH0sXG4gICAgezA6IDQ1NSwgMTogMTM1LCAyOiAxMCwgMzogNTV9LFxuICAgIHswOiA0NTUsIDE6IDM4NSwgMjogMTAsIDM6IDI1NX0sXG4gICAgezA6IDYxMCwgMTogNDg1LCAyOiAxMDAsIDM6IDEwfSxcbiAgICB7MDogMTEwLCAxOiAxODUsIDI6IDIwMCwgMzogMTB9LFxuXTtcblxuY29uc3QgTEVWRUxfT05FX0NIQVJTID0gW1xuICAgIHswOiA2MTAsIDE6IDUwfSxcbiAgICB7MDogMzYwLCAxOiAzMDB9XG5dO1xuXG5MRVZFTF9PTkVfQ0hBUlMuZm9yRWFjaChPYmplY3QuZnJlZXplKTtcbkxFVkVMX09ORS5mb3JFYWNoKE9iamVjdC5mcmVlemUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/display.js\n");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./lib/display.js\");\n\n\nconst KEYS = [\n    \"Right\",\n    \"Left\",\n    \"Up\",\n    \"Down\",\n    \"ArrowRight\",\n    \"ArrowLeft\",\n    \"ArrowUp\",\n    \"ArrowDown\"\n];\n\nclass Game {\n    constructor () {\n        this.initialRender =  this.initialRender.bind(this);\n        this.reRender = this.reRender.bind(this);\n        this.restart = this.restart.bind(this);\n    }\n\n    initialRender () {\n        this.canvas = document.getElementById('canvas');\n        this.ctx = canvas.getContext('2d');\n        this.display = new _display__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.root = document.getElementById('root');\n\n        this.display.draw(this.ctx);\n        this.setRerenderListener();\n    }\n\n    restart () {\n        this.root.classList.add(\"hidden\");\n        this.canvas.classList.remove(\"hidden\");\n        this.display.restart(this.ctx);\n        this.setRerenderListener();\n    }\n\n    reRender(e) {\n        if (!e || KEYS.includes(e.key)) {\n            this.display.updateDead();\n            if (this.display.dead) {\n                this.display.dead = false;\n                this.canvas.classList.add(\"hidden\");\n                this.root.classList.remove(\"hidden\");\n                this.root.innerHTML = \"<p>you dead.</p>\";\n\n                this.setRestartListener();\n            }\n        }\n    }\n\n    setRerenderListener () {\n        document.removeEventListener(\"keydown\", this.restart);\n        document.addEventListener(\"keydown\", this.reRender);\n    }\n\n    setRestartListener () {\n        document.removeEventListener(\"keydown\", this.reRender);\n        this.display.removeKeyListeners();\n        document.addEventListener(\"keydown\", this.restart);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZ2FtZS5qcz85M2M2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBZ0M7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0RBQU87QUFDbEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxtRUFBSSxFQUFDIiwiZmlsZSI6Ii4vbGliL2dhbWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlzcGxheSBmcm9tICcuL2Rpc3BsYXknO1xuXG5jb25zdCBLRVlTID0gW1xuICAgIFwiUmlnaHRcIixcbiAgICBcIkxlZnRcIixcbiAgICBcIlVwXCIsXG4gICAgXCJEb3duXCIsXG4gICAgXCJBcnJvd1JpZ2h0XCIsXG4gICAgXCJBcnJvd0xlZnRcIixcbiAgICBcIkFycm93VXBcIixcbiAgICBcIkFycm93RG93blwiXG5dO1xuXG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbFJlbmRlciA9ICB0aGlzLmluaXRpYWxSZW5kZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZVJlbmRlciA9IHRoaXMucmVSZW5kZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0ID0gdGhpcy5yZXN0YXJ0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgaW5pdGlhbFJlbmRlciAoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLmRpc3BsYXkgPSBuZXcgRGlzcGxheSgpO1xuICAgICAgICB0aGlzLnJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheS5kcmF3KHRoaXMuY3R4KTtcbiAgICAgICAgdGhpcy5zZXRSZXJlbmRlckxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgcmVzdGFydCAoKSB7XG4gICAgICAgIHRoaXMucm9vdC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICB0aGlzLmNhbnZhcy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICB0aGlzLmRpc3BsYXkucmVzdGFydCh0aGlzLmN0eCk7XG4gICAgICAgIHRoaXMuc2V0UmVyZW5kZXJMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIHJlUmVuZGVyKGUpIHtcbiAgICAgICAgaWYgKCFlIHx8IEtFWVMuaW5jbHVkZXMoZS5rZXkpKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkudXBkYXRlRGVhZCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZGlzcGxheS5kZWFkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5LmRlYWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhcy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMucm9vdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMucm9vdC5pbm5lckhUTUwgPSBcIjxwPnlvdSBkZWFkLjwvcD5cIjtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UmVzdGFydExpc3RlbmVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRSZXJlbmRlckxpc3RlbmVyICgpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5yZXN0YXJ0KTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5yZVJlbmRlcik7XG4gICAgfVxuXG4gICAgc2V0UmVzdGFydExpc3RlbmVyICgpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5yZVJlbmRlcik7XG4gICAgICAgIHRoaXMuZGlzcGxheS5yZW1vdmVLZXlMaXN0ZW5lcnMoKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5yZXN0YXJ0KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/game.js\n");

/***/ }),

/***/ "./lib/level.js":
/*!**********************!*\
  !*** ./lib/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character */ \"./lib/character.js\");\n\n\nconst KEYS = [\n    \"Right\",\n    \"Left\",\n    \"Up\",\n    \"Down\",\n    \"ArrowRight\",\n    \"ArrowLeft\",\n    \"ArrowUp\",\n    \"ArrowDown\"\n];\n\n class Level {\n    constructor(level, charPos) {\n        this.level = [];\n        level.forEach(obj => {\n            this.level.push({0: obj[0], 1: obj[1], 2: obj[2], 3: obj[3]});\n        });\n\n        this.charPos = [];\n        charPos.forEach(obj => {\n            this.charPos.push({ 0: obj[0], 1: obj[1] });\n        });\n\n        this.draw = this.draw.bind(this);\n        this.validMove = this.validMove.bind(this);\n        this.chars = [];\n    }\n\n    drawWalls(ctx) {\n        this.level.forEach(coord => {\n            ctx.beginPath();\n            ctx.rect(coord[0],\n                coord[1],\n                coord[2],\n                coord[3]);\n            ctx.fillStyle = \"#222222\";\n            ctx.fill();\n            ctx.closePath();\n        });\n    }\n\n    drawChars(ctx) {\n        let userPos;\n        this.dead = this.checkDead();\n        this.chars.forEach((char, index) => {\n            if (index === 0) {\n                userPos = char.pos;\n            } else {\n                char.updateUserPos(userPos);\n            }\n            if (!this.dead) {\n                char.draw(ctx);\n            }\n            char.setKeyListeners();\n        });\n    }\n\n    drawInitial(ctx) {\n        let char;\n        let userPos;\n        this.charPos.forEach((pos, index) => {\n            if (index === 0) {\n                char = new _character__WEBPACK_IMPORTED_MODULE_0__[\"default\"](pos, \"user\", this.validMove);\n                userPos = pos;\n            } else {\n                char = new _character__WEBPACK_IMPORTED_MODULE_0__[\"default\"](pos, \"bot\", this.validMove, userPos);\n            }\n            char.draw(ctx);\n            char.setKeyListeners();\n            this.chars.push(char);\n        });\n        this.drawWalls(ctx);\n    }\n    \n    draw(e, ctx) {\n        if (!e || KEYS.includes(e.key)) {\n            if (ctx) {\n                this.ctx = ctx;\n            }\n            this.ctx.clearRect(0, 0, 720, 650);\n            this.drawGrid(this.ctx);\n            \n            this.dead = this.checkDead();\n            if (this.chars.length === 0) {\n                this.drawInitial(this.ctx);\n            } else {\n                this.drawChars(this.ctx);\n                this.drawWalls(this.ctx);\n            }            \n        }\n\n    }\n    \n    checkDead () {\n        const enemies = this.chars.slice(1);\n\n        return enemies.some(enemy => {\n            return enemy.pos[0] === this.chars[0].pos[0] &&\n                    enemy.pos[1] === this.chars[0].pos[1];\n        });\n    }\n\n    setKeyListeners() {\n        document.addEventListener(\"keydown\", this.draw);\n    }\n\n    removeKeyListeners() {\n        document.removeEventListener(\"keydown\", this.draw);\n    }\n\n    validMove (oldPos, newPos) {\n        const bottom = oldPos[1] + 80;\n        const newBottom = newPos[1] + 80;\n        \n        return (this.level.every(coord => {\n            const enemies = this.chars.slice(1);\n            if (enemies.some(enemy => {\n                return enemy.pos[0] === newPos[0] &&\n                       enemy.pos[1] === newPos[1]; \n            })){\n                return false;\n            }\n            if (newPos[0] < 0 ||\n                newPos[0] > 700 ||\n                newBottom <= 30 ||\n                newBottom > 700) {\n                    return false;\n            }\n            if (coord[2] > coord[3]) {\n                if (\n                    ((coord[1] + 45 === bottom &&\n                      coord[1] - 5 === newBottom) ||\n                     (coord[1] - 5 === bottom &&\n                      coord[1] + 45 === newBottom)) &&\n                        oldPos[0] >= coord[0] &&\n                        oldPos[0] < coord[0] + coord[2] -5\n                ) {\n                    return false;\n                }\n            } else {\n                if ( \n                    ((coord[0]+5 === oldPos[0] &&\n                      coord[0]-45 === newPos[0]) ||\n                     (coord[0]-45 === oldPos[0] &&\n                      coord[0]+5 === newPos[0])) &&\n                        bottom >= coord[1] &&\n                        bottom < coord[1] + coord[3]\n                ) {\n                    return false;\n                }\n            }\n            return true;\n        }));\n    }\n\n    drawGrid(ctx) {\n        GRID.forEach(line => {\n            ctx.beginPath();\n            ctx.rect(line[0],\n                line[1],\n                line[2],\n                line[3]);\n            ctx.fillStyle = \"#F1F1F1\";\n            ctx.fill();\n            ctx.closePath();\n        });\n    }\n\n    removeCharListeners () {\n        this.chars.forEach(char => char.removeKeyListeners());\n    }\n }\n\n /* harmony default export */ __webpack_exports__[\"default\"] = (Level);\n\nconst GRID = [];\nfor (let i = 10; i <= 700; i = i + 50) {\n    GRID.push([i, 0, 1, 700]);\n}\nfor (let i = 40; i <= 650; i = i + 50) {\n    GRID.push([0, i, 700, 1]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbGV2ZWwuanM/ZjgyNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwyQ0FBMkM7QUFDeEUsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsK0JBQStCLHVCQUF1QjtBQUN0RCxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrREFBUztBQUNwQztBQUNBLGFBQWE7QUFDYiwyQkFBMkIsa0RBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFnQixvRUFBSyxFQUFDOztBQUV0QjtBQUNBLGdCQUFnQixVQUFVO0FBQzFCO0FBQ0E7QUFDQSxnQkFBZ0IsVUFBVTtBQUMxQjtBQUNBIiwiZmlsZSI6Ii4vbGliL2xldmVsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL2NoYXJhY3Rlcic7XG5cbmNvbnN0IEtFWVMgPSBbXG4gICAgXCJSaWdodFwiLFxuICAgIFwiTGVmdFwiLFxuICAgIFwiVXBcIixcbiAgICBcIkRvd25cIixcbiAgICBcIkFycm93UmlnaHRcIixcbiAgICBcIkFycm93TGVmdFwiLFxuICAgIFwiQXJyb3dVcFwiLFxuICAgIFwiQXJyb3dEb3duXCJcbl07XG5cbiBjbGFzcyBMZXZlbCB7XG4gICAgY29uc3RydWN0b3IobGV2ZWwsIGNoYXJQb3MpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9IFtdO1xuICAgICAgICBsZXZlbC5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgICAgICB0aGlzLmxldmVsLnB1c2goezA6IG9ialswXSwgMTogb2JqWzFdLCAyOiBvYmpbMl0sIDM6IG9ialszXX0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNoYXJQb3MgPSBbXTtcbiAgICAgICAgY2hhclBvcy5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgICAgICB0aGlzLmNoYXJQb3MucHVzaCh7IDA6IG9ialswXSwgMTogb2JqWzFdIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy52YWxpZE1vdmUgPSB0aGlzLnZhbGlkTW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoYXJzID0gW107XG4gICAgfVxuXG4gICAgZHJhd1dhbGxzKGN0eCkge1xuICAgICAgICB0aGlzLmxldmVsLmZvckVhY2goY29vcmQgPT4ge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LnJlY3QoY29vcmRbMF0sXG4gICAgICAgICAgICAgICAgY29vcmRbMV0sXG4gICAgICAgICAgICAgICAgY29vcmRbMl0sXG4gICAgICAgICAgICAgICAgY29vcmRbM10pO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzIyMjIyMlwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZHJhd0NoYXJzKGN0eCkge1xuICAgICAgICBsZXQgdXNlclBvcztcbiAgICAgICAgdGhpcy5kZWFkID0gdGhpcy5jaGVja0RlYWQoKTtcbiAgICAgICAgdGhpcy5jaGFycy5mb3JFYWNoKChjaGFyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdXNlclBvcyA9IGNoYXIucG9zO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGFyLnVwZGF0ZVVzZXJQb3ModXNlclBvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGVhZCkge1xuICAgICAgICAgICAgICAgIGNoYXIuZHJhdyhjdHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hhci5zZXRLZXlMaXN0ZW5lcnMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZHJhd0luaXRpYWwoY3R4KSB7XG4gICAgICAgIGxldCBjaGFyO1xuICAgICAgICBsZXQgdXNlclBvcztcbiAgICAgICAgdGhpcy5jaGFyUG9zLmZvckVhY2goKHBvcywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNoYXIgPSBuZXcgQ2hhcmFjdGVyKHBvcywgXCJ1c2VyXCIsIHRoaXMudmFsaWRNb3ZlKTtcbiAgICAgICAgICAgICAgICB1c2VyUG9zID0gcG9zO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGFyID0gbmV3IENoYXJhY3Rlcihwb3MsIFwiYm90XCIsIHRoaXMudmFsaWRNb3ZlLCB1c2VyUG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoYXIuZHJhdyhjdHgpO1xuICAgICAgICAgICAgY2hhci5zZXRLZXlMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgIHRoaXMuY2hhcnMucHVzaChjaGFyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZHJhd1dhbGxzKGN0eCk7XG4gICAgfVxuICAgIFxuICAgIGRyYXcoZSwgY3R4KSB7XG4gICAgICAgIGlmICghZSB8fCBLRVlTLmluY2x1ZGVzKGUua2V5KSkge1xuICAgICAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIDcyMCwgNjUwKTtcbiAgICAgICAgICAgIHRoaXMuZHJhd0dyaWQodGhpcy5jdHgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmRlYWQgPSB0aGlzLmNoZWNrRGVhZCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hhcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3SW5pdGlhbCh0aGlzLmN0eCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0NoYXJzKHRoaXMuY3R4KTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdXYWxscyh0aGlzLmN0eCk7XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgIH1cbiAgICBcbiAgICBjaGVja0RlYWQgKCkge1xuICAgICAgICBjb25zdCBlbmVtaWVzID0gdGhpcy5jaGFycy5zbGljZSgxKTtcblxuICAgICAgICByZXR1cm4gZW5lbWllcy5zb21lKGVuZW15ID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlbmVteS5wb3NbMF0gPT09IHRoaXMuY2hhcnNbMF0ucG9zWzBdICYmXG4gICAgICAgICAgICAgICAgICAgIGVuZW15LnBvc1sxXSA9PT0gdGhpcy5jaGFyc1swXS5wb3NbMV07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldEtleUxpc3RlbmVycygpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5kcmF3KTtcbiAgICB9XG5cbiAgICByZW1vdmVLZXlMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuZHJhdyk7XG4gICAgfVxuXG4gICAgdmFsaWRNb3ZlIChvbGRQb3MsIG5ld1Bvcykge1xuICAgICAgICBjb25zdCBib3R0b20gPSBvbGRQb3NbMV0gKyA4MDtcbiAgICAgICAgY29uc3QgbmV3Qm90dG9tID0gbmV3UG9zWzFdICsgODA7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKHRoaXMubGV2ZWwuZXZlcnkoY29vcmQgPT4ge1xuICAgICAgICAgICAgY29uc3QgZW5lbWllcyA9IHRoaXMuY2hhcnMuc2xpY2UoMSk7XG4gICAgICAgICAgICBpZiAoZW5lbWllcy5zb21lKGVuZW15ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW5lbXkucG9zWzBdID09PSBuZXdQb3NbMF0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgZW5lbXkucG9zWzFdID09PSBuZXdQb3NbMV07IFxuICAgICAgICAgICAgfSkpe1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXdQb3NbMF0gPCAwIHx8XG4gICAgICAgICAgICAgICAgbmV3UG9zWzBdID4gNzAwIHx8XG4gICAgICAgICAgICAgICAgbmV3Qm90dG9tIDw9IDMwIHx8XG4gICAgICAgICAgICAgICAgbmV3Qm90dG9tID4gNzAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb29yZFsyXSA+IGNvb3JkWzNdKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAoKGNvb3JkWzFdICsgNDUgPT09IGJvdHRvbSAmJlxuICAgICAgICAgICAgICAgICAgICAgIGNvb3JkWzFdIC0gNSA9PT0gbmV3Qm90dG9tKSB8fFxuICAgICAgICAgICAgICAgICAgICAgKGNvb3JkWzFdIC0gNSA9PT0gYm90dG9tICYmXG4gICAgICAgICAgICAgICAgICAgICAgY29vcmRbMV0gKyA0NSA9PT0gbmV3Qm90dG9tKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFBvc1swXSA+PSBjb29yZFswXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgb2xkUG9zWzBdIDwgY29vcmRbMF0gKyBjb29yZFsyXSAtNVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIFxuICAgICAgICAgICAgICAgICAgICAoKGNvb3JkWzBdKzUgPT09IG9sZFBvc1swXSAmJlxuICAgICAgICAgICAgICAgICAgICAgIGNvb3JkWzBdLTQ1ID09PSBuZXdQb3NbMF0pIHx8XG4gICAgICAgICAgICAgICAgICAgICAoY29vcmRbMF0tNDUgPT09IG9sZFBvc1swXSAmJlxuICAgICAgICAgICAgICAgICAgICAgIGNvb3JkWzBdKzUgPT09IG5ld1Bvc1swXSkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b20gPj0gY29vcmRbMV0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbSA8IGNvb3JkWzFdICsgY29vcmRbM11cbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgZHJhd0dyaWQoY3R4KSB7XG4gICAgICAgIEdSSUQuZm9yRWFjaChsaW5lID0+IHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5yZWN0KGxpbmVbMF0sXG4gICAgICAgICAgICAgICAgbGluZVsxXSxcbiAgICAgICAgICAgICAgICBsaW5lWzJdLFxuICAgICAgICAgICAgICAgIGxpbmVbM10pO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiI0YxRjFGMVwiO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2hhckxpc3RlbmVycyAoKSB7XG4gICAgICAgIHRoaXMuY2hhcnMuZm9yRWFjaChjaGFyID0+IGNoYXIucmVtb3ZlS2V5TGlzdGVuZXJzKCkpO1xuICAgIH1cbiB9XG5cbiBleHBvcnQgZGVmYXVsdCBMZXZlbDtcblxuY29uc3QgR1JJRCA9IFtdO1xuZm9yIChsZXQgaSA9IDEwOyBpIDw9IDcwMDsgaSA9IGkgKyA1MCkge1xuICAgIEdSSUQucHVzaChbaSwgMCwgMSwgNzAwXSk7XG59XG5mb3IgKGxldCBpID0gNDA7IGkgPD0gNjUwOyBpID0gaSArIDUwKSB7XG4gICAgR1JJRC5wdXNoKFswLCBpLCA3MDAsIDFdKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/level.js\n");

/***/ }),

/***/ "./lib/maze_escape.js":
/*!****************************!*\
  !*** ./lib/maze_escape.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./lib/game.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    game.initialRender();\n});\n\n// import Display from './display';\n\n// document.addEventListener('DOMContentLoaded', () => {\n\n//     const canvas = document.getElementById('canvas');\n//     const ctx = canvas.getContext('2d');\n//     const display = new Display();\n//     display.draw(ctx);\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbWF6ZV9lc2NhcGUuanM/ZTI1MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQTBCOztBQUUxQjtBQUNBLHFCQUFxQiw2Q0FBSTtBQUN6QjtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJIiwiZmlsZSI6Ii4vbGliL21hemVfZXNjYXBlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbiAgICBnYW1lLmluaXRpYWxSZW5kZXIoKTtcbn0pO1xuXG4vLyBpbXBvcnQgRGlzcGxheSBmcm9tICcuL2Rpc3BsYXknO1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXG4vLyAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuLy8gICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuLy8gICAgIGNvbnN0IGRpc3BsYXkgPSBuZXcgRGlzcGxheSgpO1xuLy8gICAgIGRpc3BsYXkuZHJhdyhjdHgpO1xuLy8gfSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/maze_escape.js\n");

/***/ }),

/***/ "./lib/sprite.js":
/*!***********************!*\
  !*** ./lib/sprite.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Sprite {\n    constructor (options) {\n        this.x = options.x;\n        this.y = options.y;\n        this.type = options.type;\n\n        if (this.type === \"user\") {\n            this.image = new Image();\n            this.image.src = \"assets/Mike Tyson.png\";\n        } else {\n            this.image = new Image();\n            this.image.src = \"assets/jason.png\";\n        }\n    }\n    \n    draw (ctx) {\n        this.image.onload = () => {\n            if (this.type === \"user\") {\n                ctx.drawImage(this.image, 250, 0, 50, 115, this.x, this.y, 40, 80);\n            } else {\n                ctx.drawImage(this.image, 191, 115, 31, 70, this.x, this.y, 40, 80);\n            }\n        };\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sprite);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvc3ByaXRlLmpzP2NlMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHFFQUFNIiwiZmlsZSI6Ii4vbGliL3Nwcml0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNwcml0ZSB7XG4gICAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy54ID0gb3B0aW9ucy54O1xuICAgICAgICB0aGlzLnkgPSBvcHRpb25zLnk7XG4gICAgICAgIHRoaXMudHlwZSA9IG9wdGlvbnMudHlwZTtcblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSBcInVzZXJcIikge1xuICAgICAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSBcImFzc2V0cy9NaWtlIFR5c29uLnBuZ1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSBcImFzc2V0cy9qYXNvbi5wbmdcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkcmF3IChjdHgpIHtcbiAgICAgICAgdGhpcy5pbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy50eXBlID09PSBcInVzZXJcIikge1xuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgMjUwLCAwLCA1MCwgMTE1LCB0aGlzLngsIHRoaXMueSwgNDAsIDgwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCAxOTEsIDExNSwgMzEsIDcwLCB0aGlzLngsIHRoaXMueSwgNDAsIDgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwcml0ZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/sprite.js\n");

/***/ })

/******/ });