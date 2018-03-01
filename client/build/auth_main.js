var auth_main =
webpackJsonp_name_([0],{

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function req(url) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return new Promise(function (resolve, reject) {
    var opt = {
      method: 'get',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      credentials: 'same-origin'
    };
    if (query) opt.body = query;

    fetch(url, opt).then(function (res) {
      return res.json();
    }).then(function (res) {
      if (true) console.log(res);
      resolve(res);
    }).catch(function (err) {
      if (true) console.log(err);
      reject(err);
    });
  });
}

exports.default = req;

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouterDom = __webpack_require__(6);

function handleError(response, error) {
  var elem = null;

  if (error) {
    elem = React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Error: ',
        error.message
      ),
      React.createElement(
        _reactRouterDom.Link,
        { to: '/' },
        'Home'
      )
    );
  } else if (response.message === 'need authorization') {
    elem = React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'You need authorized to access this page'
      ),
      React.createElement(
        _reactRouterDom.Link,
        { to: '/signin' },
        'Go to signin page'
      ),
      React.createElement('br', null),
      React.createElement(
        _reactRouterDom.Link,
        { to: '/' },
        'Home'
      )
    );
  } else if (response.message === 'not enough rights') {
    var groupList = response.arg.groupList.map(function (group) {
      return group + ' ';
    });
    elem = React.createElement(
      'div',
      null,
      React.createElement(
        'h4',
        null,
        'Hello ',
        response.arg.userName,
        '!'
      ),
      React.createElement(
        'p',
        null,
        'Access denied'
      ),
      React.createElement('hr', null),
      React.createElement(
        'h4',
        null,
        'Details'
      ),
      React.createElement(
        'p',
        null,
        'You grou: ',
        response.arg.userGroup
      ),
      React.createElement(
        'p',
        null,
        'Access available for groups: ',
        groupList
      ),
      React.createElement(
        _reactRouterDom.Link,
        { to: '/' },
        'Home'
      )
    );
  } else if (response.type === 'error') {
    elem = React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'The server sent an error: ',
        response.message
      ),
      React.createElement(
        _reactRouterDom.Link,
        { to: '/' },
        'Home'
      )
    );
  }

  return elem;
}

exports.default = handleError;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(ReactDOM, React) {

var _reactRouterDom = __webpack_require__(6);

var _App = __webpack_require__(75);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (true) console.log('Start main script');
if (true) console.log('-----------------');

ReactDOM.render(React.createElement(
  _reactRouterDom.BrowserRouter,
  null,
  React.createElement(_App2.default, null)
), document.getElementById('root'));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24), __webpack_require__(1)))

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouterDom = __webpack_require__(6);

var _MainMenu = __webpack_require__(76);

var _MainMenu2 = _interopRequireDefault(_MainMenu);

var _UserMenu = __webpack_require__(77);

var _UserMenu2 = _interopRequireDefault(_UserMenu);

var _HomePage = __webpack_require__(79);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _AdminPage = __webpack_require__(80);

var _AdminPage2 = _interopRequireDefault(_AdminPage);

var _PublicPage = __webpack_require__(81);

var _PublicPage2 = _interopRequireDefault(_PublicPage);

var _Profile = __webpack_require__(82);

var _Profile2 = _interopRequireDefault(_Profile);

var _Signin = __webpack_require__(83);

var _Signin2 = _interopRequireDefault(_Signin);

var _Signup = __webpack_require__(84);

var _Signup2 = _interopRequireDefault(_Signup);

var _Page = __webpack_require__(85);

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = { userName: '' };
    _this.changeUser = _this.changeUser.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      fetch('/api/auth/check', {
        method: 'get',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        credentials: 'same-origin'
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        if (true) console.log(res);
        _this2.changeUser(res.arg.username);
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'changeUser',
    value: function changeUser(userName) {
      this.setState({ userName: userName });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var userName = this.state.userName;
      return React.createElement(
        'div',
        { className: 'wrapper' },
        React.createElement(
          'div',
          { className: 'main-header' },
          React.createElement(
            'h1',
            null,
            'Site name'
          )
        ),
        React.createElement(_MainMenu2.default, null),
        React.createElement(_UserMenu2.default, { changeUser: this.changeUser, userName: userName }),
        React.createElement(
          'div',
          { className: 'main-content' },
          React.createElement(
            _reactRouterDom.Switch,
            null,
            React.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _HomePage2.default }),
            React.createElement(_reactRouterDom.Route, { path: '/admin', component: _AdminPage2.default }),
            React.createElement(_reactRouterDom.Route, { path: '/profile', component: _Profile2.default }),
            React.createElement(_reactRouterDom.Route, { path: '/public-page', component: _PublicPage2.default }),
            React.createElement(_reactRouterDom.Route, { path: '/signin', render: function render() {
                return !userName ? React.createElement(_Signin2.default, { channgeUser: _this3.changeUser }) : React.createElement(_reactRouterDom.Redirect, { to: '/' });
              } }),
            React.createElement(_reactRouterDom.Route, { path: '/signup', render: function render() {
                return !userName ? React.createElement(_Signup2.default, { channgeUser: _this3.changeUser }) : React.createElement(_reactRouterDom.Redirect, { to: '/' });
              } }),
            React.createElement(_reactRouterDom.Route, { component: _Page2.default })
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

exports.default = App;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouterDom = __webpack_require__(6);

var MainMenu = function MainMenu(props) {
  return React.createElement(
    "nav",
    { className: "main-menu" },
    React.createElement(
      "h3",
      { className: "main-menu_header" },
      "Main menu"
    ),
    React.createElement(
      "ul",
      { className: "main-menu__list" },
      React.createElement(
        "li",
        { className: "main-menu__item" },
        React.createElement(
          _reactRouterDom.Link,
          { to: "/" },
          "Home"
        )
      ),
      React.createElement(
        "li",
        { className: "main-menu__item" },
        React.createElement(
          _reactRouterDom.Link,
          { to: "/admin" },
          "Admin page"
        )
      ),
      React.createElement(
        "li",
        { className: "main-menu__item" },
        React.createElement(
          _reactRouterDom.Link,
          { to: "/public-page" },
          "Public"
        )
      ),
      React.createElement(
        "li",
        { className: "main-menu__item" },
        React.createElement(
          _reactRouterDom.Link,
          { to: "/profile" },
          "Profile"
        )
      )
    )
  );
};

exports.default = MainMenu;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouterDom = __webpack_require__(6);

var _Signout = __webpack_require__(78);

var _Signout2 = _interopRequireDefault(_Signout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import User from '../../store/User'
// import state from '../../store/state'

var UserMenu = function (_React$Component) {
  _inherits(UserMenu, _React$Component);

  function UserMenu() {
    _classCallCheck(this, UserMenu);

    return _possibleConstructorReturn(this, (UserMenu.__proto__ || Object.getPrototypeOf(UserMenu)).apply(this, arguments));
  }

  _createClass(UserMenu, [{
    key: 'render',
    value: function render() {
      var elem = null;
      if (this.props.userName) {
        elem = React.createElement(
          'div',
          { className: 'user-menu' },
          React.createElement(
            'h4',
            null,
            'User menu'
          ),
          React.createElement(
            'p',
            null,
            'User: ',
            this.props.userName
          ),
          React.createElement(_Signout2.default, { changeUser: this.props.changeUser })
        );
      } else {
        elem = React.createElement(
          'div',
          { className: 'user-menu' },
          React.createElement(
            'h3',
            null,
            'User menu'
          ),
          React.createElement(
            _reactRouterDom.Link,
            { to: '/signin' },
            'Signin'
          ),
          React.createElement(
            'p',
            null,
            'or'
          ),
          React.createElement(
            _reactRouterDom.Link,
            { to: '/signup' },
            'Signup'
          )
        );
      }

      return elem;
    }
  }]);

  return UserMenu;
}(React.Component);

exports.default = UserMenu;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouterDom = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signout = function (_React$Component) {
  _inherits(Signout, _React$Component);

  function Signout() {
    _classCallCheck(this, Signout);

    var _this = _possibleConstructorReturn(this, (Signout.__proto__ || Object.getPrototypeOf(Signout)).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Signout, [{
    key: 'handleClick',
    value: function handleClick(event) {
      var _this2 = this;

      fetch('/api/auth/signout', {
        method: 'post',
        credentials: 'same-origin'
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        if (true) console.log(res);
        _this2.props.changeUser(false);
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        _reactRouterDom.Link,
        { to: '/', onClick: this.handleClick },
        'Signout'
      );
    }
  }]);

  return Signout;
}(React.Component);

exports.default = Signout;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var HomePage = function HomePage(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h2",
      null,
      "Home page"
    ),
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis similique voluptatibus vitae repellat nisi, minus sunt. Libero atque, explicabo nesciunt obcaecati magnam eos commodi accusantium unde cupiditate quo. Dolorem, earum!"
  );
};

exports.default = HomePage;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _elemReqData = __webpack_require__(34);

var _elemReqData2 = _interopRequireDefault(_elemReqData);

var _elemHandleError = __webpack_require__(35);

var _elemHandleError2 = _interopRequireDefault(_elemHandleError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminPage = function (_React$Component) {
  _inherits(AdminPage, _React$Component);

  function AdminPage(props) {
    _classCallCheck(this, AdminPage);

    var _this = _possibleConstructorReturn(this, (AdminPage.__proto__ || Object.getPrototypeOf(AdminPage)).call(this, props));

    _this.state = {
      error: '',
      response: ''
    };
    return _this;
  }

  _createClass(AdminPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      (0, _elemReqData2.default)('/api/site/admin-page').then(function (res) {
        return _this2.setState({ response: res });
      }).catch(function (err) {
        return _this2.setState({ error: err });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var response = this.state.response;
      var error = this.state.error;

      var elem = !response && !error ? null : (0, _elemHandleError2.default)(response, error) || React.createElement(
        'div',
        null,
        React.createElement(
          'h2',
          null,
          'Admin page'
        ),
        React.createElement(
          'p',
          null,
          'Welcome!'
        ),
        React.createElement(
          'p',
          null,
          'Dynamic data: ',
          response.arg.text
        )
      );

      return elem;
    }
  }]);

  return AdminPage;
}(React.Component);

exports.default = AdminPage;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var PublicPage = function PublicPage(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h2",
      null,
      "Public page"
    ),
    React.createElement(
      "p",
      null,
      "This page available for all"
    )
  );
};

exports.default = PublicPage;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _elemReqData = __webpack_require__(34);

var _elemReqData2 = _interopRequireDefault(_elemReqData);

var _elemHandleError = __webpack_require__(35);

var _elemHandleError2 = _interopRequireDefault(_elemHandleError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_React$Component) {
  _inherits(Profile, _React$Component);

  function Profile(props) {
    _classCallCheck(this, Profile);

    var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));

    _this.state = {
      error: '',
      response: ''
    };
    return _this;
  }

  _createClass(Profile, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      (0, _elemReqData2.default)('/api/site/profile').then(function (res) {
        return _this2.setState({ response: res });
      }).catch(function (err) {
        return _this2.setState({ error: err });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var response = this.state.response;
      var error = this.state.error;

      var elem = !response && !error ? null : (0, _elemHandleError2.default)(response, error) || React.createElement(
        'div',
        null,
        React.createElement(
          'h2',
          null,
          'Profile page'
        ),
        React.createElement(
          'p',
          null,
          'Welcome, ',
          response.arg.userName
        ),
        React.createElement('hr', null),
        React.createElement(
          'h4',
          null,
          'Account info'
        ),
        React.createElement(
          'p',
          null,
          'Name: ',
          response.arg.userName
        ),
        React.createElement(
          'p',
          null,
          'E-mail: ',
          response.arg.email
        ),
        React.createElement(
          'p',
          null,
          'Group: ',
          response.arg.userGroup
        )
      );

      return elem;
    }
  }]);

  return Profile;
}(React.Component);

exports.default = Profile;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouterDom = __webpack_require__(6);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signin = function (_React$Component) {
  _inherits(Signin, _React$Component);

  function Signin(props) {
    _classCallCheck(this, Signin);

    var _this = _possibleConstructorReturn(this, (Signin.__proto__ || Object.getPrototypeOf(Signin)).call(this, props));

    _this.state = {
      name: '',
      pwd: '',
      error: ''
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleError = _this.handleError.bind(_this);
    return _this;
  }

  _createClass(Signin, [{
    key: 'handleError',
    value: function handleError(res) {
      if (res.message === 'required field is not filled') {
        this.setState({ error: 'Required field is not filled' });
        return;
      }

      this.setState({ error: res });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      var target = event.target;

      this.setState(_defineProperty({}, target.name, target.value));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var _this2 = this;

      event.preventDefault();
      this.setState({ error: '' });

      if (!this.state.name || !this.state.pwd) {
        this.handleError({ message: 'required field is not filled' });
        return;
      }

      var reqData = {
        email: this.state.name,
        password: this.state.pwd
      };

      fetch('/api/auth/signin', {
        method: 'post',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        credentials: 'same-origin',
        body: JSON.stringify(reqData)
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        if (true) console.log(res);
        if (res.type === 'ok') _this2.props.channgeUser(res.arg.username);
        if (res.type === 'error') _this2.handleError(res.message);
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h2',
          null,
          'Singnin form'
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          React.createElement(
            'p',
            null,
            React.createElement(
              'label',
              null,
              'E-mail:',
              React.createElement('br', null),
              React.createElement('input', { type: 'email', value: this.state.name, onChange: this.handleChange, name: 'name' })
            ),
            React.createElement('br', null),
            React.createElement(
              'label',
              null,
              'Password:',
              React.createElement('br', null),
              React.createElement('input', { type: 'password', value: this.state.pwd, onChange: this.handleChange, name: 'pwd' })
            ),
            React.createElement('br', null),
            React.createElement(
              'label',
              null,
              React.createElement('br', null),
              React.createElement('input', { type: 'submit' })
            )
          ),
          this.state.error ? React.createElement(
            'p',
            { className: 'form-error' },
            this.state.error
          ) : null
        ),
        React.createElement(
          'p',
          null,
          'New user? ',
          React.createElement(
            _reactRouterDom.Link,
            { to: '/signup' },
            'Create an account'
          )
        ),
        React.createElement(
          'p',
          null,
          'or'
        ),
        React.createElement(
          'a',
          { href: '/api/auth/google' },
          'Login with Google account'
        )
      );
    }
  }]);

  return Signin;
}(React.Component);

exports.default = Signin;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signup = function (_React$Component) {
  _inherits(Signup, _React$Component);

  function Signup(props) {
    _classCallCheck(this, Signup);

    var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this, props));

    _this.state = {
      name: '',
      email: '',
      pwd: '',
      pwdConf: '',
      error: ''
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleError = _this.handleError.bind(_this);
    return _this;
  }

  _createClass(Signup, [{
    key: 'handleError',
    value: function handleError(res) {
      if (res.message === 'required field is not filled') {
        this.setState({ error: 'Required field is not filled' });
        return;
      }

      if (res.message === 'passwords do not match') {
        this.setState({ error: 'Passwords do not match' });
        return;
      }

      if (res.message === 'duplicate email') {
        this.setState({ error: 'Email: ' + res.arg + ' alrady exist' });
        return;
      }

      if (res.message === 'duplicate username') {
        this.setState({ error: 'User: ' + res.arg + ' alrady exist' });
        return;
      }

      this.setState({ error: res });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      var target = event.target;

      this.setState(_defineProperty({}, target.name, target.value));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var _this2 = this;

      event.preventDefault();
      this.setState({ error: '' });

      if (!this.state.name || !this.state.email || !this.state.pwd || !this.state.pwdConf) {
        this.handleError({ message: 'required field is not filled' });
        return;
      }

      if (this.state.pwd !== this.state.pwdConf) {
        this.handleError({ message: 'passwords do not match' });
        return;
      }

      var reqData = {
        username: this.state.name,
        email: this.state.email,
        password: this.state.pwd,
        passwordConf: this.state.pwdConf
      };

      fetch('/api/auth/signup', {
        method: 'post',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(reqData)
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        if (true) console.log(res);
        if (res.type === 'ok') {
          fetch('/api/auth/signin', {
            method: 'post',
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
            credentials: 'same-origin',
            body: JSON.stringify(reqData)
          }).then(function (res) {
            return res.json();
          }).then(function (res) {
            console.log(res);
            if (res.type === 'ok') _this2.props.channgeUser(res.arg.username);
            if (res.type === 'error') _this2.handleError(res.message);
          }).catch(function (err) {
            return console.log(err);
          });
        }
        if (res.type === 'error') _this2.handleError(res);
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h2',
          null,
          'Singnup form'
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          React.createElement(
            'p',
            null,
            React.createElement(
              'label',
              null,
              'Name:',
              React.createElement('br', null),
              React.createElement('input', { type: 'text', value: this.state.name, onChange: this.handleChange, name: 'name' })
            ),
            React.createElement('br', null),
            React.createElement(
              'label',
              null,
              'E-mail:',
              React.createElement('br', null),
              React.createElement('input', { type: 'email', value: this.state.email, onChange: this.handleChange, name: 'email', id: '' })
            ),
            React.createElement('br', null),
            React.createElement(
              'label',
              null,
              'Password:',
              React.createElement('br', null),
              React.createElement('input', { type: 'password', value: this.state.pwd, onChange: this.handleChange, name: 'pwd' })
            ),
            React.createElement('br', null),
            React.createElement(
              'label',
              null,
              'Confirm password:',
              React.createElement('br', null),
              React.createElement('input', { type: 'password', value: this.state.pwdConf, onChange: this.handleChange, name: 'pwdConf' })
            ),
            React.createElement('br', null),
            React.createElement(
              'label',
              null,
              React.createElement('br', null),
              React.createElement('input', { type: 'submit' })
            )
          ),
          this.state.error ? React.createElement(
            'p',
            { className: 'form-error' },
            this.state.error
          ) : null
        )
      );
    }
  }]);

  return Signup;
}(React.Component);

exports.default = Signup;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Page404 = function Page404(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h2",
      null,
      "error: 404"
    ),
    React.createElement(
      "p",
      null,
      "Page not found: ",
      props.location.pathname
    )
  );
};

exports.default = Page404;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })

},[44]);
//# sourceMappingURL=auth_main.js.map