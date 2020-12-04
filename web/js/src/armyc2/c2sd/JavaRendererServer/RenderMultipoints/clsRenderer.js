var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.JavaRendererServer = armyc2.c2sd.JavaRendererServer || {};
armyc2.c2sd.JavaRendererServer.RenderMultipoints = armyc2.c2sd.JavaRendererServer.RenderMultipoints || {};
armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer = {
    setClientCoords: function (milStd, tg) {
        try {
            var latLongs = new java.util.ArrayList();
            var j = 0;
            var coords = milStd.getCoordinates();
            var pt2d = null;
            var pt2 = null;
            for (j = 0; j < coords.size(); j++) {
                pt2d = coords.get(j);
                pt2 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.Point2DToPOINT2(pt2d);
                latLongs.add(pt2);
            }
            tg.set_LatLongs(latLongs);
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException("clsRenderer", "setClientCoords", new armyc2.c2sd.renderer.utilities.RendererException("Failed to set geo points or pixels for " + milStd.getSymbolID(), exc));
            } else {
                throw exc;
            }
        }
    },
    getClientCoords: function (tg) {
        var coords = null;
        try {
            var j = 0;
            var pt2d = null;
            var pt2 = null;
            coords = new java.util.ArrayList();
            for (j = 0; j < tg.LatLongs.size(); j++) {
                pt2 = tg.LatLongs.get(j);
                pt2d = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(pt2.x, pt2.y);
                coords.add(pt2d);
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException("clsRenderer", "getClientCoords", new armyc2.c2sd.renderer.utilities.RendererException("Failed to set geo points or pixels for " + tg.get_SymbolId(), exc));
            } else {
                throw exc;
            }
        }
        return coords;
    },
    createMilStdSymboFromTGLight: function (tg, converter) {
        var milStd = null;
        try {
            var j = 0;
            var symbolId = tg.get_SymbolId();
            var std = tg.getSymbologyStandard();
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.initializeLinetypes(std);
            var lineType = armyc2.c2sd.JavaTacticalRenderer.clsUtility.GetLinetypeFromString(symbolId);
            var status = tg.get_Status();
            if (status !== null && status.equals("A")) {
                if (armyc2.c2sd.JavaTacticalRenderer.clsUtility.isBasicShape(lineType) === false) {
                }
            }
            tg.Pixels = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.LatLongToPixels(tg.LatLongs, converter);
            var isClosedArea = armyc2.c2sd.JavaTacticalRenderer.clsUtility.isClosedPolygon(lineType);
            if (isClosedArea) {
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.ClosePolygon(tg.Pixels);
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.ClosePolygon(tg.LatLongs);
            }
            var coords = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.getClientCoords(tg);
            tg.set_Font(new armyc2.c2sd.graphics2d.Font("Arial", armyc2.c2sd.graphics2d.Font.PLAIN, 12));
            var modifiers = new java.util.HashMap();
            modifiers.put("W", tg.get_DTG());
            modifiers.put("W1", tg.get_DTG1());
            modifiers.put("H", tg.get_H());
            modifiers.put("H1", tg.get_H1());
            modifiers.put("H2", tg.get_H2());
            modifiers.put("H3", tg.get_H3());
            modifiers.put("T", tg.get_Name());
            modifiers.put("T1", tg.get_T1());
            modifiers.put("Y", tg.get_Location());
            modifiers.put("N", tg.get_N());
            milStd = new armyc2.c2sd.renderer.utilities.MilStdSymbol(symbolId, "1", coords, modifiers);
            if (lineType === 243112000) {
                var AM = milStd.getModifiers_AM_AN_X("AM");
                var AN = milStd.getModifiers_AM_AN_X("AN");
                var X = milStd.getModifiers_AM_AN_X("XN");
                if (AM !== null) {
                    var numSectors = AM.size() - 1;
                    if (Math.floor(AN.size() / 2) < numSectors)
                        numSectors = Math.floor(AN.size() / 2);
                    var left;
                    var right;
                    var min = 0;
                    var max = 0;
                    var strLeftRightMinMax = "";
                    var strH1 = "";
                    for (j = 0; j < numSectors; j++) {
                        left = (AN.get(2 * j)).doubleValue();
                        right = (AN.get(2 * j + 1)).doubleValue();
                        min = (AM.get(j)).doubleValue();
                        max = (AM.get(j + 1)).doubleValue();
                        strLeftRightMinMax += Double.toString(left) + "," + Double.toString(right) + "," + Double.toString(min) + "," + Double.toString(max);
                        if (j < numSectors - 1)
                            strLeftRightMinMax += ",";
                        if (X !== null && j < X.size()) {
                            strH1 += Double.toString((X.get(j)).doubleValue());
                            if (j < numSectors - 1 && j < X.size() - 1)
                                strH1 += ",";
                        }
                    }
                    tg.set_H2(strLeftRightMinMax);
                    tg.set_H1(strH1);
                }
            }
            switch (lineType) {
                case 22133200:
                case 22131300:
                case 22231000:
                case 22232000:
                case 22233000:
                case 22234000:
                case 22234100:
                case 22234200:
                case 24322100:
                case 24322200:
                case 24322300:
                    X = milStd.getModifiers_AM_AN_X("XN");
                    if (X !== null && X.size() > 0)
                        tg.set_H(Double.toString((X.get(0)).doubleValue()));
                    if (X !== null && X.size() > 1)
                        tg.set_H1(Double.toString((X.get(1)).doubleValue()));
                    break;
                case 22224000:
                case 22222000:
                case 22224001:
                case 22222001:
                case 22225000:
                case 22221000:
                case 22223000:
                    var pt = tg.LatLongs.get(0);
                    var pt2d0 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(pt.x, pt.y);
                    var pt2d0Pixels = converter.GeoToPixels(pt2d0);
                    var pt0Pixels = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2d0Pixels.getX(), pt2d0Pixels.getY());
                    var dist = 10000;
                    var pt2 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(pt, dist, 0);
                    var pt2d1 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(pt2.x, pt2.y);
                    var pt2d1Pixels = converter.GeoToPixels(pt2d1);
                    var pt1Pixels = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2d1Pixels.getX(), pt2d1Pixels.getY());
                    var distPixels = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0Pixels, pt1Pixels);
                    var pixelsPerMeter = distPixels / dist;
                    AM = milStd.getModifiers_AM_AN_X("AM");
                    if (AM !== null) {
                        var H2 = "";
                        for (j = 0; j < AM.size(); j++) {
                            H2 += AM.get(j).toString();
                            if (j < AM.size() - 1)
                                H2 += ",";
                        }
                        tg.set_H2(H2);
                    }
                    var strRadii = null;
                    var maxWidth = 0;
                    var temp = 0;
                    var maxWidthMeters = 0;
                    if (tg.get_H2() !== null && tg.get_H2().isEmpty() === false) {
                        strRadii = tg.get_H2().split(",");
                        if (strRadii !== null && strRadii.length > 0) {
                            for (j = 0; j < strRadii.length; j++) {
                                if (!Double.isNaN(Double.parseDouble(strRadii[j]))) {
                                    temp = Double.parseDouble(strRadii[j]);
                                    if (temp > maxWidth)
                                        maxWidth = temp;
                                }
                            }
                            maxWidthMeters = maxWidth;
                            maxWidth *= pixelsPerMeter / 2;
                        }
                    }
                    if (tg.get_H2() !== null && tg.get_H2().isEmpty() === false) {
                        if (strRadii !== null && strRadii.length > 0) {
                            var pixels = 0;
                            for (j = 0; j < tg.Pixels.size(); j++) {
                                if (tg.Pixels.size() > j) {
                                    if (strRadii.length > j) {
                                        if (!Double.isNaN(Double.parseDouble(strRadii[j]))) {
                                            pixels = Double.parseDouble(strRadii[j]) * pixelsPerMeter / 2;
                                            tg.Pixels.get(j).style = Math.floor(pixels);
                                        } else
                                            tg.Pixels.get(j).style = Math.floor(maxWidth);
                                    } else
                                        tg.Pixels.get(j).style = Math.floor(maxWidth);
                                }
                            }
                        }
                    }
                    tg.set_H2(Double.toString(maxWidthMeters) + "m");
                    X = milStd.getModifiers_AM_AN_X("XN");
                    if (X !== null && X.size() > 0)
                        tg.set_H(Double.toString((X.get(0)).doubleValue()));
                    if (X !== null && X.size() > 1)
                        tg.set_H1(Double.toString((X.get(1)).doubleValue()));
                    break;
                default:
                    break;
            }
            switch (lineType) {
                case 24361000:
                case 24363000:
                case 24362000:
                    X = milStd.getModifiers_AM_AN_X("XN");
                    strH1 = "";
                    if (X !== null) {
                        strH1 = Double.toString((X.get(0)).doubleValue());
                        tg.set_H1(strH1);
                    }
                    break;
                default:
                    break;
            }
            if (lineType === 243111000) {
                AM = milStd.getModifiers_AM_AN_X("AM");
                X = milStd.getModifiers_AM_AN_X("XN");
                strH2 = "";
                strH1 = "";
                if (AM !== null) {
                    for (j = 0; j < AM.size(); j++) {
                        strH2 += Double.toString((AM.get(j)).doubleValue());
                        if (j < AM.size() - 1)
                            strH2 += ",";
                        if (X !== null && j < X.size()) {
                            strH1 += Double.toString((X.get(j)).doubleValue());
                            if (j < X.size() - 1)
                                strH1 += ",";
                        }
                        if (j === 2)
                            break;
                    }
                }
                tg.set_H2(strH2);
                tg.set_H1(strH1);
            }
            switch (lineType) {
                case 22133200:
                case 22131300:
                case 22131200:
                case 23162100:
                case 23162200:
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
                case 24326100:
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
                    AM = milStd.getModifiers_AM_AN_X("AM");
                    if (AM !== null && AM.size() > 0) {
                        var strT1 = Double.toString((AM.get(0)).doubleValue());
                        tg.set_T1(strT1);
                    }
                    break;
                default:
                    break;
            }
            if (lineType === 24311000 || lineType === 14000001 || lineType === 14000002) {
                AM = milStd.getModifiers_AM_AN_X("AM");
                AN = milStd.getModifiers_AM_AN_X("AN");
                if (AM.length < 2) //for square
                    AM[1] = AM[0];
                if (AM !== null && AM.size() > 1 && AN !== null && AN.size() > 0) {
                    strT1 = Double.toString((AM.get(0)).doubleValue());
                    var strH = Double.toString((AM.get(1)).doubleValue());
                    tg.set_T1(strT1);
                    tg.set_H(strH);
                    var strH2 = Double.toString((AN.get(0)).doubleValue());
                    tg.set_H2(strH2);
                }
            }
            milStd.setFillColor(tg.get_FillColor());
            milStd.setLineColor(tg.get_LineColor());
            milStd.setLineWidth(tg.get_LineThickness());
            milStd.setFillStyle(tg.get_TexturePaint());
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException("clsRenderer", "createMilStdSymboFromTGLight", new armyc2.c2sd.renderer.utilities.RendererException("Failed to set geo points or pixels for " + tg.get_SymbolId(), exc));
            } else {
                throw exc;
            }
        }
        return milStd;
    },
    createTGLightFromMilStdSymbol: function (milStd, converter) {
        var tg = new armyc2.c2sd.JavaTacticalRenderer.TGLight();
        var modifiersTG = armyc2.c2sd.renderer.utilities.ModifiersTG;
        try {
            var symbolId = milStd.getSymbolID();
            var std = milStd.getSymbologyStandard();
            tg.setSymbologyStandard(std);
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.initializeLinetypes(std);
            tg.set_SymbolId(symbolId);
            var useLineInterpolation = milStd.getUseLineInterpolation();
            tg.set_UseLineInterpolation(useLineInterpolation);

            //rev D diagnostic
            //var lineType = armyc2.c2sd.JavaTacticalRenderer.clsUtility.GetLinetypeFromString(symbolId);
            //int lineType=JavaTacticalRenderer.clsUtility.GetLinetypeFromString(symbolId);
            var lineType = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.getRevDLinetype(tg);
            //end section


            //overhead wire may be large scale
            if (lineType === 23200000 && converter._scale >= 250000)
                lineType = 23200001;
            tg.set_LineType(lineType);
            var status = tg.get_Status();
            if (status !== null && status.equals("A")) {
                if (armyc2.c2sd.JavaTacticalRenderer.clsUtility.isBasicShape(lineType) === false)
                    tg.set_LineStyle(1);
                if (lineType === 23131200)	//atditchc
                    tg.set_LineStyle(2);   //dotted outline             
            }
            tg.set_VisibleModifiers(true);
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.setClientCoords(milStd, tg);
            tg.Pixels = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.LatLongToPixels(tg.LatLongs, converter);
            //tg.set_Font(new armyc2.c2sd.graphics2d.Font("Arial", armyc2.c2sd.graphics2d.Font.PLAIN, 12));
            var instance = armyc2.c2sd.renderer.utilities.RendererSettings.getInstance();
            var fontName = instance.getModifierFontName();
            var fontSize = instance.getModifierFontSize();
            var fontStyle = instance.getModifierFontStyle();
            tg.set_Font(new armyc2.c2sd.graphics2d.Font(fontName, fontStyle, fontSize));
            tg.set_FillColor(milStd.getFillColor());
            tg.set_LineColor(milStd.getLineColor());
            tg.set_LineThickness(milStd.getLineWidth());
            tg.set_TexturePaint(milStd.getFillStyle());
            if(armyc2.c2sd.JavaTacticalRenderer.clsUtility.isBasicShape(lineType))
                tg.set_Fillstyle(milStd.getPatternFillType());
                            
            tg.set_FontBackColor(armyc2.c2sd.renderer.utilities.Color.WHITE);
            tg.set_TextColor(tg.get_LineColor());
            if (milStd.getModifier("W") !== null) {
                tg.set_DTG(milStd.getModifier("W"));
            }
            if (milStd.getModifier("W1") !== null) {
                tg.set_DTG1(milStd.getModifier("W1"));
            }
            if (milStd.getModifier("H") !== null)
                tg.set_H(milStd.getModifier("H"));
            if (milStd.getModifier("H1") !== null)
                tg.set_H1(milStd.getModifier("H1"));
            if (milStd.getModifier("H2") !== null)
                tg.set_H2(milStd.getModifier("H2"));
            if (milStd.getModifier("H3") !== null)
                tg.set_H3(milStd.getModifier("H3"));
            if (milStd.getModifier("T") !== null)
                tg.set_Name(milStd.getModifier("T"));
            if (milStd.getModifier("T1") !== null)
                tg.set_T1(milStd.getModifier("T1"));
            if (milStd.getModifier("Y") !== null)
                tg.set_Location(milStd.getModifier("Y"));
            if (milStd.getModifier("N") !== null)
                tg.set_N(milStd.getModifier("N"));
            tg.set_UseDashArray(milStd.getUseDashArray());
            tg.set_UseHatchFill(milStd.getUseFillPattern());
            tg.set_HideOptionalLabels(milStd.getHideOptionalLabels());
            var isClosedArea = armyc2.c2sd.JavaTacticalRenderer.clsUtility.isClosedPolygon(lineType);
            if(lineType===23111000 && tg.Pixels.size()===2)
            {
                var pt0=tg.Pixels.get(0);
                var pt1=tg.Pixels.get(1);
                var p0=armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0,pt1,pt0,2,5);
                var p1=armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0,pt1,pt1,2,5);
                var p2=armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0,pt1,pt1,3,5);
                var p3=armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0,pt1,pt0,3,5);
                tg.Pixels.clear();
                tg.Pixels.add(p0);
                tg.Pixels.add(p1);
                tg.Pixels.add(p2);
                tg.Pixels.add(p3);
                tg.LatLongs = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.PixelsToLatLong(tg.Pixels, converter);            
            }
            if (isClosedArea) {
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.ClosePolygon(tg.Pixels);
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.ClosePolygon(tg.LatLongs);
            }
            var altitudeLabel = milStd.getAltitudeMode();
            if (altitudeLabel === null || altitudeLabel.isEmpty())
                altitudeLabel = "MSL";
            var x_alt = 0;
            var n_alt = 0;
            var strXAlt = "";
            if (lineType === 13000000 || lineType === 13000001 || lineType === 13000002)
            {
                var AM = milStd.getModifiers_AM_AN_X(modifiersTG.AM_DISTANCE);
                var AN = milStd.getModifiers_AM_AN_X(modifiersTG.AN_AZIMUTH);
                //ensure array length 3
                var r=0;
                var b=0;
                if(AM.length===1)
                {
                    r=AM[0];
                    AM.push(r);                
                    AM.push[0];
                }
                else if(AM.length===2)
                {
                    r=AM[0];
                    b=AM[1];
                    AM[1]=r;
                    AM.push(b);
                }
                if (AN === null)
                    AN = new Array();
                if (AN.length < 1)
                    AN[0] = 0;
                if (lineType === 13000002) //for circle
                    AM[1] = AM[0];
                if (AM !== null && AM.length >= 2 && AN !== null && AN.length >= 1)
                {
                    tg.set_H1(Double.toString(AM[0]));   //semi-major
                    tg.set_H2(Double.toString(AM[1]));   //semi-minor
                    tg.set_T1(Double.toString(AN[0]));   //rotation
                    var ptAzimuth = new armyc2.c2sd.JavaLineArray.POINT2(0, 0);
                    ptAzimuth.x = AN[0];
                    var ptCenter = tg.Pixels.get(0);
                    var pt0 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(tg.LatLongs.get(0), AM[0], 90);//semi-major axis
                    var pt1 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(tg.LatLongs.get(0), AM[1], 0);//semi-minor axis
                    var pt02d = new armyc2.c2sd.graphics2d.Point2D(pt0.x, pt0.y);
                    var pt12d = new armyc2.c2sd.graphics2d.Point2D(pt1.x, pt1.y);
                    pt02d = converter.GeoToPixels(pt02d);
                    pt12d = converter.GeoToPixels(pt12d);
                    pt0 = new armyc2.c2sd.JavaLineArray.POINT2(pt02d.getX(), pt02d.getY());
                    pt1 = new armyc2.c2sd.JavaLineArray.POINT2(pt12d.getX(), pt12d.getY());
                    tg.Pixels = new java.util.ArrayList();
                    tg.Pixels.add(ptCenter);
                    tg.Pixels.add(pt0);
                    tg.Pixels.add(pt1);
                    tg.Pixels.add(ptAzimuth);
                }
                if(AM !== null && AM.length>2)
                {
                    //use AM[2] for the buffer, so PBS_CIRCLE requires AM size 3 like PBS_ELLIPSE to use a buffer
                    var dist=AM[2];
                    tg.set_H(Double.toString(AM[2]));   //buffer
                    var pt0=armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(tg.LatLongs.get(0), dist, 45);   //azimuth 45 is arbitrary
                    var pt02d = new armyc2.c2sd.graphics2d.Point2D(tg.LatLongs.get(0).x,tg.LatLongs.get(0).y);
                    var pt12d = new armyc2.c2sd.graphics2d.Point2D(pt0.x, pt0.y);
                    pt02d = converter.GeoToPixels(pt02d);
                    pt12d = converter.GeoToPixels(pt12d);
                    pt0=new armyc2.c2sd.JavaLineArray.POINT2(pt02d.getX(),pt02d.getY());
                    var pt1=new armyc2.c2sd.JavaLineArray.POINT2(pt12d.getX(),pt12d.getY());                   
                    dist=armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
                    //arraysupport will use line style to create the buffer shape
                    tg.Pixels.get(0).style=dist;
                    //the circles don't appear round in Ceisum so use metric value
                    var useAM2=false;
                    //uncomment following line to use meters
                    useAM2=true;
                    if(useAM2)
                        tg.Pixels.get(0).style=AM[2];
                       
                }
                //if(AM !== null && AM.length<=2) //need to set the buffer to 0 if the client did not set it.
                    //tg.set_H('0');   //buffer
            }
            if (lineType === 243112000)
            {
                var AM = milStd.getModifiers_AM_AN_X(modifiersTG.AM_DISTANCE);
                var AN = milStd.getModifiers_AM_AN_X(modifiersTG.AN_AZIMUTH);
                var X = milStd.getModifiers_AM_AN_X(modifiersTG.X_ALTITUDE_DEPTH);
                if (AM !== null)
                {
                    var strT1 = "";
                    for (var j = 0; j < AM.length; j++)
                    {
                        strT1 += Double.toString(AM[j]);
                        if (j < AM.length - 1)
                            strT1 += ",";
                    }
                    tg.set_T1(strT1);
                }
                if (AN !== null)
                {
                    var strT = "";
                    for (var j = 0; j < AN.length; j++)
                    {
                        strT += AN[j];
                        if (j < AN.length - 1)
                            strT += ",";
                    }
                    tg.set_Name(strT);
                }
                if (X !== null)
                {
                    var strH1 = "";
                    for (var j = 0; j < X.length; j++)
                    {
                        //strH1+=Double.toString(X[j]);
                        x_alt = X[j] * armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.feetPerMeter;
                        //strXAlt=Double.toString(x_alt)+" ft. "+altitudeLabel;
                        x_alt *= 10.0;
                        x_alt = Math.round(x_alt);
                        n_alt = x_alt;
                        x_alt = n_alt / 10.0;
                        strXAlt = Double.toString(x_alt) + " ft. " + altitudeLabel;
                        strH1 += strXAlt;

                        if (j < X.length - 1)
                            strH1 += ",";
                    }
                    tg.set_H1(strH1);
                }
                if (AM !== null && AN !== null)
                {
                    var numSectors = AN.length / 2;
                    var left = 0, right = 0, min = 0, max = 0;
                    //construct left,right,min,max from the arraylists
                    var strLeftRightMinMax = "";
                    //String strH1="";
                    for (var j = 0; j < numSectors; j++)
                    {
                        left = AN[2 * j];
                        right = AN[2 * j + 1];
                        if (j + 1 === AM.length)
                            break;
                        min = AM[j];
                        max = AM[j + 1];
                        strLeftRightMinMax += Double.toString(left) + "," + Double.toString(right) + "," + Double.toString(min) + "," + Double.toString(max);
                        if (j < numSectors - 1)
                            strLeftRightMinMax += ",";
                    }
                    var len = strLeftRightMinMax.length;
                    var c = strLeftRightMinMax.substr(len - 1, 1);
                    if (c.equalsIgnoreCase(","))
                        strLeftRightMinMax = strLeftRightMinMax.substr(0, len - 1);
                    tg.set_H2(strLeftRightMinMax);
                }
            }
            var j = 0;
            if (lineType === 15000003 || lineType === 15000004)
            {
                var minLat = tg.LatLongs.get(0).y;
                var maxLat = tg.LatLongs.get(0).y;
                var minLong = tg.LatLongs.get(0).x;
                var maxLong = tg.LatLongs.get(0).x;
                for (j = 1; j < tg.LatLongs.size(); j++)
                {
                    if (tg.LatLongs.get(j).x < minLong)
                        minLong = tg.LatLongs.get(j).x;
                    if (tg.LatLongs.get(j).x > maxLong)
                        maxLong = tg.LatLongs.get(j).x;
                    if (tg.LatLongs.get(j).y < minLat)
                        minLat = tg.LatLongs.get(j).y;
                    if (tg.LatLongs.get(j).y > maxLat)
                        maxLat = tg.LatLongs.get(j).y;
                }
                tg.LatLongs = new java.util.ArrayList();
                tg.LatLongs.add(new armyc2.c2sd.JavaLineArray.POINT2(minLong, maxLat));
                tg.LatLongs.add(new armyc2.c2sd.JavaLineArray.POINT2(maxLong, maxLat));
                tg.LatLongs.add(new armyc2.c2sd.JavaLineArray.POINT2(maxLong, minLat));
                tg.LatLongs.add(new armyc2.c2sd.JavaLineArray.POINT2(minLong, minLat));
                if (lineType === 15000004)
                    tg.LatLongs.add(new armyc2.c2sd.JavaLineArray.POINT2(minLong, maxLat));
                tg.Pixels = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.LatLongToPixels(tg.LatLongs, converter);
            }
            switch (lineType) {
                case 15000001:
                case 15000000:
                case 15000003:
                    var H2 = null;
                    var dist = 0;
                    var pt0;
                    var pt1;
                    var AM = milStd.getModifiers_AM_AN_X(modifiersTG.AM_DISTANCE);
                    if (AM !== null && AM.length > 0) {
                        H2 = AM[0].toString();
                        tg.set_H2(H2);
                    }
                    if (H2 !== null && !H2.isEmpty())
                        for (j = 0; j < tg.LatLongs.size(); j++) {
                            if (tg.LatLongs.size() > j) {
                                if (!Double.isNaN(Double.parseDouble(H2))) {
                                    if (j === 0) {
                                        dist = Double.parseDouble(H2);
                                        pt0 = new armyc2.c2sd.JavaLineArray.POINT2(tg.LatLongs.get(0));
                                        pt1 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(pt0, dist, 45);
                                        //var pt02d = new java.awt.geom.Point2D.Double(pt0.x, pt0.y);                                                                        
                                        var pt02d = new armyc2.c2sd.graphics2d.Point2D();
                                        pt02d.x = pt0.x;
                                        pt02d.y = pt0.y;
                                        //var pt12d = new java.awt.geom.Point2D.Double(pt1.x, pt1.y);
                                        pt12d = new armyc2.c2sd.graphics2d.Point2D();
                                        pt12d.x = pt1.x;
                                        pt12d.y = pt1.y;
                                        pt02d = converter.GeoToPixels(pt02d);
                                        pt12d = converter.GeoToPixels(pt12d);
                                        pt0.x = pt02d.getX();
                                        pt0.y = pt02d.getY();
                                        pt1.x = pt12d.getX();
                                        pt1.y = pt12d.getY();
                                        dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
                                    }
                                    tg.Pixels.get(j).style = Math.round(dist);
                                } else
                                    tg.Pixels.get(j).style = 0;
                            }
                        }
                    break;
                default:
                    break;
            }
            switch (lineType) {
                case 22133200:
                case 22131300:
                case 22231000:
                case 22232000:
                case 22233000:
                case 22234000:
                case 22234100:
                case 22234200:
                case 24322100:
                case 24322200:
                case 24322300:
                    X = milStd.getModifiers_AM_AN_X(modifiersTG.X_ALTITUDE_DEPTH);
                    if (X !== null && X.length > 0)
                    {
                        //tg.set_H(X[0]);
                        x_alt = X[0] * armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.feetPerMeter;
                        //strXAlt=Double.toString(x_alt)+" ft. "+altitudeLabel;
                        x_alt *= 10.0;
                        x_alt = Math.round(x_alt);
                        n_alt = x_alt;
                        x_alt = n_alt / 10.0;
                        strXAlt = Double.toString(x_alt) + " ft. " + altitudeLabel;
                        tg.set_H(strXAlt);
                    }
                    if (X !== null && X.length > 1)
                    {
                        //tg.set_H1(X[1]);
                        x_alt = X[1] * armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.feetPerMeter;
                        //strXAlt=Double.toString(x_alt)+" ft. "+altitudeLabel;
                        x_alt *= 10.0;
                        x_alt = Math.round(x_alt);
                        n_alt = x_alt;
                        x_alt = n_alt / 10.0;
                        strXAlt = Double.toString(x_alt) + " ft. " + altitudeLabel;
                        tg.set_H1(strXAlt);
                    }
                    break;
                case 22224000:
                case 22222000:
                case 22224001:
                case 22222001:
                case 22225000:
                case 22221000:
                case 22223000:
                    var pt = tg.LatLongs.get(0);
                    var pt2d0 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(pt.x, pt.y);
                    var pt2d0Pixels = converter.GeoToPixels(pt2d0);
                    var pt0Pixels = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2d0Pixels.getX(), pt2d0Pixels.getY());
                    var dist = 10000;
                    var pt2 = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(pt, dist, 0);
                    var pt2d1 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(pt2.x, pt2.y);
                    var pt2d1Pixels = converter.GeoToPixels(pt2d1);
                    var pt1Pixels = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2d1Pixels.getX(), pt2d1Pixels.getY());
                    var distPixels = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0Pixels, pt1Pixels);
                    var pixelsPerMeter = distPixels / dist;
                    AM = milStd.getModifiers_AM_AN_X(modifiersTG.AM_DISTANCE);
                    if (AM !== null) {
                        var H2 = "";
                        for (j = 0; j < AM.length; j++) {
                            H2 += AM[j].toString();
                            if (j < AM.length - 1)
                                H2 += ",";
                        }
                        tg.set_H2(H2);
                    }
                    var strRadii = null;
                    var maxWidth = 0;
                    var temp = 0;
                    var maxWidthMeters = 0;
                    if (tg.get_H2() !== null && tg.get_H2().isEmpty() === false) {
                        strRadii = tg.get_H2().split(",");
                        if (strRadii !== null && strRadii.length > 0) {
                            for (j = 0; j < strRadii.length; j++) {
                                if (!Double.isNaN(Double.parseDouble(strRadii[j]))) {
                                    temp = Double.parseDouble(strRadii[j]);
                                    if (temp > maxWidth)
                                        maxWidth = temp;
                                }
                            }
                            maxWidthMeters = maxWidth;
                            maxWidth *= pixelsPerMeter / 2;
                        }
                    }
                    if (tg.get_H2() !== null && tg.get_H2().isEmpty() === false) {
                        if (strRadii !== null && strRadii.length > 0) {
                            var pixels = 0;
                            for (j = 0; j < tg.Pixels.size(); j++) {
                                if (tg.Pixels.size() > j) {
                                    if (strRadii.length > j) {
                                        if (!Double.isNaN(Double.parseDouble(strRadii[j]))) {
                                            pixels = Double.parseDouble(strRadii[j]) * pixelsPerMeter / 2;
                                            tg.Pixels.get(j).style = Math.floor(pixels);
                                            tg.LatLongs.get(j).style = Math.floor(pixels);
                                        } else
                                        {
                                            tg.Pixels.get(j).style = Math.floor(maxWidth);
                                            tg.LatLongs.get(j).style = Math.floor(maxWidth);
                                        }
                                    } else
                                    {
                                        tg.Pixels.get(j).style = Math.floor(maxWidth);
                                        tg.LatLongs.get(j).style = Math.floor(maxWidth);
                                    }
                                }
                            }
                        }
                    }
                    tg.set_H2(Double.toString(maxWidthMeters) + "m");
                    X = milStd.getModifiers_AM_AN_X(modifiersTG.X_ALTITUDE_DEPTH);
                    if (X !== null && X.length > 0)
                    {
                        //tg.set_H(X[0]);
                        x_alt = X[0] * armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.feetPerMeter;
                        //strXAlt=Double.toString(x_alt)+" ft. "+altitudeLabel;
                        x_alt *= 10.0;
                        x_alt = Math.round(x_alt);
                        n_alt = x_alt;
                        x_alt = n_alt / 10.0;
                        strXAlt = Double.toString(x_alt) + " ft. " + altitudeLabel;
                        tg.set_H(strXAlt);
                    }
                    if (X !== null && X.length > 1)
                    {
                        //tg.set_H1(X[1]);
                        x_alt = X[1] * armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.feetPerMeter;
                        //strXAlt=Double.toString(x_alt)+" ft. "+altitudeLabel;
                        x_alt *= 10.0;
                        x_alt = Math.round(x_alt);
                        n_alt = x_alt;
                        x_alt = n_alt / 10.0;
                        strXAlt = Double.toString(x_alt) + " ft. " + altitudeLabel;
                        tg.set_H1(strXAlt);
                    }
                    break;
                default:
                    break;
            }
            if (lineType === 25200101) //geo ellipse
            {
                AM = milStd.getModifiers_AM_AN_X(modifiersTG.AM_DISTANCE);
                AN = milStd.getModifiers_AM_AN_X(modifiersTG.AN_AZIMUTH);
                if (AM !== null && AM.length > 1) {
                    var H = AM[0].toString();  //major axis
                    tg.set_H(H);
                    var T1 = AM[1].toString(); //minor axis
                    tg.set_T1(T1);
                }
                if (AN !== null && AN.length > 0) {
                    var H2 = AN[0].toString(); //rotation
                    tg.set_H2(H2);
                }
            }
            switch (lineType)
            {
                case 24361000:
                case 24363000:
                case 24362000:
                    X = milStd.getModifiers_AM_AN_X(modifiersTG.X_ALTITUDE_DEPTH);
                    strH1 = "";
                    if (X !== null && X.length > 0)
                    {
                        //strH1 = X[0];
                        //tg.set_H1(strH1);
                        x_alt = X[0] * armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.feetPerMeter;
                        //strXAlt=Double.toString(x_alt)+" ft. "+altitudeLabel;
                        x_alt *= 10.0;
                        x_alt = Math.round(x_alt);
                        n_alt = x_alt;
                        x_alt = n_alt / 10.0;
                        strXAlt = Double.toString(x_alt) + " ft. " + altitudeLabel;
                        tg.set_H1(strXAlt);
                    }
                    break;
                default:
                    break;
            }
            if (lineType === 243111000)
            {
                AM = milStd.getModifiers_AM_AN_X(modifiersTG.AM_DISTANCE);
                X = milStd.getModifiers_AM_AN_X(modifiersTG.X_ALTITUDE_DEPTH);
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
                            //strH1 += X[j];
                            x_alt = X[j] * armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.feetPerMeter;
                            //strXAlt=Double.toString(x_alt)+" ft. "+altitudeLabel;
                            x_alt *= 10.0;
                            x_alt = Math.round(x_alt);
                            n_alt = x_alt;
                            x_alt = n_alt / 10.0;
                            strXAlt = Double.toString(x_alt) + " ft. " + altitudeLabel;
                            strH1 += strXAlt;

                            if (j < X.length - 1)
                                strH1 += ",";
                        }
                        if (j === 2)
                            break;
                    }
                }
                tg.set_H2(strH2);
                tg.set_H1(strH1);
            }
            switch (lineType)
            {
                case 15000000:
                case 15000001:
                case 15000002:
                case 15000003:
                    if (tg.get_FillColor() === null)
                        tg.set_FillColor(armyc2.c2sd.renderer.utilities.Color.LIGHT_GRAY);
                    break;
                default:
                    break;
            }
            switch (lineType) {
                case 22133200:
                case 22131300:
                case 22133100:
                case 22131200:
                case 23162100:
                case 23162200:
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
                case 24326100:
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
                case 15000002:
                    AM = milStd.getModifiers_AM_AN_X(modifiersTG.AM_DISTANCE);
                    if (AM !== null && AM.length > 0) {
                        var strT1 = AM[0];
                        tg.set_T1(strT1);
                    }
                    else if (lineType === 15000002 && tg.LatLongs.size() > 1) {
                        var dist = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_distance(tg.LatLongs.get(0), tg.LatLongs.get(1),
                                null, null);
                        var strT1 = Double.toString(dist);
                        tg.set_T1(strT1);
                    }
                    break;
                default:
                    break;
            }
            if (lineType === 24311000 || lineType === 14000001 || lineType === 14000002) {
                AM = milStd.getModifiers_AM_AN_X(modifiersTG.AM_DISTANCE);
                AN = milStd.getModifiers_AM_AN_X(modifiersTG.AN_AZIMUTH);
                if (lineType === 14000002) //for square
                {
                    var r=AM[0];
                    var b=0;
                    if(AM.length===1)
                    {
                        AM.push(r);
                        AM.push(b);
                    }
                    else if(AM.length===2)
                    {
                        b=AM[1];
                        AM[1]=r;
                        AM.push(b);
                    }
                    else if(AM.length===3)                    
                        AM[1]=AM[0];
                    
                }
                if (AN === null || AN === undefined)
                    AN = new Array();
                if (AN.length < 1)
                    AN[0] = 0;
                if (AM !== null && AM.length > 1 && AN !== null && AN.length > 0)
                {
                    strT1 = AM[0];
                    var strH = AM[1];
                    tg.set_T1(strT1);
                    tg.set_H(strH);
                    strH2 = AN[0];
                    tg.set_H2(strH2);
                }
                if(AM !== null && AM.length > 2)
                {
                    var strH1 = AM[2];     //buffer size
                    tg.set_H1(strH1);
                }
                if(AM !== null && AM.length <= 2)
                {
                    tg.set_H1('0');                    
                }
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException("clsRenderer", "createTGLightfromMilStdSymbol", new armyc2.c2sd.renderer.utilities.RendererException("Failed to build multipoint TG for " + milStd.getSymbolID(), exc));
            } else {
                throw exc;
            }
        }
        return tg;
    },
    render: function (symbol, converter) {
        try {
            var tg = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.createTGLightFromMilStdSymbol(symbol, converter);
            var shapeInfos = new java.util.ArrayList();
            var modifierShapeInfos = new java.util.ArrayList();
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.FilterAXADPoints(tg, converter);
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.FilterPoints(tg);
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.GetLineArray(tg, converter, shapeInfos, modifierShapeInfos);
            symbol.setModifierShapes(modifierShapeInfos);
            symbol.setSymbolShapes(shapeInfos);
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException("clsRenderer", "render", new armyc2.c2sd.renderer.utilities.RendererException("Failed to render " + symbol.getSymbolID(), exc));
            } else {
                throw exc;
            }
        }
        return;
    },
    render_TG: function (tg, converter, shapeInfos, modifierShapeInfos) {
        try {
            var lineType = -1;
            var isClosedArea = false;
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.setHostileLC(tg);
            var symbolId = tg.get_SymbolId();
            lineType = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.IsWeather(symbolId);
            if (lineType < 0) {
                lineType = armyc2.c2sd.JavaTacticalRenderer.clsUtility.GetLinetypeFromString(symbolId);
            }
            isClosedArea = armyc2.c2sd.JavaTacticalRenderer.clsUtility.isClosedPolygon(lineType);
            if (isClosedArea) {
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.ClosePolygon(tg.Pixels);
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.ClosePolygon(tg.LatLongs);
            }
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.FilterAXADPoints(tg, converter);
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.FilterPoints(tg);
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.GetLineArray(tg, converter, shapeInfos, modifierShapeInfos);
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException("clsRenderer", "render", new armyc2.c2sd.renderer.utilities.RendererException("Failed to render " + tg.get_SymbolId(), exc));
            } else {
                throw exc;
            }
        }
        return;
    },
    GetLineArray: function (tg, converter, shapeInfos, modifierShapeInfos) {
        try {
            var shapes = new java.util.ArrayList();
            var modifierShapes = new java.util.ArrayList();
            var lineType = tg.get_LineType();
            var minPoints2 = armyc2.c2sd.JavaTacticalRenderer.clsUtility.GetMinPoints(lineType);
            var minPoints = new armyc2.c2sd.JavaLineArray.ref();
            var channelPoints = new java.util.ArrayList();
            var bolChange1 = armyc2.c2sd.JavaTacticalRenderer.clsUtility.IsChange1Area(lineType, minPoints);
            var bolMeTOC = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.IsWeather(tg.get_SymbolId());
            tg.modifiers = new java.util.ArrayList();
            var bi = new armyc2.c2sd.graphics2d.BufferedImage(8, 8, 2);
            var g2d = bi.createGraphics();
            //armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifiers(tg, g2d, null);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifiersGeo(tg, g2d, null, converter);
            var rev = tg.getSymbologyStandard();
            var hatchShape = null;
            if (converter === null)
                armyc2.c2sd.JavaTacticalRenderer.clsUtility.getHatchShape(tg, bi);
            if (tg.Pixels.size() < minPoints2) {
                lineType = -1;
                bolChange1 = false;
            }
            if (bolChange1) {
                tg.Pixels.clear();
                bolChange1 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.Change1TacticalAreas(tg, lineType, converter, shapes);
            } else if (bolMeTOC > 0) {
                try {
                    armyc2.c2sd.JavaTacticalRenderer.clsMETOC.GetMeTOCShape(tg, shapes, rev);
                } catch (ex) {
                    if (Clazz.instanceOf(ex)) {
                        armyc2.c2sd.JavaTacticalRenderer.clsUtility.WriteFile("Error in ClsMETOC.GetMeTOCShape");
                    } else {
                        throw ex;
                    }
                }
            } else {
                if (armyc2.c2sd.JavaLineArray.CELineArray.CIsChannel(lineType) === 0) {
                    if (lineType !== 23111001) {
                        tg.Pixels = armyc2.c2sd.JavaLineArray.arraysupport.GetLineArray2(lineType, tg.Pixels, shapes, null, rev);
                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.GetIntegralTextShapes(tg, g2d, shapes);
                    }
                    if (lineType === 23111001) {
                        var tempShapes = null;
                        var partitions = armyc2.c2sd.JavaTacticalRenderer.clsChannelUtility.GetPartitions2(tg);
                        var pixels = null;
                        var l = 0;
                        var k = 0;
                        for (l = 0; l < partitions.size(); l++) {
                            tempShapes = new java.util.ArrayList();
                            pixels = new java.util.ArrayList();
                            for (k = partitions.get(l).start; k <= partitions.get(l).end_Renamed + 1; k++) {
                                pixels.add(tg.Pixels.get(k));
                            }
                            pixels = armyc2.c2sd.JavaLineArray.arraysupport.GetLineArray2(lineType, pixels, tempShapes, null, rev);
                            shapes.addAll(tempShapes);
                        }
                    }
                } else {
                    armyc2.c2sd.JavaTacticalRenderer.clsChannelUtility.DrawChannel(tg.Pixels, lineType, tg, shapes, channelPoints, rev);
                    tg.Pixels = channelPoints;
                }
            }
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.SetShapeProperties(tg, shapes, bi);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifiers2(tg, shapes);
            if (hatchShape !== null)
                shapes.add(hatchShape);
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.Shape2ToShapeInfo(shapeInfos, shapes);
            if (modifierShapeInfos !== null) {
                armyc2.c2sd.JavaTacticalRenderer.Modifier2.DisplayModifiers2(tg, g2d, modifierShapes, false, converter);
                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.Shape2ToShapeInfo(modifierShapeInfos, modifierShapes);
                bi.flush();
                g2d.dispose();
                bi = null;
                g2d = null;
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException("clsRenderer", "GetLineArray", new armyc2.c2sd.renderer.utilities.RendererException("Points calculator failed for " + tg.get_SymbolId(), exc));
            } else {
                throw exc;
            }
        }
        return;
    },
    Shape2ToShapeInfo2: function (shape) {
        var si = null;
        try {
            var s = shape.getShape();
            si = new armyc2.c2sd.renderer.utilities.ShapeInfo(s);
            si.setAffineTransform(shape.getAffineTransform());
            si.setFillColor(shape.getFillColor());
            if (shape.getTexturePaint() !== null)
                si.setTexturePaint(shape.getTexturePaint());
            if (shape.getGlyphPosition() !== null)
                si.setGlyphPosition(shape.getGlyphPosition());
            si.setLineColor(shape.getLineColor());
            si.setModifierString(shape.getModifierString());
            si.setModifierStringAngle(shape.getModifierStringAngle());
            if (shape.getPolylines() !== null)
                si.setPolylines(shape.getPolylines());
            si.setShapeType(shape.getShapeType());
            si.setStroke(shape.getStroke());
            si.setModifierStringPosition(shape.getModifierStringPosition());
            if (s === null) {
                si.setTextLayout(shape.getTextLayout());
            }
            si.setTextJustify(shape.getTextJustify());
            si.setFillStyle(shape.get_FillStyle());
            if (s !== null)
                si.setShape(s);
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException("clsRenderer", "Shape2ToShapeInfo", new armyc2.c2sd.renderer.utilities.RendererException("Failed to build ShapeInfo ArrayList", exc));
            } else {
                throw exc;
            }
        }
        return si;
    },
    Shape2ToShapeInfo: function (shapeInfos, shapes) {
        try {
            var j = 0;
            var shape = null;
            if (shapes === null || shapeInfos === null || shapes.isEmpty())
                return;
            var si = null;
            for (j = 0; j < shapes.size(); j++) {
                shape = shapes.get(j);
                si = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.Shape2ToShapeInfo2(shape);
                shapeInfos.add(si);
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException("clsRenderer", "Shape2ToShapeInfo", new armyc2.c2sd.renderer.utilities.RendererException("Failed to build ShapeInfo ArrayList", exc));
            } else {
                throw exc;
            }
        }
        return;
    },
    /**
     * Required to prevent clipped symbols from appearing on the opposite side of the globe from where they were rendered
     * @param {type} tg
     * @param {type} converter required because the clipArea is in pixels
     * @param {type} clipArea pixels based bounding box
     * @returns true if the bounding box intersects the minimum bounding rectangle for the coorindates
     */
    intersectsClipArea: function (tg, converter, clipArea)
    {
        //assumes clipArea is a rectangle since that's what clients are currently using and it spans <= 180 degrees
        //assumes coords span <= 180 regardless whether they span the IDL
        var result = false;
        try {
            if (!clipArea || tg.LatLongs.size() < 2)
                return true;
            
            var clipBounds=clipArea;            
            if(clipArea instanceof java.util.ArrayList)            
                clipBounds=armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.getMBR(clipArea);
            
            var j = 0;
//            var x = clipArea.getMinX();
//            var y = clipArea.getMinY();
//            var width = clipArea.getWidth();
//            var height = clipArea.getHeight();
            var x = clipBounds.getMinX();
            var y = clipBounds.getMinY();
            var width = clipBounds.getWidth();
            var height = clipBounds.getHeight();
            
            var tl = new armyc2.c2sd.JavaLineArray.POINT2(x, y);
            var br = new armyc2.c2sd.JavaLineArray.POINT2(x + width, y + height);
            tl = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.PointPixelsToLatLong(tl, converter);
            br = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.PointPixelsToLatLong(br, converter);

            //the latitude range
            //var ptInside = false, ptAbove = false, ptBelow = false;
            //var canClipPoints = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.canClipPoints(tg);
            var coordsLeft = tg.LatLongs.get(0).x;
            var coordsRight = coordsLeft;
            var coordsTop=tg.LatLongs.get(0).y;
            var coordsBottom=coordsTop;
            var intersects=false;
            var minx=tg.LatLongs.get(0).x,maxx=minx,maxNegX=0;
            for (j = 0; j < tg.LatLongs.size(); j++)
            {                
                var pt=tg.LatLongs.get(j);
                if (pt.x < minx)
                    minx = pt.x;
                if (pt.x > maxx)
                    maxx = pt.x;
                if(maxNegX===0 && pt.x<0)
                    maxNegX=pt.x;
                if(maxNegX<0 && pt.x<0 && pt.x>maxNegX)
                    maxNegX=pt.x;
                if (pt.y < coordsBottom)
                    coordsBottom = pt.y;
                if (pt.y > coordsTop)
                    coordsTop = pt.y;                
            }
            var coordSpanIDL = false;
            if(maxx===180 || minx===-180)
                coordSpanIDL=true;
            if(maxx-minx>=180)
            {
                coordSpanIDL=true;
                coordsLeft=maxx;
                coordsRight=maxNegX;
            }else
            {
                coordsLeft=minx;
                coordsRight=maxx;
            }
            //if(canClipPoints)
            //{                
                if(br.y<=coordsBottom && coordsBottom <= tl.y)
                    intersects=true;
                else if(coordsBottom<=br.y && br.y <=coordsTop)
                    intersects=true;
                else
                    return false;
            //}
            //if it gets this far then the latitude ranges intersect
            //re-initialize intersects for the longitude ranges
            intersects=false;
            //the longitude range
            //the min and max coords longitude
            var boxSpanIDL = false;
            //boolean coordSpanIDL = false;
            if(tl.x===180 || tl.x===-180 || br.x===180 || br.x===-180)
                boxSpanIDL=true;
            else if (Math.abs(br.x - tl.x) > 180)
                boxSpanIDL = true;
            
            //boolean intersects=false;
            if(coordSpanIDL && boxSpanIDL)
                intersects=true;
            else if(!coordSpanIDL && !boxSpanIDL)   //was && canClipPoints
            {
                if(coordsLeft<=tl.x && tl.x<=coordsRight)
                    intersects=true;
                if(coordsLeft<=br.x && br.x<=coordsRight)
                    intersects=true;
                if(tl.x<=coordsLeft && coordsLeft<=br.x)
                    intersects=true;
                if(tl.x<=coordsRight && coordsRight<=br.x)
                    intersects=true;
            }
            else if(!coordSpanIDL && boxSpanIDL)    //box spans IDL and coords do not
            {   
                if(tl.x<coordsRight && coordsRight<180)
                    intersects=true;
                if(-180<coordsLeft && coordsLeft<br.x)
                    intersects=true;
            }
            else if(coordSpanIDL && !boxSpanIDL)    //coords span IDL and box does not
            {   
                if(coordsLeft<br.x && br.x<180)
                    intersects=true;
                if(-180<tl.x && tl.x<coordsRight)
                    intersects=true;
            }
            return intersects;
        }
        catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException("clsRenderer", "intersectsClipArea", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside intersectsClipArea", exc));
            } else {
                throw exc;
            }
        }
        return result;
    },
    renderWithPolylines: function (mss, converter, clipArea) {
        try {
            var tg = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.createTGLightFromMilStdSymbol(mss, converter);
            var shapeInfos = new java.util.ArrayList();
            var modifierShapeInfos = new java.util.ArrayList();
            if (this.intersectsClipArea(tg, converter, clipArea))
                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.render_GE(tg, shapeInfos, modifierShapeInfos, converter, clipArea);
            mss.setSymbolShapes(shapeInfos);
            mss.setModifierShapes(modifierShapeInfos);
            mss.setWasClipped(tg.get_WasClipped());
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException("clsRenderer", "renderWithPolylines", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside renderWithPolylines", exc));
            } else {
                throw exc;
            }
        }
    },
    render_GE: function (tg, shapeInfos, modifierShapeInfos, converter, clipArea) {
        try {
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.setTGProperties(tg);
            var clipBounds = null;
            armyc2.c2sd.JavaLineArray.CELineArray.setClient("ge");
            var origFillPixels = tg.Pixels.clone();

            var clipPoints = null;
            if (clipArea !== null) {
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
            var zoomFactor = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.getZoomFactor(clipBounds, clipPoints, tg.Pixels);
            var useClipPoints = false;
            if (useClipPoints === true && clipBounds !== null) {
                var x = clipBounds.getMinX();
                var y = clipBounds.getMinY();
                var width = clipBounds.getWidth();
                var height = clipBounds.getHeight();
                clipPoints = new java.util.ArrayList();
                clipPoints.add(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(x, y));
                clipPoints.add(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(x + width, y));
                clipPoints.add(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(x + width, y + height));
                clipPoints.add(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(x, y + height));
                clipPoints.add(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(x, y));
                clipBounds = null;
            }
            if (tg.get_Client() === null || tg.get_Client().isEmpty())
                tg.set_client("ge");
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.RemoveDuplicatePoints(tg);
            var rev = tg.getSymbologyStandard();
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.initializeLinetypes(rev);
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.setRevC(tg);
            var linetype = tg.get_LineType();
            if (linetype < 0) {
                linetype = armyc2.c2sd.JavaTacticalRenderer.clsUtility.GetLinetypeFromString(tg.get_SymbolId());
                tg.set_LineType(linetype);
            }
            var isTextFlipped = new Boolean(false);
            var shapes = null;
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setSplineLinetype(tg);
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.setHostileLC(tg);
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.SegmentGeoPoints(tg, converter, zoomFactor);
            if (clipBounds !== null || clipPoints !== null)
            {
                if (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.canClipPoints(tg).valueOf() === true)
                {
                    if (clipBounds !== null)
                        armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.ClipPolygon(tg, clipBounds);
                    else if (clipPoints !== null)
                        armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad.ClipPolygon(tg, clipPoints);
                    armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.removeTrailingPoints(tg, clipArea);
                    tg.LatLongs = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.PixelsToLatLong(tg.Pixels, converter);
                }
            }
            if (tg.Pixels === null || tg.Pixels.isEmpty())
                return;
//            if (origPixels !== null)
//            {
//                tg.Pixels = origPixels;
//                tg.LatLongs = origLatLongs;
//            }
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.InterpolatePixels(tg);
            tg.modifiers = new java.util.ArrayList();
            var bi = new armyc2.c2sd.graphics2d.BufferedImage(8, 8, 2);
            var g2d = bi.createGraphics();
            //armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifiers(tg, g2d, clipArea);
            //armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifiersGeo(tg, g2d, clipArea, converter);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifiersGeo2(tg, g2d, clipArea, converter);
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.FilterPoints2(tg, converter);
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.FilterVerticalSegments(tg);
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.FilterAXADPoints(tg, converter);
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.ClearPixelsStyle(tg);
            var linesWithFillShapes = null;
            var savePixels = tg.Pixels;
            tg.Pixels = origFillPixels;
            if (clipBounds !== null)
                linesWithFillShapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.LinesWithFill(tg, clipBounds);
            else if (clipPoints !== null)
                linesWithFillShapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad.LinesWithFill(tg, clipPoints);
            else if (clipArea === null)
                linesWithFillShapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.LinesWithFill(tg, clipBounds);
            tg.Pixels = savePixels;

            var rangeFanFillShapes = null;
            var savefillStyle = tg.get_FillStyle();
            if (linetype === 243111000)
                tg.set_Fillstyle(0);
            if (clipBounds !== null)
            {
                shapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.GetLineArray(tg, converter, (isTextFlipped).valueOf(), clipBounds);
            }
            else if (clipPoints !== null)
                shapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.GetLineArray(tg, converter, (isTextFlipped).valueOf(), clipPoints);
            else if (clipArea === null)
                shapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.GetLineArray(tg, converter, (isTextFlipped).valueOf(), clipBounds);
            if (linetype === 243111000 || linetype === 243112000)
            {
                if (tg.get_FillColor() !== null && tg.get_FillColor().getAlpha() > 1)
                {
                    var tg1 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.GetCircularRangeFanFillTG(tg);
                    tg1.set_Fillstyle(savefillStyle);
                    tg1.set_SymbolId(tg.get_SymbolId());
                    if (clipBounds !== null)
                    {
                        rangeFanFillShapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.GetLineArray(tg1, converter, (isTextFlipped).valueOf(), clipBounds);
                    }
                    else if (clipPoints !== null)
                    {
                        rangeFanFillShapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.GetLineArray(tg1, converter, (isTextFlipped).valueOf(), clipPoints);
                    }
                    else if (clipArea === null)
                    {
                        rangeFanFillShapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.GetLineArray(tg1, converter, (isTextFlipped).valueOf(), clipBounds);
                    }

                    if (rangeFanFillShapes !== null)
                    {
                        shapes.addAll(0, rangeFanFillShapes);
                    }
                }
            }
            else
            {
                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.getAutoshapeFillShape(tg, shapes);
            }
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.LinesWithSeparateFill(tg.get_LineType(), shapes);
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.addAbatisFill(tg, shapes);
            if (shapes !== null && linesWithFillShapes !== null && linesWithFillShapes.size() > 0)
                shapes.addAll(0, linesWithFillShapes);
            var bPostClip = false;
            bPostClip = true;
            if (bPostClip === true)
            {
                if (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.canClipPoints(tg).valueOf() === false && clipBounds !== null)
                {
                    shapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.postClipShapes(tg, shapes, clipBounds);
                }
                else if (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.canClipPoints(tg).valueOf() === false && clipPoints !== null)
                {
                    shapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.postClipShapes(tg, shapes, clipPoints);
                }
            }
            //diagnostic: resolve post-clipped shapes
            this.resolvePostClippedShapes(tg,shapes);
            //end section
            if (modifierShapeInfos !== null) {
                var textSpecs = new java.util.ArrayList();
                armyc2.c2sd.JavaTacticalRenderer.Modifier2.DisplayModifiers2(tg, g2d, textSpecs, (isTextFlipped).valueOf(), converter);
                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.Shape2ToShapeInfo(modifierShapeInfos, textSpecs);
            }
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.buildHatchFills2(tg, shapes);
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.Shape2ToShapeInfo(shapeInfos, shapes);
            if (clipBounds !== null)
            {
                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.SetShapeInfosPolylines(tg, shapeInfos, clipBounds);
            }
            else if (clipPoints !== null)
                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.SetShapeInfosPolylines(tg, shapeInfos, clipPoints);
            else if (clipArea === null)
                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.SetShapeInfosPolylines(tg, shapeInfos, clipBounds);

        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer._className, "render_GE", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside render_GE", exc));
            } else {
                throw exc;
            }
        }
        return;
    },
    resolvePostClippedShapes:function(tg,shapes)
    {
        //resolve the PBS and BBS shape properties after the post clip, regardless whether they were clipped
        switch(tg.get_LineType())
        {
            case 15000003:
            case 15000002:
            case 15000001:
            case 15000000:
            case 14000001:
            case 14000002:
            case 13000001:
            case 13000002:
                break;
            default:
                return;
        }
        var fillColor=tg.get_FillColor();
        shapes.get(0).setFillColor(fillColor);
        shapes.get(1).setFillColor(null);
        var fillStyle=tg.get_FillStyle();
        shapes.get(0).set_Fillstyle(0);
        shapes.get(1).set_Fillstyle(fillStyle);
        return;
    },
    setHostileLC: function (tg) {
        try {
            var usas1314 = new Boolean(true);
            var pts = new java.util.ArrayList();
            var j = 0;
            switch (tg.get_LineType()) {
                case 22123000:
                    if (usas1314.valueOf() === false)
                        break;
                    if (tg.get_Affiliation() !== null && !tg.get_Affiliation().equals("H"))
                        break;
                    pts = tg.Pixels.clone();
                    for (j = 0; j < tg.Pixels.size (); j++)
                        tg.Pixels.set(j, pts.get(pts.size() - j - 1));

                    pts = tg.LatLongs.clone();
                    for (j = 0; j < tg.LatLongs.size (); j++)
                        tg.LatLongs.set(j, pts.get(pts.size() - j - 1));

                    break;
                case 23112000:
                    pts = tg.Pixels.clone();
                    for (j = 0; j < tg.Pixels.size (); j++)
                        tg.Pixels.set(j, pts.get(pts.size() - j - 1));

                    pts = tg.LatLongs.clone();
                    for (j = 0; j < tg.LatLongs.size (); j++)
                        tg.LatLongs.set(j, pts.get(pts.size() - j - 1));

                    break;
                default:
                    return;
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer._className, "setHostileLC", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside setHostileLC", exc));
            } else {
                throw exc;
            }
        }
    },
    getScale: function (tg, converter, clipBounds) {
        var scale = 0;
        try {
            if (clipBounds === null || converter === null)
                return 0;
            var clipRect = null;
            var clipArray = null;
            if (clipBounds.getClass().isAssignableFrom(armyc2.c2sd.graphics2d.Rectangle2D)) {
                clipRect = clipBounds;
            } else if (clipBounds.getClass().isAssignableFrom(armyc2.c2sd.graphics2d.Rectangle2D)) {
                clipRect = clipBounds;
            } else if (clipBounds.getClass().isAssignableFrom(armyc2.c2sd.graphics2d.Rectangle)) {
                clipRect = clipBounds;
            } else if (clipBounds.getClass().isAssignableFrom(java.util.ArrayList)) {
                clipArray = clipBounds;
                clipRect = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.getMBR(clipArray);
            }
            var left = clipRect.getMinX();
            var right = clipRect.getMaxX();
            var distanceInPixels = Math.abs(right - left);
            var top = clipRect.getMinY();
            var ul = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(left, top);
            var ur = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(right, top);
            var ulGeo = converter.PixelsToGeo(ul);
            var urGeo = converter.PixelsToGeo(ur);
            var pt2ulGeo = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ulGeo.getX(), ulGeo.getY());
            var pt2urGeo = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(urGeo.getX(), urGeo.getY());
            var distanceInMeters = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_distance(pt2ulGeo, pt2urGeo, null, null);
            scale = (distanceInPixels / distanceInMeters) * (0.010416666666666666) * (0.025400050800101603);
            scale = 1.0 / scale;
            var lineType = tg.get_LineType();
            if (lineType === 23200000 && scale >= 250000 && tg.get_SymbolId().length <= 15)
                tg.set_LineType(23200001);
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer._className, "getScale", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside getScale", exc));
            } else {
                throw exc;
            }
        }
        return scale;
    },
    setClip: function (clipBounds, clipRect, clipArray) {
        try {
            if (clipBounds === null) {
                return false;
            } else if (clipBounds.getClass().isAssignableFrom(armyc2.c2sd.graphics2d.Rectangle2D)) {
                clipRect.setRect(clipBounds);
            } else if (clipBounds.getClass().isAssignableFrom(armyc2.c2sd.graphics2d.Rectangle2D)) {
                clipRect.setRect(clipBounds);
            } else if (clipBounds.getClass().isAssignableFrom(armyc2.c2sd.graphics2d.Rectangle)) {
                clipRect.setRect(clipBounds);
            } else if (clipBounds.getClass().isAssignableFrom(java.util.ArrayList)) {
                clipArray.addAll(clipBounds);
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer._className, "setClip", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside setClip", exc));
            } else {
                throw exc;
            }
        }
        return true;
    },
    render:function (mss, converter, clipBounds) {
        try {
            var shapeInfos = new java.util.ArrayList();
            var modifierShapeInfos = new java.util.ArrayList();
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.render(mss, converter, shapeInfos, modifierShapeInfos, clipBounds);
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer._className, "render", new armyc2.c2sd.renderer.utilities.RendererException("render", exc));
            } else {
                throw exc;
            }
        }
    },
            render: function (mss, converter, shapeInfos, modifierShapeInfos, clipBounds) {
                try {
                    //var shiftLines = armyc2.c2sd.JavaLineArray.Channels.getShiftLines();
                    var clipRect = new armyc2.c2sd.graphics2d.Rectangle2D();
                    var clipArray = new java.util.ArrayList();
                    armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.setClip(clipBounds, clipRect, clipArray);
                    var rev = mss.getSymbologyStandard();
                    armyc2.c2sd.JavaTacticalRenderer.clsUtility.initializeLinetypes(rev);
                    var tg = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.createTGLightFromMilStdSymbol(mss, converter);
                    armyc2.c2sd.JavaLineArray.CELineArray.setClient("generic");
//                    if (shiftLines) {
//                        var affiliation = tg.get_Affiliation();
//                        armyc2.c2sd.JavaLineArray.Channels.setAffiliation(affiliation);
//                    }
                    //armyc2.c2sd.JavaLineArray.CELineArray.setMinLength(2.5);
                    armyc2.c2sd.JavaTacticalRenderer.clsUtility.setRevC(tg);
                    var scale = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.getScale(tg, converter, clipBounds);
                    var linetype = tg.get_LineType();
                    armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.RemoveDuplicatePoints(tg);
                    armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.setHostileLC(tg);
                    var bi = new armyc2.c2sd.graphics2d.BufferedImage(8, 8, 2);
                    var g2d = bi.createGraphics();
                    armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.SegmentGeoPoints(tg, converter, 1);
                    armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.FilterAXADPoints(tg, converter);
                    armyc2.c2sd.JavaTacticalRenderer.clsUtility.FilterVerticalSegments(tg);
                    var isChange1Area = armyc2.c2sd.JavaTacticalRenderer.clsUtility.IsChange1Area(linetype, null);
                    var isTextFlipped = false;
                    var farLeftPixels = new java.util.ArrayList();
                    var farRightPixels = new java.util.ArrayList();
                    if (isChange1Area === false)
                        armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.GetFarPixels(tg, converter, farLeftPixels, farRightPixels);
                    var shapesLeft = new java.util.ArrayList();
                    var shapesRight = new java.util.ArrayList();
                    var shapes = null;
                    var textSpecsLeft = null;
                    var textSpecsRight = null;
                    textSpecsLeft = new java.util.ArrayList();
                    textSpecsRight = new java.util.ArrayList();
                    if (farLeftPixels.size() > 0) {
                        tg.Pixels = farLeftPixels;
                        shapesLeft = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.GetLineArray(tg, converter, isTextFlipped, clipBounds);
                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.DisplayModifiers2(tg, g2d, textSpecsLeft, isTextFlipped, null);
                    }
                    if (farRightPixels.size() > 0) {
                        tg.Pixels = farRightPixels;
                        shapesRight = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.GetLineArray(tg, converter, isTextFlipped, clipBounds);
                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.DisplayModifiers2(tg, g2d, textSpecsRight, isTextFlipped, null);
                    }
                    var textSpecs = new java.util.ArrayList();
                    if (shapesLeft.isEmpty() || shapesRight.isEmpty()) {
                        var linesWithFillShapes = null;
                        if (clipArray !== null && !clipArray.isEmpty())
                            linesWithFillShapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad.LinesWithFill(tg, clipArray);
                        else if (clipRect !== null && clipRect.getWidth() !== 0)
                            linesWithFillShapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.LinesWithFill(tg, clipRect);
                        else
                            linesWithFillShapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.LinesWithFill(tg, null);
                        if (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.canClipPoints(tg).valueOf() === true && clipBounds !== null) {
                            if (clipArray !== null && !clipArray.isEmpty())
                                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad.ClipPolygon(tg, clipArray);
                            else if (clipRect !== null && clipRect.getWidth() !== 0)
                                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.ClipPolygon(tg, clipRect);
                            tg.LatLongs = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.PixelsToLatLong(tg.Pixels, converter);
                        }
                        armyc2.c2sd.JavaTacticalRenderer.clsUtility.InterpolatePixels(tg);
                        tg.modifiers = new java.util.ArrayList();
                        //armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifiers(tg, g2d, clipBounds);
                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifiersGeo(tg, g2d, clipBounds, converter);
                        armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.FilterPoints2(tg, converter);
                        armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.ClearPixelsStyle(tg);
                        var rangeFanFillShapes = null;
                        var savefillStyle = tg.get_FillStyle();
                        if (linetype === 243111000)
                            tg.set_Fillstyle(0);
                        shapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.GetLineArray(tg, converter, isTextFlipped, clipBounds);
                        switch (linetype) {
                            case 243111000:
                            case 243112000:
                                var tg1 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.GetCircularRangeFanFillTG(tg);
                                tg1.set_Fillstyle(savefillStyle);
                                rangeFanFillShapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.GetLineArray(tg1, converter, isTextFlipped, clipBounds);
                                if (rangeFanFillShapes !== null) {
                                    shapes.addAll(0, rangeFanFillShapes);
                                }
                                break;
                            default:
                                break;
                        }
                        armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.LinesWithSeparateFill(tg.get_LineType(), shapes);
                        armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.addAbatisFill(tg, shapes);
                        if (shapes !== null && linesWithFillShapes !== null && linesWithFillShapes.size() > 0)
                            shapes.addAll(0, linesWithFillShapes);
                        if (shapes !== null && shapes.size() > 0) {
                            armyc2.c2sd.JavaTacticalRenderer.Modifier2.DisplayModifiers2(tg, g2d, textSpecs, isTextFlipped, null);
                            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.Shape2ToShapeInfo(modifierShapeInfos, textSpecs);
                            mss.setModifierShapes(modifierShapeInfos);
                        }
                    } else {
                        shapes = shapesLeft;
                        shapes.addAll(shapesRight);
                        if (textSpecs !== null) {
                            textSpecs.addAll(textSpecsLeft);
                            textSpecs.addAll(textSpecsRight);
                        }
                    }
                    if (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.canClipPoints(tg).valueOf() === false && clipBounds !== null) {
                        shapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.postClipShapes(tg, shapes, clipBounds);
                    }
                    armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.Shape2ToShapeInfo(shapeInfos, shapes);
                    mss.setSymbolShapes(shapeInfos);
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer._className, "render", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside render", exc));
                    } else {
                        throw exc;
                    }
                }
                return;
            },
            render: function (tg, converter, shapeInfos, modifierShapeInfos, clipBounds) {
                try {
                    armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.setHostileLC(tg);
                    var isChange1Area = armyc2.c2sd.JavaTacticalRenderer.clsUtility.IsChange1Area(tg.get_LineType(), null);
                    var isTextFlipped = false;
                    var farLeftPixels = new java.util.ArrayList();
                    var farRightPixels = new java.util.ArrayList();
                    if (isChange1Area === false)
                        armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.GetFarPixels(tg, converter, farLeftPixels, farRightPixels);
                    var bi = new armyc2.c2sd.graphics2d.BufferedImage(8, 8, 2);
                    var g2d = bi.createGraphics();
                    var shapesLeft = new java.util.ArrayList();
                    var shapesRight = new java.util.ArrayList();
                    var shapes = null;
                    var textSpecsLeft = null;
                    var textSpecsRight = null;
                    textSpecsLeft = new java.util.ArrayList();
                    textSpecsRight = new java.util.ArrayList();
                    if (farLeftPixels.size() > 0) {
                        tg.Pixels = farLeftPixels;
                        shapesLeft = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.GetLineArray(tg, converter, isTextFlipped, clipBounds);
                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.DisplayModifiers2(tg, g2d, textSpecsLeft, isTextFlipped, null);
                    }
                    if (farRightPixels.size() > 0) {
                        tg.Pixels = farRightPixels;
                        shapesRight = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.GetLineArray(tg, converter, isTextFlipped, clipBounds);
                        armyc2.c2sd.JavaTacticalRenderer.Modifier2.DisplayModifiers2(tg, g2d, textSpecsRight, isTextFlipped, null);
                    }
                    var textSpecs = new java.util.ArrayList();
                    if (shapesLeft.isEmpty() || shapesRight.isEmpty()) {
                        var linesWithFillShapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.LinesWithFill(tg, clipBounds);
                        if (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.canClipPoints(tg).valueOf() === true && clipBounds !== null)
                            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.ClipPolygon(tg, clipBounds);
                        shapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.GetLineArray(tg, converter, isTextFlipped, clipBounds);
                        armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.LinesWithSeparateFill(tg.get_LineType(), shapes);
                        armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.addAbatisFill(tg, shapes);
                        if (shapes !== null && linesWithFillShapes !== null && linesWithFillShapes.size() > 0)
                            shapes.addAll(0, linesWithFillShapes);
                        if (shapes !== null && shapes.size() > 0) {
                            armyc2.c2sd.JavaTacticalRenderer.Modifier2.DisplayModifiers2(tg, g2d, textSpecs, isTextFlipped, null);
                            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.Shape2ToShapeInfo(modifierShapeInfos, textSpecs);
                        }
                    } else {
                        shapes = shapesLeft;
                        shapes.addAll(shapesRight);
                        if (textSpecs !== null) {
                            textSpecs.addAll(textSpecsLeft);
                            textSpecs.addAll(textSpecsRight);
                        }
                    }
                    if (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.canClipPoints(tg).valueOf() === false && clipBounds !== null)
                        shapes = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.postClipShapes(tg, shapes, clipBounds);
                    armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.Shape2ToShapeInfo(shapeInfos, shapes);
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer._className, "render", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside render", exc));
                    } else {
                        throw exc;
                    }
                }
            },
            getCMLineType: function (SymbolSet, entityCode)
            {
                try
                {
                    var symbolSet = Integer.parseInt(SymbolSet);
                    if (symbolSet.valueOf() !== 25) {
                        return -1;
                    }
                    var code = Integer.parseInt(entityCode);
                    var nCode = code.valueOf();
                    var TacticalLines = new armyc2.c2sd.JavaLineArray.TacticalLines();
                    switch (nCode) {
                        case 200101:
                        case 200201:
                            return TacticalLines.LAUNCH_AREA;
                        case 120100:
                            return TacticalLines.AO;
                        case 120200:
                            return TacticalLines.NAI;
                        case 120300:
                            return TacticalLines.TAI;
                        case 120400:
                            return TacticalLines.AIRFIELD;
                        case 151401:
                            return TacticalLines.AIRAOA;
                        case 151402:
                            return TacticalLines.AAAAA;
                        case 151403:
                            return TacticalLines.MAIN;
                        case 151404:
                        case 151405:
                        case 151407:
                        case 151408:
                            return TacticalLines.SPT;
                        case 151406:
                            return TacticalLines.AAFNT;
                        case 110101:                        //new label
                        case 110102:                        //new label
                        case 110103:                        //new label
                            return TacticalLines.BOUNDARY;
                        case 110200:
                            return TacticalLines.LL;
                        case 120101:
                            return TacticalLines.AO;
                        case 120102:
                            return TacticalLines.NAI;
                        case 120103:
                            return TacticalLines.TAI;
                        case 120104:
                            return TacticalLines.AIRFIELD;
                        case 140100:
                        case 140101:
                        case 140102:
                        case 140103:
                        case 140104:
                            return TacticalLines.FLOT;
                        case 140200:
                            return TacticalLines.LC;
                        case 140300:
                            return TacticalLines.PL;
                        case 140400:                //new FEBA as a line, new label
                        case 140401:
                            return TacticalLines.PL;
                        case 140500:
                            return TacticalLines.PDF;
                        case 140601:
                            return TacticalLines.DIRATKAIR;
                        case 140602:
                            return TacticalLines.DIRATKGND;
                        case 140603:
                        case 140604:
                        case 140606:
                        case 140607:
                            return TacticalLines.DIRATKSPT;
                        case 140605:
                            return TacticalLines.DIRATKFNT;
                        case 140700:
                            return TacticalLines.FCL;
                        case 140800:
                            return TacticalLines.IL;
                        case 140900:
                            return TacticalLines.LOA;
                        case 141000:
                            return TacticalLines.LOD;
                        case 141100:
                            return TacticalLines.LDLC;
                        case 141200:
                            return TacticalLines.PLD;
                        case 150101:
                        case 150102:
                        case 150103:
                        case 150104:
                        case 200401:
                            return TacticalLines.PEN;
                        case 150200:
                        case 150300:
                        case 150301:
                        case 150302:
                        case 150400:
                            return TacticalLines.ASSY;
                        case 150501:
                        case 150502:
                        case 150503:
                            return TacticalLines.GENERAL;
                        case 150600:    //dz no eny
                            return TacticalLines.DZ;
                        case 150700:    //ez no eny
                            return TacticalLines.EZ;
                        case 150800:    //lz no eny
                            return TacticalLines.LZ;
                        case 150900:    //pz no eny
                            return TacticalLines.PZ;
                        case 151000:
                            return TacticalLines.FORT;
                        case 151100:
                            return TacticalLines.LAA;
                        case 151200:
                        case 151201:
                            return TacticalLines.BATTLE;
                        case 151202:
                            return TacticalLines.PNO;
                        case 151204:
                            return TacticalLines.CONTAIN;
                        case 151205:
                            return TacticalLines.RETAIN;
                        case 151300:
                            return TacticalLines.EA;
                        case 151203:
                            return TacticalLines.STRONG;
                        case 151500:
                            return TacticalLines.ASSAULT;
                        case 151600:
                            return TacticalLines.ATKPOS;
                        case 151700:
                            return TacticalLines.OBJ;
                        case 151801:
                        case 151802:
                            return TacticalLines.ENCIRCLE;
                        case 151900:
                            return TacticalLines.PEN;
                        case 152000:
                            return TacticalLines.ATKBYFIRE;
                        case 152100:
                            return TacticalLines.SPTBYFIRE;
                        case 152200:
                            return TacticalLines.SARA;
                        case 141300:
                            return TacticalLines.AIRHEAD;
                        case 141400:
                            return TacticalLines.BRDGHD;
                        case 141500:
                            return TacticalLines.HOLD;
                        case 141600:
                            return TacticalLines.RELEASE;
                        case 141700:
                            return TacticalLines.AMBUSH;
                        case 170100:
                        case 170101:
                            return TacticalLines.AC;
                        case 170200:
                            return TacticalLines.LLTR;
                        case 170300:
                            return TacticalLines.MRR;
                        case 170400:                    //SL new label
                            return TacticalLines.MRR;
                        case 170500:
                            return TacticalLines.SAAFR;
                        case 170600:                    //TC new label
                            return TacticalLines.MRR;
                        case 170700:
                            return TacticalLines.UAV;
                        case 170800:
                            return TacticalLines.PEN;   //BDZ new label
                        case 170900:
                            return TacticalLines.HIDACZ;
                        case 171000:
                            return TacticalLines.ROZ;
                        case 171100:                    // new label type AAROZ
                        case 171200:                    // new label UAROZ
                        case 171300:                    // new label WEZ
                        case 171400:                    // new label FEZ
                        case 171500:                    // new label JEZ
                            return TacticalLines.ROZ;
                        case 171600:
                            return TacticalLines.MEZ;
                        case 171700:
                            return TacticalLines.LOMEZ;
                        case 171800:
                            return TacticalLines.HIMEZ;
                        case 171900:
                            return TacticalLines.FAADZ;
                        case 172000:
                            return TacticalLines.WFZ;
                        case 190100:    //iff off new label
                        case 190200:    //iff on new label
                            return TacticalLines.FSCL;
                        case 200202:    //defended area rect
                        case 200402:
                        case 240804:
                            return TacticalLines.FSA_RECTANGULAR;    //DA new label
                        case 200300:    //no atk
                            return TacticalLines.FSA_CIRCULAR;  //no atk new label
                        case 220100:
                            return TacticalLines.BEARING;
                        case 220101:
                            return TacticalLines.ELECTRO;
                        case 220102:    //EW                //new label
                            return TacticalLines.BEARING;
                        case 220103:
                        case 220104:
                            return TacticalLines.ACOUSTIC;
                        case 220105:
                            return TacticalLines.TORPEDO;
                        case 220106:
                            return TacticalLines.OPTICAL;
                        case 218400:
                            return TacticalLines.NAVIGATION;
                        case 220107:    //Jammer                //new label
                        case 220108:    //RDF                   //new label
                            return TacticalLines.BEARING;
                        case 230100:
                        case 230200:
                            return TacticalLines.DECEIVE;
                        case 240101:
                            return TacticalLines.ACA;
                        case 240102:
                            return TacticalLines.ACA_RECTANGULAR;
                        case 240103:
                            return TacticalLines.ACA_CIRCULAR;

                        case 240201:
                            return TacticalLines.FFA;
                        case 240202:
                            return TacticalLines.FFA_RECTANGULAR;
                        case 240203:
                            return TacticalLines.FFA_CIRCULAR;

                        case 240301:
                            return TacticalLines.NFA;
                        case 240302:
                            return TacticalLines.NFA_RECTANGULAR;
                        case 240303:
                            return TacticalLines.NFA_CIRCULAR;

                        case 240401:
                            return TacticalLines.RFA;
                        case 240402:
                            return TacticalLines.RFA_RECTANGULAR;
                        case 240403:
                            return TacticalLines.RFA_CIRCULAR;

                        case 240501:
                            return TacticalLines.PAA_RECTANGULAR;
                        case 240502:
                            return TacticalLines.PAA_CIRCULAR;
                        case 260100:
                            return TacticalLines.FSCL;
                        case 260200:
                            return TacticalLines.CFL;
                        case 260300:
                            return TacticalLines.NFL;
                        case 260400:    //BCL               new label
                            return TacticalLines.FSCL;
                        case 260500:
                            return TacticalLines.RFL;
                        case 260600:
                            return TacticalLines.MFP;
                        case 240701:
                            return TacticalLines.LINTGT;
                        case 240702:
                            return TacticalLines.LINTGTS;
                        case 240703:
                            return TacticalLines.FPF;
                        case 240801:
                            return TacticalLines.AT;
                        case 240802:
                            return TacticalLines.RECTANGULAR;
                        case 240803:
                            return TacticalLines.CIRCULAR;
                        case 240805:
                            return TacticalLines.SERIES;
                        case 240806:
                        case 240807:
                            return TacticalLines.SMOKE;
                        case 240808:
                            return TacticalLines.BOMB;
                        case 241001:
                            return TacticalLines.FSA;
                        case 241002:
                            return TacticalLines.FSA_RECTANGULAR;
                        case 241003:
                            return TacticalLines.FSA_CIRCULAR;
                        case 241101:
                            return TacticalLines.ATI;
                        case 241102:
                            return TacticalLines.ATI_RECTANGULAR;
                        case 241103:
                            return TacticalLines.ATI_CIRCULAR;
                        case 241201:
                            return TacticalLines.CFFZ;
                        case 241202:
                            return TacticalLines.CFFZ_RECTANGULAR;
                        case 241203:
                            return TacticalLines.CFFZ_CIRCULAR;
                        case 241301:
                            return TacticalLines.CENSOR;
                        case 241302:
                            return TacticalLines.CENSOR_RECTANGULAR;
                        case 241303:
                            return TacticalLines.CENSOR_CIRCULAR;
                        case 241401:
                            return TacticalLines.CFZ;
                        case 241402:
                            return TacticalLines.CFZ_RECTANGULAR;
                        case 241403:
                            return TacticalLines.CFZ_CIRCULAR;
                        case 241501:
                            return TacticalLines.DA;
                        case 241502:
                            return TacticalLines.DA_RECTANGULAR;
                        case 241503:
                            return TacticalLines.DA_CIRCULAR;
                        case 241601:
                            return TacticalLines.SENSOR;
                        case 241602:
                            return TacticalLines.SENSOR_RECTANGULAR;
                        case 241603:
                            return TacticalLines.SENSOR_CIRCULAR;
                        case 241701:
                            return TacticalLines.TBA;
                        case 241702:
                            return TacticalLines.TBA_RECTANGULAR;
                        case 241703:
                            return TacticalLines.TBA_CIRCULAR;
                        case 241801:
                            return TacticalLines.TVAR;
                        case 241802:
                            return TacticalLines.TVAR_RECTANGULAR;
                        case 241803:
                            return TacticalLines.TVAR_CIRCULAR;
                        case 241901:
                            return TacticalLines.ZOR;
                        case 241902:
                            return TacticalLines.ZOR_RECTANGULAR;
                        case 241903:
                            return TacticalLines.ZOR_CIRCULAR;
                        case 242000:
                            return TacticalLines.TGMF;
                        case 242100:
                            return TacticalLines.RANGE_FAN;
                        case 242200:
                            return TacticalLines.RANGE_FAN_SECTOR;
                        case 242301:
                            return TacticalLines.KILLBOXBLUE;
                        case 242302:
                            return TacticalLines.KILLBOXBLUE_RECTANGULAR;
                        case 242303:
                            return TacticalLines.KILLBOXBLUE_CIRCULAR;
                        case 242304:
                            return TacticalLines.KILLBOXPURPLE;
                        case 242305:
                            return TacticalLines.KILLBOXPURPLE_RECTANGULAR;
                        case 242306:
                            return TacticalLines.KILLBOXPURPLE_CIRCULAR;
                        case 270100:
                            return TacticalLines.BELT;
                        case 270200:
                            return TacticalLines.ZONE;
                        case 270300:
                            return TacticalLines.OBSFAREA;
                        case 270400:
                            return TacticalLines.OBSAREA;
                        case 270501:
                            return TacticalLines.MNFLDBLK;
                        case 270502:
                            return TacticalLines.MNFLDDIS;
                        case 270503:
                            return TacticalLines.MNFLDFIX;
                        case 270504:
                            return TacticalLines.TURN;
                        case 270601:
                            return TacticalLines.EASY;
                        case 270602:
                            return TacticalLines.BYDIF;
                        case 270603:
                            return TacticalLines.BYIMP;
                        case 271100:
                            return TacticalLines.GAP;
                        case 271201:
                            return TacticalLines.PLANNED;
                        case 271202:
                            return TacticalLines.ESR1;
                        case 271203:
                            return TacticalLines.ESR2;
                        case 271204:
                            return TacticalLines.ROADBLK;
                        case 280100:
                            return TacticalLines.ABATIS;
                        case 290100:
                            return TacticalLines.LINE;
                        case 290201:
                            return TacticalLines.ATDITCH;
                        case 290202:
                            return TacticalLines.ATDITCHC;
                        case 290203:
                            return TacticalLines.ATDITCHM;
                        case 290204:
                            return TacticalLines.ATWALL;
                        case 290301:
                            return TacticalLines.UNSP;
                        case 290302:
                            return TacticalLines.SFENCE;
                        case 290303:
                            return TacticalLines.DFENCE;
                        case 290304:
                            return TacticalLines.DOUBLEA;
                        case 290305:
                            return TacticalLines.LWFENCE;
                        case 290306:
                            return TacticalLines.HWFENCE;
                        case 290307:
                            return TacticalLines.SINGLEC;
                        case 290308:
                            return TacticalLines.DOUBLEC;
                        case 290309:
                            return TacticalLines.TRIPLE;
                        case 290600:
                            return TacticalLines.MFLANE;
                        case 270706:
                            return TacticalLines.DUMMY;
                        case 270707:
                            return TacticalLines.DEPICT;
                        case 270800:
                            return TacticalLines.MINED;
                        case 270900:
                            return TacticalLines.DMA;
                        case 270901:
                            return TacticalLines.DMAF;
                        case 271000:
                            return TacticalLines.UXO;
                        case 290400:
                            return TacticalLines.CLUSTER;
                        case 290500:
                            return TacticalLines.TRIP;
                        case 282003:
                            return TacticalLines.OVERHEAD_WIRE;
                        case 271300:
                            return TacticalLines.ASLTXING;
                        case 271400:
                            return TacticalLines.BRIDGE;
                        case 271500:
                            return TacticalLines.FORDSITE;
                        case 271600:
                            return TacticalLines.FORDIF;
                        case 290700:
                            return TacticalLines.FERRY;
                        case 290800:
                            return TacticalLines.RAFT;
                        case 290900:
                            return TacticalLines.FORTL;
                        case 291000:
                            return TacticalLines.FOXHOLE;
                        case 272100:
                            return TacticalLines.MSDZ;
                        case 272200:
                            return TacticalLines.DRCL;

                        case 310100:
                            return TacticalLines.DHA;
                        case 310200:
                            return TacticalLines.EPW;
                        case 310300:
                            return TacticalLines.FARP;
                        case 310400:
                            return TacticalLines.RHA;
                        case 310500:
                            return TacticalLines.RSA;
                        case 310600:
                            return TacticalLines.BSA;
                        case 310700:
                            return TacticalLines.DSA;
                        case 330100:
                            return TacticalLines.CONVOY;
                        case 330200:
                            return TacticalLines.HCONVOY;
                        case 330300:
                            return TacticalLines.MSR;
                        case 330301:
                            return TacticalLines.ONEWAY;
                        case 330302:
                            return TacticalLines.TWOWAY;
                        case 330303:
                            return TacticalLines.ALT;

                        case 330400:
                            return TacticalLines.ASR;
                        case 330401:                    //asr one way   new label
                            return TacticalLines.ONEWAY;
                        case 330402:                    //asr two way   new label
                            return TacticalLines.TWOWAY;
                        case 330403:                    //asr alt       new label
                            return TacticalLines.ALT;

                        case 340100:
                            return TacticalLines.BLOCK;
                        case 340200:
                            return TacticalLines.BREACH;
                        case 340300:
                            return TacticalLines.BYPASS;
                        case 340400:
                            return TacticalLines.CANALIZE;
                        case 340500:
                            return TacticalLines.CLEAR;
                        case 340600:
                            return TacticalLines.CATK;
                        case 340700:
                            return TacticalLines.CATKBYFIRE;

                        case 340800:
                            return TacticalLines.DELAY;
                        case 341000:
                            return TacticalLines.DISRUPT;
                        case 341100:
                            return TacticalLines.FIX;
                        case 341200:
                            return TacticalLines.FOLLA;
                        case 341300:
                            return TacticalLines.FOLSP;
                        case 341500:
                            return TacticalLines.ISOLATE;
                        case 341700:
                            return TacticalLines.OCCUPY;
                        case 341800:
                            return TacticalLines.PENETRATE;
                        case 341900:
                            return TacticalLines.RIP;
                        case 342000:
                            return TacticalLines.RETIRE;
                        case 342100:
                            return TacticalLines.SECURE;
                        case 342201:
                            return TacticalLines.COVER;
                        case 342202:
                            return TacticalLines.GUARD;
                        case 342203:
                            return TacticalLines.SCREEN;
                        case 342300:
                            return TacticalLines.SEIZE;
                        case 342400:
                            return TacticalLines.WITHDRAW;
                        case 342500:
                            return TacticalLines.WDRAWUP;
                        case 300100:    //ICL               new label
                            return TacticalLines.FSCL;
                        default:
                            break;
                    }
                    return -1;
                }
                catch (exc)
                {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer._className, "render", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside getCMLineType", exc));
                    } else {
                        throw exc;
                    }
                }
            },
    setTGProperties: function (tg)
    {
        try
        {
            if (tg.get_SymbolId().length < 20) {
                return;
            }
            var setA = tg.get_SymbolId().substring(0, 10);
            var setB = tg.get_SymbolId().substring(10);
            var symbolSet = setA.substring(4, 6);
            var nSymbolSet = Integer.parseInt(symbolSet);
            if (nSymbolSet.valueOf() !== 25) {
                return;
            }
            var entity = setB.substring(0, 6);
            var code = Integer.parseInt(entity);
            var nCode = code.valueOf();
            switch (nCode)
            {
                case 140101:    //friendly present flot
                    break;
                case 140102:
                    tg.set_LineStyle(1);
                    break;
                case 140103:
                    break;
                case 140104:
                case 140607:
                case 150102:
                case 150104:
                    tg.set_LineStyle(1);
                    break;
                case 140604:
                case 140401:
                case 220104:
                case 240807:
                case 151405:
                case 150400:
                    tg.set_LineStyle(1);
                    break;
                case 151802:
                case 140606:
                case 150501:
                case 150502:
                case 150503:
                    break;
                case 151407:
                    tg.set_Name("");
                    break;
                case 151408:
                    tg.set_Name("");
                    tg.set_LineStyle(1);
                    break;
                case 200101:
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(255, 155, 0, 191));
                    break;
                case 200201:
                case 200202:
                    tg.set_FillColor(new armyc2.c2sd.renderer.utilities.Color(85, 119, 136, 191));
                    break;
                case 270100:
                    tg.set_T1("");
                    break;
                case 290301:
                case 290305:
                case 290306:
                case 290307:
                case 290308:
                case 290309:
                    armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.reversePointsRevD(tg);
                    break;
                default:
                    break;
            }
        }
        catch (exc)
        {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer._className, "render", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside setTGProperties", exc));
            } else {
                throw exc;
            }
        }
    },
    reversePointsRevD: function (tg) {
        try {
            var j = 0;
            var pts = null;
            if (tg.get_SymbolId().length < 20) {
                return;
            }
            var setB = tg.get_SymbolId().substring(10);
            var entityCode = setB.substring(0, 6);
            var code = Integer.parseInt(entityCode);
            var nCode = code.valueOf();
            switch (nCode) {
                case 290301:
                case 290305:
                case 290306:
                case 290307:
                case 290308:
                case 290309:
                    if (tg.Pixels !== null) {
                        pts = tg.Pixels.clone();
                        for (j = 0; j < tg.Pixels.size(); j++) {
                            tg.Pixels.set(j, pts.get(pts.size() - j - 1));
                        }
                    }
                    if (tg.LatLongs !== null) {
                        pts = tg.LatLongs.clone();
                        for (j = 0; j < tg.LatLongs.size(); j++) {
                            tg.LatLongs.set(j, pts.get(pts.size() - j - 1));
                        }
                    }
                    break;
                default:
                    break;
            }

        }
        catch (exc)
        {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer._className, "render", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside reversePointsRevD", exc));
            } else {
                throw exc;
            }
        }
    },
    getRevDLinetype: function (tg) {
        var linetype = -1;
        try {
            var symbolId = tg.get_SymbolId();
            if (symbolId.length > 15) //rev D
            {
                var setA = symbolId.substring(0, 10);
                var setB = symbolId.substring(10);
                var code = setB.substring(0, 6);
                var symbolSet = setA.substring(4, 6);
                var nSymbol = Integer.parseInt(symbolSet);
                if (nSymbol.valueOf() === 25) {
                    linetype = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer.getCMLineType(symbolSet, code);
                } else if (nSymbol.valueOf() === 45 || nSymbol.valueOf() === 46) {
                    linetype = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.getWeatherLinetype(symbolSet, code);
                }

            } else //not rev D            
            {
                linetype = armyc2.c2sd.JavaTacticalRenderer.clsUtility.GetLinetypeFromString(symbolId);
            }

            tg.set_LineType(linetype);
        }
        catch (exc)
        {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer._className, "render", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside getRevDLinetype", exc));
            } else {
                throw exc;
            }
        }
        return linetype;
    },
    _className: "clsRenderer",
    feetPerMeter: 3.28084
};