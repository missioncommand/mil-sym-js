var sec=sec || {};
sec.sun=sec.sun || {};
sec.sun.awt=sec.sun.awt || {};
sec.sun.awt.geom=sec.sun.awt.geom || {};
sec.sun.awt.geom.Enumeration=function()
{

    //﻿Clazz.declarePackage ("sec.sun.awt.geom");
    //c$ = Clazz.decorateAsClass (function () {
    this._vector = null;
    this.currentIndex = 0;
    //Clazz.instantialize (this, arguments);
    //}, sec.sun.awt.geom, "Enumeration");
    //Clazz.makeConstructor (c$, 
    //function (vector) {
    var vector=arguments[0];
    this._vector = vector;
    //}, "java.util.ArrayList");
    //Clazz.defineMethod (c$, "nextElement", 
    this.nextElement=function () {
        if (this.currentIndex < this._vector.size ()) 
            return this._vector.get(this.currentIndex++);
        else return null;
    };//);
    //Clazz.defineMethod (c$, "hasMoreElements", 
    this.hasMoreElements=function () {
        if (this.currentIndex < this._vector.size ()) 
            return true;
        else 
            return false;
    };//);
};