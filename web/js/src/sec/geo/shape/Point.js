var sec=sec || {};
sec.geo=sec.geo || {};
sec.geo.shape=sec.geo.shape || {};
sec.geo.shape.Point=function()
{


    //﻿Clazz.declarePackage ("sec.geo.shape");
    //Clazz.load (null, "sec.geo.shape.Point", ["org.gavaghan.geodesy.GlobalPosition"], function () {
    //c$ = Clazz.decorateAsClass (function () {
    this.longitudeDegrees = 0;
    this.latitudeDegrees = 0;
    this.altitudeMeters = 0;
    //Clazz.instantialize (this, arguments);
    var longitudeDegrees=arguments[0];
    var latitudeDegrees=arguments[1];    
    var altitudeMeters=0;
    this.longitudeDegrees=longitudeDegrees;
    this.latitudeDegrees=latitudeDegrees;
    if(arguments.length===3)
    {
        altitudeMeters=arguments[2];
        this.altitudeMeters=altitudeMeters;
    }
    //}, sec.geo.shape, "Point");
    //Clazz.makeConstructor (c$, 
    //function (longitudeDegrees, latitudeDegrees) {
    //this.construct (longitudeDegrees, latitudeDegrees, 0);
    //}, "~N,~N");
    //Clazz.makeConstructor (c$, 
    //   function (longitudeDegrees, latitudeDegrees, altitudeMeters) {
    //       this.longitudeDegrees = longitudeDegrees;
    //       this.latitudeDegrees = latitudeDegrees;
    //      this.altitudeMeters = altitudeMeters;
    // }, "~N,~N,~N");
    //Clazz.defineMethod (c$, "getLongitude", 
    this.getLongitude=function () {
        return this.longitudeDegrees;
    };//);
    //Clazz.defineMethod (c$, "getLatitude", 
    this.getLatitude=function () {
        return this.latitudeDegrees;
    };//);
    //Clazz.defineMethod (c$, "getAltitude", 
    this.getAltitude=function () {
        //alert(this.altitudeMeters);
        return this.altitudeMeters;
    };//);
    // Clazz.defineMethod (c$, "toGlobalPos", 
    this.toGloablePos=function () {
        return  new org.gavaghan.geodesy.GlobalPosition (this.getLatitude (), this.getLongitude (), this.getAltitude ());
    };//);
    //Clazz.overrideMethod (c$, "equals", 
    this.equals=function (o) {
        if (!(Clazz.instanceOf (o, sec.geo.shape.Point))) {
            return false;
        }
        var other = o;
        return (this.longitudeDegrees == other.longitudeDegrees) && (this.latitudeDegrees == other.latitudeDegrees) && (this.altitudeMeters == other.altitudeMeters);
    };//, "~O");
    //Clazz.overrideMethod (c$, "toString", 
    this.toString=function () {
        return "[" + this.longitudeDegrees + "," + this.latitudeDegrees + "," + this.altitudeMeters + "]";
    };//);
//});

};