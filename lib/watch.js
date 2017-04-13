const {
	crawl
} = require('../store/actions.js');

module.exports = ({ dispatch, getState }) => () => {
	const {
		horizon: {
			count,
		},
		swarm: {
			occupied,
			size
		},
		results: {
			target,
			set
		}
	} = getState();

	if (count > 0 && occupied < size && target > set.size) {
		dispatch(crawl());
	}
};
