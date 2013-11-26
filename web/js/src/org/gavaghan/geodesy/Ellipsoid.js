var org=org || {};
org.gavaghan=org.gavaghan || {};
org.gavaghan.geodesy=org.gavaghan.geodesy || {};
org.gavaghan.geodesy.Ellipsoid=function()
{
    //﻿Clazz.declarePackage ("org.gavaghan.geodesy");
    //$ = Clazz.decorateAsClass (function () {
    this.mSemiMajorAxis = 0;
    //alert(arguments.length);
    this.mSemiMinorAxis = 0;
    this.mFlattening = 0;
    this.mInverseFlattening = 0;
    //Clazz.instantialize (this, arguments);
    //}, org.gavaghan.geodesy, "Ellipsoid");
    //Clazz.makeConstructor (c$, 
    //    ($fz = function (semiMajor, semiMinor, flattening, inverseFlattening) {
    //this.mSemiMajorAxis = semiMajor;
    //this.mSemiMinorAxis = semiMinor;
    //this.mFlattening = flattening;
    //this.mInverseFlattening = inverseFlattening;
    var semiMajor=arguments[0];
    var semiMinor=arguments[1];
    var flattening=arguments[2];
    var inverseFlattening=arguments[3];
    this.mSemiMajorAxis = semiMajor;
    this.mSemiMinorAxis = semiMinor;
    this.mFlattening = flattening;
    this.mInverseFlattening = inverseFlattening;
    //    }, $fz.isPrivate = true, $fz), "~N,~N,~N,~N");

    //alert(inverseFlattening);

    //Clazz.defineMethod (c$, "getSemiMajorAxis", 
    this.getSemiMajorAxis=function () {
        return this.mSemiMajorAxis;
    };//);
    //Clazz.defineMethod (c$, "getSemiMinorAxis", 
    this.getSemiMinorAxis=function () {
        return this.mSemiMinorAxis;
    }//);
    //Clazz.defineMethod (c$, "getFlattening", 
    this.getFlattening=function () {
        return this.mFlattening;
    };//);
    //Clazz.defineMethod (c$, "getInverseFlattening", 
    this.getInverseFlattening=function () {
        return this.mInverseFlattening;
    };//);

}
//c$.fromAAndInverseF = Clazz.defineMethod (c$, "fromAAndInverseF", 
org.gavaghan.geodesy.Ellipsoid.fromAAndInverseF= function (semiMajor, inverseFlattening) {
    var f = 1.0 / inverseFlattening;
    var b = (1.0 - f) * semiMajor;
    return  new org.gavaghan.geodesy.Ellipsoid (semiMajor, b, f, inverseFlattening);
};//, "~N,~N");
//c$.fromAAndF = Clazz.defineMethod (c$, "fromAAndF", 
org.gavaghan.geodesy.Ellipsoid.fromAAndF=function (semiMajor, flattening) {
    var inverseF = 1.0 / flattening;
    var b = (1.0 - flattening) * semiMajor;
    return  new org.gavaghan.geodesy.Ellipsoid (semiMajor, b, flattening, inverseF);
};//, "~N,~N");


//c$.WGS84 = c$.prototype.WGS84 = org.gavaghan.geodesy.Ellipsoid.fromAAndInverseF (6378137.0, 298.257223563);
//c$.GRS80 = c$.prototype.GRS80 = org.gavaghan.geodesy.Ellipsoid.fromAAndInverseF (6378137.0, 298.257222101);
//c$.GRS67 = c$.prototype.GRS67 = org.gavaghan.geodesy.Ellipsoid.fromAAndInverseF (6378160.0, 298.25);
//c$.ANS = c$.prototype.ANS = org.gavaghan.geodesy.Ellipsoid.fromAAndInverseF (6378160.0, 298.25);
//c$.WGS72 = c$.prototype.WGS72 = org.gavaghan.geodesy.Ellipsoid.fromAAndInverseF (6378135.0, 298.26);
//c$.Clarke1858 = c$.prototype.Clarke1858 = org.gavaghan.geodesy.Ellipsoid.fromAAndInverseF (6378293.645, 294.26);
//c$.Clarke1880 = c$.prototype.Clarke1880 = org.gavaghan.geodesy.Ellipsoid.fromAAndInverseF (6378249.145, 293.465);
//c$.Sphere = c$.prototype.Sphere = org.gavaghan.geodesy.Ellipsoid.fromAAndF (6371000, 0.0);

org.gavaghan.geodesy.Ellipsoid.WGS84 = org.gavaghan.geodesy.Ellipsoid.fromAAndInverseF (6378137.0, 298.257223563);
org.gavaghan.geodesy.Ellipsoid.GRS80 = org.gavaghan.geodesy.Ellipsoid.fromAAndInverseF (6378137.0, 298.257222101);
org.gavaghan.geodesy.Ellipsoid.GRS67 = org.gavaghan.geodesy.Ellipsoid.fromAAndInverseF (6378160.0, 298.25);
org.gavaghan.geodesy.Ellipsoid.ANS = org.gavaghan.geodesy.Ellipsoid.fromAAndInverseF (6378160.0, 298.25);
org.gavaghan.geodesy.Ellipsoid.WGS72 = org.gavaghan.geodesy.Ellipsoid.fromAAndInverseF (6378135.0, 298.26);
org.gavaghan.geodesy.Ellipsoid.Clarke1858 = org.gavaghan.geodesy.Ellipsoid.fromAAndInverseF (6378293.645, 294.26);
org.gavaghan.geodesy.Ellipsoid.Clarke1880 = org.gavaghan.geodesy.Ellipsoid.fromAAndInverseF (6378249.145, 293.465);
org.gavaghan.geodesy.Ellipsoid.Sphere = org.gavaghan.geodesy.Ellipsoid.fromAAndF (6371000, 0.0);
