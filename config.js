const mapper = {
	phone(results) {
		const phoneNumber = number => {
			const stripped  = number.replace(/[-.\(\)\\ ]/g, ''),
			      areacode  = stripped.slice(0, 3),
			      prefix    = stripped.slice(3, 6),
			      postfix   = stripped.slice(6),
			      certainty = ((number.length - 10) * .25);

			return `(${ areacode }) ${ prefix }-${ postfix } Confidence: ${ certainty }`;
		}

		return results.map(phoneNumber);
	},

	basic(results) { return results; }
};

const regex = {
	email: /\b\w+@\w+\.\w{2,6}\b/g,
	phone: /\(?\b[0-9]{3}\)?[-. \\]?[0-9]{3}[-. \\]?[0-9]{4}\b/g,
	phoneStrict: /\(?\b[0-9]{3}\)?[-. \\][0-9]{3}[-. \\][0-9]{4}\b/g
};

module.exports = {
	swarmSize     : 64,
	horizonLimit  : 10000,
	parseRegex    : regex['phone'],
	parseMapper   : mapper['phone'],
	targetResults : 10000
};
