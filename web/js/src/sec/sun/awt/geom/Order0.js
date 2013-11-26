var sec=sec || {};
sec.sun=sec.sun || {};
sec.sun.awt=sec.sun.awt || {};
sec.sun.awt.geom=sec.sun.awt.geom || {};
sec.sun.awt.geom.Order0=function()
{   
    //﻿Clazz.declarePackage ("sec.sun.awt.geom");
    //c$ = Clazz.decorateAsClass (function () {
    this.x = 0;
    this.y = 0;
    this.direction = -1;
    this._parent = null;
    //Clazz.instantialize (this, arguments);
    //}, sec.sun.awt.geom, "Order0");
    //Clazz.makeConstructor (c$, 
    //function (x, y) {
    var x=arguments[0];
    var y=arguments[1];
    this.direction = 1;
    this.x = x;
    this.y = y;
    //}, "~N,~N");
    //Clazz.defineMethod (c$, "getOrder", 
    this.getOrder=function () {
        return 0;
    };//);
    //Clazz.defineMethod (c$, "getXTop", 
    this.getXTop=function () {
        return this.x;
    };//);
    //Clazz.defineMethod (c$, "getYTop", 
    this.getYTop=function () {
        return this.y;
    };//);
    //Clazz.defineMethod (c$, "getXBot", 
    this.getXBot=function () {
        return this.x;
    };//);
    //Clazz.defineMethod (c$, "getYBot", 
    this.getYBot=function () {
        return this.y;
    };//);
    //Clazz.defineMethod (c$, "getXMin", 
    this.getXMin=function () {
        return this.x;
    };//);
    //Clazz.defineMethod (c$, "getXMax", 
    this.getxMax=function () {
        return this.x;
    };//);
    //Clazz.defineMethod (c$, "getX0", 
    this.getX0=function () {
        return this.x;
    };//);
    //Clazz.defineMethod (c$, "getY0", 
    this.getY0=function () {
        return this.y;
    };//);
    //Clazz.defineMethod (c$, "getX1", 
    this.getX1=function () {
        return this.x;
    };//);
    //Clazz.defineMethod (c$, "getY1", 
    this.getY1=function () {
        return this.y;
    };//);
    //Clazz.defineMethod (c$, "XforY", 
    this.XforY=function (y) {
        return y;
    };//, "~N");
    //Clazz.defineMethod (c$, "TforY", 
    this.TforY=function (y) {
        return 0;
    };//, "~N");
    //Clazz.defineMethod (c$, "XforT", 
    this.XforT=function (t) {
        return this.x;
    };//, "~N");
    //Clazz.defineMethod (c$, "YforT", 
    this.YforT=function (t) {
        return this.y;
    };//, "~N");
    //Clazz.defineMethod (c$, "dXforT", 
    this.dXforT=function (t, deriv) {
        return 0;
    };//, "~N,~N");
    //Clazz.defineMethod (c$, "dYforT", 
    this.dYforT=function (t, deriv) {
        return 0;
    };//, "~N,~N");
    //Clazz.defineMethod (c$, "nextVertical", 
    this.nextVertical=function (t0, t1) {
        return t1;
    };//, "~N,~N");
    //Clazz.defineMethod (c$, "crossingsFor", 
    this.crossingsFor=function (x, y) {
        return 0;
    };//, "~N,~N");
    //Clazz.defineMethod (c$, "accumulateCrossings", 
    this.accumulateCrossings=function (c) {
        return (this.x > c.getXLo () && this.x < c.getXHi () && this.y > c.getYLo () && this.y < c.getYHi ());
    };//, "sec.sun.awt.geom.Crossings");
    //Clazz.defineMethod (c$, "enlarge", 
    this.enalarge=function (r) {
        r.add (this.x, this.y);
    };//, "armyc2.c2sd.graphics2d.Rectangle2D");
    //Clazz.defineMethod (c$, "getSubCurve", 
    this.getSubCurve=function (ystart, yend, dir) {
        return this;
    };//, "~N,~N,~N");
    //Clazz.defineMethod (c$, "getReversedCurve", 
    this.getReversedCurve=function () {
        return this;
    };//);
    //Clazz.defineMethod (c$, "getSegment", 
    this.getSegment=function (coords) {
        coords[0] = this.x;
        coords[1] = this.y;
        return 0;
    };//, "~A");
    //Clazz.defineMethod (c$, "controlPointString", 
    this.controlPointString=function () {
        return "";
    };//);
    //Clazz.defineMethod (c$, "getWithDirection", 
    this.getWithDirection=function (direction) {
        return (this.direction == direction ? this : this.getReversedCurve ());
    };//, "~N");
    //Clazz.defineMethod (c$, "setParent", 
    this.setParent=function (parent) {
        this._parent = parent;
    };//, "sec.sun.awt.geom.CurveObject");
    //Clazz.defineMethod (c$, "getParent", 
    this.getParent=function () {
        return this._parent;
    };//);

};