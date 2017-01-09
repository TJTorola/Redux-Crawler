const configureStore = require('./store/configure.js'),
      render         = require('./lib/render.js'),
      watch          = require('./lib/watch.js');

const {
	applySettings,
	setHorizon
} = require('./store/actions.js');

module.exports = settings => horizon => {
	// Init and configure store
	const store = configureStore();
	store.dispatch(applySettings(settings));

	// Subscribe render and watcher functions
	store.subscribe(render(store));
	store.subscribe(watch(store));

	// Start crawl by setting the horizon
	store.dispatch(setHorizon(horizon));
}