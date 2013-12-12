var sec=sec || {};
sec.sun=sec.sun || {};
sec.sun.awt=sec.sun.awt || {};
sec.sun.awt.geom=sec.sun.awt.geom || {};
sec.sun.awt.geom.Order0=function()
{   
    this.x = 0;
    this.y = 0;
    this.direction = -1;
    this._parent = null;
    var x=arguments[0];
    var y=arguments[1];
    this.direction = 1;
    this.x = x;
    this.y = y;
    this.getOrder=function () {
        return 0;
    };
    this.getXTop=function () {
        return this.x;
    };
    this.getYTop=function () {
        return this.y;
    };
    this.getXBot=function () {
        return this.x;
    };
    this.getYBot=function () {
        return this.y;
    };
    this.getXMin=function () {
        return this.x;
    };
    this.getxMax=function () {
        return this.x;
    };
    this.getX0=function () {
        return this.x;
    };
    this.getY0=function () {
        return this.y;
    };
    this.getX1=function () {
        return this.x;
    };
    this.getY1=function () {
        return this.y;
    };
    this.XforY=function (y) {
        return y;
    };
    this.TforY=function (y) {
        return 0;
    };
    this.XforT=function (t) {
        return this.x;
    };
    this.YforT=function (t) {
        return this.y;
    };
    this.dXforT=function (t, deriv) {
        return 0;
    };
    this.dYforT=function (t, deriv) {
        return 0;
    };
    this.nextVertical=function (t0, t1) {
        return t1;
    };
    this.crossingsFor=function (x, y) {
        return 0;
    };
    this.accumulateCrossings=function (c) {
        return (this.x > c.getXLo () && this.x < c.getXHi () && this.y > c.getYLo () && this.y < c.getYHi ());
    };
    this.enalarge=function (r) {
        r.add (this.x, this.y);
    };
    this.getSubCurve=function (ystart, yend, dir) {
        return this;
    };
    this.getReversedCurve=function () {
        return this;
    };
    this.getSegment=function (coords) {
        coords[0] = this.x;
        coords[1] = this.y;
        return 0;
    };
    this.controlPointString=function () {
        return "";
    };
    this.getWithDirection=function (direction) {
        return (this.direction === direction ? this : this.getReversedCurve ());
    };
    this.setParent=function (parent) {
        this._parent = parent;
    };
    this.getParent=function () {
        return this._parent;
    };
};