module.exports = {
	applySettings: settings => ({
		type: "APPLY_SETTINGS",
		settings
	}),

	setSwarmSize: size => ({
		type: "SET_SWARM_SIZE",
		size
	}),

	setParseRegex: regex => ({
		type: "SET_PARSE_REGEX",
		regex
	}),

	setParseMapper: mapper => ({
		type: "SET_PARSE_MAPPER",
		mapper
	}),

	setHorizon: horizon => ({
		type: "SET_HORIZON",
		horizon
	}),

	setHorizonLimit: limit => ({
		type: "SET_HORIZON_LIMIT",
		limit
	}),

	setTargetResults: target => ({
		type: "SET_TARGET_RESULTS",
		target
	}),

	pushHorizon: () => ({
		type: "PUSH_HORIZON"
	}),

	popHorizon: () => ({
		type: "POP_HORIZON"
	}),

	appendHorizon: horizon => ({
		type: "APPEND_HORIZON",
		horizon
	}),

	crawl: () => ({
		type: "CRAWL"
	}),

	crawlUrl: url => ({
		type: "CRAWL_URL",
		url,
	}),

	finishCrawl: () => ({
		type: "FINISH_CRAWL"
	}),

	appendResults: results => ({
		type: "APPEND_RESULTS",
		results
	}),

	appendError: message => ({
		type: "APPEND_ERROR",
		message,
	})
}
