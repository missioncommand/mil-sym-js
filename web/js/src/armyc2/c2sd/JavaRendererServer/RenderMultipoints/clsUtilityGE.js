var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.JavaRendererServer = armyc2.c2sd.JavaRendererServer || {};
armyc2.c2sd.JavaRendererServer.RenderMultipoints = armyc2.c2sd.JavaRendererServer.RenderMultipoints || {};
armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE = {
    setSplineLinetype: function(tg) {
        switch (tg.get_LineType()) {
            case 22623000:
                tg.set_LineType(22623001);
                break;
            case 22612000:
                tg.set_LineType(22612001);
                break;
            case 32164000:
                tg.set_LineType(32164001);
                break;
            case 32163000:
                tg.set_LineType(32163001);
                break;
            case 32156000:
                tg.set_LineType(32156001);
                break;
            case 32162000:
                tg.set_LineType(32162001);
                break;
            case 32610000:
                tg.set_LineType(32610001);
                break;
            case 31430000:
                tg.set_LineType(31430001);
                break;
            case 31440000:
                tg.set_LineType(31440001);
                break;
            case 32273000:
                tg.set_LineType(32273001);
                break;
            case 32272000:
                tg.set_LineType(32272001);
                break;
            case 32234300:
                tg.set_LineType(32234301);
                break;
            case 32234200:
                tg.set_LineType(32234201);
                break;
            case 32234100:
                tg.set_LineType(32234101);
                break;
            case 32233700:
                tg.set_LineType(32233701);
                break;
            case 32233600:
                tg.set_LineType(32233601);
                break;
            case 32231700:
                tg.set_LineType(32231701);
                break;
            case 32221000:
                tg.set_LineType(32221001);
                break;
            case 32213000:
                tg.set_LineType(32213001);
                break;
            case 32212000:
                tg.set_LineType(32212001);
                break;
            case 32161000:
                tg.set_LineType(32161001);
                break;
            case 32155000:
                tg.set_LineType(32155001);
                break;
            case 32154000:
                tg.set_LineType(32154001);
                break;
            case 31830000:
                tg.set_LineType(31830001);
                break;
            case 31820000:
                tg.set_LineType(31820001);
                break;
            case 31810000:
                tg.set_LineType(31810001);
                break;
            case 31850000:
                tg.set_LineType(31850001);
                break;
            case 31840000:
                tg.set_LineType(31840001);
                break;
            case 31860000:
                tg.set_LineType(31860001);
                break;
            default:
                break;
        }
        return;
    },
    createDashedPolylines: function(tg, polylines, shape) {
        try {
            if(tg.get_UseDashArray()===true)
                return polylines;
            if (shape.getLineColor() === null)
                return polylines;

            var dashedPolylines = new java.util.ArrayList();
            var s = shape.getStroke();
            var dash = s.getDashArray();
            var lineThickness = tg.get_LineThickness();
            if (dash === null || dash.length < 2)
                return polylines;
            if (dash.length === 8) {
                dash = Clazz.newArray(2, 0);
                dash[0] = 2;
                dash[1] = 2;
                s = new armyc2.c2sd.graphics2d.BasicStroke(2, 1, 0, 2, dash, 0);
                shape.setStroke(s);
            }
            if (dash.length === 4) {
                if (dash[0] === lineThickness * 2 && dash[1] === lineThickness * 2 && dash[2] === lineThickness * 2 && dash[3] === lineThickness * 2) {
                    dash = Clazz.newArray(2, 0);
                    dash[0] = lineThickness;
                    dash[1] = lineThickness;
                }
            }
            var j = 0;
            var k = 0;
            var i = 0;
            var l = 0;
            var n = 0;
            var polyline = null;
            var dashedPolyline = null;
            var pt2d0 = null;
            var pt2d1 = null;
            var pt2d2 = null;
            var pt2d3 = null;
            var pt0 = null;
            var pt1 = null;
            var pt2 = null;
            var pt3 = null;
            var dist = 0;
            var patternLength = 0;
            var numSegments = 0;
            for (j = 0; j < dash.length; j++)
                patternLength += dash[j];

            var sum = Clazz.newArray(dash.length, 0);
            var remainder = 0;
            var linetype = tg.get_LineType();
            for (j = 0; j < sum.length; j++) {
                for (k = 0; k <= j; k++) {
                    sum[j] += dash[k];
                }
            }
            var noShortSegments = false;
            switch (linetype) {
                case 24250000:
                case 24211000:
                case 24260000:
                case 231116000:
                case 231115000:
                case 231114000:
                case 231113000:
                case 231112000:
                case 231111000:
                    noShortSegments = true;
                    break;
                default:
                    break;
            }
            for (j = 0; j < polylines.size(); j++)
            {
                polyline = polylines.get(j);
                for (k = 0; k < polyline.size() - 1; k++)
                {
                    pt2d0 = polyline.get(k);
                    pt2d1 = polyline.get(k + 1);
                    pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2d0.getX(), pt2d0.getY());
                    pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2d1.getX(), pt2d1.getY());
                    dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
                    numSegments = Math.floor((dist / patternLength));
                    if (noShortSegments)
                        if (dist < 25)
                            numSegments = 1;
                    for (l = 0; l < numSegments; l++)
                    {
                        for (i = 0; i < dash.length; i++)
                        {
                            if (i % 2 === 0)
                            {
                                dashedPolyline = new java.util.ArrayList();
                                if (i === 0)
                                    pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble2(pt0, pt1, l * patternLength);
                                else
                                    pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble2(pt0, pt1, l * patternLength + sum[i - 1]);
                                pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble2(pt0, pt1, l * patternLength + sum[i]);
                                pt2d2 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(pt2.x, pt2.y);
                                pt2d3 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(pt3.x, pt3.y);
                                dashedPolyline.add(pt2d2);
                                dashedPolyline.add(pt2d3);
                                dashedPolylines.add(dashedPolyline);
                            }
                        }
                    }
                    remainder = dist - numSegments * patternLength;
                    if (remainder > 0)
                    {
                        dashedPolyline = new java.util.ArrayList();
                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble2(pt0, pt1, numSegments * patternLength + remainder / 2);
                        pt2d2 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(pt2.x, pt2.y);
                        dashedPolyline.add(pt2d2);
                        dashedPolyline.add(pt2d1);
                        dashedPolylines.add(dashedPolyline);
                    }
                }
            }
            return dashedPolylines;
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE._className, "createDashedPolylines", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside createDashedPolylines", exc));
            } else {
                throw exc;
            }
        }
    },
    createSimpleFillShape: function(tg, shape, polylines) {
        try {
            var s = shape.getStroke();
            var dash = s.getDashArray();
            if (armyc2.c2sd.JavaTacticalRenderer.clsUtility.isClosedPolygon(tg.get_LineType()) === false)
                if (armyc2.c2sd.JavaTacticalRenderer.clsUtility.IsChange1Area(tg.get_LineType(), null) === false)
                {
                    return null;
                }
            if (dash === null || dash.length < 2)
                return null;
            if(shape.getFillColor()===null)
                return null;
            var j = 0;
            var k = 0;
            var shape2 = new armyc2.c2sd.renderer.utilities.ShapeInfo(shape.getShape());
            shape2.setShapeType(armyc2.c2sd.renderer.utilities.ShapeInfo.SHAPE_TYPE_FILL);
            var polylines2 = new java.util.ArrayList();
            var polyline = null;
            var polyline2 = null;
            var pt2d = null;
            s = new armyc2.c2sd.graphics2d.BasicStroke(0);
            shape2.setStroke(s);
            shape2.setFillColor(shape.getFillColor());
            for (j = 0; j < polylines.size(); j++)
            {
                polyline = polylines.get(j);
                polyline2 = new java.util.ArrayList();
                for (k = 0; k < polyline.size(); k++)
                {
                    pt2d = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(polyline.get(k).getX(), polyline.get(k).getY());
                    polyline2.add(pt2d);
                }
                polylines2.add(polyline2);
            }
            shape.setShapeType(armyc2.c2sd.renderer.utilities.ShapeInfo.SHAPE_TYPE_POLYLINE);
            shape.setFillColor(null);
            shape2.setPolylines(polylines2);
            shape2.setAffineTransform(new armyc2.c2sd.graphics2d.AffineTransform());
            return shape2;
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE._className, "createSimpleFillShape", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside createSimpleFillShape", exc));
            } else {
                throw exc;
            }
        }
        return null;
    },
    allowFillForThese: function(tg) {
        try {
            var linetype = tg.get_LineType();
            var bolMETOC = armyc2.c2sd.JavaTacticalRenderer.clsMETOC.IsWeather(tg.get_SymbolId());
            if (bolMETOC >= 0)
                return true;
            switch (linetype) {
                case 15000001:
                case 15000003:
                case 21700000:
                case 21700000:
                case 21710000:
                case 22320000:
                case 22521100:
                case 22521200:
                case 22521300:
                case 22521410:
                case 22521420:
                case 22139000:
                case 243112000:
                case 243111000:
                case 23172000:
                case 23173000:
                case 23174000:
                case 23200001:
                case 23211000:
                case 23131200:
                case 23132000:
                case 23223000:
                case 23212000:
                case 23213000:
                case 32214000:
                    return true;
                default:
                    return false;
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE._className, "allowFillForThese", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside allowFillForThese", exc));
            } else {
                throw exc;
            }
        }
        return false;
    },
    SetShapeInfosPolylines: function(tg, shapeInfos, clipBounds) {
        try {
            var j = 0;
            var shape = null;
            var shapeInfo = null;
            var polylines = null;
            var type = -1;
            var simpleFillShape = null;
            var isClosed = new Boolean(armyc2.c2sd.JavaTacticalRenderer.clsUtility.isClosedPolygon(tg.get_LineType()));
            var linetype = tg.get_LineType();
            var fillColor = null;
            for (j = 0; j < shapeInfos.size(); j++) {
                shapeInfo = shapeInfos.get(j);
                type = shapeInfo.getShapeType();
                shape = shapeInfo.getShape();
                if (isClosed.valueOf() === false && type !== armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL)
                {
                    polylines = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.createRenderablesFromShape(tg, shape, type, clipBounds);
                }
                else
                {
                    polylines = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.createRenderablesFromShape(tg, shape, type, null);
                }
                if (simpleFillShape === null)
                {
                    simpleFillShape = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.createSimpleFillShape(tg, shapeInfo, polylines);
                }
                fillColor = shapeInfo.getFillColor();
                //if (simpleFillShape !== null || fillColor !== null)
                if (simpleFillShape !== null)
                    if (armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.allowFillForThese(tg) === false)
                        shapeInfo.setFillColor(null);
                polylines = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.createDashedPolylines(tg, polylines, shapeInfo);
                shapeInfo.setPolylines(polylines);
                //fillColor = shapeInfo.getFillColor();
            }
            if (simpleFillShape !== null)
            {
                shapeInfos.add(0, simpleFillShape);
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE._className, "SetShapeInfosPolylines", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside SetShapeInfosPolylines", exc));
            } else {
                throw exc;
            }
        }
    },
    createRenderablesFromShape: function(tg, shape, shapeType, clipArea) {
        var ptsPoly = new java.util.ArrayList();
        var polylines2 = new java.util.ArrayList();
        var ptPoly = null;
        try {
            var coords = Clazz.newArray(6, 0);
            var clipBounds = null;
            var clipPoints = null;
            var pt2d = null;
            if (clipArea !== null) {
                if (clipArea instanceof armyc2.c2sd.graphics2d.Rectangle2D)
                    clipBounds = clipArea;
                else if (clipArea instanceof armyc2.c2sd.graphics2d.Rectangle)
                    clipBounds = clipArea;
                else if (clipArea instanceof java.util.ArrayList)
                    clipPoints = clipArea;
            }
            for (var i = shape.getPathIterator(null); !i.isDone(); i.next()) {
                var type = i.currentSegment(coords);
                switch (type) {
                    case 0:
                        if (ptsPoly.size() > 0)
                        {
                            if (shapeType === armyc2.c2sd.renderer.utilities.ShapeInfo.SHAPE_TYPE_FILL)
                            {
                                if (ptsPoly[ptsPoly.length - 1].getX() !== ptsPoly[0].getX() || ptsPoly[ptsPoly.length - 1].getY() !== ptsPoly[0].getY())
                                {
                                    pt2d = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(ptsPoly[0].getX(), ptsPoly[0].getY());
                                    ptsPoly.add(pt2d)
                                }
                            }
                            if(ptsPoly.size()>1)
                                polylines2.add(ptsPoly);
                        }
                        ptsPoly = new java.util.ArrayList();
                        ptPoly = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(coords[0], coords[1]);
                        ptsPoly.add(ptPoly);
                        break;
                    case 1:
                        ptPoly = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(coords[0], coords[1]);
                        ptsPoly.add(ptPoly);
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                }
            }
            if (ptsPoly.size() > 1)
            {
                if (shapeType === armyc2.c2sd.renderer.utilities.ShapeInfo.SHAPE_TYPE_FILL)
                {
                    if (ptsPoly.get(ptsPoly.size() - 1).getX() !== ptsPoly.get(0).getX() || ptsPoly.get(ptsPoly.size() - 1).getY() !== ptsPoly.get(0).getY())
                    {
                        pt2d = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(ptsPoly.get(0).getX(), ptsPoly.get(0).getY());
                        ptsPoly.add(pt2d);
                    }
                }
                polylines2.add(ptsPoly);
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE._className, "createRenderableFromShape", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside createRenderableFromShape", exc));
            } else {
                throw exc;
            }
        }
        return polylines2;
    },
    expandPolygon: function(pts, expand) {
        var lgPoly = null;
        try {
            var j = 0;
            var destPts = null;
            var isClosed = false;
            if (pts.get(pts.size() - 1).getX() === pts.get(0).getX() && pts.get(pts.size() - 1).getY() === pts.get(0).getY()) {
                pts.remove(pts.size() - 1);
                isClosed = true;
            }
            var pts2 = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtility.Points2DToPOINT2(pts);
            var pt0 = null;
            var pt1 = null;
            var pt2 = null;
            var pt3 = null;
            var m = 0;
            var m1 = 0;
            var b = 0;
            var b1 = 0;
            var lineSegments = new java.util.ArrayList();
            for (j = 0; j < pts2.size() - 1; j++) {
                pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts2.get(j));
                pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts2.get(j + 1));
                if (pt0.x === pt1.x) {
                    pt1.x += 1;
                    pts2.set(j + 1, pt1);
                }
            }
            var ptn = pts2.get(pts2.size() - 1);
            pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts2.get(0));
            if (ptn.x === pt0.x) {
                ptn.x += 1;
                pts2.set(pts2.size() - 1, ptn);
            }
            pts2.add(pt0);

            var poly = new armyc2.c2sd.graphics2d.Polygon();
            for (j = 0; j < pts2.size (); j++)
                poly.addPoint(Math.floor(pts2.get(j).x), Math.floor(pts2.get(j).y));

            var lineSegment = null;
            var midPt = null;
            for (j = 0; j < pts2.size() - 1; j++) {
                pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts2.get(j));
                pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts2.get(j + 1));
                m = (pt0.y - pt1.y) / (pt0.x - pt1.x);
                if (Math.abs(m) < 1) {
                    pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt0, armyc2.c2sd.JavaLineArray.lineutility.extend_above, expand);
                    pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt1, armyc2.c2sd.JavaLineArray.lineutility.extend_above, expand);
                    midPt = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt2, pt3, 0);
                    if (poly.contains(midPt.x, midPt.y)) {
                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt0, armyc2.c2sd.JavaLineArray.lineutility.extend_below, expand);
                        pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt1, armyc2.c2sd.JavaLineArray.lineutility.extend_below, expand);
                    }
                } else {
                    pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt0, armyc2.c2sd.JavaLineArray.lineutility.extend_left, expand);
                    pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt1, armyc2.c2sd.JavaLineArray.lineutility.extend_left, expand);
                    midPt = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt2, pt3, 0);
                    if (poly.contains(midPt.x, midPt.y)) {
                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt0, armyc2.c2sd.JavaLineArray.lineutility.extend_right, expand);
                        pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt1, armyc2.c2sd.JavaLineArray.lineutility.extend_right, expand);
                    }
                }
                lineSegment = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setLine2D(pt2.x, pt2.y, pt3.x, pt3.y);
                lineSegments.add(lineSegment);
            }
            var expandPts = new java.util.ArrayList();
            var thisLine = null;
            var nextLine = null;
            var x1 = 0;
            var y1 = 0;
            var x2 = 0;
            var y2 = 0;
            var x = 0;
            var y = 0;
            for (j = 0; j < lineSegments.size(); j++) {
                thisLine = lineSegments.get(j);
                x1 = thisLine.getX1();
                y1 = thisLine.getY1();
                x2 = thisLine.getX2();
                y2 = thisLine.getY2();
                m = (y1 - y2) / (x1 - x2);
                b = y1 - m * x1;
                if (j === lineSegments.size() - 1)
                    nextLine = lineSegments.get(0);
                else
                    nextLine = lineSegments.get(j + 1);
                x1 = nextLine.getX1();
                y1 = nextLine.getY1();
                x2 = nextLine.getX2();
                y2 = nextLine.getY2();
                m1 = (y1 - y2) / (x1 - x2);
                b1 = y1 - m1 * x1;
                if (m !== m1) {
                    x = (b1 - b) / (m - m1);
                    y = (m * x + b);
                } else {
                    x = thisLine.getX2();
                    y = thisLine.getY2();
                }
                expandPts.add(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x, y));
            }
            lgPoly = new java.util.ArrayList();
            for (j = 0; j < expandPts.size (); j++)
                lgPoly.add(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(expandPts.get(j).x, expandPts.get(j).y));

            if (isClosed)
                lgPoly.add(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(lgPoly.get(0).getX(), lgPoly.get(0).getY()));
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE._className, "expandPolygon2", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside expandPolygon2", exc));
            } else {
                throw exc;
            }
        }
        return lgPoly;
    },
    expandPolygon2: function(pts, expandX, expandY) {
        var lgPoly = null;
        try {
            var at = new armyc2.c2sd.graphics2d.AffineTransform();
            at.setToIdentity();
            var avgX = 0;
            var avgY = 0;
            var totalX = 0;
            var totalY = 0;
            var j = 0;
            var isClosed = false;
            if (pts.get(pts.size() - 1).getX() === pts.get(0).getX() && pts.get(pts.size() - 1).getY() === pts.get(0).getY()) {
                pts.remove(pts.size() - 1);
                isClosed = true;
            }
            for (j = 0; j < pts.size(); j++) {
                totalX += pts.get(j).getX();
                totalY += pts.get(j).getY();
            }
            avgX = totalX / pts.size();
            avgY = totalY / pts.size();
            var srcPts = new Array(pts.size());
            for (j = 0; j < pts.size(); j++) {
                srcPts[j] = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(pts.get(j).getX(), pts.get(j).getY());
            }
            var destPts = new Array(pts.size());
            at.translate(-avgY, -avgY);
            at.transform(srcPts, 0, destPts, 0, srcPts.length);
            at.setToIdentity();
            at.scale(expandX, expandY);
            at.transform(destPts, 0, destPts, 0, destPts.length);
            at.setToIdentity();
            at.translate(avgY, avgY);
            at.transform(destPts, 0, destPts, 0, destPts.length);
            lgPoly = new java.util.ArrayList();
            for (j = 0; j < destPts.length; j++) {
                lgPoly.add(destPts[j]);
            }
            if (isClosed)
                lgPoly.add(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(destPts[0].getX(), destPts[0].getY()));
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE._className, "expandPolygon", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside expandPolygon", exc));
            } else {
                throw exc;
            }
        }
        return lgPoly;
    },
    removeTrailingPoints: function(tg, clipArea) {
        try {
            var isClosed = armyc2.c2sd.JavaTacticalRenderer.clsUtility.isClosedPolygon(tg.get_LineType());
            if (isClosed)
                return;
            var poly = new armyc2.c2sd.graphics2d.Polygon();
            var area = null;
            var clipBounds = null;
            var clipPoints = null;
            var j = 0;
            if (clipArea === null)
                return;

            if (clipArea instanceof armyc2.c2sd.graphics2d.Rectangle2D)
                clipBounds = clipArea;
            else if (clipArea instanceof armyc2.c2sd.graphics2d.Rectangle)
                clipBounds = clipArea;
            else if (clipArea instanceof java.util.ArrayList)
                clipPoints = clipArea;

            if (clipBounds !== null) {
                clipPoints = new java.util.ArrayList();
                clipPoints.add(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(clipBounds.getX(), clipBounds.getY()));
                clipPoints.add(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(clipBounds.getX() + clipBounds.getWidth(), clipBounds.getY()));
                clipPoints.add(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(clipBounds.getX() + clipBounds.getWidth(), clipBounds.getY() + clipBounds.getHeight()));
                clipPoints.add(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(clipBounds.getX(), clipBounds.getY() + clipBounds.getHeight()));
                clipPoints.add(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(clipBounds.getX(), clipBounds.getY()));
            }
            var ptLast = clipPoints.get(clipPoints.size() - 1);
            var pt02d = clipPoints.get(0);
            if (pt02d.getX() !== ptLast.getX() || pt02d.getY() !== ptLast.getY()) {
                clipPoints.add(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setPoint2D(pt02d.getX(), pt02d.getY()));
            }
            for (j = 0; j < clipPoints.size(); j++) {
                pt02d = clipPoints.get(j);
                poly.addPoint(Math.floor(pt02d.getX()), Math.floor(pt02d.getY()));
            }
            area = new armyc2.c2sd.graphics2d.Area(poly);
            var line = null;
            var pt0 = null;
            var pt1 = null;
            var intersects = false;
            var frontIndex = 0;
            var backIndex = tg.Pixels.size() - 1;
            for (j = 0; j < tg.Pixels.size() - 1; j++)
            {
                pt0 = tg.Pixels.get(j);
                pt1 = tg.Pixels.get(j + 1);
                line = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setLine2D(pt0.x, pt0.y, pt1.x, pt1.y);
                intersects = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.lineIntersectsClipArea(line, clipPoints);
                if (intersects === true) {
                    frontIndex = j;
                    break;
                } else if (area.containsPt2(Math.floor(pt0.x), Math.floor(pt0.y)) || area.containsPt2(Math.floor(pt1.x), Math.floor(pt1.y))) {
                    frontIndex = j;
                    break;
                }
            }
            for (j = tg.Pixels.size() - 1; j > 0; j--) {
                pt0 = tg.Pixels.get(j);
                pt1 = tg.Pixels.get(j - 1);
                line = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setLine2D(pt0.x, pt0.y, pt1.x, pt1.y);
                intersects = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.lineIntersectsClipArea(line, clipPoints);
                if (intersects === true) {
                    backIndex = j;
                    break;
                } else if (area.containsPt2(Math.floor(pt0.x), Math.floor(pt0.y)) || area.containsPt2(Math.floor(pt1.x), Math.floor(pt1.y))) {
                    backIndex = j;
                    break;
                }
            }
            var pts = new java.util.ArrayList();
            for (j = frontIndex; j <= backIndex; j++) {
                pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tg.Pixels.get(j));
                pts.add(pt0);
            }
            tg.Pixels = pts;
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException("clsRenderer", "removeTrailingPoints", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside removeTrailingPoints", exc));
            } else {
                throw exc;
            }
        }
    },
    lineIntersectsClipArea: function(line, clipPts) {
        var result = false;
        try {
            var j = 0;
            var poly = new armyc2.c2sd.graphics2d.Polygon();
            for (j = 0; j < clipPts.size (); j++)
                poly.addPoint(Math.floor(clipPts.get(j).x), Math.floor(clipPts.get(j).y));

            if (poly.contains(line.x1, line.y1))
                return true;
            if (poly.contains(line.x2, line.y2))
                return true;

            var currentSegment = null;
            for (j = 0; j < clipPts.size() - 1; j++) {
                currentSegment = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setLine2D(clipPts.get(j).getX(), clipPts.get(j).getY(), clipPts.get(j + 1).getX(), clipPts.get(j + 1).getY());
                if (line.intersectsLine(currentSegment) === true)
                    return true;
            }
            var pt0 = clipPts.get(0);
            var ptLast = clipPts.get(clipPts.size() - 1);
            if (pt0.getX() !== ptLast.getX() || pt0.getY() !== ptLast.getY()) {
                currentSegment = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.setLine2D(ptLast.getX(), ptLast.getY(), pt0.getX(), pt0.getY());
                if (line.intersectsLine(currentSegment) === true)
                    return true;
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE._className, "lineIntersectsClipArea", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside lineIntersectsClipArea", exc));
            } else {
                throw exc;
            }
        }
        return result;
    },
    buildHatchFills2: function(tg, shapes) {
        try {
            if(shapes===null || shapes.size()===0)
                return;
            
            var lineType = tg.get_LineType();
            var hatch = tg.get_FillStyle();
            var symbolID = tg.get_SymbolId();
            var j = 0;
            var hatch2 = 0;
            var shape2 = null;
            var index = 0;
            if (armyc2.c2sd.JavaTacticalRenderer.clsUtility.isClosedPolygon(lineType) === false)
                if (armyc2.c2sd.JavaTacticalRenderer.clsUtility.IsChange1Area(lineType, null) === false)
                    return;
            switch (lineType) {
                case 24324100:
                case 24324300:
                case 24324200:
                case 24352000:
                case 24362000:
                case 24353000:
                case 24363000:
                case 24351000:
                case 24361000:
                case 23450000:
                case 23460000:
                case 23440000:
                case 22235000:
                case 23115000:
                    hatch = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.Hatch_BackwardDiagonal;
                    break;
                case 221310000:
                    hatch = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.Hatch_ForwardDiagonal;
                    break;
                default:
                    if (hatch <= 0)
                        return;
                    break;
            }
            for (j = 0; j < shapes.size(); j++) {
                shape2 = shapes.get(j);
                hatch2 = shape2.get_FillStyle();
                if (hatch2 === hatch) {
                    index = j;
                    break;
                }
            }
            var hatchLineThickness=Math.round(tg.get_LineThickness()/2);
            for (var k = 0; k < shapes.size(); k++) {
                var shape = null;
                if (lineType === 243111000 || lineType === 243112000) {
                    shape = shapes.get(k);
                    shape2 = shapes.get(k);
                    hatch = shape2.get_FillStyle();
                } else
                    shape = shapes.get(index);
                if (hatch < armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.Hatch_ForwardDiagonal)
                    continue;
                
                if (hatch !== armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.Hatch_Cross)
                {
                    shape = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.buildHatchFill2(shape, hatch);
                    //shape.setStroke(new armyc2.c2sd.graphics2d.BasicStroke(1));
                    shape.setStroke(new armyc2.c2sd.graphics2d.BasicStroke(hatchLineThickness));
                    shape.setLineColor(tg.get_LineColor());
                    shapes.add(shape);
                } else {
                    var shapeBk = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.buildHatchFill2(shape, armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.Hatch_BackwardDiagonal);
                    var shapeFwd = armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.buildHatchFill2(shape, armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.Hatch_ForwardDiagonal);
                    //shapeBk.setStroke(new armyc2.c2sd.graphics2d.BasicStroke(1));
                    shapeBk.setStroke(new armyc2.c2sd.graphics2d.BasicStroke(hatchLineThickness));
                    shapeBk.setLineColor(tg.get_LineColor());
                    shapes.add(shapeBk);
                    //shapeFwd.setStroke(new armyc2.c2sd.graphics2d.BasicStroke(1));
                    shapeFwd.setStroke(new armyc2.c2sd.graphics2d.BasicStroke(hatchLineThickness));
                    shapeFwd.setLineColor(tg.get_LineColor());
                    shapes.add(shapeFwd);
                }
                if (lineType !== 243111000 && lineType !== 243112000)
                    break;
            }
            switch (lineType) {
                case 23115000:
                    for (j = 0; j < shapes.size(); j++) {
                        shape = shapes.get(j);
                        var color = shape.getLineColor();
                        if (color === null) {
                            continue;
                        }
                        if (shape.getLineColor().toARGB() === 0) {
                            shapes.remove(j);
                            break;
                        }
                    }
                    break;
                default:
                    break;
            }
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE._className, "buildHatchFills", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside buildHatcHFills on symbol: " + symbolID, exc));
            } else {
                throw exc;
            }
        }
        return;
    },
    buildHatchFill2: function(shape, hatch) {
        var hatchLineShape = null;
        try {
            hatchLineShape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
            var hatchLineArea = null;
            var rect = shape.getBounds();
            var x0 = rect.getX();
            var y0 = rect.getY();
            var width = rect.getWidth();
            var height = rect.getHeight();
            if (width > height)
                height = width;
            else
                width = height;
            width *= 2;
            height *= 2;
            var horizLimit = 0;
            var vertLimit = 0;
            var j = 0;
            var vertPts = new java.util.ArrayList();
            var horizPts = new java.util.ArrayList();
            var vertPt = null;
            var horizPt = null;
            if (hatch === armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.Hatch_BackwardDiagonal) {
                horizLimit = Math.floor((width / 20.0));
                vertLimit = Math.floor((height / 20.0));
                for (j = 0; j < vertLimit; j++) {
                    vertPt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0, y0 + 20 * j);
                    vertPts.add(vertPt);
                }
                for (j = 0; j < horizLimit; j++) {
                    horizPt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0 + 20 * j, y0);
                    horizPts.add(horizPt);
                }
                hatchLineShape.moveTo(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0 - 10, y0 - 10));
                hatchLineShape.lineTo(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0, y0));
                for (j = 0; j < vertLimit; j++) {
                    if (j % 2 === 0) {
                        hatchLineShape.lineTo(vertPts.get(j));
                        hatchLineShape.lineTo(horizPts.get(j));
                    } else {
                        hatchLineShape.lineTo(horizPts.get(j));
                        hatchLineShape.lineTo(vertPts.get(j));
                    }
                }
                hatchLineShape.lineTo(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0 + width + 10, y0 + height + 10));
                hatchLineShape.lineTo(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0 + width + 20, y0 + height + 10));
                hatchLineShape.lineTo(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0 + width + 20, y0 - 10));
                hatchLineShape.lineTo(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0 - 10, y0 - 10));
            }
            if (hatch === armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.Hatch_ForwardDiagonal) {
                horizLimit = Math.floor((width / 20.0));
                vertLimit = Math.floor((height / 20.0));
                horizLimit *= 2;
                vertLimit *= 2;
                for (j = 0; j < vertLimit; j++) {
                    vertPt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0, y0 + height - 20 * j);
                    vertPts.add(vertPt);
                }
                for (j = 0; j < horizLimit; j++) {
                    horizPt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0 + 20 * j, y0 + height);
                    horizPts.add(horizPt);
                }
                hatchLineShape.moveTo(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0 - 10, y0 - 10));
                hatchLineShape.lineTo(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0, y0));
                for (j = 0; j < vertLimit; j++) {
                    if (j % 2 === 0) {
                        hatchLineShape.lineTo(vertPts.get(j));
                        hatchLineShape.lineTo(horizPts.get(j));
                    } else {
                        hatchLineShape.lineTo(horizPts.get(j));
                        hatchLineShape.lineTo(vertPts.get(j));
                    }
                }
                hatchLineShape.lineTo(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0 + width + 10, y0 + height + 10));
                hatchLineShape.lineTo(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0 + width + 20, y0 + height + 10));
                hatchLineShape.lineTo(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0 + width + 20, y0 - 10));
                hatchLineShape.lineTo(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0 - 10, y0 - 10));
            }
            if (hatch === armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.Hatch_Vertical) {
                horizLimit = Math.floor((width / 10.0));
                vertLimit = Math.floor((height / 10.0));
                for (j = 0; j < horizLimit; j++) {
                    if (j % 2 === 0) {
                        vertPt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0 + 10 * j, y0);
                        vertPts.add(vertPt);
                        vertPt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0 + 10 * j, y0 + height);
                        vertPts.add(vertPt);
                    } else {
                        vertPt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0 + 10 * j, y0 + height);
                        vertPts.add(vertPt);
                        vertPt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0 + 10 * j, y0);
                        vertPts.add(vertPt);
                    }
                }
                hatchLineShape.moveTo(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0 - 10, y0 - 10));
                hatchLineShape.lineTo(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0, y0));
                for (j = 0; j < vertLimit - 1; j++) {
                    hatchLineShape.lineTo(vertPts.get(j));
                }
                hatchLineShape.lineTo(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0 + width + 10, y0 + height + 10));
                hatchLineShape.lineTo(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0 + width + 20, y0 + height + 10));
                hatchLineShape.lineTo(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0 + width + 20, y0 - 10));
                hatchLineShape.lineTo(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0 - 10, y0 - 10));
            }
            if (hatch === armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE.Hatch_Horizontal) {
                horizLimit = Math.floor((width / 10.0));
                vertLimit = Math.floor((height / 10.0));
                for (j = 0; j < vertLimit; j++) {
                    if (j % 2 === 0) {
                        horizPt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0, y0 + 10 * j);
                        horizPts.add(horizPt);
                        horizPt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0 + width, y0 + 10 * j);
                        horizPts.add(horizPt);
                    } else {
                        horizPt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0 + width, y0 + 10 * j);
                        horizPts.add(horizPt);
                        horizPt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0, y0 + 10 * j);
                        horizPts.add(horizPt);
                    }
                }
                hatchLineShape.moveTo(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0 - 10, y0 - 10));
                hatchLineShape.lineTo(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0, y0));
                for (j = 0; j < vertLimit - 1; j++) {
                    hatchLineShape.lineTo(horizPts.get(j));
                }
                hatchLineShape.lineTo(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0 - 10, y0 + height + 10));
                hatchLineShape.lineTo(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0 - 20, y0 + height + 10));
                hatchLineShape.lineTo(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0 - 20, y0 - 10));
                hatchLineShape.lineTo(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x0 + width + 10, y0 - 10));
            }
            var shapeArea = new armyc2.c2sd.graphics2d.Area(shape.getShape());
            hatchLineArea = new armyc2.c2sd.graphics2d.Area(hatchLineShape.getShape());
            hatchLineArea.intersect(shapeArea);
            hatchLineShape.setShape(hatchLineArea);
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE._className, "buildHatchArea", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside buildHatchArea", exc));
            } else {
                throw exc;
            }
        }
        return hatchLineShape;
    },
    segmentColorsSet: function(tg) {
        try {
            switch (tg.get_LineType()) {
                case 22121000:
                case 25221000:
                case 25222000:
                    break;
                default:
                    return false;
            }
            var strH = tg.get_H();
            if (strH === null || strH.isEmpty())
                return false;
            var strs = strH.split(",");
            if (strs.length > 1)
                return true;
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE._className, "segmentColorsSet", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside segmentColorsSet", exc));
            } else {
                throw exc;
            }
        }
        return false;
    },
    setPoint2D: function() {
        var pt2d = new armyc2.c2sd.graphics2d.Point2D();
        if (arguments.length === 1)
        {
            pt2d.x = arguments[0].x;
            pt2d.y = arguments[0].y;
        }
        else if (arguments.length === 2)
        {
            pt2d.x = arguments[0];
            pt2d.y = arguments[1];
        }
        return pt2d;
    },
    setLine2D: function()
    {
        var line = new armyc2.c2sd.graphics2d.Line2D();
        if (arguments.length === 1)
        {
            var line1 = arguments[0];
            line.x1 = line1.x1;
            line.y1 = line1.y1;
            line.x2 = line1.x2;
            line.y2 = line1.y2;
        }
        else if (arguments.length === 2)
        {
            var pt1 = arguments[0];
            var pt2 = arguments[1];
            line.x1 = pt1.x;
            line.y1 = pt1.y;
            line.x2 = pt2.x;
            line.y2 = pt2.y;
        }
        else if (arguments.length === 4)
        {
            var x1 = arguments[0];
            var y1 = arguments[1];
            var x2 = arguments[2];
            var y2 = arguments[3];
            line.x1 = x1;
            line.y1 = y1;
            line.x2 = x2;
            line.y2 = y2;
        }
        return line;
    },
    getZoomFactor:function(rect, clipPoints, pixels)
    {
        var factor=-1;
        try
        {
            if(pixels===null || pixels.size()<2)
                return factor;
            if(clipPoints===null && rect===null)
                return factor;
            var maxLengthPixels=0, maxLengthClipArea=0,temp=0;
            var j=0;
            var pt2d0=null, pt2d1=null, pt0=null, pt1=null;
            for(j=0;j<pixels.size()-1;j++)
            {
               pt0=pixels.get(j);
               pt1=pixels.get(j+1);
               temp=armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
               if(temp>maxLengthPixels)
                   maxLengthPixels=temp;
            }
            temp=0;
            if(clipPoints !== null)
            {
                for(j=0;j<clipPoints.size()-1;j++)
                {
                   pt2d0=clipPoints.get(j);
                   pt2d1=clipPoints.get(j+1);
                   pt0=new armyc2.c2sd.JavaLineArray.POINT2(pt2d0.getX(),pt2d0.getY());
                   pt1=new armyc2.c2sd.JavaLineArray.POINT2(pt2d1.getX(),pt2d1.getY());
                   temp=armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
                }
            }
            else if(rect !== null)
            {
                temp=rect.getMaxX()-rect.getMinX();
                if(temp < rect.getMaxY()-rect.getMinY())
                    temp=rect.getMaxY()-rect.getMinY();
            }
            if(temp>maxLengthClipArea)
                maxLengthClipArea=temp;
            if(maxLengthPixels > 0 && maxLengthClipArea > 0)
                factor=maxLengthClipArea/maxLengthPixels;
            
        }
        catch (exc) 
        {
            if (Clazz.instanceOf(exc)) 
            {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaRendererServer.RenderMultipoints.clsUtilityGE._className, "segmentColorsSet", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside segmentColorsSet", exc));
            } 
            else 
            {
                throw exc;
            }
        }
        return factor;
    },
    _className: "clsUtilityGE",
    Hatch_ForwardDiagonal: 2,
    Hatch_BackwardDiagonal: 3,
    Hatch_Vertical: 4,
    Hatch_Horizontal: 5,
    Hatch_Cross: 8
};



