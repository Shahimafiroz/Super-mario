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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/images/platform2.png":
/*!**********************************!*\
  !*** ./src/images/platform2.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2dfcd35050d1c709fda4456629f1dfa5.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_platform2_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/platform2.png */ "./src/images/platform2.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/////////////////////////////////////////// IMPORTING ASSETS  /////////////////////////////////////////

console.log(_images_platform2_png__WEBPACK_IMPORTED_MODULE_0__["default"]); ////////////////////////////////////////// DEFINING CANVAS AND ITS CONTEXTS ////////////////////////////////

var can = document.querySelector("canvas");
var c = can.getContext("2d");
can.width = window.innerWidth;
can.height = window.innerHeight; // global constant variable

var gravity = 0.1; ////////////////////////////////////////////////// PLAYER CREATION ////////////////////////////////////////////////////

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 100,
      y: 100
    }; /// adding downward velocity to the Player

    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 30;
    this.height = 30;
  } /// drawing the player


  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.fillStyle = "red";
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
    } /// updating the position of the player

  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x; // adding acceleration to velocity such that it stops when it touches the bottom

      if (this.position.y + this.height + this.velocity.y <= can.height) {
        this.velocity.y += gravity;
      } else {
        this.velocity.y = 0;
      } //if else ends

    } // update function ends

  }]);

  return Player;
}(); //player class ends
////////////////////////////////////////////// PLATFORM CREATION //////////////////////////////////////////////////////


var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.height = 30;
    this.width = 190;
    this.image = image;
  } /// drawing the platform


  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}(); ////////////////// IMPLEMENTING THE CREATED CLASS Player & Platform BY CALLING THEM AS RESPECTIVE OBJECTS  ////////////
//// new player


var player1 = new Player();
player1.update(); ////new platformssss creating multiple platforms using arrays
// displaying the html image as java script image

var image = new Image();
image.src = _images_platform2_png__WEBPACK_IMPORTED_MODULE_0__["default"];
var platforms = [new Platform({
  x: 200,
  y: 100,
  image: image
}), new Platform({
  x: 600,
  y: 350,
  image: image
}), new Platform({
  x: 1900,
  y: 250,
  image: image
}), new Platform({
  x: 1000,
  y: 100,
  image: image
}), new Platform({
  x: 1300,
  y: 250,
  image: image
}) // new Platform({ x: 2300, y: 300 }),
// new Platform({ x: 2700, y: 100 }),
// new Platform({ x: 3000, y: 350 }),
// new platform({ x: 3400, y: 200 }),
]; /// defining parameters for rectillinear motion

var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
}; ///////////////////////////////// MOTION AND ANIMATION (HEART OF THE PROGM.) ////////////////////////////////////////
///////////////////////////////// MOTION AND ANIMATION (HEART OF THE PROGM.) ////////////////////////////////////////
///////////////////////////////// MOTION AND ANIMATION (HEART OF THE PROGM.) ////////////////////////////////////////
///////////////////////////////// MOTION AND ANIMATION (HEART OF THE PROGM.) ////////////////////////////////////////
///////////////////////////////// MOTION AND ANIMATION (HEART OF THE PROGM.) ////////////////////////////////////////

var scrollOffset = 0; // win scenario -----> 1st part of code

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, can.width, can.height);
  player1.update(); /// calling the draw function for each platform inside the array

  platforms.forEach(function (platform) {
    platform.draw();
  }); /// if else ===> for players  rectilinear motion implementation

  if (keys.right.pressed && // motion while the right key is pressed
  player1.position.x < 700 // limiting motion on right past 700 point
  ) {
      player1.velocity.x = 5;
    } else if (keys.left.pressed && // motion while left key is pressed
  player1.position.x > 200 // limitng motion on left at 200 point
  ) {
      player1.velocity.x = -5;
    } else {
    player1.velocity.x = 0; // stopping the motion if the range of player1 movement is beyond specified point

    if (keys.right.pressed) {
      scrollOffset += 5; // win scenario -----> 2nd part of code --- detecting right scrolled pixels

      platforms.forEach(function (platform) {
        platform.position.x -= 5;
      }); //setting right motion to pltform1 if the right key is pressed even after reaching right lim
    } else if (keys.left.pressed) {
      scrollOffset -= 5; // win scenario -----> 3rd part of code --- detecting left scrolled pixels

      platforms.forEach(function (platform) {
        platform.position.x += 5;
      }); //setting left motion to platform if left key is pressed even after reaching left lim
    } // motion when no key is pressed

  } // loop for motion when keys are pressed


  console.log(scrollOffset); /// if else for player landing on platform(platform collisoin detection)

  platforms.forEach(function (platform) {
    if (player1.position.y + player1.height <= platform.position.y && player1.position.y + player1.height + player1.velocity.y >= platform.position.y && player1.position.x + player1.width >= platform.position.x && player1.position.x <= platform.position.x + platform.width) {
      player1.velocity.y = 0;
    }
  }); // win scenario -----> 4th part of code --- declaring the winner.

  if (scrollOffset > 3500) {
    alert(" yahooooo !!! you won. Super Mario!!!");
  }
} // animate function ends


animate(); // calling the animate function for execution
///
//
///////////////////////////////// MOTION AND ANIMATION (HEART OF THE PROGM.) ////////////////////////////////////////
/////////////////////////////////// MOTION AND ANIMATION (HEART OF THE PROGM.) ////////////////////////////////////////
/////////////////////////////////// MOTION AND ANIMATION (HEART OF THE PROGM.) ////////////////////////////////////////
/////////////////////////////////// MOTION AND ANIMATION (HEART OF THE PROGM.) ////////////////////////////////////////
///////////////////////////////////////////////////// PLAYER MOVEMENT ////////////////////////////////////////////////
/// event listner for key down

addEventListener("keydown", function (_ref2) {
  var keyCode = _ref2.keyCode;
  console.log(keyCode);

  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = true;
      break;

    case 68:
      console.log("right");
      keys.right.pressed = true;
      break;

    case 87:
      console.log("up");
      player1.velocity.y -= 1;
      break;

    case 83:
      console.log("down");
      break;
  } //switch statement ends


  console.log(keys.right.pressed, keys.left.pressed);
} // called function on keydown ends
); // keydown eventlistner ends
//// event listners for keyup

addEventListener("keyup", function (_ref3) {
  var keyCode = _ref3.keyCode;
  console.log(keyCode);

  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = false;
      break;

    case 68:
      console.log("right");
      keys.right.pressed = false;
      break;

    case 87:
      console.log("up");
      player1.velocity.y -= 10;
      break;

    case 83:
      console.log("down");
      break;
  } //switch statement ends


  console.log(keys.right.pressed, keys.left.pressed);
} // called function on keyup ends
); //keyup eventlistner ends

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map