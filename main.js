var os = require('os');

function get() {
  var darwin_version = os.release();

  var osx_version = "10." + (parseFloat(darwin_version) - 4);

  return osx_version;
}

exports.get = get;
