const LINK_REGEX = /href=["']([\w:\/.]+)["']/gi;

const getLinks = (text, results = [], regex = LINK_REGEX) => {
	const result = regex.exec(text);
	if (!result) return results;

	const link = result[1];
	if (!/^(http|https):\/\//i.test(link)) {
		return getLinks(text, [...results], regex);
	} else {
		return getLinks(text, [...results, link], regex);
	}
}

module.exports = (text, { regex, mapper }) => {
	const results = text.match(regex) || [],
	      links   = getLinks(text);

	return {
		results: mapper(results),
		links
	};
}