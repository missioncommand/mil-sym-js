var sec=sec || {};
sec.geo=sec.geo || {};
sec.geo.GeoBlock2=function()
{
    this.moveTo=function (point) {
        this.path.moveTo (point.x, point.y);
        this.toPoints.add (point);
    };
    this.moveToLatLong=function (longitudeDegrees, latitudeDegrees) {
        this.moveTo ( new sec.geo.GeoPoint (longitudeDegrees, latitudeDegrees));
    };
    this.lineTo=function (point) {
        var newPath =  new armyc2.c2sd.graphics2d.GeneralPath ();
        var lastPoint =  new sec.geo.GeoPoint ();
        if (this.toPoints.size () > 0) {
            lastPoint = this.toPoints.get (this.toPoints.size () - 1);
            newPath.moveTo (lastPoint.x, lastPoint.y);
        }
        var start = this.toGlobalCoord (lastPoint);
        var end = this.toGlobalCoord (point);
        var curve = this.geoCalc.calculateGeodeticCurve (sec.geo.GeoBlock2.REFERENCE_ELLIPSOID, start, end);
        var distance = this.maxDistanceMeters;
        while (distance < curve.getEllipsoidalDistance ()) {
            var c = this.geoCalc.calculateEndingGlobalCoordinates (sec.geo.GeoBlock2.REFERENCE_ELLIPSOID, start, curve.getAzimuth (), distance);
            newPath.lineTo (c.getLongitude (), c.getLatitude ());
            distance += this.maxDistanceMeters;
        }
        newPath.lineTo (point.x, point.y);
        this.path.append (newPath, true);
        this.toPoints.add (point);
        this.simplify ();
    };
    this.lineToLatLong=function (longitudeDegrees, latitudeDegrees) {
        this.lineTo ( new sec.geo.GeoPoint (longitudeDegrees, latitudeDegrees));
    };
    this.getToPoints=function () {
        return this.toPoints;
    };
    this.closePath=function () {
        if (this.toPoints.size () > 0 && !this.toPoints.get (0).equals (this.toPoints.get (this.toPoints.size () - 1))) {
            this.lineTo (this.toPoints.get (0));
        }
    };
    this.getPathIterator=function (at, flatness) {
        return this.path.getPathIterator (at);
    };
    this.toString=function () {
        return this.toPoints.toString ();
    };
    this.toGlobalCoord=function (point) {
        return  new org.gavaghan.geodesy.GlobalCoordinates (point.getLatitude (), point.getLongitude ());
    };
    this.simplify=function () {
        var pi = this.path.getPathIterator (null);
        var pts = pi.getPoints ();
        var newPts =  new java.util.ArrayList ();
        var j = 0;
        var style = -1;
        var lastStyle = -1;
        var nextstyle = -1;
        var currentPt = null;
        var lastPt = null;
        for (j = 0; j < pts.size (); j++) {
            style = pts.get (j).style;
            currentPt = pts.get (j);
            if (j > 0) {
                lastStyle = pts.get (j - 1).style;
                lastPt = pts.get (j - 1);
            }
            if (lastStyle === 1 && style === 0) {
                if (currentPt.x === lastPt.x && currentPt.y === lastPt.y) continue ;
            }
            newPts.add (currentPt);
        }
        pi.setPathIterator (newPts);
    };
    
    this.path = null;
    this.toPoints = null;
    this.maxDistanceMeters = 0;
    this.flatnessDistanceMeters = 0;
    this.limit = 0;
    this.geoCalc = null;
    
    
    var p1=arguments[0];
    var p2=arguments[1];
    var leftWidthMeters=arguments[2];
    var rightWidthMeters=arguments[3];
    var maxDistanceMeters=arguments[4];
    var flatnessDistanceMeters=arguments[5];
    var limit=arguments[6];
            
    this.path =  new armyc2.c2sd.graphics2d.GeneralPath ();
    this.toPoints =  new java.util.ArrayList ();
    this.geoCalc =  new org.gavaghan.geodesy.GeodeticCalculator ();
    this.maxDistanceMeters = maxDistanceMeters;
    var c1 = this.toGlobalCoord (p1);
    var c2 = this.toGlobalCoord (p2);
    var curve = this.geoCalc.calculateGeodeticCurve (sec.geo.GeoBlock2.REFERENCE_ELLIPSOID, c1, c2);
    var a1 = curve.getAzimuth ();
    var a2 = curve.getReverseAzimuth ();
    var leftRadius = leftWidthMeters;
    var rightRadius = rightWidthMeters;
    //diagnostic to prevent error in calculate global coords if points are identical
    if(p1.x === p2.x && p1.y === p2.y)
        return;
    //end section
    var c = this.geoCalc.calculateEndingGlobalCoordinates (sec.geo.GeoBlock2.REFERENCE_ELLIPSOID, c1, a1 - 90, leftRadius);
    this.moveToLatLong (c.getLongitude (), c.getLatitude ());
    c = this.geoCalc.calculateEndingGlobalCoordinates (sec.geo.GeoBlock2.REFERENCE_ELLIPSOID, c2, a2 + 90, leftRadius);
    this.lineToLatLong (c.getLongitude (), c.getLatitude ());
    c = this.geoCalc.calculateEndingGlobalCoordinates (sec.geo.GeoBlock2.REFERENCE_ELLIPSOID, c2, a2 - 90, rightRadius);
    this.lineToLatLong (c.getLongitude (), c.getLatitude ());
    c = this.geoCalc.calculateEndingGlobalCoordinates (sec.geo.GeoBlock2.REFERENCE_ELLIPSOID, c1, a1 + 90, rightRadius);
    this.lineToLatLong (c.getLongitude (), c.getLatitude ());
    this.closePath ();
};
sec.geo.GeoBlock2.REFERENCE_ELLIPSOID = org.gavaghan.geodesy.Ellipsoid.WGS84;