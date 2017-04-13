const main   = require('./main.js'),
      config = require('./config.js'),
      rootUrl = process.argv[2];

if (!rootUrl) throw "No Horizon Provided.";

main(config)([rootUrl]);
