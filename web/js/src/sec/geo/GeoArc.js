var sec=sec || {};
sec.geo=sec.geo || {};
sec.geo.GeoArc=function()
{   
    //    this.path = null;
    //    this.toPoints = null;
    //    this.maxDistanceMeters = 0;
    //    this.flatnessDistanceMeters = 0;
    //    this.limit = 0;
    //    this.geoCalc = null;
    //    //function (pivot, widthMeters, heightMeters, leftAzimuth, rightAzimuth, maxDistanceMeters, flatnessDistanceMeters, limit) {
    //    var pivot=arguments[0];
    //    var widthMeters=arguments[1];
    //    var heightMeters=arguments[2];    
    //    var leftAzimuth=arguments[3];
    //    var rightAzimuth=arguments[4];
    //    var maxDistanceMeters=arguments[5];
    //    var flatnessDistanceMeters=arguments[6];
    //    var limit=arguments[7];
    //    
    //    this.path =  new armyc2.c2sd.graphics2d.GeneralPath();
    //    //alert(this.path);
    //    this.toPoints =  new java.util.ArrayList();
    //    this.geoCalc =  new org.gavaghan.geodesy.GeodeticCalculator ();
    //    this.maxDistanceMeters = maxDistanceMeters;
    //    this.flatnessDistanceMeters = flatnessDistanceMeters;
    //    this.limit = limit;
    //    //this.moveTo(pivot);
    //    sec.geo.GeoArc.moveTo(this,pivot);
    //    //this.arcTo (pivot, widthMeters, heightMeters, leftAzimuth, rightAzimuth);
    //    sec.geo.GeoArc.arcTo (this, pivot, widthMeters, heightMeters, leftAzimuth, rightAzimuth);
    //    //this.closePath();
    //    sec.geo.GeoArc.closePath(this);
    
    //Clazz.defineMethod (c$, "moveTo", 
    this.moveTo=function (point) {
        this.path.moveTo (point.x, point.y);
        this.toPoints.add (point);
    };//, "sec.geo.GeoPoint");
    //Clazz.defineMethod (c$, "moveToLatLong", 
    this.moveToLatLong=function (longitudeDegrees, latitudeDegrees) {
        this.moveTo ( new sec.geo.GeoPoint (longitudeDegrees, latitudeDegrees));
    };//, "~N,~N");
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
        var curve = this.geoCalc.calculateGeodeticCurve (sec.geo.GeoArc.REFERENCE_ELLIPSOID, start, end);
        var distance = this.maxDistanceMeters;
        while (distance < curve.getEllipsoidalDistance ()) {
            var c = this.geoCalc.calculateEndingGlobalCoordinates (sec.geo.GeoArc.REFERENCE_ELLIPSOID, start, curve.getAzimuth (), distance);
            newPath.lineTo (c.getLongitude (), c.getLatitude ());
            distance += this.maxDistanceMeters;
        }
        newPath.lineTo (point.x, point.y);
        this.path.append (newPath, true);
        this.toPoints.add (point);
    };//, "sec.geo.GeoPoint");
    //Clazz.defineMethod (c$, "lineToLatLong", 
    this.lineToLatLong=function (longitudeDegrees, latitudeDegrees) {
        this.lineTo ( new sec.geo.GeoPoint (longitudeDegrees, latitudeDegrees));
    };//, "~N,~N");
    //Clazz.defineMethod (c$, "arcTo", 
    this.arcTo=function (pivot, widthMeters, heightMeters, leftAzimuthDegrees, rightAzimuthDegrees) {
        var count=0;
        //alert(leftAzimuthDegrees);
        //alert(rightAzimuthDegrees);
        var newPath =  new armyc2.c2sd.graphics2d.GeneralPath();
        var arc;
        if (leftAzimuthDegrees > rightAzimuthDegrees) {
            arc =  new armyc2.c2sd.graphics2d.Arc2D (-widthMeters / 2, -heightMeters / 2, widthMeters, heightMeters, leftAzimuthDegrees - 90, Math.abs ((360 - leftAzimuthDegrees) + rightAzimuthDegrees), 0);
        } else {
            arc =  new armyc2.c2sd.graphics2d.Arc2D (-widthMeters / 2, -heightMeters / 2, widthMeters, heightMeters, leftAzimuthDegrees - 90, Math.abs (leftAzimuthDegrees - rightAzimuthDegrees), 0);
        }
        var point = null;
        if (pivot != null) {
            var it =  new armyc2.c2sd.graphics2d.FlatteningPathIterator (arc.getPathIterator (null), this.flatnessDistanceMeters, this.limit);
            while (!it.isDone ()) {
                count++;
                var strokePoints =  Clazz.newArray (6, 0);
                var type = it.currentSegment (strokePoints);
                var x = strokePoints[0];
                var y = strokePoints[1];
                var azimuth = org.gavaghan.geodesy.Angle.toDegrees (Math.atan2 (x, y));
                var coord =  new org.gavaghan.geodesy.GlobalCoordinates (pivot.getLatitude (), pivot.getLongitude ());
                var c = this.geoCalc.calculateEndingGlobalCoordinates (sec.geo.GeoArc.REFERENCE_ELLIPSOID, coord, azimuth,  new armyc2.c2sd.graphics2d.Point2D (0, 0).distance (x, y));
                switch (type) {
                    case 0:
                        newPath.moveTo (c.getLongitude (), c.getLatitude ());
                        var startPoint =  new sec.geo.GeoPoint (c.getLongitude (), c.getLatitude ());
                        if (this.toPoints.size () > 0 && !startPoint.equals (this.toPoints.get (this.toPoints.size () - 1))) {
                            this.lineTo (startPoint);
                        }
                        break;
                    case 1:
                        newPath.lineTo (c.getLongitude (), c.getLatitude ());
                        point =  new sec.geo.GeoPoint (c.getLongitude (), c.getLatitude ());
                        break;
                }
                it.next ();
            }
        }
        //alert(newPath.getPathIterator(null).getPoints().size());
        this.path.append (newPath, true);
        this.toPoints.add (point);
        //alert(count);
    };//, "sec.geo.GeoPoint,~N,~N,~N,~N");
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
        //alert();
        //alert(this.path);
        //alert(this.path.getPathIterator (at));
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
    //alert(arguments.length);
    this.path = null;
    this.toPoints = null;
    this.maxDistanceMeters = 0;
    this.flatnessDistanceMeters = 0;
    this.limit = 0;
    this.geoCalc = null;
    //function (pivot, widthMeters, heightMeters, leftAzimuth, rightAzimuth, maxDistanceMeters, flatnessDistanceMeters, limit) {
    var pivot=arguments[0];
    var widthMeters=arguments[1];
    var heightMeters=arguments[2];    
    var leftAzimuth=arguments[3];
    var rightAzimuth=arguments[4];
    var maxDistanceMeters=arguments[5];
    var flatnessDistanceMeters=arguments[6];
    var limit=arguments[7];
    
    this.path =  new armyc2.c2sd.graphics2d.GeneralPath();
    //alert(this.path.getPathIterator(null));
    this.toPoints =  new java.util.ArrayList();
    this.geoCalc =  new org.gavaghan.geodesy.GeodeticCalculator ();
    this.maxDistanceMeters = maxDistanceMeters;
    this.flatnessDistanceMeters = flatnessDistanceMeters;
    this.limit = limit;
    this.moveTo(pivot);
    //sec.geo.GeoArc.moveTo(this,pivot);
    this.arcTo (pivot, widthMeters, heightMeters, leftAzimuth, rightAzimuth);
    //sec.geo.GeoArc.arcTo (this, pivot, widthMeters, heightMeters, leftAzimuth, rightAzimuth);
    this.closePath();
    //alert(this.getPathIterator(null));
//sec.geo.GeoArc.closePath(this);
};//end constructor
sec.geo.GeoArc.REFERENCE_ELLIPSOID=org.gavaghan.geodesy.Ellipsoid.WGS84;
//sec.geo.GeoArc.moveTo=function(that,point)
//{   
//    that.path.moveTo (point.x, point.y);
//    that.toPoints.add (point);    
//};
//sec.geo.GeoArc.arcTo=function(that, pivot, widthMeters, heightMeters, leftAzimuthDegrees, rightAzimuthDegrees)
//{
//    //alert();
//    var newPath =  new armyc2.c2sd.graphics2d.GeneralPath ();
//    var arc;    
//    if (leftAzimuthDegrees > rightAzimuthDegrees) 
//    {
//        arc =  new armyc2.c2sd.graphics2d.Arc2D (-widthMeters / 2, -heightMeters / 2, widthMeters, heightMeters, leftAzimuthDegrees - 90, Math.abs ((360 - leftAzimuthDegrees) + rightAzimuthDegrees), 0);
//    } 
//    else 
//    {
//        arc =  new armyc2.c2sd.graphics2d.Arc2D (-widthMeters / 2, -heightMeters / 2, widthMeters, heightMeters, leftAzimuthDegrees - 90, Math.abs (leftAzimuthDegrees - rightAzimuthDegrees), 0);
//    }
//    //alert(arc);
//    var point = null;
//    if (pivot != null) {
//        //alert(arc.getPathIterator (null));
//        var it =  new armyc2.c2sd.graphics2d.FlatteningPathIterator (arc.getPathIterator (null), that.flatnessDistanceMeters, that.limit);
//        //alert(it.isDone ());
//        while (!it.isDone ()) 
//        {            
//            var strokePoints =  Clazz.newArray (6, 0);
//            var type = it.currentSegment (strokePoints);
//            //alert(strokePoints);
//            var x = strokePoints[0];
//            var y = strokePoints[1];
//            var azimuth = org.gavaghan.geodesy.Angle.toDegrees (Math.atan2 (x, y));
//            //alert(azimuth);
//            var coord =  new org.gavaghan.geodesy.GlobalCoordinates (pivot.getLatitude (), pivot.getLongitude ());
//                        
//            var c = that.geoCalc.calculateEndingGlobalCoordinates (sec.geo.GeoArc.REFERENCE_ELLIPSOID, coord, azimuth,  new armyc2.c2sd.graphics2d.Point2D (0, 0).distance (x, y));
//            //alert(c);
//            switch (type) 
//            {
//                case 0:
//                    newPath.moveTo (c.getLongitude (), c.getLatitude ());
//                    var startPoint =  new sec.geo.GeoPoint (c.getLongitude (), c.getLatitude ());
//                    if (that.toPoints.size () > 0 && !startPoint.equals (that.toPoints.get (that.toPoints.size () - 1))) {
//                        //that.lineTo (startPoint);
//                        sec.geo.GeoArc.lineTo(that,startPoint);
//                    }
//                    break;
//                case 1:
//                    newPath.lineTo (c.getLongitude (), c.getLatitude ());
//                    point =  new sec.geo.GeoPoint (c.getLongitude (), c.getLatitude ());
//                    break;
//            }
//            //alert('it');
//            it.next ();
//            //alert(it.isDone())
//        }
//    }
//    //alert('done');
//    that.path.append (newPath, true);
//    //alert(that.path);
//    that.toPoints.add (point);    
//    //alert(that.toPoints.size());
//    //alert();
//};
//sec.geo.GeoArc.closePath=function(that)
//{   
//    if (that.toPoints.size () > 0 && !that.toPoints.get (0).equals (that.toPoints.get (that.toPoints.size () - 1))) 
//    {
//        //that.lineTo (that.toPoints.get (0));
//        sec.geo.GeoArc.lineTo(that,that.toPoints.get (0));
//    }
//};
//sec.geo.GeoArc.lineTo=function(that, point)
//{
//    var newPath =  new armyc2.c2sd.graphics2d.GeneralPath ();
//    var lastPoint =  new sec.geo.GeoPoint ();
//    if (that.toPoints.size () > 0) {
//        lastPoint = that.toPoints.get (that.toPoints.size () - 1);
//        newPath.moveTo (lastPoint.x, lastPoint.y);
//    }
//    //var start = that.toGlobalCoord (lastPoint);
//    var start = sec.geo.GeoArc.toGlobalCoord(lastPoint);
//    //var end = that.toGlobalCoord (point);
//    var end = sec.geo.GeoArc.toGlobalCoord (point);
//    var curve = that.geoCalc.calculateGeodeticCurve (sec.geo.GeoArc.REFERENCE_ELLIPSOID, start, end);
//    var distance = that.maxDistanceMeters;
//    while (distance < curve.getEllipsoidalDistance ()) {
//        var c = that.geoCalc.calculateEndingGlobalCoordinates (sec.geo.GeoArc.REFERENCE_ELLIPSOID, start, curve.getAzimuth (), distance);
//        newPath.lineTo (c.getLongitude (), c.getLatitude ());
//        distance += that.maxDistanceMeters;
//    }
//    newPath.lineTo (point.x, point.y);
//    that.path.append (newPath, true);
//    that.toPoints.add (point);    
//    //alert(that.path);
//};
//sec.geo.GeoArc.toGlobalCoord=function(point)
//{   
//    return  new org.gavaghan.geodesy.GlobalCoordinates (point.getLatitude (), point.getLongitude ());    
//};
