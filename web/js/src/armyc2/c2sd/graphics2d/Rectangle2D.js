var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.graphics2d = armyc2.c2sd.graphics2d || {};
armyc2.c2sd.graphics2d.Rectangle2D = function() {
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
        if (this.x <= x1 && x1 <= this.x + this.width && this.y <= y1 && y1 <= this.y + this.width)
            return true;
        else
            return false;
    };
    this.add = function(x1, y1) {
        if (x1 < this.x) {
            this.width = this.width + (this.x - x1);
            this.x = x1;
        }
        if (y1 < this.y) {
            this.height = this.height + (this.y - y1);
            this.y = y1;
        }
        if (x1 > this.x + this.width)
            this.width += (x1 - this.x);
        if (y1 > this.y + this.height)
            this.height += (y1 - this.y);
    };
};
armyc2.c2sd.graphics2d.Rectangle2D.prototype.createIntersection = function(r) {
    if (r.x > this.x + this.width)
        return null;
    if (r.x + r.width < this.x)
        return null;
    if (r.y > this.y + this.height)
        return null;
    if (r.y + r.height < this.y)
        return null;
    if (r.containsRect(this))
        return this;
    if (this.containsRect(r))
        return r;
    var x1 = 0;
    var y1 = 0;
    var x2 = 0;
    var y2 = 0;
    if (this.x < r.x) {
        x1 = r.x;
        x2 = this.x + this.width;
    } else {
        x1 = this.x;
        x2 = r.x + r.width;
    }
    if (this.y < r.y) {
        y1 = r.y;
        y2 = this.y + this.height;
    } else {
        y1 = this.y;
        y2 = r.y + r.height;
    }
    return  new armyc2.c2sd.graphics2d.Rectangle2D(x1, y1, x2 - x1, y2 - y1);
};
armyc2.c2sd.graphics2d.Rectangle2D.prototype.getX = function() {
    return this.x;
};
armyc2.c2sd.graphics2d.Rectangle2D.prototype.getY = function() {
    return this.y;
};
armyc2.c2sd.graphics2d.Rectangle2D.prototype.getMinX = function() {
    return this.x;
};
armyc2.c2sd.graphics2d.Rectangle2D.prototype.getMinY = function() {
    return this.y;
};
armyc2.c2sd.graphics2d.Rectangle2D.prototype.getMaxX = function() {
    return this.x + this.width;
};
armyc2.c2sd.graphics2d.Rectangle2D.prototype.getMaxY = function() {
    return this.y + this.height;
};
armyc2.c2sd.graphics2d.Rectangle2D.prototype.getHeight = function() {
    return this.height;
};
armyc2.c2sd.graphics2d.Rectangle2D.prototype.getWidth = function() {
    return this.width;
};
armyc2.c2sd.graphics2d.Rectangle2D.prototype.intersectsRect = function(rect) {
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
armyc2.c2sd.graphics2d.Rectangle2D.prototype.intersectsRect2 = function(x1, y1, width1, height1) {
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
armyc2.c2sd.graphics2d.Rectangle2D.prototype.containsRect = function(rect) {
    var x1 = rect.getX();
    var y1 = rect.getY();
    if (this.containsPt2(x1, y1)) {
        x1 += rect.getWidth();
        y1 += rect.getHeight();
        if (this.containsPt2(x1, y1))
            return true;
    }
    return false;
};
armyc2.c2sd.graphics2d.Rectangle2D.prototype.containsPt = function(pt) {
    if (this.x <= pt.getX() && pt.getX() <= this.x + this.width)
        if (this.y <= pt.getY() && pt.getY() <= this.x + this.height)
            return true;
    return false;
};
armyc2.c2sd.graphics2d.Rectangle2D.prototype.intersectsLine = function(line) {
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
armyc2.c2sd.graphics2d.Rectangle2D.prototype.containsRect2 = function(x, y, width, height) {
    var x1 = x;
    var y1 = y;
    if (this.containsPt2(x1, y1)) {
        x1 += width;
        y1 += height;
        if (this.containsPt2(x1, y1))
            return true;
    }
    return false;
};
armyc2.c2sd.graphics2d.Rectangle2D.prototype.isEmpty = function() {
    if (this.width === 0 && this.height === 0)
        return true;
    else
        return false;
};
armyc2.c2sd.graphics2d.Rectangle2D.prototype.setRect = function()
{
    if (arguments.length === 4)
    {
        this.x = arguments[0];
        this.y = arguments[1];
        this.width = arguments[2];
        this.height = arguments[3];
    }
    else if (arguments.length === 1)
    {
        this.x = arguments[0].getX();
        this.y = arguments[0].getY();
        this.width = arguments[0].getWidth();
        this.height = arguments[0].getHeight();
    }
};
