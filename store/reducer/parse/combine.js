const { combineReducers } = require('redux'),
      mapper = require('./mapper.js'),
      regex  = require('./regex.js');

module.exports = combineReducers({
	mapper,
	regex
});
