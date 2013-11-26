var sec=sec || {};
sec.sun=sec.sun || {};
sec.sun.awt=sec.sun.awt || {};
sec.sun.awt.geom=sec.sun.awt.geom || {};
sec.sun.awt.geom.EOWindOp=function()
{
    //﻿Clazz.declarePackage ("sec.sun.awt.geom");
    //c$ = Clazz.decorateAsClass (function () {
    this.inside = false;
    //Clazz.instantialize (this, arguments);
    //}, sec.sun.awt.geom, "EOWindOp");
    //Clazz.defineMethod (c$, "newRow", 
    this.newRow=function () {
        this.inside = false;
    };//);
    //Clazz.defineMethod (c$, "classify", 
    this.classify=function (e) {
        var newInside = !this.inside;
        this.inside = newInside;
        return (newInside ? 1 : -1);
    };//, "sec.sun.awt.geom.Edge");
    //Clazz.defineMethod (c$, "getState", 
    this.getState=function () {
        return (this.inside ? 1 : -1);
    };//);
};
