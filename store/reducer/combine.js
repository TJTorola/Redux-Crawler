const { combineReducers } = require('redux'),
      parse   = require('./parse/combine.js'),
      swarm   = require('./swarm/combine.js'),
      horizon = require('./horizon.js'),
      results = require('./results.js');

module.exports = combineReducers({
	parse,
	swarm,
	horizon,
	results
});
