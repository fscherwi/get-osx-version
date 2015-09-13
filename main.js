var os = require('os');

function get() {
  var darwin_version = os.release();
  var osx_version;

  if (11 > darwin_version >= 5) {
    osx_version = "10." + darwin_version - 4;
  } else {
    darwin_version = darwin_version.substring(0, darwin_version.length - 1);
    darwin_version = darwin_version.substring('.', darwin_version.length - 1);
    osx_version = "10." + (parseFloat(darwin_version) - 4);
  }

  return osx_version;
}

exports.get = get;
