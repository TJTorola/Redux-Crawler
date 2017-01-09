const main = require('./main.js');

const settings = {
	runners: 20,
	regex: /\(?\b[0-9]{3}\)?[-. \\]?[0-9]{3}[-. \\]?[0-9]{4}\b/g,
	parser: val => val
};

const rootUrl = process.argv[2];
main(settings)([rootUrl]);