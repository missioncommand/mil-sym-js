var sec = sec || {};
sec.geo = sec.geo || {};
sec.geo.shape = sec.geo.shape || {};
sec.geo.shape.Polyarc = function()
{
    this.minAltitudeMeters = 0;
    this.maxAltitudeMeters = 0;
    this.shape = null;
    this.maxDistanceMeters = 0;
    this.flatnessDistanceMeters = 0;
    this.limit = 0;
    this.pivot = null;
    this.radiusMeters = 0;
    this.leftAzimuthDegrees = 0;
    this.rightAzimuthDegrees = 0;
    this.altitudeMode = null;
    this.points = null;
    this.points = new java.util.ArrayList();
    this.maxDistanceMeters = 100000;
    this.flatnessDistanceMeters = 1;
    this.limit = 4;
    this.addPoint = function(point)
    {
        this.points.add(point);
        this.shapeChanged();
    };
    this.addPoints = function(points)
    {
        this.points.addAll(points);
        this.shapeChanged();
    };
    this.setRadius = function(radiusMeters)
    {
        this.radiusMeters = radiusMeters;
        this.shapeChanged();
    };
    this.setPivot = function(pivot)
    {
        this.pivot = pivot;
        this.shapeChanged();
    };
    this.setRightAzimuthDegrees = function(rightAzimuthDegrees)
    {
        this.rightAzimuthDegrees = rightAzimuthDegrees;
        this.shapeChanged();
    };
    this.setLeftAzimuthDegrees = function(leftAzimuthDegrees)
    {
        this.leftAzimuthDegrees = leftAzimuthDegrees;
        this.shapeChanged();
    };
    this.createShape = function()
    {
        var path = new sec.geo.GeoPath(this.maxDistanceMeters, this.flatnessDistanceMeters, this.limit);
        for (var i = 0; i < this.points.size(); i++) {
            var point = this.points.get(i);
            if (i === 0) {
                path.moveTo(point);
            } else {
                path.lineTo(point);
            }
        }
        path.arcTo(this.pivot, this.radiusMeters * 2, this.radiusMeters * 2, this.leftAzimuthDegrees, this.rightAzimuthDegrees);
        path.closePath();
        return  new sec.geo.ShapeObject(path);
    };
    this.shapeChanged = function() {
        this.shape = null;
    };
    this.getShape = function() {
        if (this.shape === null) {
            this.shape = this.createShape();
        }
        return this.shape;
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


