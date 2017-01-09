const configureStore    = require('./store/configure.js'),
      { applySettings } = require('./store/actions.js'),
      render            = require('./lib/render.js');

module.exports = settings => horizon => {
	const store = configureStore();

	store.dispatch(applySettings(settings));

	store.subscribe(render(store));

	// listen with stack watcher
	// send horizon to start process
}