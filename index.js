const main = require('./main.js');

const settings = {
	swarmSize: 20,
	parseRegex: /\(?\b[0-9]{3}\)?[-. \\]?[0-9]{3}[-. \\]?[0-9]{4}\b/g,
	parseMapper: val => val
};

const rootUrl = process.argv[2];
main(settings)([rootUrl]);