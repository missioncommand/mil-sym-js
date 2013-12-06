var armyc2=armyc2 || {};
armyc2.c2sd=armyc2.c2sd || {};
armyc2.c2sd.JavaRendererServer=armyc2.c2sd.JavaRendererServer || {};
armyc2.c2sd.JavaRendererServer.RenderMultipoints=armyc2.c2sd.JavaRendererServer.RenderMultipoints || {};
armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer={
    setClientCoords : function (milStd, tg) {
        try {
            var latLongs =  new java.util.ArrayList ();
            var j = 0;
            var coords = milStd.getCoordinates ();
            var pt2d = null;
            var pt2 = null;
            for (j = 0; j < coords.size (); j++) {
                pt2d = coords.get (j);
                pt2 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.Point2DToPOINT2 (pt2d);
                latLongs.add (pt2);
            }
            tg.set_LatLongs (latLongs);
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException ("clsRenderer", "setClientCoords",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed to set geo points or pixels for " + milStd.getSymbolID (), exc));
            } else {
                throw exc;
            }
        }
    },
    getClientCoords : function (tg) {
        var coords = null;
        try {
            var j = 0;
            var pt2d = null;
            var pt2 = null;
            coords =  new java.util.ArrayList ();
            for (j = 0; j < tg.LatLongs.size (); j++) {
                pt2 = tg.LatLongs.get (j);
                pt2d = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D (pt2.x, pt2.y);
                coords.add (pt2d);
            }
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException ("clsRenderer", "getClientCoords",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed to set geo points or pixels for " + tg.get_SymbolId (), exc));
            } else {
                throw exc;
            }
        }
        return coords;
    },
    createMilStdSymboFromTGLight:function (tg, converter) {
        var milStd = null;
        try {
            var j = 0;
            var symbolId = tg.get_SymbolId ();
            var std = tg.getSymbologyStandard ();
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.initializeLinetypes (std);
            var lineType = armyc2.c2sd.JavaTacticalRenderer.clsUtility.GetLinetypeFromString (symbolId);
            var status = tg.get_Status ();
            if (status !== null && status.equals ("A")) {
                if (armyc2.c2sd.JavaTacticalRenderer.clsUtility.isBasicShape (lineType) === false) {
            }
            }
            tg.Pixels = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.LatLongToPixels (tg.LatLongs, converter);
            var isClosedArea = armyc2.c2sd.JavaTacticalRenderer.clsUtility.isClosedPolygon (lineType);
            if (isClosedArea) {
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.ClosePolygon (tg.Pixels);
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.ClosePolygon (tg.LatLongs);
            }
            var coords = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.getClientCoords (tg);
            tg.set_Font ( new armyc2.c2sd.graphics2d.Font ("Arial", armyc2.c2sd.graphics2d.Font.PLAIN, 12));
            var modifiers =  new java.util.HashMap ();
            modifiers.put ("W", tg.get_DTG ());
            modifiers.put ("W1", tg.get_DTG1 ());
            modifiers.put ("H", tg.get_H ());
            modifiers.put ("H1", tg.get_H1 ());
            modifiers.put ("H2", tg.get_H2 ());
            modifiers.put ("T", tg.get_Name ());
            modifiers.put ("T1", tg.get_T1 ());
            modifiers.put ("Y", tg.get_Location ());
            modifiers.put ("N", tg.get_N ());
            milStd =  new armyc2.c2sd.renderer.utilities.MilStdSymbol (symbolId, "1", coords, modifiers);
            if (lineType === 243112000) {
                var AM = milStd.getModifiers_AM_AN_X ("AM");
                var AN = milStd.getModifiers_AM_AN_X ("AN");
                var X = milStd.getModifiers_AM_AN_X ("XN");
                if (AM !== null) {
                    var numSectors = AM.size () - 1;
                    if (Math.floor (AN.size () / 2) < numSectors) numSectors = Math.floor (AN.size () / 2);
                    var left;
                    var right;
                    var min = 0;
                    var max = 0;
                    var strLeftRightMinMax = "";
                    var strH1 = "";
                    for (j = 0; j < numSectors; j++) {
                        left = (AN.get (2 * j)).doubleValue ();
                        right = (AN.get (2 * j + 1)).doubleValue ();
                        min = (AM.get (j)).doubleValue ();
                        max = (AM.get (j + 1)).doubleValue ();
                        strLeftRightMinMax += Double.toString (left) + "," + Double.toString (right) + "," + Double.toString (min) + "," + Double.toString (max);
                        if (j < numSectors - 1) strLeftRightMinMax += ",";
                        if (X !== null && j < X.size ()) {
                            strH1 += Double.toString ((X.get (j)).doubleValue ());
                            if (j < numSectors - 1 && j < X.size () - 1) strH1 += ",";
                        }
                    }
                    tg.set_H2 (strLeftRightMinMax);
                    tg.set_H1 (strH1);
                }
            }
            switch (lineType) {
                case 22231000:
                case 22232000:
                case 22233000:
                case 22234000:
                case 22234100:
                case 22234200:
                case 24322100:
                case 24322200:
                case 24322300:
                    X = milStd.getModifiers_AM_AN_X ("XN");
                    if (X !== null && X.size () > 0) tg.set_H (Double.toString ((X.get (0)).doubleValue ()));
                    if (X !== null && X.size () > 1) tg.set_H1 (Double.toString ((X.get (1)).doubleValue ()));
                    break;
                case 22224000:
                case 22222000:
                case 22224001:
                case 22222001:
                case 22225000:
                case 22221000:
                case 22223000:
                    var pt = tg.LatLongs.get (0);
                    var pt2d0 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D (pt.x, pt.y);
                    var pt2d0Pixels = converter.GeoToPixels (pt2d0);
                    var pt0Pixels = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pt2d0Pixels.getX (), pt2d0Pixels.getY ());
                    var dist = 10000;
                    var pt2 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate (pt, dist, 0);
                    var pt2d1 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D (pt2.x, pt2.y);
                    var pt2d1Pixels = converter.GeoToPixels (pt2d1);
                    var pt1Pixels = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pt2d1Pixels.getX (), pt2d1Pixels.getY ());
                    var distPixels = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pt0Pixels, pt1Pixels);
                    var pixelsPerMeter = distPixels / dist;
                    AM = milStd.getModifiers_AM_AN_X ("AM");
                    if (AM !== null) {
                        var H2 = "";
                        for (j = 0; j < AM.size (); j++) {
                            H2 += AM.get (j).toString ();
                            if (j < AM.size () - 1) H2 += ",";
                        }
                        tg.set_H2 (H2);
                    }
                    var strRadii = null;
                    var maxWidth = 0;
                    var temp = 0;
                    var maxWidthMeters = 0;
                    if (tg.get_H2 () !== null && tg.get_H2 ().isEmpty () === false) {
                        strRadii = tg.get_H2 ().$plit (",");
                        if (strRadii !== null && strRadii.length > 0) {
                            for (j = 0; j < strRadii.length; j++) {
                                if (!Double.isNaN (Double.parseDouble (strRadii[j]))) {
                                    temp = Double.parseDouble (strRadii[j]);
                                    if (temp > maxWidth) maxWidth = temp;
                                }
                            }
                            maxWidthMeters = maxWidth;
                            maxWidth *= pixelsPerMeter / 2;
                        }
                    }
                    if (tg.get_H2 () !== null && tg.get_H2 ().isEmpty () === false) {
                        if (strRadii !== null && strRadii.length > 0) {
                            var pixels = 0;
                            for (j = 0; j < tg.Pixels.size (); j++) {
                                if (tg.Pixels.size () > j) {
                                    if (strRadii.length > j) {
                                        if (!Double.isNaN (Double.parseDouble (strRadii[j]))) {
                                            pixels = Double.parseDouble (strRadii[j]) * pixelsPerMeter / 2;
                                            tg.Pixels.get (j).style = Math.floor (pixels);
                                        } else tg.Pixels.get (j).style = Math.floor (maxWidth);
                                    } else tg.Pixels.get (j).style = Math.floor (maxWidth);
                                }
                            }
                        }
                    }
                    tg.set_H2 (Double.toString (maxWidthMeters));
                    X = milStd.getModifiers_AM_AN_X ("XN");
                    if (X !== null && X.size () > 0) tg.set_H (Double.toString ((X.get (0)).doubleValue ()));
                    if (X !== null && X.size () > 1) tg.set_H1 (Double.toString ((X.get (1)).doubleValue ()));
                    break;
                default:
                    break;
            }
            switch (lineType) {
                case 24361000:
                case 24363000:
                case 24362000:
                    X = milStd.getModifiers_AM_AN_X ("XN");
                    strH1 = "";
                    if (X !== null) {
                        strH1 = Double.toString ((X.get (0)).doubleValue ());
                        tg.set_H1 (strH1);
                    }
                    break;
                default:
                    break;
            }
            if (lineType === 243111000) {
                AM = milStd.getModifiers_AM_AN_X ("AM");
                X = milStd.getModifiers_AM_AN_X ("XN");
                strH2 = "";
                strH1 = "";
                if (AM !== null) {
                    for (j = 0; j < AM.size (); j++) {
                        strH2 += Double.toString ((AM.get (j)).doubleValue ());
                        if (j < AM.size () - 1) strH2 += ",";
                        if (X !== null && j < X.size ()) {
                            strH1 += Double.toString ((X.get (j)).doubleValue ());
                            if (j < X.size () - 1) strH1 += ",";
                        }
                        if (j === 2) break;
                    }
                }
                tg.set_H2 (strH2);
                tg.set_H1 (strH1);
            }
            switch (lineType) {
                case 24326101:
                case 24321200:
                case 24323200:
                case 24322200:
                case 24324200:
                case 24325200:
                case 24331200:
                case 24332200:
                case 24333200:
                case 24334200:
                case 24335200:
                case 24336200:
                case 24337200:
                case 24338200:
                case 24339200:
                case 24312000:
                case 24321300:
                case 24322300:
                case 24323300:
                case 24324300:
                case 24325300:
                case 24326200:
                case 24331300:
                case 24332300:
                case 24333300:
                case 24334300:
                case 24335300:
                case 24336300:
                case 24337300:
                case 24338300:
                case 24339300:
                case 24353000:
                case 24363000:
                case 24352000:
                case 24362000:
                    AM = milStd.getModifiers_AM_AN_X ("AM");
                    if (AM !== null && AM.size () > 0) {
                        var strT1 = Double.toString ((AM.get (0)).doubleValue ());
                        tg.set_T1 (strT1);
                    }
                    break;
                default:
                    break;
            }
            if (lineType === 24311000) {
                AM = milStd.getModifiers_AM_AN_X ("AM");
                AN = milStd.getModifiers_AM_AN_X ("AN");
                if(AM !== null && AM.size () > 1 && AN !== null && AN.size () > 0) {
                    strT1 = Double.toString ((AM.get (0)).doubleValue ());
                    var strH = Double.toString ((AM.get (1)).doubleValue ());
                    tg.set_T1 (strT1);
                    tg.set_H (strH);
                    var strH2 = Double.toString ((AN.get (0)).doubleValue ());
                    tg.set_H2 (strH2);
                }
            }
            milStd.setFillColor (tg.get_FillColor ());
            milStd.setLineColor (tg.get_LineColor ());
            milStd.setLineWidth (tg.get_LineThickness ());
            milStd.setFillStyle (tg.get_TexturePaint ());
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException ("clsRenderer", "createMilStdSymboFromTGLight",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed to set geo points or pixels for " + tg.get_SymbolId (), exc));
            } else {
                throw exc;
            }
        }
        return milStd;
    },
    createTGLightFromMilStdSymbol:function (milStd, converter) {
        var tg =  new armyc2.c2sd.JavaTacticalRenderer.TGLight ();
        try {
            var symbolId = milStd.getSymbolID ();
            var std = milStd.getSymbologyStandard ();
            tg.setSymbologyStandard (std);
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.initializeLinetypes (std);
            tg.set_SymbolId (symbolId);
            var useLineInterpolation = milStd.getUseLineInterpolation ();
            tg.set_UseLineInterpolation (useLineInterpolation);
            var lineType = armyc2.c2sd.JavaTacticalRenderer.clsUtility.GetLinetypeFromString (symbolId);
            tg.set_LineType (lineType);
            var status = tg.get_Status ();
            if (status !== null && status.equals ("A")) {
                if (armyc2.c2sd.JavaTacticalRenderer.clsUtility.isBasicShape (lineType) === false) 
                    tg.set_LineStyle (1);
            }
            tg.set_VisibleModifiers (true);
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.setClientCoords (milStd, tg);
            tg.Pixels = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.LatLongToPixels (tg.LatLongs, converter);
            tg.set_Font ( new armyc2.c2sd.graphics2d.Font ("Arial", armyc2.c2sd.graphics2d.Font.PLAIN, 12));
            tg.set_FillColor (milStd.getFillColor ());
            tg.set_LineColor (milStd.getLineColor ());
            tg.set_LineThickness (milStd.getLineWidth ());
            tg.set_TexturePaint (milStd.getFillStyle ());
            tg.set_FontBackColor (armyc2.c2sd.renderer.utilities.Color.WHITE);
            tg.set_TextColor (tg.get_LineColor ());
            if (milStd.getModifier ("W") !== null) {
                tg.set_DTG (milStd.getModifier ("W"));
            }
            if (milStd.getModifier ("W1") !== null) {
                tg.set_DTG1 (milStd.getModifier ("W1"));
            }
            if (milStd.getModifier ("H") !== null) tg.set_H (milStd.getModifier ("H"));
            if (milStd.getModifier ("H1") !== null) tg.set_H1 (milStd.getModifier ("H1"));
            if (milStd.getModifier ("H2") !== null) tg.set_H2 (milStd.getModifier ("H2"));
            if (milStd.getModifier ("T") !== null) tg.set_Name (milStd.getModifier ("T"));
            if (milStd.getModifier ("T1") !== null) tg.set_T1 (milStd.getModifier ("T1"));
            if (milStd.getModifier ("Y") !== null) tg.set_Location (milStd.getModifier ("Y"));
            if (milStd.getModifier ("N") !== null) tg.set_N (milStd.getModifier ("N"));
            var isClosedArea = armyc2.c2sd.JavaTacticalRenderer.clsUtility.isClosedPolygon (lineType);
            if (isClosedArea) {
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.ClosePolygon (tg.Pixels);
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.ClosePolygon (tg.LatLongs);
            }
            if (lineType === 243112000) {
                var AM = milStd.getModifiers_AM_AN_X ("AM");
                var AN = milStd.getModifiers_AM_AN_X ("AN");
                var X = milStd.getModifiers_AM_AN_X ("XN");
                if (AM !== null) {
                    var numSectors = AM.length - 1;
                    if (Math.floor (AN.length / 2) < numSectors) numSectors = Math.floor (AN.length / 2);
                    var left;
                    var right;
                    var min = 0;
                    var max = 0;
                    var strLeftRightMinMax = "";
                    var strH1 = "";
                    for (var j = 0; j < numSectors; j++) 
                    {
                        left = AN[2*j];
                        right = AN[2*j+1];
                        min = AM[j];
                        max = AM[j+1];
                        strLeftRightMinMax += Double.toString (left) + "," + Double.toString (right) + "," + Double.toString (min) + "," + Double.toString (max);
                        if (j < numSectors - 1) strLeftRightMinMax += ",";
                        if (X !== null && j < X.length) 
                        {
                            strH1 += X[j];
                            if (j < numSectors - 1 && j < X.length - 1) 
                                strH1 += ",";
                        }
                    }
                    tg.set_H2 (strLeftRightMinMax);
                    tg.set_H1 (strH1);
                }
            }
            j = 0;
            switch (lineType) {
                case 22231000:
                case 22232000:
                case 22233000:
                case 22234000:
                case 22234100:
                case 22234200:
                case 24322100:
                case 24322200:
                case 24322300:
                    X = milStd.getModifiers_AM_AN_X ("XN");
                    //if (X !== null && X.size () > 0) tg.set_H (Double.toString ((X.get (0)).doubleValue ()));
                    //if (X !== null && X.size () > 1) tg.set_H1 (Double.toString ((X.get (1)).doubleValue ()));
                    if (X !== null && X.length > 0) tg.set_H (X[0]);
                    if (X !== null && X.length > 1) tg.set_H1 (X[1]);
                    break;
                case 22224000:
                case 22222000:
                case 22224001:
                case 22222001:
                case 22225000:
                case 22221000:
                case 22223000:
                    var pt = tg.LatLongs.get (0);
                    var pt2d0 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D (pt.x, pt.y);
                    var pt2d0Pixels = converter.GeoToPixels (pt2d0);
                    var pt0Pixels = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pt2d0Pixels.getX (), pt2d0Pixels.getY ());
                    var dist = 10000;
                    var pt2 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate (pt, dist, 0);
                    var pt2d1 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D (pt2.x, pt2.y);
                    var pt2d1Pixels = converter.GeoToPixels (pt2d1);
                    var pt1Pixels = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pt2d1Pixels.getX (), pt2d1Pixels.getY ());
                    var distPixels = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pt0Pixels, pt1Pixels);
                    var pixelsPerMeter = distPixels / dist;
                    AM = milStd.getModifiers_AM_AN_X ("AM");
                    if (AM !== null) {
                        var H2 = "";
                        for (j = 0; j < AM.length; j++) {
                            //H2 += AM.get (j).toString ();
                            H2 += AM[j].toString ();
                            if (j < AM.length - 1) H2 += ",";
                        }
                        tg.set_H2 (H2);
                    }
                    var strRadii = null;
                    var maxWidth = 0;
                    var temp = 0;
                    var maxWidthMeters = 0;
                    if (tg.get_H2 () !== null && tg.get_H2 ().isEmpty () === false) {
                        strRadii = tg.get_H2().$plit (",");
                        if (strRadii !== null && strRadii.length > 0) {
                            for (j = 0; j < strRadii.length; j++) {
                                if (!Double.isNaN (Double.parseDouble (strRadii[j]))) {
                                    temp = Double.parseDouble (strRadii[j]);
                                    if (temp > maxWidth) maxWidth = temp;
                                }
                            }
                            maxWidthMeters = maxWidth;
                            maxWidth *= pixelsPerMeter / 2;
                        }
                    }
                    if (tg.get_H2 () !== null && tg.get_H2 ().isEmpty () === false) {
                        if (strRadii !== null && strRadii.length > 0) {
                            var pixels = 0;
                            for (j = 0; j < tg.Pixels.size (); j++) {
                                if (tg.Pixels.size () > j) {
                                    if (strRadii.length > j) {
                                        if (!Double.isNaN (Double.parseDouble (strRadii[j]))) {
                                            pixels = Double.parseDouble (strRadii[j]) * pixelsPerMeter / 2;
                                            tg.Pixels.get (j).style = Math.floor (pixels);
                                        } else tg.Pixels.get (j).style = Math.floor (maxWidth);
                                    } else tg.Pixels.get (j).style = Math.floor (maxWidth);
                                }
                            }
                        }
                    }
                    tg.set_H2 (Double.toString (maxWidthMeters));
                    X = milStd.getModifiers_AM_AN_X ("XN");
                    if (X !== null && X.length > 0) tg.set_H (X[0]);
                    if (X !== null && X.length > 1) tg.set_H1 (X[1]);
                    break;
                default:
                    break;
            }
            switch (lineType) 
            {
                case 24361000:
                case 24363000:
                case 24362000:
                    X = milStd.getModifiers_AM_AN_X ("XN");
                    strH1 = "";
                    if (X !== null) {
                        //strH1 = Double.toString ((X.get (0)).doubleValue ());
                        strH1 = X[0];
                        tg.set_H1 (strH1);
                    }
                    break;
                default:
                    break;
            }
            if (lineType === 243111000) 
            {
                AM = milStd.getModifiers_AM_AN_X ("AM");
                X = milStd.getModifiers_AM_AN_X ("XN");
                var strH2 = "";
                strH1 = "";
                if (AM !== null) 
                {
                    for (j = 0; j < AM.length; j++) 
                    {
                        strH2 += AM[j];
                        if (j < AM.length - 1) 
                            strH2 += ",";
                        if (X !== null && j < X.length) 
                        {
                            strH1 += X[j];
                            if (j < X.length - 1)
                                strH1 += ",";
                        }
                        if (j === 2) 
                            break;
                    }
                }
                tg.set_H2 (strH2);
                tg.set_H1 (strH1);
            }
            switch (lineType) {
                case 24326101:
                case 24321200:
                case 24323200:
                case 24322200:
                case 24324200:
                case 24325200:
                case 24331200:
                case 24332200:
                case 24333200:
                case 24334200:
                case 24335200:
                case 24336200:
                case 24337200:
                case 24338200:
                case 24339200:
                case 24312000:
                case 24321300:
                case 24322300:
                case 24323300:
                case 24324300:
                case 24325300:
                case 24326200:
                case 24331300:
                case 24332300:
                case 24333300:
                case 24334300:
                case 24335300:
                case 24336300:
                case 24337300:
                case 24338300:
                case 24339300:
                case 24353000:
                case 24363000:
                case 24352000:
                case 24362000:
                    AM = milStd.getModifiers_AM_AN_X ("AM");
                    if (AM !== null && AM.length > 0) {
                        var strT1 = AM[0];
                        tg.set_T1 (strT1);
                    }
                    break;
                default:
                    break;
            }
            if (lineType === 24311000) {
                AM = milStd.getModifiers_AM_AN_X ("AM");
                AN = milStd.getModifiers_AM_AN_X ("AN");
                if (AM !== null && AM.length > 1 && AN !== null && AN.length > 0) 
                {
                    strT1 = AM[0];
                    var strH = AM[1];
                    tg.set_T1 (strT1);
                    tg.set_H (strH);
                    strH2 = AN[0];
                    tg.set_H2 (strH2);
                }
            }
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException ("clsRenderer", "createTGLightfromMilStdSymbol",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed to build multipoint TG for " + milStd.getSymbolID (), exc));
            } else {
                throw exc;
            }
        }
        return tg;
    },
    render:function (symbol, converter) {
        try {
            var tg = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.createTGLightFromMilStdSymbol (symbol, converter);
            var shapeInfos =  new java.util.ArrayList ();
            var modifierShapeInfos =  new java.util.ArrayList ();
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.FilterAXADPoints (tg, converter);
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.FilterPoints (tg);
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.GetLineArray (tg, converter, shapeInfos, modifierShapeInfos);
            symbol.setModifierShapes (modifierShapeInfos);
            symbol.setSymbolShapes (shapeInfos);
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException ("clsRenderer", "render",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed to render " + symbol.getSymbolID (), exc));
            } else {
                throw exc;
            }
        }
        return ;
    },
    render_TG: function (tg, converter, shapeInfos, modifierShapeInfos) {
        try {
            var lineType = -1;
            var isClosedArea = false;
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.setHostileLC (tg);
            var symbolId = tg.get_SymbolId ();
            lineType = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.IsWeather (symbolId);
            if (lineType < 0) {
                lineType = armyc2.c2sd.JavaTacticalRenderer.clsUtility.GetLinetypeFromString (symbolId);
            }
            isClosedArea = armyc2.c2sd.JavaTacticalRenderer.clsUtility.isClosedPolygon (lineType);
            if (isClosedArea) {
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.ClosePolygon (tg.Pixels);
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.ClosePolygon (tg.LatLongs);
            }
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.FilterAXADPoints (tg, converter);
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.FilterPoints (tg);
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.GetLineArray (tg, converter, shapeInfos, modifierShapeInfos);
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException ("clsRenderer", "render",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed to render " + tg.get_SymbolId (), exc));
            } else {
                throw exc;
            }
        }
        return ;
    },
    GetLineArray : function (tg, converter, shapeInfos, modifierShapeInfos) {
        try {
            var shapes =  new java.util.ArrayList ();
            var modifierShapes =  new java.util.ArrayList ();
            var lineType = tg.get_LineType ();
            var minPoints2 = armyc2.c2sd.JavaTacticalRenderer.clsUtility.GetMinPoints (lineType);
            var minPoints =  new armyc2.c2sd.JavaLineArray.ref ();
            var channelPoints =  new java.util.ArrayList ();
            var bolChange1 = armyc2.c2sd.JavaTacticalRenderer.clsUtility.IsChange1Area (lineType, minPoints);
            var bolMeTOC = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.IsWeather (tg.get_SymbolId ());
            tg.modifiers =  new java.util.ArrayList ();
            var bi =  new armyc2.c2sd.graphics2d.BufferedImage (8, 8, 2);
            var g2d = bi.createGraphics ();
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifiers (tg, g2d, null);
            var rev = tg.getSymbologyStandard ();
            var hatchShape = null;
            if (converter === null) armyc2.c2sd.JavaTacticalRenderer.clsUtility.getHatchShape (tg, bi);
            if (tg.Pixels.size () < minPoints2) {
                lineType = -1;
                bolChange1 = false;
            }
            if (bolChange1) {
                tg.Pixels.clear ();
                bolChange1 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.Change1TacticalAreas (tg, lineType, converter, shapes);
            } else if (bolMeTOC > 0) {
                try {
                    armyc2.c2sd.JavaTacticalRenderer.clsMETOC.GetMeTOCShape (tg, shapes, rev);
                } catch (ex) {
                    if (Clazz.instanceOf (ex)) {
                        armyc2.c2sd.JavaTacticalRenderer.clsUtility.WriteFile ("Error in ClsMETOC.GetMeTOCShape");
                    } else {
                        throw ex;
                    }
                }
            } else {
                if (armyc2.c2sd.JavaLineArray.CELineArray.CIsChannel (lineType) === 0) {
                    if (lineType !== 23111001) {
                        tg.Pixels = armyc2.c2sd.JavaLineArray.arraysupport.GetLineArray2 (lineType, tg.Pixels, shapes, null, rev);
                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.GetIntegralTextShapes (tg, g2d, shapes);
                    }
                    if (lineType === 23111001) {
                        var tempShapes = null;
                        var partitions = armyc2.c2sd.JavaTacticalRenderer.clsChannelUtility.GetPartitions2 (tg);
                        var pixels = null;
                        var l = 0;
                        var k = 0;
                        for (l = 0; l < partitions.size (); l++) {
                            tempShapes =  new java.util.ArrayList ();
                            pixels =  new java.util.ArrayList ();
                            for (k = partitions.get (l).start; k <= partitions.get (l).end_Renamed + 1; k++) {
                                pixels.add (tg.Pixels.get (k));
                            }
                            pixels = armyc2.c2sd.JavaLineArray.arraysupport.GetLineArray2 (lineType, pixels, tempShapes, null, rev);
                            shapes.addAll (tempShapes);
                        }
                    }
                } else {
                    armyc2.c2sd.JavaTacticalRenderer.clsChannelUtility.DrawChannel (tg.Pixels, lineType, tg, shapes, channelPoints, rev);
                    tg.Pixels = channelPoints;
                }
            }
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.SetShapeProperties (tg, shapes, bi);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifiers2 (tg);
            if (hatchShape !== null) shapes.add (hatchShape);
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.Shape2ToShapeInfo (shapeInfos, shapes);
            if (modifierShapeInfos !== null) {
                armyc2.c2sd.JavaTacticalRenderer.Modifier2.DisplayModifiers2 (tg, g2d, modifierShapes, false, converter);
                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.Shape2ToShapeInfo (modifierShapeInfos, modifierShapes);
                bi.flush ();
                g2d.dispose ();
                bi = null;
                g2d = null;
            }
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException ("clsRenderer", "GetLineArray",  new armyc2.c2sd.renderer.utilities.RendererException ("Points calculator failed for " + tg.get_SymbolId (), exc));
            } else {
                throw exc;
            }
        }
        return ;
    },
    Shape2ToShapeInfo2:function (shape) {
        var si = null;
        try {
            var s = shape.getShape ();
            si =  new armyc2.c2sd.renderer.utilities.ShapeInfo (s);
            si.setAffineTransform (shape.getAffineTransform ());
            si.setFillColor (shape.getFillColor ());
            if (shape.getGlyphPosition () !== null) si.setGlyphPosition (shape.getGlyphPosition ());
            si.setLineColor (shape.getLineColor ());
            si.setModifierString (shape.getModifierString ());
            si.setModifierStringAngle (shape.getModifierStringAngle ());
            if (shape.getPolylines () !== null) si.setPolylines (shape.getPolylines ());
            si.setShapeType (shape.getShapeType ());
            si.setStroke (shape.getStroke ());
            if (s === null) {
                si.setTextLayout (shape.getTextLayout ());
            }
            if (s !== null) si.setShape (s);
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException ("clsRenderer", "Shape2ToShapeInfo",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed to build ShapeInfo ArrayList", exc));
            } else {
                throw exc;
            }
        }
        return si;
    },
    Shape2ToShapeInfo : function (shapeInfos, shapes) {
        try {
            var j = 0;
            var shape = null;
            if (shapes === null || shapeInfos === null || shapes.isEmpty ()) return ;
            var si = null;
            for (j = 0; j < shapes.size (); j++) {
                shape = shapes.get (j);
                si = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.Shape2ToShapeInfo2 (shape);
                shapeInfos.add (si);
            }
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException ("clsRenderer", "Shape2ToShapeInfo",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed to build ShapeInfo ArrayList", exc));
            } else {
                throw exc;
            }
        }
        return ;
    },
    renderWithPolylines:function (mss, converter, clipArea) {
        try {
            var tg = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.createTGLightFromMilStdSymbol (mss, converter);
            var shapeInfos =  new java.util.ArrayList ();
            var modifierShapeInfos =  new java.util.ArrayList ();
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.render_GE (tg, shapeInfos, modifierShapeInfos, converter, clipArea);
            mss.setSymbolShapes (shapeInfos);
            mss.setModifierShapes (modifierShapeInfos);
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException ("clsRenderer", "renderWithPolylines",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside renderWithPolylines", exc));
            } else {
                throw exc;
            }
        }
    },
    render_GE: function (tg, shapeInfos, modifierShapeInfos, converter, clipArea) {
        try {
            var clipBounds = null;
            armyc2.c2sd.JavaLineArray.CELineArray.setClient ("ge");
            var origPixels = null;
            var origLatLongs = null;
            if (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.segmentColorsSet (tg)) 
            {
                origPixels = tg.Pixels.clone();
                origLatLongs = tg.LatLongs.clone();
            }
            var shiftLines = armyc2.c2sd.JavaLineArray.Channels.getShiftLines ();
            if (shiftLines) {
                var affiliation = tg.get_Affiliation ();
                armyc2.c2sd.JavaLineArray.Channels.setAffiliation (affiliation);
            }
            armyc2.c2sd.JavaLineArray.CELineArray.setMinLength (2.5);
            var clipPoints = null;
            if (clipArea !== null) {
                //                    if (clipArea.getClass ().isAssignableFrom (armyc2.c2sd.graphics2d.Rectangle2D)) 
                //                        clipBounds = clipArea;
                //                    else if (clipArea.getClass ().isAssignableFrom (armyc2.c2sd.graphics2d.Rectangle)) 
                //                        clipBounds = clipArea;
                //                    else if (clipArea.getClass ().isAssignableFrom (java.util.ArrayList))                     
                //                        clipPoints = clipArea;
                if (clipArea instanceof armyc2.c2sd.graphics2d.Rectangle) 
                {
                    clipBounds = clipArea;
                }
                else if (clipArea instanceof armyc2.c2sd.graphics2d.Rectangle2D) 
                {
                    clipBounds = clipArea;
                }
                else if (clipArea instanceof java.util.ArrayList)                     
                {
                    clipPoints = clipArea;
                }
            }
            var useClipPoints = false;
            if (useClipPoints === true && clipBounds !== null) {
                var x = clipBounds.getMinX ();
                var y = clipBounds.getMinY ();
                var width = clipBounds.getWidth ();
                var height = clipBounds.getHeight ();
                clipPoints =  new java.util.ArrayList ();
                clipPoints.add (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D (x, y));
                clipPoints.add (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D (x + width, y));
                clipPoints.add (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D (x + width, y + height));
                clipPoints.add (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D (x, y + height));
                clipPoints.add (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D (x, y));
                clipBounds = null;
            }
            if (tg.get_Client () === null || tg.get_Client ().isEmpty ()) tg.set_client ("ge");
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.RemoveDuplicatePoints (tg);                
            var rev = tg.getSymbologyStandard ();
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.initializeLinetypes (rev);
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.setRevC (tg);                
            var linetype = tg.get_LineType ();
            if (linetype < 0) {
                linetype = armyc2.c2sd.JavaTacticalRenderer.clsUtility.GetLinetypeFromString (tg.get_SymbolId ());
                tg.set_LineType (linetype);
            }
            var isTextFlipped = new Boolean (false);
            var shapes = null;
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setSplineLinetype (tg);
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.setHostileLC (tg);
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.SegmentGeoPoints (tg, converter);
            if (clipBounds !== null || clipPoints !== null) 
            {
                if (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.canClipPoints(tg).booleanValue()===true) 
                {
                    if (clipBounds !== null) 
                        armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.ClipPolygon (tg, clipBounds);
                    else if (clipPoints !== null) 
                        armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad.ClipPolygon (tg, clipPoints);
                    armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.removeTrailingPoints (tg, clipArea);
                    tg.LatLongs = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.PixelsToLatLong (tg.Pixels, converter);
                }
            }
            if (origPixels !== null) {
                if (tg.Pixels.isEmpty () === true) return ;
                else {
                    tg.Pixels = origPixels;
                    tg.LatLongs = origLatLongs;
                    clipArea = null;
                }
            }
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.InterpolatePixels (tg);
            tg.modifiers =  new java.util.ArrayList ();
            var bi =  new armyc2.c2sd.graphics2d.BufferedImage (8, 8, 2);
            var g2d = bi.createGraphics ();
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifiers (tg, g2d, clipArea);
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.FilterPoints2 (tg, converter);
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.FilterVerticalSegments (tg);
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.FilterAXADPoints (tg, converter);
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.ClearPixelsStyle (tg);
            var linesWithFillShapes = null;
            if (clipBounds !== null) 
                linesWithFillShapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.LinesWithFill (tg, clipBounds);
            else if (clipPoints !== null) 
                linesWithFillShapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad.LinesWithFill (tg, clipPoints);
            else if (clipArea === null) 
                linesWithFillShapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.LinesWithFill (tg, clipBounds);
            var rangeFanFillShapes = null;
            var savefillStyle = tg.get_FillStyle ();
            if (linetype === 243111000) tg.set_Fillstyle (0);
            if (clipBounds !== null) 
            {
                shapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.GetLineArray (tg, converter, (isTextFlipped).booleanValue (), clipBounds);
            }
            else if (clipPoints !== null) 
                shapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.GetLineArray (tg, converter, (isTextFlipped).booleanValue (), clipPoints);
            else if (clipArea === null) 
                shapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.GetLineArray (tg, converter, (isTextFlipped).booleanValue (), clipBounds);
//            switch (linetype) 
//            {
//                case 243111000:
//                case 243112000:
//                    var tg1 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.GetCircularRangeFanFillTG (tg);
//                    tg1.set_Fillstyle (savefillStyle);
//                    if (clipBounds !== null) 
//                        {rangeFanFillShapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.GetLineArray (tg1, converter, (isTextFlipped).booleanValue (), clipBounds);}
//                    else if (clipPoints !== null) 
//                        {rangeFanFillShapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.GetLineArray (tg1, converter, (isTextFlipped).booleanValue (), clipPoints);}
//                    else if (clipArea === null) 
//                        {rangeFanFillShapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.GetLineArray (tg1, converter, (isTextFlipped).booleanValue (), clipBounds);}
//
//                    if (rangeFanFillShapes !== null)                         
//                        {shapes.addAll (0, rangeFanFillShapes);}
//
//                    break;
//                default:
//                    armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.getAutoshapeFillShape (tg, shapes);
//                    break;
//            }
            if(linetype===243111000 || linetype===243112000) 
            {
                var tg1 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.GetCircularRangeFanFillTG (tg);
                tg1.set_Fillstyle (savefillStyle);
                if (clipBounds !== null) 
                {
                    rangeFanFillShapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.GetLineArray (tg1, converter, (isTextFlipped).booleanValue (), clipBounds);
                }
                else if (clipPoints !== null) 
                {
                    rangeFanFillShapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.GetLineArray (tg1, converter, (isTextFlipped).booleanValue (), clipPoints);
                }
                else if (clipArea === null) 
                {
                    rangeFanFillShapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.GetLineArray (tg1, converter, (isTextFlipped).booleanValue (), clipBounds);
                }
                        
                if (rangeFanFillShapes !== null)                         
                {
                    shapes.addAll (0, rangeFanFillShapes);
                }
            }                        
            else
            {
                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.getAutoshapeFillShape (tg, shapes);
            }
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.LinesWithSeparateFill (tg.get_LineType (), shapes);
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.addAbatisFill (tg, shapes);
            if (shapes !== null && linesWithFillShapes !== null && linesWithFillShapes.size () > 0) 
                shapes.addAll (0, linesWithFillShapes);
            var bPostClip = false;
            bPostClip = true;
            if (bPostClip === true) 
            {
                if (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.canClipPoints (tg).booleanValue () === false && clipBounds !== null) 
                {
                    shapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.postClipShapes (tg, shapes, clipBounds);
                }
                else if (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.canClipPoints (tg).booleanValue () === false && clipPoints !== null) 
                {
                    shapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.postClipShapes (tg, shapes, clipPoints);
                }
            }
            if (modifierShapeInfos !== null) {
                var textSpecs =  new java.util.ArrayList ();
                armyc2.c2sd.JavaTacticalRenderer.Modifier2.DisplayModifiers2 (tg, g2d, textSpecs, (isTextFlipped).booleanValue (), converter);
                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.Shape2ToShapeInfo (modifierShapeInfos, textSpecs);
            }
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.buildHatchFills2 (tg, shapes);
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.Shape2ToShapeInfo (shapeInfos, shapes);
            if (clipBounds !== null)
            {
                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.SetShapeInfosPolylines (tg, shapeInfos, clipBounds);
            }
            else if (clipPoints !== null) 
                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.SetShapeInfosPolylines (tg, shapeInfos, clipPoints);
            else if (clipArea === null) 
                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.SetShapeInfosPolylines (tg, shapeInfos, clipBounds);
                
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer._className, "render_GE",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside render_GE", exc));
            } else {
                throw exc;
            }
        }
        return ;
    },
    setHostileLC : function (tg) {
        try {
            var usas1314 = new Boolean (true);
            var pts =  new java.util.ArrayList ();
            var j = 0;
            switch (tg.get_LineType ()) {
                case 22123000:
                    if (usas1314.booleanValue () === false) break;
                    if (tg.get_Affiliation () !== null && !tg.get_Affiliation ().equals ("H")) break;
                    pts = tg.Pixels.clone ();
                    for (j = 0; j < tg.Pixels.size (); j++) tg.Pixels.set (j, pts.get (pts.size () - j - 1));

                    pts = tg.LatLongs.clone ();
                    for (j = 0; j < tg.LatLongs.size (); j++) tg.LatLongs.set (j, pts.get (pts.size () - j - 1));

                    break;
                case 23112000:
                    pts = tg.Pixels.clone ();
                    for (j = 0; j < tg.Pixels.size (); j++) tg.Pixels.set (j, pts.get (pts.size () - j - 1));

                    pts = tg.LatLongs.clone ();
                    for (j = 0; j < tg.LatLongs.size (); j++) tg.LatLongs.set (j, pts.get (pts.size () - j - 1));

                    break;
                default:
                    return ;
            }
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer._className, "setHostileLC",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside setHostileLC", exc));
            } else {
                throw exc;
            }
        }
    },
    getScale: function (tg, converter, clipBounds) {
        var scale = 0;
        try {
            if (clipBounds === null || converter === null) return 0;
            var clipRect = null;
            var clipArray = null;
            if (clipBounds.getClass ().isAssignableFrom (armyc2.c2sd.graphics2d.Rectangle2D)) {
                clipRect = clipBounds;
            } else if (clipBounds.getClass ().isAssignableFrom (armyc2.c2sd.graphics2d.Rectangle2D)) {
                clipRect = clipBounds;
            } else if (clipBounds.getClass ().isAssignableFrom (armyc2.c2sd.graphics2d.Rectangle)) {
                clipRect = clipBounds;
            } else if (clipBounds.getClass ().isAssignableFrom (java.util.ArrayList)) {
                clipArray = clipBounds;
                clipRect = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.getMBR (clipArray);
            }
            var left = clipRect.getMinX ();
            var right = clipRect.getMaxX ();
            var distanceInPixels = Math.abs (right - left);
            var top = clipRect.getMinY ();
            var ul = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D (left, top);
            var ur = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D (right, top);
            var ulGeo = converter.PixelsToGeo (ul);
            var urGeo = converter.PixelsToGeo (ur);
            var pt2ulGeo = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (ulGeo.getX (), ulGeo.getY ());
            var pt2urGeo = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (urGeo.getX (), urGeo.getY ());
            var distanceInMeters = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_distance (pt2ulGeo, pt2urGeo, null, null);
            scale = (distanceInPixels / distanceInMeters) * (0.010416666666666666) * (0.025400050800101603);
            scale = 1.0 / scale;
            var lineType = tg.get_LineType ();
            if (lineType === 23200000 && scale >= 250000) tg.set_LineType (23200001);
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer._className, "getScale",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside getScale", exc));
            } else {
                throw exc;
            }
        }
        return scale;
    },
    setClip : function (clipBounds, clipRect, clipArray) {
        try {
            if (clipBounds === null) {
                return false;
            } else if (clipBounds.getClass ().isAssignableFrom (armyc2.c2sd.graphics2d.Rectangle2D)) {
                clipRect.setRect (clipBounds);
            } else if (clipBounds.getClass ().isAssignableFrom (armyc2.c2sd.graphics2d.Rectangle2D)) {
                clipRect.setRect (clipBounds);
            } else if (clipBounds.getClass ().isAssignableFrom (armyc2.c2sd.graphics2d.Rectangle)) {
                clipRect.setRect (clipBounds);
            } else if (clipBounds.getClass ().isAssignableFrom (java.util.ArrayList)) {
                clipArray.addAll (clipBounds);
            }
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer._className, "setClip",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside setClip", exc));
            } else {
                throw exc;
            }
        }
        return true;
    },
    render:function (mss, converter, clipBounds) {
        try {
            var shapeInfos =  new java.util.ArrayList ();
            var modifierShapeInfos =  new java.util.ArrayList ();
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.render (mss, converter, shapeInfos, modifierShapeInfos, clipBounds);
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer._className, "render",  new armyc2.c2sd.renderer.utilities.RendererException ("render", exc));
            } else {
                throw exc;
            }
        }
    },
    render: function (mss, converter, shapeInfos, modifierShapeInfos, clipBounds) {
        try {
            var shiftLines = armyc2.c2sd.JavaLineArray.Channels.getShiftLines ();
            var clipRect =  new armyc2.c2sd.graphics2d.Rectangle2D ();
            var clipArray =  new java.util.ArrayList ();
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.setClip (clipBounds, clipRect, clipArray);
            var rev = mss.getSymbologyStandard ();
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.initializeLinetypes (rev);
            var tg = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.createTGLightFromMilStdSymbol (mss, converter);
            armyc2.c2sd.JavaLineArray.CELineArray.setClient ("generic");
            if (shiftLines) {
                var affiliation = tg.get_Affiliation ();
                armyc2.c2sd.JavaLineArray.Channels.setAffiliation (affiliation);
            }
            armyc2.c2sd.JavaLineArray.CELineArray.setMinLength (2.5);
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.setRevC (tg);
            var scale = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.getScale (tg, converter, clipBounds);
            var linetype = tg.get_LineType ();
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.RemoveDuplicatePoints (tg);
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.setHostileLC (tg);
            var bi =  new armyc2.c2sd.graphics2d.BufferedImage (8, 8, 2);
            var g2d = bi.createGraphics ();
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.SegmentGeoPoints (tg, converter);
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.FilterAXADPoints (tg, converter);
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.FilterVerticalSegments (tg);
            var isChange1Area = armyc2.c2sd.JavaTacticalRenderer.clsUtility.IsChange1Area (linetype, null);
            var isTextFlipped = false;
            var farLeftPixels =  new java.util.ArrayList ();
            var farRightPixels =  new java.util.ArrayList ();
            if (isChange1Area === false) armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.GetFarPixels (tg, converter, farLeftPixels, farRightPixels);
            var shapesLeft =  new java.util.ArrayList ();
            var shapesRight =  new java.util.ArrayList ();
            var shapes = null;
            var textSpecsLeft = null;
            var textSpecsRight = null;
            textSpecsLeft =  new java.util.ArrayList ();
            textSpecsRight =  new java.util.ArrayList ();
            if (farLeftPixels.size () > 0) {
                tg.Pixels = farLeftPixels;
                shapesLeft = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.GetLineArray (tg, converter, isTextFlipped, clipBounds);
                armyc2.c2sd.JavaTacticalRenderer.Modifier2.DisplayModifiers2 (tg, g2d, textSpecsLeft, isTextFlipped, null);
            }
            if (farRightPixels.size () > 0) {
                tg.Pixels = farRightPixels;
                shapesRight = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.GetLineArray (tg, converter, isTextFlipped, clipBounds);
                armyc2.c2sd.JavaTacticalRenderer.Modifier2.DisplayModifiers2 (tg, g2d, textSpecsRight, isTextFlipped, null);
            }
            var textSpecs =  new java.util.ArrayList ();
            if (shapesLeft.isEmpty () || shapesRight.isEmpty ()) {
                var linesWithFillShapes = null;
                if (clipArray !== null && !clipArray.isEmpty ()) linesWithFillShapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad.LinesWithFill (tg, clipArray);
                else if (clipRect !== null && clipRect.getWidth () !== 0) linesWithFillShapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.LinesWithFill (tg, clipRect);
                else linesWithFillShapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.LinesWithFill (tg, null);
                if (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.canClipPoints (tg).booleanValue () === true && clipBounds !== null) {
                    if (clipArray !== null && !clipArray.isEmpty ()) armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad.ClipPolygon (tg, clipArray);
                    else if (clipRect !== null && clipRect.getWidth () !== 0) armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.ClipPolygon (tg, clipRect);
                    tg.LatLongs = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.PixelsToLatLong (tg.Pixels, converter);
                }
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.InterpolatePixels (tg);
                tg.modifiers =  new java.util.ArrayList ();
                armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifiers (tg, g2d, clipBounds);
                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.FilterPoints2 (tg, converter);
                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.ClearPixelsStyle (tg);
                var rangeFanFillShapes = null;
                var savefillStyle = tg.get_FillStyle ();
                if (linetype === 243111000) tg.set_Fillstyle (0);
                shapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.GetLineArray (tg, converter, isTextFlipped, clipBounds);
                switch (linetype) {
                    case 243111000:
                    case 243112000:
                        var tg1 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.GetCircularRangeFanFillTG (tg);
                        tg1.set_Fillstyle (savefillStyle);
                        rangeFanFillShapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.GetLineArray (tg1, converter, isTextFlipped, clipBounds);
                        if (rangeFanFillShapes !== null) {
                            shapes.addAll (0, rangeFanFillShapes);
                        }
                        break;
                    default:
                        break;
                }
                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.LinesWithSeparateFill (tg.get_LineType (), shapes);
                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.addAbatisFill (tg, shapes);
                if (shapes !== null && linesWithFillShapes !== null && linesWithFillShapes.size () > 0) shapes.addAll (0, linesWithFillShapes);
                if (shapes !== null && shapes.size () > 0) {
                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.DisplayModifiers2 (tg, g2d, textSpecs, isTextFlipped, null);
                    armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.Shape2ToShapeInfo (modifierShapeInfos, textSpecs);
                    mss.setModifierShapes (modifierShapeInfos);
                }
            } else {
                shapes = shapesLeft;
                shapes.addAll (shapesRight);
                if (textSpecs !== null) {
                    textSpecs.addAll (textSpecsLeft);
                    textSpecs.addAll (textSpecsRight);
                }
            }
            if (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.canClipPoints (tg).booleanValue () === false && clipBounds !== null) {
                shapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.postClipShapes (tg, shapes, clipBounds);
            }
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.Shape2ToShapeInfo (shapeInfos, shapes);
            mss.setSymbolShapes (shapeInfos);
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer._className, "render",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside render", exc));
            } else {
                throw exc;
            }
        }
        return ;
    },  
    render: function (tg, converter, shapeInfos, modifierShapeInfos, clipBounds) {
        try {
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.setHostileLC (tg);
            var isChange1Area = armyc2.c2sd.JavaTacticalRenderer.clsUtility.IsChange1Area (tg.get_LineType (), null);
            var isTextFlipped = false;
            var farLeftPixels =  new java.util.ArrayList ();
            var farRightPixels =  new java.util.ArrayList ();
            if (isChange1Area === false) armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.GetFarPixels (tg, converter, farLeftPixels, farRightPixels);
            var bi =  new armyc2.c2sd.graphics2d.BufferedImage (8, 8, 2);
            var g2d = bi.createGraphics ();
            var shapesLeft =  new java.util.ArrayList ();
            var shapesRight =  new java.util.ArrayList ();
            var shapes = null;
            var textSpecsLeft = null;
            var textSpecsRight = null;
            textSpecsLeft =  new java.util.ArrayList ();
            textSpecsRight =  new java.util.ArrayList ();
            if (farLeftPixels.size () > 0) {
                tg.Pixels = farLeftPixels;
                shapesLeft = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.GetLineArray (tg, converter, isTextFlipped, clipBounds);
                armyc2.c2sd.JavaTacticalRenderer.Modifier2.DisplayModifiers2 (tg, g2d, textSpecsLeft, isTextFlipped, null);
            }
            if (farRightPixels.size () > 0) {
                tg.Pixels = farRightPixels;
                shapesRight = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.GetLineArray (tg, converter, isTextFlipped, clipBounds);
                armyc2.c2sd.JavaTacticalRenderer.Modifier2.DisplayModifiers2 (tg, g2d, textSpecsRight, isTextFlipped, null);
            }
            var textSpecs =  new java.util.ArrayList ();
            if (shapesLeft.isEmpty () || shapesRight.isEmpty ()) {
                var linesWithFillShapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.LinesWithFill (tg, clipBounds);
                if (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.canClipPoints (tg).booleanValue () === true && clipBounds !== null) armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.ClipPolygon (tg, clipBounds);
                shapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.GetLineArray (tg, converter, isTextFlipped, clipBounds);
                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.LinesWithSeparateFill (tg.get_LineType (), shapes);
                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.addAbatisFill (tg, shapes);
                if (shapes !== null && linesWithFillShapes !== null && linesWithFillShapes.size () > 0) shapes.addAll (0, linesWithFillShapes);
                if (shapes !== null && shapes.size () > 0) {
                    armyc2.c2sd.JavaTacticalRenderer.Modifier2.DisplayModifiers2 (tg, g2d, textSpecs, isTextFlipped, null);
                    armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.Shape2ToShapeInfo (modifierShapeInfos, textSpecs);
                }
            } else {
                shapes = shapesLeft;
                shapes.addAll (shapesRight);
                if (textSpecs !== null) {
                    textSpecs.addAll (textSpecsLeft);
                    textSpecs.addAll (textSpecsRight);
                }
            }
            if (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.canClipPoints (tg).booleanValue () === false && clipBounds !== null) shapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.postClipShapes (tg, shapes, clipBounds);
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.Shape2ToShapeInfo (shapeInfos, shapes);
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer._className, "render",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside render", exc));
            } else {
                throw exc;
            }
        }
    },
    _className: "clsRenderer"
};