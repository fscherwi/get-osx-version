var osx_version = require('./main.js').get();
if (process.platform === 'darwin') {
  console.log('\nOSX version: %s\n', osx_version);
} else {
  if (osx_version !== 'no OSX system') {
    console.log('ERROR');
    process.exit(1);
  } else {
    console.log('\nOSX version: %s\n', osx_version);
  }
}
