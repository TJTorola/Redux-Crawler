const { crawl } = require('../store/actions.js');

module.exports = ({ dispatch, getState }) => () => {
	const { horizon, swarm: { occupied, size } } = getState();

	if (horizon.length > 0 && occupied < size) {
		dispatch(crawl());
	}
};
