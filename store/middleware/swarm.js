const get = require('../../lib/get.js'),
      parseMatches = require('../../lib/parse.js');

const {
	popHorizon,
	finishCrawl,
	appendResults,
	appendHorizon
} = require('../actions.js');

const crawl = ({ dispatch, getState }) => {
	const { horizon: { found } } = getState(),
	      url         = found[0];

	get(url, handleBody(dispatch, getState), handleErr(dispatch));
};

const handleErr = dispatch => err => {
	dispatch(finishCrawl());
}

const handleBody = (dispatch, getState) => body => {
	dispatch(finishCrawl());

	const { 
		parse, 
		horizon: { 
			visited
		} 
	} = getState();

	const { results, links } = parseMatches(body, parse),
	      unvistedLinks = links.filter(link => !visited.has(link));

	dispatch(appendResults(results));
	dispatch(appendHorizon(unvistedLinks));
}

module.exports = store => next => action => {
	switch (action.type) {
		case "CRAWL":
			crawl(store);
			break;
	}
	return next(action);
};
