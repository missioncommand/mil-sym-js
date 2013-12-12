var sec = sec || {};
sec.geo = sec.geo || {};
sec.geo.shape = sec.geo.shape || {};
sec.geo.shape.Circle = function()
{
    this.pivot = null;
    this.radiusMeters = 0;
    this.shape = null;
    this.maxDistanceMeters = 0;
    this.flatnessDistanceMeters = 0;
    this.altitudeMode = null;
    this.minAltitudeMeters = 0;
    this.maxAltitudeMeters = 0;
    this.limit = 0;
    this.pivot = new sec.geo.GeoPoint();
    this.maxDistanceMeters = 100000;
    this.flatnessDistanceMeters = 1;
    this.limit = 3;
    this.getShape = function()
    {
        if (this.shape === null)
        {
            this.shape = this.createShape();
        }
        return this.shape;
    }; 
    this.setRadius = function(radiusMeters) {
        this.radiusMeters = radiusMeters;
        this.shapeChanged();
    }; 
    this.setPivot = function(pivot) {
        this.pivot = pivot;
        this.shapeChanged();
    }; 
    this.createShape = function() {
        var e = new sec.geo.GeoEllipse(this.pivot, this.radiusMeters * 2, this.radiusMeters * 2, this.maxDistanceMeters, this.flatnessDistanceMeters, this.limit);
        return  new sec.geo.ShapeObject(e);
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
