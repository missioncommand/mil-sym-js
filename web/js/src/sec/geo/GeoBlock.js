var sec=sec || {};
sec.geo=sec.geo || {};
sec.geo.GeoBlock=function()
{
//    this.path = null;
//    this.toPoints = null;
//    this.maxDistanceMeters = 0;
//    this.geoCalc = null;
//    //        function (p1, p2, widthMeters, maxDistanceMeters, flatnessDistanceMeters, limit) {
//    var p1=arguments[0];
//    var p2=arguments[1];
//    var widthMeters=arguments[2];
//    var maxDistanceMeters=arguments[3];
//    var flatnessDistanceMeters=arguments[4];
//    var limit=arguments[5];
//    this.path =  new armyc2.c2sd.graphics2d.GeneralPath ();
//    this.toPoints =  new java.util.ArrayList ();
//    this.geoCalc =  new org.gavaghan.geodesy.GeodeticCalculator ();
//    this.maxDistanceMeters = maxDistanceMeters;
//    //var c1 = this.toGlobalCoord (p1);
//    var c1 = sec.geo.GeoBlock.toGlobalCoord (p1);
//    //var c2 = this.toGlobalCoord (p2);
//    var c2 = sec.geo.GeoBlock.toGlobalCoord (p2);
//    var curve = this.geoCalc.calculateGeodeticCurve (sec.geo.GeoBlock.REFERENCE_ELLIPSOID, c1, c2);
//    var a1 = curve.getAzimuth ();
//    var a2 = curve.getReverseAzimuth ();
//    var radius = widthMeters / 2;
//    var c = this.geoCalc.calculateEndingGlobalCoordinates (sec.geo.GeoBlock.REFERENCE_ELLIPSOID, c1, a1 - 90, radius);
//    //this.moveToLatLong (c.getLongitude (), c.getLatitude ());
//    sec.geo.GeoBlock.moveToLatLong (this,c.getLongitude (), c.getLatitude ());
//    c = this.geoCalc.calculateEndingGlobalCoordinates (sec.geo.GeoBlock.REFERENCE_ELLIPSOID, c2, a2 + 90, radius);
//    //this.lineToLatLong (c.getLongitude (), c.getLatitude ());
//    sec.geo.GeoBlock.lineToLatLong (this,c.getLongitude (), c.getLatitude ());
//    c = this.geoCalc.calculateEndingGlobalCoordinates (sec.geo.GeoBlock.REFERENCE_ELLIPSOID, c2, a2 - 90, radius);
//    //this.lineToLatLong (c.getLongitude (), c.getLatitude ());
//    sec.geo.GeoBlock.lineToLatLong (this,c.getLongitude (), c.getLatitude ());
//    c = this.geoCalc.calculateEndingGlobalCoordinates (sec.geo.GeoBlock.REFERENCE_ELLIPSOID, c1, a1 + 90, radius);
//    //this.lineToLatLong (c.getLongitude (), c.getLatitude ());
//    sec.geo.GeoBlock.lineToLatLong (this,c.getLongitude (), c.getLatitude ());
//    //this.closePath ();
//    sec.geo.GeoBlock.closePath(this);
    
    //Clazz.defineMethod (c$, "moveTo", 
    this.moveTo=function (point) {
        this.path.moveTo (point.x, point.y);
        this.toPoints.add (point);
    };//, "sec.geo.GeoPoint");
    //Clazz.defineMethod (c$, "moveToLatLong", 
    this.moveToLatLong=function (longitudeDegrees, latitudeDegrees) {
        this.moveTo ( new sec.geo.GeoPoint (longitudeDegrees, latitudeDegrees));
    };//, "~N,~N");
    //Clazz.defineMethod (c$, "simplify", 
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
            if (lastStyle == 1 && style == 0) {
                if (currentPt.x == lastPt.x && currentPt.y == lastPt.y) continue ;
            }
            newPts.add (currentPt);
        }
        pi.setPathIterator (newPts);
    };//);
    //Clazz.defineMethod (c$, "lineTo", 
    this.lineTo=function (point) {
        var newPath =  new armyc2.c2sd.graphics2d.GeneralPath ();
        var lastPoint =  new sec.geo.GeoPoint ();
        if (this.toPoints.size () > 0) {
            lastPoint = this.toPoints.get (this.toPoints.size () - 1);
            newPath.moveTo (lastPoint.x, lastPoint.y);
        }
        var start = this.toGlobalCoord (lastPoint);
        var end = this.toGlobalCoord (point);
        var curve = this.geoCalc.calculateGeodeticCurve (sec.geo.GeoBlock.REFERENCE_ELLIPSOID, start, end);
        var distance = this.maxDistanceMeters;
        while (distance < curve.getEllipsoidalDistance ()) {
            var c = this.geoCalc.calculateEndingGlobalCoordinates (sec.geo.GeoBlock.REFERENCE_ELLIPSOID, start, curve.getAzimuth (), distance);
            newPath.lineTo (c.getLongitude (), c.getLatitude ());
            distance += this.maxDistanceMeters;
        }
        newPath.lineTo (point.x, point.y);
        this.path.append (newPath, true);
        this.toPoints.add (point);
        this.simplify();
    };//, "sec.geo.GeoPoint");
    //Clazz.defineMethod (c$, "lineToLatLong", 
    this.lineToLatLong=function (longitudeDegrees, latitudeDegrees) {
        this.lineTo ( new sec.geo.GeoPoint (longitudeDegrees, latitudeDegrees));
    };//, "~N,~N");
    //Clazz.defineMethod (c$, "getToPoints", 
    this.getToPoints=function () {
        return this.toPoints;
    };//);
    //Clazz.defineMethod (c$, "closePath", 
    this.closePath=function () {
        if (this.toPoints.size () > 0 && !this.toPoints.get (0).equals (this.toPoints.get (this.toPoints.size () - 1))) {
            this.lineTo (this.toPoints.get (0));
        }
    };//);
    //Clazz.defineMethod (c$, "getPathIterator", 
    this.getPathIterator=function (at) {
        return this.path.getPathIterator (at);
    };//, "armyc2.c2sd.graphics2d.AffineTransform");
    //Clazz.overrideMethod (c$, "toString", 
    this.toString=function () {
        return this.toPoints.toString ();
    };//);
    //Clazz.defineMethod (c$, "toGlobalCoord", 
    this.toGlobalCoord=function (point) {
        return  new org.gavaghan.geodesy.GlobalCoordinates (point.getLatitude (), point.getLongitude ());
    };//, "sec.geo.GeoPoint");
//c$.REFERENCE_ELLIPSOID = c$.prototype.REFERENCE_ELLIPSOID = org.gavaghan.geodesy.Ellipsoid.WGS84;
//});
    //begin constructor
    this.path = null;
    this.toPoints = null;
    this.maxDistanceMeters = 0;
    this.geoCalc = null;
    //        function (p1, p2, widthMeters, maxDistanceMeters, flatnessDistanceMeters, limit) {
    var p1=arguments[0];
    var p2=arguments[1];
    var widthMeters=arguments[2];
    var maxDistanceMeters=arguments[3];
    var flatnessDistanceMeters=arguments[4];
    var limit=arguments[5];
    this.path =  new armyc2.c2sd.graphics2d.GeneralPath ();
    this.toPoints =  new java.util.ArrayList ();
    this.geoCalc =  new org.gavaghan.geodesy.GeodeticCalculator ();
    this.maxDistanceMeters = maxDistanceMeters;
    var c1 = this.toGlobalCoord (p1);
    //var c1 = sec.geo.GeoBlock.toGlobalCoord (p1);
    var c2 = this.toGlobalCoord (p2);
    //var c2 = sec.geo.GeoBlock.toGlobalCoord (p2);
    var curve = this.geoCalc.calculateGeodeticCurve (sec.geo.GeoBlock.REFERENCE_ELLIPSOID, c1, c2);
    var a1 = curve.getAzimuth ();
    var a2 = curve.getReverseAzimuth ();
    var radius = widthMeters / 2;
    var c = this.geoCalc.calculateEndingGlobalCoordinates (sec.geo.GeoBlock.REFERENCE_ELLIPSOID, c1, a1 - 90, radius);
    this.moveToLatLong (c.getLongitude (), c.getLatitude ());
    //sec.geo.GeoBlock.moveToLatLong (this,c.getLongitude (), c.getLatitude ());
    c = this.geoCalc.calculateEndingGlobalCoordinates (sec.geo.GeoBlock.REFERENCE_ELLIPSOID, c2, a2 + 90, radius);
    this.lineToLatLong (c.getLongitude (), c.getLatitude ());
    //sec.geo.GeoBlock.lineToLatLong (this,c.getLongitude (), c.getLatitude ());
    c = this.geoCalc.calculateEndingGlobalCoordinates (sec.geo.GeoBlock.REFERENCE_ELLIPSOID, c2, a2 - 90, radius);
    this.lineToLatLong (c.getLongitude (), c.getLatitude ());
    //sec.geo.GeoBlock.lineToLatLong (this,c.getLongitude (), c.getLatitude ());
    c = this.geoCalc.calculateEndingGlobalCoordinates (sec.geo.GeoBlock.REFERENCE_ELLIPSOID, c1, a1 + 90, radius);
    this.lineToLatLong (c.getLongitude (), c.getLatitude ());
    //sec.geo.GeoBlock.lineToLatLong (this,c.getLongitude (), c.getLatitude ());
    this.closePath ();
    //sec.geo.GeoBlock.closePath(this);
    //end constructor
};
sec.geo.GeoBlock.REFERENCE_ELLIPSOID = org.gavaghan.geodesy.Ellipsoid.WGS84;
//sec.geo.GeoBlock.toGlobalCoord=function(point)
//{   
//    return  new org.gavaghan.geodesy.GlobalCoordinates (point.getLatitude (), point.getLongitude ());    
//};
//sec.geo.GeoBlock.moveTo=function(that, point)
//{
//    that.path.moveTo (point.x, point.y);
//    that.toPoints.add (point);    
//};
//sec.geo.GeoBlock.moveToLatLong=function(that,longitudeDegrees, latitudeDegrees)
//{
//    //this.moveTo ( new sec.geo.GeoPoint (longitudeDegrees, latitudeDegrees));
//    sec.geo.GeoBlock.moveTo(that, new sec.geo.GeoPoint (longitudeDegrees, latitudeDegrees));
//};
//sec.geo.GeoBlock.lineToLatLong=function(that,longitudeDegrees,latitudeDegrees)
//{
//    sec.geo.GeoBlock.lineTo (that, new sec.geo.GeoPoint (longitudeDegrees, latitudeDegrees));    
//}
//sec.geo.GeoBlock.lineTo=function(that,point)
//{   
//    var newPath =  new armyc2.c2sd.graphics2d.GeneralPath ();
//    var lastPoint =  new sec.geo.GeoPoint ();
//    if (that.toPoints.size () > 0) {
//        lastPoint = that.toPoints.get (that.toPoints.size () - 1);
//        newPath.moveTo (lastPoint.x, lastPoint.y);
//    }
//    //var start = that.toGlobalCoord (lastPoint);
//    var start=sec.geo.GeoBlock.toGlobalCoord(lastPoint);
//    //var end = that.toGlobalCoord (point);
//    var end=sec.geo.GeoBlock.toGlobalCoord(point);
//    
//    var curve = that.geoCalc.calculateGeodeticCurve (sec.geo.GeoBlock.REFERENCE_ELLIPSOID, start, end);
//    //alert(curve);
//    var distance = that.maxDistanceMeters;
//    while (distance < curve.getEllipsoidalDistance ()) {
//        var c = that.geoCalc.calculateEndingGlobalCoordinates (sec.geo.GeoBlock.REFERENCE_ELLIPSOID, start, curve.getAzimuth (), distance);
//        newPath.lineTo (c.getLongitude (), c.getLatitude ());
//        distance += that.maxDistanceMeters;
//    }
//    //alert();
//    newPath.lineTo (point.x, point.y);
//    that.path.append (newPath, true);
//    that.toPoints.add (point);
//    //alert(that.toPoints.size());
//    //that.simplify (); 
//    sec.geo.GeoBlock.simplify(that);
//};
//sec.geo.GeoBlock.simplify=function(that)
//{
//    var pi = that.path.getPathIterator (null);
//    //alert(pi);
//    var pts = pi.getPoints ();
//    var newPts =  new java.util.ArrayList ();
//    var j = 0;
//    var style = -1;
//    var lastStyle = -1;
//    var nextstyle = -1;
//    var currentPt = null;
//    var lastPt = null;
//    for (j = 0; j < pts.size (); j++) {
//        style = pts.get (j).style;
//        currentPt = pts.get (j);
//        if (j > 0) {
//            lastStyle = pts.get (j - 1).style;
//            lastPt = pts.get (j - 1);
//        }
//        if (lastStyle == 1 && style == 0) {
//            if (currentPt.x == lastPt.x && currentPt.y == lastPt.y) continue ;
//        }
//        newPts.add (currentPt);
//    }
//    pi.setPathIterator (newPts);    
//    //alert(newPts.size());
//};
//sec.geo.GeoBlock.closePath=function(that)
//{   
//    if (that.toPoints.size () > 0 && !that.toPoints.get (0).equals (that.toPoints.get (that.toPoints.size () - 1))) 
//    {
//        //that.lineTo (that.toPoints.get (0));
//        sec.geo.GeoBlock.lineTo(that,that.toPoints.get (0));
//    }
//};
