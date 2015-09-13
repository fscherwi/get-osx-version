exports.get = function get() {
  return "10." + (parseFloat(require('os').release()) - 4);
};
