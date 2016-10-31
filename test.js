var mac_os_version = require('./main.js').get(); /* istanbul ignore next */
if (process.platform !== 'darwin') {
  if (mac_os_version !== 'no Mac OS system') {
    console.log('ERROR');
    process.exit(1);
  }
}
console.log('\nMac OS version: %s\n', mac_os_version);
