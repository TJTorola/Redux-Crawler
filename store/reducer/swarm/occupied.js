module.exports = (state = 0, action) => {
	switch (action.type) {
		case "CRAWL":
			return state + 1;
	}
	return state;
};
