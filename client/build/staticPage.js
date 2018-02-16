var staticPage =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 76);
/******/ })
/************************************************************************/
/******/ ({

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var thisSrc = void 0;
if (document.currentScript) {
  thisSrc = document.currentScript.dataset.src;
} else {
  var scripts = document.getElementsByTagName('script');
  thisSrc = scripts[scripts.length - 1].dataset.src;
}

function createObjs(ClassElem) {
  var elems = [];
  dynamicElems.forEach(function (element) {
    // eslint-disable-line
    if (element.dataset.scriptSrc === thisSrc) {
      elems.push(new ClassElem(element));
    }
  });
  return elems;
}

exports.default = createObjs;

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elems = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _crateElems = __webpack_require__(21);

var _crateElems2 = _interopRequireDefault(_crateElems);

var _waitScript = __webpack_require__(77);

var _waitScript2 = _interopRequireDefault(_waitScript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StaticPage = function () {
  function StaticPage(domElem) {
    _classCallCheck(this, StaticPage);

    console.log('create new StaticPage');
    this.domElem = domElem;
    this.html = domElem.innerHTML;
    this.editModule();
  }

  _createClass(StaticPage, [{
    key: 'editModule',
    value: function editModule() {
      (0, _waitScript2.default)('module1') // eslint-disable-line
      .then(function (res) {
        res.elems[1].setText('orange'); // eslint-disable-line
      });
    }
  }]);

  return StaticPage;
}();

var elems = (0, _crateElems2.default)(StaticPage);
exports.elems = elems;

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function wait(elemContainerName) {
  return new Promise(function (resolve, reject) {
    check(50, elemContainerName, resolve, reject);
  });
}

function check(tryCounter, elemContainerName, resolve, reject) {
  if (tryCounter < 0) {
    reject(new Error('Script not loaded - ' + elemContainerName + '.js'));
    return;
  }

  if (window[elemContainerName]) {
    resolve(window[elemContainerName]);
    return;
  }

  console.log('Waiting for script download: ' + elemContainerName + '.js ' + tryCounter + ' retries left');

  setTimeout(function () {
    check(tryCounter - 1, elemContainerName, resolve, reject);
  }, 300);
}

exports.default = wait;

/***/ })

/******/ });