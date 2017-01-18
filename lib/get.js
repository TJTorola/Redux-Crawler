const request = require('request');

module.exports = (uri, handleBody, handleErr) => {
	request({
		uri,
		timeout: 500
	}, (err, res, body) => {
		if (err === null && res.statusCode == 200) {
			handleBody(body, uri);
		} else {
			handleErr(err);
		}
	});
};
