const clear = () => process.stdout.write('\033[2J');

module.exports = ({ getState }) => () => {
	clear();
	console.log('Render()');
}
