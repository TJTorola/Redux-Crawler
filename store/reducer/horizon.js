module.exports = (horizon = [], action) => {
	switch (action.type) {
		case "SET_HORIZON":
			return action.horizon;
	}
	return state;
};
