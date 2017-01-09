const { createStore } = require('redux'),
      reducer         = require('./reducer/combine.js'),
      middleware      = require('./middleware/apply.js');

module.exports = (preloadedState = {}) => createStore(
	reducer,
	preloadedState,
	middleware
);
