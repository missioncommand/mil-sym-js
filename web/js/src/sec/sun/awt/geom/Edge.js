var sec = sec || {};
sec.sun = sec.sun || {};
sec.sun.awt = sec.sun.awt || {};
sec.sun.awt.geom = sec.sun.awt.geom || {};
sec.sun.awt.geom.Edge = function()
{
    this.curve = null;
    this.ctag = 0;
    this.etag = 0;
    this.activey = 0;
    this.equivalence = 0;
    this.lastEdge = null;
    this.lastResult = 0;
    this.lastLimit = 0;
    var c = arguments[0];
    var ctag = arguments[1];

    var etag = 0;
    if (arguments.length === 3)
        etag = arguments[2];

    this.curve = c;
    this.ctag = ctag;
    this.etag = etag;
    this.getCurve = function() {
        return this.curve;
    };
    this.getCurveTag = function() {
        return this.ctag;
    };
    this.getEdgeTag = function() {
        return this.etag;
    };
    this.setEdgeTag = function(etag) {
        this.etag = etag;
    };
    this.getEquivalence = function() {
        return this.equivalence;
    };
    this.setEquivalence = function(eq) {
        this.equivalence = eq;
    };
    this.compareTo = function(other, yrange) {
        if (other === this.lastEdge && yrange[0] < this.lastLimit) {
            if (yrange[1] > this.lastLimit) {
                yrange[1] = this.lastLimit;
            }
            return this.lastResult;
        }
        if (this === other.lastEdge && yrange[0] < other.lastLimit) {
            if (yrange[1] > other.lastLimit) {
                yrange[1] = other.lastLimit;
            }
            return 0 - other.lastResult;
        }
        var ret = this.curve.compareTo(other.curve, yrange);
        this.lastEdge = other;
        this.lastLimit = yrange[1];
        this.lastResult = ret;
        return ret;
    };
    this.record = function(yend, etag) {
        this.activey = yend;
        this.etag = etag;
    };
    this.isActiveFor = function(y, etag) {
        return (this.etag === etag && this.activey >= y);
    };
    this.toString = function() {
        return ("Edge[" + this.curve + ", " + (this.ctag === 0 ? "L" : "R") + ", " + (this.etag === 1 ? "I" : (this.etag === -1 ? "O" : "N")) + "]");
    };
};
sec.sun.awt.geom.Edge.INIT_PARTS = 4;
sec.sun.awt.geom.Edge.GROW_PARTS = 10;