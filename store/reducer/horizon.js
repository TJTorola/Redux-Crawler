module.exports = (state = [], action) => {
	switch (action.type) {
		case "SET_HORIZON":
			return action.horizon;
		case "PUSH_HORIZON":
			return [action.url, ...state];
		case "POP_HORIZON":
			const [first, ...rest] = state;
			return rest;
	}
	return state;
};
