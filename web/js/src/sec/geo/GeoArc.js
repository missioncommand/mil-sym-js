var sec = sec || {};
sec.geo = sec.geo || {};
sec.geo.GeoArc = function()
{
    this.moveTo = function(point) {
        this.path.moveTo(point.x, point.y);
        this.toPoints.add(point);
    };
    this.moveToLatLong = function(longitudeDegrees, latitudeDegrees) {
        this.moveTo(new sec.geo.GeoPoint(longitudeDegrees, latitudeDegrees));
    };
    this.lineTo = function(point) {
        var newPath = new armyc2.c2sd.graphics2d.GeneralPath();
        var lastPoint = new sec.geo.GeoPoint();
        if (this.toPoints.size() > 0) {
            lastPoint = this.toPoints.get(this.toPoints.size() - 1);
            newPath.moveTo(lastPoint.x, lastPoint.y);
        }
        var start = this.toGlobalCoord(lastPoint);
        var end = this.toGlobalCoord(point);
        var curve = this.geoCalc.calculateGeodeticCurve(sec.geo.GeoArc.REFERENCE_ELLIPSOID, start, end);
        var distance = this.maxDistanceMeters;
        while (distance < curve.getEllipsoidalDistance()) {
            var c = this.geoCalc.calculateEndingGlobalCoordinates(sec.geo.GeoArc.REFERENCE_ELLIPSOID, start, curve.getAzimuth(), distance);
            newPath.lineTo(c.getLongitude(), c.getLatitude());
            distance += this.maxDistanceMeters;
        }
        newPath.lineTo(point.x, point.y);
        this.path.append(newPath, true);
        this.toPoints.add(point);
    };
    this.lineToLatLong = function(longitudeDegrees, latitudeDegrees) {
        this.lineTo(new sec.geo.GeoPoint(longitudeDegrees, latitudeDegrees));
    };
    this.arcTo = function(pivot, widthMeters, heightMeters, leftAzimuthDegrees, rightAzimuthDegrees) {
        var count = 0;
        var newPath = new armyc2.c2sd.graphics2d.GeneralPath();
        var arc;
        if (leftAzimuthDegrees > rightAzimuthDegrees) {
            arc = new armyc2.c2sd.graphics2d.Arc2D(-widthMeters / 2, -heightMeters / 2, widthMeters, heightMeters, leftAzimuthDegrees - 90, Math.abs((360 - leftAzimuthDegrees) + rightAzimuthDegrees), 0);
        } else {
            arc = new armyc2.c2sd.graphics2d.Arc2D(-widthMeters / 2, -heightMeters / 2, widthMeters, heightMeters, leftAzimuthDegrees - 90, Math.abs(leftAzimuthDegrees - rightAzimuthDegrees), 0);
        }
        var point = null;
        if (pivot !== null) {
            var it = new armyc2.c2sd.graphics2d.FlatteningPathIterator(arc.getPathIterator(null), this.flatnessDistanceMeters, this.limit);
            while (!it.isDone()) {
                count++;
                var strokePoints = Clazz.newArray(6, 0);
                var type = it.currentSegment(strokePoints);
                var x = strokePoints[0];
                var y = strokePoints[1];
                var azimuth = org.gavaghan.geodesy.Angle.toDegrees(Math.atan2(x, y));
                var coord = new org.gavaghan.geodesy.GlobalCoordinates(pivot.getLatitude(), pivot.getLongitude());
                var c = this.geoCalc.calculateEndingGlobalCoordinates(sec.geo.GeoArc.REFERENCE_ELLIPSOID, coord, azimuth, new armyc2.c2sd.graphics2d.Point2D(0, 0).distance(x, y));
                switch (type) {
                    case 0:
                        newPath.moveTo(c.getLongitude(), c.getLatitude());
                        var startPoint = new sec.geo.GeoPoint(c.getLongitude(), c.getLatitude());
                        if (this.toPoints.size() > 0 && !startPoint.equals(this.toPoints.get(this.toPoints.size() - 1))) {
                            this.lineTo(startPoint);
                        }
                        break;
                    case 1:
                        newPath.lineTo(c.getLongitude(), c.getLatitude());
                        point = new sec.geo.GeoPoint(c.getLongitude(), c.getLatitude());
                        break;
                }
                it.next();
            }
        }
        this.path.append(newPath, true);
        this.toPoints.add(point);
    };
    this.getToPoints = function() {
        return this.toPoints;
    };
    this.closePath = function() {
        //if(this.toPoints.get(0) !== null && this.toPoints.get(this.toPoints.size() - 1) !== null)
        var pt0=this.toPoints.get(0);
        var pt1=this.toPoints.get(this.toPoints.size() - 1);
        if(pt0 === null || pt1 === null)
            return;
        if (this.toPoints.size() > 0 && !this.toPoints.get(0).equals(this.toPoints.get(this.toPoints.size() - 1))) {
            this.lineTo(this.toPoints.get(0));
        }
    };
    this.getPathIterator = function(at) {
        return this.path.getPathIterator(at);
    };
    this.toString = function() {
        return this.toPoints.toString();
    };
    this.toGlobalCoord = function(point) {
        return  new org.gavaghan.geodesy.GlobalCoordinates(point.getLatitude(), point.getLongitude());
    };
    this.path = null;
    this.toPoints = null;
    this.maxDistanceMeters = 0;
    this.flatnessDistanceMeters = 0;
    this.limit = 0;
    this.geoCalc = null;
    var pivot = arguments[0];
    var widthMeters = arguments[1];
    var heightMeters = arguments[2];
    var leftAzimuth = arguments[3];
    var rightAzimuth = arguments[4];
    var maxDistanceMeters = arguments[5];
    var flatnessDistanceMeters = arguments[6];
    var limit = arguments[7];

    this.path = new armyc2.c2sd.graphics2d.GeneralPath();
    this.toPoints = new java.util.ArrayList();
    this.geoCalc = new org.gavaghan.geodesy.GeodeticCalculator();
    this.maxDistanceMeters = maxDistanceMeters;
    this.flatnessDistanceMeters = flatnessDistanceMeters;
    this.limit = limit;
    this.moveTo(pivot);
    this.arcTo(pivot, widthMeters, heightMeters, leftAzimuth, rightAzimuth);
    this.closePath();
};
sec.geo.GeoArc.REFERENCE_ELLIPSOID = org.gavaghan.geodesy.Ellipsoid.WGS84;
