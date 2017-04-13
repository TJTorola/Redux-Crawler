const {
	crawl
} = require('../actions.js');

module.exports = ({ dispatch, getState }) => () => {
	const {
		horizon,
		swarm,
		results,
	} = getState();

	if (
		horizon.set.size > 0
		&& swarm.occupied < swarm.size
		&& results.target > results.set.size
	) {
		dispatch(crawl());
	}
};
