const request = require('request');

module.exports = (url, handleResponse, handleErr) => {
	request.get(url)
	       .on('error', handleErr)
	       .on('response', handleResponse);
};
