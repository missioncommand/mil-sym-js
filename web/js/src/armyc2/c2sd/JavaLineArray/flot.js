var armyc2=armyc2 || {};
armyc2.c2sd=armyc2.c2sd || {};
armyc2.c2sd.JavaLineArray=armyc2.c2sd.JavaLineArray || {};

armyc2.c2sd.JavaLineArray.flot=
{
    GetAnchorageFlotSegment: function (vbPoints, x1, y1, x2, y2, segment, points, bFlip, lDirection, lLastDirection) {
        var lSegCounter = 0;
        try {
            var j = 0;
            var dDistance = 0;
            var nNumSegs = 0;
            var m = 0;
            var lLocx = 0;
            var lLocy = 0;
            var dAngle = 0;
            var arcPoints =  Clazz.newArray (30, 0);
            var dRemainder = 0;
            var dNum = 0;
            var dDen = 0;
            if (segment === 0 && vbPoints[0] >= vbPoints[2]) {
                bFlip.value[0] = 1;
            }if (segment === 0 && vbPoints[0] < vbPoints[2]) {
                bFlip.value[0] = 0;
            }dNum = vbPoints[2 * segment + 3] - vbPoints[2 * segment + 1];
            dDen = vbPoints[2 * segment + 2] - vbPoints[2 * segment];
            if (dDen === 0) {
                dAngle = 1.5707963267948966;
            } else {
                dAngle = Math.abs (Math.atan (dNum / dDen));
            }dAngle = (57.29577951308232) * dAngle;
            if (vbPoints[2 * segment + 0] <= vbPoints[2 * segment + 2] && vbPoints[2 * segment + 1] >= vbPoints[2 * segment + 3]) {
                dAngle = 90 - dAngle;
            } else if (vbPoints[2 * segment + 0] <= vbPoints[2 * segment + 2] && vbPoints[2 * segment + 1] <= vbPoints[2 * segment + 3]) {
                dAngle = dAngle + 90;
            } else if (vbPoints[2 * segment + 0] >= vbPoints[2 * segment + 2] && vbPoints[2 * segment + 1] <= vbPoints[2 * segment + 3]) {
                dAngle = 270 - dAngle;
            } else if (vbPoints[2 * segment + 0] >= vbPoints[2 * segment + 2] && vbPoints[2 * segment + 1] >= vbPoints[2 * segment + 3]) {
                dAngle = 270 + dAngle;
            }dDistance = armyc2.c2sd.JavaLineArray.lineutility.CalcDistance2 (x1, y1, x2, y2);
            nNumSegs = Math.floor ((dDistance / 20));
            if (nNumSegs % 2 === 0) {
                nNumSegs -= 1;
            }dRemainder = nNumSegs * 20 - dDistance;
            dDistance = dDistance + dRemainder;
            if (vbPoints[2 * segment] >= vbPoints[2 * segment + 2]) {
                dAngle = dAngle + 90;
                lDirection.value[0] = 1;
            } else {
                dAngle = dAngle - 90;
                lDirection.value[0] = 0;
            }if (segment > 0 && lDirection.value[0] !== lLastDirection.value[0]) {
                if (bFlip.value[0] === 1) {
                    bFlip.value[0] = 0;
                } else {
                    bFlip.value[0] = 1;
                }}if (bFlip.value[0] === 1) {
                dAngle = dAngle + 180;
            }for (m = 0; m < nNumSegs; m += 2) {
                lLocx = Math.floor ((x1 + (m + 0.5) * (x2 - x1) * 20 / dDistance));
                lLocy = Math.floor ((y1 + (m + 0.5) * (y2 - y1) * 20 / dDistance));
                armyc2.c2sd.JavaLineArray.flot.CalcAnglePoints (lLocx, lLocy, dAngle, arcPoints, dDistance / (nNumSegs * 2));
                for (j = 0; j < 30; j++) {
                    points[lSegCounter] = arcPoints[j];
                    lSegCounter++;
                }
            }
            lLastDirection.value[0] = lDirection.value[0];
            arcPoints = null;
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException (armyc2.c2sd.JavaLineArray.flot._className, "GetAnchorageFlotSegment",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside GetAnchorageFlotSegment", exc));
            } else {
                throw exc;
            }
        }
        return lSegCounter;
    },
    GetAnchorageCountDouble: function (vbPoints, numPts) {
        var lTotalpts = 0;
        try {
            var j = 0;
            var lNumSegs = 0;
            var dDistance = 0;
            var vbPoints2 = null;
            vbPoints2 =  new Array (numPts);
            for (j = 0; j < numPts; j++) {
                vbPoints2[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (vbPoints[j]);
            }
            for (j = 0; j < numPts - 1; j++) {
                dDistance = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (vbPoints2[j], vbPoints2[j + 1]);
                lNumSegs = Math.floor ((dDistance / 20));
                if (lNumSegs > 0) {
                    lTotalpts += lNumSegs * 12;
                } else {
                    lTotalpts += 1;
                }}
            lTotalpts += 1;
            vbPoints2 = null;
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException (armyc2.c2sd.JavaLineArray.flot._className, "GetAnchorageCountDouble",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside GetAnchorageCountDouble", exc));
            } else {
                throw exc;
            }
        }
        return (lTotalpts);
    },
    GetFlotCount2Double: function (vbPoints, numPts, lineType) {
        var lTotalpts = 0;
        try {
            var j = 0;
            var lNumSegs = 0;
            var dDistance = 0;
            var dIncrement = 0;
            var nFactor = 10;
            switch (lineType) {
                case 31132000:
                case 31132100:
                    dIncrement = 40;
                    break;
                case 31132200:
                    dIncrement = 60;
                    nFactor = 17;
                    break;
                case 31132300:
                    dIncrement = 60;
                    nFactor = 20;
                    break;
                default:
                    dIncrement = 20;
                    break;
            }
            for (j = 0; j < numPts - 1; j++) {
                dDistance = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (vbPoints[j], vbPoints[j + 1]);
                lNumSegs = Math.floor ((dDistance / dIncrement));
                lTotalpts = lTotalpts + lNumSegs * nFactor;
                switch (lineType) {
                    case 31132200:
                    case 31132300:
                        if (lNumSegs === 0) {
                            lTotalpts += 2;
                        }break;
                    default:
                        break;
                }
            }
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException (armyc2.c2sd.JavaLineArray.flot._className, "GetFlotCount2Double",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside GetFlotCount2Double", exc));
            } else {
                throw exc;
            }
        }
        return lTotalpts;
    },
    GetFlot2Double: function (vbPoints2, numPts, lineType) {
        var lFlotCounter = 0;
        try {
            var j = 0;
            var k = 0;
            var l = 0;
            var x1 = 0;
            var y1 = 0;
            var x2 = 0;
            var y2 = 0;
            var z2 = 0;
            var numSegPts = -1;
            var z = 0;
            var lFlotCount = 0;
            var lNumSegs = 0;
            var dDistance = 0;
            var vbPoints = null;
            var points = null;
            var dIncrement = 0;
            var style10Points = null;
            var style10Counter = 0;
            var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 ();
            var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 ();
            var pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 ();
            var crossPt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 ();
            var crossPt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 ();
            var bFlip =  new armyc2.c2sd.JavaLineArray.ref ();
            var lDirection =  new armyc2.c2sd.JavaLineArray.ref ();
            var lLastDirection =  new armyc2.c2sd.JavaLineArray.ref ();
            bFlip.value =  Clazz.newArray (1, 0);
            lDirection.value =  Clazz.newArray (1, 0);
            lLastDirection.value =  Clazz.newArray (1, 0);
            bFlip.value[0] = -1;
            lDirection.value[0] = -1;
            lLastDirection.value[0] = -1;
            lFlotCount = armyc2.c2sd.JavaLineArray.flot.GetFlotCount2Double (vbPoints2, numPts, lineType);
            if (lFlotCount <= 0) {
                return 0;
            }style10Points =  new Array (lFlotCount);
            armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array (style10Points);
            vbPoints =  Clazz.newArray (2 * numPts, 0);
            switch (lineType) {
                case 31132000:
                case 31132100:
                    dIncrement = 40;
                    break;
                case 31132200:
                case 31132300:
                    dIncrement = 60;
                    break;
                default:
                    dIncrement = 20;
                    break;
            }
            for (j = 0; j < numPts; j++) {
                vbPoints[k] = Math.floor (vbPoints2[j].x);
                k++;
                vbPoints[k] = Math.floor (vbPoints2[j].y);
                k++;
            }
            k = 0;
            j = 0;
            for (l = 0; l < numPts - 1; l++) {
                dDistance = armyc2.c2sd.JavaLineArray.lineutility.CalcDistance2 (vbPoints[2 * l], vbPoints[2 * l + 1], vbPoints[2 * l + 2], vbPoints[2 * l + 3]);
                lNumSegs = Math.floor ((dDistance / dIncrement));
                if (lNumSegs > 0) {
                    points =  Clazz.newArray (lNumSegs * 30, 0);
                    numSegPts = armyc2.c2sd.JavaLineArray.flot.GetFlotSegment2 (vbPoints, l, points, lineType, bFlip, lDirection, lLastDirection);
                    for (j = 0; j < numSegPts; j++) {
                        x1 = points[k];
                        y1 = points[k + 1];
                        z = points[k + 2];
                        pt0.x = x1;
                        pt0.y = y1;
                        pt0.style = z;
                        if (j < numSegPts - 1) {
                            x2 = points[k + 3];
                            y2 = points[k + 4];
                            z2 = points[k + 5];
                            pt1.x = x2;
                            pt1.y = y2;
                            pt1.style = z2;
                        }k += 3;
                        if (lFlotCounter < lFlotCount) {
                            vbPoints2[lFlotCounter].x = x1;
                            vbPoints2[lFlotCounter].y = y1;
                            switch (lineType) {
                                case 31132000:
                                case 31132200:
                                case 31132300:
                                    if ((lFlotCounter + 1) % 10 === 0) {
                                        vbPoints2[lFlotCounter].style = 10;
                                        if (j < numSegPts - 1) {
                                            style10Points[style10Counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (vbPoints2[lFlotCounter]);
                                            style10Points[style10Counter].style = 0;
                                            style10Counter++;
                                            if (j < numSegPts - 2) {
                                                if (lineType === 31132200) {
                                                    pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (style10Points[style10Counter - 1]);
                                                    style10Points[style10Counter++] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pt2, pt1, 10, 5);
                                                    style10Points[style10Counter++] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pt2, pt1, 20, 20);
                                                    style10Points[style10Counter++] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pt2, pt1, 30, 0);
                                                    style10Points[style10Counter++] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pt2, pt1, 70, 5);
                                                }if (lineType === 31132300) {
                                                    pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (style10Points[style10Counter - 1]);
                                                    style10Points[style10Counter++] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pt2, pt1, 10, 5);
                                                    style10Points[style10Counter++] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pt2, pt1, 15, 0);
                                                    crossPt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine (style10Points[style10Counter - 1], pt1, style10Points[style10Counter - 1], 3, 5, 0);
                                                    style10Points[style10Counter++] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pt2, pt1, 25, 5);
                                                    crossPt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine (style10Points[style10Counter - 1], pt1, style10Points[style10Counter - 1], 2, 5, 5);
                                                    style10Points[style10Counter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (crossPt1);
                                                    style10Points[style10Counter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (crossPt2);
                                                    style10Points[style10Counter++] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pt2, pt1, 30, 0);
                                                    style10Points[style10Counter++] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pt2, pt1, 60, 5);
                                                }}} else {
                                            pt2.x = vbPoints[2 * l];
                                            pt2.y = vbPoints[2 * l + 1];
                                            pt2.style = 0;
                                            style10Points[style10Counter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pt2);
                                            style10Points[style10Counter++] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pt2, pt1, 40, 5);
                                            pt2.x = vbPoints[2 * l + 2];
                                            pt2.y = vbPoints[2 * l + 3];
                                            pt2.style = 5;
                                            style10Points[style10Counter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (vbPoints2[lFlotCounter]);
                                            style10Points[style10Counter++].style = 0;
                                            style10Points[style10Counter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pt2);
                                        }} else {
                                        vbPoints2[lFlotCounter].style = 9;
                                    }break;
                                default:
                                    vbPoints2[lFlotCounter].style = 0;
                                    break;
                            }
                            lFlotCounter++;
                        }}
                    switch (lineType) {
                        case 31132000:
                        case 31132200:
                        case 31132300:
                            vbPoints2[lFlotCounter - 1].style = 10;
                            break;
                        default:
                            vbPoints2[lFlotCounter - 1].style = 5;
                            break;
                    }
                    k = 0;
                    points = null;
                } else {
                    style10Points[style10Counter].x = vbPoints[2 * l];
                    style10Points[style10Counter].y = vbPoints[2 * l + 1];
                    style10Points[style10Counter++].style = 0;
                    style10Points[style10Counter].x = vbPoints[2 * l + 2];
                    style10Points[style10Counter].y = vbPoints[2 * l + 3];
                    style10Points[style10Counter++].style = 5;
                }}
            switch (lineType) {
                case 31132200:
                case 31132300:
                    break;
                default:
                    vbPoints = null;
                    return lFlotCounter;
            }
            for (j = 0; j < style10Counter; j++) {
                vbPoints2[lFlotCounter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (style10Points[j]);
            }
            vbPoints = null;
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException (armyc2.c2sd.JavaLineArray.flot._className, "GetFlot2Double",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside GetFlot2Double", exc));
            } else {
                throw exc;
            }
        }
        return lFlotCounter;
    },
    GetFlotSegment2 : function (vbPoints, segment, points, lineType, bFlip, lDirection, lLastDirection) {
        var nNumSegs = 0;
        try {
            var j = 0;
            var dDistance = 0;
            var m = 0;
            var lLocx = 0;
            var lLocy = 0;
            var lSegCounter = 0;
            var dAngle = 0;
            var arcpoints =  Clazz.newArray (30, 0);
            var dRemainder = 0;
            var dNum = 0;
            var dDen = 0;
            var dIncrement = 0;
            switch (lineType) {
                case 31132000:
                case 31132100:
                    dIncrement = 40;
                    break;
                case 31132200:
                case 31132300:
                    dIncrement = 60;
                    break;
                case 31133000:
                case 31133100:
                    dIncrement = 50;
                    break;
                case 31134000:
                    dIncrement = 50;
                    break;
                case 31134100:
                case 31134200:
                case 31134300:
                    dIncrement = 80;
                    break;
                case 31133200:
                    dIncrement = 80;
                    break;
                default:
                    dIncrement = 20;
                    break;
            }
            lSegCounter = 0;
            if (segment === 0 && vbPoints[0] >= vbPoints[2]) {
                if (lineType !== 31134000 && lineType !== 31134100 && lineType !== 31134200 && lineType !== 31134300) {
                    bFlip.value[0] = 1;
                } else {
                    bFlip.value[0] = 0;
                }}if (segment === 0 && vbPoints[0] < vbPoints[2]) {
                if (lineType !== 31134000 && lineType !== 31134100 && lineType !== 31134200 && lineType !== 31134300) {
                    bFlip.value[0] = 0;
                } else {
                    bFlip.value[0] = 1;
                }}dNum = vbPoints[2 * segment + 3] - vbPoints[2 * segment + 1];
            dDen = vbPoints[2 * segment + 2] - vbPoints[2 * segment];
            if (dDen === 0) {
                dAngle = 1.5707963267948966;
            } else {
                dAngle = Math.abs (Math.atan (dNum / dDen));
            }dAngle = (57.29577951308232) * dAngle;
            if (vbPoints[2 * segment + 0] <= vbPoints[2 * segment + 2] && vbPoints[2 * segment + 1] >= vbPoints[2 * segment + 3]) {
                dAngle = 90 - dAngle;
            } else if (vbPoints[2 * segment + 0] <= vbPoints[2 * segment + 2] && vbPoints[2 * segment + 1] <= vbPoints[2 * segment + 3]) {
                dAngle = dAngle + 90;
            } else if (vbPoints[2 * segment + 0] >= vbPoints[2 * segment + 2] && vbPoints[2 * segment + 1] <= vbPoints[2 * segment + 3]) {
                dAngle = 270 - dAngle;
            } else if (vbPoints[2 * segment + 0] >= vbPoints[2 * segment + 2] && vbPoints[2 * segment + 1] >= vbPoints[2 * segment + 3]) {
                dAngle = 270 + dAngle;
            }dDistance = armyc2.c2sd.JavaLineArray.lineutility.CalcDistance2 (vbPoints[2 * segment], vbPoints[2 * segment + 1], vbPoints[2 * segment + 2], vbPoints[2 * segment + 3]);
            nNumSegs = Math.floor ((dDistance / dIncrement));
            dRemainder = nNumSegs * dIncrement - dDistance;
            dDistance = dDistance + dRemainder;
            if (vbPoints[2 * segment] >= vbPoints[2 * segment + 2]) {
                dAngle = dAngle + 90;
                lDirection.value[0] = 1;
            } else {
                dAngle = dAngle - 90;
                lDirection.value[0] = 0;
            }if (segment > 0 && lDirection.value[0] !== lLastDirection.value[0]) {
                if (bFlip.value[0] === 1) {
                    bFlip.value[0] = 0;
                } else {
                    bFlip.value[0] = 1;
                }}if (bFlip.value[0] === 1) {
                dAngle = dAngle + 180;
            }for (m = 0; m < nNumSegs; m++) {
                lLocx = Math.floor ((vbPoints[2 * segment] + (m + 0.5) * (vbPoints[2 * segment + 2] - vbPoints[2 * segment]) * dIncrement / dDistance));
                lLocy = Math.floor ((vbPoints[2 * segment + 1] + (m + 0.5) * (vbPoints[2 * segment + 3] - vbPoints[2 * segment + 1]) * dIncrement / dDistance));
                armyc2.c2sd.JavaLineArray.flot.CalcAnglePoints (lLocx, lLocy, dAngle, arcpoints, 10);
                for (j = 0; j < 30; j++) {
                    points[lSegCounter] = arcpoints[j];
                    lSegCounter = lSegCounter + 1;
                }
            }
            lLastDirection.value[0] = lDirection.value[0];
            arcpoints = null;
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException (armyc2.c2sd.JavaLineArray.flot._className, "GetFlotSegment2",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside GetFlotSegment2", exc));
            } else {
                throw exc;
            }
        }
        return nNumSegs * 10;
    },
    GetOFYCountDouble: function (pLinePoints, numPts, lineType) {
        var lTotalpts = 0;
        try {
            var j = 0;
            var lNumSegs = 0;
            var lNumFlots = 0;
            var lNumSpikes = 0;
            var dDistance = 0;
            var nFactor = 3;
            var interval = 50;
            if (lineType === 31133200) {
                interval = 80;
                nFactor = 7;
            }for (j = 0; j < numPts - 1; j++) {
                dDistance = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pLinePoints[j], pLinePoints[j + 1]);
                lNumSegs = Math.floor ((dDistance / interval));
                lNumFlots = lNumSegs;
                lNumSpikes = lNumSegs;
                if (lNumFlots < 1) {
                    lNumFlots = 1;
                }if (lNumSpikes < 1) {
                    lNumSpikes = 1;
                }lTotalpts += lNumFlots * 18;
                lTotalpts += lNumSpikes * nFactor;
            }
            if (lTotalpts < (nFactor + 15) * numPts) {
                lTotalpts = 25 * numPts;
            }} catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException (armyc2.c2sd.JavaLineArray.flot._className, "GetOFYCountDoulbe",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside GetOFYCountDouble", exc));
            } else {
                throw exc;
            }
        }
        return lTotalpts;
    },
    GetOccludedPointsDouble: function (pLinePoints, numPts, lineType) {
        var nTotalCounter = 0;
        try {
            var j = 0;
            var k = 0;
            var lNumSegs = 0;
            var l = 0;
            var lNumFlots = 0;
            var lNumSpikes = 0;
            var dDistance = 0;
            var m =  new armyc2.c2sd.JavaLineArray.ref ();
            var lTotalPoints = 0;
            var points = null;
            var pSpikePoints = null;
            var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 ();
            var tempPoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 ();
            var pFlotPoints = null;
            var dSpikeSize = 20;
            var dIncrement = 50;
            var vbPoints = null;
            var nFlotCounter = 0;
            var nSpikeCounter = 0;
            var flots = null;
            var sumOfFlots = 0;
            var segmentLength = 0;
            var spikeLength = 0;
            var bolTooLong = 0;
            var d1 = 0;
            var d2 = 0;
            var bolVertical = 0;
            var bFlip =  new armyc2.c2sd.JavaLineArray.ref ();
            var lDirection =  new armyc2.c2sd.JavaLineArray.ref ();
            var lLastDirection =  new armyc2.c2sd.JavaLineArray.ref ();
            m.value =  Clazz.newArray (1, 0);
            bFlip.value =  Clazz.newArray (1, 0);
            lDirection.value =  Clazz.newArray (1, 0);
            lLastDirection.value =  Clazz.newArray (1, 0);
            bFlip.value[0] = -1;
            lDirection.value[0] = -1;
            lLastDirection.value[0] = -1;
            lTotalPoints = armyc2.c2sd.JavaLineArray.flot.GetOccludedCountDouble (pLinePoints, numPts);
            vbPoints =  Clazz.newArray (numPts * 2, 0);
            pSpikePoints =  new Array (Math.floor (3 * lTotalPoints / 13));
            pFlotPoints =  new Array (Math.floor (10 * lTotalPoints / 13));
            for (j = 0; j < pSpikePoints.length; j++) {
                pSpikePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[0]);
                pSpikePoints[j].style = 5;
            }
            for (j = 0; j < pFlotPoints.length; j++) {
                pFlotPoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[0]);
                pFlotPoints[j].style = 5;
            }
            flots =  Clazz.newArray (numPts + 1, 0);
            for (j = 0; j < numPts; j++) {
                vbPoints[k] = Math.floor (pLinePoints[j].x);
                k++;
                vbPoints[k] = Math.floor (pLinePoints[j].y);
                k++;
            }
            k = 0;
            flots[0] = 0;
            for (j = 0; j < numPts; j++) {
                flots[j + 1] = 0;
            }
            for (j = 0; j < numPts - 1; j++) {
                bolVertical = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble (pLinePoints[j], pLinePoints[j + 1], m);
                m.value[0] = -m.value[0];
                dDistance = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pLinePoints[j], pLinePoints[j + 1]);
                lNumSegs = Math.floor ((dDistance / dIncrement));
                lNumFlots = lNumSegs;
                lNumSpikes = lNumSegs;
                flots[j + 1] = lNumSegs;
                k = 0;
                if (lNumFlots > 0) {
                    points =  Clazz.newArray (lNumFlots * 30, 0);
                    armyc2.c2sd.JavaLineArray.flot.GetFlotSegment2 (vbPoints, j, points, lineType, bFlip, lDirection, lLastDirection);
                    for (l = 0; l < lNumFlots * 10; l++) {
                        pFlotPoints[nFlotCounter].x = points[k];
                        pFlotPoints[nFlotCounter].y = points[k + 1];
                        pFlotPoints[nFlotCounter].style = 9;
                        if ((nFlotCounter) % 10 === 0) {
                            d1 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pLinePoints[j], pFlotPoints[nFlotCounter]);
                            d2 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pLinePoints[j + 1], pFlotPoints[nFlotCounter]);
                            if (d2 > d1) {
                                pFlotPoints[nFlotCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble (pLinePoints[j + 1], pLinePoints[j], -d1);
                            } else {
                                pFlotPoints[nFlotCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble (pLinePoints[j], pLinePoints[j + 1], -d2);
                            }pFlotPoints[nFlotCounter].style = 9;
                            if (lineType === 31133100) {
                                pFlotPoints[nFlotCounter].style = 0;
                            }}if ((nFlotCounter + 1) % 10 === 0) {
                            if (lineType === 31133000 || lineType === 31133100) {
                                d1 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pLinePoints[j], pFlotPoints[nFlotCounter - 9]);
                                d2 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pLinePoints[j + 1], pFlotPoints[nFlotCounter - 9]);
                                if (d2 > d1) {
                                    pFlotPoints[nFlotCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble (pLinePoints[j + 1], pLinePoints[j], -d1 - 20);
                                } else {
                                    pFlotPoints[nFlotCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble (pLinePoints[j], pLinePoints[j + 1], -d2 + 20);
                                }if (lineType === 31133000) {
                                    pFlotPoints[nFlotCounter].style = 10;
                                }if (lineType === 31133100) {
                                    pFlotPoints[nFlotCounter].style = 5;
                                }}if (lineType === 31134000) {
                                pFlotPoints[nFlotCounter].style = 23;
                            }}k += 3;
                        nFlotCounter++;
                    }
                    points = null;
                }segmentLength = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pLinePoints[j], pLinePoints[j + 1]);
                for (k = 0; k < lNumSpikes - 1; k++) {
                    bolTooLong = 0;
                    sumOfFlots = 0;
                    for (l = 0; l <= j; l++) {
                        sumOfFlots += flots[l];
                    }
                    d1 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pLinePoints[j], pFlotPoints[sumOfFlots * 10 + 10 * k]);
                    d2 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pLinePoints[j + 1], pFlotPoints[sumOfFlots * 10 + 10 * k]);
                    switch (lineType) {
                        case 31133000:
                        case 31133100:
                            if (d2 > d1) {
                                tempPoint = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double (pLinePoints[j + 1], pLinePoints[j], -d1 - dIncrement / 2, 0);
                            } else {
                                tempPoint = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double (pLinePoints[j], pLinePoints[j + 1], -d2 + dIncrement / 2, 0);
                            }break;
                        case 31134000:
                            if (d2 > d1) {
                                tempPoint = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double (pLinePoints[j + 1], pLinePoints[j], -d1 - dIncrement / 8, 0);
                            } else {
                                tempPoint = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double (pLinePoints[j], pLinePoints[j + 1], -d2 + dIncrement / 8, 0);
                            }break;
                        default:
                            break;
                    }
                    spikeLength = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pLinePoints[j], tempPoint);
                    if (spikeLength + dSpikeSize < segmentLength) {
                        pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (tempPoint);
                    } else {
                        pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[j + 1]);
                        bolTooLong = 1;
                    }pSpikePoints[nSpikeCounter].style = 9;
                    nSpikeCounter++;
                    d1 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pLinePoints[j], pSpikePoints[nSpikeCounter - 1]);
                    d2 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pLinePoints[j + 1], pSpikePoints[nSpikeCounter - 1]);
                    if (d1 > d2) {
                        pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble (pLinePoints[j], pSpikePoints[nSpikeCounter - 1], dSpikeSize / 2);
                    } else {
                        pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble (pLinePoints[j + 1], pSpikePoints[nSpikeCounter - 1], -dSpikeSize / 2);
                    }if (bolTooLong === 0) {
                        if (bolVertical !== 0) {
                            if (pLinePoints[j].x < pLinePoints[j + 1].x) {
                                pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine (pLinePoints[j], pLinePoints[j + 1], pt0, 2, dSpikeSize);
                            } else {
                                pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine (pLinePoints[j], pLinePoints[j + 1], pt0, 3, dSpikeSize);
                            }pSpikePoints[nSpikeCounter].style = 0;
                            nSpikeCounter++;
                        } else {
                            if (pLinePoints[j].y > pLinePoints[j + 1].y) {
                                pSpikePoints[nSpikeCounter].x = pt0.x - dSpikeSize;
                            } else {
                                pSpikePoints[nSpikeCounter].x = pt0.x + dSpikeSize;
                            }pSpikePoints[nSpikeCounter].y = pt0.y;
                            nSpikeCounter++;
                        }} else {
                        pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[j + 1]);
                        nSpikeCounter++;
                    }pSpikePoints[nSpikeCounter - 1].style = 9;
                    if (bolTooLong === 0) {
                        d1 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pLinePoints[j], pSpikePoints[nSpikeCounter - 2]);
                        d2 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pLinePoints[j + 1], pSpikePoints[nSpikeCounter - 2]);
                        if (d1 > d2) {
                            pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double (pLinePoints[j], pSpikePoints[nSpikeCounter - 2], dSpikeSize, 0);
                        } else {
                            pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double (pLinePoints[j + 1], pSpikePoints[nSpikeCounter - 2], -dSpikeSize, 0);
                        }if (lineType === 31133000) {
                            pSpikePoints[nSpikeCounter].style = 10;
                        }if (lineType === 31133100) {
                            pSpikePoints[nSpikeCounter].style = 5;
                        }if (lineType === 31134000) {
                            pSpikePoints[nSpikeCounter].style = 24;
                        }} else {
                        pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[j + 1]);
                        pSpikePoints[nSpikeCounter].style = 5;
                    }nSpikeCounter++;
                }
                if (nSpikeCounter === 0) {
                    pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[j]);
                    pSpikePoints[nSpikeCounter].style = 5;
                    nSpikeCounter++;
                    pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[j + 1]);
                    pSpikePoints[nSpikeCounter].style = 5;
                    nSpikeCounter++;
                    pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[j + 1]);
                    pSpikePoints[nSpikeCounter].style = 5;
                    nSpikeCounter++;
                } else {
                    pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pSpikePoints[nSpikeCounter - 1]);
                    pSpikePoints[nSpikeCounter].style = 5;
                    pSpikePoints[nSpikeCounter + 1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pSpikePoints[nSpikeCounter - 1]);
                    pSpikePoints[nSpikeCounter + 1].style = 5;
                    pSpikePoints[nSpikeCounter + 2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pSpikePoints[nSpikeCounter - 1]);
                    pSpikePoints[nSpikeCounter + 2].style = 5;
                    nSpikeCounter += 3;
                }}
            for (j = 0; j < pLinePoints.length; j++) {
                pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pSpikePoints[0]);
                pLinePoints[j].style = 5;
            }
            nFlotCounter = 0;
            nSpikeCounter = 0;
            for (j = 0; j < Math.floor (lTotalPoints / 13); j++) {
                for (k = 0; k < 10; k++) {
                    pLinePoints[nTotalCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pFlotPoints[j * 10 + k]);
                    nTotalCounter++;
                    nFlotCounter++;
                }
                for (k = 0; k < 3; k++) {
                    pLinePoints[nTotalCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pSpikePoints[j * 3 + k]);
                    nTotalCounter++;
                    nSpikeCounter++;
                }
            }
            for (j = nTotalCounter; j < pLinePoints.length; j++) {
                pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[nTotalCounter - 1]);
            }
            vbPoints = null;
            pSpikePoints = null;
            pFlotPoints = null;
            flots = null;
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException (armyc2.c2sd.JavaLineArray.flot._className, "GetOccludedPointsDouble",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside GetOccludedPointsDouble", exc));
            } else {
                throw exc;
            }
        }
        return nTotalCounter;
    },
    GetOccludedCountDouble: function (pLinePoints, numPts) {
        var lTotalpts = 0;
        try {
            var j = 0;
            var lNumSegs = 0;
            var lNumFlots = 0;
            var lNumSpikes = 0;
            var dDistance = 0;
            for (j = 0; j < numPts - 1; j++) {
                dDistance = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pLinePoints[j], pLinePoints[j + 1]);
                lNumSegs = Math.floor ((dDistance / 50));
                lNumFlots = lNumSegs;
                lNumSpikes = lNumSegs;
                if (lNumFlots < 1) {
                    lNumFlots = 1;
                }if (lNumSpikes < 1) {
                    lNumSpikes = 1;
                }lTotalpts += lNumFlots * 10;
                lTotalpts += lNumSpikes * 3;
            }
            if (lTotalpts < 13 * numPts) {
                lTotalpts = 13 * numPts;
            }if (lTotalpts < numPts) {
                lTotalpts = numPts;
            }} catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException (armyc2.c2sd.JavaLineArray.flot._className, "GetOccludedCountDouble",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside GetOccludedCountDouble", exc));
            } else {
                throw exc;
            }
        }
        return lTotalpts;
    },
    CalcNewPoint : function (locx, locY, angle, point, dist) {
        try {
            var m = 0;
            var deltaX = 0;
            var deltaY = 0;
            var dx = 0;
            var dy = 0;
            var nQuadrant = -1;
            if (angle < 0) {
                angle = angle + 360;
            }if (angle > 360) {
                angle = angle - 360;
            }if (0 <= angle && angle <= 90) {
                nQuadrant = 0;
                angle = 90 - angle;
                angle = Math.abs (angle) * (0.017453292519943295);
            }if (90 < angle && angle <= 180) {
                nQuadrant = 1;
                angle = angle - 90;
                angle = Math.abs (angle) * (0.017453292519943295);
            }if (180 < angle && angle <= 270) {
                nQuadrant = 2;
                angle = 270 - angle;
                angle = Math.abs (angle) * (0.017453292519943295);
            }if (270 < angle && angle <= 360) {
                nQuadrant = 3;
                angle = angle - 270;
                angle = Math.abs (angle) * (0.017453292519943295);
            }m = Math.abs (Math.tan (angle));
            deltaX = Math.abs (dist / Math.sqrt (1 + m * m));
            deltaY = Math.abs (m * deltaX);
            switch (nQuadrant) {
                case 0:
                    dx = locx + deltaX;
                    dy = locY - deltaY;
                    break;
                case 1:
                    dx = locx + deltaX;
                    dy = locY + deltaY;
                    break;
                case 2:
                    dx = locx - deltaX;
                    dy = locY + deltaY;
                    break;
                case 3:
                    dx = locx - deltaX;
                    dy = locY - deltaY;
                    break;
                default:
                    break;
            }
            point[0] = Math.floor (dx);
            point[1] = Math.floor (dy);
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException (armyc2.c2sd.JavaLineArray.flot._className, "CalcNewPoint",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside CalcNewPoint", exc));
            } else {
                throw exc;
            }
        }
        return 1;
    },
    GetFlotSegment : function (vbPoints, segment, points, bFlip, lDirection, lLastDirection) {
        var nNumSegs = 0;
        try {
            var j = 0;
            var dDistance = 0;
            var m = 0;
            var lLocx = 0;
            var lLocy = 0;
            var lSegCounter = 0;
            var dAngle = 0;
            var arcPoints =  Clazz.newArray (30, 0);
            var dRemainder = 0;
            var dNum = 0;
            var dDen = 0;
            lSegCounter = 0;
            if (segment === 0 && vbPoints[0] >= vbPoints[2]) {
                bFlip.value[0] = 1;
            }if (segment === 0 && vbPoints[0] < vbPoints[2]) {
                bFlip.value[0] = 0;
            }dNum = vbPoints[2 * segment + 3] - vbPoints[2 * segment + 1];
            dDen = vbPoints[2 * segment + 2] - vbPoints[2 * segment];
            if (dDen === 0) {
                dAngle = 1.5707963267948966;
            } else {
                dAngle = Math.abs (Math.atan (dNum / dDen));
            }dAngle = (57.29577951308232) * dAngle;
            if (vbPoints[2 * segment + 0] <= vbPoints[2 * segment + 2] && vbPoints[2 * segment + 1] >= vbPoints[2 * segment + 3]) {
                dAngle = 90 - dAngle;
            } else if (vbPoints[2 * segment + 0] <= vbPoints[2 * segment + 2] && vbPoints[2 * segment + 1] <= vbPoints[2 * segment + 3]) {
                dAngle = dAngle + 90;
            } else if (vbPoints[2 * segment + 0] >= vbPoints[2 * segment + 2] && vbPoints[2 * segment + 1] <= vbPoints[2 * segment + 3]) {
                dAngle = 270 - dAngle;
            } else if (vbPoints[2 * segment + 0] >= vbPoints[2 * segment + 2] && vbPoints[2 * segment + 1] >= vbPoints[2 * segment + 3]) {
                dAngle = 270 + dAngle;
            }dDistance = armyc2.c2sd.JavaLineArray.lineutility.CalcDistance2 (vbPoints[2 * segment], vbPoints[2 * segment + 1], vbPoints[2 * segment + 2], vbPoints[2 * segment + 3]);
            nNumSegs = Math.floor ((dDistance / 20));
            dRemainder = nNumSegs * 20 - dDistance;
            dDistance = dDistance + dRemainder;
            if (vbPoints[2 * segment] >= vbPoints[2 * segment + 2]) {
                dAngle = dAngle + 90;
                lDirection.value[0] = 1;
            } else {
                dAngle = dAngle - 90;
                lDirection.value[0] = 0;
            }if (segment > 0 && lDirection.value[0] !== lLastDirection.value[0]) {
                if (bFlip.value[0] === 1) {
                    bFlip.value[0] = 0;
                } else {
                    bFlip.value[0] = 1;
                }}if (bFlip.value[0] === 1) {
                dAngle = dAngle + 180;
            }for (m = 0; m < nNumSegs; m++) {
                lLocx = Math.floor ((vbPoints[2 * segment] + (m + 0.5) * (vbPoints[2 * segment + 2] - vbPoints[2 * segment]) * 20 / dDistance));
                lLocy = Math.floor ((vbPoints[2 * segment + 1] + (m + 0.5) * (vbPoints[2 * segment + 3] - vbPoints[2 * segment + 1]) * 20 / dDistance));
                armyc2.c2sd.JavaLineArray.flot.CalcAnglePoints (lLocx, lLocy, dAngle, arcPoints, dDistance / (nNumSegs * 2));
                if (points !== null) {
                    for (j = 0; j < 30; j++) {
                        points[lSegCounter] = arcPoints[j];
                        lSegCounter = lSegCounter + 1;
                    }
                }}
            lLastDirection.value[0] = lDirection.value[0];
            arcPoints = null;
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException (armyc2.c2sd.JavaLineArray.flot._className, "GetFlotSegment",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside GetFlotSegment", exc));
            } else {
                throw exc;
            }
        }
        return nNumSegs * 10;
    },
    GetFlotDouble: function (vbPoints2, numPts) {
        var lFlotCounter = 0;
        try {
            var bFlip =  new armyc2.c2sd.JavaLineArray.ref ();
            bFlip.value =  Clazz.newArray (1, 0);
            bFlip.value[0] = -1;
            var lDirection =  new armyc2.c2sd.JavaLineArray.ref ();
            lDirection.value =  Clazz.newArray (1, 0);
            lDirection.value[0] = -1;
            var lLastDirection =  new armyc2.c2sd.JavaLineArray.ref ();
            lLastDirection.value =  Clazz.newArray (1, 0);
            lLastDirection.value[0] = -1;
            var j = 0;
            var k = 0;
            var l = 0;
            var m = 0;
            var x1 = 0;
            var y1 = 0;
            var numSegPts = -1;
            var z = 0;
            var lFlotCount = 0;
            var lNumSegs = 0;
            var dDistance = 0;
            var vbPoints = null;
            var points = null;
            lFlotCount = armyc2.c2sd.JavaLineArray.flot.GetFlotCountDouble (vbPoints2, numPts);
            vbPoints =  Clazz.newArray (2 * numPts, 0);
            for (j = 0; j < numPts; j++) {
                vbPoints[k] = Math.floor (vbPoints2[j].x);
                k++;
                vbPoints[k] = Math.floor (vbPoints2[j].y);
                k++;
            }
            k = 0;
            for (l = 0; l < numPts - 1; l++) {
                dDistance = armyc2.c2sd.JavaLineArray.lineutility.CalcDistance2 (vbPoints[m], vbPoints[m + 1], vbPoints[m + 2], vbPoints[m + 3]);
                m += 2;
                lNumSegs = Math.floor ((dDistance / 20));
                if (lNumSegs > 0) {
                    points =  Clazz.newArray (lNumSegs * 30, 0);
                    numSegPts = armyc2.c2sd.JavaLineArray.flot.GetFlotSegment (vbPoints, l, points, bFlip, lDirection, lLastDirection);
                    for (j = 0; j < numSegPts; j++) 
                    {
                        x1 = points[k];
                        y1 = points[k + 1];
                        z = points[k + 2];
                        k = k + 3;
                        if (lFlotCounter < lFlotCount) 
                        {
                            vbPoints2[lFlotCounter].x = x1;
                            vbPoints2[lFlotCounter].y = y1;
                            lFlotCounter++;
                        }
                    }
                    k = 0;
                    points = null;
                } else {
                    points =  null;
                    numSegPts = armyc2.c2sd.JavaLineArray.flot.GetFlotSegment (vbPoints, l, points, bFlip, lDirection, lLastDirection);
                    if (lFlotCounter < lFlotCount) {
                        vbPoints2[lFlotCounter].x = vbPoints[2 * l];
                        vbPoints2[lFlotCounter].y = vbPoints[2 * l + 1];
                        lFlotCounter++;
                    }}}
            for (j = lFlotCounter - 1; j < vbPoints2.length; j++) {
                vbPoints2[j].style = 5;
            }
            vbPoints = null;
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException (armyc2.c2sd.JavaLineArray.flot._className, "GetFlotDouble",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside GetFlotDouble", exc));
            } else {
                throw exc;
            }
        }
        return lFlotCounter;
    },
    CalcAnglePoints : function (locx, locY, angle, points, dist) {
        try {
            var j = 0;
            var k = 0;
            var lTemp =  Clazz.newArray (2, 0);
            for (j = 0; j < 10; j++) {
                armyc2.c2sd.JavaLineArray.flot.CalcNewPoint (locx, locY, angle - 90 + 20 * j, lTemp, dist);
                points[k] = lTemp[0];
                points[k + 1] = lTemp[1];
                k += 3;
            }
            lTemp = null;
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException (armyc2.c2sd.JavaLineArray.flot._className, "CalcAnglePoints",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside CalcAnglePoints", exc));
            } else {
                throw exc;
            }
        }
        return 1;
    },
    GetFlotCountDouble: function (vbPoints, numPts) {
        var lTotalpts = 0;
        try {
            var j = 0;
            var lNumSegs = 0;
            var dDistance = 0;
            var vbPoints2 = null;
            vbPoints2 =  new Array (numPts);
            for (j = 0; j < numPts; j++) {
                vbPoints2[j] = vbPoints[j];
            }
            for (j = 0; j < numPts - 1; j++) {
                dDistance = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (vbPoints2[j], vbPoints2[j + 1]);
                lNumSegs = Math.floor ((dDistance / 20));
                if (lNumSegs > 0) {
                    lTotalpts += lNumSegs * 10;
                } else {
                    lTotalpts += 1;
                }}
            lTotalpts += 1;
            vbPoints2 = null;
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException (armyc2.c2sd.JavaLineArray.flot._className, "GetFlotCountDouble",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside GetFlotCountDouble", exc));
            } else {
                throw exc;
            }
        }
        return (lTotalpts);
    },
    GetOFYPointsDouble: function (pLinePoints, numPts, lineType) {
        var nTotalCounter = 0;
        try {
            var j = 0;
            var k = 0;
            var lNumSegs = 0;
            var l = 0;
            var lNumFlots = 0;
            var lNumSpikes = 0;
            var dDistance = 0;
            var m =  new armyc2.c2sd.JavaLineArray.ref ();
            var lTotalPoints = 0;
            var points = null;
            var pSpikePoints = null;
            var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 ();
            var tempPoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 ();
            var pFlotPoints = null;
            var pSegmentPoints = null;
            var dSpikeSize = 20;
            var dIncrement = 80;
            var vbPoints = null;
            var nFlotCounter = 0;
            var nSpikeCounter = 0;
            var nSegmentCounter = 0;
            var flots = null;
            var segmentLength = 0;
            var spikeLength = 0;
            var bolTooLong = 0;
            var d1 = 0;
            var d2 = 0;
            var bolVertical = 0;
            var pFlotStart = null;
            var pFlotEnd = null;
            var pSpikeStart = null;
            var pSpikeEnd = null;
            var nSpikeEndCounter = 0;
            var nFlotEndCounter = 0;
            var bFlip =  new armyc2.c2sd.JavaLineArray.ref ();
            var lDirection =  new armyc2.c2sd.JavaLineArray.ref ();
            var lLastDirection =  new armyc2.c2sd.JavaLineArray.ref ();
            m.value =  Clazz.newArray (1, 0);
            bFlip.value =  Clazz.newArray (1, 0);
            lDirection.value =  Clazz.newArray (1, 0);
            lLastDirection.value =  Clazz.newArray (1, 0);
            lTotalPoints = armyc2.c2sd.JavaLineArray.flot.GetOFYCountDouble (pLinePoints, numPts, lineType);
            vbPoints =  Clazz.newArray (numPts * 2, 0);
            pSpikePoints =  new Array (lTotalPoints);
            pFlotPoints =  new Array (lTotalPoints);
            pSegmentPoints =  new Array (lTotalPoints);
            for (j = 0; j < pSpikePoints.length; j++) {
                pSpikePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[0]);
                pSpikePoints[j].style = 5;
            }
            for (j = 0; j < pFlotPoints.length; j++) {
                pFlotPoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[0]);
                pFlotPoints[j].style = 5;
            }
            armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array (pSegmentPoints);
            flots =  Clazz.newArray (numPts + 1, 0);
            for (j = 0; j < numPts; j++) {
                vbPoints[k] = Math.floor (pLinePoints[j].x);
                k++;
                vbPoints[k] = Math.floor (pLinePoints[j].y);
                k++;
            }
            k = 0;
            flots[0] = 0;
            for (j = 0; j < numPts; j++) {
                flots[j + 1] = 0;
            }
            for (j = 0; j < numPts - 1; j++) {
                nSpikeEndCounter = 0;
                nFlotEndCounter = 0;
                bolVertical = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble (pLinePoints[j], pLinePoints[j + 1], m);
                m.value[0] = -m.value[0];
                dDistance = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pLinePoints[j], pLinePoints[j + 1]);
                lNumSegs = Math.floor ((dDistance / dIncrement));
                lNumFlots = lNumSegs;
                lNumSpikes = lNumSegs;
                flots[j + 1] = lNumSegs;
                k = 0;
                if (lNumFlots > 0) {
                    points =  Clazz.newArray (lNumFlots * 30, 0);
                    pFlotStart =  new Array (lNumFlots);
                    pFlotEnd =  new Array (lNumFlots);
                    armyc2.c2sd.JavaLineArray.flot.GetFlotSegment2 (vbPoints, j, points, lineType, bFlip, lDirection, lLastDirection);
                    for (l = 0; l < lNumFlots * 10; l++) {
                        pFlotPoints[nFlotCounter].x = points[k];
                        pFlotPoints[nFlotCounter].y = points[k + 1];
                        pFlotPoints[nFlotCounter].style = 9;
                        if ((nFlotCounter) % 10 === 0) {
                            pFlotStart[Math.floor (l / 10)] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pFlotPoints[nFlotCounter]);
                            d1 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pLinePoints[j], pFlotPoints[nFlotCounter]);
                            d2 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pLinePoints[j + 1], pFlotPoints[nFlotCounter]);
                            if (d2 > d1) {
                                pFlotPoints[nFlotCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble (pLinePoints[j + 1], pLinePoints[j], -d1);
                            } else {
                                pFlotPoints[nFlotCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble (pLinePoints[j], pLinePoints[j + 1], -d2);
                            }pFlotPoints[nFlotCounter].style = 9;
                        }if ((nFlotCounter + 1) % 10 === 0) {
                            if (lineType === 31133200) {
                                pFlotEnd[Math.floor (l / 10)] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pFlotPoints[nFlotCounter]);
                                nFlotEndCounter++;
                                d1 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pLinePoints[j], pFlotPoints[nFlotCounter - 9]);
                                d2 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pLinePoints[j + 1], pFlotPoints[nFlotCounter - 9]);
                                if (d2 > d1) {
                                    pFlotPoints[nFlotCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble (pLinePoints[j + 1], pLinePoints[j], -d1 - 20);
                                } else {
                                    pFlotPoints[nFlotCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble (pLinePoints[j], pLinePoints[j + 1], -d2 + 20);
                                }pFlotPoints[nFlotCounter].style = 10;
                            }}k += 3;
                        nFlotCounter++;
                    }
                    points = null;
                } else {
                    pSegmentPoints[nSegmentCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[j]);
                    pSegmentPoints[nSegmentCounter++].style = 0;
                    pSegmentPoints[nSegmentCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[j + 1]);
                    pSegmentPoints[nSegmentCounter++].style = 5;
                }segmentLength = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pLinePoints[j], pLinePoints[j + 1]);
                pSpikeStart =  new Array (lNumSpikes);
                pSpikeEnd =  new Array (lNumSpikes);
                for (k = 0; k < lNumSpikes - 1; k++) {
                    bolTooLong = 0;
                    d1 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pFlotEnd[k], pFlotEnd[k + 1]);
                    d1 = d1 / 2 - dSpikeSize;
                    tempPoint = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pFlotEnd[k], pLinePoints[j + 1], d1, 0);
                    spikeLength = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pLinePoints[j], tempPoint);
                    if (spikeLength + dSpikeSize < segmentLength) {
                        pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (tempPoint);
                        pSpikeStart[k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (tempPoint);
                    } else {
                        pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[j + 1]);
                        bolTooLong = 1;
                    }pSpikePoints[nSpikeCounter].style = 9;
                    nSpikeCounter++;
                    pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pSpikePoints[nSpikeCounter - 1], pLinePoints[j + 1], dSpikeSize / 2);
                    if (bolTooLong === 0) {
                        if (bolVertical !== 0) {
                            if (pLinePoints[j].x < pLinePoints[j + 1].x) {
                                pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine (pLinePoints[j], pLinePoints[j + 1], pt0, 2, dSpikeSize);
                            } else {
                                pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine (pLinePoints[j], pLinePoints[j + 1], pt0, 3, dSpikeSize);
                            }pSpikePoints[nSpikeCounter].style = 0;
                            nSpikeCounter++;
                        } else {
                            if (pLinePoints[j].y > pLinePoints[j + 1].y) {
                                pSpikePoints[nSpikeCounter].x = pt0.x - dSpikeSize;
                            } else {
                                pSpikePoints[nSpikeCounter].x = pt0.x + dSpikeSize;
                            }pSpikePoints[nSpikeCounter].y = pt0.y;
                            nSpikeCounter++;
                        }} else {
                        pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[j + 1]);
                        nSpikeCounter++;
                    }pSpikePoints[nSpikeCounter - 1].style = 9;
                    if (bolTooLong === 0) {
                        d1 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pLinePoints[j], pSpikePoints[nSpikeCounter - 2]);
                        d2 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pLinePoints[j + 1], pSpikePoints[nSpikeCounter - 2]);
                        if (d1 > d2) {
                            pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double (pLinePoints[j], pSpikePoints[nSpikeCounter - 2], dSpikeSize, 0);
                        } else {
                            pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double (pLinePoints[j + 1], pSpikePoints[nSpikeCounter - 2], -dSpikeSize, 0);
                        }pSpikeEnd[k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pSpikePoints[nSpikeCounter]);
                        nSpikeEndCounter++;
                        if (lineType === 31133200) {
                            pSpikePoints[nSpikeCounter].style = 10;
                        }} else {
                        pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[j + 1]);
                        pSpikePoints[nSpikeCounter].style = 5;
                    }nSpikeCounter++;
                }
                if (nSpikeEndCounter === 0 && nFlotEndCounter === 1) {
                    pSegmentPoints[nSegmentCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[j]);
                    pSegmentPoints[nSegmentCounter++].style = 0;
                    pSegmentPoints[nSegmentCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pFlotStart[0]);
                    pSegmentPoints[nSegmentCounter++].style = 5;
                    pSegmentPoints[nSegmentCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[j + 1]);
                    pSegmentPoints[nSegmentCounter++].style = 0;
                    pSegmentPoints[nSegmentCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pFlotEnd[0]);
                    pSegmentPoints[nSegmentCounter++].style = 5;
                }for (l = 0; l < nSpikeEndCounter; l++) {
                    if (l === 0) {
                        pSegmentPoints[nSegmentCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[j]);
                        pSegmentPoints[nSegmentCounter++].style = 0;
                        pSegmentPoints[nSegmentCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pFlotStart[0]);
                        pSegmentPoints[nSegmentCounter++].style = 5;
                    }if (l === nSpikeEndCounter - 1) {
                        pSegmentPoints[nSegmentCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[j + 1]);
                        pSegmentPoints[nSegmentCounter++].style = 0;
                        pSegmentPoints[nSegmentCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pFlotEnd[l + 1]);
                        pSegmentPoints[nSegmentCounter++].style = 5;
                    }pSegmentPoints[nSegmentCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pSpikeEnd[l]);
                    pSegmentPoints[nSegmentCounter++].style = 0;
                    pSegmentPoints[nSegmentCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pFlotStart[l + 1]);
                    pSegmentPoints[nSegmentCounter++].style = 5;
                    d1 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pSpikeStart[l], pFlotEnd[l]);
                    pSegmentPoints[nSegmentCounter++] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pSpikeStart[l], pLinePoints[j], d1 / 3, 0);
                    pSegmentPoints[nSegmentCounter++] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pSpikeStart[l], pLinePoints[j], 2 * d1 / 3, 5);
                    tempPoint = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine (pLinePoints[j], pLinePoints[j + 1], pSegmentPoints[nSegmentCounter - 2], 2, 5, 0);
                    pSegmentPoints[nSegmentCounter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (tempPoint);
                    tempPoint = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine (pLinePoints[j], pLinePoints[j + 1], pSegmentPoints[nSegmentCounter - 2], 3, 5, 5);
                    pSegmentPoints[nSegmentCounter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (tempPoint);
                }
                if (nSpikeCounter === 0) {
                    pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[j]);
                    pSpikePoints[nSpikeCounter].style = 5;
                    nSpikeCounter++;
                    pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[j + 1]);
                    pSpikePoints[nSpikeCounter].style = 5;
                    nSpikeCounter++;
                    pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[j + 1]);
                    pSpikePoints[nSpikeCounter].style = 5;
                    nSpikeCounter++;
                } else {
                    pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pSpikePoints[nSpikeCounter - 1]);
                    pSpikePoints[nSpikeCounter].style = 5;
                    pSpikePoints[nSpikeCounter + 1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pSpikePoints[nSpikeCounter - 1]);
                    pSpikePoints[nSpikeCounter + 1].style = 5;
                    pSpikePoints[nSpikeCounter + 2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pSpikePoints[nSpikeCounter - 1]);
                    pSpikePoints[nSpikeCounter + 2].style = 5;
                    nSpikeCounter += 3;
                }}
            nTotalCounter = 0;
            for (j = 0; j < nFlotCounter; j++) {
                pLinePoints[nTotalCounter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pFlotPoints[j]);
            }
            for (j = 0; j < nSpikeCounter; j++) {
                pLinePoints[nTotalCounter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pSpikePoints[j]);
            }
            for (j = 0; j < nSegmentCounter; j++) {
                pLinePoints[nTotalCounter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pSegmentPoints[j]);
            }
            for (j = nTotalCounter; j < pLinePoints.length; j++) {
                pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[nTotalCounter - 1]);
            }
            vbPoints = null;
            pSpikePoints = null;
            pFlotPoints = null;
            flots = null;
            pFlotStart = null;
            pFlotEnd = null;
            pSpikeStart = null;
            pSpikeEnd = null;
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException (armyc2.c2sd.JavaLineArray.flot._className, "GetOFYPointsDouble",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside GetOFYPointsDouble", exc));
            } else {
                throw exc;
            }
        }
        return nTotalCounter;
    },
    GetSFPointsDouble: function (pLinePoints, numPts, lineType) {
        var nTotalCounter = 0;
        try {
            var lTotalPoints = 0;
            var j = 0;
            var k = 0;
            var lNumSegs = 0;
            var l = 0;
            var lNumFlots = 0;
            var lNumSpikes = 0;
            var dDistance = 0;
            var m =  new armyc2.c2sd.JavaLineArray.ref ();
            var points = null;
            var pSpikePoints = null;
            var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 ();
            var tempPoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 ();
            var pFlotPoints = null;
            var dSpikeSize = 20;
            var dIncrement = 80;
            var vbPoints = null;
            var nFlotCounter = 0;
            var nSpikeCounter = 0;
            var nSegCounter = 0;
            var flots = null;
            var segmentLength = 0;
            var spikeLength = 0;
            var bolTooLong = 0;
            var d1 = 0;
            var d2 = 0;
            var bolVertical = 0;
            var pFlotStart = null;
            var pFlotEnd = null;
            var pSpikeStart = null;
            var pSpikeEnd = null;
            var pSegPoints = null;
            var bFlip =  new armyc2.c2sd.JavaLineArray.ref ();
            var lDirection =  new armyc2.c2sd.JavaLineArray.ref ();
            var lLastDirection =  new armyc2.c2sd.JavaLineArray.ref ();
            lTotalPoints = armyc2.c2sd.JavaLineArray.flot.GetSFCountDouble (pLinePoints, numPts);
            m.value =  Clazz.newArray (1, 0);
            lDirection.value =  Clazz.newArray (1, 0);
            lDirection.value[0] = -1;
            lLastDirection.value =  Clazz.newArray (1, 0);
            lLastDirection.value[0] = -1;
            bFlip.value =  Clazz.newArray (1, 0);
            bFlip.value[0] = -1;
            vbPoints =  Clazz.newArray (numPts * 2, 0);
            pSpikePoints =  new Array (lTotalPoints);
            pFlotPoints =  new Array (lTotalPoints);
            for (j = 0; j < pSpikePoints.length; j++) {
                pSpikePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[0]);
                pSpikePoints[j].style = 5;
            }
            for (j = 0; j < pFlotPoints.length; j++) {
                pFlotPoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[0]);
                pFlotPoints[j].style = 5;
            }
            pSegPoints =  new Array (4 * (numPts - 1));
            armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array (pSegPoints);
            flots =  Clazz.newArray (numPts + 1, 0);
            for (j = 0; j < numPts; j++) {
                vbPoints[k] = Math.floor (pLinePoints[j].x);
                k++;
                vbPoints[k] = Math.floor (pLinePoints[j].y);
                k++;
            }
            k = 0;
            flots[0] = 0;
            for (j = 0; j < numPts; j++) {
                flots[j + 1] = 0;
            }
            for (j = 0; j < numPts - 1; j++) {
                bolVertical = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble (pLinePoints[j], pLinePoints[j + 1], m);
                m.value[0] = -m.value[0];
                dDistance = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pLinePoints[j], pLinePoints[j + 1]);
                lNumSegs = Math.floor ((dDistance / dIncrement));
                lNumFlots = lNumSegs;
                lNumSpikes = lNumSegs;
                flots[j + 1] = lNumSegs;
                k = 0;
                if (lNumFlots > 0) {
                    points =  Clazz.newArray (lNumFlots * 30, 0);
                    pFlotStart =  new Array (lNumFlots);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array (pFlotStart);
                    pFlotEnd =  new Array (lNumFlots);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array (pFlotEnd);
                    armyc2.c2sd.JavaLineArray.flot.GetFlotSegment2 (vbPoints, j, points, lineType, bFlip, lDirection, lLastDirection);
                    for (l = 0; l < lNumFlots * 10; l++) {
                        pFlotPoints[nFlotCounter].x = points[k];
                        pFlotPoints[nFlotCounter].y = points[k + 1];
                        if (lineType === 31134100) {
                            pFlotPoints[nFlotCounter].style = 19;
                        } else {
                            pFlotPoints[nFlotCounter].style = 9;
                        }if ((nFlotCounter) % 10 === 0) {
                            pFlotStart[Math.floor (l / 10)] = pFlotPoints[nFlotCounter];
                            d1 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pLinePoints[j], pFlotPoints[nFlotCounter]);
                            d2 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pLinePoints[j + 1], pFlotPoints[nFlotCounter]);
                            if (d2 > d1) {
                                pFlotPoints[nFlotCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble (pLinePoints[j + 1], pLinePoints[j], -d1);
                            } else {
                                pFlotPoints[nFlotCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble (pLinePoints[j], pLinePoints[j + 1], -d2);
                            }if (lineType === 31134100) {
                                pFlotPoints[nFlotCounter].style = 19;
                            } else {
                                pFlotPoints[nFlotCounter].style = 9;
                            }}if ((nFlotCounter + 1) % 10 === 0) {
                            if (lineType === 31134100) {
                                pFlotPoints[nFlotCounter].style = 5;
                            } else {
                                pFlotPoints[nFlotCounter].style = 23;
                            }pFlotEnd[Math.floor (l / 10)] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pFlotPoints[nFlotCounter]);
                        }if (l === 0) {
                            pSegPoints[nSegCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[j]);
                            pSegPoints[nSegCounter++].style = 19;
                            pSegPoints[nSegCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pFlotStart[l]);
                            pSegPoints[nSegCounter++].style = 5;
                        }if (l === lNumFlots * 10 - 1) {
                            pSegPoints[nSegCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[j + 1]);
                            pSegPoints[nSegCounter++].style = 19;
                            pSegPoints[nSegCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pFlotStart[Math.floor (l / 10)]);
                            pSegPoints[nSegCounter++].style = 5;
                        }k += 3;
                        nFlotCounter++;
                    }
                    points = null;
                } else {
                    pSegPoints[nSegCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[j]);
                    pSegPoints[nSegCounter++].style = 0;
                    pSegPoints[nSegCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[j + 1]);
                    pSegPoints[nSegCounter++].style = 5;
                }segmentLength = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pLinePoints[j], pLinePoints[j + 1]);
                pSpikeStart =  new Array (lNumSpikes);
                armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array (pSpikeStart);
                pSpikeEnd =  new Array (lNumSpikes);
                armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array (pSpikeEnd);
                for (k = 0; k < lNumSpikes - 1; k++) {
                    bolTooLong = 0;
                    d1 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pFlotStart[k], pFlotStart[k + 1]);
                    d1 = d1 / 2 - dSpikeSize;
                    tempPoint = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pFlotStart[k], pLinePoints[j + 1], d1, 0);
                    spikeLength = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pLinePoints[j], tempPoint);
                    if (spikeLength + dSpikeSize < segmentLength) {
                        pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (tempPoint);
                        pSpikeStart[k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (tempPoint);
                    } else {
                        pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[j + 1]);
                        bolTooLong = 1;
                    }if (lineType === 31134100) {
                        pSpikePoints[nSpikeCounter].style = 25;
                    } else {
                        pSpikePoints[nSpikeCounter].style = 9;
                    }nSpikeCounter++;
                    pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pSpikePoints[nSpikeCounter - 1], pLinePoints[j + 1], dSpikeSize / 2);
                    if (bolTooLong === 0) {
                        if (bolVertical !== 0) {
                            if (pLinePoints[j].x < pLinePoints[j + 1].x) {
                                pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine (pLinePoints[j], pLinePoints[j + 1], pt0, 2, dSpikeSize);
                            } else {
                                pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine (pLinePoints[j], pLinePoints[j + 1], pt0, 3, dSpikeSize);
                            }pSpikePoints[nSpikeCounter].style = 0;
                            nSpikeCounter++;
                        } else {
                            if (pLinePoints[j].y > pLinePoints[j + 1].y) {
                                pSpikePoints[nSpikeCounter].x = pt0.x - dSpikeSize;
                            } else {
                                pSpikePoints[nSpikeCounter].x = pt0.x + dSpikeSize;
                            }pSpikePoints[nSpikeCounter].y = pt0.y;
                            nSpikeCounter++;
                        }} else {
                        pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[j + 1]);
                        nSpikeCounter++;
                    }if (lineType == 31134100) {
                        pSpikePoints[nSpikeCounter - 1].style = 25;
                    } else {
                        pSpikePoints[nSpikeCounter - 1].style = 9;
                    }if (bolTooLong == 0) {
                        pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pSpikePoints[nSpikeCounter - 2], pLinePoints[j + 1], dSpikeSize);
                        if (lineType == 31134100) {
                            pSpikePoints[nSpikeCounter].style = 5;
                        } else {
                            pSpikePoints[nSpikeCounter].style = 24;
                        }pSpikeEnd[k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pSpikePoints[nSpikeCounter]);
                    } else {
                        pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[j + 1]);
                        pSpikePoints[nSpikeCounter].style = 5;
                    }nSpikeCounter++;
                    if (lineType == 31134000 || lineType == 31134100) {
                        d1 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pFlotStart[k], pSpikeStart[k]);
                        pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pFlotStart[k]);
                        pSpikePoints[nSpikeCounter++].style = 19;
                        pSpikePoints[nSpikeCounter++] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pFlotStart[k], pLinePoints[j + 1], d1 / 2, 5);
                        pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pFlotEnd[k]);
                        pSpikePoints[nSpikeCounter++].style = 19;
                        pSpikePoints[nSpikeCounter++] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pFlotEnd[k], pLinePoints[j], d1 / 2, 5);
                        if (k == lNumSpikes - 2) {
                            pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pFlotStart[k + 1]);
                            pSpikePoints[nSpikeCounter++].style = 19;
                            pSpikePoints[nSpikeCounter++] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pFlotStart[k + 1], pLinePoints[j + 1], d1 / 2, 5);
                            pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pFlotEnd[k + 1]);
                            pSpikePoints[nSpikeCounter++].style = 19;
                            pSpikePoints[nSpikeCounter++] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pFlotEnd[k + 1], pLinePoints[j], d1 / 2, 5);
                        }pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pSpikeStart[k]);
                        pSpikePoints[nSpikeCounter++].style = 25;
                        pSpikePoints[nSpikeCounter++] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pSpikeStart[k], pLinePoints[j], d1 / 2, 5);
                        pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pSpikeEnd[k]);
                        pSpikePoints[nSpikeCounter++].style = 25;
                        pSpikePoints[nSpikeCounter++] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pSpikeEnd[k], pLinePoints[j + 1], d1 / 2, 5);
                        if (lineType == 31134100) {
                            pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pFlotEnd[k]);
                            pSpikePoints[nSpikeCounter++].style = 19;
                            pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pFlotStart[k]);
                            pSpikePoints[nSpikeCounter++].style = 5;
                            if (k == lNumSpikes - 2) {
                                pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pFlotEnd[k + 1]);
                                pSpikePoints[nSpikeCounter++].style = 19;
                                pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pFlotStart[k + 1]);
                                pSpikePoints[nSpikeCounter++].style = 5;
                            }pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pSpikeEnd[k]);
                            pSpikePoints[nSpikeCounter++].style = 25;
                            pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pSpikeStart[k]);
                            pSpikePoints[nSpikeCounter++].style = 5;
                        }}if (lineType == 31134200) {
                        pSpikePoints[nSpikeCounter++] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pSpikeStart[k], pLinePoints[j], dSpikeSize / 2, 22);
                        pSpikePoints[nSpikeCounter++] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pSpikeEnd[k], pLinePoints[j + 1], dSpikeSize / 2, 20);
                    }if (lineType == 31134300) {
                        d1 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pFlotStart[k], pSpikeStart[k]);
                        pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pSpikeStart[k], pLinePoints[j], d1 / 4);
                        pSpikePoints[nSpikeCounter].style = 25;
                        pSpikePoints[nSpikeCounter + 1] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pSpikeStart[k], pLinePoints[j], d1 / 2);
                        pSpikePoints[nSpikeCounter + 1].style = 5;
                        pSpikePoints[nSpikeCounter + 2] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pSpikeStart[k], pLinePoints[j], d1 / 2);
                        pSpikePoints[nSpikeCounter + 2].style = 19;
                        pSpikePoints[nSpikeCounter + 3] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pSpikeStart[k], pLinePoints[j], 3 * d1 / 4);
                        pSpikePoints[nSpikeCounter + 3].style = 5;
                        pSpikePoints[nSpikeCounter + 4] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine (pSpikePoints[nSpikeCounter], pLinePoints[j], pSpikePoints[nSpikeCounter], 2, 5, 25);
                        pSpikePoints[nSpikeCounter + 5] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine (pSpikePoints[nSpikeCounter + 3], pLinePoints[j], pSpikePoints[nSpikeCounter + 3], 3, 5, 5);
                        nSpikeCounter += 6;
                        d1 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pFlotEnd[k + 1], pSpikeEnd[k]);
                        pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pSpikeEnd[k], pLinePoints[j + 1], d1 / 4);
                        pSpikePoints[nSpikeCounter].style = 25;
                        pSpikePoints[nSpikeCounter + 1] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pSpikeEnd[k], pLinePoints[j + 1], d1 / 2);
                        pSpikePoints[nSpikeCounter + 1].style = 5;
                        pSpikePoints[nSpikeCounter + 2] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pSpikeEnd[k], pLinePoints[j + 1], d1 / 2);
                        pSpikePoints[nSpikeCounter + 2].style = 19;
                        pSpikePoints[nSpikeCounter + 3] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble (pSpikeEnd[k], pLinePoints[j + 1], 3 * d1 / 4);
                        pSpikePoints[nSpikeCounter + 3].style = 5;
                        pSpikePoints[nSpikeCounter + 4] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine (pSpikePoints[nSpikeCounter], pLinePoints[j + 1], pSpikePoints[nSpikeCounter], 3, 5, 19);
                        pSpikePoints[nSpikeCounter + 5] = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine (pSpikePoints[nSpikeCounter + 3], pLinePoints[j + 1], pSpikePoints[nSpikeCounter + 3], 2, 5, 5);
                        nSpikeCounter += 6;
                    }}
                if (nSpikeCounter == 0) {
                    pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[j]);
                    pSpikePoints[nSpikeCounter].style = 5;
                    nSpikeCounter++;
                    pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[j + 1]);
                    pSpikePoints[nSpikeCounter].style = 5;
                    nSpikeCounter++;
                    pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[j + 1]);
                    pSpikePoints[nSpikeCounter].style = 5;
                    nSpikeCounter++;
                } else {
                    pSpikePoints[nSpikeCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pSpikePoints[nSpikeCounter - 1]);
                    pSpikePoints[nSpikeCounter].style = 5;
                    pSpikePoints[nSpikeCounter + 1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pSpikePoints[nSpikeCounter - 1]);
                    pSpikePoints[nSpikeCounter + 1].style = 5;
                    pSpikePoints[nSpikeCounter + 2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pSpikePoints[nSpikeCounter - 1]);
                    pSpikePoints[nSpikeCounter + 2].style = 5;
                    nSpikeCounter += 3;
                }}
            for (j = 0; j < pLinePoints.length; j++) {
                pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pSpikePoints[0]);
                pLinePoints[j].style = 5;
            }
            nTotalCounter = 0;
            for (j = 0; j < nFlotCounter; j++) {
                pLinePoints[nTotalCounter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pFlotPoints[j]);
            }
            for (j = 0; j < nSpikeCounter; j++) {
                pLinePoints[nTotalCounter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pSpikePoints[j]);
            }
            for (j = 0; j < nSegCounter; j++) {
                pLinePoints[nTotalCounter++] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pSegPoints[j]);
            }
            for (j = nTotalCounter; j < pLinePoints.length; j++) {
                pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2 (pLinePoints[nTotalCounter - 1]);
            }
            vbPoints = null;
            pSpikePoints = null;
            pFlotPoints = null;
            flots = null;
            pFlotStart = null;
            pFlotEnd = null;
            pSpikeStart = null;
            pSpikeEnd = null;
            pSegPoints = null;
        } catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException (armyc2.c2sd.JavaLineArray.flot._className, "GetSFPointsDouble",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside GetSFPointsDouble", exc));
            } else {
                throw exc;
            }
        }
        return nTotalCounter;
    },
    GetSFCountDouble: function (pLinePoints, numPts) {
        var lTotalpts = 0;
        try {
            var j = 0;
            var lNumSegs = 0;
            var lNumFlots = 0;
            var lNumSpikes = 0;
            var dDistance = 0;
            for (j = 0; j < numPts - 1; j++) {
                dDistance = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble (pLinePoints[j], pLinePoints[j + 1]);
                lNumSegs = Math.floor ((dDistance / 80));
                lNumFlots = lNumSegs;
                lNumSpikes = lNumSegs;
                if (lNumFlots < 1) {
                    lNumFlots = 1;
                }if (lNumSpikes < 1) {
                    lNumSpikes = 1;
                }lTotalpts += lNumFlots * 10;
                lTotalpts += lNumSpikes * 3;
                lTotalpts += lNumSegs * 16;
                lTotalpts += numPts * 4;
            }
            if (lTotalpts < 25 * numPts) {
                lTotalpts = 25 * numPts;
            }if (lTotalpts < numPts) {
                lTotalpts = numPts;
            }} catch (exc) {
            if (Clazz.instanceOf (exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException (armyc2.c2sd.JavaLineArray.flot._className, "GetSFCountDouble",  new armyc2.c2sd.renderer.utilities.RendererException ("Failed inside GetSFCountDouble", exc));
            } else {
                throw exc;
            }
        }
        return lTotalpts;
    },
    _className: "flot"
};