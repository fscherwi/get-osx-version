var os = require('os');

  if (os.release() == '1.3.1') {
    var osx_version = '10.0';
  } else if (os.release() == '1.4.1') {
    var osx_version = '10.0';
  } else if (os.release() == '5.1') {
    var osx_version = '10.1.1';
  } else if (os.release() == '5.5') {
    var osx_version = '10.1.5';
  } else if (os.release() == '6.0.1') {
    var osx_version = '10.2';
  } else if (os.release() == '6.8') {
    var osx_version = '10.2.8';
  } else if (os.release() == '7.0') {
    var osx_version = '10.3';
  } else if (os.release() == '7.9') {
    var osx_version = '10.3.9';
  } else if (os.release() == '8.0') {
    var osx_version = '10.4';
  } else if (os.release() == '8.11') {
    var osx_version = '10.4.11';
  } else if (os.release() == '9.0') {
    var osx_version = '10.5';
  } else if (os.release() == '9.8') {
    var osx_version = '10.5.8';
  } else if (os.release() == '10.0') {
    var osx_version = '10.6';
  } else if (os.release() == '10.8') {
    var osx_version = '10.6.8';
  } else if (os.release() == '11.0.0') {
    var osx_version = '10.7';
  } else if (os.release() == '11.4.2') {
    var osx_version = '10.7.5';
  } else if (os.release() == '12.0.0') {
    var osx_version = '10.8';
  } else if (os.release() == '12.6.0') {
    var osx_version = '10.8.5';
  } else if (os.release() == '13.0.0') {
    var osx_version = '10.9';
  } else if (os.release() == '13.4.0') {
    var osx_version = '10.9.5';
  } else if (os.release() == '14.0.0') {
    var osx_version = '10.10';
  } else{
    var osx_version = 'unknown';
  }

function get_version(){
  return osx_version;
}

module.exports.get = get_version;
