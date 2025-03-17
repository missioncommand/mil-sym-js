var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.graphics2d = armyc2.c2sd.graphics2d || {};
armyc2.c2sd.graphics2d.BasicStroke = function(width, cap, join, miterlimit, dash, dashPhase) {
    this.width = 0;
    this.join = 0;
    this.cap = 0;
    this.miterlimit = 0;
    this.dash = null;
    this.dash_phase = 0;
    if (width !== undefined)
        this.width = width;
    if (cap !== undefined)
        this.cap = cap;
    if (join !== undefined)
        this.join = join;
    if (miterlimit !== undefined)
        this.miterlimit = miterlimit;
    if (dash !== undefined)
    {
        this.dash = dash;
    }
    if (dashPhase !== undefined)
        this.dash_phase = dashPhase;
};
armyc2.c2sd.graphics2d.BasicStroke.prototype.createStrokedShape = function()
{
    var poly = null;
    if (arguments.length > 0)
        poly = arguments[0];
    else
        return null;

    var pts = poly.getPathIterator(null).getPoints();
    var j = 0;
    var gp = new armyc2.c2sd.graphics2d.GeneralPath();
    var pt = null;
    var ptsx = new Array(pts.size());
    for (j = 0; j < pts.size(); j++) {
        pt = pts.get(j);
        ptsx[j] = pt;
    }
    pts = armyc2.c2sd.graphics2d.BasicStroke.GetInteriorPoints(ptsx, pts.size(), 32214000, this.width);
    for (j = 0; j < pts.size(); j++) {
        pt = pts.get(j);
        if (j === 0)
            gp.moveTo(pt.x, pt.y);
        else
            gp.lineTo(pt.x, pt.y);
    }
    return gp;
};
armyc2.c2sd.graphics2d.BasicStroke.prototype.getLineWidth = function() {
    return this.width;
};
armyc2.c2sd.graphics2d.BasicStroke.prototype.getEndCap = function() {
    return this.cap;
};
armyc2.c2sd.graphics2d.BasicStroke.prototype.getLineJoin = function() {
    return this.join;
};
armyc2.c2sd.graphics2d.BasicStroke.prototype.getMiterLimit = function() {
    return this.miterlimit;
};
armyc2.c2sd.graphics2d.BasicStroke.prototype.getDashArray = function() {
    return this.dash;
};
armyc2.c2sd.graphics2d.BasicStroke.prototype.getDashPhase = function() {
    return this.dash_phase;
};
armyc2.c2sd.graphics2d.BasicStroke.prototype.getPathIterator = function(at) {
    return null;
};
armyc2.c2sd.graphics2d.BasicStroke.prototype.containsPt2 = function(x, y) {
    return false;
};
armyc2.c2sd.graphics2d.BasicStroke.prototype.containsRect2 = function(x, y, width, height) {
    return false;
};
armyc2.c2sd.graphics2d.BasicStroke.prototype.containsPt = function(pt) {
    return false;
};
armyc2.c2sd.graphics2d.BasicStroke.prototype.getBounds2D = function() {
    return null;
};
armyc2.c2sd.graphics2d.BasicStroke.prototype.getBounds = function() {
    return null;
};
armyc2.c2sd.graphics2d.BasicStroke.prototype.intersectsRect2 = function(x, y, w, h) {
    return false;
};
armyc2.c2sd.graphics2d.BasicStroke.prototype.intersectsRect = function(rect) {
    return false;
};
armyc2.c2sd.graphics2d.BasicStroke.GetInteriorPoints = function(pLinePoints, vblCounter, lineType, dist) {
    var j = 0;
    var index = -1;
    var pt0 = null;
    var pt1 = null;
    var pt2 = null;
    var m01 = new armyc2.c2sd.JavaLineArray.ref();
    var m12 = new armyc2.c2sd.JavaLineArray.ref();
    var m1 = new armyc2.c2sd.JavaLineArray.ref();
    var m2 = new armyc2.c2sd.JavaLineArray.ref();
    var direction = -1;
    var intersectPt = null;
    var intersectPoints = new java.util.ArrayList();
    var b01 = 0;
    var b12 = 0;
    for (j = 0; j < vblCounter; j++) {
        if (j === 0 || j === vblCounter - 1) {
            pt0 = pLinePoints[vblCounter - 2];
            pt1 = pLinePoints[0];
            pt2 = pLinePoints[1];
        } else {
            pt0 = pLinePoints[j - 1];
            pt1 = pLinePoints[j];
            pt2 = pLinePoints[j + 1];
        }
        var pt00 = null;
        var pt01 = null;
        var pt10 = null;
        var pt11 = null;
        index = j - 1;
        if (index < 0) {
            index = vblCounter - 1;
        }
        direction = armyc2.c2sd.JavaLineArray.arraysupport.GetInsideOutsideDouble2(pt0, pt1, pLinePoints, vblCounter, index, lineType);
        switch (direction) {
            case 0:
                pt00 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt0, 1, dist);
                pt01 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt1, 1, dist);
                break;
            case 1:
                pt00 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt0, 0, dist);
                pt01 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt1, 0, dist);
                break;
            case 2:
                pt00 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt0, 3, dist);
                pt01 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt1, 3, dist);
                break;
            case 3:
                pt00 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt0, 2, dist);
                pt01 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt1, 2, dist);
                break;
        }
        index = j;
        if (j === vblCounter - 1) {
            index = 0;
        }
        direction = armyc2.c2sd.JavaLineArray.arraysupport.GetInsideOutsideDouble2(pt1, pt2, pLinePoints, vblCounter, index, lineType);
        switch (direction) {
            case 0:
                pt10 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt1, pt2, pt1, 1, dist);
                pt11 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt1, pt2, pt2, 1, dist);
                break;
            case 1:
                pt10 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt1, pt2, pt1, 0, dist);
                pt11 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt1, pt2, pt2, 0, dist);
                break;
            case 2:
                pt10 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt1, pt2, pt1, 3, dist);
                pt11 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt1, pt2, pt2, 3, dist);
                break;
            case 3:
                pt10 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt1, pt2, pt1, 2, dist);
                pt11 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt1, pt2, pt2, 2, dist);
                break;
        }
        if (pt0.x === pt1.x && pt1.x === pt2.x) {
            intersectPt = new armyc2.c2sd.JavaLineArray.POINT2(pt01);
            intersectPoints.add(intersectPt);
            continue;
        }
        armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble2(pt00, pt01, m01);
        armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble2(pt10, pt11, m12);
        if (m01.value[0] === m12.value[0]) {
            intersectPt = new armyc2.c2sd.JavaLineArray.POINT2(pt01);
            intersectPoints.add(intersectPt);
            continue;
        }
        b01 = pt01.y - m01.value[0] * pt01.x;
        b12 = pt11.y - m12.value[0] * pt11.x;
        intersectPt = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueIntersectDouble2(m01.value[0], b01, m12.value[0], b12, 1, 1, 0, 0);
        intersectPoints.add(intersectPt);
    }
    return intersectPoints;
};
armyc2.c2sd.graphics2d.BasicStroke.JOIN_MITER = 0;
armyc2.c2sd.graphics2d.BasicStroke.JOIN_ROUND = 1;
armyc2.c2sd.graphics2d.BasicStroke.JOIN_BEVEL = 2;
armyc2.c2sd.graphics2d.BasicStroke.CAP_BUTT = 0;
armyc2.c2sd.graphics2d.BasicStroke.CAP_ROUND = 1;
armyc2.c2sd.graphics2d.BasicStroke.CAP_SQUARE = 2;
