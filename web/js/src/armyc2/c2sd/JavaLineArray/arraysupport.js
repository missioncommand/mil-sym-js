var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.JavaLineArray = armyc2.c2sd.JavaLineArray || {};
armyc2.c2sd.JavaLineArray.arraysupport =
        {
            /*
             * used for Depth Area to determine how sharp the polygon corners are.
             */
            getMinBeta: function (pLinePoints)
            {
                var minBeta = Math.PI;
                try
                {
                    var j = 0;
                    var n = pLinePoints.length;
                    var pt0 = null, pt1 = null, pt2 = null;
                    var theta0 = 1, theta1 = 1, beta = 1;
                    for (j = 1; j < pLinePoints.length - 1; j++)
                    {
                        pt0 = pLinePoints[j - 1];
                        pt1 = pLinePoints[j];
                        pt2 = pLinePoints[j + 1];
                        if (pt0.x === pt1.x && pt0.y === pt1.y)
                            continue;
                        if (pt1.x === pt2.x && pt1.y === pt2.y)
                            continue;
                        theta0 = Math.atan2(pt0.y - pt1.y, pt0.x - pt1.x);
                        theta1 = Math.atan2(pt2.y - pt1.y, pt2.x - pt1.x);
                        beta = Math.abs(theta1 - theta0);
                        if (beta < minBeta)
                            minBeta = beta;
                    }
                    pt0 = pLinePoints[n - 2];
                    pt1 = pLinePoints[0];
                    pt2 = pLinePoints[1];
                    if (pt0.x === pt1.x && pt0.y === pt1.y)
                        return minBeta;
                    if (pt1.x === pt2.x && pt1.y === pt2.y)
                        return minBeta;
                    theta0 = Math.atan2(pt0.y - pt1.y, pt0.x - pt1.x);
                    theta1 = Math.atan2(pt2.y - pt1.y, pt2.x - pt1.x);
                    beta = Math.abs(theta1 - theta0);
                    if (beta < minBeta)
                        minBeta = beta;
                }
                catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.arraysupport._className, "getMinTheta", new armyc2.c2sd.renderer.utilities.RendererException("getMinTheta " + Integer.toString(lineType), exc));
                    } else {
                        throw exc;
                    }
                }
                return minBeta;
            },
            setMinLength: function (value)
            {
                minLength = value;
            },
            FillPoints: function (pLinePoints, counter, points)
            {
                points.clear();
                for (var j = 0; j < counter; j++)
                {
                    points.add(pLinePoints[j]);
                }
            },
            GetLineArray2: function (lineType, pts, shapes, clipBounds, rev) {
                var points = null;
                try {
                    var pt = null;
                    var pLinePoints2 = null;
                    var pLinePoints = null;
                    var vblSaveCounter = pts.size();
                    var j = 0;
                    if (pLinePoints2 === null || pLinePoints2.length === 0) {
                        pLinePoints = new Array(vblSaveCounter);
                        for (j = 0; j < vblSaveCounter; j++) {
                            pt = pts.get(j);
                            pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt.x, pt.y, pt.style);
                        }
                    }
                    var vblCounter = armyc2.c2sd.JavaLineArray.countsupport.GetCountersDouble(lineType, vblSaveCounter, pLinePoints, clipBounds, rev);
                    if (vblCounter > 0)
                        pLinePoints = new Array(vblCounter);
                    else {
                        shapes = null;
                        return null;
                    }
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pLinePoints);
                    if (vblSaveCounter > pts.size())
                        vblSaveCounter = pts.size();
                    if (vblSaveCounter > pLinePoints.length)
                        vblSaveCounter = pLinePoints.length;
                    for (j = 0; j < vblSaveCounter; j++) {
                        pt = pts.get(j);
                        pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt.x, pt.y, pt.style);
                    }
                    points = armyc2.c2sd.JavaLineArray.arraysupport.GetLineArray2Double(lineType, pLinePoints, vblCounter, vblSaveCounter, shapes, clipBounds, rev);
                }
                catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.arraysupport._className, "GetLineArray2", new armyc2.c2sd.renderer.utilities.RendererException("GetLineArray2 " + Integer.toString(lineType), exc));
                    } else {
                        throw exc;
                    }
                }
                return points;
            },
            GetFORTLPointsDouble: function (pLinePoints, lineType, vblSaveCounter) {
                var nCounter = 0;
                try {
                    var j = 0;
                    var k = 0;
                    var bolVertical = 0;
                    var lCount = 0;
                    var dLengthSegment = 0;
                    var dIncrement = 20;
                    var m = new armyc2.c2sd.JavaLineArray.ref();
                    var pSpikePoints = null;
                    var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    lCount = armyc2.c2sd.JavaLineArray.countsupport.GetFORTLCountDouble(pLinePoints, lineType, vblSaveCounter);
                    pSpikePoints = new Array(lCount);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pSpikePoints);
                    switch (lineType) {
                        default:
                            dIncrement = 20;
                            break;
                    }
                    for (j = 0; j < vblSaveCounter - 1; j++) {
                        bolVertical = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble(pLinePoints[j], pLinePoints[j + 1], m);
                        dLengthSegment = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[j], pLinePoints[j + 1]);
                        if (dLengthSegment / 20 < 1) {
                            pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j]);
                            nCounter++;
                            pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j + 1]);
                            nCounter++;
                            continue;
                        }
                        for (k = 0; k < dLengthSegment / 20 - 1; k++) {
                            pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[j + 1], pLinePoints[j], -k * dIncrement, 0);
                            nCounter++;
                            pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[j + 1], pLinePoints[j], -k * dIncrement - 10, 0);
                            nCounter++;
                            pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pSpikePoints[nCounter - 1]);
                            pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pLinePoints[j], pSpikePoints[nCounter - 1], 10);
                            if (pLinePoints[j].x > pLinePoints[j + 1].x) {
                                pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[j], pLinePoints[j + 1], pt0, 3, 10);
                                nCounter++;
                                pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[j], pLinePoints[j + 1], pt1, 3, 10);
                                nCounter++;
                            }
                            if (pLinePoints[j].x < pLinePoints[j + 1].x) {
                                pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[j], pLinePoints[j + 1], pt0, 2, 10);
                                nCounter++;
                                pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[j], pLinePoints[j + 1], pt1, 2, 10);
                                nCounter++;
                            }
                            if (pLinePoints[j].x === pLinePoints[j + 1].x) {
                                if (pLinePoints[j].y < pLinePoints[j + 1].y) {
                                    pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[j], pLinePoints[j + 1], pt0, 1, 10);
                                    nCounter++;
                                    pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[j], pLinePoints[j + 1], pt1, 1, 10);
                                    nCounter++;
                                }
                                if (pLinePoints[j].y > pLinePoints[j + 1].y) {
                                    pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[j], pLinePoints[j + 1], pt0, 0, 10);
                                    nCounter++;
                                    pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[j], pLinePoints[j + 1], pt1, 0, 10);
                                    nCounter++;
                                }
                            }
                            pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[j], pSpikePoints[nCounter - 3], 10, 0);
                            nCounter++;
                        }
                        pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j + 1]);
                        nCounter++;
                    }
                    for (j = 0; j < nCounter; j++) {
                        pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pSpikePoints[j]);
                    }
                    pSpikePoints = null;
                    return nCounter;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.arraysupport._className, "GetFORTLPointsDouble", new armyc2.c2sd.renderer.utilities.RendererException("GetFORTLPointsDouble " + Integer.toString(lineType), exc));
                    } else {
                        throw exc;
                    }
                }
                return nCounter;
            },
            CoordFEBADouble: function (pLinePoints, vblCounter) {
                try {
                    var j = 0;
                    var pXLinePoints = new Array(Math.floor(4 * vblCounter / 32));
                    var pNewLinePoints = new Array(Math.floor(vblCounter / 32));
                    var pShortLinePoints = new Array(Math.floor(2 * vblCounter / 32));
                    var pArcLinePoints = new Array(Math.floor(26 * vblCounter / 32));
                    var dPrinter = 1.0;
                    for (j = Math.floor(vblCounter / 32); j < vblCounter; j++) {
                        pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                        pLinePoints[j].style = 0;
                    }
                    for (j = 0; j < Math.floor(4 * vblCounter / 32); j++) {
                        pXLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                        pXLinePoints[j].style = 0;
                    }
                    for (j = 0; j < Math.floor(vblCounter / 32); j++) {
                        pNewLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j]);
                        pNewLinePoints[j].style = 0;
                    }
                    for (j = 0; j < Math.floor(2 * vblCounter / 32); j++) {
                        pShortLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                        pShortLinePoints[j].style = 0;
                    }
                    for (j = 0; j < Math.floor(26 * vblCounter / 32); j++) {
                        pArcLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                        pArcLinePoints[j].style = 0;
                    }
                    armyc2.c2sd.JavaLineArray.lineutility.GetXFEBADouble(pNewLinePoints, 10 * dPrinter, Math.floor(vblCounter / 32), pXLinePoints);
                    for (j = 0; j < Math.floor(4 * vblCounter / 32); j++) {
                        pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pXLinePoints[j]);
                    }
                    pLinePoints[Math.floor(4 * vblCounter / 32) - 1].style = 5;
                    for (j = Math.floor(4 * vblCounter / 32); j < Math.floor(6 * vblCounter / 32); j++) {
                        pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pShortLinePoints[j - Math.floor(4 * vblCounter / 32)]);
                        pLinePoints[j].style = 5;
                    }
                    pLinePoints[Math.floor(6 * vblCounter / 32) - 1].style = 5;
                    armyc2.c2sd.JavaLineArray.lineutility.GetArcFEBADouble(14.0 * dPrinter, pNewLinePoints, Math.floor(vblCounter / 32), pArcLinePoints);
                    for (j = Math.floor(6 * vblCounter / 32); j < vblCounter; j++) {
                        pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArcLinePoints[j - Math.floor(6 * vblCounter / 32)]);
                    }
                    pXLinePoints = null;
                    pNewLinePoints = null;
                    pShortLinePoints = null;
                    pArcLinePoints = null;
                    return;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.arraysupport._className, "CoordFEBADouble", new armyc2.c2sd.renderer.utilities.RendererException("CoordFEBADouble", exc));
                    } else {
                        throw exc;
                    }
                }
            },
            GetATWallPointsDouble2: function (pLinePoints, lineType, vblSaveCounter) {
                var nCounter = 0;
                try {
                    var j = 0;
                    var k = 0;
                    var lCount = 0;
                    var dLengthSegment = 0;
                    var dIncrement = 0;
                    var pSpikePoints = null;
                    var pt0;
                    var dSpikeSize = 0;
                    var limit = 0;
                    lCount = armyc2.c2sd.JavaLineArray.countsupport.GetFORTLCountDouble(pLinePoints, lineType, vblSaveCounter);
                    pSpikePoints = new Array(lCount);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pSpikePoints);
                    pSpikePoints[nCounter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    for (j = 0; j < vblSaveCounter - 1; j++) {
                        dLengthSegment = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[j], pLinePoints[j + 1]);
                        dIncrement = 20;
                        dSpikeSize = 10;
                        limit = Math.floor((dLengthSegment / dIncrement)) - 1;
                        if (limit < 1) {
                            pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j]);
                            nCounter++;
                            pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j + 1]);
                            nCounter++;
                            continue;
                        }
                        for (k = -1; k < limit; k++) {
                            pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[j + 1], pLinePoints[j], -k * dIncrement - 30, 0);
                            nCounter++;
                            pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pLinePoints[j], pSpikePoints[nCounter - 1], dSpikeSize / 2);
                            if (pLinePoints[j].x > pLinePoints[j + 1].x) {
                                pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[j], pSpikePoints[nCounter - 1], pt0, 2, dSpikeSize);
                            }
                            if (pLinePoints[j].x < pLinePoints[j + 1].x) {
                                pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[j], pSpikePoints[nCounter - 1], pt0, 3, dSpikeSize);
                            }
                            if (pLinePoints[j].x === pLinePoints[j + 1].x) {
                                pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                                if (pLinePoints[j].y < pLinePoints[j + 1].y) {
                                    pSpikePoints[nCounter].x = pt0.x - dSpikeSize;
                                } else {
                                    pSpikePoints[nCounter].x = pt0.x + dSpikeSize;
                                }
                            }
                            nCounter++;
                            pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[j], pSpikePoints[nCounter - 2], dSpikeSize, 0);
                            nCounter++;
                        }
                        pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j + 1]);
                        pSpikePoints[nCounter].style = 0;
                        nCounter++;
                    }
                    for (j = 0; j < nCounter; j++) {
                        pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pSpikePoints[j]);
                    }
                    pSpikePoints = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.arraysupport._className, "GetATWallPointsDouble", new armyc2.c2sd.renderer.utilities.RendererException("GetATWallPointsDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return nCounter;
            },
            GetInsideOutsideDouble2: function (pt0, pt1, pLinePoints, vblCounter, index, lineType) {
                var nDirection = 0;
                try {
                    var m = new armyc2.c2sd.JavaLineArray.ref();
                    var m0 = new armyc2.c2sd.JavaLineArray.ref();
                    var b0 = 0;
                    var b2 = 0;
                    var b = 0;
                    var X0 = 0;
                    var Y0 = 0;
                    var X = 0;
                    var Y = 0;
                    var nInOutCounter = 0;
                    var j = 0;
                    var bolVertical = 0;
                    var bolVertical2 = 0;
                    var nOrientation = 0;
                    var extendLeft = 0;
                    var extendRight = 1;
                    var extendAbove = 2;
                    var extendBelow = 3;
                    var oppSegment = vblCounter - index - 3;
                    var pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    bolVertical = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble(pt0, pt1, m0);
                    if (m0.value === null)
                        return 0;
                    X0 = (pt0.x + pt1.x) / 2;
                    Y0 = (pt0.y + pt1.y) / 2;
                    if (lineType === 23111001 && oppSegment >= 0 && oppSegment < vblCounter - 1) {
                        X0 = (pLinePoints[oppSegment].x + pLinePoints[oppSegment + 1].x) / 2;
                        Y0 = (pLinePoints[oppSegment].y + pLinePoints[oppSegment + 1].y) / 2;
                        b0 = Y0 + 1 / m0.value[0] * X0;
                        b2 = pt0.y - m0.value[0] * pt0.x;
                        if (m0.value[0] !== 0 && bolVertical !== 0) {
                            pt2 = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueIntersectDouble2(-1 / m0.value[0], b0, m0.value[0], b2, 1, 1, 0, 0);
                            X0 = pt2.x;
                            Y0 = pt2.y;
                        }
                        if (m0.value[0] === 0 && bolVertical !== 0) {
                            X0 = (pLinePoints[oppSegment].x + pLinePoints[oppSegment + 1].x) / 2;
                            Y0 = (pt0.y + pt1.y) / 2;
                        }
                        if (bolVertical === 0) {
                            Y0 = (pLinePoints[oppSegment].y + pLinePoints[oppSegment + 1].y) / 2;
                            X0 = (pt0.x + pt1.x) / 2;
                        }
                    }
                    if (Math.abs(m0.value[0]) >= 1 || bolVertical === 0) {
                        nOrientation = 0;
                        for (j = 0; j < vblCounter - 1; j++) {
                            if (index !== j) {
                                if (lineType === 23111001 && oppSegment !== j)
                                    continue;
                                if ((pLinePoints[j].y <= Y0 && pLinePoints[j + 1].y >= Y0) || (pLinePoints[j].y >= Y0 && pLinePoints[j + 1].y <= Y0)) {
                                    bolVertical2 = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble(pLinePoints[j], pLinePoints[j + 1], m);
                                    if (bolVertical2 === 1 && m.value[0] === 0) {
                                        nInOutCounter++;
                                        nInOutCounter--;
                                    }
                                    if (bolVertical2 === 0) {
                                        if (pLinePoints[j].x < X0) {
                                            nInOutCounter++;
                                        }
                                    }
                                    if (m.value[0] !== 0 && bolVertical2 === 1) {
                                        b = pLinePoints[j].y - m.value[0] * pLinePoints[j].x;
                                        X = (Y0 - b) / m.value[0];
                                        if (X < X0) {
                                            nInOutCounter++;
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        nOrientation = 1;
                        for (j = 0; j < vblCounter - 1; j++) {
                            if (index !== j) {
                                if (lineType === 23111001 && oppSegment !== j)
                                    continue;
                                if ((pLinePoints[j].x <= X0 && pLinePoints[j + 1].x >= X0) || (pLinePoints[j].x >= X0 && pLinePoints[j + 1].x <= X0)) {
                                    bolVertical2 = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble(pLinePoints[j], pLinePoints[j + 1], m);
                                    if (bolVertical2 === 0) {
                                        nInOutCounter++;
                                        nInOutCounter--;
                                    }
                                    if (bolVertical2 === 1 && m.value[0] === 0) {
                                        if (pLinePoints[j].y < Y0) {
                                            nInOutCounter++;
                                        }
                                    }
                                    if (m.value[0] !== 0 && bolVertical2 === 1) {
                                        b = pLinePoints[j].y - m.value[0] * pLinePoints[j].x;
                                        Y = m.value[0] * X0 + b;
                                        if (Y < Y0) {
                                            nInOutCounter++;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    switch (nInOutCounter % 2) {
                        case 0:
                            if (nOrientation === 0) {
                                nDirection = extendLeft;
                            } else {
                                nDirection = extendAbove;
                            }
                            break;
                        case 1:
                            if (nOrientation === 0) {
                                nDirection = extendRight;
                            } else {
                                nDirection = extendBelow;
                            }
                            break;
                        default:
                            break;
                    }
                    //reverse direction for ICING
                    switch (lineType)
                    {
                        case 31740000:
                            if (nDirection === extendLeft)
                                nDirection = extendRight;
                            else if (nDirection === extendRight)
                                nDirection = extendLeft;
                            else if (nDirection === extendAbove)
                                nDirection = extendBelow;
                            else if (nDirection === extendBelow)
                                nDirection = extendAbove;
                            break;
                        default:
                            break;
                    }
                } 
                catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.arraysupport._className, "GetInsideOutsideDouble2", new armyc2.c2sd.renderer.utilities.RendererException("GetInsideOutsideDouble2", exc));
                    } else {
                        throw exc;
                    }
                }
                return nDirection;
            },
            GetZONEPointsDouble2: function (pLinePoints, lineType, vblSaveCounter) {
                var nCounter = 0;
                try {
                    var j = 0;
                    var k = 0;
                    var n = 0;
                    var lCount = 0;
                    var dLengthSegment = 0;
                    var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    var pt1 = null;
                    var pt2 = null;
                    var pt3 = null;
                    var pSpikePoints = null;
                    var nDirection = 0;
                    lCount = armyc2.c2sd.JavaLineArray.countsupport.GetFORTLCountDouble(pLinePoints, lineType, vblSaveCounter);
                    pSpikePoints = new Array(lCount);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pSpikePoints);
                    var remainder = 0;
                    for (j = 0; j < vblSaveCounter - 1; j++) {
                        pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j]);
                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j + 1]);
                        nDirection = armyc2.c2sd.JavaLineArray.arraysupport.GetInsideOutsideDouble2(pt1, pt2, pLinePoints, vblSaveCounter, j, lineType);
                        dLengthSegment = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[j], pLinePoints[j + 1]);
                        if (!(lineType === 23111000) && !(lineType === 23111001)) {
                            if (dLengthSegment < 20) {
                                pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j]);
                                nCounter++;
                                pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j + 1]);
                                nCounter++;
                                continue;
                            }
                        }
                        switch (lineType) {
                            case 23115000:
                            case 23114000:
                                switch (nDirection) {
                                    case 0:
                                        nDirection = 1;
                                        break;
                                    case 1:
                                        nDirection = 0;
                                        break;
                                    case 2:
                                        nDirection = 3;
                                        break;
                                    case 3:
                                        nDirection = 2;
                                        break;
                                    default:
                                        break;
                                }
                                break;
                            default:
                                break;
                        }
                        n = Math.floor((dLengthSegment / 20));
                        remainder = dLengthSegment - n * 20;
                        for (k = 0; k < n; k++) {
                            if (k > 0) {
                                pSpikePoints[nCounter++] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[j + 1], pLinePoints[j], -k * 20 - remainder / 2, 0);
                                pSpikePoints[nCounter++] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[j + 1], pLinePoints[j], -k * 20 - 10 - remainder / 2, 0);
                            } else {
                                pSpikePoints[nCounter++] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[j + 1], pLinePoints[j], -k * 20, 0);
                                pSpikePoints[nCounter++] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[j + 1], pLinePoints[j], -k * 20 - 10, 0);
                            }
                            switch (lineType) {
                                case 23115000:
                                case 23114000:
                                case 23113000:
                                case 23111000:
                                case 23111001:
                                case 22624000:
                                    pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pLinePoints[j], pSpikePoints[nCounter - 1], 5);
                                    break;
                                case 23350000:
                                case 22134000:
                                    pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pSpikePoints[nCounter - 1]);
                                    break;
                                default:
                                    break;
                            }
                            pSpikePoints[nCounter++] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt1, pt2, pt0, nDirection, 10);
                            switch (lineType) {
                                case 23115000:
                                case 23114000:
                                case 23113000:
                                case 23111000:
                                case 23111001:
                                case 22624000:
                                    pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[j], pSpikePoints[nCounter - 2], 10, 0);
                                    break;
                                case 23350000:
                                    pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pSpikePoints[nCounter - 2]);
                                    break;
                                case 22134000:
                                    pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[j], pSpikePoints[nCounter - 2], 10, 0);
                                    pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt1, pt2, pt3, nDirection, 10);
                                    nCounter++;
                                    pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt3);
                                    break;
                                default:
                                    break;
                            }
                            nCounter++;
                            if (lineType === 22624000)
                                pSpikePoints[nCounter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pSpikePoints[nCounter - 4]);
                        }
                        pSpikePoints[nCounter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j + 1]);
                    }
                    for (j = 0; j < nCounter; j++) {
                        if (lineType === 23115000) {
                            pSpikePoints[j].style = 11;
                        }
                    }
                    if (lineType === 23115000) {
                        pSpikePoints[nCounter - 1].style = 12;
                    } else {
                        if (nCounter > 0)
                            pSpikePoints[nCounter - 1].style = 5;
                    }
                    for (j = 0; j < nCounter; j++) {
                        pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pSpikePoints[j]);
                        if (j === nCounter - 1) {
                            if (lineType !== 23115000) {
                                pLinePoints[j].style = 5;
                            }
                        }
                    }
                    pSpikePoints = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.arraysupport._className, "GetZONEPointsDouble2", new armyc2.c2sd.renderer.utilities.RendererException("GetZONEPointsDouble2", exc));
                    } else {
                        throw exc;
                    }
                }
                return nCounter;
            },
            IsTurnArcReversed: function (pPoints) {
                try {
                    if (pPoints.length < 3) {
                        return false;
                    }
                    var ptsSeize = new Array(2);
                    ptsSeize[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pPoints[0]);
                    ptsSeize[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pPoints[1]);
                    armyc2.c2sd.JavaLineArray.lineutility.CalcClockwiseCenterDouble(ptsSeize);
                    var d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(ptsSeize[0], pPoints[2]);
                    ptsSeize[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pPoints[1]);
                    ptsSeize[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pPoints[0]);
                    armyc2.c2sd.JavaLineArray.lineutility.CalcClockwiseCenterDouble(ptsSeize);
                    var dArcReversed = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(ptsSeize[0], pPoints[2]);
                    ptsSeize = null;
                    if (dArcReversed > d) {
                        return true;
                    } else {
                        return false;
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.arraysupport._className, "IsTurnArcReversed", new armyc2.c2sd.renderer.utilities.RendererException("IsTurnArcReversed", exc));
                    } else {
                        throw exc;
                    }
                }
                return false;
            },
            GetIsolatePointsDouble: function (pLinePoints, lineType) {
                try {
                    var reverseTurn = false;
                    var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[1]);
                    var pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    if (pt0.x === pt1.x && pt0.y === pt1.y)
                        pt1.x += 1;
                    var C = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var E = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var midPt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var j = 0;
                    var k = 0;
                    var l = 0;
                    var ptsArc = new Array(26);
                    var midPts = new Array(7);
                    var trianglePts = new Array(21);
                    var pArrowPoints = new Array(3);
                    var reversepArrowPoints = new Array(3);
                    var dRadius = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
                    var dLength = Math.abs(dRadius - 20);
                    if (dRadius < 40) {
                        dLength = dRadius / 1.5;
                    }
                    var d = armyc2.c2sd.JavaLineArray.lineutility.MBRDistance(pLinePoints, 2);
                    var ptsSeize = new Array(2);
                    var savepoints = new Array(3);
                    for (j = 0; j < 2; j++) {
                        savepoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j]);
                    }
                    if (pLinePoints.length >= 3) {
                        savepoints[2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[2]);
                    }
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(ptsArc);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(midPts);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(trianglePts);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pArrowPoints);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(reversepArrowPoints);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(ptsSeize);
                    if (d / 7 > armyc2.c2sd.JavaLineArray.arraysupport.maxLength) {
                        d = 7 * armyc2.c2sd.JavaLineArray.arraysupport.maxLength;
                    }
                    if (d / 7 < armyc2.c2sd.JavaLineArray.arraysupport.minLength) {
                        d = 7 * armyc2.c2sd.JavaLineArray.arraysupport.minLength;
                    }
                    if (d > 140)
                        d = 140;
                    var ptsArc2 = new Array(26);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(ptsArc2);
                    E.x = 2 * pt1.x - pt0.x;
                    E.y = 2 * pt1.y - pt0.y;
                    ptsArc[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[1]);
                    ptsArc[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(E);
                    armyc2.c2sd.JavaLineArray.lineutility.ArcArrayDouble(ptsArc, 0, dRadius, lineType);
                    for (j = 0; j < 26; j++) {
                        ptsArc[j].style = 0;
                        pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptsArc[j]);
                        pLinePoints[j].style = 0;
                    }
                    if (lineType !== 211600000)
                        armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(ptsArc[24], ptsArc[25], Math.floor(Math.floor(d) / 7), Math.floor(Math.floor(d) / 7), pArrowPoints, 0);
                    else
                        armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(ptsArc[24], ptsArc[25], Math.floor(Math.floor(d) / 7), Math.floor(Math.floor(1.75 * d) / 7), pArrowPoints, 0);

                    pLinePoints[25].style = 5;
                    switch (lineType) {
                        case 212600000:
                        case 212500000:
                        case 211400000:
                            for (j = 1; j <= 23; j++) {
                                if (j % 3 === 0) {
                                    midPts[k].x = pt0.x - Math.floor(((dLength / dRadius) * (pt0.x - ptsArc[j].x)));
                                    midPts[k].y = pt0.y - Math.floor(((dLength / dRadius) * (pt0.y - ptsArc[j].y)));
                                    midPts[k].style = 0;
                                    trianglePts[l] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptsArc[j - 1]);
                                    l++;
                                    trianglePts[l] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(midPts[k]);
                                    l++;
                                    trianglePts[l] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptsArc[j + 1]);
                                    trianglePts[l].style = 5;
                                    l++;
                                    k++;
                                }
                            }
                            for (j = 26; j < 47; j++) {
                                pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(trianglePts[j - 26]);
                            }
                            pLinePoints[46].style = 5;
                            for (j = 47; j < 50; j++) {
                                pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[j - 47]);
                                pLinePoints[j].style = 0;
                            }
                            break;
                        case 211600000:
                            midPt.x = (pt1.x + ptsArc[25].x) / 2;
                            midPt.y = (pt1.y + ptsArc[25].y) / 2;
                            armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(midPt, ptsArc[25], Math.floor(Math.floor(d) / 7), Math.floor(Math.floor(1.75 * d) / 7), reversepArrowPoints, 0);
                            for (j = 26; j < 29; j++) {
                                pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[j - 26]);
                            }
                            for (j = 29; j < 32; j++) {
                                pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(reversepArrowPoints[j - 29]);
                                pLinePoints[j].style = 0;
                            }
                            break;
                        case 212100000:
                            for (j = 26; j < 29; j++) {
                                pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[j - 26]);
                                pLinePoints[j].style = 0;
                            }
                            pLinePoints[28].style = 5;
                            break;
                        case 23173000:
                            var changeArc = armyc2.c2sd.JavaLineArray.arraysupport.IsTurnArcReversed(savepoints);
                            if (reverseTurn === true || changeArc === true) {
                                pt0.x = pt1.x;
                                pt0.y = pt1.y;
                                pt1.x = pt2.x;
                                pt1.y = pt2.y;
                            }
                            ptsSeize[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                            ptsSeize[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                            dRadius = armyc2.c2sd.JavaLineArray.lineutility.CalcClockwiseCenterDouble(ptsSeize);
                            C = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptsSeize[0]);
                            E = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptsSeize[1]);
                            ptsArc[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                            ptsArc[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(E);
                            armyc2.c2sd.JavaLineArray.lineutility.ArcArrayDouble(ptsArc, 0, dRadius, lineType);
                            for (j = 0; j < 26; j++) {
                                ptsArc[j].style = 0;
                                pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptsArc[j]);
                                pLinePoints[j].style = 0;
                            }
                            if (changeArc === true) {
                                armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(ptsArc[1], pt0, Math.floor(Math.floor(d) / 7), Math.floor(Math.floor(d) / 7), pArrowPoints, 5);
                            } else {
                                armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(ptsArc[24], pt1, Math.floor(Math.floor(d) / 7), Math.floor(Math.floor(d) / 7), pArrowPoints, 5);
                            }
                            pLinePoints[25].style = 5;
                            for (j = 26; j < 29; j++) {
                                pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[j - 26]);
                                pLinePoints[j].style = 9;
                            }
                            pLinePoints[28].style = 10;
                            break;
                        case 211900000:
                            for (j = 26; j < 29; j++) {
                                pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[j - 26]);
                                pLinePoints[j].style = 0;
                            }
                            pLinePoints[28].style = 5;
                            k = 29;
                            for (j = 1; j < 24; j++) {
                                pLinePoints[k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptsArc[j]);
                                pLinePoints[k].style = 0;
                                k++;
                                pLinePoints[k] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pt0, ptsArc[j], Math.floor(Math.floor(d) / 7));
                                pLinePoints[k].style = 5;
                                k++;
                            }
                            break;
                        default:
                            break;
                    }
                    savepoints = null;
                    ptsArc = null;
                    midPts = null;
                    trianglePts = null;
                    pArrowPoints = null;
                    reversepArrowPoints = null;
                    ptsSeize = null;
                    ptsArc2 = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.arraysupport._className, "GetIsolatePointsDouble", new armyc2.c2sd.renderer.utilities.RendererException("GetIsolatePointsDouble " + Integer.toString(lineType), exc));
                    } else {
                        throw exc;
                    }
                }
                return;
            },
            AreaWithCenterFeatureDouble: function (pLinePoints, vblCounter, lineType) {
                try {
                    var k = 0;
                    var ptCenter = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var fLength = 4;
                    if (lineType === 221311000)
                        fLength = 5;
                    var d = armyc2.c2sd.JavaLineArray.lineutility.MBRDistance(pLinePoints, vblCounter - fLength);
                    if (d > 350)
                        d = 350;

                    for (k = 0; k < vblCounter; k++) {
                        pLinePoints[k].style = 0;
                    }
                    switch (lineType) {
                        case 2237000:
                            if (d < 20)
                                d = 20;
                            if (d > 60)
                                d = 60;
                            var ul = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                            var lr = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                            armyc2.c2sd.JavaLineArray.lineutility.CalcMBRPoints(pLinePoints, vblCounter - 4, ul, lr);
                            var ur = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(lr);
                            ur.y = ul.y;
                            pLinePoints[vblCounter - 3] = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(ur, ul, 0);
                            pLinePoints[vblCounter - 3].x -= d / 2;//25;
                            pLinePoints[vblCounter - 3].y -= d / 5;//10;
                            pLinePoints[vblCounter - 2] = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(ur, ul, 0);
                            pLinePoints[vblCounter - 2].y -= d * 0.7;//35;
                            pLinePoints[vblCounter - 1] = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(ur, ul, 0);
                            pLinePoints[vblCounter - 1].x += d / 2;//25;
                            pLinePoints[vblCounter - 1].y -= d / 5;//10;
                            pLinePoints[vblCounter - 4].style = 5;
                            break;
                        case 221311000:
                            if (d < 100)
                                d = 100;
                            pLinePoints[vblCounter - 5] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                            pLinePoints[vblCounter - 5].style = 5;
                            pLinePoints[vblCounter - 4] = armyc2.c2sd.JavaLineArray.lineutility.CalcCenterPointDouble(pLinePoints, vblCounter - 6);
                            pLinePoints[vblCounter - 4].x -= d / 10;    //was 20
                            pLinePoints[vblCounter - 4].style = 0;
                            pLinePoints[vblCounter - 3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[vblCounter - 4]);
                            pLinePoints[vblCounter - 3].x = pLinePoints[vblCounter - 4].x + d / 5;  //was 10
                            pLinePoints[vblCounter - 3].style = 5;
                            pLinePoints[vblCounter - 2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[vblCounter - 4]);
                            pLinePoints[vblCounter - 2].y += d / 20;    //was 40
                            pLinePoints[vblCounter - 2].style = 0;
                            pLinePoints[vblCounter - 1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[vblCounter - 3]);
                            pLinePoints[vblCounter - 1].y -= d / 20;    //was 40
                            pLinePoints[vblCounter - 1].style = 0;
                            break;
                        case 22340000:
                            if (d < 50)
                                d = 50;
                            if (lineType === 22340000) {
                                for (k = 0; k < vblCounter - 4; k++) {
                                    pLinePoints[k].style = 14;
                                }
                            }
                            pLinePoints[vblCounter - 4] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                            pLinePoints[vblCounter - 4].style = 5;
                            ptCenter = armyc2.c2sd.JavaLineArray.lineutility.CalcCenterPointDouble(pLinePoints, vblCounter - 4);
                            pLinePoints[vblCounter - 3].x = ptCenter.x - d / 10;
                            pLinePoints[vblCounter - 3].y = ptCenter.y;
                            pLinePoints[vblCounter - 3].style = 18;
                            pLinePoints[vblCounter - 2].x = ptCenter.x;
                            pLinePoints[vblCounter - 2].y = ptCenter.y - d / 10;
                            pLinePoints[vblCounter - 2].style = 18;
                            pLinePoints[vblCounter - 1].x = ptCenter.x + d / 10;
                            pLinePoints[vblCounter - 1].y = ptCenter.y;
                            break;
                        case 22350000:
                            if (d < 50)
                                d = 50;
                            pLinePoints[vblCounter - 4].style = 5;
                            ptCenter = armyc2.c2sd.JavaLineArray.lineutility.CalcCenterPointDouble(pLinePoints, vblCounter - 4);
                            pLinePoints[vblCounter - 3].x = ptCenter.x - d / 10;
                            pLinePoints[vblCounter - 3].y = ptCenter.y;
                            pLinePoints[vblCounter - 3].style = 18;
                            pLinePoints[vblCounter - 2].x = ptCenter.x;
                            pLinePoints[vblCounter - 2].y = ptCenter.y - d / 10;
                            pLinePoints[vblCounter - 2].style = 18;
                            pLinePoints[vblCounter - 1].x = ptCenter.x + d / 10;
                            pLinePoints[vblCounter - 1].y = ptCenter.y;
                            pLinePoints[vblCounter - 1].style = 5;
                            break;
                        default:
                            break;
                    }
                    return;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.arraysupport._className, "AreaWithCenterFeatureDouble", new armyc2.c2sd.renderer.utilities.RendererException("AreaWithCenterFeatureDouble " + Integer.toString(lineType), exc));
                    } else {
                        throw exc;
                    }
                }
            },
            GetATWallPointsDouble: function (pLinePoints, lineType, vblSaveCounter) {
                var nCounter = 0;
                try {
                    var j = 0;
                    var k = 0;
                    var lCount = 0;
                    var dLengthSegment = 0;
                    var dIncrement = 0;
                    var pSpikePoints = null;
                    var pt0;
                    var dRemainder = 0;
                    var dSpikeSize = 0;
                    var limit = 0;
                    var crossPt1;
                    var crossPt2;
                    lCount = armyc2.c2sd.JavaLineArray.countsupport.GetFORTLCountDouble(pLinePoints, lineType, vblSaveCounter);
                    pSpikePoints = new Array(lCount);
                    switch (lineType) {
                        case 31131200:
                        case 31131300:
                            pSpikePoints[nCounter] = pLinePoints[0];
                            pSpikePoints[nCounter].style = 0;
                            nCounter++;
                            break;
                        default:
                            break;
                    }
                    for (j = 0; j < vblSaveCounter - 1; j++) {
                        dLengthSegment = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[j], pLinePoints[j + 1]);
                        switch (lineType) {
                            case 31131100:
                            case 31131000:
                            case 31131200:
                            case 31131300:
                                dIncrement = 60;
                                dSpikeSize = 20;
                                dRemainder = dLengthSegment / dIncrement - (Math.floor((dLengthSegment / dIncrement)));
                                if (dRemainder < 0.75) {
                                    limit = Math.floor((dLengthSegment / dIncrement));
                                } else {
                                    limit = Math.floor((dLengthSegment / dIncrement)) + 1;
                                }
                                break;
                            default:
                                dIncrement = 20;
                                dSpikeSize = 10;
                                limit = Math.floor((dLengthSegment / dIncrement)) - 1;
                                break;
                        }
                        if (limit < 1) {
                            pSpikePoints[nCounter] = pLinePoints[j];
                            nCounter++;
                            pSpikePoints[nCounter] = pLinePoints[j + 1];
                            nCounter++;
                            continue;
                        }
                        for (k = 0; k < limit; k++) {
                            switch (lineType) {
                                case 31131200:
                                    if (k > 0) {
                                        pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[j + 1], pLinePoints[j], -k * dIncrement + 45, 0);
                                        nCounter++;
                                        pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[j + 1], pLinePoints[j], -k * dIncrement + 4, 5);
                                        nCounter++;
                                        pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[j + 1], pLinePoints[j], -k * dIncrement - 1, 20);
                                        nCounter++;
                                        pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[j + 1], pLinePoints[j], -k * dIncrement - 7, 0);
                                    } else {
                                        pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[j + 1], pLinePoints[j], -k * dIncrement - 45, 0);
                                    }
                                    break;
                                case 31131300:
                                    if (k > 0) {
                                        pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[j + 1], pLinePoints[j], -k * dIncrement + 45, 0);
                                        nCounter++;
                                        pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[j + 1], pLinePoints[j], -k * dIncrement + 10, 5);
                                        nCounter++;
                                        pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pSpikePoints[nCounter - 1], pLinePoints[j + 1], 5, 0);
                                        nCounter++;
                                        pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pSpikePoints[nCounter - 1], pLinePoints[j + 1], 10, 5);
                                        nCounter++;
                                        crossPt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pSpikePoints[nCounter - 2], pSpikePoints[nCounter - 1], pSpikePoints[nCounter - 1], 2, 5, 0);
                                        crossPt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pSpikePoints[nCounter - 1], pSpikePoints[nCounter - 2], pSpikePoints[nCounter - 2], 3, 5, 5);
                                        pSpikePoints[nCounter] = crossPt1;
                                        nCounter++;
                                        pSpikePoints[nCounter] = crossPt2;
                                        nCounter++;
                                        pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[j + 1], pLinePoints[j], -k * dIncrement - 13, 0);
                                    } else {
                                        pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[j + 1], pLinePoints[j], -k * dIncrement - 45, 0);
                                    }
                                    break;
                                default:
                                    pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[j + 1], pLinePoints[j], -k * dIncrement - 30, 0);
                                    break;
                            }
                            if (lineType === 31131000) {
                                pSpikePoints[nCounter].style = 0;
                            }
                            nCounter++;
                            pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[j + 1], pLinePoints[j], -k * dIncrement - dSpikeSize, 0);
                            if (lineType === 31131000 || lineType === 31131200 || lineType === 31131300) {
                                pSpikePoints[nCounter].style = 9;
                            }
                            nCounter++;
                            pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pLinePoints[j], pSpikePoints[nCounter - 1], dSpikeSize / 2);
                            if (pLinePoints[j].x > pLinePoints[j + 1].x) {
                                pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[j], pSpikePoints[nCounter - 1], pt0, 2, dSpikeSize);
                            }
                            if (pLinePoints[j].x < pLinePoints[j + 1].x) {
                                pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[j], pSpikePoints[nCounter - 1], pt0, 3, dSpikeSize);
                            }
                            if (pLinePoints[j].x === pLinePoints[j + 1].x) {
                                pSpikePoints[nCounter] = pt0;
                                if (pLinePoints[j].y < pLinePoints[j + 1].y) {
                                    pSpikePoints[nCounter].x = pt0.x - dSpikeSize;
                                } else {
                                    pSpikePoints[nCounter].x = pt0.x + dSpikeSize;
                                }
                            }
                            nCounter++;
                            if (lineType === 31131000 || lineType === 31131200 || lineType === 31131300) {
                                pSpikePoints[nCounter - 1].style = 9;
                            }
                            pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[j], pSpikePoints[nCounter - 2], dSpikeSize, 0);
                            switch (lineType) {
                                case 31131000:
                                    pSpikePoints[nCounter].style = 10;
                                    break;
                                case 31131200:
                                case 31131300:
                                    pSpikePoints[nCounter].style = 10;
                                    nCounter++;
                                    pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[j], pSpikePoints[nCounter - 3], dSpikeSize, 0);
                                    break;
                                default:
                                    break;
                            }
                            nCounter++;
                        }
                        pSpikePoints[nCounter] = pLinePoints[j + 1];
                        pSpikePoints[nCounter].style = 0;
                        nCounter++;
                    }
                    for (j = 0; j < nCounter; j++) {
                        pLinePoints[j] = pSpikePoints[j];
                    }
                    pLinePoints[nCounter - 1].style = 5;
                    pSpikePoints = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.arraysupport._className, "GetATWallPointsDouble", new armyc2.c2sd.renderer.utilities.RendererException("GetATWallPointsDouble " + Integer.toString(lineType), exc));
                    } else {
                        throw exc;
                    }
                }
                return nCounter;
            },
            GetRidgePointsDouble: function (pLinePoints, lineType, vblSaveCounter) {
                var nCounter = 0;
                try {
                    var j = 0;
                    var k = 0;
                    var lCount = 0;
                    var dLengthSegment = 0;
                    var dIncrement = 20;
                    var m = new armyc2.c2sd.JavaLineArray.ref();
                    var pSpikePoints = null;
                    var pt0;
                    var dSpikeSize = 20;
                    var limit = 0;
                    var d = 0;
                    var bolVertical = 0;
                    m.value = Clazz.newArray(1, 0);
                    lCount = armyc2.c2sd.JavaLineArray.countsupport.GetFORTLCountDouble(pLinePoints, lineType, vblSaveCounter);
                    pSpikePoints = new Array(lCount);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pSpikePoints);
                    for (j = 0; j < vblSaveCounter - 1; j++) {
                        bolVertical = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble(pLinePoints[j], pLinePoints[j + 1], m);
                        dLengthSegment = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[j], pLinePoints[j + 1]);
                        limit = Math.floor((dLengthSegment / dIncrement));
                        if (limit < 1) {
                            pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j]);
                            nCounter++;
                            pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j + 1]);
                            nCounter++;
                            continue;
                        }
                        for (k = 0; k < limit; k++) {
                            pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[j + 1], pLinePoints[j], -k * dIncrement, 0);
                            nCounter++;
                            d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[j], pSpikePoints[nCounter - 1]);
                            pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pLinePoints[j + 1], pLinePoints[j], -d - dSpikeSize / 2);
                            if (bolVertical !== 0) {
                                if (pLinePoints[j].x < pLinePoints[j + 1].x) {
                                    pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[j], pLinePoints[j + 1], pt0, 2, dSpikeSize);
                                } else {
                                    pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[j], pLinePoints[j + 1], pt0, 3, dSpikeSize);
                                }
                            } else {
                                if (pLinePoints[j + 1].y < pLinePoints[j].y) {
                                    pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[j], pLinePoints[j + 1], pt0, 0, dSpikeSize);
                                } else {
                                    pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pLinePoints[j], pLinePoints[j + 1], pt0, 1, dSpikeSize);
                                }
                            }
                            nCounter++;
                            pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[j + 1], pLinePoints[j], -d - dSpikeSize, 0);
                            nCounter++;
                        }
                        pSpikePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j + 1]);
                        nCounter++;
                    }
                    for (j = 0; j < nCounter; j++) {
                        pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pSpikePoints[j]);
                    }
                    for (j = nCounter; j < lCount; j++) {
                        pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pSpikePoints[nCounter - 1]);
                    }
                    pSpikePoints = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.arraysupport._className, "GetRidgePointsDouble", new armyc2.c2sd.renderer.utilities.RendererException("GetRidgePointsDouble " + Integer.toString(lineType), exc));
                    } else {
                        throw exc;
                    }
                }
                return nCounter;
            },
            GetSquallDouble: function (pLinePoints, amplitude, quantity, length, numPoints) {
                var counter = 0;
                try {
                    var j = 0;
                    var k = 0;
                    var StartSegPt;
                    var EndSegPt;
                    var savePoint1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    var savePoint2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[numPoints - 1]);
                    var sign = new armyc2.c2sd.JavaLineArray.ref();
                    var segQty = 0;
                    var totalQty = armyc2.c2sd.JavaLineArray.countsupport.GetSquallQty(pLinePoints, quantity, length, numPoints);
                    var pSquallPts = new Array(totalQty);
                    var pSquallSegPts = null;
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pSquallPts);
                    sign.value = Clazz.newArray(1, 0);
                    sign.value[0] = -1;
                    if (totalQty === 0) {
                        return 0;
                    }
                    for (j = 0; j < numPoints - 1; j++) {
                        StartSegPt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j]);
                        EndSegPt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j + 1]);
                        segQty = armyc2.c2sd.JavaLineArray.countsupport.GetSquallSegQty(StartSegPt, EndSegPt, quantity, length);
                        if (segQty > 0) {
                            pSquallSegPts = new Array(segQty);
                            armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pSquallSegPts);
                        } else {
                            continue;
                        }
                        armyc2.c2sd.JavaLineArray.lineutility.GetSquallSegment(StartSegPt, EndSegPt, pSquallSegPts, sign, amplitude, quantity, length);
                        for (k = 0; k < segQty; k++) {
                            pSquallPts[counter].x = pSquallSegPts[k].x;
                            pSquallPts[counter].y = pSquallSegPts[k].y;
                            if (k === 0) {
                                pSquallPts[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j]);
                            }
                            if (k === segQty - 1) {
                                pSquallPts[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j + 1]);
                            }
                            pSquallPts[counter].style = 0;
                            counter++;
                        }
                    }
                    for (j = 0; j < counter; j++) {
                        if (j < totalQty) {
                            pLinePoints[j].x = pSquallPts[j].x;
                            pLinePoints[j].y = pSquallPts[j].y;
                            if (j === 0) {
                                pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savePoint1);
                            }
                            if (j === counter - 1) {
                                pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savePoint2);
                            }
                            pLinePoints[j].style = pSquallPts[j].style;
                        }
                    }
                    if (counter === 0) {
                        for (j = 0; j < pLinePoints.length; j++) {
                            if (j === 0) {
                                pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savePoint1);
                            } else {
                                pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savePoint2);
                            }
                        }
                        counter = pLinePoints.length;
                    }
                    pSquallPts = null;
                    pSquallSegPts = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.arraysupport._className, "GetSquallDouble", new armyc2.c2sd.renderer.utilities.RendererException("GetSquallDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return counter;
            },
            GetSevereSquall: function (pLinePoints, numPoints) {
                var l = 0;
                try {
                    var quantity = 5;
                    var length = 30;
                    var j = 0;
                    var k = 0;
                    var totalQty = armyc2.c2sd.JavaLineArray.countsupport.GetSquallQty(pLinePoints, quantity, length, numPoints) + 2 * numPoints;
                    var squallPts = new Array(totalQty);
                    var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt3 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt4 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt5 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt6 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt7 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt8 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var segQty = 0;
                    var dist = 0;
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(squallPts);
                    for (j = 0; j < numPoints - 1; j++) {
                        dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[j], pLinePoints[j + 1]);
                        segQty = Math.floor((dist / 30));
                        for (k = 0; k < segQty; k++) {
                            pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pLinePoints[j], pLinePoints[j + 1], k * 30);
                            pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pLinePoints[j], pLinePoints[j + 1], k * 30 + 20);
                            pt5 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pLinePoints[j], pLinePoints[j + 1], k * 30 + 25);
                            pt6 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pLinePoints[j], pLinePoints[j + 1], k * 30 + 30);
                            pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt1, 2, 5, 0);
                            pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt5, pt5, 3, 5, 0);
                            pt4 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt6, pt6, 2, 5, 5);
                            pt4.style = 5;
                            squallPts[l++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2);
                            squallPts[l++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt3);
                            squallPts[l++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt4);
                            pt7 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pLinePoints[j], pLinePoints[j + 1], k * 30 + 5);
                            pt8 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pLinePoints[j], pLinePoints[j + 1], k * 30 + 10);
                            pt8.style = 5;
                            squallPts[l++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt7);
                            squallPts[l++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt8);
                        }
                        squallPts[l++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j + 1]);
                        pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pLinePoints[j + 1], pLinePoints[j], 5);
                        pt0.style = 5;
                        squallPts[l++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                    }
                    for (j = 0; j < l; j++) {
                        if (j < totalQty) {
                            pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(squallPts[j]);
                        }
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.arraysupport._className, "GetSevereSquall", new armyc2.c2sd.renderer.utilities.RendererException("GetSevereSquall", exc));
                    } else {
                        throw exc;
                    }
                }
                return l;
            },
            GetConvergancePointsDouble: function (pLinePoints, vblCounter) {
                var counter = vblCounter;
                try {
                    var j = 0;
                    var k = 0;
                    var d = 0;
                    var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var tempPts = new Array(vblCounter);
                    var tempPt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var numJags = 0;
                    for (j = 0; j < vblCounter; j++) {
                        tempPts[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j]);
                    }
                    pLinePoints[vblCounter - 1].style = 5;
                    for (j = 0; j < vblCounter - 1; j++) {
                        pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tempPts[j]);
                        pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tempPts[j + 1]);
                        d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
                        numJags = Math.floor((d / 10));
                        if (d - numJags * 10 < 5) {
                            numJags -= 1;
                        }
                        for (k = 0; k < numJags; k++) {
                            tempPt = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, k * 10 + 5, 0);
                            pLinePoints[counter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tempPt);
                            tempPt = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(tempPt, pt1, 5);
                            tempPt = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, tempPt, tempPt, 2, 5, 5);
                            pLinePoints[counter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tempPt);
                            tempPt = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, (k + 1) * 10, 0);
                            pLinePoints[counter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tempPt);
                            tempPt = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(tempPt, pt1, 5);
                            tempPt = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, tempPt, tempPt, 3, 5, 5);
                            pLinePoints[counter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tempPt);
                        }
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.arraysupport._className, "GetConvergancePointsDouble", new armyc2.c2sd.renderer.utilities.RendererException("GetConvergancePointsDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return counter;
            },
            GetITDPointsDouble: function (pLinePoints, vblCounter) {
                var counter = 0;
                try {
                    var j = 0;
                    var k = 0;
                    var d = 0;
                    var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var tempPts = new Array(vblCounter);
                    var tempPt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var numJags = 0;
                    var lineStyle = 19;
                    for (j = 0; j < vblCounter; j++) {
                        tempPts[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j]);
                    }
                    for (j = 0; j < vblCounter - 1; j++) {
                        pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tempPts[j]);
                        pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tempPts[j + 1]);
                        d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
                        numJags = Math.floor((d / 15));
                        if (d - numJags * 10 < 5) {
                            numJags -= 1;
                        }
                        if (numJags === 0) {
                            pt0.style = 19;
                            pLinePoints[counter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                            pt1.style = 5;
                            pLinePoints[counter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                        }
                        for (k = 0; k < numJags; k++) {
                            tempPt = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, k * 15 + 5, lineStyle);
                            pLinePoints[counter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tempPt);
                            if (k < numJags - 1) {
                                tempPt = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(tempPt, pt1, 10, 5);
                            } else {
                                tempPt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tempPts[j + 1]);
                                tempPt.style = 5;
                            }
                            pLinePoints[counter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tempPt);
                            if (lineStyle === 19) {
                                lineStyle = 25;
                            } else {
                                lineStyle = 19;
                            }
                        }
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.arraysupport._className, "GetITDPointsDouble", new armyc2.c2sd.renderer.utilities.RendererException("GetITDPointsDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return counter;
            },
            GetXPoints: function (linetype, pOriginalLinePoints, XPoints, vblCounter) {
                var xCounter = 0;
                try {
                    var j = 0;
                    var k = 0;
                    var d = 0;
                    var pt0;
                    var pt1;
                    var pt2;
                    var pt3 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt4 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt5 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt6 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var numThisSegment = 0;
                    var distInterval = 0;
                    for (j = 0; j < vblCounter - 1; j++) {
                        d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pOriginalLinePoints[j], pOriginalLinePoints[j + 1]);
                        numThisSegment = Math.floor(((d - 20) / 20));
                        if (linetype === 32153000)
                            numThisSegment = Math.floor(((d - 30) / 30));
                        distInterval = d / numThisSegment;
                        for (k = 0; k < numThisSegment; k++) {
                            pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble2(pOriginalLinePoints[j], pOriginalLinePoints[j + 1], distInterval / 2 + distInterval * k);
                            pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble2(pt0, pOriginalLinePoints[j + 1], 5);
                            pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble2(pt0, pOriginalLinePoints[j + 1], -5);
                            pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pOriginalLinePoints[j], pt1, pt1, 2, 5);
                            pt4 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pOriginalLinePoints[j], pt1, pt1, 3, 5);
                            pt4.style = 5;
                            pt5 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pOriginalLinePoints[j], pt2, pt2, 2, 5);
                            pt6 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pOriginalLinePoints[j], pt2, pt2, 3, 5);
                            pt6.style = 5;
                            XPoints[xCounter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt3);
                            XPoints[xCounter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt6);
                            XPoints[xCounter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt5);
                            XPoints[xCounter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt4);
                        }
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.arraysupport._className, "GetXPointsDouble", new armyc2.c2sd.renderer.utilities.RendererException("GetXPointsDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return xCounter;
            },
            getEllipsePoints: function (ptCenter, ptWidth, ptHeight) {
                var pEllipsePoints = null;
                try {
                    pEllipsePoints = new Array(37);
                    var l = 0;
                    var dFactor = 0;
                    var a = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(ptCenter, ptWidth);
                    var b = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(ptCenter, ptHeight);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pEllipsePoints);
                    for (l = 1; l < 37; l++) {
                        dFactor = (10.0 * l) * 3.141592653589793 / 180.0;
                        pEllipsePoints[l - 1].x = ptCenter.x + Math.floor((a * Math.cos(dFactor)));
                        pEllipsePoints[l - 1].y = ptCenter.y + Math.floor((b * Math.sin(dFactor)));
                        pEllipsePoints[l - 1].style = 0;
                    }
                    pEllipsePoints[36] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pEllipsePoints[0]);
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.arraysupport._className, "GetXPointsDouble", new armyc2.c2sd.renderer.utilities.RendererException("GetXPointsDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return pEllipsePoints;
            },
            GetLVOPoints: function (linetype, pOriginalLinePoints, pLinePoints, vblCounter) {
                var lEllipseCounter = 0;
                try {
                    var dAngle = 0;
                    var d = 0;
                    var a = 4;
                    var b = 8;
                    var dFactor = 0;
                    var lHowManyThisSegment = 0;
                    var j = 0;
                    var k = 0;
                    var l = 0;
                    var t = 0;
                    var ptCenter = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pEllipsePoints2 = new Array(37);
                    var distInterval = 0;
                    for (j = 0; j < vblCounter - 1; j++) {
                        armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pEllipsePoints2);
                        d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pOriginalLinePoints[j], pOriginalLinePoints[j + 1]);
                        lHowManyThisSegment = Math.floor(((d - 20) / 20));
                        if (linetype === 32153000)
                            lHowManyThisSegment = Math.floor(((d - 30) / 30));
                        distInterval = d / lHowManyThisSegment;
                        dAngle = armyc2.c2sd.JavaLineArray.lineutility.CalcSegmentAngleDouble(pOriginalLinePoints[j], pOriginalLinePoints[j + 1]);
                        dAngle = dAngle + 1.5707963267948966;
                        for (k = 0; k < lHowManyThisSegment; k++) {
                            ptCenter = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble2(pOriginalLinePoints[j], pOriginalLinePoints[j + 1], k * distInterval);
                            for (l = 1; l < 37; l++) {
                                dFactor = (20.0 * l) * 3.141592653589793 / 180.0;
                                pEllipsePoints2[l - 1].x = ptCenter.x + Math.floor((a * Math.cos(dFactor)));
                                pEllipsePoints2[l - 1].y = ptCenter.y + Math.floor((b * Math.sin(dFactor)));
                                pEllipsePoints2[l - 1].style = 0;
                            }
                            armyc2.c2sd.JavaLineArray.lineutility.RotateGeometryDouble(pEllipsePoints2, 36, Math.floor((dAngle * 180 / 3.141592653589793)));
                            pEllipsePoints2[36] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pEllipsePoints2[35]);
                            pEllipsePoints2[36].style = 5;
                            for (l = 0; l < 37; l++) {
                                pLinePoints[lEllipseCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pEllipsePoints2[l]);
                                lEllipseCounter++;
                            }
                        }
                        if (j === vblCounter - 2) {
                            ptCenter = pOriginalLinePoints[j + 1];
                            for (l = 1; l < 37; l++) {
                                dFactor = (20.0 * l) * 3.141592653589793 / 180.0;
                                pEllipsePoints2[l - 1].x = ptCenter.x + Math.floor((a * Math.cos(dFactor)));
                                pEllipsePoints2[l - 1].y = ptCenter.y + Math.floor((b * Math.sin(dFactor)));
                                pEllipsePoints2[l - 1].style = 0;
                            }
                            armyc2.c2sd.JavaLineArray.lineutility.RotateGeometryDouble(pEllipsePoints2, 36, Math.floor((dAngle * 180 / 3.141592653589793)));
                            pEllipsePoints2[36] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pEllipsePoints2[35]);
                            pEllipsePoints2[36].style = 5;
                            for (l = 0; l < 37; l++) {
                                pLinePoints[lEllipseCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pEllipsePoints2[l]);
                                lEllipseCounter++;
                            }
                        }
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.arraysupport._className, "GetLVOPointsDouble", new armyc2.c2sd.renderer.utilities.RendererException("GetLVOPointsDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return lEllipseCounter;
            },
            GetIcingPointsDouble: function (pLinePoints, vblCounter) {
                var counter = 0;
                try {
                    var j = 0;
                    var origPoints = new Array(vblCounter);
                    var nDirection = -1;
                    var k = 0;
                    var numSegments = 0;
                    var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var midPt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    for (j = 0; j < vblCounter; j++) {
                        origPoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j]);
                    }
                    var distInterval = 0;
                    for (j = 0; j < vblCounter - 1; j++) {
                        numSegments = Math.floor(armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(origPoints[j], origPoints[j + 1]));
                        numSegments /= 15;
                        distInterval = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(origPoints[j], origPoints[j + 1]) / numSegments;
                        nDirection = armyc2.c2sd.JavaLineArray.arraysupport.GetInsideOutsideDouble2(origPoints[j], origPoints[j + 1], origPoints, vblCounter, j, 31740000);
                        for (k = 0; k < numSegments; k++) {
                            if (k === 0) {
                                pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(origPoints[j]);
                            } else {
                                pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(origPoints[j], origPoints[j + 1], k * distInterval, 0);
                            }
                            pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(origPoints[j], origPoints[j + 1], k * distInterval + 10, 5);
                            midPt = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(origPoints[j], origPoints[j + 1], k * distInterval + 5, 0);
                            pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(origPoints[j], origPoints[j + 1], midPt, nDirection, 5, 5);
                            pLinePoints[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                            pLinePoints[counter + 1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                            pLinePoints[counter + 2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(midPt);
                            pLinePoints[counter + 3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2);
                            counter += 4;
                        }
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.arraysupport._className, "GetIcingPointsDouble", new armyc2.c2sd.renderer.utilities.RendererException("GetIcingPointsDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return counter;
            },
            GetAnchorageDouble: function (vbPoints2, numPts) {
                var lFlotCounter = 0;
                try {
                    var j = 0;
                    var k = 0;
                    var l = 0;
                    var x1 = 0;
                    var y1 = 0;
                    var numSegPts = -1;
                    var lFlotCount = 0;
                    var lNumSegs = 0;
                    var dDistance = 0;
                    var vbPoints = null;
                    var points = null;
                    var points2 = null;
                    var pt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    lFlotCount = armyc2.c2sd.JavaLineArray.flot.GetAnchorageCountDouble(vbPoints2, numPts);
                    vbPoints = Clazz.newArray(2 * numPts, 0);
                    for (j = 0; j < numPts; j++) {
                        vbPoints[k] = Math.floor(vbPoints2[j].x);
                        k++;
                        vbPoints[k] = Math.floor(vbPoints2[j].y);
                        k++;
                    }
                    k = 0;
                    var bFlip = new armyc2.c2sd.JavaLineArray.ref();
                    bFlip.value = Clazz.newArray(1, 0);
                    var lDirection = new armyc2.c2sd.JavaLineArray.ref();
                    lDirection.value = Clazz.newArray(1, 0);
                    var lLastDirection = new armyc2.c2sd.JavaLineArray.ref();
                    lLastDirection.value = Clazz.newArray(1, 0);
                    for (l = 0; l < numPts - 1; l++) {
                        pt1.x = vbPoints[2 * l];
                        pt1.y = vbPoints[2 * l + 1];
                        pt2.x = vbPoints[2 * l + 2];
                        pt2.y = vbPoints[2 * l + 3];
                        if (l > 0) {
                            pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt1, pt2, 20);
                        }
                        dDistance = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt1, pt2);
                        lNumSegs = Math.floor((dDistance / 20));
                        if (lNumSegs > 0) {
                            points2 = Clazz.newArray(lNumSegs * 32, 0);
                            numSegPts = armyc2.c2sd.JavaLineArray.flot.GetAnchorageFlotSegment(vbPoints, Math.floor(pt1.x), Math.floor(pt1.y), Math.floor(pt2.x), Math.floor(pt2.y), l, points2, bFlip, lDirection, lLastDirection);
                            points = Clazz.newArray(numSegPts, 0);
                            for (j = 0; j < numSegPts; j++) {
                                points[j] = points2[j];
                            }
                            for (j = 0; j < Math.floor(numSegPts / 3); j++) {
                                x1 = points[k];
                                y1 = points[k + 1];
                                k += 3;
                                if (j % 10 === 0) {
                                    pt.x = x1;
                                    pt.y = y1;
                                    pt.style = 5;
                                } else if ((j + 1) % 10 === 0) {
                                    if (lFlotCounter < lFlotCount) {
                                        vbPoints2[lFlotCounter].x = x1;
                                        vbPoints2[lFlotCounter++].y = y1;
                                        vbPoints2[lFlotCounter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt);
                                        continue;
                                    } else {
                                        break;
                                    }
                                }
                                if (lFlotCounter < lFlotCount) {
                                    vbPoints2[lFlotCounter].x = x1;
                                    vbPoints2[lFlotCounter].y = y1;
                                    lFlotCounter++;
                                } else {
                                    break;
                                }
                            }
                            k = 0;
                            points = null;
                        } else {
                            if (lFlotCounter < lFlotCount) {
                                vbPoints2[lFlotCounter].x = vbPoints[2 * l];
                                vbPoints2[lFlotCounter].y = vbPoints[2 * l + 1];
                                lFlotCounter++;
                            }
                        }
                    }
                    for (j = lFlotCounter - 1; j < lFlotCount; j++) {
                        vbPoints2[j].style = 5;
                    }
                    vbPoints = null;
                    points = null;
                    points2 = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.arraysupport._className, "GetAnchorageDouble", new armyc2.c2sd.renderer.utilities.RendererException("GetAnchorageDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return lFlotCounter;
            },
            GetPipePoints: function (pLinePoints, vblCounter) {
                var counter = 0;
                try {
                    var pOriginalPoints = new Array(vblCounter);
                    var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var xPoints = new Array(pLinePoints.length);
                    var xCounter = 0;
                    var j = 0;
                    var k = 0;
                    for (j = 0; j < vblCounter; j++) {
                        pOriginalPoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j]);
                    }
                    var numSegs = 0;
                    var d = 0;
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(xPoints);
                    for (j = 0; j < vblCounter - 1; j++) {
                        d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pOriginalPoints[j], pOriginalPoints[j + 1]);
                        numSegs = Math.floor((d / 20));
                        for (k = 0; k < numSegs; k++) {
                            pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble2(pOriginalPoints[j], pOriginalPoints[j + 1], 20 * k);
                            pt0.style = 0;
                            pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble2(pOriginalPoints[j], pOriginalPoints[j + 1], 20 * k + 10);
                            pt1.style = 5;
                            pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble2(pOriginalPoints[j], pOriginalPoints[j + 1], 20 * k + 10);
                            pt2.style = 20;
                            pLinePoints[counter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                            pLinePoints[counter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                            xPoints[xCounter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2);
                        }
                        if (numSegs === 0) {
                            pLinePoints[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalPoints[j]);
                            pLinePoints[counter++].style = 0;
                            pLinePoints[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalPoints[j + 1]);
                            pLinePoints[counter++].style = 5;
                        } else {
                            pLinePoints[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[counter - 1]);
                            pLinePoints[counter++].style = 0;
                            pLinePoints[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalPoints[j + 1]);
                            pLinePoints[counter++].style = 5;
                        }
                    }
                    for (k = 0; k < xCounter; k++) {
                        pLinePoints[counter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(xPoints[k]);
                    }
                    pLinePoints[counter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[counter]);
                    pOriginalPoints = null;
                    xPoints = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.arraysupport._className, "GetPipePoints", new armyc2.c2sd.renderer.utilities.RendererException("GetPipePoints", exc));
                    } else {
                        throw exc;
                    }
                }
                return counter;
            },
            GetReefPoints: function (pLinePoints, vblCounter) {
                var counter = 0;
                try {
                    var pOriginalPoints = new Array(vblCounter);
                    var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt3 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt4 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    for (var j = 0; j < vblCounter; j++) {
                        pOriginalPoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j]);
                    }
                    var numSegs = 0;
                    var direction = 0;
                    var d = 0;
                    for (var j = 0; j < vblCounter - 1; j++) {
                        if (pOriginalPoints[j].x < pOriginalPoints[j + 1].x)
                            direction = 2;
                        else
                            direction = 3;
                        d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pOriginalPoints[j], pOriginalPoints[j + 1]);
                        numSegs = Math.floor((d / 40));
                        for (var k = 0; k < numSegs; k++) {
                            pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble2(pOriginalPoints[j], pOriginalPoints[j + 1], 40 * k);
                            pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble2(pt0, pOriginalPoints[j + 1], 10);
                            pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pOriginalPoints[j], pOriginalPoints[j + 1], pt1, direction, 15);
                            pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble2(pt0, pOriginalPoints[j + 1], 20);
                            pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pOriginalPoints[j], pOriginalPoints[j + 1], pt2, direction, 5);
                            pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble2(pt0, pOriginalPoints[j + 1], 30);
                            pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pOriginalPoints[j], pOriginalPoints[j + 1], pt3, direction, 20);
                            pt4 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble2(pOriginalPoints[j], pOriginalPoints[j + 1], 40 * (k + 1));
                            pLinePoints[counter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                            pLinePoints[counter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                            pLinePoints[counter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2);
                            pLinePoints[counter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt3);
                            pLinePoints[counter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt4);
                        }
                        if (numSegs === 0) {
                            pLinePoints[counter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalPoints[j]);
                            pLinePoints[counter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalPoints[j + 1]);
                        }
                    }
                    pLinePoints[counter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalPoints[vblCounter - 1]);
                    pOriginalPoints = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.arraysupport._className, "GetReefPoints", new armyc2.c2sd.renderer.utilities.RendererException("GetReefPoints", exc));
                    } else {
                        throw exc;
                    }
                }
                return counter;
            },
            GetRestrictedAreaPoints: function (pLinePoints, vblCounter) {
                var counter = 0;
                try {
                    var pOriginalPoints = new Array(vblCounter);
                    var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt3 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    for (var j = 0; j < vblCounter; j++) {
                        pOriginalPoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j]);
                    }
                    var direction = 0;
                    var numSegs = 0;
                    var d = 0;
                    for (var j = 0; j < vblCounter - 1; j++) {
                        d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pOriginalPoints[j], pOriginalPoints[j + 1]);
                        numSegs = Math.floor((d / 15));
                        if (pOriginalPoints[j].x < pOriginalPoints[j + 1].x)
                            direction = 3;
                        else
                            direction = 2;
                        for (var k = 0; k < numSegs; k++) {
                            pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble2(pOriginalPoints[j], pOriginalPoints[j + 1], 15 * k);
                            pt0.style = 0;
                            pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble2(pOriginalPoints[j], pOriginalPoints[j + 1], 15 * k + 10);
                            pt1.style = 5;
                            pt2 = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt0, pt1, 0);
                            pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pOriginalPoints[j], pOriginalPoints[j + 1], pt2, direction, 10);
                            pt3.style = 5;
                            pLinePoints[counter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2);
                            pLinePoints[counter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt3);
                            pLinePoints[counter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                            pLinePoints[counter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                        }
                        if (numSegs === 0) {
                            pLinePoints[counter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalPoints[j]);
                            pLinePoints[counter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalPoints[j + 1]);
                        }
                    }
                    pLinePoints[counter - 1].style = 0;
                    pLinePoints[counter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalPoints[vblCounter - 1]);
                    pOriginalPoints = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.arraysupport._className, "GetRestrictedAreaPoints", new armyc2.c2sd.renderer.utilities.RendererException("GetRestrictedAreaPoints", exc));
                    } else {
                        throw exc;
                    }
                }
                return counter;
            },
            getOverheadWire: function (pLinePoints, vblCounter) {
                var counter = 0;
                try {
                    var j = 0;
                    var pt = null;
                    var pt2 = null;
                    var x = 0;
                    var y = 0;
                    var pts = new java.util.ArrayList();
                    for (j = 0; j < vblCounter; j++) {
                        pt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j]);
                        x = pt.x;
                        y = pt.y;
                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt);
                        pt2.y -= 5;
                        pts.add(pt2);
                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt);
                        pt2.x -= 5;
                        pts.add(pt2);
                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt);
                        pt2.y -= 20;
                        pts.add(pt2);
                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt);
                        pt2.x += 5;
                        pts.add(pt2);
                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt);
                        pt2.y -= 5;
                        pt2.style = 5;
                        pts.add(pt2);
                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt);
                        pt2.x -= 2;
                        pt2.y -= 10;
                        pts.add(pt2);
                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt);
                        pt2.x += 2;
                        pt2.y -= 10;
                        pt2.style = 5;
                        pts.add(pt2);
                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt);
                        pt2.x -= 7;
                        pt2.y -= 17;
                        pts.add(pt2);
                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt);
                        pt2.x -= 5;
                        pt2.y -= 20;
                        pts.add(pt2);
                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt);
                        pt2.x += 5;
                        pt2.y -= 20;
                        pts.add(pt2);
                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt);
                        pt2.x += 7;
                        pt2.y -= 17;
                        pt2.style = 5;
                        pts.add(pt2);
                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt);
                        pt2.y -= 20;
                        pts.add(pt2);
                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt);
                        pt2.x += 8;
                        pt2.y -= 12;
                        pt2.style = 5;
                        pts.add(pt2);
                    }
                    for (j = 0; j < vblCounter - 1; j++) {
                        pt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j]);
                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j + 1]);
                        if (pt.x < pt2.x) {
                            pt.x += 5;
                            pt.y -= 10;
                            pt2.x -= 5;
                            pt2.y -= 10;
                            pt2.style = 5;
                        } else {
                            pt.x -= 5;
                            pt.y -= 10;
                            pt2.x += 5;
                            pt2.y -= 10;
                            pt2.style = 5;
                        }
                        pts.add(pt);
                        pts.add(pt2);
                    }
                    for (j = 0; j < pts.size(); j++) {
                        pLinePoints[j] = pts.get(j);
                        counter++;
                    }
                    for (j = counter; j < pLinePoints.length; j++)
                        pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[counter - 1]);

                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.arraysupport._className, "GetOverheadWire", new armyc2.c2sd.renderer.utilities.RendererException("GetOverheadWire", exc));
                    } else {
                        throw exc;
                    }
                }
                return counter;
            },
            GetLineArray2Double: function (lineType, pLinePoints, vblCounter, vblSaveCounter, shapes, clipBounds, rev) {
                var points = new java.util.ArrayList();
                try {
                    var client = armyc2.c2sd.JavaLineArray.CELineArray.getClient();
                    if (pLinePoints === null || pLinePoints.length < 2)
                        return null;
                    var segments = null;
                    var dMRR = 0;
                    var n = 0;
                    var bolVertical = 0;
                    var dExtendLength = 0;
                    var dWidth = 0;
                    var nQuadrant = 0;
                    var lLinestyle = 0;
                    var pointCounter = 0;
                    var offsetX = new armyc2.c2sd.JavaLineArray.ref();
                    var offsetY = new armyc2.c2sd.JavaLineArray.ref();
                    var b = 0;
                    var b1 = 0;
                    var dRadius = 0;
                    var d1 = 0;
                    var d = 0;
                    var d2 = 0;
                    var m = new armyc2.c2sd.JavaLineArray.ref();
                    var direction = 0;
                    var nCounter = 0;
                    var j = 0;
                    var k = 0;
                    var middleSegment = -1;
                    var dMBR = armyc2.c2sd.JavaLineArray.lineutility.MBRDistance(pLinePoints, vblSaveCounter);
                    var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[1]);
                    var pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[1]);
                    var pt3 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    var pt4 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    var pt5 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    var pt6 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    var pt7 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    var pt8 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    var ptYIntercept = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    var ptYIntercept1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    var ptCenter = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    var pArrowPoints = new Array(3);
                    var arcPts = new Array(26);
                    var circlePoints = new Array(100);
                    var pts = null;
                    var pts2 = null;
                    var midpt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    var midpt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    var pOriginalLinePoints = null;
                    var pUpperLinePoints = null;
                    var pLowerLinePoints = null;
                    var pUpperLowerLinePoints = null;
                    var calcPoint0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var calcPoint1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var calcPoint2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var calcPoint3 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var calcPoint4 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var ptTemp = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    var acCounter = 0;
                    var acPoints = new Array(6);
                    var lFlotCount = 0;
                    if (vblCounter > 2)
                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[2]);
                    pt0.style = 0;
                    pt1.style = 0;
                    pt2.style = 0;
                    var xPoints = null;
                    pOriginalLinePoints = new Array(vblSaveCounter);
                    for (j = 0; j < vblSaveCounter; j++) {
                        pOriginalLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j]);
                    }
                    switch (lineType) {
                        case 15000001:
                            armyc2.c2sd.JavaLineArray.lineutility.getExteriorPoints(pLinePoints, vblSaveCounter, lineType, false);
                            acCounter = vblSaveCounter;
                            break;
                        case 12000000:
                            pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                            pLinePoints[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                            pLinePoints[0].x -= 10;
                            pLinePoints[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                            pLinePoints[1].x += 10;
                            pLinePoints[1].style = 10;
                            pLinePoints[2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                            pLinePoints[2].y += 10;
                            pLinePoints[3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                            pLinePoints[3].y -= 10;
                            acCounter = 4;
                            break;
                        case 14000000:
//                            pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
//                            pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[1]);
//                            pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
//                            pt1.y = pt2.y;
//                            pt3 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2);
//                            pt3.y = pt0.y;
                            armyc2.c2sd.JavaLineArray.lineutility.CalcMBRPoints(pLinePoints, pLinePoints.length, pt0, pt2);   //pt0=ul, pt1=lr
                            pt1 = new armyc2.c2sd.JavaLineArray.POINT2(pt0);
                            pt1.x = pt2.x;
                            pt3 = new armyc2.c2sd.JavaLineArray.POINT2(pt0);
                            pt3.y = pt2.y;
                            pLinePoints = new Array(5);
                            pLinePoints[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                            pLinePoints[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                            pLinePoints[2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2);
                            pLinePoints[3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt3);
                            pLinePoints[4] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                            acCounter = 5;
                            break;
                        case 15000003:
                            pOriginalLinePoints = new Array(5);
                            pOriginalLinePoints[0] = new armyc2.c2sd.JavaLineArray.POINT2(pLinePoints[0]);
                            pOriginalLinePoints[1] = new armyc2.c2sd.JavaLineArray.POINT2(pLinePoints[1]);
                            pOriginalLinePoints[2] = new armyc2.c2sd.JavaLineArray.POINT2(pLinePoints[2]);
                            pOriginalLinePoints[3] = new armyc2.c2sd.JavaLineArray.POINT2(pLinePoints[3]);
                            pOriginalLinePoints[4] = new armyc2.c2sd.JavaLineArray.POINT2(pLinePoints[0]);

                            //pt0 will be ul, pt1 will be lr
                            var buffer = pLinePoints[0].style;
//                            armyc2.c2sd.JavaLineArray.lineutility.CalcMBRPoints(pLinePoints, pLinePoints.length, pt0, pt1);
//                            xmin=pt0.x;
//                            ymin=pt0.y;
//                            xmax=pt1.x;
//                            ymax=pt1.y;
//                            //end section
//                            
//                            pt0 = new armyc2.c2sd.JavaLineArray.POINT2(xmin - buffer, ymin - buffer);
//                            pt2 = new armyc2.c2sd.JavaLineArray.POINT2(xmax + buffer, ymax + buffer);
//                            pt1 = new armyc2.c2sd.JavaLineArray.POINT2(pt0);
//                            pt1.y = pt2.y;
//                            pt3 = new armyc2.c2sd.JavaLineArray.POINT2(pt2);
//                            pt3.y = pt0.y;
//                            pLinePoints=new Array(5);
//                            pLinePoints[0] = new armyc2.c2sd.JavaLineArray.POINT2(pt0);
//                            pLinePoints[1] = new armyc2.c2sd.JavaLineArray.POINT2(pt1);
//                            pLinePoints[2] = new armyc2.c2sd.JavaLineArray.POINT2(pt2);
//                            pLinePoints[3] = new armyc2.c2sd.JavaLineArray.POINT2(pt3);
//                            pLinePoints[4] = new armyc2.c2sd.JavaLineArray.POINT2(pt0);
                            //clockwise orientation
                            pt0 = pLinePoints[0];
                            pt0.x -= buffer;
                            pt0.y -= buffer;
                            pt1 = pLinePoints[1];
                            pt1.x += buffer;
                            pt1.y -= buffer;
                            pt2 = pLinePoints[2];
                            pt2.x += buffer;
                            pt2.y += buffer;
                            pt3 = pLinePoints[3];
                            pt3.x -= buffer;
                            pt3.y += buffer;
                            pLinePoints = new Array(5);
                            pLinePoints[0] = new armyc2.c2sd.JavaLineArray.POINT2(pt0);
                            pLinePoints[1] = new armyc2.c2sd.JavaLineArray.POINT2(pt1);
                            pLinePoints[2] = new armyc2.c2sd.JavaLineArray.POINT2(pt2);
                            pLinePoints[3] = new armyc2.c2sd.JavaLineArray.POINT2(pt3);
                            pLinePoints[4] = new armyc2.c2sd.JavaLineArray.POINT2(pt0);
                            acCounter = 5;
                            vblSaveCounter = 5;
//                            pOriginalLinePoints=new Array(vblSaveCounter);
//                            pt0 = new armyc2.c2sd.JavaLineArray.POINT2(xmin, ymin);
//                            pt2 = new armyc2.c2sd.JavaLineArray.POINT2(xmax, ymax);
//                            pt1 = new armyc2.c2sd.JavaLineArray.POINT2(pt0);
//                            pt1.y = pt2.y;
//                            pt3 = new armyc2.c2sd.JavaLineArray.POINT2(pt2);
//                            pt3.y = pt0.y;
//                            pOriginalLinePoints[0] = new armyc2.c2sd.JavaLineArray.POINT2(pt0);
//                            pOriginalLinePoints[1] = new armyc2.c2sd.JavaLineArray.POINT2(pt1);
//                            pOriginalLinePoints[2] = new armyc2.c2sd.JavaLineArray.POINT2(pt2);
//                            pOriginalLinePoints[3] = new armyc2.c2sd.JavaLineArray.POINT2(pt3);
//                            pOriginalLinePoints[4] = new armyc2.c2sd.JavaLineArray.POINT2(pt0);
                            break;
                        case 13000000:
                            pt0 = pLinePoints[0];
                            pt1 = pLinePoints[1];
                            pt2 = pLinePoints[2];
                            pLinePoints = armyc2.c2sd.JavaLineArray.arraysupport.getEllipsePoints(pt0, pt1, pt2);
                            acCounter = 37;
                            break;
                        case 23200000:
                            acCounter = armyc2.c2sd.JavaLineArray.arraysupport.getOverheadWire(pLinePoints, vblSaveCounter);
                            break;
                        case 23200001:
                            for (j = 0; j < vblSaveCounter; j++) {
                                pLinePoints[j].style = 1;
                            }
                            for (j = vblSaveCounter; j < 2 * vblSaveCounter; j++) {
                                pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalLinePoints[j - vblSaveCounter]);
                                pLinePoints[j].style = 20;
                            }
                            acCounter = pLinePoints.length;
                            break;
                        case 22121000:
                            acCounter = pLinePoints.length;
                            break;
                        case 322510000:
                            vblCounter = armyc2.c2sd.JavaLineArray.arraysupport.GetReefPoints(pLinePoints, vblSaveCounter);
                            acCounter = vblCounter;
                            break;
                        case 32134000:
                            armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pLinePoints[vblCounter - 5], pLinePoints[vblCounter - 4], 10, 10, pArrowPoints, 0);
                            for (j = 0; j < 3; j++) {
                                pLinePoints[vblCounter - 3 + j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[j]);
                            }
                            pLinePoints[vblCounter - 4].style = 5;
                            pLinePoints[vblCounter - 1].style = 5;
                            acCounter = vblCounter;
                            break;
                        case 32530000:
                            vblCounter = armyc2.c2sd.JavaLineArray.arraysupport.GetRestrictedAreaPoints(pLinePoints, vblSaveCounter);
                            acCounter = vblCounter;
                            break;
                        case 32550000:
                            //diagnostic
                            dMBR = armyc2.c2sd.JavaLineArray.lineutility.MBRDistance(pLinePoints, vblSaveCounter);
                            d = 20;
                            if (dMBR < 60)
                                d = dMBR / 4;
                            if (d < 5)
                                d = 5;
                            //end section
                            for (j = 0; j < vblSaveCounter; j++) {
                                pLinePoints[j].style = 1;
                            }
                            pLinePoints[vblSaveCounter - 1].style = 5;
                            pt0 = armyc2.c2sd.JavaLineArray.lineutility.CalcCenterPointDouble(pLinePoints, vblSaveCounter - 1);
                            //armyc2.c2sd.JavaLineArray.lineutility.CalcCircleDouble(pt0, 20, 26, arcPts, 0);
                            armyc2.c2sd.JavaLineArray.lineutility.CalcCircleDouble(pt0, d, 26, arcPts, 0);
                            for (j = vblSaveCounter; j < vblSaveCounter + 26; j++) {
                                pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(arcPts[j - vblSaveCounter]);
                            }
                            //diagnostic
                            if (dMBR < 50)
                            {
                                //d was used as the circle radius
                                d *= 0.6;
                            }
                            else
                                d = 12;
                            //end section
                            pLinePoints[j - 1].style = 5;
                            pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                            pt1.y -= d;//12;
                            pt1.style = 0;
                            pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                            pt2.y += d;//12;
                            pt2.style = 5;
                            pt3 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2);
                            pt3.y += d / 4;//3;
                            pt3.style = 0;
                            pt4 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt3);
                            pt4.y += d / 4;//3;
                            pLinePoints[j++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                            pLinePoints[j++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2);
                            pLinePoints[j++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt3);
                            pt4.style = 5;
                            pLinePoints[j++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt4);
                            vblCounter = j;
                            acCounter = vblCounter;
                            break;
                        case 32680000:
                            vblCounter = armyc2.c2sd.JavaLineArray.arraysupport.GetPipePoints(pLinePoints, vblSaveCounter);
                            acCounter = vblCounter;
                            break;
                        case 32231500:
                            n = armyc2.c2sd.JavaLineArray.arraysupport.GetInsideOutsideDouble2(pLinePoints[0], pLinePoints[1], pLinePoints, vblSaveCounter, 0, lineType);
                            nQuadrant = armyc2.c2sd.JavaLineArray.lineutility.GetQuadrantDouble(pLinePoints[0], pLinePoints[1]);
                            switch (nQuadrant) {
                                case 4:
                                    switch (n) {
                                        case 1:
                                        case 2:
                                            break;
                                        case 0:
                                        case 3:
                                            armyc2.c2sd.JavaLineArray.lineutility.ReversePointsDouble2(pLinePoints, vblSaveCounter);
                                            break;
                                        default:
                                            break;
                                    }
                                    break;
                                case 1:
                                    switch (n) {
                                        case 1:
                                        case 3:
                                            break;
                                        case 0:
                                        case 2:
                                            armyc2.c2sd.JavaLineArray.lineutility.ReversePointsDouble2(pLinePoints, vblSaveCounter);
                                            break;
                                        default:
                                            break;
                                    }
                                    break;
                                case 2:
                                    switch (n) {
                                        case 1:
                                        case 2:
                                            armyc2.c2sd.JavaLineArray.lineutility.ReversePointsDouble2(pLinePoints, vblSaveCounter);
                                            break;
                                        case 0:
                                        case 3:
                                            break;
                                        default:
                                            break;
                                    }
                                    break;
                                case 3:
                                    switch (n) {
                                        case 1:
                                        case 3:
                                            armyc2.c2sd.JavaLineArray.lineutility.ReversePointsDouble2(pLinePoints, vblSaveCounter);
                                            break;
                                        case 0:
                                        case 2:
                                            break;
                                        default:
                                            break;
                                    }
                                    break;
                                default:
                                    break;
                            }
                            lFlotCount = armyc2.c2sd.JavaLineArray.arraysupport.GetAnchorageDouble(pLinePoints, vblSaveCounter);
                            acCounter = lFlotCount;
                            break;
                        case 32231400:
                            armyc2.c2sd.JavaLineArray.lineutility.ReversePointsDouble2(pLinePoints, vblSaveCounter);
                            acCounter = armyc2.c2sd.JavaLineArray.arraysupport.GetAnchorageDouble(pLinePoints, vblSaveCounter);
                            break;
                        case 32153000:
                            var xCount = armyc2.c2sd.JavaLineArray.countsupport.GetXPointsCount(lineType, pOriginalLinePoints, vblSaveCounter);
                            var xPoints2 = new Array(xCount);
                            var lvoCount = armyc2.c2sd.JavaLineArray.countsupport.GetLVOCount(lineType, pOriginalLinePoints, vblSaveCounter);
                            var lvoPoints = new Array(lvoCount);
                            xCount = armyc2.c2sd.JavaLineArray.arraysupport.GetXPoints(lineType, pOriginalLinePoints, xPoints2, vblSaveCounter);
                            lvoCount = armyc2.c2sd.JavaLineArray.arraysupport.GetLVOPoints(lineType, pOriginalLinePoints, lvoPoints, vblSaveCounter);
                            for (k = 0; k < xCount; k++) {
                                pLinePoints[k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(xPoints2[k]);
                            }
                            if (xCount > 0)
                                pLinePoints[xCount - 1].style = 5;
                            for (k = 0; k < lvoCount; k++) {
                                pLinePoints[xCount + k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(lvoPoints[k]);
                            }
                            acCounter = xCount + lvoCount;
                            break;
                        case 32152000:
                            if (pLinePoints[0].x < pLinePoints[1].x)
                                armyc2.c2sd.JavaLineArray.lineutility.ReversePointsDouble2(pLinePoints, vblSaveCounter);
                            lFlotCount = armyc2.c2sd.JavaLineArray.flot.GetFlotDouble(pLinePoints, vblSaveCounter);
                            acCounter = lFlotCount;
                            break;
                        case 32151000:
                            acCounter = armyc2.c2sd.JavaLineArray.arraysupport.GetLVOPoints(lineType, pOriginalLinePoints, pLinePoints, vblSaveCounter);
                            break;
                        case 31740000:
                            vblCounter = armyc2.c2sd.JavaLineArray.arraysupport.GetIcingPointsDouble(pLinePoints, vblSaveCounter);
                            acCounter = vblCounter;
                            break;
                        case 31720000:
                            n = armyc2.c2sd.JavaLineArray.arraysupport.GetInsideOutsideDouble2(pLinePoints[0], pLinePoints[1], pLinePoints, vblSaveCounter, 0, lineType);
                            nQuadrant = armyc2.c2sd.JavaLineArray.lineutility.GetQuadrantDouble(pLinePoints[0], pLinePoints[1]);
                            switch (nQuadrant) {
                                case 4:
                                    switch (n) {
                                        case 0:
                                        case 3:
                                            break;
                                        case 1:
                                        case 2:
                                            armyc2.c2sd.JavaLineArray.lineutility.ReversePointsDouble2(pLinePoints, vblSaveCounter);
                                            break;
                                        default:
                                            break;
                                    }
                                    break;
                                case 1:
                                    switch (n) {
                                        case 0:
                                        case 2:
                                            break;
                                        case 1:
                                        case 3:
                                            armyc2.c2sd.JavaLineArray.lineutility.ReversePointsDouble2(pLinePoints, vblSaveCounter);
                                            break;
                                        default:
                                            break;
                                    }
                                    break;
                                case 2:
                                    switch (n) {
                                        case 0:
                                        case 3:
                                            armyc2.c2sd.JavaLineArray.lineutility.ReversePointsDouble2(pLinePoints, vblSaveCounter);
                                            break;
                                        case 1:
                                        case 2:
                                            break;
                                        default:
                                            break;
                                    }
                                    break;
                                case 3:
                                    switch (n) {
                                        case 0:
                                        case 2:
                                            armyc2.c2sd.JavaLineArray.lineutility.ReversePointsDouble2(pLinePoints, vblSaveCounter);
                                            break;
                                        case 1:
                                        case 3:
                                            break;
                                        default:
                                            break;
                                    }
                                    break;
                                default:
                                    break;
                            }
                            lFlotCount = armyc2.c2sd.JavaLineArray.flot.GetFlotDouble(pLinePoints, vblSaveCounter);
                            acCounter = lFlotCount;
                            break;
                        case 31148000:
                            acCounter = armyc2.c2sd.JavaLineArray.arraysupport.GetITDPointsDouble(pLinePoints, vblSaveCounter);
                            break;
                        case 31147000:
                            acCounter = armyc2.c2sd.JavaLineArray.arraysupport.GetConvergancePointsDouble(pLinePoints, vblSaveCounter);
                            break;
                        case 31142000:
                            vblCounter = armyc2.c2sd.JavaLineArray.arraysupport.GetRidgePointsDouble(pLinePoints, lineType, vblSaveCounter);
                            acCounter = vblCounter;
                            break;
                        case 31141000:
                        case 31144000:
                        case 31145000:
                            vblCounter = armyc2.c2sd.JavaLineArray.arraysupport.GetSquallDouble(pLinePoints, 10, 6, 30, vblSaveCounter);
                            acCounter = vblCounter;
                            break;
                        case 31143000:
                            vblCounter = armyc2.c2sd.JavaLineArray.arraysupport.GetSevereSquall(pLinePoints, vblSaveCounter);
                            acCounter = vblCounter;
                            break;
                        case 31134100:
                        case 31134200:
                        case 31134300:
                            vblCounter = armyc2.c2sd.JavaLineArray.flot.GetSFPointsDouble(pLinePoints, vblSaveCounter, lineType);
                            acCounter = vblCounter;
                            break;
                        case 31134000:
                            vblCounter = armyc2.c2sd.JavaLineArray.flot.GetOccludedPointsDouble(pLinePoints, vblSaveCounter, lineType);
                            for (j = 0; j < vblSaveCounter; j++)
                                pLinePoints[vblCounter + j] = pOriginalLinePoints[j];

                            vblCounter += vblSaveCounter;
                            acCounter = vblCounter;
                            break;
                        case 31133200:
                            vblCounter = armyc2.c2sd.JavaLineArray.flot.GetOFYPointsDouble(pLinePoints, vblSaveCounter, lineType);
                            acCounter = vblCounter;
                            break;
                        case 31133000:
                        case 31133100:
                            vblCounter = armyc2.c2sd.JavaLineArray.flot.GetOccludedPointsDouble(pLinePoints, vblSaveCounter, lineType);
                            for (j = 0; j < vblSaveCounter; j++)
                                pLinePoints[vblCounter + j] = pOriginalLinePoints[j];

                            vblCounter += vblSaveCounter;
                            acCounter = vblCounter;
                            break;
                        case 31132000:
                        case 31132100:
                            lFlotCount = armyc2.c2sd.JavaLineArray.flot.GetFlot2Double(pLinePoints, vblSaveCounter, lineType);
                            for (j = 0; j < vblSaveCounter; j++)
                                pLinePoints[vblCounter - vblSaveCounter + j] = pOriginalLinePoints[j];

                            acCounter = lFlotCount + vblSaveCounter;
                            break;
                        case 31132200:
                        case 31132300:
                            lFlotCount = armyc2.c2sd.JavaLineArray.flot.GetFlot2Double(pLinePoints, vblSaveCounter, lineType);
                            acCounter = lFlotCount;
                            break;
                        case 31131200:
                        case 31131300:
                            vblCounter = armyc2.c2sd.JavaLineArray.arraysupport.GetATWallPointsDouble(pLinePoints, lineType, vblSaveCounter);
                            acCounter = vblCounter;
                            break;
                        case 31131000:
                        case 31131100:
                            vblCounter = armyc2.c2sd.JavaLineArray.arraysupport.GetATWallPointsDouble(pLinePoints, lineType, vblSaveCounter);
                            pLinePoints[vblCounter - 1].style = 5;
                            for (j = 0; j < vblSaveCounter; j++)
                                pLinePoints[vblCounter + j] = pOriginalLinePoints[j];

                            vblCounter += vblSaveCounter;
                            pLinePoints[vblCounter - 1].style = 5;
                            acCounter = vblCounter;
                            break;
                        case 22524000:
                        case 23191000:
                        case 23192000:
                        case 23193000:
                            armyc2.c2sd.JavaLineArray.lineutility.LineRelativeToLine(pLinePoints[0], pLinePoints[1], pLinePoints[2], pt0, pt1);
                            d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[0], pt0);
                            pt4 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pt0, pLinePoints[0], d);
                            armyc2.c2sd.JavaLineArray.lineutility.LineRelativeToLine(pLinePoints[0], pLinePoints[1], pt4, pt2, pt3);
                            pLinePoints[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                            pLinePoints[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                            pLinePoints[2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt3);
                            pLinePoints[3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2);
                            switch (lineType) {
                                case 22524000:
                                case 23193000:
                                    pLinePoints[0].style = 0;
                                    pLinePoints[1].style = 5;
                                    pLinePoints[2].style = 0;
                                    break;
                                case 23191000:
                                    pLinePoints[0].style = 1;
                                    pLinePoints[1].style = 5;
                                    pLinePoints[2].style = 1;
                                    break;
                                case 23192000:
                                    pLinePoints[1].style = 5;
                                    if (pt0.x <= pt1.x) {
                                        if (pLinePoints[1].y <= pLinePoints[2].y) {
                                            pLinePoints[0].style = 0;
                                            pLinePoints[2].style = 1;
                                        } else {
                                            pLinePoints[0].style = 1;
                                            pLinePoints[2].style = 0;
                                        }
                                    } else {
                                        if (pLinePoints[1].y >= pLinePoints[2].y) {
                                            pLinePoints[0].style = 0;
                                            pLinePoints[2].style = 1;
                                        } else {
                                            pLinePoints[0].style = 1;
                                            pLinePoints[2].style = 0;
                                        }
                                    }
                                    break;
                                default:
                                    break;
                            }
                            acCounter = 4;
                            break;
                        case 23224000:
                            armyc2.c2sd.JavaLineArray.lineutility.LineRelativeToLine(pLinePoints[0], pLinePoints[1], pLinePoints[2], pt0, pt1);
                            pLinePoints[0].style = 1;
                            pLinePoints[1].style = 5;
                            pLinePoints[2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                            pLinePoints[2].style = 1;
                            pLinePoints[3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                            pLinePoints[3].style = 5;
                            acCounter = 4;
                            break;
                        case 23194000:
                            pts = new Array(4);
                            for (j = 0; j < 4; j++) {
                                pts[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j]);
                            }
                            dRadius = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[0], pLinePoints[1]);
                            d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceToLineDouble(pLinePoints[0], pLinePoints[1], pLinePoints[2]);
                            pLinePoints[0] = armyc2.c2sd.JavaLineArray.lineutility.ExtendTrueLinePerpDouble(pts[0], pts[1], pts[1], d, 0);
                            pLinePoints[1] = armyc2.c2sd.JavaLineArray.lineutility.ExtendTrueLinePerpDouble(pts[0], pts[1], pts[0], d, 5);
                            pLinePoints[2] = armyc2.c2sd.JavaLineArray.lineutility.ExtendTrueLinePerpDouble(pts[0], pts[1], pts[1], -d, 0);
                            pLinePoints[3] = armyc2.c2sd.JavaLineArray.lineutility.ExtendTrueLinePerpDouble(pts[0], pts[1], pts[0], -d, 5);
                            midpt = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pts[0], pts[1], 0);
                            midpt = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pts[0], midpt, d);
                            pLinePoints[4] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAngledLine(pts[0], pts[1], midpt, 105, dRadius / 2);
                            pLinePoints[5] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAngledLine(pts[0], pts[1], midpt, -75, dRadius / 2);
                            pLinePoints[5].style = 5;
                            midpt = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pts[0], pts[1], 0);
                            midpt = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pts[1], midpt, d);
                            pLinePoints[6] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAngledLine(pts[0], pts[1], midpt, 105, dRadius / 2);
                            pLinePoints[7] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAngledLine(pts[0], pts[1], midpt, -75, dRadius / 2);
                            pLinePoints[7].style = 5;
                            acCounter = 8;
                            break;
                        case 221311000:
                        case 22340000:
                        case 2237000:
                            armyc2.c2sd.JavaLineArray.arraysupport.AreaWithCenterFeatureDouble(pLinePoints, vblCounter, lineType);
                            acCounter = vblCounter;
                            //armyc2.c2sd.JavaLineArray.arraysupport.FillPoints(pLinePoints, vblCounter, points);
                            break;
                        case 22431100:
                            for (j = 0; j < vblCounter; j++)
                                pLinePoints[j].style = 1;

                            acCounter = vblCounter;
                            break;
                        case 22350000:  //dmaf
                            armyc2.c2sd.JavaLineArray.arraysupport.AreaWithCenterFeatureDouble(pLinePoints, vblCounter, lineType);
                            pLinePoints[vblCounter - 1].style = 5;
                            armyc2.c2sd.JavaLineArray.arraysupport.FillPoints(pLinePoints, vblCounter, points);
                            xPoints = armyc2.c2sd.JavaLineArray.lineutility.LineOfXPoints(pOriginalLinePoints);
                            for (j = 0; j < xPoints.size(); j++) {
                                points.add(xPoints.get(j));
                            }
                            acCounter = points.size();
                            break;
                        case 23340000:
                            bolVertical = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble(pt0, pt1, m);
                            if (bolVertical === 0) {
                                if (pt0.y > pt1.y) {
                                    direction = 0;
                                } else {
                                    direction = 1;
                                }
                            }
                            if (bolVertical !== 0 && m.value[0] <= 1) {
                                if (pt0.x < pt1.x) {
                                    direction = 3;
                                } else {
                                    direction = 2;
                                }
                            }
                            if (bolVertical !== 0 && m.value[0] > 1) {
                                if (pt0.x < pt1.x && pt0.y > pt1.y) {
                                    direction = 1;
                                }
                                if (pt0.x < pt1.x && pt0.y < pt1.y) {
                                    direction = 0;
                                }
                                if (pt0.x > pt1.x && pt0.y > pt1.y) {
                                    direction = 1;
                                }
                                if (pt0.x > pt1.x && pt0.y < pt1.y) {
                                    direction = 0;
                                }
                            }
                            if (dMBR / 20 > armyc2.c2sd.JavaLineArray.arraysupport.maxLength) {
                                dMBR = 20 * armyc2.c2sd.JavaLineArray.arraysupport.maxLength;
                            }
                            if (dMBR / 20 < armyc2.c2sd.JavaLineArray.arraysupport.minLength) {
                                dMBR = 20 * armyc2.c2sd.JavaLineArray.arraysupport.minLength;
                            }
                            if (dMBR < 250)
                                dMBR = 250;
                            if (dMBR > 500)
                                dMBR = 500;
                            pLinePoints[0] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt0, direction, dMBR / 20);
                            pLinePoints[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                            pLinePoints[2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                            pLinePoints[3] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt1, direction, dMBR / 20);
                            acCounter = 4;
                            break;
                        case 211400000:
                            armyc2.c2sd.JavaLineArray.arraysupport.GetIsolatePointsDouble(pLinePoints, lineType);
                            acCounter = 50;
                            break;
                        case 212600000:
                        case 212500000:
                            armyc2.c2sd.JavaLineArray.arraysupport.GetIsolatePointsDouble(pLinePoints, lineType);
                            acCounter = 50;
                            //armyc2.c2sd.JavaLineArray.arraysupport.FillPoints(pLinePoints, acCounter, points);
                            break;
                        case 211600000:
                            armyc2.c2sd.JavaLineArray.arraysupport.GetIsolatePointsDouble(pLinePoints, lineType);
                            acCounter = 32;
                            break;
                        case 211900000:
                            armyc2.c2sd.JavaLineArray.arraysupport.GetIsolatePointsDouble(pLinePoints, lineType);
                            acCounter = 75;
                            break;
                        case 212100000:
                            armyc2.c2sd.JavaLineArray.arraysupport.GetIsolatePointsDouble(pLinePoints, lineType);
                            acCounter = 29;
                            break;
                        case 23173000:
                            armyc2.c2sd.JavaLineArray.arraysupport.GetIsolatePointsDouble(pLinePoints, lineType);
                            acCounter = 29;
                            break;
                        case 22624000:
                            acCounter = armyc2.c2sd.JavaLineArray.arraysupport.GetZONEPointsDouble2(pLinePoints, lineType, vblSaveCounter);
                            break;
                        case 23111001:
                            pUpperLinePoints = new Array(vblSaveCounter);
                            pLowerLinePoints = new Array(vblSaveCounter);
                            pUpperLowerLinePoints = new Array(2 * vblCounter);
                            for (j = 0; j < vblSaveCounter; j++)
                                pLowerLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j]);

                            for (j = 0; j < vblSaveCounter; j++)
                                pUpperLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j]);

                            pUpperLinePoints = armyc2.c2sd.JavaLineArray.Channels.CoordIL2Double(1, pUpperLinePoints, 1, vblSaveCounter, lineType, 30);
                            pLowerLinePoints = armyc2.c2sd.JavaLineArray.Channels.CoordIL2Double(1, pLowerLinePoints, 0, vblSaveCounter, lineType, 30);
                            for (j = 0; j < vblSaveCounter; j++)
                                pUpperLowerLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[j]);

                            for (j = 0; j < vblSaveCounter; j++)
                                pUpperLowerLinePoints[j + vblSaveCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLowerLinePoints[vblSaveCounter - j - 1]);

                            pUpperLowerLinePoints[2 * vblSaveCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLowerLinePoints[0]);
                            vblCounter = armyc2.c2sd.JavaLineArray.arraysupport.GetZONEPointsDouble2(pUpperLowerLinePoints, lineType, 2 * vblSaveCounter + 1);
                            for (j = 0; j < vblCounter; j++)
                                pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLowerLinePoints[j]);

                            acCounter = vblCounter;
                            break;
                        case 23111000:
                        case 23113000:
                        case 23115000:
                        case 23114000:
                        case 23350000:
                        case 22134000:
                            acCounter = armyc2.c2sd.JavaLineArray.arraysupport.GetZONEPointsDouble2(pLinePoints, lineType, vblSaveCounter);
                            break;
                        case 23134000:
                        case 23112000:
                            acCounter = armyc2.c2sd.JavaLineArray.arraysupport.GetATWallPointsDouble2(pLinePoints, lineType, vblSaveCounter);
                            break;
                        case 22528000:
                            for (j = 0; j < vblCounter; j++)
                                pLinePoints[j].style = 1;

                            acCounter = vblCounter;
                            break;
                        case 22421000:
                            armyc2.c2sd.JavaLineArray.arraysupport.CoordFEBADouble(pLinePoints, vblCounter);
                            acCounter = pLinePoints.length;
                            break;
                        case 22224000:
                        case 22222000:
                            if (rev === 0) {
                                dMRR = pOriginalLinePoints[0].style;
                                if (dMRR <= 0) {
                                    dMRR = 1;
                                }
                                armyc2.c2sd.JavaLineArray.lineutility.GetSAAFRSegment(pLinePoints, lineType, dMRR, rev);
                                acCounter = 6;
                            }
                            if (rev === 1) {
                                return armyc2.c2sd.JavaLineArray.arraysupport.GetLineArray2Double(22223000, pLinePoints, vblCounter, vblSaveCounter, shapes, clipBounds, rev);
                            }
                            break;
                        case 22222001:
                        case 22224001:
                        case 22225000:
                        case 22223000:
                        case 22221000:
                            dMRR = armyc2.c2sd.JavaLineArray.arraysupport.dACP;
                            armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(acPoints);
                            armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(arcPts);
                            acCounter = 0;
                            for (j = 0; j < vblSaveCounter; j++)
                                if (pOriginalLinePoints[j].style <= 0)
                                    pOriginalLinePoints[j].style = 1;

                            for (j = 0; j < vblSaveCounter - 1; j++) {
                                dMBR = pOriginalLinePoints[j].style;
                                acPoints[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalLinePoints[j]);
                                acPoints[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalLinePoints[j + 1]);
                                armyc2.c2sd.JavaLineArray.lineutility.GetSAAFRSegment(acPoints, lineType, dMBR, rev);
                                for (k = 0; k < 6; k++) {
                                    pLinePoints[acCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(acPoints[k]);
                                    acCounter++;
                                }
                            }
                            var nextCircleSize = 0;
                            var currentCircleSize = 0;
                            for (j = 0; j < vblSaveCounter - 1; j++) {
                                currentCircleSize = pOriginalLinePoints[j].style;
                                nextCircleSize = pOriginalLinePoints[j + 1].style;
                                arcPts[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalLinePoints[j]);
                                dMBR = currentCircleSize;
                                armyc2.c2sd.JavaLineArray.lineutility.CalcCircleDouble(arcPts[0], dMBR, 26, arcPts, 0);
                                arcPts[25].style = 5;
                                for (k = 0; k < 26; k++) {
                                    pLinePoints[acCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(arcPts[k]);
                                    acCounter++;
                                }
                                arcPts[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalLinePoints[j + 1]);
                                dMBR = currentCircleSize;
                                armyc2.c2sd.JavaLineArray.lineutility.CalcCircleDouble(arcPts[0], dMBR, 26, arcPts, 0);
                                arcPts[25].style = 5;
                                for (k = 0; k < 26; k++) {
                                    pLinePoints[acCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(arcPts[k]);
                                    acCounter++;
                                }
                            }
                            break;
                        case 23164000:
                        case 23180000:
                            acCounter = vblCounter;
                            break;
                        case 26400000:
                        case 26420000:
                        case 26410000:
                        case 26430000:
                        case 26440000:
                            acCounter = vblCounter;
                            break;
                        case 23410000:
                            armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(circlePoints);
                            pt3 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[3]);
                            dRadius = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
                            armyc2.c2sd.JavaLineArray.lineutility.CalcCircleDouble(pt0, dRadius, 100, circlePoints, 0);
                            for (j = 0; j < 100; j++) {
                                pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(circlePoints[j]);
                            }
                            pLinePoints[99].style = 5;
                            dRadius = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt2);
                            armyc2.c2sd.JavaLineArray.lineutility.CalcCircleDouble(pt0, dRadius, 100, circlePoints, 0);
                            for (j = 0; j < 100; j++) {
                                pLinePoints[100 + j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(circlePoints[j]);
                            }
                            pLinePoints[199].style = 5;
                            dRadius = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt3);
                            armyc2.c2sd.JavaLineArray.lineutility.CalcCircleDouble(pt0, dRadius, 100, circlePoints, 0);
                            for (j = 0; j < 100; j++) {
                                pLinePoints[200 + j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(circlePoints[j]);
                            }
                            //acCounter = 300;
                            acCounter=vblCounter;
                            //armyc2.c2sd.JavaLineArray.arraysupport.FillPoints(pLinePoints, vblCounter, points);
                            break;
                        case 25211000:
                            d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
                            if (d <= 30) {
                                armyc2.c2sd.JavaLineArray.arraysupport.GetLineArray2Double(22522220, pLinePoints, 5, 2, shapes, clipBounds, rev);
                                break;
                            }
                            pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                            pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[1]);
                            bolVertical = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble(pt1, pt0, m);
                            pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pt1, pt0, -30, 0);
                            if (m.value[0] < 1) {
                                pLinePoints[0] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt0, 2, 10);
                                pLinePoints[1] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt1, 2, 10);
                                pLinePoints[2] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt1, 3, 10);
                                pLinePoints[3] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt0, 3, 10);
                            } else {
                                pLinePoints[0] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt0, 0, 10);
                                pLinePoints[1] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt1, 0, 10);
                                pLinePoints[2] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt1, 1, 10);
                                pLinePoints[3] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt0, 1, 10);
                            }
                            pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pt1, pt0, 30);
                            armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pt0, pt2, 30, 30, pArrowPoints, 0);
                            d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[0], pArrowPoints[0]);
                            d1 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[3], pArrowPoints[0]);
                            pLinePoints[3].style = 5;
                            if (d < d1) {
                                pLinePoints[4] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                                pLinePoints[4].style = 0;
                                pLinePoints[5] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[0]);
                                pLinePoints[5].style = 0;
                                pLinePoints[6] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[1]);
                                pLinePoints[6].style = 0;
                                pLinePoints[7] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[2]);
                                pLinePoints[7].style = 0;
                                pLinePoints[8] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[3]);
                            } else {
                                pLinePoints[4] = pLinePoints[3];
                                pLinePoints[4].style = 0;
                                pLinePoints[5] = pArrowPoints[0];
                                pLinePoints[5].style = 0;
                                pLinePoints[6] = pArrowPoints[1];
                                pLinePoints[6].style = 0;
                                pLinePoints[7] = pArrowPoints[2];
                                pLinePoints[7].style = 0;
                                pLinePoints[8] = pLinePoints[0];
                            }
                            acCounter = 9;
                            //armyc2.c2sd.JavaLineArray.arraysupport.FillPoints(pLinePoints, acCounter, points);
                            break;
                        case 25212000:
                            pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                            pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[1]);
                            pt2.x = (pt0.x + pt1.x) / 2;
                            pt2.y = (pt0.y + pt1.y) / 2;
                            bolVertical = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble(pt1, pt0, m);
                            if (m.value[0] < 1) {
                                pLinePoints[0] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt0, 2, 10);
                                pLinePoints[1] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt1, 2, 10);
                                pLinePoints[2] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt1, 3, 10);
                                pLinePoints[3] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt0, 3, 10);
                            } else {
                                pLinePoints[0] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt0, 0, 10);
                                pLinePoints[1] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt1, 0, 10);
                                pLinePoints[2] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt1, 1, 10);
                                pLinePoints[3] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt0, 1, 10);
                            }
                            pLinePoints[4] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                            pLinePoints[5] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                            pLinePoints[5].style = 0;
                            pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pt1, pt0, 50);
                            armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pt2, pt0, 20, 20, pArrowPoints, 0);
                            pLinePoints[6] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[1]);
                            pLinePoints[7] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[0]);
                            pLinePoints[8] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[2]);
                            pLinePoints[8].style = 0;
                            pLinePoints[9] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[1]);
                            acCounter = 10;
                            //armyc2.c2sd.JavaLineArray.arraysupport.FillPoints(pLinePoints, acCounter, points);
                            break;
                        case 25223000:
                        case 25224000:
                        case 25225000:
                            nCounter = vblSaveCounter;
                            pLinePoints[vblSaveCounter - 1].style = 5;
                            for (j = 0; j < vblSaveCounter - 1; j++) {
                                d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[j], pLinePoints[j + 1]);
                                if (d < 20)
                                    continue;
                                pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j]);
                                pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j + 1]);
                                bolVertical = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble(pLinePoints[j], pLinePoints[j + 1], m);
                                d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[j], pLinePoints[j + 1]);
                                pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[j], pLinePoints[j + 1], -3 * d / 4, 0);
                                pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[j], pLinePoints[j + 1], -1 * d / 4, 5);
                                if (pLinePoints[j].x < pLinePoints[j + 1].x) {
                                    if (m.value[0] < 1) {
                                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt2, 2, 10);
                                        pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt3, 2, 10);
                                    }
                                    if (m.value[0] >= 1) {
                                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt2, 1, 10);
                                        pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt3, 1, 10);
                                    }
                                }
                                if (pLinePoints[j].x > pLinePoints[j + 1].x) {
                                    if (m.value[0] < 1) {
                                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt2, 3, 10);
                                        pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt3, 3, 10);
                                    }
                                    if (m.value[0] >= 1) {
                                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt2, 0, 10);
                                        pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt3, 0, 10);
                                    }
                                }
                                if (bolVertical === 0) {
                                    if (pLinePoints[j].y > pLinePoints[j + 1].y) {
                                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt2, 0, 10);
                                        pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt3, 0, 10);
                                    } else {
                                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt2, 1, 10);
                                        pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt3, 1, 10);
                                    }
                                }
                                pLinePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2);
                                nCounter++;
                                pLinePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt3);
                                nCounter++;
                                d = 10;
                                if (dMBR / 20 < armyc2.c2sd.JavaLineArray.arraysupport.minLength) {
                                    d = 5;
                                }
                                armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pt2, pt3, Math.floor(d), Math.floor(d), pArrowPoints, 0);
                                for (k = 0; k < 3; k++) {
                                    pLinePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[k]);
                                    nCounter++;
                                }
                                if (lineType === 25224000) {
                                    armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pt3, pt2, Math.floor(d), Math.floor(d), pArrowPoints, 0);
                                    for (k = 0; k < 3; k++) {
                                        pLinePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[k]);
                                        nCounter++;
                                    }
                                }
                                if (lineType === 25225000) {
                                    if (pLinePoints[j].x < pLinePoints[j + 1].x) {
                                        if (m.value[0] < 1)
                                        {
                                            pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt2, 2, 15);
                                            pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt3, 2, 15);
                                        }
                                        if (m.value[0] >= 1)
                                        {
                                            pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt2, 1, 15);
                                            pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt3, 1, 15);
                                        }
                                    }
                                    if (pLinePoints[j].x > pLinePoints[j + 1].x) {
                                        if (m.value[0] < 1)
                                        {
                                            pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt2, 3, 15);
                                            pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt3, 3, 15);
                                        }
                                        if (m.value[0] >= 1)
                                        {
                                            pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt2, 0, 15);
                                            pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt3, 0, 15);
                                        }
                                    }
                                    if (bolVertical === 0) {
                                        if (pLinePoints[j].y > pLinePoints[j + 1].y) {
                                            pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt2, 0, 15);
                                            pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt3, 0, 15);
                                        } else {
                                            pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt2, 1, 15);
                                            pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt0, pt1, pt3, 1, 15);
                                        }
                                    }
                                    pLinePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2);
                                    nCounter++;
                                    pLinePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt3);
                                    nCounter++;
                                    armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pt3, pt2, Math.floor(d), Math.floor(d), pArrowPoints, 0);
                                    for (k = 0; k < 3; k++) {
                                        pLinePoints[nCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[k]);
                                        nCounter++;
                                    }
                                }
                            }
                            acCounter = nCounter;
                            break;
                        case 24222000:
                            for (j = 0; j < vblCounter; j++)
                                pLinePoints[j].style = 1;

                            acCounter = vblCounter;
                            break;
                        case 22330000:
                            d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[0], pLinePoints[1]);
                            if (d < 20)
                                pLinePoints[1] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pLinePoints[0], pLinePoints[1], 21);
                            pLinePoints[0] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pLinePoints[0], pLinePoints[1], 20);
                            armyc2.c2sd.JavaLineArray.lineutility.ReversePointsDouble2(pLinePoints, vblSaveCounter);
                            d = dMBR;
                            pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pLinePoints[vblCounter - 8], pLinePoints[vblCounter - 7], 20);
                            pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[vblCounter - 8]);
                            pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[vblCounter - 7]);
                            if (d / 10 > armyc2.c2sd.JavaLineArray.arraysupport.maxLength) {
                                d = 10 * armyc2.c2sd.JavaLineArray.arraysupport.maxLength;
                            }
                            if (d / 10 < armyc2.c2sd.JavaLineArray.arraysupport.minLength) {
                                d = 10 * armyc2.c2sd.JavaLineArray.arraysupport.minLength;
                            }
                            if (d < 250)
                                d = 250;
                            if (d > 500)
                                d = 250;
                            armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pt1, pt2, Math.floor(Math.floor(d) / 10), Math.floor(Math.floor(d) / 10), pArrowPoints, 0);
                            for (k = 0; k < 3; k++) {
                                pLinePoints[vblCounter - 6 + k] = pArrowPoints[k];
                            }
                            armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pt1, pt0, Math.floor(Math.floor(d) / 10), Math.floor(Math.floor(d) / 10), pArrowPoints, 18);
                            for (k = 0; k < 3; k++) {
                                pLinePoints[vblCounter - 3 + k] = pArrowPoints[k];
                            }
                            acCounter = vblCounter;
                            break;
                        case 23225000:
                            armyc2.c2sd.JavaLineArray.lineutility.LineRelativeToLine(pLinePoints[0], pLinePoints[1], pLinePoints[2], pt4, pt5);
                            pLinePoints[2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt5);
                            pLinePoints[3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt4);
                            for (j = 0; j < vblCounter; j++) {
                                pLinePoints[j].style = 1;
                            }
                            pt0 = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pLinePoints[0], pLinePoints[1], 0);
                            pt1 = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pLinePoints[2], pLinePoints[3], 0);
                            var savepoints = null;
                            var drawJaggies = new Boolean(true);
                            if (clipBounds !== null) {
                                var ul = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(clipBounds.getMinX(), clipBounds.getMinY());
                                var lr = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(clipBounds.getMaxX(), clipBounds.getMaxY());
                                savepoints = armyc2.c2sd.JavaLineArray.lineutility.BoundOneSegment(pt0, pt1, ul, lr);
                                if (savepoints !== null && savepoints.length > 1) {
                                    pt0 = savepoints[0];
                                    pt1 = savepoints[1];
                                }
                                midpt = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt0, pt1, 0);
                                var dist0 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(midpt, pt0);
                                var dist1 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(midpt, pt1);
                                if (dist0 > dist1) {
                                    armyc2.c2sd.JavaLineArray.lineutility.LineRelativeToLine(pLinePoints[0], pLinePoints[1], pt0, pt4, pt5);
                                } else {
                                    armyc2.c2sd.JavaLineArray.lineutility.LineRelativeToLine(pLinePoints[0], pLinePoints[1], pt1, pt4, pt5);
                                }
                                pLinePoints[2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt5);
                                pLinePoints[3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt4);
                            } else {
                                midpt = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pLinePoints[0], pLinePoints[1], 0);
                                dist0 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(midpt, pt0);
                                dist1 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(midpt, pt1);
                                if (dist0 > dist1)
                                    armyc2.c2sd.JavaLineArray.lineutility.LineRelativeToLine(pLinePoints[0], pLinePoints[1], pt0, pt4, pt5);
                                else
                                    armyc2.c2sd.JavaLineArray.lineutility.LineRelativeToLine(pLinePoints[0], pLinePoints[1], pt1, pt4, pt5);
                                pLinePoints[2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt5);
                                pLinePoints[3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt4);
                            }
                            pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[0], pt0, -10, 0);
                            pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[3], pt1, -10, 0);
                            pt4 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[0], pt0, 10, 0);
                            pt5 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pLinePoints[3], pt1, 10, 0);
                            dWidth = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
                            pointCounter = 4;
                            n = 1;
                            pLinePoints[pointCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                            pLinePoints[pointCounter].style = 0;
                            pointCounter++;
                            if ((drawJaggies).valueOf())
                                while (dExtendLength < dWidth - 10) {
                                    dExtendLength = n * 5;
                                    pLinePoints[pointCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pt2, pt3, dExtendLength - dWidth, 0);
                                    pointCounter++;
                                    n++;
                                    dExtendLength = n * 5;
                                    pLinePoints[pointCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pt4, pt5, dExtendLength - dWidth, 0);
                                    pointCounter++;
                                    n++;
                                }
                            pLinePoints[pointCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                            pLinePoints[pointCounter].style = 5;
                            pointCounter++;
                            acCounter = pointCounter;
                            break;
                        case 23131100:
                            acCounter = armyc2.c2sd.JavaLineArray.lineutility.GetDitchSpikeDouble(pLinePoints, vblSaveCounter, 0, lineType);
                            break;
                        case 23131200:
                            pLinePoints[0].style = 9;
                            acCounter = armyc2.c2sd.JavaLineArray.lineutility.GetDitchSpikeDouble(pLinePoints, vblSaveCounter, 0, lineType);
                            //pLinePoints[vblCounter - 1].style = 10;
                            break;
                        case 23132000:
                            armyc2.c2sd.JavaLineArray.lineutility.ReversePointsDouble2(pLinePoints, vblSaveCounter);
                            pLinePoints[0].style = 9;
                            acCounter = armyc2.c2sd.JavaLineArray.lineutility.GetDitchSpikeDouble(pLinePoints, vblSaveCounter, 0, lineType);
                            break;
                        case 22522210:
                            if (dMBR / 30 > armyc2.c2sd.JavaLineArray.arraysupport.maxLength) {
                                dMBR = 30 * armyc2.c2sd.JavaLineArray.arraysupport.maxLength;
                            }
                            if (dMBR / 30 < armyc2.c2sd.JavaLineArray.arraysupport.minLength) {
                                dMBR = 30 * armyc2.c2sd.JavaLineArray.arraysupport.minLength;
                            }
                            if (dMBR < 500)
                                dMBR = 500;
                            if (dMBR > 750)
                                dMBR = 500;
                            d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[0], pLinePoints[1]);
                            if (d < dMBR / 40)
                                pLinePoints[1] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pLinePoints[0], pLinePoints[1], dMBR / 40 + 1);
                            pLinePoints[0] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pLinePoints[0], pLinePoints[1], dMBR / 40);
                            armyc2.c2sd.JavaLineArray.lineutility.ReversePointsDouble2(pLinePoints, vblSaveCounter);
                            pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[vblCounter - 12]);
                            pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[vblCounter - 11]);
                            pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pt0, pt1, dMBR / 40);
                            armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pt0, pt1, Math.floor(Math.floor(dMBR) / 20), Math.floor(Math.floor(dMBR) / 20), pArrowPoints, 0);
                            for (j = 0; j < 3; j++) {
                                pLinePoints[vblCounter - 10 + j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[j]);
                            }
                            armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pt0, pt2, Math.floor((dMBR / 13.33)), Math.floor((dMBR / 13.33)), pArrowPoints, 0);
                            for (j = 0; j < 3; j++) {
                                pLinePoints[vblCounter - 7 + j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[j]);
                            }
                            pLinePoints[vblCounter - 4] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[vblCounter - 10]);
                            pLinePoints[vblCounter - 4].style = 0;
                            pLinePoints[vblCounter - 3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[vblCounter - 7]);
                            pLinePoints[vblCounter - 3].style = 5;
                            pLinePoints[vblCounter - 2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[vblCounter - 8]);
                            pLinePoints[vblCounter - 2].style = 0;
                            pLinePoints[vblCounter - 1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[vblCounter - 5]);
                            pLinePoints[vblCounter - 1].style = 5;
                            acCounter = vblCounter;
                            break;
                        case 23226000:
                            pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pLinePoints[vblCounter - 8], pLinePoints[vblCounter - 7], dMBR / 2);
                            pt3 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[vblCounter - 7]);
                            pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pLinePoints[1], pLinePoints[0], dMBR / 2);
                            if (dMBR / 10 > armyc2.c2sd.JavaLineArray.arraysupport.maxLength) {
                                dMBR = 10 * armyc2.c2sd.JavaLineArray.arraysupport.maxLength;
                            }
                            if (dMBR / 10 < armyc2.c2sd.JavaLineArray.arraysupport.minLength) {
                                dMBR = 10 * armyc2.c2sd.JavaLineArray.arraysupport.minLength;
                            }
                            if (dMBR > 250)
                                dMBR = 250;
                            armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pt2, pt3, Math.floor(Math.floor(dMBR) / 10), Math.floor(Math.floor(dMBR) / 10), pArrowPoints, 0);
                            for (k = 0; k < 3; k++) {
                                pLinePoints[vblCounter - 6 + k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[k]);
                            }
                            armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pt1, pt0, Math.floor(Math.floor(dMBR) / 10), Math.floor(Math.floor(dMBR) / 10), pArrowPoints, 0);
                            for (k = 0; k < 3; k++) {
                                pLinePoints[vblCounter - 3 + k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[k]);
                            }
                            pLinePoints[vblSaveCounter - 1].style = 5;
                            acCounter = vblCounter;
                            break;
                        case 23227000:
                            pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pLinePoints[vblCounter - 8], pLinePoints[vblCounter - 7], dMBR / 2);
                            pt3 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[vblCounter - 7]);
                            pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pLinePoints[1], pLinePoints[0], dMBR / 2);
                            if (dMBR / 10 > armyc2.c2sd.JavaLineArray.arraysupport.maxLength) {
                                dMBR = 10 * armyc2.c2sd.JavaLineArray.arraysupport.maxLength;
                            }
                            if (dMBR / 10 < armyc2.c2sd.JavaLineArray.arraysupport.minLength) {
                                dMBR = 10 * armyc2.c2sd.JavaLineArray.arraysupport.minLength;
                            }
                            if (dMBR > 200)
                                dMBR = 200;
                            armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pt2, pt3, Math.floor(Math.floor(dMBR) / 10), Math.floor(Math.floor(dMBR) / 5), pArrowPoints, 0);
                            for (k = 0; k < 3; k++) {
                                pLinePoints[vblCounter - 6 + k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[k]);
                            }
                            armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pt1, pt0, Math.floor(Math.floor(dMBR) / 10), Math.floor(Math.floor(dMBR) / 5), pArrowPoints, 0);
                            for (k = 0; k < 3; k++) {
                                pLinePoints[vblCounter - 3 + k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[k]);
                            }
                            pLinePoints[vblSaveCounter - 1].style = 5;
                            acCounter = vblCounter;
                            break;
                        case 22522100:
                            armyc2.c2sd.JavaLineArray.lineutility.ReversePointsDouble2(pLinePoints, vblSaveCounter);
                            for (k = vblSaveCounter - 1; k > 0; k--) {
                                d += armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[k], pLinePoints[k - 1]);
                                if (d > 60)
                                    break;
                            }
                            if (d > 60) {
                                middleSegment = k;
                                pt2 = pLinePoints[middleSegment];
                                if (middleSegment >= 1)
                                    pt3 = pLinePoints[middleSegment - 1];
                            } else {
                                if (vblSaveCounter <= 3)
                                    middleSegment = 1;
                                else
                                    middleSegment = 2;
                                pt2 = pLinePoints[middleSegment];
                                if (middleSegment >= 1)
                                    pt3 = pLinePoints[middleSegment - 1];
                            }
                            pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                            if (dMBR / 20 > armyc2.c2sd.JavaLineArray.arraysupport.maxLength) {
                                dMBR = 20 * armyc2.c2sd.JavaLineArray.arraysupport.maxLength;
                            }
                            if (dMBR / 20 < armyc2.c2sd.JavaLineArray.arraysupport.minLength) {
                                dMBR = 20 * armyc2.c2sd.JavaLineArray.arraysupport.minLength;
                            }
                            if (dMBR < 150)
                                dMBR = 150;
                            if (dMBR > 250)
                                dMBR = 250;
                            armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pLinePoints[vblCounter - 11], pLinePoints[vblCounter - 10], Math.floor(Math.floor(dMBR) / 20), Math.floor(Math.floor(dMBR) / 20), pArrowPoints, 0);
                            for (j = 0; j < 3; j++) {
                                pLinePoints[vblCounter - 9 + j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[j]);
                            }
                            pLinePoints[vblCounter - 6].x = (pLinePoints[vblCounter - 11].x + pLinePoints[vblCounter - 10].x) / 2;
                            pLinePoints[vblCounter - 6].y = (pLinePoints[vblCounter - 11].y + pLinePoints[vblCounter - 10].y) / 2;
                            pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[vblCounter - 6]);
                            armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pLinePoints[vblCounter - 11], pt0, Math.floor(Math.floor(dMBR) / 20), Math.floor(Math.floor(dMBR) / 20), pArrowPoints, 9);
                            if (middleSegment >= 1) {
                                pt0 = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt2, pt3, 0);
                                armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pt3, pt0, Math.floor(Math.floor(dMBR) / 20), Math.floor(Math.floor(dMBR) / 20), pArrowPoints, 9);
                            }
                            for (j = 0; j < 3; j++) {
                                pLinePoints[vblCounter - 6 + j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[j]);
                            }
                            armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pLinePoints[vblCounter - 10], pt0, Math.floor(Math.floor(dMBR) / 20), Math.floor(Math.floor(dMBR) / 20), pArrowPoints, 9);
                            if (middleSegment >= 1) {
                                pt0 = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt2, pt3, 0);
                                armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pt2, pt0, Math.floor(Math.floor(dMBR) / 20), Math.floor(Math.floor(dMBR) / 20), pArrowPoints, 9);
                            }
                            for (j = 0; j < 3; j++) {
                                pLinePoints[vblCounter - 3 + j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[j]);
                            }
                            var airPts = new java.util.ArrayList();
                            pLinePoints[middleSegment - 1].style = 5;
                            if (vblSaveCounter === 2)
                                pLinePoints[1].style = 5;
                            for (j = 0; j < vblCounter; j++)
                                airPts.add(armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j]));

                            midpt = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pLinePoints[middleSegment - 1], pLinePoints[middleSegment], 0);
                            pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(midpt, pLinePoints[middleSegment], dMBR / 20, 0);
                            airPts.add(pt0);
                            pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[middleSegment]);
                            pt1.style = 5;
                            airPts.add(pt1);
                            pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(midpt, pLinePoints[middleSegment - 1], dMBR / 20, 0);
                            airPts.add(pt0);
                            pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[middleSegment - 1]);
                            pt1.style = 5;
                            airPts.add(pt1);
                            vblCounter = airPts.size();
                            pLinePoints = new Array(airPts.size());
                            for (j = 0; j < airPts.size (); j++)
                                pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(airPts.get(j));

                            acCounter = vblCounter;
                            //armyc2.c2sd.JavaLineArray.arraysupport.FillPoints(pLinePoints, vblCounter, points);
                            break;
                        case 22422000:
                            pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[1]);
                            pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                            pLinePoints[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                            pLinePoints[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                            pts2 = new Array(3);
                            pts2[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                            pts2[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                            pts2[2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2);
                            armyc2.c2sd.JavaLineArray.lineutility.GetPixelsMin(pts2, 3, offsetX, offsetY);
                            if (offsetX.value[0] < 0) {
                                offsetX.value[0] = offsetX.value[0] - 100;
                            } else {
                                offsetX.value[0] = 0;
                            }
                            pLinePoints[2].style = 5;
                            if (dMBR / 20 > armyc2.c2sd.JavaLineArray.arraysupport.maxLength) {
                                dMBR = 20 * armyc2.c2sd.JavaLineArray.arraysupport.maxLength;
                            }
                            if (dMBR < armyc2.c2sd.JavaLineArray.arraysupport.minLength) {
                                dMBR = 20 * armyc2.c2sd.JavaLineArray.arraysupport.minLength;
                            }
                            if (dMBR > 250)
                                dMBR = 250;
                            pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pt0, pt1, -dMBR / 10);
                            bolVertical = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble(pt0, pt1, m);
                            if (bolVertical !== 0 && m.value[0] !== 0) {
                                b = pt2.y + (1 / m.value[0]) * pt2.x;
                                b1 = (-1 / m.value[0]) * offsetX.value[0] + b;
                                ptYIntercept.x = offsetX.value[0];
                                ptYIntercept.y = b1;
                                pLinePoints[3] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(ptYIntercept, pt2, -2);
                                pLinePoints[3].style = 0;
                                pLinePoints[4] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(ptYIntercept, pt2, 2);
                                pLinePoints[4].style = 0;
                            }
                            if (bolVertical !== 0 && m.value[0] === 0) {
                                pLinePoints[3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2);
                                pLinePoints[3].y = pt2.y - 2;
                                pLinePoints[3].style = 0;
                                pLinePoints[4] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2);
                                pLinePoints[4].y = pt2.y + 2;
                                pLinePoints[4].style = 0;
                            }
                            if (bolVertical === 0) {
                                pLinePoints[3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2);
                                pLinePoints[3].x = pt2.x - 2;
                                pLinePoints[3].style = 0;
                                pLinePoints[4] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2);
                                pLinePoints[4].x = pt2.x + 2;
                                pLinePoints[4].style = 0;
                            }
                            pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pt1, pt0, -dMBR / 10);
                            if (bolVertical !== 0 && m.value[0] !== 0) {
                                b = pt2.y + (1 / m.value[0]) * pt2.x;
                                b1 = (-1 / m.value[0]) * offsetX.value[0] + b;
                                ptYIntercept.x = offsetX.value[0];
                                ptYIntercept.y = b1;
                                pLinePoints[5] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(ptYIntercept, pt2, 2);
                                pLinePoints[5].style = 0;
                                pLinePoints[6] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(ptYIntercept, pt2, -2);
                            }
                            if (bolVertical !== 0 && m.value[0] === 0) {
                                pLinePoints[5] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2);
                                pLinePoints[5].y = pt2.y + 2;
                                pLinePoints[5].style = 0;
                                pLinePoints[6] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2);
                                pLinePoints[6].y = pt2.y - 2;
                            }
                            if (bolVertical === 0) {
                                pLinePoints[5] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2);
                                pLinePoints[5].x = pt2.x + 2;
                                pLinePoints[5].style = 0;
                                pLinePoints[6] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2);
                                pLinePoints[6].x = pt2.x - 2;
                            }
                            pLinePoints[6].style = 0;
                            pLinePoints[7] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[3]);
                            pLinePoints[7].style = 5;
                            armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pLinePoints[1], pLinePoints[0], Math.floor(Math.floor(dMBR) / 20), Math.floor(Math.floor(dMBR) / 20), pArrowPoints, 0);
                            for (j = 0; j < 3; j++) {
                                pLinePoints[8 + j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[j]);
                            }
                            armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pLinePoints[1], pLinePoints[2], Math.floor(Math.floor(dMBR) / 20), Math.floor(Math.floor(dMBR) / 20), pArrowPoints, 0);
                            for (j = 0; j < 3; j++) {
                                pLinePoints[11 + j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[j]);
                                pLinePoints[11 + j].style = 0;
                            }
                            acCounter = 14;
                            break;
                        case 22522220:
                            armyc2.c2sd.JavaLineArray.lineutility.ReversePointsDouble2(pLinePoints, vblSaveCounter);
                            if (dMBR / 20 > armyc2.c2sd.JavaLineArray.arraysupport.maxLength) {
                                dMBR = 20 * armyc2.c2sd.JavaLineArray.arraysupport.maxLength;
                            }
                            if (dMBR / 20 < armyc2.c2sd.JavaLineArray.arraysupport.minLength) {
                                dMBR = 20 * armyc2.c2sd.JavaLineArray.arraysupport.minLength;
                            }
                            if (client.startsWith("cpof")) {
                                if (dMBR < 250)
                                    dMBR = 250;
                            } else {
                                if (dMBR < 150)
                                    dMBR = 150;
                            }
                            if (dMBR > 500)
                                dMBR = 500;
                            armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pLinePoints[vblCounter - 5], pLinePoints[vblCounter - 4], Math.floor(Math.floor(dMBR) / 20), Math.floor(Math.floor(dMBR) / 20), pArrowPoints, 0);
                            for (k = 0; k < 3; k++) {
                                pLinePoints[vblCounter - k - 1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[k]);
                            }
                            acCounter = vblCounter;
                            break;
                        case 23120000:
                            pts2 = new Array(2);
                            pts2[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                            pts2[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                            armyc2.c2sd.JavaLineArray.lineutility.GetPixelsMin(pts2, 2, offsetX, offsetY);
                            if (offsetX.value[0] <= 0) {
                                offsetX.value[0] = offsetX.value[0] - 100;
                            } else {
                                offsetX.value[0] = 0;
                            }
                            if (dMBR > 300)
                                dMBR = 300;
                            pLinePoints[0] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pLinePoints[1], pLinePoints[0], -dMBR / 10);
                            bolVertical = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble(pt0, pt1, m);
                            midpt.x = (pt0.x + pLinePoints[0].x) / 2;
                            midpt.y = (pt0.y + pLinePoints[0].y) / 2;
                            pLinePoints[vblCounter - 3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                            pLinePoints[vblCounter - 4].style = 5;
                            pLinePoints[vblCounter - 3].style = 0;
                            if (bolVertical !== 0 && m.value[0] !== 0) {
                                b = midpt.y + (1 / m.value[0]) * midpt.x;
                                b1 = (-1 / m.value[0]) * offsetX.value[0] + b;
                                ptYIntercept.x = offsetX.value[0];
                                ptYIntercept.y = b1;
                                pLinePoints[vblCounter - 2] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(ptYIntercept, midpt, dMBR / 20);
                                if (pLinePoints[vblCounter - 2].y >= midpt.y) {
                                    pLinePoints[vblCounter - 2] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(ptYIntercept, midpt, -dMBR / 20);
                                }
                            }
                            if (bolVertical !== 0 && m.value[0] === 0) {
                                pLinePoints[vblCounter - 2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(midpt);
                                pLinePoints[vblCounter - 2].y = midpt.y - dMBR / 20;
                            }
                            if (bolVertical === 0) {
                                pLinePoints[vblCounter - 2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(midpt);
                                pLinePoints[vblCounter - 2].x = midpt.x - dMBR / 20;
                            }
                            pLinePoints[vblCounter - 2].style = 0;
                            pLinePoints[vblCounter - 1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                            //armyc2.c2sd.JavaLineArray.arraysupport.FillPoints(pLinePoints, vblCounter, points);
                            acCounter = vblCounter;
                            break;
                        case 23157000:
                            pts2 = new Array(2);
                            if (Math.abs(pt0.y - pt1.y) < 1) {
                                pt1.y = pt0.y + 1;
                            }
                            pts2[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                            pts2[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                            pts = new Array(26);
                            dRadius = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1) / 2;
                            midpt.x = (pt1.x + pt0.x) / 2;
                            midpt.y = (pt1.y + pt0.y) / 2;
                            bolVertical = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble(pt0, pt1, m);
                            if (bolVertical !== 0 && m.value[0] !== 0) {
                                b = midpt.y + (1 / m.value[0]) * midpt.x;
                                ptYIntercept.x = 0;
                                ptYIntercept.y = b;
                                pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(ptYIntercept, midpt, dRadius);
                                if (pLinePoints[0].x <= pLinePoints[1].x) {
                                    if (pt2.y >= midpt.y) {
                                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(ptYIntercept, midpt, -dRadius);
                                    }
                                } else {
                                    if (pt2.y <= midpt.y) {
                                        pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(ptYIntercept, midpt, -dRadius);
                                    }
                                }
                            }
                            if (bolVertical !== 0 && m.value[0] === 0) {
                                pt2 = midpt;
                                if (pLinePoints[0].x <= pLinePoints[1].x) {
                                    pt2.y = midpt.y - dRadius;
                                } else {
                                    pt2.y = midpt.y + dRadius;
                                }
                            }
                            if (bolVertical === 0) {
                                pt2 = midpt;
                                if (pLinePoints[0].y <= pLinePoints[1].y) {
                                    pt2.x = midpt.x + dRadius;
                                } else {
                                    pt2.x = midpt.x - dRadius;
                                }
                            }
                            pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(midpt, pt2, 100);
                            pts[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2);
                            pts[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                            armyc2.c2sd.JavaLineArray.lineutility.ArcArrayDouble(pts, 0, dRadius, lineType);
                            pLinePoints[0].style = 1;
                            pLinePoints[1].style = 5;
                            for (j = 0; j < 26; j++) {
                                pLinePoints[2 + j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[j]);
                                pLinePoints[2 + j].style = 1;
                            }
                            acCounter = 28;
                            break;
                        case 231100000:
                            dRadius = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceToLineDouble(pt0, pt1, pt2);
                            bolVertical = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble(pt0, pt1, m);
                            if (bolVertical !== 0 && m.value[0] !== 0) {
                                b = pt1.y + 1 / m.value[0] * pt1.x;
                                b1 = pt2.y - m.value[0] * pt2.x;
                                calcPoint0 = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueIntersectDouble2(-1 / m.value[0], b, m.value[0], b1, 1, 1, pt0.x, pt0.y);
                                calcPoint1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pt0, pt1, dRadius / 2);
                                calcPoint2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pt0, pt1, dRadius);
                                b = calcPoint1.y + 1 / m.value[0] * calcPoint1.x;
                                calcPoint3 = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueIntersectDouble2(-1 / m.value[0], b, m.value[0], b1, 1, 1, pt0.x, pt0.y);
                                b = calcPoint2.y + 1 / m.value[0] * calcPoint2.x;
                                calcPoint4 = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueIntersectDouble2(-1 / m.value[0], b, m.value[0], b1, 1, 1, pt0.x, pt0.y);
                                midpt = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(calcPoint1, calcPoint3, 0);
                                midpt1 = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(calcPoint2, calcPoint4, 0);
                                b = pt1.y + 1 / m.value[0] * pt1.x;
                                calcPoint0 = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueIntersectDouble2(-1 / m.value[0], b, m.value[0], b1, 1, 1, pt0.x, pt0.y);
                                calcPoint3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pt0, pt1, dRadius);
                                d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(calcPoint0, calcPoint3);
                                calcPoint1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(calcPoint0, calcPoint3, -(d - dRadius));
                            }
                            if (bolVertical !== 0 && m.value[0] === 0) {
                                calcPoint0.x = pt1.x;
                                calcPoint0.y = pt2.y;
                                calcPoint1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pt0, pt1, dRadius / 2);
                                calcPoint2 = pt2;
                                calcPoint3.x = calcPoint0.x + dRadius / 2;
                                calcPoint3.y = calcPoint0.y;
                                calcPoint4.x = pt1.x + dRadius;
                                calcPoint4.y = pt2.y;
                                midpt = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(calcPoint1, calcPoint3, 0);
                                midpt1 = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(calcPoint2, calcPoint4, 0);
                                calcPoint3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pt0, pt1, dRadius);
                                d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(calcPoint0, calcPoint3);
                                calcPoint1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(calcPoint0, calcPoint3, -(d - dRadius));
                            }
                            if (bolVertical === 0) {
                                calcPoint0.x = pt2.x;
                                calcPoint0.y = pt1.y;
                                calcPoint1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pt0, pt1, dRadius / 2);
                                calcPoint2 = pt2;
                                calcPoint3.y = calcPoint0.y + dRadius / 2;
                                calcPoint3.x = calcPoint0.x;
                                calcPoint4.y = pt1.y + dRadius;
                                calcPoint4.x = pt2.x;
                                midpt = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(calcPoint1, calcPoint3, 0);
                                midpt1 = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(calcPoint2, calcPoint4, 0);
                                calcPoint3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pt0, pt1, dRadius);
                                d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(calcPoint0, calcPoint3);
                                calcPoint1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(calcPoint0, calcPoint3, -(d - dRadius));
                            }
                            arcPts[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(calcPoint1);
                            arcPts[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(calcPoint3);
                            armyc2.c2sd.JavaLineArray.lineutility.ArcArrayDouble(arcPts, 0, dRadius, lineType);
                            pLinePoints[0].style = 5;
                            pLinePoints[1].style = 5;
                            for (k = 0; k < 26; k++) {
                                pLinePoints[k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(arcPts[k]);
                            }
                            for (k = 25; k < vblCounter; k++) {
                                pLinePoints[k].style = 5;
                            }
                            pLinePoints[26] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                            dRadius = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt1, pt0);
                            midpt = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pt1, pt0, -dRadius / 2 - 7, 0);
                            pLinePoints[27] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(midpt);
                            pLinePoints[27].style = 0;
                            midpt = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pt1, pt0, -dRadius / 2 + 7, 0);
                            pLinePoints[28] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(midpt);
                            pLinePoints[29] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                            pLinePoints[29].style = 5;
                            armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pt1, pt0, 15, 15, pArrowPoints, 0);
                            for (k = 0; k < 3; k++) {
                                pLinePoints[30 + k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[k]);
                            }
                            for (k = 0; k < 3; k++) {
                                pLinePoints[30 + k].style = 5;
                            }
                            midpt = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt0, pt1, 0);
                            d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt1, calcPoint0);
                            pLinePoints[33] = pt2;
                            pt3 = armyc2.c2sd.JavaLineArray.lineutility.PointRelativeToLine(pt0, pt1, pt0, pt2);
                            d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt3, pt2);
                            pt4 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, d);
                            d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt2, pt4);
                            pLinePoints[34] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pt2, pt4, d);
                            acCounter = 35;
                            break;
                        case 211200000:
                            d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[0], pLinePoints[1]);
                            if (client.startsWith("cpof"))
                                d2 = 20;
                            else
                                d2 = 30;
                            d2 = 30;
                            if (d < d2) {
                                lineType = 22522220;
                                armyc2.c2sd.JavaLineArray.arraysupport.GetLineArray2Double(22522220, pLinePoints, 5, 2, shapes, clipBounds, rev);
                                break;
                            }
                            armyc2.c2sd.JavaLineArray.lineutility.ReversePointsDouble2(pLinePoints, vblSaveCounter);
                            if (dMBR / 10 > armyc2.c2sd.JavaLineArray.arraysupport.maxLength) {
                                dMBR = 10 * armyc2.c2sd.JavaLineArray.arraysupport.maxLength;
                            }
                            if (dMBR / 10 < armyc2.c2sd.JavaLineArray.arraysupport.minLength) {
                                dMBR = 10 * armyc2.c2sd.JavaLineArray.arraysupport.minLength;
                            }
                            if (dMBR > 150)
                                dMBR = 150;
                            pLinePoints[0] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pLinePoints[1], pLinePoints[0], -2 * dMBR / 10);
                            for (k = 0; k < vblCounter - 14; k++) {
                                pLinePoints[k].style = 18;
                            }
                            pLinePoints[vblCounter - 15].style = 5;
                            pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pLinePoints[1], pLinePoints[0], 5 * dMBR / 10);
                            armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pt0, pLinePoints[0], Math.floor(Math.floor(dMBR) / 10), Math.floor(Math.floor(dMBR) / 10), pArrowPoints, 0);
                            for (k = 0; k < 3; k++) {
                                pLinePoints[vblCounter - 14 + k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[k]);
                            }
                            pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pLinePoints[1], pLinePoints[0], dMBR / 10);
                            armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pt0, pt3, Math.floor(Math.floor(dMBR) / 10), Math.floor(Math.floor(dMBR) / 10), pArrowPoints, 0);
                            pLinePoints[vblCounter - 12].style = 0;
                            pLinePoints[vblCounter - 11] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[2]);
                            pLinePoints[vblCounter - 11].style = 0;
                            pLinePoints[vblCounter - 10] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[0]);
                            pLinePoints[vblCounter - 10].style = 0;
                            pLinePoints[vblCounter - 9] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[vblCounter - 14]);
                            pLinePoints[vblCounter - 9].style = 5;
                            armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pLinePoints[vblCounter - 16], pLinePoints[vblCounter - 15], Math.floor(Math.floor(dMBR) / 10), Math.floor(Math.floor(dMBR) / 10), pArrowPoints, 0);
                            for (k = 0; k < 3; k++) {
                                pLinePoints[vblCounter - 8 + k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[k]);
                            }
                            pLinePoints[vblCounter - 6].style = 0;
                            pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pLinePoints[vblCounter - 16], pLinePoints[vblCounter - 15], -0.75 * dMBR / 10);
                            pLinePoints[1] = pt3;
                            pLinePoints[1].style = 5;
                            armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pLinePoints[vblCounter - 16], pt3, Math.floor((dMBR / 10)), Math.floor((dMBR / 10)), pArrowPoints, 0);
                            for (k = 0; k < 3; k++) {
                                pLinePoints[vblCounter - 5 + k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[2 - k]);
                            }
                            pLinePoints[vblCounter - 5].style = 0;
                            pLinePoints[vblCounter - 2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[vblCounter - 8]);
                            pLinePoints[vblCounter - 2].style = 5;
                            pLinePoints[vblCounter - 1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[vblCounter - 7]);
                            acCounter = 16;
                            break;
                        case 211210000:
                            if (client.startsWith("cpof"))
                                d2 = 25;
                            else
                                d2 = 25;
                            var folspDist = 0;
                            folspDist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[0], pLinePoints[1]);
                            if (folspDist < d2) {
                                lineType = 22522220;
                                armyc2.c2sd.JavaLineArray.arraysupport.GetLineArray2Double(lineType, pLinePoints, 5, 2, shapes, clipBounds, rev);
                                break;
                            }
                            armyc2.c2sd.JavaLineArray.lineutility.ReversePointsDouble2(pLinePoints, vblSaveCounter);
                            if (dMBR / 10 > armyc2.c2sd.JavaLineArray.arraysupport.maxLength) {
                                dMBR = 10 * armyc2.c2sd.JavaLineArray.arraysupport.maxLength;
                            }
                            if (dMBR / 10 < armyc2.c2sd.JavaLineArray.arraysupport.minLength) {
                                dMBR = 10 * armyc2.c2sd.JavaLineArray.arraysupport.minLength;
                            }
                            if (client.startsWith("cpof")) {
                                if (folspDist < 25)
                                    dMBR = 125;
                                if (folspDist < 75)
                                    dMBR = 150;
                                if (folspDist < 100)
                                    dMBR = 175;
                                if (folspDist < 125)
                                    dMBR = 200;
                            }
                            else
                            {
                                dMBR *= 1.5;
                            }
                            pLinePoints[0] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pLinePoints[1], pLinePoints[0], -dMBR / 8.75);
                            pLinePoints[vblCounter - 15].style = 5;
                            pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pLinePoints[1], pLinePoints[0], dMBR / 4);
                            armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pt0, pLinePoints[0], Math.floor(Math.floor(dMBR) / 20), Math.floor(Math.floor(dMBR) / 20), pArrowPoints, 0);
                            for (k = 0; k < 3; k++) {
                                pLinePoints[vblCounter - 14 + k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[k]);
                            }
                            pLinePoints[vblCounter - 12].style = 0;
                            pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pLinePoints[1], pLinePoints[0], dMBR / 15);
                            armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pt0, pt3, Math.floor(Math.floor(dMBR) / 20), Math.floor(Math.floor(dMBR) / 20), pArrowPoints, 0);
                            for (k = 0; k < 3; k++) {
                                pLinePoints[vblCounter - 11 + k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[2 - k]);
                                pLinePoints[vblCounter - 11 + k].style = 0;
                            }
                            pLinePoints[vblCounter - 8] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[vblCounter - 14]);
                            pLinePoints[vblCounter - 8].style = 5;
                            armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pLinePoints[vblCounter - 16], pLinePoints[vblCounter - 15], Math.floor(Math.floor(dMBR) / 20), Math.floor(Math.floor(dMBR) / 20), pArrowPoints, 9);
                            for (k = 0; k < 3; k++) {
                                pLinePoints[vblCounter - 7 + k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[k]);
                            }
                            for (k = 4; k > 0; k--) {
                                pLinePoints[vblCounter - k].style = 5;
                            }
                            acCounter = 12;
                            break;
                        case 23223000:
                            lLinestyle = 9;
                            if (dMBR / 10 > armyc2.c2sd.JavaLineArray.arraysupport.maxLength)
                                dMBR = 10 * armyc2.c2sd.JavaLineArray.arraysupport.maxLength;
                            if (dMBR / 10 < armyc2.c2sd.JavaLineArray.arraysupport.minLength)
                                dMBR = 10 * armyc2.c2sd.JavaLineArray.arraysupport.minLength;
                            if (dMBR > 250)
                                dMBR = 250;
                            armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pLinePoints[vblCounter - 8], pLinePoints[vblCounter - 7], Math.floor(Math.floor(dMBR) / 10), Math.floor(Math.floor(dMBR) / 10), pArrowPoints, lLinestyle);
                            for (k = 0; k < 3; k++)
                                pLinePoints[vblCounter - 6 + k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[k]);

                            armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pLinePoints[1], pLinePoints[0], Math.floor(Math.floor(dMBR) / 10), Math.floor(Math.floor(dMBR) / 10), pArrowPoints, lLinestyle);
                            for (k = 0; k < 3; k++)
                                pLinePoints[vblCounter - 3 + k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pArrowPoints[k]);

                            acCounter = 8;
                            break;
                        case 26220000:
                            pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pt1, pt0, -10, 0);
                            pt4 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pt0, pt1, -10, 0);
                            pt5 = armyc2.c2sd.JavaLineArray.lineutility.ExtendTrueLinePerpDouble(pt0, pt1, pt3, 10, 0);
                            pt6 = armyc2.c2sd.JavaLineArray.lineutility.ExtendTrueLinePerpDouble(pt0, pt1, pt3, -10, 0);
                            pt7 = armyc2.c2sd.JavaLineArray.lineutility.ExtendTrueLinePerpDouble(pt0, pt1, pt4, 10, 0);
                            pt8 = armyc2.c2sd.JavaLineArray.lineutility.ExtendTrueLinePerpDouble(pt0, pt1, pt4, -10, 0);
                            if (pt5.y < pt6.y) {
                                pLinePoints[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt5);
                            } else {
                                pLinePoints[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt6);
                            }
                            if (pt7.y > pt8.y) {
                                pLinePoints[3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt7);
                            } else {
                                pLinePoints[3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt8);
                            }
                            pLinePoints[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                            pLinePoints[2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                            acCounter = 4;
                            break;
                        case 23330000:
                            acCounter = armyc2.c2sd.JavaLineArray.arraysupport.GetFORTLPointsDouble(pLinePoints, lineType, vblSaveCounter);
                            break;
                        case 21400000:
                            acCounter = armyc2.c2sd.JavaLineArray.DISMSupport.GetDISMCanalizeDouble(pLinePoints, lineType);
                            break;
                        case 21200000:
                            acCounter = armyc2.c2sd.JavaLineArray.DISMSupport.GetDISMBreachDouble(pLinePoints, lineType);
                            break;
                        case 212210000:
                        case 212220000:
                        case 212230000:
                            acCounter = armyc2.c2sd.JavaLineArray.DISMSupport.GetDISMCoverDouble(pLinePoints, lineType);
                            break;
                        case 212210001:
                        case 212220001:
                        case 212230001:
                            acCounter = armyc2.c2sd.JavaLineArray.DISMSupport.GetDISMCoverDoubleRevC(pLinePoints, lineType, vblSaveCounter);
                            break;
                        case 22139000:
                            acCounter = armyc2.c2sd.JavaLineArray.DISMSupport.GetDISMCoverDouble(pLinePoints, lineType);
                            //reorder pLinePoints
                            var saraPts = new Array(acCounter);
                            for (j = 0; j < 4; j++)
                                saraPts[j] = pLinePoints[j];  //0-3

                            for (j = 4; j < 8; j++)
                                saraPts[j] = pLinePoints[j + 4];    //8-11

                            for (j = 8; j < 12; j++)
                                saraPts[j] = pLinePoints[j - 4];    //4-7

                            for (j = 12; j < 16; j++)
                                saraPts[j] = pLinePoints[j];  //12-15

                            pLinePoints = saraPts;
                            break;
                        case 211000000:
                            acCounter = armyc2.c2sd.JavaLineArray.DISMSupport.GetDISMDisruptDouble(pLinePoints, lineType);
                            break;
                        case 21600000:
                            acCounter = armyc2.c2sd.JavaLineArray.DISMSupport.GetDISMContainDouble(pLinePoints, lineType);
                            break;
                        case 211700000:
                            armyc2.c2sd.JavaLineArray.DISMSupport.GetDISMPenetrateDouble(pLinePoints, lineType);
                            acCounter = 7;
                            break;
                        case 23171000:
                            armyc2.c2sd.JavaLineArray.DISMSupport.GetDISMBlockDouble2(pLinePoints, lineType);
                            acCounter = 4;
                            break;
                        case 21100000:
                            armyc2.c2sd.JavaLineArray.DISMSupport.GetDISMBlockDouble2(pLinePoints, lineType);
                            acCounter = 4;
                            break;
                        case 24250000:
                        case 24211000:
                        case 24260000:
                            acCounter = armyc2.c2sd.JavaLineArray.DISMSupport.GetDISMLinearTargetDouble(pLinePoints, lineType, vblCounter);
                            break;
                        case 23163000:
                        case 23221000:
                        case 23222000:
                            armyc2.c2sd.JavaLineArray.DISMSupport.GetDISMGapDouble(pLinePoints, lineType);
                            acCounter = 12;
                            break;
                        case 23174000:
                            acCounter = armyc2.c2sd.JavaLineArray.DISMSupport.GetDISMMinefieldDisruptDouble(pLinePoints, lineType);
                            break;
                        case 22534000:
                            acCounter = armyc2.c2sd.JavaLineArray.DISMSupport.GetDISMSupportByFireDouble(pLinePoints, lineType);
                            break;
                        case 22533000:
                            acCounter = armyc2.c2sd.JavaLineArray.DISMSupport.GetDISMATKBYFIREDouble(pLinePoints, lineType);
                            break;
                        case 23213000:
                            acCounter = armyc2.c2sd.JavaLineArray.DISMSupport.GetDISMByImpDouble(pLinePoints, lineType);
                            break;
                        case 21500000:
                            acCounter = armyc2.c2sd.JavaLineArray.DISMSupport.GetDISMClearDouble(pLinePoints, lineType);
                            break;
                        case 23212000:
                            acCounter = armyc2.c2sd.JavaLineArray.DISMSupport.GetDISMByDifDouble(pLinePoints, lineType, clipBounds);
                            break;
                        case 212300000:
                            acCounter = armyc2.c2sd.JavaLineArray.DISMSupport.GetDISMSeizeDouble(pLinePoints, lineType, 0);
                            break;
                        case 212300001:
                            var radius = 0;
                            if (rev === 1) {
                                radius = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[0], pLinePoints[1]);
                                pLinePoints[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[3]);
                                pLinePoints[2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[2]);
                            }
                            acCounter = armyc2.c2sd.JavaLineArray.DISMSupport.GetDISMSeizeDouble(pLinePoints, lineType, radius);
                            break;
                        case 211100000:
                        case 23172000:
                            acCounter = armyc2.c2sd.JavaLineArray.DISMSupport.GetDISMFixDouble(pLinePoints, lineType, clipBounds);
                            break;
                        case 211800000:
                            acCounter = armyc2.c2sd.JavaLineArray.DISMSupport.GetDISMRIPDouble(pLinePoints, lineType);
                            break;
                        case 21800000:
                        case 212400000:
                        case 212410000:
                        case 212000000:
                            acCounter = armyc2.c2sd.JavaLineArray.DISMSupport.GetDelayGraphicEtcDouble(pLinePoints);
                            break;
                        case 23211000:
                            acCounter = armyc2.c2sd.JavaLineArray.DISMSupport.GetDISMEasyDouble(pLinePoints, lineType);
                            break;
                        case 22310000:
                            armyc2.c2sd.JavaLineArray.DISMSupport.GetDISMDeceiveDouble(pLinePoints);
                            acCounter = 4;
                            break;
                        case 21300000:
                            acCounter = armyc2.c2sd.JavaLineArray.DISMSupport.GetDISMBypassDouble(pLinePoints, lineType);
                            break;
                        case 24326100:
                            armyc2.c2sd.JavaLineArray.DISMSupport.GetDISMPAADouble(pLinePoints, lineType);
                            acCounter = 5;
                            break;
                        case 22611000:
                            acCounter = armyc2.c2sd.JavaLineArray.DISMSupport.AmbushPointsDouble(pLinePoints);
                            break;
                        case 22122000:
                            acCounter = armyc2.c2sd.JavaLineArray.flot.GetFlotDouble(pLinePoints, vblSaveCounter);
                            break;
                        default:
                            acCounter = vblSaveCounter;
                            break;
                    }
                    switch (lineType) {
                        case 22121000:
                            armyc2.c2sd.JavaLineArray.arraysupport.FillPoints(pLinePoints, acCounter, points);
                            return points;
                        case 21600000:
                        case 21100000:
                        case 212230000:
                        case 212210000:
                        case 212220000:
                        case 212230001:
                        case 212210001:
                        case 212220001:
                        case 24326100:
                        case 211210000:
                        case 211200000:
                        case 21200000:
                        case 21300000:
                        case 21400000:
                        case 21500000:
                        case 211000000:
                        case 211100000:
                        case 211400000:
                        case 211600000:
                        case 211700000:
                        case 211900000:
                        case 212100000:
                        case 212300000:
                        case 212300001:
                            //basic shapes-rectangles
                        case 14000000:
                        case 15000003:
                            //added these 3/16/15
                        case 221311000:
                        case 22340000:
                        case 2237000:
                        case 212500000:
                        case 212600000:
                        case 23410000:
                        case 25211000:
                        case 25212000:
                        case 23226000:
                        case 22522100:
                        case 23120000:
                            armyc2.c2sd.JavaLineArray.arraysupport.FillPoints(pLinePoints, acCounter, points);
                            break;
                        default:
                            if (shapes === null) {
                                armyc2.c2sd.JavaLineArray.arraysupport.FillPoints(pLinePoints, acCounter, points);
                                return points;
                            }
                            break;
                    }
                    if (shapes === null)
                        return points;
                    var shape = null;
                    var gp = null;
                    var redShape = null;
                    var blueShape = null;
                    var paleBlueShape = null;
                    var whiteShape = null;
                    var redFillShape = null;
                    var blueFillShape = null;
                    var blackShape = null;
                    var blueStroke;
                    var paleBlueStroke;
                    var blueArea = null;
                    var paleBlueArea = null;
                    var whiteArea = null;
                    var beginLine = true;
                    var poly = null;
                    switch (lineType) {
                        case 15000001:
                        case 15000003:
                            //shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL);
//                            for(j=0;j<vblSaveCounter-1;j++)
//                            {
//                                shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL);
//                                shape.moveTo(pOriginalLinePoints[j]);
//                                shape.lineTo(pLinePoints[j]);
//                                shape.lineTo(pLinePoints[j+1]);
//                                shape.lineTo(pOriginalLinePoints[j+1]);
//                                shape.lineTo(pOriginalLinePoints[j]);
//                                shapes.add(shape);
//                            }
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL);
                            shape.moveTo(pLinePoints[0]);
                            for (j = 0; j < vblSaveCounter; j++)
                                shape.lineTo(pLinePoints[j]);
                            shapes.add(shape);

                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            shape.moveTo(pOriginalLinePoints[0]);
                            for (j = 1; j < vblSaveCounter; j++)
                                shape.lineTo(pOriginalLinePoints[j]);
                            shapes.add(shape);
                            break;
                        case 22522210:
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            shape.moveTo(pLinePoints[0]);
                            for (j = 0; j < acCounter - 10; j++) {
                                shape.lineTo(pLinePoints[j]);
                            }
                            shapes.add(shape);
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            shape.moveTo(pLinePoints[acCounter - 10]);
                            for (j = 9; j > 0; j--) {
                                if (pLinePoints[acCounter - j - 1].style === 5) {
                                    shape.moveTo(pLinePoints[acCounter - j]);
                                } else {
                                    shape.lineTo(pLinePoints[acCounter - j]);
                                }
                            }
                            shapes.add(shape);
                            break;
                        case 32214000:
                            //var wideStroke=28,thinStroke=14;
                            var wideStroke = 20, thinStroke = 10;
                            //get mbr distance
                            dMBR = armyc2.c2sd.JavaLineArray.lineutility.MBRDistance(pLinePoints, pLinePoints.length);
                            wideStroke = dMBR / 8;
                            if (wideStroke > 20)
                                wideStroke = 20;
                            thinStroke = wideStroke / 2;
                            //get smallest angle
                            var minBeta = this.getMinBeta(pLinePoints);
                            //if mbr too small or theta too small use thin stroke
                            if (minBeta < 0.1)
                            {
                                wideStroke = 6;
                                thinStroke = 3;
                            }
                            whiteShape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL);
                            whiteShape.setFillColor(armyc2.c2sd.renderer.utilities.Color.WHITE);
                            var whiteStroke = new armyc2.c2sd.graphics2d.BasicStroke(wideStroke);
                            blueShape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL);
                            blueShape.setFillColor(new armyc2.c2sd.renderer.utilities.Color(30, 144, 255));
                            paleBlueStroke = new armyc2.c2sd.graphics2d.BasicStroke(thinStroke);
                            paleBlueShape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL);
                            paleBlueShape.setFillColor(new armyc2.c2sd.renderer.utilities.Color(153, 204, 255));
                            poly = new armyc2.c2sd.graphics2d.Polygon();
                            for (k = 0; k < vblSaveCounter; k++) {
                                poly.addPoint(Math.floor(pLinePoints[k].x), Math.floor(pLinePoints[k].y));
                                if (k === 0)
                                    whiteShape.moveTo(pLinePoints[k]);
                                else
                                    whiteShape.lineTo(pLinePoints[k]);
                            }
                            //diagnostic
                            var pts = poly.getPathIterator(null).getPoints();
                            if (pts.size() < 3)
                                break;
                            //end section
                            blueArea = new armyc2.c2sd.graphics2d.Area(poly);
                            blueShape.setShape(blueArea);
                            whiteArea = new armyc2.c2sd.graphics2d.Area(whiteStroke.createStrokedShape(poly));
                            whiteShape.setShape(armyc2.c2sd.JavaLineArray.lineutility.createStrokedShape(whiteArea));
                            paleBlueArea = new armyc2.c2sd.graphics2d.Area(paleBlueStroke.createStrokedShape(poly));
                            paleBlueShape.setShape(armyc2.c2sd.JavaLineArray.lineutility.createStrokedShape(paleBlueArea));
                            shapes.add(blueShape);
                            shapes.add(paleBlueShape);
                            shapes.add(whiteShape);
                            break;
                        case 32550000:
                            redShape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            redShape.set_Style(1);
                            blueShape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            blueShape.set_Style(0);
                            redShape.moveTo(pLinePoints[0]);
                            for (k = 1; k < vblSaveCounter; k++)
                                redShape.lineTo(pLinePoints[k]);

                            beginLine = true;
                            for (k = vblSaveCounter; k < acCounter; k++) {
                                if (pLinePoints[k].style === 0) {
                                    if (beginLine) {
                                        blueShape.moveTo(pLinePoints[k]);
                                        beginLine = false;
                                    } else
                                        blueShape.lineTo(pLinePoints[k]);
                                }
                                if (pLinePoints[k].style === 5) {
                                    blueShape.lineTo(pLinePoints[k]);
                                    beginLine = true;
                                }
                            }
                            shapes.add(redShape);
                            shapes.add(blueShape);
                            break;
                        case 31148000:
                            redShape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            redShape.setLineColor(armyc2.c2sd.renderer.utilities.Color.RED);
                            blueShape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            blueShape.setLineColor(armyc2.c2sd.renderer.utilities.Color.GREEN);
                            for (k = 0; k < acCounter - 1; k++) {
                                if (pLinePoints[k].style === 19 && pLinePoints[k + 1].style === 5) {
                                    redShape.moveTo(pLinePoints[k]);
                                    redShape.lineTo(pLinePoints[k + 1]);
                                } else if (pLinePoints[k].style === 25 && pLinePoints[k + 1].style === 5) {
                                    blueShape.moveTo(pLinePoints[k]);
                                    blueShape.lineTo(pLinePoints[k + 1]);
                                }
                            }
                            shapes.add(redShape);
                            shapes.add(blueShape);
                            break;
                        case 31134300:
                            redShape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            redShape.setLineColor(armyc2.c2sd.renderer.utilities.Color.RED);
                            blueShape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            blueShape.setLineColor(armyc2.c2sd.renderer.utilities.Color.BLUE);
                            for (k = 0; k < acCounter - 1; k++) {
                                if (pLinePoints[k].style === 23) {
                                    redFillShape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL);
                                    redFillShape.setFillColor(armyc2.c2sd.renderer.utilities.Color.RED);
                                    redFillShape.moveTo(pLinePoints[k - 9]);
                                    for (var l = k - 8; l <= k; l++) {
                                        redFillShape.lineTo(pLinePoints[l]);
                                    }
                                    shapes.add(redFillShape);
                                }
                                if (pLinePoints[k].style === 24) {
                                    blueFillShape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL);
                                    blueFillShape.setFillColor(armyc2.c2sd.renderer.utilities.Color.BLUE);
                                    blueFillShape.moveTo(pLinePoints[k - 2]);
                                    blueFillShape.lineTo(pLinePoints[k - 1]);
                                    blueFillShape.lineTo(pLinePoints[k]);
                                    shapes.add(blueFillShape);
                                    redShape.moveTo(pLinePoints[k - 2]);
                                    redShape.lineTo(pLinePoints[k - 1]);
                                    redShape.lineTo(pLinePoints[k]);
                                }
                            }
                            for (k = 0; k < vblSaveCounter; k++) {
                                if (k === 0) {
                                    d = 50;
                                    redShape.moveTo(pOriginalLinePoints[0]);
                                    d1 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pOriginalLinePoints[0], pOriginalLinePoints[1]);
                                    if (d1 < d)
                                        d = d1;
                                    pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pOriginalLinePoints[0], pOriginalLinePoints[1], d);
                                    redShape.lineTo(pt0);
                                } else if (k > 0 && k < vblSaveCounter - 1) {
                                    d = 50;
                                    d1 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pOriginalLinePoints[k], pOriginalLinePoints[k - 1]);
                                    if (d1 < d)
                                        d = d1;
                                    pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pOriginalLinePoints[k], pOriginalLinePoints[k - 1], d);
                                    pt1 = pOriginalLinePoints[k];
                                    d = 50;
                                    d1 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pOriginalLinePoints[k], pOriginalLinePoints[k + 1]);
                                    if (d1 < d)
                                        d = d1;
                                    pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pOriginalLinePoints[k], pOriginalLinePoints[k + 1], d);
                                    redShape.moveTo(pt0);
                                    redShape.lineTo(pt1);
                                    redShape.lineTo(pt2);
                                } else {
                                    d = 50;
                                    d1 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pOriginalLinePoints[vblSaveCounter - 1], pOriginalLinePoints[vblSaveCounter - 2]);
                                    if (d1 < d)
                                        d = d1;
                                    redShape.moveTo(pOriginalLinePoints[vblSaveCounter - 1]);
                                    pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pOriginalLinePoints[vblSaveCounter - 1], pOriginalLinePoints[vblSaveCounter - 2], d);
                                    redShape.lineTo(pt0);
                                }
                            }
                            for (k = 0; k < vblCounter - 1; k++) {
                                if (pLinePoints[k].style === 19 && pLinePoints[k + 1].style === 5) {
                                    redShape.moveTo(pLinePoints[k]);
                                    redShape.lineTo(pLinePoints[k + 1]);
                                } else if (pLinePoints[k].style === 25 && pLinePoints[k + 1].style === 5) {
                                    blueShape.moveTo(pLinePoints[k]);
                                    blueShape.lineTo(pLinePoints[k + 1]);
                                }
                            }
                            shapes.add(redShape);
                            shapes.add(blueShape);
                            break;
                        case 31134200:
                            redShape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            redShape.setLineColor(armyc2.c2sd.renderer.utilities.Color.RED);
                            blueShape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            blueShape.setLineColor(armyc2.c2sd.renderer.utilities.Color.BLUE);
                            for (k = 0; k < acCounter - 1; k++) {
                                if (pLinePoints[k].style === 23) {
                                    redFillShape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL);
                                    redFillShape.setFillColor(armyc2.c2sd.renderer.utilities.Color.RED);
                                    redFillShape.moveTo(pLinePoints[k - 9]);
                                    for (l = k - 8; l <= k; l++) {
                                        redFillShape.lineTo(pLinePoints[l]);
                                    }
                                    shapes.add(redFillShape);
                                }
                                if (pLinePoints[k].style === 24) {
                                    blueFillShape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL);
                                    blueFillShape.setFillColor(armyc2.c2sd.renderer.utilities.Color.BLUE);
                                    blueFillShape.moveTo(pLinePoints[k - 2]);
                                    blueFillShape.lineTo(pLinePoints[k - 1]);
                                    blueFillShape.lineTo(pLinePoints[k]);
                                    shapes.add(blueFillShape);
                                    redShape.moveTo(pLinePoints[k - 2]);
                                    redShape.lineTo(pLinePoints[k - 1]);
                                    redShape.lineTo(pLinePoints[k]);
                                }
                            }
                            for (k = 0; k < vblSaveCounter; k++) {
                                if (k === 0) {
                                    d = 50;
                                    redShape.moveTo(pOriginalLinePoints[0]);
                                    d1 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pOriginalLinePoints[0], pOriginalLinePoints[1]);
                                    if (d1 < d)
                                        d = d1;
                                    pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pOriginalLinePoints[0], pOriginalLinePoints[1], d);
                                    redShape.lineTo(pt0);
                                } else if (k > 0 && k < vblSaveCounter - 1) {
                                    d = 50;
                                    d1 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pOriginalLinePoints[k], pOriginalLinePoints[k - 1]);
                                    if (d1 < d)
                                        d = d1;
                                    pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pOriginalLinePoints[k], pOriginalLinePoints[k - 1], d);
                                    pt1 = pOriginalLinePoints[k];
                                    d = 50;
                                    d1 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pOriginalLinePoints[k], pOriginalLinePoints[k + 1]);
                                    if (d1 < d)
                                        d = d1;
                                    pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pOriginalLinePoints[k], pOriginalLinePoints[k + 1], d);
                                    redShape.moveTo(pt0);
                                    redShape.lineTo(pt1);
                                    redShape.lineTo(pt2);
                                } else {
                                    d = 50;
                                    d1 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pOriginalLinePoints[vblSaveCounter - 1], pOriginalLinePoints[vblSaveCounter - 2]);
                                    if (d1 < d)
                                        d = d1;
                                    redShape.moveTo(pOriginalLinePoints[vblSaveCounter - 1]);
                                    pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pOriginalLinePoints[vblSaveCounter - 1], pOriginalLinePoints[vblSaveCounter - 2], d);
                                    redShape.lineTo(pt0);
                                }
                            }
                            shapes.add(redShape);
                            for (k = 0; k < acCounter; k++) {
                                if (pLinePoints[k].style === 22) {
                                    var CirclePoints = new Array(8);
                                    redShape = armyc2.c2sd.JavaLineArray.lineutility.CalcCircleShape(pLinePoints[k], 3, 8, CirclePoints, 9);
                                    redShape.setFillColor(armyc2.c2sd.renderer.utilities.Color.RED);
                                    if (redShape !== null && redShape.getShape() !== null)
                                        shapes.add(redShape);
                                }
                                if (pLinePoints[k].style === 20) {
                                    CirclePoints = new Array(8);
                                    blueShape = armyc2.c2sd.JavaLineArray.lineutility.CalcCircleShape(pLinePoints[k], 3, 8, CirclePoints, 9);
                                    blueShape.setFillColor(armyc2.c2sd.renderer.utilities.Color.BLUE);
                                    if (blueShape !== null && blueShape.getShape() !== null)
                                        shapes.add(blueShape);
                                }
                            }
                            break;
                        case 31134100:
                            redShape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            redShape.setLineColor(armyc2.c2sd.renderer.utilities.Color.RED);
                            blueShape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            blueShape.setLineColor(armyc2.c2sd.renderer.utilities.Color.BLUE);
                            beginLine = true;
                            for (k = 0; k < acCounter - 1; k++) {
                                if (pLinePoints[k].style === 19 && pLinePoints[k + 1].style === 5) {
                                    redShape.moveTo(pLinePoints[k]);
                                    redShape.lineTo(pLinePoints[k + 1]);
                                }
                                if (pLinePoints[k].style === 19 && pLinePoints[k + 1].style === 19) {
                                    redShape.moveTo(pLinePoints[k]);
                                    redShape.lineTo(pLinePoints[k + 1]);
                                }
                                if (pLinePoints[k].style === 25 && pLinePoints[k + 1].style === 5) {
                                    blueShape.moveTo(pLinePoints[k]);
                                    blueShape.lineTo(pLinePoints[k + 1]);
                                }
                                if (pLinePoints[k].style === 25 && pLinePoints[k + 1].style === 25) {
                                    blueShape.moveTo(pLinePoints[k]);
                                    blueShape.lineTo(pLinePoints[k + 1]);
                                }
                                if (pLinePoints[k].style === 0 && pLinePoints[k + 1].style === 5) {
                                    redShape.moveTo(pLinePoints[k]);
                                    redShape.lineTo(pLinePoints[k + 1]);
                                }
                            }
                            shapes.add(redShape);
                            shapes.add(blueShape);
                            break;
                        case 31134000:
                            blackShape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            blackShape.setLineColor(armyc2.c2sd.renderer.utilities.Color.BLACK);
                            redShape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            redShape.setLineColor(armyc2.c2sd.renderer.utilities.Color.RED);
                            blueShape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            blueShape.setLineColor(armyc2.c2sd.renderer.utilities.Color.BLUE);
                            for (k = 0; k < acCounter - 1; k++) {
                                if (pLinePoints[k].style === 23) {
                                    redFillShape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL);
                                    redFillShape.setFillColor(armyc2.c2sd.renderer.utilities.Color.RED);
                                    redFillShape.moveTo(pLinePoints[k - 9]);
                                    blackShape.moveTo(pLinePoints[k - 9]);
                                    for (l = k - 8; l <= k; l++) {
                                        redFillShape.lineTo(pLinePoints[l]);
                                        blackShape.lineTo(pLinePoints[l]);
                                    }
                                    redFillShape.lineTo(pLinePoints[k - 9]);
                                    shapes.add(redFillShape);
                                }
                                if (pLinePoints[k].style === 24) {
                                    blueFillShape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL);
                                    blueFillShape.setFillColor(armyc2.c2sd.renderer.utilities.Color.BLUE);
                                    blueFillShape.moveTo(pLinePoints[k - 2]);
                                    blueFillShape.lineTo(pLinePoints[k - 1]);
                                    blueFillShape.lineTo(pLinePoints[k]);
                                    blueFillShape.lineTo(pLinePoints[k - 2]);
                                    shapes.add(blueFillShape);
                                    blackShape.moveTo(pLinePoints[k - 2]);
                                    blackShape.lineTo(pLinePoints[k - 1]);
                                    blackShape.lineTo(pLinePoints[k]);
                                }
                            }
                            blackShape.moveTo(pOriginalLinePoints[0]);
                            for (k = 1; k < vblSaveCounter; k++)
                                blackShape.lineTo(pOriginalLinePoints[k]);

                            shapes.add(redShape);
                            shapes.add(blueShape);
                            shapes.add(blackShape);
                            break;
                        case 31132200:
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            for (k = 0; k < acCounter - 1; k++) {
                                if (pLinePoints[k].style === 0 && pLinePoints[k + 1].style === 5) {
                                    shape.moveTo(pLinePoints[k]);
                                    shape.lineTo(pLinePoints[k + 1]);
                                }
                            }
                            shapes.add(shape);
                            for (k = 0; k < acCounter; k++) {
                                if (pLinePoints[k].style === 20) {
                                    CirclePoints = new Array(8);
                                    shape = armyc2.c2sd.JavaLineArray.lineutility.CalcCircleShape(pLinePoints[k], 3, 8, CirclePoints, 9);
                                    if (shape !== null && shape.getShape() !== null)
                                        shapes.add(shape);
                                }
                            }
                            break;
                        case 211200000:
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            shape.set_Style(1);
                            shape.moveTo(pLinePoints[0]);
                            shape.lineTo(pLinePoints[1]);
                            shapes.add(shape);
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            shape.set_Style(0);
                            for (j = 2; j < vblCounter; j++) {
                                if (pLinePoints[j - 1].style !== 5)
                                    shape.lineTo(pLinePoints[j]);
                                else
                                    shape.moveTo(pLinePoints[j]);
                            }
                            shapes.add(shape);
                            break;
                        case 31131200:
                            for (k = 0; k < acCounter; k++) {
                                if (pLinePoints[k].style === 20) {
                                    CirclePoints = new Array(8);
                                    shape = armyc2.c2sd.JavaLineArray.lineutility.CalcCircleShape(pLinePoints[k], 3, 8, CirclePoints, 9);
                                    if (shape !== null && shape.getShape() !== null)
                                        shapes.add(shape);
                                    continue;
                                }
                            }
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            for (k = 0; k < acCounter - 1; k++) {
                                if (pLinePoints[k].style === 0 && pLinePoints[k + 1].style === 0) {
                                    shape.moveTo(pLinePoints[k]);
                                    shape.lineTo(pLinePoints[k + 1]);
                                }
                                if (pLinePoints[k].style === 0 && pLinePoints[k + 1].style === 9) {
                                    shape.moveTo(pLinePoints[k]);
                                    shape.lineTo(pLinePoints[k + 1]);
                                }
                                if (pLinePoints[k].style === 0 && pLinePoints[k + 1].style === 5) {
                                    d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[k], pLinePoints[k + 1]);
                                    pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pLinePoints[k], pLinePoints[k + 1], d - 5);
                                    shape.moveTo(pLinePoints[k]);
                                    shape.lineTo(pt0);
                                }
                                if (pLinePoints[k].style === 0 && k === acCounter - 2) {
                                    shape.moveTo(pLinePoints[k]);
                                    shape.lineTo(pLinePoints[k + 1]);
                                }
                            }
                            shapes.add(shape);
                            break;
                        case 32680000:
                            for (k = 0; k < acCounter; k++) {
                                if (pLinePoints[k].style === 20) {
                                    CirclePoints = new Array(8);
                                    shape = armyc2.c2sd.JavaLineArray.lineutility.CalcCircleShape(pLinePoints[k], 5, 8, CirclePoints, 9);
                                    if (shape !== null && shape.getShape() !== null)
                                        shapes.add(shape);
                                }
                            }
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            for (k = 0; k < acCounter - 1; k++) {
                                if (pLinePoints[k].style === 0 && pLinePoints[k + 1].style === 5) {
                                    shape.moveTo(pLinePoints[k]);
                                    shape.lineTo(pLinePoints[k + 1]);
                                }
                            }
                            shapes.add(shape);
                            break;
                        case 23200001:
                            for (k = 0; k < acCounter; k++) {
                                if (pLinePoints[k].style === 20) {
                                    CirclePoints = new Array(8);
                                    shape = armyc2.c2sd.JavaLineArray.lineutility.CalcCircleShape(pLinePoints[k], 5, 8, CirclePoints, 9);
                                    if (shape !== null && shape.getShape() !== null)
                                        shapes.add(shape);
                                }
                            }
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            for (k = 0; k < acCounter; k++) {
                                if (pLinePoints[k].style === 1) {
                                    if (k === 0) {
                                        shape.moveTo(pLinePoints[k]);
                                    } else
                                        shape.lineTo(pLinePoints[k]);
                                }
                            }
                            shapes.add(shape);
                            break;
                        case 23132000:
                            for (k = 0; k < acCounter; k++) {
                                if (pLinePoints[k].style === 20) {
                                    CirclePoints = new Array(8);
                                    shape = armyc2.c2sd.JavaLineArray.lineutility.CalcCircleShape(pLinePoints[k], 4, 8, CirclePoints, 9);
                                    if (shape !== null && shape.getShape() !== null)
                                        shapes.add(shape);
                                    continue;
                                }
                                if (k < acCounter - 2) {
                                    if (pLinePoints[k].style !== 0 && pLinePoints[k + 1].style === 0) {
                                        shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                                        shape.set_Style(pLinePoints[k].style);
                                        shape.moveTo(pLinePoints[k]);
                                        shape.lineTo(pLinePoints[k]);
                                    } else if (pLinePoints[k].style === 0 && pLinePoints[k + 1].style === 0) {
                                        shape.moveTo(pLinePoints[k]);
                                        shape.lineTo(pLinePoints[k + 1]);
                                    } else if (pLinePoints[k].style === 0 && pLinePoints[k + 1].style === 10) {
                                        shape.moveTo(pLinePoints[k]);
                                        shape.lineTo(pLinePoints[k + 1]);
                                        shapes.add(shape);
                                    }
                                }
                                if (k < acCounter - 2) {
                                    if (pLinePoints[k].style === 5 && pLinePoints[k + 1].style === 0) {
                                        shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                                        shape.set_Style(pLinePoints[k].style);
                                        shape.moveTo(pLinePoints[k]);
                                    } else if (pLinePoints[k].style === 0 && pLinePoints[k + 1].style === 0) {
                                        shape.lineTo(pLinePoints[k + 1]);
                                    } else if (pLinePoints[k].style === 0 && pLinePoints[k + 1].style === 5) {
                                        shape.lineTo(pLinePoints[k + 1]);
                                        shapes.add(shape);
                                    }
                                }
                            }
                            break;
                        case 22330000:
                            for (k = 0; k < vblCounter; k++) {
                                if (pLinePoints[k].style === 18)
                                    continue;
                                if (shape === null)
                                    shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                                if (beginLine) {
                                    if (k > 0)
                                        if (pLinePoints[k].style === 5 && pLinePoints[k - 1].style === 5)
                                            continue;
                                    if (k === 0)
                                        shape.set_Style(pLinePoints[k].style);
                                    shape.moveTo(pLinePoints[k]);
                                    beginLine = false;
                                } else {
                                    shape.lineTo(pLinePoints[k]);
                                    if (pLinePoints[k].style === 5) {
                                        beginLine = true;
                                    }
                                }
                                if (k === vblCounter - 1) {
                                    if (shape !== null && shape.getShape() !== null)
                                        shapes.add(shape);
                                }
                            }
                            for (k = 0; k < vblCounter; k++) {
                                if (pLinePoints[k].style === 18 && pLinePoints[k - 1].style === 5) {
                                    shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                                    shape.set_Style(1);
                                    shape.moveTo(pLinePoints[k]);
                                } else if (pLinePoints[k].style === 18 && pLinePoints[k - 1].style === 18) {
                                    shape.lineTo(pLinePoints[k]);
                                } else if (pLinePoints[k].style === 5 && pLinePoints[k - 1].style === 18) {
                                    shape.lineTo(pLinePoints[k]);
                                    if (shape !== null && shape.getShape() !== null)
                                        shapes.add(shape);
                                    break;
                                } else
                                    continue;
                            }
                            break;
                        case 23192000:
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            shape.set_Style(pLinePoints[0].style);
                            shape.moveTo(pLinePoints[0]);
                            shape.lineTo(pLinePoints[1]);
                            shapes.add(shape);
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            shape.set_Style(pLinePoints[2].style);
                            shape.moveTo(pLinePoints[2]);
                            shape.lineTo(pLinePoints[3]);
                            shapes.add(shape);
                            break;
                        case 2237000:
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            beginLine = true;
                            for (k = 0; k < acCounter - 3; k++) {
                                if (shape === null)
                                    shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                                if (beginLine) {
                                    if (k === 0)
                                        shape.set_Style(pLinePoints[k].style);
                                    shape.moveTo(pLinePoints[k]);
                                    beginLine = false;
                                } else {
                                    shape.lineTo(pLinePoints[k]);
                                    if (pLinePoints[k].style === 5 || pLinePoints[k].style === 10) {
                                        beginLine = true;
                                    }
                                }
                                if (k === acCounter - 4) {
                                    if (shape !== null && shape.getShape() !== null)
                                        shapes.add(shape);
                                }
                            }
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            shape.set_Style(1);
                            shape.moveTo(pLinePoints[acCounter - 1]);
                            shape.lineTo(pLinePoints[acCounter - 2]);
                            shape.lineTo(pLinePoints[acCounter - 3]);
                            if (shape !== null && shape.getShape() !== null)
                                shapes.add(shape);
                            break;
                        case 22340000:
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            shape.set_Style(pLinePoints[0].style);
                            shape.moveTo(pLinePoints[0]);
                            for (k = 1; k < vblCounter - 3; k++) {
                                shape.lineTo(pLinePoints[k]);
                            }
                            if (shape !== null && shape.getShape() !== null)
                                shapes.add(shape);
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            shape.moveTo(pLinePoints[vblCounter - 3]);
                            shape.set_Style(1);
                            shape.lineTo(pLinePoints[vblCounter - 2]);
                            shape.lineTo(pLinePoints[vblCounter - 1]);
                            if (shape !== null && shape.getShape() !== null)
                                shapes.add(shape);
                            break;
                        case 23225000:
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            shape.set_Style(pLinePoints[0].style);
                            shape.moveTo(pLinePoints[0]);
                            shape.lineTo(pLinePoints[1]);
                            shape.moveTo(pLinePoints[2]);
                            shape.lineTo(pLinePoints[3]);
                            shapes.add(shape);
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            shape.set_Style(pLinePoints[4].style);
                            shape.moveTo(pLinePoints[4]);
                            for (k = 5; k < acCounter; k++) {
                                if (pLinePoints[k - 1].style !== 5)
                                    shape.lineTo(pLinePoints[k]);
                            }
                            if (shape !== null && shape.getShape() !== null)
                                shapes.add(shape);
                            break;
                        case 22350000:
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            shape.set_Style(points.get(0).style);
                            shape.moveTo(points.get(0));
                            for (k = 1; k < vblCounter - 3; k++) {
                                shape.lineTo(points.get(k));
                            }
                            if (shape !== null && shape.getShape() !== null)
                                shapes.add(shape);
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            shape.moveTo(points.get(vblCounter - 3));
                            shape.set_Style(1);
                            shape.lineTo(points.get(vblCounter - 2));
                            shape.lineTo(points.get(vblCounter - 1));
                            if (shape !== null && shape.getShape() !== null)
                                shapes.add(shape);
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            beginLine = true;
                            for (k = vblCounter; k < points.size(); k++) {
                                if (beginLine) {
                                    if (k === 0)
                                        shape.set_Style(points.get(k).style);
                                    if (k > 0)
                                        if (points.get(k).style === 5 && points.get(k - 1).style === 5)
                                            shape.lineTo(points.get(k));
                                    shape.moveTo(points.get(k));
                                    beginLine = false;
                                } else {
                                    shape.lineTo(points.get(k));
                                    if (points.get(k).style === 5 || points.get(k).style === 10) {
                                        beginLine = true;
                                    }
                                }
                                if (k === points.size() - 1) {
                                    if (shape !== null && shape.getShape() !== null)
                                        shapes.add(shape);
                                }
                            }
                            break;
                        case 221311000:
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            shape.moveTo(pLinePoints[0]);
                            for (k = 1; k < acCounter - 5; k++)
                                shape.lineTo(pLinePoints[k]);

                            shapes.add(shape);
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            shape.moveTo(pLinePoints[acCounter - 4]);
                            shape.lineTo(pLinePoints[acCounter - 3]);
                            shape.moveTo(pLinePoints[acCounter - 2]);
                            shape.lineTo(pLinePoints[acCounter - 1]);
                            shapes.add(shape);
                            break;
                        case -1:
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            shape.moveTo(pLinePoints[0]);
                            for (k = 1; k < pLinePoints.length; k++)
                                shape.lineTo(pLinePoints[k]);

                            shapes.add(shape);
                            break;
                        default:
                            for (k = 0; k < acCounter; k++) {
                                if (shape === null)
                                    shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                                if (beginLine) {
                                    if (k === 0)
                                    {
                                        shape.set_Style(pLinePoints[k].style);
                                    }
                                    if (k > 0) {
                                        if (pLinePoints[k].style === 5 && pLinePoints[k - 1].style === 5 && k < acCounter - 1)
                                            continue;
                                        else if (pLinePoints[k].style === 5 && pLinePoints[k - 1].style === 10)
                                            continue;
                                    }
                                    if (k === 0 && pLinePoints.length > 1)
                                        if (pLinePoints[k].style === 5 && pLinePoints[k + 1].style === 5)
                                            continue;
                                    shape.moveTo(pLinePoints[k]);
                                    beginLine = false;
                                } else {
                                    shape.lineTo(pLinePoints[k]);
                                    if (pLinePoints[k].style === 5 || pLinePoints[k].style === 10) {
                                        beginLine = true;
                                    }
                                }
                                if (k === acCounter - 1) {
                                    if (shape !== null && shape.getShape() !== null)
                                        shapes.add(shape);
                                }
                            }
                            break;
                    }
                    switch (lineType) {
                        case 22221000:
                        case 22223000:
                        case 22222000:
                        case 22222001:
                        case 22224000:
                        case 22224001:
                        case 22225000:
                            for (j = 0; j < vblSaveCounter - 1; j++) {
                                dMBR=pOriginalLinePoints[j].style;
                                acPoints[0] = new armyc2.c2sd.JavaLineArray.POINT2(pOriginalLinePoints[j]);
                                acPoints[1] = new armyc2.c2sd.JavaLineArray.POINT2(pOriginalLinePoints[j + 1]);
                                armyc2.c2sd.JavaLineArray.lineutility.GetSAAFRFillSegment(acPoints, dMBR);//was dMRR
                                shape =new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL);
                                shape.moveTo(acPoints[0]);
                                shape.lineTo(acPoints[1]);
                                shape.lineTo(acPoints[2]);
                                shape.lineTo(acPoints[3]);
                                shapes.add(0, shape);
                            }
                    break;
                        case 23111001:
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL);
                            shape.moveTo(pUpperLinePoints[0]);
                            for (j = 1; j < pUpperLinePoints.length; j++) {
                                shape.lineTo(pUpperLinePoints[j]);
                            }
                            shape.lineTo(pLowerLinePoints[pLowerLinePoints.length - 1]);
                            for (j = pLowerLinePoints.length - 1; j >= 0; j--) {
                                shape.lineTo(pLowerLinePoints[j]);
                            }
                            shape.lineTo(pUpperLinePoints[0]);
                            shapes.add(0, shape);
                            break;
                        case 22522100:
                            var outLineCounter = 0;
                            var ptOutline = new Array(4);
                            for (k = 0; k < acCounter; k++) {
                                if (pLinePoints[k].style === 10)
                                {
                                    shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                                    shape.moveTo(pLinePoints[k - 2]);
                                    shape.lineTo(pLinePoints[k]);
                                    if (shape !== null && shape.getShape() !== null)
                                    {
                                        shapes.add(1, shape);
                                    }
                                    ptOutline[outLineCounter++] = pLinePoints[k - 2];
                                    ptOutline[outLineCounter++] = pLinePoints[k];
                                }
                            }
                            break;
                        case 31133200:
                        case 31133000:
                        case 31132000:
                        case 31132200:
                        case 31132300:
                        case 31131000:
                        case 31131300:
                        case 31131200:
                        case 22139000:
                        case 23223000:
                        case 23211000:
                        case 23212000:
                        case 23213000:
                        case 211210000:
                        case 23131200:
                        case 23132000:
                        case 23172000:
                        case 23173000:
                        case 23174000:
                            for (k = 0; k < acCounter; k++) {
                                if (k === 0) {
                                    if (pLinePoints[k].style === 9) {
                                        shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL);
                                        shape.set_Style(pLinePoints[k].style);
                                        shape.moveTo(pLinePoints[k]);
                                    }
                                } else {
                                    if (pLinePoints[k].style === 9 && pLinePoints[k - 1].style !== 9) {
                                        shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL);
                                        shape.set_Style(pLinePoints[k].style);
                                        shape.moveTo(pLinePoints[k]);
                                    }
                                    if (pLinePoints[k].style === 9 && pLinePoints[k - 1].style === 9) {
                                        shape.lineTo(pLinePoints[k]);
                                    }
                                }
                                if (pLinePoints[k].style === 10) {
                                    shape.lineTo(pLinePoints[k]);
                                    //if (lineType === 22139000)
                                    //  shape.lineTo(pLinePoints[k - 2]);
                                    if (shape !== null && shape.getShape() !== null) {
                                        shapes.add(0, shape);
                                    }
                                }
                            }
                            break;
                        default:
                            break;
                    }
                    pArrowPoints = null;
                    arcPts = null;
                    circlePoints = null;
                    pOriginalLinePoints = null;
                    pts2 = null;
                    pts = null;
                    segments = null;
                    pUpperLinePoints = null;
                    pLowerLinePoints = null;
                    pUpperLowerLinePoints = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.arraysupport._className, "GetLineArray2Double", new armyc2.c2sd.renderer.utilities.RendererException("GetLineArray2Dboule " + Integer.toString(lineType), exc));
                    } else {
                        throw exc;
                    }
                }
                return points;
            },
            maxLength: 100,
            minLength: 5,
            dACP: 0,
            _classname: "arraysupport"
        };


