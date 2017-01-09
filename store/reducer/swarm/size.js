module.exports = (state, action) => {
	switch (action.type) {
		case "SET_SWARM_SIZE":
			return action.size;
	}
	return state;
};
