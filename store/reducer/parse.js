const { combineReducers } = require('redux');

const mapper = (state = null, action) => {
	switch (action.type) {
		case "SET_PARSE_MAPPER":
			return action.mapper;
	}
	return state;
};

const regex = (state = null, action) => {
	switch (action.type) {
		case "SET_PARSE_REGEX":
			return action.regex;
	}
	return state;
};

module.exports = combineReducers({
	mapper,
	regex
});
