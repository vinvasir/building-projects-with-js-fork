const spawn = require('child_process').spawn;
// require babel require hook
require('babel-core/register');
	
const reqlite = spawn('reqlite');

reqlite.stderr.on('data', () => {
	// require main tests
	require('./main');
	startTests(reqlite)	;
});
