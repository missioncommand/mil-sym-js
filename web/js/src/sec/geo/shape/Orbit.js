var sec=sec || {};
sec.geo=sec.geo || {};
sec.geo.shape=sec.geo.shape || {};
sec.geo.shape.Orbit=function()
{


    //﻿Clazz.declarePackage ("sec.geo.shape");
    //Clazz.load (null, "sec.geo.shape.Orbit", ["java.util.ArrayList", "sec.geo.GeoBlock", "$.GeoEllipse", "$.ShapeObject", "sec.sun.awt.geom.Area"], function () {
    //c$ = Clazz.decorateAsClass (function () {
    this.minAltitudeMeters = 0;
    this.maxAltitudeMeters = 0;
    this.maxDistanceMeters = 0;
    this.flatnessDistanceMeters = 0;
    this.altitudeMode = null;
    this.shape = null;
    this.limit = 0;
    this.widthMeters = 0;
    this.points = null;
    //Clazz.instantialize (this, arguments);
    //}, sec.geo.shape, "Orbit");
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
    //Clazz.defineMethod (c$, "setWidth", 
    this.setWidth=function (widthMeters) {
        this.widthMeters = widthMeters;
        this.shapeChanged ();
    };//, "~N");
    //Clazz.defineMethod (c$, "createShape", 
    this.createShape=function () {
        var orbit =  new sec.sun.awt.geom.Area ();
        var previousPoint = null;
        var point;
        var j=0;
        //for (var point, $point = this.points.iterator (); $point.hasNext () && ((point = $point.next ()) || true);) 
        for (j=0;j<this.points.size();j++) 
        {
            point=this.points.get(j);
            var ellipse =  new sec.geo.GeoEllipse (point, this.widthMeters, this.widthMeters, this.maxDistanceMeters, this.flatnessDistanceMeters, this.limit);
            var el =  new sec.geo.ShapeObject (ellipse);
            var rhs =  new sec.sun.awt.geom.Area (el);
            orbit.add (rhs);
            if (previousPoint != null) {
                var block =  new sec.geo.GeoBlock (previousPoint, point, this.widthMeters, this.maxDistanceMeters, this.flatnessDistanceMeters, this.limit);
                var bl =  new sec.geo.ShapeObject (block);
                var rhs2 =  new sec.sun.awt.geom.Area (bl);
                orbit.add (rhs2);
            }
            previousPoint = point;
        }
        return orbit;
    };//);
    //Clazz.defineMethod (c$, "getShape", 
    this.getShape=function () {
        if (this.shape == null) {
            this.shape = this.createShape ();
        }
        return this.shape;
    };//)
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