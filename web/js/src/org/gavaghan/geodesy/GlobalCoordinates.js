var org=org || {};
org.gavaghan=org.gavaghan || {};
org.gavaghan.geodesy=org.gavaghan.geodesy || {};
org.gavaghan.geodesy.GlobalCoordinates=function()
{
    //﻿Clazz.declarePackage ("org.gavaghan.geodesy");
    //c$ = Clazz.decorateAsClass (function () {
    this.mLatitude = 0;
    this.mLongitude = 0;
    //Clazz.instantialize (this, arguments);
    //}, org.gavaghan.geodesy, "GlobalCoordinates");
    //Clazz.makeConstructor (c$, 
    //function (latitude, longitude) {
    var latitude=arguments[0];
    var longitude=arguments[1];
    this.mLatitude = latitude;
    this.mLongitude = longitude;
    //this.canonicalize ();
    org.gavaghan.geodesy.GlobalCoordinates.canonicalize(this);
    //}, "~N,~N");
    //Clazz.defineMethod (c$, "canonicalize", 
    this.canonicalize = function () 
    {
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
    //Clazz.defineMethod (c$, "setLatitude", 
    this.setLatitude=function (latitude) {
        this.mLatitude = latitude;
        //this.canonicalize ();
        org.gavaghan.geodesy.GlobalCoordinates.canonicalize (this);
    };//, "~N");
    //Clazz.defineMethod (c$, "getLongitude", 
    this.getLongitude=function () {
        return this.mLongitude;
    };//);
    //Clazz.defineMethod (c$, "setLongitude", 
    this.setLongitude=function (longitude) {
        this.mLongitude = longitude;
        //this.canonicalize ();
        org.gavaghan.geodesy.GlobalCoordinates.canonicalize(this);
    };//, "~N");
    //Clazz.defineMethod (c$, "compareTo", 
    this.compareTo=function (other) {
        var retval;
        if (this.mLongitude < other.mLongitude) retval = -1;
        else if (this.mLongitude > other.mLongitude) retval = 1;
        else if (this.mLatitude < other.mLatitude) retval = -1;
        else if (this.mLatitude > other.mLatitude) retval = 1;
        else retval = 0;
        return retval;
    };//, "org.gavaghan.geodesy.GlobalCoordinates");
    //Clazz.overrideMethod (c$, "hashCode", 
    this.hashCode=function () {
        return (Math.round ((this.mLongitude * this.mLatitude * 1000000 + 1021))) * 1000033;
    };//);
    //Clazz.overrideMethod (c$, "equals", 
    this.equals=function (obj) {
        if (!(Clazz.instanceOf (obj, org.gavaghan.geodesy.GlobalCoordinates))) return false;
        var other = obj;
        return (this.mLongitude === other.mLongitude) && (this.mLatitude === other.mLatitude);
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
        return buffer;
    };//);
};
    org.gavaghan.geodesy.GlobalCoordinates.canonicalize = function (that) 
    {
        that.mLatitude = (that.mLatitude + 180) % 360;
        if (that.mLatitude < 0) that.mLatitude += 360;
        that.mLatitude -= 180;
        if (that.mLatitude > 90) {
            that.mLatitude = 180 - that.mLatitude;
            that.mLongitude += 180;
        } else if (that.mLatitude < -90) {
            that.mLatitude = -180 - that.mLatitude;
            that.mLongitude += 180;
        }
        that.mLongitude = ((that.mLongitude + 180) % 360);
        if (that.mLongitude <= 0) that.mLongitude += 360;
        that.mLongitude -= 180;
    };//, $fz.isPrivate = true, $fz));
