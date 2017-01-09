module.exports = (state = 0, action) => {
	switch (action.type) {
		case "SET_HORIZON":
			return action.horizon.length;

		case "PUSH_HORIZON":
			return state + 1;

		case "APPEND_HORIZON":
			return state + action.horizon.length;

		case "POP_HORIZON":
		case "CRAWL":
			return state - 1;
	}
	return state;
};
