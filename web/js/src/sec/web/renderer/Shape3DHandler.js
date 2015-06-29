var sec = sec || {};
/** namespace */
sec.web = sec.web || {};
sec.web.renderer = sec.web.renderer || {};
sec.web.renderer.Shape3DHandler=function(){};

sec.web.renderer.Shape3DHandler.render3dSymbol = function (name, id, shapeType, description, lineColor, fillColor, controlPoints, attributes) {
    var result = "";

    if (shapeType.equals ("CYLINDER-------")) {
        result = sec.web.renderer.Shape3DHandler.buildCylinder (controlPoints, id, name, description, lineColor, fillColor, attributes);
    } else if (shapeType.equals ("ORBIT----------")) {
        result = sec.web.renderer.Shape3DHandler.buildOrbit (controlPoints, id, name, description, lineColor, fillColor, attributes);
    } else if (shapeType.equals ("RADARC---------")) {
        result = sec.web.renderer.Shape3DHandler.buildRadarc (controlPoints, id, name, description, lineColor, fillColor, attributes);
    } else if (shapeType.equals ("POLYARC--------")) {
        result = sec.web.renderer.Shape3DHandler.buildPolyArc (controlPoints, id, name, description, lineColor, fillColor, attributes);
    } else if (shapeType.equals ("ROUTE----------")) {
        result = sec.web.renderer.Shape3DHandler.buildRoute (controlPoints, id, name, description, lineColor, fillColor, attributes);
    } else if (shapeType.equals ("POLYGON--------")) {
        //alert('p');
        result = sec.web.renderer.Shape3DHandler.buildPolygon (controlPoints, id, name, description, lineColor, fillColor, attributes);
    } else if (shapeType.equals ("CAKE-----------")) {
        result = sec.web.renderer.Shape3DHandler.buildCake (controlPoints, id, name, description, lineColor, fillColor, attributes);
    } else if (shapeType.equals ("TRACK----------")) {
        result = sec.web.renderer.Shape3DHandler.buildTrack (controlPoints, id, name, description, lineColor, fillColor, attributes);
    } else {
        var sb =  new sec.geo.utilities.StringBuilder ();
        sb.append ("Given shape type \"" + shapeType + "\" does not match any of the available shape types.");
        sb.append ("\n");
        sb.append ("Available Types: ");
        sb.append ("CYLINDER-------\n");
        sb.append ("ORBIT----------\n");
        sb.append ("ROUTE----------\n");
        sb.append ("POLYGON--------\n");
        sb.append ("RADARC---------\n");
        sb.append ("POLYARC--------\n");
        sb.append ("CAKE-----------\n");
        sb.append ("TRACK----------");
        //System.out.println (sb.toString ());
    }
    if(!(description))
    {
        if(result.indexOf("<description>undefined</description>\n")>0)
            result = result.replace("<description>undefined</description>\n", "");
        else if(result.indexOf("<description>null</description>\n")>0)
            result = result.replace("<description>null</description>\n", "");
    }
    return result;
};//, "~S,~S,~S,~S,~S,~S,~S,sec.web.renderer.SymbolModifiers");
//c$.buildPolygon = Clazz.defineMethod (c$, "buildPolygon", 
sec.web.renderer.Shape3DHandler.buildPolygon =  function (controlPoints, id, name, description, lineColor, fillColor, attributes) {
    //var output =  new sec.geo.utilities.StringBuilder ();
    var pointArrayStringList = "";
    try {
        var latlons = controlPoints.split (" ");
        //alert(latlons);
        if (latlons.length >= 2) {
            //alert();
            pointArrayStringList = sec.geo.kml.XsltCoordinateWrapper.getPolygonKml (latlons, id, name, description, lineColor, fillColor, attributes.ALT_MODE[0], (attributes.X_ALTITUDE_DEPTH.get (0)).doubleValue (), (attributes.X_ALTITUDE_DEPTH.get (1)).doubleValue ());
        } else {
            throw  {message:"Invalid Number of Points", name:"Point Exception", stack:null};
        }
    } catch (e) {
        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException ("Shape3DHandler", "buildPolygon()", e);
    }
    return pointArrayStringList;
};//, "~S,~S,~S,~S,~S,sec.geo.kml.KmlOptions.AltitudeMode,sec.web.renderer.SymbolModifiers");
//c$.buildCylinder = Clazz.defineMethod (c$, "buildCylinder", 
sec.web.renderer.Shape3DHandler.buildCylinder = function (controlPoints, id, name, description, lineColor, fillColor, attributes) {
    //var output =  new sec.geo.utilities.StringBuilder ();
    var pointArrayStringList = "";
    var pivotx = 0.0;
    var pivoty = 0.0;
    try {
        var latlons = controlPoints.split (" ");
        if (latlons.length > 0) {
            var pivot = latlons[0].split (",");
            if (pivot.length >= 2) {
                pivotx = Double.parseDouble (pivot[0]);
                pivoty = Double.parseDouble (pivot[1]);
            } else {
                throw  {message:"Number Format Exception", name:"Format Exception", stack:null};
            }
        } else {
            throw  {message:"Invalid Number of Points", name:"Point Exception", stack:null};
        }
        pointArrayStringList = sec.geo.kml.XsltCoordinateWrapper.getCircleKml (pivotx, pivoty, id, name, description, lineColor, fillColor, attributes.ALT_MODE[0], (attributes.AM_DISTANCE.get (0)).doubleValue (), (attributes.X_ALTITUDE_DEPTH.get (0)).doubleValue (), (attributes.X_ALTITUDE_DEPTH.get (1)).doubleValue ());
    } catch (e) {
        throw e;
    }
    return pointArrayStringList;
};//, "~S,~S,~S,~S,~S,sec.geo.kml.KmlOptions.AltitudeMode,sec.web.renderer.SymbolModifiers");
//c$.buildKml = Clazz.defineMethod (c$, "buildKml", 
sec.web.renderer.Shape3DHandler.buildKml = function (coords, id, name, lineColor, fillColor) {
    var kml =  new sec.geo.utilities.StringBuilder ();
    kml.append ("<Placemark>");
    kml.append ("<name>");
    kml.append (name);
    kml.append ("</name>");
    kml.append ("<id>");
    kml.append (id);
    kml.append ("</id>");
    kml.append ("<Style>");
    kml.append ("<PolyStyle>");
    kml.append ("<color>");
    kml.append (fillColor);
    kml.append ("</color>");
    kml.append ("</PolyStyle>");
    kml.append ("<LineStyle>");
    kml.append (lineColor);
    kml.append ("</LineStyle>");
    kml.append ("</Style>");
    kml.append ("<MultiGeometry>");
    for (var s, $s = 0, $$s = coords; $s < $$s.length && ((s = $$s[$s]) || true); $s++) {
        kml.append ("<Polygon>");
        kml.append ("<extrude>0</extrude>");
        kml.append ("<altitudeMode>relativeToGround</altitudeMode>");
        kml.append ("<outerBoundaryIs>");
        kml.append ("<LinearRing>");
        kml.append ("<coordinates>");
        kml.append (s);
        kml.append ("</coordinates>");
        kml.append ("</LinearRing>");
        kml.append ("</outerBoundaryIs>");
        kml.append ("</Polygon>");
    }
    kml.append ("</MultiGeometry>");
    kml.append ("</Placemark>");
    return kml.toString ();
};//, "~A,~S,~S,~S");
//c$.buildOrbit = Clazz.defineMethod (c$, "buildOrbit", 
sec.web.renderer.Shape3DHandler.buildOrbit=function (controlPoints, id, name, description, lineColor, fillColor, attributes) {
    //var output =  new sec.geo.utilities.StringBuilder ();
    var pointArrayStringList = "";
    var point1x = 0.0;
    var point1y = 0.0;
    var point2x = 0.0;
    var point2y = 0.0;
    try {
        var latlons = controlPoints.split (" ");
        if (latlons.length > 1) {
            var point1 = latlons[0].split (",");
            if (point1.length >= 2) {
                point1x = Double.parseDouble (point1[0]);
                point1y = Double.parseDouble (point1[1]);
            } else {
                throw  {message:"Number Format Exception", name:"Format Exception", stack:null};
            }
            var point2 = latlons[1].split (",");
            if (point2.length >= 2) {
                point2x = Double.parseDouble (point2[0]);
                point2y = Double.parseDouble (point2[1]);
            } else {
                throw  {message:"Number Format Exception", name:"Format Exception", stack:null};
            }
        } else {
            throw  {message:"Invalid Number of Points", name:"Point Exception", stack:null};
        }
        pointArrayStringList = sec.geo.kml.XsltCoordinateWrapper.getOrbitKml (point1x, point1y, point2x, point2y, id, name, description, lineColor, fillColor, attributes.ALT_MODE[0], (attributes.AM_DISTANCE.get (0)).doubleValue (), (attributes.X_ALTITUDE_DEPTH.get (0)).doubleValue (), (attributes.X_ALTITUDE_DEPTH.get (1)).doubleValue ());
    } catch (e) {
       throw e; 
    }
    return pointArrayStringList;
};//, "~S,~S,~S,~S,~S,sec.geo.kml.KmlOptions.AltitudeMode,sec.web.renderer.SymbolModifiers");
//c$.buildRadarc = Clazz.defineMethod (c$, "buildRadarc", 
sec.web.renderer.Shape3DHandler.buildRadarc = function (controlPoints, id, name, description, lineColor, fillColor, attributes) {
    //var output =  new sec.geo.utilities.StringBuilder ();
    var pointArrayStringList = "";
    var pivotx = 0.0;
    var pivoty = 0.0;
    try {
        var latlons = controlPoints.split (" ");
        if (latlons.length > 0) {
            var pivot = latlons[0].split (",");
            if (pivot.length >= 2) {
                pivotx = Double.parseDouble (pivot[0]);
                pivoty = Double.parseDouble (pivot[1]);
            } else {
                throw  {message:"Number Format Exception", name:"Format Exception", stack:null};
            }
        } else {
            throw  {message:"Invalid Number of Points", name:"Point Exception", stack:null};
        }
        pointArrayStringList = sec.geo.kml.XsltCoordinateWrapper.getRadarcKml (pivotx, pivoty, id, name, description, lineColor, fillColor, attributes.ALT_MODE[0], (attributes.AM_DISTANCE.get (0)).doubleValue (), (attributes.AM_DISTANCE.get (1)).doubleValue (), (attributes.AN_AZIMUTH.get (0)).doubleValue (), (attributes.AN_AZIMUTH.get (1)).doubleValue (), (attributes.X_ALTITUDE_DEPTH.get (0)).doubleValue (), (attributes.X_ALTITUDE_DEPTH.get (1)).doubleValue ());
    } catch (e) {
            throw e;
    }
    return pointArrayStringList;
};//, "~S,~S,~S,~S,~S,sec.geo.kml.KmlOptions.AltitudeMode,sec.web.renderer.SymbolModifiers");
//c$.buildPolyArc = Clazz.defineMethod (c$, "buildPolyArc", 
sec.web.renderer.Shape3DHandler.buildPolyArc = function (controlPoints, id, name, description, lineColor, fillColor, attributes) {
    //var output =  new sec.geo.utilities.StringBuilder ();
    var pointArrayStringList = "";
    var pivotx = 0.0;
    var pivoty = 0.0;
    //alert(altitudeMode);
    try {
        var latlons = controlPoints.split (" ");
        if (latlons.length >= 3) {
            var pivot = latlons[0].split (",");
            if (pivot.length >= 2) {
                pivotx = Double.parseDouble (pivot[0]);
                pivoty = Double.parseDouble (pivot[1]);
            } else {
                throw  {message:"Number Format Exception", name:"Format Exception", stack:null};
            }
            var length = latlons.length - 1;
            var points =  new Array (length);
            System.arraycopy (latlons, 1, points, 0, length);
            pointArrayStringList = sec.geo.kml.XsltCoordinateWrapper.getPolyarcKml (points, pivotx, pivoty, id, name, description, lineColor, fillColor, attributes.ALT_MODE[0], (attributes.AM_DISTANCE.get (0)).doubleValue (), (attributes.AN_AZIMUTH.get (0)).doubleValue (), (attributes.AN_AZIMUTH.get (1)).doubleValue (), (attributes.X_ALTITUDE_DEPTH.get (0)).doubleValue (), (attributes.X_ALTITUDE_DEPTH.get (1)).doubleValue ());
        } else {
            throw  {message:"Invalid Number of Points", name:"Point Exception", stack:null};
        }
    } catch (e) {
        throw e;
    }
    return pointArrayStringList;
};//, "~S,~S,~S,~S,~S,sec.geo.kml.KmlOptions.AltitudeMode,sec.web.renderer.SymbolModifiers");
//c$.buildRoute = Clazz.defineMethod (c$, "buildRoute", 
sec.web.renderer.Shape3DHandler.buildRoute = function (controlPoints, id, name, description, lineColor, fillColor, attributes) {
    var pointArrayStringList = "";
    var width;
    var leftWidth;
    var rightWidth;
    try {
        var latlons = controlPoints.split (" ");
        if (latlons.length >= 2) {
            width = (attributes.AM_DISTANCE.get (0)).doubleValue ();
            leftWidth = width / 2;
            rightWidth = width / 2;
            pointArrayStringList = sec.geo.kml.XsltCoordinateWrapper.getRouteKml (latlons, id, name, description, lineColor, fillColor, attributes.ALT_MODE[0], leftWidth, rightWidth, (attributes.X_ALTITUDE_DEPTH.get (0)).doubleValue (), (attributes.X_ALTITUDE_DEPTH.get (1)).doubleValue ());
        } else {
            throw  {message:"Invalid Number of Points", name:"Point Exception", stack:null};
        }
    } catch (e) {
        throw e;
    }
    return pointArrayStringList;
};//, "~S,~S,~S,~S,~S,sec.geo.kml.KmlOptions.AltitudeMode,sec.web.renderer.SymbolModifiers");
//c$.buildCake = Clazz.defineMethod (c$, "buildCake", 
sec.web.renderer.Shape3DHandler.buildCake = function (controlPoints, id, name, description, lineColor, fillColor, attributes) {
    //var output =  new sec.geo.utilities.StringBuilder ();
    var pointArrayStringList = "";
    var letThemEat =  new sec.geo.shape.Cake ();
    var pivotx = 0.0;
    var pivoty = 0.0;
    var kmlRender =  new sec.geo.kml.KmlRenderer ();
    try {
        var latlons = controlPoints.split (" ");
        var numberOfPoints = latlons.length;
        if (numberOfPoints > 0) {
            var pivotString = latlons[0].split (",");
            if (pivotString.length >= 2) {
                pivotx = Double.parseDouble (pivotString[0]);
                pivoty = Double.parseDouble (pivotString[1]);
                letThemEat.setPivot ( new sec.geo.GeoPoint (pivotx, pivoty));
            } else {
                throw  {message:"Number Format Exception", name:"Format Exception", stack:null};
            }
            var attributesArrayLength = attributes.X_ALTITUDE_DEPTH.size ();
            //alert(attributesArrayLength);
            //alert(attributes.X_ALTITUDE_DEPTH.size());
            //alert(attributes.AN_AZIMUTH.size());
            for (var i = 0; i < attributesArrayLength; i++) 
            {
                var layerCake =  new sec.geo.shape.Radarc ();
                layerCake.setAltitudeMode (attributes.ALT_MODE[i]);
                layerCake.setPivot ( new sec.geo.GeoPoint (pivotx, pivoty));
                layerCake.setMinRadius ((attributes.AM_DISTANCE.get (i)).doubleValue ());
                layerCake.setRadius ((attributes.AM_DISTANCE.get (i + 1)).doubleValue ());
                layerCake.setMinAltitude ((attributes.X_ALTITUDE_DEPTH.get (i)).doubleValue ());
                layerCake.setMaxAltitude ((attributes.X_ALTITUDE_DEPTH.get (i + 1)).doubleValue ());
                layerCake.setLeftAzimuthDegrees ((attributes.AN_AZIMUTH.get (i)).doubleValue ());
                layerCake.setRightAzimuthDegrees ((attributes.AN_AZIMUTH.get (i + 1)).doubleValue ());
                //alert(layerCake);
                i++;
                letThemEat.addLayer (layerCake);
            }
            //alert(letThemEat);
            //pointArrayStringList = kmlRender.getCakeKml (letThemEat, id, name, description, color);
            pointArrayStringList = kmlRender.getKml (letThemEat, id, name, description, lineColor, fillColor);
        } else {
            throw  {message:"Invalid Number of Points", name:"Point Exception", stack:null};
        }
    } catch (e) {
            throw e;
    }
    return pointArrayStringList;
};//, "~S,~S,~S,~S,~S,sec.geo.kml.KmlOptions.AltitudeMode,sec.web.renderer.SymbolModifiers");
//c$.buildTrack = Clazz.defineMethod (c$, "buildTrack", 
sec.web.renderer.Shape3DHandler.buildTrack = function (controlPoints, id, name, description, lineColor, fillColor, attributes) {
    var pointArrayStringList = "";
    var kmlRender =  new sec.geo.kml.KmlRenderer ();
    try {
        var latlons = controlPoints.split (" ");
        var numberOfPoints = latlons.length;
        
//        var numAM=attributes.AM_DISTANCE.size();
//        var numX=attributes.X_ALTITUDE_DEPTH.size();
//        var lastAlt=attributes.X_ALTITUDE_DEPTH.get(numX-1);
//        var lastWidth=attributes.AM_DISTANCE.get(numAM-1);
//        var delta=2*(numberOfPoints-1)-numAM;   //one width per segment
//        if(delta>0)
//            for(var j=0;j<delta;j++)
//                attributes.AM_DISTANCE.add(lastWidth);
//
//        delta=2*(numberOfPoints-1)-numX;    //two alts per segment
//        if(delta>0)
//            for(var j=0;j<delta;j++)
//                attributes.X_ALTITUDE_DEPTH.add(lastAlt);
        
        var numAM=attributes.AM_DISTANCE.size();
        var numX=attributes.X_ALTITUDE_DEPTH.size();
        var nextToLastAlt=attributes.X_ALTITUDE_DEPTH.get(numX-2);
        var lastAlt=attributes.X_ALTITUDE_DEPTH.get(numX-1);
        var lastWidth=attributes.AM_DISTANCE.get(numAM-1);
        var delta=2*(numberOfPoints-1)-numAM;   //one width per segment
        if(delta>0)
            for(var j=0;j<delta;j++)
                attributes.AM_DISTANCE.add(lastWidth);

        delta=2*(numberOfPoints-1)-numX;    //two alts per segment
        var j=0;
        while(j<delta)
        {
            attributes.X_ALTITUDE_DEPTH.add(nextToLastAlt);
            attributes.X_ALTITUDE_DEPTH.add(lastAlt);
            j+=2;
        }
        //end section
        
        if (numberOfPoints >= 2) {
            var track =  new sec.geo.shape.Track ();
            for (var i = 0; i < numberOfPoints - 1; i++) {
                var route =  new sec.geo.shape.Route ();
                route.setAltitudeMode (attributes.ALT_MODE[i]);
                var point1String = latlons[i].split (",");
                var point2String = latlons[i + 1].split (",");
                var point1lon = 0.0;
                var point1lat = 0.0;
                var point2lon = 0.0;
                var point2lat = 0.0;
                if (point1String.length >= 2) {
                    point1lon = Double.parseDouble (point1String[0]);
                    point1lat = Double.parseDouble (point1String[1]);
                } else {
                    throw  {message:"Number Format Exception", name:"Format Exception", stack:null};
                }
                if (point2String.length >= 2) {
                    point2lon = Double.parseDouble (point2String[0]);
                    point2lat = Double.parseDouble (point2String[1]);
                } else {
                    throw  {message:"Number Format Exception", name:"Format Exception", stack:null};
                }
                route.addPoint ( new sec.geo.GeoPoint (point1lon, point1lat));
                route.addPoint ( new sec.geo.GeoPoint (point2lon, point2lat));
                route.setLeftWidth ((attributes.AM_DISTANCE.get (2 * i)).doubleValue ());
                route.setRightWidth ((attributes.AM_DISTANCE.get (2 * i + 1)).doubleValue ());
                route.setMinAltitude ((attributes.X_ALTITUDE_DEPTH.get (2 * i)).doubleValue ());
                route.setMaxAltitude ((attributes.X_ALTITUDE_DEPTH.get (2 * i + 1)).doubleValue ());
                track.addRoute (route);
            }
            pointArrayStringList = kmlRender.getKml (track, id, name, description, lineColor, fillColor);
        } else {
            throw  {message:"Invalid Number of Points", name:"Point Exception", stack:null};
        }
    } catch (e) {
        throw e;
    }
    return pointArrayStringList;
};//, "~S,~S,~S,~S,~S,sec.geo.kml.KmlOptions.AltitudeMode,sec.web.renderer.SymbolModifiers");
//Clazz.defineStatics (c$,

//"CYLINDER", "CYLINDER-------",
//    "ORBIT", "ORBIT----------",
//    "ROUTE", "ROUTE----------",
//    "POLYGON", "POLYGON--------",
//    "RADARC", "RADARC---------",
//    "POLYARC", "POLYARC--------",
//    "CAKE", "CAKE-----------",
//    "TRACK", "TRACK----------",
//    "ATTRIBUTES", "attributes",
//    "MIN_ALT", "minalt",
//    "MAX_ALT", "maxalt",
//    "RADIUS1", "radius1",
//    "RADIUS2", "radius2",
//    "LEFT_AZIMUTH", "leftAzimuth",
//    "RIGHT_AZIMUTH", "rightAzimuth",
//    "MIN_ALT_DEFAULT", 0.0,
//    "MAX_ALT_DEFAULT", 100.0,
//    "RADIUS1_DEFAULT", 50.0,
//    "RADIUS2_DEFAULT", 100.0,
//    "LEFT_AZIMUTH_DEFAULT", 0.0,
//    "RIGHT_AZIMUTH_DEFAULT", 90.0,
//    "DEFAULT_ATTRIBUTES", "[{radius1:50.0,radius2:100.0,minalt:0.0,maxalt:100.0,rightAzimuth:90.0,leftAzimuth:0.0}]",
//    "ERR_ATTRIBUTES_NOT_FORMATTED", "{\"type\":\"error\",\"error\":\"The attribute paramaters are not formatted correctly",
//    "ERR_COORDINATES_NOT_FORMATTED", "{\"type\":\"error\",\"error\":\"There was an error creating the Symbol - the coordinates were not formatted correctly",
//    "ERR_GENERAL_ERROR", "{\"type\":\"error\",\"error\":\"There was an error creating the Symbol - An unknown error occurred.  Please refer to the stack trace",
//    "ERR_INVALID_NUMBER_POINTS_ERROR", "{\"type\":\"error\",\"error\":\"Not enough points were passed in to create a graphic.");
        
sec.web.renderer.Shape3DHandler.CYLINDER="CYLINDER-------";
sec.web.renderer.Shape3DHandler.ORBIT="ORBIT----------";
sec.web.renderer.Shape3DHandler.ROUTE="ROUTE----------";
sec.web.renderer.Shape3DHandler.POLYGON="POLYGON--------";
sec.web.renderer.Shape3DHandler.RADARC="RADARC---------";
sec.web.renderer.Shape3DHandler.POLYARC="POLYARC--------";
sec.web.renderer.Shape3DHandler.CAKE="CAKE-----------";
sec.web.renderer.Shape3DHandler.TRACK="TRACK----------";
sec.web.renderer.Shape3DHandler.ATTRIBUTES="attributes";
sec.web.renderer.Shape3DHandler.MIN_ALT="minalt";
sec.web.renderer.Shape3DHandler.MAX_ALT="maxalt";
sec.web.renderer.Shape3DHandler.RADIUS1="radius1";
sec.web.renderer.Shape3DHandler.RADIUS2="radius2";
sec.web.renderer.Shape3DHandler.LEFT_AZIMUTH="leftazimuth";
sec.web.renderer.Shape3DHandler.RIGHT_AZIMUTH="rightazimuth";
sec.web.renderer.Shape3DHandler.MIN_ALT_DEFAULT=0.0;
sec.web.renderer.Shape3DHandler.MAX_ALT_DEFAULT=100.0;
sec.web.renderer.Shape3DHandler.RADIUS1_DEFAULT=50.0;
sec.web.renderer.Shape3DHandler.RADIUS2_DEFAULT=100.0;
sec.web.renderer.Shape3DHandler.LEFT_AZIMUTH_DEFAULT=0.0;
sec.web.renderer.Shape3DHandler.RIGHT_AZIMUTH_DEFAULT=90.0;
sec.web.renderer.Shape3DHandler.DEFAULT_ATTRIBUTES="[{radius1:50.0,radius2:100.0,minalt:0.0,maxalt:100.0,rightAzimuth:90.0,leftAzimuth:0.0}]";
sec.web.renderer.Shape3DHandler.ERR_ATRIBUTES_NOT_FORMATTED="{\"type\":\"error\",\"error\":\"The attribute paramaters are not formatted correctly";
sec.web.renderer.Shape3DHandler.ERR_COORDINATES_NOT_FORMATTED="{\"type\":\"error\",\"error\":\"There was an error creating the Symbol - the coordinates were not formatted correctly";
sec.web.renderer.Shape3DHandler.ERR_GENERAL_ERROR="{\"type\":\"error\",\"error\":\"There was an error creating the Symbol - An unknown error occurred.  Please refer to the stack trace";
sec.web.renderer.Shape3DHandler.ERR_INVALID_NUMBER_POINTS_ERROR="{\"type\":\"error\",\"error\":\"Not enough points were passed in to create a graphic.";
//});

