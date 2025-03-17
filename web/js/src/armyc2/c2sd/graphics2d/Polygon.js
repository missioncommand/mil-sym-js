var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.graphics2d = armyc2.c2sd.graphics2d || {};
armyc2.c2sd.graphics2d.Polygon = function() {
    this.bounds = null;
    this.pts = new java.util.ArrayList();
    this.contains = function(x, y) {
        if (this.pts.size() < 3)
            return false;
        if ((this.pts.get(0).x !== this.pts.get(this.pts.size() - 1).x) || (this.pts.get(0).y !== this.pts.get(this.pts.size() - 1).y)) {
            this.pts.add(new armyc2.c2sd.JavaLineArray.POINT2(this.pts.get(0)));
        }
        var lowVal = -100;
        var pt0 = new armyc2.c2sd.JavaLineArray.POINT2(lowVal, y);
        var pt1 = new armyc2.c2sd.JavaLineArray.POINT2(x, y);
        var edge = null;
        var ray = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setLine2D(pt0.x, pt0.y, pt1.x, pt1.y);
        var j = 0;
        var intersectCounter = 0;
        for (j = 0; j < this.pts.size() - 1; j++)
        {
            edge = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setLine2D(this.pts.get(j).x, this.pts.get(j).y, this.pts.get(j + 1).x, this.pts.get(j + 1).y);
            if (ray.intersectsLine(edge) === true)
                intersectCounter++;
        }
        if (intersectCounter % 2 === 1)
            return true;
        return false;
    };
    this.computeBounds = function(rect, exact)
    {
        var j = 0;
        var left = this.pts.get(0).x;
        var right = this.pts.get(0).x;
        var top = this.pts.get(0).y;
        var bottom = this.pts.get(0).y;
        var pt = null;
        for (j = 1; j < this.pts.size(); j++)
        {
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
};
armyc2.c2sd.graphics2d.Polygon.prototype.size = function()
{
    if (this.pts !== null)
        return this.pts.size();
    else
        return 0;
};
armyc2.c2sd.graphics2d.Polygon.prototype.addPoint = function(x, y)
{
    this.pts.add(new armyc2.c2sd.JavaLineArray.POINT2(x, y));
};
armyc2.c2sd.graphics2d.Polygon.prototype.containsPt2 = function(x, y)
{
    if (this.pts.size() < 3)
        return false;
    if ((this.pts.get(0).x !== this.pts.get(this.pts.size() - 1).x) || (this.pts.get(0).y !== this.pts.get(this.pts.size() - 1).y)) {
        this.pts.add(new armyc2.c2sd.JavaLineArray.POINT2(this.pts.get(0)));
    }
    var lowVal = -100;
    var pt0 = new armyc2.c2sd.JavaLineArray.POINT2(lowVal, y);
    var pt1 = new armyc2.c2sd.JavaLineArray.POINT2(x, y);
    var edge = null;
    var ray = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setLine2D(pt0.x, pt0.y, pt1.x, pt1.y);
    var j = 0;
    var intersectCounter = 0;
    for (j = 0; j < this.pts.size() - 1; j++) {
        edge = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setLine2D(this.pts.get(j).x, this.pts.get(j).y, this.pts.get(j + 1).x, this.pts.get(j + 1).y);
        if (ray.intersectsLine(edge) === true)
            intersectCounter++;
    }
    if (intersectCounter % 2 === 1)
        return true;
    return false;
};
armyc2.c2sd.graphics2d.Polygon.prototype.containsPt3 = function(x, y)
{
    if (this.pts.size() < 3)
        return false;
    if ((this.pts.get(0).x !== this.pts.get(this.pts.size() - 1).x) || (this.pts.get(0).y !== this.pts.get(this.pts.size() - 1).y))
    {
        this.pts.add(new armyc2.c2sd.JavaLineArray.POINT2(this.pts.get(0)));
    }
    var lowVal = -100;
    var pt0 = new armyc2.c2sd.JavaLineArray.POINT2(lowVal, y);
    var pt1 = new armyc2.c2sd.JavaLineArray.POINT2(x, y);
    var edge = null;
    var ray = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setLine2D(pt0.x, pt0.y, pt1.x, pt1.y);
    var j = 0;
    var intersectCounter = 0;
    for (j = 0; j < this.pts.size() - 1; j++) {
        edge = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setLine2D(this.pts.get(j).x, this.pts.get(j).y, this.pts.get(j + 1).x, this.pts.get(j + 1).y);
        if (ray.intersectsLine(edge) === true)
            intersectCounter++;
    }
    if (intersectCounter % 2 === 1)
        return true;
    return false;
};
armyc2.c2sd.graphics2d.Polygon.prototype.containsPt = function(pt) {
    return this.contains(Math.floor(pt.getX()), Math.floor(pt.getY()));
};
armyc2.c2sd.graphics2d.Polygon.prototype.containsRect2 = function(x, y, w, h)
{
    if (this.bounds !== null)
    {
        var fx = x;
        var fy = y;
        var fw = w;
        var fh = h;
        var that = new android.graphics.Path();
        that.moveTo(fx, fy);
        that.lineTo(fx + fw, fy);
        that.lineTo(fx + fw, fy - fh);
        that.lineTo(fx, fy - fh);
        that.close();
        var thatBounds = new armyc2.c2sd.graphics2d.Rectangle2D();
        var rectf = new android.graphics.RectF(thatBounds.x, thatBounds.y, thatBounds.x + thatBounds.width, thatBounds.y + thatBounds.height);
        that.computeBounds(rectf, false);
        return this.bounds.containsRect(thatBounds);
    }
    else
    {
        return false;
    }
};

armyc2.c2sd.graphics2d.Polygon.prototype.intersectsRect2 = function(x, y, w, h)
{
    if (this.bounds !== null) {
        var fx = x;
        var fy = y;
        var fw = w;
        var fh = h;
        var that = new android.graphics.Path();
        that.moveTo(fx, fy);
        that.lineTo(fx + fw, fy);
        that.lineTo(fx + fw, fy - fh);
        that.lineTo(fx, fy - fh);
        that.close();
        var thatBounds = new android.graphics.RectF();
        var rectf = new android.graphics.RectF(this.bounds.x, this.bounds.y, this.bounds.x + this.bounds.width, this.bounds.y + this.bounds.height);
        return android.graphics.RectF.intersects(rectf, thatBounds);
    }
    else
    {
        return false;
    }
};
armyc2.c2sd.graphics2d.Polygon.prototype.intersectsRect = function(r) {
    if (this.bounds !== null) {
        var rectf = new android.graphics.RectF(this.bounds.x, this.bounds.y, this.bounds.x + this.bounds.width, this.bounds.y + this.bounds.height);
        return android.graphics.RectF.intersects(rectf, r);
    } else {
        return false;
    }
};
armyc2.c2sd.graphics2d.Polygon.prototype.invalidate = function() {
    this.pts = new java.util.ArrayList();
    this.bounds = null;
};
armyc2.c2sd.graphics2d.Polygon.prototype.close = function()
{
    this.bounds = new armyc2.c2sd.graphics2d.Rectangle2D();
    var rectf = new android.graphics.RectF(this.bounds.x, this.bounds.y, this.bounds.x + this.bounds.width, this.bounds.y + this.bounds.height);
    this.computeBounds(rectf, false);
};
armyc2.c2sd.graphics2d.Polygon.prototype.getBounds2D = function()
{
    return null;
};
armyc2.c2sd.graphics2d.Polygon.prototype.getBounds = function() {
    return null;
};
armyc2.c2sd.graphics2d.Polygon.prototype.getPathIterator = function(at)
{
    var pi = new armyc2.c2sd.graphics2d.PathIterator(null);
    var j = 0;
    if (this.pts.size() > 0) {
        pi.moveTo(this.pts.get(0).x, this.pts.get(0).y);
        for (j = 1; j < this.pts.size(); j++) {
            pi.lineTo(this.pts.get(j).x, this.pts.get(j).y);
        }
    }
    pi.reset();
    return pi;
};
armyc2.c2sd.graphics2d.Polygon.prototype.getPts = function()
{
    return this.pts;
};



