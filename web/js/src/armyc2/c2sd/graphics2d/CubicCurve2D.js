var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.graphics2d = armyc2.c2sd.graphics2d || {};
armyc2.c2sd.graphics2d.CubicCurve2D = function()
{
}
armyc2.c2sd.graphics2d.CubicCurve2D.getFlatnessSq2 = function(x1, y1, ctrlx1, ctrly1, ctrlx2, ctrly2, x2, y2) {
    return Math.max(armyc2.c2sd.graphics2d.Line2D.ptSegDistSq(x1, y1, x2, y2, ctrlx1, ctrly1), armyc2.c2sd.graphics2d.Line2D.ptSegDistSq(x1, y1, x2, y2, ctrlx2, ctrly2));
};
armyc2.c2sd.graphics2d.CubicCurve2D.getFlatness = function(x1, y1, ctrlx1, ctrly1, ctrlx2, ctrly2, x2, y2) {
    return Math.sqrt(armyc2.c2sd.graphics2d.CubicCurve2D.getFlatnessSq2(x1, y1, ctrlx1, ctrly1, ctrlx2, ctrly2, x2, y2));
};
armyc2.c2sd.graphics2d.CubicCurve2D.getFlatnessSq = function(coords, offset) {
    return armyc2.c2sd.graphics2d.CubicCurve2D.getFlatnessSq2(coords[offset + 0], coords[offset + 1], coords[offset + 2], coords[offset + 3], coords[offset + 4], coords[offset + 5], coords[offset + 6], coords[offset + 7]);
};
armyc2.c2sd.graphics2d.CubicCurve2D.getFlatness2 = function(coords, offset) {
    return armyc2.c2sd.graphics2d.CubicCurve2D.getFlatness(coords[offset + 0], coords[offset + 1], coords[offset + 2], coords[offset + 3], coords[offset + 4], coords[offset + 5], coords[offset + 6], coords[offset + 7]);
};
armyc2.c2sd.graphics2d.CubicCurve2D.subdivide = function(src, srcoff, left, leftoff, right, rightoff) {
    var x1 = src[srcoff + 0];
    var y1 = src[srcoff + 1];
    var ctrlx1 = src[srcoff + 2];
    var ctrly1 = src[srcoff + 3];
    var ctrlx2 = src[srcoff + 4];
    var ctrly2 = src[srcoff + 5];
    var x2 = src[srcoff + 6];
    var y2 = src[srcoff + 7];
    if (left !== null) {
        left[leftoff + 0] = x1;
        left[leftoff + 1] = y1;
    }
    if (right !== null) {
        right[rightoff + 6] = x2;
        right[rightoff + 7] = y2;
    }
    x1 = (x1 + ctrlx1) / 2.0;
    y1 = (y1 + ctrly1) / 2.0;
    x2 = (x2 + ctrlx2) / 2.0;
    y2 = (y2 + ctrly2) / 2.0;
    var centerx = (ctrlx1 + ctrlx2) / 2.0;
    var centery = (ctrly1 + ctrly2) / 2.0;
    ctrlx1 = (x1 + centerx) / 2.0;
    ctrly1 = (y1 + centery) / 2.0;
    ctrlx2 = (x2 + centerx) / 2.0;
    ctrly2 = (y2 + centery) / 2.0;
    centerx = (ctrlx1 + ctrlx2) / 2.0;
    centery = (ctrly1 + ctrly2) / 2.0;
    if (left !== null) {
        left[leftoff + 2] = x1;
        left[leftoff + 3] = y1;
        left[leftoff + 4] = ctrlx1;
        left[leftoff + 5] = ctrly1;
        left[leftoff + 6] = centerx;
        left[leftoff + 7] = centery;
    }
    if (right !== null) {
        right[rightoff + 0] = centerx;
        right[rightoff + 1] = centery;
        right[rightoff + 2] = ctrlx2;
        right[rightoff + 3] = ctrly2;
        right[rightoff + 4] = x2;
        right[rightoff + 5] = y2;
    }
};
armyc2.c2sd.graphics2d.CubicCurve2D.solveCubic = function(eqn) {
    return armyc2.c2sd.graphics2d.CubicCurve2D.solveCubic2(eqn, eqn);
};
armyc2.c2sd.graphics2d.CubicCurve2D.solveCubic2 = function(eqn, res) {
    var d = eqn[3];
    if (d === 0.0) {
        return armyc2.c2sd.graphics2d.QuadCurve2D.solveQuadratic2(eqn, res);
    }
    var a = eqn[2] / d;
    var b = eqn[1] / d;
    var c = eqn[0] / d;
    var roots = 0;
    var Q = (a * a - 3.0 * b) / 9.0;
    var R = (2.0 * a * a * a - 9.0 * a * b + 27.0 * c) / 54.0;
    var R2 = R * R;
    var Q3 = Q * Q * Q;
    a = a / 3.0;
    if (R2 < Q3) {
        var theta = Math.acos(R / Math.sqrt(Q3));
        Q = -2.0 * Math.sqrt(Q);
        if (res === eqn) {
            eqn = Clazz.newArray(4, 0);
            System.arraycopy(res, 0, eqn, 0, 4);
        }
        res[roots++] = Q * Math.cos(theta / 3.0) - a;
        res[roots++] = Q * Math.cos((theta + 6.283185307179586) / 3.0) - a;
        res[roots++] = Q * Math.cos((theta - 6.283185307179586) / 3.0) - a;
        armyc2.c2sd.graphics2d.CubicCurve2D.fixRoots(res, eqn);
    } else {
        var neg = (R < 0.0);
        var S = Math.sqrt(R2 - Q3);
        if (neg) {
            R = -R;
        }
        var A = Math.pow(R + S, 0.3333333333333333);
        if (!neg) {
            A = -A;
        }
        var B = (A === 0.0) ? 0.0 : (Q / A);
        res[roots++] = (A + B) - a;
    }
    return roots;
};
armyc2.c2sd.graphics2d.CubicCurve2D.fixRoots = function(res, eqn) {
    var EPSILON = 1E-5;
    for (var i = 0; i < 3; i++) {
        var t = res[i];
        if (Math.abs(t) < 1.0E-5) {
            res[i] = armyc2.c2sd.graphics2d.CubicCurve2D.findZero(t, 0, eqn);
        } else if (Math.abs(t - 1) < 1.0E-5) {
            res[i] = armyc2.c2sd.graphics2d.CubicCurve2D.findZero(t, 1, eqn);
        }
    }
};
armyc2.c2sd.graphics2d.CubicCurve2D.solveEqn = function(eqn, order, t) {
    var v = eqn[order];
    while (--order >= 0) {
        v = v * t + eqn[order];
    }
    return v;
};
armyc2.c2sd.graphics2d.CubicCurve2D.findZero = function(t, target, eqn) {
    var slopeqn = [eqn[1], 2 * eqn[2], 3 * eqn[3]];
    var slope;
    var origdelta = 0;
    var origt = t;
    while (true) {
        slope = armyc2.c2sd.graphics2d.CubicCurve2D.solveEqn(slopeqn, 2, t);
        if (slope === 0) {
            return t;
        }
        var y = armyc2.c2sd.graphics2d.CubicCurve2D.solveEqn(eqn, 3, t);
        if (y === 0) {
            return t;
        }
        var delta = -(y / slope);
        if (origdelta === 0) {
            origdelta = delta;
        }
        if (t < target) {
            if (delta < 0)
                return t;
        } else if (t > target) {
            if (delta > 0)
                return t;
        } else {
            return (delta > 0 ? (target + 4.9E-324) : (target - 4.9E-324));
        }
        var newt = t + delta;
        if (t === newt) {
            return t;
        }
        if (delta * origdelta < 0) {
            var tag = (origt < t ? armyc2.c2sd.graphics2d.CubicCurve2D.getTag(target, origt, t) : armyc2.c2sd.graphics2d.CubicCurve2D.getTag(target, t, origt));
            if (tag !== 0) {
                return (origt + t) / 2;
            }
            t = target;
        } else {
            t = newt;
        }
    }
};
armyc2.c2sd.graphics2d.CubicCurve2D.getTag = function(coord, low, high) {
    if (coord <= low) {
        return (coord < low ? -2 : -1);
    }
    if (coord >= high) {
        return (coord > high ? 2 : 1);
    }
    return 0;
};
armyc2.c2sd.graphics2d.CubicCurve2D.BELOW = -2;
armyc2.c2sd.graphics2d.CubicCurve2D.LOWEDGE = -1;
armyc2.c2sd.graphics2d.CubicCurve2D.INSIDE = 0;
armyc2.c2sd.graphics2d.CubicCurve2D.HIGHEDGE = 1;
armyc2.c2sd.graphics2d.CubicCurve2D.ABOVE = 2;