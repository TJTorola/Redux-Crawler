const { combineReducers } = require('redux'),
      list = require('./list.js'),
      set  = require('./set.js');

module.exports = combineReducers({
	list,
	set
});
