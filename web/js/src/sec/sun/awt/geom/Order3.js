var sec=sec || {};
sec.sun=sec.sun || {};
sec.sun.awt=sec.sun.awt || {};
sec.sun.awt.geom=sec.sun.awt.geom || {};
sec.sun.awt.geom.Order3=function()
{
    this.x0 = 0;
    this.y0 = 0;
    this.cx0 = 0;
    this.cy0 = 0;
    this.cx1 = 0;
    this.cy1 = 0;
    this.x1 = 0;
    this.y1 = 0;
    this.xmin = 0;
    this.xmax = 0;
    this.xcoeff0 = 0;
    this.xcoeff1 = 0;
    this.xcoeff2 = 0;
    this.xcoeff3 = 0;
    this.ycoeff0 = 0;
    this.ycoeff1 = 0;
    this.ycoeff2 = 0;
    this.ycoeff3 = 0;
    this.direction = -1;
    this.TforY1 = 0;
    this.YforT1 = 0;
    this.TforY2 = 0;
    this.YforT2 = 0;
    this.TforY3 = 0;
    this.YforT3 = 0;
    this._parent = null;
    var x0=arguments[0];
    var y0=arguments[1];
    var cx0=arguments[2];
    var cy0=arguments[3];
    var cx1=arguments[4];
    var cy1=arguments[5];
    var x1=arguments[6];
    var y1=arguments[7];
    var direction=arguments[8];
    this.direction = direction;
    if (cy0 < y0) cy0 = y0;
    if (cy1 > y1) cy1 = y1;
    this.x0 = x0;
    this.y0 = y0;
    this.cx0 = cx0;
    this.cy0 = cy0;
    this.cx1 = cx1;
    this.cy1 = cy1;
    this.x1 = x1;
    this.y1 = y1;
    this.xmin = Math.min (Math.min (x0, x1), Math.min (cx0, cx1));
    this.xmax = Math.max (Math.max (x0, x1), Math.max (cx0, cx1));
    this.xcoeff0 = x0;
    this.xcoeff1 = (cx0 - x0) * 3.0;
    this.xcoeff2 = (cx1 - cx0 - cx0 + x0) * 3.0;
    this.xcoeff3 = x1 - (cx1 - cx0) * 3.0 - x0;
    this.ycoeff0 = y0;
    this.ycoeff1 = (cy0 - y0) * 3.0;
    this.ycoeff2 = (cy1 - cy0 - cy0 + y0) * 3.0;
    this.ycoeff3 = y1 - (cy1 - cy0) * 3.0 - y0;
    this.YforT1 = this.YforT2 = this.YforT3 = y0;
    this.getOrder=function () {
        return 3;
    };
    this.getXTop=function () {
        return this.x0;
    };
    this.getYTop=function () {
        return this.y0;
    };
    this.getXBot=function () {
        return this.x1;
    };
    this.getYBot=function () {
        return this.y1;
    };
    this.getXMin=function () {
        return this.xmin;
    };
    this.getXMax=function () {
        return this.xmax;
    };
    this.getX0=function () {
        return (this.direction === 1) ? this.x0 : this.x1;
    };
    this.getY0=function () {
        return (this.direction === 1) ? this.y0 : this.y1;
    };
    this.getCX0=function () {
        return (this.direction === 1) ? this.cx0 : this.cx1;
    };
    this.getCY0=function () {
        return (this.direction === 1) ? this.cy0 : this.cy1;
    };
    this.getCX1=function () {
        return (this.direction === -1) ? this.cx0 : this.cx1;
    };
    this.getCY1=function () {
        return (this.direction === -1) ? this.cy0 : this.cy1;
    };
    this.getX1=function () {
        return (this.direction === -1) ? this.x0 : this.x1;
    };
    this.getY1=function () {
        return (this.direction === -1) ? this.y0 : this.y1;
    };
    this.TforY=function (y) {
        if (y <= this.y0) return 0;
        if (y >= this.y1) return 1;
        if (y === this.YforT1) return this.TforY1;
        if (y === this.YforT2) return this.TforY2;
        if (y === this.YforT3) return this.TforY3;
        if (this.ycoeff3 === 0.0) {
            return sec.sun.awt.geom.Order2.TforY (y, this.ycoeff0, this.ycoeff1, this.ycoeff2);
        }
        var a = this.ycoeff2 / this.ycoeff3;
        var b = this.ycoeff1 / this.ycoeff3;
        var c = (this.ycoeff0 - y) / this.ycoeff3;
        var roots = 0;
        var Q = (a * a - 3.0 * b) / 9.0;
        var R = (2.0 * a * a * a - 9.0 * a * b + 27.0 * c) / 54.0;
        var R2 = R * R;
        var Q3 = Q * Q * Q;
        var a_3 = a / 3.0;
        var t;
        if (R2 < Q3) {
            var theta = Math.acos (R / Math.sqrt (Q3));
            Q = -2.0 * Math.sqrt (Q);
            t = this.refine (a, b, c, y, Q * Math.cos (theta / 3.0) - a_3);
            if (t < 0) {
                t = this.refine (a, b, c, y, Q * Math.cos ((theta + 6.283185307179586) / 3.0) - a_3);
            }
            if (t < 0) {
                t = this.refine (a, b, c, y, Q * Math.cos ((theta - 6.283185307179586) / 3.0) - a_3);
            }
        } else {
            var neg = (R < 0.0);
            var S = Math.sqrt (R2 - Q3);
            if (neg) {
                R = -R;
            }
            var A = Math.pow (R + S, 0.3333333333333333);
            if (!neg) {
                A = -A;
            }
            var B = (A === 0.0) ? 0.0 : (Q / A);
            t = this.refine (a, b, c, y, (A + B) - a_3);
        }
        if (t < 0) {
            var t0 = 0;
            var t1 = 1;
            while (true) {
                t = (t0 + t1) / 2;
                if (t === t0 || t === t1) {
                    break;
                }
                var yt = this.YforT (t);
                if (yt < y) {
                    t0 = t;
                } else if (yt > y) {
                    t1 = t;
                } else {
                    break;
                }
            }
        }
        if (t >= 0) {
            this.TforY3 = this.TforY2;
            this.YforT3 = this.YforT2;
            this.TforY2 = this.TforY1;
            this.YforT2 = this.YforT1;
            this.TforY1 = t;
            this.YforT1 = y;
        }
        return t;
    };
    this.refine=function (a, b, c, target, t) {
        if (t < -0.1 || t > 1.1) {
            return -1;
        }
        var y = this.YforT (t);
        var t0;
        var t1;
        if (y < target) {
            t0 = t;
            t1 = 1;
        } else {
            t0 = 0;
            t1 = t;
        }
        var origt = t;
        var origy = y;
        var useslope = true;
        while (y !== target) {
            if (!useslope) {
                var t2 = (t0 + t1) / 2;
                if (t2 === t0 || t2 === t1) {
                    break;
                }
                t = t2;
            } else {
                var slope = this.dYforT (t, 1);
                if (slope === 0) {
                    useslope = false;
                    continue ;
                }
                var t2 = t + ((target - y) / slope);
                if (t2 === t || t2 <= t0 || t2 >= t1) {
                    useslope = false;
                    continue ;
                }
                t = t2;
            }
            y = this.YforT (t);
            if (y < target) {
                t0 = t;
            } else if (y > target) {
                t1 = t;
            } else {
                break;
            }
        }
        var verbose = false;
        if (false && t >= 0 && t <= 1) {
            y = this.YforT (t);
            var tdiff = sec.sun.awt.geom.Curve.diffbits (t, origt);
            var ydiff = sec.sun.awt.geom.Curve.diffbits (y, origy);
            var yerr = sec.sun.awt.geom.Curve.diffbits (y, target);
            if (yerr > 0 || (verbose && tdiff > 0)) {
                System.out.println ("target was y = " + target);
                System.out.println ("original was y = " + origy + ", t = " + origt);
                System.out.println ("final was y = " + y + ", t = " + t);
                System.out.println ("t diff is " + tdiff);
                System.out.println ("y diff is " + ydiff);
                System.out.println ("y error is " + yerr);
                var tlow = sec.sun.awt.geom.Curve.prev (t);
                var ylow = this.YforT (tlow);
                var thi = sec.sun.awt.geom.Curve.next (t);
                var yhi = this.YforT (thi);
                if (Math.abs (target - ylow) < Math.abs (target - y) || Math.abs (target - yhi) < Math.abs (target - y)) {
                    System.out.println ("adjacent y's = [" + ylow + ", " + yhi + "]");
                }
            }
        }
        return (t > 1) ? -1 : t;
    };
    this.XforY=function (y) {
        if (y <= this.y0) {
            return this.x0;
        }
        if (y >= this.y1) {
            return this.x1;
        }
        return this.XforT (this.TforY (y));
    };
    this.XforT=function (t) {
        return (((this.xcoeff3 * t) + this.xcoeff2) * t + this.xcoeff1) * t + this.xcoeff0;
    };
    this.YforT=function (t) {
        return (((this.ycoeff3 * t) + this.ycoeff2) * t + this.ycoeff1) * t + this.ycoeff0;
    };
    this.dXforT=function (t, deriv) {
        switch (deriv) {
            case 0:
                return (((this.xcoeff3 * t) + this.xcoeff2) * t + this.xcoeff1) * t + this.xcoeff0;
            case 1:
                return ((3 * this.xcoeff3 * t) + 2 * this.xcoeff2) * t + this.xcoeff1;
            case 2:
                return (6 * this.xcoeff3 * t) + 2 * this.xcoeff2;
            case 3:
                return 6 * this.xcoeff3;
            default:
                return 0;
        }
    };
    this.dYforT=function (t, deriv) {
        switch (deriv) {
            case 0:
                return (((this.ycoeff3 * t) + this.ycoeff2) * t + this.ycoeff1) * t + this.ycoeff0;
            case 1:
                return ((3 * this.ycoeff3 * t) + 2 * this.ycoeff2) * t + this.ycoeff1;
            case 2:
                return (6 * this.ycoeff3 * t) + 2 * this.ycoeff2;
            case 3:
                return 6 * this.ycoeff3;
            default:
                return 0;
        }
    };
    this.nextVertical=function (t0, t1) {
        var eqn = [this.xcoeff1, 2 * this.xcoeff2, 3 * this.xcoeff3];
        var numroots = sec.sun.awt.geom.Curve.solveQuadratic (eqn, eqn);
        for (var i = 0; i < numroots; i++) {
            if (eqn[i] > t0 && eqn[i] < t1) {
                t1 = eqn[i];
            }
        }
        return t1;
    };
    this.enlarge=function (r) {
        r.add (this.x0, this.y0);
        var eqn = [this.xcoeff1, 2 * this.xcoeff2, 3 * this.xcoeff3];
        var numroots = sec.sun.awt.geom.Curve.solveQuadratic (eqn, eqn);
        for (var i = 0; i < numroots; i++) {
            var t = eqn[i];
            if (t > 0 && t < 1) {
                r.add (this.XforT (t), this.YforT (t));
            }
        }
        r.add (this.x1, this.y1);
    };
    this.getWithDirection=function (direction) {
        return (this.direction === direction ? this : this.getReversedCurve ());
    };
    this.getSubCurve=function (ystart, yend, dir) {
        if (ystart <= this.y0 && yend >= this.y1) {
            return this.getWithDirection (dir);
        }
        var eqn =  Clazz.newArray (14, 0);
        var t0;
        var t1;
        t0 = this.TforY (ystart);
        t1 = this.TforY (yend);
        eqn[0] = this.x0;
        eqn[1] = this.y0;
        eqn[2] = this.cx0;
        eqn[3] = this.cy0;
        eqn[4] = this.cx1;
        eqn[5] = this.cy1;
        eqn[6] = this.x1;
        eqn[7] = this.y1;
        if (t0 > t1) {
            var t = t0;
            t0 = t1;
            t1 = t;
        }
        if (t1 < 1) {
            sec.sun.awt.geom.Order3.split (eqn, 0, t1);
        }
        var i;
        if (t0 <= 0) {
            i = 0;
        } else {
            sec.sun.awt.geom.Order3.split (eqn, 0, t0 / t1);
            i = 6;
        }
        return  new sec.sun.awt.geom.Order3 (eqn[i + 0], ystart, eqn[i + 2], eqn[i + 3], eqn[i + 4], eqn[i + 5], eqn[i + 6], yend, dir);
    };
    this.getReversedCurve=function () {
        return  new sec.sun.awt.geom.Order3 (this.x0, this.y0, this.cx0, this.cy0, this.cx1, this.cy1, this.x1, this.y1, -this.direction);
    };
    this.getSegment=function (coords) {
        if (this.direction === 1) {
            coords[0] = this.cx0;
            coords[1] = this.cy0;
            coords[2] = this.cx1;
            coords[3] = this.cy1;
            coords[4] = this.x1;
            coords[5] = this.y1;
        } else {
            coords[0] = this.cx1;
            coords[1] = this.cy1;
            coords[2] = this.cx0;
            coords[3] = this.cy0;
            coords[4] = this.x0;
            coords[5] = this.y0;
        }
        return 3;
    };
    this.controlPointString=function () {
        return (("(" + sec.sun.awt.geom.Curve.round (this.getCX0 ()) + ", " + sec.sun.awt.geom.Curve.round (this.getCY0 ()) + "), ") + ("(" + sec.sun.awt.geom.Curve.round (this.getCX1 ()) + ", " + sec.sun.awt.geom.Curve.round (this.getCY1 ()) + "), "));
    };
    this.setParent=function (parent) {
        this._parent = parent;
    };
    this.getParent=function () {
        return this._parent;
    };
};

sec.sun.awt.geom.Order3.insert=function (curves, tmp, x0, y0, cx0, cy0, cx1, cy1, x1, y1, direction) {
    var numparams = sec.sun.awt.geom.Order3.getHorizontalParams (y0, cy0, cy1, y1, tmp);
    if (numparams === 0) {
        sec.sun.awt.geom.Order3.addInstance (curves, x0, y0, cx0, cy0, cx1, cy1, x1, y1, direction);
        return ;
    }
    tmp[3] = x0;
    tmp[4] = y0;
    tmp[5] = cx0;
    tmp[6] = cy0;
    tmp[7] = cx1;
    tmp[8] = cy1;
    tmp[9] = x1;
    tmp[10] = y1;
    var t = tmp[0];
    if (numparams > 1 && t > tmp[1]) {
        tmp[0] = tmp[1];
        tmp[1] = t;
        t = tmp[0];
    }
    sec.sun.awt.geom.Order3.split (tmp, 3, t);
    if (numparams > 1) {
        t = (tmp[1] - t) / (1 - t);
        sec.sun.awt.geom.Order3.split (tmp, 9, t);
    }
    var index = 3;
    if (direction === -1) {
        index += numparams * 6;
    }while (numparams >= 0) {
        sec.sun.awt.geom.Order3.addInstance (curves, tmp[index + 0], tmp[index + 1], tmp[index + 2], tmp[index + 3], tmp[index + 4], tmp[index + 5], tmp[index + 6], tmp[index + 7], direction);
        numparams--;
        if (direction === 1) {
            index += 6;
        } else {
            index -= 6;
        }
    }
};
sec.sun.awt.geom.Order3.addInstance=  function (curves, x0, y0, cx0, cy0, cx1, cy1, x1, y1, direction) {
    if (y0 > y1) {
        curves.add ( new sec.sun.awt.geom.Order3 (x1, y1, cx1, cy1, cx0, cy0, x0, y0, -direction));
    } else if (y1 > y0) {
        curves.add ( new sec.sun.awt.geom.Order3 (x0, y0, cx0, cy0, cx1, cy1, x1, y1, direction));
    }
};
sec.sun.awt.geom.Order3.getHorizontalParams = function (c0, cp0, cp1, c1, ret) 
{
    if (c0 <= cp0 && cp0 <= cp1 && cp1 <= c1) 
    {
        return 0;
    }
    c1 -= cp1;
    cp1 -= cp0;
    cp0 -= c0;
    ret[0] = cp0;
    ret[1] = (cp1 - cp0) * 2;
    ret[2] = (c1 - cp1 - cp1 + cp0);
    var numroots = sec.sun.awt.geom.Curve.solveQuadratic (ret, ret);
    var j = 0;
    for (var i = 0; i < numroots; i++) {
        var t = ret[i];
        if (t > 0 && t < 1) {
            if (j < i) {
                ret[j] = t;
            }
            j++;
        }
    }
    return j;
};
sec.sun.awt.geom.Order3.split = function (coords, pos, t) {
    var x0;
    var y0;
    var cx0;
    var cy0;
    var cx1;
    var cy1;
    var x1;
    var y1;
    coords[pos + 12] = x1 = coords[pos + 6];
    coords[pos + 13] = y1 = coords[pos + 7];
    cx1 = coords[pos + 4];
    cy1 = coords[pos + 5];
    x1 = cx1 + (x1 - cx1) * t;
    y1 = cy1 + (y1 - cy1) * t;
    x0 = coords[pos + 0];
    y0 = coords[pos + 1];
    cx0 = coords[pos + 2];
    cy0 = coords[pos + 3];
    x0 = x0 + (cx0 - x0) * t;
    y0 = y0 + (cy0 - y0) * t;
    cx0 = cx0 + (cx1 - cx0) * t;
    cy0 = cy0 + (cy1 - cy0) * t;
    cx1 = cx0 + (x1 - cx0) * t;
    cy1 = cy0 + (y1 - cy0) * t;
    cx0 = x0 + (cx0 - x0) * t;
    cy0 = y0 + (cy0 - y0) * t;
    coords[pos + 2] = x0;
    coords[pos + 3] = y0;
    coords[pos + 4] = cx0;
    coords[pos + 5] = cy0;
    coords[pos + 6] = cx0 + (cx1 - cx0) * t;
    coords[pos + 7] = cy0 + (cy1 - cy0) * t;
    coords[pos + 8] = cx1;
    coords[pos + 9] = cy1;
    coords[pos + 10] = x1;
    coords[pos + 11] = y1;
};
