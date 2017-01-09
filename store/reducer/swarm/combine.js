const { combineReducers } = require('redux'),
      size     = require('./size.js'),
      occupied = require('./occupied.js');

module.exports = combineReducers({
	size,
	occupied
});
