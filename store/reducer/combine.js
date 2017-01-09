const { combineReducers } = require('redux'),
      parse = require('./parse/combine.js'),
      swarm = require('./parse/swarm.js');

module.exports = combineReducers({
	parse,
	swarm
});
