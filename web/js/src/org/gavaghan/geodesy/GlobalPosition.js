var org=org || {};
org.gavaghan=org.gavaghan || {};
org.gavaghan.geodesy=org.gavaghan.geodesy || {};
org.gavaghan.geodesy.GlobalPosition=function()
{
    //﻿Clazz.declarePackage ("org.gavaghan.geodesy");
    //Clazz.load (null, "org.gavaghan.geodesy.GlobalPosition", ["java.lang.Double"], function () {
    //    c$ = Clazz.decorateAsClass (function () {
    this.mElevation = 0;
    this.mLatitude = 0;
    this.mLongitude = 0;
    //        Clazz.instantialize (this, arguments);
    //    }, org.gavaghan.geodesy, "GlobalPosition");
    //    Clazz.makeConstructor (c$, 
    //        function (latitude, longitude, elevation) {
    var latitude;
    var longitude;
    var elevation;
    if(arguments.length==3)
    {   
        latitude=arguments[0];
        longitude=arguments[1];
        elevation=arguments[2];
        this.mLatitude = latitude;
        this.mLongitude = longitude;
        //alert(this.mLatitude);
        org.gavaghan.geodesy.GlobalPosition.canonicalize(this);
        this.mElevation = elevation;
    }
    //}, "~N,~N,~N");
    //Clazz.makeConstructor (c$, 
    //function (coords, elevation) {
    //    this.construct (coords.getLatitude (), coords.getLongitude (), elevation);
    //}, "org.gavaghan.geodesy.GlobalCoordinates,~N");
    if(arguments.length==2)
    {
        var coords=arguments[0];
        elevation=arguments[1];
        this.mLatitude = coords.getLatitude();
        this.mLongitude = coords.getLongitude();
        //this.canonicalize ();
        org.gavaghan.geodesy.GlobalPosition.canonicalize(this);
        this.mElevation = elevation;            
    }
    //Clazz.defineMethod (c$, "getElevation", 
    this.getElevation=function () {
        return this.mElevation;
    };//);
    //Clazz.defineMethod (c$, "setElevation", 
    this.setElevation=function (elevation) {
        this.mElevation = elevation;
    };//, "~N");
    //Clazz.defineMethod (c$, "compareTo", 
    this.compareTo=function (other) {
        var retval;
        if (this.mLongitude < other.mLongitude) retval = -1;
        else if (this.mLongitude > other.mLongitude) retval = 1;
        else if (this.mLatitude < other.mLatitude) retval = -1;
        else if (this.mLatitude > other.mLatitude) retval = 1;
        else retval = 0;
        if (retval == 0) {
            if (this.mElevation < other.mElevation) retval = -1;
            else if (this.mElevation > other.mElevation) retval = 1;
        }
        return retval;
    };//, "org.gavaghan.geodesy.GlobalPosition");
    //Clazz.defineMethod (c$, "hashCode", 
    this.hashCode=function () {
        var hash = Clazz.superCall (this, org.gavaghan.geodesy.GlobalPosition, "hashCode", []);
        if (this.mElevation != 0) 
            hash *= Math.round (this.mElevation);
        return hash;
    };//);
    //Clazz.defineMethod (c$, "equals", 
    this.equals=function (obj) {
        if (!(Clazz.instanceOf (obj, org.gavaghan.geodesy.GlobalPosition))) return false;
        var other = obj;
        return (this.mElevation == other.mElevation) && (Clazz.superCall (this, org.gavaghan.geodesy.GlobalPosition, "equals", [other]));
    };//, "~O");
    //Clazz.overrideMethod (c$, "toString", 
    this.toString=function () {
        var buffer = "";
        buffer += (Math.abs (this.mLatitude));
        buffer += (((this.mLatitude >= 0) ? 'N' : 'S')).charCodeAt (0);
        buffer += ((';')).charCodeAt (0);
        buffer += (Math.abs (this.mLongitude));
        buffer += (((this.mLongitude >= 0) ? 'E' : 'W')).charCodeAt (0);
        buffer += ((';')).charCodeAt (0);
        buffer += ("elevation=");
        buffer += (Double.toString (this.mElevation));
        buffer += ("m");
        return buffer;
    };//);
    //Clazz.defineMethod (c$, "canonicalize", 
    this.canonicalize = function () {
        this.mLatitude = (this.mLatitude + 180) % 360;
        if (this.mLatitude < 0) this.mLatitude += 360;
        this.mLatitude -= 180;
        if (this.mLatitude > 90) {
            this.mLatitude = 180 - this.mLatitude;
            this.mLongitude += 180;
        } else if (this.mLatitude < -90) {
            this.mLatitude = -180 - this.mLatitude;
            this.mLongitude += 180;
        }
        this.mLongitude = ((this.mLongitude + 180) % 360);
        if (this.mLongitude <= 0) this.mLongitude += 360;
        this.mLongitude -= 180;
    };//, $fz.isPrivate = true, $fz));
    //Clazz.defineMethod (c$, "getLatitude", 
    this.getLatitude=function () {
        return this.mLatitude;
    };//);
    //Clazz.defineMethod (c$, "getLongitude", 
    this.getLongitude=function () {
        return this.mLongitude;
    };//);
//});
};
org.gavaghan.geodesy.GlobalPosition.canonicalize = function (obj) {
    obj.mLatitude = (obj.mLatitude + 180) % 360;
    if (obj.mLatitude < 0) obj.mLatitude += 360;
    obj.mLatitude -= 180;
    if (obj.mLatitude > 90) {
        obj.mLatitude = 180 - obj.mLatitude;
        obj.mLongitude += 180;
    } else if (obj.mLatitude < -90) {
        obj.mLatitude = -180 - obj.mLatitude;
        obj.mLongitude += 180;
    }
    obj.mLongitude = ((obj.mLongitude + 180) % 360);
    if (obj.mLongitude <= 0) this.mLongitude += 360;
    obj.mLongitude -= 180;
};//, $fz.isPrivate = true, $fz));
