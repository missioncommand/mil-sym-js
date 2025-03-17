var sec = sec || {};
sec.sun = sec.sun || {};
sec.sun.awt = sec.sun.awt || {};
sec.sun.awt.geom = sec.sun.awt.geom || {};
sec.sun.awt.geom.NZWindOp = function()
{
    this.count = 0;
    this.newRow = function() {
        this.count = 0;
    };
    this.classify = function(e) {
        var newCount = this.count;
        var type = (newCount === 0 ? 1 : 0);
        newCount += e.getCurve().getDirection();
        this.count = newCount;
        return (newCount === 0 ? -1 : type);
    };
    this.getState = function() {
        return ((this.count === 0) ? -1 : 1);
    };
};