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
    assert.equal('23K', nmbrs(23041));
    assert.equal('-23K', nmbrs(-23042));
    assert.equal('65M', nmbrs(65049655));
  });

  it('Handles numbers bigger than a trillion correctly', function() {
    assert.equal('12.3q', nmbrs(12300000000000000));
    assert.equal('12.3Q', nmbrs(12300000000000000000));
    assert.equal('12.3s', nmbrs(12300000000000000000000));
    assert.equal('12.3S', nmbrs(12300000000000000000000000));
  });

  it('Handles non number input and returns a 0', function() {
    assert.equal('0', nmbrs('test'));
  });

  it('Rounds the decimals correctly', function() {
    assert.equal('12.4K', nmbrs(12360));
    assert.equal('12.4K', nmbrs(12350));
    assert.equal('12.3K', nmbrs(12320));
  });

  it('Rounds the negative decimals correctly', function() {
    assert.equal('-12.4K', nmbrs(-12360));
    assert.equal('-12.4K', nmbrs(-12350));
    assert.equal('-12.3K', nmbrs(-12320));
  });

  it('Works for numbers bigger than +e66', function() {
    assert.equal('100E66', nmbrs(Math.pow(10, 68)));
  });

  it('Test against all standard dictionary numbers', function() {
    assert.equal('1K', nmbrs(Math.pow(10, 3)));
    assert.equal('1M', nmbrs(Math.pow(10, 6)));
    assert.equal('1B', nmbrs(Math.pow(10, 9)));
    assert.equal('1t', nmbrs(Math.pow(10, 12)));
    assert.equal('1q', nmbrs(Math.pow(10, 15)));
    assert.equal('1Q', nmbrs(Math.pow(10, 18)));
    assert.equal('1s', nmbrs(Math.pow(10, 21)));
    assert.equal('1S', nmbrs(Math.pow(10, 24)));
    assert.equal('1o', nmbrs(Math.pow(10, 27)));
    assert.equal('1n', nmbrs(Math.pow(10, 30)));
    assert.equal('1d', nmbrs(Math.pow(10, 33)));
    assert.equal('1U', nmbrs(Math.pow(10, 36)));
    assert.equal('1D', nmbrs(Math.pow(10, 39)));
    assert.equal('1T', nmbrs(Math.pow(10, 42)));
    assert.equal('1Qt', nmbrs(Math.pow(10, 45)));
    assert.equal('1Qd', nmbrs(Math.pow(10, 48)));
    assert.equal('1Sd', nmbrs(Math.pow(10, 51)));
    assert.equal('1St', nmbrs(Math.pow(10, 54)));
    assert.equal('1O', nmbrs(Math.pow(10, 57)));
  });
});
