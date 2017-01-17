const {
	setSwarmSize,
	setParseRegex,
	setParseMapper,
	setHorizonLimit
} = require('../actions.js');

const apply = ({ dispatch }, { settings }) => {
	dispatch(setSwarmSize(settings['swarmSize']));
	dispatch(setParseRegex(settings['parseRegex']));
	dispatch(setParseMapper(settings['parseMapper']));
	dispatch(setHorizonLimit(settings['horizonLimit']));
}

module.exports = store => next => action => {
	switch (action.type) {
		case "APPLY_SETTINGS":
			apply(store, action);
			break;
	}
	return next(action);
};
