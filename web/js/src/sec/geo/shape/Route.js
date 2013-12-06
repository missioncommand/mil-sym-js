var sec = sec || {};
sec.geo = sec.geo || {};
sec.geo.shape = sec.geo.shape || {};
sec.geo.shape.Route = function()
{
    this.minAltitudeMeters = 0;
    this.maxAltitudeMeters = 0;
    this.maxDistanceMeters = 0;
    this.flatnessDistanceMeters = 0;
    this.altitudeMode = null;
    this.limit = 0;
    this.leftWidthMeters = 0;
    this.rightWidthMeters = 0;
    this.shape = null;
    this.points = null;
    this.maxDistanceMeters = 100000;
    this.flatnessDistanceMeters = 1;
    this.limit = 4;
    this.points = new java.util.ArrayList();
    this.addPoint = function(point) {
        this.points.add(point);
        this.shapeChanged();
    };//, "sec.geo.GeoPoint");
    this.addPoints = function(points) {
        this.points.addAll(points);
        this.shapeChanged();
    };//, "java.util.ArrayList");
    this.setLeftWidth = function(widthMeters) {
        this.leftWidthMeters = widthMeters;
        this.shapeChanged();
    };//, "~N");
    this.setRightWidth = function(widthMeters) {
        this.rightWidthMeters = widthMeters;
        this.shapeChanged();
    };//, "~N");
    this.createShape = function() {
        var route = new sec.sun.awt.geom.Area();
        var previousPoint = null;
        for (var i = 0; i < this.points.size(); i++) {
            var point = this.points.get(i);
            if (previousPoint !== null) {
                if (previousPoint.equals(point))
                    continue;
                var block = new sec.geo.GeoBlock2(previousPoint, point, this.leftWidthMeters, this.rightWidthMeters, this.maxDistanceMeters, this.flatnessDistanceMeters, this.limit);
                var area = new sec.sun.awt.geom.Area(new sec.geo.ShapeObject(block));
                route.add(area);
            }
            previousPoint = point;
        }
        return route;
    };//);
    this.shapeChanged = function() {
        this.shape = null;
    };//);
    this.getShape = function() {
        if (this.shape === null) {
            this.shape = this.createShape();
        }
        return this.shape;
    };//);
    this.getMinAltitude = function() {
        return this.minAltitudeMeters;
    };//);
    this.setMinAltitude = function(minAltitudeMeters) {
        this.minAltitudeMeters = minAltitudeMeters;
        this.shapeChanged();
    };//, "~N");
    this.getMaxAltitude = function() {
        return this.maxAltitudeMeters;
    };//);
    this.setMaxAltitude = function(maxAltitudeMeters) {
        this.maxAltitudeMeters = maxAltitudeMeters;
        this.shapeChanged();
    };//, "~N");
    this.setMaxDistance = function(maxDistanceMeters) {
        this.maxDistanceMeters = maxDistanceMeters;
        this.shapeChanged();
    };//, "~N");
    this.setFlatness = function(flatnessDistanceMeters) {
        this.flatnessDistanceMeters = flatnessDistanceMeters;
        this.shapeChanged();
    };//, "~N");
    this.setLimit = function(limit) {
        this.limit = limit;
        this.shapeChanged();
    };//, "~N");
    this.getAltitudeMode = function() {
        return this.altitudeMode;
    };//);
    this.setAltitudeMode = function(altitudeMode) {
        this.altitudeMode = altitudeMode;
    };//, "sec.geo.kml.KmlOptions.AltitudeMode");
};