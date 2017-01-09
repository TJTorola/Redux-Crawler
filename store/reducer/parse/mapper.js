module.exports = (state = null, action) => {
	switch (action.type) {
		case "SET_PARSE_MAPPER":
			return action.mapper;
	}
	return state;
};
