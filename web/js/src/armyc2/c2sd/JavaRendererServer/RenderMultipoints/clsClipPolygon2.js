var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.JavaRendererServer = armyc2.c2sd.JavaRendererServer || {};
armyc2.c2sd.JavaRendererServer.RenderMultipoints = armyc2.c2sd.JavaRendererServer.RenderMultipoints || {};
armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2 = {
    intersectPoint: function(pt0, pt1, currentEdge)
    {
        var ptIntersect = null;
        try {
            var edgePt1 = currentEdge.getP1();
            var edgePt2 = currentEdge.getP2();
            var edge_x = 0;
            var edge_y = 0;
            var m = 0;
            var deltaX = 0;
            var deltaY = 0;
            if (Math.abs(edgePt1.getX() - edgePt2.getX()) < Math.abs(edgePt1.getY() - edgePt2.getY())) {
                ptIntersect = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D();
                edge_x = edgePt1.getX();
                if (pt1.getX() === pt0.getX())
                    pt1.setLocation(pt1.getX() + 1, pt1.getY());
                m = (pt1.getY() - pt0.getY()) / (pt1.getX() - pt0.getX());
                deltaX = edge_x - pt0.getX();
                ptIntersect.setLocation(edge_x, pt0.getY() + m * deltaX);
            } else {
                ptIntersect = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D();
                edge_y = edgePt1.getY();
                if (pt1.getX() === pt0.getX())
                    pt1.setLocation(pt1.getX() + 1, pt1.getY());
                m = (pt1.getY() - pt0.getY()) / (pt1.getX() - pt0.getX());
                deltaY = edge_y - pt0.getY();
                ptIntersect.setLocation(pt0.getX() + deltaY / m, edge_y);
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2._className, "intersectPoint", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside intersectPoint", exc));
            } else {
                throw exc;
            }
        }
        return ptIntersect;
    },
    clipTop: function(pts, clipBounds) {
        var ptsResult = new java.util.ArrayList();
        try {
            var ulx = 0;
            var uly = 0;
            var lrx = 0;
            ulx = clipBounds.getMinX();
            uly = clipBounds.getMinY();
            var ul = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(ulx, uly);
            var ur = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(lrx, uly);
            var j = 0;
            var current = null;
            var previous = null;
            var intersectPt = null;
            var edge;
            for (j = 0; j < pts.size(); j++) {
                current = pts.get(j);
                if (j === 0) {
                    previous = pts.get(pts.size() - 1);
                } else {
                    previous = pts.get(j - 1);
                }
                if (previous.getY() >= ul.getY() && current.getY() >= ul.getY()) {
                    ptsResult.add(current);
                }
                if (previous.getY() >= ul.getY() && current.getY() < ul.getY()) {
                    edge = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setLine2D(ul, ur);
                    intersectPt = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.intersectPoint(previous, current, edge);
                    if (intersectPt !== null) {
                        ptsResult.add(intersectPt);
                    }
                }
                if (previous.getY() < ul.getY() && current.getY() < ul.getY()) {
                    continue;
                }
                if (previous.getY() < ul.getY() && current.getY() >= ul.getY()) {
                    edge = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setLine2D(ul, ur);
                    intersectPt = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.intersectPoint(previous, current, edge);
                    if (intersectPt !== null) {
                        ptsResult.add(intersectPt);
                    }
                    ptsResult.add(current);
                }
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2._className, "clipTop", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside clipTop", exc));
            } else {
                throw exc;
            }
        }
        return ptsResult;
    },
    clipBottom: function(pts, clipBounds) {
        var ptsResult = new java.util.ArrayList();
        try {
            var ulx = 0;
            var uly = 0;
            var lrx = 0;
            var lry = 0;
            ulx = clipBounds.getMinX();
            lrx = clipBounds.getMaxX();
            lry = clipBounds.getMaxY();
            var ll = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(ulx, lry);
            var lr = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(lrx, lry);
            var j = 0;
            var current = null;
            var previous = null;
            var intersectPt = null;
            var edge;
            for (j = 0; j < pts.size(); j++) {
                current = pts.get(j);
                if (j === 0) {
                    previous = pts.get(pts.size() - 1);
                } else {
                    previous = pts.get(j - 1);
                }
                if (previous.getY() <= lr.getY() && current.getY() <= lr.getY()) {
                    ptsResult.add(current);
                }
                if (previous.getY() <= lr.getY() && current.getY() > lr.getY()) {
                    edge = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setLine2D(ll, lr);
                    intersectPt = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.intersectPoint(previous, current, edge);
                    if (intersectPt !== null) {
                        ptsResult.add(intersectPt);
                    }
                }
                if (previous.getY() > lr.getY() && current.getY() > lr.getY()) {
                    continue;
                }
                if (previous.getY() > lr.getY() && current.getY() <= lr.getY()) {
                    edge = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setLine2D(ll, lr);
                    intersectPt = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.intersectPoint(previous, current, edge);
                    if (intersectPt !== null) {
                        ptsResult.add(intersectPt);
                    }
                    ptsResult.add(current);
                }
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2._className, "clipBottom", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside clipBottom", exc));
            } else {
                throw exc;
            }
        }
        return ptsResult;
    },
    clipRight: function(pts, clipBounds) {
        var ptsResult = new java.util.ArrayList();
        try {
            var uly = 0;
            var lrx = 0;
            var lry = 0;
            uly = clipBounds.getMinY();
            lrx = clipBounds.getMaxX();
            lry = clipBounds.getMaxY();
            var ur = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(lrx, uly);
            var lr = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(lrx, lry);
            var j = 0;
            var current = null;
            var previous = null;
            var intersectPt = null;
            var edge;
            for (j = 0; j < pts.size(); j++) {
                current = pts.get(j);
                if (j === 0) {
                    previous = pts.get(pts.size() - 1);
                } else {
                    previous = pts.get(j - 1);
                }
                if (previous.getX() <= lr.getX() && current.getX() <= lr.getX()) {
                    ptsResult.add(current);
                }
                if (previous.getX() <= lr.getX() && current.getX() > lr.getX()) {
                    edge = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setLine2D(ur, lr);
                    intersectPt = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.intersectPoint(previous, current, edge);
                    if (intersectPt !== null) {
                        ptsResult.add(intersectPt);
                    }
                }
                if (previous.getX() > lr.getX() && current.getX() > lr.getX()) {
                    continue;
                }
                if (previous.getX() > lr.getX() && current.getX() <= lr.getX()) {
                    edge = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setLine2D(ur, lr);
                    intersectPt = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.intersectPoint(previous, current, edge);
                    if (intersectPt !== null) {
                        ptsResult.add(intersectPt);
                    }
                    ptsResult.add(current);
                }
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2._className, "clipRight", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside clipRight", exc));
            } else {
                throw exc;
            }
        }
        return ptsResult;
    },
    clipLeft: function(pts, clipBounds) {
        var ptsResult = new java.util.ArrayList();
        try {
            var ulx = 0;
            var uly = 0;
            var lry = 0;
            ulx = clipBounds.getMinX();
            uly = clipBounds.getMinY();
            lry = clipBounds.getMaxY();
            var ul = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(ulx, uly);
            var ll = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(ulx, lry);
            var j = 0;
            var current = null;
            var previous = null;
            var intersectPt = null;
            var edge;
            for (j = 0; j < pts.size(); j++) {
                current = pts.get(j);
                if (j === 0) {
                    previous = pts.get(pts.size() - 1);
                } else {
                    previous = pts.get(j - 1);
                }
                if (previous.getX() >= ll.getX() && current.getX() >= ll.getX()) {
                    ptsResult.add(current);
                }
                if (previous.getX() >= ll.getX() && current.getX() < ll.getX()) {
                    edge = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setLine2D(ul, ll);
                    intersectPt = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.intersectPoint(previous, current, edge);
                    if (intersectPt !== null) {
                        ptsResult.add(intersectPt);
                    }
                }
                if (previous.getX() < ll.getX() && current.getX() < ll.getX()) {
                    continue;
                }
                if (previous.getX() < ll.getX() && current.getX() >= ll.getX()) {
                    edge = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setLine2D(ul, ll);
                    intersectPt = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.intersectPoint(previous, current, edge);
                    if (intersectPt !== null) {
                        ptsResult.add(intersectPt);
                    }
                    ptsResult.add(current);
                }
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2._className, "clipLeft", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside clipLeft", exc));
            } else {
                throw exc;
            }
        }
        return ptsResult;
    },
    AddBoundaryPointsForLines: function(polygon, clipBounds) {
        var result = 0;
        try {
            var ulx = 0;
            var uly = 0;
            var lrx = 0;
            var lry = 0;
            ulx = clipBounds.getMinX();
            uly = clipBounds.getMinY();
            lrx = clipBounds.getMaxX();
            lry = clipBounds.getMaxY();
            var ul = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(ulx + 10, uly + 10);
            var ur = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(lrx - 10, uly + 10);
            var ll = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(ulx + 10, lry - 10);
            var lr = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(lrx - 10, lry - 10);
            var pt0 = polygon.get(0);
            var ptn = polygon.get(polygon.size() - 1);
            var addToFront = new Boolean(false);
            var addToEnd = new Boolean(false);
            if (pt0.getY() < uly) {
                polygon.add(0, ul);
                addToFront = new Boolean(true);
            } else if (pt0.getX() < ulx) {
                polygon.add(0, ul);
                addToFront = new Boolean(true);
            } else if (pt0.getX() > lrx) {
                polygon.add(0, lr);
                addToFront = new Boolean(true);
            } else if (pt0.getY() > lry) {
                polygon.add(0, lr);
                addToFront = new Boolean(true);
            }
            if (ptn.getY() < uly) {
                polygon.add(ul);
                addToEnd = new Boolean(true);
            } else if (ptn.getX() < ulx) {
                polygon.add(ul);
                addToEnd = new Boolean(true);
            } else if (ptn.getX() > lrx) {
                polygon.add(lr);
                addToEnd = new Boolean(true);
            } else if (ptn.getY() > lry) {
                polygon.add(lr);
                addToEnd = new Boolean(true);
            }
            if (addToFront.booleanValue() === false && addToEnd.booleanValue() === false) {
                result = 0;
            }
            if (addToFront.booleanValue() === true && addToEnd.booleanValue() === false) {
                result = 1;
            }
            if (addToFront.booleanValue() === false && addToEnd.booleanValue() === true) {
                result = 2;
            }
            if (addToFront.booleanValue() === true && addToEnd.booleanValue() === true) {
                result = 3;
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2._className, "AddBoundaryPointsForLines", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside AddBoundaryPointsForLines", exc));
            } else {
                throw exc;
            }
        }
        return result;
    },
    closeAreaTG: function(tg) {
        try {
            if (tg.Pixels === null || tg.Pixels.isEmpty())
                return;
            var pt0 = tg.Pixels.get(0);
            var ptn = tg.Pixels.get(tg.Pixels.size() - 1);
            if (pt0.x !== ptn.x || pt0.y !== ptn.y)
                tg.Pixels.add(pt0);
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2._className, "closeAreaTG", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside closeAreaTG", exc));
            } else {
                throw exc;
            }
        }
        return;
    },
    fillDMA: function(tg, clipBounds) {
        var shapes = new java.util.ArrayList();
        try {
            switch (tg.get_LineType()) {
                case 23114000:
                case 23115000:
                case 23350000:
                case 23113000:
                case 22134000:
                case 22624000:
                case 23111001:
                case 23111000:
                case 22340000:
                case 22350000:
                case 23131200:
                case 23132000:
                    break;
                default:
                    return shapes;
            }
            var shape = null;
            var j = 0;
            var tg2 = new armyc2.c2sd.JavaTacticalRenderer.TGLight();
            tg2.set_LineType(22131000);
            tg2.Pixels = new java.util.ArrayList();
            var n = 0;
            if (tg.LatLongs !== null)
                n = tg.LatLongs.size();
            else
                n = tg.Pixels.size();
            for (j = 0; j < n; j++)
                tg2.Pixels.add(tg.Pixels.get(j));

            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.closeAreaTG(tg2);
            if (clipBounds !== null)
                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.ClipPolygon(tg2, clipBounds);
            if (tg2.Pixels === null || tg2.Pixels.isEmpty())
                return shapes;
            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL);
            shape.setFillColor(tg.get_FillColor());
            shape.moveTo(tg2.Pixels.get(0));
            for (j = 1; j < tg2.Pixels.size (); j++)
                shape.lineTo(tg2.Pixels.get(j));

            shapes.add(shape);
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2._className, "fillDMA", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside fillDMA", exc));
            } else {
                throw exc;
            }
        }
        return shapes;
    },
    addAbatisFill: function(tg, shapes) {
        try {
            if (tg.Pixels === null || tg.Pixels.size() < 2 || tg.get_FillColor() === null || tg.get_FillColor().getAlpha() < 2 || shapes === null)
                return;
            var j = 0;
            var n = tg.Pixels.size();
            var shape = null;
            var tg2 = null;
            switch (tg.get_LineType()) {
                case 23410000:
                    var dist0 = 0;
                    var dist1 = 0;
                    var dist2 = 0;
                    shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                    shape.setFillColor(tg.get_FillColor());
                    if (new Boolean(tg.Pixels !== null & tg.Pixels.size() >= 300).valueOf()) {
                        dist0 = Math.abs(tg.Pixels.get(0).x - tg.Pixels.get(50).x);
                        dist1 = Math.abs(tg.Pixels.get(100).x - tg.Pixels.get(150).x);
                        dist2 = Math.abs(tg.Pixels.get(200).x - tg.Pixels.get(250).x);
                        var start = -1;
                        var end = -1;
                        if (dist0 >= dist1 && dist0 >= dist2) {
                            start = 0;
                            end = 99;
                        } else if (dist1 >= dist0 && dist1 >= dist2) {
                            start = 100;
                            end = 199;
                        } else {
                            start = 200;
                            end = 299;
                        }
                        shape.moveTo(tg.Pixels.get(start));
                        for (j = start; j <= end; j++)
                            shape.lineTo(tg.Pixels.get(j));

                    }
                    break;
                case 23120000:
                    shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                    shape.setFillColor(tg.get_FillColor());
                    tg2 = new armyc2.c2sd.JavaTacticalRenderer.TGLight();
                    tg2.set_LineType(22131000);
                    tg2.Pixels = new java.util.ArrayList();
                    if (tg.Pixels !== null && tg.Pixels.size() > 2) {
                        tg2.Pixels.add(tg.Pixels.get(n - 3));
                        tg2.Pixels.add(tg.Pixels.get(n - 2));
                        tg2.Pixels.add(tg.Pixels.get(n - 1));
                        tg2.Pixels.add(tg.Pixels.get(n - 3));
                        shape.moveTo(tg2.Pixels.get(0));
                        for (j = 1; j < tg2.Pixels.size (); j++)
                            shape.lineTo(tg2.Pixels.get(j));

                    }
                    break;
                default:
                    return;
            }
            if (shapes !== null)
                shapes.add(0, shape);
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2._className, "addAbatisFill", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside addAbatisFill", exc));
            } else {
                throw exc;
            }
        }
        return;
    },
    LinesWithFill: function(tg, clipBounds) {
        var shapes = null;
        try {
            if (tg.get_FillColor() === null || tg.get_FillColor().getAlpha() <= 1 || tg.Pixels === null || tg.Pixels.isEmpty())
            {
                return shapes;
            }
            switch (tg.get_LineType()) {
                case 23120000:
                case 22521420:
                case 22521410:
                case 22521300:
                case 22521200:
                case 22521100:
                case 22320000:
                case 21700000:
                case 21710000:
                case 212500000:
                case 212600000:
                case 212100000:
                case 211600000:
                case 211900000:
                case 211400000:
                case 25211000:
                case 25212000:
                    return shapes;
                case 24326100:
                    return null;
                case 23114000:
                case 23115000:
                case 23350000:
                case 23113000:
                case 22134000:
                case 22624000:
                case 23111000:
                case 22340000:
                case 22350000:
                case 23131200:
                case 23132000:
                    return armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.fillDMA(tg, clipBounds);
                default:
                    break;
            }
            if (armyc2.c2sd.JavaTacticalRenderer.clsUtility.LinesWithFill(tg.get_LineType()) === false)
                return shapes;
            shapes = new java.util.ArrayList();
            var shape = null;
            var tg2 = new armyc2.c2sd.JavaTacticalRenderer.TGLight();
            tg2.set_LineType(22131000);
            tg2.Pixels = new java.util.ArrayList();
            tg2.Pixels.addAll(tg.Pixels);
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.closeAreaTG(tg2);
            if (clipBounds !== null)
                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.ClipPolygon(tg2, clipBounds);
            if (tg2.Pixels === null || tg2.Pixels.isEmpty())
                return null;
            var j = 0;
            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL);
            shape.setFillColor(tg.get_FillColor());
            shape.moveTo(tg2.Pixels.get(0));
            for (j = 1; j < tg2.Pixels.size(); j++)
            {
                shape.lineTo(tg2.Pixels.get(j));
            }

            if (tg.get_FillColor() !== null || tg.get_FillColor().getAlpha() > 1)
            {
                shapes.add(shape);
            }
            else
                return null;
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2._className, "LinesWithFill", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside LinesWithFill", exc));
            } else {
                throw exc;
            }
        }
        return shapes;
    },
    ClipPolygon: function(tg, clipBounds) {
        var poly = new java.util.ArrayList();
        try {
            var polygon = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.POINT2toPoint2D(tg.Pixels);
            var isClosed = new Boolean(armyc2.c2sd.JavaTacticalRenderer.clsUtility.isClosedPolygon(tg.get_LineType()));
            var hashMap = new java.util.HashMap();
            var j = 0;
            for (j = 0; j < polygon.size(); j++) {
                hashMap.put(Integer.toString(j), polygon.get(j));
            }
            var clipBounds2 = new armyc2.c2sd.graphics2d.Rectangle2D(clipBounds.getX() - 50, clipBounds.getY() - 50, clipBounds.getWidth() + 100, clipBounds.getHeight() + 100);
            var addedLinePoints = 0;
            if (isClosed.booleanValue() === true) {
                polygon.remove(polygon.size() - 1);
                isClosed = new Boolean(true);
            } else {
                addedLinePoints = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.AddBoundaryPointsForLines(polygon, clipBounds2);
            }
            poly = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.clipRight(polygon, clipBounds2);
            poly = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.clipTop(poly, clipBounds2);
            poly = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.clipLeft(poly, clipBounds2);
            poly = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.clipBottom(poly, clipBounds2);
            if (isClosed.booleanValue() === true) {
                if (poly.size() > 0) {
                    poly.add(poly.get(0));
                }
            } else {
                switch (addedLinePoints) {
                    case 0:
                        break;
                    case 1:
                        if (poly.size() > 0) {
                            poly.remove(0);
                        }
                        if (poly.size() > 0) {
                            poly.remove(0);
                        }
                        break;
                    case 2:
                        if (poly.size() > 0) {
                            poly.remove(poly.size() - 1);
                        }
                        if (poly.size() > 0) {
                            poly.remove(poly.size() - 1);
                        }
                        break;
                    case 3:
                        if (poly.size() > 0) {
                            poly.remove(0);
                        }
                        if (poly.size() > 0) {
                            poly.remove(0);
                        }
                        if (poly.size() > 0) {
                            poly.remove(poly.size() - 1);
                        }
                        if (poly.size() > 0) {
                            poly.remove(poly.size() - 1);
                        }
                        break;
                }
            }
            if (isClosed.booleanValue() === true) {
                if (poly.size() > 2) {
                    tg.Pixels = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.Point2DtoPOINT2Mapped(poly, hashMap);
                } else {
                    tg.Pixels = new java.util.ArrayList();
                }
            } else {
                if (poly.size() > 1)
                {
                    tg.Pixels = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.Point2DtoPOINT2Mapped(poly, hashMap);
                }
                else
                {
                    tg.Pixels = new java.util.ArrayList();
                }
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2._className, "ClipPolygon", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ClipPolygon", exc));
            } else {
                throw exc;
            }
        }
        return poly;
    },
    ClipPolygon2: function(polygon, clipBounds, isClosed) {
        var poly = new java.util.ArrayList();
        try {
            var addedLinePoints = 0;
            if ((isClosed).booleanValue()) {
                if (polygon.size() > 0)
                    polygon.remove(polygon.size() - 1);
                isClosed = new Boolean(true);
            } else {
                addedLinePoints = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.AddBoundaryPointsForLines(polygon, clipBounds);
            }
            poly = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.clipRight(polygon, clipBounds);
            poly = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.clipTop(poly, clipBounds);
            poly = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.clipLeft(poly, clipBounds);
            poly = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2.clipBottom(poly, clipBounds);
            if (isClosed.booleanValue() === true) {
                if (poly.size() > 0) {
                    poly.add(poly.get(0));
                }
            } else {
                switch (addedLinePoints) {
                    case 0:
                        break;
                    case 1:
                        if (poly.size() > 0) {
                            poly.remove(0);
                        }
                        if (poly.size() > 0) {
                            poly.remove(0);
                        }
                        break;
                    case 2:
                        if (poly.size() > 0) {
                            poly.remove(poly.size() - 1);
                        }
                        if (poly.size() > 0) {
                            poly.remove(poly.size() - 1);
                        }
                        break;
                    case 3:
                        if (poly.size() > 0) {
                            poly.remove(0);
                        }
                        if (poly.size() > 0) {
                            poly.remove(0);
                        }
                        if (poly.size() > 0) {
                            poly.remove(poly.size() - 1);
                        }
                        if (poly.size() > 0) {
                            poly.remove(poly.size() - 1);
                        }
                        break;
                }
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipPolygon2._className, "ClipPolygon2", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ClipPolygon2", exc));
            } else {
                throw exc;
            }
        }
        return poly;
    },
    _className: "clsClipPolygon2"
};