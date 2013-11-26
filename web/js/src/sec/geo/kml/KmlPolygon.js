var sec=sec || {};
sec.geo=sec.geo || {};
sec.geo.kml=sec.geo.kml || {};
sec.geo.kml.KmlPolygon=function()
{
    //﻿Clazz.declarePackage ("sec.geo.kml");
    //Clazz.load (["org.gavaghan.geodesy.Ellipsoid", "sec.geo.kml.KmlOptions"], "sec.geo.kml.KmlPolygon", ["java.util.ArrayList", "sec.geo.utilities.StringBuilder"], function () {
    //c$ = Clazz.decorateAsClass (function () {
    this.points = null;
    this.altitudeMode = null;
    this.altitudeModeField = "#ALTITUDEMODE#";
    
    this.PREFIX = null;
    this.SUFFIX = "\t\t\t\t\t</coordinates></LinearRing></outerBoundaryIs>\n\t\t\t\t</Polygon>\n";
	this.PREFIX = "" +
			"				<Polygon>\n" +
			"					<tessellate>1</tessellate>\n" +
			"					<altitudeMode>"+this.altitudeModeField+"</altitudeMode>\n" +
			"					<outerBoundaryIs><LinearRing><coordinates>";
	this.SUFFIX = "" +
			"					</coordinates></LinearRing></outerBoundaryIs>\n" +
			"				</Polygon>\n";
    
    
    
    
    
    
    this.altitudeMode = sec.geo.kml.KmlOptions.AltitudeMode.ABSOLUTE;
    //this.PREFIX = "\t\t\t\t<Polygon>\n\t\t\t\t\t<tessellate>1</tessellate>\n\t\t\t\t\t<altitudeMode>" + this.altitudeModeField + "</altitudeMode>\n" + "					<outerBoundaryIs><LinearRing><coordinates>";
    this.points =  new java.util.ArrayList ();
    //Clazz.makeConstructor (c$, 
    //function (points, altitudeMode) {
    //alert(arguments.length);
    if(arguments.length==2)
    {
        var points=arguments[0];
        var altitudeMode=arguments[1];
        //this.construct ();
        this.points.addAll(points);
        this.altitudeMode = altitudeMode;
        //alert(points.get(0).getLongitude());
    }
    //Clazz.defineMethod (c$, "addPoint", 
    this.addPoint=function (point) {
        this.points.add (point);
    };//, "sec.geo.shape.Point");
    //Clazz.defineMethod (c$, "addPoints", 
    this.addPoints=function (points) {
        this.points.addAll (points);
    };//, "java.util.ArrayList");
    //Clazz.overrideMethod (c$, "toString", 
    this.toString=function () {
        var sb =  new sec.geo.utilities.StringBuilder ();
        sb.append (this.PREFIX);
        sb.append (this.toCoordString ());
        sb.append (this.SUFFIX);
        var altitudeModeIndex = sb.indexOf (this.altitudeModeField);
        var altitudeModeLength = this.altitudeModeField.length;
        if (this.altitudeMode !== null) sb.replace (altitudeModeIndex, altitudeModeIndex + altitudeModeLength, this.altitudeMode.toString ());
        return sb.toString ();
    };//);
    //Clazz.defineMethod (c$, "toCoordString", 
    this.toCoordString=function () {
        var sb =  new sec.geo.utilities.StringBuilder ();
        var orderedPoints = this.getPointsCounterClockwise ();
        if (orderedPoints === null) return "";
        var point;
        //for (var point, $point = orderedPoints.iterator (); $point.hasNext () && ((point = $point.next ()) || true);) 
        for (var j=0; j<orderedPoints.size();j++) 
        {
            point=orderedPoints.get(j);
            //alert(point.getLongitude ());
            sb.append (new Double (point.getLongitude ()));
            sb.append (",");
            sb.append (new Double (point.getLatitude ()));
            sb.append (",");
            sb.append (new Double (point.getAltitude ()));
            sb.append (" ");
            //alert(sb.toString());
        }
        point = orderedPoints.get (0);
        if (!point.equals (orderedPoints.get (orderedPoints.size () - 1))) {
            sb.append (new Double (point.getLongitude ()));
            sb.append (",");
            sb.append (new Double (point.getLatitude ()));
            sb.append (",");
            sb.append (new Double (point.getAltitude ()));
            sb.append (" ");
        }
        return sb.toString ();
    };//);
    //Clazz.defineMethod (c$, "getAltitudeMode", 
    this.getAltitudeMode=function () {
        return this.altitudeMode;
    };//);
    //Clazz.defineMethod (c$, "setAltitudeMode", 
    this.setAltitudeMode=function (altitudeMode) {
        this.altitudeMode = altitudeMode;
    };//, "sec.geo.kml.KmlOptions.AltitudeMode");
    //Clazz.defineMethod (c$, "getPointsClockwise", 
    this.getPointsClockwise=function () {
        if (this.points === null || this.points.size () < 3) return null;
        var result = this.subList (this.points, 0, this.points.size () - 1);
        var order = this.getPointOrder ();
        if (order < 0) {
            result = this.reverse (result);
            return result;
        } else return result;
    };//);
    //Clazz.defineMethod (c$, "getPointsCounterClockwise", 
    this.getPointsCounterClockwise=function () {
        if (this.points === null || this.points.size () < 3) return null;
        var result = this.subList (this.points, 0, this.points.size () - 1);
        var order = this.getPointOrder ();
        if (order > 0) {
            result = this.reverse (result);
            return result;
        } else return result;
    };//);
    //Clazz.defineMethod (c$, "getPointOrder", 
    this.getPointOrder=function () {
        if (this.points === null || this.points.size () < 3) return 0;
        var n = this.points.size ();
        var j;
        var k;
        var count = 0;
        var z;
        for (var i = 0; i < n; i++) {
            j = (i + 1) % n;
            k = (i + 2) % n;
            z = (this.points.get (j).getLongitude () - this.points.get (i).getLongitude ()) * (this.points.get (k).getLatitude () - this.points.get (i).getLatitude ());
            z -= (this.points.get (j).getLatitude () - this.points.get (i).getLatitude ()) * (this.points.get (k).getLongitude () - this.points.get (i).getLongitude ());
            if (z < 0) count--;
            else if (z > 0) count++;
        }
        if (count > 0) return -1;
        else if (count < 0) return 1;
        else return 0;
    };//);
    //Clazz.defineMethod (c$, "subList", 
    this.subList = function (al, fromIndex, toIndex) {
        var result =  new java.util.ArrayList ();
        var j = 0;
        for (j = fromIndex; j < toIndex; j++) result.add (al.get (j));

        return result;
    };//, $fz.isPrivate = true, $fz), "java.util.ArrayList,~N,~N");
    //Clazz.defineMethod (c$, "reverse", 
    this.reverse = function (al) {
        var j = 0;
        var result =  new java.util.ArrayList ();
        for (j = al.size () - 1; j >= 0; j--) result.add (al.get (j));

        return result;
    };//, $fz.isPrivate = true, $fz), "java.util.ArrayList");
//c$.REFERENCE_ELLIPSOID = c$.prototype.REFERENCE_ELLIPSOID = org.gavaghan.geodesy.Ellipsoid.WGS84;
//});
};
sec.geo.kml.KmlPolygon.REFERENCE_ELLIPSOID=org.gavaghan.geodesy.Ellipsoid.WGS84;
