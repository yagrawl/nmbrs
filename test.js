const assert = require('assert');
const nmbrs = require('./index');

describe('Prettify Numbers', function() {
  it('Parses number and adds appropriate unit', function(){
    assert.equal('1.2K', nmbrs(1200));
    assert.equal('5.6M', nmbrs(5600000));
    assert.equal('3.4B', nmbrs(3400000000));
    assert.equal('8.7t', nmbrs(8700000000000));
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
    assert.equal('-8.7t', nmbrs(-8700000000000));
  });

  it('Functions with empty params passed in', function(){
    assert.equal('2.3K', nmbrs(2304, {}));
  });

  it('Parses number with more than 1 decimal number', function(){
    assert.equal('2.3K', nmbrs(2304));
    assert.equal('-2.3K', nmbrs(-2304));
    assert.equal('6.5M', nmbrs(6504965));
  });

  it('Parses number in 10s and 100s of KMBT', function() {
    assert.equal('23.0K', nmbrs(23041));
    assert.equal('-23.0K', nmbrs(-23042));
    assert.equal('65.0M', nmbrs(65049655));
  });

  it('Handles numbers bigger than a trillion correctly', function() {
    assert.equal('12.3q', nmbrs(12300000000000000));
    assert.equal('12.3Q', nmbrs(12300000000000000000));
    assert.equal('12.3s', nmbrs(12300000000000000000000));
    assert.equal('12.3S', nmbrs(12300000000000000000000000));
  });
});
