var sec=sec || {};
sec.geo=sec.geo || {};
sec.geo.kml=sec.geo.kml || {};
sec.geo.kml.XsltCoordinateWrapper=
{

    //﻿Clazz.declarePackage ("sec.geo.kml");
    //Clazz.load (null, "sec.geo.kml.XsltCoordinateWrapper", ["java.lang.Double", "sec.geo.GeoPoint", "sec.geo.kml.KmlRenderer", "sec.geo.shape.AExtObject", "$.Circle", "$.Line", "$.Orbit", "$.Polyarc", "$.Polygon", "$.Radarc", "$.Route"], function () {
    //c$ = Clazz.declareType (sec.geo.kml, "XsltCoordinateWrapper");
    //c$.getLine = Clazz.defineMethod (c$, "getLine", 
    getLine:  function (points, altitudeMode, minAltitude, maxAltitude) {
        var line =  new sec.geo.shape.Line ();
        line.setAltitudeMode (altitudeMode);
        line.setMinAltitude (minAltitude);
        line.setMaxAltitude (maxAltitude);
        var aext =  new sec.geo.shape.AExtObject (line);
        sec.geo.kml.XsltCoordinateWrapper.addPoints (points, aext);
        return line;
    }, //"~A,sec.geo.kml.KmlOptions.AltitudeMode,~N,~N");
    //c$.getCircle = Clazz.defineMethod (c$, "getCircle", 
    getCircle:function (pivotX, pivotY, altitudeMode, radius, minAltitude, maxAltitude) {
        var circle =  new sec.geo.shape.Circle ();
        circle.setAltitudeMode (altitudeMode);
        circle.setPivot ( new sec.geo.GeoPoint (pivotX, pivotY));
        circle.setRadius (radius);
        circle.setMinAltitude (minAltitude);
        circle.setMaxAltitude (maxAltitude);
        return circle;
    }, //"~N,~N,sec.geo.kml.KmlOptions.AltitudeMode,~N,~N,~N");
    //c$.getOrbit = Clazz.defineMethod (c$, "getOrbit", 
    getOrbit:function (point1X, point1Y, point2X, point2Y, altitudeMode, width, minAltitude, maxAltitude) {
        var orbit =  new sec.geo.shape.Orbit ();
        orbit.addPoint ( new sec.geo.GeoPoint (point1X, point1Y));
        orbit.addPoint ( new sec.geo.GeoPoint (point2X, point2Y));
        orbit.setAltitudeMode (altitudeMode);
        orbit.setWidth (width);
        orbit.setMinAltitude (minAltitude);
        orbit.setMaxAltitude (maxAltitude);
        return orbit;
    }, //"~N,~N,~N,~N,sec.geo.kml.KmlOptions.AltitudeMode,~N,~N,~N");
    //c$.getRoute = Clazz.defineMethod (c$, "getRoute", 
    getRoute:function (points, altitudeMode, leftWidth, rightWidth, minAltitude, maxAltitude) {
        var route =  new sec.geo.shape.Route ();
        route.setAltitudeMode (altitudeMode);
        route.setLeftWidth (leftWidth);
        route.setRightWidth (rightWidth);
        route.setMinAltitude (minAltitude);
        route.setMaxAltitude (maxAltitude);
        var aext =  new sec.geo.shape.AExtObject (route);
        sec.geo.kml.XsltCoordinateWrapper.addPoints (points, aext);
        return route;
    }, //"~A,sec.geo.kml.KmlOptions.AltitudeMode,~N,~N,~N,~N");
    //c$.getPolygon = Clazz.defineMethod (c$, "getPolygon", 
    getPolygon:function (points, altitudeMode, minAltitude, maxAltitude) {
        var polygon =  new sec.geo.shape.Polygon ();
        polygon.setAltitudeMode (altitudeMode);
        polygon.setMinAltitude (minAltitude);
        polygon.setMaxAltitude (maxAltitude);
        var aext =  new sec.geo.shape.AExtObject (polygon);
        sec.geo.kml.XsltCoordinateWrapper.addPoints (points, aext);
        return polygon;
    }, //"~A,sec.geo.kml.KmlOptions.AltitudeMode,~N,~N");
    //c$.getRadarc = Clazz.defineMethod (c$, "getRadarc", 
    getRadarc:function (pivotX, pivotY, altitudeMode, innerRadius, outerRadius, leftAzimuth, rightAzimuth, minAltitude, maxAltitude) {
        var radarc =  new sec.geo.shape.Radarc ();
        radarc.setAltitudeMode (altitudeMode);
        radarc.setPivot ( new sec.geo.GeoPoint (pivotX, pivotY));
        radarc.setMinRadius (innerRadius);
        radarc.setRadius (outerRadius);
        radarc.setLeftAzimuthDegrees (leftAzimuth);
        radarc.setRightAzimuthDegrees (rightAzimuth);
        radarc.setMinAltitude (minAltitude);
        radarc.setMaxAltitude (maxAltitude);
        return radarc;
    }, //"~N,~N,sec.geo.kml.KmlOptions.AltitudeMode,~N,~N,~N,~N,~N,~N");
    //c$.getPolyarc = Clazz.defineMethod (c$, "getPolyarc", 
    getPolyarc:function (points, pivotX, pivotY, altitudeMode, radius, leftAzimuth, rightAzimuth, minAltitude, maxAltitude) {
        var polyarc =  new sec.geo.shape.Polyarc ();
        polyarc.setAltitudeMode(altitudeMode);
        polyarc.setPivot ( new sec.geo.GeoPoint (pivotX, pivotY));
        polyarc.setRadius (radius);
        polyarc.setLeftAzimuthDegrees (leftAzimuth);
        polyarc.setRightAzimuthDegrees (rightAzimuth);
        polyarc.setMinAltitude (minAltitude);
        polyarc.setMaxAltitude (maxAltitude);
        var aext =  new sec.geo.shape.AExtObject (polyarc);
        sec.geo.kml.XsltCoordinateWrapper.addPoints (points, aext);
        return polyarc;
    }, //"~A,~N,~N,sec.geo.kml.KmlOptions.AltitudeMode,~N,~N,~N,~N,~N");
    //c$.getLineKml = Clazz.defineMethod (c$, "getLineKml", 
    getLineKml:function (points, id, name, description, color, altitudeMode, minAltitude, maxAltitude) {
        var renderer =  new sec.geo.kml.KmlRenderer ();
        return renderer.getKml (sec.geo.kml.XsltCoordinateWrapper.getLine (points, altitudeMode, minAltitude, maxAltitude), id, name, description, color);
    }, //"~A,~S,~S,~S,~S,sec.geo.kml.KmlOptions.AltitudeMode,~N,~N");
    //c$.getCircleKml = Clazz.defineMethod (c$, "getCircleKml", 
    getCircleKml:function (pivotX, pivotY, id, name, description, color, altitudeMode, radius, minAltitude, maxAltitude) {
        var renderer =  new sec.geo.kml.KmlRenderer ();
        return renderer.getKml (sec.geo.kml.XsltCoordinateWrapper.getCircle (pivotX, pivotY, altitudeMode, radius, minAltitude, maxAltitude), id, name, description, color);
    }, //"~N,~N,~S,~S,~S,~S,sec.geo.kml.KmlOptions.AltitudeMode,~N,~N,~N");
    //c$.getOrbitKml = Clazz.defineMethod (c$, "getOrbitKml", 
    getOrbitKml:function (point1X, point1Y, point2X, point2Y, id, name, description, color, altitudeMode, width, minAltitude, maxAltitude) {
        var renderer =  new sec.geo.kml.KmlRenderer ();
        return renderer.getKml (sec.geo.kml.XsltCoordinateWrapper.getOrbit (point1X, point1Y, point2X, point2Y, altitudeMode, width, minAltitude, maxAltitude), id, name, description, color);
    }, //"~N,~N,~N,~N,~S,~S,~S,~S,sec.geo.kml.KmlOptions.AltitudeMode,~N,~N,~N");
    //c$.getRouteKml = Clazz.defineMethod (c$, "getRouteKml", 
    getRouteKml:function (points, id, name, description, color, altitudeMode, leftWidth, rightWidth, minAltitude, maxAltitude) {
        var renderer =  new sec.geo.kml.KmlRenderer ();
        return renderer.getKml (sec.geo.kml.XsltCoordinateWrapper.getRoute (points, altitudeMode, leftWidth, rightWidth, minAltitude, maxAltitude), id, name, description, color);
    }, //"~A,~S,~S,~S,~S,sec.geo.kml.KmlOptions.AltitudeMode,~N,~N,~N,~N");
    //c$.getPolygonKml = Clazz.defineMethod (c$, "getPolygonKml", 
    getPolygonKml:  function (points, id, name, description, color, altitudeMode, minAltitude, maxAltitude) {
        var renderer =  new sec.geo.kml.KmlRenderer ();
        //alert(renderer);
        return renderer.getKml (sec.geo.kml.XsltCoordinateWrapper.getPolygon (points, altitudeMode, minAltitude, maxAltitude), id, name, description, color);
    }, //"~A,~S,~S,~S,~S,sec.geo.kml.KmlOptions.AltitudeMode,~N,~N");
    //c$.getRadarcKml = Clazz.defineMethod (c$, "getRadarcKml", 
    getRadarcKml:  function (pivotX, pivotY, id, name, description, color, altitudeMode, innerRadius, outerRadius, leftAzimuth, rightAzimuth, minAltitude, maxAltitude) {
        var renderer =  new sec.geo.kml.KmlRenderer ();
        return renderer.getKml (sec.geo.kml.XsltCoordinateWrapper.getRadarc (pivotX, pivotY, altitudeMode, innerRadius, outerRadius, leftAzimuth, rightAzimuth, minAltitude, maxAltitude), id, name, description, color);
    }, //"~N,~N,~S,~S,~S,~S,sec.geo.kml.KmlOptions.AltitudeMode,~N,~N,~N,~N,~N,~N");
    //c$.getPolyarcKml = Clazz.defineMethod (c$, "getPolyarcKml", 
    getPolyarcKml:  function (points, pivotX, pivotY, id, name, description, color, altitudeMode, radius, leftAzimuth, rightAzimuth, minAltitude, maxAltitude) {
        var renderer =  new sec.geo.kml.KmlRenderer ();
        //alert('kml');
        return renderer.getKml (sec.geo.kml.XsltCoordinateWrapper.getPolyarc (points, pivotX, pivotY, altitudeMode, radius, leftAzimuth, rightAzimuth, minAltitude, maxAltitude), id, name, description, color);
    }, //"~A,~N,~N,~S,~S,~S,~S,sec.geo.kml.KmlOptions.AltitudeMode,~N,~N,~N,~N,~N");
    //c$.plotLine = Clazz.defineMethod (c$, "plotLine", 
    plotLine: function (points, altitudeMode, minAltitude, maxAltitude) {
        var renderer =  new sec.geo.kml.KmlRenderer ();
        return renderer.getCoords (sec.geo.kml.XsltCoordinateWrapper.getLine (points, altitudeMode, minAltitude, maxAltitude));
    }, //"~A,sec.geo.kml.KmlOptions.AltitudeMode,~N,~N");
    //c$.plotCircle = Clazz.defineMethod (c$, "plotCircle", 
    plotCircle:function (pivotX, pivotY, altitudeMode, radius, minAltitude, maxAltitude) {
        var renderer =  new sec.geo.kml.KmlRenderer ();
        return renderer.getCoords (sec.geo.kml.XsltCoordinateWrapper.getCircle (pivotX, pivotY, altitudeMode, radius, minAltitude, maxAltitude));
    }, //"~N,~N,sec.geo.kml.KmlOptions.AltitudeMode,~N,~N,~N");
    //c$.plotOrbit = Clazz.defineMethod (c$, "plotOrbit", 
    plotOrbit: function (point1X, point1Y, point2X, point2Y, altitudeMode, width, minAltitude, maxAltitude) {
        var renderer =  new sec.geo.kml.KmlRenderer ();
        return renderer.getCoords (sec.geo.kml.XsltCoordinateWrapper.getOrbit (point1X, point1Y, point2X, point2Y, altitudeMode, width, minAltitude, maxAltitude));
    }, //"~N,~N,~N,~N,sec.geo.kml.KmlOptions.AltitudeMode,~N,~N,~N");
    //c$.plotRoute = Clazz.defineMethod (c$, "plotRoute", 
    plotRoute: function (points, altitudeMode, leftWidth, rightWidth, minAltitude, maxAltitude) {
        var renderer =  new sec.geo.kml.KmlRenderer ();
        return renderer.getCoords (sec.geo.kml.XsltCoordinateWrapper.getRoute (points, altitudeMode, leftWidth, rightWidth, minAltitude, maxAltitude));
    }, //"~A,sec.geo.kml.KmlOptions.AltitudeMode,~N,~N,~N,~N");
    //c$.plotPolygon = Clazz.defineMethod (c$, "plotPolygon", 
    plotPolygon: function (points, altitudeMode, minAltitude, maxAltitude) {
        var renderer =  new sec.geo.kml.KmlRenderer ();
        return renderer.getCoords (sec.geo.kml.XsltCoordinateWrapper.getPolygon (points, altitudeMode, minAltitude, maxAltitude));
    }, //"~A,sec.geo.kml.KmlOptions.AltitudeMode,~N,~N");
    //c$.plotRadarc = Clazz.defineMethod (c$, "plotRadarc", 
    plotRadarc: function (pivotX, pivotY, altitudeMode, innerRadius, outerRadius, leftAzimuth, rightAzimuth, minAltitude, maxAltitude) {
        var renderer =  new sec.geo.kml.KmlRenderer ();
        return renderer.getCoords (sec.geo.kml.XsltCoordinateWrapper.getRadarc (pivotX, pivotY, altitudeMode, innerRadius, outerRadius, leftAzimuth, rightAzimuth, minAltitude, maxAltitude));
    }, //"~N,~N,sec.geo.kml.KmlOptions.AltitudeMode,~N,~N,~N,~N,~N,~N");
    //c$.plotPolyarc = Clazz.defineMethod (c$, "plotPolyarc", 
    plotPolyarc: function (points, pivotX, pivotY, altitudeMode, radius, leftAzimuth, rightAzimuth, minAltitude, maxAltitude) {
        var renderer =  new sec.geo.kml.KmlRenderer ();
        return renderer.getCoords (sec.geo.kml.XsltCoordinateWrapper.getPolyarc (points, pivotX, pivotY, altitudeMode, radius, leftAzimuth, rightAzimuth, minAltitude, maxAltitude));
    },// "~A,~N,~N,sec.geo.kml.KmlOptions.AltitudeMode,~N,~N,~N,~N,~N");

    addPoints : function (points, path) 
    {
        var coords = null;
        for (var sPoint, $sPoint = 0, $$sPoint = points; $sPoint < $$sPoint.length && ((sPoint = $$sPoint[$sPoint]) || true); $sPoint++) {
            coords = sPoint.$plit (",");
            var longitude = Double.parseDouble (coords[0]);
            var latitude = Double.parseDouble (coords[1]);
            path.addPoint ( new sec.geo.GeoPoint (longitude, latitude));
        }
    }//, $fz.isPrivate = true, $fz), "~A,sec.geo.shape.AExtObject");
};
