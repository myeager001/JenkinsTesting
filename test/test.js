var expect = require('chai').expect
var helloPerson = require('../build/js/main.min.js')

describe('return a name with hello attached', function(){
  it('does what it suppose to do', function(){
    expect(helloPerson('Mike')).to.equal('Hello Mike');
  })
})
