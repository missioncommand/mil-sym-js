var sec = sec || {};
sec.sun = sec.sun || {};
sec.sun.awt = sec.sun.awt || {};
sec.sun.awt.geom = sec.sun.awt.geom || {};
sec.sun.awt.geom.CrossingsObject = function()
{
    this.limit = 0;
    this.yranges = null;
    this.xlo = 0;
    this.ylo = 0;
    this.xhi = 0;
    this.yhi = 0;
    this.crosscounts = null;
    this.evenOdd = null;
    this.crossings = null;
    this.nonZero = null;
    this.type = -1;
    this.tmp = null;
    this.yranges = Clazz.newArray(10, 0);
    this.tmp = new sec.sun.awt.geom.Vector();
    var xlo = arguments[0];
    var ylo = arguments[1];
    var xhi = arguments[2];
    var yhi = arguments[3];
    var type = arguments[4];
    this.xlo = xlo;
    this.ylo = ylo;
    this.xhi = xhi;
    this.yhi = yhi;
    this.type = type;
    switch (type) {
        case 0:
            this.crossings = new sec.sun.awt.geom.Crossings(xlo, ylo, xhi, yhi);
            break;
        case 1:
            this.nonZero = new sec.sun.awt.geom.NonZero(xlo, ylo, xhi, yhi);
            this.crosscounts = Clazz.newArray(Math.floor(this.yranges.length / 2), 0);
            break;
        case 2:
            this.evenOdd = new sec.sun.awt.geom.EvenOdd(xlo, ylo, xhi, yhi);
            break;
    }
    this.getXLo = function() {
        switch (this.type) {
            case 0:
                return this.crossings.getXLo();
            case 2:
                return this.evenOdd.getXLo();
            case 1:
                return this.nonZero.getXLo();
            default:
                return -1;
        }
    };
    this.getYLo = function() {
        switch (this.type) {
            case 0:
                return this.crossings.getYLo();
            case 2:
                return this.evenOdd.getYLo();
            case 1:
                return this.nonZero.getYLo();
            default:
                return -1;
        }
    };
    this.getXHi = function() {
        switch (this.type) {
            case 0:
                return this.crossings.getXHi();
            case 2:
                return this.evenOdd.getXHi();
            case 1:
                return this.nonZero.getXHi();
            default:
                return -1;
        }
    };
    this.getYHi = function() {
        switch (this.type) {
            case 0:
                return this.crossings.getYHi();
            case 2:
                return this.evenOdd.getYHi();
            case 1:
                return this.nonZero.getYHi();
            default:
                return -1;
        }
    };
    this.isEmpty = function() {
        switch (this.type) {
            case 0:
                return this.crossings.isEmpty();
            case 2:
                return this.evenOdd.isEmpty();
            case 1:
                return this.nonZero.isEmpty();
            default:
                return true;
        }
    };
    this.record = function(ystart, yend, direction) {
        switch (this.type) {
            case 0:
                this.crossings.record(ystart, yend, direction);
            case 2:
                this.evenOdd.record(ystart, yend, direction);
            case 1:
                this.nonZero.record(ystart, yend, direction);
            default:
                return;
        }
    };
    this.accumulateLine = function(x0, y0, x1, y1) {
        switch (this.type) {
            case 0:
                return this.crossings.accumulateLine(x0, y0, x1, y1);
            case 2:
                return this.evenOdd.accumulateLine(x0, y0, x1, y1);
            case 1:
                return this.nonZero.accumulateLine(x0, y0, x1, y1);
            default:
                return false;
        }
    };
    this.accumulateQuad = function(x0, y0, coords) {
        if (y0 < this.ylo && coords[1] < this.ylo && coords[3] < this.ylo) {
            return false;
        }
        if (y0 > this.yhi && coords[1] > this.yhi && coords[3] > this.yhi) {
            return false;
        }
        if (x0 > this.xhi && coords[0] > this.xhi && coords[2] > this.xhi) {
            return false;
        }
        if (x0 < this.xlo && coords[0] < this.xlo && coords[2] < this.xlo) {
            if (y0 < coords[3]) {
                this.record(Math.max(y0, this.ylo), Math.min(coords[3], this.yhi), 1);
            } else if (y0 > coords[3]) {
                this.record(Math.max(coords[3], this.ylo), Math.min(y0, this.yhi), -1);
            }
            return false;
        }
        sec.sun.awt.geom.Curve.insertQuad(this.tmp, x0, y0, coords);
        var enum_ = this.tmp.elements();
        while (enum_.hasMoreElements()) {
            var c = enum_.nextElement();
            if (c.accumulateCrossings(this)) {
                return true;
            }
        }
        this.tmp.clear();
        return false;
    };
    this.accumulateCubic = function(x0, y0, coords) {
        if (y0 < this.ylo && coords[1] < this.ylo && coords[3] < this.ylo && coords[5] < this.ylo) {
            return false;
        }
        if (y0 > this.yhi && coords[1] > this.yhi && coords[3] > this.yhi && coords[5] > this.yhi) {
            return false;
        }
        if (x0 > this.xhi && coords[0] > this.xhi && coords[2] > this.xhi && coords[4] > this.xhi) {
            return false;
        }
        if (x0 < this.xlo && coords[0] < this.xlo && coords[2] < this.xlo && coords[4] < this.xlo) {
            if (y0 <= coords[5]) {
                this.record(Math.max(y0, this.ylo), Math.min(coords[5], this.yhi), 1);
            } else {
                this.record(Math.max(coords[5], this.ylo), Math.min(y0, this.yhi), -1);
            }
            return false;
        }
        sec.sun.awt.geom.Curve.insertCubic(this.tmp, x0, y0, coords);
        var enum_ = this.tmp.elements();
        while (enum_.hasMoreElements()) {
            var c = enum_.nextElement();
            if (c.accumulateCrossings(this)) {
                return true;
            }
        }
        this.tmp.clear();
        return false;
    };
};
sec.sun.awt.geom.CrossingsObject.CROSSINGS = 0;
sec.sun.awt.geom.CrossingsObject.NONZERO = 1;
sec.sun.awt.geom.CrossingsObject.EVENODD = 2;
sec.sun.awt.geom.CrossingsObject.debug = false;
sec.sun.awt.geom.CrossingsObject.findCrossings = function(curves, xlo, ylo, xhi, yhi) {
    var cross = new sec.sun.awt.geom.CrossingsObject(xlo, ylo, xhi, yhi, 2);
    var enum_ = curves.elements();
    while (enum_.hasMoreElements()) {
        var c = enum_.nextElement();
        if (c.accumulateCrossings(cross)) {
            return null;
        }
    }
    return cross;
};
