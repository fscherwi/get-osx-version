const test = require('ava');

const {macOSVersion} = require('.');

test('10.0', t => {
	t.is(macOSVersion(1.3), '10.0');
});

test('10.1', t => {
	t.is(macOSVersion(1.4), '10.1');
	t.is(macOSVersion(5.1), '10.1');
	t.is(macOSVersion(5.2), '10.1');
	t.is(macOSVersion(5.3), '10.1');
	t.is(macOSVersion(5.4), '10.1');
	t.is(macOSVersion(5.5), '10.1');
});

test('current version', t => {
	const release = Number.parseFloat(macOSVersion());
	t.true(release >= 10.15);
});
