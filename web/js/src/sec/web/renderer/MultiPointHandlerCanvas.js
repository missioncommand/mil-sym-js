var sec = sec || {};
/** namespace */
sec.web = sec.web || {};
sec.web.renderer = sec.web.renderer || {};
/** @class */
sec.web.renderer.MultiPointHandlerCanvas = (function () {
    //private vars
    var ErrorLogger = armyc2.c2sd.renderer.utilities.ErrorLogger;
    var RendererSettings = armyc2.c2sd.renderer.utilities.RendererSettings;
    var RendererUtilities = armyc2.c2sd.renderer.utilities.RendererUtilities;
    var _buffer = null;
    var _blankCanvas = null;
    var _blankCanvasContext = null;
    var _document = document;

    var textInfoBuffer = null,
        textInfoContext = null,
        textInfoContextFont = null,
        tempMPBuffer = null,
        tempMPContext = null;
        
    var hasSetLineDash = false;
     
        
    //decimal lat/lon accuracy by decimal place
    //7DP ~= 11.132mm (en.wikipedia.org/wiki/Decimal_degrees)
    var _decimalAccuracy = 7;
            
    //constructor code
    if(document)
    {
        _blankCanvas = document.createElement('canvas');
        _blankCanvas.width=2;
        _blankCanvas.height=2;
        _blankCanvasContext = _blankCanvas.getContext('2d');
        if(_blankCanvasContext.setLineDash)
        {
            hasSetLineDash = true;
        }
    }
    
    
    //private functions
            
    return{
        //public vars
        
        //public functions
        
        /**
         * Generates a GeoCanvas which can be draped on a map.
         * Better with RenderSymbol2D
         * 
         * @param {ShapeInfo[]} shapes - array of armyc2.c2sd.renderer.utilities.ShapeInfo
         * @param {ShapeInfo[]} modifiers - array of armyc2.c2sd.renderer.utilities.ShapeInfo
         * @param {object} ipc - PointConversion or PointConverter3D
         * @param {boolean} normalize 
         * @param {number} format - 3 for canvas, 4 for dataURL (expensive, don't use)
         * @param {string} hexTextColor - 
         * @param {string} hexTextBackgroundColor - 
         * @param {boolean} wasClipped - true if symbol was clipped and will need redraw on map pan.
         * @param {number} pixelWidth - pixel width of the bounding box
         * @param {number} pixelHeight - pixel height of the bounding box
         * @param {object} fillTexture - an html5 canvas
         * @returns {geoCanvas} - looks like: {image:canvas,geoTL:geoCoordTL, geoBR:geoCoordBR, wasClipped:wasClipped};
         */
        GeoCanvasize: function (symbolID, shapes, modifiers, ipc, normalize, format, hexTextColor, hexTextBackgroundColor, wasClipped, pixelWidth, pixelHeight, fillTexture, converter)
        {
            if (textInfoBuffer === null)
            {
                textInfoBuffer = document.createElement('canvas');
                textInfoBuffer.width = 1;
                textInfoBuffer.height = 1;
            }
            if (textInfoContext === null && textInfoBuffer.getContext !== undefined)
            {
                textInfoContext = textInfoBuffer.getContext('2d');
                textInfoContext.lineCap = "butt";
                textInfoContext.lineJoin = "miter";
                textInfoContext.miterLimit = 3;
                textInfoContextFont = RendererSettings.getMPModifierFont();
                textInfoContext.font = textInfoContextFont;
            }

            var height = RendererUtilities.measureTextWithFontString(textInfoContext.font, "Tj", textInfoContext).height;

            var tempBounds = null;
            var paths = [];
            var pathBounds = null;
            var labels = [];
            var labelBounds = null;
            var unionBounds = null;
            var rotatedBounds = null;
            
            try
            {

                var len = shapes.size();
                for (var i = 0; i < len; i++)
                {
                    var pathInfo = this.ShapesToGeoCanvas(symbolID, shapes.get(i), ipc, normalize, fillTexture, converter);
                    if(pathInfo.path && pathInfo.path.getBounds())
                    {
                        tempBounds = pathInfo.path.getBounds();
                        tempBounds.grow(Math.round(pathInfo.lineWidth / 2));//adjust for line width so nothing gets clipped.
                        if (pathBounds === null)
                            pathBounds = tempBounds.clone();
                        else
                            pathBounds.union(tempBounds);
                        paths.push(pathInfo);
                    }
                }
                
                var bbox = null;
                if(pixelWidth>0 && pixelHeight>0)
                    bbox = new armyc2.c2sd.renderer.so.Rectangle(0,0,pixelWidth,pixelHeight);

                var tempModifier, len2 = modifiers.size();
                var tiTemp = null;
                for (var j = 0; j < len2; j++) {
                    tempModifier = modifiers.get(j);

                    var labelInfo = tempModifier;
                    var tempLocation = tempModifier.getModifierStringPosition();
                    var oldLocation = null;
                    //multipoint renderer is assuming text is centered vertically 
                    //so we add half height to location as text is drawn cetered at 
                    //the bottom.

                    if(converter)//map specific converter
                    {
                        oldLocation = tempLocation;
                        tempLocation = ipc.PixelsToGeo(tempLocation);
                        tempLocation = converter.GeoToPixels(tempLocation);
                    }

                    var justify=tempModifier.getTextJustify() || "";
                    var strJustify="left";
                    if(justify===0)
                        strJustify="left";
                    else if(justify===1)
                        strJustify="center";
                    else if(justify===2)
                        strJustify="right";

                    textInfoContext.textAlign=strJustify;
                    //textInfoContext.textBaseline = "middle";
                    textInfoContext.textBaseline = "alphabetic";
                    tiTemp = new armyc2.c2sd.renderer.utilities.TextInfo(tempModifier.getModifierString(), tempLocation.x, tempLocation.y + (height / 2), textInfoContext, null);
                    tiTemp.textAlign=strJustify;
                    //tiTemp.textBaseline = "middle";
                    tiTemp.textBaseline = "alphabetic";
                    var bounds = tiTemp.getTextBounds();
                    var degrees = parseFloat(tempModifier.getModifierStringAngle());
                    rotatedBounds = null;
                    if (degrees !== 0)
                    {
                        rotatedBounds = this.GetRotatedRectangleBounds(bounds, tiTemp.getLocation(), degrees);
                        tiTemp.angle = degrees;
                    }

                    //make sure labels are in the bbox, otherwise they can
                    //make the canvas grow out of control.
                    //if (tiTemp && bbox.containsRectangle(bounds))
                    //if(bbox !== null)
                    if(tiTemp)
                    {
                        if (converter)
                        {
                            var preConvRect = new armyc2.c2sd.renderer.so.Rectangle(oldLocation.getX(),oldLocation.getY(),bounds.getWidth(),bounds.getHeight());
                            if((bbox.intersects(preConvRect)))// || bbox.intersects(rotatedBounds)))
                            {
                                labels.push(tiTemp);
                                if (labelBounds)
                                {
                                    if(rotatedBounds)
                                        labelBounds.union(rotatedBounds);
                                    else if(bounds)
                                        labelBounds.union(bounds);
                                }
                                else
                                {
                                    if(rotatedBounds)
                                        labelBounds = rotatedBounds;
                                    else if(bounds)
                                        labelBounds = bounds;
                                }
                            }
                        }
                        else if (bbox && (bbox.intersects(bounds) || bbox.intersects(rotatedBounds)))
                        {
                            labels.push(tiTemp);
                            if (labelBounds)
                            {
                                if(rotatedBounds)
                                    labelBounds.union(rotatedBounds);
                                else if(bounds)
                                    labelBounds.union(bounds);
                            }
                            else
                            {
                                if(rotatedBounds)
                                    labelBounds = rotatedBounds;
                                else if(bounds)
                                    labelBounds = bounds;
                            }
                        }
                        else if (bbox === null)
                        {
                            labels.push(tiTemp);
                            if (labelBounds)
                            {
                                if(rotatedBounds)
                                    labelBounds.union(rotatedBounds);
                                else if(bounds)
                                    labelBounds.union(bounds);
                            }
                            else
                            {
                                if(rotatedBounds)
                                    labelBounds = rotatedBounds;
                                else if(bounds)
                                    labelBounds = bounds;
                            }
                        }
                    }
                }//*/
                if(pathBounds)
                {
                    unionBounds = pathBounds.clone();
                }
                if (labelBounds)
                {
                    if(unionBounds)
                    {
                        unionBounds.union(labelBounds);
                    }
                    else
                    {
                        unionBounds = labelBounds;
                    }
                }

                //get geo bounds for canvas
                var geoCoordTL = null;
                var geoCoordBR = null;
                var geoCoordBL = null;
                var geoCoordTR = null;
                var west = null;
                var north = null;
                var south = null;
                var east = null;
                if(unionBounds)
                {
                    var coordTL = new armyc2.c2sd.graphics2d.Point2D();
                    coordTL.setLocation(unionBounds.getX(), unionBounds.getY());
                    var coordBR = new armyc2.c2sd.graphics2d.Point2D();
                    coordBR.setLocation(unionBounds.getX() + unionBounds.getWidth(), unionBounds.getY() + unionBounds.getHeight());

                    var coordTR = new armyc2.c2sd.graphics2d.Point2D();
                    coordTR.setLocation(unionBounds.getX() + unionBounds.getWidth(), unionBounds.getY());
                    var coordBL = new armyc2.c2sd.graphics2d.Point2D();
                    coordBL.setLocation(unionBounds.getX(), unionBounds.getY() + unionBounds.getHeight());

                    south = new armyc2.c2sd.graphics2d.Point2D(unionBounds.getX() + unionBounds.getWidth()/2,unionBounds.getY() + unionBounds.getHeight());
                    north = new armyc2.c2sd.graphics2d.Point2D(unionBounds.getX() + unionBounds.getWidth()/2,unionBounds.getY());
                    east = new armyc2.c2sd.graphics2d.Point2D(unionBounds.getX() + unionBounds.getWidth(),unionBounds.getY() + unionBounds.getHeight()/2);
                    west = new armyc2.c2sd.graphics2d.Point2D(unionBounds.getX(),unionBounds.getY() + unionBounds.getHeight()/2);
                    
                    if(converter)
                    {
                        geoCoordTL = converter.PixelsToGeo(coordTL);
                        geoCoordBR = converter.PixelsToGeo(coordBR);
                        geoCoordTR = converter.PixelsToGeo(coordTR);
                        geoCoordBL = converter.PixelsToGeo(coordBL);

                        north = converter.PixelsToGeo(north);
                        south = converter.PixelsToGeo(south);
                        east = converter.PixelsToGeo(east);
                        west = converter.PixelsToGeo(west);
                    }
                    else
                    {
                        geoCoordTL = ipc.PixelsToGeo(coordTL);
                        geoCoordBR = ipc.PixelsToGeo(coordBR);
                        geoCoordTR = ipc.PixelsToGeo(coordTR);
                        geoCoordBL = ipc.PixelsToGeo(coordBL);

                        north = ipc.PixelsToGeo(north);
                        south = ipc.PixelsToGeo(south);
                        east = ipc.PixelsToGeo(east);
                        west = ipc.PixelsToGeo(west);
                    }
                    if (normalize)
                    {
                        geoCoordTL = sec.web.renderer.MultiPointHandler.NormalizeCoordToGECoord(geoCoordTL);
                        geoCoordBR = sec.web.renderer.MultiPointHandler.NormalizeCoordToGECoord(geoCoordBR);
                        geoCoordTR = sec.web.renderer.MultiPointHandler.NormalizeCoordToGECoord(geoCoordTR);
                        geoCoordBL = sec.web.renderer.MultiPointHandler.NormalizeCoordToGECoord(geoCoordBL);

                        north = sec.web.renderer.MultiPointHandler.NormalizeCoordToGECoord(north);
                        south = sec.web.renderer.MultiPointHandler.NormalizeCoordToGECoord(south);
                        east = sec.web.renderer.MultiPointHandler.NormalizeCoordToGECoord(east);
                        west = sec.web.renderer.MultiPointHandler.NormalizeCoordToGECoord(west);
                    }
                    /*geoCoordTL.setLocation(toFixedPrecision(geoCoordTL.getX()), toFixedPrecision(geoCoordTL.getY()));
                    geoCoordBR.setLocation(toFixedPrecision(geoCoordBR.getX()), toFixedPrecision(geoCoordBR.getY()));
                    geoCoordTR.setLocation(toFixedPrecision(geoCoordTR.getX()), toFixedPrecision(geoCoordTR.getY()));
                    geoCoordBL.setLocation(toFixedPrecision(geoCoordBL.getX()), toFixedPrecision(geoCoordBL.getY()));

                    north.setLocation(toFixedPrecision(north.getX()), toFixedPrecision(north.getY()));
                    south.setLocation(toFixedPrecision(south.getX()), toFixedPrecision(south.getY()));
                    east.setLocation(toFixedPrecision(east.getX()), toFixedPrecision(east.getY()));
                    west.setLocation(toFixedPrecision(west.getX()), toFixedPrecision(west.getY()));//*/

                    geoCoordTL.setLocation(geoCoordTL.getX(), geoCoordTL.getY());
                    geoCoordBR.setLocation(geoCoordBR.getX(), geoCoordBR.getY());
                    geoCoordTR.setLocation(geoCoordTR.getX(), geoCoordTR.getY());
                    geoCoordBL.setLocation(geoCoordBL.getX(), geoCoordBL.getY());

                    north.setLocation(north.getX(), north.getY());
                    south.setLocation(south.getX(), south.getY());
                    east.setLocation(east.getX(), east.getY());
                    west.setLocation(west.getX(), west.getY());//*/
                }
                else//nothing to draw
                {
                    geoCoordTL = new armyc2.c2sd.graphics2d.Point2D(0,0);
                    geoCoordBR = new armyc2.c2sd.graphics2d.Point2D(0,0);
                    geoCoordTR = new armyc2.c2sd.graphics2d.Point2D(0,0);
                    geoCoordBL = new armyc2.c2sd.graphics2d.Point2D(0,0);

                    north = new armyc2.c2sd.graphics2d.Point2D(0,0);
                    south = new armyc2.c2sd.graphics2d.Point2D(0,0);
                    east = new armyc2.c2sd.graphics2d.Point2D(0,0);
                    west = new armyc2.c2sd.graphics2d.Point2D(0,0);
                }
            }
            catch (err)
            {
                ErrorLogger.LogException("MultiPointHandler", "GeoJSONize", err);
            }
            //if(renderToCanvas)
            //{
            if(paths && len > 0 && unionBounds)
            {
                paths.smooth = shapes.smooth;//for lineJoin
                var geoCanvas = this.RenderShapeInfoToCanvas(symbolID, paths, labels, unionBounds, geoCoordTL, geoCoordBR, geoCoordTR, geoCoordBL, north, south, east, west, format, hexTextColor, hexTextBackgroundColor, wasClipped);
                return geoCanvas;
            }
            else
            {
                //{image:buffer, geoTL:geoTL, geoBR:geoBR} OR {dataURL:buffer.toDataURL(), geoTL:geoTL, geoBR:geoBR}
                return {image:_blankCanvas,geoTL:geoCoordTL, geoBR:geoCoordBR, wasClipped:wasClipped};
            }
            //}
            //else
            //  return {paths:paths,textInfos:labels,bounds:unionBounds,geoTL:geoCoordTL,geoBR:geoCoordBR};
        },
        /**
         * 
         * @param {type} paths
         * @param {type} textInfos
         * @param {type} bounds
         * @param {type} geoTL
         * @param {type} geoBR
         * @param {type} format 3 for canvas, 4 for image as dataurl
         * @param {String} hexTextColor "#FFFFFF"
         * @param {String} hexTextBackgroundColor "#FFFFFF"
         * @returns {image:buffer, geoTL:geoTL, geoBR:geoBR} OR
         *          {dataURL:buffer.toDataURL(), geoTL:geoTL, geoBR:geoBR}
         */
        RenderShapeInfoToCanvas: function (symbolID, paths, textInfos, bounds, geoTL, geoBR, geoTR, geoBL, north, south, east, west, format, hexTextColor, hexTextBackgroundColor, wasClipped, fillTexture)
        {
            var buffer = null;
            if (format === 4)
            {
                if (tempMPBuffer === null)
                {
                    tempMPBuffer = document.createElement('canvas');
                }
                if (tempMPContext === null)
                {
                    tempMPContext = tempMPBuffer.getContext('2d');
                }
                buffer = tempMPBuffer;
                ctx = tempMPContext;
            }
            else
            {
                buffer = document.createElement('canvas');
            }

            var pathSize = paths.length;
            var textSize = textInfos.length;
            var pathInfo = paths;
            var pi = null;
            var bounds = bounds;
            buffer.width = bounds.getWidth();
            buffer.height = bounds.getHeight();

            if (format === 4)//recycling buffer so we need to make sure it's clean.
            {
                ctx.clearRect(0, 0, bounds.getWidth(), bounds.getHeight());
            }

            var lineColor = "#000000";
            var ctx = buffer.getContext('2d');

            //configure line settings/////////
            ctx.globalAlpha = 1;
            ctx.lineCap = "round";//butt,round,square
            if(paths.smooth === true)
            {
                ctx.lineJoin = "round";//bevel,round,miter    
            }
            else
            {
                ctx.lineJoin = "miter";//bevel,round,miter
            }
            
            //ctx.miterLimit = 2;
            //////////////////////////////////

            ctx.translate(bounds.getX() * -1, bounds.getY() * -1);
            if(format !== 5)
            {
                for (var i = 0; i < pathSize; i++)
                {
                    pi = pathInfo[i];
                    if (pi.lineColor !== null)
                        lineColor = pi.lineColor;
                    if (pi.lineWidth)
                        ctx.lineWidth = pi.lineWidth;
                    if (pi.lineColor !== null)
                    {
                        ctx.strokeStyle = pi.lineColor;
                        ctx.globalAlpha = 1;
                        pi.path.stroke(ctx);
                    }
                    if (pi.fillColor !== null)
                    {
                        ctx.fillStyle = pi.fillColor;
                        ctx.globalAlpha = pi.alpha;
                        pi.path.fill(ctx);
                    }
                    if(pi.fillPattern !== null)
                    {
                        pi.path.fillPattern(ctx, pi.fillPattern);
                    }
                    /*else if(fillTexture)//can probably remove this case 1/26/17
                    {
                        pi.path.fillPattern(ctx, fillTexture);
                    }//*/
                }
            }
            else
            {
                ctx.globalAlpha = 1;
            }
           


            ctx.setTransform(1, 0, 0, 1, 0, 0);
            if (textInfos.length > 0)
            {
                ctx.globalAlpha = 1;
                //apply mpmodfier font
                //loop and render text
                var tis = textInfos;
                var ti = null;
                var angle = 0;
                var tbm = RendererSettings.getTextBackgroundMethod();
                var outlineWidth = RendererSettings.getTextOutlineWidth();
                var mpFont = RendererSettings.getMPModifierFont();

                //set text color and outline/fill color
                var htbc = hexTextBackgroundColor || RendererUtilities.getIdealOutlineColor((hexTextColor || lineColor),true);
                var htc = hexTextColor || lineColor;
                ctx.fillStyle = htc;
                var outlineStyle = htbc;

                ctx.font = mpFont;
                //ctx.textBaseline = "top";
                //ctx.textBaseline = "Alphabetic";
                //ctx.textBaseline = "middle";
                //ctx.textAlign="left";
                if (outlineWidth > 0)
                    ctx.lineWidth = (outlineWidth * 2) + 1;
                ctx.strokeStyle = outlineStyle;
                var offsetX = bounds.getX();
                var offsetY = bounds.getY();
                var tX = 0;
                var tY = 0;
                //362,422
                var height = RendererUtilities.measureTextWithFontString(mpFont, "Tj", ctx).height;
                //ctx.fillText("test",10,height + 80);
                
                //set line style for text stroke
                ctx.lineCap = "butt";
                ctx.lineJoin = "miter";
                ctx.miterLimit = 3;
                for (var j = 0; j < textSize; j++)
                {
                    
                    ti = tis[j];

                    if(ti.textAlign)
                        ctx.textAlign=ti.textAlign;
                    if(ti.textBaseline)
                        ctx.textBaseline=ti.textBaseline;
                    
                    //ti.getTextOutlineBounds().stroke(ctx);
                    ////TEST: stroke to see bounds (before transform)
                    //ctx.translate(bounds.getX() * - 1, bounds.getY() * - 1);
                    angle = ti.angle;

                    tX = ((ti.getLocation().getX()) - offsetX);
                    tY = ((ti.getLocation().getY()) - offsetY);
                    ctx.translate(tX, tY);

                    //TEST
                    /*
                     ctx.save();
                     ctx.setTransform(1,0,0,1,0,0);
                     
                     ctx.strokeStyle="#00FF00";
                     var tiRect = ti.getTextOutlineBounds();
                     ctx.translate(tiRect.x - offsetX, tiRect.y - offsetY);
                     
                     //TEST: stroke to see bounds
                     ctx.strokeRect(0,0,tiRect.getWidth(),tiRect.getHeight());
                     
                     ctx.restore();
                     ctx.setTransform(1,0,0,1,0,0);
                     ctx.translate(tX, tY);
                     //*/

                    if (angle !== 0)
                    {
                        ctx.rotate(angle * Math.PI / 180);
                    }

                    switch (tbm)
                    {
                        case RendererSettings.TextBackgroundMethod_OUTLINE:
                        case RendererSettings.TextBackgroundMethod_OUTLINE_QUICK:
                            if (outlineWidth > 0)
                            {
                                ctx.strokeText(ti.text, 0, 0);
                                ctx.fillText(ti.text, 0, 0);
                            }
                            break;
                        case RendererSettings.TextBackgroundMethod_COLORFILL:
                            ctx.fillStyle = htbc;
                            var rectFill = ti.getTextOutlineBounds();
                            rectFill.setLocation(0 - outlineWidth, 0 - Math.round(rectFill.getHeight() / 2));
                            rectFill.fill(ctx);
                            ctx.fillStyle = htc;
                            ctx.fillText(ti.text, 0, 0);
                            break;
                        default:
                            ctx.fillText(ti.text, 0, 0);
                            break;

                    }



                    //TEST: stroke to see draw point of text
                    //ctx.strokeRect(0,0,1,1);

                    //ti.fillText(ctx);



                    ctx.setTransform(1, 0, 0, 1, 0, 0);
                }



            }
            //test

            /*ctx.translate(bounds.getX() * - 1, bounds.getY() * - 1);
             ctx.strokeStyle = "#000000";
             ctx.strokeRect(bounds.getX(), bounds.getY(),buffer.width,buffer.height);//*/

            /*ctx.setTransform(1,0,0,1,0,0);
             ctx.translate((bounds.getX()+100),(bounds.getY() + 100));
             ctx.rotate(45*Math.PI/180);
             ctx.fillText("test",0,0);//*/
            //ctx.fillText("test",362,422);
            //georeference buffer

            if (format === 3 || format === 5)
            {
                //return object with canvas and geo points
                return {image: buffer, geoTL: geoTL, geoBR: geoBR, geoTR:geoTR, geoBL:geoBL, north:north, south:south, east:east, west:west, width: buffer.width, height: buffer.height, wasClipped:wasClipped};
            }
            else if (format === 4)
            {
                //return object with dataurl and geo points
                return {dataURL: buffer.toDataURL(), geoTL: geoTL, geoBR: geoBR, geoTR:geoTR, geoBL:geoBL, north:north, south:south, east:east, west:west, width: buffer.width, height: buffer.height, wasClipped:wasClipped};
            }
            else
            {//should never get here:
                //just return the canvas
                buffer.geoTL = geoTL;
                buffer.geoBR = geoBR;
                return buffer;
            }

        },
        /**
         * 
         * @param {type} shapeInfos
         * @param {type} ipc
         * @param {type} normalize
         * @param {type} fillTexture
         * @returns {feature} {path, lineColor, fillColor, lineWidth, bounds}
         */
        ShapesToGeoCanvas: function (symbolID, shapeInfo, ipc, normalize, fillTexture, converter)
        {

            var pathInfo = null;
            var path = null;
            var fillColor = null;
            var lineColor = null;
            var lineWidth = null;
            var alpha = null;
            var dashArray = null;
            var fillPattern = null;


            var feature = {};
            feature.type = "Feature";
            feature.properties = {};
            feature.properties.label = "";
            var geometry = {};
            if (shapeInfo.getLineColor()) {
                lineColor = shapeInfo.getLineColor();
                alpha = lineColor.getAlpha() / 255;
                lineColor = lineColor.toHexString(false);
            }
            if (shapeInfo.getFillColor()) {
                fillColor = shapeInfo.getFillColor();
                if(fillColor.getAlpha() === 0 && fillTexture)
                {
                    fillPattern = fillTexture;
                    fillColor = null;
                }
                else
                {
                    alpha = fillColor.getAlpha() / 255;
                    fillColor = fillColor.toHexString(false);
                }
            }
            else if(fillTexture && symbolID.charAt(0)==='W')
            {
                fillPattern = fillTexture;
            }
            
            if(shapeInfo.getFillStyle() > 1)
            {
                fillPattern = armyc2.c2sd.renderer.utilities.FillPatterns.getCanvasFillStylePattern(shapeInfo.getFillStyle(), lineColor)
            }

            var stroke = null;
            stroke = shapeInfo.getStroke();
            lineWidth = 4;
            
            if (stroke !== null) {
                lineWidth = Math.round(stroke.getLineWidth());
                dashArray = stroke.getDashArray();
            }

            var shapesArray = shapeInfo.getPolylines();
            path = new armyc2.c2sd.renderer.so.Path();
            path.setLineDash(dashArray);
            for (var i = 0; i < shapesArray.size(); i++)
            {

                var shape = shapesArray.get(i);

                for (var j = 0; j < shape.size(); j++) {
                    var coord = shape.get(j);

                    if(converter)//map specific converter
                    {
                        coord = ipc.PixelsToGeo(coord);
                        coord = converter.GeoToPixels(coord);
                    }
                    
                    if (j === 0)
                    {
                        path.moveTo(coord.x, coord.y);
                    }
                    else if (dashArray)
                    {
                        if(hasSetLineDash)
                        {
                            path.lineTo(coord.x, coord.y);
                        }
                        else
                        {
                            path.dashedLineTo(coord.x, coord.y, dashArray);    
                        }
                        
                    }//*/
                    else
                    {
                        path.lineTo(coord.x, coord.y);
                    }

                }

            }
            pathInfo = {path: path, lineWidth: lineWidth, lineColor: lineColor, fillColor: fillColor, dashArray: dashArray, alpha: alpha, fillPattern: fillPattern};
            return pathInfo;
        },
        
        MakeFillTexture:function(symbolFillIds, symbolFillSize)
        {
            var texture;
            var symbolIDs = symbolFillIds.split(","); 
            var symbols = [];
            var width = 0, height = 0, spacerW = 0, spacerH = 0;
            //calculate texture dimensions
            for(var i = 0; i < symbolIDs.length; i++)
            {
                symbols.push(armyc2.c2sd.renderer.MilStdIconRenderer.Render(symbolIDs[i],{"SIZE":symbolFillSize}));
                var rect = symbols[i].getImageBounds();
                if(rect.getWidth() > width)
                    width = rect.getWidth();
                if(rect.getHeight() > height)
                    height = rect.getHeight();
            }
            spacerW = width / 3;
            spacerH = 10; //width / 2;
            
            
            //create texture
            texture = _document.createElement('canvas');
            texture.width = (width * symbols.length) + (spacerW * symbols.length);
            texture.height = height + spacerH;
            
            //draw to texture
            var x = spacerW;
            var y = spacerH;
            var ctx = texture.getContext('2d');
            for(var j = 0; j < symbols.length; j++)
            {
                var sym = symbols[j];
                var center = sym.getCenterPoint();
                
                ctx.drawImage(sym.getImage(),x + width/2 - center.getX(),y + height/2 - center.getY());
                x += spacerW + width;
            }
          
            return texture;  
        },
        /**
         * 
         * @param {armyc2.c2sd.renderer.so.Rectangle} rectangle
         * @param {armyc2.c2sd.renderer.so.Point} pointOfRotation
         * @param {Number} angle
         * @returns {armyc2.c2sd.renderer.so.Rectangle}
         */
        GetRotatedRectangleBounds: function (rectangle, pointOfRotation, angle)
        {
            try {

                var degrees = angle;

                var location = pointOfRotation;

                //armyc2.c2sd.renderer.so.Point
                var bounds = rectangle;

                //slacker math until I get real math working
                //produces extra large bounds but ensures space is alloted no matter what the text angle.
                var radius = bounds.width + bounds.height;
                bounds = new armyc2.c2sd.renderer.so.Rectangle(location.x - radius, location.y - radius, radius * 2, radius * 2);
                return bounds;//end slacker math

//            if(degrees !== 0)
//            {
//                //NOTE: flipping y sign because 2d drawing positive y goes down instead of up.
//                //angle in radians
//                var theta = -(degrees * (Math.PI / 180));
//                //4 corners before rotation
//                /*var tl = {x:(bounds.x),y:(bounds.y)};
//                var bl = {x:bounds.x,y:(bounds.y + bounds.height)};
//                var tr = {x:(bounds.x + bounds.width),y:bounds.y};
//                var br = {x:(bounds.x + bounds.width),y:(bounds.y + bounds.height)};//*/
//                
//                /*var tl = {x:(bounds.x),y:-(bounds.y)};
//                var bl = {x:bounds.x,y:-(bounds.y + bounds.height)};
//                var tr = {x:(bounds.x + bounds.width),y:-bounds.y};
//                var br = {x:(bounds.x + bounds.width),y:-(bounds.y + bounds.height)};//*/
//                
//               var tl = {x:(bounds.x),y:-(bounds.y + bounds.height)};
//                var bl = {x:bounds.x,y:-(bounds.y)};
//                var tr = {x:(bounds.x + bounds.width),y:-(bounds.y + bounds.height)};
//                var br = {x:(bounds.x + bounds.width),y:-(bounds.y)};//*/
//
//                //new bounding box
//                var bb = {};
//
//                /*
//                //TODO: do some math to adjust the point based on the angle
//                //where x0,y0 is the center around which you are rotating.
//                //x2 = x0+(x-x0)*cos(theta)+(y-y0)*sin(theta)
//                //y2 = y0+(x-x0)*sin(theta)+(y-y0)*cos(theta)
//                var x0 = location.x;
//                var y0 = location.y;
//
//                bl.x = (x0 + (bl.x - x0) * Math.cos(theta) - (bl.y - y0) * Math.sin(theta));
//                bl.y = (y0 + (bl.x - x0) * Math.sin(theta) + (bl.y - y0) * Math.cos(theta));
//
//                tl.x = (x0 + (tl.x - x0) * Math.cos(theta) - (tl.y - y0) * Math.sin(theta));
//                tl.y = (y0 + (tl.x - x0) * Math.sin(theta) + (tl.y - y0) * Math.cos(theta));
//
//                tr.x = (x0 + (tr.x - x0) * Math.cos(theta) - (tr.y - y0) * Math.sin(theta));
//                tr.y = (y0 + (tr.x - x0) * Math.sin(theta) + (tr.y - y0) * Math.cos(theta));
//
//                br.x = (x0 + (br.x - x0) * Math.cos(theta) - (br.y - y0) * Math.sin(theta));
//                br.y = (y0 + (br.x - x0) * Math.sin(theta) + (br.y - y0) * Math.cos(theta));//*/
//                
//                
//                //TODO: do some math to adjust the point based on the angle
//                //where x0,y0 is the center around which you are rotating.
//                //x2 = x0+(x-x0)*cos(theta)+(y-y0)*sin(theta)
//                //y2 = y0+(x-x0)*sin(theta)+(y-y0)*cos(theta)
//                var x0 = location.x;
//                var y0 = location.y;
//
//                bl.x = Math.cos(theta) * (bl.x - x0) - Math.sin(theta) * (bl.y - y0) + x0;
//                bl.y = Math.sin(theta) * (bl.x - x0) + Math.cos(theta) * (bl.y - y0) + y0;
//
//                tl.x = Math.cos(theta) * (tl.x - x0) - Math.sin(theta) * (tl.y - y0) + x0;
//                tl.y = Math.sin(theta) * (tl.x - x0) + Math.cos(theta) * (tl.y - y0) + y0;
//
//                tr.x = Math.cos(theta) * (tr.x - x0) - Math.sin(theta) * (tr.y - y0) + x0;
//                tr.y = Math.sin(theta) * (tr.x - x0) + Math.cos(theta) * (tr.y - y0) + y0;
//
//                br.x = Math.cos(theta) * (br.x - x0) - Math.sin(theta) * (br.y - y0) + x0;
//                br.y = Math.sin(theta) * (br.x - x0) + Math.cos(theta) * (br.y - y0) + y0;//*/
//                
//                //new equation
//                //var rotatedX = Math.cos(angle) * (point.x - center.x) - Math.sin(angle) * (point.y - center.y) + center.y;
//                //var rotatedy = Math.sin(angle) * (point.x - center.x) + Math.cos(angle) * (point.y - center.y) + center.y;
//
//                bb.x = Math.min(bl.x,tl.x,tr.x,br.x);
//                bb.y = Math.min(bl.y,tl.y,tr.y,br.y);
//                
//                bb.width = Math.max(bl.x,tl.x,tr.x,br.x) - bb.x;
//                bb.height = bb.y - Math.max(bl.y,tl.y,tr.y,br.y);
//                
//                //flip y back.
//                bb.y = -bb.y + bb.height;
//                bb.height = -bb.height;
//
//                return new armyc2.c2sd.renderer.so.Rectangle(bb.x,bb.y,bb.width,bb.height);
//            }
//            else
//            {
//                return bounds;
//            }

            } catch (err) {
                ErrorLogger.LogException("MultiPointHandler", "AdjustModifierPointToCenter", err);
                return null;
            }//*/
        }
    };
}());