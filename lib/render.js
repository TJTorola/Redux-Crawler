const clear = () => process.stdout.write('\033[2J');

renderResults = (idx, results) => {
	if (idx < 0) return;
	if (!results) return;

	renderResults(idx - 1, results.next);
	console.log(results.val);
}

module.exports = ({ getState }) => () => {
	const { 
		results: {
			list,
			set
		},
		recents,
		horizon: {
			count,
			visited
		}, 
		swarm: { 
			occupied 
		} 
	} = getState();

	clear();
	renderResults(9, list);

	console.log("-------------------------------------");
	console.log(`Crawler Count : ${ occupied }`);
	console.log(`Horizon Size  : ${ count }`);
	console.log(`Visited Count : ${ visited.size }`);
	console.log(`Result Count  : ${ set.size }`);
}

// 
// result[...]
// result[5]
// result[4]
// result[3]
// result[2]
// result[1]
// result[0]
// -------------------------------------
// Crawler Count : 20
// Horizon Size  : 2031
// Result Count  : 123