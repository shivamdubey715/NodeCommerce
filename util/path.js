const path = require('path');

let mainModulePath = '';
if (process.mainModule) {
  mainModulePath = process.mainModule.filename;
}

module.exports = path.dirname(mainModulePath);
