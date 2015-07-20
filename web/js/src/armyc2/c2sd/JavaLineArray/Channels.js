var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.JavaLineArray = armyc2.c2sd.JavaLineArray || {};
armyc2.c2sd.JavaLineArray.Channels =
        {
            setClient: function(value) {
                _client = value;
            }, 
//            setAffiliation: function(value) {
//                _affiliation = value;
//            }, 
//            setShiftLines: function(value) {
//                _shiftLines = value;
//            }, 
            getShiftLines: function() {
                return armyc2.c2sd.JavaLineArray.Channels._shiftLines;
            }, 
            ConnectArrayTrueDouble: function(nWidth, nCounter, pLinePoints, pResultChannelPoints) {
                try {
                    var nPointCounter = 0;
                    var nDiff1X = 0;
                    var nDiff2X = 0;
                    var nDiff1Y = 0;
                    var nDiff2Y = 0;
                    var nLast = 0;
                    var lOrient = 0;
                    var LinePoint1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    var LinePoint2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    var LinePoint3 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    var ResultChannelPoint = new armyc2.c2sd.JavaLineArray.CChannelPoints2();
                    LinePoint1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[0]);
                    LinePoint2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[1]);
                    nDiff1X = LinePoint2.x - LinePoint1.x;
                    nDiff1Y = LinePoint2.y - LinePoint1.y;
                    if (nDiff1X === 0) {
                        if (nDiff1Y > 0)
                            nLast = 6;
                        if (nDiff1Y < 0)
                            nLast = 4;
                    }
                    if (nDiff1Y === 0) {
                        if (nDiff1X > 0)
                            nLast = 0;
                        if (nDiff1X < 0)
                            nLast = 2;
                    }
                    if (nDiff1X < 0 && nDiff1Y > 0)
                        nLast = 3;
                    if (nDiff1X > 0 && nDiff1Y > 0)
                        nLast = 0;
                    if (nDiff1X < 0 && nDiff1Y < 0)
                        nLast = 3;
                    if (nDiff1X > 0 && nDiff1Y < 0)
                        nLast = 0;
                    ResultChannelPoint = armyc2.c2sd.JavaLineArray.Channels.GetTrueEndPointDouble(nWidth, pLinePoints[0], pLinePoints[1], nLast);
                    pResultChannelPoints[0] = new armyc2.c2sd.JavaLineArray.CChannelPoints2(ResultChannelPoint);
                    for (nPointCounter = 1; nPointCounter < nCounter; nPointCounter++) {
                        LinePoint1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[nPointCounter - 1]);
                        LinePoint2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[nPointCounter]);
                        LinePoint3 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[nPointCounter + 1]);
                        nDiff1X = LinePoint2.x - LinePoint1.x;
                        nDiff2X = LinePoint3.x - LinePoint2.x;
                        nDiff1Y = LinePoint2.y - LinePoint1.y;
                        nDiff2Y = LinePoint3.y - LinePoint2.y;
                        if (nDiff1X > 0 && nDiff2X > 0) {
                            switch (nLast) {
                                case 0:
                                case 3:
                                case 4:
                                case 7:
                                    lOrient = 0;
                                    break;
                                case 1:
                                case 2:
                                case 5:
                                case 6:
                                    lOrient = 3;
                                    break;
                                default:
                                    break;
                            }
                        }
                        if (nDiff1X > 0 && nDiff2X === 0) {
                            switch (nLast) {
                                case 0:
                                case 3:
                                case 4:
                                case 7:
                                    if (nDiff2Y > 0)
                                        lOrient = 1;
                                    if (nDiff2Y < 0)
                                        lOrient = 0;
                                    break;
                                case 1:
                                case 2:
                                case 5:
                                case 6:
                                    if (nDiff2Y > 0)
                                        lOrient = 2;
                                    if (nDiff2Y < 0)
                                        lOrient = 3;
                                    break;
                                default:
                                    break;
                            }
                        }
                        if (nDiff1X < 0 && nDiff2X === 0) {
                            switch (nLast) {
                                case 0:
                                case 3:
                                case 4:
                                case 7:
                                    if (nDiff2Y > 0)
                                        lOrient = 3;
                                    if (nDiff2Y < 0)
                                        lOrient = 2;
                                    break;
                                case 1:
                                case 2:
                                case 5:
                                case 6:
                                    if (nDiff2Y > 0)
                                        lOrient = 0;
                                    if (nDiff2Y < 0)
                                        lOrient = 1;
                                    break;
                                default:
                                    break;
                            }
                        }
                        if (nDiff1X === 0 && nDiff2X > 0) {
                            switch (nLast) {
                                case 0:
                                case 3:
                                case 4:
                                case 7:
                                    if (nDiff1Y > 0)
                                        lOrient = 2;
                                    if (nDiff1Y < 0)
                                        lOrient = 0;
                                    break;
                                case 1:
                                case 2:
                                case 5:
                                case 6:
                                    if (nDiff1Y > 0)
                                        lOrient = 1;
                                    if (nDiff1Y < 0)
                                        lOrient = 3;
                                    break;
                                default:
                                    break;
                            }
                        }
                        if (nDiff1X === 0 && nDiff2X < 0) {
                            switch (nLast) {
                                case 0:
                                case 3:
                                case 4:
                                case 7:
                                    if (nDiff1Y > 0)
                                        lOrient = 3;
                                    if (nDiff1Y < 0)
                                        lOrient = 1;
                                    break;
                                case 1:
                                case 2:
                                case 5:
                                case 6:
                                    if (nDiff1Y > 0)
                                        lOrient = 0;
                                    if (nDiff1Y < 0)
                                        lOrient = 2;
                                    break;
                                default:
                                    break;
                            }
                        }
                        if (nDiff1X < 0 && nDiff2X < 0) {
                            switch (nLast) {
                                case 0:
                                case 3:
                                case 4:
                                case 7:
                                    lOrient = 3;
                                    break;
                                case 1:
                                case 2:
                                case 5:
                                case 6:
                                    lOrient = 0;
                                    break;
                                default:
                                    break;
                            }
                        }
                        if (new Boolean(nDiff1X > 0 & nDiff2X < 0).valueOf()) {
                            switch (nLast) {
                                case 0:
                                case 3:
                                case 4:
                                case 7:
                                    lOrient = 1;
                                    break;
                                case 1:
                                case 2:
                                case 5:
                                case 6:
                                    lOrient = 2;
                                    break;
                                default:
                                    break;
                            }
                        }
                        if (new Boolean(nDiff1X < 0 & nDiff2X > 0).valueOf()) {
                            switch (nLast) {
                                case 0:
                                case 3:
                                case 4:
                                case 7:
                                    lOrient = 2;
                                    break;
                                case 1:
                                case 2:
                                case 5:
                                case 6:
                                    lOrient = 1;
                                    break;
                                default:
                                    break;
                            }
                        }
                        if (nDiff1X === 0 && nDiff2X === 0) {
                            switch (nLast) {
                                case 4:
                                    if (nDiff2Y < 0)
                                        lOrient = 0;
                                    break;
                                case 6:
                                    if (nDiff2Y > 0)
                                        lOrient = 0;
                                    break;
                                case 5:
                                    if (nDiff2Y < 0)
                                        lOrient = 3;
                                    break;
                                case 7:
                                    if (nDiff2Y > 0)
                                        lOrient = 3;
                                    break;
                                default:
                                    break;
                            }
                        }
                        pResultChannelPoints[nPointCounter] = armyc2.c2sd.JavaLineArray.Channels.ConnectTrueDouble2(nWidth, LinePoint1, LinePoint2, LinePoint3, lOrient);
                        if (nDiff2X === 0) {
                            switch (lOrient) {
                                case 0:
                                    if (nDiff2Y > 0) {
                                        nLast = 6;
                                    }
                                    if (nDiff2Y < 0) {
                                        nLast = 4;
                                    }
                                    break;
                                case 1:
                                    if (nDiff2Y > 0) {
                                        nLast = 7;
                                    }
                                    if (nDiff2Y < 0) {
                                        nLast = 5;
                                    }
                                    break;
                                case 2:
                                    if (nDiff2Y > 0) {
                                        nLast = 6;
                                    }
                                    if (nDiff2Y < 0) {
                                        nLast = 4;
                                    }
                                    break;
                                case 3:
                                    if (nDiff2Y > 0) {
                                        nLast = 7;
                                    }
                                    if (nDiff2Y < 0) {
                                        nLast = 5;
                                    }
                                    break;
                                default:
                                    break;
                            }
                        }
                        if (nDiff2X > 0) {
                            switch (lOrient) {
                                case 0:
                                    nLast = 0;
                                    break;
                                case 1:
                                    nLast = 1;
                                    break;
                                case 2:
                                    nLast = 0;
                                    break;
                                case 3:
                                    nLast = 1;
                                    break;
                                default:
                                    break;
                            }
                        }
                        if (nDiff2X < 0) {
                            switch (lOrient) {
                                case 0:
                                    nLast = 2;
                                    break;
                                case 1:
                                    nLast = 3;
                                    break;
                                case 2:
                                    nLast = 2;
                                    break;
                                case 3:
                                    nLast = 3;
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                    ResultChannelPoint = armyc2.c2sd.JavaLineArray.Channels.GetTrueEndPointDouble(nWidth, pLinePoints[nCounter], pLinePoints[nCounter - 1], nLast);
                    pResultChannelPoints[nCounter] = new armyc2.c2sd.JavaLineArray.CChannelPoints2(ResultChannelPoint);
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.Channels._className, "ConnectArrayTrueDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ConnectArrayTrueDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return pResultChannelPoints;
            },
            GetChannel2Double: function(nChannelWidth, vblCounter, pLinePoints, pResultChannelPoints) {
                try {
                    pResultChannelPoints = armyc2.c2sd.JavaLineArray.Channels.ConnectArrayTrueDouble(Math.floor(nChannelWidth / 2), vblCounter - 1, pLinePoints, pResultChannelPoints);
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.Channels._className, "GetChannel2Double", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetChannel2Double", exc));
                    } else {
                        throw exc;
                    }
                }
                return pResultChannelPoints;
            },
            GetLowerChannelLineDouble: function(pChannelPoints, vblCounter, pResultLinePoints) {
                try {
                    var j = 0;
                    for (j = 0; j < vblCounter; j++) {
                        pResultLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pChannelPoints[j].m_Line1);
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.Channels._className, "GetLowerChannelLineDouble", new armyc2.c2sd.renderer.utilities.RendererException("GetLowerChannelLineDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return pResultLinePoints;
            },
            GetUpperChannelLineDouble: function(pChannelPoints, vblCounter, pResultLinePoints) {
                try {
                    var j;
                    for (j = 0; j < vblCounter; j++) {
                        pResultLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pChannelPoints[j].m_Line2);
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.Channels._className, "GetUpperChannelLineDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetUpperChannelLineDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return pResultLinePoints;
            },
            FenceType: function(linetype) {
                var bolResult = 0;
                try {
                    switch (linetype) {
                        case 231117301:
                        case 231117201:
                        case 231117101:
                        case 231117300:
                        case 231117200:
                        case 231117100:
                        case 231116000:
                        case 231115000:
                        case 231111000:
                        case 231114000:
                        case 231112000:
                        case 231113000:
                            bolResult = 1;
                            break;
                        default:
                            bolResult = 0;
                            break;
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.Channels._className, "FenceType", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside FenceType " + Integer.toString(linetype), exc));
                    } else {
                        throw exc;
                    }
                }
                return bolResult;
            },
            GetTripleCountDouble: function(pLinePoints, vblCounter, linetype) {
                var lTotal = 0;
                try {
                    var j = 0;
                    var lHowManyThisSegment = 0;
                    var d = 0;
                    for (j = 0; j < vblCounter - 1; j++) {
                        d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints[j], pLinePoints[j + 1]);
                        if (d <= 10) {
                            lHowManyThisSegment = 0;
                        } else {
                            lHowManyThisSegment = Math.floor(((d - 10) / 10));
                        }
                        lTotal += lHowManyThisSegment;
                    }
                    switch (linetype) {
                        case 231117101:
                        case 231117201:
                        case 231117301:
                            lTotal = 3 * vblCounter;
                            break;
                        case 231117100:
                        case 231117200:
                        case 231117300:
                            lTotal = 6 * vblCounter + 37 * lTotal;
                            break;
                        case 231116000:
                        case 231115000:
                        case 231111000:
                        case 231114000:
                        case 231112000:
                        case 231113000:
                            lTotal = 4 * vblCounter + 4 * lTotal;
                            break;
                        case 15000000:
                            lTotal = 2 * vblCounter + 1;
                            break;
                        default:
                            lTotal = 2 * vblCounter;
                            break;
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.Channels._className, "GetTripleCountDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetTripleCountDouble " + Integer.toString(linetype), exc));
                    } else {
                        throw exc;
                    }
                }
                return lTotal;
            },
            CoordIL2Double: function(nPrinter, pLinePoints, nUpperLower, vblCounter, linetype, vblChannelWidth) {
                var pLinePoints2 = new Array(vblCounter);
                try {
                    var j;
                    var channelWidth = 20;
                    var pNewLinePoints = new Array(vblCounter);
                    var pChannelPoints = new Array(vblCounter);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pLinePoints2);
                    for (j = 0; j < vblCounter; j++) {
                        pNewLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLinePoints[j]);
                    }
                    switch (linetype) {
                        case 231117301:
                        case 231117201:
                        case 231117101:
                        case 231117300:
                        case 231117200:
                        case 231117100:
                        case 231116000:
                        case 231115000:
                        case 231114000:
                        case 231111000:
                        case 231113000:
                        case 231112000:
                        case 23111000:
                        case 23111001:
                        case 15000000:
                            channelWidth = vblChannelWidth;
                            break;
                        default:
                            channelWidth = vblChannelWidth;
                            break;
                    }
                    if (linetype !== 22123000 && linetype !== 22123001 &&
                            linetype!==22123002) 
                    {
                        channelWidth /= 2;
                    }
                    pChannelPoints = armyc2.c2sd.JavaLineArray.Channels.GetChannel2Double(channelWidth * nPrinter, vblCounter, pNewLinePoints, pChannelPoints);
                    if (nUpperLower === 1) {
                        pNewLinePoints = armyc2.c2sd.JavaLineArray.Channels.GetUpperChannelLineDouble(pChannelPoints, vblCounter, pNewLinePoints);
                        for (j = 0; j < vblCounter; j++) {
                            pLinePoints2[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pNewLinePoints[j]);
                        }
                    }
                    if (nUpperLower === 0) {
                        pNewLinePoints = armyc2.c2sd.JavaLineArray.Channels.GetLowerChannelLineDouble(pChannelPoints, vblCounter, pNewLinePoints);
                        for (j = 0; j < vblCounter; j++) {
                            pLinePoints2[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pNewLinePoints[j]);
                        }
                    }
                    pNewLinePoints = null;
                    pChannelPoints = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.Channels._className, "CoordIL2Double", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside CoordIL2Double", exc));
                    } else {
                        throw exc;
                    }
                }
                return pLinePoints2;
            },
            GetAAFNTDouble: function(dPrinter, pLowerLinePoints, lLowerCounter, pUpperLinePoints, lUpperCounter, ArrowLinePoint, pLinePoints, dOffsetFactor) {
                try {
                    var j = 0;
                    var lCounter;
                    var x = 0;
                    var y = 0;
                    var outerTipLinePoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[0]);
                    var dottedTipLinePoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[0]);
                    var endLinePoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[0]);
                    var tempLinePoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[0]);
                    var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    lCounter = lLowerCounter + lUpperCounter + 8;
                    for (j = 0; j < lLowerCounter; j++) {
                        pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLowerLinePoints[j]);
                    }
                    pLinePoints[lLowerCounter - 1].style = 5;
                    for (j = 0; j < lUpperCounter; j++) {
                        pLinePoints[lLowerCounter + j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[j]);
                    }
                    for (j = lCounter - 8; j < lCounter; j++) {
                        pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[0]);
                    }
                    endLinePoint.x = Math.floor(((pLowerLinePoints[lLowerCounter - 1].x + pUpperLinePoints[lUpperCounter - 1].x) / 2));
                    endLinePoint.y = Math.floor(((pLowerLinePoints[lLowerCounter - 1].y + pUpperLinePoints[lUpperCounter - 1].y) / 2));
                    x = (pLowerLinePoints[lLowerCounter - 1].x - pUpperLinePoints[lUpperCounter - 1].x);
                    y = (pLowerLinePoints[lLowerCounter - 1].y - pUpperLinePoints[lUpperCounter - 1].y);
                    x = x * x;
                    y = y * y;
                    outerTipLinePoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ArrowLinePoint);
                    dottedTipLinePoint = armyc2.c2sd.JavaLineArray.lineutility.GetOffsetPointDouble(endLinePoint, outerTipLinePoint, Math.floor((dOffsetFactor * dPrinter)));
                    pLinePoints[lCounter - 9].style = 5;
                    pLinePoints[lCounter - 8] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLowerLinePoints[lLowerCounter - 1]);
                    pt0.x = pUpperLinePoints[lUpperCounter - 1].x;
                    pt0.y = pUpperLinePoints[lUpperCounter - 1].y;
                    pt1.x = pLowerLinePoints[lLowerCounter - 1].x;
                    pt1.y = pLowerLinePoints[lLowerCounter - 1].y;
                    tempLinePoint = armyc2.c2sd.JavaLineArray.lineutility.GetOffsetPointDouble(pt0, pt1, Math.floor((dOffsetFactor * dPrinter)));
                    pLinePoints[lCounter - 7] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tempLinePoint);
                    pLinePoints[lCounter - 6] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(outerTipLinePoint);
                    pt0.x = pLowerLinePoints[lLowerCounter - 1].x;
                    pt0.y = pLowerLinePoints[lLowerCounter - 1].y;
                    pt1.x = pUpperLinePoints[lUpperCounter - 1].x;
                    pt1.y = pUpperLinePoints[lUpperCounter - 1].y;
                    tempLinePoint = armyc2.c2sd.JavaLineArray.lineutility.GetOffsetPointDouble(pt0, pt1, Math.floor((dOffsetFactor * dPrinter)));
                    pLinePoints[lCounter - 5] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tempLinePoint);
                    pLinePoints[lCounter - 4] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[lUpperCounter - 1]);
                    pLinePoints[lCounter - 4].style = 5;
                    pt0.x = pUpperLinePoints[lUpperCounter - 1].x;
                    pt0.y = pUpperLinePoints[lUpperCounter - 1].y;
                    pt1.x = pLowerLinePoints[lLowerCounter - 1].x;
                    pt1.y = pLowerLinePoints[lLowerCounter - 1].y;
                    tempLinePoint = armyc2.c2sd.JavaLineArray.lineutility.GetOffsetPointDouble(pt0, pt1, Math.floor((2 * dOffsetFactor * dPrinter)));
                    pLinePoints[lCounter - 3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tempLinePoint);
                    pLinePoints[lCounter - 3].style = 2;
                    pLinePoints[lCounter - 2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(dottedTipLinePoint);
                    pLinePoints[lCounter - 2].style = 2;
                    pt0.x = pLowerLinePoints[lLowerCounter - 1].x;
                    pt0.y = pLowerLinePoints[lLowerCounter - 1].y;
                    pt1.x = pUpperLinePoints[lUpperCounter - 1].x;
                    pt1.y = pUpperLinePoints[lUpperCounter - 1].y;
                    tempLinePoint = armyc2.c2sd.JavaLineArray.lineutility.GetOffsetPointDouble(pt0, pt1, Math.floor((2 * dOffsetFactor * dPrinter)));
                    pLinePoints[lCounter - 1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(tempLinePoint);
                    pLinePoints[lCounter - 1].style = 5;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.Channels._className, "GetAAFNTDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetAAFNTDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return;
            },
            GetAXADDouble: function(dPrinter, pLowerLinePoints, lLowerCounter, pUpperLinePoints, lUpperCounter, ArrowLinePoint, pLinePoints, vbiDrawThis, dOffsetFactor) {
                try {
                    var j = 0;
                    var lCounter = lLowerCounter + lUpperCounter + 8;
                    var x = 0;
                    var y = 0;
                    var OuterTipLinePoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[0]);
                    var InnerTipLinePoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[0]);
                    var EndLinePoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[0]);
                    var TempLinePoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[0]);
                    var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var origArrowPt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ArrowLinePoint);
                    var ptUpper0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[lUpperCounter - 1]);
                    var ptLower0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLowerLinePoints[lLowerCounter - 1]);
                    var dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLowerLinePoints[lLowerCounter - 1], pLowerLinePoints[lLowerCounter - 2]);
                    if (vbiDrawThis === 21710000) {
                        if (dist > 45) {
                            var midPt = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pLowerLinePoints[lLowerCounter - 2], pUpperLinePoints[lUpperCounter - 2], 0);
                            ArrowLinePoint = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(ArrowLinePoint, midPt, 45);
                            pLowerLinePoints[lLowerCounter - 1] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pLowerLinePoints[lLowerCounter - 1], pLowerLinePoints[lLowerCounter - 2], 45);
                            pUpperLinePoints[lUpperCounter - 1] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pUpperLinePoints[lUpperCounter - 1], pUpperLinePoints[lUpperCounter - 2], 45);
                        }
                    }
                    for (j = 0; j < lLowerCounter; j++) {
                        pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLowerLinePoints[j]);
                    }
                    pLinePoints[lLowerCounter - 1].style = 5;
                    for (j = 0; j < lUpperCounter; j++) {
                        pLinePoints[lLowerCounter + j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[j]);
                    }
                    for (j = lCounter - 8; j < lCounter; j++) {
                        pLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[0]);
                    }
                    EndLinePoint.x = Math.floor(((pLowerLinePoints[lLowerCounter - 1].x + pUpperLinePoints[lUpperCounter - 1].x) / 2));
                    EndLinePoint.y = Math.floor(((pLowerLinePoints[lLowerCounter - 1].y + pUpperLinePoints[lUpperCounter - 1].y) / 2));
                    x = (pLowerLinePoints[lLowerCounter - 1].x - pUpperLinePoints[lUpperCounter - 1].x);
                    y = (pLowerLinePoints[lLowerCounter - 1].y - pUpperLinePoints[lUpperCounter - 1].y);
                    x = x * x;
                    y = y * y;
                    OuterTipLinePoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(ArrowLinePoint);
                    InnerTipLinePoint = armyc2.c2sd.JavaLineArray.lineutility.GetOffsetPointDouble(EndLinePoint, OuterTipLinePoint, -Math.floor((dOffsetFactor * dPrinter)));
                    pLinePoints[lCounter - 9].style = 5;
                    pLinePoints[lCounter - 8] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(OuterTipLinePoint);
                    pt0.x = pUpperLinePoints[lUpperCounter - 1].x;
                    pt0.y = pUpperLinePoints[lUpperCounter - 1].y;
                    pt1.x = pLowerLinePoints[lLowerCounter - 1].x;
                    pt1.y = pLowerLinePoints[lLowerCounter - 1].y;
                    TempLinePoint = armyc2.c2sd.JavaLineArray.lineutility.GetOffsetPointDouble(pt0, pt1, Math.floor((dOffsetFactor * dPrinter)));
                    pLinePoints[lCounter - 7] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(TempLinePoint);
                    pLinePoints[lCounter - 6] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLowerLinePoints[lLowerCounter - 1]);
                    pLinePoints[lCounter - 5] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(InnerTipLinePoint);
                    pLinePoints[lCounter - 4] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[lUpperCounter - 1]);
                    pt0.x = pLowerLinePoints[lLowerCounter - 1].x;
                    pt0.y = pLowerLinePoints[lLowerCounter - 1].y;
                    pt1.x = pUpperLinePoints[lUpperCounter - 1].x;
                    pt1.y = pUpperLinePoints[lUpperCounter - 1].y;
                    TempLinePoint = armyc2.c2sd.JavaLineArray.lineutility.GetOffsetPointDouble(pt0, pt1, Math.floor((dOffsetFactor * dPrinter)));
                    pLinePoints[lCounter - 3] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(TempLinePoint);
                    pLinePoints[lCounter - 2] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(OuterTipLinePoint);
                    pLinePoints[lCounter - 1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(OuterTipLinePoint);
                    pLinePoints[lCounter - 1].style = 5;
                    switch (vbiDrawThis) {
                        case 22521421:
                        case 22521420:
                        case 22521300:
                        case 22521200:
                        case 22521100:
                        case 21700000:
                        case 21710000:
                            pLinePoints[lCounter - 6].style = 5;
                            pLinePoints[lCounter - 5].style = 5;
                            break;
                        default:
                            break;
                    }
                    if (vbiDrawThis === 21710000 && dist > 45) {
                        pUpperLinePoints[lUpperCounter - 1].x = ptUpper0.x;
                        pUpperLinePoints[lUpperCounter - 1].y = ptUpper0.y;
                        pLowerLinePoints[lLowerCounter - 1].x = ptLower0.x;
                        pLowerLinePoints[lLowerCounter - 1].y = ptLower0.y;
                        ArrowLinePoint.x = origArrowPt.x;
                        ArrowLinePoint.y = origArrowPt.y;
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.Channels._className, "GetAXADDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetAXADDouble " + Integer.toString(vbiDrawThis), exc));
                    } else {
                        throw exc;
                    }
                }
                return;
            },
            GetChannelArray2Double: function(nPrinter, pLinePoints, nUpperLower, vblCounter, vbiDrawThis, vblChannelWidth) {
                try {
                    switch (vbiDrawThis) {
                        case 231117301:
                        case 231117201:
                        case 231117101:
                        case 22123001:
                        case 22123000:
                        case 22123002:
                        case 22521200:
                        case 22521300:
                        case 22521100:
                        case 21700000:
                        case 21710000:
                        case 22521410:
                        case 22521411:
                        case 22320000:
                        case 22320001:
                        case 22521420:
                        case 22521421:
                        case 23111000:
                        case 231117300:
                        case 231117200:
                        case 231117100:
                        case 231116000:
                        case 231115000:
                        case 231114000:
                        case 231111000:
                        case 231112000:
                        case 231113000:
                        case 231113001:
                        case 231113002:
                        case 231113003:
                        case 15000000:
                            pLinePoints = armyc2.c2sd.JavaLineArray.Channels.CoordIL2Double(nPrinter, pLinePoints, nUpperLower, vblCounter, vbiDrawThis, vblChannelWidth);
                            break;
                        default:
                            break;
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.Channels._className, "GetChannelArray2Double", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetChannelArray2Double " + Integer.toString(vbiDrawThis), exc));
                    } else {
                        throw exc;
                    }
                }
                return pLinePoints;
            },
            GetTrueEndPointDouble: function(nWidth, EndLinePoint, NextLinePoint, lLast) {
                var cAnswers = new armyc2.c2sd.JavaLineArray.CChannelPoints2();
                try {
                    var LinePoint1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var LinePoint2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var m = 0;
                    var b = 0;
                    var bPerpendicular = 0;
                    var Upperb = 0;
                    var Lowerb = 0;
                    var dWidth = nWidth;
                    var bolVertical = 0;
                    var pdResult = new armyc2.c2sd.JavaLineArray.ref();
                    bolVertical = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueLinesDouble(nWidth, EndLinePoint, NextLinePoint, pdResult);
                    m = pdResult.value[0];
                    b = pdResult.value[1];
                    Upperb = pdResult.value[3];
                    Lowerb = pdResult.value[5];
                    if (bolVertical === 0) {
                        switch (lLast) {
                            case 4:
                            case 6:
                                cAnswers.m_Line1.x = EndLinePoint.x - dWidth;
                                cAnswers.m_Line1.y = EndLinePoint.y;
                                cAnswers.m_Line2.x = EndLinePoint.x + dWidth;
                                cAnswers.m_Line2.y = EndLinePoint.y;
                                break;
                            case 5:
                            case 7:
                                cAnswers.m_Line1.x = EndLinePoint.x + dWidth;
                                cAnswers.m_Line1.y = EndLinePoint.y;
                                cAnswers.m_Line2.x = EndLinePoint.x - dWidth;
                                cAnswers.m_Line2.y = EndLinePoint.y;
                                break;
                            default:
                                break;
                        }
                    }
                    if (m === 0) {
                        switch (lLast) {
                            case 0:
                            case 2:
                                cAnswers.m_Line1.x = EndLinePoint.x;
                                cAnswers.m_Line1.y = EndLinePoint.y - dWidth;
                                cAnswers.m_Line2.x = EndLinePoint.x;
                                cAnswers.m_Line2.y = EndLinePoint.y + dWidth;
                                break;
                            case 1:
                            case 3:
                                cAnswers.m_Line1.x = EndLinePoint.x;
                                cAnswers.m_Line1.y = EndLinePoint.y + dWidth;
                                cAnswers.m_Line2.x = EndLinePoint.x;
                                cAnswers.m_Line2.y = EndLinePoint.y - dWidth;
                                break;
                            default:
                                break;
                        }
                    }
                    if (bolVertical !== 0 && m !== 0) {
                        bPerpendicular = EndLinePoint.y + EndLinePoint.x / m;
                        LinePoint1 = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueIntersectDouble2(m, Upperb, -1 / m, bPerpendicular, 1, 1, 0, 0);
                        LinePoint2 = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueIntersectDouble2(m, Lowerb, -1 / m, bPerpendicular, 1, 1, 0, 0);
                        switch (lLast) {
                            case 0:
                            case 2:
                                if (LinePoint1.y < LinePoint2.y) {
                                    cAnswers.m_Line1 = LinePoint1;
                                    cAnswers.m_Line2 = LinePoint2;
                                } else {
                                    cAnswers.m_Line1 = LinePoint2;
                                    cAnswers.m_Line2 = LinePoint1;
                                }
                                break;
                            case 1:
                            case 3:
                                if (LinePoint1.y > LinePoint2.y) {
                                    cAnswers.m_Line1 = LinePoint1;
                                    cAnswers.m_Line2 = LinePoint2;
                                } else {
                                    cAnswers.m_Line1 = LinePoint2;
                                    cAnswers.m_Line2 = LinePoint1;
                                }
                                break;
                            default:
                                break;
                        }
                    }
                    pdResult = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.Channels._className, "GetTrueEndPointDouble", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetTrueEndPointDouble", exc));
                    } else {
                        throw exc;
                    }
                }
                return cAnswers;
            },
            ConnectTrueDouble2: function(nWidth, LinePoint1, LinePoint2, LinePoint3, lOrient) {
                var pAnswerLinePoints = new armyc2.c2sd.JavaLineArray.CChannelPoints2();
                try {
                    var m1 = 0;
                    var b1 = 0;
                    var m2 = 0;
                    var b2 = 0;
                    var Lowerb1 = 0;
                    var Upperb1 = 0;
                    var Lowerb2 = 0;
                    var Upperb2 = 0;
                    var dWidth = nWidth;
                    var pdResult = new armyc2.c2sd.JavaLineArray.ref();
                    var bolVerticalSlope1 = 0;
                    var bolVerticalSlope2 = 0;
                    var x = new armyc2.c2sd.JavaLineArray.ref();
                    var y = new armyc2.c2sd.JavaLineArray.ref();
                    bolVerticalSlope1 = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueLinesDouble(nWidth, LinePoint1, LinePoint2, pdResult);
                    if (bolVerticalSlope1 !== 0) {
                        m1 = pdResult.value[0];
                        b1 = pdResult.value[1];
                        Upperb1 = pdResult.value[5];
                        Lowerb1 = pdResult.value[3];
                    }
                    bolVerticalSlope2 = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueLinesDouble(nWidth, LinePoint2, LinePoint3, pdResult);
                    if (bolVerticalSlope2 !== 0) {
                        m2 = pdResult.value[0];
                        b2 = pdResult.value[1];
                        Upperb2 = pdResult.value[5];
                        Lowerb2 = pdResult.value[3];
                    }
                    switch (lOrient) {
                        case 0:
                            armyc2.c2sd.JavaLineArray.lineutility.CalcTrueIntersectDouble(m1, Upperb1, m2, Upperb2, LinePoint2, bolVerticalSlope1, bolVerticalSlope2, dWidth, 0, x, y);
                            pAnswerLinePoints.m_Line1.x = x.value[0];
                            pAnswerLinePoints.m_Line1.y = y.value[0];
                            armyc2.c2sd.JavaLineArray.lineutility.CalcTrueIntersectDouble(m1, Lowerb1, m2, Lowerb2, LinePoint2, bolVerticalSlope1, bolVerticalSlope2, dWidth, 3, x, y);
                            pAnswerLinePoints.m_Line2.x = x.value[0];
                            pAnswerLinePoints.m_Line2.y = y.value[0];
                            break;
                        case 1:
                            armyc2.c2sd.JavaLineArray.lineutility.CalcTrueIntersectDouble(m1, Upperb1, m2, Lowerb2, LinePoint2, bolVerticalSlope1, bolVerticalSlope2, dWidth, 1, x, y);
                            pAnswerLinePoints.m_Line1.x = x.value[0];
                            pAnswerLinePoints.m_Line1.y = y.value[0];
                            armyc2.c2sd.JavaLineArray.lineutility.CalcTrueIntersectDouble(m1, Lowerb1, m2, Upperb2, LinePoint2, bolVerticalSlope1, bolVerticalSlope2, dWidth, 2, x, y);
                            pAnswerLinePoints.m_Line2.x = x.value[0];
                            pAnswerLinePoints.m_Line2.y = y.value[0];
                            break;
                        case 2:
                            armyc2.c2sd.JavaLineArray.lineutility.CalcTrueIntersectDouble(m1, Lowerb1, m2, Upperb2, LinePoint2, bolVerticalSlope1, bolVerticalSlope2, dWidth, 2, x, y);
                            pAnswerLinePoints.m_Line1.x = x.value[0];
                            pAnswerLinePoints.m_Line1.y = y.value[0];
                            armyc2.c2sd.JavaLineArray.lineutility.CalcTrueIntersectDouble(m1, Upperb1, m2, Lowerb2, LinePoint2, bolVerticalSlope1, bolVerticalSlope2, dWidth, 1, x, y);
                            pAnswerLinePoints.m_Line2.x = x.value[0];
                            pAnswerLinePoints.m_Line2.y = y.value[0];
                            break;
                        case 3:
                            armyc2.c2sd.JavaLineArray.lineutility.CalcTrueIntersectDouble(m1, Lowerb1, m2, Lowerb2, LinePoint2, bolVerticalSlope1, bolVerticalSlope2, dWidth, 3, x, y);
                            pAnswerLinePoints.m_Line1.x = x.value[0];
                            pAnswerLinePoints.m_Line1.y = y.value[0];
                            armyc2.c2sd.JavaLineArray.lineutility.CalcTrueIntersectDouble(m1, Upperb1, m2, Upperb2, LinePoint2, bolVerticalSlope1, bolVerticalSlope2, dWidth, 0, x, y);
                            pAnswerLinePoints.m_Line2.x = x.value[0];
                            pAnswerLinePoints.m_Line2.y = y.value[0];
                            break;
                        default:
                            break;
                    }
                    pdResult = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.Channels._className, "ConnectTrueDouble2", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside ConnectTrueDouble2", exc));
                    } else {
                        throw exc;
                    }
                }
                return pAnswerLinePoints;
            },
            shiftCATKBYFIREControlPoint: function(linetype, pLinePoints, shift) {
                try {
                    if (linetype !== 21710000)
                        return;
                    var controlPtIndex = pLinePoints.size() - 1;
                    var pt0 = pLinePoints.get(0);
                    var pt1 = pLinePoints.get(1);
                    var dist = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pLinePoints.get(0), pLinePoints.get(1));
                    if (dist <= 45)
                        return;
                    var controlPt = pLinePoints.get(controlPtIndex);
                    var pt3 = armyc2.c2sd.JavaLineArray.lineutility.PointRelativeToLine(pt0, pt1, pt0, controlPt);
                    var pt4 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pt3, controlPt, shift);
                    pLinePoints.set(controlPtIndex, pt4);
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.Channels._className, "shiftCATKBYFIREControlPoint", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside shiftCATKBYFIREControlPoint", exc));
                    } else {
                        throw exc;
                    }
                }
            },
            GetChannel1Double: function(lpsaUpperVBPoints, lpsaLowerVBPoints, resultVBPoints, vblUpperCounter, vblLowerCounter, vbiDrawThis, vblChannelWidth, useptr, shapes, rev) {
                var lResult = -1;
                try {
                    var k = 0;
                    var vblCounter = 0;
                    var nPrinter = 1;
                    var nArrowSize = 40 * nPrinter;
                    var max = 0;
                    var dist = 0;
                    var remainder = 0;
                    var vblUpperCounter2 = vblUpperCounter;
                    var vblLowerCounter2 = vblLowerCounter;
                    var nReverseUpper = 0;
                    var lUpperFlotCount = 0;
                    var lLowerFlotCount = 0;
                    var nLowerCounter = 0;
                    var lUpperCounter = 0;
                    var lResultCounter = 0;
                    var XCounter = 0;
                    var j = 0;
                    var lHowManyThisSegment = 0;
                    var l = 0;
                    var t = 0;
                    var pi = 3.141592653589793;
                    var dAngle = 0;
                    var d = 0;
                    var a = 13;
                    var b = 6;
                    var dFactor = 0;
                    var lEllipseCounter = 0;
                    var arrowOffsetFactor = Math.floor(vblChannelWidth / 4);
                    var pLowerLinePoints = new Array(vblLowerCounter);
                    var pUpperLinePoints = new Array(vblUpperCounter);
                    var pArrowLinePoints = new Array(1);
                    var pLinePoints = null;
                    var pUpperFlotPoints = null;
                    var pLowerFlotPoints = null;
                    var pOriginalLinePoints = null;
                    var pOriginalLinePoints2 = null;
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pLowerLinePoints);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pUpperLinePoints);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pArrowLinePoints);
                    var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt3 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt4 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var midPt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var midPt2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var arrowPts = new Array(3);
                    var XPoints = new Array(4);
                    var pEllipsePoints2 = new Array(37);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(XPoints);
                    armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pEllipsePoints2);
                    var temp1LinePoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var ptCenter = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLowerLinePoints[0]);
                    var temp2LinePoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var lastPoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    var nextToLastPoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                    if (vblChannelWidth < 5 && vbiDrawThis !== 15000000) {
                        vblChannelWidth = 5;
                    }
                    if (vblLowerCounter < 2 || vblUpperCounter < 2) {
                        return -1;
                    }
                    for (k = 0; k < vblLowerCounter; k++) {
                        pLowerLinePoints[k].x = lpsaLowerVBPoints[nLowerCounter];
                        nLowerCounter++;
                        pLowerLinePoints[k].y = lpsaLowerVBPoints[nLowerCounter];
                        nLowerCounter++;
                        if (k === vblLowerCounter - 2) {
                            nextToLastPoint.x = pLowerLinePoints[k].x;
                            nextToLastPoint.y = pLowerLinePoints[k].y;
                        }
                        if (k === vblLowerCounter - 1) {
                            lastPoint.x = pLowerLinePoints[k].x;
                            lastPoint.y = pLowerLinePoints[k].y;
                        }
                        pLowerLinePoints[k].style = 0;
                    }
                    nLowerCounter = 0;
                    var lastSegmentLength = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(lastPoint, nextToLastPoint);
                    for (k = 0; k < vblUpperCounter; k++) {
                        pUpperLinePoints[k].x = lpsaUpperVBPoints[lUpperCounter];
                        lUpperCounter++;
                        pUpperLinePoints[k].y = lpsaUpperVBPoints[lUpperCounter];
                        lUpperCounter++;
                        pUpperLinePoints[k].style = 0;
                    }
                    lUpperCounter = 0;
                    pArrowLinePoints[0] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[vblUpperCounter - 1]);
                    pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLowerLinePoints[0]);
                    var shiftLines = armyc2.c2sd.JavaLineArray.Channels._shiftLines;
                    switch (vbiDrawThis) {
                        case 22123000:
                        case 22123002:
                        case 231111000:
                        case 231115000:
                        case 231116000:
                        case 231117100:
                        case 231117200:
                        case 231117300:
                            break;
                        default:
                            shiftLines = false;
                            break;
                    }
                    switch (vbiDrawThis) {
                        case 21700000:
                        case 22521100:
                        case 22521200:
                        case 22521300:
                        case 22521420:
                        case 22521421:
                        case 22320000:
                        case 22320001:
                        case 22521410:
                        case 22521411:
                        case 21710000:
                            dist = useptr;
                            nArrowSize = Math.floor(Math.sqrt(dist * dist + Math.floor(Math.floor(vblChannelWidth / 2) * vblChannelWidth / 2)));
                            pUpperLinePoints[vblUpperCounter - 1] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pUpperLinePoints[vblUpperCounter - 1], pUpperLinePoints[vblUpperCounter - 2], dist);
                            pLowerLinePoints[vblLowerCounter - 1] = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pLowerLinePoints[vblLowerCounter - 1], pLowerLinePoints[vblLowerCounter - 2], dist);
                            break;
                        default:
                            break;
                    }
                    temp1LinePoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLowerLinePoints[0]);
                    temp2LinePoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[0]);
                    switch (vbiDrawThis) {
                        case 231117301:
                        case 231117201:
                        case 231117101:
                        case 22320000:
                        case 22320001:
                        case 22521410:
                        case 22521411:
                        case 22521420:
                        case 22521421:
                        case 21700000:
                        case 21710000:
                        case 231117300:
                        case 231117200:
                        case 231117100:
                        case 231116000:
                        case 231115000:
                        case 231111000:
                        case 231114000:
                        case 231113000:
                        case 231112000:
                        case 231113001:
                        case 231113002:
                        case 231113003:
                        case 15000000:
                            vblCounter = armyc2.c2sd.JavaLineArray.Channels.GetTripleCountDouble(pUpperLinePoints, vblUpperCounter, vbiDrawThis);
                            pOriginalLinePoints = new Array(vblUpperCounter);
                            for (k = 0; k < vblUpperCounter; k++) {
                                pOriginalLinePoints[k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[k]);
                            }
                            pOriginalLinePoints2 = new Array(vblUpperCounter);
                            for (k = 0; k < vblUpperCounter; k++) {
                                pOriginalLinePoints2[k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[k]);
                            }
                            switch (vbiDrawThis) {
                                case 231117301:
                                case 231117201:
                                case 231117101:
                                case 231117300:
                                case 231117200:
                                case 231117100:
                                case 231116000:
                                case 231115000:
                                case 231111000:
                                case 231114000:
                                case 231113000:
                                case 231112000:
                                case 15000000:
                                    pLowerLinePoints = new Array(vblLowerCounter);
                                    for (k = 0; k < vblLowerCounter2; k++) {
                                        pLowerLinePoints[k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalLinePoints[k]);
                                    }
                                    pUpperLinePoints = new Array(vblUpperCounter);
                                    for (k = 0; k < vblUpperCounter2; k++) {
                                        pUpperLinePoints[k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalLinePoints[k]);
                                    }
                                    pOriginalLinePoints = new Array(vblUpperCounter);
                                    for (k = 0; k < vblUpperCounter2; k++) {
                                        pOriginalLinePoints[k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalLinePoints2[k]);
                                    }
                                    break;
                                default:
                                    break;
                            }
                            armyc2.c2sd.JavaLineArray.lineutility.moveSingleCPixels(vbiDrawThis, pUpperLinePoints);
                            armyc2.c2sd.JavaLineArray.lineutility.moveSingleCPixels(vbiDrawThis, pLowerLinePoints);
                            armyc2.c2sd.JavaLineArray.lineutility.MoveChannelPixels(pUpperLinePoints);
                            armyc2.c2sd.JavaLineArray.lineutility.MoveChannelPixels(pLowerLinePoints);
                            if (shiftLines)
                                vblChannelWidth *= 2;
                            pUpperLinePoints = armyc2.c2sd.JavaLineArray.Channels.GetChannelArray2Double(nPrinter, pUpperLinePoints, 1, vblUpperCounter, vbiDrawThis, vblChannelWidth);
                            pLowerLinePoints = armyc2.c2sd.JavaLineArray.Channels.GetChannelArray2Double(nPrinter, pLowerLinePoints, 0, vblLowerCounter, vbiDrawThis, vblChannelWidth);
                            if (shiftLines) {
                                if (vbiDrawThis === 231117100)
                                    pLowerLinePoints = pOriginalLinePoints;
                                else if (vbiDrawThis === 231117200) {
                                    for (j = 0; j < pUpperLinePoints.length; j++) {
                                        pUpperLinePoints[j] = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pLowerLinePoints[j], pOriginalLinePoints[j], 0);
                                    }
                                } else if (vbiDrawThis === 231117300)
                                    pUpperLinePoints = pOriginalLinePoints;
                                else
                                    pUpperLinePoints = pOriginalLinePoints;
                            }
                            if (rev !== 1) {
                                if (vbiDrawThis === 22320000 || vbiDrawThis === 22521410 || vbiDrawThis === 22521420 || vbiDrawThis === 231113002) {
                                    pUpperLinePoints[0] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(temp2LinePoint, pUpperLinePoints[0], 10);
                                    pLowerLinePoints[0] = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(temp1LinePoint, pLowerLinePoints[0], 10);
                                }
                            }
                            break;
                        case 22123000:
                        case 22123001:
                        case 22123002:
                            if (shiftLines === true || vbiDrawThis === 22123001) {
                                pOriginalLinePoints = new Array(vblUpperCounter);
                                for (k = 0; k < vblUpperCounter; k++) {
                                    pOriginalLinePoints[k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[k]);
                                }
                            }
                            if (vbiDrawThis === 22123001) {
                                pLowerLinePoints = new Array(vblLowerCounter);
                                for (k = 0; k < vblLowerCounter2; k++) {
                                    pLowerLinePoints[k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalLinePoints[k]);
                                }
                                pUpperLinePoints = null;
                                pUpperLinePoints = new Array(vblUpperCounter);
                                for (k = 0; k < vblUpperCounter2; k++) {
                                    pUpperLinePoints[k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalLinePoints[k]);
                                }
                            }
                            if (shiftLines)
                                vblChannelWidth *= 2;
                            pUpperLinePoints = armyc2.c2sd.JavaLineArray.Channels.GetChannelArray2Double(nPrinter, pUpperLinePoints, 1, vblUpperCounter, vbiDrawThis, vblChannelWidth);
                            pLowerLinePoints = armyc2.c2sd.JavaLineArray.Channels.GetChannelArray2Double(nPrinter, pLowerLinePoints, 0, vblLowerCounter, vbiDrawThis, vblChannelWidth);
                            if (shiftLines) {
                                //if (armyc2.c2sd.JavaLineArray.Channels._affiliation !== null && armyc2.c2sd.JavaLineArray.Channels._affiliation.equalsIgnoreCase("H"))
                                if (vbiDrawThis===22123002)
                                    pLowerLinePoints = pOriginalLinePoints;
                                else
                                    pUpperLinePoints = pOriginalLinePoints;
                            }
                            if ((pUpperLinePoints[0].x > pUpperLinePoints[1].x) && (pUpperLinePoints[0].y !== pUpperLinePoints[1].y)) {
                                nReverseUpper = 1;
                                armyc2.c2sd.JavaLineArray.lineutility.ReversePointsDouble2(pLowerLinePoints, vblLowerCounter);
                            } else if ((pUpperLinePoints[0].x > pUpperLinePoints[1].x) && (pUpperLinePoints[0].y === pUpperLinePoints[1].y)) {
                                nReverseUpper = 0;
                                armyc2.c2sd.JavaLineArray.lineutility.ReversePointsDouble2(pUpperLinePoints, vblUpperCounter);
                            } else if (pUpperLinePoints[0].x < pUpperLinePoints[1].x) {
                                nReverseUpper = 1;
                                armyc2.c2sd.JavaLineArray.lineutility.ReversePointsDouble2(pLowerLinePoints, vblLowerCounter);
                            } else if ((pUpperLinePoints[0].y > pUpperLinePoints[1].y) && (pUpperLinePoints[0].x === pUpperLinePoints[1].x)) {
                                nReverseUpper = 1;
                                armyc2.c2sd.JavaLineArray.lineutility.ReversePointsDouble2(pLowerLinePoints, vblLowerCounter);
                            } else if ((pUpperLinePoints[0].y < pUpperLinePoints[1].y) && (pUpperLinePoints[0].x === pUpperLinePoints[1].x)) {
                                nReverseUpper = 0;
                                armyc2.c2sd.JavaLineArray.lineutility.ReversePointsDouble2(pUpperLinePoints, vblUpperCounter);
                            }
                            break;
                        case 22521300:
                        case 22521200:
                        case 22521100:
                            pOriginalLinePoints = new Array(vblUpperCounter);
                            for (k = 0; k < vblUpperCounter; k++) {
                                pOriginalLinePoints[k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[k]);
                            }
                            pUpperLinePoints = armyc2.c2sd.JavaLineArray.Channels.GetChannelArray2Double(nPrinter, pUpperLinePoints, 1, vblUpperCounter, vbiDrawThis, vblChannelWidth);
                            pLowerLinePoints = armyc2.c2sd.JavaLineArray.Channels.GetChannelArray2Double(nPrinter, pLowerLinePoints, 0, vblLowerCounter, vbiDrawThis, vblChannelWidth);
                            temp1LinePoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLowerLinePoints[vblLowerCounter - 1]);
                            temp2LinePoint = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[vblUpperCounter - 1]);
                            pLowerLinePoints[vblLowerCounter - 1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(temp2LinePoint);
                            pUpperLinePoints[vblUpperCounter - 1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(temp1LinePoint);
                            break;
                        default:
                            break;
                    }
                    switch (vbiDrawThis) {
                        case 22123001:
                            pLinePoints = new Array(vblUpperCounter + vblLowerCounter);
                            for (j = 0; j < pLinePoints.length; j++) {
                                pLinePoints[j].x = lpsaUpperVBPoints[0];
                                pLinePoints[j].y = lpsaUpperVBPoints[1];
                            }
                            vblCounter = vblLowerCounter + vblUpperCounter;
                            for (k = 0; k < vblUpperCounter; k++) {
                                pLinePoints[k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[k]);
                                if (pOriginalLinePoints[0].x < pOriginalLinePoints[1].x) {
                                    pLinePoints[k].style = 26;
                                }
                                if (pOriginalLinePoints[0].x > pOriginalLinePoints[1].x) {
                                    pLinePoints[k].style = 26;
                                }
                                if (pOriginalLinePoints[0].x > pOriginalLinePoints[1].x) {
                                    if (pOriginalLinePoints[0].y === pOriginalLinePoints[1].y) {
                                        pLinePoints[k].style = 25;
                                    }
                                }
                                if (pOriginalLinePoints[0].x === pOriginalLinePoints[1].x) {
                                    if (pOriginalLinePoints[0].y < pOriginalLinePoints[1].y) {
                                        pLinePoints[k].style = 25;
                                    } else {
                                        pLinePoints[k].style = 26;
                                    }
                                }
                            }
                            for (k = 0; k < vblLowerCounter - 1; k++) {
                                pLinePoints[vblUpperCounter + k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLowerLinePoints[k]);
                                if (pOriginalLinePoints[0].x < pOriginalLinePoints[1].x) {
                                    pLinePoints[vblUpperCounter + k].style = 25;
                                }
                                if (pOriginalLinePoints[0].x > pOriginalLinePoints[1].x) {
                                    pLinePoints[vblUpperCounter + k].style = 25;
                                }
                                if (pOriginalLinePoints[0].x > pOriginalLinePoints[1].x) {
                                    if (pOriginalLinePoints[0].y === pOriginalLinePoints[1].y) {
                                        pLinePoints[vblUpperCounter + k].style = 26;
                                    }
                                }
                                if (pOriginalLinePoints[0].x === pOriginalLinePoints[1].x) {
                                    if (pOriginalLinePoints[0].y < pOriginalLinePoints[1].y) {
                                        pLinePoints[vblUpperCounter + k].style = 26;
                                    } else {
                                        pLinePoints[vblUpperCounter + k].style = 25;
                                    }
                                }
                            }
                            pLinePoints[k + vblUpperCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLowerLinePoints[k]);
                            pLinePoints[k].style = 5;
                            break;
                        case 22123000:
                        case 22123002:
                            lUpperFlotCount = armyc2.c2sd.JavaLineArray.flot.GetFlotCountDouble(pUpperLinePoints, vblUpperCounter);
                            lLowerFlotCount = armyc2.c2sd.JavaLineArray.flot.GetFlotCountDouble(pLowerLinePoints, vblLowerCounter);
                            if (lUpperFlotCount <= 0 || lLowerFlotCount <= 0) {
                                return 0;
                            }
                            max = vblUpperCounter;
                            if (max < lUpperFlotCount) {
                                max = lUpperFlotCount;
                            }
                            pUpperFlotPoints = new Array(max);
                            armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pUpperFlotPoints);
                            max = vblLowerCounter;
                            if (max < lLowerFlotCount) {
                                max = lLowerFlotCount;
                            }
                            pLowerFlotPoints = new Array(max);
                            armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pLowerFlotPoints);
                            for (k = 0; k < vblUpperCounter; k++) {
                                pUpperFlotPoints[k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[k]);
                            }
                            for (k = 0; k < vblLowerCounter; k++) {
                                pLowerFlotPoints[k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLowerLinePoints[k]);
                            }
                            lUpperFlotCount = armyc2.c2sd.JavaLineArray.flot.GetFlotDouble(pUpperFlotPoints, vblUpperCounter);
                            lLowerFlotCount = armyc2.c2sd.JavaLineArray.flot.GetFlotDouble(pLowerFlotPoints, vblLowerCounter);
                            pLinePoints = new Array(lUpperFlotCount + lLowerFlotCount);
                            armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pLinePoints);
                            vblCounter = lLowerFlotCount + lUpperFlotCount;
                            if (nReverseUpper === 1) {
                                for (k = 0; k < lUpperFlotCount; k++) {
                                    pLinePoints[k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperFlotPoints[k]);
                                    pLinePoints[k].style = 25;
                                }
                                if (lUpperFlotCount > 0) {
                                    pLinePoints[lUpperFlotCount - 1].style = 5;
                                }
                                for (k = 0; k < lLowerFlotCount; k++) {
                                    pLinePoints[k + lUpperFlotCount] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLowerFlotPoints[k]);
                                    pLinePoints[k + lUpperFlotCount].style = 26;
                                }
                                if (lUpperFlotCount + lLowerFlotCount > 0) {
                                    pLinePoints[lUpperFlotCount + lLowerFlotCount - 1].style = 5;
                                }
                            }
                            if (nReverseUpper === 0) {
                                for (k = 0; k < lUpperFlotCount; k++) {
                                    pLinePoints[k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperFlotPoints[k]);
                                    pLinePoints[k].style = 26;
                                }
                                if (lUpperFlotCount > 0)
                                    pLinePoints[lUpperFlotCount - 1].style = 5;
                                for (k = 0; k < lLowerFlotCount; k++) {
                                    pLinePoints[k + lUpperFlotCount] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLowerFlotPoints[k]);
                                    pLinePoints[k + lUpperFlotCount].style = 25;
                                }
                                if (lUpperFlotCount + lLowerFlotCount > 0)
                                    pLinePoints[lUpperFlotCount + lLowerFlotCount - 1].style = 5;
                            }
                            break;
                        case 231117301:
                        case 231117201:
                        case 231117101:
                        case 231117300:
                        case 231117200:
                        case 231117100:
                        case 231116000:
                        case 231115000:
                        case 231111000:
                        case 231114000:
                        case 231112000:
                        case 231113000:
                        case 231113001:
                        case 231113002:
                        case 231113003:
                            pLinePoints = new Array(vblCounter);
                            armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pLinePoints);
                            for (j = 0; j < pLinePoints.length; j++) {
                                pLinePoints[j].x = lpsaUpperVBPoints[0];
                                pLinePoints[j].y = lpsaUpperVBPoints[1];
                            }
                            switch (vbiDrawThis) {
                                case 231117301:
                                case 231117300:
                                case 231116000:
                                case 231113001:
                                case 231113002:
                                case 231113003:
                                case 231117101:
                                case 231117100:
                                    for (k = 0; k < vblLowerCounter; k++) {
                                        pLinePoints[k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLowerLinePoints[k]);
                                    }
                                    break;
                                case 231117201:
                                case 231117200:
                                    if (pOriginalLinePoints[0].x < pOriginalLinePoints[1].x) {
                                        for (k = 0; k < vblLowerCounter; k++) {
                                            pLinePoints[k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalLinePoints[k]);
                                        }
                                    } else {
                                        for (k = 0; k < vblLowerCounter; k++) {
                                            pLinePoints[k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[k]);
                                        }
                                    }
                                    break;
                                case 231115000:
                                    for (k = 0; k < vblLowerCounter; k++) {
                                        pLinePoints[k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalLinePoints[k]);
                                        pLinePoints[k].style = 5;
                                    }
                                    break;
                                case 231111000:
                                    for (k = 0; k < vblLowerCounter; k++) {
                                        pLinePoints[k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalLinePoints[k]);
                                        pLinePoints[k].style = 5;
                                    }
                                    break;
                                case 231114000:
                                    for (k = 0; k < vblLowerCounter; k++) {
                                        pLinePoints[k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalLinePoints[k]);
                                    }
                                    break;
                                default:
                                    for (k = 0; k < vblLowerCounter; k++) {
                                        pLinePoints[k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalLinePoints[k]);
                                    }
                                    break;
                            }
                            pLinePoints[vblLowerCounter - 1].style = 5;
                            switch (vbiDrawThis) {
                                case 231117301:
                                case 231117300:
                                case 231116000:
                                case 231113001:
                                case 231113002:
                                case 231113003:
                                    for (k = 0; k < vblUpperCounter; k++) {
                                        pLinePoints[vblLowerCounter + k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[k]);
                                    }
                                    break;
                                case 231117201:
                                case 231117200:
                                    if (pOriginalLinePoints[0].x < pOriginalLinePoints[1].x) {
                                        for (k = 0; k < vblUpperCounter; k++) {
                                            pLinePoints[vblLowerCounter + k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[k]);
                                        }
                                    } else {
                                        for (k = 0; k < vblUpperCounter; k++) {
                                            pLinePoints[vblLowerCounter + k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalLinePoints[k]);
                                        }
                                    }
                                    break;
                                case 231117101:
                                case 231117100:
                                    for (k = 0; k < vblUpperCounter; k++) {
                                        pLinePoints[vblLowerCounter + k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLowerLinePoints[k]);
                                    }
                                    break;
                                case 231115000:
                                    for (k = 0; k < vblUpperCounter; k++) {
                                        pLinePoints[vblLowerCounter + k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[k]);
                                    }
                                    break;
                                case 231111000:
                                    for (k = 0; k < vblUpperCounter; k++) {
                                        pLinePoints[vblLowerCounter + k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalLinePoints[k]);
                                        pLinePoints[vblLowerCounter + k].style = 5;
                                    }
                                    break;
                                case 231114000:
                                    for (k = 0; k < vblUpperCounter; k++) {
                                        pLinePoints[vblLowerCounter + k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalLinePoints[k]);
                                    }
                                    break;
                                default:
                                    for (k = 0; k < vblUpperCounter; k++) {
                                        pLinePoints[vblLowerCounter + k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalLinePoints[k]);
                                    }
                                    break;
                            }
                            pLinePoints[vblLowerCounter + vblUpperCounter - 1].style = 5;
                            lEllipseCounter = vblLowerCounter + vblUpperCounter;
                            if (vbiDrawThis !== 231117101 && vbiDrawThis !== 231117201 && vbiDrawThis !== 231117301 && vbiDrawThis !== 231113001 && vbiDrawThis !== 231113003 && vbiDrawThis !== 231113002 && vbiDrawThis !== 22521421 && vbiDrawThis !== 22521411 && vbiDrawThis !== 22320001 && vbiDrawThis !== 15000000 ) {
                                for (j = 0; j < vblUpperCounter - 1; j++) {
                                    d = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pOriginalLinePoints[j], pOriginalLinePoints[j + 1]);
                                    lHowManyThisSegment = Math.floor(Math.floor(d) / 10);
                                    remainder = d - 10 * lHowManyThisSegment;
                                    dAngle = armyc2.c2sd.JavaLineArray.lineutility.CalcSegmentAngleDouble(pOriginalLinePoints[j], pOriginalLinePoints[j + 1]);
                                    dAngle = dAngle + pi / 2;
                                    for (k = 0; k < lHowManyThisSegment; k++) {
                                        if (vbiDrawThis === 231112000) {
                                            if (k % 4 === 0)
                                                continue;
                                        } else {
                                            if (k % 2 === 0)
                                                continue;
                                        }
                                        var f = k;
                                        f *= (1 + remainder / d);
                                        if (shiftLines === true && vbiDrawThis === 231117200) {
                                            ptCenter.x = pUpperLinePoints[j].x + Math.floor(((f) * (pUpperLinePoints[j + 1].x - pUpperLinePoints[j].x) / lHowManyThisSegment));
                                            ptCenter.y = pUpperLinePoints[j].y + Math.floor(((f) * (pUpperLinePoints[j + 1].y - pUpperLinePoints[j].y) / lHowManyThisSegment));
                                        } else if (shiftLines === false) {
                                            ptCenter.x = pOriginalLinePoints[j].x + Math.floor(((f) * (pOriginalLinePoints[j + 1].x - pOriginalLinePoints[j].x) / lHowManyThisSegment));
                                            ptCenter.y = pOriginalLinePoints[j].y + Math.floor(((f) * (pOriginalLinePoints[j + 1].y - pOriginalLinePoints[j].y) / lHowManyThisSegment));
                                        } else {
                                            ptCenter.x = pUpperLinePoints[j].x + Math.floor(((f) * (pUpperLinePoints[j + 1].x - pUpperLinePoints[j].x) / lHowManyThisSegment));
                                            ptCenter.y = pUpperLinePoints[j].y + Math.floor(((f) * (pUpperLinePoints[j + 1].y - pUpperLinePoints[j].y) / lHowManyThisSegment));
                                            var ptCenter2 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                                            ptCenter2.x = pLowerLinePoints[j].x + Math.floor(((f) * (pLowerLinePoints[j + 1].x - pLowerLinePoints[j].x) / lHowManyThisSegment));
                                            ptCenter2.y = pLowerLinePoints[j].y + Math.floor(((f) * (pLowerLinePoints[j + 1].y - pLowerLinePoints[j].y) / lHowManyThisSegment));
                                            ptCenter = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(ptCenter, ptCenter2, 0);
                                        }
                                        switch (vbiDrawThis) {
                                            case 231117100:
                                            case 231117200:
                                            case 231117300:
                                                for (l = 1; l < 37; l++) {
                                                    dFactor = (10 * l) * pi / 180;
                                                    pEllipsePoints2[l - 1].x = ptCenter.x + a * Math.cos(dFactor);
                                                    pEllipsePoints2[l - 1].y = ptCenter.y + b * Math.sin(dFactor);
                                                    pEllipsePoints2[l - 1].style = 0;
                                                }
                                                armyc2.c2sd.JavaLineArray.lineutility.RotateGeometryDouble(pEllipsePoints2, 36, dAngle * 180 / pi);
                                                pEllipsePoints2[36] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pEllipsePoints2[35]);
                                                pEllipsePoints2[36].style = 5;
                                                for (l = 0; l < 37; l++) {
                                                    pLinePoints[lEllipseCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pEllipsePoints2[l]);
                                                    lEllipseCounter++;
                                                }
                                                break;
                                            case 231116000:
                                            case 231115000:
                                            case 231114000:
                                            case 231111000:
                                            case 231112000:
                                            case 231113000:
                                                XPoints[0].x = ptCenter.x - 8;
                                                XPoints[0].y = ptCenter.y - 8;
                                                XPoints[0].style = 0;
                                                XPoints[1].x = ptCenter.x + 8;
                                                XPoints[1].y = ptCenter.y + 8;
                                                XPoints[1].style = 5;
                                                XPoints[2].x = ptCenter.x - 8;
                                                XPoints[2].y = ptCenter.y + 8;
                                                XPoints[2].style = 0;
                                                XPoints[3].x = ptCenter.x + 8;
                                                XPoints[3].y = ptCenter.y - 8;
                                                XPoints[3].style = 5;
                                                XCounter++;
                                                armyc2.c2sd.JavaLineArray.lineutility.RotateGeometryDouble(XPoints, 4, Math.floor((dAngle * 180 / pi)));
                                                for (l = 0; l < 4; l++) {
                                                    pLinePoints[lEllipseCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(XPoints[l]);
                                                    switch (vbiDrawThis) {
                                                        case 231112000:
                                                            if (XCounter === 2 || XCounter === 3 || XCounter === 4 || XCounter === 5) {
                                                                pLinePoints[lEllipseCounter].style = 5;
                                                            }
                                                            break;
                                                        case 231113000:
                                                            if (XCounter === 2 || XCounter === 3 || XCounter === 4) {
                                                                pLinePoints[lEllipseCounter].style = 5;
                                                            }
                                                            break;
                                                        default:
                                                            break;
                                                    }
                                                    lEllipseCounter++;
                                                }
                                                if (XCounter === 5) {
                                                    XCounter = 0;
                                                }
                                                break;
                                            default:
                                                break;
                                        }
                                    }
                                    if (lHowManyThisSegment === 0) {
                                        if (pLinePoints.length > lEllipseCounter) {
                                            pLinePoints[lEllipseCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalLinePoints[j]);
                                            lEllipseCounter++;
                                            pLinePoints[lEllipseCounter] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalLinePoints[j + 1]);
                                            pLinePoints[lEllipseCounter].style = 5;
                                            lEllipseCounter++;
                                        }
                                    }
                                }
                                pLinePoints = armyc2.c2sd.JavaLineArray.lineutility.ResizeArray(pLinePoints, lEllipseCounter);
                                vblCounter = pLinePoints.length;
                            }
                            if (armyc2.c2sd.JavaLineArray.Channels.FenceType(vbiDrawThis) === 1) {
                                if (lEllipseCounter <= vblLowerCounter + vblUpperCounter) {
                                    for (k = 0; k < vblLowerCounter + vblUpperCounter; k++) {
                                        if (pLinePoints[k].style !== 5)
                                            pLinePoints[k].style = 0;
                                    }
                                } else {
                                    for (k = lEllipseCounter - 1; k < pLinePoints.length; k++) {
                                        pLinePoints[k].style = 5;
                                    }
                                }
                            }
                            break;
                        case 15000000:
                            pLinePoints = new Array(vblLowerCounter + vblUpperCounter + 1);
                            for (j = 0; j < vblLowerCounter; j++)
                                pLinePoints[j] = pLowerLinePoints[j];

                            for (j = 0; j < vblUpperCounter; j++)
                                pLinePoints[j + vblLowerCounter] = pUpperLinePoints[vblUpperCounter - 1 - j];

                            pLinePoints[pLinePoints.length - 1] = pLinePoints[0];
                            break;
                        case 22521420:
                        case 22521421:
                        case 22521100:
                        case 21700000:
                        case 21710000:
                        case 22521200:
                        case 22521300:
                        case 22521410:
                        case 22521411:
                            if (vbiDrawThis !== 21710000) {
                                vblCounter = vblLowerCounter + vblUpperCounter + 8;
                            } else {
                                vblCounter = vblLowerCounter + vblUpperCounter + 17;
                            }
                            if (vbiDrawThis === 22521300) {
                                vblCounter = vblLowerCounter + vblUpperCounter + 19;
                            }
                            pLinePoints = new Array(vblCounter);
                            armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pLinePoints);
                            for (j = 0; j < pLinePoints.length; j++) {
                                pLinePoints[j].x = lpsaUpperVBPoints[0];
                                pLinePoints[j].y = lpsaUpperVBPoints[1];
                            }
                            if (vbiDrawThis !== 21700000 && vbiDrawThis !== 21710000) {
                                for (k = 0; k < vblCounter; k++) {
                                    pLinePoints[k].style = 0;
                                }
                            }
                            armyc2.c2sd.JavaLineArray.Channels.GetAXADDouble(nPrinter, pLowerLinePoints, vblLowerCounter, pUpperLinePoints, vblUpperCounter, pArrowLinePoints[0], pLinePoints, vbiDrawThis, arrowOffsetFactor);
                            if (vbiDrawThis === 21700000 || vbiDrawThis === 21710000) {
                                for (k = 0; k < vblCounter; k++) {
                                    if (pLinePoints[k].style !== 5) {
                                        pLinePoints[k].style = 1;
                                    }
                                }
                            }
                            if (vbiDrawThis === 22521300) {
                                var rotaryTooShort = new Boolean(false);
                                var mUpper = new armyc2.c2sd.JavaLineArray.ref();
                                var mLower = new armyc2.c2sd.JavaLineArray.ref();
                                var bolVerticalUpper = 0;
                                var bolVerticalLower = 0;
                                var bUpper = 0;
                                var bLower = 0;
                                pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLowerLinePoints[vblLowerCounter - 2]);
                                pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLowerLinePoints[vblLowerCounter - 1]);
                                var dist1 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
                                bolVerticalLower = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble(pt0, pt1, mLower);
                                bLower = pt0.y - mLower.value[0] * pt0.x;
                                pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[vblUpperCounter - 2]);
                                pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[vblUpperCounter - 1]);
                                bolVerticalUpper = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueSlopeDouble(pt0, pt1, mUpper);
                                bUpper = pt0.y - mUpper.value[0] * pt0.x;
                                var dist2 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
                                midPt1 = armyc2.c2sd.JavaLineArray.lineutility.CalcTrueIntersectDouble2(mLower.value[0], bLower, mUpper.value[0], bUpper, bolVerticalLower, bolVerticalUpper, pt0.x, pt0.y);
                                if (dist1 <= vblChannelWidth || dist2 <= vblChannelWidth) {
                                    rotaryTooShort = new Boolean(true);
                                    midPt1 = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt0, pt1, 0);
                                }
                                a = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(pt0, pt1);
                                b = 30;
                                if (a < 90) {
                                    b = a / 3;
                                }
                                pt3 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalLinePoints[vblUpperCounter - 2]);
                                pt4 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalLinePoints[vblUpperCounter - 1]);
                                d = Math.floor(vblChannelWidth / 4);
                                if (d > armyc2.c2sd.JavaLineArray.Channels.maxLength) {
                                    d = armyc2.c2sd.JavaLineArray.Channels.maxLength;
                                }
                                if (d < armyc2.c2sd.JavaLineArray.Channels.minLength) {
                                    d = armyc2.c2sd.JavaLineArray.Channels.minLength;
                                }
                                if (pt3.x !== pt4.x) {
                                    pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt3, pt4, midPt1, 3, 2 * d);
                                    pLinePoints[vblLowerCounter + vblUpperCounter + 8] = pt0;
                                    pLinePoints[vblLowerCounter + vblUpperCounter + 8].style = 0;
                                    pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt3, pt4, midPt1, 2, 2 * d);
                                    pLinePoints[vblLowerCounter + vblUpperCounter + 9] = pt1;
                                    pLinePoints[vblLowerCounter + vblUpperCounter + 9].style = 5;
                                } else {
                                    pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt3, pt4, midPt1, 1, 2 * d);
                                    pLinePoints[vblLowerCounter + vblUpperCounter + 8] = pt0;
                                    pLinePoints[vblLowerCounter + vblUpperCounter + 8].style = 0;
                                    pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendDirectedLine(pt3, pt4, midPt1, 0, 2 * d);
                                    pLinePoints[vblLowerCounter + vblUpperCounter + 9] = pt1;
                                    pLinePoints[vblLowerCounter + vblUpperCounter + 9].style = 5;
                                    midPt1 = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt0, pt1, 0);
                                }
                                armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(pt0, pt1, Math.floor(d), Math.floor(d), arrowPts, 0);
                                for (k = 0; k < 3; k++) {
                                    pLinePoints[vblLowerCounter + vblUpperCounter + 10 + k] = arrowPts[k];
                                }
                                pLinePoints[vblLowerCounter + vblUpperCounter + 12].style = 5;
                                pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendTrueLinePerpDouble(pt0, pt1, pt0, d / 2, 0);
                                pt4 = armyc2.c2sd.JavaLineArray.lineutility.ExtendTrueLinePerpDouble(pt0, pt1, pt0, -d / 2, 0);
                                pLinePoints[vblLowerCounter + vblUpperCounter + 13] = pt3;
                                pLinePoints[vblLowerCounter + vblUpperCounter + 14] = pt4;
                                pLinePoints[vblLowerCounter + vblUpperCounter + 14].style = 5;
                                pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLowerLinePoints[vblLowerCounter - 2]);
                                pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLowerLinePoints[vblLowerCounter - 1]);
                                pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pt0, midPt1, b, 0);
                                pLinePoints[vblLowerCounter + vblUpperCounter + 15] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt3);
                                pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[vblLowerCounter - 2]);
                                pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[vblLowerCounter - 1]);
                                pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pt0, midPt1, b, 5);
                                pLinePoints[vblLowerCounter + vblUpperCounter + 16] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt3);
                                pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLowerLinePoints[vblLowerCounter - 2]);
                                pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pLowerLinePoints[vblLowerCounter - 1]);
                                pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pt1, midPt1, b, 0);
                                pLinePoints[vblLowerCounter + vblUpperCounter + 17] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt3);
                                pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[vblLowerCounter - 2]);
                                pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pUpperLinePoints[vblLowerCounter - 1]);
                                pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pt1, midPt1, b, 5);
                                pLinePoints[vblLowerCounter + vblUpperCounter + 18] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt3);
                                if ((rotaryTooShort).valueOf()) {
                                    for (l = vblLowerCounter + vblUpperCounter + 14; l < vblLowerCounter + vblLowerCounter + 19; l++) {
                                        pLinePoints[l].style = 5;
                                    }
                                }
                            }
                            var dFeature = 0;
                            var dist2 = 0;
                            if (vbiDrawThis === 21710000) {
                                dist2 = armyc2.c2sd.JavaLineArray.lineutility.CalcDistanceDouble(nextToLastPoint, lastPoint);
                                if (dist2 > 45)
                                    dist -= 45;
                                if (dist2 > 20) {
                                    pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pUpperLinePoints[vblUpperCounter - 2], pUpperLinePoints[vblUpperCounter - 1], 5 + dist);
                                    pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pLowerLinePoints[vblLowerCounter - 2], pLowerLinePoints[vblLowerCounter - 1], 5 + dist);
                                } else {
                                    pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pUpperLinePoints[vblUpperCounter - 2], pUpperLinePoints[vblUpperCounter - 1], -50);
                                    pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pLowerLinePoints[vblLowerCounter - 2], pLowerLinePoints[vblLowerCounter - 1], -50);
                                }
                                pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pt2, pt1, 10 + Math.abs(dist / 2), 18);
                                pt4 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pt1, pt2, 10 + Math.abs(dist / 2), 5);
                                midPt1 = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt1, pt2, 17);
                                pLinePoints[vblCounter - 9] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt3);
                                pLinePoints[vblCounter - 6] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt4);
                                if (dist2 > 20) {
                                    pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pUpperLinePoints[vblUpperCounter - 2], pUpperLinePoints[vblUpperCounter - 1], 15 + dist);
                                    pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pLowerLinePoints[vblLowerCounter - 2], pLowerLinePoints[vblLowerCounter - 1], 15 + dist);
                                } else {
                                    pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pUpperLinePoints[vblUpperCounter - 2], pUpperLinePoints[vblUpperCounter - 1], -50);
                                    pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLineDouble(pLowerLinePoints[vblLowerCounter - 2], pLowerLinePoints[vblLowerCounter - 1], -50);
                                }
                                pt3 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pt2, pt1, Math.abs(dist / 2), 18);
                                pt4 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(pt1, pt2, Math.abs(dist / 2), 18);
                                midPt2 = armyc2.c2sd.JavaLineArray.lineutility.MidPointDouble(pt1, pt2, 18);
                                pLinePoints[vblCounter - 8] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt3);
                                pLinePoints[vblCounter - 7] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt4);
                                pLinePoints[vblCounter - 5] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(midPt2);
                                if (midPt1.x === midPt2.x && midPt1.y === midPt2.y) {
                                    //if (armyc2.c2sd.JavaLineArray.Channels._client.startsWith("cpof"))
                                    if (armyc2.c2sd.JavaLineArray.Channels._client.substring(0,4).equals("cpof"))
                                        dFeature = 30;
                                    else
                                        dFeature = 15;
                                    midPt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(nextToLastPoint, pArrowLinePoints[0], 10, 17);
                                    pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendTrueLinePerpDouble(lastPoint, midPt1, midPt1, dFeature, 18);
                                    pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendTrueLinePerpDouble(lastPoint, midPt1, midPt1, -dFeature, 5);
                                    pLinePoints[vblCounter - 9] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                                    pLinePoints[vblCounter - 6] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2);
                                    //if (armyc2.c2sd.JavaLineArray.Channels._client.startsWith("cpof"))
                                    if (armyc2.c2sd.JavaLineArray.Channels._client.substring(0,4).equals("cpof"))
                                        midPt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(nextToLastPoint, pArrowLinePoints[0], 20, 17);
                                    else {
                                        if (dist2 > 30)
                                            midPt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(nextToLastPoint, pArrowLinePoints[0], 20, 17);
                                        else
                                            midPt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(nextToLastPoint, pArrowLinePoints[0], dFeature, 17);
                                    }
                                    dFeature -= 10;
                                    pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendTrueLinePerpDouble(lastPoint, midPt2, midPt2, dFeature, 18);
                                    pt2 = armyc2.c2sd.JavaLineArray.lineutility.ExtendTrueLinePerpDouble(lastPoint, midPt2, midPt2, -dFeature, 18);
                                    pLinePoints[vblCounter - 8] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                                    pLinePoints[vblCounter - 7] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt2);
                                    pLinePoints[vblCounter - 5] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(midPt2);
                                }
                                //if (armyc2.c2sd.JavaLineArray.Channels._client.startsWith("cpof"))
                                if (armyc2.c2sd.JavaLineArray.Channels._client.substring(0,4).equals("cpof"))
                                    dFeature = 30;
                                else {
                                    if (dist2 > 30)
                                        dFeature = 30;
                                    else if (dist2 > 20)
                                        dFeature = 10;
                                    else
                                        dFeature = 10;
                                }
                                pt1 = armyc2.c2sd.JavaLineArray.lineutility.ExtendLine2Double(midPt1, midPt2, dFeature, Math.floor(dFeature));
                                pLinePoints[vblCounter - 4] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pt1);
                                armyc2.c2sd.JavaLineArray.lineutility.GetArrowHead4Double(midPt2, pt1, Math.floor(Math.floor(dFeature) / 2), Math.floor(Math.floor(dFeature) / 2), arrowPts, 18);
                                for (k = 0; k < 3; k++) {
                                    pLinePoints[vblCounter - k - 1] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(arrowPts[k]);
                                    pLinePoints[vblCounter - k - 1].style = 18;
                                }
                            }
                            break;
                        case 22320000:
                        case 22320001:
                            vblCounter = vblLowerCounter + vblUpperCounter + 8;
                            pLinePoints = new Array(vblCounter);
                            armyc2.c2sd.JavaLineArray.lineutility.InitializePOINT2Array(pLinePoints);
                            for (j = 0; j < pLinePoints.length; j++) {
                                pLinePoints[j].x = lpsaUpperVBPoints[0];
                                pLinePoints[j].y = lpsaUpperVBPoints[1];
                            }
                            for (k = 0; k < vblCounter; k++) {
                                pLinePoints[k].style = 0;
                            }
                            armyc2.c2sd.JavaLineArray.Channels.GetAAFNTDouble(nPrinter, pLowerLinePoints, vblLowerCounter, pUpperLinePoints, vblUpperCounter, pArrowLinePoints[0], pLinePoints, arrowOffsetFactor);
                            break;
                        default:
                            break;
                    }
                    if (vbiDrawThis === 231117101 || vbiDrawThis === 231117201 || vbiDrawThis === 231117301) {
                        vblCounter = 3 * vblUpperCounter;
                        for (k = vblLowerCounter + vblUpperCounter; k < vblCounter; k++) {
                            pLinePoints[k] = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(pOriginalLinePoints[k - vblLowerCounter - vblUpperCounter]);
                            pLinePoints[k].style = 25;
                        }
                        pLinePoints[vblLowerCounter - 1].style = 5;
                        pLinePoints[vblLowerCounter + vblUpperCounter - 1].style = 5;
                    }
                    if (vbiDrawThis === 231113003) {
                        for (k = 0; k < vblCounter; k++) {
                            if (pLinePoints[k].style !== 5) {
                                pLinePoints[k].style = 18;
                            }
                        }
                    }
                    if (shapes === null) {
                        for (j = 0; j < pLinePoints.length; j++) {
                            resultVBPoints[3 * j] = pLinePoints[j].x;
                            resultVBPoints[3 * j + 1] = pLinePoints[j].y;
                            resultVBPoints[3 * j + 2] = pLinePoints[j].style;
                        }
                        return pLinePoints.length;
                    }
                    var shape = null;
                    var beginLine = true;
                    var beginPath = true;
                    if (vbiDrawThis === 22320000 || vbiDrawThis === 22320001) {
                        for (k = 0; k < vblCounter; k++) {
                            if (pLinePoints[k].style === 2)
                                continue;
                            if (shape === null)
                                shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                            if (beginLine) {
                                if (k > 0)
                                    if (pLinePoints[k].style === 5 && pLinePoints[k - 1].style === 5)
                                        shape.lineTo(pLinePoints[k]);
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
                                shapes.add(shape);
                            }
                        }
                        for (k = 0; k < vblCounter; k++) {
                            if (pLinePoints[k].style === 2 && pLinePoints[k - 1].style === 5) {
                                shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                                shape.set_Style(2);
                                shape.moveTo(pLinePoints[k]);
                            } else if (pLinePoints[k].style === 2 && pLinePoints[k - 1].style === 2) {
                                shape.lineTo(pLinePoints[k]);
                            } else if (pLinePoints[k].style === 5 && pLinePoints[k - 1].style === 2) {
                                shape.lineTo(pLinePoints[k]);
                                shapes.add(shape);
                                break;
                            } else
                                continue;
                        }
                    }
                    for (k = 0; k < vblCounter; k++) {
                        if (shape === null) {
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                        }
                        switch (vbiDrawThis) {
                            case 21700000:
                            case 21710000:
                                shape.set_Style(1);
                                break;
                        }
                        switch (vbiDrawThis) {
                            case 22320000:
                            case 22320001:
                                break;
                            case 22123000:
                            case 22123002:
                                if (beginPath === false) {
                                    if (k > 0) {
                                        if (pLinePoints[k].style === 5) {
                                            shape.lineTo(pLinePoints[k]);
                                            if (shape !== null && shape.getShape() !== null) {
                                                shapes.add(shape);
                                            }
                                            beginPath = true;
                                        } else {
                                            shape.lineTo(pLinePoints[k]);
                                        }
                                    } else {
                                        shape.moveTo(pLinePoints[k]);
                                    }
                                } else {
                                    shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                                    shape.moveTo(pLinePoints[k]);
                                    shape.set_Style(pLinePoints[k].style);
                                    if (pLinePoints[k].style === 25)
                                        shape.setLineColor(armyc2.c2sd.renderer.utilities.Color.RED);
                                    beginPath = false;
                                }
                                break;
                            case 21700000:
                            case 21710000:
                            case 22521300:
                            case 22521420:
                            case 22521421:
                            case 22521200:
                            case 22521100:
                                if (beginLine) {
                                    if (k > 0) {
                                        if (pLinePoints[k].style === 5 && pLinePoints[k - 1].style === 5 && k !== vblCounter - 1)
                                            continue;
                                    }
                                    shape.moveTo(pLinePoints[k]);
                                    beginLine = false;
                                } else {
                                    shape.lineTo(pLinePoints[k]);
                                    if (pLinePoints[k].style === 5) {
                                        beginLine = true;
                                    }
                                }
                                if (k === vblCounter - 1) {
                                    if (shape !== null && shape.getShape() !== null) {
                                        shapes.add(shape);
                                    }
                                }
                                break;
                            case 231111000:
                            case 231112000:
                            case 231113000:
                            case 231115000:
                            case 231116000:
                                if (k === 0) {
                                    shape.moveTo(pLinePoints[k]);
                                    if (pLinePoints[k].style === 5) {
                                        continue;
                                    }
                                }
                                if (k > 0 && k < vblCounter - 1) {
                                    if (pLinePoints[k - 1].style === 5)
                                        shape.moveTo(pLinePoints[k]);
                                    else if (pLinePoints[k - 1].style === 0)
                                        shape.lineTo(pLinePoints[k]);
                                    if (pLinePoints[k].style === 5)
                                        shape.moveTo(pLinePoints[k]);
                                    if (k === vblCounter - 2 && pLinePoints[k].style === 0) {
                                        shape.moveTo(pLinePoints[k]);
                                        shape.lineTo(pLinePoints[k + 1]);
                                    }
                                }
                                if (k === vblCounter - 1) {
                                    if (shape !== null && shape.getShape() !== null)
                                        shapes.add(shape);
                                }
                                break;
                            default:
                                if (beginLine) {
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
                                break;
                        }
                    }
                    var fillShapes = armyc2.c2sd.JavaLineArray.Channels.getAXADFillShapes(vbiDrawThis, pLinePoints);
                    if (fillShapes !== null && fillShapes.size() > 0)
                        shapes.addAll(0, fillShapes);
                    
                    //diagnostic
                    if(vbiDrawThis===15000000)
                    {
                        //shapes.remove(1);
                        shape=new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_POLYLINE);
                        shape.moveTo(pOriginalLinePoints[0]);
                        for(j=1;j<pOriginalLinePoints.length;j++)
                            shape.lineTo(pOriginalLinePoints[j]);
                        shapes.add(shape);
                    }
                    //end section
                    
                    lResult = lResultCounter;
                    pLinePoints = null;
                    pLowerLinePoints = null;
                    pUpperLinePoints = null;
                    pArrowLinePoints = null;
                    pUpperFlotPoints = null;
                    arrowPts = null;
                    XPoints = null;
                    pEllipsePoints2 = null;
                    pOriginalLinePoints = null;
                    pOriginalLinePoints2 = null;
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.Channels._className, "GetChannel1Double", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetChannel1Double " + Integer.toString(vbiDrawThis), exc));
                    } else {
                        throw exc;
                    }
                }
                return lResult;
            },
            getAXADFillShapes: function(lineType, pLinePoints) {
                var shapes = null;
                try {
                    var newPts = new java.util.ArrayList();
                    var j = 0;
                    var shape = null;
                    var n = pLinePoints.length;
                    switch (lineType) {
                        case 15000000:
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL);
                            shape.moveTo(pLinePoints[0]);
                            for (j = 1; j < pLinePoints.length; j++) {
                                shape.lineTo(pLinePoints[j]);
                            }
                            break;
                        case 231113001:
                        case 231113002:
                        case 231113003:
                            for (j = 0; j < Math.floor(n / 2); j++) {
                                newPts.add(pLinePoints[j]);
                            }
                            for (j = n - 1; j >= Math.floor(n / 2); j--) {
                                newPts.add(pLinePoints[j]);
                            }
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL);
                            shape.moveTo(newPts.get(0));
                            for (j = 1; j < newPts.size(); j++) {
                                shape.lineTo(newPts.get(j));
                            }
                            break;
                        case 22521100:
                        case 22521200:
                        case 22521420:
                        case 21700000:
                        case 22521421:
                            for (j = 0; j < Math.floor((pLinePoints.length - 8) / 2); j++) {
                                newPts.add(pLinePoints[j]);
                            }
                            newPts.add(pLinePoints[n - 6]);
                            newPts.add(pLinePoints[n - 7]);
                            newPts.add(pLinePoints[n - 8]);
                            newPts.add(pLinePoints[n - 3]);
                            newPts.add(pLinePoints[n - 4]);
                            for (j = n - 9; j >= Math.floor((n - 8) / 2); j--) {
                                newPts.add(pLinePoints[j]);
                            }
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL);
                            shape.moveTo(newPts.get(0));
                            for (j = 1; j < newPts.size(); j++) {
                                shape.lineTo(newPts.get(j));
                            }
                            break;
                        case 22320000:
                        case 22320001:
                            for (j = 0; j < Math.floor((pLinePoints.length - 8) / 2); j++) {
                                newPts.add(pLinePoints[j]);
                            }
                            newPts.add(pLinePoints[n - 8]);
                            newPts.add(pLinePoints[n - 7]);
                            newPts.add(pLinePoints[n - 6]);
                            newPts.add(pLinePoints[n - 5]);
                            newPts.add(pLinePoints[n - 4]);
                            for (j = n - 9; j >= Math.floor((n - 8) / 2); j--) {
                                newPts.add(pLinePoints[j]);
                            }
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL);
                            shape.moveTo(newPts.get(0));
                            for (j = 1; j < newPts.size(); j++) {
                                shape.lineTo(newPts.get(j));
                            }
                            break;
                        case 22521411:
                        case 22521410:
                            for (j = 0; j < Math.floor((pLinePoints.length - 8) / 2); j++) {
                                newPts.add(pLinePoints[j]);
                            }
                            newPts.add(pLinePoints[n - 6]);
                            newPts.add(pLinePoints[n - 5]);
                            for (j = n - 9; j >= Math.floor((n - 8) / 2); j--) {
                                newPts.add(pLinePoints[j]);
                            }
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL);
                            shape.moveTo(newPts.get(0));
                            for (j = 1; j < newPts.size(); j++) {
                                shape.lineTo(newPts.get(j));
                            }
                            break;
                        case 22521300:
                            for (j = 0; j < Math.floor((pLinePoints.length - 19) / 2); j++) {
                                newPts.add(pLinePoints[j]);
                            }
                            newPts.add(pLinePoints[n - 17]);
                            newPts.add(pLinePoints[n - 18]);
                            newPts.add(pLinePoints[n - 19]);
                            newPts.add(pLinePoints[n - 14]);
                            newPts.add(pLinePoints[n - 15]);
                            for (j = n - 20; j >= Math.floor((n - 19) / 2); j--) {
                                newPts.add(pLinePoints[j]);
                            }
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL);
                            shape.moveTo(newPts.get(0));
                            for (j = 1; j < newPts.size(); j++) {
                                shape.lineTo(newPts.get(j));
                            }
                            break;
                        case 21710000:
                            for (j = 0; j < Math.floor((pLinePoints.length - 17) / 2); j++) {
                                newPts.add(pLinePoints[j]);
                            }
                            newPts.add(pLinePoints[n - 15]);
                            newPts.add(pLinePoints[n - 16]);
                            newPts.add(pLinePoints[n - 17]);
                            newPts.add(pLinePoints[n - 12]);
                            newPts.add(pLinePoints[n - 13]);
                            for (j = n - 18; j >= Math.floor((n - 17) / 2); j--) {
                                newPts.add(pLinePoints[j]);
                            }
                            shape = new armyc2.c2sd.JavaLineArray.Shape2(armyc2.c2sd.JavaLineArray.Shape2.SHAPE_TYPE_FILL);
                            shape.moveTo(newPts.get(0));
                            for (j = 1; j < newPts.size(); j++) {
                                shape.lineTo(newPts.get(j));
                            }
                            break;
                        default:
                            break;
                    }
                    if (shape !== null) {
                        shapes = new java.util.ArrayList();
                        shape.setLineColor(null);
                        shapes.add(shape);
                    }
                } catch (exc) {
                    if (Clazz.instanceOf(exc)) {
                        armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaLineArray.Channels._className, "getAXADfillShapes", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside getAXADFillShapes", exc));
                    } else {
                        throw exc;
                    }
                }
                return shapes;
            },
            maxLength: 100,
            minLength: 5,
            _className: "Channels",
            _client: "",
            //_affiliation: "",
            _shiftLines: true
        };


