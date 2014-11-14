var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.JavaLineArray = armyc2.c2sd.JavaLineArray || {};
armyc2.c2sd.JavaLineArray.countsupport =
        {
            setMinLength: function(value) {
                this.minLength = value;
            },
            GetCountersDouble: function(vbiDrawThis, vblCounter, pLinePoints, clipBounds, rev) {
                var count = 0;
                try {
                    var j = 0;
                    var vblSaveCounter = vblCounter;
                    var pSquarePoints = new Array(4);
                    var pUpperLinePoints = null;
                    var pLowerLinePoints = null;
                    var segments = null;
                    var pNewLinePoints = null;
                    var dRadius = 0;
                    var pointsCorner = new Array(2);
                    pUpperLinePoints = new Array(vblCounter);
                    pLowerLinePoints = new Array(vblCounter);
                    for (j = 0; j < vblCounter; j++) {
                        pUpperLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j]);
                        pLowerLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j]);
                    }
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pointsCorner);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pSquarePoints);
                    switch (vbiDrawThis) {
                        case 13000000:
                            count = 37;
                            break;
                        case 12000000:
                            count = 4;
                            break;
//                        case 14000000:
//                        case 15000003:
//                            count = 5;
//                            break;
                        case 23200000:
                            count = vblCounter * 15;
                            break;
                        case 23200001:
                            count = vblCounter * 2;
                            break;
                        case 32134000:
                            vblCounter += 3;
                            count = vblCounter;
                            break;
                        case 322510000:
                            vblCounter = armyc2.c2sd.JavaLineArray.countsupport.GetReefCount(pLinePoints, vblSaveCounter);
                            count = vblCounter;
                            break;
                        case 32530000:
                            vblCounter = armyc2.c2sd.JavaLineArray.countsupport.GetRestrictedAreaCount(pLinePoints, vblSaveCounter);
                            count = vblCounter;
                            break;
                        case 32550000:
                            vblCounter += 30;
                            count = vblCounter;
                            break;
                        case 32680000:
                            count = armyc2.c2sd.JavaLineArray.countsupport.GetPipeCount(pLinePoints, vblSaveCounter);
                            break;
                        case 32231500:
                        case 32231400:
                            count = armyc2.c2sd.JavaLineArray.flot.GetAnchorageCountDouble(pLinePoints, vblCounter);
                            break;
                        case 32153000:
                            var xCount = armyc2.c2sd.JavaLineArray.countsupport.GetXPointsCount(pLinePoints, vblCounter);
                            var lvoCount = armyc2.c2sd.JavaLineArray.countsupport.GetLVOCount(pLinePoints, vblCounter);
                            count = xCount + lvoCount;
                            break;
                        case 32151000:
                            count = armyc2.c2sd.JavaLineArray.countsupport.GetLVOCount(pLinePoints, vblCounter);
                            break;
                        case 31740000:
                            vblCounter = armyc2.c2sd.JavaLineArray.countsupport.GetIcingCount(pLinePoints, vblCounter);
                            count = vblCounter;
                            break;
                        case 22122000:
                        case 31720000:
                        case 32152000:
                            vblSaveCounter = vblCounter;
                            vblCounter = armyc2.c2sd.JavaLineArray.flot.GetFlotCountDouble(pLinePoints, vblCounter);
                            count = vblCounter;
                            break;
                        case 31148000:
                            vblCounter = armyc2.c2sd.JavaLineArray.countsupport.GetITDQty(pLinePoints, vblCounter) + vblCounter;
                            count = vblCounter;
                            break;
                        case 31147000:
                            vblCounter = armyc2.c2sd.JavaLineArray.countsupport.GetConverganceQty(pLinePoints, vblCounter) + vblCounter;
                            count = vblCounter;
                            break;
                        case 31142000:
                            vblCounter = armyc2.c2sd.JavaLineArray.countsupport.GetFORTLCountDouble(pLinePoints, vbiDrawThis, vblSaveCounter);
                            count = vblCounter;
                            break;
                        case 31141000:
                        case 31144000:
                        case 31145000:
                            vblCounter = armyc2.c2sd.JavaLineArray.countsupport.GetSquallQty(pLinePoints, 6, 30, vblSaveCounter);
                            count = vblCounter;
                            break;
                        case 31143000:
                            vblCounter = armyc2.c2sd.JavaLineArray.countsupport.GetSquallQty(pLinePoints, 5, 30, vblSaveCounter)+2*vblSaveCounter;
                            count = vblCounter;
                            break;
                        case 31134100:
                        case 31134200:
                        case 31134300:
                        case 31134000:
                            vblCounter = armyc2.c2sd.JavaLineArray.flot.GetSFCountDouble(pLinePoints, vblCounter);
                            count = vblCounter;
                            break;
                        case 31133200:
                            vblSaveCounter = vblCounter;
                            vblCounter = armyc2.c2sd.JavaLineArray.flot.GetOFYCountDouble(pLinePoints, vblCounter, vbiDrawThis);
                            count = vblCounter;
                            break;
                        case 31131100:
                        case 31131000:
                        case 31131200:
                        case 31131300:
                            count = armyc2.c2sd.JavaLineArray.countsupport.GetFORTLCountDouble(pLinePoints, vbiDrawThis, vblSaveCounter);
                            count += vblSaveCounter;
                            break;
                        case 211200000:
                        case 211210000:
                            count = 16;
                            break;
                        case 23194000:
                        case 23223000:
                            count = 8;
                            break;
                        case 26220000:
                        case 22524000:
                        case 23191000:
                        case 23192000:
                        case 23193000:
                        case 23224000:
                        case 23340000:
                        case 22310000:
                            count = 4;
                            break;
                        case 231100000:
                            count = 35;
                            break;
                        case 22611000:
                            count = 53;
                            break;
                        case 23157000:
                            count = 28;
                            break;
                        case 2237000:
                            count = vblCounter + 3;
                            break;
                        case 21600000:
                            count = 40;
                            break;
                        case 23213000:
                            count = 18;
                            break;
                        case 22534000:
                            count = 16;
                            break;
                        case 21100000:
                        case 23171000:
                            count = 4;
                            break;
                        case 24326100:
                            count = 5;
                            break;
                        case 211700000:
                            count = 7;
                            break;
                        case 23221000:
                        case 23222000:
                        case 23163000:
                        case 21300000:
                        case 23211000:
                        case 21200000:
                        case 21400000:
                            count = 12;
                            break;
                        case 23174000:
                            count = 22;
                            break;
                        case 212400000:
                        case 212410000:
                        case 21800000:
                        case 212000000:
                            count = 23;
                            break;
                        case 212300000:
                        case 212300001:
                            count = 37;
                            break;
                        case 211800000:
                            count = 29;
                            break;
                        case 22522220:
                            count = vblCounter + 3;
                            break;
                        case 23120000:
                            count = vblCounter + 3;
                            break;
                        case 24260000:
                        case 24250000:
                        case 24211000:
                            count = vblCounter + 4;
                            break;
                        case 231113001:
                        case 231113002:
                        case 231113003:
                            count = 2 * vblCounter;
                            break;
                        case 15000000:
                            count = 2 * vblCounter;
                            break;
                        case 22139000:
                            count = 16;
                            break;
                        case 212230000:
                        case 212210000:
                        case 212220000:
                        case 212230001:
                        case 212210001:
                        case 212220001:
                        case 22422000:
                        case 22533000:
                            count = 14;
                            break;
                        case 23227000:
                        case 23226000:
                            count = 8;
                            break;
                        case 22522210:
                            count = vblCounter + 10;
                            break;
                        case 22522100:
                            count = vblCounter + 9;
                            break;
                        case 211000000:
                        case 21500000:
                            count = 20;
                            break;
                        case 22224001:
                        case 22222001:
                            vblCounter = 6 * (vblSaveCounter - 1);
                            count = vblCounter + 26 * vblSaveCounter * 2;
                            break;
                        case 22224000:
                        case 22222000:
                            if (rev === 1) {
                                vblCounter = 6 * (vblSaveCounter - 1);
                                count = vblCounter + 26 * vblSaveCounter * 2;
                            } else
                                count = 6;
                            break;
                        case 22330000:
                            count = vblCounter + 6;
                            break;
                        case 23410000:
                            count = 300;
                            break;
                        case 25211000:
                        case 25212000:
                            count = 10;
                            break;
                        case 211400000:
                        case 212600000:
                        case 212500000:
                            count = 50;
                            break;
                        case 211600000:
                            count = 32;
                            break;
                        case 212100000:
                            count = 29;
                            break;
                        case 211900000:
                            count = 75;
                            break;
                        case 23173000:
                            count = 29;
                            break;
                        case 221311000:
                            count = vblCounter + 5;
                            break;
                        case 22340000:
                            count = vblCounter + 4;
                            break;
                        case 22350000:
                            count = vblCounter + 3;
                            break;
                        case 25224000:
                            count = vblCounter * 9;
                            break;
                        case 25225000:
                            count = vblCounter * 11;
                            break;
                        case 25223000:
                            count = vblCounter * 6;
                            break;
                        case 31132000:
                        case 31132100:
                            vblCounter = armyc2.c2sd.JavaLineArray.flot.GetFlotCount2Double(pLinePoints, vblCounter, vbiDrawThis);
                            vblCounter += vblSaveCounter;
                            count = vblCounter;
                            break;
                        case 31132200:
                        case 31132300:
                            vblCounter = armyc2.c2sd.JavaLineArray.flot.GetFlotCount2Double(pLinePoints, vblCounter, vbiDrawThis);
                            count = vblCounter;
                            break;
                        case 23225000:
                            dRadius = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceToLineDouble(pLinePoints[0], pLinePoints[1], pLinePoints[2]);
                            count = Math.floor(((dRadius / 5) * 3));
                            if (clipBounds !== null) {
                                var width = clipBounds.getWidth();
                                var height = clipBounds.getHeight();
                                dRadius = Math.sqrt(width * width + height * height);
                                count = Math.floor((dRadius / 5)) + 6;
                            }
                            break;
                        case 23131100:
                        case 23131200:
                        case 23132000:
                            count = armyc2.c2sd.JavaLineArray.countsupport.GetDitchCountDouble(pLinePoints, vblSaveCounter, vbiDrawThis);
                            break;
                        case 21700000:
                        case 22521100:
                        case 22521410:
                        case 22521411:
                        case 22320000:
                        case 22320001:
                        case 22521200:
                        case 22521420:
                        case 22521421:
                            count = 2 * vblCounter + 8;
                            break;
                        case 21710000:
                            count = 2 * vblCounter + 17;
                            break;
                        case 22521300:
                            count = 2 * vblCounter + 19;
                            break;
                        case 22421000:
                            count = 32 * vblCounter;
                            break;
                        case 22225000:
                        case 22223000:
                        case 22221000:
                            vblCounter = 6 * (vblSaveCounter - 1);
                            count = vblCounter + 26 * vblSaveCounter * 2;
                            break;
                        case 23134000:
                        case 23112000:
                        case 23115000:
                        case 23114000:
                        case 23350000:
                        case 23113000:
                        case 23111000:
                        case 22624000:
                        case 22134000:
                        case 23330000:
                            count = armyc2.c2sd.JavaLineArray.countsupport.GetFORTLCountDouble(pLinePoints, vbiDrawThis, vblSaveCounter);
                            break;
                        case 23111001:
                            pUpperLinePoints = new Array(vblCounter);
                            pLowerLinePoints = new Array(vblCounter);
                            var pUpperLowerLinePoints = new Array(2 * vblCounter);
                            for (j = 0; j < vblCounter; j++)
                                pLowerLinePoints[j] = pLinePoints[j];

                            for (j = 0; j < vblCounter; j++)
                                pUpperLinePoints[j] = pLinePoints[j];

                            pUpperLinePoints = armyc2.c2sd.JavaLineArray.Channels.CoordIL2Double(1, pUpperLinePoints, 1, vblCounter, vbiDrawThis, 30);
                            pLowerLinePoints = armyc2.c2sd.JavaLineArray.Channels.CoordIL2Double(1, pLowerLinePoints, 0, vblCounter, vbiDrawThis, 30);
                            for (j = 0; j < vblCounter; j++)
                                pUpperLowerLinePoints[j] = pUpperLinePoints[j];

                            for (j = 0; j < vblCounter; j++)
                                pUpperLowerLinePoints[j + vblCounter] = pLowerLinePoints[vblCounter - j - 1];

                            vblSaveCounter = 2 * vblCounter;
                            count = armyc2.c2sd.JavaLineArray.countsupport.GetFORTLCountDouble(pUpperLowerLinePoints, vbiDrawThis, 2 * vblCounter);
                            break;
                        case 231117300:
                        case 231117200:
                        case 231117100:
                        case 231116000:
                        case 231115000:
                        case 231111000:
                        case 231114000:
                        case 231112000:
                        case 231113000:
                            count = armyc2.c2sd.JavaLineArray.Channels.GetTripleCountDouble(pLinePoints, vblCounter, vbiDrawThis);
                            break;
                        case 22123000:
                            pUpperLinePoints = armyc2.c2sd.JavaLineArray.Channels.GetChannelArray2Double(1, pUpperLinePoints, 1, vblCounter, vbiDrawThis, 20);
                            pLowerLinePoints = armyc2.c2sd.JavaLineArray.Channels.GetChannelArray2Double(1, pLowerLinePoints, 0, vblCounter, vbiDrawThis, 20);
                            var lUpperFlotCount = armyc2.c2sd.JavaLineArray.flot.GetFlotCountDouble(pUpperLinePoints, vblCounter);
                            var lLowerFlotCount = armyc2.c2sd.JavaLineArray.flot.GetFlotCountDouble(pLowerLinePoints, vblCounter);
                            count = lUpperFlotCount + lLowerFlotCount;
                            break;
                        case 31133000:
                        case 31133100:
                            vblSaveCounter = vblCounter;
                            vblCounter = armyc2.c2sd.JavaLineArray.flot.GetOccludedCountDouble(pLinePoints, vblCounter);
                            vblCounter += vblSaveCounter;
                            count = vblCounter;
                            break;
                        case 211100000:
                        case 23172000:
                            if (pLinePoints.length > 1)
                                count = armyc2.c2sd.JavaLineArray.countsupport.GetDISMFixCountDouble(pLinePoints[0], pLinePoints[1], clipBounds);
                            else
                                count = 0;
                            break;
                        case 23212000:
                            if (clipBounds !== null) {
                                armyc2.c2sd.JavaLineArray.countsupport.GetByDifSegment(pLinePoints, pointsCorner);
                                var ul = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(clipBounds.getMinX(), clipBounds.getMinY());
                                var lr = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(clipBounds.getMaxX(), clipBounds.getMaxY());
                                var ptsCorner = armyc2.c2sd.JavaLineArray.lineutility.BoundOneSegment(pointsCorner[0], pointsCorner[1], ul, lr);
                                if (ptsCorner !== null)
                                    count = armyc2.c2sd.JavaLineArray.countsupport.GetDISMFixCountDouble(ptsCorner[0], ptsCorner[1], clipBounds);
                                else
                                    count = 20;
                            } else
                                count = armyc2.c2sd.JavaLineArray.countsupport.GetDISMFixCountDouble(pLinePoints[0], pLinePoints[1], clipBounds);
                            break;
                        default:
                            count = vblCounter;
                            break;
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.countsupport._className, "GetCountersDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetCountersDouble " + Integer.toString(vbiDrawThis), exc));
                    } else {
                        throw exc;
                    }
                }
                return Math.floor(count);
            },
            GetReefCount: function(pLinePoints, vblCounter) {
                var count = 0;
                try {
                    var d = 0;
                    for (var j = 0; j < vblCounter - 1; j++) {
                        d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[j], pLinePoints[j + 1]);
                        count += Math.floor(5 * Math.floor(d) / 40);
                    }
                    count += 2 * vblCounter;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.countsupport._className, "GetReefCount", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetReefCount", exc));
                    } else {
                        throw exc;
                    }
                }
                return count;
            },
            GetRestrictedAreaCount: function(pLinePoints, vblCounter) {
                var count = 0;
                try {
                    var d = 0;
                    for (var j = 0; j < vblCounter - 1; j++) {
                        d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[j], pLinePoints[j + 1]);
                        count += Math.floor(4 * Math.floor(d) / 15);
                    }
                    count += 2 * vblCounter;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.countsupport._className, "GetRestrictedAreaCount", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetRestrictedAreaCount", exc));
                    } else {
                        throw exc;
                    }
                }
                return count;
            },
            GetPipeCount: function(pLinePoints, vblCounter) {
                var count = 0;
                try {
                    var d = 0;
                    for (var j = 0; j < vblCounter - 1; j++) {
                        d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[j], pLinePoints[j + 1]);
                        count += Math.floor(3 * Math.floor(d) / 20);
                    }
                    count += 2 * vblCounter;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.countsupport._className, "GetPipeCount", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetPipeCount", exc));
                    } else {
                        throw exc;
                    }
                }
                return count;
            },
            GetXPointsCount: function(pOriginalLinePoints, vblCounter) {
                var xCounter = 0;
                try {
                    var j = 0;
                    var d = 0;
                    var numThisSegment = 0;
                    for (j = 0; j < vblCounter - 1; j++) {
                        d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pOriginalLinePoints[j], pOriginalLinePoints[j + 1]);
                        //numThisSegment = Math.floor(((d - 10) / 20));
                        numThisSegment = Math.ceil(((d - 10) / 20));
                        xCounter += 4 * numThisSegment;
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.countsupport._className, "GetXPointsCount", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetXPointsCount", exc));
                    } else {
                        throw exc;
                    }
                }
                return xCounter;
            },
            GetLVOCount: function(pOriginalLinePoints, vblCounter) {
                var lEllipseCounter = 0;
                try {
                    var d = 0;
                    var lHowManyThisSegment = 0;
                    var j = 0;
                    for (j = 0; j < vblCounter - 1; j++) {
                        d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pOriginalLinePoints[j], pOriginalLinePoints[j + 1]);
                        //lHowManyThisSegment = Math.floor(((d - 20) / 20)) + 1;
                        lHowManyThisSegment = Math.ceil(((d - 20) / 20)) + 1;
                        lEllipseCounter += lHowManyThisSegment * 37;
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.countsupport._className, "GetLVOCount", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetLVOCount", exc));
                    } else {
                        throw exc;
                    }
                }
                return lEllipseCounter;
            },
            GetIcingCount: function(points, vblCounter) {
                var total = 2 * vblCounter;
                try {
                    var length = 0;
                    for (var j = 0; j < vblCounter - 1; j++) {
                        length = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(points[j], points[j + 1]);
                        length = (length / 15) * 4;
                        total += length;
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.countsupport._className, "GetIcingCount", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetIcingCount", exc));
                    } else {
                        throw exc;
                    }
                }
                return total;
            },
            GetITDQty: function(pLinePoints, vblCounter) {
                var total = 0;
                try {
                    var j = 0;
                    var d = 0;
                    var n = 0;
                    for (j = 0; j < vblCounter - 1; j++) {
                        d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[j], pLinePoints[j + 1]);
                        n = 2 * Math.floor((d / 15));
                        if (n < 2)
                            n = 2;
                        total += n;
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.countsupport._className, "GetITDQty", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetITDQty", exc));
                    } else {
                        throw exc;
                    }
                }
                return total;
            },
            GetConverganceQty: function(pLinePoints, vblCounter) {
                var total = vblCounter;
                try {
                    var j = 0;
                    var d = 0;
                    for (j = 0; j < vblCounter - 1; j++) {
                        d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[j], pLinePoints[j + 1]);
                        total += 4 * Math.floor((d / 10));
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.countsupport._className, "GetConverganceQty", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetConverganceQty", exc));
                    } else {
                        throw exc;
                    }
                }
                return total;
            },
            GetDitchCountDouble: function(pLinePoints, vblCounter, vbiDrawThis) {
                var vblXCounter = 0;
                try {
                    var j = 0;
                    var nHowManyThisSegment = 0;
                    var dHowFar = 0;
                    vblXCounter = vblCounter;
                    for (j = 0; j < vblCounter - 1; j++) {
                        dHowFar = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[j], pLinePoints[j + 1]);
                        nHowManyThisSegment = Math.floor(((dHowFar - 1) / 12));
                        if (dHowFar > 24) {
                            switch (vbiDrawThis) {
                                case 23132000:
                                    vblXCounter += 5 * nHowManyThisSegment + 1;
                                    break;
                                default:
                                    vblXCounter += 4 * nHowManyThisSegment;
                                    break;
                            }
                        } else {
                            vblXCounter += 2;
                        }
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.countsupport._className, "GetDitchcountDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetDitchCountDouble " + Integer.toString(vbiDrawThis), exc));
                    } else {
                        throw exc;
                    }
                }
                return vblXCounter;
            },
            GetSquallQty: function(pLinePoints, quantity, length, numPoints) {
                var counter = 0;
                try {
                    var j = 0;
                    var dist = 0;
                    var numCurves = 0;
                    for (j = 0; j < numPoints - 1; j++) {
                        dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[j], pLinePoints[j + 1]);
                        numCurves = Math.floor((dist / length));
                        counter += numCurves * quantity;
                        if (numCurves === 0) {
                            counter += 2;
                        }
                    }
                    if (counter < numPoints) {
                        counter = numPoints;
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.countsupport._className, "GetSquallQty", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetSquallQty", exc));
                    } else {
                        throw exc;
                    }
                }
                return counter;
            },
            GetSquallSegQty: function(StartPt, EndPt, quantity, length) {
                var qty = 0;
                try {
                    var dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(StartPt, EndPt);
                    var numCurves = Math.floor((dist / length));
                    qty = numCurves * quantity;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.countsupport._className, "GetSquallSegQty", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetSquallSegQty", exc));
                    } else {
                        throw exc;
                    }
                }
                return qty;
            },
            GetFORTLCountDouble: function(pLinePoints, linetype, vblCounter) {
                var lCounter = 0;
                try {
                    var j = 0;
                    var dCounter = 0;
                    var dIncrement = 0;
                    switch (linetype) {
                        case 31131100:
                        case 31131000:
                        case 31131200:
                        case 31131300:
                            dIncrement = 60;
                            break;
                        case 31142000:
                            dIncrement = 20;
                            break;
                        default:
                            dIncrement = 20;
                            break;
                    }
                    for (j = 0; j < vblCounter - 1; j++) {
                        dCounter = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[j], pLinePoints[j + 1]);
                        switch (linetype) {
                            case 31131200:
                                dCounter = (dCounter / dIncrement) * 13;
                                break;
                            case 31131300:
                                dCounter = (dCounter / dIncrement) * 17;
                                break;
                            default:
                                dCounter = (dCounter / dIncrement) * 10;
                                break;
                        }
                        if (dCounter < 4) {
                            dCounter = 4;
                        }
                        lCounter += Math.floor(dCounter);
                    }
                    lCounter += 10 + vblCounter;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.countsupport._className, "GetFORTLCountDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetFORTLCountDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return lCounter;
            },
            GetByDifSegment: function(points, pointsCorner) {
                try {
                    var point_mid = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    if (pointsCorner === null) {
                        pointsCorner = new Array(2);
                        armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pointsCorner);
                    }
                    point_mid.x = (points[0].x + points[1].x) / 2;
                    point_mid.y = (points[0].y + points[1].y) / 2;
                    pointsCorner[0].x = points[0].x - point_mid.x + points[2].x;
                    pointsCorner[0].y = points[0].y - point_mid.y + points[2].y;
                    pointsCorner[1].x = points[1].x - point_mid.x + points[2].x;
                    pointsCorner[1].y = points[1].y - point_mid.y + points[2].y;
                    return;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.countsupport._className, "GetByDifSegment", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetByDifSegment", exc));
                    } else {
                        throw exc;
                    }
                }
            },
            GetDISMFixCountDouble: function(FirstLinePoint, LastLinePoint, clipBounds) {
                var counter = 0;
                try {
                    var savepoints = new Array(2);
                    var dLength = 0;
                    var dJaggyHalfAmp = 0;
                    var dJaggyHalfPeriod = 0;
                    var iNumJaggies = 0;
                    savepoints[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(FirstLinePoint);
                    savepoints[1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(LastLinePoint);
                    if (clipBounds !== null) {
                        var ul = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(clipBounds.getMinX(), clipBounds.getMinY());
                        var lr = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(clipBounds.getMaxX(), clipBounds.getMaxY());
                        savepoints = armyc2.c2sd.JavaLineArray.lineutility.BoundOneSegment(FirstLinePoint, LastLinePoint, ul, lr);
                    }
                    if (savepoints === null)
                        return 0;
                    dLength = Math.sqrt((savepoints[1].x - savepoints[0].x) * (savepoints[1].x - savepoints[0].x) + (savepoints[1].y - savepoints[0].y) * (savepoints[1].y - savepoints[0].y));
                    dJaggyHalfAmp = dLength / 15;
                    if (dJaggyHalfAmp > armyc2.c2sd.JavaLineArray.countsupport.maxLength) {
                        dJaggyHalfAmp = armyc2.c2sd.JavaLineArray.countsupport.maxLength;
                    }
                    if (dJaggyHalfAmp < armyc2.c2sd.JavaLineArray.countsupport.minLength) {
                        dJaggyHalfAmp = armyc2.c2sd.JavaLineArray.countsupport.minLength;
                    }
                    dJaggyHalfPeriod = dJaggyHalfAmp / 1.5;
                    iNumJaggies = Math.floor((dLength / dJaggyHalfPeriod)) - 3;
                    if (iNumJaggies < 0) {
                        iNumJaggies = 0;
                    }
                    savepoints = null;
                    counter = 20 + iNumJaggies * 3;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.countsupport._className, "GetDISMFixCount", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetDISMFixCount", exc));
                    } else {
                        throw exc;
                    }
                }
                return counter;
            },
            maxLength: 100,
            minLength: 5,
            _className: "countsupport"
        };
