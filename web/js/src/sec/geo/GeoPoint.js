var sec=sec || {};
sec.geo=sec.geo || {};
sec.geo.GeoPoint=function()
{
    //    ﻿Clazz.declarePackage ("sec.geo");
    //    c$ = Clazz.decorateAsClass (function () {
    this.x = 0;
    this.y = 0;
    //        Clazz.instantialize (this, arguments);
    //    }, sec.geo, "GeoPoint");
    //    Clazz.makeConstructor (c$, 
    //        function () {
    //            this.x = 0;
    //            this.y = 0;
    //        });
    //    Clazz.makeConstructor (c$, 
    //        function (longitudeDegrees, latitudeDegrees) {
    if(arguments.length==2)
    {
        var longitudeDegrees=arguments[0];
        var latitudeDegrees=arguments[1];
        this.x = longitudeDegrees;
        this.y = latitudeDegrees;
    }
    //        }, "~N,~N");
    //Clazz.defineMethod (c$, "getLatitude", 
    this.getLatitude=function () {
        return this.y;
    };//);
    //Clazz.defineMethod (c$, "setLatitude", 
    this.setLatitude=function (latitudeDegrees) {
        this.y = latitudeDegrees;
    };//, "~N");
    //Clazz.defineMethod (c$, "getLongitude", 
    this.getLongitude=function () {
        return this.x;
    };//);
    //Clazz.defineMethod (c$, "setLongitude", 
    this.setLongitude=function (longitudeDegrees) {
        this.x = longitudeDegrees;
    };//, "~N");
    //Clazz.overrideMethod (c$, "toString", 
    this.toString=function () {
        return this.x + "," + this.y;
    };//); 
    this.equals=function(x1,y1)
    {
        if(x1==this.x && y1==this.y)
            return true;
        else
            return false;
    };
};