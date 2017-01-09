const get = require('../../lib/get.js'),
      parseMatches = require('../../lib/parse.js');

const { popHorizon } = require('../actions.js');

const crawl = ({ dispatch, getState }) => {
	const { 
		horizon,
		parse: {
			regex,
			mapper
		}
	} = getState();

	const url      = horizon[0],
	      callback = parseMatches(regex, mapper);

	dispatch(popHorizon());

	get(url, handleErr(dispatch), handleResponse(dispatch));
};

const handleErr = dispatch => err => {
	console.log(err);
	// Finish Crawl
}

const handleResponse = dispatch => res => {
	console.log(res);
	// Parse then send dispatch results
}

module.exports = store => next => action => {
	switch (action.type) {
		case "CRAWL":
			crawl(store);
			break;
	}
	return next(action);
};
