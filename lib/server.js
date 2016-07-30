'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startServer;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var server = _http2.default.createServer(app);
var port = process.env.PORT || 3000;

app.use(_express2.default.static(_path2.default.join(__dirname, '../public')));

app.get('*', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, '../public/index.html'));
});

function startServer() {
  server.listen(port, function () {
    console.log('Nick is now surfing the interwebs yo!');
  });
}