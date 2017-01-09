const clear = () => process.stdout.write('\033[2J');

renderResults = (idx, results) => {
	if (idx < 0) return;

	const result = results[idx] || "";
	console.log(result);

	return renderResults(idx - 1, results);
}

module.exports = ({ getState }) => () => {
	const { 
		results, 
		horizon, 
		swarm: { 
			occupied 
		} 
	} = getState();

	clear();
	renderResults(9, results);

	console.log("-------------------------------------");
	console.log(`Crawler Count : ${ occupied }`);
	console.log(`Horizon Size  : ${ horizon.length }`);
	console.log(`Result Count  : ${ results.length }`);
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