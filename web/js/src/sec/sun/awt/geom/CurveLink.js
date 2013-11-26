var sec=sec || {};
sec.sun=sec.sun || {};
sec.sun.awt=sec.sun.awt || {};
sec.sun.awt.geom=sec.sun.awt.geom || {};
sec.sun.awt.geom.CurveLink=function()
{
    //﻿Clazz.declarePackage ("sec.sun.awt.geom");
    //Clazz.load (null, "sec.sun.awt.geom.CurveLink", ["java.lang.InternalError", "sec.sun.awt.geom.CurveObject", "$.Order0"], function () {
    //c$ = Clazz.decorateAsClass (function () {
    this.curve = null;
    this.ytop = 0;
    this.ybot = 0;
    this.etag = 0;
    this.next = null;
    //Clazz.instantialize (this, arguments);
    //}, sec.sun.awt.geom, "CurveLink");
    //Clazz.makeConstructor (c$, 
    //function (curve, ystart, yend, etag) {
    var curve=arguments[0];
    var ystart=arguments[1];
    var yend=arguments[2];
    var etag=arguments[3];
    this.curve = curve;
    this.ytop = ystart;
    this.ybot = yend;
    this.etag = etag;
    if (this.ytop < curve.getYTop () || this.ybot > curve.getYBot ()) {
        throw  new InternalError ("bad curvelink [" + this.ytop + "=>" + this.ybot + "] for " + curve);
    }
    //}, "sec.sun.awt.geom.CurveObject,~N,~N,~N");
    //Clazz.defineMethod (c$, "absorb", 
    this.absorb=function (link) {
        return this.absorb2 (link.curve, link.ytop, link.ybot, link.etag);
    };//, "sec.sun.awt.geom.CurveLink");
    //Clazz.defineMethod (c$, "absorb2", 
    this.absorb2=function (curve, ystart, yend, etag) {
        if (this.curve !== curve || this.etag != etag || this.ybot < ystart || this.ytop > yend) 
        {
            return false;
        }
        if (ystart < curve.getYTop () || yend > curve.getYBot ()) 
        {
            throw  new InternalError ("bad curvelink [" + ystart + "=>" + yend + "] for " + curve);
        }
        this.ytop = Math.min (this.ytop, ystart);
        this.ybot = Math.max (this.ybot, yend);
        return true;
    };//, "sec.sun.awt.geom.CurveObject,~N,~N,~N");
    //Clazz.defineMethod (c$, "isEmpty", 
    this.isEmpty=function () {
        return (this.ytop == this.ybot);
    };//);
    //Clazz.defineMethod (c$, "getCurve", 
    this.getCurve=function () {
        return this.curve;
    };//);
    //Clazz.defineMethod (c$, "getSubCurve", 
    this.getSubCurve=function () {
        if (this.ytop == this.curve.getYTop () && this.ybot == this.curve.getYBot ()) 
        {
            //alert(this.etag);
            //alert(this.curve.getWithDirection (this.etag));
            return this.curve.getWithDirection (this.etag);
        }
        //alert(this.ytop);
        //alert(this.ybot);
        //alert(this.etag);
        //alert(this.curve.getSubCurve (this.ytop, this.ybot, this.etag));
        return this.curve.getSubCurve (this.ytop, this.ybot, this.etag);
    };//);
    //Clazz.defineMethod (c$, "getMoveto", 
    this.getMoveto=function () {
        var order0 =  new sec.sun.awt.geom.Order0 (this.getXTop (), this.getYTop ());
        //alert(order0);
        return  new sec.sun.awt.geom.CurveObject (order0);
    };//);
    //Clazz.defineMethod (c$, "getXTop", 
    this.getXTop=function () {
        return this.curve.XforY (this.ytop);
    };//);
    //Clazz.defineMethod (c$, "getYTop", 
    this.getYTop=function () {
        return this.ytop;
    };//);
    //Clazz.defineMethod (c$, "getXBot", 
    this.getXBot=function () {
        return this.curve.XforY (this.ybot);
    };//);
    //Clazz.defineMethod (c$, "getYBot", 
    this.getYBot=function () {
        return this.ybot;
    };//);
    //Clazz.defineMethod (c$, "getX", 
    this.getX=function () {
        return this.curve.XforY (this.ytop);
    };//);
    //Clazz.defineMethod (c$, "getEdgeTag", 
    this.getEdgeTag=function () {
        return this.etag;
    };//);
    //Clazz.defineMethod (c$, "setNext", 
    this.setNext=function (link) {
        this.next = link;
    };//, "sec.sun.awt.geom.CurveLink");
    //Clazz.defineMethod (c$, "getNext", 
    this.getNext=function () {
        //alert(this.next);
        return this.next;
    };//);
//});

};