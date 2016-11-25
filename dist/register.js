'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybookAddons = require('@kadira/storybook-addons');

var _storybookAddons2 = _interopRequireDefault(_storybookAddons);

var _panel = require('./panel');

var _panel2 = _interopRequireDefault(_panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Register the addon with a unique name.
_storybookAddons2.default.register('diana.suvorova/giphyTab', function (api) {
  // Also need to set a unique name to the panel.
  _storybookAddons2.default.addPanel('diana.suvorova/giphyTab', {
    title: 'a giph for you ',
    render: function render() {
      return _react2.default.createElement(_panel2.default, { api: api });
    }
  });
});