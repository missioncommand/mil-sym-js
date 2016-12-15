var sec = sec || {};
/** namespace */
sec.web = sec.web || {};
sec.web.renderer = sec.web.renderer || {};
/** @class */
sec.web.renderer.MultiPointHandlerSVG = (function () {
    //private vars
    var ErrorLogger = armyc2.c2sd.renderer.utilities.ErrorLogger;
    var RendererSettings = armyc2.c2sd.renderer.utilities.RendererSettings;
    var RendererUtilities = armyc2.c2sd.renderer.utilities.RendererUtilities;
    var MilStdAttributes = armyc2.c2sd.renderer.utilities.MilStdAttributes;

       
    var hasSetLineDash = false;
    
    var fillTextures = {};
     
        
    //decimal lat/lon accuracy by decimal place
    //7DP ~= 11.132mm (en.wikipedia.org/wiki/Decimal_degrees)
    var _decimalAccuracy = 7;
            
   
    
    //private functions
            
    return{
        //public vars
        
        //public functions
        
        /**
         * Generates an SVG which can be draped on a map.
         * Better with RenderSymbol2D
         * 
         * @param {ShapeInfo[]} shapes - array of armyc2.c2sd.renderer.utilities.ShapeInfo
         * @param {ShapeInfo[]} modifiers - array of armyc2.c2sd.renderer.utilities.ShapeInfo
         * @param {object} ipc - PointConversion or PointConverter3D
         * @param {boolean} normalize 
         * @param {string} hexTextColor - 
         * @param {string} hexTextBackgroundColor - 
         * @param {boolean} wasClipped - true if symbol was clipped and will need redraw on map pan.
         * @param {number} pixelWidth - pixel width of the bounding box
         * @param {number} pixelHeight - pixel height of the bounding box
         * @param {object} fillTexture - an html5 canvas or SVG pattern
         * @param {object} fontInfo - {name:name,size:size,style:style,measurements:{widths:widths[],height:height,descent:descent,fullHeight:fullHeight}}
         * @param {number} SVGFormat - 0 plain svg string, 1 base64 string (default), 2 url endcoded (% notation)
         * @returns {geoSVG} - looks like: {svg:dataURI,geoTL:geoCoordTL, geoBR:geoCoordBR, wasClipped:wasClipped};
         */
        GeoSVGize: function (shapes, modifiers, ipc, normalize, format, hexTextColor, hexTextBackgroundColor, wasClipped, pixelWidth, pixelHeight, fillTexture, fontInfo, SVGFormat, converter)
        {
            
            var height = 10;

            var tempBounds = null;
            var paths = [];
            var pathBounds = null;
            var labels = [];
            var labelBounds = null;
            var unionBounds = null;
            var rotatedBounds = null;
            var lineWidth = 4;
            var svgFormat = 1;
            if(SVGFormat)
                svgFormat = SVGFormat;
            
            try
            {
                /*if(modifiers[MilStdAttributes.LineWidth])
                    lineWidth = modifiers[MilStdAttributes.LineWidth];//*/
                    
                /*if(!fontInfo)
                    fontInfo = RendererSettings.getFontInfo();//*/
                    
                if(!fontInfo)
                    fontInfo = RendererSettings.getMPFontInfo();
                
                height = fontInfo.measurements.height;

                var len = shapes.size();
                for (var i = 0; i < len; i++)
                {
                    var pathInfo = this.ShapesToGeoSVG(shapes.get(i), ipc, normalize, fillTexture, svgFormat, converter);
                    if(pathInfo.svg && pathInfo.bounds)
                    {
                        tempBounds = pathInfo.bounds;
                        tempBounds.grow(Math.round(lineWidth / 2));//adjust for line width so nothing gets clipped.
                        if (pathBounds === null)
                            pathBounds = tempBounds.clone();
                        else
                            pathBounds.union(tempBounds);
                        paths.push(pathInfo.svg);

                        if(pathInfo.fillPattern && !fillTexture)
                            fillTexture = pathInfo.fillPattern
                    }
                }
                
                var bbox = null;
                if(pixelWidth>0 && pixelHeight>0)
                    bbox = new armyc2.c2sd.renderer.so.Rectangle(0,0,pixelWidth,pixelHeight);

                var tempModifier, len2 = modifiers.size();
                var tiTemp = null;
                for (var j = 0; j < len2; j++) 
                {
                    tempModifier = modifiers.get(j);

                    var labelInfo = tempModifier;
                    var tempLocation = tempModifier.getModifierStringPosition();

                    if(converter)//map specific converter
                    {
                        tempLocation = ipc.PixelsToGeo(tempLocation);
                        tempLocation = converter.GeoToPixels(tempLocation);
                    }

                    //multipoint renderer is assuming text is centered vertically 
                    //so we add half height to location as text is drawn cetered at 
                    //the bottom.
                    tempLocation.setLocation(tempLocation.x, tempLocation.y + (height / 2));
                    
                    var justify=tempModifier.getTextJustify() || "";
                    var strJustify="left";
                    if(justify===0)
                        strJustify="start";
                    else if(justify===1)
                        strJustify="middle";
                    else if(justify===2)
                        strJustify="end";

                    var degrees = parseFloat(tempModifier.getModifierStringAngle());
                    tiTemp = new armyc2.c2sd.renderer.utilities.SVGTextInfo(tempModifier.getModifierString(), tempLocation, fontInfo, strJustify, degrees);
                    //tiTemp = new armyc2.c2sd.renderer.utilities.TextInfo(tempModifier.getModifierString(), tempLocation.x, tempLocation.y + (height / 2), textInfoContext, null);

                    var bounds = tiTemp.getBounds();
                    
                    rotatedBounds = null;
                    if (degrees !== 0)
                    {
                        rotatedBounds = this.GetRotatedRectangleBounds(bounds, tempLocation, degrees);
                    }

                    //make sure labels are in the bbox, otherwise they can
                    //make the canvas grow out of control.
                    //if (tiTemp && bbox.containsRectangle(bounds))
                    //if(bbox !== null)
                    if (tiTemp && bbox !== null && (bbox.intersects(bounds) || bbox.intersects(rotatedBounds)))
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
                    else if (tiTemp && bbox === null)
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
                var geoCoordTR = null;
                var geoCoordBL = null;
                var geoCoordBR = null;
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
                    geoCoordTL.setLocation(geoCoordTL.getX().toFixed(_decimalAccuracy), geoCoordTL.getY().toFixed(_decimalAccuracy));
                    geoCoordBR.setLocation(geoCoordBR.getX().toFixed(_decimalAccuracy), geoCoordBR.getY().toFixed(_decimalAccuracy));
                    geoCoordTR.setLocation(geoCoordTR.getX().toFixed(_decimalAccuracy), geoCoordTR.getY().toFixed(_decimalAccuracy));
                    geoCoordBL.setLocation(geoCoordBL.getX().toFixed(_decimalAccuracy), geoCoordBL.getY().toFixed(_decimalAccuracy));

                    north.setLocation(north.getX().toFixed(_decimalAccuracy), north.getY().toFixed(_decimalAccuracy));
                    south.setLocation(south.getX().toFixed(_decimalAccuracy), south.getY().toFixed(_decimalAccuracy));
                    east.setLocation(east.getX().toFixed(_decimalAccuracy), east.getY().toFixed(_decimalAccuracy));
                    west.setLocation(west.getX().toFixed(_decimalAccuracy), west.getY().toFixed(_decimalAccuracy));
                }
                else//nothing to draw
                {
                    geoCoordTL = new armyc2.c2sd.graphics2d.Point2D();
                    geoCoordBR = new armyc2.c2sd.graphics2d.Point2D();
                    geoCoordTL.setLocation(0,0);
                    geoCoordBR.setLocation(0,0);
                    geoCoordTR = new armyc2.c2sd.graphics2d.Point2D();
                    geoCoordBL = new armyc2.c2sd.graphics2d.Point2D();
                    geoCoordTR.setLocation(0,0);
                    geoCoordBL.setLocation(0,0);

                    north = new armyc2.c2sd.graphics2d.Point2D(0,0);
                    south = new armyc2.c2sd.graphics2d.Point2D(0,0);
                    east = new armyc2.c2sd.graphics2d.Point2D(0,0);
                    west = new armyc2.c2sd.graphics2d.Point2D(0,0);
                }

                
            }
            catch (err)
            {
                ErrorLogger.LogException("MultiPointHandler", "GeoSVGize", err);
            }
            //if(renderToCanvas)
            //{
            if(paths && len > 0 && unionBounds)
            {
                //create group with offset translation
                //ctx.translate(bounds.getX() * -1, bounds.getY() * -1);
                var group = '<g transform="translate(' + (unionBounds.getX() * -1) + ',' + (unionBounds.getY() * -1) +')">';
                
                //loop through paths and labels and build SVG.
                if(format === 6)
                {
                    for(var i = 0; i < paths.length; i++)
                    {
                        group += paths[i];
                    }   
                }
                labels = this.renderTextElement(labels,hexTextColor,hexTextBackgroundColor, svgFormat);
                for(var j = 0; j < labels.length; j++)
                {
                    group += labels[j];
                }
                //close
                group += '</g>'; 
                
                //wrap in SVG
                //var geoSVG = '<svg width="' + Math.ceil(unionBounds.getWidth()) + 'px" height="' + Math.ceil(unionBounds.getHeight()) + 'px" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" version="1.1">';
                var tempWidth = Math.ceil(unionBounds.getWidth());
                var tempHeight = Math.ceil(unionBounds.getHeight());
                var quality = 1.0;
                var bigger = Math.max(tempWidth, tempHeight);
                var max = 1000;
                if(!converter)
                {
                    if(bigger < max)
                    {
                        if(bigger * 2 < max)
                        {
                            quality = 2;
                        }
                        else
                        {
                            quality = max / bigger;
                        }
                    }
                    else
                    {
                        quality = 1;
                    }
                }
                var geoSVG = '<svg viewBox="0 0 ' + tempWidth + ' ' + tempHeight + '"' + ' width="' + (tempWidth * quality) + 'px" height="' + (tempHeight * quality) + 'px" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" version="1.1">';
                if(fillTexture)
                    geoSVG += fillTexture;
                geoSVG += group;
                geoSVG += '</svg>';//*/
                
                if(svgFormat === 1)
                {
                    //return {svg:"data:image/svg+xml;base64," + btoa(geoSVG), geoTL:geoCoordTL, geoBR:geoCoordBR, wasClipped:wasClipped, bounds:unionBounds};
                    return {svg:"data:image/svg+xml;base64," + btoa(geoSVG), geoTL:geoCoordTL, geoBR:geoCoordBR, geoTR:geoCoordTR, geoBL:geoCoordBL, north:north, south:south, east:east, west:west, wasClipped:wasClipped, bounds:unionBounds};
                }
                else if(svgFormat === 2)
                {
                    geoSVG = geoSVG.replace(/\</g,"%3C");
                    geoSVG = geoSVG.replace(/\>/g,"%3E");
                    geoSVG = geoSVG.replace(/\"/g,"%22");
                    //return {svg:"data:image/svg+xml," + geoSVG, geoTL:geoCoordTL, geoBR:geoCoordBR, wasClipped:wasClipped, bounds:unionBounds};
                    return {svg:"data:image/svg+xml," + geoSVG, geoTL:geoCoordTL, geoBR:geoCoordBR, geoTR:geoCoordTR, geoBL:geoCoordBL, north:north, south:south, east:east, west:west, wasClipped:wasClipped, bounds:unionBounds};
                }
                else
                {
                    //return {svg:"data:image/svg+xml," + geoSVG, geoTL:geoCoordTL, geoBR:geoCoordBR, wasClipped:wasClipped, bounds:unionBounds};
                    return {svg:"data:image/svg+xml," + geoSVG, geoTL:geoCoordTL, geoBR:geoCoordBR, geoTR:geoCoordTR, geoBL:geoCoordBL, north:north, south:south, east:east, west:west, wasClipped:wasClipped, bounds:unionBounds};
                }
            }
            else
            {
                //return blank 2x2 SVG
                //<svg width="1px" height="1px" xmlns="http://www.w3.org/2000/svg" version="1.1"></svg>
                //return {svg:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMXB4IiBoZWlnaHQ9IjFweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPjwvc3ZnPg==", geoTL:geoCoordTL, geoBR:geoCoordBR, wasClipped:wasClipped};
                //return {svg:'data:image/svg+xml,<svg width="2px" height="2px" xmlns="http://www.w3.org/2000/svg" version="1.1"></svg>', geoTL:geoCoordTL, geoBR:geoCoordBR, wasClipped:wasClipped};
                return {svg:'data:image/svg+xml,<svg width="2px" height="2px" xmlns="http://www.w3.org/2000/svg" version="1.1"></svg>', geoTL:geoCoordTL, geoBR:geoCoordBR, geoTR:geoCoordTR, geoBL:geoCoordBL, north:north, south:south, east:east, west:west, wasClipped:wasClipped};
            }
            //}
            //else
            //  return {paths:paths,textInfos:labels,bounds:unionBounds,geoTL:geoCoordTL,geoBR:geoCoordBR};
        },
            /**
         * renders modifier text to a canvas
         * @param {type} ctx html5 canvas context object
         * @param {type} tiArray array of TextInfo.js objects
         * @param {type} color a hex string "#000000"
         * @returns {void}
         */
        renderTextElement: function(tiArray, color, backgroundColor, svgFormat)
        {
            //ctx.lineCap = "butt";
            //ctx.lineJoin = "miter";
            //ctx.miterLimit = 3;
            /*ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.miterLimit = 3;*/
            var svgElements = []

            var size = tiArray.length,
                tempShape = null,
                fillStyle = "#000000",
                outlineStyle = null,
                tbm = RendererSettings.getTextBackgroundMethod(),
                outlineWidth = RendererSettings.getTextOutlineWidth();
        
            if(color)
            {
                fillStyle = color;
            }
            else if(RendererSettings.getLabelForegroundColor() !== null)
            {
                fillStyle = RendererSettings.getLabelForegroundColor().toHexString(false);
            }   

            if(backgroundColor)
            {
                outlineStyle = backgroundColor;
            }
            else
            {
                outlineStyle = RendererUtilities.getIdealOutlineColor(fillStyle,true);
            }
            

            if(tbm === RendererSettings.TextBackgroundMethod_OUTLINE)
            {
                for(var i=0; i<size;i++)
                {
                    tempShape = tiArray[i];
                    svgElements.push(tempShape.toSVGElement(outlineStyle,outlineWidth,fillStyle, svgFormat));
                }
            }
            else if(tbm === RendererSettings.TextBackgroundMethod_OUTLINE_QUICK)
            {    //TODO: need to update, this is regular outline approach
                for(var i=0; i<size;i++)
                {
                    tempShape = tiArray[i];
                    svgElements.push(tempShape.toSVGElement(outlineStyle,outlineWidth,fillStyle, svgFormat));
                }
            }
            else if(tbm === RendererSettings.TextBackgroundMethod_COLORFILL)
            {
                for(var i=0; i<size;i++)
                {
                    tempShape = tiArray[i];
                    svgElements.push(tempShape.getOutlineBounds().toSVGElement(null,null,outlineStyle, svgFormat));
                    svgElements.push(tempShape.toSVGElement(null,null,fillStyle, svgFormat));
                }
            }
            else //if(tbm === RendererSettings.TextBackgroundMethod_NONE)
            {
                for(var j=0; j<size;j++)
                {
                    tempShape = tiArray[j];
                    svgElements.push(tempShape.toSVGElement(null,null,fillStyle, svgFormat));
                }
            }
            
            return svgElements;     
        },
        
        /**
         * 
         * @param {type} shapeInfos
         * @param {type} ipc
         * @param {type} normalize
         * @param {type} fillTexture
         * @returns {string} svgElement
         */
        ShapesToGeoSVG: function (shapeInfo, ipc, normalize, fillTexture, svgFormat, converter)
        {

            var pathInfo = null;
            var path = null;
            var fillColor = null;
            var lineColor = null;
            var lineWidth = null;
            var alpha = null;
            var lineAlpha = 1.0;
            var fillAlpha = 1.0;
            var dashArray = null;
            var fillPattern = null;


            var feature = {};
            feature.type = "Feature";
            feature.properties = {};
            feature.properties.label = "";
            var geometry = {};
            if (shapeInfo.getLineColor() !== null) {
                lineColor = shapeInfo.getLineColor();
                lineAlpha = lineColor.getAlpha() / 255;
                lineColor = lineColor.toHexString(false);
            }
            if (shapeInfo.getFillColor() !== null) {
                fillColor = shapeInfo.getFillColor();
                fillAlpha = fillColor.getAlpha() / 255;
                fillColor = fillColor.toHexString(false);
            }
            
            //TODO, pattern fill
            if(fillTexture)
            {
                fillPattern = fillTexture;
            }
            else if(shapeInfo.getFillStyle() > 1)
            {
                fillPattern = armyc2.c2sd.renderer.utilities.FillPatterns.getSVGFillStylePattern(shapeInfo.getFillStyle(), lineColor)
                fillTexture = "url(#fillPattern)";
            }//*/
            //*/

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
            if(fillTexture)
                fillColor = "url(#fillPattern)";
            var svgElement = path.toSVGElement(lineColor, lineWidth, fillColor, lineAlpha, fillAlpha, svgFormat);
            var svgInfo = {svg:svgElement,bounds:path.getBounds(),fillPattern:fillPattern};
            return svgInfo;
        },
                
        MakeFillTextureSVG:function(symbolFillIds, symbolFillSize)
        {
            if(!armyc2.c2sd.renderer.MilStdSVGRenderer)
            {
                return null;
            }
            //needs to return {dataURI, width, height}
            var texture = "";
            var symbolIDs = symbolFillIds.split(","); 
            var symbols = [];
            var width = 0, height = 0, spacerW = 0, spacerH = 0;
            //calculate texture dimensions
            for(var i = 0; i < symbolIDs.length; i++)
            {
                symbols.push(armyc2.c2sd.renderer.MilStdSVGRenderer.Render(symbolIDs[i],{"SIZE":symbolFillSize}));
                var rect = symbols[i].getSVGBounds();
                if(rect.getWidth() > width)
                    width = rect.getWidth();
                if(rect.getHeight() > height)
                    height = rect.getHeight();
            }
            spacerW = width / 3;
            spacerH = 10; //width / 2;
            
            
            //create texture
            //texture = _document.createElement('canvas');
            svgWidth = (width * symbols.length) + (spacerW * symbols.length);
            svgHeight = height + spacerH;
            
            //draw to texture
            var x = spacerW;
            var y = spacerH;
            //var ctx = texture.getContext('2d');
            var pattern = "";
            for(var j = 0; j < symbols.length; j++)
            {
                var sym = symbols[j];
                var center = sym.getAnchorPoint();
                pattern += '<g transform="translate(' + (x + width/2 - center.getX()) + ' ' + (y + height/2 - center.getY()) + ')" >';
                
                var paths = sym.getSVG();
                paths = paths.substr(paths.indexOf("<g"));
                paths = paths.replace("</svg>","");
                
                pattern += paths;
                pattern += '</g>';
                x += spacerW + width;
            }
            
            texture = '<defs>';
            texture += '<pattern id="fillPattern" patternUnits="userSpaceOnUse" width="' + svgWidth + '" height="' + svgHeight + '" >';
            texture += pattern;
            texture += '</pattern>';
            texture += '</defs>'; 
            return texture;  
        },

        /**
         * @param Number fillType - forward diagonal (fillStyle=2), backward diagonal (3). We also have capabilities for vertical (4), horizontal (5), and cross (8).
         * @param String color "hexString like '#00FF00'";
         */
        MakeHatchFillTextureSVG:function(fillType, color)
        {
            if(!armyc2.c2sd.renderer.MilStdSVGRenderer)
            {
                return null;
            }
            //needs to return {dataURI, width, height}
            var texture = "";
            var symbolIDs = symbolFillIds.split(","); 
            var symbols = [];
            var width = 0, height = 0, spacerW = 0, spacerH = 0;
            //calculate texture dimensions
            for(var i = 0; i < symbolIDs.length; i++)
            {
                symbols.push(armyc2.c2sd.renderer.MilStdSVGRenderer.Render(symbolIDs[i],{"SIZE":symbolFillSize}));
                var rect = symbols[i].getSVGBounds();
                if(rect.getWidth() > width)
                    width = rect.getWidth();
                if(rect.getHeight() > height)
                    height = rect.getHeight();
            }
            spacerW = width / 3;
            spacerH = 10; //width / 2;
            
            
            //create texture
            //texture = _document.createElement('canvas');
            svgWidth = (width * symbols.length) + (spacerW * symbols.length);
            svgHeight = height + spacerH;
            
            //draw to texture
            var x = spacerW;
            var y = spacerH;
            //var ctx = texture.getContext('2d');
            var pattern = "";
            for(var j = 0; j < symbols.length; j++)
            {
                var sym = symbols[j];
                var center = sym.getAnchorPoint();
                pattern += '<g transform="translate(' + (x + width/2 - center.getX()) + ' ' + (y + height/2 - center.getY()) + ')" >';
                
                var paths = sym.getSVG();
                paths = paths.substr(paths.indexOf("<g"));
                paths = paths.replace("</svg>","");
                
                pattern += paths;
                pattern += '</g>';
                x += spacerW + width;
            }
            
            texture = '<defs>';
            texture += '<pattern id="fillPattern" patternUnits="userSpaceOnUse" width="' + svgWidth + '" height="' + svgHeight + '" >';
            texture += pattern;
            texture += '</pattern>';
            texture += '</defs>'; 
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