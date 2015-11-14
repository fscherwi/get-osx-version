exports.get = function get() {
  if (parseFloat(require('os').release()) === 1.3) {
    return "10.";
  } else if (require('os').release() === "1.4.1") {
    return "10.1";
  } else {
    return "10." + (parseFloat(require('os').release()) - 4);
  }
};
