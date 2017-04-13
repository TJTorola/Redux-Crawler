module.exports = (state = null, action) => {
	switch (action.type) {
		case "APPEND_ERROR":
			return {
				next: state,
        val: action.message,
			};
	}
	return state;
};
