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
	})
}
