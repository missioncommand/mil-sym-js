var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.graphics2d = armyc2.c2sd.graphics2d || {};
armyc2.c2sd.graphics2d.GeneralPath = function() {
    this._path = new android.graphics.Path();
    this._pathIterator = new armyc2.c2sd.graphics2d.PathIterator(null);
    this.getBounds = function() {
        var rect = this._pathIterator.getBounds();
        return  new armyc2.c2sd.graphics2d.Rectangle(Math.floor(rect.x), Math.floor(rect.y), Math.floor(rect.width), Math.floor(rect.height));
    };
};
armyc2.c2sd.graphics2d.GeneralPath.prototype.lineTo = function(x, y) {
    this._path.lineTo(x, y);
    this._pathIterator.lineTo(x, y);
};
armyc2.c2sd.graphics2d.GeneralPath.prototype.moveTo = function(x, y) {
    this._path.moveTo(x, y);
    this._pathIterator.moveTo(x, y);
};
armyc2.c2sd.graphics2d.GeneralPath.prototype.quadTo = function(x1, y1, x2, y2) {
    this._path.quadTo(x1, y1, x2, y2);
    this._pathIterator.quadTo(x1, y1, x2, y2);
};
armyc2.c2sd.graphics2d.GeneralPath.prototype.cubicTo = function(x1, y1, x2, y2, x3, y3) {
    this._path.cubicTo(x1, y1, x2, y2, x3, y3);
    this._pathIterator.cubicTo(x1, y1, x2, y2, x3, y3);
};
armyc2.c2sd.graphics2d.GeneralPath.prototype.curveTo = function(x1, y1, x2, y2, x3, y3) {
    this._path.cubicTo(x1, y1, x2, y2, x3, y3);
    this._pathIterator.cubicTo(x1, y1, x2, y2, x3, y3);
};
armyc2.c2sd.graphics2d.GeneralPath.prototype.computeBounds = function(rect) {
    var rectf = new android.graphics.RectF();
    this._path.computeBounds(rectf, true);
    rect.x = rectf.left;
    rect.y = rectf.top;
    rect.width = rectf.bottom - rectf.top;
    rect.setRect(rectf.left, rectf.top, rectf.width(), rectf.height());
};
armyc2.c2sd.graphics2d.GeneralPath.prototype.closePath = function() {
    if (this._path !== null)
        this._path.close();
};
armyc2.c2sd.graphics2d.GeneralPath.prototype.containsPt2 = function(x, y) {
    return false;
};
armyc2.c2sd.graphics2d.GeneralPath.prototype.containsPt = function(pt) {
    return false;
};
armyc2.c2sd.graphics2d.GeneralPath.prototype.containsRect2 = function(x, y, width, height) {
    var rect2 = this.getBounds();
    return rect2.containsRect2(x, y, width, height);
};
armyc2.c2sd.graphics2d.GeneralPath.prototype.containsRect = function(r) {
    var rect = new armyc2.c2sd.graphics2d.Rectangle(Math.floor(r.x), Math.floor(r.y), Math.floor(r.width), Math.floor(r.height));
    var rect2 = this.getBounds();
    return rect2.containsRect2(rect.x, rect.y, rect.width, rect.height);
};
armyc2.c2sd.graphics2d.GeneralPath.prototype.getBounds2D = function() {
    return this._pathIterator.getBounds();
};
armyc2.c2sd.graphics2d.GeneralPath.prototype.intersectsRect2 = function(x, y, w, h) {
    return this.getBounds().intersectsRect2(x, y, w, h);
};
armyc2.c2sd.graphics2d.GeneralPath.prototype.intersectsRect = function(rect) {
    return this.getBounds().intersectsRect2(rect.x, rect.y, rect.width, rect.height);
};
armyc2.c2sd.graphics2d.GeneralPath.prototype.append = function(shape, connect) {
    var gp = shape;
    var pi = gp.getPathIterator(null);
    var pts = pi.getPoints();
    var j = 0;
    var pt = null;
    var pt1 = null;
    var pt2 = null;
    for (j = 0; j < pts.size(); j++) {
        pt = pts.get(j);
        switch (pt.style) {
            case 0:
                this._path.moveTo(pt.x, pt.y);
                this._pathIterator.moveTo(pt.x, pt.y);
                break;
            case 1:
                this._path.lineTo(pt.x, pt.y);
                this._pathIterator.lineTo(pt.x, pt.y);
                break;
            case 3:
                pt1 = pts.get(j + 1);
                j++;
                pt2 = pts.get(j + 2);
                j++;
                this._path.cubicTo(pt.x, pt.y, pt1.x, pt1.y, pt2.x, pt2.y);
                this._pathIterator.cubicTo(pt.x, pt.y, pt1.x, pt1.y, pt2.x, pt2.y);
                break;
            default:
                break;
        }
    }
};
armyc2.c2sd.graphics2d.GeneralPath.prototype.getPath = function() {
    return this._path;
};
armyc2.c2sd.graphics2d.GeneralPath.prototype.getPathIterator = function(tx) {
    this._pathIterator.reset();
    return this._pathIterator;
};


