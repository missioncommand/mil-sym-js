
sec.sun = sec.sun || {};
sec.sun.awt = sec.sun.awt || {};
sec.sun.awt.geom = sec.sun.awt.geom || {};
sec.sun.awt.geom.Area = function()
{
    this.curves = null;
    this.cachedBounds = null;
    this.curves = new sec.sun.awt.geom.Vector();
    var s;
    if (arguments.length === 1)
    {
        s = arguments[0];
        this.curves = sec.sun.awt.geom.Area.pathToCurves(s.getPathIterator(null));
    }
    this.add = function(rhs) {
        this.curves = new sec.sun.awt.geom.SomeOp(1).calculate(this.curves, rhs.curves);
        this.invalidateBounds();
    };
    this.subtract = function(rhs) {
        this.curves = new sec.sun.awt.geom.SomeOp(0).calculate(this.curves, rhs.curves);
        this.invalidateBounds();
    };
    this.intersect = function(rhs) {
        this.curves = new sec.sun.awt.geom.SomeOp(2).calculate(this.curves, rhs.curves);
        this.invalidateBounds();
    };
    this.exclusiveOr = function(rhs) {
        this.curves = new sec.sun.awt.geom.SomeOp(3).calculate(this.curves, rhs.curves);
        this.invalidateBounds();
    };
    this.reset = function() {
        this.curves = new sec.sun.awt.geom.Vector();
        this.invalidateBounds();
    };
    this.isEmpty = function() {
        return (this.curves.size() === 0);
    };
    this.isPolygonal = function() {
        var enum_ = this.curves.elements();
        while (enum_.hasMoreElements()) {
            if ((enum_.nextElement()).getOrder() > 1) {
                return false;
            }
        }
        return true;
    };
    this.isRectangular = function() {
        var size = this.curves.size();
        if (size === 0) {
            return true;
        }
        if (size > 3) {
            return false;
        }
        var c1 = this.curves.get(1);
        var c2 = this.curves.get(2);
        if (c1.getOrder() !== 1 || c2.getOrder() !== 1) {
            return false;
        }
        if (c1.getXTop() !== c1.getXBot() || c2.getXTop() !== c2.getXBot()) {
            return false;
        }
        if (c1.getYTop() !== c2.getYTop() || c1.getYBot() !== c2.getYBot()) {
            return false;
        }
        return true;
    };
    this.isSingular = function() {
        if (this.curves.size() < 3) {
            return true;
        }
        var enum_ = this.curves.elements();
        enum_.nextElement();
        while (enum_.hasMoreElements()) {
            if ((enum_.nextElement()).getOrder() === 0) {
                return false;
            }
        }
        return true;
    };
    this.invalidateBounds = function() {
        this.cachedBounds = null;
    };
    this.equals = function(other) {
        if (other === this) {
            return true;
        }
        if (other === null) {
            return false;
        }
        var c = new sec.sun.awt.geom.SomeOp(3).calculate(this.curves, other.curves);
        return c.isEmpty();
    };
    this.getPathIterator = function(at) {
        return  new sec.sun.awt.geom.AreaIterator(this.curves, at);
    };
};

sec.sun.awt.geom.Area.pathToCurves = function(pi)
{
    var curves = new sec.sun.awt.geom.Vector();
    var windingRule = pi.getWindingRule();
    var coords = new Array(23);
    var movx = 0;
    var movy = 0;
    var curx = 0;
    var cury = 0;
    var newx;
    var newy;
    while (!pi.isDone()) {
        switch (pi.currentSegment(coords)) {
            case 0:
                if(sec.sun.awt.geom.Area.normalizeGeoPoints===true)
                {
                    if(movx>0)
                        movx-=360;
                    if(curx>0)
                        curx-=360;
                }
                sec.sun.awt.geom.Curve.insertLine(curves, curx, cury, movx, movy);
                curx = movx = coords[0];
                cury = movy = coords[1];
                if(sec.sun.awt.geom.Area.normalizeGeoPoints===true)
                {
                    if(movx>0)
                        movx-=360;
                }
                sec.sun.awt.geom.Curve.insertMove(curves, movx, movy);
                break;
            case 1:
                newx = coords[0];
                newy = coords[1];
                if(sec.sun.awt.geom.Area.normalizeGeoPoints===true)
                {
                    if(newx>0)
                        newx-=360;
                    if(curx>0)
                        curx-=360;
                }
                sec.sun.awt.geom.Curve.insertLine(curves, curx, cury, newx, newy);
                curx = newx;
                cury = newy;
                break;
            case 2:
                newx = coords[2];
                newy = coords[3];
                if(sec.sun.awt.geom.Area.normalizeGeoPoints===true)
                {
                    if(curx>0)
                        curx-=360;
                }
                sec.sun.awt.geom.Curve.insertQuad(curves, curx, cury, coords);
                curx = newx;
                cury = newy;
                break;
            case 3:
                newx = coords[4];
                newy = coords[5];
                if(sec.sun.awt.geom.Area.normalizeGeoPoints===true)
                {
                    if(curx>0)
                        curx-=360;
                }
                sec.sun.awt.geom.Curve.insertCubic(curves, curx, cury, coords);
                curx = newx;
                cury = newy;
                break;
            case 4:
                if(sec.sun.awt.geom.Area.normalizeGeoPoints===true)
                {
                    if(movx>0)
                        movx-=360;
                    if(curx>0)
                        curx-=360;
                }
                sec.sun.awt.geom.Curve.insertLine(curves, curx, cury, movx, movy);
                curx = movx;
                cury = movy;
                break;
        }
        pi.next();
    }
    if(sec.sun.awt.geom.Area.normalizeGeoPoints===true)
    {
        if(movx>0)
            movx-=360;
        if(curx>0)
            curx-=360;
    }
    sec.sun.awt.geom.Curve.insertLine(curves, curx, cury, movx, movy);
    var operator2 = null;
    if (windingRule === 0) {
        operator2 = new sec.sun.awt.geom.AreaOp2(0);
    } else {
        operator2 = new sec.sun.awt.geom.AreaOp2(1);
    }
    var emptyCurves = new sec.sun.awt.geom.Vector();
    return operator2.calculate(curves, emptyCurves);
};
sec.sun.awt.geom.Area.normalizeGeoPoints=true;