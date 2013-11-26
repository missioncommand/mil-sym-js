var org=org || {};
org.gavaghan=org.gavaghan || {};
org.gavaghan.geodesy=org.gavaghan.geodesy || {};
org.gavaghan.geodesy.GeodeticCurve=function()
{
    //﻿Clazz.declarePackage ("org.gavaghan.geodesy");
    //c$ = Clazz.decorateAsClass (function () {
    this.mEllipsoidalDistance = 0;
    this.mAzimuth = 0;
    this.mReverseAzimuth = 0;
    //Clazz.instantialize (this, arguments);
    //}, org.gavaghan.geodesy, "GeodeticCurve");
    //Clazz.makeConstructor (c$, 
    //function (ellipsoidalDistance, azimuth, reverseAzimuth) {
    var ellipsoidalDistance=arguments[0];
    var azimuth=arguments[1];
    var reverseAzimuth=arguments[2];
    this.mEllipsoidalDistance = ellipsoidalDistance;
    this.mAzimuth = azimuth;
    this.mReverseAzimuth = reverseAzimuth;
    //}, "~N,~N,~N");
    //Clazz.defineMethod (c$, "getEllipsoidalDistance", 
    this.getEllipsoidalDistance=function () {
        return this.mEllipsoidalDistance;
    };//);
    //Clazz.defineMethod (c$, "getAzimuth", 
    this.getAzimuth=function () {
        return this.mAzimuth;
    };//);
    //Clazz.defineMethod (c$, "getReverseAzimuth", 
    this.getReverseAzimuth=function () {
        return this.mReverseAzimuth;
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
        return buffer;
    };//);

};