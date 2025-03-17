var sec = sec || {};
sec.sun = sec.sun || {};
sec.sun.awt = sec.sun.awt || {};
sec.sun.awt.geom = sec.sun.awt.geom || {};
sec.sun.awt.geom.Order1 = function()
{
    this.x0 = 0;
    this.y0 = 0;
    this.x1 = 0;
    this.y1 = 0;
    this.xmin = 0;
    this.xmax = 0;
    this.direction = -1;
    this._parent = null;
    var x0 = arguments[0];
    var y0 = arguments[1];
    var x1 = arguments[2];
    var y1 = arguments[3];
    var direction = arguments[4];
    this.x0 = x0;
    this.y0 = y0;
    this.x1 = x1;
    this.y1 = y1;
    this.direction = direction;
    if (x0 < x1) {
        this.xmin = x0;
        this.xmax = x1;
    } else {
        this.xmin = x1;
        this.xmax = x0;
    }
    this.getOrder = function() {
        return 1;
    };
    this.getXTop = function() {
        return this.x0;
    };
    this.getYTop = function() {
        return this.y0;
    };
    this.getXBot = function() {
        return this.x1;
    };
    this.getYBot = function() {
        return this.y1;
    };
    this.getXMin = function() {
        return this.xmin;
    };
    this.getXMax = function() {
        return this.xmax;
    };
    this.getX0 = function() {
        return (this.direction === 1) ? this.x0 : this.x1;
    };
    this.getY0 = function() {
        return (this.direction === 1) ? this.y0 : this.y1;
    };
    this.getX1 = function() {
        return (this.direction === -1) ? this.x0 : this.x1;
    };
    this.getY1 = function() {
        return (this.direction === -1) ? this.y0 : this.y1;
    };
    this.XforY = function(y) {
        if (this.x0 === this.x1 || y <= this.y0) {
            return this.x0;
        }
        if (y >= this.y1) {
            return this.x1;
        }
        return (this.x0 + (y - this.y0) * (this.x1 - this.x0) / (this.y1 - this.y0));
    };
    this.TforY = function(y) {
        if (y <= this.y0) {
            return 0;
        }
        if (y >= this.y1) {
            return 1;
        }
        return (y - this.y0) / (this.y1 - this.y0);
    };
    this.XforT = function(t) {
        return this.x0 + t * (this.x1 - this.x0);
    };
    this.YforT = function(t) {
        return this.y0 + t * (this.y1 - this.y0);
    };
    this.dXforT = function(t, deriv) {
        switch (deriv) {
            case 0:
                return this.x0 + t * (this.x1 - this.x0);
            case 1:
                return (this.x1 - this.x0);
            default:
                return 0;
        }
    };
    this.dYforT = function(t, deriv) {
        switch (deriv) {
            case 0:
                return this.y0 + t * (this.y1 - this.y0);
            case 1:
                return (this.y1 - this.y0);
            default:
                return 0;
        }
    };
    this.nextVertical = function(t0, t1) {
        return t1;
    };
    this.accumulateCrossings = function(c) {
        var xlo = c.getXLo();
        var ylo = c.getYLo();
        var xhi = c.getXHi();
        var yhi = c.getYHi();
        if (this.xmin >= xhi) {
            return false;
        }
        var xstart;
        var ystart;
        var xend;
        var yend;
        if (this.y0 < ylo) {
            if (this.y1 <= ylo) {
                return false;
            }
            ystart = ylo;
            xstart = this.XforY(ylo);
        } else {
            if (this.y0 >= yhi) {
                return false;
            }
            ystart = this.y0;
            xstart = this.x0;
        }
        if (this.y1 > yhi) {
            yend = yhi;
            xend = this.XforY(yhi);
        } else {
            yend = this.y1;
            xend = this.x1;
        }
        if (xstart >= xhi && xend >= xhi) {
            return false;
        }
        if (xstart > xlo || xend > xlo) {
            return true;
        }
        c.record(ystart, yend, this.direction);
        return false;
    };
    this.enlarge = function(r) {
        r.add(this.x0, this.y0);
        r.add(this.x1, this.y1);
    };
    this.getWithDirection = function(direction) {
        return (this.direction === direction ? this : this.getReversedCurve());
    };
    this.getSubCurve = function(ystart, yend, dir)
    {
        if (ystart === this.y0 && yend === this.y1)
        {
            return this.getWithDirection(dir);
        }
        if (this.x0 === this.x1)
        {
            return  new sec.sun.awt.geom.Order1(this.x0, ystart, this.x1, yend, dir);
        }
        var num = this.x0 - this.x1;
        var denom = this.y0 - this.y1;
        var xstart = (this.x0 + (ystart - this.y0) * num / denom);
        var xend = (this.x0 + (yend - this.y0) * num / denom);
        return  new sec.sun.awt.geom.Order1(xstart, ystart, xend, yend, dir);
    };
    this.getReversedCurve = function() {
        return  new sec.sun.awt.geom.Order1(this.x0, this.y0, this.x1, this.y1, -this.direction);
    };
    this.compareTo = function(other, yrange) {
        var curve = other;
        var c1 = curve.getCurve();
        if (yrange[1] <= yrange[0]) {
            throw  new InternalError("yrange already screwed up...");
        }
        yrange[1] = Math.min(Math.min(yrange[1], this.y1), c1.y1);
        if (yrange[1] <= yrange[0]) {
            throw  new InternalError("backstepping from " + yrange[0] + " to " + yrange[1]);
        }
        if (this.xmax <= c1.xmin) {
            return (this.xmin === c1.xmax) ? 0 : -1;
        }
        if (this.xmin >= c1.xmax) {
            return 1;
        }
        var dxa = this.x1 - this.x0;
        var dya = this.y1 - this.y0;
        var dxb = c1.x1 - c1.x0;
        var dyb = c1.y1 - c1.y0;
        var denom = dxb * dya - dxa * dyb;
        var y;
        if (denom !== 0) {
            var num = ((this.x0 - c1.x0) * dya * dyb - this.y0 * dxa * dyb + c1.y0 * dxb * dya);
            y = num / denom;
            if (y <= yrange[0]) {
                y = Math.min(this.y1, c1.y1);
            } else {
                if (y < yrange[1]) {
                    yrange[1] = y;
                }
                y = Math.max(this.y0, c1.y0);
            }
        } else {
            y = Math.max(this.y0, c1.y0);
        }
        return sec.sun.awt.geom.Curve.orderof(this.XforY(y), c1.XforY(y));
    };
    this.getSegment = function(coords) {
        if (this.direction === 1) {
            coords[0] = this.x1;
            coords[1] = this.y1;
        } else {
            coords[0] = this.x0;
            coords[1] = this.y0;
        }
        return 1;
    };
    this.controlPointString = function() {
        return "";
    };
    this.setParent = function(parent) {
        this._parent = parent;
    };
    this.getParent = function() {
        return this._parent;
    };
};