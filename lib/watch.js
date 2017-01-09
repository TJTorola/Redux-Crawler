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
		} 
	} = getState();

	if (count > 0 && occupied < size) {
		dispatch(crawl());
	}
};
