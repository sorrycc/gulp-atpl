'use strict';

var through = require('through2');
var atpl = require('anima-template');

module.exports = function() {

  return through.obj(function(file, enc, cb) {
    if (file.isNull()) return cb(null, file); // pass along

    var str = file.contents.toString('utf-8');
    file.contents = new Buffer(atpl(str));
    file.path = file.path + '.js';
    cb(null, file);
  });

};
