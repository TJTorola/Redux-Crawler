const clear = () => process.stdout.write('\033[2J');

const renderResults = (idx, results) => {
	if (idx < 0) return;
	if (!results) return;

	renderResults(idx - 1, results.next);
	console.log(results.val);
}

const renderAllResults = (results) => {
	if (!results) return;
	console.log(results.val);
	renderAllResults(results.next);
}

module.exports = ({ getState }) => {
	let finished = false;

	return () => {
		const { 
			results: {
				list,
				set,
				target
			},
			recents,
			horizon: {
				count
			}, 
			swarm: { 
				occupied 
			} 
		} = getState();

		if (target > set.size) {
			clear();
			renderResults(49, list);

			console.log("-------------------------------------");
			console.log(`Crawler Count : ${ occupied }`);
			console.log(`Horizon Size  : ${ count }`);
			console.log(`Result Count  : ${ set.size }`);
		}

		if (target <= set.size && !finished) {
			clear();
			renderAllResults(list);
			finished = true;
		}
	}
}

// EX:
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