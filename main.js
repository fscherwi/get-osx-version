/**
 * Get Mac OS version of current system
 *
 * @returns {string} Mac OS version
 */
function get() {
	if (process.platform === 'darwin') {
		const release = parseFloat(require('os').release());
		/* istanbul ignore next */
		switch (release) {
			case 1.3:
				return '10.0';
			case 1.4:
				return '10.1';
			default:
				return String(parseFloat('10.' + (Number((release - 4).toFixed(1)))));
		}
	}
}

module.exports = get();
