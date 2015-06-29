var sec=sec || {};
sec.geo=sec.geo || {};
sec.geo.kml=sec.geo.kml || {};
sec.geo.kml.XsltCoordinateWrapper=
{
    getLine:  function (points, altitudeMode, minAltitude, maxAltitude) {
        var line =  new sec.geo.shape.Line ();
        line.setAltitudeMode (altitudeMode);
        line.setMinAltitude (minAltitude);
        line.setMaxAltitude (maxAltitude);
        var aext =  new sec.geo.shape.AExtObject (line);
        sec.geo.kml.XsltCoordinateWrapper.addPoints (points, aext);
        return line;
    }, 
    getCircle:function (pivotX, pivotY, altitudeMode, radius, minAltitude, maxAltitude) {
        var circle =  new sec.geo.shape.Circle ();
        circle.setAltitudeMode (altitudeMode);
        circle.setPivot ( new sec.geo.GeoPoint (pivotX, pivotY));
        circle.setRadius (radius);
        circle.setMinAltitude (minAltitude);
        circle.setMaxAltitude (maxAltitude);
        return circle;
    }, 
    getOrbit:function (point1X, point1Y, point2X, point2Y, altitudeMode, width, minAltitude, maxAltitude) {
        var orbit =  new sec.geo.shape.Orbit ();
        orbit.addPoint ( new sec.geo.GeoPoint (point1X, point1Y));
        orbit.addPoint ( new sec.geo.GeoPoint (point2X, point2Y));
        orbit.setAltitudeMode (altitudeMode);
        orbit.setWidth (width);
        orbit.setMinAltitude (minAltitude);
        orbit.setMaxAltitude (maxAltitude);
        return orbit;
    }, 
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
    }, 
    getPolygon:function (points, altitudeMode, minAltitude, maxAltitude) {
        var polygon =  new sec.geo.shape.Polygon ();
        polygon.setAltitudeMode (altitudeMode);
        polygon.setMinAltitude (minAltitude);
        polygon.setMaxAltitude (maxAltitude);
        var aext =  new sec.geo.shape.AExtObject (polygon);
        sec.geo.kml.XsltCoordinateWrapper.addPoints (points, aext);
        return polygon;
    }, 
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
    }, 
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
    }, 
    getLineKml:function (points, id, name, description, lineColor, fillColor, altitudeMode, minAltitude, maxAltitude) {
        var renderer =  new sec.geo.kml.KmlRenderer ();
        return renderer.getKml (sec.geo.kml.XsltCoordinateWrapper.getLine (points, altitudeMode, minAltitude, maxAltitude), id, name, description, lineColor, fillColor);
    }, 
    getCircleKml:function (pivotX, pivotY, id, name, description, lineColor, fillColor, altitudeMode, radius, minAltitude, maxAltitude) {
        var renderer =  new sec.geo.kml.KmlRenderer ();
        return renderer.getKml (sec.geo.kml.XsltCoordinateWrapper.getCircle (pivotX, pivotY, altitudeMode, radius, minAltitude, maxAltitude), id, name, description, lineColor, fillColor);
    }, 
    getOrbitKml:function (point1X, point1Y, point2X, point2Y, id, name, description, lineColor, fillColor, altitudeMode, width, minAltitude, maxAltitude) {
        var renderer =  new sec.geo.kml.KmlRenderer ();
        return renderer.getKml (sec.geo.kml.XsltCoordinateWrapper.getOrbit (point1X, point1Y, point2X, point2Y, altitudeMode, width, minAltitude, maxAltitude), id, name, description, lineColor, fillColor);
    }, 
    getRouteKml:function (points, id, name, description, lineColor, fillColor, altitudeMode, leftWidth, rightWidth, minAltitude, maxAltitude) {
        var renderer =  new sec.geo.kml.KmlRenderer ();
        return renderer.getKml (sec.geo.kml.XsltCoordinateWrapper.getRoute (points, altitudeMode, leftWidth, rightWidth, minAltitude, maxAltitude), id, name, description, lineColor, fillColor);
    }, 
    getPolygonKml:  function (points, id, name, description, lineColor, fillColor, altitudeMode, minAltitude, maxAltitude) {
        var renderer =  new sec.geo.kml.KmlRenderer ();
        return renderer.getKml (sec.geo.kml.XsltCoordinateWrapper.getPolygon (points, altitudeMode, minAltitude, maxAltitude), id, name, description, lineColor, fillColor);
    }, 
    getRadarcKml:  function (pivotX, pivotY, id, name, description, lineColor, fillColor, altitudeMode, innerRadius, outerRadius, leftAzimuth, rightAzimuth, minAltitude, maxAltitude) {
        var renderer =  new sec.geo.kml.KmlRenderer ();
        return renderer.getKml (sec.geo.kml.XsltCoordinateWrapper.getRadarc (pivotX, pivotY, altitudeMode, innerRadius, outerRadius, leftAzimuth, rightAzimuth, minAltitude, maxAltitude), id, name, description, lineColor, fillColor);
    }, 
    getPolyarcKml:  function (points, pivotX, pivotY, id, name, description, lineColor, fillColor, altitudeMode, radius, leftAzimuth, rightAzimuth, minAltitude, maxAltitude) {
        var renderer =  new sec.geo.kml.KmlRenderer ();
        
        return renderer.getKml (sec.geo.kml.XsltCoordinateWrapper.getPolyarc (points, pivotX, pivotY, altitudeMode, radius, leftAzimuth, rightAzimuth, minAltitude, maxAltitude), id, name, description, lineColor, fillColor);
    }, 
    plotLine: function (points, altitudeMode, minAltitude, maxAltitude) {
        var renderer =  new sec.geo.kml.KmlRenderer ();
        return renderer.getCoords (sec.geo.kml.XsltCoordinateWrapper.getLine (points, altitudeMode, minAltitude, maxAltitude));
    }, 
    plotCircle:function (pivotX, pivotY, altitudeMode, radius, minAltitude, maxAltitude) {
        var renderer =  new sec.geo.kml.KmlRenderer ();
        return renderer.getCoords (sec.geo.kml.XsltCoordinateWrapper.getCircle (pivotX, pivotY, altitudeMode, radius, minAltitude, maxAltitude));
    }, 
    plotOrbit: function (point1X, point1Y, point2X, point2Y, altitudeMode, width, minAltitude, maxAltitude) {
        var renderer =  new sec.geo.kml.KmlRenderer ();
        return renderer.getCoords (sec.geo.kml.XsltCoordinateWrapper.getOrbit (point1X, point1Y, point2X, point2Y, altitudeMode, width, minAltitude, maxAltitude));
    }, 
    plotRoute: function (points, altitudeMode, leftWidth, rightWidth, minAltitude, maxAltitude) {
        var renderer =  new sec.geo.kml.KmlRenderer ();
        return renderer.getCoords (sec.geo.kml.XsltCoordinateWrapper.getRoute (points, altitudeMode, leftWidth, rightWidth, minAltitude, maxAltitude));
    }, 
    plotPolygon: function (points, altitudeMode, minAltitude, maxAltitude) {
        var renderer =  new sec.geo.kml.KmlRenderer ();
        return renderer.getCoords (sec.geo.kml.XsltCoordinateWrapper.getPolygon (points, altitudeMode, minAltitude, maxAltitude));
    }, 
    plotRadarc: function (pivotX, pivotY, altitudeMode, innerRadius, outerRadius, leftAzimuth, rightAzimuth, minAltitude, maxAltitude) {
        var renderer =  new sec.geo.kml.KmlRenderer ();
        return renderer.getCoords (sec.geo.kml.XsltCoordinateWrapper.getRadarc (pivotX, pivotY, altitudeMode, innerRadius, outerRadius, leftAzimuth, rightAzimuth, minAltitude, maxAltitude));
    }, 
    plotPolyarc: function (points, pivotX, pivotY, altitudeMode, radius, leftAzimuth, rightAzimuth, minAltitude, maxAltitude) {
        var renderer =  new sec.geo.kml.KmlRenderer ();
        return renderer.getCoords (sec.geo.kml.XsltCoordinateWrapper.getPolyarc (points, pivotX, pivotY, altitudeMode, radius, leftAzimuth, rightAzimuth, minAltitude, maxAltitude));
    },
    addPoints : function (points, path) 
    {
        var coords = null;
        for (var sPoint, $sPoint = 0, $$sPoint = points; $sPoint < $$sPoint.length && ((sPoint = $$sPoint[$sPoint]) || true); $sPoint++) {
            coords = sPoint.split (",");
            var longitude = Double.parseDouble (coords[0]);
            var latitude = Double.parseDouble (coords[1]);
            path.addPoint ( new sec.geo.GeoPoint (longitude, latitude));
        }
    }
};
