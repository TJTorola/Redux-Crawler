const { crawl } = require('../store/actions.js');

module.exports = ({ dispatch, getState }) => () => {
	const { horizon, swarm: { occupied } } = getState();
}