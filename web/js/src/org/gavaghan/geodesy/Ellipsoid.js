var org = org || {};
org.gavaghan = org.gavaghan || {};
org.gavaghan.geodesy = org.gavaghan.geodesy || {};
org.gavaghan.geodesy.Ellipsoid = function()
{
    this.mSemiMajorAxis = 0;
    this.mSemiMinorAxis = 0;
    this.mFlattening = 0;
    this.mInverseFlattening = 0;
    var semiMajor = arguments[0];
    var semiMinor = arguments[1];
    var flattening = arguments[2];
    var inverseFlattening = arguments[3];
    this.mSemiMajorAxis = semiMajor;
    this.mSemiMinorAxis = semiMinor;
    this.mFlattening = flattening;
    this.mInverseFlattening = inverseFlattening;
    this.getSemiMajorAxis = function() {
        return this.mSemiMajorAxis;
    };
    this.getSemiMinorAxis = function() {
        return this.mSemiMinorAxis;
    };
    this.getFlattening = function() {
        return this.mFlattening;
    };
    this.getInverseFlattening = function() {
        return this.mInverseFlattening;
    };
};
org.gavaghan.geodesy.Ellipsoid.fromAAndInverseF = function(semiMajor, inverseFlattening) {
    var f = 1.0 / inverseFlattening;
    var b = (1.0 - f) * semiMajor;
    return  new org.gavaghan.geodesy.Ellipsoid(semiMajor, b, f, inverseFlattening);
};
org.gavaghan.geodesy.Ellipsoid.fromAAndF = function(semiMajor, flattening) {
    var inverseF = 1.0 / flattening;
    var b = (1.0 - flattening) * semiMajor;
    return  new org.gavaghan.geodesy.Ellipsoid(semiMajor, b, flattening, inverseF);
};

org.gavaghan.geodesy.Ellipsoid.WGS84 = org.gavaghan.geodesy.Ellipsoid.fromAAndInverseF(6378137.0, 298.257223563);
org.gavaghan.geodesy.Ellipsoid.GRS80 = org.gavaghan.geodesy.Ellipsoid.fromAAndInverseF(6378137.0, 298.257222101);
org.gavaghan.geodesy.Ellipsoid.GRS67 = org.gavaghan.geodesy.Ellipsoid.fromAAndInverseF(6378160.0, 298.25);
org.gavaghan.geodesy.Ellipsoid.ANS = org.gavaghan.geodesy.Ellipsoid.fromAAndInverseF(6378160.0, 298.25);
org.gavaghan.geodesy.Ellipsoid.WGS72 = org.gavaghan.geodesy.Ellipsoid.fromAAndInverseF(6378135.0, 298.26);
org.gavaghan.geodesy.Ellipsoid.Clarke1858 = org.gavaghan.geodesy.Ellipsoid.fromAAndInverseF(6378293.645, 294.26);
org.gavaghan.geodesy.Ellipsoid.Clarke1880 = org.gavaghan.geodesy.Ellipsoid.fromAAndInverseF(6378249.145, 293.465);
org.gavaghan.geodesy.Ellipsoid.Sphere = org.gavaghan.geodesy.Ellipsoid.fromAAndF(6371000, 0.0);
