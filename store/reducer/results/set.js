module.exports = (state = new Set(), action) => {
	switch (action.type) {
		case "APPEND_RESULTS":
			action.results.forEach((result) => state.add(result));
			return state;
	}
	return state;
};
