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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/game.js");
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ \"./lib/sprite.js\");\n\n\nclass Character {\n    constructor(pos, type, validMove, userPos) {\n        this.pos = pos;\n        this.type = type;\n        this.validMove = validMove;\n        this.userPos = userPos;\n        this.keyDown = this.keyDown.bind(this);\n        this.botMove = this.botMove.bind(this);\n        this.setKeyListeners = this.setKeyListeners.bind(this);\n    }\n\n    draw(ctx) {\n        const sprite = new _sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({x: this.pos[0], y: this.pos[1], type: this.type});\n        sprite.draw(ctx);\n    }\n\n    setKeyListeners() {\n        document.addEventListener(\"keydown\", this.keyDown);\n    }\n\n    updateUserPos (userPos) {\n        this.userPos = userPos;\n    }\n\n    botMove(){             \n        const xDiff = this.pos[0] - this.userPos[0];\n        const yDiff = this.pos[1] - this.userPos[1];\n\n        if (Math.abs(xDiff) > Math.abs(yDiff)) {\n            return xDiff < 0 ? this.move(\"ArrowRight\") : this.move(\"ArrowLeft\");\n        } else {\n            return yDiff < 0 ? this.move(\"ArrowDown\") : this.move(\"ArrowUp\");\n        }\n    }\n\n    move (direction) {\n        if (direction === \"Right\" || direction === \"ArrowRight\") {\n            this.pos[0] = this.validMove(this.pos[0] + 50, this.pos[1]) ? this.pos[0] + 50 : this.pos[0];\n        }\n        else if (direction === \"Left\" || direction === \"ArrowLeft\") {\n            this.pos[0] = this.validMove(this.pos[0] - 50, this.pos[1]) ? this.pos[0] - 50 : this.pos[0];\n        }\n        else if (direction === \"Up\" || direction === \"ArrowUp\") {\n            this.pos[1] = this.validMove(this.pos[0], this.pos[1] - 50) ? this.pos[1] - 50 : this.pos[1];\n        }\n        else if (direction === \"Down\" || direction === \"ArrowDown\") {\n            this.pos[1] = this.validMove(this.pos[0], this.pos[1] + 50) ? this.pos[1] + 50 : this.pos[1];\n        }\n    }\n\n    keyDown(e) {\n        if (this.type === \"user\") {\n            this.move(e.key);\n        } else {\n            this.botMove();\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Character);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY2hhcmFjdGVyLmpzP2I1NmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUE4Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsK0NBQU0sRUFBRSxnREFBZ0Q7QUFDbkY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHdFQUFTIiwiZmlsZSI6Ii4vbGliL2NoYXJhY3Rlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcHJpdGUgZnJvbSAnLi9zcHJpdGUnO1xuXG5jbGFzcyBDaGFyYWN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBvcywgdHlwZSwgdmFsaWRNb3ZlLCB1c2VyUG9zKSB7XG4gICAgICAgIHRoaXMucG9zID0gcG9zO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLnZhbGlkTW92ZSA9IHZhbGlkTW92ZTtcbiAgICAgICAgdGhpcy51c2VyUG9zID0gdXNlclBvcztcbiAgICAgICAgdGhpcy5rZXlEb3duID0gdGhpcy5rZXlEb3duLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYm90TW92ZSA9IHRoaXMuYm90TW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNldEtleUxpc3RlbmVycyA9IHRoaXMuc2V0S2V5TGlzdGVuZXJzLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY29uc3Qgc3ByaXRlID0gbmV3IFNwcml0ZSh7eDogdGhpcy5wb3NbMF0sIHk6IHRoaXMucG9zWzFdLCB0eXBlOiB0aGlzLnR5cGV9KTtcbiAgICAgICAgc3ByaXRlLmRyYXcoY3R4KTtcbiAgICB9XG5cbiAgICBzZXRLZXlMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5RG93bik7XG4gICAgfVxuXG4gICAgdXBkYXRlVXNlclBvcyAodXNlclBvcykge1xuICAgICAgICB0aGlzLnVzZXJQb3MgPSB1c2VyUG9zO1xuICAgIH1cblxuICAgIGJvdE1vdmUoKXsgICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IHhEaWZmID0gdGhpcy5wb3NbMF0gLSB0aGlzLnVzZXJQb3NbMF07XG4gICAgICAgIGNvbnN0IHlEaWZmID0gdGhpcy5wb3NbMV0gLSB0aGlzLnVzZXJQb3NbMV07XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKHhEaWZmKSA+IE1hdGguYWJzKHlEaWZmKSkge1xuICAgICAgICAgICAgcmV0dXJuIHhEaWZmIDwgMCA/IHRoaXMubW92ZShcIkFycm93UmlnaHRcIikgOiB0aGlzLm1vdmUoXCJBcnJvd0xlZnRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4geURpZmYgPCAwID8gdGhpcy5tb3ZlKFwiQXJyb3dEb3duXCIpIDogdGhpcy5tb3ZlKFwiQXJyb3dVcFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmUgKGRpcmVjdGlvbikge1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcIlJpZ2h0XCIgfHwgZGlyZWN0aW9uID09PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgICAgICAgdGhpcy5wb3NbMF0gPSB0aGlzLnZhbGlkTW92ZSh0aGlzLnBvc1swXSArIDUwLCB0aGlzLnBvc1sxXSkgPyB0aGlzLnBvc1swXSArIDUwIDogdGhpcy5wb3NbMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcIkxlZnRcIiB8fCBkaXJlY3Rpb24gPT09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzBdID0gdGhpcy52YWxpZE1vdmUodGhpcy5wb3NbMF0gLSA1MCwgdGhpcy5wb3NbMV0pID8gdGhpcy5wb3NbMF0gLSA1MCA6IHRoaXMucG9zWzBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJVcFwiIHx8IGRpcmVjdGlvbiA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgICAgICAgIHRoaXMucG9zWzFdID0gdGhpcy52YWxpZE1vdmUodGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdIC0gNTApID8gdGhpcy5wb3NbMV0gLSA1MCA6IHRoaXMucG9zWzFdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJEb3duXCIgfHwgZGlyZWN0aW9uID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICAgICAgICB0aGlzLnBvc1sxXSA9IHRoaXMudmFsaWRNb3ZlKHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSArIDUwKSA/IHRoaXMucG9zWzFdICsgNTAgOiB0aGlzLnBvc1sxXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGtleURvd24oZSkge1xuICAgICAgICBpZiAodGhpcy50eXBlID09PSBcInVzZXJcIikge1xuICAgICAgICAgICAgdGhpcy5tb3ZlKGUua2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYm90TW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/character.js\n");

/***/ }),

/***/ "./lib/display.js":
/*!************************!*\
  !*** ./lib/display.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./lib/level.js\");\n\n\nclass Display {\n    drawGrid (ctx) {\n        GRID.forEach(line => {\n            ctx.beginPath();\n            ctx.rect(line[0],\n                line[1],\n                line[2],\n                line[3]);\n                ctx.fillStyle = \"#F1F1F1\";\n                ctx.fill();\n                ctx.closePath();\n        });\n    }\n\n    draw(ctx){\n        const level = new _level__WEBPACK_IMPORTED_MODULE_0__[\"default\"](LEVEL_ONE, LEVEL_ONE_CHARS);\n        level.draw(ctx);\n        this.drawGrid(ctx);\n        level.setKeyListeners();\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Display);\n\nconst GRID = [];\nfor(let i = 10; i <= 700; i= i+50){\n    GRID.push([i, 0, 1, 700]);\n}\nfor(let i = 10; i <= 700; i= i+50){\n    GRID.push([0, i, 700, 1]);\n}\n\nconst LEVEL_ONE = [\n    [0, 0, 10, 620],\n    [0, 0, 720, 10],\n    [310, 610, 720, 10],\n    [0, 610, 260, 10],\n    [710, 10, 10, 710],  \n\n    // [250, 480, 150, 10],\n    // [200, 100, 400, 10],\n    // [200, 100, 10, 100],\n    // [120, 180, 10, 50],\n    // [120, 230, 50, 10],\n    // [570, 300, 40, 10],\n    // [500, 400, 10, 200],\n    // [450, 400, 100, 10],\n\n    // [250, 480, 10, 160],\n    // [0, 320, 360, 10],\n    // [580, 100, 10, 200],\n];\n\nconst LEVEL_ONE_CHARS = [\n    [640, 20],\n    [380, 240]\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZGlzcGxheS5qcz9hZWJhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSwwQkFBMEIsOENBQUs7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxzRUFBTyxFQUFDOztBQUV2QjtBQUNBLGVBQWUsVUFBVTtBQUN6QjtBQUNBO0FBQ0EsZUFBZSxVQUFVO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9saWIvZGlzcGxheS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMZXZlbCBmcm9tICcuL2xldmVsJztcblxuY2xhc3MgRGlzcGxheSB7XG4gICAgZHJhd0dyaWQgKGN0eCkge1xuICAgICAgICBHUklELmZvckVhY2gobGluZSA9PiB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgucmVjdChsaW5lWzBdLFxuICAgICAgICAgICAgICAgIGxpbmVbMV0sXG4gICAgICAgICAgICAgICAgbGluZVsyXSxcbiAgICAgICAgICAgICAgICBsaW5lWzNdKTtcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjRjFGMUYxXCI7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRyYXcoY3R4KXtcbiAgICAgICAgY29uc3QgbGV2ZWwgPSBuZXcgTGV2ZWwoTEVWRUxfT05FLCBMRVZFTF9PTkVfQ0hBUlMpO1xuICAgICAgICBsZXZlbC5kcmF3KGN0eCk7XG4gICAgICAgIHRoaXMuZHJhd0dyaWQoY3R4KTtcbiAgICAgICAgbGV2ZWwuc2V0S2V5TGlzdGVuZXJzKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5O1xuXG5jb25zdCBHUklEID0gW107XG5mb3IobGV0IGkgPSAxMDsgaSA8PSA3MDA7IGk9IGkrNTApe1xuICAgIEdSSUQucHVzaChbaSwgMCwgMSwgNzAwXSk7XG59XG5mb3IobGV0IGkgPSAxMDsgaSA8PSA3MDA7IGk9IGkrNTApe1xuICAgIEdSSUQucHVzaChbMCwgaSwgNzAwLCAxXSk7XG59XG5cbmNvbnN0IExFVkVMX09ORSA9IFtcbiAgICBbMCwgMCwgMTAsIDYyMF0sXG4gICAgWzAsIDAsIDcyMCwgMTBdLFxuICAgIFszMTAsIDYxMCwgNzIwLCAxMF0sXG4gICAgWzAsIDYxMCwgMjYwLCAxMF0sXG4gICAgWzcxMCwgMTAsIDEwLCA3MTBdLCAgXG5cbiAgICAvLyBbMjUwLCA0ODAsIDE1MCwgMTBdLFxuICAgIC8vIFsyMDAsIDEwMCwgNDAwLCAxMF0sXG4gICAgLy8gWzIwMCwgMTAwLCAxMCwgMTAwXSxcbiAgICAvLyBbMTIwLCAxODAsIDEwLCA1MF0sXG4gICAgLy8gWzEyMCwgMjMwLCA1MCwgMTBdLFxuICAgIC8vIFs1NzAsIDMwMCwgNDAsIDEwXSxcbiAgICAvLyBbNTAwLCA0MDAsIDEwLCAyMDBdLFxuICAgIC8vIFs0NTAsIDQwMCwgMTAwLCAxMF0sXG5cbiAgICAvLyBbMjUwLCA0ODAsIDEwLCAxNjBdLFxuICAgIC8vIFswLCAzMjAsIDM2MCwgMTBdLFxuICAgIC8vIFs1ODAsIDEwMCwgMTAsIDIwMF0sXG5dO1xuXG5jb25zdCBMRVZFTF9PTkVfQ0hBUlMgPSBbXG4gICAgWzY0MCwgMjBdLFxuICAgIFszODAsIDI0MF1cbl07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/display.js\n");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./lib/display.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n    const canvas = document.getElementById('canvas');\n    const ctx = canvas.getContext('2d');\n    const display = new _display__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    display.draw(ctx);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZ2FtZS5qcz85M2M2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBZ0M7O0FBRWhDOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsZ0RBQU87QUFDL0I7QUFDQSxDQUFDIiwiZmlsZSI6Ii4vbGliL2dhbWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlzcGxheSBmcm9tICcuL2Rpc3BsYXknO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNvbnN0IGRpc3BsYXkgPSBuZXcgRGlzcGxheSgpO1xuICAgIGRpc3BsYXkuZHJhdyhjdHgpO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/game.js\n");

/***/ }),

/***/ "./lib/level.js":
/*!**********************!*\
  !*** ./lib/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character */ \"./lib/character.js\");\n\n\nconst KEYS = [\n    \"Right\",\n    \"Left\",\n    \"Up\",\n    \"Down\",\n    \"ArrowRight\",\n    \"ArrowLeft\",\n    \"ArrowUp\",\n    \"ArrowDown\"\n];\n\n class Level {\n    constructor(level, charPos) {\n        this.level = level;\n        this.charPos = charPos;\n        this.draw = this.draw.bind(this);\n        this.validMove = this.validMove.bind(this);\n        this.chars = [];\n    }\n\n    drawWalls(ctx) {\n        this.level.forEach(coord => {\n            ctx.beginPath();\n            ctx.rect(coord[0],\n                coord[1],\n                coord[2],\n                coord[3]);\n            ctx.fillStyle = \"#222222\";\n            ctx.fill();\n            ctx.closePath();\n        });\n    }\n\n    drawChars(ctx) {\n        let userPos;\n        this.chars.forEach((char, index) => {\n            if (index === 0) {\n                userPos = char.pos;\n            } else {\n                char.updateUserPos(userPos);\n            }\n            char.draw(ctx);\n            char.setKeyListeners();\n        });\n    }\n\n    drawInitial(ctx) {\n        let char;\n        let userPos;\n        this.charPos.forEach((pos, index) => {\n            if (index === 0) {\n                char = new _character__WEBPACK_IMPORTED_MODULE_0__[\"default\"](pos, \"user\", this.validMove);\n                userPos = pos;\n            } else {\n                char = new _character__WEBPACK_IMPORTED_MODULE_0__[\"default\"](pos, \"bot\", this.validMove, userPos);\n            }\n            char.draw(ctx);\n            char.setKeyListeners();\n            this.chars.push(char);\n        });\n        this.drawWalls(ctx);\n    }\n    \n    draw(ctx, e) {\n        if (!e || KEYS.includes(e.key)) {\n\n            this.ctx = ctx;\n            ctx.clearRect(0, 0, 720, 620);\n            \n            if (this.chars.length === 0) {\n                this.drawInitial(ctx);\n            } else {\n                this.drawChars(ctx);\n                this.drawWalls(ctx);\n            }\n        }\n    }\n\n    setKeyListeners() {\n        document.addEventListener(\"keydown\", (e) => this.draw(this.ctx, e));\n    }\n\n    validMove (x, y) {\n        const right = x + 40;\n        const bottom = y + 80;\n        \n        return (this.level.every(coord => {\n            if (coord[0] === x &&\n                coord[1] === bottom) {\n                    return false;\n            }\n            else if (coord[2] > coord[3]) {\n                // how big bottom hitbox?\n                if (coord[1] === bottom &&\n                    x >= coord[0] &&\n                    x <= coord[0] + coord[2] -40){\n                        return false;\n                }\n            } else {\n                // fix minus\n                if (coord[0] === x &&\n                    y >= coord[1] &&\n                    y <= coord[1] + coord[3] -40) {\n                    return false;\n                }\n            }\n            return true;\n        }));\n    }\n }\n\n /* harmony default export */ __webpack_exports__[\"default\"] = (Level);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbGV2ZWwuanM/ZjgyNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrREFBUztBQUNwQztBQUNBLGFBQWE7QUFDYiwyQkFBMkIsa0RBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSxDQUFnQixvRUFBSyIsImZpbGUiOiIuL2xpYi9sZXZlbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9jaGFyYWN0ZXInO1xuXG5jb25zdCBLRVlTID0gW1xuICAgIFwiUmlnaHRcIixcbiAgICBcIkxlZnRcIixcbiAgICBcIlVwXCIsXG4gICAgXCJEb3duXCIsXG4gICAgXCJBcnJvd1JpZ2h0XCIsXG4gICAgXCJBcnJvd0xlZnRcIixcbiAgICBcIkFycm93VXBcIixcbiAgICBcIkFycm93RG93blwiXG5dO1xuXG4gY2xhc3MgTGV2ZWwge1xuICAgIGNvbnN0cnVjdG9yKGxldmVsLCBjaGFyUG9zKSB7XG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgdGhpcy5jaGFyUG9zID0gY2hhclBvcztcbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudmFsaWRNb3ZlID0gdGhpcy52YWxpZE1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGFycyA9IFtdO1xuICAgIH1cblxuICAgIGRyYXdXYWxscyhjdHgpIHtcbiAgICAgICAgdGhpcy5sZXZlbC5mb3JFYWNoKGNvb3JkID0+IHtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5yZWN0KGNvb3JkWzBdLFxuICAgICAgICAgICAgICAgIGNvb3JkWzFdLFxuICAgICAgICAgICAgICAgIGNvb3JkWzJdLFxuICAgICAgICAgICAgICAgIGNvb3JkWzNdKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMyMjIyMjJcIjtcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRyYXdDaGFycyhjdHgpIHtcbiAgICAgICAgbGV0IHVzZXJQb3M7XG4gICAgICAgIHRoaXMuY2hhcnMuZm9yRWFjaCgoY2hhciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHVzZXJQb3MgPSBjaGFyLnBvcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hhci51cGRhdGVVc2VyUG9zKHVzZXJQb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hhci5kcmF3KGN0eCk7XG4gICAgICAgICAgICBjaGFyLnNldEtleUxpc3RlbmVycygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkcmF3SW5pdGlhbChjdHgpIHtcbiAgICAgICAgbGV0IGNoYXI7XG4gICAgICAgIGxldCB1c2VyUG9zO1xuICAgICAgICB0aGlzLmNoYXJQb3MuZm9yRWFjaCgocG9zLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY2hhciA9IG5ldyBDaGFyYWN0ZXIocG9zLCBcInVzZXJcIiwgdGhpcy52YWxpZE1vdmUpO1xuICAgICAgICAgICAgICAgIHVzZXJQb3MgPSBwb3M7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoYXIgPSBuZXcgQ2hhcmFjdGVyKHBvcywgXCJib3RcIiwgdGhpcy52YWxpZE1vdmUsIHVzZXJQb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hhci5kcmF3KGN0eCk7XG4gICAgICAgICAgICBjaGFyLnNldEtleUxpc3RlbmVycygpO1xuICAgICAgICAgICAgdGhpcy5jaGFycy5wdXNoKGNoYXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kcmF3V2FsbHMoY3R4KTtcbiAgICB9XG4gICAgXG4gICAgZHJhdyhjdHgsIGUpIHtcbiAgICAgICAgaWYgKCFlIHx8IEtFWVMuaW5jbHVkZXMoZS5rZXkpKSB7XG5cbiAgICAgICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCA3MjAsIDYyMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0aGlzLmNoYXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0luaXRpYWwoY3R4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3Q2hhcnMoY3R4KTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdXYWxscyhjdHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0S2V5TGlzdGVuZXJzKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4gdGhpcy5kcmF3KHRoaXMuY3R4LCBlKSk7XG4gICAgfVxuXG4gICAgdmFsaWRNb3ZlICh4LCB5KSB7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0geCArIDQwO1xuICAgICAgICBjb25zdCBib3R0b20gPSB5ICsgODA7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKHRoaXMubGV2ZWwuZXZlcnkoY29vcmQgPT4ge1xuICAgICAgICAgICAgaWYgKGNvb3JkWzBdID09PSB4ICYmXG4gICAgICAgICAgICAgICAgY29vcmRbMV0gPT09IGJvdHRvbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb29yZFsyXSA+IGNvb3JkWzNdKSB7XG4gICAgICAgICAgICAgICAgLy8gaG93IGJpZyBib3R0b20gaGl0Ym94P1xuICAgICAgICAgICAgICAgIGlmIChjb29yZFsxXSA9PT0gYm90dG9tICYmXG4gICAgICAgICAgICAgICAgICAgIHggPj0gY29vcmRbMF0gJiZcbiAgICAgICAgICAgICAgICAgICAgeCA8PSBjb29yZFswXSArIGNvb3JkWzJdIC00MCl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBmaXggbWludXNcbiAgICAgICAgICAgICAgICBpZiAoY29vcmRbMF0gPT09IHggJiZcbiAgICAgICAgICAgICAgICAgICAgeSA+PSBjb29yZFsxXSAmJlxuICAgICAgICAgICAgICAgICAgICB5IDw9IGNvb3JkWzFdICsgY29vcmRbM10gLTQwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSkpO1xuICAgIH1cbiB9XG5cbiBleHBvcnQgZGVmYXVsdCBMZXZlbDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/level.js\n");

/***/ }),

/***/ "./lib/sprite.js":
/*!***********************!*\
  !*** ./lib/sprite.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Sprite {\n    constructor (options) {\n        this.x = options.x;\n        this.y = options.y;\n        this.type = options.type;\n\n        if (this.type === \"user\") {\n            this.image = new Image();\n            this.image.src = \"assets/Mike Tyson.png\";\n        } else {\n            this.image = new Image();\n            this.image.src = \"assets/jason.png\";\n        }\n    }\n    \n    draw (ctx) {\n        this.image.onload = () => {\n            if (this.type === \"user\") {\n                ctx.drawImage(this.image, 250, 0, 50, 115, this.x, this.y, 40, 80);\n            } else {\n                ctx.drawImage(this.image, 195, 115, 30, 70, this.x, this.y, 40, 80);\n            }\n        };\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sprite);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvc3ByaXRlLmpzP2NlMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHFFQUFNIiwiZmlsZSI6Ii4vbGliL3Nwcml0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNwcml0ZSB7XG4gICAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy54ID0gb3B0aW9ucy54O1xuICAgICAgICB0aGlzLnkgPSBvcHRpb25zLnk7XG4gICAgICAgIHRoaXMudHlwZSA9IG9wdGlvbnMudHlwZTtcblxuICAgICAgICBpZiAodGhpcy50eXBlID09PSBcInVzZXJcIikge1xuICAgICAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSBcImFzc2V0cy9NaWtlIFR5c29uLnBuZ1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSBcImFzc2V0cy9qYXNvbi5wbmdcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkcmF3IChjdHgpIHtcbiAgICAgICAgdGhpcy5pbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy50eXBlID09PSBcInVzZXJcIikge1xuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgMjUwLCAwLCA1MCwgMTE1LCB0aGlzLngsIHRoaXMueSwgNDAsIDgwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCAxOTUsIDExNSwgMzAsIDcwLCB0aGlzLngsIHRoaXMueSwgNDAsIDgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwcml0ZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/sprite.js\n");

/***/ })

/******/ });