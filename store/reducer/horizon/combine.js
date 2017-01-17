const { combineReducers } = require('redux'),
      found   = require('./found.js'),
      visited = require('./visited.js'),
      count   = require('./count.js'),
      limit   = require('./limit.js');

module.exports = combineReducers({
	found,
	visited,
	count,
	limit
});
