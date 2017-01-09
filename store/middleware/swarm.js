const get = require('../../lib/get.js'),
      parseMatches = require('../../lib/parse.js');

const {
	popHorizon,
	finishCrawl,
	appendResults,
	appendHorizon
} = require('../actions.js');

const crawl = ({ dispatch, getState }) => {
	const { 
		horizon: { 
			found: {
				url 
			} 
		}
	} = getState();

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
		},
		results: {
			set
		}
	} = getState();

	const { found, links } = parseMatches(body, parse),
	      uniqResults   = [...new Set(found)],
	      newResults    = uniqResults.filter(result => !set.has(result)),
	      unvistedLinks = links.filter(link => !visited.has(link));

	dispatch(appendResults(newResults));
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
