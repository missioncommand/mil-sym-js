var sec=sec || {};
sec.sun=sec.sun || {};
sec.sun.awt=sec.sun.awt || {};
sec.sun.awt.geom=sec.sun.awt.geom || {};
sec.sun.awt.geom.Edge=function()
{
    //﻿Clazz.declarePackage ("sec.sun.awt.geom");
    //c$ = Clazz.decorateAsClass (function () {
    this.curve = null;
    this.ctag = 0;
    this.etag = 0;
    this.activey = 0;
    this.equivalence = 0;
    this.lastEdge = null;
    this.lastResult = 0;
    this.lastLimit = 0;
    //Clazz.instantialize (this, arguments);
    //}, sec.sun.awt.geom, "Edge");
    //Clazz.makeConstructor (c$, 
    //function (c, ctag) {
    //this.construct (c, ctag, 0);
    //}, "sec.sun.awt.geom.CurveObject,~N");
    //Clazz.makeConstructor (c$, 
    //function (c, ctag, etag) {
    var c=arguments[0];
    var ctag=arguments[1];
    
    var etag=0;
    if(arguments.length===3)
        etag=arguments[2];
            
    this.curve = c;
    this.ctag = ctag;
    this.etag = etag;
    //}, "sec.sun.awt.geom.CurveObject,~N,~N");
    
    //Clazz.defineMethod (c$, "getCurve", 
    this.getCurve=function () {
        return this.curve;
    };//);
    //Clazz.defineMethod (c$, "getCurveTag", 
    this.getCurveTag=function () {
        return this.ctag;
    };//);
    //Clazz.defineMethod (c$, "getEdgeTag", 
    this.getEdgeTag=function () {
        return this.etag;
    };//);
    //Clazz.defineMethod (c$, "setEdgeTag", 
    this.setEdgeTag=function (etag) {
        this.etag = etag;
    };//, "~N");
    //Clazz.defineMethod (c$, "getEquivalence", 
    this.getEquivalence=function () {
        return this.equivalence;
    };//);
    //Clazz.defineMethod (c$, "setEquivalence", 
    this.setEquivalence=function (eq) {
        this.equivalence = eq;
    };//, "~N");
    //Clazz.defineMethod (c$, "compareTo", 
    this.compareTo=function (other, yrange) {
        //alert(yrange);
        if (other === this.lastEdge && yrange[0] < this.lastLimit) {
            if (yrange[1] > this.lastLimit) {
                yrange[1] = this.lastLimit;
            }
            return this.lastResult;
        }
        if (this === other.lastEdge && yrange[0] < other.lastLimit) {
            if (yrange[1] > other.lastLimit) {
                yrange[1] = other.lastLimit;
            }
            return 0 - other.lastResult;
        }
        //alert(this.curve);
        var ret = this.curve.compareTo (other.curve, yrange);
        //alert(ret);
        this.lastEdge = other;
        this.lastLimit = yrange[1];
        this.lastResult = ret;
        return ret;
    };//, "sec.sun.awt.geom.Edge,~A");
    //Clazz.defineMethod (c$, "record", 
    this.record=function (yend, etag) {
        this.activey = yend;
        this.etag = etag;
    };//, "~N,~N");
    //Clazz.defineMethod (c$, "isActiveFor", 
    this.isActiveFor=function (y, etag) {
        return (this.etag == etag && this.activey >= y);
    };//, "~N,~N");
    //Clazz.overrideMethod (c$, "toString", 
    this.toString=function () {
        return ("Edge[" + this.curve + ", " + (this.ctag == 0 ? "L" : "R") + ", " + (this.etag == 1 ? "I" : (this.etag == -1 ? "O" : "N")) + "]");
    };//);
};

//Clazz.defineStatics (c$,
//  "INIT_PARTS", 4,
//"GROW_PARTS", 10);
sec.sun.awt.geom.Edge.INIT_PARTS=4;
sec.sun.awt.geom.Edge.GROW_PARTS=10;