var sec=sec || {};
sec.geo=sec.geo || {};
sec.geo.shape=sec.geo.shape || {};
sec.geo.shape.Radarc=function()
{

    //﻿Clazz.declarePackage ("sec.geo.shape");
    //Clazz.load (null, "sec.geo.shape.Radarc", ["sec.geo.GeoArc", "$.GeoEllipse", "$.ShapeObject", "sec.sun.awt.geom.Area"], function () {
    //c$ = Clazz.decorateAsClass (function () {
    this.minAltitudeMeters = 0;
    this.maxAltitudeMeters = 0;
    this.shape = null;
    this.maxDistanceMeters = 0;
    this.flatnessDistanceMeters = 0;
    this.minRadiusMeters = 0;
    this.leftAzimuthDegrees = 0;
    this.rightAzimuthDegrees = 0;
    this.pivot = null;
    this.radiusMeters = 0;
    this.altitudeMode = null;
    this.limit = 0;
    this.maxDistanceMeters = 100000;
    this.flatnessDistanceMeters = 1;
    this.limit = 4;
    //});
    //Clazz.defineMethod (c$, "setRightAzimuthDegrees", 
    this.setRightAzimuthDegrees=function (rightAzimuthDegrees) {
        this.rightAzimuthDegrees = rightAzimuthDegrees;
        this.shapeChanged ();
    };//, "~N");
    //Clazz.defineMethod (c$, "setLeftAzimuthDegrees", 
    this.setLeftAzimuthDegrees=function (leftAzimuthDegrees) {
        this.leftAzimuthDegrees = leftAzimuthDegrees;
        this.shapeChanged ();
    };//, "~N");
    //Clazz.defineMethod (c$, "setMinRadius", 
    this.setMinRadius=function (minRadiusMeters) {
        this.minRadiusMeters = minRadiusMeters;
        this.shapeChanged ();
    };//, "~N");
    //Clazz.defineMethod (c$, "shapeChanged", 
    this.shapeChanged=function () {
        this.shape = null;
    };//);
    //Clazz.defineMethod (c$, "createShape", 
    this.createShape=function () {
        var arc =  new sec.geo.GeoArc (this.pivot, this.radiusMeters * 2, this.radiusMeters * 2, this.leftAzimuthDegrees, this.rightAzimuthDegrees, this.maxDistanceMeters, this.flatnessDistanceMeters, this.limit);
        var arcObj =  new sec.geo.ShapeObject (arc);
        var shape1 =  new sec.sun.awt.geom.Area (arcObj);
        var ellipse =  new sec.geo.GeoEllipse (this.pivot, this.minRadiusMeters * 2, this.minRadiusMeters * 2, this.maxDistanceMeters, this.flatnessDistanceMeters, this.limit);
        var ellipseObj =  new sec.geo.ShapeObject (ellipse);
        shape1.subtract ( new sec.sun.awt.geom.Area (ellipseObj));
        return shape1;
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
    //Clazz.defineMethod (c$, "getShape", 
    this.getShape=function () {
        if (this.shape === null) {
            this.shape = this.createShape ();
        }
        return this.shape;
    };//);
//});

};