const {
	APPLY_SETTINGS,
	setSwarmSize,
	setParseRegex,
	setParseMapper,
	setHorizonLimit,
	setTargetResults
} = require('../actions.js');

const apply = ({ dispatch }, { settings }) => {
	dispatch(setSwarmSize(settings['swarmSize']));
	dispatch(setParseRegex(settings['parseRegex']));
	dispatch(setParseMapper(settings['parseMapper']));
	dispatch(setHorizonLimit(settings['horizonLimit']));
	dispatch(setTargetResults(settings['targetResults']));
}

module.exports = store => next => action => {
	switch (action.type) {
		case APPLY_SETTINGS:
			apply(store, action);
			break;
	}
	return next(action);
};
