var sec=sec || {};
sec.sun=sec.sun || {};
sec.sun.awt=sec.sun.awt || {};
sec.sun.awt.geom=sec.sun.awt.geom || {};
sec.sun.awt.geom.Order2=function()
{
    this.x0 = 0;
    this.y0 = 0;
    this.cx0 = 0;
    this.cy0 = 0;
    this.x1 = 0;
    this.y1 = 0;
    this.xmin = 0;
    this.xmax = 0;
    this.xcoeff0 = 0;
    this.xcoeff1 = 0;
    this.xcoeff2 = 0;
    this.ycoeff0 = 0;
    this.ycoeff1 = 0;
    this.ycoeff2 = 0;
    this.direction = -1;
    this._parent = null;
    var x0=arguments[0];
    var y0=arguments[1];
    var cx0=arguments[2];
    var cy0=arguments[3];
    var x1=arguments[4];
    var y1=arguments[5];
    var direction=arguments[6];
    this.direction = direction;
    if (cy0 < y0) {
        cy0 = y0;
    } else if (cy0 > y1) {
        cy0 = y1;
    }
    this.x0 = x0;
    this.y0 = y0;
    this.cx0 = cx0;
    this.cy0 = cy0;
    this.x1 = x1;
    this.y1 = y1;
    this.xmin = Math.min (Math.min (x0, x1), cx0);
    this.xmax = Math.max (Math.max (x0, x1), cx0);
    this.xcoeff0 = x0;
    this.xcoeff1 = cx0 + cx0 - x0 - x0;
    this.xcoeff2 = x0 - cx0 - cx0 + x1;
    this.ycoeff0 = y0;
    this.ycoeff1 = cy0 + cy0 - y0 - y0;
    this.ycoeff2 = y0 - cy0 - cy0 + y1;
    this.getOrder=function () {
        return 2;
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
        return this.cx0;
    };
    this.getCY0=function () {
        return this.cy0;
    };
    this.getx1=function () {
        return (this.direction === -1) ? this.x0 : this.x1;
    };
    this.getY1=function () {
        return (this.direction === -1) ? this.y0 : this.y1;
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
    this.TforY=function (y) {
        if (y <= this.y0) {
            return 0;
        }
        if (y >= this.y1) {
            return 1;
        }
        return sec.sun.awt.geom.Order2.TforY (y, this.ycoeff0, this.ycoeff1, this.ycoeff2);
    };
    this.XforT=function (t) {
        return (this.xcoeff2 * t + this.xcoeff1) * t + this.xcoeff0;
    };
    this.YforT=function (t) {
        return (this.ycoeff2 * t + this.ycoeff1) * t + this.ycoeff0;
    };
    this.dXforT=function (t, deriv) {
        switch (deriv) {
            case 0:
                return (this.xcoeff2 * t + this.xcoeff1) * t + this.xcoeff0;
            case 1:
                return 2 * this.xcoeff2 * t + this.xcoeff1;
            case 2:
                return 2 * this.xcoeff2;
            default:
                return 0;
        }
    };
    this.dYforT=function (t, deriv) {
        switch (deriv) {
            case 0:
                return (this.ycoeff2 * t + this.ycoeff1) * t + this.ycoeff0;
            case 1:
                return 2 * this.ycoeff2 * t + this.ycoeff1;
            case 2:
                return 2 * this.ycoeff2;
            default:
                return 0;
        }
    };
    this.nextVertical=function (t0, t1) {
        var t = -this.xcoeff1 / (2 * this.xcoeff2);
        if (t > t0 && t < t1) {
            return t;
        }
        return t1;
    };
    this.enlarge=function (r) {
        r.add (this.x0, this.y0);
        var t = -this.xcoeff1 / (2 * this.xcoeff2);
        if (t > 0 && t < 1) {
            r.add (this.XforT (t), this.YforT (t));
        }
        r.add (this.x1, this.y1);
    };
    this.getWithDirection=function (direction) {
        return (this.direction === direction ? this : this.getReversedCurve ());
    };
    this.getSubCurve=function (ystart, yend, dir) {
        var t0;
        var t1;
        if (ystart <= this.y0) {
            if (yend >= this.y1) {
                return this.getWithDirection (dir);
            }
            t0 = 0;
        } else {
            t0 = sec.sun.awt.geom.Order2.TforY (ystart, this.ycoeff0, this.ycoeff1, this.ycoeff2);
        }
        if (yend >= this.y1) {
            t1 = 1;
        } else {
            t1 = sec.sun.awt.geom.Order2.TforY (yend, this.ycoeff0, this.ycoeff1, this.ycoeff2);
        }
        var eqn =  Clazz.newArray (10, 0);
        eqn[0] = this.x0;
        eqn[1] = this.y0;
        eqn[2] = this.cx0;
        eqn[3] = this.cy0;
        eqn[4] = this.x1;
        eqn[5] = this.y1;
        if (t1 < 1) {
            sec.sun.awt.geom.Order2.split (eqn, 0, t1);
        }
        var i;
        if (t0 <= 0) {
            i = 0;
        } else {
            sec.sun.awt.geom.Order2.split (eqn, 0, t0 / t1);
            i = 4;
        }
        return  new sec.sun.awt.geom.Order2 (eqn[i + 0], ystart, eqn[i + 2], eqn[i + 3], eqn[i + 4], yend, dir);
    };
    this.getReversedCurve=function () {
        return  new sec.sun.awt.geom.Order2 (this.x0, this.y0, this.cx0, this.cy0, this.x1, this.y1, -this.direction);
    };
    this.getSegment=function (coords) {
        coords[0] = this.cx0;
        coords[1] = this.cy0;
        if (this.direction === 1) {
            coords[2] = this.x1;
            coords[3] = this.y1;
        } else {
            coords[2] = this.x0;
            coords[3] = this.y0;
        }
        return 2;
    };
    this.controlPointString=function () {
        return ("(" + sec.sun.awt.geom.Curve.round (this.cx0) + ", " + sec.sun.awt.geom.Curve.round (this.cy0) + "), ");
    };
    this.setParent=function (parent) {
        this._parent = parent;
    };
    this.getParent=function () {
        return this._parent;
    };
};
sec.sun.awt.geom.Order2.TforY=function (y, ycoeff0, ycoeff1, ycoeff2) {
    ycoeff0 -= y;
    if (ycoeff2 === 0.0) {
        var root = -ycoeff0 / ycoeff1;
        if (root >= 0 && root <= 1) {
            return root;
        }
    } else {
        var d = ycoeff1 * ycoeff1 - 4.0 * ycoeff2 * ycoeff0;
        if (d >= 0.0) {
            d = Math.sqrt (d);
            if (ycoeff1 < 0.0) {
                d = -d;
            }
            var q = (ycoeff1 + d) / -2.0;
            var root = q / ycoeff2;
            if (root >= 0 && root <= 1) {
                return root;
            }
            if (q !== 0.0) {
                root = ycoeff0 / q;
                if (root >= 0 && root <= 1) {
                    return root;
                }
            }
        }
    }
    var y0 = ycoeff0;
    var y1 = ycoeff0 + ycoeff1 + ycoeff2;
    return (0 < (y0 + y1) / 2) ? 0.0 : 1.0;
};

sec.sun.awt.geom.Order2.split=function (coords, pos, t) {
    var x0;
    var y0;
    var cx;
    var cy;
    var x1;
    var y1;
    coords[pos + 8] = x1 = coords[pos + 4];
    coords[pos + 9] = y1 = coords[pos + 5];
    cx = coords[pos + 2];
    cy = coords[pos + 3];
    x1 = cx + (x1 - cx) * t;
    y1 = cy + (y1 - cy) * t;
    x0 = coords[pos + 0];
    y0 = coords[pos + 1];
    x0 = x0 + (cx - x0) * t;
    y0 = y0 + (cy - y0) * t;
    cx = x0 + (x1 - x0) * t;
    cy = y0 + (y1 - y0) * t;
    coords[pos + 2] = x0;
    coords[pos + 3] = y0;
    coords[pos + 4] = cx;
    coords[pos + 5] = cy;
    coords[pos + 6] = x1;
    coords[pos + 7] = y1;
};
            
sec.sun.awt.geom.Order2.getHorizontalParams=function (c0, cp, c1, ret) {
    if (c0 <= cp && cp <= c1) {
        return 0;
    }
    c0 -= cp;
    c1 -= cp;
    var denom = c0 + c1;
    if (denom === 0) {
        return 0;
    }
    var t = c0 / denom;
    if (t <= 0 || t >= 1) {
        return 0;
    }
    ret[0] = t;
    return 1;
};
            
sec.sun.awt.geom.Order2.addInstance=function (curves, x0, y0, cx0, cy0, x1, y1, direction) {
    if (y0 > y1) {
        curves.add ( new sec.sun.awt.geom.Order2 (x1, y1, cx0, cy0, x0, y0, -direction));
    } else if (y1 > y0) {
        curves.add ( new sec.sun.awt.geom.Order2 (x0, y0, cx0, cy0, x1, y1, direction));
    }
};

sec.sun.awt.geom.Order2.insert=function (curves, tmp, x0, y0, cx0, cy0, x1, y1, direction) {
    var numparams = sec.sun.awt.geom.Order2.getHorizontalParams (y0, cy0, y1, tmp);
    if (numparams === 0) {
        sec.sun.awt.geom.Order2.addInstance (curves, x0, y0, cx0, cy0, x1, y1, direction);
        return ;
    }
    var t = tmp[0];
    tmp[0] = x0;
    tmp[1] = y0;
    tmp[2] = cx0;
    tmp[3] = cy0;
    tmp[4] = x1;
    tmp[5] = y1;
    sec.sun.awt.geom.Order2.split (tmp, 0, t);
    var i0 = (direction === 1) ? 0 : 4;
    var i1 = 4 - i0;
    sec.sun.awt.geom.Order2.addInstance (curves, tmp[i0], tmp[i0 + 1], tmp[i0 + 2], tmp[i0 + 3], tmp[i0 + 4], tmp[i0 + 5], direction);
    sec.sun.awt.geom.Order2.addInstance (curves, tmp[i1], tmp[i1 + 1], tmp[i1 + 2], tmp[i1 + 3], tmp[i1 + 4], tmp[i1 + 5], direction);
};
