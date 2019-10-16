const os = require('os');
/**
 * Get Mac OS version of current system
 *
 * @returns {string| undefined} Mac OS version or undefined is other platform
 */
module.exports.macOSVersion = () => {
	if (process.platform === 'darwin') {
		const release = parseFloat(os.release());
		/* istanbul ignore next */
		switch (release) {
			case 1.3:
				return '10.0';
			case 1.4:
			case 5.1:
			case 5.2:
			case 5.3:
			case 5.4:
			case 5.5:
				return '10.1';
			default:
				return String(parseFloat('10.' + (Number((release - 4).toFixed(1)))));
		}
	}
};
