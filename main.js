const configureStore = require('./store/configure.js'),
      render         = require('./lib/render.js');

const {
	applySettings,
	setHorizon
} = require('./store/actions.js');

module.exports = settings => horizon => {
	const store = configureStore();

	store.dispatch(applySettings(settings));

	store.subscribe(render(store));

	// listen with stack watcher

	store.dispatch(setHorizon(horizon));
}