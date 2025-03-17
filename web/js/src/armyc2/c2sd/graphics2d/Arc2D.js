var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.graphics2d = armyc2.c2sd.graphics2d || {};
armyc2.c2sd.graphics2d.Arc2D = function()
{
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.start = 0;
    this.extent = 0;
    this.type = 0;
    if (arguments.length === 1)
    {
        var t = arguments[0];
        this.setArcType(t);
    }
    else if (arguments.length === 7)
    {
        this.x = arguments[0];
        this.y = arguments[1];
        this.width = arguments[2];
        this.height = arguments[3];
        this.start = arguments[4];
        this.extent = arguments[5];
        armyc2.c2sd.graphics2d.Arc2D.setArcType(this, arguments[6]);
    }
    else if (arguments.length === 4)
    {
        var ellipseBounds = arguments[0];
        var start = arguments[1];
        var extent = arguments[2];
        var type = arguments[3];
        armyc2.c2sd.graphics2d.Arc2D.setArcType(this, type);
        this.x = ellipseBounds.getX();
        this.y = ellipseBounds.getY();
        this.width = ellipseBounds.getWidth();
        this.height = ellipseBounds.getHeight();
        this.start = start;
        this.extent = extent;
    }
};


armyc2.c2sd.graphics2d.Arc2D.prototype.getX = function() {
    return this.x;
};
armyc2.c2sd.graphics2d.Arc2D.prototype.getY = function() {
    return this.y;
};
armyc2.c2sd.graphics2d.Arc2D.prototype.getWidth = function() {
    return this.width;
};
armyc2.c2sd.graphics2d.Arc2D.prototype.getHeight = function() {
    return this.height;
};
armyc2.c2sd.graphics2d.Arc2D.prototype.getAngleStart = function() {
    return this.start;
};
armyc2.c2sd.graphics2d.Arc2D.prototype.getAngleExtent = function() {
    return this.extent;
};
armyc2.c2sd.graphics2d.Arc2D.prototype.isEmpty = function() {
    return (this.width <= 0.0 || this.height <= 0.0);
};
armyc2.c2sd.graphics2d.Arc2D.prototype.setArc = function(x, y, w, h, angSt, angExt, closure) {
    this.setArcType(closure);
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.start = angSt;
    this.extent = angExt;
};
armyc2.c2sd.graphics2d.Arc2D.prototype.setAngleStart = function(angSt) {
    this.start = angSt;
};
armyc2.c2sd.graphics2d.Arc2D.prototype.setAngleExtent = function(angExt) {
    this.extent = angExt;
};
armyc2.c2sd.graphics2d.Arc2D.prototype.getArcType = function() {
    return this.type;
};
armyc2.c2sd.graphics2d.Arc2D.prototype.getStartPoint = function() {
    var angle = Math.toRadians(-this.getAngleStart());
    var x = this.getX() + (Math.cos(angle) * 0.5 + 0.5) * this.getWidth();
    var y = this.getY() + (Math.sin(angle) * 0.5 + 0.5) * this.getHeight();
    return  new armyc2.c2sd.graphics2d.Point2D(x, y);
};
armyc2.c2sd.graphics2d.Arc2D.prototype.getEndPoint = function() {
    var angle = Math.toRadians(-this.getAngleStart() - this.getAngleExtent());
    var x = this.getX() + (Math.cos(angle) * 0.5 + 0.5) * this.getWidth();
    var y = this.getY() + (Math.sin(angle) * 0.5 + 0.5) * this.getHeight();
    return  new armyc2.c2sd.graphics2d.Point2D(x, y);
};
armyc2.c2sd.graphics2d.Arc2D.prototype.setArc2 = function(rect, angSt, angExt, closure) {
    this.setArc(rect.getX(), rect.getY(), rect.getWidth(), rect.getHeight(), angSt, angExt, closure);
};
armyc2.c2sd.graphics2d.Arc2D.prototype.setArc3 = function(a) {
    this.setArc(a.getX(), a.getY(), a.getWidth(), a.getHeight(), a.getAngleStart(), a.getAngleExtent(), a.type);
};
armyc2.c2sd.graphics2d.Arc2D.prototype.setArcByCenter = function(x, y, radius, angSt, angExt, closure) {
    this.setArc(x - radius, y - radius, radius * 2.0, radius * 2.0, angSt, angExt, closure);
};
armyc2.c2sd.graphics2d.Arc2D.prototype.setArcByTangent = function(p1, p2, p3, radius) {
    var ang1 = Math.atan2(p1.getY() - p2.getY(), p1.getX() - p2.getX());
    var ang2 = Math.atan2(p3.getY() - p2.getY(), p3.getX() - p2.getX());
    var diff = ang2 - ang1;
    if (diff > 3.141592653589793) {
        ang2 -= 6.283185307179586;
    } else if (diff < -3.141592653589793) {
        ang2 += 6.283185307179586;
    }
    var bisect = (ang1 + ang2) / 2.0;
    var theta = Math.abs(ang2 - bisect);
    var dist = radius / Math.sin(theta);
    var x = p2.getX() + dist * Math.cos(bisect);
    var y = p2.getY() + dist * Math.sin(bisect);
    if (ang1 < ang2) {
        ang1 -= 1.5707963267948966;
        ang2 += 1.5707963267948966;
    } else {
        ang1 += 1.5707963267948966;
        ang2 -= 1.5707963267948966;
    }
    ang1 = Math.toDegrees(-ang1);
    ang2 = Math.toDegrees(-ang2);
    diff = ang2 - ang1;
    if (diff < 0) {
        diff += 360;
    } else {
        diff -= 360;
    }
    this.setArcByCenter(x, y, radius, ang1, diff, this.type);
};
armyc2.c2sd.graphics2d.Arc2D.prototype.setArcType = function(type) {
    if (type < 0 || type > 2) {
        throw  new IllegalArgumentException("invalid type for Arc: " + type);
    }
    this.type = type;
};
armyc2.c2sd.graphics2d.Arc2D.prototype.setFrame = function(x, y, w, h) {
    this.setArc(x, y, w, h, this.getAngleStart(), this.getAngleExtent(), this.type);
};
armyc2.c2sd.graphics2d.Arc2D.prototype.getBounds2D = function() {
    if (this.isEmpty()) {
        return this.makeBounds(this.getX(), this.getY(), this.getWidth(), this.getHeight());
    }
    var x1;
    var y1;
    var x2;
    var y2;
    if (this.getArcType() === 2) {
        x1 = y1 = x2 = y2 = 0.0;
    } else {
        x1 = y1 = 1.0;
        x2 = y2 = -1.0;
    }
    var angle = 0.0;
    for (var i = 0; i < 6; i++) {
        if (i < 4) {
            angle += 90.0;
            if (!this.containsAngle(angle)) {
                continue;
            }
        } else if (i === 4) {
            angle = this.getAngleStart();
        } else {
            angle += this.getAngleExtent();
        }
        var rads = Math.toRadians(-angle);
        var xe = Math.cos(rads);
        var ye = Math.sin(rads);
        x1 = Math.min(x1, xe);
        y1 = Math.min(y1, ye);
        x2 = Math.max(x2, xe);
        y2 = Math.max(y2, ye);
    }
    var w = this.getWidth();
    var h = this.getHeight();
    x2 = (x2 - x1) * 0.5 * w;
    y2 = (y2 - y1) * 0.5 * h;
    x1 = this.getX() + (x1 * 0.5 + 0.5) * w;
    y1 = this.getY() + (y1 * 0.5 + 0.5) * h;
    return this.makeBounds(x1, y1, x2, y2);
};
armyc2.c2sd.graphics2d.Arc2D.prototype.makeBounds = function(x, y, w, h) {
    return null;
};
armyc2.c2sd.graphics2d.Arc2D.prototype.containsAngle = function(angle) {
    var angExt = this.getAngleExtent();
    var backwards = (angExt < 0.0);
    if (backwards) {
        angExt = -angExt;
    }
    if (angExt >= 360.0) {
        return true;
    }
    angle = armyc2.c2sd.graphics2d.Arc2D.normalizeDegrees(angle) - armyc2.c2sd.graphics2d.Arc2D.normalizeDegrees(this.getAngleStart());
    if (backwards) {
        angle = -angle;
    }
    if (angle < 0.0) {
        angle += 360.0;
    }
    return (angle >= 0.0) && (angle < angExt);
};
armyc2.c2sd.graphics2d.Arc2D.prototype.contains = function(x, y) {
    var ellw = this.getWidth();
    if (ellw <= 0.0) {
        return false;
    }
    var normx = (x - this.getX()) / ellw - 0.5;
    var ellh = this.getHeight();
    if (ellh <= 0.0) {
        return false;
    }
    var normy = (y - this.getY()) / ellh - 0.5;
    var distSq = (normx * normx + normy * normy);
    if (distSq >= 0.25) {
        return false;
    }
    var angExt = Math.abs(this.getAngleExtent());
    if (angExt >= 360.0) {
        return true;
    }
    var inarc = this.containsAngle(-Math.toDegrees(Math.atan2(normy, normx)));
    if (this.type === 2) {
        return inarc;
    }
    if (inarc) {
        if (angExt >= 180.0) {
            return true;
        }
    } else {
        if (angExt <= 180.0) {
            return false;
        }
    }
    var angle = Math.toRadians(-this.getAngleStart());
    var x1 = Math.cos(angle);
    var y1 = Math.sin(angle);
    angle += Math.toRadians(-this.getAngleExtent());
    var x2 = Math.cos(angle);
    var y2 = Math.sin(angle);
    var inside = (armyc2.c2sd.graphics2d.Line2D.relativeCCW(x1, y1, x2, y2, 2 * normx, 2 * normy) * armyc2.c2sd.graphics2d.Line2D.relativeCCW(x1, y1, x2, y2, 0, 0) >= 0);
    return inarc ? !inside : inside;
};
armyc2.c2sd.graphics2d.Arc2D.prototype.getPathIterator = function(at) {
    
    return  new armyc2.c2sd.graphics2d.ArcIterator(this, at);
};
armyc2.c2sd.graphics2d.Arc2D.prototype.hashCode = function() {
    var bits = java.lang.Double.doubleToLongBits(this.getX());
    bits += java.lang.Double.doubleToLongBits(this.getY()) * 37;
    bits += java.lang.Double.doubleToLongBits(this.getWidth()) * 43;
    bits += java.lang.Double.doubleToLongBits(this.getHeight()) * 47;
    bits += java.lang.Double.doubleToLongBits(this.getAngleStart()) * 53;
    bits += java.lang.Double.doubleToLongBits(this.getAngleExtent()) * 59;
    bits += this.getArcType() * 61;
    return ((bits) ^ ((bits >> 32)));
};
armyc2.c2sd.graphics2d.Arc2D.prototype.equals = function(obj) {
    if (obj === this) {
        return true;
    }
    if (Clazz.instanceOf(obj, armyc2.c2sd.graphics2d.Arc2D)) {
        var a2d = obj;
        return ((this.getX() === a2d.getX()) && (this.getY() === a2d.getY()) && (this.getWidth() === a2d.getWidth()) && (this.getHeight() === a2d.getHeight()) && (this.getAngleStart() === a2d.getAngleStart()) && (this.getAngleExtent() === a2d.getAngleExtent()) && (this.getArcType() === a2d.getArcType()));
    }
    return false;
};


armyc2.c2sd.graphics2d.Arc2D.setArcType = function(that, type)
{
    if (type < 0 || type > 2) {
        throw  new IllegalArgumentException("invalid type for Arc: " + type);
    }
    that.type = type;
};
armyc2.c2sd.graphics2d.Arc2D.normalizeDegrees = function(angle) {
    if (angle > 180.0) {
        if (angle <= (540.0)) {
            angle = angle - 360.0;
        } else {
            angle = Math.IEEEremainder(angle, 360.0);
            if (angle === -180.0) {
                angle = 180.0;
            }
        }
    } else if (angle <= -180.0) {
        if (angle > (-540.0)) {
            angle = angle + 360.0;
        } else {
            angle = Math.IEEEremainder(angle, 360.0);
            if (angle === -180.0) {
                angle = 180.0;
            }
        }
    }
    return angle;
};
armyc2.c2sd.graphics2d.Arc2D.OPEN = 0;
armyc2.c2sd.graphics2d.Arc2D.CHORD = 1;
armyc2.c2sd.graphics2d.Arc2D.PIE = 2;
