const Immutable = require('immutable');
const { combineReducers } = require('redux');

const count = (state = 0, action) => {
	switch (action.type) {
		case "SET_HORIZON":
			return action.horizon.length;

		case "PUSH_HORIZON":
			return state + 1;

		case "APPEND_HORIZON":
			return state + action.horizon.length;

		case "POP_HORIZON":
		case "CRAWL":
			return state - 1;
	}
	return state;
};

const found = (state = null, action) => {
	switch (action.type) {
		case "SET_HORIZON":
			return action.horizon.reduce((next, url) => ({
				url, next
			}), null);

		case "PUSH_HORIZON":
			return {
				url: action.url,
				next: state
			};

		case "APPEND_HORIZON":
			return action.horizon.reduce((next, url) => ({
				url, next
			}), state);

		case "POP_HORIZON":
		case "CRAWL":
			return state && state.next;
	}
	return state;
};

const limit = (state = null, action) => {
	switch (action.type) {
		case "SET_HORIZON_LIMIT":
			return action.limit;
	}
	return state;
};

const visited = (state = Immutable.Set(), action) => {
	switch (action.type) {
		case "PUSH_HORIZON":
			return state.add(action.url);

		case "SET_HORIZON":
		case "APPEND_VISITED":
			return action.horizon.reduce((acc, url) => (
				acc.add(url)
			), state);
	}
	return state;
};

module.exports = combineReducers({
	found,
	visited,
	count,
	limit
});
