const Immutable = require('immutable');

module.exports = (state = Immutable.Set(), action) => {
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
