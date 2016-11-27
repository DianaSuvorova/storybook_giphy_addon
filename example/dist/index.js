'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('Thing', module).add('a button', function () {
  return _react2.default.createElement(
    'button',
    null,
    'Button'
  );
}).add('another button', function () {
  return _react2.default.createElement(
    'button',
    null,
    'another Button'
  );
});