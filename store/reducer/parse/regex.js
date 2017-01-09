module.exports = (state, action) => {
	switch (action.type) {
		case "SET_PARSE_REGEX":
			return action.regex;
	}
	return state;
};
