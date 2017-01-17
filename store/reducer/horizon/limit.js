module.exports = (state = null, action) => {
	switch (action.type) {
		case "SET_HORIZON_LIMIT":
			return action.limit;
	}
	return state;
};
