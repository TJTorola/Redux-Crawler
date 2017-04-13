const { combineReducers } = require('redux')

const occupied = (state = 0, action) => {
	switch (action.type) {
		case "CRAWL_URL":
			return state + 1;
		case "FINISH_CRAWL":
			return state - 1;
	}
	return state;
};

const size = (state = 20, action) => {
	switch (action.type) {
		case "SET_SWARM_SIZE":
			return action.size;
	}
	return state;
};

module.exports = combineReducers({
	size,
	occupied
});
