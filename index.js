const os = require('os');

/**
 * Get macOS version of current system
 *
 * @param {number} [darwinRelease] darwin version
 * @returns {string| undefined} macOS version or undefined if other platform
 * @example
 * const {macOSVersion} = require('get-osx-version');
 *
 * console.log('macOS version: ' + macOSVersion());
 */
module.exports.macOSVersion = (darwinRelease) => {
	/* istanbul ignore next */
	if (typeof darwinRelease === 'undefined' && process.platform === 'darwin') {
		darwinRelease = Number.parseFloat(os.release());
	} else if (typeof darwinRelease === 'undefined') {
		return;
	}

	switch (darwinRelease) {
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
			return '10.' + (Number.parseFloat(darwinRelease) - 4).toFixed(1);
	}
}
