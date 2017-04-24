var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.JavaLineArray = armyc2.c2sd.JavaLineArray || {};
armyc2.c2sd.JavaLineArray.lineutility =
        {
            ResizeArray: function (pLinePoints, length)
            {
                var array = new Array();
                try
                {
                    if (pLinePoints.length <= length)
                        return pLinePoints;
                    var j = 0;
                    for (j = 0; j < length; j++)
                    {
                        array[j] = new armyc2.c2sd.JavaLineArray.POINT2(pLinePoints[j]);
                    }

                }
                catch (exc)
                {
                    if (Clazz.instanceOf(exc))
                    {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "ResizeArray", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ResizeArray", exc));
                    }
                    else
                    {
                        throw exc;
                    }
                }
                return array;
            },
            SegmentLineShape: function (pt0, pt1, shape) {
                try {
                    if (pt0 === null || pt1 === null)
                        return;
                    var j = 0;
                    var n = 0;
                    var dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
                    n = Math.floor((dist / 25));
                    var pt = null;
                    shape.lineTo(pt0);
                    for (j = 1; j <= n; j++) {
                        pt = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, 25);
                        shape.lineTo(pt);
                    }
                    shape.lineTo(pt1);
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "SegmentLineShape", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside SegmentLineShape", exc));
                    } else {
                        throw exc;
                    }
                }
                return;
            },
            GetDirAtkAirMiddleSegment: function (pLinePoints, vblSaveCounter) {
                var middleSegment = -1;
                try {
                    var d = 0;
                    var k = 0;
                    for (k = vblSaveCounter - 1; k > 0; k--) {
                        d += armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[k], pLinePoints[k - 1]);
                        if (d > 60) {
                            break;
                        }
                    }
                    if (d > 60) {
                        middleSegment = k;
                    } else {
                        if (vblSaveCounter <= 3) {
                            middleSegment = 1;
                        } else {
                            middleSegment = 2;
                        }
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "GetDirAtkAirMiddleSegment", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetDirAtkAirMiddleSegment", exc));
                    } else {
                        throw exc;
                    }
                }
                return middleSegment;
            },
            CalcSegmentAngleDouble: function (pt0, pt1) {
                var dAngle = 0;
                try {
                    var nTemp = 0;
                    var m = new armyc2.c2sd.JavaLineArray.ref();
                    nTemp = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble(pt0, pt1, m);
                    if (nTemp === 0)
                        dAngle = 1.5707963267948966;
                    else {
                        dAngle = Math.atan(m.value[0]);
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "CalcSegmentAngleDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside CalcSegmentAngleDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return dAngle;
            },
            InitializePOINT2Array: function (pts) {
                if (pts === null || pts.length === 0)
                    return;
                for (var j = 0; j < pts.length; j++)
                {
                    pts[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                }
            },
            CalcCenterPointDouble: function (pLinePoints, vblCounter) {
                var CenterLinePoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                try {
                    var j = 0;
                    var dMinX = pLinePoints[0].x;
                    var dMinY = pLinePoints[0].y;
                    var dMaxX = pLinePoints[0].x;
                    var dMaxY = pLinePoints[0].y;
                    dMinX = pLinePoints[0].x;
                    dMinY = pLinePoints[0].y;
                    dMaxX = pLinePoints[0].x;
                    dMaxY = pLinePoints[0].y;
                    for (j = 0; j < vblCounter; j++) {
                        if (pLinePoints[j].x < dMinX)
                            dMinX = pLinePoints[j].x;
                        if (pLinePoints[j].y < dMinY)
                            dMinY = pLinePoints[j].y;
                        if (pLinePoints[j].x > dMaxX)
                            dMaxX = pLinePoints[j].x;
                        if (pLinePoints[j].y > dMaxY)
                            dMaxY = pLinePoints[j].y;
                    }
                    CenterLinePoint.x = (dMinX + dMaxX) / 2;
                    CenterLinePoint.y = (dMinY + dMaxY) / 2;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "CalcCenterPointDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside CalcCenterPointDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return CenterLinePoint;
            },
            CalcCenterPointDouble2: function (pLinePoints, vblCounter) {
                var pt0 = pLinePoints[0];
                var CenterLinePoint = new armyc2.c2sd.JavaLineArray.POINT2();
                try {
                    var j = 0;
                    var dMinX = pt0.x;
                    var dMinY = pt0.y;
                    var dMaxX = pt0.x;
                    var dMaxY = pt0.y;
                    dMinX = pt0.x;
                    dMinY = pt0.y;
                    dMaxX = pt0.x;
                    dMaxY = pt0.y;
                    var pt;
                    for (j = 0; j < vblCounter; j++) {
                        pt = pLinePoints[j];
                        if (pt.x < dMinX)
                            dMinX = pt.x;
                        if (pt.y < dMinY)
                            dMinY = pt.y;
                        if (pt.x > dMaxX)
                            dMaxX = pt.x;
                        if (pt.y > dMaxY)
                            dMaxY = pt.y;
                    }
                    CenterLinePoint.x = (dMinX + dMaxX) / 2;
                    CenterLinePoint.y = (dMinY + dMaxY) / 2;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "CalcCenterPointDouble2", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside CalcCenterPointDouble2", exc));
                    } else {
                        throw exc;
                    }
                }
                return CenterLinePoint;
            },
            CalcDistanceDouble: function (p1, p2) {
                var returnValue = 0;
                try {
                    returnValue = Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y));
                    var xdist = Math.abs(p1.x - p2.x);
                    var ydist = Math.abs(p1.y - p2.y);
                    var max = xdist;
                    if (ydist > xdist)
                        max = ydist;
                    if (returnValue === 0 || Double.isInfinite(returnValue)) {
                        if (max > 0)
                            returnValue = max;
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "CalcDistanceDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside CalcDistanceDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return returnValue;
            },
            CalcTrueSlopeDouble: function (firstLinePoint, lastLinePoint, slope) {
                var result = 1;
                try {
                    if (slope.value === null)
                        slope.value = Clazz.newArray(1, 0);
                    var deltaX = 0;
                    var deltaY = 0;
                    deltaX = firstLinePoint.x - lastLinePoint.x;
                    //if (Math.abs(deltaX)<1) 
                    if (deltaX === 0)
                    {
                        deltaX = 1;
                        result = 1;
                    }
                    deltaY = firstLinePoint.y - lastLinePoint.y;
                    slope.value[0] = deltaY / deltaX;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "CalcTrueSlopeDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside CalcTrueSlopeDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return result;
            },
            WriteFile: function (str) {
                try {
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "WriteFile", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside WriteFile", exc));
                    } else {
                        throw exc;
                    }
                }
            },
            ReversePointsDouble2: function (pLowerLinePoints, vblCounter) {
                try {
                    var pResultPoints = new Array(vblCounter);
                    var k = 0;
                    for (k = 0; k < vblCounter; k++)
                        pResultPoints[k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLowerLinePoints[vblCounter - k - 1]);

                    for (k = 0; k < vblCounter; k++)
                        pLowerLinePoints[k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pResultPoints[k]);

                    pResultPoints = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "ReversePointsDouble2", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ReversePointsDouble2", exc));
                    } else {
                        throw exc;
                    }
                }
                return;
            },
            CalcTrueSlopeDoubleForRoutes: function (firstLinePoint, lastLinePoint, slope) {
                try {
                    var deltaX = 0;
                    var deltaY = 0;
                    deltaX = (firstLinePoint.x) - (lastLinePoint.x);
                    if (Math.abs(deltaX) < 2)
                        return (false);
                    deltaY = (firstLinePoint.y) - (lastLinePoint.y);
                    if (slope.value === null)
                        slope.value = Clazz.newArray(1, 0);
                    slope.value[0] = deltaY / deltaX;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "CalcTrueSlopeDoubleForRoutes", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside CalcTrueSlopeDoubleForRoutes", exc));
                    } else {
                        throw exc;
                    }
                }
                return true;
            },
            CalcTrueSlopeDouble2: function (firstLinePoint, lastLinePoint, slope) {
                //var result = new Boolean(true);
                var result = true;
                try {
                    var deltaX = 0;
                    var deltaY = 0;
                    deltaX = (firstLinePoint.x) - (lastLinePoint.x);
                    //if (Math.abs(deltaX)<1) 
                    if (deltaX === 0)
                    {
                        deltaX = 1;
                        //result = new Boolean(false);
                        result = false;
                    }
                    deltaY = (firstLinePoint.y) - (lastLinePoint.y);
                    if (slope.value === null)
                        slope.value = Clazz.newArray(1, 0);
                    slope.value[0] = deltaY / deltaX;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "CalcTrueSlopeDouble2", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside CalcTrueSlopeDouble2", exc));
                    } else {
                        throw exc;
                    }
                }
                return result;
            },
            CalcTrueLinesDouble: function (nDistance, linePoint1, linePoint2, pdResult) {
                try {
                    var nTemp = 0;
                    var b = 0;
                    var delta = 0;
                    var m = new armyc2.c2sd.JavaLineArray.ref();
                    nTemp = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble(linePoint1, linePoint2, m);
                    pdResult.value = Clazz.newArray(6, 0);
                    if (nTemp === 0) {
                        pdResult.value[3] = linePoint1.x + nDistance;
                        pdResult.value[5] = linePoint1.x - nDistance;
                        return 0;
                    } else {
                        b = linePoint2.y - m.value[0] * linePoint2.x;
                        delta = Math.sqrt(m.value[0] * m.value[0] * ((nDistance) * (nDistance)) + ((nDistance) * (nDistance)));
                        pdResult.value[0] = m.value[0];
                        pdResult.value[1] = b;
                        pdResult.value[2] = m.value[0];
                        pdResult.value[3] = b + delta;
                        pdResult.value[4] = m.value[0];
                        pdResult.value[5] = b - delta;
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "CalcTrueLinesDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside CalcTrueLinesDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return 1;
            },
            CalcTrueIntersectDouble2: function (m1, b1, m2, b2, bolVertical1, bolVertical2, X1, X2) {
                var ptIntersect = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                try {
                    var x = 0;
                    var y = 0;
                    ptIntersect.x = X1;
                    ptIntersect.y = X2;
                    if (bolVertical1 === 0 && bolVertical2 === 0)
                        return ptIntersect;
                    if (bolVertical1 === 0 && bolVertical2 === 1) {
                        ptIntersect.x = X1;
                        ptIntersect.y = m2 * X1 + b2;
                        return ptIntersect;
                    }
                    if (bolVertical1 === 1 && bolVertical2 === 0) {
                        ptIntersect.x = X2;
                        ptIntersect.y = m1 * X2 + b1;
                        return ptIntersect;
                    }
                    if (m1 !== m2) {
                        x = (b2 - b1) / (m1 - m2);
                        y = (m1 * x + b1);
                        ptIntersect.x = x;
                        ptIntersect.y = y;
                        return ptIntersect;
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "CalcTrueIntersectDouble2", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside CalcTrueIntersectDouble2", exc));
                    } else {
                        throw exc;
                    }
                }
                return ptIntersect;
            },
            GetOffsetPointDouble: function (startLinePoint, endLinePoint, nOffset) {
                var tempLinePoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(startLinePoint);
                try {
                    var dx = endLinePoint.x - startLinePoint.x;
                    var dy = endLinePoint.y - startLinePoint.y;
                    var dOffset = nOffset;
                    var dHypotenuse = 0;
                    var dAngle = 0;
                    if (dx === 0) {
                        if (dy > 0) {
                            tempLinePoint.x = endLinePoint.x;
                            tempLinePoint.y = endLinePoint.y + dOffset;
                        } else {
                            tempLinePoint.x = endLinePoint.x;
                            tempLinePoint.y = endLinePoint.y - dOffset;
                        }
                        return tempLinePoint;
                    }
                    if (dy === 0) {
                        if (dx > 0) {
                            tempLinePoint.x = endLinePoint.x + dOffset;
                            tempLinePoint.y = endLinePoint.y;
                        } else {
                            tempLinePoint.x = endLinePoint.x - dOffset;
                            tempLinePoint.y = endLinePoint.y;
                        }
                        return tempLinePoint;
                    }
                    if (dy === 0)
                        dAngle = 0;
                    else
                        dAngle = Math.atan(dx / dy) + 1.5707963267948966;
                    dHypotenuse = nOffset;
                    if (endLinePoint.x > startLinePoint.x)
                        tempLinePoint.x = endLinePoint.x + dHypotenuse * Math.abs(Math.cos(dAngle));
                    else
                        tempLinePoint.x = endLinePoint.x - dHypotenuse * Math.abs(Math.cos(dAngle));
                    if (endLinePoint.y > startLinePoint.y)
                        tempLinePoint.y = endLinePoint.y + dHypotenuse * Math.abs(Math.sin(dAngle));
                    else
                        tempLinePoint.y = endLinePoint.y - dHypotenuse * Math.abs(Math.sin(dAngle));
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "GetOffsetPointDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetOffsetPointDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return (tempLinePoint);
            },
            GetArcFEBADouble: function (dRadius, pLinePoints, vblCounter, pResultLinePoints) {
                try {
                    var dStartAngle = 0;
                    var dEndAngle = 6.283185307179586;
                    var dIncrement = (dEndAngle - dStartAngle) / 25.0;
                    var i = 0;
                    var j = 0;
                    var nArcCounter = 0;
                    var x = 0;
                    var y = 0;
                    var CenterLinePoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    var pArcLinePoints = new Array(26);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pArcLinePoints);
                    for (i = 0; i < vblCounter; i++) {
                        CenterLinePoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[i]);
                        armyc2.c2sd.JavaLineArray.lineutility.CalcCircleDouble(CenterLinePoint, dRadius, 26, pArcLinePoints, 0);
                        for (j = 0; j < 26; j++) {
                            pResultLinePoints[nArcCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArcLinePoints[j]);
                            nArcCounter++;
                        }
                        pResultLinePoints[nArcCounter - 1].style = 5;
                    }
                    pResultLinePoints[26 * vblCounter - 1].style = 5;
                    pArcLinePoints = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "GetArcFEBADouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetArcFEBADouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return pResultLinePoints;
            },
            LineOfXPoints: function (pLinePoints) {
                var xPoints = new java.util.ArrayList();
                try {
                    var j = 0;
                    var k = 0;
                    var dist = 0;
                    var iterations = 0;
                    var frontPt = null;
                    var backPt = null;
                    var extendFrontAbove = null;
                    var extendFrontBelow = null;
                    var extendBackAbove = null;
                    var extendBackBelow = null;
                    var xPoint1 = null;
                    var xPoint2 = null;
                    for (j = 0; j < pLinePoints.length - 1; j++) {
                        dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[j], pLinePoints[j + 1]);
                        iterations = Math.floor(((dist - 5.0) / 20.0));
                        if (dist - iterations * 20 > 10)
                            iterations += 1;
                        for (k = 0; k < iterations; k++) {
                            frontPt = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pLinePoints[j], pLinePoints[j + 1], k * 20 - 5);
                            backPt = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pLinePoints[j], pLinePoints[j + 1], k * 20 + 5);
                            extendFrontAbove = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[j], pLinePoints[j + 1], frontPt, 2, 5);
                            extendFrontBelow = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[j], pLinePoints[j + 1], frontPt, 3, 5);
                            extendBackAbove = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[j], pLinePoints[j + 1], backPt, 2, 5);
                            extendBackBelow = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[j], pLinePoints[j + 1], backPt, 3, 5);
                            xPoints.add(extendFrontAbove);
                            extendBackBelow.style = 5;
                            xPoints.add(extendBackBelow);
                            xPoints.add(extendBackAbove);
                            extendFrontBelow.style = 5;
                            xPoints.add(extendFrontBelow);
                        }
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "LineOfXPoints", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside LineOfXPoints", exc));
                    } else {
                        throw exc;
                    }
                }
                return xPoints;
            },
            GetXFEBADouble: function (pLinePoints, dSize, vblCounter, pResultLinePoints) {
                try {
                    var j = 0;
                    var nXcounter = 0;
                    var upperLeftLinePoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    var lowerLeftLinePoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    var upperRightLinePoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    var lowerRightLinePoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    for (j = 0; j < vblCounter; j++) {
                        upperRightLinePoint.x = pLinePoints[j].x + dSize;
                        upperRightLinePoint.y = pLinePoints[j].y + dSize;
                        lowerRightLinePoint.x = pLinePoints[j].x + dSize;
                        lowerRightLinePoint.y = pLinePoints[j].y - dSize;
                        upperLeftLinePoint.x = pLinePoints[j].x - dSize;
                        upperLeftLinePoint.y = pLinePoints[j].y + dSize;
                        lowerLeftLinePoint.x = pLinePoints[j].x - dSize;
                        lowerLeftLinePoint.y = pLinePoints[j].y - dSize;
                        pResultLinePoints[nXcounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(lowerLeftLinePoint);
                        nXcounter++;
                        pResultLinePoints[nXcounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(upperRightLinePoint);
                        pResultLinePoints[nXcounter].style = 5;
                        nXcounter++;
                        pResultLinePoints[nXcounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(upperLeftLinePoint);
                        nXcounter++;
                        pResultLinePoints[nXcounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(lowerRightLinePoint);
                        pResultLinePoints[nXcounter].style = 5;
                        nXcounter++;
                    }
                    return;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "GetXFEBADouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetXFEBADouble", exc));
                    } else {
                        throw exc;
                    }
                }
            },
            ReorderPoints: function (pLinePoints) {
                try {
                    var n = pLinePoints.length;
                    var pt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[1]);
                    for (var j = 1; j < n - 1; j++) {
                        pt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j + 1]);
                        pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt);
                    }
                    pLinePoints[n - 1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "ReorderPoints", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ReorderPoints", exc));
                    } else {
                        throw exc;
                    }
                }
                return;
            },
            CalcDistanceToLineDouble: function (pt1, pt2, pt3) {
                var dResult = 0;
                try {
                    var m1 = 1;
                    var b = 0;
                    var b1 = 0;
                    var ptIntersect = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                    var bolVertical = 0;
                    var m = new armyc2.c2sd.JavaLineArray.ref();
                    bolVertical = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble(pt1, pt2, m);
                    if (bolVertical !== 0 && m.value[0] !== 0) {
                        m1 = -1 / m.value[0];
                        b = pt1.y - m.value[0] * pt1.x;
                        b1 = pt3.y - m1 * pt3.x;
                        ptIntersect = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueIntersectDouble2(m.value[0], b, m1, b1, 1, 1, ptIntersect.x, ptIntersect.y);
                    }
                    if (bolVertical !== 0 && m.value[0] === 0) {
                        ptIntersect.y = pt1.y;
                        ptIntersect.x = pt3.x;
                    }
                    if (bolVertical === 0) {
                        ptIntersect.y = pt3.y;
                        ptIntersect.x = pt1.x;
                    }
                    dResult = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt3, ptIntersect);
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "CaclDistanceToLineDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside CalcDistanceToLineDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return dResult;
            },
            ExtendLineDouble: function (pt1, pt2, dist) {
                var pt3 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                try {
                    var dOriginalDistance = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt1, pt2);
                    if (dOriginalDistance === 0 || dist === 0)
                    {
                        return pt2;
                    }
                    pt3.x = (dOriginalDistance + dist) / dOriginalDistance * (pt2.x - pt1.x) + pt1.x;
                    pt3.y = (dOriginalDistance + dist) / dOriginalDistance * (pt2.y - pt1.y) + pt1.y;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "ExtendLineDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ExtendLineDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return pt3;
            },
            ExtendAlongLineDouble2: function (pt1, pt2, dist) {
                var pt3 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                try {
                    var dOriginalDistance = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt1, pt2);
                    if (dOriginalDistance === 0 || dist === 0)
                        return pt1;
                    pt3.x = (dist / dOriginalDistance * (pt2.x - pt1.x) + pt1.x);
                    pt3.y = (dist / dOriginalDistance * (pt2.y - pt1.y) + pt1.y);
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "ExtendAlongLineDouble2", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ExtendAlongLineDouble2", exc));
                    } else {
                        throw exc;
                    }
                }
                return pt3;
            },
            ExtendAlongLineDouble: function () {
                var pt3 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                try {
                    var pt1 = arguments[0];
                    var pt2 = arguments[1];
                    var dist = arguments[2];
                    var dOriginalDistance = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt1, pt2);
                    if (dOriginalDistance === 0 || dist === 0)
                        return pt2;
                    pt3.x = (dist / dOriginalDistance * (pt2.x - pt1.x) + pt1.x);
                    pt3.y = (dist / dOriginalDistance * (pt2.y - pt1.y) + pt1.y);
                    if (arguments.length === 4)
                        pt3.style = arguments[3];
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "ExtendAlongLineDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ExtendAlongLineDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return pt3;
            },
            ExtendLineAbove: function (pt1, pt2, pt3, d, X, Y, direction) {
                try {
                    var m = new armyc2.c2sd.JavaLineArray.ref();
                    var dx = 0;
                    var dy = 0;
                    var bolVertical = 0;
                    X.value = Clazz.newArray(1, 0);
                    Y.value = Clazz.newArray(1, 0);
                    bolVertical = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble(pt1, pt2, m);
                    if (bolVertical === 0)
                        return 0;
                    if (m.value[0] === 0)
                    {
                        X.value[0] = pt3.x;
                        if (direction === 0)
                            Y.value[0] = pt3.y - Math.abs(d);
                        else
                            Y.value[0] = pt3.y + Math.abs(d);

                        return 1;
                    }
                    if (direction === 0)
                        dy = -Math.abs(d / (m.value[0] * Math.sqrt(1 + 1 / (m.value[0] * m.value[0]))));
                    else
                        dy = Math.abs(d / (m.value[0] * Math.sqrt(1 + 1 / (m.value[0] * m.value[0]))));
                    dx = -m.value[0] * dy;
                    X.value[0] = pt3.x + dx;
                    Y.value[0] = pt3.y + dy;
                }
                catch (exc)
                {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "ExtendLineAbove", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ExtendLineAbove", exc));
                    } else {
                        throw exc;
                    }
                }
                return 1;
            },
            ExtendLineLeft: function (pt1, pt2, pt3, d, X, Y, direction) {
                try {
                    var m = new armyc2.c2sd.JavaLineArray.ref();
                    var dx = 0;
                    var dy = 0;
                    var bolVertical = 0;
                    X.value = Clazz.newArray(1, 0);
                    Y.value = Clazz.newArray(1, 0);
                    bolVertical = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble(pt1, pt2, m);
                    if (bolVertical !== 0 && m.value[0] === 0)
                        return 0;
                    if (bolVertical === 0) {
                        Y.value[0] = pt3.y;
                        if (direction === 0)
                            X.value[0] = pt3.x - Math.abs(d);
                        else
                            X.value[0] = pt3.x + Math.abs(d);
                        return 1;
                    }
                    if (direction === 0)
                        dx = -Math.abs(d / Math.sqrt(1 + 1 / (m.value[0] * m.value[0])));
                    else
                        dx = Math.abs(d / Math.sqrt(1 + 1 / (m.value[0] * m.value[0])));
                    dy = -(1 / m.value[0]) * dx;
                    X.value[0] = pt3.x + dx;
                    Y.value[0] = pt3.y + dy;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "ExtendLineLeft", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ExtendLineLeft", exc));
                    } else {
                        throw exc;
                    }
                }
                return 1;
            },
            CalcDirectionFromLine: function (pt0, pt1, pt2) {
                var result = -1;
                try {
                    var m2 = 0;
                    var b1 = 0;
                    var b2 = 0;
                    var m1 = new armyc2.c2sd.JavaLineArray.ref();
                    var ptIntersect = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    if (pt0.x === pt1.x) {
                        if (pt2.x < pt0.x)
                            return 0;
                        else
                            return 1;
                    }
                    if (pt0.y === pt1.y) {
                        if (pt2.y < pt0.y)
                            return 2;
                        else
                            return 3;
                    }
                    armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble(pt0, pt1, m1);
                    m2 = -1 / m1.value[0];
                    b1 = pt0.y - m1.value[0] * pt0.x;
                    b2 = pt2.y - m2 * pt2.x;
                    ptIntersect = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueIntersectDouble2(m1.value[0], b1, m2, b2, 1, 1, 0, 0);
                    if (m1.value[0] > 1) {
                        if (pt2.x < ptIntersect.x)
                            return 0;
                        else
                            return 1;
                    } else {
                        if (pt2.y < ptIntersect.y)
                            return 2;
                        else
                            return 3;
                    }
                } catch (e) {
                    if (Clazz.instanceOf(e)) {
                        System.out.println(e.getMessage());
                    } else {
                        throw e;
                    }
                }
                return result;
            },
            ExtendDirectedLineText: function (pt1, pt2, pt0, direction, d) {
                var ptResult = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                try {
                    var X = new armyc2.c2sd.JavaLineArray.ref();
                    var Y = new armyc2.c2sd.JavaLineArray.ref();
                    ptResult = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                    if (d < 0) {
                        switch (direction) {
                            case 0:
                                direction = armyc2.c2sd.JavaLineArray.lineutility.extend_right;
                                break;
                            case 1:
                                direction = armyc2.c2sd.JavaLineArray.lineutility.extend_left;
                                break;
                            case 2:
                                direction = armyc2.c2sd.JavaLineArray.lineutility.extend_below;
                                break;
                            case 3:
                                direction = armyc2.c2sd.JavaLineArray.lineutility.extend_above;
                                break;
                            default:
                                break;
                        }
                        d = Math.abs(d);
                    }
                    if (pt1.y === pt2.y) {
                        switch (direction) {
                            case 0:
                                direction = armyc2.c2sd.JavaLineArray.lineutility.extend_above;
                            case 1:
                                direction = armyc2.c2sd.JavaLineArray.lineutility.extend_below;
                            default:
                                break;
                        }
                    }
                    if (pt1.x === pt2.x) {
                        switch (direction) {
                            case 2:
                                direction = armyc2.c2sd.JavaLineArray.lineutility.extend_left;
                            case 3:
                                direction = armyc2.c2sd.JavaLineArray.lineutility.extend_right;
                            default:
                                break;
                        }
                    }
                    switch (direction) {
                        case 0:
                            armyc2.c2sd.JavaLineArray.lineutility.ExtendLineLeft(pt1, pt2, pt0, d, X, Y, 0);
                            break;
                        case 1:
                            armyc2.c2sd.JavaLineArray.lineutility.ExtendLineLeft(pt1, pt2, pt0, d, X, Y, 1);
                            break;
                        case 2:
                            armyc2.c2sd.JavaLineArray.lineutility.ExtendLineAbove(pt1, pt2, pt0, d, X, Y, 0);
                            break;
                        case 3:
                            armyc2.c2sd.JavaLineArray.lineutility.ExtendLineAbove(pt1, pt2, pt0, d, X, Y, 1);
                            break;
                        default:
                            break;
                    }
                    ptResult.x = X.value[0];
                    ptResult.y = Y.value[0];
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "ExtendDirectedLine", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ExtendDirectedLine", exc));
                    } else {
                        throw exc;
                    }
                }
                return ptResult;
            },
            ExtendDirectedLine: function () {
                var pt1 = arguments[0];
                var pt2 = arguments[1];
                var pt0 = arguments[2];
                var direction = arguments[3];
                var d = arguments[4];
                var ptResult = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                try {
                    if (arguments.length === 6)
                    {
                        ptResult.style = arguments[5];
                    }
                    var X = new armyc2.c2sd.JavaLineArray.ref();
                    var Y = new armyc2.c2sd.JavaLineArray.ref();
                    if (pt1.x === pt2.x) {
                        if (direction === 2)
                            direction = 0;
                        if (direction === 3)
                            direction = 1;
                    }
                    if (pt1.y === pt2.y) {
                        if (direction === 0)
                            direction = 2;
                        if (direction === 1)
                            direction = 3;
                    }
                    switch (direction) {
                        case 0:
                            armyc2.c2sd.JavaLineArray.lineutility.ExtendLineLeft(pt1, pt2, pt0, d, X, Y, 0);
                            break;
                        case 1:
                            armyc2.c2sd.JavaLineArray.lineutility.ExtendLineLeft(pt1, pt2, pt0, d, X, Y, 1);
                            break;
                        case 2:
                            armyc2.c2sd.JavaLineArray.lineutility.ExtendLineAbove(pt1, pt2, pt0, d, X, Y, 0);
                            break;
                        case 3:
                            armyc2.c2sd.JavaLineArray.lineutility.ExtendLineAbove(pt1, pt2, pt0, d, X, Y, 1);
                            break;
                    }
                    ptResult.x = X.value[0];
                    ptResult.y = Y.value[0];
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "ExtendDirectedLine", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ExtendDirectedLine", exc));
                    } else {
                        throw exc;
                    }
                }
                return ptResult;
            },
            ExtendLine2Double: function (pt1, pt2, dist, styl) {
                var pt3 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                try
                {
                    var dOriginalDistance = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt1, pt2);
                    pt3.x = pt2.x;
                    pt3.y = pt2.y;
                    if (dOriginalDistance > 0)
                    {
                        pt3.x = (dOriginalDistance + dist) / dOriginalDistance * (pt2.x - pt1.x) + pt1.x;
                        pt3.y = (dOriginalDistance + dist) / dOriginalDistance * (pt2.y - pt1.y) + pt1.y;
                        pt3.style = styl;
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "ExtendLine2Double", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ExtendLine2Double", exc));
                    } else {
                        throw exc;
                    }
                }
                return pt3;
            },
            ExtendAngledLine: function (pt0, pt1, pt2, alpha, d) {
                var pt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                try {
                    var psi = Math.atan((pt1.y - pt0.y) / (pt1.x - pt0.x));
                    var alpha1 = 3.141592653589793 * alpha / 180;
                    var theta = psi + alpha1;
                    var dx = d * Math.cos(theta);
                    var dy = d * Math.sin(theta);
                    pt.x = pt2.x + dx;
                    pt.y = pt2.y + dy;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "ExtendAngledLine", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ExtendAngledLine", exc));
                    } else {
                        throw exc;
                    }
                }
                return pt;
            },
            GetQuadrantDouble: function () {
                var nQuadrant = -1;
                try {
                    if (arguments.length === 2)
                    {
                        var pt1 = arguments[0];
                        var pt2 = arguments[1];
                        if (pt2.x >= pt1.x && pt2.y <= pt1.y)
                            nQuadrant = 1;
                        if (pt2.x >= pt1.x && pt2.y >= pt1.y)
                            nQuadrant = 2;
                        if (pt2.x <= pt1.x && pt2.y >= pt1.y)
                            nQuadrant = 3;
                        if (pt2.x <= pt1.x && pt2.y <= pt1.y)
                            nQuadrant = 4;
                    }
                    else if (arguments.length === 4)
                    {
                        var x1 = arguments[0];
                        var y1 = arguments[1];
                        var x2 = arguments[2];
                        var y2 = arguments[3];
                        if (x2 >= x1 && y2 <= y1)
                            nQuadrant = 1;
                        if (x2 >= x1 && y2 >= y1)
                            nQuadrant = 2;
                        if (x2 <= x1 && y2 >= y1)
                            nQuadrant = 3;
                        if (x2 <= x1 && y2 <= y1)
                            nQuadrant = 4;
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "GetQuadrantDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetQuadrantDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return nQuadrant;
            },
            GetPixelsMin: function (ptsSeize, vblCounter, x, y) {
                try {
                    var xmin = Infinity;
                    var ymin = Infinity;
                    var j = 0;
                    for (j = 0; j < vblCounter; j++) {
                        if (ptsSeize[j].x < xmin)
                            xmin = ptsSeize[j].x;
                        if (ptsSeize[j].y < ymin)
                            ymin = ptsSeize[j].y;
                    }
                    x.value = Clazz.newArray(1, 0);
                    y.value = Clazz.newArray(1, 0);
                    x.value[0] = xmin;
                    y.value[0] = ymin;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "GetPixelsMin", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetPixelsMin", exc));
                    } else {
                        throw exc;
                    }
                }
                return;
            },
            CalcClockwiseCenterDouble: function (ptsSeize) {
                var dRadius = 0;
                try {
                    var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptsSeize[0]);
                    var pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptsSeize[1]);
                    var C = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                    var midPt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                    var E = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                    var ptYIntercept = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                    var nQuadrant = 1;
                    var b = 0;
                    var b1 = 0;
                    var b2 = 0;
                    var dLength = 0;
                    var m = new armyc2.c2sd.JavaLineArray.ref();
                    var bolVertical = 0;
                    var offsetX = new armyc2.c2sd.JavaLineArray.ref();
                    var offsetY = new armyc2.c2sd.JavaLineArray.ref();
                    var ptsTemp = new Array(2);
                    ptsTemp[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                    ptsTemp[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2);
                    armyc2.c2sd.JavaLineArray.lineutility.GetPixelsMin(ptsTemp, 2, offsetX, offsetY);
                    if (offsetX.value[0] < 0)
                        offsetX.value[0] = offsetX.value[0] - 100;
                    else
                        offsetX.value[0] = 0;
                    midPt.x = (pt1.x + pt2.x) / 2;
                    midPt.y = (pt1.y + pt2.y) / 2;
                    dLength = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt1, pt2);
                    dRadius = dLength / Math.sqrt(2);
                    nQuadrant = armyc2.c2sd.JavaLineArray.lineutility.GetQuadrantDouble(pt1, pt2);
                    bolVertical = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble(pt1, pt2, m);
                    if (bolVertical !== 0 && m.value[0] !== 0) {
                        b = pt1.y - m.value[0] * pt1.x;
                        b1 = midPt.y + (1 / m.value[0]) * midPt.x;
                        b2 = (-1 / m.value[0]) * offsetX.value[0] + b1;
                        ptYIntercept.x = offsetX.value[0];
                        ptYIntercept.y = b2;
                        switch (nQuadrant) {
                            case 1:
                            case 4:
                                C = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(ptYIntercept, midPt, dLength / 2);
                                break;
                            case 2:
                            case 3:
                                C = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(ptYIntercept, midPt, -dLength / 2);
                                break;
                            default:
                                break;
                        }
                    }
                    if (bolVertical !== 0 && m.value[0] === 0) {
                        C.x = midPt.x;
                        if (pt1.x < pt2.x)
                            C.y = midPt.y + dLength / 2;
                        else
                            C.y = midPt.y - dLength / 2;
                    }
                    if (bolVertical === 0) {
                        ptYIntercept.x = offsetX.value[0];
                        ptYIntercept.y = midPt.y;
                        switch (nQuadrant) {
                            case 1:
                            case 4:
                                C = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(ptYIntercept, midPt, dLength / 2);
                                break;
                            case 2:
                            case 3:
                                C = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(ptYIntercept, midPt, -dLength / 2);
                                break;
                            default:
                                break;
                        }
                    }
                    E = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(C, pt1, 50);
                    ptsSeize[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(C);
                    ptsSeize[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(E);
                    ptsTemp = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "CalcClockwiseCenterDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside CalcClockwiseCenterDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return dRadius;
            },
            GetArrowHead4Double: function (startLinePoint, endLinePoint, nBiSector, nBase, pResultLinePoints, styl) {
                try {
                    var j = 0;
                    var dy = (endLinePoint.y - startLinePoint.y);
                    var dx = (endLinePoint.x - startLinePoint.x);
                    var dSign = 1.0;
                    var AHBY = 0;
                    var AHBX = 0;
                    var AHBLY = 0;
                    var AHBLX = 0;
                    var AHBRY = 0;
                    var AHBRX = 0;
                    var dAngle = 0;
                    var dHypotenuse = 0;
                    var tempLinePoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(startLinePoint);
                    if (dy === 0) {
                        if (dx > 0)
                            dAngle = 3.141592653589793;
                        else
                            dAngle = 0;
                    } else
                        dAngle = Math.atan(dx / dy) + 1.5707963267948966;
                    tempLinePoint.style = 0;
                    if (dx <= 0.0 && dy <= 0.0)
                        dSign = -1.0;
                    if (dx >= 0.0 && dy <= 0.0)
                        dSign = -1.0;
                    if (dx <= 0.0 && dy >= 0.0)
                        dSign = 1.0;
                    if (dx >= 0.0 && dy >= 0.0)
                        dSign = 1.0;
                    dHypotenuse = dSign * nBiSector;
                    AHBX = endLinePoint.x + dHypotenuse * Math.cos(dAngle);
                    AHBY = endLinePoint.y - dHypotenuse * Math.sin(dAngle);
                    dHypotenuse = dSign * (nBase / 2.0);
                    AHBLX = AHBX - dHypotenuse * Math.sin(dAngle);
                    AHBLY = AHBY - dHypotenuse * Math.cos(dAngle);
                    AHBRX = AHBX + dHypotenuse * Math.sin(dAngle);
                    AHBRY = AHBY + dHypotenuse * Math.cos(dAngle);
                    tempLinePoint.x = Math.floor(AHBLX);
                    tempLinePoint.y = Math.floor(AHBLY);
                    pResultLinePoints[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tempLinePoint);
                    pResultLinePoints[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(endLinePoint);
                    tempLinePoint.x = Math.floor(AHBRX);
                    tempLinePoint.y = Math.floor(AHBRY);
                    pResultLinePoints[2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tempLinePoint);
                    switch (styl) {
                        case 0:
                            for (j = 0; j < 2; j++)
                                pResultLinePoints[j].style = 0;

                            pResultLinePoints[2].style = 5;
                            break;
                        case 9:
                            for (j = 0; j < 2; j++)
                                pResultLinePoints[j].style = 9;

                            pResultLinePoints[2].style = 10;
                            break;
                        case 18:
                            for (j = 0; j < 2; j++)
                                pResultLinePoints[j].style = 18;

                            pResultLinePoints[2].style = 5;
                            break;
                        default:
                            for (j = 0; j < 2; j++)
                                pResultLinePoints[j].style = styl;

                            pResultLinePoints[2].style = 5;
                            break;
                    }
                    return;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "GetArrowhead4Double", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetArrowhead4Double", exc));
                    } else {
                        throw exc;
                    }
                }
            },
            MidPointDouble: function (pt0, pt1, styl) {
                var ptResult = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                try {
                    ptResult.x = (pt0.x + pt1.x) / 2;
                    ptResult.y = (pt0.y + pt1.y) / 2;
                    ptResult.style = styl;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "MidPointDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside MidPointDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return ptResult;
            },
            RotateGeometryDoubleOrigin: function (pLinePoints, vblCounter, lAngle) {
                try {
                    var j = 0;
                    var dRotate = 0;
                    var dTheta = 0;
                    var dGamma = 0;
                    var x = 0;
                    var y = 0;
                    if (lAngle !== 0) {
                        var pdCenter = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                        dRotate = lAngle * 3.141592653589793 / 180;
                        pdCenter = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                        for (j = 0; j < vblCounter; j++) {
                            dGamma = 3.141592653589793 + Math.atan((pLinePoints[j].y - pdCenter.y) / (pLinePoints[j].x - pdCenter.x));
                            if (pLinePoints[j].x >= pdCenter.x) {
                                dGamma = dGamma + 3.141592653589793;
                            }
                            dTheta = dRotate + dGamma;
                            y = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[j], pdCenter) * Math.sin(dTheta);
                            x = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[j], pdCenter) * Math.cos(dTheta);
                            pLinePoints[j].y = pdCenter.y + y;
                            pLinePoints[j].x = pdCenter.x + x;
                        }
                        return pLinePoints;
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "RotateGeometryDoubleOrigin", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside RotateGeometryDoubleOrigin", exc));
                    } else {
                        throw exc;
                    }
                }
                return pLinePoints;
            },
            ExtendTrueLinePerpDouble: function (pt0, pt1, pt2, d, styl) {
                var ptResult = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                try {
                    var ptYIntercept = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                    var m = new armyc2.c2sd.JavaLineArray.ref();
                    var b = 0;
                    var b1 = 0;
                    var nTemp = 0;
                    var offsetX = new armyc2.c2sd.JavaLineArray.ref();
                    var offsetY = new armyc2.c2sd.JavaLineArray.ref();
                    var pts = new Array(3);
                    pts[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                    pts[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                    pts[2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2);
                    armyc2.c2sd.JavaLineArray.lineutility.GetPixelsMin(pts, 3, offsetX, offsetY);
                    if (offsetX.value[0] <= 0)
                        offsetX.value[0] = offsetX.value[0] - 100;
                    else
                        offsetX.value[0] = 0;
                    nTemp = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble(pt0, pt1, m);
                    switch (nTemp) {
                        case 0:
                            if (pt0.y < pt1.y) {
                                ptResult.x = pt2.x - d;
                                ptResult.y = pt2.y;
                            } else {
                                ptResult.x = pt2.x + d;
                                ptResult.y = pt2.y;
                            }
                            break;
                        default:
                            if (m.value[0] === 0) {
                                ptResult.x = pt2.x;
                                ptResult.y = pt2.y + d;
                            } else {
                                b = pt2.y + (1 / m.value[0]) * pt2.x;
                                b1 = (-1 / m.value[0]) * offsetX.value[0] + b;
                                ptYIntercept.x = offsetX.value[0];
                                ptYIntercept.y = b1;
                                ptResult = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(ptYIntercept, pt2, d);
                            }
                            break;
                    }
                    ptResult.style = styl;
                    pts = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "ExtendTrueLinePerpDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ExtendTrueLinePerpDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return ptResult;
            },
            CalcTrueIntersectDouble: function (m1, b1, m2, b2, p2, bolVerticalSlope1, bolVerticalSlope2, dWidth, lOrient, X, Y) {
                try {
                    var dWidth2 = Math.abs(dWidth);
                    var b = 0;
                    var dx = 0;
                    var dy = 0;
                    var m = 0;
                    X.value = Clazz.newArray(1, 0);
                    Y.value = Clazz.newArray(1, 0);
                    //if (m1 !== m2 && Math.abs(m1 - m2) <= 4.9E-324)
                    if (m1 !== m2 && Math.abs(m1 - m2) <= 1E-6)
                        m1 = m2;
                    //if (b1 !== b2 && Math.abs(b1 - b2) <= 4.9E-324)
                    if (b1 !== b2 && Math.abs(b1 - b2) <= 1E-6)
                        b1 = b2;
                    if (b1 === b2 && m1 + b1 === m2 + b2)
                        m1 = m2;
                    if (bolVerticalSlope1 === 0 && bolVerticalSlope2 === 0) {
                        switch (lOrient) {
                            case 0:
                                X.value[0] = p2.x - dWidth2;
                                Y.value[0] = p2.y;
                                break;
                            case 3:
                                X.value[0] = p2.x + dWidth2;
                                Y.value[0] = p2.y;
                                break;
                            default:
                                X.value[0] = p2.x;
                                Y.value[0] = p2.y;
                                break;
                        }
                        return 1;
                    }
                    if (bolVerticalSlope1 === 0 && bolVerticalSlope2 !== 0) {
                        switch (lOrient) {
                            case 0:
                            case 1:
                                X.value[0] = p2.x - dWidth2;
                                Y.value[0] = m2 * X.value[0] + b2;
                                break;
                            case 2:
                            case 3:
                                X.value[0] = p2.x + dWidth2;
                                Y.value[0] = m2 * X.value[0] + b2;
                                break;
                            default:
                                X.value[0] = p2.x;
                                Y.value[0] = p2.y;
                                break;
                        }
                        return 1;
                    }
                    if (bolVerticalSlope2 === 0 && bolVerticalSlope1 !== 0) {
                        switch (lOrient) {
                            case 0:
                            case 2:
                                X.value[0] = p2.x - dWidth2;
                                Y.value[0] = m1 * (X.value[0]) + b1;
                                break;
                            case 1:
                            case 3:
                                X.value[0] = p2.x + dWidth2;
                                Y.value[0] = m1 * (X.value[0]) + b1;
                                break;
                            default:
                                X.value[0] = p2.x;
                                Y.value[0] = p2.y;
                                break;
                        }
                        return 1;
                    }
                    if (m1 === m2 && m1 !== 0) {
                        if (b1 === b2) {
                            m = -1 / m1;
                            b = p2.y - m * p2.x;
                            X.value[0] = (b2 - b) / (m - m2);
                            Y.value[0] = (m1 * (X.value[0]) + b1);
                            return 1;
                        } else {
                            X.value[0] = p2.x;
                            Y.value[0] = p2.y;
                            return 1;
                        }
                    }
                    if (m1 === m2 && m1 === 0) {
                        switch (lOrient) {
                            case 0:
                            case 1:
                                X.value[0] = p2.x;
                                Y.value[0] = p2.y - dWidth2;
                                break;
                            case 3:
                            case 2:
                                X.value[0] = p2.x;
                                Y.value[0] = p2.y + dWidth2;
                                break;
                            default:
                                X.value[0] = p2.x;
                                Y.value[0] = p2.y;
                                break;
                        }
                        return 1;
                    }
                    if (m1 === m2 && b1 === b2 && bolVerticalSlope1 !== 0 && bolVerticalSlope2 !== 0) {
                        switch (lOrient) {
                            case 0:
                                if (m1 < 0) {
                                    dy = m1 * dWidth / Math.sqrt(1 + m1 * m1);
                                    dx = dy / m1;
                                    X.value[0] = p2.x + dx;
                                    Y.value[0] = p2.y + dy;
                                }
                                if (m1 > 0) {
                                    dy = -m1 * dWidth / Math.sqrt(1 + m1 * m1);
                                    dx = -dy / m1;
                                    X.value[0] = p2.x + dx;
                                    Y.value[0] = p2.y + dy;
                                }
                                break;
                            case 3:
                                if (m1 <= 0) {
                                    dy = -m1 * dWidth / Math.sqrt(1 + m1 * m1);
                                    dx = dy / m1;
                                    X.value[0] = p2.x + dx;
                                    Y.value[0] = p2.y + dy;
                                } else {
                                    dy = m1 * dWidth / Math.sqrt(1 + m1 * m1);
                                    dx = -dy / m1;
                                    X.value[0] = p2.x + dx;
                                    Y.value[0] = p2.y + dy;
                                }
                                break;
                            default:
                                X.value[0] = p2.x;
                                Y.value[0] = p2.y;
                                break;
                        }
                        return 1;
                    }
                    X.value[0] = (b2 - b1) / (m1 - m2);
                    Y.value[0] = (m1 * (X.value[0]) + b1);
                    return 1;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        X.value[0] = p2.x;
                        Y.value[0] = p2.y;
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "CalcTrueIntersectDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ExtendTrueIntersectDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return 1;
            },
            CalcDistance2: function (x1, y1, x2, y2) {
                var dResult = 0;
                try {
                    dResult = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
                    var xdist = Math.abs(x1 - x2);
                    var ydist = Math.abs(y1 - y2);
                    var max = xdist;
                    if (ydist > xdist)
                        max = ydist;
                    if (dResult === 0 || Double.isInfinite(dResult)) {
                        if (max > 0)
                            dResult = max;
                    }
                }
                catch (exc)
                {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "CalcDistance2", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside CalcDistance2", exc));
                    } else {
                        throw exc;
                    }
                }
                return dResult;
            },
            GetSAAFRMiddleLine: function (pLinePoints)
            {
                var pts = null;
                try
                {
                    var j = 0, count = 0;
                    for (j = 0; j < pLinePoints.length - 1; j++) {
                        if (pLinePoints[j].style > 0) {
                            count++;
                        }
                    }
                    pts = [];
                    count = 0;
                    var dMRR = 0;
                    var firstSegPt = null, lastSegPt = null, pt0 = null, pt1 = null;
                    for (j = 0; j < pLinePoints.length; j++) {
                        if (pLinePoints[j].style >= 0 || j === pLinePoints.length - 1)
                        {
                            if (lastSegPt !== null)
                            {
                                firstSegPt = new armyc2.c2sd.JavaLineArray.POINT2(lastSegPt);
                                lastSegPt = new armyc2.c2sd.JavaLineArray.POINT2(pLinePoints[j]);
                                dMRR = firstSegPt.style;
                                pt0 = this.ExtendLine2Double(lastSegPt, firstSegPt, -dMRR, 0);
                                pt1 = this.ExtendLine2Double(firstSegPt, lastSegPt, -dMRR, 5);
                                pts.push(pt0);
                                pts.push(pt1);
                            }
                            else
                            {
                                lastSegPt = new armyc2.c2sd.JavaLineArray.POINT2(pLinePoints[j]);
                            }
                        }
                    }
                }
                catch (exc)
                {
                    if (Clazz.instanceOf(exc))
                    {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "GetSAAFRMiddleLine", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetSAAFRMiddleLine", exc));
                    } else {
                        throw exc;
                    }
                }
                return pts;
            },
            GetSAAFRSegment: function (pLinePoints, lineType, dMRR, rev) {
                try {
                    var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt3 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt4 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt5 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var m = new armyc2.c2sd.JavaLineArray.ref();
                    var bolVertical = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble(pLinePoints[0], pLinePoints[1], m);
                    pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[0], pLinePoints[1], -dMRR, 5);
                    pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[1], pLinePoints[0], -dMRR, 0);
                    if (bolVertical !== 0 && m.value[0] < 1) {
                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[0], pLinePoints[1], pLinePoints[0], 2, dMRR);
                        pt2.style = 0;
                        pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[0], pLinePoints[1], pLinePoints[1], 2, dMRR);
                        pt3.style = 5;
                        pt4 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[0], pLinePoints[1], pLinePoints[0], 3, dMRR);
                        pt4.style = 0;
                        pt5 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[0], pLinePoints[1], pLinePoints[1], 3, dMRR);
                        pt5.style = 5;
                    } else {
                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[0], pLinePoints[1], pLinePoints[0], 0, dMRR);
                        pt2.style = 0;
                        pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[0], pLinePoints[1], pLinePoints[1], 0, dMRR);
                        pt3.style = 5;
                        pt4 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[0], pLinePoints[1], pLinePoints[0], 1, dMRR);
                        pt4.style = 0;
                        pt5 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[0], pLinePoints[1], pLinePoints[1], 1, dMRR);
                        pt5.style = 5;
                    }
                    pLinePoints[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                    pLinePoints[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                    pLinePoints[2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2);
                    pLinePoints[3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt3);
                    pLinePoints[4] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt4);
                    pLinePoints[5] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt5);
                    pLinePoints[5].style = 5;
//                    if (lineType === 22223000)
//                        pLinePoints[0].style = 5;
//                    if (rev === 1)
//                        pLinePoints[0].style = 5;
                    pLinePoints[0].style = 5;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "GetSAAFRSegment", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetSAAFRSegment", exc));
                    } else {
                        throw exc;
                    }
                }
                return;
            },
            GetSAAFRFillSegment: function (pLinePoints, dMRR) {
                try {
                    //var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    //var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt3 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt4 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt5 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var m = new armyc2.c2sd.JavaLineArray.ref();
                    var bolVertical = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble(pLinePoints[0], pLinePoints[1], m);
                    //pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[0], pLinePoints[1], -dMRR, 5);
                    //pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[1], pLinePoints[0], -dMRR, 0);
                    if (bolVertical !== 0 && m.value[0] < 1) {
                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[0], pLinePoints[1], pLinePoints[0], 2, dMRR);
                        //pt2.style = 0;
                        pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[0], pLinePoints[1], pLinePoints[1], 2, dMRR);
                        //pt3.style = 5;
                        pt4 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[0], pLinePoints[1], pLinePoints[0], 3, dMRR);
                        //pt4.style = 0;
                        pt5 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[0], pLinePoints[1], pLinePoints[1], 3, dMRR);
                        //pt5.style = 5;
                    } else {
                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[0], pLinePoints[1], pLinePoints[0], 0, dMRR);
                        //pt2.style = 0;
                        pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[0], pLinePoints[1], pLinePoints[1], 0, dMRR);
                        //pt3.style = 5;
                        pt4 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[0], pLinePoints[1], pLinePoints[0], 1, dMRR);
                        //pt4.style = 0;
                        pt5 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[0], pLinePoints[1], pLinePoints[1], 1, dMRR);
                        //pt5.style = 5;
                    }
                    //pLinePoints[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                    //pLinePoints[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                    pLinePoints[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2);
                    pLinePoints[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt3);
                    pLinePoints[2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt5);
                    pLinePoints[3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt4);
                    //pLinePoints[5].style = 5;
                    //if (lineType === 22223000)
                    //    pLinePoints[0].style = 5;
                    //if (rev === 1)
                    //    pLinePoints[0].style = 5;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "GetSAAFRFillSegment", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetSAAFRFillSegment", exc));
                    } else {
                        throw exc;
                    }
                }
                return;
            },
            ArcArrayDouble: function (pResultLinePoints, vblCounter, dRadius, linetype, converter) {
                try {
                    var startangle = 0;
                    var endangle = 0;
                    var increment = 0;
                    var length = 0;
                    var M = 0;
                    var j;
                    var numarcpts = 0;
                    var bolVertical = 0;
                    var m = new armyc2.c2sd.JavaLineArray.ref();
                    var C = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pResultLinePoints[0]);
                    var a = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pResultLinePoints[1]);
                    var e = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pResultLinePoints[0]);
                    var pArcLinePoints = null;
                    bolVertical = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble(a, e, m);
                    if (bolVertical !== 0)
                        M = Math.atan(m.value[0]);
                    else {
                        if (a.y < e.y)
                            M = -1.5707963267948966;
                        else
                            M = 1.5707963267948966;
                    }
                    if (converter)
                    {
                        var pt02d = new armyc2.c2sd.graphics2d.Point2D(pResultLinePoints[0].x, pResultLinePoints[0].y);
                        var pt12d = new armyc2.c2sd.graphics2d.Point2D(pResultLinePoints[1].x, pResultLinePoints[1].y);
                        var reverseM = false;
                        pt02d = converter.PixelsToGeo(pt02d);
                        pt12d = converter.PixelsToGeo(pt12d);
                        M = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.GetAzimuth(pt02d, pt12d);
                        M *= (Math.PI / 180);
                        if (M < 0)
                            M += Math.PI;
                    }
                    length = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(a, e);
                    if (converter)
                    {
                        var pt02d = new armyc2.c2sd.graphics2d.Point2D(pResultLinePoints[0].x, pResultLinePoints[0].y);
                        var pt12d = new armyc2.c2sd.graphics2d.Point2D(pResultLinePoints[1].x, pResultLinePoints[1].y);
                        pt02d = converter.PixelsToGeo(pt02d);
                        pt12d = converter.PixelsToGeo(pt12d);
                        length = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_distance(pt02d, pt12d, null, null);
                    }

                    switch (linetype) {
                        case 23157000:
                            startangle = M - 1.5707963267948966;
                            endangle = startangle + 3.141592653589793;
                            break;
                        case 231100000:
                            startangle = M - 0.7853981633974483;
                            endangle = startangle + 1.5707963267948966;
                            break;
                        case 211400000:
                        case 212600000:
                        case 212500000:
                            startangle = M;
                            endangle = startangle + 5.759586531581287;
                            break;
                        case 23173000:
                            startangle = M;
                            endangle = startangle + 1.5707963267948966;
                            break;
                        case 211600000:
                        case 211900000:
                        case 212100000:
                            startangle = M;
                            endangle = startangle + 5.899212871740834;
                            break;
                        default:
                            startangle = 0;
                            endangle = 6.283185307179586;
                            break;
                    }
                    if (a.x < e.x) {
                        switch (linetype) {
                            case 211400000:
                            case 212600000:
                            case 212500000:
                                startangle = M - 3.141592653589793;
                                endangle = startangle + 5.759586531581287;
                                break;
                            case 211600000:
                            case 211900000:
                            case 212100000:
                                startangle = M - 3.141592653589793;
                                endangle = startangle + 5.899212871740834;
                                break;
                            case 23173000:
                                startangle = M - 3.141592653589793;
                                endangle = startangle + 1.5707963267948966;
                                break;
                            case 23157000:
                                startangle = M - 3.141592653589793 + 1.5707963267948966;
                                endangle = startangle - 3.141592653589793;
                                break;
                            case 231100000:
                                startangle = M - 3.141592653589793 + 0.7853981633974483;
                                endangle = startangle - 1.5707963267948966;
                                break;
                            default:
                                break;
                        }
                    }
                    numarcpts = 26;
                    pArcLinePoints = new Array(numarcpts);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pArcLinePoints);
                    increment = (endangle - startangle) / (numarcpts - 1);

                    if (dRadius !== 0 && length !== 0)
                    {
                        C.x = Math.floor((e.x - (dRadius / length) * (a.x - e.x)));
                        C.y = Math.floor((e.y - (dRadius / length) * (a.y - e.y)));
                    }
                    else
                    {
                        C.x = e.x;
                        C.y = e.y;
                    }
                    if (converter)
                    {
                        var C2d = new armyc2.c2sd.graphics2d.Point2D(pResultLinePoints[0].x, pResultLinePoints[0].y);
                        C2d = converter.PixelsToGeo(C2d);
                        var az = 0, ptGeo = null, ptPixels = null;
                        for (j = 0; j < numarcpts; j++) {
                            az = startangle * 180 / Math.PI + j * increment * 180 / Math.PI;
                            ptGeo = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(C2d, length, az);
                            ptGeo = new armyc2.c2sd.graphics2d.Point2D(ptGeo.x, ptGeo.y);
                            ptPixels = converter.GeoToPixels(ptGeo);
                            pArcLinePoints[j].x = ptPixels.x;
                            pArcLinePoints[j].y = ptPixels.y;
                        }
                    }
                    else
                    {
                        for (j = 0; j < numarcpts; j++) {
                            pArcLinePoints[j].x = Math.floor((dRadius * Math.cos(startangle + j * increment)));
                            pArcLinePoints[j].y = Math.floor((dRadius * Math.sin(startangle + j * increment)));
                        }
                        for (j = 0; j < numarcpts; j++) {
                            pArcLinePoints[j].x += C.x;
                            pArcLinePoints[j].y += C.y;
                        }
                    }
                    switch (linetype) {
                        case 211400000:
                        case 212600000:
                        case 212500000:
                        case 211600000:
                        case 211900000:
                        case 212100000:
                        case 23157000:
                        case 23173000:
                        case 231100000:
                            for (j = 0; j < numarcpts; j++)
                                pResultLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArcLinePoints[j]);

                            break;
                        default:
                            for (j = 0; j < numarcpts; j++)
                                pResultLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArcLinePoints[j]);

                            break;
                    }
                    pArcLinePoints = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "ArcArrayDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ArcArrayDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return pResultLinePoints;
            },
            CalcCircleDouble2: function (Center, pt1, numpts, CirclePoints, converter)
            {
                try
                {
                    var j = 0;
                    var increment = (Math.PI * 2) / (numpts - 1);
                    var ptCenter2d = new armyc2.c2sd.graphics2d.Point2D(Center.x, Center.y);
                    ptCenter2d = converter.PixelsToGeo(ptCenter2d);
                    var pt12d = new armyc2.c2sd.graphics2d.Point2D(pt1.x, pt1.y);
                    pt12d = converter.PixelsToGeo(pt12d);
                    Center = new armyc2.c2sd.JavaLineArray.POINT2(ptCenter2d.getX(), ptCenter2d.getY());
                    pt1 = new armyc2.c2sd.JavaLineArray.POINT2(pt12d.getX(), pt12d.getY());
                    var dist = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_distance(Center, pt1, null, null);

                    var az = 0;
                    var startangle = 0, endAngle = Math.PI * 2;
                    var ptGeo = null, ptPixels = null;
                    var ptGeo2d = null;
                    for (j = 0; j < numpts - 1; j++) {
                        az = startangle * 180 / Math.PI + j * increment * 180 / Math.PI;
                        //ptGeo=mdlGeodesic.geodesic_coordinate(C2d,length,az);
                        ptGeo = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(Center, dist, az);
                        ptGeo2d = new armyc2.c2sd.graphics2d.Point2D(ptGeo.x, ptGeo.y);
                        ptGeo2d = converter.GeoToPixels(ptGeo2d);
                        ptPixels = new armyc2.c2sd.JavaLineArray.POINT2(ptGeo2d.getX(), ptGeo2d.getY());
                        CirclePoints[j].x = ptPixels.x;
                        CirclePoints[j].y = ptPixels.y;
                    }
                    CirclePoints[numpts - 1] = new armyc2.c2sd.JavaLineArray.POINT2(CirclePoints[0]);
                }
                catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "ArcArrayDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside CalcCircleDouble2", exc));
                    } else {
                        throw exc;
                    }
                }
            },
            CalcCircleDouble: function (Center, radius, numpts, CirclePoints, styl) {
                try {
                    var j = 0;
                    var dSegmentAngle = 6.283185307179586 / numpts;
                    var x = 0;
                    var y = 0;
                    for (j = 0; j < numpts - 1; j++) {
                        x = Center.x + (radius * Math.cos(j * dSegmentAngle));
                        y = Center.y + (radius * Math.sin(j * dSegmentAngle));
                        CirclePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x, y);
                        CirclePoints[j].style = styl;
                    }
                    CirclePoints[numpts - 1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(CirclePoints[0]);
                    switch (styl) {
                        case 0:
                            CirclePoints[numpts - 1].style = 0;
                            break;
                        case 9:
                            CirclePoints[numpts - 1].style = 10;
                            break;
                        case 11:
                            CirclePoints[numpts - 1].style = 12;
                            break;
                        default:
                            CirclePoints[numpts - 1].style = 5;
                            break;
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "CalcCircleDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside CalcCircleDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return;
            },
            CalcCircleShape: function (Center, radius, numpts, CirclePoints, styl) {
                var shape;
                if (styl === 9)
                    shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL);
                else
                    shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                shape.set_Style(styl);
                try {
                    var j = 0;
                    armyc2.c2sd.JavaLineArray.lineutility.CalcCircleDouble(Center, radius, numpts, CirclePoints, styl);
                    shape.moveTo(CirclePoints[0]);
                    for (j = 1; j < numpts; j++) {
                        shape.lineTo(CirclePoints[j]);
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "CalcCircleShape", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside CalcCircleShape", exc));
                    } else {
                        throw exc;
                    }
                }
                return shape;
            },
            GetSquallCurve: function (StartPt, EndPt, pSquallPts, sign, amplitude, quantity) {
                try {
                    var dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(StartPt, EndPt);
                    var ptTemp = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var j = 0;
                    for (j = 0; j < quantity; j++) {
                        ptTemp = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(EndPt, StartPt, -dist * j / quantity);
                        pSquallPts[j].x = ptTemp.x;
                        pSquallPts[j].y = ptTemp.y + amplitude * sign * Math.sin(j * 180 / quantity * 3.141592653589793 / 180);
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "GetSquallShape", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GeSquallShape", exc));
                    } else {
                        throw exc;
                    }
                }
                return;
            },
            GetSquallSegment: function (StartPt, EndPt, pSquallPts, sign, amplitude, quantity, length) {
                var counter = 0;
                try {
                    var StartCurvePt;
                    var EndCurvePt;
                    var pSquallPts2 = new Array(quantity);
                    var dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(StartPt, EndPt);
                    var numCurves = Math.floor((dist / length));
                    var j = 0;
                    var k = 0;
                    var EndPt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var angle = Math.atan((StartPt.y - EndPt.y) / (StartPt.x - EndPt.x));
                    var lAngle = Math.floor(((57.29577951308232) * angle));
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pSquallPts2);
                    if (StartPt.x < EndPt.x)
                        EndPt2.x = StartPt.x + dist;
                    else
                        EndPt2.x = StartPt.x - dist;
                    EndPt2.y = StartPt.y;
                    EndCurvePt = StartPt;
                    for (j = 0; j < numCurves; j++) {
                        StartCurvePt = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(EndPt2, StartPt, -(j * length));
                        EndCurvePt = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(EndPt2, StartPt, -((j + 1) * length));
                        armyc2.c2sd.JavaLineArray.lineutility.GetSquallCurve(StartCurvePt, EndCurvePt, pSquallPts2, sign.value[0], amplitude, quantity);
                        for (k = 0; k < quantity; k++) {
                            pSquallPts[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pSquallPts2[k]);
                            counter++;
                        }
                        sign.value[0] = -sign.value[0];
                    }
                    if (numCurves === 0) {
                        pSquallPts[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(StartPt);
                        counter++;
                        pSquallPts[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(EndPt);
                        counter++;
                    }
                    armyc2.c2sd.JavaLineArray.lineutility.RotateGeometryDoubleOrigin(pSquallPts, counter, lAngle);
                    pSquallPts2 = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "GetSquallSegment", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetSquallSegment", exc));
                    } else {
                        throw exc;
                    }
                }
                return counter;
            },
            PointInBounds2: function (pt, ul, lr) {
                try {
                    var maxX = lr.x;
                    var minX = ul.x;
                    var maxY = lr.y;
                    var minY = ul.y;
                    if (pt.x <= maxX && pt.x >= minX && pt.y <= maxY && pt.y >= minY)
                        return 1;
                    else
                        return 0;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "PointInBounds2", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside PointInBounds2", exc));
                    } else {
                        throw exc;
                    }
                }
                return 1;
            },
            intersectSegment: function (pt0, pt1, sidePt0, sidePt1) {
                var pt = null;
                try {
                    if (pt0.x === pt1.x) {
                        return null;
                    }
                    var m = (pt1.y - pt0.y) / (pt1.x - pt0.x);
                    var dx = 0;
                    var dy = 0;
                    var x = 0;
                    var y = 0;
                    var upper = null;
                    var lower = null;
                    var left = null;
                    var right = null;
                    var bolVertical = new Boolean(false);
                    if (sidePt0.x === sidePt1.x) {
                        bolVertical = new Boolean(true);
                        if (sidePt0.y < sidePt1.y) {
                            upper = sidePt0;
                            lower = sidePt1;
                        } else {
                            upper = sidePt1;
                            lower = sidePt0;
                        }
                    } else {
                        if (sidePt0.x < sidePt1.x) {
                            left = sidePt0;
                            right = sidePt1;
                        } else {
                            left = sidePt1;
                            right = sidePt0;
                        }
                    }
                    if ((bolVertical).valueOf()) {
                        dx = upper.x - pt0.x;
                        dy = m * dx;
                        x = upper.x;
                        y = pt0.y + dy;
                        pt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x, y);
                        if (pt0.x <= pt.x && pt.x <= pt1.x) {
                            if (upper.y <= pt.y && pt.y <= lower.y) {
                                return pt;
                            }
                        } else if (pt0.x >= pt.x && pt.x >= pt1.x) {
                            if (upper.y <= pt.y && pt.y <= lower.y) {
                                return pt;
                            }
                        }
                    } else {
                        dy = left.y - pt0.y;
                        dx = dy / m;
                        x = pt0.x + dx;
                        y = left.y;
                        pt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(x, y);
                        if (pt0.y <= pt.y && pt.y <= pt1.y) {
                            if (left.x <= pt.x && pt.x <= right.x) {
                                return pt;
                            }
                        } else if (pt0.y >= pt.y && pt.y >= pt1.y) {
                            if (left.x <= pt.x && pt.x <= right.x) {
                                return pt;
                            }
                        }
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "intersectSegment", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside intersectSegment", exc));
                    } else {
                        throw exc;
                    }
                }
                return null;
            },
            BoundOneSegment: function (pt0, pt1, ul, lr) {
                var line = new Array(2);
                try {
                    if (pt0.y < ul.y && pt1.y < ul.y) {
                        return null;
                    }
                    if (pt0.y > lr.y && pt1.y > lr.y) {
                        return null;
                    }
                    if (pt0.x < ul.x && pt1.x < ul.x) {
                        return null;
                    }
                    if (pt0.x > lr.x && pt1.x > lr.x) {
                        return null;
                    }
                    var bolVertical = new Boolean(false);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(line);
                    if (pt0.x === pt1.x) {
                        bolVertical = new Boolean(true);
                    }
                    if (bolVertical.valueOf()) {
                        line[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                        if (line[0].y < ul.y) {
                            line[0].y = ul.y;
                        }
                        if (line[0].y > lr.y) {
                            line[0].y = lr.y;
                        }
                        line[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                        if (line[1].y < ul.y) {
                            line[1].y = ul.y;
                        }
                        if (line[1].y > lr.y) {
                            line[1].y = lr.y;
                        }
                        return line;
                    }
                    var dx = 0;
                    var dy = 0;
                    var x = 0;
                    var y = 0;
                    var m = (pt1.y - pt0.y) / (pt1.x - pt0.x);
                    var side0Intersect = new Boolean(false);
                    var side1Intersect = new Boolean(false);
                    var side2Intersect = new Boolean(false);
                    var side3Intersect = new Boolean(false);
                    var ur = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(lr.x, ul.y);
                    var ll = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ul.x, lr.y);
                    var pt0Intersect = null;
                    if (armyc2.c2sd.JavaLineArray.lineutility.PointInBounds2(pt0, ul, lr) === 1) {
                        pt0Intersect = pt0;
                    }
                    if (pt0Intersect === null) {
                        pt0Intersect = armyc2.c2sd.JavaLineArray.lineutility.intersectSegment(pt0, pt1, ll, ul);
                        side0Intersect = new Boolean(true);
                    }
                    if (pt0Intersect === null) {
                        pt0Intersect = armyc2.c2sd.JavaLineArray.lineutility.intersectSegment(pt0, pt1, ul, ur);
                        side1Intersect = new Boolean(true);
                    }
                    if (pt0Intersect === null) {
                        pt0Intersect = armyc2.c2sd.JavaLineArray.lineutility.intersectSegment(pt0, pt1, ur, lr);
                        side2Intersect = new Boolean(true);
                    }
                    if (pt0Intersect === null) {
                        pt0Intersect = armyc2.c2sd.JavaLineArray.lineutility.intersectSegment(pt0, pt1, ll, lr);
                        side3Intersect = new Boolean(true);
                    }
                    var pt1Intersect = null;
                    if (armyc2.c2sd.JavaLineArray.lineutility.PointInBounds2(pt1, ul, lr) === 1) {
                        pt1Intersect = pt1;
                    }
                    if (pt1Intersect === null && side0Intersect.valueOf() === false) {
                        pt1Intersect = armyc2.c2sd.JavaLineArray.lineutility.intersectSegment(pt1, pt0, ll, ul);
                    }
                    if (pt1Intersect === null && side1Intersect.valueOf() === false) {
                        pt1Intersect = armyc2.c2sd.JavaLineArray.lineutility.intersectSegment(pt1, pt0, ul, ur);
                    }
                    if (pt1Intersect === null && side2Intersect.valueOf() === false) {
                        pt1Intersect = armyc2.c2sd.JavaLineArray.lineutility.intersectSegment(pt1, pt0, ur, lr);
                    }
                    if (pt1Intersect === null && side3Intersect.valueOf() === false) {
                        pt1Intersect = armyc2.c2sd.JavaLineArray.lineutility.intersectSegment(pt1, pt0, ll, lr);
                    }
                    if (pt0Intersect !== null && pt1Intersect !== null) {
                        line[0] = pt0Intersect;
                        line[1] = pt1Intersect;
                    } else {
                        line = null;
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "BoundOneSegment", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside BoundOneSegment", exc));
                    } else {
                        throw exc;
                    }
                }
                return line;
            },
            GetDitchSpikeDouble: function (pLinePoints, nOldCounter, bWayIs, linetype) {
                var nSpikeCounter = 0;
                try {
                    var nNumberOfSegments = 0;
                    var lCircleCounter = 0;
                    var bolVertical = 0;
                    var nTemp = 0;
                    var i;
                    var j;
                    var dPrinter = 1.0;
                    var dIntLocation1x = 0;
                    var dIntLocation2x = 0;
                    var dIntLocation1y = 0;
                    var dIntLocation2y = 0;
                    var r = 0;
                    var s = 0;
                    var use = 0;
                    var length = 0;
                    var k = 0;
                    var bint = 0;
                    var pdAnswer = new armyc2.c2sd.JavaLineArray.ref();
                    var m = new armyc2.c2sd.JavaLineArray.ref();
                    var UpperLinePoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    var Lower1LinePoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    var Lower2LinePoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    var a = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    var b = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    var pCirclePoints = new Array(pLinePoints.length);
                    var averagePoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var lastAveragePoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pTempLinePoints = null;
                    var minLength = 24;
                    pTempLinePoints = new Array(nOldCounter);
                    for (j = 0; j < nOldCounter; j++) {
                        pTempLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j]);
                    }
                    var basePoints = new java.util.ArrayList();
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pCirclePoints);
                    nSpikeCounter = nOldCounter;
                    for (i = 0; i < nOldCounter - 1; i++) {
                        if (linetype === 23132000 && i === 0)
                            minLength = 38;
                        nTemp = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueLinesDouble(15 * Math.floor(dPrinter), pLinePoints[i], pLinePoints[i + 1], pdAnswer);
                        r = pdAnswer.value[3];
                        s = pdAnswer.value[5];
                        length = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[i], pLinePoints[i + 1]);
                        bolVertical = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble(pLinePoints[i], pLinePoints[i + 1], m);
                        nNumberOfSegments = Math.floor(((length - 1) / (12 * dPrinter)));
                        if (length > minLength * dPrinter) {
                            if (bWayIs !== 0) {
                                if (pLinePoints[i].x <= pLinePoints[i + 1].x) {
                                    use = r;
                                }
                                if (pLinePoints[i].x >= pLinePoints[i + 1].x) {
                                    use = s;
                                }
                            } else {
                                if (pLinePoints[i].x <= pLinePoints[i + 1].x) {
                                    use = s;
                                }
                                if (pLinePoints[i].x >= pLinePoints[i + 1].x) {
                                    use = r;
                                }
                            }
                            for (j = 1; j <= nNumberOfSegments; j++) {
                                k = j;
                                a = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[i]);
                                b = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[i + 1]);
                                if (j > 1) {
                                    dIntLocation1x = dIntLocation2x;
                                } else {
                                    dIntLocation1x = pLinePoints[i].x + ((k * 12.0 - 12) * dPrinter / length) * (pLinePoints[i + 1].x - pLinePoints[i].x);
                                }
                                if (j > 1) {
                                    dIntLocation1y = dIntLocation2y;
                                } else {
                                    dIntLocation1y = pLinePoints[i].y + ((k * 12.0 - 6.0) * dPrinter / length) * (pLinePoints[i + 1].y - pLinePoints[i].y);
                                }
                                dIntLocation2x = pLinePoints[i].x + ((k * 12.0 + 6.0) * dPrinter / length) * (pLinePoints[i + 1].x - pLinePoints[i].x);
                                dIntLocation2y = pLinePoints[i].y + ((k * 12.0 + 6.0) * dPrinter / length) * (pLinePoints[i + 1].y - pLinePoints[i].y);
                                if (m.value[0] !== 0 && bolVertical !== 0) {
                                    bint = (dIntLocation1y + dIntLocation2y) / 2.0 + (1 / m.value[0]) * (dIntLocation1x + dIntLocation2x) / 2.0;
                                    UpperLinePoint = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueIntersectDouble2(m.value[0], use, -1 / m.value[0], bint, 1, 1, pLinePoints[0].x, pLinePoints[0].y);
                                }
                                if (bolVertical === 0) {
                                    if (dIntLocation1y < dIntLocation2y) {
                                        UpperLinePoint.y = Math.floor(dIntLocation1y) + Math.floor((length / nNumberOfSegments / 2));
                                    } else {
                                        UpperLinePoint.y = Math.floor(dIntLocation1y) - Math.floor((length / nNumberOfSegments / 2));
                                    }
                                    if (pLinePoints[i].y < pLinePoints[i + 1].y) {
                                        UpperLinePoint.x = Math.floor(dIntLocation1x) + Math.floor((length / nNumberOfSegments));
                                    } else {
                                        UpperLinePoint.x = Math.floor(dIntLocation1x) - Math.floor((length / nNumberOfSegments));
                                    }
                                }
                                if (m.value[0] === 0 && bolVertical !== 0) {
                                    if (dIntLocation1x < dIntLocation2x) {
                                        UpperLinePoint.x = Math.floor(dIntLocation1x) + Math.floor((length / nNumberOfSegments / 2));
                                    } else {
                                        UpperLinePoint.x = Math.floor(dIntLocation1x) - Math.floor((length / nNumberOfSegments / 2));
                                    }
                                    if (pLinePoints[i + 1].x < pLinePoints[i].x) {
                                        UpperLinePoint.y = Math.floor(dIntLocation1y) + Math.floor((length / nNumberOfSegments));
                                    } else {
                                        UpperLinePoint.y = Math.floor(dIntLocation1y) - Math.floor((length / nNumberOfSegments));
                                    }
                                }
                                Lower1LinePoint.x = dIntLocation1x;
                                Lower1LinePoint.y = dIntLocation1y;
                                Lower2LinePoint.x = dIntLocation2x;
                                Lower2LinePoint.y = dIntLocation2y;
                                pLinePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(Lower1LinePoint);
                                if (linetype === 23131200 || linetype === 23132000) {
                                    pLinePoints[nSpikeCounter].style = 9;
                                }
                                if (j % 2 === 1 && linetype === 23132000)
                                    pLinePoints[nSpikeCounter].style = 5;
                                nSpikeCounter++;
                                pLinePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(UpperLinePoint);
                                if (linetype === 23131200 || linetype === 23132000) {
                                    pLinePoints[nSpikeCounter].style = 9;
                                }
                                if (j % 2 === 1 && linetype === 23132000)
                                    pLinePoints[nSpikeCounter].style = 5;
                                nSpikeCounter++;
                                pLinePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(Lower2LinePoint);
                                if (linetype === 23131200 || linetype === 23132000) {
                                    pLinePoints[nSpikeCounter].style = 10;
                                }
                                if (j % 2 === 1 && linetype === 23132000)
                                    pLinePoints[nSpikeCounter].style = 5;
                                nSpikeCounter++;
                                if (linetype === 23132000) {
                                    if (j % 2 === 0) {
                                        averagePoint = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(Lower1LinePoint, Lower2LinePoint, 0);
                                        averagePoint = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(averagePoint, UpperLinePoint, 0);
                                    } else if (j === 1) {
                                        averagePoint = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(Lower2LinePoint, Lower1LinePoint, 5);
                                        averagePoint = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(averagePoint, UpperLinePoint, 0);
                                    }
                                }
                                if (j > 1 && j < nNumberOfSegments) {
                                    basePoints.add(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(Lower1LinePoint));
                                } else if (j === 1) {
                                    basePoints.add(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[i]));
                                } else if (j === nNumberOfSegments) {
                                    basePoints.add(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[i + 1]));
                                    basePoints.get(basePoints.size() - 1).style = 5;
                                }
                                if (linetype === 23132000 && j > 1) {
                                    if (j % 2 === 0) {
                                        pCirclePoints[lCircleCounter] = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(averagePoint, lastAveragePoint, 20);
                                        lCircleCounter++;
                                    }
                                }
                                if (j < nNumberOfSegments && linetype === 23132000) {
                                    if (j === 1 || j % 2 === 0) {
                                        lastAveragePoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(averagePoint);
                                    }
                                }
                            }
                        } else {
                            pLinePoints[nSpikeCounter].x = pLinePoints[i].x;
                            pLinePoints[nSpikeCounter].y = pLinePoints[i].y;
                            pLinePoints[nSpikeCounter].style = 0;
                            nSpikeCounter++;
                            pLinePoints[nSpikeCounter].x = pLinePoints[i + 1].x;
                            pLinePoints[nSpikeCounter].y = pLinePoints[i + 1].y;
                            pLinePoints[nSpikeCounter].style = 5;
                            nSpikeCounter++;
                        }
                    }
                    for (j = 0; j < nOldCounter; j++) {
                        pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pTempLinePoints[nOldCounter - j - 1]);
                        pLinePoints[j].style = 5;
                    }
                    if (pLinePoints[nSpikeCounter - 1].style === 0)
                        pLinePoints[nSpikeCounter - 1].style = 5;
                    for (j = nSpikeCounter; j < nSpikeCounter + basePoints.size(); j++) {
                        pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(basePoints.get(j - nSpikeCounter));
                        if (pLinePoints[j].style !== 5)
                            pLinePoints[j].style = 0;
                    }
                    nSpikeCounter += basePoints.size();
                    if (linetype === 23132000) {
                        pLinePoints[nSpikeCounter - 1].style = 5;
                        for (j = nSpikeCounter; j < nSpikeCounter + lCircleCounter; j++) {
                            pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pCirclePoints[j - nSpikeCounter]);
                            pLinePoints[j].style = 20;
                        }
                        nSpikeCounter += lCircleCounter;
                    }
                    pdAnswer = null;
                    pCirclePoints = null;
                    pTempLinePoints = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "GetDitchSpikeDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetDitchSpikeDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return nSpikeCounter;
            },
            MoveChannelPixels: function (pLinePoints) {
                try {
                    if (pLinePoints === null || pLinePoints.length <= 0)
                        return;
                    var pixels = Clazz.newArray(pLinePoints.length * 2, 0);
                    var bolNoRepeats;
                    var j;
                    var k = 0;
                    var x1;
                    var y1;
                    var x2;
                    var y2;
                    var count = pLinePoints.length;
                    for (j = 0; j < count; j++) {
                        pixels[k++] = pLinePoints[j].x;
                        pixels[k++] = pLinePoints[j].y;
                    }
                    bolNoRepeats = false;
                    do {
                        bolNoRepeats = true;
                        for (j = 0; j < count - 1; j++) {
                            x1 = pixels[2 * j];
                            y1 = pixels[2 * j + 1];
                            x2 = pixels[2 * j + 2];
                            y2 = pixels[2 * j + 3];
                            if (x1 === x2 && y1 === y2) {
                                bolNoRepeats = false;
                                pixels[2 * j + 2] = Math.floor(x2) + 1;
                                break;
                            }
                        }
                    } while (bolNoRepeats === false);
                    k = 0;
                    for (j = 0; j < count; j++) {
                        pLinePoints[j].x = pixels[k++];
                        pLinePoints[j].y = pixels[k++];
                    }
                    return;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "MoveChannelPixels", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside MoveChannelPixels", exc));
                    } else {
                        throw exc;
                    }
                }
            },
            moveSingleCPixels: function (linetype, pLinePoints) {
                try {
                    switch (linetype) {
                        case 231117100:
                            break;
                        default:
                            return;
                    }
                    if (pLinePoints.length > 1) {
                        if (pLinePoints[1].y === pLinePoints[0].y)
                            pLinePoints[1].y++;
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "MoveSingleCPixels", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside MoveSingleCPixels", exc));
                    } else {
                        throw exc;
                    }
                }
            },
            RotateGeometryDouble: function (pLinePoints, vblCounter, lAngle, converter, ptCenter) {
                try {
                    var j = 0;
                    var dRotate = 0;
                    var dTheta = 0;
                    var dGamma = 0;
                    var x = 0;
                    var y = 0;
                    //add converter stuff
                    var temp2d = null, d = 0, theta = 0;
                    var a12 = new armyc2.c2sd.JavaLineArray.ref();
                    var a21 = new armyc2.c2sd.JavaLineArray.ref();
                    //end section
                    if (lAngle !== 0) {
                        var pdCenter;
                        dRotate = lAngle * 3.141592653589793 / 180;
                        pdCenter = armyc2.c2sd.JavaLineArray.lineutility.CalcCenterPointDouble(pLinePoints, vblCounter);
                        if (converter)
                        {
                            pdCenter = new armyc2.c2sd.graphics2d.Point2D(pdCenter.x, pdCenter.y);
                            pdCenter = converter.PixelsToGeo(pdCenter);
                            if (ptCenter)
                                pdCenter = ptCenter;
                        }
                        for (j = 0; j < vblCounter; j++)
                        {
                            if (converter)
                            {
                                temp2d = new armyc2.c2sd.graphics2d.Point2D(pLinePoints[j].x, pLinePoints[j].y);
                                temp2d = converter.PixelsToGeo(temp2d);
                                d = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_distance(pdCenter, temp2d, a12, a21);
                                theta = a12.value[0] + lAngle;
                                temp2d = armyc2.c2sd.JavaTacticalRenderer.mdlGeodesic.geodesic_coordinate(pdCenter, d, theta);
                                temp2d = new armyc2.c2sd.graphics2d.Point2D(temp2d.x, temp2d.y);
                                temp2d = converter.GeoToPixels(temp2d);
                                pLinePoints[j].x = temp2d.x;
                                pLinePoints[j].y = temp2d.y;
                            }
                            else
                            {
                                if (pLinePoints[j].x === pdCenter.x) {
                                    if ((pLinePoints[j].y > pdCenter.y))
                                        dGamma = 4.71238898038469;
                                    else
                                        dGamma = 1.5707963267948966;
                                } else
                                    dGamma = 3.141592653589793 + Math.atan((pLinePoints[j].y - pdCenter.y) / (pLinePoints[j].x - pdCenter.x));
                                if (pLinePoints[j].x >= pdCenter.x)
                                    dGamma = dGamma + 3.141592653589793;
                                dTheta = dRotate + dGamma;
                                y = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[j], pdCenter) * Math.sin(dTheta);
                                x = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[j], pdCenter) * Math.cos(dTheta);
                                pLinePoints[j].y = pdCenter.y + y;
                                pLinePoints[j].x = pdCenter.x + x;
                            }
                        }
                        return;
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "RotateGeometryDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside RotateGeometryDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return;
            },
            adjustCATKBYFIREControlPoint: function (linetype, pLinePoints, dist) {
                try {
                    if (linetype !== 21710000)
                        return;
                    var dist2 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints.get(0), pLinePoints.get(1));
                    if (dist2 <= dist)
                        return;
                    var pt = null;
                    var count = pLinePoints.size();
                    var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints.get(0));
                    var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints.get(1));
                    var controlPt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints.get(count - 1));
                    var pt4 = armyc2.c2sd.JavaLineArray.lineutility.PointRelativeToLine(pt0, pt1, pt1, controlPt);
                    pt = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pt4, controlPt, dist);
                    pLinePoints.set(count - 1, pt);
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "adjustCATKBYFIREControlPoint", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside adjustCATKBYFIREControlPoint", exc));
                    } else {
                        throw exc;
                    }
                }
                return;
            },
            PointRelativeToLine: function () {
                var ptResult = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                try {
                    var pt0 = arguments[0];
                    var pt1 = arguments[1];
                    var atPoint = null;
                    var ptRelative = null;
                    if (arguments.length === 3)
                    {
                        ptRelative = arguments[2];
                        var bolVertical = 0;
                        var m = new armyc2.c2sd.JavaLineArray.ref();
                        var midPt = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt0, pt1, 0);
                        var b1 = 0;
                        var b2 = 0;
                        bolVertical = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble(pt0, pt1, m);
                        if (bolVertical === 0) {
                            ptResult.x = ptRelative.x;
                            ptResult.y = midPt.y;
                        }
                        if (bolVertical !== 0 && m.value[0] === 0) {
                            ptResult.x = midPt.x;
                            ptResult.y = ptRelative.y;
                        }
                        if (bolVertical !== 0 && m.value[0] !== 0) {
                            b1 = midPt.y + (1 / m.value[0]) * midPt.x;
                            b2 = ptRelative.y - m.value[0] * ptRelative.x;
                            ptResult = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueIntersectDouble2(-1 / m.value[0], b1, m.value[0], b2, 1, 1, 0, 0);
                        }
                    }
                    else if (arguments.length === 4)
                    {
                        atPoint = arguments[2];
                        ptRelative = arguments[3];
                        bolVertical = 0;
                        m = new armyc2.c2sd.JavaLineArray.ref();
                        b1 = 0;
                        b2 = 0;
                        bolVertical = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble(pt0, pt1, m);
                        if (bolVertical === 0) {
                            ptResult.x = ptRelative.x;
                            ptResult.y = atPoint.y;
                        }
                        if (bolVertical !== 0 && m.value[0] === 0) {
                            ptResult.x = atPoint.x;
                            ptResult.y = ptRelative.y;
                        }
                        if (bolVertical !== 0 && m.value[0] !== 0) {
                            b1 = atPoint.y + (1 / m.value[0]) * atPoint.x;
                            b2 = ptRelative.y - m.value[0] * ptRelative.x;
                            ptResult = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueIntersectDouble2(-1 / m.value[0], b1, m.value[0], b2, 1, 1, 0, 0);
                        }
                    }
                }
                catch (exc)
                {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "PointRelativeToLine", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside PointRelativeToLine", exc));
                    } else {
                        throw exc;
                    }
                }
                return ptResult;
            },
            LineRelativeToLine: function (pt0, pt1, ptRelative, pt2, pt3) {
                try {
                    var bolVertical = 0;
                    var m = new armyc2.c2sd.JavaLineArray.ref();
                    var b1 = 0;
                    var b2 = 0;
                    var pt2Temp = null;
                    var pt3Temp = null;
                    bolVertical = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble(pt0, pt1, m);
                    if (bolVertical === 0) {
                        pt2.x = ptRelative.x;
                        pt2.y = pt0.y;
                        pt3.x = ptRelative.x;
                        pt3.y = pt1.y;
                    }
                    if (bolVertical !== 0 && m.value[0] === 0) {
                        pt2.x = pt0.x;
                        pt2.y = ptRelative.y;
                        pt3.x = pt1.x;
                        pt3.y = ptRelative.y;
                    }
                    if (bolVertical !== 0 && m.value[0] !== 0) {
                        b1 = pt0.y + (1 / m.value[0]) * pt0.x;
                        b2 = ptRelative.y - m.value[0] * ptRelative.x;
                        pt2Temp = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueIntersectDouble2(-1 / m.value[0], b1, m.value[0], b2, 1, 1, 0, 0);
                        b1 = pt1.y + (1 / m.value[0]) * pt1.x;
                        pt3Temp = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueIntersectDouble2(-1 / m.value[0], b1, m.value[0], b2, 1, 1, 0, 0);
                        pt2.x = pt2Temp.x;
                        pt2.y = pt2Temp.y;
                        pt3.x = pt3Temp.x;
                        pt3.y = pt3Temp.y;
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "LineRelativeToLine", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside LineRelativeToLine", exc));
                    } else {
                        throw exc;
                    }
                }
                return;
            },
            CalcMBR: function (pLinePoints, numpts, ulx, uly, lrx, lry) {
                try {
                    var j = 0;
                    ulx.value = Clazz.newArray(1, 0);
                    uly.value = Clazz.newArray(1, 0);
                    lrx.value = Clazz.newArray(1, 0);
                    lry.value = Clazz.newArray(1, 0);
                    ulx.value[0] = 1.7976931348623157E308;
                    uly.value[0] = 1.7976931348623157E308;
                    lrx.value[0] = -1.7976931348623157E308;
                    lry.value[0] = -1.7976931348623157E308;
                    for (j = 0; j < numpts; j++) {
                        if (pLinePoints[j].x > lrx.value[0])
                            lrx.value[0] = pLinePoints[j].x;
                        if (pLinePoints[j].y > lry.value[0])
                            lry.value[0] = pLinePoints[j].y;
                        if (pLinePoints[j].x < ulx.value[0])
                            ulx.value[0] = pLinePoints[j].x;
                        if (pLinePoints[j].y < uly.value[0])
                            uly.value[0] = pLinePoints[j].y;
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "CalcMBR", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside CalcMBR", exc));
                    } else {
                        throw exc;
                    }
                }
                return;
            },
            CalcMBRPoints: function (pLinePoints, numpts, ul, lr) {
                try {
                    var j = 0;
                    ul.x = 1.7976931348623157E308;
                    ul.y = 1.7976931348623157E308;
                    lr.x = -1.7976931348623157E308;
                    lr.y = -1.7976931348623157E308;
                    for (j = 0; j < numpts; j++) {
                        if (pLinePoints[j].x > lr.x)
                            lr.x = pLinePoints[j].x;
                        if (pLinePoints[j].y > lr.y)
                            lr.y = pLinePoints[j].y;
                        if (pLinePoints[j].x < ul.x)
                            ul.x = pLinePoints[j].x;
                        if (pLinePoints[j].y < ul.y)
                            ul.y = pLinePoints[j].y;
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "CalcMBRPoints", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside CalcMBRPoints", exc));
                    } else {
                        throw exc;
                    }
                }
                return;
            },
            MBRDistance: function (pLinePoints, numpts) {
                var result = 0;
                try {
                    var ulx = new armyc2.c2sd.JavaLineArray.ref();
                    var uly = new armyc2.c2sd.JavaLineArray.ref();
                    var lrx = new armyc2.c2sd.JavaLineArray.ref();
                    var lry = new armyc2.c2sd.JavaLineArray.ref();
                    armyc2.c2sd.JavaLineArray.lineutility.CalcMBR(pLinePoints, numpts, ulx, uly, lrx, lry);
                    result = Math.sqrt((lrx.value[0] - ulx.value[0]) * (lrx.value[0] - ulx.value[0]) + (lry.value[0] - uly.value[0]) * (lry.value[0] - uly.value[0]));
                    var xdist = Math.abs(lrx.value[0] - ulx.value[0]);
                    var ydist = Math.abs(lry.value[0] - uly.value[0]);
                    var max = xdist;
                    if (ydist > xdist)
                        max = ydist;
                    if (result === 0 || Double.isInfinite(result)) {
                        if (max > 0)
                            result = max;
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "MBRDistance", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside MBRDistance", exc));
                    } else {
                        throw exc;
                    }
                }
                return result;
            },
            Reverse2Points: function (pt1, pt2) {
                try {
                    var tempPt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    tempPt.x = pt1.x;
                    tempPt.y = pt1.y;
                    pt1.x = pt2.x;
                    pt1.y = pt2.y;
                    pt2.x = tempPt.x;
                    pt2.y = tempPt.y;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "Reverse2Points", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside Reverse2Points", exc));
                    } else {
                        throw exc;
                    }
                }
                return;
            },
            createStrokedShape: function (shape) {
                var newshape = new armyc2.c2sd.graphics2d.GeneralPath();
                try {
                    var coords = Clazz.newArray(6, 0);
                    for (var i = shape.getPathIterator(null); !i.isDone(); i.next()) {
                        var type = i.currentSegment(coords);
                        switch (type) {
                            case 0:
                                newshape.moveTo(coords[0], coords[1]);
                                break;
                            case 1:
                                newshape.lineTo(coords[0], coords[1]);
                                break;
                            case 2:
                                newshape.quadTo(coords[0], coords[1], coords[2], coords[3]);
                                break;
                            case 3:
                                newshape.curveTo(coords[0], coords[1], coords[2], coords[3], coords[4], coords[5]);
                                break;
                            case 4:
                                newshape.closePath();
                                break;
                        }
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.lineutility._className, "createStrokedShape", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside createStrokedShape", exc));
                    } else {
                        throw exc;
                    }
                }
                return newshape;
            },
            /*
             *overloads:
             *(POINT2)
             *(x,y)
             *(x,y,style)
             *(x,y,segment,style)
             */
            setPOINT2: function (x, y, param1, param2) {
                return new armyc2.c2sd.JavaLineArray.POINT2(x, y, param1, param2);
            },
            getExteriorPoints: function (pLinePoints, vblCounter, lineType, interior) {
                var j;
                var index;
                var pt0;
                var pt1;
                var pt2;
                var m01 = new armyc2.c2sd.JavaLineArray.ref();
                var m12 = new armyc2.c2sd.JavaLineArray.ref();
                var direction;
                var intersectPt;
                var intersectPoints = new java.util.ArrayList();
                var b01;
                var b12;
                var dist = pLinePoints[0].style;
                for (j = 0; j < vblCounter; j++) {
                    if (j === 0 || j === vblCounter - 1) {
                        pt0 = new armyc2.c2sd.JavaLineArray.POINT2(pLinePoints[vblCounter - 2]);
                        pt1 = new armyc2.c2sd.JavaLineArray.POINT2(pLinePoints[0]);
                        pt2 = new armyc2.c2sd.JavaLineArray.POINT2(pLinePoints[1]);
                    } else {
                        pt0 = new armyc2.c2sd.JavaLineArray.POINT2(pLinePoints[j - 1]);
                        pt1 = new armyc2.c2sd.JavaLineArray.POINT2(pLinePoints[j]);
                        pt2 = new armyc2.c2sd.JavaLineArray.POINT2(pLinePoints[j + 1]);
                    }
                    if (pt1.style > 0) {
                        dist = pt1.style;
                    }
                    var pt00;
                    var pt01;
                    var pt10;
                    var pt11;
                    index = j - 1;
                    if (index < 0) {
                        index = vblCounter - 1;
                    }
                    var pts = new Array(pLinePoints.length);
                    for (var k = 0; k < pLinePoints.length; k++) {
                        pts[k] = pLinePoints[k];
                    }
                    direction = armyc2.c2sd.JavaLineArray.arraysupport.GetInsideOutsideDouble2(pt0, pt1, pts, vblCounter, index, lineType);
                    if (interior === true) {
                        switch (direction) {
                            case 0:
                                direction = 1;
                                break;
                            case 1:
                                direction = 0;
                                break;
                            case 2:
                                direction = 3;
                                break;
                            case 3:
                                direction = 2;
                                break;
                            default:
                                break;
                        }
                    }
                    pt00 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt0, direction, dist);
                    pt01 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt1, direction, dist);
                    index = j;
                    if (j === vblCounter - 1) {
                        index = 0;
                    }
                    direction = armyc2.c2sd.JavaLineArray.arraysupport.GetInsideOutsideDouble2(pt1, pt2, pts, vblCounter, index, lineType);
                    if (interior === true) {
                        switch (direction) {
                            case 0:
                                direction = 1;
                                break;
                            case 1:
                                direction = 0;
                                break;
                            case 2:
                                direction = 3;
                                break;
                            case 3:
                                direction = 2;
                                break;
                            default:
                                break;
                        }
                    }
                    pt10 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt1, pt2, pt1, direction, dist);
                    pt11 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt1, pt2, pt2, direction, dist);
                    if (pt0.x === pt1.x && pt1.x === pt2.x) {
                        intersectPt = new armyc2.c2sd.JavaLineArray.POINT2(pt01);
                        intersectPoints.add(intersectPt);
                        continue;
                    }
                    armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble2(pt00, pt01, m01);
                    armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble2(pt10, pt11, m12);
                    if (m01.value[0] === m12.value[0]) {
                        intersectPt = new armyc2.c2sd.JavaLineArray.POINT2(pt01);
                        intersectPoints.add(intersectPt);
                        continue;
                    }
                    b01 = pt01.y - m01.value[0] * pt01.x;
                    b12 = pt11.y - m12.value[0] * pt11.x;
                    intersectPt = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueIntersectDouble2(m01.value[0], b01, m12.value[0], b12, 1, 1, 0, 0);
                    intersectPoints.add(intersectPt);
                }
                for (j = 0; j < intersectPoints.size(); j++) {
                    pLinePoints[j] = intersectPoints.get(j);
                }
                return;
            },
            getDeepCopy: function (pts)
            {
                if (pts === null || pts.isEmpty())
                    return pts;
                var deepCopy = new java.util.ArrayList();
                var j = 0;
                var pt = null;
                for (j = 0; j < pts.size(); j++)
                {
                    pt = new armyc2.c2sd.JavaLineArray.POINT2(pts.get(j));
                    deepCopy.add(pt);
                }
                return deepCopy;
            },
            extend_left: 0,
            extend_right: 1,
            extend_above: 2,
            extend_below: 3,
            _className: "lineutility"

        };
