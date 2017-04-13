const { combineReducers } = require('redux'),
      parse   = require('./parse.js'),
      swarm   = require('./swarm.js'),
      horizon = require('./horizon.js'),
      results = require('./results.js');

module.exports = combineReducers({
	parse,
	swarm,
	horizon,
	results
});
