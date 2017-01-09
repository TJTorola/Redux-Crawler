const clear = () => process.stdout.write('\033[2J');

module.exports = ({ getState }) => () => {
	clear();

	const { horizon } = getState();
	console.log(horizon.length);
}
