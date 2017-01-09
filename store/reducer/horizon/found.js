module.exports = (state = null, action) => {
	switch (action.type) {
		case "SET_HORIZON":
			return action.horizon.reducer((next, url) => ({
				url, next
			}), null);

		case "PUSH_HORIZON":
			return { 
				url: action.url,
				next: state
			};

		case "APPEND_HORIZON":
			return action.horizon.reducer((next, url) => ({
				url, next
			}), state);

		case "POP_HORIZON":
		case "CRAWL":
			return state && state.next;
	}
	return state;
};
