const LINK_REGEX = /href=["']([\w:\/.]+)["']/g;

module.exports = (text, { regex, mapper }) => {
	const results = text.match(regex),
	      links   = text.match(LINK_REGEX);

	return {
		results: mapper(results),
		links
	};
}