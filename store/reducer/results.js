module.exports = (state = null, action) => {
	switch (action.type) {
		case "APPEND_RESULTS":
			return action.results.reduce((next, val) => ({
				val, next
			}), state);
	}
	return state;
};
