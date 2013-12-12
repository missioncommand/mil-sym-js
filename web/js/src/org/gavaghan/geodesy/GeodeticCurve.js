var org = org || {};
org.gavaghan = org.gavaghan || {};
org.gavaghan.geodesy = org.gavaghan.geodesy || {};
org.gavaghan.geodesy.GeodeticCurve = function()
{
    this.mEllipsoidalDistance = 0;
    this.mAzimuth = 0;
    this.mReverseAzimuth = 0;
    var ellipsoidalDistance = arguments[0];
    var azimuth = arguments[1];
    var reverseAzimuth = arguments[2];
    this.mEllipsoidalDistance = ellipsoidalDistance;
    this.mAzimuth = azimuth;
    this.mReverseAzimuth = reverseAzimuth;
    this.getEllipsoidalDistance = function() {
        return this.mEllipsoidalDistance;
    };
    this.getAzimuth = function() {
        return this.mAzimuth;
    };
    this.getReverseAzimuth = function() {
        return this.mReverseAzimuth;
    };
    this.toString = function() {
        var buffer = "";
        buffer += "s=";
        buffer += this.mEllipsoidalDistance;
        buffer += ";a12=";
        buffer += this.mAzimuth;
        buffer += ";a21=";
        buffer += this.mReverseAzimuth;
        buffer += ";";
        return buffer;
    };
};