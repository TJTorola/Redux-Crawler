const { combineReducers } = require('redux'),
      found   = require('./found.js'),
      visited = require('./visited.js');

module.exports = combineReducers({
	found,
	visited
});
