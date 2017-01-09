const { 
	crawl
} = require('../store/actions.js');

module.exports = ({ dispatch, getState }) => () => {
	const { 
		horizon: {
			found,
		},
		swarm: { 
			occupied, 
			size 
		} 
	} = getState();

	if (found.length > 0 && occupied < size) {
		dispatch(crawl());
	}
};
