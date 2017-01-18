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

	get(url, handleBody(dispatch, getState), handleErr(url, dispatch));
};

const handleErr = (url, dispatch) => err => {
	dispatch(finishCrawl());
}

const handleBody = (dispatch, getState) => (body, uri) => {
	const { 
		parse, 
		horizon: { 
			visited,
			count,
			limit
		},
		results: {
			set
		}
	} = getState();

	const { found, links } = parseMatches(body, uri, parse),
	      uniqResults      = [...new Set(found)],
	      newResults       = uniqResults.filter(result => !set.has(result)),
	      uniqLinks        = [...new Set(links)],
	      unvistedLinks    = uniqLinks.filter(link => !visited.has(link));

	dispatch(appendResults(newResults));
	if (!limit || count < limit) {
		dispatch(appendHorizon(unvistedLinks));
	}

	dispatch(finishCrawl());
}

module.exports = store => next => action => {
	switch (action.type) {
		case "CRAWL":
			crawl(store);
			break;
	}
	return next(action);
};
