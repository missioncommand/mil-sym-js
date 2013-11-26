var sec=sec || {};
sec.sun=sec.sun || {};
sec.sun.awt=sec.sun.awt || {};
sec.sun.awt.geom=sec.sun.awt.geom || {};
sec.sun.awt.geom.NZWindOp=function()
{

    //﻿Clazz.declarePackage ("sec.sun.awt.geom");
    //c$ = Clazz.decorateAsClass (function () {
    this.count = 0;
    //Clazz.instantialize (this, arguments);
    //}, sec.sun.awt.geom, "NZWindOp");
    //Clazz.defineMethod (c$, "newRow", 
    this.newRow=function () {
        this.count = 0;
    };//);
    //Clazz.defineMethod (c$, "classify", 
    this.classify=function (e) {
        var newCount = this.count;
        var type = (newCount == 0 ? 1 : 0);
        newCount += e.getCurve ().getDirection ();
        this.count = newCount;
        return (newCount == 0 ? -1 : type);
    };//, "sec.sun.awt.geom.Edge");
    //Clazz.defineMethod (c$, "getState", 
    this.getState=function () {
        return ((this.count == 0) ? -1 : 1);
    };//);

};