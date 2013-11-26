var sec=sec || {};
sec.geo=sec.geo || {};
sec.geo.shape=sec.geo.shape || {};
sec.geo.shape.Track=function()
{

    //﻿Clazz.declarePackage ("sec.geo.shape");
    //Clazz.load (null, "sec.geo.shape.Track", ["java.util.ArrayList"], function () {
    //c$ = Clazz.decorateAsClass (function () {
    this.elements = null;
    //Clazz.instantialize (this, arguments);
    //}, sec.geo.shape, "Track");
    //Clazz.makeConstructor (c$, 
    //function () {
    this.elements =  new java.util.ArrayList ();
    //});
    //Clazz.defineMethod (c$, "addRoute", 
    this.addRoute=function (route) {
        this.elements.add (route);
    };//, "sec.geo.shape.Route");
//});

};