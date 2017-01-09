const { combineReducers } = require('redux'),
      parse = require('./parse/combine.js'),
      swarm = require('./swarm/combine.js');

module.exports = combineReducers({
	parse,
	swarm
});
