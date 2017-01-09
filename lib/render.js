const clear = () => process.stdout.write('\033[2J');

module.exports = ({ getState }) => () => {
	// clear();

	const { results } = getState();
	console.log(results[0]);
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