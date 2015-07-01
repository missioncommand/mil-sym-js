var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.graphics2d = armyc2.c2sd.graphics2d || {};
armyc2.c2sd.graphics2d.PathIterator = function() {
    this._currentSeg = 0;
    this._pts = new java.util.ArrayList();

    this.reset = function() {
        this._currentSeg = 0;
    };
    this.setPathIterator = function(pts) {
        this._currentSeg = 0;
        this._pts = pts;
    };
};
armyc2.c2sd.graphics2d.PathIterator.prototype.getPoints = function() {
    return this._pts;
};
armyc2.c2sd.graphics2d.PathIterator.prototype.currentSegment = function(coords) {
    coords[0] = this._pts.get(this._currentSeg).x;
    coords[1] = this._pts.get(this._currentSeg).y;
    return this._pts.get(this._currentSeg).style;
};
armyc2.c2sd.graphics2d.PathIterator.prototype.getWindingRule = function() {
    return 1;
};
armyc2.c2sd.graphics2d.PathIterator.prototype.isDone = function() {
    if (this._currentSeg === this._pts.size())
        return true;
    return false;
};
armyc2.c2sd.graphics2d.PathIterator.prototype.next = function() {
    this._currentSeg++;
};
armyc2.c2sd.graphics2d.PathIterator.prototype.moveTo = function(x, y) {
    if (this._pts.size() > 0)
    {
        var lastPt = this._pts.get(this._pts.size() - 1);
        if (lastPt.x === x && lastPt.y === y)
            return;
    }
    this._pts.add(new armyc2.c2sd.JavaLineArray.POINT2(x, y, 0));
};
armyc2.c2sd.graphics2d.PathIterator.prototype.lineTo = function(x, y) {
    if (this._pts.size() > 0)
    {
        var lastPt = this._pts.get(this._pts.size() - 1);
        if (lastPt.x === x && lastPt.y === y)
            return;
    }
    this._pts.add(new armyc2.c2sd.JavaLineArray.POINT2(x, y, 1));
};
armyc2.c2sd.graphics2d.PathIterator.prototype.cubicTo = function(x1, y1, x2, y2, x3, y3) {
    this._pts.add(new armyc2.c2sd.JavaLineArray.POINT2(x1, y1, 3));
    this._pts.add(new armyc2.c2sd.JavaLineArray.POINT2(x2, y2, 3));
    this._pts.add(new armyc2.c2sd.JavaLineArray.POINT2(x3, y3, 3));
};
armyc2.c2sd.graphics2d.PathIterator.prototype.curveTo = function(x1, y1, x2, y2, x3, y3) {
    this._pts.add(new armyc2.c2sd.JavaLineArray.POINT2(x1, y1, 3));
    this._pts.add(new armyc2.c2sd.JavaLineArray.POINT2(x2, y2, 3));
    this._pts.add(new armyc2.c2sd.JavaLineArray.POINT2(x3, y3, 3));
};
armyc2.c2sd.graphics2d.PathIterator.prototype.quadTo = function(x1, y1, x2, y2) {
    this._pts.add(new armyc2.c2sd.JavaLineArray.POINT2(x1, y1, 2));
    this._pts.add(new armyc2.c2sd.JavaLineArray.POINT2(x2, y2, 2));
};
armyc2.c2sd.graphics2d.PathIterator.prototype.getBounds = function() {
    var j = 0;
    var left = this._pts.get(0).x;
    var right = this._pts.get(0).x;
    var top = this._pts.get(0).y;
    var bottom = this._pts.get(0).y;
    for (j = 1; j < this._pts.size(); j++) {
        if (this._pts.get(j).x < left)
            left = this._pts.get(j).x;
        if (this._pts.get(j).x > right)
            right = this._pts.get(j).x;
        if (this._pts.get(j).y < top)
            top = this._pts.get(j).y;
        if (this._pts.get(j).y > bottom)
            bottom = this._pts.get(j).y;
    }
    var rect = new armyc2.c2sd.graphics2d.Rectangle2D(left, top, right - left, bottom - top);
    return rect;
};
armyc2.c2sd.graphics2d.PathIterator.SEG_CLOSE = 4;
armyc2.c2sd.graphics2d.PathIterator.SEG_CUBICTO = 3;
armyc2.c2sd.graphics2d.PathIterator.SEG_LINETO = 1;
armyc2.c2sd.graphics2d.PathIterator.SEG_MOVETO = 0;
armyc2.c2sd.graphics2d.PathIterator.SEG_QUADTO = 2;
armyc2.c2sd.graphics2d.PathIterator.WIND_EVEN_ODD = 0;
armyc2.c2sd.graphics2d.PathIterator.WIND_NON_ZERO = 1;
