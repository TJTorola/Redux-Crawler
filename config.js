const mapper = result => {
	const stripped = result.replace(/[-.\(\)\\ ]/g, ''),
	      areacode = stripped.slice(0, 3),
	      prefix   = stripped.slice(3, 6),
	      postfix  = stripped.slice(6);

	return `(${ areacode }) ${ prefix }-${ postfix }`;
}

// email        : \b\w+@\w+\.\w{2,6}\b
// phone-strict : \(?\b[0-9]{3}\)?[-. \\][0-9]{3}[-. \\][0-9]{4}\b
// phone        : \(?\b[0-9]{3}\)?[-. \\]?[0-9]{3}[-. \\]?[0-9]{4}\b

module.exports = {
	swarmSize    : 16,
	horizonLimit : 100,
	parseRegex   : /\(?\b[0-9]{3}\)?[-. \\]?[0-9]{3}[-. \\]?[0-9]{4}\b/g,
	parseMapper  : results => results.map(mapper)
};
