const configureStore    = require('./store/configure.js'),
      { applySettings } = require('./store/actions.js');

module.exports = settings => horizon => {
	const store = configureStore();
	store.dispatch(applySettings(settings));
	// configure store with settings
	// listen with renderer
	// listen with stack watcher
	// send horizon to start process
}