const get = require('../../lib/get.js'),
      parseMatches = require('../../lib/parse.js');

const {
	popHorizon,
	finishCrawl,
	appendResults,
	appendHorizon
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

	const { parse }          = getState(),
	      { results, links } = parseMatches(body, parse);

	dispatch(appendResults(results));
	dispatch(appendHorizon(links));
}

module.exports = store => next => action => {
	switch (action.type) {
		case "CRAWL":
			crawl(store);
			break;
	}
	return next(action);
};
