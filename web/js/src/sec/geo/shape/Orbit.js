var sec = sec || {};
sec.geo = sec.geo || {};
sec.geo.shape = sec.geo.shape || {};
sec.geo.shape.Orbit = function()
{
    this.minAltitudeMeters = 0;
    this.maxAltitudeMeters = 0;
    this.maxDistanceMeters = 0;
    this.flatnessDistanceMeters = 0;
    this.altitudeMode = null;
    this.shape = null;
    this.limit = 0;
    this.widthMeters = 0;
    this.points = null;
    this.points = new java.util.ArrayList();
    this.maxDistanceMeters = 100000;
    this.flatnessDistanceMeters = 1;
    this.limit = 4;
    this.addPoint = function(point) {
        this.points.add(point);
        this.shapeChanged();
    };
    this.addPoints = function(points) {
        this.points.addAll(points);
        this.shapeChanged();
    };
    this.setWidth = function(widthMeters) {
        this.widthMeters = widthMeters;
        this.shapeChanged();
    };
    this.createShape = function() {
        var orbit = new sec.sun.awt.geom.Area();
        var previousPoint = null;
        var point;
        var j = 0;
        for (j = 0; j < this.points.size(); j++)
        {
            point = this.points.get(j);
            var ellipse = new sec.geo.GeoEllipse(point, this.widthMeters, this.widthMeters, this.maxDistanceMeters, this.flatnessDistanceMeters, this.limit);
            var el = new sec.geo.ShapeObject(ellipse);
            var rhs = new sec.sun.awt.geom.Area(el);
            orbit.add(rhs);
            if (previousPoint !== null) {
                var block = new sec.geo.GeoBlock(previousPoint, point, this.widthMeters, this.maxDistanceMeters, this.flatnessDistanceMeters, this.limit);
                var bl = new sec.geo.ShapeObject(block);
                var rhs2 = new sec.sun.awt.geom.Area(bl);
                orbit.add(rhs2);
            }
            previousPoint = point;
        }
        return orbit;
    };
    this.getShape = function() {
        if (this.shape === null) {
            this.shape = this.createShape();
        }
        return this.shape;
    };
    this.shapeChanged = function() {
        this.shape = null;
    };
    this.getMinAltitude = function() {
        return this.minAltitudeMeters;
    };
    this.setMinAltitude = function(minAltitudeMeters) {
        this.minAltitudeMeters = minAltitudeMeters;
        this.shapeChanged();
    };
    this.getMaxAltitude = function() {
        return this.maxAltitudeMeters;
    };
    this.setMaxAltitude = function(maxAltitudeMeters) {
        this.maxAltitudeMeters = maxAltitudeMeters;
        this.shapeChanged();
    };
    this.setMaxDistance = function(maxDistanceMeters) {
        this.maxDistanceMeters = maxDistanceMeters;
        this.shapeChanged();
    };
    this.setFlatness = function(flatnessDistanceMeters) {
        this.flatnessDistanceMeters = flatnessDistanceMeters;
        this.shapeChanged();
    };
    this.setLimit = function(limit) {
        this.limit = limit;
        this.shapeChanged();
    };
    this.getAltitudeMode = function() {
        return this.altitudeMode;
    };
    this.setAltitudeMode = function(altitudeMode) {
        this.altitudeMode = altitudeMode;
    };
};