var org = org || {};
org.gavaghan = org.gavaghan || {};
org.gavaghan.geodesy = org.gavaghan.geodesy || {};
org.gavaghan.geodesy.GlobalPosition = function()
{
    this.mElevation = 0;
    this.mLatitude = 0;
    this.mLongitude = 0;
    var latitude;
    var longitude;
    var elevation;
    if (arguments.length === 3)
    {
        latitude = arguments[0];
        longitude = arguments[1];
        elevation = arguments[2];
        this.mLatitude = latitude;
        this.mLongitude = longitude;
        org.gavaghan.geodesy.GlobalPosition.canonicalize(this);
        this.mElevation = elevation;
    }
    if (arguments.length === 2)
    {
        var coords = arguments[0];
        elevation = arguments[1];
        this.mLatitude = coords.getLatitude();
        this.mLongitude = coords.getLongitude();
        org.gavaghan.geodesy.GlobalPosition.canonicalize(this);
        this.mElevation = elevation;
    }
    this.getElevation = function() {
        return this.mElevation;
    };
    this.setElevation = function(elevation) {
        this.mElevation = elevation;
    };
    this.compareTo = function(other) {
        var retval;
        if (this.mLongitude < other.mLongitude)
            retval = -1;
        else if (this.mLongitude > other.mLongitude)
            retval = 1;
        else if (this.mLatitude < other.mLatitude)
            retval = -1;
        else if (this.mLatitude > other.mLatitude)
            retval = 1;
        else
            retval = 0;
        if (retval === 0) {
            if (this.mElevation < other.mElevation)
                retval = -1;
            else if (this.mElevation > other.mElevation)
                retval = 1;
        }
        return retval;
    };
    this.hashCode = function() {
        var hash = Clazz.superCall(this, org.gavaghan.geodesy.GlobalPosition, "hashCode", []);
        if (this.mElevation !== 0)
            hash *= Math.round(this.mElevation);
        return hash;
    };
    this.equals = function(obj) {
        if (!(Clazz.instanceOf(obj, org.gavaghan.geodesy.GlobalPosition)))
            return false;
        var other = obj;
        return (this.mElevation === other.mElevation) && (Clazz.superCall(this, org.gavaghan.geodesy.GlobalPosition, "equals", [other]));
    };
    this.toString = function() {
        var buffer = "";
        buffer += (Math.abs(this.mLatitude));
        buffer += (((this.mLatitude >= 0) ? 'N' : 'S')).charCodeAt(0);
        buffer += ((';')).charCodeAt(0);
        buffer += (Math.abs(this.mLongitude));
        buffer += (((this.mLongitude >= 0) ? 'E' : 'W')).charCodeAt(0);
        buffer += ((';')).charCodeAt(0);
        buffer += ("elevation=");
        buffer += (Double.toString(this.mElevation));
        buffer += ("m");
        return buffer;
    };
    this.canonicalize = function() {
        this.mLatitude = (this.mLatitude + 180) % 360;
        if (this.mLatitude < 0)
            this.mLatitude += 360;
        this.mLatitude -= 180;
        if (this.mLatitude > 90) {
            this.mLatitude = 180 - this.mLatitude;
            this.mLongitude += 180;
        } else if (this.mLatitude < -90) {
            this.mLatitude = -180 - this.mLatitude;
            this.mLongitude += 180;
        }
        this.mLongitude = ((this.mLongitude + 180) % 360);
        if (this.mLongitude <= 0)
            this.mLongitude += 360;
        this.mLongitude -= 180;
    };
    this.getLatitude = function() {
        return this.mLatitude;
    };
    this.getLongitude = function() {
        return this.mLongitude;
    };
};
org.gavaghan.geodesy.GlobalPosition.canonicalize = function(obj) {
    obj.mLatitude = (obj.mLatitude + 180) % 360;
    if (obj.mLatitude < 0)
        obj.mLatitude += 360;
    obj.mLatitude -= 180;
    if (obj.mLatitude > 90) {
        obj.mLatitude = 180 - obj.mLatitude;
        obj.mLongitude += 180;
    } else if (obj.mLatitude < -90) {
        obj.mLatitude = -180 - obj.mLatitude;
        obj.mLongitude += 180;
    }
    obj.mLongitude = ((obj.mLongitude + 180) % 360);
    if (obj.mLongitude <= 0)
        this.mLongitude += 360;
    obj.mLongitude -= 180;
};
