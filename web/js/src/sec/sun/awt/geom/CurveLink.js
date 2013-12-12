var sec = sec || {};
sec.sun = sec.sun || {};
sec.sun.awt = sec.sun.awt || {};
sec.sun.awt.geom = sec.sun.awt.geom || {};
sec.sun.awt.geom.CurveLink = function()
{
    this.curve = null;
    this.ytop = 0;
    this.ybot = 0;
    this.etag = 0;
    this.next = null;
    var curve = arguments[0];
    var ystart = arguments[1];
    var yend = arguments[2];
    var etag = arguments[3];
    this.curve = curve;
    this.ytop = ystart;
    this.ybot = yend;
    this.etag = etag;
    if (this.ytop < curve.getYTop() || this.ybot > curve.getYBot()) {
        throw  new InternalError("bad curvelink [" + this.ytop + "=>" + this.ybot + "] for " + curve);
    }
    this.absorb = function(link) {
        return this.absorb2(link.curve, link.ytop, link.ybot, link.etag);
    };
    this.absorb2 = function(curve, ystart, yend, etag) {
        if (this.curve !== curve || this.etag !== etag || this.ybot < ystart || this.ytop > yend)
        {
            return false;
        }
        if (ystart < curve.getYTop() || yend > curve.getYBot())
        {
            throw  new InternalError("bad curvelink [" + ystart + "=>" + yend + "] for " + curve);
        }
        this.ytop = Math.min(this.ytop, ystart);
        this.ybot = Math.max(this.ybot, yend);
        return true;
    };
    this.isEmpty = function() {
        return (this.ytop === this.ybot);
    };
    this.getCurve = function() {
        return this.curve;
    };
    this.getSubCurve = function() {
        if (this.ytop === this.curve.getYTop() && this.ybot === this.curve.getYBot())
        {
            return this.curve.getWithDirection(this.etag);
        }
        return this.curve.getSubCurve(this.ytop, this.ybot, this.etag);
    };
    this.getMoveto = function() {
        var order0 = new sec.sun.awt.geom.Order0(this.getXTop(), this.getYTop());
        return  new sec.sun.awt.geom.CurveObject(order0);
    };
    this.getXTop = function() {
        return this.curve.XforY(this.ytop);
    };
    this.getYTop = function() {
        return this.ytop;
    };
    this.getXBot = function() {
        return this.curve.XforY(this.ybot);
    };
    this.getYBot = function() {
        return this.ybot;
    };
    this.getX = function() {
        return this.curve.XforY(this.ytop);
    };
    this.getEdgeTag = function() {
        return this.etag;
    };
    this.setNext = function(link) {
        this.next = link;
    };
    this.getNext = function() {
        return this.next;
    };
};