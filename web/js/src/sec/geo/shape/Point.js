var sec = sec || {};
sec.geo = sec.geo || {};
sec.geo.shape = sec.geo.shape || {};
sec.geo.shape.Point = function()
{
    this.longitudeDegrees = 0;
    this.latitudeDegrees = 0;
    this.altitudeMeters = 0;
    var longitudeDegrees = arguments[0];
    var latitudeDegrees = arguments[1];
    var altitudeMeters = 0;
    this.longitudeDegrees = longitudeDegrees;
    this.latitudeDegrees = latitudeDegrees;
    if (arguments.length === 3)
    {
        altitudeMeters = arguments[2];
        this.altitudeMeters = altitudeMeters;
    }
    this.getLongitude = function() {
        return this.longitudeDegrees;
    };
    this.getLatitude = function() {
        return this.latitudeDegrees;
    };
    this.getAltitude = function() {
        return this.altitudeMeters;
    };
    this.toGloablePos = function() {
        return  new org.gavaghan.geodesy.GlobalPosition(this.getLatitude(), this.getLongitude(), this.getAltitude());
    };
    this.equals = function(o) {
        if (!(Clazz.instanceOf(o, sec.geo.shape.Point))) {
            return false;
        }
        var other = o;
        return (this.longitudeDegrees === other.longitudeDegrees) && (this.latitudeDegrees === other.latitudeDegrees) && (this.altitudeMeters === other.altitudeMeters);
    };
    this.toString = function() {
        return "[" + this.longitudeDegrees + "," + this.latitudeDegrees + "," + this.altitudeMeters + "]";
    };
};