const Immutable = require('immutable');

module.exports = (state = Immutable.Set(), action) => {
	switch (action.type) {
		case "APPEND_RESULTS":
			return action.results.reduce((set, result) => (
				set.add(result)
			), state);
	}
	return state;
};
