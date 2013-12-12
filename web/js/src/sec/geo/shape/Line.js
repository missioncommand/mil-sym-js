var sec = sec || {};
sec.geo = sec.geo || {};
sec.geo.shape = sec.geo.shape || {};
sec.geo.shape.Line = function()
{
    this.minAltitudeMeters = 0;
    this.maxAltitudeMeters = 0;
    this.shape = null;
    this.maxDistanceMeters = 0;
    this.flatnessDistanceMeters = 0;
    this.altitudeMode = null;
    this.limit = 0;
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
    this.createShape = function() {
        var path = new sec.geo.GeoPath(this.maxDistanceMeters, this.flatnessDistanceMeters, this.limit);
        for (var i = 0; i < this.points.size(); i++) {
            if (i > 0) {
                path.lineTo(this.points.get(i));
            } else {
                path.moveTo(this.points.get(i));
            }
        }
        return  new sec.geo.ShapeObject(path);
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