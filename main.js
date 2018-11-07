function get() { /* istanbul ignore next */
	if (process.platform === 'darwin') {
		const release = parseFloat(require('os').release());
		switch (release) {
			case 1.3:
				return 10.0;
			case 1.4:
				return 10.1;
			default:
				return parseFloat('10.' + (Number((release - 4).toFixed(1))));
		}
	}
}

module.exports = get();
