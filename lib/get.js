const request = require('request');

module.exports = (url, handleBody, handleErr) => {
	request(url, (err, res, body) => {
		if (err === null && res.statusCode == 200) {
			handleBody(body);
		} else {
			handleErr(err);
		}
	});
};
