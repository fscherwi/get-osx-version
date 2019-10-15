const {macOSVersion} = require('.');

if (process.platform !== 'darwin') {
	console.log('Wrong platform');
	process.exit(1);
} else if (macOSVersion() === undefined) {
	console.log('ERROR');
	process.exit(1);
} else {
	console.log('\nMac OS version: %s\n', macOSVersion());
}
