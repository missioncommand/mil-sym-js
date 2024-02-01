var armyc2=armyc2 || {};
armyc2.c2sd=armyc2.c2sd || {};
armyc2.c2sd.JavaRendererServer=armyc2.c2sd.JavaRendererServer || {};
armyc2.c2sd.JavaRendererServer.RenderMultipoints=armyc2.c2sd.JavaRendererServer.RenderMultipoints || {};
armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility={
    POINT2ToPoint:function (pt2) {
        var pt =  new armyc2.c2sd.graphics2d.Point ();
        //pt.x = Math.floor (pt2.x);
        //pt.y = Math.floor (pt2.y);
        pt.x = pt2.x;
        pt.y = pt2.y;
        return pt;
    }, 
    PointToPOINT2:function (pt) {
        var pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pt.x, pt.y);
        return pt2;
    }, 
    POINT2ToPoint2D:function (pt2) {
        var pt2d = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D (pt2.x, pt2.y);
        return pt2d;
    },  
    Points2DToPOINT2:function (pts2d) {
        var pts =  new java.util.ArrayList ();
        var pt = null;
        for (var j = 0; j < pts2d.size (); j++) {
            pt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pts2d.get (j).getX (), pts2d.get (j).getY ());
            pts.add (pt);
        }
        return pts;
    },  
    Point2DToPOINT2:function (pt2d) {
        var pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pt2d.x, pt2d.y);
        return pt2;
    },
    addModifiersBeforeClipping:function (tg) {
        var result = false;
        var linetype = tg.get_LineType ();
        switch (linetype) {
            case 26430000:
            case 26440000:
            case 26410000:
            case 26420000:
            case 26400000:
            case 25225000:
            case 25224000:
            case 25223000:
            case 25222000:
            case 25221000:
            case 25212000:
            case 25211000:
            case 24225000:
            case 24224000:
            case 24223000:
            case 24222000:
            case 24221000:
            case 24260000:
            case 24250000:
            case 24211000:
            case 23410000:
            case 23163000:
            case 22524000:
            case 22522100:
            case 22422000:
            case 22421000:
            case 22330000:
            case 22320000:
            case 22221000:
            case 22223000:
            case 22225000:
            case 22224000:
            case 22222000:
            case 22224001:
            case 22222001:
            case 22121000:
            case 212410000:
            case 212400000:
            case 212000000:
            case 211800000:
            case 21800000:
            case 21700000:
            case 21710000:
            case 212210000:
            case 212230000:
            case 212220000:
            case 212210001:
            case 212230001:
            case 212220001:
            case 22122000:
            case 22123000:
            case 22124000:
            case 22125000:
            case 22523000:
            case 22525000:
            case 22526000:
            case 22527000:
            case 22528000:
            case 22613000:
                result = true;
                break;
            default:
                break;
        }
        if (armyc2.c2sd.JavaTacticalRenderer.clsUtility.isClosedPolygon (linetype) === true) result = true;
        return result;
    },    
    FilterPoints:function (tg) {
        try {
            var lineType = tg.get_LineType ();
            var minSpikeDistance = 0;
            switch (lineType) {
                case 23131100:
                case 23131200:
                case 23132000:
                case 22122000:
                case 22134000:
                case 23330000:
                case 23350000:
                    minSpikeDistance = 25;
                    break;
                case 22123000:
                case 23115000:
                case 23114000:
                case 22624000:
                case 23111000:
                case 23111001:
                case 23113000:
                case 23112000:
                case 23134000:
                case 231111000:
                case 231112000:
                case 231113000:
                case 231114000:
                case 231115000:
                case 231116000:
                case 231117100:
                case 231117200:
                case 231117300:
                    minSpikeDistance = 35;
                    break;
                case 31131100:
                case 31131000:
                case 31131200:
                case 31131300:
                    minSpikeDistance = 60;
                    break;
                case 31134000:
                case 31134100:
                case 31133000:
                case 31133100:
                    minSpikeDistance = 60;
                    break;
                case 31134200:
                case 31134300:
                    minSpikeDistance = 60;
                    break;
                case 31132300:
                case 31132200:
                case 31133200:
                    minSpikeDistance = 60;
                    break;
                case 31132000:
                case 31132100:
                    minSpikeDistance = 40;
                    break;
                case 31142000:
                case 32156000:
                case 32164000:
                case 32162000:
                    minSpikeDistance = 35;
                    break;
                default:
                    return ;
            }
            var j = 0;
            var dist = 0;
            var pts =  new java.util.ArrayList ();
            var ptsGeo =  new java.util.ArrayList ();
            pts.add (tg.Pixels.get (0));
            ptsGeo.add (tg.LatLongs.get (0));
            var lastGoodPt = tg.Pixels.get (0);
            var currentPt = null;
            var currentPtGeo = null;
            var foundGoodPt = false;
            for (j = 1; j < tg.Pixels.size (); j++) {
                currentPt = tg.Pixels.get (j);
                currentPtGeo = tg.LatLongs.get (j);
                if (currentPt.style === -1) {
                    lastGoodPt = currentPt;
                    pts.add (currentPt);
                    ptsGeo.add (currentPtGeo);
                    foundGoodPt = true;
                    currentPt.style = 0;
                    continue ;
                }
                dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (lastGoodPt, currentPt);
                switch (lineType) {
                    case 22123000:
                        if (dist > minSpikeDistance) {
                            lastGoodPt = currentPt;
                            pts.add (currentPt);
                            ptsGeo.add (currentPtGeo);
                            foundGoodPt = true;
                        } else {
                            if (j === tg.Pixels.size () - 1) {
                                pts.set (pts.size () - 1, currentPt);
                                ptsGeo.set (ptsGeo.size () - 1, currentPtGeo);
                            }
                        }
                        break;
                    default:
                        if (dist > minSpikeDistance || j === tg.Pixels.size () - 1) {
                            lastGoodPt = currentPt;
                            pts.add (currentPt);
                            ptsGeo.add (currentPtGeo);
                            foundGoodPt = true;
                        }
                        break;
                }
            }
            if (foundGoodPt === true) {
                tg.Pixels = pts;
                tg.LatLongs = ptsGeo;
            }
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException ("clsUtility", "FilterPoints",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside FilterPoints", exc));
            } else {
                throw exc;
            }
        }
    },    
    PixelsToLatLong:function (pts, converter) {
        var j = 0;
        var pt = null;
        var ptGeo = null;
        var ptsGeo =  new java.util.ArrayList ();
        for (j = 0; j < pts.size (); j++) 
        {
            pt = pts.get (j);
            ptGeo = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.PointPixelsToLatLong (pt, converter);
            ptsGeo.add (ptGeo);
        }
        return ptsGeo;
    }, 
    isAutoshape:function (tg) {
        try {
            var linetype = tg.get_LineType();
            switch (linetype) {
                case 15000002:
                case 15000003:
                case 15000004:
                case 12000000:
                case 13000000:
                case 13000001:
                case 13000002:
                case 14000000:
                case 212600000:
                case 212500000:
                case 21100000:
                case 21200000:
                case 21300000:
                case 21400000:
                case 21500000:
                case 21600000:
                case 21800000:
                case 211000000:
                case 211100000:
                case 211200000:
                case 211210000:
                case 211400000:
                case 211600000:
                case 211700000:
                case 211800000:
                case 211900000:
                case 212000000:
                case 212100000:
                case 212210000:
                case 212230000:
                case 212220000:
                case 212210001:
                case 212230001:
                case 212220001:
                case 212300000:
                case 212300001:
                case 212400000:
                case 212410000:
                case 22139000:
                case 22221000:
                case 22222000:
                case 22222001:
                case 22223000:
                case 22225000:
                case 22224000:
                case 22224001:
                case 22310000:
                case 22422000:
                case 22524000:
                case 22533000:
                case 22534000:
                case 22611000:
                case 23157000:
                case 23163000:
                case 23171000:
                case 23172000:
                case 23174000:
                case 23173000:
                case 23191000:
                case 23194000:
                case 23192000:
                case 23193000:
                case 231100000:
                case 23211000:
                case 23212000:
                case 23213000:
                case 23221000:
                case 23222000:
                case 23223000:
                case 23224000:
                case 23225000:
                case 23226000:
                case 23227000:
                case 23340000:
                case 23410000:
                case 25211000:
                case 25212000:
                case 24250000:
                case 24211000:
                case 24260000:
                case 26400000:
                case 26420000:
                case 26410000:
                case 26440000:
                case 26430000:
                    return true;
            }
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility._className, "isAutoshape",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside isAutoshape", exc));
            } else {
                throw exc;
            }
        }
        return false;
    },
    LatLongToPixels:function (pts, converter) {
        var j = 0;
        var pt = null;
        var ptPixels = null;
        var ptsPixels =  new java.util.ArrayList ();
        for (j = 0; j < pts.size (); j++) {
            pt = pts.get (j);
            ptPixels = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.PointLatLongToPixels (pt, converter);
            ptsPixels.add (ptPixels);
        }
        return ptsPixels;
    },    
    PointLatLongToPixels : function (ptLatLong, converter) {
        var pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 ();
        try {
            var pt2d = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.POINT2ToPoint2D (ptLatLong);
            var pt = converter.GeoToPixels (pt2d);
            pt2 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.PointToPOINT2 (pt);
            pt2.style = ptLatLong.style;
        } catch (e) {
            armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility._className,"PointLatLongToPixels",e);
        }
        return pt2;
    },     
    FilterAXADPoints:function (tg, converter) {
        try {
            var lineType = tg.get_LineType ();
            switch (lineType) {
                case 21700000:
                case 21710000:
                case 22320000:
                case 22521100:
                case 22521200:
                case 22521300:
                case 22521420:
                case 22521410:
                    break;
                default:
                    return ;
            }
            var j = 0;
            var pts =  new java.util.ArrayList ();
            var ptsGeo =  new java.util.ArrayList ();
            var pt0 = tg.Pixels.get (0);
            var pt1 = tg.Pixels.get (1);
            var pt =  new armyc2.c2sd.graphics2d.Point (Math.floor (pt1.x), Math.floor (pt1.y));
            var pt1Geo2d = converter.PixelsToGeo (pt);
            var pt1geo = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pt1Geo2d.getX (), pt1Geo2d.getY ());
            var ptj = null;
            var ptjGeo = null;
            var controlPt = tg.Pixels.get (tg.Pixels.size () - 1);
            var pt0Relative = armyc2.c2sd.JavaLineArray.lineutility.PointRelativeToLine (pt0, pt1, pt0, controlPt);
            var relativeDist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pt0Relative, controlPt);
            relativeDist += 5;
            var pt0pt1dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pt0, pt1);
            var foundGoodPoint = false;
            if (relativeDist > pt0pt1dist) {
                pts.add (pt0);
                pt =  new armyc2.c2sd.graphics2d.Point (Math.floor (pt0.x), Math.floor (pt0.y));
                pt1Geo2d = converter.PixelsToGeo (pt);
                pt1geo = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pt1Geo2d.getX (), pt1Geo2d.getY ());
                ptsGeo.add (pt1geo);
                pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pt0, pt1, relativeDist);
                pts.add (pt1);
                pt =  new armyc2.c2sd.graphics2d.Point (Math.floor (pt1.x), Math.floor (pt1.y));
                pt1Geo2d = converter.PixelsToGeo (pt);
                pt1geo = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pt1Geo2d.getX (), pt1Geo2d.getY ());
                ptsGeo.add (pt1geo);
            } else {
                foundGoodPoint = true;
                pts = tg.Pixels;
                ptsGeo = tg.LatLongs;
            }
            if (foundGoodPoint === false) {
                for (j = 2; j < tg.Pixels.size () - 1; j++) {
                    ptj = tg.Pixels.get (j);
                    ptjGeo = tg.LatLongs.get (j);
                    if (foundGoodPoint) {
                        pts.add (ptj);
                        ptsGeo.add (ptjGeo);
                    } else {
                        pt0pt1dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pt0, ptj);
                        if (relativeDist > pt0pt1dist) continue ;
                        else {
                            pts.add (ptj);
                            ptsGeo.add (ptjGeo);
                            foundGoodPoint = true;
                        }
                    }
                }
                pts.add (controlPt);
                pt =  new armyc2.c2sd.graphics2d.Point (Math.floor (controlPt.x), Math.floor (controlPt.y));
                pt1Geo2d = converter.PixelsToGeo (pt);
                pt1geo = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pt1Geo2d.getX (), pt1Geo2d.getY ());
                ptsGeo.add (pt1geo);
            }
            var lastGoodPt = pts.get (1);
            var currentPt = null;
            var currentPtGeo = null;
            var dist = 0;
            tg.Pixels =  new java.util.ArrayList ();
            tg.LatLongs =  new java.util.ArrayList ();
            for (j = 0; j < 2; j++) {
                tg.Pixels.add (pts.get (j));
                tg.LatLongs.add (ptsGeo.get (j));
            }
            for (j = 2; j < pts.size () - 1; j++) {
                currentPt = pts.get (j);
                currentPtGeo = ptsGeo.get (j);
                dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (currentPt, lastGoodPt);
                if (dist > 5) {
                    lastGoodPt = currentPt;
                    tg.Pixels.add (currentPt);
                    tg.LatLongs.add (currentPtGeo);
                }
            }
            tg.Pixels.add (pts.get (pts.size () - 1));
            tg.LatLongs.add (ptsGeo.get (ptsGeo.size () - 1));
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException ("clsUtility", "FilterAXADPoints",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside FilterAXADPoints", exc));
            } else {
                throw exc;
            }
        }
        return ;
    },
    RemoveDuplicatePoints:function (tg) {
        try {
            //if (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.isAutoshape (tg)) return ;
            switch (tg.get_LineType()) {
                case 22221000:
                case 22222000:
                case 22223000:
                case 22224000:
                case 22225000:
                    break;
                default:
                    if (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.isAutoshape (tg)) return;
            }
            switch (tg.get_LineType ()) {
                case 21700000:  //these are channel types
                case 21710000:
                case 22320000:
                case 22521100:
                case 22521200:
                case 22521300:
                case 22521420:
                case 22521410:
                    return;
                case 22121000:
                case 25221000:
                case 25222000:
                    var strH = tg.get_H ();
                    if (strH !== null && !strH.isEmpty ()) {
                        var strs = strH.split (",");
                        if (strs.length > 1) 
                            return ;
                    }
                    return;
                default:
                    break;
            }
            var linetype = tg.get_LineType ();
            if (armyc2.c2sd.JavaTacticalRenderer.clsUtility.IsChange1Area (linetype, null)) return ;
            var minSize=2;
            if(armyc2.c2sd.JavaTacticalRenderer.clsUtility.isClosedPolygon(tg.get_LineType())===true)
                minSize=3;
            var ptCurrent = null;
            var ptLast = null;
            for (var j = 1; j < tg.Pixels.size (); j++) {
                ptLast = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (tg.Pixels.get (j - 1));
                ptCurrent = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (tg.Pixels.get (j));
                if (ptCurrent.x === ptLast.x && ptCurrent.y === ptLast.y) {
                    if (tg.Pixels.size () > minSize) 
                    {
                        tg.Pixels.remove (j);
                        tg.LatLongs.remove (j);
                        j=1;
                    }
                }
            }
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException ("clsUtility", "FilterVerticalSegments",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside FilterVerticalSegments", exc));
            } else {
                throw exc;
            }
        }
        return ;
    },
    BestFitConverter:function (latLongs) {
        var converter = null;
        try {
            var j = 0;
            var pixelWidth = 1000;
            var pixelHeight = 1000;
            var geoTop = 2.2250738585072014E-308;
            var geoBottom = 1.7976931348623157E308;
            var geoLeft = 1.7976931348623157E308;
            var geoRight = 2.2250738585072014E-308;
            for (j = 0; j < latLongs.size (); j++) {
                if (latLongs.get (j).y > geoTop) geoTop = latLongs.get (j).y;
                if (latLongs.get (j).y < geoBottom) geoBottom = latLongs.get (j).y;
                if (latLongs.get (j).x > geoRight) geoRight = latLongs.get (j).x;
                if (latLongs.get (j).x < geoLeft) geoLeft = latLongs.get (j).x;
            }
            converter =  new armyc2.c2sd.renderer.utilities.PointConversion (pixelWidth, pixelHeight, geoTop, geoLeft, geoBottom, geoRight);
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException ("clsUtility", "BestFitConverter",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside BestFitConverter", exc));
            } else {
                throw exc;
            }
        }
        return converter;
    },
    PointPixelsToLatLong : function (ptPixels, converter) {
        var pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 ();
        try {
            var pt = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.POINT2ToPoint (ptPixels);
            var pt2d = converter.PixelsToGeo (pt);
            pt2 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.Point2DToPOINT2 (pt2d);
            pt2.style = ptPixels.style;
        } 
        catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException ("clsUtility", "PointPixelsToLatLong",  new armyc2.c2sd.renderer.utilities.RendererException ("Could not convert point to geo", exc));
            } else {
                throw exc;
            }
        }
        return pt2;
    },
    ResolveDummyShapes:function (tg, shapes) {
        try {
            var shapeStyle = -1;
            var shape = null;
            switch (tg.get_LineType ()) {
                case 2237000:
                    var status = tg.get_Status ();
                    for (var j = 0; j < shapes.size (); j++) {
                        shape = shapes.get (j);
                        shapeStyle = shape.get_Style ();
                        if (shapeStyle !== 1) {
                            shape.setFillColor (tg.get_FillColor ());
                            shape.set_Fillstyle (tg.get_FillStyle ());
                        } else if (j === 0 && status.equalsIgnoreCase ("A")) {
                            shape.setFillColor (tg.get_FillColor ());
                            shape.set_Fillstyle (tg.get_FillStyle ());
                        }
                    }
                    break;
                default:
                    break;
            }
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException ("clsUtility", "ResolveDummyShapes",  new armyc2.c2sd.renderer.utilities.RendererException ("ResolveDummyShapes", exc));
            } else {
                throw exc;
            }
        }
        return ;
    },
    getMBR:function (clipBounds) {
        var rect = null;
        try {
            var j = 0;
            var pt = null;
            var xmax = clipBounds.get (0).getX ();
            var xmin = xmax;
            var ymax = clipBounds.get (0).getY ();
            var ymin = ymax;
            for (j = 0; j < clipBounds.size (); j++) {
                pt = clipBounds.get (j);
                if (pt.getX () < xmin) xmin = pt.getX ();
                if (pt.getX () > xmax) xmax = pt.getX ();
                if (pt.getY () <= ymin) ymin = pt.getY ();
                if (pt.getY () > ymax) ymax = pt.getY ();
            }
            rect =  new armyc2.c2sd.graphics2d.Rectangle2D (xmin, ymin, xmax - xmin, ymax - ymin);
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility._className, "AddBoundaryPointsForLines",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside AddBoundaryPointsForLines", exc));
            } else {
                throw exc;
            }
        }
        return rect;
    }, 
    _className: "clsUtility"
};