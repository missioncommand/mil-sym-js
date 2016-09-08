var armyc2 = armyc2 || {};
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.JavaTacticalRenderer = armyc2.c2sd.JavaTacticalRenderer || {};
armyc2.c2sd.JavaTacticalRenderer.clsChannelUtility = {
    GetPartitions: function(segments, partitions) {
        try {
            var j = 0;
            var nextSegment = false;
            var p1 = new armyc2.c2sd.JavaTacticalRenderer.P1();
            if (segments[0] === false) {
                return 0;
            }
            if (partitions !== null) {
                partitions.clear();
            } else {
                return 0;
            }
            p1.start = 0;
            for (j = 0; j < segments.length - 1; j++) {
                nextSegment = segments[j + 1];
                if (nextSegment === false) {
                    p1.end_Renamed = j;
                    partitions.add(p1);
                    p1 = new armyc2.c2sd.JavaTacticalRenderer.P1();
                    p1.start = j + 1;
                }
            }
            p1.end_Renamed = j;
            partitions.add(p1);
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsChannelUtility._className, "GetPartitions", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetPartitions", exc));
            } else {
                throw exc;
            }
        }
        return partitions.size();
    },
    DrawGoodChannel2: function(fromSegment, toSegment, pixels, lineType, channelWidth, bolLastSegment, shapes, channelPoints, distanceToChannelPoint, rev) {
        var returnValue = 0;
        try {
            var lineType2;
            var channelPixels = null;
            switch (lineType) {
                case 23111001:
                    lineType2 = 23111001;
                case 22123000:
                case 22123001:
                case 22123002:
                case 231111000:
                case 231113000:
                case 231112000:
                case 231114000:
                case 231115000:
                case 231116000:
                case 15000000:
                case 231117100:
                case 231117101:
                case 231117200:
                case 231117201:
                case 231117300:
                case 231117301:
                    lineType2 = lineType;
                    break;
                case 22320000:
                    if (fromSegment === 0) {
                        lineType2 = 231113002;
                    } else {
                        lineType2 = 231113001;
                    }
                    break;
                case 22521420:
                    if (fromSegment === 0) {
                        lineType2 = 231113002;
                    } else {
                        lineType2 = 231113001;
                    }
                    break;
                case 22521410:
                    if (fromSegment === 0) {
                        lineType2 = 231113002;
                    } else {
                        lineType2 = 231113001;
                    }
                    break;
                case 21700000:
                    lineType2 = 231113003;
                    break;
                case 21710000:
                    lineType2 = 231113003;
                    break;
                default:
                    lineType2 = 231113001;
                    break;
            }
            if (bolLastSegment === true) {
                if (fromSegment !== 0) {
                    switch (lineType) {
                        case 22320000:
                            lineType2 = 22320001;
                            break;
                        case 22521420:
                            lineType2 = 22521421;
                            break;
                        case 22521410:
                            lineType2 = 22521411;
                            break;
                        default:
                            lineType2 = lineType;
                            break;
                    }
                } else {
                    lineType2 = lineType;
                }
            }
            if (fromSegment < 0) {
                return returnValue;
            }
            if (toSegment < 0) {
                return returnValue;
            }
            if (toSegment < fromSegment) {
                return returnValue;
            }
            var j;
            var lineCount;
            var numPoints;
            var counter;
            var goodUpperPixels;
            var goodLowerPixels;
            numPoints = toSegment - fromSegment + 2;
            goodUpperPixels = Clazz.newArray(2 * numPoints, 0);
            goodLowerPixels = Clazz.newArray(2 * numPoints, 0);
            counter = 0;
            for (j = fromSegment; j < toSegment + 2; j++) {
                goodUpperPixels[counter] = pixels[2 * j];
                goodUpperPixels[counter + 1] = pixels[2 * j + 1];
                goodLowerPixels[counter] = pixels[2 * j];
                goodLowerPixels[counter + 1] = pixels[2 * j + 1];
                counter = counter + 2;
            }
            lineCount = armyc2.c2sd.JavaLineArray.CELineArray.CGetLineCountDouble(goodUpperPixels, numPoints, lineType2, channelWidth, rev);
            channelPixels = Clazz.newArray(3 * lineCount, 0);
            var pt = null;
            lineCount = armyc2.c2sd.JavaLineArray.CELineArray.CGetChannel2Double(goodUpperPixels, goodLowerPixels, channelPixels, numPoints, numPoints, lineType2, Math.floor(channelWidth / 2), Math.floor(distanceToChannelPoint), shapes, rev);
            if (shapes === null && channelPixels !== null) {
                for (j = 0; j < Math.floor(channelPixels.length / 3); j++) {
                    pt = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2(channelPixels[3 * j], channelPixels[3 * j + 1], Math.floor(channelPixels[3 * j + 2]));
                    if (j === Math.floor(channelPixels.length / 3) - 1) {
                        pt.style = 5;
                    }
                    channelPoints.add(pt);
                }
            }
            if (lineCount > 0) {
                returnValue = channelPixels.length;
            } else {
                returnValue = 0;
            }
            if (lineCount > 0) {
                channelPixels[lineCount - 1] = 5;
            }
            goodUpperPixels = null;
            goodLowerPixels = null;
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsChannelUtility._className, "DrawGoodChannel2", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside DrawGoodChannel2", exc));
            } else {
                throw exc;
            }
        }
        return returnValue;
    },
    DrawSegments: function(pixels, partitions, linetype, channelWidth, shapes, channelPoints, distanceToChannelPoint, rev) {
        try {
            var j = 0;
            var n = 0;
            for (j = 0; j < partitions.size() - 1; j++) {
                n = armyc2.c2sd.JavaTacticalRenderer.clsChannelUtility.DrawGoodChannel2(partitions.get(j).start, partitions.get(j).end_Renamed, pixels, linetype, channelWidth, false, shapes, channelPoints, distanceToChannelPoint, rev);
            }
            n = armyc2.c2sd.JavaTacticalRenderer.clsChannelUtility.DrawGoodChannel2(partitions.get(j).start, partitions.get(j).end_Renamed, pixels, linetype, channelWidth, true, shapes, channelPoints, distanceToChannelPoint, rev);
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsChannelUtility._className, "DrawSegments", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside DrawSegments", exc));
            } else {
                throw exc;
            }
        }
        return;
    },
    /*
     * handle too small MBR for line of contact
     */
    getLCPixels: function(tg, pixels)
    {
        var pixels2=null;
        try{
            if(tg.get_LineType()!==22123000)
                return pixels;
            var pts=tg.Pixels.toArray();
            var ul=new armyc2.c2sd.JavaLineArray.POINT2(),lr=new armyc2.c2sd.JavaLineArray.POINT2();
            armyc2.c2sd.JavaLineArray.lineutility.CalcMBRPoints(pts, pts.length, ul, lr);
            if(lr.x-ul.x>=21)
                return pixels;
            else if (lr.y-ul.y>=21)
                return pixels;
            //at this point the mbr is too small for a meaningful LC symbol
            var x0=pts[0].x,y0=pts[0].y,x1=pts[1].x,y1=pts[1].y;
            if (x0<=x1)            
                x1=x0+21;            
            else
                x1=x0-21;
            y1=y0;
            var pt0=new armyc2.c2sd.JavaLineArray.POINT2(x0,y0),pt1=new armyc2.c2sd.JavaLineArray.POINT2(x1,y1);
            pixels2=new java.util.ArrayList();
            pixels2.add(pt0);
            pixels2.add(pt1);                        
        }
        catch (exc) 
        {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsChannelUtility._className, "DrawSegments", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside getLCPixels", exc));
            } else {
                throw exc;
            }            
        }
        return pixels2;
    },
    DrawChannel: function(pixels, linetype, tg, shapes, channelPoints, rev) {
        try {
            pixels=this.getLCPixels(tg,pixels);
            armyc2.c2sd.JavaLineArray.lineutility.adjustCATKBYFIREControlPoint(linetype, pixels, 45);            
            if(tg.get_LineType()===22123000 && tg.get_Affiliation().equalsIgnoreCase("H"))            
                linetype=22123002;
            var j = 0;
            var pixels2 = Clazz.newArray(pixels.size() * 2, 0);
            for (j = 0; j < pixels.size(); j++) {
                pixels2[2 * j] = pixels.get(j).x;
                pixels2[2 * j + 1] = pixels.get(j).y;
            }
            armyc2.c2sd.JavaTacticalRenderer.clsChannelUtility.DrawChannel2(pixels2, linetype, tg, shapes, channelPoints, rev);
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsChannelUtility._className, "DrawChannel", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside DrawChannel", exc));
            } else {
                throw exc;
            }
        }
    },
    GetPartitions2: function(tg) {
        var partitions = null;
        try {
            var pixels = Clazz.newArray(tg.Pixels.size() * 2, 0);
            for (var j = 0; j < tg.Pixels.size(); j++) {
                pixels[2 * j] = tg.Pixels.get(j).x;
                pixels[2 * j + 1] = tg.Pixels.get(j).y;
            }
            var segments = Clazz.newArray(Math.floor(pixels.length / 2) - 1, false);
            if (segments.length === 0)
                return null;
            var factor = 3;
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.GetSegments(pixels, segments, factor);
            partitions = new java.util.ArrayList();
            armyc2.c2sd.JavaTacticalRenderer.clsChannelUtility.GetPartitions(segments, partitions);
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsChannelUtility._className, "GetPartitions2", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside GetPartitions2", exc));
            } else {
                throw exc;
            }
        }
        return partitions;
    },
    DrawChannel2: function(pixels, linetype, tg, shapes, channelPoints, rev) {
        try {
            var distanceToChannelPoint = new armyc2.c2sd.JavaLineArray.ref();
            var bolAnimation = false;
            var j = 0;
            var pixels2 = null;
            var channelWidth = 0;
            var partitions = null;
            var numPoints = 0;
            distanceToChannelPoint.value = Clazz.newArray(1, 0);
            distanceToChannelPoint.value[0] = 20;
            switch (linetype) {
                case 22320000:
                case 22521410:
                case 21700000:
                case 21710000:
                case 22521100:
                case 22521200:
                case 22521300:
                case 22521420:
                    armyc2.c2sd.JavaTacticalRenderer.clsUtility.ReorderPixels(pixels);
                    if (linetype === 22320000) {
                        channelWidth = Math.floor(armyc2.c2sd.JavaTacticalRenderer.clsUtility.ChannelWidth(pixels, distanceToChannelPoint) / 2);
                        var pt0 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                        var pt1 = armyc2.c2sd.JavaLineArray.lineutility.setPOINT2();
                        pt0.x = pixels[pixels.length - 4];
                        pt0.y = pixels[pixels.length - 3];
                        pt1.x = pixels[pixels.length - 6];
                        pt1.y = pixels[pixels.length - 5];
                        pt0 = armyc2.c2sd.JavaLineArray.lineutility.ExtendAlongLineDouble(pt0, pt1, Math.floor(channelWidth / 8));
                        pixels[pixels.length - 4] = pt0.x;
                        pixels[pixels.length - 3] = pt0.y;
                    }
                    numPoints = Math.floor(pixels.length / 2);
                    if (numPoints < 3) {
                        return;
                    }
                    channelWidth = Math.floor(armyc2.c2sd.JavaTacticalRenderer.clsUtility.ChannelWidth(pixels, distanceToChannelPoint) / 2);
                    numPoints = Math.floor(pixels.length / 2);
                    pixels2 = Clazz.newArray(pixels.length - 2, 0);
                    for (j = 0; j < numPoints; j++) {
                        if (j < numPoints - 1) {
                            pixels2[2 * j] = pixels[2 * j];
                            pixels2[2 * j + 1] = pixels[2 * j + 1];
                        }
                    }
                    break;
                case 22123000:
                case 22123001:
                case 22123002:
                    if (bolAnimation === true) {
                        channelWidth = 32;
                    } else {
                        channelWidth = 40;
                    }
                    pixels2 = Clazz.newArray(pixels.length, 0);
                    for (j = 0; j < pixels.length; j++) {
                        pixels2[j] = pixels[j];
                    }
                    break;
                case 231111000:
                case 231113000:
                case 231112000:
                case 231114000:
                case 231115000:
                case 231116000:
                    channelWidth = 30;
                    if (armyc2.c2sd.JavaLineArray.Channels.getShiftLines() === true)
                        channelWidth = 60;
                    pixels2 = Clazz.newArray(pixels.length, 0);
                    for (j = 0; j < pixels.length; j++) {
                        pixels2[j] = pixels[j];
                    }
                    break;
                case 15000000:
                    channelWidth = 8 * tg.Pixels.get(0).style;
                    pixels2 = Clazz.newArray(pixels.length, 0);
                    for (j = 0; j < pixels.length; j++) {
                        pixels2[j] = pixels[j];
                    }
                    break;
                case 231117100:
                case 231117101:
                case 231117200:
                case 231117201:
                case 231117300:
                case 231117301:
                    channelWidth = 110;
                    pixels2 = Clazz.newArray(pixels.length, 0);
                    for (j = 0; j < pixels.length; j++) {
                        pixels2[j] = pixels[j];
                    }
                    break;
                default:
                    break;
            }
            var segments = Clazz.newArray(Math.floor(pixels2.length / 2) - 1, false);
            if (segments.length === 0)
                return;
            var factor = 3;
            armyc2.c2sd.JavaTacticalRenderer.clsUtility.GetSegments(pixels2, segments, factor);
            partitions = new java.util.ArrayList();
            armyc2.c2sd.JavaTacticalRenderer.clsChannelUtility.GetPartitions(segments, partitions);
            armyc2.c2sd.JavaTacticalRenderer.clsChannelUtility.DrawSegments(pixels2, partitions, linetype, channelWidth, shapes, channelPoints, distanceToChannelPoint.value[0], rev);
            pixels2 = null;
            partitions = null;
            segments = null;
            return;
        } catch (exc) {
            if (Clazz.instanceOf(exc)) {
                armyc2.c2sd.renderer.utilities.ErrorLogger.LogException(armyc2.c2sd.JavaTacticalRenderer.clsChannelUtility._className, "DrawChannel2", new armyc2.c2sd.renderer.utilities.RendererException("Failed inside DrawChannel2", exc));
            } else {
                throw exc;
            }
        }
    },
    _className: "clsChannelUtility"
};