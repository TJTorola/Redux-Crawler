const request = require('request-promise');
const parseMatches = require('../../lib/parse.js');

const {
	CRAWL,
	finishCrawl,
	appendResults,
	appendHorizon,
  crawlUrl,
  appendError,
} = require('../actions.js');

const crawl = ({ dispatch, getState }) => {
	const { horizon } = getState();
  const url = horizon.set.first()

  request({ url })
    .then(handleBody(dispatch, getState))
    .catch(handleErr(url, dispatch));

  dispatch(crawlUrl(url));
};

const handleErr = (url, dispatch) => err => {
  const errMessage = (err.statusCode)
    ? `Error: ${err.statusCode} - ${url}`
    : `${err.message} - ${url}`;

  dispatch(appendError(errMessage));
	dispatch(finishCrawl());
}

const handleBody = (dispatch, getState) => (body, uri) => {
	const {
		parse,
		horizon,
		results,
	} = getState();

	const { found, links } = parseMatches(body, uri, parse),
	      uniqResults      = [...new Set(found)],
	      newResults       = uniqResults.filter(result => !results.set.has(result)),
	      uniqLinks        = [...new Set(links)],
	      unvisitedLinks   = uniqLinks.filter(link => (
          !horizon.visited.has(link) && !horizon.set.has(link)
        ));

	dispatch(appendResults(newResults));
	if (horizon.set.size < horizon.limit) {
		dispatch(appendHorizon(unvisitedLinks));
	}
	dispatch(finishCrawl());
}

module.exports = store => next => action => {
	switch (action.type) {
		case CRAWL:
			crawl(store);
			break;
	}
	return next(action);
};
