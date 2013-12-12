var org = org || {};
org.gavaghan = org.gavaghan || {};
org.gavaghan.geodesy = org.gavaghan.geodesy || {};
org.gavaghan.geodesy.Angle = function()
{
};
org.gavaghan.geodesy.Angle.toRadians = function(degrees) {
    return degrees * 0.017453292519943295;
};
org.gavaghan.geodesy.Angle.toDegrees = function(radians) {
    return radians / 0.017453292519943295;
};
org.gavaghan.geodesy.Angle.PiOver180 = 0.017453292519943295;