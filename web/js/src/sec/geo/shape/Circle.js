var sec=sec || {};
sec.geo=sec.geo || {};
sec.geo.shape=sec.geo.shape || {};
sec.geo.shape.Circle=function()
{

    //﻿Clazz.declarePackage ("sec.geo.shape");
    //Clazz.load (null, "sec.geo.shape.Circle", ["sec.geo.GeoEllipse", "$.GeoPoint", "$.ShapeObject"], function () {
    //    c$ = Clazz.decorateAsClass (function () {
    this.pivot = null;
    this.radiusMeters = 0;
    this.shape = null;
    this.maxDistanceMeters = 0;
    this.flatnessDistanceMeters = 0;
    this.altitudeMode = null;
    this.minAltitudeMeters = 0;
    this.maxAltitudeMeters = 0;
    this.limit = 0;
    Clazz.instantialize (this, arguments);
    //}, sec.geo.shape, "Circle");
    //Clazz.makeConstructor (c$, 
    //function () {
    this.pivot =  new sec.geo.GeoPoint ();
    this.maxDistanceMeters = 100000;
    this.flatnessDistanceMeters = 1;
    this.limit = 3;
    //});
    //Clazz.defineMethod (c$, "getShape", 
    this.getShape=function () {
        if (this.shape == null) {
            this.shape = this.createShape ();
        }
        return this.shape;
    };//);
    //Clazz.defineMethod (c$, "setRadius", 
    this.setRadius=function (radiusMeters) {
        this.radiusMeters = radiusMeters;
        this.shapeChanged ();
    };//, "~N");
    //Clazz.defineMethod (c$, "setPivot", 
    this.setPivot=function (pivot) {
        this.pivot = pivot;
        this.shapeChanged ();
    };//, "sec.geo.GeoPoint");
    //Clazz.defineMethod (c$, "createShape", 
    this.createShape=function () {
        var e =  new sec.geo.GeoEllipse (this.pivot, this.radiusMeters * 2, this.radiusMeters * 2, this.maxDistanceMeters, this.flatnessDistanceMeters, this.limit);
        return  new sec.geo.ShapeObject (e);
    };//);
    //Clazz.defineMethod (c$, "shapeChanged", 
    this.shapeChanged=function () {
        this.shape = null;
    };//);
    //Clazz.defineMethod (c$, "getMinAltitude", 
    this.getMinAltitude=function () {
        return this.minAltitudeMeters;
    };//);
    //Clazz.defineMethod (c$, "setMinAltitude", 
    this.setMinAltitude=function (minAltitudeMeters) {
        this.minAltitudeMeters = minAltitudeMeters;
        this.shapeChanged ();
    };//, "~N");
    //Clazz.defineMethod (c$, "getMaxAltitude", 
    this.getMaxAltitude=function () {
        return this.maxAltitudeMeters;
    };//);
    //Clazz.defineMethod (c$, "setMaxAltitude", 
    this.setMaxAltitude=function (maxAltitudeMeters) {
        this.maxAltitudeMeters = maxAltitudeMeters;
        this.shapeChanged ();
    };//, "~N");
    //Clazz.defineMethod (c$, "setMaxDistance", 
    this.setMaxDistance=function (maxDistanceMeters) {
        this.maxDistanceMeters = maxDistanceMeters;
        this.shapeChanged ();
    };//, "~N");
    //Clazz.defineMethod (c$, "setFlatness", 
    this.setFlatness=function (flatnessDistanceMeters) {
        this.flatnessDistanceMeters = flatnessDistanceMeters;
        this.shapeChanged ();
    };//, "~N");
    //Clazz.defineMethod (c$, "setLimit", 
    this.setLimit=function (limit) {
        this.limit = limit;
        this.shapeChanged ();
    };//, "~N");
    //Clazz.defineMethod (c$, "getAltitudeMode", 
    this.getAltitudeMode=function () {
        return this.altitudeMode;
    };//);
    //Clazz.defineMethod (c$, "setAltitudeMode", 
    this.setAltitudeMode=function (altitudeMode) {
        this.altitudeMode = altitudeMode;
    };//, "sec.geo.kml.KmlOptions.AltitudeMode");
//});
};
