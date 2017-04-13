const LINK_REGEX = /href=["']([\w:\/.]+)["']/gi;

const getLinks = (text, rootUri, results = [], regex = LINK_REGEX) => {
	const result = regex.exec(text);
	if (!result) return results;

	const link = result[1];
	if (link[0] === '/') {
		return getLinks(text, rootUri, [...results], regex);
	} else if (!/^(http|https):\/\//i.test(link)) {
		return getLinks(text, rootUri, [...results], regex);
	} else {
		return getLinks(text, rootUri, [...results, link], regex);
	}
}

module.exports = (text, uri, { regex, mapper }) => {
	const results = text.match(regex) || [],
	      links   = getLinks(text, uri);

	return {
		found: mapper(results),
		links
	};
}
