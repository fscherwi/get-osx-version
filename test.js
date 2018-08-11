var MacOSVersion = require('./main.js').get(); /* istanbul ignore next */
if (process.platform !== 'darwin') {
  if (MacOSVersion !== 'no Mac OS system') {
    console.log('ERROR');
    process.exit(1);
  }
}
console.log('\nMac OS version: %s\n', MacOSVersion);
