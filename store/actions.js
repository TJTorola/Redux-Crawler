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

	occupyCrawler: () => ({
		type: "OCCUPY_CRAWLER"
	}),

	finishCrawl: () => ({
		type: "FINISH_CRAWL"
	}),

	appendResults: results => ({
		type: "APPEND_RESULTS",
		results
	})
}
