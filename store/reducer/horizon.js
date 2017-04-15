const Immutable = require('immutable');
const { combineReducers } = require('redux');
const {
  APPEND_HORIZON,
  SET_HORIZON,
  PUSH_HORIZON,
  CRAWL_URL,
  SET_HORIZON_LIMIT,
} = require('../actions');

const set = (state = Immutable.Set(), action) => {
  switch (action.type) {
    case APPEND_HORIZON:
		case SET_HORIZON:
			return state.withMutations(set => (
        action.horizon.reduce((acc, url) => (
          acc.add(url)
        ), set)
      ))

		case PUSH_HORIZON:
			return state.add(action.url);

    case CRAWL_URL:
      return state.delete(action.url);
	}
	return state;
};

const limit = (state = null, action) => {
	switch (action.type) {
		case SET_HORIZON_LIMIT:
			return action.limit;
	}
	return state;
};

const visited = (state = Immutable.Set(), action) => {
	switch (action.type) {
		case CRAWL_URL:
			return state.add(action.url);
	}
	return state;
};

module.exports = combineReducers({
	set,
	visited,
	limit
});
