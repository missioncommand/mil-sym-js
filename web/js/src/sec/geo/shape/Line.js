var sec=sec || {};
sec.geo=sec.geo || {};
sec.geo.shape=sec.geo.shape || {};
sec.geo.shape.Line=function()
{


    //﻿Clazz.declarePackage ("sec.geo.shape");
    //Clazz.load (null, "sec.geo.shape.Line", ["java.util.ArrayList", "sec.geo.GeoPath", "$.ShapeObject"], function () {
    //c$ = Clazz.decorateAsClass (function () {
    this.minAltitudeMeters = 0;
    this.maxAltitudeMeters = 0;
    this.shape = null;
    this.maxDistanceMeters = 0;
    this.flatnessDistanceMeters = 0;
    this.altitudeMode = null;
    this.limit = 0;
    this.points = null;
    //Clazz.instantialize (this, arguments);
    //}, sec.geo.shape, "Line");
    //Clazz.makeConstructor (c$, 
    //function () {
    this.points =  new java.util.ArrayList ();
    this.maxDistanceMeters = 100000;
    this.flatnessDistanceMeters = 1;
    this.limit = 4;
    //});
    //Clazz.defineMethod (c$, "addPoint", 
    this.addPoint=function (point) {
        this.points.add (point);
        this.shapeChanged ();
    };//, "sec.geo.GeoPoint");
    //Clazz.defineMethod (c$, "addPoints", 
    this.addPoints=function (points) {
        this.points.addAll (points);
        this.shapeChanged ();
    };//, "java.util.ArrayList");
    //Clazz.defineMethod (c$, "createShape", 
    this.createShape=function () {
        var path =  new sec.geo.GeoPath (this.maxDistanceMeters, this.flatnessDistanceMeters, this.limit);
        for (var i = 0; i < this.points.size (); i++) {
            if (i > 0) {
                path.lineTo (this.points.get (i));
            } else {
                path.moveTo (this.points.get (i));
            }
        }
        return  new sec.geo.ShapeObject (path);
    };//);
    //Clazz.defineMethod (c$, "getShape", 
    this.getShape=function () {
        if (this.shape == null) {
            this.shape = this.createShape ();
        }
        return this.shape;
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