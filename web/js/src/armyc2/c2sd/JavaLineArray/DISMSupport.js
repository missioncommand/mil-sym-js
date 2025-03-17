var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.JavaLineArray = armyc2.c2sd.JavaLineArray || {};
armyc2.c2sd.JavaLineArray.DISMSupport =
        {
//            setMinLength: function(mLength) {
//                minLength = mLength;
//            },
            GetTGFontSize: function(iLength) {
                var result = -1;
                try {
                    if (iLength < 20)
                        result = 0;
                    else if (iLength < 50)
                        result = 1;
                    else if (iLength > 250)
                        result = 3;
                    else
                        result = 2;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "GetTGFontSize", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetTGFontSize", exc));
                    } else {
                        throw exc;
                    }
                }
                return result;
            },
            ArcApproximationDouble: function(left, top, right, bottom, startx, starty, endx, endy, lpoints) {
                try {
                    var dstartx = startx;
                    var dstarty = starty;
                    var dendx = endx;
                    var dendy = endy;
                    var a = 0;
                    var b = 0;
                    var ctrX = 0;
                    var ctrY = 0;
                    var x1;
                    var y1;
                    var x2;
                    var y2;
                    var startAngle;
                    var endAngle;
                    var angleIncrement = 0;
                    var t = 0;
                    var i = 0;
                    if (left > right) {
                        var temp = left;
                        left = right;
                        right = temp;
                    }
                    if (top > bottom) {
                        temp = top;
                        top = bottom;
                        bottom = temp;
                    }
                    a = (right - left) / 2.0;
                    b = (bottom - top) / 2.0;
                    ctrX = left + a;
                    ctrY = top + b;
                    x1 = dstartx - ctrX;
                    x2 = dendx - ctrX;
                    y1 = ctrY - dstarty;
                    y2 = ctrY - dendy;
                    if (y1 === 0) {
                        if (x1 > 0)
                            startAngle = 0;
                        else
                            startAngle = armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI;
                    } else if (x1 === 0) {
                        if (y1 > 0)
                            startAngle = armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI * 0.5;
                        else
                            startAngle = armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI * -0.5;
                    } else
                        startAngle = Math.atan2(y1, x1);
                    if (y2 === 0) {
                        if (x2 > 0)
                            endAngle = 0;
                        else
                            endAngle = armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI;
                    } else if (x2 === 0) {
                        if (y2 > 0)
                            endAngle = armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI * 0.5;
                        else
                            endAngle = armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI * -0.5;
                    } else
                        endAngle = Math.atan2(y2, x2);
                    if (endAngle <= startAngle)
                        endAngle += 2 * armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI;
                    angleIncrement = (endAngle - startAngle) / 16.0;
                    for (t = startAngle; i < 17; t += angleIncrement, i++) {
                        lpoints[i].x = ctrX + a * Math.cos(t);
                        lpoints[i].y = ctrY - b * Math.sin(t);
                    }
                    return;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "ArcApproximationDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ArcApproximationDouble", exc));
                    } else {
                        throw exc;
                    }
                }
            },
            DrawOpenRectangleDouble: function(points, pointsCorner, resultpts) {
                try {
                    var point_mid = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var j = 0;
                    point_mid.x = (points[0].x + points[1].x) / 2;
                    point_mid.y = (points[0].y + points[1].y) / 2;
                    pointsCorner[0].x = points[0].x - point_mid.x + points[2].x;
                    pointsCorner[0].y = points[0].y - point_mid.y + points[2].y;
                    pointsCorner[1].x = points[1].x - point_mid.x + points[2].x;
                    pointsCorner[1].y = points[1].y - point_mid.y + points[2].y;
                    resultpts[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[1]);
                    resultpts[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pointsCorner[1]);
                    resultpts[2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pointsCorner[0]);
                    resultpts[3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[0]);
                    for (j = 0; j < 4; j++) {
                        resultpts[j].style = 0;
                    }
                    resultpts[3].style = 5;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "DrawOpenRectangleDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside DrawOpenRectangleDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return;
            },
            DetermineDirectionDouble: function(points) {
                var result = 0;
                try {
                    var dP0P1M = 0;
                    var iP0P1B = 0;
                    if (points[0].x === points[1].x) {
                        if (points[2].x < points[0].x) {
                            return 1;
                        } else {
                            return 0;
                        }
                    } else {
                        dP0P1M = (points[0].y - points[1].y) / (points[0].x - points[1].x);
                        iP0P1B = (points[0].y - dP0P1M * points[0].x);
                        if (((points[2].y - iP0P1B) / dP0P1M) > points[2].x) {
                            return 1;
                        } else {
                            return 0;
                        }
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "DetermineDirectionDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside DetermineDirectionDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return result;
            },
            CalcEndpieceDeltasDouble: function(points, piDeltaX, piDeltaY, dAngleDelta) {
                try {
                    var pntMid = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var iDiagEOL_length = 0;
                    var dAngle1 = 0;
                    pntMid.x = (points[0].x + points[1].x) / 2;
                    pntMid.y = (points[0].y + points[1].y) / 2;
                    iDiagEOL_length = ((Math.sqrt((points[1].x - points[0].x) * (points[1].x - points[0].x) + (points[1].y - points[0].y) * (points[1].y - points[0].y)) + Math.sqrt((points[2].x - pntMid.x) * (points[2].x - pntMid.x) + (points[2].y - pntMid.y) * (points[2].y - pntMid.y))) / 20);
                    if (iDiagEOL_length > armyc2.c2sd.JavaLineArray.DISMSupport.maxLength / 5) {
                        iDiagEOL_length = armyc2.c2sd.JavaLineArray.DISMSupport.maxLength / 5;
                    }
                    if (iDiagEOL_length < armyc2.c2sd.JavaLineArray.DISMSupport.minLength) {
                        iDiagEOL_length = armyc2.c2sd.JavaLineArray.DISMSupport.minLength;
                    }
                    dAngle1 = Math.atan2(points[2].y - pntMid.y, points[2].x - pntMid.x) + dAngleDelta;
                    piDeltaX.value = Clazz.newArray(1, 0);
                    piDeltaY.value = Clazz.newArray(1, 0);
                    piDeltaX.value[0] = (iDiagEOL_length * Math.cos(dAngle1));
                    piDeltaY.value[0] = (iDiagEOL_length * Math.sin(dAngle1));
                    return;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "CalcEndpieceDeltasDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside CalcEndpieceDeltasDouble", exc));
                    } else {
                        throw exc;
                    }
                }
            },
            GetDelayGraphicEtcDouble: function(points) {
                var counter = 0;
                try {
                    var pts = new Array(2);
                    var savepoints = new Array(3);
                    var iLength = 0;
                    var iRadius = 0;
                    var iDiagEOL_length = 0;
                    var dAngle1 = 0;
                    var iDeltaX1 = 0;
                    var iDeltaY1 = 0;
                    var iDeltaX2 = 0;
                    var iDeltaY2 = 0;
                    var ptArcCenter = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var arcpoints = new Array(17);
                    var deltapoints = new Array(4);
                    var j = 0;
                    for (j = 0; j < 3; j++) {
                        savepoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[j]);
                    }
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pts);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(arcpoints);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(deltapoints);
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[0]);
                    points[counter].style = 14;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[1]);
                    points[counter].style = 5;
                    counter++;
                    iLength = Math.sqrt((savepoints[1].x - savepoints[0].x) * (savepoints[1].x - savepoints[0].x) + (savepoints[1].y - savepoints[0].y) * (savepoints[1].y - savepoints[0].y));
                    iRadius = Math.sqrt((savepoints[2].x - savepoints[1].x) * (savepoints[2].x - savepoints[1].x) + (savepoints[2].y - savepoints[1].y) * (savepoints[2].y - savepoints[1].y)) / 2;
                    iDiagEOL_length = (iLength + iRadius * 2) / 20;
                    if (iDiagEOL_length > armyc2.c2sd.JavaLineArray.DISMSupport.maxLength) {
                        iDiagEOL_length = armyc2.c2sd.JavaLineArray.DISMSupport.maxLength;
                    }
                    if (iDiagEOL_length < armyc2.c2sd.JavaLineArray.DISMSupport.minLength) {
                        iDiagEOL_length = armyc2.c2sd.JavaLineArray.DISMSupport.minLength;
                    }
                    dAngle1 = Math.atan2(points[1].y - points[0].y, points[1].x - points[0].x);
                    iDeltaX1 = (iDiagEOL_length * Math.cos(dAngle1 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4));
                    iDeltaY1 = (iDiagEOL_length * Math.sin(dAngle1 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4));
                    iDeltaX2 = (iDiagEOL_length * Math.cos(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4));
                    iDeltaY2 = (iDiagEOL_length * Math.sin(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4));
                    armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[0], iDeltaX1, iDeltaY1, iDeltaX2, iDeltaY2, deltapoints);
                    for (j = 0; j < 4; j++) {
                        points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints[j]);
                        counter++;
                    }
                    ptArcCenter.x = (savepoints[1].x + savepoints[2].x) / 2;
                    ptArcCenter.y = (savepoints[1].y + savepoints[2].y) / 2;
                    var reverseArc = armyc2.c2sd.JavaLineArray.DISMSupport.ReverseDelayArc(savepoints);
                    if (reverseArc === false) {
                        armyc2.c2sd.JavaLineArray.DISMSupport.ArcApproximationDouble((ptArcCenter.x - iRadius), (ptArcCenter.y - iRadius), (ptArcCenter.x + iRadius), (ptArcCenter.y + iRadius), savepoints[1].x, savepoints[1].y, savepoints[2].x, savepoints[2].y, arcpoints);
                    } else {
                        armyc2.c2sd.JavaLineArray.DISMSupport.ArcApproximationDouble((ptArcCenter.x - iRadius), (ptArcCenter.y - iRadius), (ptArcCenter.x + iRadius), (ptArcCenter.y + iRadius), savepoints[2].x, savepoints[2].y, savepoints[1].x, savepoints[1].y, arcpoints);
                    }
                    for (j = 0; j < 17; j++) {
                        points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(arcpoints[j]);
                        points[counter].style = 0;
                        counter++;
                    }
                    pts = null;
                    savepoints = null;
                    arcpoints = null;
                    deltapoints = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "GetDelayGraphicEtcDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetDelayGraphicEtcDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return counter;
            },
            GetDISMCoverDouble: function(points, linetype) {
                var counter = 0;
                try {
                    var dAngle0;
					var dAngle1;
                    var dDeltaX0;
                    var dDeltaY0;
                    var dDeltaX1;
                    var dDeltaY1;
                    var iLengthPt0Pt1 = 0;
                    var iLengthPt0Pt2 = 0;
                    var iDelta = 0;
                    var j = 0;
                    var t = 1;
                    var iFontSize = 0;
                    var iLetterOffset = 0;
                    var savepoints = new Array(3);
                    var pts = new Array(2);
                    var ptsJaggyLine = new Array(4);
                    var sign = 1;
                    var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[0]);
                    var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[1]);
                    var pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[2]);
                    var pt3 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt4 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    armyc2.c2sd.JavaLineArray.lineutility.LineRelativeToLine(pt1, pt2, pt0, pt3, pt4);
                    armyc2.c2sd.JavaLineArray.lineutility.LineRelativeToLine(pt3, pt0, pt1, pt2, pt4);
                    var quadrant = armyc2.c2sd.JavaLineArray.lineutility.GetQuadrantDouble(pt0, pt4);
                    pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[1]);
                    pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[2]);
                    if (pt1.x < pt2.x && quadrant === 1)
                        sign = -1;
                    else if (pt1.x > pt2.x && quadrant === 2)
                        sign = -1;
                    else if (pt1.x > pt2.x && quadrant === 3)
                        sign = -1;
                    else if (pt1.x < pt2.x && quadrant === 4)
                        sign = -1;
                    if (linetype === 22139000)
                        t = 0;

                    for (j = 0; j < 3; j++) {
                        savepoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[j]);
                        savepoints[j].style = 0;
                    }
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pts);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(ptsJaggyLine);
                    iLengthPt0Pt1 = Math.sqrt((savepoints[1].x - savepoints[0].x) * (savepoints[1].x - savepoints[0].x) + (savepoints[1].y - savepoints[0].y) * (savepoints[1].y - savepoints[0].y));
                    iLengthPt0Pt2 = Math.sqrt((savepoints[2].x - savepoints[0].x) * (savepoints[2].x - savepoints[0].x) + (savepoints[2].y - savepoints[0].y) * (savepoints[2].y - savepoints[0].y));
                    if (iLengthPt0Pt1 > iLengthPt0Pt2) {
                        iLengthPt0Pt1 = iLengthPt0Pt2;
                    }
                    iFontSize = armyc2.c2sd.JavaLineArray.DISMSupport.GetTGFontSize(iLengthPt0Pt1);
                    if (iFontSize > 0) {
                        iDelta = iLengthPt0Pt1 / 15;
                        if (iDelta > armyc2.c2sd.JavaLineArray.DISMSupport.maxLength) {
                            iDelta = armyc2.c2sd.JavaLineArray.DISMSupport.maxLength;
                        }
                        if (iDelta < armyc2.c2sd.JavaLineArray.DISMSupport.minLength) {
                            iDelta = armyc2.c2sd.JavaLineArray.DISMSupport.minLength;
                        }
						
						dAngle0 = Math.atan2(savepoints[0].y - savepoints[1].y, savepoints[0].x - savepoints[1].x);
						dAngle1 = Math.atan2(savepoints[0].y - savepoints[2].y, savepoints[0].x - savepoints[2].x);
                        // left side: draw letter in from the jaggy line
						savepoints[0].x -= 30 * Math.cos(dAngle0);  //was 20
						savepoints[0].y -= 30 * Math.sin(dAngle0);
						
                        iLetterOffset = 0;
                        ptsJaggyLine[0].x = savepoints[0].x - iLetterOffset * 2;
                        ptsJaggyLine[0].y = savepoints[0].y;
                        ptsJaggyLine[0].x -= iLetterOffset;
                        
                        pts[0].x = (ptsJaggyLine[0].x + savepoints[1].x) / 2;
                        pts[0].y = (ptsJaggyLine[0].y + savepoints[1].y) / 2;
                        dDeltaX0 = Math.cos(dAngle0 + sign * armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4) * iDelta;
                        dDeltaY0 = Math.sin(dAngle0 + sign * armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4) * iDelta;
                        ptsJaggyLine[1].x = pts[0].x - dDeltaX0;
                        ptsJaggyLine[1].y = pts[0].y - dDeltaY0;
                        ptsJaggyLine[2].x = pts[0].x + dDeltaX0;
                        ptsJaggyLine[2].y = pts[0].y + dDeltaY0;
                        ptsJaggyLine[3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[1]);
                        for (j = 0; j < 4; j++) {
                            points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptsJaggyLine[j]);
                            counter++;
                        }
                        points[counter - 1].style = 5;
                        dDeltaX1 = Math.cos(dAngle0 - sign * armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4) * iDelta;
                        dDeltaY1 = Math.sin(dAngle0 - sign * armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4) * iDelta;
                        ptsJaggyLine[0].x = savepoints[1].x + dDeltaX0;
                        ptsJaggyLine[0].y = savepoints[1].y + dDeltaY0;
                        ptsJaggyLine[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[1]);
                        ptsJaggyLine[2].x = savepoints[1].x + dDeltaX1;
                        ptsJaggyLine[2].y = savepoints[1].y + dDeltaY1;
                        for (j = 0; j < 3; j++) {
                            points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptsJaggyLine[j]);
                            points[counter].style = 0;
                            if (linetype === 22139000) {
                                points[counter].style = 9;
                            }
                            counter++;
                        }
                        points[counter - 1].style = 5;
                        if (linetype === 22139000) {
                            points[counter - 1].style = 9;
                            points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[counter - 3]);
                            points[counter].style = 10;
                            counter++;
                        }
						
						// right side: draw letter and jaggy line
                        savepoints[0].x += 30 * (Math.cos(dAngle0) - Math.cos(dAngle1));  //was 20
						savepoints[0].y += 30 * (Math.sin(dAngle0) - Math.sin(dAngle1));
						
                        ptsJaggyLine[0].x = savepoints[0].x + iLetterOffset * 2;
                        ptsJaggyLine[0].y = savepoints[0].y;
                        ptsJaggyLine[0].x += iLetterOffset;
                        
                        pts[0].x = (ptsJaggyLine[0].x + savepoints[2].x) / 2;
                        pts[0].y = (ptsJaggyLine[0].y + savepoints[2].y) / 2;
                        dDeltaX0 = Math.cos(dAngle1 - sign*armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI  / 4) * iDelta;   //was -
						dDeltaY0 = Math.sin(dAngle1 - sign*armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI  / 4) * iDelta;   //was -
                        ptsJaggyLine[1].x = pts[0].x - dDeltaX0;
                        ptsJaggyLine[1].y = pts[0].y - dDeltaY0;
                        ptsJaggyLine[2].x = pts[0].x + dDeltaX0;
                        ptsJaggyLine[2].y = pts[0].y + dDeltaY0;
                        ptsJaggyLine[3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[2]);
                        for (j = 0; j < 4; j++) {
                            points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptsJaggyLine[j]);
                            counter++;
                        }
                        points[counter - 1].style = 5;
						// draw arrow at end of line
                        dDeltaX1 = Math.cos(dAngle1 + sign*armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4) * iDelta;   //was +
						dDeltaY1 = Math.sin(dAngle1 + sign*armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4) * iDelta;   //was +
                        ptsJaggyLine[0].x = savepoints[2].x + dDeltaX0;
                        ptsJaggyLine[0].y = savepoints[2].y + dDeltaY0;
                        ptsJaggyLine[1] = savepoints[2];
                        ptsJaggyLine[2].x = savepoints[2].x + dDeltaX1;
                        ptsJaggyLine[2].y = savepoints[2].y + dDeltaY1;
                        for (j = 0; j < 3; j++) {
                            points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptsJaggyLine[j]);
                            points[counter].style = 0;
                            if (linetype === 22139000)
                                points[counter].style = 9;
                            counter++;
                        }
                        points[counter - 1].style = 5;
                        if (linetype === 22139000) {
                            points[counter - 1].style = 9;
                            points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[counter - 3]);
                            points[counter].style = 10;
                            counter++;
                        }
                    } else {
                        points[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[0]);
                        points[0].style = 0;
                        points[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[1]);
                        points[1].style = 5;
                        points[2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[0]);
                        points[2].style = 0;
                        points[3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[2]);
                        return 4;
                    }
                    savepoints = null;
                    pts = null;
                    ptsJaggyLine = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "GetDISMcoverDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetDISMCoverDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return counter;
            },
            GetDISMCoverDoubleRevC: function(points, linetype, vblSaveCounter) {
                var counter = 0;
                try {
                    var dAngle0 = 0;
                    var dDeltaX0 = 0;
                    var dDeltaY0 = 0;
                    var dDeltaX1 = 0;
                    var dDeltaY1 = 0;
                    var iLengthPt0Pt1 = 0;
                    var iLengthPt0Pt2 = 0;
                    var iDelta = 0;
                    var j = 0;
                    var t = 1;
                    var iFontSize = 0;
                    var iLetterOffset = 0;
                    var savepoints = new Array(3);
                    var pts = new Array(2);
                    var ptsJaggyLine = new Array(4);
                    var goLeftThenRight = false;
                    var sign = 1;
                    var origPoints = null;
                    if (vblSaveCounter === 4) {
                        origPoints = new Array(4);
                        for (j = 0; j < vblSaveCounter; j++)
                            origPoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[j]);

                        points[1] = origPoints[0];
                        points[2] = origPoints[3];
                        points[0].x = (origPoints[1].x + origPoints[2].x) / 2;
                        points[0].y = (origPoints[1].y + origPoints[2].y) / 2;
                    }
                    var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[0]);
                    var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[1]);
                    var pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[2]);
                    var pt3 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt4 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    armyc2.c2sd.JavaLineArray.lineutility.LineRelativeToLine(pt1, pt2, pt0, pt3, pt4);
                    armyc2.c2sd.JavaLineArray.lineutility.LineRelativeToLine(pt3, pt0, pt1, pt2, pt4);
                    var quadrant = armyc2.c2sd.JavaLineArray.lineutility.GetQuadrantDouble(pt0, pt4);
                    pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[1]);
                    pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[2]);
                    if (pt1.x < pt2.x && quadrant === 1)
                        sign = -1;
                    else if (pt1.x > pt2.x && quadrant === 2)
                        sign = -1;
                    else if (pt1.x > pt2.x && quadrant === 3)
                        sign = -1;
                    else if (pt1.x < pt2.x && quadrant === 4)
                        sign = -1;
                    if (linetype === 22139000)
                        t = 0;
                    if (points[1].x <= points[2].x)
                        goLeftThenRight = true;
                    for (j = 0; j < 3; j++) {
                        savepoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[j]);
                        savepoints[j].style = 0;
                    }
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pts);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(ptsJaggyLine);
                    iLengthPt0Pt1 = Math.sqrt((savepoints[1].x - savepoints[0].x) * (savepoints[1].x - savepoints[0].x) + (savepoints[1].y - savepoints[0].y) * (savepoints[1].y - savepoints[0].y));
                    iLengthPt0Pt2 = Math.sqrt((savepoints[2].x - savepoints[0].x) * (savepoints[2].x - savepoints[0].x) + (savepoints[2].y - savepoints[0].y) * (savepoints[2].y - savepoints[0].y));
                    if (iLengthPt0Pt1 > iLengthPt0Pt2) {
                        iLengthPt0Pt1 = iLengthPt0Pt2;
                    }
                    iFontSize = armyc2.c2sd.JavaLineArray.DISMSupport.GetTGFontSize(iLengthPt0Pt1);
                    if (iFontSize > 0) {
                        iDelta = iLengthPt0Pt1 / 15;
                        if (iDelta > armyc2.c2sd.JavaLineArray.DISMSupport.maxLength) {
                            iDelta = armyc2.c2sd.JavaLineArray.DISMSupport.maxLength;
                        }
                        if (iDelta < armyc2.c2sd.JavaLineArray.DISMSupport.minLength) {
                            iDelta = armyc2.c2sd.JavaLineArray.DISMSupport.minLength;
                        }
                        if (vblSaveCounter < 4) {
                            if (goLeftThenRight)
                                savepoints[0].x -= 30 * t;
                            else
                                savepoints[0].x += 30 * t;
                            iLetterOffset = 0;
                            ptsJaggyLine[0].x = savepoints[0].x - iLetterOffset * 2;
                            ptsJaggyLine[0].y = savepoints[0].y;
                            ptsJaggyLine[0].x -= iLetterOffset;
                            dAngle0 = Math.atan2(ptsJaggyLine[0].y - savepoints[1].y, ptsJaggyLine[0].x - savepoints[1].x);
                            pts[0].x = (ptsJaggyLine[0].x + savepoints[1].x) / 2;
                            pts[0].y = (ptsJaggyLine[0].y + savepoints[1].y) / 2;
                            dDeltaX0 = Math.cos(dAngle0 + sign * armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4) * iDelta;
                            dDeltaY0 = Math.sin(dAngle0 + sign * armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4) * iDelta;
                            ptsJaggyLine[1].x = pts[0].x - dDeltaX0;
                            ptsJaggyLine[1].y = pts[0].y - dDeltaY0;
                            ptsJaggyLine[2].x = pts[0].x + dDeltaX0;
                            ptsJaggyLine[2].y = pts[0].y + dDeltaY0;
                            ptsJaggyLine[3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[1]);
                            for (j = 0; j < 4; j++) {
                                points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptsJaggyLine[j]);
                                counter++;
                            }
                            points[counter - 1].style = 5;
                        } else {
                            ptsJaggyLine[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(origPoints[1]);
                            dAngle0 = Math.atan2(ptsJaggyLine[0].y - origPoints[0].y, ptsJaggyLine[0].x - origPoints[0].x);
                            pts[0].x = (ptsJaggyLine[0].x + origPoints[0].x) / 2;
                            pts[0].y = (ptsJaggyLine[0].y + origPoints[0].y) / 2;
                            dDeltaX0 = Math.cos(dAngle0 + sign * armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4) * iDelta;
                            dDeltaY0 = Math.sin(dAngle0 + sign * armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4) * iDelta;
                            ptsJaggyLine[1].x = pts[0].x - dDeltaX0;
                            ptsJaggyLine[1].y = pts[0].y - dDeltaY0;
                            ptsJaggyLine[2].x = pts[0].x + dDeltaX0;
                            ptsJaggyLine[2].y = pts[0].y + dDeltaY0;
                            ptsJaggyLine[3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(origPoints[0]);
                            for (j = 0; j < 4; j++) {
                                points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptsJaggyLine[j]);
                                counter++;
                            }
                            points[counter - 1].style = 5;
                        }
                        dDeltaX1 = Math.cos(dAngle0 - sign * armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4) * iDelta;
                        dDeltaY1 = Math.sin(dAngle0 - sign * armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4) * iDelta;
                        if (vblSaveCounter < 4) {
                            ptsJaggyLine[0].x = savepoints[1].x + dDeltaX0;
                            ptsJaggyLine[0].y = savepoints[1].y + dDeltaY0;
                        } else {
                            ptsJaggyLine[0].x = origPoints[0].x + dDeltaX0;
                            ptsJaggyLine[0].y = origPoints[0].y + dDeltaY0;
                        }
                        if (vblSaveCounter < 4)
                            ptsJaggyLine[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[1]);
                        else
                            ptsJaggyLine[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(origPoints[0]);
                        if (vblSaveCounter < 4) {
                            ptsJaggyLine[2].x = savepoints[1].x + dDeltaX1;
                            ptsJaggyLine[2].y = savepoints[1].y + dDeltaY1;
                        } else {
                            ptsJaggyLine[2].x = origPoints[0].x + dDeltaX1;
                            ptsJaggyLine[2].y = origPoints[0].y + dDeltaY1;
                        }
                        for (j = 0; j < 3; j++) {
                            points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptsJaggyLine[j]);
                            points[counter].style = 0;
                            if (linetype === 22139000) {
                                points[counter].style = 9;
                            }
                            counter++;
                        }
                        points[counter - 1].style = 5;
                        if (linetype === 22139000) {
                            points[counter - 1].style = 9;
                            points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[counter - 3]);
                            points[counter].style = 10;
                            counter++;
                        }
                        if (vblSaveCounter < 4) {
                            if (goLeftThenRight)
                                savepoints[0].x += 60 * t;
                            else
                                savepoints[0].x -= 60 * t;
                            ptsJaggyLine[0].x = savepoints[0].x + iLetterOffset * 2;
                            ptsJaggyLine[0].y = savepoints[0].y;
                            ptsJaggyLine[0].x += iLetterOffset;
                            dAngle0 = Math.atan2(ptsJaggyLine[0].y - savepoints[2].y, ptsJaggyLine[0].x - savepoints[2].x);
                            pts[0].x = (ptsJaggyLine[0].x + savepoints[2].x) / 2;
                            pts[0].y = (ptsJaggyLine[0].y + savepoints[2].y) / 2;
                            dDeltaX0 = Math.cos(dAngle0 - sign * armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4) * iDelta;
                            dDeltaY0 = Math.sin(dAngle0 - sign * armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4) * iDelta;
                            ptsJaggyLine[1].x = pts[0].x - dDeltaX0;
                            ptsJaggyLine[1].y = pts[0].y - dDeltaY0;
                            ptsJaggyLine[2].x = pts[0].x + dDeltaX0;
                            ptsJaggyLine[2].y = pts[0].y + dDeltaY0;
                            ptsJaggyLine[3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[2]);
                            for (j = 0; j < 4; j++) {
                                points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptsJaggyLine[j]);
                                counter++;
                            }
                            points[counter - 1].style = 5;
                            dDeltaX1 = Math.cos(dAngle0 + sign * armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4) * iDelta;
                            dDeltaY1 = Math.sin(dAngle0 + sign * armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4) * iDelta;
                            ptsJaggyLine[0].x = savepoints[2].x + dDeltaX0;
                            ptsJaggyLine[0].y = savepoints[2].y + dDeltaY0;
                            ptsJaggyLine[1] = savepoints[2];
                            ptsJaggyLine[2].x = savepoints[2].x + dDeltaX1;
                            ptsJaggyLine[2].y = savepoints[2].y + dDeltaY1;
                        } else {
                            ptsJaggyLine[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(origPoints[2]);
                            dAngle0 = Math.atan2(ptsJaggyLine[0].y - origPoints[3].y, ptsJaggyLine[0].x - origPoints[3].x);
                            pts[0].x = (ptsJaggyLine[0].x + origPoints[3].x) / 2;
                            pts[0].y = (ptsJaggyLine[0].y + origPoints[3].y) / 2;
                            dDeltaX0 = Math.cos(dAngle0 - sign * armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4) * iDelta;
                            dDeltaY0 = Math.sin(dAngle0 - sign * armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4) * iDelta;
                            ptsJaggyLine[1].x = pts[0].x - dDeltaX0;
                            ptsJaggyLine[1].y = pts[0].y - dDeltaY0;
                            ptsJaggyLine[2].x = pts[0].x + dDeltaX0;
                            ptsJaggyLine[2].y = pts[0].y + dDeltaY0;
                            ptsJaggyLine[3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(origPoints[3]);
                            for (j = 0; j < 4; j++) {
                                points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptsJaggyLine[j]);
                                counter++;
                            }
                            points[counter - 1].style = 5;
                            dDeltaX1 = Math.cos(dAngle0 + sign * armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4) * iDelta;
                            dDeltaY1 = Math.sin(dAngle0 + sign * armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4) * iDelta;
                            ptsJaggyLine[0].x = origPoints[3].x + dDeltaX0;
                            ptsJaggyLine[0].y = origPoints[3].y + dDeltaY0;
                            ptsJaggyLine[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(origPoints[3]);
                            ptsJaggyLine[2].x = origPoints[3].x + dDeltaX1;
                            ptsJaggyLine[2].y = origPoints[3].y + dDeltaY1;
                        }
                        for (j = 0; j < 3; j++) {
                            points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptsJaggyLine[j]);
                            points[counter].style = 0;
                            if (linetype === 22139000)
                                points[counter].style = 9;
                            counter++;
                        }
                        points[counter - 1].style = 5;
                        if (linetype === 22139000) {
                            points[counter - 1].style = 9;
                            points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[counter - 3]);
                            points[counter].style = 10;
                            counter++;
                        }
                    } else {
                        points[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[0]);
                        points[0].style = 0;
                        points[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[1]);
                        points[1].style = 5;
                        points[2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[0]);
                        points[2].style = 0;
                        points[3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[2]);
                        return 4;
                    }
                    savepoints = null;
                    pts = null;
                    ptsJaggyLine = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "GetDISMcoverDoubleRevC", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetDISMCoverDoubleRevc", exc));
                    } else {
                        throw exc;
                    }
                }
                return counter;
            },
            GetDISMBypassDouble: function(points, linetype) {
                var counter = 0;
                try {
                    var j = 0;
                    var pointsCorner = new Array(2);
                    var rectpts = new Array(4);
                    var savepoints = new Array(3);
                    var deltapoints1 = new Array(4);
                    var deltapoints2 = new Array(4);
                    var iDeltaX = new armyc2.c2sd.JavaLineArray.ref();
                    var iDeltaY = new armyc2.c2sd.JavaLineArray.ref();
                    var bPointsRight = 0;
                    for (j = 0; j < 3; j++) {
                        savepoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[j]);
                    }
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pointsCorner);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(rectpts);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(deltapoints1);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(deltapoints2);
                    armyc2.c2sd.JavaLineArray.DISMSupport.DrawOpenRectangleDouble(savepoints, pointsCorner, rectpts);
                    for (j = 0; j < 4; j++) {
                        points[counter] = rectpts[j];
                        counter++;
                    }
                    bPointsRight = armyc2.c2sd.JavaLineArray.DISMSupport.DetermineDirectionDouble(savepoints);
                    armyc2.c2sd.JavaLineArray.DISMSupport.CalcEndpieceDeltasDouble(savepoints, iDeltaX, iDeltaY, armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4);
                    if ((savepoints[0].y - savepoints[1].y) < 0) {
                        if (bPointsRight !== 0) {
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[0], iDeltaX.value[0], iDeltaY.value[0], iDeltaY.value[0], -iDeltaX.value[0], deltapoints1);
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[1], iDeltaX.value[0], iDeltaY.value[0], iDeltaY.value[0], -iDeltaX.value[0], deltapoints2);
                        } else {
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[0], iDeltaY.value[0], -iDeltaX.value[0], iDeltaX.value[0], iDeltaY.value[0], deltapoints1);
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[1], iDeltaY.value[0], -iDeltaX.value[0], iDeltaX.value[0], iDeltaY.value[0], deltapoints2);
                        }
                    } else {
                        if (bPointsRight !== 0) {
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[0], iDeltaY.value[0], -iDeltaX.value[0], iDeltaX.value[0], iDeltaY.value[0], deltapoints1);
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[1], iDeltaY.value[0], -iDeltaX.value[0], iDeltaX.value[0], iDeltaY.value[0], deltapoints2);
                        } else {
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[0], iDeltaX.value[0], iDeltaY.value[0], iDeltaY.value[0], -iDeltaX.value[0], deltapoints1);
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[1], iDeltaX.value[0], iDeltaY.value[0], iDeltaY.value[0], -iDeltaX.value[0], deltapoints2);
                        }
                    }
                    for (j = 0; j < 4; j++) {
                        points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints1[j]);
                        counter++;
                    }
                    for (j = 0; j < 4; j++) {
                        points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints2[j]);
                        counter++;
                    }
                    pointsCorner = null;
                    rectpts = null;
                    savepoints = null;
                    deltapoints1 = null;
                    deltapoints2 = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "GetDISMBypassDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetDISMBypassDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return counter;
            },
            GetDISMBreachDouble: function(points, linetype) {
                var counter = 0;
                try {
                    var pointsCorner = new Array(2);
                    var rectpts = new Array(4);
                    var deltapoints1 = new Array(4);
                    var deltapoints2 = new Array(4);
                    var iDeltaX = new armyc2.c2sd.JavaLineArray.ref();
                    var iDeltaY = new armyc2.c2sd.JavaLineArray.ref();
                    var bPointsRight = 0;
                    var j = 0;
                    var savepoints = new Array(3);
                    for (j = 0; j < 3; j++) {
                        savepoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[j]);
                    }
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pointsCorner);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(rectpts);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(deltapoints1);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(deltapoints2);
                    armyc2.c2sd.JavaLineArray.DISMSupport.DrawOpenRectangleDouble(savepoints, pointsCorner, rectpts);
                    for (j = 0; j < 4; j++) {
                        points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(rectpts[j]);
                        counter++;
                    }
                    bPointsRight = armyc2.c2sd.JavaLineArray.DISMSupport.DetermineDirectionDouble(savepoints);
                    armyc2.c2sd.JavaLineArray.DISMSupport.CalcEndpieceDeltasDouble(savepoints, iDeltaX, iDeltaY, armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4);
                    if ((savepoints[0].y - savepoints[1].y) < 0) {
                        if (bPointsRight !== 0) {
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[0], iDeltaX.value[0], iDeltaY.value[0], -iDeltaX.value[0], -iDeltaY.value[0], deltapoints1);
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[1], iDeltaY.value[0], -iDeltaX.value[0], -iDeltaY.value[0], iDeltaX.value[0], deltapoints2);
                        } else {
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[0], iDeltaY.value[0], -iDeltaX.value[0], -iDeltaY.value[0], iDeltaX.value[0], deltapoints1);
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[1], iDeltaX.value[0], iDeltaY.value[0], -iDeltaX.value[0], -iDeltaY.value[0], deltapoints2);
                        }
                    } else {
                        if (bPointsRight !== 0) {
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[0], iDeltaY.value[0], -iDeltaX.value[0], -iDeltaY.value[0], iDeltaX.value[0], deltapoints1);
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[1], iDeltaX.value[0], iDeltaY.value[0], -iDeltaX.value[0], -iDeltaY.value[0], deltapoints2);
                        } else {
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[0], iDeltaX.value[0], iDeltaY.value[0], -iDeltaX.value[0], -iDeltaY.value[0], deltapoints1);
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[1], iDeltaY.value[0], -iDeltaX.value[0], -iDeltaY.value[0], iDeltaX.value[0], deltapoints2);
                        }
                    }
                    for (j = 0; j < 4; j++) {
                        points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints1[j]);
                        counter++;
                    }
                    for (j = 0; j < 4; j++) {
                        points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints2[j]);
                        counter++;
                    }
                    pointsCorner = null;
                    rectpts = null;
                    savepoints = null;
                    deltapoints1 = null;
                    deltapoints2 = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "GetDISMBreachDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetDISMBreachDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return counter;
            },
            GetDISMCanalizeDouble: function(points, linetype) {
                var counter = 0;
                try {
                    var pointsCorner = new Array(2);
                    var rectpts = new Array(4);
                    var deltapoints1 = new Array(4);
                    var deltapoints2 = new Array(4);
                    var j = 0;
                    var iDeltaX = new armyc2.c2sd.JavaLineArray.ref();
                    var iDeltaY = new armyc2.c2sd.JavaLineArray.ref();
                    var bPointsRight = 0;
                    var savepoints = new Array(3);
                    for (j = 0; j < 3; j++) {
                        savepoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[j]);
                    }
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pointsCorner);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(rectpts);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(deltapoints1);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(deltapoints2);
                    armyc2.c2sd.JavaLineArray.DISMSupport.DrawOpenRectangleDouble(savepoints, pointsCorner, rectpts);
                    for (j = 0; j < 4; j++) {
                        points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(rectpts[j]);
                        counter++;
                    }
                    bPointsRight = armyc2.c2sd.JavaLineArray.DISMSupport.DetermineDirectionDouble(savepoints);
                    armyc2.c2sd.JavaLineArray.DISMSupport.CalcEndpieceDeltasDouble(savepoints, iDeltaX, iDeltaY, armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4);
                    if ((savepoints[0].y - savepoints[1].y) < 0) {
                        if (bPointsRight !== 0) {
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[1], iDeltaX.value[0], iDeltaY.value[0], -iDeltaX.value[0], -iDeltaY.value[0], deltapoints1);
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[0], iDeltaY.value[0], -iDeltaX.value[0], -iDeltaY.value[0], iDeltaX.value[0], deltapoints2);
                        } else {
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[1], iDeltaY.value[0], -iDeltaX.value[0], -iDeltaY.value[0], iDeltaX.value[0], deltapoints1);
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[0], iDeltaX.value[0], iDeltaY.value[0], -iDeltaX.value[0], -iDeltaY.value[0], deltapoints2);
                        }
                    } else {
                        if (bPointsRight !== 0) {
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[1], iDeltaY.value[0], -iDeltaX.value[0], -iDeltaY.value[0], iDeltaX.value[0], deltapoints1);
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[0], iDeltaX.value[0], iDeltaY.value[0], -iDeltaX.value[0], -iDeltaY.value[0], deltapoints2);
                        } else {
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[1], iDeltaX.value[0], iDeltaY.value[0], -iDeltaX.value[0], -iDeltaY.value[0], deltapoints1);
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[0], iDeltaY.value[0], -iDeltaX.value[0], -iDeltaY.value[0], iDeltaX.value[0], deltapoints2);
                        }
                    }
                    for (j = 0; j < 4; j++) {
                        points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints1[j]);
                        counter++;
                    }
                    for (j = 0; j < 4; j++) {
                        points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints2[j]);
                        counter++;
                    }
                    pointsCorner = null;
                    rectpts = null;
                    savepoints = null;
                    deltapoints1 = null;
                    deltapoints2 = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "GetDISMCanalizeDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetDISMCanalizeDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return counter;
            },
            GetDISMDeceiveDouble: function(points) {
                try {
                    var savepoints = new Array(3);
                    var j = 0;
                    for (j = 0; j < 3; j++) {
                        savepoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[j]);
                    }
                    points[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[0]);
                    points[0].style = 1;
                    points[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[1]);
                    points[1].style = 5;
                    points[2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[2]);
                    points[2].style = 1;
                    points[3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[0]);
                    points[3].style = 5;
                    savepoints = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "GetDISMDeceiveDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetDISMDeceiveDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return;
            },
            GetDISMDisruptDouble: function(points, linetype) {
                var counter = 0;
                try {
                    var pts = new Array(2);
                    var ptsArrow = new Array(3);
                    var ptCenter = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var j = 0;
                    var savepoints = new Array(3);
                    var dAngle1 = 0;
                    var deltapoints1 = new Array(4);
                    var deltapoints2 = new Array(4);
                    var deltapoints3 = new Array(4);
                    var iDiagEOL_length = 0;
                    var iDeltaX1 = 0;
                    var iDeltaY1 = 0;
                    var iDeltaX2 = 0;
                    var iDeltaY2 = 0;
                    for (j = 0; j < 3; j++) {
                        savepoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[j]);
                    }
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pts);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(ptsArrow);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(deltapoints1);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(deltapoints2);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(deltapoints3);
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[1]);
                    points[counter].style = 5;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[1]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[2]);
                    points[counter].style = 5;
                    counter++;
                    ptCenter.x = (savepoints[0].x + savepoints[1].x) / 2;
                    ptCenter.y = (savepoints[0].y + savepoints[1].y) / 2;
                    ptsArrow[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[2]);
                    ptsArrow[1].x = ptCenter.x + (savepoints[2].x - savepoints[1].x) * 4 / 5;
                    ptsArrow[1].y = ptCenter.y + (savepoints[2].y - savepoints[1].y) * 4 / 5;
                    ptsArrow[2].x = savepoints[0].x + (savepoints[2].x - savepoints[1].x) * 3 / 5;
                    ptsArrow[2].y = savepoints[0].y + (savepoints[2].y - savepoints[1].y) * 3 / 5;
                    pts[0].x = ptCenter.x - (savepoints[2].x - savepoints[1].x) / 5;
                    pts[0].y = ptCenter.y - (savepoints[2].y - savepoints[1].y) / 5;
                    pts[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptsArrow[1]);
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    pts[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[0]);
                    pts[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptsArrow[2]);
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    iDiagEOL_length = ((Math.sqrt((savepoints[1].x - savepoints[0].x) * (savepoints[1].x - savepoints[0].x) + (savepoints[1].y - savepoints[0].y) * (savepoints[1].y - savepoints[0].y)) + Math.sqrt((savepoints[2].x - savepoints[1].x) * (savepoints[2].x - savepoints[1].x) + (savepoints[2].y - savepoints[1].y) * (savepoints[2].y - savepoints[1].y))) / 15);
                    if (iDiagEOL_length > armyc2.c2sd.JavaLineArray.DISMSupport.maxLength) {
                        iDiagEOL_length = armyc2.c2sd.JavaLineArray.DISMSupport.maxLength;
                    }
                    if (iDiagEOL_length < armyc2.c2sd.JavaLineArray.DISMSupport.minLength) {
                        iDiagEOL_length = armyc2.c2sd.JavaLineArray.DISMSupport.minLength;
                    }
                    dAngle1 = Math.atan2(savepoints[1].y - savepoints[2].y, savepoints[1].x - savepoints[2].x);
                    iDeltaX1 = (iDiagEOL_length * Math.cos(dAngle1 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 6));
                    iDeltaY1 = (iDiagEOL_length * Math.sin(dAngle1 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 6));
                    iDeltaX2 = (iDiagEOL_length * Math.cos(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 6));
                    iDeltaY2 = (iDiagEOL_length * Math.sin(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 6));
                    armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(ptsArrow[0], iDeltaX1, iDeltaY1, iDeltaX2, iDeltaY2, deltapoints1);
                    armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(ptsArrow[1], iDeltaX1, iDeltaY1, iDeltaX2, iDeltaY2, deltapoints2);
                    armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(ptsArrow[2], iDeltaX1, iDeltaY1, iDeltaX2, iDeltaY2, deltapoints3);
                    for (j = 0; j < 4; j++) {
                        points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints1[j]);
                        counter++;
                    }
                    for (j = 0; j < 4; j++) {
                        points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints2[j]);
                        counter++;
                    }
                    for (j = 0; j < 4; j++) {
                        points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints3[j]);
                        counter++;
                    }
                    pts = null;
                    ptsArrow = null;
                    savepoints = null;
                    deltapoints1 = null;
                    deltapoints2 = null;
                    deltapoints3 = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "GetDISMDisruptDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetDISMDisruptDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return counter;
            },
            GetDISMContainDouble: function(points, linetype) {
                var counter = 0;
                try {
                    var pts = new Array(3);
                    var ptCenter = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var ptPerp = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var iPerpLength = 0;
                    var j = 0;
                    var dAngle1 = 0;
                    var d = 0;
                    var dCosAngle1 = 0;
                    var dSinAngle1 = 0;
                    var iRadius = 0;
                    var iDiagEOL_length = 0;
                    var dAngle2 = 0;
                    var dDeltaX1;
                    var dDeltaY1;
                    var dDeltaX2;
                    var dDeltaY2;
                    var savepoints = new Array(3);
                    var arcpoints = new Array(17);
                    for (j = 0; j < 3; j++) {
                        savepoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[j]);
                    }
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pts);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(arcpoints);
                    ptCenter.x = (savepoints[0].x + savepoints[1].x) / 2;
                    ptCenter.y = (savepoints[0].y + savepoints[1].y) / 2;
                    var m = new armyc2.c2sd.JavaLineArray.ref();
                    var ptRelative = armyc2.c2sd.JavaLineArray.lineutility.PointRelativeToLine(savepoints[0], savepoints[1], savepoints[2]);
                    armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble2(savepoints[0], savepoints[1], m);
                    if (m.value[0] !== 0) {
                        if (savepoints[0].y > savepoints[1].y) {
                            if (ptRelative.x > ptCenter.x) {
                                armyc2.c2sd.JavaLineArray.lineutility.Reverse2Points(savepoints[0], savepoints[1]);
                            }
                        }
                        if (savepoints[0].y < savepoints[1].y) {
                            if (ptRelative.x < ptCenter.x) {
                                armyc2.c2sd.JavaLineArray.lineutility.Reverse2Points(savepoints[0], savepoints[1]);
                            }
                        }
                    } else {
                        if (savepoints[0].x < savepoints[1].x) {
                            if (ptRelative.y > ptCenter.y) {
                                armyc2.c2sd.JavaLineArray.lineutility.Reverse2Points(savepoints[0], savepoints[1]);
                            }
                        }
                        if (savepoints[0].x > savepoints[1].x) {
                            if (ptRelative.y < ptCenter.y) {
                                armyc2.c2sd.JavaLineArray.lineutility.Reverse2Points(savepoints[0], savepoints[1]);
                            }
                        }
                    }
                    iPerpLength = Math.sqrt((ptCenter.x - savepoints[2].x) * (ptCenter.x - savepoints[2].x) + (ptCenter.y - savepoints[2].y) * (ptCenter.y - savepoints[2].y));
                    if (iPerpLength < 1) {
                        iPerpLength = 1;
                    }
                    dAngle1 = Math.atan2(savepoints[0].y - savepoints[1].y, savepoints[0].x - savepoints[1].x);
                    dCosAngle1 = Math.cos(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 2);
                    dSinAngle1 = Math.sin(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 2);
                    ptPerp.x = ptCenter.x + dCosAngle1 * iPerpLength;
                    ptPerp.y = ptCenter.y + dSinAngle1 * iPerpLength;
                    pts[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptCenter);
                    pts[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[2]);
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 14;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    iRadius = Math.sqrt((ptCenter.x - savepoints[0].x) * (ptCenter.x - savepoints[0].x) + (ptCenter.y - savepoints[0].y) * (ptCenter.y - savepoints[0].y));
                    iDiagEOL_length = (iPerpLength + iRadius) / 20;
                    if (iDiagEOL_length > armyc2.c2sd.JavaLineArray.DISMSupport.maxLength) {
                        iDiagEOL_length = armyc2.c2sd.JavaLineArray.DISMSupport.maxLength;
                    }
                    if (iDiagEOL_length < armyc2.c2sd.JavaLineArray.DISMSupport.minLength) {
                        iDiagEOL_length = armyc2.c2sd.JavaLineArray.DISMSupport.minLength;
                    }
                    dAngle2 = Math.atan2(ptPerp.y - ptCenter.y, ptPerp.x - ptCenter.x);
                    dDeltaX1 = Math.cos(dAngle2 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4);
                    dDeltaY1 = Math.sin(dAngle2 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4);
                    dDeltaX2 = Math.cos(dAngle2 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4);
                    dDeltaY2 = Math.sin(dAngle2 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4);
                    pts[0].x = ptCenter.x + dDeltaX1 * iDiagEOL_length;
                    pts[0].y = ptCenter.y + dDeltaY1 * iDiagEOL_length;
                    pts[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptCenter);
                    pts[2].x = ptCenter.x + dDeltaX2 * iDiagEOL_length;
                    pts[2].y = ptCenter.y + dDeltaY2 * iDiagEOL_length;
                    for (j = 0; j < 3; j++) {
                        points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[j]);
                        points[counter].style = 0;
                        counter++;
                    }
                    points[counter - 1].style = 5;
                    armyc2.c2sd.JavaLineArray.DISMSupport.ArcApproximationDouble(ptCenter.x - iRadius, ptCenter.y - iRadius, ptCenter.x + iRadius, ptCenter.y + iRadius, savepoints[0].x, savepoints[0].y, savepoints[1].x, savepoints[1].y, arcpoints);
                    for (j = 0; j < 17; j++) {
                        points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(arcpoints[j]);
                        points[counter].style = 0;
                        counter++;
                    }
                    points[counter - 1].style = 5;
                    pts[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[0]);
                    pts[1].x = (pts[0].x + ptCenter.x) / 2;
                    pts[1].y = (pts[0].y + ptCenter.y) / 2;
                    d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pts[0], pts[1]);
                    if (d > armyc2.c2sd.JavaLineArray.DISMSupport.maxLength) {
                        pts[1] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pts[1], pts[0], -armyc2.c2sd.JavaLineArray.DISMSupport.maxLength);
                    }
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    pts[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[1]);
                    pts[1].x = (pts[0].x + ptCenter.x) / 2;
                    pts[1].y = (pts[0].y + ptCenter.y) / 2;
                    d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pts[0], pts[1]);
                    if (d > armyc2.c2sd.JavaLineArray.DISMSupport.maxLength) {
                        pts[1] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pts[1], pts[0], -armyc2.c2sd.JavaLineArray.DISMSupport.maxLength);
                    }
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    pts[0].x = ptCenter.x - (ptPerp.x - ptCenter.x) * iRadius / iPerpLength;
                    pts[0].y = ptCenter.y - (ptPerp.y - ptCenter.y) * iRadius / iPerpLength;
                    pts[1].x = (ptCenter.x + pts[0].x) / 2;
                    pts[1].y = (ptCenter.y + pts[0].y) / 2;
                    d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pts[0], pts[1]);
                    if (d > armyc2.c2sd.JavaLineArray.DISMSupport.maxLength) {
                        pts[1] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pts[1], pts[0], -armyc2.c2sd.JavaLineArray.DISMSupport.maxLength);
                    }
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    pts[0].x = ptCenter.x - dDeltaX1 * iRadius;
                    pts[0].y = ptCenter.y - dDeltaY1 * iRadius;
                    pts[1].x = (ptCenter.x + pts[0].x) / 2;
                    pts[1].y = (ptCenter.y + pts[0].y) / 2;
                    d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pts[0], pts[1]);
                    if (d > armyc2.c2sd.JavaLineArray.DISMSupport.maxLength) {
                        pts[1] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pts[1], pts[0], -armyc2.c2sd.JavaLineArray.DISMSupport.maxLength);
                    }
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    pts[0].x = ptCenter.x - dDeltaX2 * iRadius;
                    pts[0].y = ptCenter.y - dDeltaY2 * iRadius;
                    pts[1].x = (ptCenter.x + pts[0].x) / 2;
                    pts[1].y = (ptCenter.y + pts[0].y) / 2;
                    d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pts[0], pts[1]);
                    if (d > armyc2.c2sd.JavaLineArray.DISMSupport.maxLength) {
                        pts[1] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pts[1], pts[0], -armyc2.c2sd.JavaLineArray.DISMSupport.maxLength);
                    }
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    dDeltaX1 = Math.cos(dAngle2 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 8);
                    dDeltaY1 = Math.sin(dAngle2 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 8);
                    dDeltaX2 = Math.cos(dAngle2 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 8);
                    dDeltaY2 = Math.sin(dAngle2 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 8);
                    pts[0].x = ptCenter.x - dDeltaX1 * iRadius;
                    pts[0].y = ptCenter.y - dDeltaY1 * iRadius;
                    pts[1].x = (ptCenter.x + pts[0].x) / 2;
                    pts[1].y = (ptCenter.y + pts[0].y) / 2;
                    d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pts[0], pts[1]);
                    if (d > armyc2.c2sd.JavaLineArray.DISMSupport.maxLength) {
                        pts[1] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pts[1], pts[0], -armyc2.c2sd.JavaLineArray.DISMSupport.maxLength);
                    }
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    pts[0].x = ptCenter.x - dDeltaX2 * iRadius;
                    pts[0].y = ptCenter.y - dDeltaY2 * iRadius;
                    pts[1].x = (ptCenter.x + pts[0].x) / 2;
                    pts[1].y = (ptCenter.y + pts[0].y) / 2;
                    d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pts[0], pts[1]);
                    if (d > armyc2.c2sd.JavaLineArray.DISMSupport.maxLength) {
                        pts[1] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pts[1], pts[0], -armyc2.c2sd.JavaLineArray.DISMSupport.maxLength);
                    }
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    dDeltaX1 = Math.cos(dAngle2 + 3 * armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 8);
                    dDeltaY1 = Math.sin(dAngle2 + 3 * armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 8);
                    dDeltaX2 = Math.cos(dAngle2 - 3 * armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 8);
                    dDeltaY2 = Math.sin(dAngle2 - 3 * armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 8);
                    pts[0].x = ptCenter.x - dDeltaX1 * iRadius;
                    pts[0].y = ptCenter.y - dDeltaY1 * iRadius;
                    pts[1].x = (ptCenter.x + pts[0].x) / 2;
                    pts[1].y = (ptCenter.y + pts[0].y) / 2;
                    d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pts[0], pts[1]);
                    if (d > armyc2.c2sd.JavaLineArray.DISMSupport.maxLength) {
                        pts[1] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pts[1], pts[0], -armyc2.c2sd.JavaLineArray.DISMSupport.maxLength);
                    }
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    pts[0].x = ptCenter.x - dDeltaX2 * iRadius;
                    pts[0].y = ptCenter.y - dDeltaY2 * iRadius;
                    pts[1].x = (ptCenter.x + pts[0].x) / 2;
                    pts[1].y = (ptCenter.y + pts[0].y) / 2;
                    d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pts[0], pts[1]);
                    if (d > armyc2.c2sd.JavaLineArray.DISMSupport.maxLength) {
                        pts[1] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pts[1], pts[0], -armyc2.c2sd.JavaLineArray.DISMSupport.maxLength);
                    }
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    pts = null;
                    savepoints = null;
                    arcpoints = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "GetDISMContainDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetDISMContainDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return counter;
            },
            GetDISMFixDouble: function(points, linetype, clipBounds) {
                var counter = 0;
                try {
                    var pts = new Array(3);
                    var savepoints = new Array(2);
                    var dAngle1 = 0;
                    var dLength = 0;
                    var dJaggyHalfAmp = 0;
                    var dJaggyHalfPeriod = 0;
                    var dDeltaXOut = 0;
                    var dDeltaYOut = 0;
                    var dDeltaXAlong = 0;
                    var dDeltaYAlong = 0;
                    var iNumJaggies = 0;
                    var i = 0;
                    var j = 0;
                    for (j = 0; j < 2; j++) {
                        savepoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[j]);
                    }
                    var drawJaggies = new Boolean(true);
                    if (clipBounds !== null) {
                        var ul = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(clipBounds.getMinX(), clipBounds.getMinY());
                        var lr = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(clipBounds.getMaxX(), clipBounds.getMaxY());
                        savepoints = armyc2.c2sd.JavaLineArray.lineutility.BoundOneSegment(savepoints[0], savepoints[1], ul, lr);
                    }
                    if (savepoints === null) {
                        savepoints = new Array(2);
                        for (j = 0; j < 2; j++) {
                            savepoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[j]);
                        }
                        drawJaggies = new Boolean(false);
                    }
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pts);
                    dAngle1 = Math.atan2(savepoints[0].y - savepoints[1].y, savepoints[0].x - savepoints[1].x);
                    dLength = Math.sqrt((savepoints[1].x - savepoints[0].x) * (savepoints[1].x - savepoints[0].x) + (savepoints[1].y - savepoints[0].y) * (savepoints[1].y - savepoints[0].y));
                    dJaggyHalfAmp = dLength / 15;
                    if (dJaggyHalfAmp > armyc2.c2sd.JavaLineArray.DISMSupport.maxLength) {
                        dJaggyHalfAmp = armyc2.c2sd.JavaLineArray.DISMSupport.maxLength;
                    }
                    if (dJaggyHalfAmp < armyc2.c2sd.JavaLineArray.DISMSupport.minLength) {
                        dJaggyHalfAmp = armyc2.c2sd.JavaLineArray.DISMSupport.minLength;
                    }
                    dJaggyHalfPeriod = dJaggyHalfAmp / 1.5;
                    dDeltaXOut = Math.cos(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 2) * dJaggyHalfAmp;
                    dDeltaYOut = Math.sin(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 2) * dJaggyHalfAmp;
                    dDeltaXAlong = Math.cos(dAngle1) * dJaggyHalfPeriod;
                    dDeltaYAlong = Math.sin(dAngle1) * dJaggyHalfPeriod;
                    iNumJaggies = Math.floor((dLength / dJaggyHalfPeriod)) - 3;
                    i = 2;
                    pts[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[1]);
                    pts[1].x = savepoints[1].x + dDeltaXAlong * 1.5;
                    pts[1].y = savepoints[1].y + dDeltaYAlong * 1.5;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    pts[0].x = savepoints[1].x + dDeltaXOut + dDeltaXAlong * i;
                    pts[0].y = savepoints[1].y + dDeltaYOut + dDeltaYAlong * i;
                    i++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    if ((drawJaggies).valueOf())
                        while (i <= iNumJaggies) {
                            pts[1].x = savepoints[1].x - dDeltaXOut + dDeltaXAlong * i;
                            pts[1].y = savepoints[1].y - dDeltaYOut + dDeltaYAlong * i;
                            i++;
                            pts[2].x = savepoints[1].x + dDeltaXOut + dDeltaXAlong * i;
                            pts[2].y = savepoints[1].y + dDeltaYOut + dDeltaYAlong * i;
                            i++;
                            for (j = 0; j < 3; j++) {
                                points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[j]);
                                points[counter].style = 0;
                                counter++;
                            }
                            points[counter - 1].style = 5;
                            pts[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[2]);
                        }
                    pts[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    pts[0].x = savepoints[1].x + dDeltaXAlong * i;
                    pts[0].y = savepoints[1].y + dDeltaYAlong * i;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    pts[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[0]);
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    pts[0].x = savepoints[0].x + dDeltaXOut / 1.5 - dDeltaXAlong;
                    pts[0].y = savepoints[0].y + dDeltaYOut / 1.5 - dDeltaYAlong;
                    pts[2].x = savepoints[0].x - dDeltaXOut / 1.5 - dDeltaXAlong;
                    pts[2].y = savepoints[0].y - dDeltaYOut / 1.5 - dDeltaYAlong;
                    for (j = 0; j < 3; j++) {
                        points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[j]);
                        if (linetype === 23172000) {
                            points[counter].style = 9;
                        } else {
                            points[counter].style = 0;
                        }
                        counter++;
                    }
                    if (linetype === 23172000) {
                        points[counter - 1].style = 10;
                    } else {
                        points[counter - 1].style = 5;
                    }
                    pts = null;
                    savepoints = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "GetDISMFixDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetDISMFixDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return counter;
            },
            GetDISMClearDouble: function(points, linetype) {
                var counter = 0;
                try {
                    var savepoints = new Array(3);
                    var j = 0;
                    var pts = new Array(2);
                    var ptsArrow = new Array(3);
                    var ctrX = ((points[0].x + points[1].x) / 2);
                    var ctrY = ((points[0].y + points[1].y) / 2);
                    var iDeltaX1 = new armyc2.c2sd.JavaLineArray.ref();
                    var iDeltaY1 = new armyc2.c2sd.JavaLineArray.ref();
                    var iDeltaX2 = new armyc2.c2sd.JavaLineArray.ref();
                    var iDeltaY2 = new armyc2.c2sd.JavaLineArray.ref();
                    var deltapoints1 = new Array(4);
                    var deltapoints2 = new Array(4);
                    var deltapoints3 = new Array(4);
                    for (j = 0; j < 3; j++) {
                        savepoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[j]);
                    }
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pts);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(ptsArrow);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(deltapoints1);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(deltapoints2);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(deltapoints3);
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[1]);
                    points[counter].style = 5;
                    counter++;
                    pts[0].x = ctrX;
                    pts[0].y = ctrY;
                    pts[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[2]);
                    ptsArrow[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    pts[0].x = (savepoints[0].x + ctrX) / 2;
                    pts[0].y = (savepoints[0].y + ctrY) / 2;
                    pts[1].x = savepoints[2].x + savepoints[0].x - pts[0].x;
                    pts[1].y = savepoints[2].y + savepoints[0].y - pts[0].y;
                    ptsArrow[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    pts[0].x = (savepoints[1].x + ctrX) / 2;
                    pts[0].y = (savepoints[1].y + ctrY) / 2;
                    pts[1].x = savepoints[2].x + savepoints[1].x - pts[0].x;
                    pts[1].y = savepoints[2].y + savepoints[1].y - pts[0].y;
                    ptsArrow[2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    armyc2.c2sd.JavaLineArray.DISMSupport.CalcEndpieceDeltasDouble(savepoints, iDeltaX1, iDeltaY1, armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 6);
                    armyc2.c2sd.JavaLineArray.DISMSupport.CalcEndpieceDeltasDouble(savepoints, iDeltaX2, iDeltaY2, -armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 6);
                    armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(ptsArrow[0], iDeltaX1.value[0], iDeltaY1.value[0], iDeltaX2.value[0], iDeltaY2.value[0], deltapoints1);
                    armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(ptsArrow[1], iDeltaX1.value[0], iDeltaY1.value[0], iDeltaX2.value[0], iDeltaY2.value[0], deltapoints2);
                    armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(ptsArrow[2], iDeltaX1.value[0], iDeltaY1.value[0], iDeltaX2.value[0], iDeltaY2.value[0], deltapoints3);
                    for (j = 0; j < 4; j++) {
                        points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints1[j]);
                        counter++;
                    }
                    for (j = 0; j < 4; j++) {
                        points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints2[j]);
                        counter++;
                    }
                    for (j = 0; j < 4; j++) {
                        points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints3[j]);
                        counter++;
                    }
                    pts = null;
                    savepoints = null;
                    ptsArrow = null;
                    deltapoints1 = null;
                    deltapoints2 = null;
                    deltapoints3 = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "GetDISMClearDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetDISMClearDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return counter;
            },
            IsSeizeArcReversed: function(pPoints) {
                try {
                    var dAngle1 = Math.atan2(pPoints[0].y - pPoints[1].y, pPoints[0].x - pPoints[1].x);
                    var dDeltaX1 = Math.cos(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4);
                    var dDeltaY1 = Math.sin(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4);
                    var dDeltaX2 = Math.cos(dAngle1 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4);
                    var dDeltaY2 = Math.sin(dAngle1 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4);
                    var dChordLength = Math.sqrt((pPoints[1].x - pPoints[0].x) * (pPoints[1].x - pPoints[0].x) + (pPoints[1].y - pPoints[0].y) * (pPoints[1].y - pPoints[0].y));
                    var dArcRadius = dChordLength / 1.414213562373;
                    var ptArcCenter = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    ptArcCenter.x = pPoints[0].x - dDeltaX1 * dArcRadius;
                    ptArcCenter.y = pPoints[0].y - dDeltaY1 * dArcRadius;
                    var d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(ptArcCenter, pPoints[2]);
                    var ptArcCenterReversed = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    ptArcCenterReversed.x = pPoints[0].x - dDeltaX2 * dArcRadius;
                    ptArcCenterReversed.y = pPoints[0].y - dDeltaY2 * dArcRadius;
                    var dReversed = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(ptArcCenterReversed, pPoints[2]);
                    if (dReversed > d) {
                        return true;
                    } else {
                        return false;
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "IsSeizeArcReversed", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside IsSeizeArcReversed", exc));
                    } else {
                        throw exc;
                    }
                }
                return false;
            },
            GetDISMSeizeDouble: function(points, linetype, radius) {
                var counter = 0;
                try {
                    var ptArcCenter = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var ptArcStart = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var savepoints = new Array(3);
                    var scale = 0.9;
                    var iCircleRadius = (25 * scale);
                    var arcpoints = new Array(17);
                    var pts = new Array(3);
                    var dAngle1 = 0;
                    var dDeltaX1 = 0;
                    var dDeltaY1 = 0;
                    var dDeltaX2 = 0;
                    var dDeltaY2 = 0;
                    var dChordLength = 0;
                    var dArcRadius = 0;
                    var j = 0;
                    var dDeltaX3 = 0;
                    var dDeltaY3 = 0;
                    var iDiagEOL_length = 0;
                    var factor = 1;
                    if (radius > 0)
                        iCircleRadius = radius;
                    for (j = 0; j < 3; j++) {
                        savepoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[j]);
                    }
                    var client = armyc2.c2sd.JavaLineArray.CELineArray.getClient();
                    //if (!client.startsWith("cpof") && radius === 0) 
                    if (!client.substring(0,4).equals("cpof") && radius === 0)
                    {
                        dArcRadius = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(savepoints[0], savepoints[1]);
                        if (iCircleRadius > dArcRadius / 2)
                            iCircleRadius = dArcRadius / 2;
                    }
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pts);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(arcpoints);
                    armyc2.c2sd.JavaLineArray.DISMSupport.ArcApproximationDouble(savepoints[0].x - iCircleRadius, savepoints[0].y - iCircleRadius, savepoints[0].x + iCircleRadius, savepoints[0].y + iCircleRadius, savepoints[0].x, savepoints[0].y, savepoints[0].x, savepoints[0].y, arcpoints);
                    for (j = 0; j < 17; j++) {
                        points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(arcpoints[j]);
                        points[counter].style = 0;
                        counter++;
                    }
                    points[counter - 1].style = 5;
                    dAngle1 = Math.atan2(savepoints[0].y - savepoints[1].y, savepoints[0].x - savepoints[1].x);
                    dDeltaX1 = Math.cos(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4);
                    dDeltaY1 = Math.sin(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4);
                    dDeltaX2 = Math.cos(dAngle1 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4);
                    dDeltaY2 = Math.sin(dAngle1 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4);
                    var isArcReversed = armyc2.c2sd.JavaLineArray.DISMSupport.IsSeizeArcReversed(savepoints);
                    if (isArcReversed === false) {
                        ptArcStart.x = savepoints[0].x - dDeltaX2 * iCircleRadius;
                        ptArcStart.y = savepoints[0].y - dDeltaY2 * iCircleRadius;
                        dChordLength = Math.sqrt((savepoints[1].x - savepoints[0].x) * (savepoints[1].x - savepoints[0].x) + (savepoints[1].y - savepoints[0].y) * (savepoints[1].y - savepoints[0].y));
                        dArcRadius = dChordLength / 1.414213562373;
                        ptArcCenter.x = savepoints[0].x - dDeltaX1 * dArcRadius;
                        ptArcCenter.y = savepoints[0].y - dDeltaY1 * dArcRadius;
                        armyc2.c2sd.JavaLineArray.DISMSupport.ArcApproximationDouble((ptArcCenter.x - dArcRadius), (ptArcCenter.y - dArcRadius), (ptArcCenter.x + dArcRadius), (ptArcCenter.y + dArcRadius), savepoints[1].x, savepoints[1].y, ptArcStart.x, ptArcStart.y, arcpoints);
                    } else {
                        ptArcStart.x = savepoints[0].x - dDeltaX1 * iCircleRadius;
                        ptArcStart.y = savepoints[0].y - dDeltaY1 * iCircleRadius;
                        dChordLength = Math.sqrt((savepoints[1].x - savepoints[0].x) * (savepoints[1].x - savepoints[0].x) + (savepoints[1].y - savepoints[0].y) * (savepoints[1].y - savepoints[0].y));
                        dArcRadius = dChordLength / 1.414213562373;
                        ptArcCenter.x = savepoints[0].x - dDeltaX2 * dArcRadius;
                        ptArcCenter.y = savepoints[0].y - dDeltaY2 * dArcRadius;
                        armyc2.c2sd.JavaLineArray.DISMSupport.ArcApproximationDouble((ptArcCenter.x - dArcRadius), (ptArcCenter.y - dArcRadius), (ptArcCenter.x + dArcRadius), (ptArcCenter.y + dArcRadius), ptArcStart.x, ptArcStart.y, savepoints[1].x, savepoints[1].y, arcpoints);
                    }
                    for (j = 0; j < 17; j++) {
                        points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(arcpoints[j]);
                        points[counter].style = 0;
                        counter++;
                    }
                    points[counter - 1].style = 5;
                    if (dChordLength / 8 > armyc2.c2sd.JavaLineArray.DISMSupport.maxLength) {
                        factor = dChordLength / (8 * armyc2.c2sd.JavaLineArray.DISMSupport.maxLength);
                    }
                    if (factor === 0) {
                        factor = 1;
                    }
                    if (isArcReversed === false) {
                        pts[0].x = savepoints[1].x - (savepoints[1].x - savepoints[0].x) / (8 * factor);
                        pts[0].y = savepoints[1].y - (savepoints[1].y - savepoints[0].y) / (8 * factor);
                        pts[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[1]);
                        dDeltaX3 = Math.cos(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 2);
                        dDeltaY3 = Math.sin(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 2);
                        iDiagEOL_length = (dChordLength / 8);
                        pts[2].x = savepoints[1].x + dDeltaX3 * iDiagEOL_length / factor;
                        pts[2].y = savepoints[1].y + dDeltaY3 * iDiagEOL_length / factor;
                    } else {
                        pts[0].x = savepoints[1].x - (savepoints[1].x - savepoints[0].x) / (8 * factor);
                        pts[0].y = savepoints[1].y - (savepoints[1].y - savepoints[0].y) / (8 * factor);
                        pts[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[1]);
                        dDeltaX3 = Math.cos(dAngle1 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 2);
                        dDeltaY3 = Math.sin(dAngle1 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 2);
                        iDiagEOL_length = (dChordLength / 8);
                        pts[2].x = savepoints[1].x + dDeltaX3 * iDiagEOL_length / factor;
                        pts[2].y = savepoints[1].y + dDeltaY3 * iDiagEOL_length / factor;
                    }
                    for (j = 0; j < 3; j++) {
                        points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[j]);
                        points[counter].style = 0;
                        counter++;
                    }
                    points[counter - 1].style = 5;
                    savepoints = null;
                    arcpoints = null;
                    pts = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "GetDISMSeizeDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetDISMSeizeDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return counter;
            },
            side: function(x1, y1, x2, y2, px, py) {
                var dx1;
                var dx2;
                var dy1;
                var dy2;
                try {
                    var o;
                    dx1 = x2 - x1;
                    dy1 = y2 - y1;
                    dx2 = px - x1;
                    dy2 = py - y1;
                    o = (dx1 * dy2) - (dy1 * dx2);
                    if (o > 0.0) {
                        return (armyc2.c2sd.JavaLineArray.DISMSupport.LEFT_SIDE);
                    }
                    if (o < 0.0) {
                        return (armyc2.c2sd.JavaLineArray.DISMSupport.RIGHT_SIDE);
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "side", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside side", exc));
                    } else {
                        throw exc;
                    }
                }
                return (armyc2.c2sd.JavaLineArray.DISMSupport.COLINEAR);
            },
            GetDISMRIPDouble: function(points, linetype) {
                var counter = 0;
                try {
                    var pts = new Array(2);
                    var savepoints = new Array(4);
                    var j = 0;
                    var iLengthPt0Pt1 = 0;
                    var iDiagEOL_length = 0;
                    var dAngle1 = 0;
                    var iDeltaX1 = 0;
                    var iDeltaY1 = 0;
                    var iDeltaX2 = 0;
                    var iDeltaY2 = 0;
                    var iLengthPt2Pt3 = 0;
                    var iRadius = 0;
                    var deltapoints = new Array(4);
                    var arcpoints = new Array(17);
                    var ptArcCenter = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var clockwise = false;
                    var side01 = armyc2.c2sd.JavaLineArray.DISMSupport.side(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y);
                    var side12 = armyc2.c2sd.JavaLineArray.DISMSupport.side(points[1].x, points[1].y, points[2].x, points[2].y, points[3].x, points[3].y);
                    if (side01 === armyc2.c2sd.JavaLineArray.DISMSupport.RIGHT_SIDE && side12 === armyc2.c2sd.JavaLineArray.DISMSupport.RIGHT_SIDE)
                        clockwise = true;
                    else if (side01 === armyc2.c2sd.JavaLineArray.DISMSupport.RIGHT_SIDE && side12 === armyc2.c2sd.JavaLineArray.DISMSupport.COLINEAR)
                        clockwise = true;
                    else if (side01 === armyc2.c2sd.JavaLineArray.DISMSupport.COLINEAR && side12 === armyc2.c2sd.JavaLineArray.DISMSupport.RIGHT_SIDE)
                        clockwise = true;
                    for (j = 0; j < 4; j++) {
                        savepoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[j]);
                    }
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pts);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(deltapoints);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(arcpoints);
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[1]);
                    points[counter].style = 5;
                    counter++;
                    pts[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[2]);
                    pts[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[3]);
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    pts[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[0]);
                    pts[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[1]);
                    iLengthPt0Pt1 = Math.sqrt((pts[1].x - pts[0].x) * (pts[1].x - pts[0].x) + (pts[1].y - pts[0].y) * (pts[1].y - pts[0].y));
                    iDiagEOL_length = iLengthPt0Pt1 / 8;
                    if (iDiagEOL_length > armyc2.c2sd.JavaLineArray.DISMSupport.maxLength) {
                        iDiagEOL_length = armyc2.c2sd.JavaLineArray.DISMSupport.maxLength;
                    }
                    if (iDiagEOL_length < armyc2.c2sd.JavaLineArray.DISMSupport.minLength) {
                        iDiagEOL_length = armyc2.c2sd.JavaLineArray.DISMSupport.minLength;
                    }
                    dAngle1 = Math.atan2(pts[1].y - pts[0].y, pts[1].x - pts[0].x);
                    iDeltaX1 = (iDiagEOL_length * Math.cos(dAngle1 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4));
                    iDeltaY1 = (iDiagEOL_length * Math.sin(dAngle1 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4));
                    iDeltaX2 = (iDiagEOL_length * Math.cos(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4));
                    iDeltaY2 = (iDiagEOL_length * Math.sin(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4));
                    armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(pts[0], iDeltaX1, iDeltaY1, iDeltaX2, iDeltaY2, deltapoints);
                    for (j = 0; j < 4; j++) {
                        points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints[j]);
                        points[counter].style = 0;
                        counter++;
                    }
                    points[counter - 3].style = 5;
                    points[counter - 1].style = 5;
                    pts[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[2]);
                    pts[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[3]);
                    iLengthPt2Pt3 = Math.sqrt((pts[1].x - pts[0].x) * (pts[1].x - pts[0].x) + (pts[1].y - pts[0].y) * (pts[1].y - pts[0].y));
                    iDiagEOL_length = iLengthPt2Pt3 / 8;
                    if (iDiagEOL_length > armyc2.c2sd.JavaLineArray.DISMSupport.maxLength) {
                        iDiagEOL_length = armyc2.c2sd.JavaLineArray.DISMSupport.maxLength;
                    }
                    if (iDiagEOL_length < armyc2.c2sd.JavaLineArray.DISMSupport.minLength) {
                        iDiagEOL_length = armyc2.c2sd.JavaLineArray.DISMSupport.minLength;
                    }
                    dAngle1 = Math.atan2(pts[1].y - pts[0].y, pts[1].x - pts[0].x);
                    iDeltaX1 = (iDiagEOL_length * Math.cos(dAngle1 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4));
                    iDeltaY1 = (iDiagEOL_length * Math.sin(dAngle1 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4));
                    iDeltaX2 = (iDiagEOL_length * Math.cos(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4));
                    iDeltaY2 = (iDiagEOL_length * Math.sin(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4));
                    armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(pts[0], iDeltaX1, iDeltaY1, iDeltaX2, iDeltaY2, deltapoints);
                    for (j = 0; j < 4; j++) {
                        points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints[j]);
                        points[counter].style = 0;
                        counter++;
                    }
                    points[counter - 3].style = 5;
                    points[counter - 1].style = 5;
                    iRadius = (Math.sqrt((savepoints[2].x - savepoints[1].x) * (savepoints[2].x - savepoints[1].x) + (savepoints[2].y - savepoints[1].y) * (savepoints[2].y - savepoints[1].y)) / 2);
                    ptArcCenter.x = (savepoints[1].x + savepoints[2].x) / 2;
                    ptArcCenter.y = (savepoints[1].y + savepoints[2].y) / 2;
                    if (clockwise === false) {
                        armyc2.c2sd.JavaLineArray.DISMSupport.ArcApproximationDouble((ptArcCenter.x - iRadius), (ptArcCenter.y - iRadius), (ptArcCenter.x + iRadius), (ptArcCenter.y + iRadius), savepoints[2].x, savepoints[2].y, savepoints[1].x, savepoints[1].y, arcpoints);
                    } else {
                        armyc2.c2sd.JavaLineArray.DISMSupport.ArcApproximationDouble((ptArcCenter.x - iRadius), (ptArcCenter.y - iRadius), (ptArcCenter.x + iRadius), (ptArcCenter.y + iRadius), savepoints[1].x, savepoints[1].y, savepoints[2].x, savepoints[2].y, arcpoints);
                    }
                    for (j = 0; j < 17; j++) {
                        points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(arcpoints[j]);
                        points[counter].style = 0;
                        counter++;
                    }
                    points[counter - 1].style = 5;
                    pts = null;
                    savepoints = null;
                    deltapoints = null;
                    arcpoints = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "GetDISMRIPDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetDISMRIPDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return counter;
            },
            GetDISMByDifDouble: function(points, linetype, clipBounds) {
                var counter = 0;
                try {
                    var pointsCorner = new Array(2);
                    var rectpts = new Array(4);
                    var savepoints = new Array(3);
                    var savepoints2 = new Array(2);
                    var deltapoints1 = new Array(4);
                    var deltapoints2 = new Array(4);
                    var pts = new Array(3);
                    var iDeltaX = new armyc2.c2sd.JavaLineArray.ref();
                    var iDeltaY = new armyc2.c2sd.JavaLineArray.ref();
                    var bPointsRight = 0;
                    var dAngle1 = 0;
                    var dLength = 0;
                    var dJaggyHalfAmp = 0;
                    var dJaggyHalfPeriod = 0;
                    var dDeltaXOut = 0;
                    var dDeltaYOut = 0;
                    var dDeltaXAlong = 0;
                    var dDeltaYAlong = 0;
                    var iNumJaggies = 0;
                    var i = 0;
                    var j = 0;
                    for (j = 0; j < 3; j++) {
                        savepoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[j]);
                    }
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pointsCorner);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(rectpts);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pts);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(deltapoints1);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(deltapoints2);
                    armyc2.c2sd.JavaLineArray.DISMSupport.DrawOpenRectangleDouble(savepoints, pointsCorner, rectpts);
                    savepoints2[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(rectpts[1]);
                    savepoints2[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(rectpts[2]);
                    if (clipBounds !== null) {
                        var ul = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(clipBounds.getMinX(), clipBounds.getMinY());
                        var lr = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(clipBounds.getMaxX(), clipBounds.getMaxY());
                        savepoints2 = armyc2.c2sd.JavaLineArray.lineutility.BoundOneSegment(savepoints2[0], savepoints2[1], ul, lr);
                    }
                    var drawJaggies = new Boolean(true);
                    if (savepoints2 === null) {
                        savepoints2 = new Array(2);
                        savepoints2[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(rectpts[1]);
                        savepoints2[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(rectpts[2]);
                        drawJaggies = new Boolean(false);
                    }
                    for (j = 0; j < 4; j++) {
                        points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(rectpts[j]);
                        points[counter].style = 0;
                        counter++;
                    }
                    points[1].style = 5;
                    points[counter - 1].style = 5;
                    dAngle1 = Math.atan2(savepoints2[0].y - savepoints2[1].y, savepoints2[0].x - savepoints2[1].x);
                    dLength = Math.sqrt((savepoints2[1].x - savepoints2[0].x) * (savepoints2[1].x - savepoints2[0].x) + (savepoints2[1].y - savepoints2[0].y) * (savepoints2[1].y - savepoints2[0].y));
                    dJaggyHalfAmp = dLength / 15;
                    if (dJaggyHalfAmp > armyc2.c2sd.JavaLineArray.DISMSupport.maxLength) {
                        dJaggyHalfAmp = armyc2.c2sd.JavaLineArray.DISMSupport.maxLength;
                    }
                    if (dJaggyHalfAmp < armyc2.c2sd.JavaLineArray.DISMSupport.minLength) {
                        dJaggyHalfAmp = armyc2.c2sd.JavaLineArray.DISMSupport.minLength;
                    }
                    dJaggyHalfPeriod = dJaggyHalfAmp / 1.5;
                    dDeltaXOut = Math.cos(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 2) * dJaggyHalfAmp;
                    dDeltaYOut = Math.sin(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 2) * dJaggyHalfAmp;
                    dDeltaXAlong = Math.cos(dAngle1) * dJaggyHalfPeriod;
                    dDeltaYAlong = Math.sin(dAngle1) * dJaggyHalfPeriod;
                    iNumJaggies = Math.floor((dLength / dJaggyHalfPeriod)) - 3;
                    i = 2;
                    pts[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints2[1]);
                    pts[1].x = savepoints2[1].x + dDeltaXAlong * 1.5;
                    pts[1].y = savepoints2[1].y + dDeltaYAlong * 1.5;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    pts[0].x = savepoints2[1].x + dDeltaXOut + dDeltaXAlong * i;
                    pts[0].y = savepoints2[1].y + dDeltaYOut + dDeltaYAlong * i;
                    i++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    if ((drawJaggies).valueOf())
                        while (i <= iNumJaggies) {
                            pts[1].x = savepoints2[1].x - dDeltaXOut + dDeltaXAlong * i;
                            pts[1].y = savepoints2[1].y - dDeltaYOut + dDeltaYAlong * i;
                            i++;
                            pts[2].x = savepoints2[1].x + dDeltaXOut + dDeltaXAlong * i;
                            pts[2].y = savepoints2[1].y + dDeltaYOut + dDeltaYAlong * i;
                            i++;
                            for (j = 0; j < 3; j++) {
                                points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[j]);
                                points[counter].style = 0;
                                counter++;
                            }
                            points[counter - 1].style = 5;
                            pts[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[2]);
                        }
                    pts[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    pts[0].x = savepoints2[1].x + dDeltaXAlong * i;
                    pts[0].y = savepoints2[1].y + dDeltaYAlong * i;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    pts[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints2[0]);
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    bPointsRight = armyc2.c2sd.JavaLineArray.DISMSupport.DetermineDirectionDouble(savepoints);
                    armyc2.c2sd.JavaLineArray.DISMSupport.CalcEndpieceDeltasDouble(savepoints, iDeltaX, iDeltaY, armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4);
                    if ((savepoints[0].y - savepoints[1].y) < 0) {
                        if (bPointsRight !== 0) {
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[0], iDeltaX.value[0], iDeltaY.value[0], iDeltaY.value[0], -iDeltaX.value[0], deltapoints1);
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[1], iDeltaX.value[0], iDeltaY.value[0], iDeltaY.value[0], -iDeltaX.value[0], deltapoints2);
                        } else {
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[0], iDeltaY.value[0], -iDeltaX.value[0], iDeltaX.value[0], iDeltaY.value[0], deltapoints1);
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[1], iDeltaY.value[0], -iDeltaX.value[0], iDeltaX.value[0], iDeltaY.value[0], deltapoints2);
                        }
                    } else {
                        if (bPointsRight !== 0) {
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[0], iDeltaY.value[0], -iDeltaX.value[0], iDeltaX.value[0], iDeltaY.value[0], deltapoints1);
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[1], iDeltaY.value[0], -iDeltaX.value[0], iDeltaX.value[0], iDeltaY.value[0], deltapoints2);
                        } else {
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[0], iDeltaX.value[0], iDeltaY.value[0], iDeltaY.value[0], -iDeltaX.value[0], deltapoints1);
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[1], iDeltaX.value[0], iDeltaY.value[0], iDeltaY.value[0], -iDeltaX.value[0], deltapoints2);
                        }
                    }
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints1[1]);
                    points[counter].style = 9;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints1[0]);
                    points[counter].style = 9;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints1[3]);
                    points[counter].style = 9;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints1[3]);
                    points[counter].style = 10;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints2[1]);
                    points[counter].style = 9;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints2[0]);
                    points[counter].style = 9;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints2[3]);
                    points[counter].style = 9;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints2[3]);
                    points[counter].style = 10;
                    counter++;
                    pointsCorner = null;
                    rectpts = null;
                    savepoints = null;
                    savepoints2 = null;
                    deltapoints1 = null;
                    deltapoints2 = null;
                    pts = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "GetDISMByDifDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetDISMByDifDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return counter;
            },
            GetDISMPenetrateDouble: function(points, linetype) {
                try {
                    var arrowpts = new Array(3);
                    var midpt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var savepoints = new Array(3);
                    var j = 0;
                    var d = 0;
                    for (j = 0; j < 3; j++) {
                        savepoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[j]);
                    }
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(arrowpts);
                    points[0].x = savepoints[0].x;
                    points[0].y = savepoints[0].y;
                    points[0].style = 0;
                    points[1].x = savepoints[1].x;
                    points[1].y = savepoints[1].y;
                    points[1].style = 5;
                    midpt = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(savepoints[0], savepoints[1], 0);
                    points[2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[2]);
                    points[3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(midpt);
                    points[3].style = 5;
                    d = armyc2.c2sd.JavaLineArray.lineutility.MBRDistance(savepoints, 3);
                    if (d / 5 > armyc2.c2sd.JavaLineArray.DISMSupport.maxLength) {
                        d = 5 * armyc2.c2sd.JavaLineArray.DISMSupport.maxLength;
                    }
                    if (d / 5 < armyc2.c2sd.JavaLineArray.DISMSupport.minLength) {
                        d = 5 * armyc2.c2sd.JavaLineArray.DISMSupport.minLength;
                    }
                    var client = armyc2.c2sd.JavaLineArray.CELineArray.getClient();
                    //if (client.matches("cpof3d") || client.matches("cpof2d")) 
                    if (client.equalsIgnoreCase("cpof3d") || client.equalsIgnoreCase("cpof2d")) 
                    {
                        if (d < 400)
                            d = 400;
                    } else {
                        if (d < 150)
                            d = 150;
                    }
                    if (d > 600)
                        d = 600;
                    armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(points[2], points[3], Math.floor(Math.floor(d) / 20), Math.floor(Math.floor(d) / 20), arrowpts, 0);
                    for (j = 0; j < 3; j++) {
                        points[4 + j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(arrowpts[j]);
                    }
                    arrowpts = null;
                    savepoints = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "GetDISMPenetrateDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetDISMPenetrateDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return;
            },
            GetDISMByImpDouble: function(points, linetype) {
                var counter = 0;
                try {
                    var j = 0;
                    var pointsCorner = new Array(2);
                    var rectpts = new Array(4);
                    var savepoints = new Array(3);
                    var deltapoints1 = new Array(4);
                    var deltapoints2 = new Array(4);
                    var midpt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pts = new Array(6);
                    var ptRelative = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var iDeltaX = new armyc2.c2sd.JavaLineArray.ref();
                    var iDeltaY = new armyc2.c2sd.JavaLineArray.ref();
                    var bPointsRight = 0;
                    var dMBR = armyc2.c2sd.JavaLineArray.lineutility.MBRDistance(points, 3);
                    if (dMBR > 40 * armyc2.c2sd.JavaLineArray.DISMSupport.maxLength) {
                        dMBR = 40 * armyc2.c2sd.JavaLineArray.DISMSupport.maxLength;
                    }
                    if (dMBR < 5 * armyc2.c2sd.JavaLineArray.DISMSupport.minLength) {
                        dMBR = 5 * armyc2.c2sd.JavaLineArray.DISMSupport.minLength;
                    }
                    if (dMBR > 250)
                        dMBR = 250;
                    for (j = 0; j < 3; j++) {
                        savepoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[j]);
                    }
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(rectpts);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(deltapoints1);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(deltapoints2);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pts);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pointsCorner);
                    armyc2.c2sd.JavaLineArray.DISMSupport.DrawOpenRectangleDouble(savepoints, pointsCorner, rectpts);
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(rectpts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(rectpts[1]);
                    points[counter].style = 0;
                    counter++;
                    midpt = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(rectpts[1], rectpts[2], 0);
                    pts[0] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(rectpts[1], midpt, -5, 5);
                    pts[1] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(rectpts[1], midpt, 5, 5);
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 5;
                    counter++;
                    ptRelative = armyc2.c2sd.JavaLineArray.lineutility.PointRelativeToLine(rectpts[0], rectpts[1], pts[0]);
                    pts[2] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(ptRelative, pts[0], -dMBR / 40);
                    pts[3] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(ptRelative, pts[0], dMBR / 40);
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[2]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[3]);
                    points[counter].style = 5;
                    counter++;
                    ptRelative = armyc2.c2sd.JavaLineArray.lineutility.PointRelativeToLine(rectpts[2], rectpts[3], pts[1]);
                    pts[4] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(ptRelative, pts[1], -dMBR / 40);
                    pts[5] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(ptRelative, pts[1], dMBR / 40);
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[4]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[5]);
                    points[counter].style = 5;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(rectpts[2]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(rectpts[3]);
                    points[counter].style = 5;
                    counter++;
                    bPointsRight = armyc2.c2sd.JavaLineArray.DISMSupport.DetermineDirectionDouble(savepoints);
                    armyc2.c2sd.JavaLineArray.DISMSupport.CalcEndpieceDeltasDouble(savepoints, iDeltaX, iDeltaY, armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4);
                    if ((savepoints[0].y - savepoints[1].y) < 0) {
                        if (bPointsRight !== 0) {
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[0], iDeltaX.value[0], iDeltaY.value[0], iDeltaY.value[0], -iDeltaX.value[0], deltapoints1);
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[1], iDeltaX.value[0], iDeltaY.value[0], iDeltaY.value[0], -iDeltaX.value[0], deltapoints2);
                        } else {
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[0], iDeltaY.value[0], -iDeltaX.value[0], iDeltaX.value[0], iDeltaY.value[0], deltapoints1);
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[1], iDeltaY.value[0], -iDeltaX.value[0], iDeltaX.value[0], iDeltaY.value[0], deltapoints2);
                        }
                    } else {
                        if (bPointsRight !== 0) {
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[0], iDeltaY.value[0], -iDeltaX.value[0], iDeltaX.value[0], iDeltaY.value[0], deltapoints1);
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[1], iDeltaY.value[0], -iDeltaX.value[0], iDeltaX.value[0], iDeltaY.value[0], deltapoints2);
                        } else {
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[0], iDeltaX.value[0], iDeltaY.value[0], iDeltaY.value[0], -iDeltaX.value[0], deltapoints1);
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[1], iDeltaX.value[0], iDeltaY.value[0], iDeltaY.value[0], -iDeltaX.value[0], deltapoints2);
                        }
                    }
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints1[1]);
                    points[counter].style = 9;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints1[0]);
                    points[counter].style = 9;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints1[3]);
                    points[counter].style = 9;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints1[3]);
                    points[counter].style = 10;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints2[1]);
                    points[counter].style = 9;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints2[0]);
                    points[counter].style = 9;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints2[3]);
                    points[counter].style = 9;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints2[3]);
                    points[counter].style = 10;
                    counter++;
                    pointsCorner = null;
                    rectpts = null;
                    savepoints = null;
                    deltapoints1 = null;
                    deltapoints2 = null;
                    pts = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "GetDISMByImpDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetDISMByImpDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return counter;
            },
            GetDISMSupportByFireDouble: function(points, linetype) {
                var counter = 0;
                try {
                    var pts = new Array(3);
                    var savepoints = new Array(4);
                    var j = 0;
                    var iDiagEOL_length = 0;
                    var dAngle1 = 0;
                    var iDeltaX1 = 0;
                    var iDeltaY1 = 0;
                    var iDeltaX2 = 0;
                    var iDeltaY2 = 0;
                    for (j = 0; j < 4; j++) {
                        savepoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[j]);
                    }
                    armyc2.c2sd.JavaLineArray.DISMSupport.ReorderSptByFirePoints(savepoints);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pts);
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[1]);
                    points[counter].style = 5;
                    counter++;
                    pts[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[0]);
                    pts[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[2]);
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    iDiagEOL_length = (Math.sqrt((savepoints[0].x - savepoints[1].x) * (savepoints[0].x - savepoints[1].x) + (savepoints[0].y - savepoints[1].y) * (savepoints[0].y - savepoints[1].y)) / 10);
                    if (iDiagEOL_length > armyc2.c2sd.JavaLineArray.DISMSupport.maxLength) {
                        iDiagEOL_length = armyc2.c2sd.JavaLineArray.DISMSupport.maxLength;
                    }
                    if (iDiagEOL_length < armyc2.c2sd.JavaLineArray.DISMSupport.minLength) {
                        iDiagEOL_length = armyc2.c2sd.JavaLineArray.DISMSupport.minLength;
                    }
                    dAngle1 = Math.atan2(savepoints[0].y - savepoints[2].y, savepoints[0].x - savepoints[2].x);
                    iDeltaX1 = (Math.cos(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 6) * iDiagEOL_length);
                    iDeltaY1 = (Math.sin(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 6) * iDiagEOL_length);
                    iDeltaX2 = (Math.cos(dAngle1 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 6) * iDiagEOL_length);
                    iDeltaY2 = (Math.sin(dAngle1 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 6) * iDiagEOL_length);
                    pts[0].x = savepoints[2].x + iDeltaX1;
                    pts[0].y = savepoints[2].y + iDeltaY1;
                    pts[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[2]);
                    pts[2].x = savepoints[2].x + iDeltaX2;
                    pts[2].y = savepoints[2].y + iDeltaY2;
                    for (j = 0; j < 3; j++) {
                        points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[j]);
                        points[counter].style = 0;
                        counter++;
                    }
                    points[counter - 1].style = 5;
                    pts[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[1]);
                    pts[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[3]);
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    dAngle1 = Math.atan2(savepoints[1].y - savepoints[3].y, savepoints[1].x - savepoints[3].x);
                    iDeltaX1 = (Math.cos(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 6) * iDiagEOL_length);
                    iDeltaY1 = (Math.sin(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 6) * iDiagEOL_length);
                    iDeltaX2 = (Math.cos(dAngle1 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 6) * iDiagEOL_length);
                    iDeltaY2 = (Math.sin(dAngle1 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 6) * iDiagEOL_length);
                    pts[0].x = savepoints[3].x + iDeltaX1;
                    pts[0].y = savepoints[3].y + iDeltaY1;
                    pts[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[3]);
                    pts[2].x = savepoints[3].x + iDeltaX2;
                    pts[2].y = savepoints[3].y + iDeltaY2;
                    for (j = 0; j < 3; j++) {
                        points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[j]);
                        points[counter].style = 0;
                        counter++;
                    }
                    points[counter - 1].style = 5;
                    dAngle1 = Math.atan2(savepoints[1].y - savepoints[0].y, savepoints[1].x - savepoints[0].x);
                    iDiagEOL_length *= 2;
                    iDeltaX1 = (Math.cos(dAngle1 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4) * iDiagEOL_length);
                    iDeltaY1 = (Math.sin(dAngle1 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4) * iDiagEOL_length);
                    iDeltaX2 = (Math.cos(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4) * iDiagEOL_length);
                    iDeltaY2 = (Math.sin(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4) * iDiagEOL_length);
                    pts[0].x = savepoints[0].x - iDeltaX1;
                    pts[0].y = savepoints[0].y - iDeltaY1;
                    pts[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[0]);
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    pts[0].x = savepoints[1].x + iDeltaX2;
                    pts[0].y = savepoints[1].y + iDeltaY2;
                    pts[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[1]);
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    pts = null;
                    savepoints = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "GetDISMSupportbyFireDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetDISMSupportByFireDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return counter;
            },
            ReorderAtkByFirePoints: function(points) {
                try {
                    var savepoints = new Array(3);
                    var ptAboveLine = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var ptBelowLine = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var ptLeftOfLine = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var ptRightOfLine = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var distToLine = 0;
                    var distanceToPointAboveLine = 0;
                    var distanceToPointBelowLine = 0;
                    var distanceToPointLeftOfLine = 0;
                    var distanceToPointRightOfLine = 0;
                    for (var j = 0; j < 3; j++) {
                        savepoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[j]);
                    }
                    if (Math.abs(savepoints[1].x - savepoints[2].x) > 2) {
                        distToLine = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceToLineDouble(savepoints[1], savepoints[2], savepoints[0]);
                        ptAboveLine = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(savepoints[1], savepoints[2], savepoints[2], 2, distToLine);
                        ptBelowLine = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(savepoints[1], savepoints[2], savepoints[2], 3, distToLine);
                        distanceToPointAboveLine = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(savepoints[0], ptAboveLine);
                        distanceToPointBelowLine = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(savepoints[0], ptBelowLine);
                        if (distanceToPointAboveLine < distanceToPointBelowLine) {
                            if (savepoints[2].x < savepoints[1].x) {
                                armyc2.c2sd.JavaLineArray.lineutility.Reverse2Points(savepoints[1], savepoints[2]);
                            }
                        } else {
                            if (savepoints[2].x > savepoints[1].x) {
                                armyc2.c2sd.JavaLineArray.lineutility.Reverse2Points(savepoints[1], savepoints[2]);
                            }
                        }
                    } else {
                        distToLine = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceToLineDouble(savepoints[1], savepoints[2], savepoints[0]);
                        ptLeftOfLine = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(savepoints[1], savepoints[2], savepoints[2], 0, distToLine);
                        ptRightOfLine = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(savepoints[1], savepoints[2], savepoints[2], 1, distToLine);
                        distanceToPointLeftOfLine = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(savepoints[0], ptLeftOfLine);
                        distanceToPointRightOfLine = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(savepoints[0], ptRightOfLine);
                        if (distanceToPointRightOfLine < distanceToPointLeftOfLine) {
                            if (savepoints[2].y < savepoints[1].y) {
                                armyc2.c2sd.JavaLineArray.lineutility.Reverse2Points(savepoints[1], savepoints[2]);
                            }
                        } else {
                            if (savepoints[2].y > savepoints[1].y) {
                                armyc2.c2sd.JavaLineArray.lineutility.Reverse2Points(savepoints[1], savepoints[2]);
                            }
                        }
                    }
                    points[1].x = savepoints[1].x;
                    points[1].y = savepoints[1].y;
                    points[2].x = savepoints[2].x;
                    points[2].y = savepoints[2].y;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "ReorderAtkByFirePoints", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetDISMSupportByFireDouble", exc));
                    } else {
                        throw exc;
                    }
                }
            },
            ReorderSptByFirePoints: function(points) {
                try {
                    var ptAboveLine = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var ptBelowLine = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var ptLeftOfLine = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var ptRightOfLine = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var distToLine = 0;
                    var distanceToPointAboveLine = 0;
                    var distanceToPointBelowLine = 0;
                    var distanceToPointLeftOfLine = 0;
                    var distanceToPointRightOfLine = 0;
                    var midpt = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(points[0], points[1], 0);
                    if (Math.abs(points[2].x - points[3].x) > 2) {
                        distToLine = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceToLineDouble(points[1], points[2], midpt);
                        ptAboveLine = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(points[1], points[2], points[2], 2, distToLine);
                        ptBelowLine = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(points[1], points[2], points[2], 3, distToLine);
                        distanceToPointAboveLine = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(points[0], ptAboveLine);
                        distanceToPointBelowLine = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(points[0], ptBelowLine);
                        if (distanceToPointAboveLine < distanceToPointBelowLine) {
                            if (points[2].x < points[1].x) {
                                armyc2.c2sd.JavaLineArray.lineutility.Reverse2Points(points[0], points[1]);
                                armyc2.c2sd.JavaLineArray.lineutility.Reverse2Points(points[2], points[3]);
                            }
                        } else {
                            if (points[2].x > points[1].x) {
                                armyc2.c2sd.JavaLineArray.lineutility.Reverse2Points(points[0], points[1]);
                                armyc2.c2sd.JavaLineArray.lineutility.Reverse2Points(points[2], points[3]);
                            }
                        }
                    } else {
                        distToLine = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceToLineDouble(points[1], points[2], midpt);
                        ptLeftOfLine = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(points[1], points[2], points[2], 0, distToLine);
                        ptRightOfLine = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(points[1], points[2], points[2], 1, distToLine);
                        distanceToPointLeftOfLine = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(points[0], ptLeftOfLine);
                        distanceToPointRightOfLine = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(points[0], ptRightOfLine);
                        if (distanceToPointLeftOfLine < distanceToPointRightOfLine) {
                            if (points[2].y > points[1].y) {
                                armyc2.c2sd.JavaLineArray.lineutility.Reverse2Points(points[0], points[1]);
                                armyc2.c2sd.JavaLineArray.lineutility.Reverse2Points(points[2], points[3]);
                            }
                        } else {
                            if (points[2].y < points[1].y) {
                                armyc2.c2sd.JavaLineArray.lineutility.Reverse2Points(points[0], points[1]);
                                armyc2.c2sd.JavaLineArray.lineutility.Reverse2Points(points[2], points[3]);
                            }
                        }
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "ReorderSptByFire", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ReorderSptByFirePoints", exc));
                    } else {
                        throw exc;
                    }
                }
            },
            GetDISMATKBYFIREDouble: function(points, linetype) {
                var counter = 0;
                try {
                    var pts = new Array(3);
                    var ptMid = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var savepoints = new Array(3);
                    var j = 0;
                    var iDiagEOL_length = 0;
                    var dAngle1 = 0;
                    var iDeltaX1 = 0;
                    var iDeltaY1 = 0;
                    var iDeltaX2 = 0;
                    var iDeltaY2 = 0;
                    for (j = 0; j < 3; j++) {
                        savepoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[j]);
                    }
                    armyc2.c2sd.JavaLineArray.DISMSupport.ReorderAtkByFirePoints(savepoints);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pts);
                    pts[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[1]);
                    pts[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[2]);
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    ptMid.x = (savepoints[1].x + savepoints[2].x) / 2;
                    ptMid.y = (savepoints[1].y + savepoints[2].y) / 2;
                    pts[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptMid);
                    pts[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[0]);
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    iDiagEOL_length = ((Math.sqrt((savepoints[1].x - savepoints[2].x) * (savepoints[1].x - savepoints[2].x) + (savepoints[1].y - savepoints[2].y) * (savepoints[1].y - savepoints[2].y)) + Math.sqrt((savepoints[0].x - ptMid.x) * (savepoints[0].x - ptMid.x) + (savepoints[0].y - ptMid.y) * (savepoints[0].y - ptMid.y))) / 20);
                    if (iDiagEOL_length > armyc2.c2sd.JavaLineArray.DISMSupport.maxLength / 5) {
                        iDiagEOL_length = armyc2.c2sd.JavaLineArray.DISMSupport.maxLength / 5;
                    }
                    if (iDiagEOL_length < armyc2.c2sd.JavaLineArray.DISMSupport.minLength) {
                        iDiagEOL_length = armyc2.c2sd.JavaLineArray.DISMSupport.minLength;
                    }
                    dAngle1 = Math.atan2(ptMid.y - savepoints[0].y, ptMid.x - savepoints[0].x);
                    iDeltaX1 = (Math.cos(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 6) * iDiagEOL_length);
                    iDeltaY1 = (Math.sin(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 6) * iDiagEOL_length);
                    iDeltaX2 = (Math.cos(dAngle1 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 6) * iDiagEOL_length);
                    iDeltaY2 = (Math.sin(dAngle1 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 6) * iDiagEOL_length);
                    pts[0].x = savepoints[0].x + iDeltaX1;
                    pts[0].y = savepoints[0].y + iDeltaY1;
                    pts[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[0]);
                    pts[2].x = savepoints[0].x + iDeltaX2;
                    pts[2].y = savepoints[0].y + iDeltaY2;
                    for (j = 0; j < 3; j++) {
                        points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[j]);
                        points[counter].style = 0;
                        counter++;
                    }
                    points[counter - 1].style = 5;
                    dAngle1 = Math.atan2(savepoints[1].y - savepoints[2].y, savepoints[1].x - savepoints[2].x);
                    iDeltaX1 = (Math.cos(dAngle1 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4) * iDiagEOL_length * 2);
                    iDeltaY1 = (Math.sin(dAngle1 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4) * iDiagEOL_length * 2);
                    iDeltaX2 = (Math.cos(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4) * iDiagEOL_length * 2);
                    iDeltaY2 = (Math.sin(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4) * iDiagEOL_length * 2);
                    pts[0].x = savepoints[1].x + iDeltaX1;
                    pts[0].y = savepoints[1].y + iDeltaY1;
                    pts[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[1]);
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    pts[0].x = savepoints[2].x - iDeltaX2;
                    pts[0].y = savepoints[2].y - iDeltaY2;
                    pts[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[2]);
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    pts = null;
                    savepoints = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "GetDISMAtkByFireDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetDISMAtkByFireDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return counter;
            },
            GetDISMGapDouble: function(points, linetype) {
                try {
                    var savepoints = new Array(4);
                    var pts = new Array(2);
                    var j = 0;
                    var dMBR = armyc2.c2sd.JavaLineArray.lineutility.MBRDistance(points, 4);
                    for (j = 0; j < 4; j++) {
                        savepoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[j]);
                    }
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pts);
                    if (dMBR / 10 > armyc2.c2sd.JavaLineArray.DISMSupport.maxLength) {
                        dMBR = 10 * armyc2.c2sd.JavaLineArray.DISMSupport.maxLength;
                    }
                    if (dMBR / 10 < armyc2.c2sd.JavaLineArray.DISMSupport.minLength) {
                        dMBR = 10 * armyc2.c2sd.JavaLineArray.DISMSupport.minLength;
                    }
                    points[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[0]);
                    points[0].style = 0;
                    points[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[1]);
                    points[1].style = 5;
                    points[2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[2]);
                    points[2].style = 0;
                    points[3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[3]);
                    points[3].style = 5;
                    var dist = dMBR / 10;
                    if (dist > 20)
                        dist = 20;
                    var dist2 = dist;
                    switch (linetype) {
                        case 23222000:
                            dist = 1.5 * dist;
                            dist2 = dist / 2;
                            break;
                        default:
                            dist2 = dist;
                            break;
                    }
                    pts[0] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(savepoints[1], savepoints[0], dist);
                    pts[1] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(savepoints[2], savepoints[0], dist2);
                    points[4] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[0]);
                    points[4].style = 0;
                    points[5] = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pts[0], pts[1], 5);
                    pts[0] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(savepoints[0], savepoints[1], dist);
                    pts[1] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(savepoints[3], savepoints[1], dist2);
                    points[6] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[1]);
                    points[6].style = 0;
                    points[7] = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pts[0], pts[1], 5);
                    pts[0] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(savepoints[0], savepoints[2], dist2);
                    pts[1] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(savepoints[3], savepoints[2], dist);
                    points[8] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[2]);
                    points[8].style = 0;
                    points[9] = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pts[0], pts[1], 5);
                    pts[0] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(savepoints[1], savepoints[3], dist2);
                    pts[1] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(savepoints[2], savepoints[3], dist);
                    points[10] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[3]);
                    points[10].style = 0;
                    points[11] = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pts[0], pts[1], 5);
                    pts = null;
                    savepoints = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "GetDISMGapDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetDISMGapDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return 12;
            },
            GetDISMMinefieldDisruptDouble: function(points, linetype) {
                var counter = 0;
                try {
                    var pts = new Array(2);
                    var ptsArrow = new Array(3);
                    var ptCenter = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var j = 0;
                    var savepoints = new Array(3);
                    var dAngle1 = 0;
                    var d = 0;
                    var dist = 0;
                    var deltapoints1 = new Array(4);
                    var deltapoints2 = new Array(4);
                    var deltapoints3 = new Array(4);
                    var iDiagEOL_length = 0;
                    var iDeltaX1 = 0;
                    var iDeltaY1 = 0;
                    var iDeltaX2 = 0;
                    var iDeltaY2 = 0;
                    var ptTail = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    for (j = 0; j < 3; j++) {
                        savepoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[j]);
                    }
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(ptsArrow);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(deltapoints1);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(deltapoints2);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(deltapoints3);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pts);
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[1]);
                    points[counter].style = 5;
                    counter++;
                    ptCenter.x = (savepoints[0].x + savepoints[1].x) / 2;
                    ptCenter.y = (savepoints[0].y + savepoints[1].y) / 2;
                    ptsArrow[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[2]);
                    ptsArrow[1].x = ptCenter.x + (savepoints[2].x - savepoints[0].x) * 4 / 5;
                    ptsArrow[1].y = ptCenter.y + (savepoints[2].y - savepoints[0].y) * 4 / 5;
                    ptsArrow[2].x = savepoints[1].x + (savepoints[2].x - savepoints[0].x) * 3 / 5;
                    ptsArrow[2].y = savepoints[1].y + (savepoints[2].y - savepoints[0].y) * 3 / 5;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[1]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptsArrow[2]);
                    points[counter].style = 5;
                    counter++;
                    pts[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptsArrow[1]);
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptCenter);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(savepoints[2], savepoints[0]);
                    d = dist;
                    if (d > 5 * armyc2.c2sd.JavaLineArray.DISMSupport.maxLength) {
                        d = 5 * armyc2.c2sd.JavaLineArray.DISMSupport.maxLength;
                    }
                    if (d < 5 * armyc2.c2sd.JavaLineArray.DISMSupport.minLength) {
                        d = 5 * armyc2.c2sd.JavaLineArray.DISMSupport.minLength;
                    }
                    ptTail.x = (savepoints[0].x + ptCenter.x) / 2;
                    ptTail.y = (savepoints[0].y + ptCenter.y) / 2;
                    pts[0].x = ptTail.x - (savepoints[2].x - savepoints[0].x) / 5;
                    pts[0].y = ptTail.y - (savepoints[2].y - savepoints[0].y) / 5;
                    pts[0] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pts[0], ptTail, -d / 5);
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptTail);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 5;
                    counter++;
                    pts[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[0]);
                    pts[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptsArrow[0]);
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    points[counter].style = 0;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    points[counter].style = 5;
                    counter++;
                    iDiagEOL_length = ((Math.sqrt((savepoints[1].x - savepoints[0].x) * (savepoints[1].x - savepoints[0].x) + (savepoints[1].y - savepoints[0].y) * (savepoints[1].y - savepoints[0].y)) + Math.sqrt((savepoints[2].x - savepoints[1].x) * (savepoints[2].x - savepoints[1].x) + (savepoints[2].y - savepoints[1].y) * (savepoints[2].y - savepoints[1].y))) / 15);
                    if (iDiagEOL_length > armyc2.c2sd.JavaLineArray.DISMSupport.maxLength) {
                        iDiagEOL_length = armyc2.c2sd.JavaLineArray.DISMSupport.maxLength;
                    }
                    if (iDiagEOL_length < armyc2.c2sd.JavaLineArray.DISMSupport.minLength) {
                        iDiagEOL_length = armyc2.c2sd.JavaLineArray.DISMSupport.minLength;
                    }
                    dAngle1 = Math.atan2(savepoints[0].y - savepoints[2].y, savepoints[0].x - savepoints[2].x);
                    iDeltaX1 = (iDiagEOL_length * Math.cos(dAngle1 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 6));
                    iDeltaY1 = (iDiagEOL_length * Math.sin(dAngle1 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 6));
                    iDeltaX2 = (iDiagEOL_length * Math.cos(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 6));
                    iDeltaY2 = (iDiagEOL_length * Math.sin(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 6));
                    armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(ptsArrow[0], iDeltaX1, iDeltaY1, iDeltaX2, iDeltaY2, deltapoints1);
                    armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(ptsArrow[1], iDeltaX1, iDeltaY1, iDeltaX2, iDeltaY2, deltapoints2);
                    armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(ptsArrow[2], iDeltaX1, iDeltaY1, iDeltaX2, iDeltaY2, deltapoints3);
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints1[1]);
                    points[counter].style = 9;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints1[0]);
                    points[counter].style = 9;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints1[3]);
                    points[counter].style = 9;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints1[3]);
                    points[counter].style = 10;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints2[1]);
                    points[counter].style = 9;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints2[0]);
                    points[counter].style = 9;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints2[3]);
                    points[counter].style = 9;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints2[3]);
                    points[counter].style = 10;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints3[1]);
                    points[counter].style = 9;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints3[0]);
                    points[counter].style = 9;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints3[3]);
                    points[counter].style = 9;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints3[3]);
                    points[counter].style = 10;
                    counter++;
                    pts = null;
                    ptsArrow = null;
                    savepoints = null;
                    deltapoints1 = null;
                    deltapoints2 = null;
                    deltapoints3 = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "GetDISMMinefieldDisruptDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetDISMMinefieldDisruptDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return counter;
            },
            GetDISMLinearTargetDouble: function(points, linetype, vblCounter) {
                var counter = 0;
                try {
                    var j = 0;
                    var dMBR = armyc2.c2sd.JavaLineArray.lineutility.MBRDistance(points, vblCounter - 4);
                    if (dMBR / 20 > armyc2.c2sd.JavaLineArray.DISMSupport.maxLength) {
                        dMBR = 20 * armyc2.c2sd.JavaLineArray.DISMSupport.maxLength;
                    }
                    if (dMBR / 20 < armyc2.c2sd.JavaLineArray.DISMSupport.minLength) {
                        dMBR = 20 * armyc2.c2sd.JavaLineArray.DISMSupport.minLength;
                    }
                    if (dMBR < 150) {
                        dMBR = 150;
                    }
                    if (dMBR > 250)
                        dMBR = 250;
                    for (j = 0; j < vblCounter - 4; j++) {
                        points[counter].style = 0;
                        counter++;
                    }
                    points[counter - 1].style = 5;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendTrueLinePerpDouble(points[0], points[1], points[0], dMBR / 20, 0);
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendTrueLinePerpDouble(points[0], points[1], points[0], -dMBR / 20, 5);
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendTrueLinePerpDouble(points[vblCounter - 5], points[vblCounter - 6], points[vblCounter - 5], dMBR / 20, 0);
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendTrueLinePerpDouble(points[vblCounter - 5], points[vblCounter - 6], points[vblCounter - 5], -dMBR / 20, 5);
                    counter++;
                    if (linetype === 24260000) {
                        points[0].style = 6;
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "GetDISMLinearTargetDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetDISMLinearTargetDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return counter;
            },
            GetDISMBlockDouble2: function(points, linetype) {
                try {
                    var ptRelative = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[2]);
                    var midpt = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(points[0], points[1], 0);
                    var j = 0;
                    points[0].style = 0;
                    points[1].style = 5;
                    points[2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(midpt);
                    points[3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptRelative);
                    if (linetype === 21100000) {
                        points[2].style = 14;
                    }
                    if (linetype === 24260000) {
                        points[2].style = 6;
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "GetDISMBlockDouble2", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetDISMBlockDouble2", exc));
                    } else {
                        throw exc;
                    }
                }
                return;
            },
            GetDISMPAADouble: function(points, linetype) {
                try {
                    var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[0]);
                    var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(points[1]);
                    var pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt3 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var midpt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
                    midpt = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt0, pt1, 0);
                    pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendTrueLinePerpDouble(pt0, pt1, midpt, d / 2, 0);
                    pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendTrueLinePerpDouble(pt0, pt1, midpt, -d / 2, 0);
                    d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt2);
                    points[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                    points[0].style = 14;
                    points[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2);
                    points[1].style = 14;
                    points[2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                    points[2].style = 14;
                    points[3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt3);
                    points[3].style = 14;
                    points[4] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt0);
                    points[4].style = 5;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "GetDISMPAADouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetDISMPAADouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return;
            },
            ReverseDelayArc: function(points) 
            {
                var pt1 = points[0];
                var pt2 = points[1];
                var pt3 = points[2];

                var lineAngle = this.getAngleBetweenPoints(pt1.x, pt1.y, pt2.x, pt2.y);
                var curveAngle = this.getAngleBetweenPoints(pt2.x, pt2.y, pt3.x, pt3.y);

                var upperBound = curveAngle + 180;
                return !this.isInRange(curveAngle, upperBound, lineAngle);
            },
            isInRange: function(min, max, targetAngle) 
            {
                targetAngle = this.normalizeAngle(targetAngle);
                min = this.normalizeAngle(min);
                max = this.normalizeAngle(max);
        
                if (min < max) {
                    return min <= targetAngle && targetAngle <= max;
                }
                return min <= targetAngle || targetAngle <= max;
        
            },
            getAngleBetweenPoints: function(x1, y1, x2, y2) 
            {
                var radians = (Math.atan2(y2 - y1, x2 - x1));
                return radians * (180/Math.PI);
            },
        
            /**
             * Returns an angle from 0 to 360
             *
             * @param angle the angle to normalize
             * @return an angle in range from 0 to 360
             */
            normalizeAngle: function(angle) 
            {
                return (3600000 + angle) % 360;
            },
            DrawEndpieceDeltasDouble: function(point, iDelta1, iDelta2, iDelta3, iDelta4, deltapoints) {
                try {
                    deltapoints[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(point);
                    deltapoints[0].style = 0;
                    deltapoints[1].x = point.x + iDelta1;
                    deltapoints[1].y = point.y + iDelta2;
                    deltapoints[1].style = 5;
                    deltapoints[2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(point);
                    deltapoints[2].style = 0;
                    deltapoints[3].x = point.x + iDelta3;
                    deltapoints[3].y = point.y + iDelta4;
                    deltapoints[3].style = 5;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "DrawEndpieceDeltasDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside DrawEndpieceDeltasDouble", exc));
                    } else {
                        throw exc;
                    }
                }
            },
            GetDISMEasyDouble: function(points, linetype) {
                var counter = 0;
                try {
                    var j = 0;
                    var pointsCorner = new Array(2);
                    var rectpts = new Array(4);
                    var savepoints = new Array(3);
                    var deltapoints1 = new Array(4);
                    var deltapoints2 = new Array(4);
                    var iDeltaX = new armyc2.c2sd.JavaLineArray.ref();
                    var iDeltaY = new armyc2.c2sd.JavaLineArray.ref();
                    var bPointsRight = 0;
                    for (j = 0; j < 3; j++) {
                        savepoints[j] = points[j];
                    }
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pointsCorner);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(rectpts);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(deltapoints1);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(deltapoints2);
                    armyc2.c2sd.JavaLineArray.DISMSupport.DrawOpenRectangleDouble(savepoints, pointsCorner, rectpts);
                    for (j = 0; j < 4; j++) {
                        points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(rectpts[j]);
                        points[counter].style = 0;
                        counter++;
                    }
                    points[counter - 1].style = 5;
                    bPointsRight = armyc2.c2sd.JavaLineArray.DISMSupport.DetermineDirectionDouble(savepoints);
                    armyc2.c2sd.JavaLineArray.DISMSupport.CalcEndpieceDeltasDouble(savepoints, iDeltaX, iDeltaY, armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 4);
                    if ((savepoints[0].y - savepoints[1].y) < 0) {
                        if (bPointsRight !== 0) {
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[0], iDeltaX.value[0], iDeltaY.value[0], iDeltaY.value[0], -iDeltaX.value[0], deltapoints1);
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[1], iDeltaX.value[0], iDeltaY.value[0], iDeltaY.value[0], -iDeltaX.value[0], deltapoints2);
                        } else {
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[0], iDeltaY.value[0], -iDeltaX.value[0], iDeltaX.value[0], iDeltaY.value[0], deltapoints1);
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[1], iDeltaY.value[0], -iDeltaX.value[0], iDeltaX.value[0], iDeltaY.value[0], deltapoints2);
                        }
                    } else {
                        if (bPointsRight !== 0) {
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[0], iDeltaY.value[0], -iDeltaX.value[0], iDeltaX.value[0], iDeltaY.value[0], deltapoints1);
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[1], iDeltaY.value[0], -iDeltaX.value[0], iDeltaX.value[0], iDeltaY.value[0], deltapoints2);
                        } else {
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[0], iDeltaX.value[0], iDeltaY.value[0], iDeltaY.value[0], -iDeltaX.value[0], deltapoints1);
                            armyc2.c2sd.JavaLineArray.DISMSupport.DrawEndpieceDeltasDouble(savepoints[1], iDeltaX.value[0], iDeltaY.value[0], iDeltaY.value[0], -iDeltaX.value[0], deltapoints2);
                        }
                    }
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints1[1]);
                    points[counter].style = 9;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints1[0]);
                    points[counter].style = 9;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints1[3]);
                    points[counter].style = 9;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints1[3]);
                    points[counter].style = 10;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints2[1]);
                    points[counter].style = 9;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints2[0]);
                    points[counter].style = 9;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints2[3]);
                    points[counter].style = 9;
                    counter++;
                    points[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(deltapoints2[3]);
                    points[counter].style = 10;
                    counter++;
                    pointsCorner = null;
                    rectpts = null;
                    savepoints = null;
                    deltapoints1 = null;
                    deltapoints2 = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "GetDISMEasyDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetDISMEasyDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return counter;
            },
            AmbushPointsDouble: function(pLinePoints) {
                var counter = 0;
                try {
                    var pts = new Array(3);
                    var savepoints = new Array(3);
                    var ptMid = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var dRadius = 0;
                    var d = 0;
                    var dAngle1 = 0;
                    var dAngle1c = 0;
                    var dAngle2c = 0;
                    var dAngle12c = 0;
                    var dAngle0 = 0;
                    var arcpoints = new Array(17);
                    var dAngleTic = 0;
                    var dDeltaX1 = 0;
                    var dDeltaY1 = 0;
                    var dDeltaX2 = 0;
                    var dDeltaY2 = 0;
                    var ptCenter = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var j = 0;
                    var i = 0;
                    var iArrowLength = 0;
                    for (j = 0; j < 3; j++) {
                        savepoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j]);
                    }
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(arcpoints);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pts);
                    ptMid.x = (savepoints[1].x + savepoints[2].x) / 2;
                    ptMid.y = (savepoints[1].y + savepoints[2].y) / 2;
                    dRadius = Math.sqrt((ptMid.x - savepoints[2].x) * (ptMid.x - savepoints[2].x) + (ptMid.y - savepoints[2].y) * (ptMid.y - savepoints[2].y));
                    var dRadius2 = Math.sqrt((ptMid.x - savepoints[1].x) * (ptMid.x - savepoints[1].x) + (ptMid.y - savepoints[1].y) * (ptMid.y - savepoints[1].y));
                    dAngle1 = Math.atan2(savepoints[1].y - savepoints[2].y, savepoints[1].x - savepoints[2].x);
                    ptCenter.x = ptMid.x + Math.cos(dAngle1 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 2) * dRadius;
                    ptCenter.y = ptMid.y + Math.sin(dAngle1 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 2) * dRadius;
                    var dAngle2 = Math.atan2(savepoints[2].y - savepoints[1].y, savepoints[2].x - savepoints[1].x);
                    var ptCenter2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    ptCenter2.x = ptMid.x + Math.cos(dAngle2 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 2) * dRadius;
                    ptCenter2.y = ptMid.y + Math.sin(dAngle2 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 2) * dRadius;
                    var dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(savepoints[0], ptCenter);
                    var dist2 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(savepoints[0], ptCenter2);
                    if (dist2 > dist) {
                        var ptTemp = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[1]);
                        savepoints[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[2]);
                        savepoints[2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptTemp);
                        ptCenter = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ptCenter2);
                        dAngle1 = dAngle2;
                    }
                    dRadius = Math.sqrt((savepoints[1].x - ptCenter.x) * (savepoints[1].x - ptCenter.x) + (savepoints[1].y - ptCenter.y) * (savepoints[1].y - ptCenter.y));
                    armyc2.c2sd.JavaLineArray.DISMSupport.ArcApproximationDouble((ptCenter.x - dRadius), (ptCenter.y - dRadius), (ptCenter.x + dRadius), (ptCenter.y + dRadius), savepoints[2].x, savepoints[2].y, savepoints[1].x, savepoints[1].y, arcpoints);
                    for (j = 0; j < 17; j++) {
                        pLinePoints[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(arcpoints[j]);
                        pLinePoints[counter].style = 0;
                        counter++;
                    }
                    pLinePoints[counter - 1].style = 5;
                    pts[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(savepoints[0]);
                    dAngle1c = Math.atan2(ptCenter.y - savepoints[1].y, ptCenter.x - savepoints[1].x);
                    dAngle2c = Math.atan2(ptCenter.y - savepoints[2].y, ptCenter.x - savepoints[2].x);
                    dAngle12c = (dAngle1c + dAngle2c) / 2;
                    if ((dAngle1c > 0) && (dAngle2c < 0)) {
                        pts[1].x = ptCenter.x + Math.cos(dAngle12c) * dRadius;
                        pts[1].y = ptCenter.y + Math.sin(dAngle12c) * dRadius;
                    } else {
                        pts[1].x = ptCenter.x - Math.cos(dAngle12c) * dRadius;
                        pts[1].y = ptCenter.y - Math.sin(dAngle12c) * dRadius;
                    }
                    pLinePoints[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                    pLinePoints[counter].style = 0;
                    counter++;
                    pLinePoints[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                    pLinePoints[counter].style = 5;
                    counter++;
                    dAngle0 = Math.atan2(pts[1].y - savepoints[0].y, pts[1].x - savepoints[0].x);
                    iArrowLength = ((Math.sqrt((savepoints[1].x - savepoints[2].x) * (savepoints[1].x - savepoints[2].x) + (savepoints[1].y - savepoints[2].y) * (savepoints[1].y - savepoints[2].y)) + Math.sqrt((savepoints[0].x - ptMid.x) * (savepoints[0].x - ptMid.x) + (savepoints[0].y - ptMid.y) * (savepoints[0].y - ptMid.y))) / 20);
                    if (iArrowLength > armyc2.c2sd.JavaLineArray.DISMSupport.maxLength)
                        iArrowLength = Math.floor(armyc2.c2sd.JavaLineArray.DISMSupport.maxLength);
                    if (iArrowLength < armyc2.c2sd.JavaLineArray.DISMSupport.minLength)
                        iArrowLength = Math.floor(armyc2.c2sd.JavaLineArray.DISMSupport.minLength);
                    pts[0].x = savepoints[0].x + Math.cos(dAngle0 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 6) * iArrowLength;
                    pts[0].y = savepoints[0].y + Math.sin(dAngle0 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 6) * iArrowLength;
                    pts[1] = savepoints[0];
                    pts[2].x = savepoints[0].x + Math.cos(dAngle0 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 6) * iArrowLength;
                    pts[2].y = savepoints[0].y + Math.sin(dAngle0 - armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 6) * iArrowLength;
                    for (j = 0; j < 3; j++) {
                        pLinePoints[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[j]);
                        pLinePoints[counter].style = 0;
                        counter++;
                    }
                    pLinePoints[counter - 1].style = 5;
                    d = dRadius / 3;
                    if (d > armyc2.c2sd.JavaLineArray.DISMSupport.maxLength)
                        d = armyc2.c2sd.JavaLineArray.DISMSupport.maxLength;
                    if (d < armyc2.c2sd.JavaLineArray.DISMSupport.minLength)
                        d = armyc2.c2sd.JavaLineArray.DISMSupport.minLength;
                    dAngleTic = armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 18;
                    dDeltaX2 = Math.cos(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 2) * d;
                    dDeltaY2 = Math.sin(dAngle1 + armyc2.c2sd.JavaLineArray.DISMSupport.CONST_PI / 2) * d;
                    for (i = 0; i < 8; i++) {
                        dAngle1c += dAngleTic;
                        dDeltaX1 = Math.cos(dAngle1c) * dRadius;
                        dDeltaY1 = Math.sin(dAngle1c) * dRadius;
                        pts[0].x = ptCenter.x - dDeltaX1;
                        pts[0].y = ptCenter.y - dDeltaY1;
                        pLinePoints[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[0]);
                        pLinePoints[counter].style = 0;
                        counter++;
                        pts[1].x = pts[0].x - dDeltaX2;
                        pts[1].y = pts[0].y - dDeltaY2;
                        pLinePoints[counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pts[1]);
                        pLinePoints[counter].style = 5;
                        counter++;
                    }
                    pts = null;
                    savepoints = null;
                    arcpoints = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.DISMSupport._className, "AmbushPointsDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside AmbushPointsDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return counter;
            },
            LEFT_SIDE: 0,
            RIGHT_SIDE: 1,
            COLINEAR: 2,
            CONST_PI: 3.141592653589793,
            maxLength: 100,
            minLength: 2.5, //was 2.5
            _className: "DISMSupport"
        };

