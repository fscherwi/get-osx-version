function get() {
  return "10." + (parseFloat(require('os').release()) - 4);
}
exports.get = get;
