var release = parseFloat(require('os').release());
exports.get = function get() { /* istanbul ignore next */
  if (release === 1.3) {
    return "10.0";
  } else if (release === 1.4) {
    return "10.1";
  } else {
    return "10." + (release - 4);
  }
};
