describe("Mocha chai example test", function() {
    it('should fail', function() {
        expect(true).to.be.false;
    });
});

describe("sinon example test", function () {
    var time2013_10_01;

    time2013_10_01 = (new Date(2013, 10-1, 1)).getTime();
    before(function() {
        // sinon was defined in global scope
        this.fakeTimer = new sinon.useFakeTimers(time2013_10_01);
    });

    it('should fail', function() {
        expect(true).to.be.false;
    });

    after(function() {
        this.fakeTimer.restore();
    });
});
