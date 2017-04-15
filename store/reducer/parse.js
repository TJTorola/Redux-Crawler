const { combineReducers } = require('redux');
const {
	SET_PARSE_MAPPER,
	SET_PARSE_REGEX,
} = require('../actions');

const mapper = (state = null, action) => {
	switch (action.type) {
		case SET_PARSE_MAPPER:
			return action.mapper;
	}
	return state;
};

const regex = (state = null, action) => {
	switch (action.type) {
		case SET_PARSE_REGEX:
			return action.regex;
	}
	return state;
};

module.exports = combineReducers({
	mapper,
	regex
});
