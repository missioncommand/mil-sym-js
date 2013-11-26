var sec=sec || {};
sec.geo=sec.geo || {};
sec.geo.GeoPath=function()
{
    //﻿Clazz.declarePackage ("sec.geo");
    //Clazz.load (["org.gavaghan.geodesy.Ellipsoid"], "sec.geo.GeoPath", ["armyc2.c2sd.graphics2d.Arc2D", "$.FlatteningPathIterator", "$.GeneralPath", "$.Point2D", "java.util.ArrayList", "org.gavaghan.geodesy.Angle", "$.GeodeticCalculator", "$.GlobalCoordinates", "sec.geo.GeoPoint"], function () {
    //    c$ = Clazz.decorateAsClass (function () {
    this.path = null;
    this.toPoints = null;
    this.maxDistanceMeters = 0;
    this.flatnessDistanceMeters = 0;
    this.limit = 0;
    this.geoCalc = null;
    //        Clazz.instantialize (this, arguments);
    //    }, sec.geo, "GeoPath");
    //    Clazz.makeConstructor (c$, 
    //        function () {
    //            this.construct (100000, 1, 4);
    //        });
    //    Clazz.makeConstructor (c$, 
    //        function (maxDistanceMeters, flatnessDistanceMeters, limit) {
    var maxDistanceMeters=100000;
    var flatnessDistanceMeters=1;
    var limit=4;
    if(arguments.length==3)
    {
        maxDistanceMeters=arguments[0];
        flatnessDistanceMeters=arguments[1];
        limit=arguments[2];
    }
    this.path =  new armyc2.c2sd.graphics2d.GeneralPath ();
    this.toPoints =  new java.util.ArrayList ();
    this.geoCalc =  new org.gavaghan.geodesy.GeodeticCalculator ();
    this.maxDistanceMeters = maxDistanceMeters;
    this.flatnessDistanceMeters = flatnessDistanceMeters;
    this.limit = limit;
    //        }, "~N,~N,~N");
    //Clazz.defineMethod (c$, "moveTo", 
    this.moveTo=function (point) {
        this.path.moveTo (point.x, point.y);
        this.toPoints.add (point);
    };//, "sec.geo.GeoPoint");
    //Clazz.defineMethod (c$, "moveToLatLong", 
    this.moveToLatLong=function (longitudeDegrees, latitudeDegrees) {
        this.moveTo ( new sec.geo.GeoPoint (longitudeDegrees, latitudeDegrees));
    };//, "~N,~N");
    //Clazz.defineMethod (c$, "lineTo", 
    this.lineTo=function (point) {
        var newPath =  new armyc2.c2sd.graphics2d.GeneralPath ();
        var lastPoint =  new sec.geo.GeoPoint ();
        if (this.toPoints.size () > 0) {
            lastPoint = this.toPoints.get (this.toPoints.size () - 1);
            newPath.moveTo (lastPoint.x, lastPoint.y);
        }
        var start = this.toGlobalCoord (lastPoint);
        var end = this.toGlobalCoord (point);
        var curve = this.geoCalc.calculateGeodeticCurve (sec.geo.GeoPath.REFERENCE_ELLIPSOID, start, end);
        var distance = this.maxDistanceMeters;
        while (distance < curve.getEllipsoidalDistance ()) {
            var c = this.geoCalc.calculateEndingGlobalCoordinates (sec.geo.GeoPath.REFERENCE_ELLIPSOID, start, curve.getAzimuth (), distance);
            newPath.lineTo (c.getLongitude (), c.getLatitude ());
            distance += this.maxDistanceMeters;
        }
        newPath.lineTo (point.x, point.y);
        this.path.append (newPath, true);
        this.toPoints.add (point);
    };//, "sec.geo.GeoPoint");
    //Clazz.defineMethod (c$, "lineToLatLong", 
    this.lineToLatlong=function (longitudeDegrees, latitudeDegrees) {
        this.lineTo ( new sec.geo.GeoPoint (longitudeDegrees, latitudeDegrees));
    };//, "~N,~N");
    //Clazz.defineMethod (c$, "arcTo", 
    this.arcTo=function (pivot, widthMeters, heightMeters, leftAzimuthDegrees, rightAzimuthDegrees) {
        var newPath =  new armyc2.c2sd.graphics2d.GeneralPath ();
        var arc;
        if (leftAzimuthDegrees > rightAzimuthDegrees) {
            arc =  new armyc2.c2sd.graphics2d.Arc2D (-widthMeters / 2, -heightMeters / 2, widthMeters, heightMeters, leftAzimuthDegrees - 90, Math.abs ((360 - leftAzimuthDegrees) + rightAzimuthDegrees), 0);
        } else {
            arc =  new armyc2.c2sd.graphics2d.Arc2D (-widthMeters / 2, -heightMeters / 2, widthMeters, heightMeters, leftAzimuthDegrees - 90, Math.abs (leftAzimuthDegrees - rightAzimuthDegrees), 0);
        }
        var point = null;
        if (pivot != null) {
            var it =  new armyc2.c2sd.graphics2d.FlatteningPathIterator (arc.getPathIterator (null), this.flatnessDistanceMeters, this.limit);
            while (!it.isDone ()) {
                var strokePoints =  Clazz.newArray (6, 0);
                var type = it.currentSegment (strokePoints);
                var x = strokePoints[0];
                var y = strokePoints[1];
                var azimuth = org.gavaghan.geodesy.Angle.toDegrees (Math.atan2 (x, y));
                var coord =  new org.gavaghan.geodesy.GlobalCoordinates (pivot.getLatitude (), pivot.getLongitude ());
                var c = this.geoCalc.calculateEndingGlobalCoordinates (sec.geo.GeoPath.REFERENCE_ELLIPSOID, coord, azimuth,  new armyc2.c2sd.graphics2d.Point2D (0, 0).distance (x, y));
                switch (type) {
                    case 0:
                        newPath.moveTo (c.getLongitude (), c.getLatitude ());
                        var startPoint =  new sec.geo.GeoPoint (c.getLongitude (), c.getLatitude ());
                        if (this.toPoints.size () > 0 && !startPoint.equals (this.toPoints.get (this.toPoints.size () - 1))) {
                            this.lineTo (startPoint);
                        }
                        break;
                    case 1:
                        newPath.lineTo (c.getLongitude (), c.getLatitude ());
                        point =  new sec.geo.GeoPoint (c.getLongitude (), c.getLatitude ());
                        break;
                }
                it.next ();
            }
        }
        this.path.append (newPath, true);
        this.toPoints.add (point);
    };//, "sec.geo.GeoPoint,~N,~N,~N,~N");
    //Clazz.defineMethod (c$, "getToPoints", 
    this.getToPoints=function () {
        return this.toPoints;
    };//);
    //Clazz.defineMethod (c$, "closePath", 
    this.closePath=function () {
        if (this.toPoints.size () > 0 && !this.toPoints.get (0).equals (this.toPoints.get (this.toPoints.size () - 1))) {
            this.lineTo (this.toPoints.get (0));
        }
    };//);
    //Clazz.defineMethod (c$, "getPathIterator", 
    this.getPathIterator=function (at) {
        return this.path.getPathIterator (at);
    };//, "armyc2.c2sd.graphics2d.AffineTransform");
    //Clazz.overrideMethod (c$, "toString", 
    this.toString=function () {
        return this.toPoints.toString ();
    };//);
    //Clazz.defineMethod (c$, "toGlobalCoord", 
    this.toGlobalCoord=function (point) {
        return  new org.gavaghan.geodesy.GlobalCoordinates (point.getLatitude (), point.getLongitude ());
    };//, "sec.geo.GeoPoint");
//    c$.REFERENCE_ELLIPSOID = c$.prototype.REFERENCE_ELLIPSOID = org.gavaghan.geodesy.Ellipsoid.WGS84;
//});
};
sec.geo.GeoPath.REFERENCE_ELLIPSOID = org.gavaghan.geodesy.Ellipsoid.WGS84;