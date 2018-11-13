require('babel-register');
require('ignore-styles');
require('dotenv').config();

var fs = require('fs');
var path = require('path');
var renderIndexToString = require('lib/util/render-layout').renderIndexToString;
var pathToIndex = '../../src/style-guide.html.pug';

renderIndexToString(pathToIndex).then(function (layout) {
    fs.writeFile(path.resolve(__dirname, '../../build/index.html'), layout, 'utf8');
});
