const { combineReducers } = require('redux');
const Immutable = require('immutable');
const {
	SET_TARGET_RESULTS,
	APPEND_RESULTS,
} = require('../actions');

const target = (state = 100, action) => {
	switch (action.type) {
		case SET_TARGET_RESULTS:
			return action.target;
	}
	return state;
};

const set = (state = Immutable.Set(), action) => {
	switch (action.type) {
		case APPEND_RESULTS:
			return action.results.reduce((set, result) => (
				set.add(result)
			), state);
	}
	return state;
};

const list = (state = null, action) => {
	switch (action.type) {
		case APPEND_RESULTS:
			return action.results.reduce((next, val) => ({
				next, val
			}), state);
	}
	return state;
};

module.exports = combineReducers({
	list,
	set,
	target
});
