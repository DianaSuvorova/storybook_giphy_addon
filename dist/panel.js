'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _getGiph = require('./getGiph');

var _getGiph2 = _interopRequireDefault(_getGiph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  panel: {
    margin: 10,
    fontFamily: 'Arial',
    fontSize: 14,
    color: '#444',
    width: '100%',
    overflow: 'auto',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center'
  }
};

var Panel = function (_React$Component) {
  (0, _inherits3.default)(Panel, _React$Component);

  function Panel() {
    var _ref;

    (0, _classCallCheck3.default)(this, Panel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = Panel.__proto__ || (0, _getPrototypeOf2.default)(Panel)).call.apply(_ref, [this].concat(args)));

    _this.state = { gif: null, error: false };
    return _this;
  }

  (0, _createClass3.default)(Panel, [{
    key: 'onGetGiph',
    value: function onGetGiph(response) {
      var data = JSON.parse(response);
      var img = data.data.image_url;
      if (img) {
        this.setState({ gif: img, error: false });
      } else {
        this.setState({ gif: null, error: true });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var api = this.props.api;


      api.onStory(function () {
        (0, _getGiph2.default)().then(function (e) {
          return _this2.onGetGiph(e.target.response);
        }, function () {
          return _this2.setState({ gif: null, error: true });
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var content = this.state.error ? _react2.default.createElement(
        'div',
        null,
        'that is an error'
      ) : _react2.default.createElement('img', { role: 'presentation', src: this.state.gif });
      return _react2.default.createElement(
        'div',
        { style: styles.panel },
        content
      );
    }
  }]);
  return Panel;
}(_react2.default.Component);

exports.default = Panel;