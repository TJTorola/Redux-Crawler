const { combineReducers } = require('redux'),
      list   = require('./list.js'),
      set    = require('./set.js'),
      target = require('./target.js');

module.exports = combineReducers({
	list,
	set,
	target
});
