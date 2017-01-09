module.exports = (state = [], action) => {
	switch (action.type) {
		case "SET_HORIZON":
			return action.horizon;
		case "PUSH_HORIZON":
			return [action.url, ...state];
		case "APPEND_HORIZON":
			return [...state, ...action.horizon];
		case "POP_HORIZON":
		case "CRAWL":
			const [first, ...rest] = state;
			return rest;
	}
	return state;
};
