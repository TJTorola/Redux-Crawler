const { applyMiddleware } = require('redux'),
      settings = require('./settings.js');

module.exports = applyMiddleware(
	settings
);
