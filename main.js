exports.get = function get() { /* istanbul ignore next */
  if (process.platform === 'darwin') {
    var release = parseFloat(require('os').release());
    switch (release) {
      case 1.3:
        return "10.0";
      case 1.4:
        return "10.1";
      default:
        return "10." + (release - 4);
    }
  } else {
    return 'no OSX system';
  }
};
