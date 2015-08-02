'use strict';

var assert = require('assert');
var subtitleExtensions = require('./');

describe('subtitle extensions', function () {

  it('should be an array of extensions', function () {
    assert(Array.isArray(subtitleExtensions));
    assert(subtitleExtensions.length > 0);
  });

});