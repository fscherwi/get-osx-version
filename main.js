exports.get = function get() { /* istanbul ignore next */
  if (parseFloat(require('os').release()) === 1.3) {
    return "10.0";
  } else if (parseFloat(require('os').release()) === 1.4) {
    return "10.1";
  } else {
    return "10." + (parseFloat(require('os').release()) - 4);
  }
};
