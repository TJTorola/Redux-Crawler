module.exports = (horizon = [], action) => {
	switch (action.type) {
		case "SET_HORIZON":
			return action.horizon;
		case "PUSH_HORIZON":
			return [action.url, ...horizon];
		case "POP_HORIZON":
			const [first, ...rest] = horizon;
			return rest;
	}
	return state;
};
