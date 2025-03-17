var sec = sec || {};
sec.sun = sec.sun || {};
sec.sun.awt = sec.sun.awt || {};
sec.sun.awt.geom = sec.sun.awt.geom || {};
sec.sun.awt.geom.Curve = function()
{
};
sec.sun.awt.geom.Curve.insertMove = function(curves, x, y) {
    curves.add(new sec.sun.awt.geom.Order0(x, y));
};
sec.sun.awt.geom.Curve.insertLine = function(curves, x0, y0, x1, y1) {
    if (y0 === y1)
    {
        return;
    }
    else if (y0 < y1)
    {
        curves.add(new sec.sun.awt.geom.Order1(x0, y0, x1, y1, 1));
    }
    else if (y0 > y1)
    {
        curves.add(new sec.sun.awt.geom.Order1(x1, y1, x0, y0, -1));
    }
};
sec.sun.awt.geom.Curve.insertQuad = function(curves, x0, y0, coords) {
    var y1 = coords[3];
    if (y0 > y1) {
        sec.sun.awt.geom.Order2.insert(curves, coords, coords[2], y1, coords[0], coords[1], x0, y0, -1);
    } else if (y0 === y1 && y0 === coords[1]) {
        return;
    } else {
        sec.sun.awt.geom.Order2.insert(curves, coords, x0, y0, coords[0], coords[1], coords[2], y1, 1);
    }
};
sec.sun.awt.geom.Curve.insertCubic = function(curves, x0, y0, coords) {
    var y1 = coords[5];
    if (y0 > y1) {
        sec.sun.awt.geom.Order3.insert(curves, coords, coords[4], y1, coords[2], coords[3], coords[0], coords[1], x0, y0, -1);
    } else if (y0 === y1 && y0 === coords[1] && y0 === coords[3]) {
        return;
    } else {
        sec.sun.awt.geom.Order3.insert(curves, coords, x0, y0, coords[0], coords[1], coords[2], coords[3], coords[4], y1, 1);
    }
};
sec.sun.awt.geom.Curve.pointCrossingsForPath = function(pi, px, py) {
    if (pi.isDone()) {
        return 0;
    }
    var coords = Clazz.newArray(6, 0);
    if (pi.currentSegment(coords) !== 0) {
        return -1;
    }
    pi.next();
    var movx = coords[0];
    var movy = coords[1];
    var curx = movx;
    var cury = movy;
    var endx;
    var endy;
    var crossings = 0;
    while (!pi.isDone()) {
        switch (pi.currentSegment(coords)) {
            case 0:
                if (cury !== movy) {
                    crossings += sec.sun.awt.geom.Curve.pointCrossingsForLine(px, py, curx, cury, movx, movy);
                }
                movx = curx = coords[0];
                movy = cury = coords[1];
                break;
            case 1:
                endx = coords[0];
                endy = coords[1];
                crossings += sec.sun.awt.geom.Curve.pointCrossingsForLine(px, py, curx, cury, endx, endy);
                curx = endx;
                cury = endy;
                break;
            case 2:
                endx = coords[2];
                endy = coords[3];
                crossings += sec.sun.awt.geom.Curve.pointCrossingsForQuad(px, py, curx, cury, coords[0], coords[1], endx, endy, 0);
                curx = endx;
                cury = endy;
                break;
            case 3:
                endx = coords[4];
                endy = coords[5];
                crossings += sec.sun.awt.geom.Curve.pointCrossingsForCubic(px, py, curx, cury, coords[0], coords[1], coords[2], coords[3], endx, endy, 0);
                curx = endx;
                cury = endy;
                break;
            case 4:
                if (cury !== movy) {
                    crossings += sec.sun.awt.geom.Curve.pointCrossingsForLine(px, py, curx, cury, movx, movy);
                }
                curx = movx;
                cury = movy;
                break;
        }
        pi.next();
    }
    if (cury !== movy) {
        crossings += sec.sun.awt.geom.Curve.pointCrossingsForLine(px, py, curx, cury, movx, movy);
    }
    return crossings;
};
sec.sun.awt.geom.Curve.pointCrossingsForLine = function(px, py, x0, y0, x1, y1) {
    if (py < y0 && py < y1)
        return 0;
    if (py >= y0 && py >= y1)
        return 0;
    if (px >= x0 && px >= x1)
        return 0;
    if (px < x0 && px < x1)
        return (y0 < y1) ? 1 : -1;
    var xintercept = x0 + (py - y0) * (x1 - x0) / (y1 - y0);
    if (px >= xintercept)
        return 0;
    return (y0 < y1) ? 1 : -1;
};
sec.sun.awt.geom.Curve.pointCrossingsForQuad = function(px, py, x0, y0, xc, yc, x1, y1, level) {
    if (py < y0 && py < yc && py < y1)
        return 0;
    if (py >= y0 && py >= yc && py >= y1)
        return 0;
    if (px >= x0 && px >= xc && px >= x1)
        return 0;
    if (px < x0 && px < xc && px < x1) {
        if (py >= y0) {
            if (py < y1)
                return 1;
        } else {
            if (py >= y1)
                return -1;
        }
        return 0;
    }
    if (level > 52)
        return sec.sun.awt.geom.Curve.pointCrossingsForLine(px, py, x0, y0, x1, y1);
    var x0c = (x0 + xc) / 2;
    var y0c = (y0 + yc) / 2;
    var xc1 = (xc + x1) / 2;
    var yc1 = (yc + y1) / 2;
    xc = (x0c + xc1) / 2;
    yc = (y0c + yc1) / 2;
    if (Double.isNaN(xc) || Double.isNaN(yc)) {
        return 0;
    }
    return (sec.sun.awt.geom.Curve.pointCrossingsForQuad(px, py, x0, y0, x0c, y0c, xc, yc, level + 1) + sec.sun.awt.geom.Curve.pointCrossingsForQuad(px, py, xc, yc, xc1, yc1, x1, y1, level + 1));
};
sec.sun.awt.geom.Curve.pointCrossingsForCubic = function(px, py, x0, y0, xc0, yc0, xc1, yc1, x1, y1, level) {
    if (py < y0 && py < yc0 && py < yc1 && py < y1)
        return 0;
    if (py >= y0 && py >= yc0 && py >= yc1 && py >= y1)
        return 0;
    if (px >= x0 && px >= xc0 && px >= xc1 && px >= x1)
        return 0;
    if (px < x0 && px < xc0 && px < xc1 && px < x1) {
        if (py >= y0) {
            if (py < y1)
                return 1;
        } else {
            if (py >= y1)
                return -1;
        }
        return 0;
    }
    if (level > 52)
        return sec.sun.awt.geom.Curve.pointCrossingsForLine(px, py, x0, y0, x1, y1);
    var xmid = (xc0 + xc1) / 2;
    var ymid = (yc0 + yc1) / 2;
    xc0 = (x0 + xc0) / 2;
    yc0 = (y0 + yc0) / 2;
    xc1 = (xc1 + x1) / 2;
    yc1 = (yc1 + y1) / 2;
    var xc0m = (xc0 + xmid) / 2;
    var yc0m = (yc0 + ymid) / 2;
    var xmc1 = (xmid + xc1) / 2;
    var ymc1 = (ymid + yc1) / 2;
    xmid = (xc0m + xmc1) / 2;
    ymid = (yc0m + ymc1) / 2;
    if (Double.isNaN(xmid) || Double.isNaN(ymid)) {
        return 0;
    }
    return (sec.sun.awt.geom.Curve.pointCrossingsForCubic(px, py, x0, y0, xc0, yc0, xc0m, yc0m, xmid, ymid, level + 1) + sec.sun.awt.geom.Curve.pointCrossingsForCubic(px, py, xmid, ymid, xmc1, ymc1, xc1, yc1, x1, y1, level + 1));
};
sec.sun.awt.geom.Curve.rectCrossingsforPath = function(pi, rxmin, rymin, rxmax, rymax) {
    if (rxmax <= rxmin || rymax <= rymin) {
        return 0;
    }
    if (pi.isDone()) {
        return 0;
    }
    var coords = Clazz.newArray(6, 0);
    if (pi.currentSegment(coords) !== 0) {
        return -1;
    }
    pi.next();
    var curx;
    var cury;
    var movx;
    var movy;
    var endx;
    var endy;
    curx = movx = coords[0];
    cury = movy = coords[1];
    var crossings = 0;
    while (crossings !== -2147483648 && !pi.isDone()) {
        switch (pi.currentSegment(coords)) {
            case 0:
                if (curx !== movx || cury !== movy) {
                    crossings = sec.sun.awt.geom.Curve.rectCrossingsForLine(crossings, rxmin, rymin, rxmax, rymax, curx, cury, movx, movy);
                }
                movx = curx = coords[0];
                movy = cury = coords[1];
                break;
            case 1:
                endx = coords[0];
                endy = coords[1];
                crossings = sec.sun.awt.geom.Curve.rectCrossingsForLine(crossings, rxmin, rymin, rxmax, rymax, curx, cury, endx, endy);
                curx = endx;
                cury = endy;
                break;
            case 2:
                endx = coords[2];
                endy = coords[3];
                crossings = sec.sun.awt.geom.Curve.rectCrossingsForQuad(crossings, rxmin, rymin, rxmax, rymax, curx, cury, coords[0], coords[1], endx, endy, 0);
                curx = endx;
                cury = endy;
                break;
            case 3:
                endx = coords[4];
                endy = coords[5];
                crossings = sec.sun.awt.geom.Curve.rectCrossingsForCubic(crossings, rxmin, rymin, rxmax, rymax, curx, cury, coords[0], coords[1], coords[2], coords[3], endx, endy, 0);
                curx = endx;
                cury = endy;
                break;
            case 4:
                if (curx !== movx || cury !== movy) {
                    crossings = sec.sun.awt.geom.Curve.rectCrossingsForLine(crossings, rxmin, rymin, rxmax, rymax, curx, cury, movx, movy);
                }
                curx = movx;
                cury = movy;
                break;
        }
        pi.next();
    }
    if (crossings !== -2147483648 && (curx !== movx || cury !== movy)) {
        crossings = sec.sun.awt.geom.Curve.rectCrossingsForLine(crossings, rxmin, rymin, rxmax, rymax, curx, cury, movx, movy);
    }
    return crossings;
};
sec.sun.awt.geom.Curve.rectCrossingsForLine = function(crossings, rxmin, rymin, rxmax, rymax, x0, y0, x1, y1) {
    if (y0 >= rymax && y1 >= rymax)
        return crossings;
    if (y0 <= rymin && y1 <= rymin)
        return crossings;
    if (x0 <= rxmin && x1 <= rxmin)
        return crossings;
    if (x0 >= rxmax && x1 >= rxmax) {
        if (y0 < y1) {
            if (y0 <= rymin)
                crossings++;
            if (y1 >= rymax)
                crossings++;
        } else if (y1 < y0) {
            if (y1 <= rymin)
                crossings--;
            if (y0 >= rymax)
                crossings--;
        }
        return crossings;
    }
    if ((x0 > rxmin && x0 < rxmax && y0 > rymin && y0 < rymax) || (x1 > rxmin && x1 < rxmax && y1 > rymin && y1 < rymax)) {
        return -2147483648;
    }
    var xi0 = x0;
    if (y0 < rymin) {
        xi0 += ((rymin - y0) * (x1 - x0) / (y1 - y0));
    } else if (y0 > rymax) {
        xi0 += ((rymax - y0) * (x1 - x0) / (y1 - y0));
    }
    var xi1 = x1;
    if (y1 < rymin) {
        xi1 += ((rymin - y1) * (x0 - x1) / (y0 - y1));
    } else if (y1 > rymax) {
        xi1 += ((rymax - y1) * (x0 - x1) / (y0 - y1));
    }
    if (xi0 <= rxmin && xi1 <= rxmin)
        return crossings;
    if (xi0 >= rxmax && xi1 >= rxmax) {
        if (y0 < y1) {
            if (y0 <= rymin)
                crossings++;
            if (y1 >= rymax)
                crossings++;
        } else if (y1 < y0) {
            if (y1 <= rymin)
                crossings--;
            if (y0 >= rymax)
                crossings--;
        }
        return crossings;
    }
    return -2147483648;
};
sec.sun.awt.geom.Curve.rectCrossingsForQuad = function(crossings, rxmin, rymin, rxmax, rymax, x0, y0, xc, yc, x1, y1, level) {
    if (y0 >= rymax && yc >= rymax && y1 >= rymax)
        return crossings;
    if (y0 <= rymin && yc <= rymin && y1 <= rymin)
        return crossings;
    if (x0 <= rxmin && xc <= rxmin && x1 <= rxmin)
        return crossings;
    if (x0 >= rxmax && xc >= rxmax && x1 >= rxmax) {
        if (y0 < y1) {
            if (y0 <= rymin && y1 > rymin)
                crossings++;
            if (y0 < rymax && y1 >= rymax)
                crossings++;
        } else if (y1 < y0) {
            if (y1 <= rymin && y0 > rymin)
                crossings--;
            if (y1 < rymax && y0 >= rymax)
                crossings--;
        }
        return crossings;
    }
    if ((x0 < rxmax && x0 > rxmin && y0 < rymax && y0 > rymin) || (x1 < rxmax && x1 > rxmin && y1 < rymax && y1 > rymin)) {
        return -2147483648;
    }
    if (level > 52) {
        return sec.sun.awt.geom.Curve.rectCrossingsForLine(crossings, rxmin, rymin, rxmax, rymax, x0, y0, x1, y1);
    }
    var x0c = (x0 + xc) / 2;
    var y0c = (y0 + yc) / 2;
    var xc1 = (xc + x1) / 2;
    var yc1 = (yc + y1) / 2;
    xc = (x0c + xc1) / 2;
    yc = (y0c + yc1) / 2;
    if (Double.isNaN(xc) || Double.isNaN(yc)) {
        return 0;
    }
    crossings = sec.sun.awt.geom.Curve.rectCrossingsForQuad(crossings, rxmin, rymin, rxmax, rymax, x0, y0, x0c, y0c, xc, yc, level + 1);
    if (crossings !== -2147483648) {
        crossings = sec.sun.awt.geom.Curve.rectCrossingsForQuad(crossings, rxmin, rymin, rxmax, rymax, xc, yc, xc1, yc1, x1, y1, level + 1);
    }
    return crossings;
};
sec.sun.awt.geom.Curve.rectCrossingsForCubic = function(crossings, rxmin, rymin, rxmax, rymax, x0, y0, xc0, yc0, xc1, yc1, x1, y1, level) {
    if (y0 >= rymax && yc0 >= rymax && yc1 >= rymax && y1 >= rymax) {
        return crossings;
    }
    if (y0 <= rymin && yc0 <= rymin && yc1 <= rymin && y1 <= rymin) {
        return crossings;
    }
    if (x0 <= rxmin && xc0 <= rxmin && xc1 <= rxmin && x1 <= rxmin) {
        return crossings;
    }
    if (x0 >= rxmax && xc0 >= rxmax && xc1 >= rxmax && x1 >= rxmax) {
        if (y0 < y1) {
            if (y0 <= rymin && y1 > rymin)
                crossings++;
            if (y0 < rymax && y1 >= rymax)
                crossings++;
        } else if (y1 < y0) {
            if (y1 <= rymin && y0 > rymin)
                crossings--;
            if (y1 < rymax && y0 >= rymax)
                crossings--;
        }
        return crossings;
    }
    if ((x0 > rxmin && x0 < rxmax && y0 > rymin && y0 < rymax) || (x1 > rxmin && x1 < rxmax && y1 > rymin && y1 < rymax)) {
        return -2147483648;
    }
    if (level > 52) {
        return sec.sun.awt.geom.Curve.rectCrossingsForLine(crossings, rxmin, rymin, rxmax, rymax, x0, y0, x1, y1);
    }
    var xmid = (xc0 + xc1) / 2;
    var ymid = (yc0 + yc1) / 2;
    xc0 = (x0 + xc0) / 2;
    yc0 = (y0 + yc0) / 2;
    xc1 = (xc1 + x1) / 2;
    yc1 = (yc1 + y1) / 2;
    var xc0m = (xc0 + xmid) / 2;
    var yc0m = (yc0 + ymid) / 2;
    var xmc1 = (xmid + xc1) / 2;
    var ymc1 = (ymid + yc1) / 2;
    xmid = (xc0m + xmc1) / 2;
    ymid = (yc0m + ymc1) / 2;
    if (Double.isNaN(xmid) || Double.isNaN(ymid)) {
        return 0;
    }
    crossings = sec.sun.awt.geom.Curve.rectCrossingsForCubic(crossings, rxmin, rymin, rxmax, rymax, x0, y0, xc0, yc0, xc0m, yc0m, xmid, ymid, level + 1);
    if (crossings !== -2147483648) {
        crossings = sec.sun.awt.geom.Curve.rectCrossingsForCubic(crossings, rxmin, rymin, rxmax, rymax, xmid, ymid, xmc1, ymc1, xc1, yc1, x1, y1, level + 1);
    }
    return crossings;
};
sec.sun.awt.geom.Curve.round = function(v) {
    return v;
};

sec.sun.awt.geom.Curve.orderof = function(x1, x2) {
    if (x1 < x2) {
        return -1;
    }
    if (x1 > x2) {
        return 1;
    }
    return 0;
};
sec.sun.awt.geom.Curve.signeddifbits = function(y1, y2) {
    return (Double.doubleToLongBits(y1) - Double.doubleToLongBits(y2));
};
sec.sun.awt.geom.Curve.diffbits = function(y1, y2) {
    return Math.abs(Double.doubleToLongBits(y1) - Double.doubleToLongBits(y2));
};
sec.sun.awt.geom.Curve.prev = function(v) {
    return Double.longBitsToDouble(Double.doubleToLongBits(v) - 1);
};
sec.sun.awt.geom.Curve.next = function(v) {
    return Double.longBitsToDouble(Double.doubleToLongBits(v) + 1);
};
sec.sun.awt.geom.Curve.fairlyClose = function(v1, v2) {
    return (Math.abs(v1 - v2) < Math.max(Math.abs(v1), Math.abs(v2)) * 1E-10);
};
sec.sun.awt.geom.Curve.solveQuadratic = function(eqn, res) {
    var a = eqn[2];
    var b = eqn[1];
    var c = eqn[0];
    var roots = 0;
    if (a === 0.0) {
        if (b === 0.0) {
            return -1;
        }
        res[roots++] = -c / b;
    } else {
        var d = b * b - 4.0 * a * c;
        if (d < 0.0) {
            return 0;
        }
        d = Math.sqrt(d);
        if (b < 0.0) {
            d = -d;
        }
        var q = (b + d) / -2.0;
        res[roots++] = q / a;
        if (q !== 0.0) {
            res[roots++] = c / q;
        }
    }
    return roots;
};
sec.sun.awt.geom.Curve.INCREASING = 1;
sec.sun.awt.geom.Curve.DECREASING = -1;
sec.sun.awt.geom.Curve.RECT_INTERSECTS = 0x80000000;
sec.sun.awt.geom.Curve.TMIN = 1E-3;
