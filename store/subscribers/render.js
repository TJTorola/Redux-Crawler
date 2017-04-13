const _ = require('lodash');

const clear = () => process.stdout.write('\033[2J');

const renderList = (idx, list) => {
	if (idx < 0) return;
	if (!list) {
		renderList(idx - 1, null);
		console.log('');
		return;
	}

	renderList(idx - 1, list.next);
	console.log(list.val);
}

const renderAllResults = (results) => {
	if (!results) return;
	console.log(results.val);
	renderAllResults(results.next);
}

module.exports = ({ getState }) => {
	let finished = false;

	const render = () => {
		const {
			results,
			recents,
			horizon,
			errors,
			swarm: {
				occupied
			}
		} = getState();

		if (results.target > results.set.size) {
			clear();

			renderList(10, errors);
			console.log("-------------------------------------");
			renderList(20, results.list);
			console.log("-------------------------------------");
			console.log(`Crawler Count : ${ occupied }`);
			console.log(`Horizon Size  : ${ horizon.set.size }`);
			console.log(`Visited Count : ${ horizon.visited.size }`);
			console.log(`Result Count  : ${ results.set.size }`);
		}

		if (results.target <= results.set.size && !finished) {
			clear();
			renderAllResults(results.list);
			finished = true;
		}
	}

	return _.throttle(render, 30);
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
