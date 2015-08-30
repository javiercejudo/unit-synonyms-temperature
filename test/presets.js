/*jshint node:true, mocha:true */

'use strict';

require('should');

var forOwn = require('for-own');
var temperature = require('../src/');
var units = temperature.units;
var synonyms = temperature.synonyms;

describe('temperature units synonyms', function() {
  it('should be an objecct', function() {
    ({}.toString.call(synonyms)).should.equal('[object Object]')
  });

  it('should include synonyms for supported units only', function() {
    var unitsWithSynonyms = {};

    forOwn(synonyms, function(unit) {
      unitsWithSynonyms[unit] = true;
    });

    unitsWithSynonyms.should.have.keys(units);
  });

  it('should have identity synonyms', function() {
    units.every(function(unit) {
      return synonyms[unit] === unit;
    }).should.be.exactly(true);
  });
});
