var org=org || {};
org.gavaghan=org.gavaghan || {};
org.gavaghan.geodesy=org.gavaghan.geodesy || {};
org.gavaghan.geodesy.GeodeticMeasurement=function()
{



    //   ﻿Clazz.declarePackage ("org.gavaghan.geodesy");
    // c$ = Clazz.decorateAsClass (function () {
    this.mElevationChange = 0;
    this.mP2P = 0;
    this.mEllipsoidalDistance = 0;
    this.mAzimuth = 0;
    this.mReverseAzimuth = 0;
    //Clazz.instantialize (this, arguments);
    //}, org.gavaghan.geodesy, "GeodeticMeasurement");
    //Clazz.makeConstructor (c$, 
    //function (ellipsoidalDistance, azimuth, reverseAzimuth, elevationChange) {
    var ellipsoidalDistance;
    var azimuth;
    var reverseAzimuth;
    var elevationChange;
    if(arguments.length==4)
    {
        ellipsoidalDistance=arguments[0];
        azimuth=arguments[1];
        reverseAzimuth=arguments[2];
        elevationChange=arguments[3];
            
        this.mEllipsoidalDistance = ellipsoidalDistance;
        this.mAzimuth = azimuth;
        this.mReverseAzimuth = reverseAzimuth;
        this.mElevationChange = elevationChange;
        this.mP2P = Math.sqrt (ellipsoidalDistance * ellipsoidalDistance + this.mElevationChange * this.mElevationChange);
    }
    //}, "~N,~N,~N,~N");
    //    Clazz.makeConstructor (c$, 
    //        function (averageCurve, elevationChange) {
    //            this.construct (averageCurve.getEllipsoidalDistance (), averageCurve.getAzimuth (), averageCurve.getReverseAzimuth (), elevationChange);
    //        }, "org.gavaghan.geodesy.GeodeticCurve,~N");
    if(arguments.length==2)
    {
        var averageCurve=arguments[0];
        elevationChange=arguments[1];
        this.mEllipsoidalDistance = averageCurve.getEllipsoidalDistance();
        this.mAzimuth = averageCurve.getAzimuth();
        this.mReverseAzimuth = averageCurve.getReverseAzimuth();
        this.mElevationChange = elevationChange;                
    }
    //Clazz.defineMethod (c$, "getElevationChange", 
    this.getElevationChange=function () {
        return this.mElevationChange;
    };//);
    //Clazz.defineMethod (c$, "getPointToPointDistance", 
    this.getPointToPointDistance=function () {
        return this.mP2P;
    };//);
    //Clazz.overrideMethod (c$, "toString", 
    this.toString=function () {
        var buffer = "";
        buffer += "s=";
        buffer += this.mEllipsoidalDistance;
        buffer += ";a12=";
        buffer += this.mAzimuth;
        buffer += ";a21=";
        buffer += this.mReverseAzimuth;
        buffer += ";";
        buffer += ("elev12=");
        buffer += (this.mElevationChange);
        buffer += (";p2p=");
        buffer += (this.mP2P);
        return buffer;
    };//);

};