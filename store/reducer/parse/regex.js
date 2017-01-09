module.exports = (state = null, action) => {
	switch (action.type) {
		case "SET_PARSE_REGEX":
			return action.regex;
	}
	return state;
};
