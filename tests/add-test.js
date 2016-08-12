var chai = require('chai');
var expect = chai.expect;
var Operations = require(process.cwd() + '/src/add.js');



describe('Tests', function() {
    it('add() should add the two vars', function() {
        var ops = new Operations();
        var addition = ops.add(5,7);
        expect(addition).to.equal(12);
    });
});