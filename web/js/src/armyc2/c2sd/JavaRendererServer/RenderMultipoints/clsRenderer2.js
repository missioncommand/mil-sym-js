var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.JavaRendererServer = armyc2.c2sd.JavaRendererServer || {};
armyc2.c2sd.JavaRendererServer.RenderMultipoints = armyc2.c2sd.JavaRendererServer.RenderMultipoints || {};
armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2 = {
    getMSRShapes: function(tg, shapes) {
        try {
            var linetype = tg.get_LineType();
            if (linetype != 25221000 && linetype != 25222000)
                return;
            var hmap = armyc2.c2sd.JavaTacticalRenderer.clsUtility.getMSRSegmentColors(tg);
            var shape = null;
            var stroke = null;
            if (tg.get_Client().equalsIgnoreCase("ge"))
                stroke = armyc2.c2sd.JavaTacticalRenderer.clsUtility.getLineStroke2(tg.get_LineThickness(), tg.get_LineStyle(), 1, 1);
            else
                stroke = armyc2.c2sd.JavaTacticalRenderer.clsUtility.getLineStroke(tg.get_LineThickness(), tg.get_LineStyle(), 1, 1);
            var j = 0;
            var color = null;
            var segShape = null;
            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
            shape.setLineColor(tg.get_LineColor());
            shape.setStroke(stroke);
//            var strH = tg.get_H();
//            if (strH !== null && !strH.isEmpty()) {
//                var strs = strH.split(",");
//                if (strs.length < 2) {
//                    shape.moveTo(tg.Pixels.get(0));
//                    for (j = 1; j < tg.Pixels.size(); j++) {
//                        shape.lineTo(tg.Pixels.get(j));
//                    }
//                    shapes.add(shape);
//                    return;
//                }
//            }
            var lastColor = null;
            var dist = 0;
            var dist2 = 0;
            var pt0 = null;
            var pt1 = null;
            var lastPt = null;
            for (j = 0; j < tg.Pixels.size() - 1; j++) {
                pt0 = tg.Pixels.get(j);
                pt1 = tg.Pixels.get(j + 1);
                if (hmap !== null && hmap.containsKey(new Integer(j))) {
                    color = hmap.get(new Integer(j));
                    if (color !== lastColor) {
                        if (segShape !== null)
                            shapes.add(segShape);
                        segShape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                        segShape.setLineColor(color);
                        segShape.set_Style(tg.get_LineStyle());
                        segShape.setStroke(stroke);
                    }
                    segShape.moveTo(pt0);
                    segShape.lineTo(pt1);
                    lastColor = new armyc2.c2sd.renderer.utilities.Color(color.toARGB());
                } else {
                    if (hmap !== null && hmap.containsKey(new Integer(j + 1))) {
                        shape.moveTo(pt0);
                        shape.lineTo(pt1);
                        lastPt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                    } else if (hmap !== null && hmap.containsKey(new Integer(j - 1))) {
                        shape.moveTo(pt0);
                        shape.lineTo(pt1);
                        lastPt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                    } else if (j === tg.Pixels.size() - 2) {
                        shape.moveTo(pt0);
                        shape.lineTo(pt1);
                    } else {
                        if (lastPt === null) {
                            lastPt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                            shape.moveTo(lastPt);
                        }
                        dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
                        if (dist > 10) {
                            shape.lineTo(pt1);
                            lastPt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                        } else {
                            dist2 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(lastPt, pt1);
                            if (dist2 > 10) {
                                shape.lineTo(pt1);
                                lastPt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                            }
                        }
                    }
                }
            }
            if (segShape !== null)
                shapes.add(segShape);
            if(!shape.getShape().getPathIterator().getPoints().isEmpty())
                shapes.add(shape);
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2._className, "getMSRShapes", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside getMSRShapes", exc));
            } else {
                throw exc;
            }
        }
    },
    GetLineArray: function(tg, converter, isTextFlipped, clipBounds) {
        var shapes = new java.util.ArrayList();
        try {
            if (tg.Pixels === null || tg.Pixels.isEmpty())
                return null;
            var x = 0;
            var y = 0;
            var width = 0;
            var height = 0;
            var clipBounds2 = null;
            var rev = tg.getSymbologyStandard();
            var clipRect = null;
            var clipArray = null;
            if (clipBounds !== null) {
                if (clipBounds instanceof armyc2.c2sd.graphics2d.Rectangle2D || clipBounds instanceof armyc2.c2sd.graphics2d.Rectangle) {
                    clipRect = clipBounds;
                    x = clipRect.getMinX() - 50;
                    y = clipRect.getMinY() - 50;
                    width = clipRect.getWidth() + 100;
                    height = clipRect.getHeight() + 100;
                    clipBounds2 = new armyc2.c2sd.graphics2d.Rectangle2D(x, y, width, height);
                }
                else if (clipBounds instanceof java.util.ArrayList)
                {
                    clipArray = clipBounds;
                    clipBounds2=armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.getMBR(clipArray);
                }
            }
            var lineType = tg.get_LineType();
            var minPoints2 = armyc2.c2sd.JavaTacticalRenderer.clsUtility.GetMinPoints(lineType);
            var minPoints = new armyc2.c2sd.JavaLineArray.ref();
            var bolResult = armyc2.c2sd.JavaTacticalRenderer.clsUtility.IsChange1Area(lineType, minPoints);
            var bolMeTOC = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.IsWeather(tg.get_SymbolId());
            var pts = new java.util.ArrayList();
            var usas1314 = new Boolean(true);
            var j = 0;
            switch (tg.get_LineType()) {
                case 22612000:
                case 22623000:
                case 22612001:
                case 22623001:
                    if (tg.Pixels.size() < 2)
                        return null;
                    if ((usas1314).valueOf())
                        break;
                    pts.add(tg.Pixels.get(0));
                    for (j = 2; j < tg.Pixels.size(); j++) {
                        pts.add(tg.Pixels.get(j));
                    }
                    pts.add(tg.Pixels.get(1));
                    tg.Pixels = pts;
                    break;
                case 231117100:
                case 231117101:
                    pts = tg.Pixels.clone();
                    for (j = 0; j < tg.Pixels.size (); j++)
                        tg.Pixels.set(j, pts.get(pts.size() - j - 1));

                    break;
                default:
                    break;
            }
            var bi = new armyc2.c2sd.graphics2d.BufferedImage(8, 8, 2);
            var g2d = bi.createGraphics();
            var hatchShape = armyc2.c2sd.JavaTacticalRenderer.clsUtility.getHatchShape(tg, bi);
            if (tg.Pixels.size() < minPoints2) {
                bolResult = false;
            }
            if (bolResult) {
                tg.Pixels.clear();
                bolResult = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.Change1TacticalAreas(tg, lineType, converter, shapes);
            } else if (bolMeTOC > 0) {
                if (tg.Pixels.size() < 2)
                    return null;
                try {
                    armyc2.c2sd.JavaTacticalRenderer.clsMETOC.GetMeTOCShape(tg, shapes, rev);
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2._className, "GetLineArray", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetLineArray", exc));
                    } else {
                        throw exc;
                    }
                }
            } else {
                if (tg.Pixels.size() < 2)
                    if (lineType !== 12000000)
                        return null;
                if (armyc2.c2sd.JavaLineArray.CELineArray.CIsChannel(lineType) === 0) {
                    if (lineType === 25222000 || lineType === 25221000) {
                        armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2.getMSRShapes(tg, shapes);
                    }
                    else if (lineType !== 23111001) {
                        tg.Pixels = armyc2.c2sd.JavaLineArray.arraysupport.GetLineArray2(lineType, tg.Pixels, shapes, clipBounds2, rev, converter);
                    } else if (lineType === 23111001) {
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
                            pixels = armyc2.c2sd.JavaLineArray.arraysupport.GetLineArray2(lineType, pixels, tempShapes, clipBounds2, rev, converter);
                            shapes.addAll(tempShapes);
                        }
                    }
                } else {
                    armyc2.c2sd.JavaTacticalRenderer.clsChannelUtility.DrawChannel(tg.Pixels, lineType, tg, shapes, null, rev);
                }
            }
            if (bolMeTOC <= 0) {
                if (lineType !== 25222000 && lineType !== 25221000)
                    armyc2.c2sd.JavaTacticalRenderer.clsUtility.SetShapeProperties(tg, shapes, bi);
                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.ResolveDummyShapes(tg, shapes);
            }
            if (hatchShape !== null)
                shapes.add(hatchShape);
            //armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifiers2(tg);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.AddModifiers2RevD(tg,shapes);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.addSectorModifiers(tg, converter);
            armyc2.c2sd.JavaTacticalRenderer.Modifier2.GetIntegralTextShapes(tg, g2d, shapes);
            bi.flush();
            g2d.dispose();
            bi = null;
            g2d = null;
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2._className, "GetLineArray", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetLineArray", exc));
            } else {
                throw exc;
            }
        }
        return shapes;
    },
    getAutoshapeFillShape: function(tg, shapes) {
        try {
            if(shapes===null || shapes.size()===0)
                return;
            if(tg.Pixels===null || tg.Pixels.size()===0)
                return;
            if(tg.get_FillColor()===null)
              return;
          
            var linetype = tg.get_LineType();
            var symbolID = tg.get_SymbolId();
            var j = 0;
            var shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL);
            shape.setFillColor(tg.get_FillColor());
            shape.setLineColor(null);
            switch (linetype) {
                case 211900000:
                    if (shapes !== null && !shapes.isEmpty())
                        for (j = 0; j < shapes.size (); j++)
                            shapes.get(j).setFillColor(null);

                    shape.moveTo(tg.Pixels.get(0));
                    for (j = 1; j < 26; j++)
                        shape.lineTo(tg.Pixels.get(j));

                    shape.lineTo(tg.Pixels.get(0));
                    shapes.add(0, shape);
                    break;
                case 212100000:
                case 211600000:
                    if (shapes !== null && !shapes.isEmpty())
                        for (j = 0; j < shapes.size (); j++)
                            shapes.get(j).setFillColor(null);

                    shape.moveTo(tg.Pixels.get(0));
                    for (j = 1; j < tg.Pixels.size () - 3; j++)
                        shape.lineTo(tg.Pixels.get(j));

                    shape.lineTo(tg.Pixels.get(0));
                    shapes.add(0, shape);
                    break;
                case 25211000:
                case 25212000:
                    if (shapes !== null && !shapes.isEmpty())
                        for (j = 0; j < shapes.size (); j++)
                            shapes.get(j).setFillColor(null);

                    shape.moveTo(tg.Pixels.get(0));
                    for (j = 1; j < tg.Pixels.size (); j++)
                        shape.lineTo(tg.Pixels.get(j));

                    shape.lineTo(tg.Pixels.get(0));
                    shapes.add(0, shape);
                    break;
                case 212500000:
                case 212600000:
                case 211400000:
                    if (shapes !== null && !shapes.isEmpty())
                        for (j = 0; j < shapes.size (); j++)
                            shapes.get(j).setFillColor(null);

                    shape.moveTo(tg.Pixels.get(0));
                    for (j = 26; j < 47; j++)
                        shape.lineTo(tg.Pixels.get(j));

                    shape.lineTo(tg.Pixels.get(23));
                    shape.lineTo(tg.Pixels.get(24));
                    shape.lineTo(tg.Pixels.get(25));
                    shape.lineTo(tg.Pixels.get(0));
                    shapes.add(0, shape);
                    break;
                default:
                    return;
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsRenderer2._className, "getAutoshapeFillShape", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside getAutoshapeFillShape for " + symbolID + " case: " + linetype, exc));
            } else {
                throw exc;
            }
        }
        return;
    },
    _className: "clsRenderer2"
};