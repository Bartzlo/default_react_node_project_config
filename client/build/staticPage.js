var staticPage =
webpackJsonp_name_([0],{

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elems = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _createElems = __webpack_require__(12);

var _createElems2 = _interopRequireDefault(_createElems);

var _waitScript = __webpack_require__(23);

var _waitScript2 = _interopRequireDefault(_waitScript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StaticPage = function () {
  function StaticPage(domElem) {
    _classCallCheck(this, StaticPage);

    if (true) console.log('Create new StaticPage');
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

// console.log($('p'))


var elems = (0, _createElems2.default)(StaticPage);
exports.elems = elems;

/***/ })

},[38]);
//# sourceMappingURL=staticPage.js.map