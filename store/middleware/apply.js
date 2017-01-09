const { applyMiddleware } = require('redux'),
      settings = require('./settings.js'),
      swarm    = require('./swarm.js');

module.exports = applyMiddleware(
	settings,
	swarm
);
