const APPLY_SETTINGS = "APPLY_SETTINGS";
const SET_SWARM_SIZE = "SET_SWARM_SIZE";
const SET_PARSE_REGEX = "SET_PARSE_REGEX";
const SET_PARSE_MAPPER = "SET_PARSE_MAPPER";
const SET_HORIZON = "SET_HORIZON";
const SET_HORIZON_LIMIT = "SET_HORIZON_LIMIT";
const SET_TARGET_RESULTS = "SET_TARGET_RESULTS";
const PUSH_HORIZON = "PUSH_HORIZON";
const POP_HORIZON = "POP_HORIZON";
const APPEND_HORIZON = "APPEND_HORIZON";
const CRAWL = "CRAWL";
const CRAWL_URL = "CRAWL_URL";
const FINISH_CRAWL = "FINISH_CRAWL";
const APPEND_RESULTS = "APPEND_RESULTS";
const APPEND_ERROR = "APPEND_ERROR";

module.exports = {
	APPLY_SETTINGS,
	applySettings: settings => ({
		type: APPLY_SETTINGS,
		settings
	}),

	SET_SWARM_SIZE,
	setSwarmSize: size => ({
		type: SET_SWARM_SIZE,
		size
	}),

	SET_PARSE_REGEX,
	setParseRegex: regex => ({
		type: SET_PARSE_REGEX,
		regex
	}),

	SET_PARSE_MAPPER,
	setParseMapper: mapper => ({
		type: SET_PARSE_MAPPER,
		mapper
	}),

	SET_HORIZON,
	setHorizon: horizon => ({
		type: SET_HORIZON,
		horizon
	}),

	SET_HORIZON_LIMIT,
	setHorizonLimit: limit => ({
		type: SET_HORIZON_LIMIT,
		limit
	}),

	SET_TARGET_RESULTS,
	setTargetResults: target => ({
		type: SET_TARGET_RESULTS,
		target
	}),

	PUSH_HORIZON,
	pushHorizon: () => ({
		type: PUSH_HORIZON,
	}),

	POP_HORIZON,
	popHorizon: () => ({
		type: POP_HORIZON,
	}),

	APPEND_HORIZON,
	appendHorizon: horizon => ({
		type: APPEND_HORIZON,
		horizon
	}),

	CRAWL,
	crawl: () => ({
		type: CRAWL,
	}),

	CRAWL_URL,
	crawlUrl: url => ({
		type: CRAWL_URL,
		url,
	}),

	FINISH_CRAWL,
	finishCrawl: () => ({
		type: FINISH_CRAWL,
	}),

	APPEND_RESULTS,
	appendResults: results => ({
		type: APPEND_RESULTS,
		results
	}),

	APPEND_ERROR,
	appendError: message => ({
		type: APPEND_ERROR,
		message,
	})
}
