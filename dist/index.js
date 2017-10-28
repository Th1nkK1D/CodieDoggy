'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var server = (0, _http.createServer)(app);

app.use(_bodyParser2.default.json());
app.use(_routes2.default);

var listener = server.listen(3000, function () {
  console.log('Listening on ... ' + listener.address().port);
});