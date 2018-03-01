var module1 =
webpackJsonp_name_([5],{

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elems = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _createElems = __webpack_require__(7);

var _createElems2 = _interopRequireDefault(_createElems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Module1 = function () {
  function Module1(domElem) {
    _classCallCheck(this, Module1);

    if (true) console.log('Create new Module1');
    this.domElem = domElem;
    this.colorElem = this.domElem.querySelector('.color');
    this.text = this.colorElem.innerHTML;
    this.setColor();
  }

  _createClass(Module1, [{
    key: 'setColor',
    value: function setColor() {
      this.colorElem.style.color = this.text;
    }
  }, {
    key: 'setText',
    value: function setText(text) {
      this.text = text;
      this.colorElem.innerHTML = text;
      this.setColor();
    }
  }]);

  return Module1;
}();

var elems = (0, _createElems2.default)(Module1);
exports.elems = elems;

/***/ })

},[38]);
//# sourceMappingURL=module1.js.map