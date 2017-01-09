const get = require('../../lib/get.js'),
      parseMatches = require('../../lib/parse.js');

const {
	popHorizon,
	finishCrawl,
	appendResults
} = require('../actions.js');

const crawl = ({ dispatch, getState }) => {
	const { horizon } = getState(),
	      url         = horizon[0],
	      callback    = parseMatches(regex, mapper);

	dispatch(popHorizon());

	get(url, handleErr(dispatch), handleResponse(dispatch, getState));
};

const handleErr = dispatch => err => {
	dispatch(finishCrawl());
}

const handleResponse = (dispatch, getState) => res => {
	dispatch(finishCrawl());

	const { parse } = getState(),
	      { body }  = res,
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
