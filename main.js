var os = require('os');

var darwin_version = os.release();
var osx_version;

// Darwin <11 and >= 5
if (11 > darwin_version >= 5) {
  osx_version = "10." + darwin_version - 4;
}
// Darwin >=11
else {
  darwin_version = darwin_version.substring(0, darwin_version.length - 1);
  darwin_version = darwin_version.substring('.', darwin_version.length - 1);
  osx_version = "10." + darwin_version - 4;
}

function get_version() {
  return osx_version;
}

module.exports.get = get_version;
