const { popHorizon } = require('../actions.js');

const crawl = ({ dispatch, getState }) => {
	const { horizon } = getState(),
	      url         = horizon[0];

	dispatch(popHorizon());
}

module.exports = store => next => action => {
	switch (action.type) {
		case "CRAWL":
			crawl(store);
			break;
	}
	return next(action);
};
