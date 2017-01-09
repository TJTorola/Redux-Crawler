const get = require('../../lib/get.js'),
      parseMatches = require('../../lib/parse.js');

const {
	popHorizon,
	finishCrawl,
	appendResults
} = require('../actions.js');

const crawl = ({ dispatch, getState }) => {
	const { horizon } = getState(),
	      url         = horizon[0];

	dispatch(popHorizon());

	get(url, handleBody(dispatch, getState), handleErr(dispatch));
};

const handleErr = dispatch => err => {
	dispatch(finishCrawl());
}

const handleBody = (dispatch, getState) => body => {
	dispatch(finishCrawl());

	const { parse } = getState(),
	      results   = parseMatches(body, parse);

	dispatch(appendResults(results));
}

module.exports = store => next => action => {
	switch (action.type) {
		case "CRAWL":
			crawl(store);
			break;
	}
	return next(action);
};
