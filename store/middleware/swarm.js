const get = require('../../lib/get.js'),
      parseMatches = require('../../lib/parse.js');

const {
	finishCrawl,
	appendResults,
	appendHorizon,
  crawlUrl,
} = require('../actions.js');

const crawl = ({ dispatch, getState }) => {
	const { horizon } = getState();
  const url = horizon.set.first()

	get(url, handleBody(dispatch, getState), handleErr(url, dispatch));
  dispatch(crawlUrl(url));
};

const handleErr = (url, dispatch) => err => {
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
	      unvisitedLinks    = uniqLinks.filter(link => (
          !horizon.visited.has(link) && !horizon.set.has(link)
        ));
        debugger;

	dispatch(appendResults(newResults));
  dispatch(appendHorizon(unvisitedLinks));

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
