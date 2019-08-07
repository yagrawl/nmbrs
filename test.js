const assert = require('assert');
const nmbrs = require('./index');

describe('Prettify Numbers', function() {
  it('Parses number and adds appropriate unit', function(){
    assert.equal('1.2K', nmbrs(1200));
    assert.equal('5.6M', nmbrs(5600000));
    assert.equal('3.4B', nmbrs(3400000000));
    assert.equal('8.7T', nmbrs(8700000000000));
  });

  it('Parses number less than 1000 without a unit', function(){
    assert.equal('121', nmbrs(121));
    assert.equal('999', nmbrs(999));
    assert.equal('21', nmbrs(21));
    assert.equal('1', nmbrs(1));
  });

  it('Parses 0 without a unit', function(){
    assert.equal('0', nmbrs(0));
  });

  it('Parses number greater than -1000 without a unit', function(){
    assert.equal('-121', nmbrs(-121));
    assert.equal('-999', nmbrs(-999));
    assert.equal('-21', nmbrs(-21));
    assert.equal('-1', nmbrs(-1));
  });

  it('Parses negative numbers less than -1000 with a unit', function(){
    assert.equal('-1.2K', nmbrs(-1200));
    assert.equal('-5.6M', nmbrs(-5600000));
    assert.equal('-3.4B', nmbrs(-3400000000));
    assert.equal('-8.7T', nmbrs(-8700000000000));
  });
});
