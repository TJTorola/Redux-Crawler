const request = require('request');

module.exports = (url, handleBody, handleErr) => {
	request(url, (err, res, body) => {
		if (!err && res.statusCode == 200) {
			handleBody(body);
		}

		handleErr(err);
	});
};
