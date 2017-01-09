module.exports = (state = 20, action) => {
	switch (action.type) {
		case "SET_SWARM_SIZE":
			return action.size;
	}
	return state;
};
