var android = android || {};
android.graphics = android.graphics || {};
android.graphics.Path = function() {
    this.pts = new java.util.ArrayList();
};
android.graphics.Path.prototype.lineTo = function(x, y) {
    if (this.pts.size() > 0)
    {
        var lastPt = this.pts.get(this.pts.size() - 1);
        if (lastPt.x === x && lastPt.y === y)
            return;
    }
    this.pts.add(new armyc2.c2sd.JavaLineArray.POINT2(x, y));
};
android.graphics.Path.prototype.moveTo = function(x, y) {
    if (this.pts.size() > 0)
    {
        var lastPt = this.pts.get(this.pts.size() - 1);
        if (lastPt.x === x && lastPt.y === y)
            return;
    }
    this.pts.add(new armyc2.c2sd.JavaLineArray.POINT2(x, y));
};
android.graphics.Path.prototype.curveTo = function(x1, y1, x2, y2, x3, y3) {
    this.pts.add(new armyc2.c2sd.JavaLineArray.POINT2(x1, y1));
    this.pts.add(new armyc2.c2sd.JavaLineArray.POINT2(x2, y2));
    this.pts.add(new armyc2.c2sd.JavaLineArray.POINT2(x3, y3));
};
android.graphics.Path.prototype.cubicTo = function(x1, y1, x2, y2, x3, y3) {
    this.pts.add(new armyc2.c2sd.JavaLineArray.POINT2(x1, y1));
    this.pts.add(new armyc2.c2sd.JavaLineArray.POINT2(x2, y2));
    this.pts.add(new armyc2.c2sd.JavaLineArray.POINT2(x3, y3));
};
android.graphics.Path.prototype.quadTo = function(x1, y1, x2, y2) {
    this.pts.add(new armyc2.c2sd.JavaLineArray.POINT2(x1, y1));
    this.pts.add(new armyc2.c2sd.JavaLineArray.POINT2(x2, y2));
};
android.graphics.Path.prototype.addPath = function(path) {
    this.pts.addAll(path.getPts());
    return;
};
android.graphics.Path.prototype.computeBounds = function(rect, exact) {
    var j = 0;
    var left = this.pts.get(0).x;
    var right = this.pts.get(0).x;
    var top = this.pts.get(0).y;
    var bottom = this.pts.get(0).y;
    var pt = null;
    for (j = 1; j < this.pts.size(); j++) {
        pt = this.pts.get(j);
        if (pt.x < left)
            left = pt.x;
        if (pt.x > right)
            right = pt.x;
        if (pt.y < top)
            top = pt.y;
        if (pt.y > bottom)
            bottom = pt.y;
    }
    rect.left = left;
    rect.top = top;
    rect.right = right;
    rect.bottom = bottom;
    return;
};
android.graphics.Path.prototype.close = function() {
};
android.graphics.Path.prototype.getPts = function() {
    return this.pts;
};



