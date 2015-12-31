var osx_version = require('./main.js').get(); /* istanbul ignore next */
if (process.platform !== 'darwin') {
  if (osx_version !== 'no OSX system') {
    console.log('ERROR');
    process.exit(1);
  }
}
console.log('\nOSX version: %s\n', osx_version);
