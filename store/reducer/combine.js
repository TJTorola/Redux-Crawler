const { combineReducers } = require('redux'),
      parse   = require('./parse/combine.js'),
      swarm   = require('./swarm/combine.js'),
      horizon = require('./horizon/combine.js'),
      results = require('./results/combine.js');

module.exports = combineReducers({
	parse,
	swarm,
	horizon,
	results
});
