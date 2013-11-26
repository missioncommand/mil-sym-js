var org=org || {};
org.gavaghan=org.gavaghan || {};
org.gavaghan.geodesy=org.gavaghan.geodesy || {};
org.gavaghan.geodesy.Angle=function()
{
}

//﻿Clazz.declarePackage ("org.gavaghan.geodesy");
//c$ = Clazz.declareType (org.gavaghan.geodesy, "Angle");
//c$.toRadians = Clazz.defineMethod (c$, "toRadians", 
org.gavaghan.geodesy.Angle.toRadians = function (degrees) {
    return degrees * 0.017453292519943295;
};//, "~N");
//c$.toDegrees = Clazz.defineMethod (c$, "toDegrees", 
org.gavaghan.geodesy.Angle.toDegrees = function (radians) {
    return radians / 0.017453292519943295;
};//, "~N");
//Clazz.defineStatics (c$,
//    "PiOver180", 0.017453292519943295);
org.gavaghan.geodesy.Angle.PiOver180=0.017453292519943295;