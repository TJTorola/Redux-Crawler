module.exports = (state = 100, action) => {
	switch (action.type) {
		case "SET_TARGET_RESULTS":
			return action.target;
	}
	return state;
};
