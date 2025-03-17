var sec = sec || {};
sec.sun = sec.sun || {};
sec.sun.awt = sec.sun.awt || {};
sec.sun.awt.geom = sec.sun.awt.geom || {};
sec.sun.awt.geom.CurveObject = function()
{
    this.order0 = null;
    this.order1 = null;
    this.order2 = null;
    this.order3 = null;
    this.order = -1;
    this.setParent = function()
    {
        switch (this.order) {
            case 0:
                this.order0.setParent(this);
                break;
            case 1:
                this.order1.setParent(this);
                break;
            case 2:
                this.order2.setParent(this);
                break;
            case 3:
                this.order3.setParent(this);
                break;
            default:
                break;
        }
        return;
    }
    var obj = arguments[0];
    if (Clazz.instanceOf(obj, sec.sun.awt.geom.Order0)) {
        this.order0 = obj;
        this.order = 0;
    } else if (Clazz.instanceOf(obj, sec.sun.awt.geom.Order1)) {
        this.order1 = obj;
        this.order = 1;
    } else if (Clazz.instanceOf(obj, sec.sun.awt.geom.Order2)) {
        this.order2 = obj;
        this.order = 2;
    } else if (Clazz.instanceOf(obj, sec.sun.awt.geom.Order3)) {
        this.order3 = obj;
        this.order = 3;
    }
    this.setParent();
    this.getCurve = function() {
        switch (this.order) {
            case 0:
                return this.order0;
            case 1:
                return this.order1;
            case 2:
                return this.order2;
            case 3:
                return this.order3;
            default:
                return null;
        }
    };
    this.getOrder = function() {
        return this.order;
    };
    this.getXTop = function() {
        switch (this.order) {
            case 0:
                return this.order0.getXTop();
            case 1:
                return this.order1.getXTop();
            case 2:
                return this.order2.getXTop();
            case 3:
                return this.order3.getXTop();
            default:
                return -7;
        }
    };
    this.getYTop = function() {
        switch (this.order) {
            case 0:
                return this.order0.getYTop();
            case 1:
                return this.order1.getYTop();
            case 2:
                return this.order2.getYTop();
            case 3:
                return this.order3.getYTop();
            default:
                return -7;
        }
    };
    this.getXBot = function() {
        switch (this.order) {
            case 0:
                return this.order0.getXBot();
            case 1:
                return this.order1.getXBot();
            case 2:
                return this.order2.getXBot();
            case 3:
                return this.order3.getXBot();
            default:
                return -7;
        }
    };
    this.getYBot = function() {
        switch (this.order) {
            case 0:
                return this.order0.getYBot();
            case 1:
                return this.order1.getYBot();
            case 2:
                return this.order2.getYBot();
            case 3:
                return this.order3.getYBot();
            default:
                return -7;
        }
    };
    this.getXMin = function() {
        switch (this.order) {
            case 0:
                return this.order0.getXMin();
            case 1:
                return this.order1.getXMin();
            case 2:
                return this.order2.getXMin();
            case 3:
                return this.order3.getXMin();
            default:
                return -7;
        }
    };
    this.getXMax = function() {
        switch (this.order) {
            case 0:
                return this.order0.getXMax();
            case 1:
                return this.order1.getXMax();
            case 2:
                return this.order2.getXMax();
            case 3:
                return this.order3.getXMax();
            default:
                return -7;
        }
    };
    this.getDirection = function() {
        switch (this.order) {
            case 0:
                return this.order0.direction;
            case 1:
                return this.order1.direction;
            case 2:
                return this.order2.direction;
            case 3:
                return this.order3.direction;
            default:
                return -1;
        }
    };
    this.XforY = function(y) {
        switch (this.order) {
            case 0:
                return this.order0.XforY(y);
            case 1:
                return this.order1.XforY(y);
            case 2:
                return this.order2.XforY(y);
            case 3:
                return this.order3.XforY(y);
            default:
                return -7;
        }
    };
    this.getReversedCurve = function() {
        switch (this.order) {
            case 0:
                return this.order0.getReversedCurve();
            case 1:
                return this.order1.getReversedCurve();
            case 2:
                return this.order2.getReversedCurve();
            case 3:
                return this.order3.getReversedCurve();
            default:
                return null;
        }
    };
    this.getX0 = function() {
        switch (this.order) {
            case 0:
                return this.order0.getX0();
            case 1:
                return this.order1.getX0();
            case 2:
                return this.order2.getX0();
            case 3:
                return this.order3.getX0();
            default:
                return -7;
        }
    };
    this.getY0 = function() {
        switch (this.order) {
            case 0:
                return this.order0.getY0();
            case 1:
                return this.order1.getY0();
            case 2:
                return this.order2.getY0();
            case 3:
                return this.order3.getY0();
            default:
                return -7;
        }
    };
    this.getX1 = function() {
        switch (this.order) {
            case 0:
                return this.order0.getX1();
            case 1:
                return this.order1.getX1();
            case 2:
                return this.order2.getX1();
            case 3:
                return this.order3.getX1();
            default:
                return -7;
        }
    };
    this.getY1 = function() {
        switch (this.order) {
            case 0:
                return this.order0.getY1();
            case 1:
                return this.order1.getY1();
            case 2:
                return this.order2.getY1();
            case 3:
                return this.order3.getY1();
            default:
                return -7;
        }
    };
    this.XforT = function(t) {
        switch (this.order) {
            case 0:
                return this.order0.XforT(t);
            case 1:
                return this.order1.XforT(t);
            case 2:
                return this.order2.XforT(t);
            case 3:
                return this.order3.XforT(t);
            default:
                return -7;
        }
    };
    this.YforT = function(t) {
        switch (this.order) {
            case 0:
                return this.order0.YforT(t);
            case 1:
                return this.order1.YforT(t);
            case 2:
                return this.order2.YforT(t);
            case 3:
                return this.order3.YforT(t);
            default:
                return -7;
        }
    };
    this.TforY = function(t) {
        switch (this.order) {
            case 0:
                return this.order0.TforY(t);
            case 1:
                return this.order1.TforY(t);
            case 2:
                return this.order2.TforY(t);
            case 3:
                return this.order3.TforY(t);
            default:
                return -7;
        }
    };
    this.nextVertical = function(t0, t1) {
        switch (this.order) {
            case 0:
                return this.order0.nextVertical(t0, t1);
            case 1:
                return this.order1.nextVertical(t0, t1);
            case 2:
                return this.order2.nextVertical(t0, t1);
            case 3:
                return this.order3.nextVertical(t0, t1);
            default:
                return -7;
        }
    };
    this.controlPointString = function() {
        switch (this.order) {
            case 0:
                return "";
            case 1:
                return "";
            case 2:
                return this.order2.controlPointString();
            case 3:
                return this.order3.controlPointString();
            default:
                return "";
        }
    };
    this.toString = function() {
        return ("Curve[" + this.getOrder() + ", " + ("(" + sec.sun.awt.geom.Curve.round(this.getX0()) + ", " + sec.sun.awt.geom.Curve.round(this.getY0()) + "), ") + this.controlPointString() + ("(" + sec.sun.awt.geom.Curve.round(this.getX1()) + ", " + sec.sun.awt.geom.Curve.round(this.getY1()) + "), ") + (this.getDirection() === 1 ? "D" : "U") + "]");
    };
    this.crossingsFor = function(x, y) {
        if (y >= this.getYTop() && y < this.getYBot()) {
            if (x < this.getXMax() && (x < this.getXMin() || x < this.XforY(y))) {
                return 1;
            }
        }
        return 0;
    };
    this.accumulateCrossings = function(c) {
        var xhi = c.getXHi();
        if (this.getXMin() >= xhi) {
            return false;
        }
        var xlo = c.getXLo();
        var ylo = c.getYLo();
        var yhi = c.getYHi();
        var y0 = this.getYTop();
        var y1 = this.getYBot();
        var tstart;
        var ystart;
        var tend;
        var yend;
        if (y0 < ylo) {
            if (y1 <= ylo) {
                return false;
            }
            ystart = ylo;
            tstart = this.TforY(ylo);
        } else {
            if (y0 >= yhi) {
                return false;
            }
            ystart = y0;
            tstart = 0;
        }
        if (y1 > yhi) {
            yend = yhi;
            tend = this.TforY(yhi);
        } else {
            yend = y1;
            tend = 1;
        }
        var hitLo = false;
        var hitHi = false;
        while (true) {
            var x = this.XforT(tstart);
            if (x < xhi) {
                if (hitHi || x > xlo) {
                    return true;
                }
                hitLo = true;
            } else {
                if (hitLo) {
                    return true;
                }
                hitHi = true;
            }
            if (tstart >= tend) {
                break;
            }
            tstart = this.nextVertical(tstart, tend);
        }
        if (hitLo) {
            c.record(ystart, yend, this.getDirection());
        }
        return false;
    };
    this.refineTforY = function(t0, yt0, y0) {
        var t1 = 1;
        while (true) {
            var th = (t0 + t1) / 2;
            if (th === t0 || th === t1) {
                return t1;
            }
            var y = this.YforT(th);
            if (y < y0) {
                t0 = th;
                yt0 = y;
            } else if (y > y0) {
                t1 = th;
            } else {
                return t1;
            }
        }
    };
    this.findIntersect = function(that, yrange, ymin, slevel, tlevel, s0, xs0, ys0, s1, xs1, ys1, t0, xt0, yt0, t1, xt1, yt1) {
        if (ys0 > yt1 || yt0 > ys1) {
            return false;
        }
        if (Math.min(xs0, xs1) > Math.max(xt0, xt1) || Math.max(xs0, xs1) < Math.min(xt0, xt1)) {
            return false;
        }
        if (s1 - s0 > 0.0010) {
            var s = (s0 + s1) / 2;
            var xs = this.XforT(s);
            var ys = this.YforT(s);
            if (s === s0 || s === s1) {
                System.out.println("s0 = " + s0);
                System.out.println("s1 = " + s1);
                throw  new InternalError("no s progress!");
            }
            if (t1 - t0 > 0.0010) {
                var t = (t0 + t1) / 2;
                var xt = that.XforT(t);
                var yt = that.YforT(t);
                if (t === t0 || t === t1) {
                    System.out.println("t0 = " + t0);
                    System.out.println("t1 = " + t1);
                    throw  new InternalError("no t progress!");
                }
                if (ys >= yt0 && yt >= ys0) {
                    if (this.findIntersect(that, yrange, ymin, slevel + 1, tlevel + 1, s0, xs0, ys0, s, xs, ys, t0, xt0, yt0, t, xt, yt)) {
                        return true;
                    }
                }
                if (ys >= yt) {
                    if (this.findIntersect(that, yrange, ymin, slevel + 1, tlevel + 1, s0, xs0, ys0, s, xs, ys, t, xt, yt, t1, xt1, yt1)) {
                        return true;
                    }
                }
                if (yt >= ys) {
                    if (this.findIntersect(that, yrange, ymin, slevel + 1, tlevel + 1, s, xs, ys, s1, xs1, ys1, t0, xt0, yt0, t, xt, yt)) {
                        return true;
                    }
                }
                if (ys1 >= yt && yt1 >= ys) {
                    if (this.findIntersect(that, yrange, ymin, slevel + 1, tlevel + 1, s, xs, ys, s1, xs1, ys1, t, xt, yt, t1, xt1, yt1)) {
                        return true;
                    }
                }
            } else {
                if (ys >= yt0) {
                    if (this.findIntersect(that, yrange, ymin, slevel + 1, tlevel, s0, xs0, ys0, s, xs, ys, t0, xt0, yt0, t1, xt1, yt1)) {
                        return true;
                    }
                }
                if (yt1 >= ys) {
                    if (this.findIntersect(that, yrange, ymin, slevel + 1, tlevel, s, xs, ys, s1, xs1, ys1, t0, xt0, yt0, t1, xt1, yt1)) {
                        return true;
                    }
                }
            }
        } else if (t1 - t0 > 0.0010) {
            var t = (t0 + t1) / 2;
            var xt = that.XforT(t);
            var yt = that.YforT(t);
            if (t === t0 || t === t1) {
                System.out.println("t0 = " + t0);
                System.out.println("t1 = " + t1);
                throw  new InternalError("no t progress!");
            }
            if (yt >= ys0) {
                if (this.findIntersect(that, yrange, ymin, slevel, tlevel + 1, s0, xs0, ys0, s1, xs1, ys1, t0, xt0, yt0, t, xt, yt)) {
                    return true;
                }
            }
            if (ys1 >= yt) {
                if (this.findIntersect(that, yrange, ymin, slevel, tlevel + 1, s0, xs0, ys0, s1, xs1, ys1, t, xt, yt, t1, xt1, yt1)) {
                    return true;
                }
            }
        } else {
            var xlk = xs1 - xs0;
            var ylk = ys1 - ys0;
            var xnm = xt1 - xt0;
            var ynm = yt1 - yt0;
            var xmk = xt0 - xs0;
            var ymk = yt0 - ys0;
            var det = xnm * ylk - ynm * xlk;
            if (det !== 0) {
                var detinv = 1 / det;
                var s = (xnm * ymk - ynm * xmk) * detinv;
                var t = (xlk * ymk - ylk * xmk) * detinv;
                if (s >= 0 && s <= 1 && t >= 0 && t <= 1) {
                    s = s0 + s * (s1 - s0);
                    t = t0 + t * (t1 - t0);
                    if (s < 0 || s > 1 || t < 0 || t > 1) {
                        System.out.println("Uh oh!");
                    }
                    var y = (this.YforT(s) + that.YforT(t)) / 2;
                    if (y <= yrange[1] && y > yrange[0]) {
                        yrange[1] = y;
                        return true;
                    }
                }
            }
        }
        return false;
    };
    this.compareTo = function(that, yrange) {
        if (this.order === 1) {
            return this.order1.compareTo(that, yrange);
        }
        var y0 = yrange[0];
        var y1 = yrange[1];
        y1 = Math.min(Math.min(y1, this.getYBot()), that.getYBot());
        if (y1 <= yrange[0]) {
            System.err.println("this === " + this);
            System.err.println("that === " + that);
            System.out.println("target range = " + yrange[0] + "=>" + yrange[1]);
            throw  new InternalError("backstepping from " + yrange[0] + " to " + y1);
        }
        yrange[1] = y1;
        if (this.getXMax() <= that.getXMin()) {
            if (this.getXMin() === that.getXMax()) {
                return 0;
            }
            return -1;
        }
        if (this.getXMin() >= that.getXMax()) {
            return 1;
        }
        var s0 = this.TforY(y0);
        var ys0 = this.YforT(s0);
        if (ys0 < y0) {
            s0 = this.refineTforY(s0, ys0, y0);
            ys0 = this.YforT(s0);
        }
        var s1 = this.TforY(y1);
        if (this.YforT(s1) < y0) {
            s1 = this.refineTforY(s1, this.YforT(s1), y0);
        }
        var t0 = that.TforY(y0);
        var yt0 = that.YforT(t0);
        if (yt0 < y0) {
            t0 = that.refineTforY(t0, yt0, y0);
            yt0 = that.YforT(t0);
        }
        var t1 = that.TforY(y1);
        if (that.YforT(t1) < y0) {
            t1 = that.refineTforY(t1, that.YforT(t1), y0);
        }
        var xs0 = this.XforT(s0);
        var xt0 = that.XforT(t0);
        var scale = Math.max(Math.abs(y0), Math.abs(y1));
        var ymin = Math.max(scale * 1E-14, 1E-300);
        if (sec.sun.awt.geom.Curve.fairlyClose(xs0, xt0)) {
            var bump = ymin;
            var maxbump = Math.min(ymin * 1E13, (y1 - y0) * .1);
            var y = y0 + bump;
            while (y <= y1) {
                if (sec.sun.awt.geom.Curve.fairlyClose(this.XforY(y), that.XforY(y))) {
                    if ((bump *= 2) > maxbump) {
                        bump = maxbump;
                    }
                } else {
                    y -= bump;
                    while (true) {
                        bump /= 2;
                        var newy = y + bump;
                        if (newy <= y) {
                            break;
                        }
                        if (sec.sun.awt.geom.Curve.fairlyClose(this.XforY(newy), that.XforY(newy))) {
                            y = newy;
                        }
                    }
                    break;
                }
                y += bump;
            }
            if (y > y0) {
                if (y < y1) {
                    yrange[1] = y;
                }
                return 0;
            }
        }
        if (ymin <= 0) {
            System.out.println("ymin = " + ymin);
        }
        while (s0 < s1 && t0 < t1) {
            var sh = this.nextVertical(s0, s1);
            var xsh = this.XforT(sh);
            var ysh = this.YforT(sh);
            var th = that.nextVertical(t0, t1);
            var xth = that.XforT(th);
            var yth = that.YforT(th);
            try {
                if (this.findIntersect(that, yrange, ymin, 0, 0, s0, xs0, ys0, sh, xsh, ysh, t0, xt0, yt0, th, xth, yth)) {
                    break;
                }
            } catch (t) {
                if (Clazz.instanceOf(t, Throwable)) {
                    System.err.println("Error: " + t);
                    System.err.println("y range was " + yrange[0] + "=>" + yrange[1]);
                    System.err.println("s y range is " + ys0 + "=>" + ysh);
                    System.err.println("t y range is " + yt0 + "=>" + yth);
                    System.err.println("ymin is " + ymin);
                    return 0;
                } else {
                    throw t;
                }
            }
            if (ysh < yth) {
                if (ysh > yrange[0]) {
                    if (ysh < yrange[1]) {
                        yrange[1] = ysh;
                    }
                    break;
                }
                s0 = sh;
                xs0 = xsh;
                ys0 = ysh;
            } else {
                if (yth > yrange[0]) {
                    if (yth < yrange[1]) {
                        yrange[1] = yth;
                    }
                    break;
                }
                t0 = th;
                xt0 = xth;
                yt0 = yth;
            }
        }
        var ymid = (yrange[0] + yrange[1]) / 2;
        return sec.sun.awt.geom.Curve.orderof(this.XforY(ymid), that.XforY(ymid));
    };
    this.getSegment = function(coords) {
        switch (this.order) {
            case 0:
                return this.order0.getSegment(coords);
            case 1:
                return this.order1.getSegment(coords);
            case 2:
                return this.order2.getSegment(coords);
            case 3:
                return this.order3.getSegment(coords);
            default:
                return -7;
        }
    };
    this.getSubCurve = function(ystart, yend, dir) {
        switch (this.order) {
            case 0:
                return this.order0.getSubCurve(ystart, yend, dir);
            case 1:
                return this.order1.getSubCurve(ystart, yend, dir);
            case 2:
                return this.order2.getSubCurve(ystart, yend, dir);
            case 3:
                return this.order3.getSubCurve(ystart, yend, dir);
            default:
                return null;
        }
    };
    this.enlarge = function(r) {
        switch (this.order) {
            case 0:
                this.order0.enlarge(r);
            case 1:
                this.order1.enlarge(r);
            case 2:
                this.order2.enlarge(r);
            case 3:
                this.order3.enlarge(r);
            default:
                return;
        }
    };
    this.getWithDirection = function(direction) {
        switch (this.order) {
            case 0:
                return this.order0.getWithDirection(direction);
            case 1:
                return this.order1.getWithDirection(direction);
            case 2:
                return this.order2.getWithDirection(direction);
            case 3:
                return this.order3.getWithDirection(direction);
            default:
                return null;
        }
    };
};