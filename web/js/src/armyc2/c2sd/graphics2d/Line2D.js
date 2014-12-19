armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.graphics2d = armyc2.c2sd.graphics2d || {};
armyc2.c2sd.graphics2d.Line2D = function() {
    this.x1 = 0;
    this.y1 = 0;
    this.x2 = 0;
    this.y2 = 0;
    if (arguments.length === 4) {
        this.x1 = arguments[0];
        this.y1 = arguments[1];
        this.x2 = arguments[2];
        this.y2 = arguments[3];
    }
    else if (arguments.length === 2)
    {
        var x = arguments[0].getX();
        var y = arguments[0].getY();
        this.x1 = x;
        this.y1 = y;
        x = arguments[1].getX();
        y = arguments[1].getY();
        this.x2 = x;
        this.y2 = y;
    }
};
armyc2.c2sd.graphics2d.Line2D.prototype.getX1 = function() {
    return this.x1;
};
armyc2.c2sd.graphics2d.Line2D.prototype.getY1 = function() {
    return this.y1;
};
armyc2.c2sd.graphics2d.Line2D.prototype.getP1 = function() {
    var pt2d = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(this.x1, this.y1);
    return pt2d;
};
armyc2.c2sd.graphics2d.Line2D.prototype.getX2 = function() {
    return this.x2;
};
armyc2.c2sd.graphics2d.Line2D.prototype.getY2 = function() {
    return this.y2;
};
armyc2.c2sd.graphics2d.Line2D.prototype.getP2 = function() {
    var pt2d = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(this.x2, this.y2);
    return pt2d;
};
armyc2.c2sd.graphics2d.Line2D.prototype.getBounds2D = function() {
    var x;
    var y;
    var w;
    var h;
    if (this.x1 < this.x2) {
        x = this.x1;
        w = this.x2 - this.x1;
    } else {
        x = this.x2;
        w = this.x1 - this.x2;
    }
    if (this.y1 < this.y2) {
        y = this.y1;
        h = this.y2 - this.y1;
    } else {
        y = this.y2;
        h = this.y1 - this.y2;
    }
    return  new armyc2.c2sd.graphics2d.Rectangle2D(x, y, w, h);
};
armyc2.c2sd.graphics2d.Line2D.prototype.intersectsLine = function(edge) {
    var edgex1 = edge.getX1();
    var edgey1 = edge.getY1();
    var edgex2 = edge.getX2();
    var edgey2 = edge.getY2();
    if (this.x2 === this.x1 && edgex2 === edgex1)
    {
        if (this.x1 !== edgex1)
            return false;
        if (this.y1 < this.y2)
        {
            if (this.y1 <= edgey1 && edgey1 <= this.y2)
                return true;
            else if (this.y1 <= edgey2 && edgey2 <= this.y2)
                return true;
            else
                return false;
        }
        else if (this.y2 < this.y1)
        {
            if (this.y2 <= edgey1 && edgey1 <= this.y1)
                return true;
            else if (this.y2 <= edgey2 && edgey2 <= this.y1)
                return true;
            else
                return false;
        }
    }
    if (this.x1 <= this.x2)
    {
        if (edgex1 < this.x1 && edgex2 < this.x1)
            return false;
        if (edgex1 > this.x2 && edgex2 > this.x2)
            return false;
    }
    else
    {
        if (edgex1 < this.x2 && edgex2 < this.x2)
            return false;
        if (edgex1 > this.x1 && edgex2 > this.x1)
            return false;
    }
    if (this.y1 <= this.y2)
    {
        if (edgey1 < this.y1 && edgey2 < this.y1)
            return false;
        if (edgey1 > this.y2 && edgey2 > this.y2)
            return false;
    }
    else
    {
        if (edgey1 < this.y2 && edgey2 < this.y2)
            return false;
        if (edgey1 > this.y1 && edgey2 > this.y1)
            return false;
    }
    if(this.x1===this.x2)
    {
        if(this.x1<edgex1 && this.x1<edgex2)
            return false;
        if(this.x1>edgex1 && this.x1>edgex2)
            return false;
    }
    if(this.y1===this.y2)
    {
        if(this.y1<edgey1 && this.y1<edgey2)
            return false;
        if(this.y1>edgey1 && this.y1>edgey2)
            return false;
    }
    
    var slope = (this.y2 - this.y1) / (this.x2 - this.x1);
    var b1 = this.y2 - slope * this.x2;
    var edgeSlope = (edgey2 - edgey1) / (edgex2 - edgex1);
    var b2 = edgey2 - edgeSlope * edgex2;
    var rect = new armyc2.c2sd.graphics2d.Rectangle2D(this.x1, this.y1, this.x2, this.y2);
    var x0 = edgex1;
    var width = Math.abs(edgex1 - edgex2);
    var y0 = edgey1;
    var height = Math.abs(edgey1 - edgey2);
    var rect2 = new armyc2.c2sd.graphics2d.Rectangle2D(x0, y0, width, height);
    if (slope === edgeSlope) {
        if (b1 === b2 && rect.intersectsRect(rect2) === true)
            return true;
        else
            return false;
    } else {
        var x = (b2 - b1) / (slope - edgeSlope);
        var y = (slope * x + b1);
        if (this.x1 < this.x2) {
            if (x < this.x1)
                return false;
            if (x > this.x2)
                return false;
        } else if (this.x2 < this.x1) {
            if (x < this.x2)
                return false;
            if (x > this.x1)
                return false;
        }
        if (this.y1 < this.y2) {
            if (y < this.y1)
                return false;
            if (y > this.y2)
                return false;
        } else if (this.y2 < this.y1) {
            if (y < this.y2)
                return false;
            if (y > this.y1)
                return false;
        }
        if (edgex1 < edgex2) {
            if (x < edgex1)
                return false;
            if (x > edgex2)
                return false;
        } else if (edgex2 < edgex1) {
            if (x < edgex2)
                return false;
            if (x > edgex1)
                return false;
        }
        if (edgey1 < edgey2) {
            if (y < edgey1)
                return false;
            if (y > edgey2)
                return false;
        } else if (edgey2 < edgey1) {
            if (y < edgey2)
                return false;
            if (y > edgey1)
                return false;
        }
    }
    return true;
};
armyc2.c2sd.graphics2d.Line2D.prototype.setLine = function()
{
    if (arguments.length === 1)
    {
        var line1 = arguments[0];
        this.x1 = line1.x1;
        this.y1 = line1.y1;
        this.x2 = line1.x2;
        this.y2 = line1.y2;
    }
    else if (arguments.length === 2)
    {
        var pt1 = arguments[0];
        var pt2 = arguments[1];
        this.x1 = pt1.x;
        this.y1 = pt1.y;
        this.x2 = pt2.x;
        this.y2 = pt2.y;
    }
    else if (arguments.length === 4)
    {
        var x1 = arguments[0];
        var y1 = arguments[1];
        var x2 = arguments[2];
        var y2 = arguments[3];
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
};
armyc2.c2sd.graphics2d.Line2D.ptSegDistSq = function(x1, y1, x2, y2, px, py) {
    x2 -= x1;
    y2 -= y1;
    px -= x1;
    py -= y1;
    var dotprod = px * x2 + py * y2;
    var projlenSq;
    if (dotprod <= 0.0) {
        projlenSq = 0.0;
    } else {
        px = x2 - px;
        py = y2 - py;
        dotprod = px * x2 + py * y2;
        if (dotprod <= 0.0) {
            projlenSq = 0.0;
        } else {
            projlenSq = dotprod * dotprod / (x2 * x2 + y2 * y2);
        }
    }
    var lenSq = px * px + py * py - projlenSq;
    if (lenSq < 0) {
        lenSq = 0;
    }
    return lenSq;
};
