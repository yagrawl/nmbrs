const assert = require('assert');
const nmbrs = require('./index');

describe('Prettify Numbers', function() {
  it('Parses number and adds appropriate unit', function(){
    assert.equal('1K', nmbrs(1000));
  });
});
