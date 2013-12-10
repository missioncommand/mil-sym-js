var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.graphics2d = armyc2.c2sd.graphics2d || {};
armyc2.c2sd.graphics2d.Rectangle = function() {
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    if (arguments.length === 4)
    {
        this.x = arguments[0];
        this.y = arguments[1];
        this.width = arguments[2];
        this.height = arguments[3];
    }
    this.containsPt2 = function(x1, y1) {
        if (this.x <= x1 && x1 <= this.x + this.width && this.y <= y1 && y1 <= this.y + this.height)
            return true;
        else
            return false;
    };
};
armyc2.c2sd.graphics2d.Rectangle.prototype.getBounds = function() {
    return null;
};
armyc2.c2sd.graphics2d.Rectangle.prototype.getPathIterator = function(at) {
    return null;
};
armyc2.c2sd.graphics2d.Rectangle.prototype.intersectsLine = function(line) {
    var pt0 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(this.x, this.y);
    var pt1 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(this.x + this.width, this.y);
    var edge = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setLine2D(pt0, pt1);
    if (line.intersectsLine(edge))
        return true;
    var pt2 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(this.x + this.width, this.y + this.height);
    edge = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setLine2D(pt1, pt2);
    if (line.intersectsLine(edge))
        return true;
    var pt3 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(this.x, this.y + this.height);
    edge = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setLine2D(pt2, pt3);
    if (line.intersectsLine(edge))
        return true;
    edge = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setLine2D(pt3, pt0);
    if (line.intersectsLine(edge))
        return true;
    return false;
};
armyc2.c2sd.graphics2d.Rectangle.prototype.intersectsRect = function(rect) {
    if (this.x + this.width < rect.x)
        return false;
    if (this.x > rect.x + rect.width)
        return false;
    if (this.y + this.height < rect.y)
        return false;
    if (this.y > rect.y + rect.height)
        return false;
    return true;
};
armyc2.c2sd.graphics2d.Rectangle.prototype.intersectsRect2 = function(x1, y1, width1, height1) {
    if (this.x + this.width < x1)
        return false;
    if (this.x > x1 + width1)
        return false;
    if (this.y + this.height < y1)
        return false;
    if (this.y > y1 + height1)
        return false;
    return true;
};
armyc2.c2sd.graphics2d.Rectangle.prototype.containsRect = function(rect) {
    var x1 = Math.floor(rect.getX());
    var y1 = Math.floor(rect.getY());
    if (this.containsPt2(x1, y1)) {
        x1 += rect.getWidth();
        y1 += rect.getHeight();
        if (this.containsPt2(x1, y1))
            return true;
    }
    return false;
};
armyc2.c2sd.graphics2d.Rectangle.prototype.containsRect2 = function(x1, y1, width1, height1) {
    if (this.containsPt2(x1, y1) && this.containsPt2(x1 + width1, y1 + height1))
        return true;
    else
        return false;
};
armyc2.c2sd.graphics2d.Rectangle.prototype.containsPt = function(pt) {
    if (this.x <= pt.getX() && pt.getX() <= this.x + this.width && this.y <= pt.getY() && pt.getY() <= this.y + this.height)
        return true;
    else
        return false;
};
armyc2.c2sd.graphics2d.Rectangle.prototype.getBounds2D = function() {
    return  new armyc2.c2sd.graphics2d.Rectangle2D(this.x, this.y, this.width, this.height);
};
armyc2.c2sd.graphics2d.Rectangle.prototype.getX = function() {
    return this.x;
};
armyc2.c2sd.graphics2d.Rectangle.prototype.getY = function() {
    return this.y;
};
armyc2.c2sd.graphics2d.Rectangle.prototype.getMinX = function() {
    return this.x;
};
armyc2.c2sd.graphics2d.Rectangle.prototype.getMinY = function() {
    return this.y;
};
armyc2.c2sd.graphics2d.Rectangle.prototype.getMaxX = function() {
    return this.x + this.width;
};
armyc2.c2sd.graphics2d.Rectangle.prototype.getMaxY = function() {
    return this.y + this.height;
};
armyc2.c2sd.graphics2d.Rectangle.prototype.getHeight = function() {
    return this.height;
};
armyc2.c2sd.graphics2d.Rectangle.prototype.getWidth = function() {
    return this.width;
};
armyc2.c2sd.graphics2d.Rectangle.prototype.grow = function(h, v) {
    return;
};
armyc2.c2sd.graphics2d.Rectangle.prototype.setRect = function(rect) {
    this.x = rect.x;
    this.y = rect.y;
    this.width = rect.width;
    this.height = rect.height;
};
