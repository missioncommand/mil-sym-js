var armyc2 = armyc2 || {};
window.armyc2 = armyc2;
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.JavaRendererServer = armyc2.c2sd.JavaRendererServer || {};
armyc2.c2sd.JavaRendererServer.RenderMultipoints = armyc2.c2sd.JavaRendererServer.RenderMultipoints || {};
armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad = {
    AddBoundaryPointsForLines: function(polygon, clipBounds) {
        var result = 0;
        try {
            var pt02d = polygon.get(0);
            var ptLast2d = polygon.get((polygon.size() - 1));
            var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt02d.getX(), pt02d.getY());
            var ptLast = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptLast2d.getX(), ptLast2d.getY());
            var nearestPt = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D();
            var clipArray = new armyc2.c2sd.graphics2d.Polygon();
            var j = 0;
            var minDist = 1.7976931348623157E308;
            var dist = 0;
            var sidePt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
            var addToFront = new Boolean(false);
            var addToEnd = new Boolean(false);
            for (j = 0; j < clipBounds.size(); j++) {
                clipArray.addPoint(Math.floor(clipBounds.get(j).getX()), Math.floor(clipBounds.get(j).getY()));
            }
            var totalX = 0;
            var totalY = 0;
            var counter = 0;
            for (j = 0; j < clipBounds.size() - 1; j++) {
                totalX += clipBounds.get(j).getX();
                totalY += clipBounds.get(j).getY();
                counter++;
            }
            if (clipBounds.get(0).getX() !== clipBounds.get(j).getX() || clipBounds.get(0).getY() !== clipBounds.get(j).getY()) {
                totalX += clipBounds.get(j).getX();
                totalY += clipBounds.get(j).getY();
                counter++;
            }
            var avgX = totalX / counter;
            var avgY = totalY / counter;
            var ptCenter = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(avgX, avgY);
            var ptNear = null;
            if (clipArray.contains(pt02d.getX(), pt02d.getY()) === false) {
                for (j = 0; j < clipBounds.size(); j++) {
                    sidePt.x = clipBounds.get(j).getX();
                    sidePt.y = clipBounds.get(j).getY();
                    dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, sidePt);
                    if (dist < minDist) {
                        minDist = dist;
                        nearestPt.setLocation(sidePt.x, sidePt.y);
                    }
                }
                ptNear = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(nearestPt.getX(), nearestPt.getY());
                ptNear = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(ptNear, ptCenter, 2);
                nearestPt.setLocation(ptNear.x, ptNear.y);
                polygon.add(0, nearestPt);
                addToFront = new Boolean(true);
            }
            nearestPt = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D();
            minDist = 1.7976931348623157E308;
            if (clipArray.contains(ptLast2d.getX(), ptLast2d.getY()) === false) {
                for (j = 0; j < clipBounds.size(); j++) {
                    sidePt.x = clipBounds.get(j).getX();
                    sidePt.y = clipBounds.get(j).getY();
                    dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(ptLast, sidePt);
                    if (dist < minDist) {
                        minDist = dist;
                        nearestPt.setLocation(sidePt.x, sidePt.y);
                    }
                }
                ptNear = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(nearestPt.getX(), nearestPt.getY());
                ptNear = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(ptNear, ptCenter, 2);
                nearestPt.setLocation(ptNear.x, ptNear.y);
                polygon.add(nearestPt);
                addToEnd = new Boolean(true);
            }
            if (addToFront.valueOf() === false && addToEnd.valueOf() === false) {
                result = 0;
            } else if (addToFront.valueOf() === true && addToEnd.valueOf() === false) {
                result = 1;
            } else if (addToFront.valueOf() === false && addToEnd.valueOf() === true) {
                result = 2;
            } else if (addToFront.valueOf() === true && addToEnd.valueOf() === true) {
                result = 3;
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad._className, "AddBoundaryPointsForLines", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside AddBoundaryPointsForLines", exc));
            } else {
                throw exc;
            }
        }
        return result;
    },
    CalcTrueIntersectDouble: function(m1, b1, m2, b2, bolVertical1, bolVertical2, X1, X2) {
        var ptIntersect = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(X1, X2);
        try {
            var x = 0;
            var y = 0;
            if (bolVertical1 === 0 && bolVertical2 === 0)
                return ptIntersect;
            if (bolVertical1 === 0 && bolVertical2 === 1) {
                ptIntersect.setLocation(X1, m2 * X1 + b2);
                return ptIntersect;
            }
            if (bolVertical1 === 1 && bolVertical2 === 0) {
                ptIntersect.setLocation(X2, m1 * X2 + b1);
                return ptIntersect;
            }
            if (m1 !== m2) {
                x = (b2 - b1) / (m1 - m2);
                y = (m1 * x + b1);
                ptIntersect.setLocation(x, y);
                return ptIntersect;
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad._className, "CalcTrueIntersectDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside CalcTrueIntersectDouble", exc));
            } else {
                throw exc;
            }
        }
        return ptIntersect;
    },
    intersectPoint2: function(previous, current, currentEdge) {
        var ptIntersect = null;
        try {
            var ll = currentEdge.getP1();
            var ul = currentEdge.getP2();
            //if (Math.abs(current.getX() - previous.getX())<1)
            if (current.getX() === previous.getX())
                current.setLocation(current.getX() + 1, current.getY());
            var m1 = (ul.getY() - ll.getY()) / (ul.getX() - ll.getX());
            var m2 = (current.getY() - previous.getY()) / (current.getX() - previous.getX());
            var b1 = ul.getY() - m1 * ul.getX();
            var b2 = current.getY() - m2 * current.getX();
            ptIntersect = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad.CalcTrueIntersectDouble(m1, b1, m2, b2, 1, 1, 0, 0);
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad._className, "intersectPoint2", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside intersectPoint2", exc));
            } else {
                throw exc;
            }
        }
        return ptIntersect;
    },
    clipSide: function(tg, pts, index, clipBounds) {
        var ptsResult = null;
        try {
            var pt1 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(clipBounds.get(index).getX(), clipBounds.get(index).getY());
            var pt2 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(clipBounds.get(index + 1).getX(), clipBounds.get(index + 1).getY());
            var clipBoundsPoint = null;
            var ptClipBoundsIntersect = null;
            var m1 = 0;
            var m2 = 0;
            var b1 = 0;
            var b2 = 0;
            var b3 = 0;
            var b4 = 0;
            var ptPreviousIntersect = null;
            var ptCurrentIntersect = null;
            var j = 0;
            var clipBoundsQuadrant = -1;
            var previousQuadrant = -1;
            var currentQuadrant = -1;
            var current = null;
            var previous = null;
            var intersectPt = null;
            var edge;
            ptsResult = new java.util.ArrayList();
            if (index === 0) {
                clipBoundsPoint = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(clipBounds.get(index + 2).getX(), clipBounds.get(index + 2).getY());
            } else if (index > 1) {
                clipBoundsPoint = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(clipBounds.get(index - 2).getX(), clipBounds.get(index - 2).getY());
            } else if (index === 1) {
                clipBoundsPoint = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(clipBounds.get(0).getX(), clipBounds.get(0).getY());
            }
            //if (pt2.getX() === pt1.getX())
            if (Math.abs(pt2.getX() - pt1.getX())<1)
                pt2.setLocation(pt2.getX() + 1, pt2.getY());
            //if (pt2.getY() === pt1.getY())
            if (Math.abs(pt2.getY() - pt1.getY())<1)
                pt2.setLocation(pt2.getX(), pt2.getY() + 1);
            for (j = 0; j < pts.size(); j++) {
                current = pts.get(j);
                if (j === 0) {
                    previous = pts.get(pts.size() - 1);
                } else {
                    previous = pts.get(j - 1);
                }
                m1 = (pt2.getY() - pt1.getY()) / (pt2.getX() - pt1.getX());
                m2 = -1.0 / m1;
                b1 = pt2.getY() - m1 * pt2.getX();
                b2 = previous.getY() - m2 * previous.getX();
                b3 = current.getY() - m2 * current.getX();
                b4 = clipBoundsPoint.getY() - m2 * clipBoundsPoint.getX();
                ptPreviousIntersect = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad.CalcTrueIntersectDouble(m1, b1, m2, b2, 1, 1, 0, 0);
                ptCurrentIntersect = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad.CalcTrueIntersectDouble(m1, b1, m2, b3, 1, 1, 0, 0);
                ptClipBoundsIntersect = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad.CalcTrueIntersectDouble(m1, b1, m2, b4, 1, 1, 0, 0);
                clipBoundsQuadrant = armyc2.c2sd.JavaLineArray.lineutility.GetQuadrantDouble(clipBoundsPoint.getX(), clipBoundsPoint.getY(), ptClipBoundsIntersect.getX(), ptClipBoundsIntersect.getY());
                previousQuadrant = armyc2.c2sd.JavaLineArray.lineutility.GetQuadrantDouble(previous.getX(), previous.getY(), ptPreviousIntersect.getX(), ptPreviousIntersect.getY());
                currentQuadrant = armyc2.c2sd.JavaLineArray.lineutility.GetQuadrantDouble(current.getX(), current.getY(), ptCurrentIntersect.getX(), ptCurrentIntersect.getY());
                if (previousQuadrant === clipBoundsQuadrant && currentQuadrant === clipBoundsQuadrant)
                    ptsResult.add(current);
                else if (previousQuadrant === clipBoundsQuadrant && currentQuadrant !== clipBoundsQuadrant) {
                    edge = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setLine2D(pt1, pt2);
                    intersectPt = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad.intersectPoint2(previous, current, edge);
                    if (intersectPt !== null) {
                        ptsResult.add(intersectPt);
                    }
                    tg.set_WasClipped(true);
                } else if (previousQuadrant !== clipBoundsQuadrant && currentQuadrant === clipBoundsQuadrant) {
                    edge = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setLine2D(pt1, pt2);
                    intersectPt = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad.intersectPoint2(previous, current, edge);
                    if (intersectPt !== null) {
                        ptsResult.add(intersectPt);
                    }
                    ptsResult.add(current);
                    tg.set_WasClipped(true);
                } else if (previousQuadrant !== clipBoundsQuadrant && currentQuadrant !== clipBoundsQuadrant)
                    continue;
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad._className, "clipSide", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside clipSide", exc));
            } else {
                throw exc;
            }
        }
        return ptsResult;
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
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad._className, "addAbatisFill", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside addAbatisFill", exc));
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
                return shapes;
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
                    return armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad.fillDMA(tg, clipBounds);
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
            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad.closeAreaTG(tg2);
            if (clipBounds !== null)
                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad.ClipPolygon(tg2, clipBounds);
            if (tg2.Pixels === null || tg2.Pixels.isEmpty())
                return null;
            var j = 0;
            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
            shape.setFillColor(tg.get_FillColor());
            shape.moveTo(tg2.Pixels.get(0));
            for (j = 1; j < tg2.Pixels.size (); j++)
                shape.lineTo(tg2.Pixels.get(j));

            if (tg.get_FillColor() !== null || tg.get_FillColor().getAlpha() > 1) {
                shapes.add(shape);
            } else
                return null;
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad._className, "LinesWithFill", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside LinesWithFill", exc));
            } else {
                throw exc;
            }
        }
        return shapes;
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
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad._className, "closeAreaTG", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside closeAreaTG", exc));
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
//            if (tg.LatLongs !== null)
//                n = tg.LatLongs.size();
//            else
                n = tg.Pixels.size();
            for (j = 0; j < n; j++)
                tg2.Pixels.add(tg.Pixels.get(j));

            armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad.closeAreaTG(tg2);
            if (clipBounds !== null)
                armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad.ClipPolygon(tg2, clipBounds);
            if (tg2.Pixels === null || tg2.Pixels.isEmpty())
                return shapes;
            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
            shape.setFillColor(tg.get_FillColor());
            shape.moveTo(tg2.Pixels.get(0));
            for (j = 1; j < tg2.Pixels.size (); j++)
                shape.lineTo(tg2.Pixels.get(j));

            shapes.add(shape);
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad._className, "fillDMA", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside fillDMA", exc));
            } else {
                throw exc;
            }
        }
        return shapes;
    },
    isClosed: function(pts) {
        var closed = false;
        var pt0 = pts.get(0);
        var ptLast = pts.get(pts.size() - 1);
        if (pt0.x === ptLast.x && pt0.y === ptLast.y) {
            closed = true;
            return true;
        }
        return false;
    },
    ClipPolygon: function(tg, clipBounds) {
        var poly = new java.util.ArrayList();
        try {
            //var isClosed = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad.isClosed(tg.Pixels);
            var isClosed = armyc2.c2sd.JavaTacticalRenderer.clsUtility.isClosedPolygon(tg.get_LineType());
            clipBounds = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.expandPolygon(clipBounds, 20);
            var polygon = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.POINT2toPoint2D(tg.Pixels);
            var j = 0;
            var hashMap = new java.util.HashMap();
            for (j = 0; j < polygon.size (); j++)
                hashMap.put(Integer.toString(j), polygon.get(j));

            var clipBoundsPtStart = clipBounds.get(0);
            var clipBoundsPtEnd = clipBounds.get(clipBounds.size() - 1);
            if (clipBoundsPtStart.getX() !== clipBoundsPtEnd.getX() || clipBoundsPtStart.getY() !== clipBoundsPtEnd.getY())
                clipBounds.add(clipBoundsPtStart);
            var addedLinePoints = 0;
            if (isClosed.valueOf() === true)
                polygon.remove(polygon.size() - 1);
            else {
                addedLinePoints = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad.AddBoundaryPointsForLines(polygon, clipBounds);
            }
            for (j = 0; j < clipBounds.size() - 1; j++) {
                if (j === 0)
                    poly = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad.clipSide(tg, polygon, j, clipBounds);
                else
                    poly = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad.clipSide(tg, poly, j, clipBounds);
            }
            if (isClosed.valueOf() === true) {
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
            if (isClosed.valueOf() === true) {
                if (poly.size() > 2) {
                    tg.Pixels = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.Point2DtoPOINT2Mapped(poly, hashMap);
                } else {
                    tg.Pixels = new java.util.ArrayList();
                }
            } else {
                if (poly.size() > 1) {
                    tg.Pixels = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityCPOF.Point2DtoPOINT2Mapped(poly, hashMap);
                } else {
                    tg.Pixels = new java.util.ArrayList();
                }
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsClipQuad._className, "ClipPolygon", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ClipPolygon", exc));
            } else {
                throw exc;
            }
        }
        return poly;
    },
    _className: "clsClipQuad"
};