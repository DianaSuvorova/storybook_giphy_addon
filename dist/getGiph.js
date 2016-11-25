'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var request = function request(method, url) {
  return new _promise2.default(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = resolve;
    xhr.onerror = reject;
    xhr.send();
  });
};

var getGiph = function getGiph() {
  var gif = request('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC');

  return gif;
};

exports.default = getGiph;