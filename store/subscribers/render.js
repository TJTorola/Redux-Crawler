const _ = require('lodash');

const { fps } = require('../../config');
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
	const startTime = Date.now();

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

		const now = Date.now();
		const msPassed = (now - startTime)
		const crawlsPerSecond = _.floor(horizon.visited.size / (msPassed / 1000), 1);

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
			console.log(`Crawls / Sec  : ${ crawlsPerSecond }`);
		}

		if (results.target <= results.set.size && !finished) {
			clear();
			renderAllResults(results.list);
			finished = true;
		}
	}

	return _.throttle(render, Math.floor(1000 / fps));
}
