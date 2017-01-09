module.exports = (state = [], action) => {
	switch (action.type) {
		case "APPEND_RESULTS":
			return [...action.results, ...state];
	}
	return state;
};
