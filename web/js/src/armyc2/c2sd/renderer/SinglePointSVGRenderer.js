var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
/** @class */
armyc2.c2sd.renderer.SinglePointSVGRenderer = (function () {
    
    var SymbolUtilities = armyc2.c2sd.renderer.utilities.SymbolUtilities,
        UnitFontLookup = armyc2.c2sd.renderer.utilities.UnitFontLookup,
        RendererSettings = armyc2.c2sd.renderer.utilities.RendererSettings,
        SO = armyc2.c2sd.renderer.so,
        RendererUtilities = armyc2.c2sd.renderer.utilities.RendererUtilities,
        TextInfo = armyc2.c2sd.renderer.utilities.TextInfo,
        ImageInfo = armyc2.c2sd.renderer.utilities.ImageInfo,
        SVGInfo = armyc2.c2sd.renderer.utilities.SVGInfo,
        SVGTextInfo = armyc2.c2sd.renderer.utilities.SVGTextInfo,
        MilStdAttributes = armyc2.c2sd.renderer.utilities.MilStdAttributes,
        SymbolDimensions = armyc2.c2sd.renderer.utilities.SymbolDimensions,
        SymbolSVGDimensions = armyc2.c2sd.renderer.utilities.SymbolSVGDimensions,
        ModifiersUnits = armyc2.c2sd.renderer.utilities.ModifiersUnits,
        ModifiersTG = armyc2.c2sd.renderer.utilities.ModifiersTG,
        SinglePointLookup = armyc2.c2sd.renderer.utilities.SinglePointLookup,
        SymbolDefTable = armyc2.c2sd.renderer.utilities.SymbolDefTable,
        UnitSVGTable = armyc2.c2sd.renderer.utilities.UnitSVGTable,
        TGSVGTable = armyc2.c2sd.renderer.utilities.TGSVGTable,
        SPSVGTable = armyc2.c2sd.renderer.utilities.SPSVGTable;
    
    
    var textInfoBuffer = null,
        textInfoContext = null,
        textInfoContextFont = null,
        _bufferUnit = null,
        _bufferUnitSize = 150,
        _bufferSymbol = null,
        _bufferSymbolSize = 150,
        _bufferDisplayModifiers = null,
        _document = document;
		
                
    var _statusColorMap = {"C":"#00FF00","D":"#FFFF00","X":"#FF0000","F":"#0000FF"},
        //_unitTextModifierKeys = {"B":"B","C":"C","F":"F","G":"G","H":"H","H1":"H1","H2":"H2","J":"J","K":"K","L":"L","M":"M","N":"N","P":"P","R2":"R2","T":"T","T1":"T1","V":"V","W":"W","W1":"W1","X":"X","Y":"Y","Z":"Z","AC":"AC","AD":"AD","AE":"AE","AF":"AF","CN":"CN"},
        //_tgTextModifierKeys = {"B":"B","C":"C","F":"F","G":"G","H":"H","H1":"H1","H2":"H2","N":"N","T":"T","T1":"T1","V":"V","W":"W","W1":"W1","X":"X","Y":"Y","AM":"AM","AN":"AN","Length":"Length","Width":"Width","Radius":"Radius","Angle":"Angle"};
        _unitTextModifierKeys = ["B","C","F","G","H","H1","H2","J","K","L","M","N","P","R2","T","T1","V","W","W1","X","Y","Z","AC","AD","AE","AF","CN"],
        _tgTextModifierKeys = ["B","C","F","G","H","H1","H2","N","T","T1","V","W","W1","X","Y","AM","AN","Length","Width","Radius","Angle"];
    
return{    
    
    
   
    // <editor-fold defaultstate="collapsed" desc="Unit Functions">
    /**
     * 
     * @param {String} symbolID
     * @param {Object} modifiers
     * @param {Object} fontInfo
     * @returns {armyc2.c2sd.renderer.armyc2.c2sd.renderer.utilities.ImageInfo}
     */
    renderUnit: function (symbolID, modifiers, fontInfo)
    {
        // <editor-fold defaultstate="collapsed" desc="Variables">
        var render = true;
        if(modifiers["RENDER"] !== undefined)
            render = modifiers["RENDER"];
        
      
        if(!fontInfo)
        {
            fontInfo = RendererSettings.getFontInfo();
        }
        
       
        
        if(modifiers === undefined || modifiers === null)
            modifiers = {};
	
        var pixel = null,//point to center symbol on.
            basicID = SymbolUtilities.getBasicSymbolIDStrict(symbolID),
            symStd = modifiers[MilStdAttributes.SymbologyStandard],
            ufli = UnitFontLookup.getUnitLookup(basicID, symStd),
            strUnitFont = "";
            
        
        var intFill = UnitFontLookup.getFillCode(symbolID, symStd),
            intFrame = UnitFontLookup.getFrameCode(symbolID, intFill, symStd),
            fillColor = SymbolUtilities.getFillColorOfAffiliation(symbolID).toHexString(false),
            lineColor = SymbolUtilities.getLineColorOfAffiliation(symbolID).toHexString(false),
            fill = (intFill > 0) ? UnitSVGTable.getSVGPath(intFill): null,
            frame = (intFrame > 0) ? UnitSVGTable.getSVGPath(intFrame): null,
            mapping1 = ufli.getMapping1(symbolID),
            mapping2 = ufli.getMapping2(),
            symbol1 = (mapping1 !==null) ? UnitSVGTable.getSVGPath(mapping1) : null,
            symbol2 = (mapping2 !==null) ? UnitSVGTable.getSVGPath(mapping2) : null,
            seFrame = null,
            seFill = null,
            seSymbol1 = null,
            seSymbol2 = null,
            seFrameAssume = null,
            color1 = ufli.getColor1(),
            color2 = ufli.getColor2(),
            alpha = 1.0,
            lineAlpha = 1.0,
            fillAlpha = 1.0;
    
        var hasDisplayModifiers = false;
        var hasTextModifiers = false;
        
        var intFrameAssume = -1,
            frameAssume = null;
        
       
        if(symStd > RendererSettings.Symbology_2525Bch2_USAS_13_14)
        {
            var affiliation = symbolID.charAt(1);
            switch(affiliation)
            {
                case 'P':
                case 'A':
                case 'S':
                case 'G':
                case 'M':
                    if(symbolID.charAt(2) === 'U' && 
							(symbolID.substring(4, 6) === "WM" ||
                            symbolID.substring(4, 7) === "WDM"))
					{
						if(symbolID.charAt(3) !== 'A')
						{
							intFill++;
							fill = UnitSVGTable.getSVGPath(intFill);
						}
						intFrameAssume = intFill - 1;
						intFrame = -1;
						frame = null;
					}
					else
					{
						intFrame = intFill + 2;
						intFrameAssume = intFill + 1;
						frame = UnitSVGTable.getSVGPath(intFrame);
					}
					
					break;
            }
            if(intFrameAssume > 0)
                frameAssume = UnitSVGTable.getSVGPath(intFrameAssume);
        }
            
        
        // </editor-fold>
        
        // <editor-fold defaultstate="collapsed" desc="Parse Modifiers">
        if(modifiers === undefined || modifiers === null)
            modifiers = {};
        //determine font size necessary to match desired pixel size/////////////
        var pixelSize = -1;
        if(modifiers[MilStdAttributes.PixelSize])
        {
            pixelSize = modifiers[MilStdAttributes.PixelSize];
        }
        else
        {
            pixelSize = RendererSettings.getDefaultPixelSize();
        }
        
        var keepUnitRatio = true;
        
        if(modifiers[MilStdAttributes.KeepUnitRatio] !== undefined)
        {
            keepUnitRatio = modifiers[MilStdAttributes.KeepUnitRatio];
        }
        
        var icon = false;
        if(modifiers[MilStdAttributes.Icon] !== undefined)
        {
            icon = modifiers[MilStdAttributes.Icon];
        }
        
        if(icon)//icon won't show modifiers or display icons
        {
            keepUnitRatio = false;
            hasDisplayModifiers = false;
            hasTextModifiers = false;
            symbolID = symbolID.substring(0,10) + "-----";
        }
        else
        {
            hasDisplayModifiers = this.hasDisplayModifiers(symbolID, modifiers);
            hasTextModifiers = this.hasTextModifiers(symbolID, modifiers);
        }
        
        if(modifiers[MilStdAttributes.LineColor] !== undefined)
        {
            lineColor = modifiers[MilStdAttributes.LineColor];
            lineColor = armyc2.c2sd.renderer.utilities.Color.getColorFromHexString(lineColor);
            lineAlpha = lineColor.getAlpha() / 255.0;
            lineColor = lineColor.toHexString(false);
        }
        if(modifiers[MilStdAttributes.FillColor] !== undefined)
        {
            fillColor = modifiers[MilStdAttributes.FillColor];
            fillColor = armyc2.c2sd.renderer.utilities.Color.getColorFromHexString(fillColor);
            fillAlpha = fillColor.getAlpha() / 255.0;
            fillColor = fillColor.toHexString(false);
        }
        if(modifiers[MilStdAttributes.Alpha] !== undefined)
        {
            alpha = modifiers[MilStdAttributes.Alpha] / 255.0;
            if(alpha !== 1)
            {
                lineAlpha = alpha;
                fillAlpha = alpha;
            }
        } 
        if(modifiers[MilStdAttributes.IconColor] !== undefined)
        {
            color1 = modifiers[MilStdAttributes.IconColor];
        }

		//Just for sea mines
		if(symbolID.charAt(2) === 'U' &&
						symbolID.substring(4, 6) === "WM")
		{
			if(symStd === RendererSettings.Symbology_2525Bch2_USAS_13_14)
			{
				if(modifiers[MilStdAttributes.LineColor] !== undefined)
				{
					color1 = lineColor;
				}
				//color2 = fillColor;
			}
			else if(symStd === RendererSettings.Symbology_2525C)
			{
				if(modifiers[MilStdAttributes.LineColor] !== undefined)
				{
					fillColor = lineColor;
				}
			}
			
		}
		else if(symbolID.charAt(2) === 'S' &&
			symbolID.charAt(4) === 'O')//own track, //SUSPO
		{
			if(modifiers[MilStdAttributes.LineColor] !== undefined)
			{
				fillColor = modifiers[MilStdAttributes.LineColor];
			}
		}	//*/	
        // </editor-fold>
        
        // <editor-fold defaultstate="collapsed" desc="Determine font size">
        
        var symbolBounds = SymbolSVGDimensions.getUnitBounds(intFill);
        var rect = SymbolSVGDimensions.getUnitBounds(intFill);
        if(pixelSize > 0 && keepUnitRatio ===true)
        {
            var heightRatio = UnitFontLookup.getUnitRatioHeight(intFill),
                widthRatio = UnitFontLookup.getUnitRatioWidth(intFill);
            var ratio = -1;
            if(heightRatio > widthRatio)
            {
                pixelSize = (pixelSize / 1.5) * heightRatio;
            }
            else
            {
                pixelSize = (pixelSize / 1.5) * widthRatio;
            }
        }
        if(pixelSize > 0)
        {
            //calculate ratio based on svg frame extents
            //ratio = (desired pixel size) / (width of svg frame)
            ratio = Math.min((pixelSize / rect.getHeight()), (pixelSize / rect.getWidth()));

            //get width and height
            //width = ratio * svg frame width
            //height = ratio * svg frame height
        }
        //add svg paths into group:
        //<g transform="translate(50,50) scale(ratio, -ratio)">  
        
        // </editor-fold>
        
        // <editor-fold defaultstate="collapsed" desc="Draw Core Symbol">

        var symbolWidth = Math.round(symbolBounds.getWidth() * ratio),
            symbolHeight = Math.round(symbolBounds.getHeight() * ratio);

        
        var x = Math.round(-symbolBounds.getX()),
            y = Math.round(-symbolBounds.getY());
	
        var unitPaths = [];
        if(render === true)//get svg path elements
        {
            if(color1 === "")
            {
                color1 = "#000000";
            }
            
		
			if(frameAssume !== null && intFrame === -1)
            {

                seFrameAssume = this.processSVGPath(frameAssume, "#ffffff",null,null,null,null,null,lineAlpha);
                frameAssume = null;
                unitPaths.push(seFrameAssume);
            }

            if(fill !== null)
            {
                seFill = this.processSVGPath(fill, fillColor,null,null,null,null,null,fillAlpha);
                unitPaths.push(seFill);
            }

			if(frameAssume !== null)
            {
                seFrameAssume = this.processSVGPath(frameAssume, "#ffffff",null,null,null,null,null,lineAlpha);
                unitPaths.push(seFrameAssume);
            }
			
            if(frame !== null)
            {
                seFrame = this.processSVGPath(frame, lineColor,null,null,null,null,null,lineAlpha);
                unitPaths.push(seFrame);
            }

            if(symbol2 !== null)
            {
                seSymbol2 = this.processSVGPath(symbol2, color2,null,null,null,null,null,alpha);
                unitPaths.push(seSymbol2);
            }

            if(symbol1 !== null)
            {
                seSymbol1 = this.processSVGPath(symbol1, color1,null,null,null,null,null,alpha);
                unitPaths.push(seSymbol1);
            }
        }
        
        //wrap svg elements in a group and scale and translate accordingly.
        var transX = symbolWidth / 2;
        var transY = symbolHeight / 2;
        var seGroupUnit = '<g transform="translate(' + (x * ratio) + ',' + (y * ratio) +') scale(' + ratio + ',-' + ratio +')"';
        /*if(fillAlpha !== 1.0)
            seGroupUnit +=  ' fill-opacity="' + alpha + '">';
        else//*/
            seGroupUnit +=  '>'; 
        for(var i = 0; i < unitPaths.length; i++)
        {
            seGroupUnit += unitPaths[i];
        }
        seGroupUnit += '</g>';
        
        // </editor-fold>
        
        // <editor-fold defaultstate="collapsed" desc="Build Core Symbol ImageInfo">
        //no good on glyhps
        //var tmFrameWidth = ctx.measureText(frame);
        
        //sometimes there's a y offset to help center the symbol
        //need to remove that before creating the imageInfo object.
        symbolBounds.setLocation(0,0);
        
        
        var imageBounds = new SO.Rectangle(0,0,symbolWidth,symbolHeight);
        symbolBounds = new SO.Rectangle(0,0,symbolWidth,symbolHeight);
        
        var centerPoint = new SO.Point(x * ratio, y * ratio);
        
        var si = new SVGInfo(seGroupUnit,centerPoint,symbolBounds,imageBounds);
        
        // </editor-fold>
	
        // <editor-fold defaultstate="collapsed" desc="Process Display Modifiers">
        var svgElements = null;
        var svgElementInfo = null;
        var svgElementsDOM = [];
        
        if(hasDisplayModifiers===true)
            svgElementInfo = this.processUnitDisplayModifiers(si, symbolID, modifiers, fontInfo);
       
        // </editor-fold>
        
        
        if(svgElementInfo != null)
        {
            centerPoint = svgElementInfo.centerPoint;
            svgElements = svgElementInfo.svgElements;
            imageBounds = svgElementInfo.imageBounds;

            if(svgElementInfo.hasDOMArrow)
            {
                svgElementsDOM.push(svgElements.pop());
                svgElementsDOM.push(svgElements.pop());
            }
        }
        else
        {
            svgElements = [];
        }
        
        // <editor-fold defaultstate="collapsed" desc="Process Text Modifiers">
        
        if(hasTextModifiers===true)
        {   //processUnitModifiers: function(si, symbolID, modifiers, fontInfo)
            si = new SVGInfo("",centerPoint,symbolBounds,imageBounds);
            svgElementInfo = this.processUnitModifiers(si,symbolID,modifiers,fontInfo);
            //centerPoint = svgElementInfo.centerPoint;
            
            if(svgElementInfo !== null)
            {
                svgTextElements = svgElementInfo.svgElements;
                if(svgTextElements !== null && svgTextElements.length > 0)
                {
                    imageBounds.union(svgElementInfo.modifierBounds);
                    svgElements = svgElements.concat(svgTextElements);
                }                
            }
        }
        var returnSVG = "";
        var showCenter = false;
        if(svgElements.length > 0 || svgElementsDOM.length > 0)
        {
            var domSE = [];
            for(var k = 0; k < svgElements.length; k++)
            {
                returnSVG += svgElements[k];    
            }
            
            returnSVG += seGroupUnit;
            
            if(svgElementsDOM.length > 0)
            {
                returnSVG += svgElementsDOM[0];
                returnSVG += svgElementsDOM[1];
            }
            
            //make group with translation
            var shiftX = -imageBounds.getX();
            var shiftY = -imageBounds.getY();
            //shift bounds and center point
            imageBounds.shift(shiftX,shiftY);
            symbolBounds.shift(shiftX,shiftY);
            centerPoint.shift(shiftX,shiftY);
            //combine with returnSVG
            //wrap in SVG tag
            
            returnSVG = '<svg width="' + imageBounds.getWidth() + 'px" height="' + imageBounds.getHeight() + 'px" viewbox="0 0 ' + imageBounds.getWidth() + ' ' + imageBounds.getHeight() + '"  preserveAspectRatio="xMidYMid" xmlns="http://www.w3.org/2000/svg" version="1.1">'
                        + '<g transform="translate(' + shiftX + ',' + shiftY + ')">'
                        + returnSVG; 
            returnSVG += '</g>';
            if(showCenter)
            {
                returnSVG += '<circle cx="' + centerPoint.getX() + '" cy="' + centerPoint.getY() + '" r="2" fill="red" />';
            }
            returnSVG += '</svg>';//*/
            
            //with viewbox
            /*returnSVG = '<svg width="' + imageBounds.getWidth() + 'px" height="' + imageBounds.getHeight() + 'px" viewbox="' + imageBounds.getX()  + ' ' + imageBounds.getY() + ' ' + imageBounds.getWidth() + ' ' + imageBounds.getHeight() +  '" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" version="1.1">'
                        + '<g transform="translate(' + shiftX + ',' + shiftY + ')">'
                        + returnSVG; 
            returnSVG += '</svg>';//*/
        }
        else
        {
            returnSVG = '<svg width="' + imageBounds.getWidth() + 'px" height="' + imageBounds.getHeight() + 'px" viewbox="0 0 ' + imageBounds.getWidth() + ' ' + imageBounds.getHeight() + '"  preserveAspectRatio="xMidYMid" xmlns="http://www.w3.org/2000/svg" version="1.1">';
            returnSVG += seGroupUnit;
            if(showCenter)
            {
                returnSVG += '<circle cx="' + centerPoint.getX() + '" cy="' + centerPoint.getY() + '" r="2" fill="red" />';
            }
            returnSVG += '</svg>';
        }
        
        // </editor-fold>
        
        // <editor-fold defaultstate="collapsed" desc="Cleanup">
        ctx = null;
        buffer = null;
        // </editor-fold>
        
        //add group to translate after adding modifiers
        
        //close SVG
        //var svg = si.getSVG();
        //svg = '<svg width="' + symbolWidth + 'px" height="' + symbolHeight + 'px" xmlns="http://www.w3.org/2000/svg" version="1.1">' + svg + '</svg>';
        si = new SVGInfo(returnSVG,centerPoint,symbolBounds,imageBounds);
        /*if(icon)
            return ii.getSquareImageInfo();
        else//*/
            return si;
    },
    processSVGPath: function(path, fillColor, lineColor, strokeWidth, outlineMethod, outlineWidth, outlineColor, alpha)
    {
        var a = 1;
        if(alpha)
            a = alpha;
        var se = '<path d="';
        se += path + '"';
        if(fillColor)
        {
            se += ' fill="' + fillColor + '"';
            if(a !== 1)
                se += ' fill-opacity="' + a + '"';
        }
        if(lineColor)
        {
            se += ' stroke="' + lineColor + '"';
            if(a !== 1)
                se += ' stroke-opacity="' + a + '"';
            if(strokeWidth)
                se += ' stroke-width="' + strokeWidth + '"';
        }
        se += ' />';
        return se;
    },
    
    processSVGPathBackground: function(path, bgColor, bgMethod, bgWidth, pathBounds)
    {
        var om = RendererSettings.TextBackgroundMethod_NONE;
        var se = "";
        //TextBackgroundMethod_COLORFILL
        //TextBackgroundMethod_OUTLINE//stroke methond
        //TextBackgroundMethod_OUTLINE_QUICK//shifting dups method
        
        if(bgMethod)
            om = bgMethod;
        if(om === RendererSettings.TextBackgroundMethod_COLORFILL && pathBounds)
        {
            se = '<rect x="' + pathBounds.getX() + '" y="' + pathBounds.getX()
                + '" width="' + pathBounds.getWidth() + '" y="' + pathBounds.Height()
                + '" fill="' + bgColor + '/>';
        }
        else if(om === RendererSettings.TextBackgroundMethod_OUTLINE && bgColor && bgwidth)
        {
            //stroke-linejoin="miter"//default linejoin
            //stroke-miterlimit//default 4
            //stroke-linejoin="round"
            //stroke-linejoin="bevel"
            se += path + '"';
            se += ' fill="none"';
            
            se += ' stroke="' + bgColor + '"';
            se += ' stroke-width="' + bgWidth + '"';
       
            se += ' />';
            
        }
        else if(om === RendererSettings.TextBackgroundMethod_OUTLINE_QUICK && bgColor)
        {
            
            se += path + '"';
            se += ' fill="' + bgColor + '"';
            se += ' transform="translate(-1,-1)"';
            se += ' />';
            
            se += path + '"';
            se += ' fill="' + bgColor + '"';
            se += ' transform="translate(1,-1)"';
            se += ' />';
            
            se += path + '"';
            se += ' fill="' + bgColor + '"';
            se += ' transform="translate(1,1)"';
            se += ' />';
            
            se += path + '"';
            se += ' fill="' + bgColor + '"';
            se += ' transform="translate(-1,1)"';
            se += ' />';
        }
        return se;
    },

    /**
     * 
     * @param {SVGInfo} si
     * @param {String} symbolID
     * @param {type} modifiers
     * @param {object} fontInfo
     * @returns {Object} {svgElements:svgElements, centerPoint:centerPoint, symbolBounds:symbolBounds, imageBounds:imageBounds, hasDOMArrow:hasDOMArrow}
     */
    processUnitDisplayModifiers: function(si, symbolID, modifiers,fontInfo){
        
//        if(_bufferDisplayModifiers===null)
//                    _bufferDisplayModifiers = this.createBuffer(250,250);
        var render = true;
        if(modifiers["RENDER"] !== undefined)
            render = modifiers["RENDER"];
                
        var newii = null,
            symbolBounds = si.getSymbolBounds(),
            imageBounds = si.getSVGBounds(),
            centerPoint = si.getAnchorPoint(),
            tiEchelon = null,
            echelonBounds = null,
            amBounds = null,
            buffer = null,
            ctx = null,
            offsetX = 0,
            offsetY = 0,
            symStd = modifiers[MilStdAttributes.SymbologyStandard];
            
            // <editor-fold defaultstate="collapsed" desc="Build Mobility Modifiers">
            var mobilityBounds = null;
            var shapes = new Array();
            if(symbolID.charAt(10)===("M") || symbolID.charAt(10)===("N"))
            {
                
                //Draw Mobility
                
                var x = 0,
                    y = 0,
                    centerX = 0,
                    bottomY = 0,
                    height = 0,
                    width = 0,
                    middleY = 0,
                    wheelOffset = 1,
                    wheelSize = 5,
                    rrHeight = 5,
                    rrArcWidth = 8;
            
                var mobility = symbolID.substring(10, 12);
                    x = symbolBounds.getX()+1;
                    y = symbolBounds.getY();
                    height = Math.round(symbolBounds.getHeight());
                    width = Math.round(symbolBounds.getWidth())-1;
                    bottomY = y+height+2;
            
                if(symbolID.charAt(10)===("M")){
                
                    wheelSize = width / 7;
                    rrHeight = width / 7;
                    //rrArcWidth = width / 7;
                    
                    switch(mobility)
                    {
                        case "MO":
                            //line
                            shapes.push(new SO.Line(x,bottomY,x+width,bottomY));
                            //left circle
                            shapes.push(new SO.Ellipse(x,bottomY + wheelOffset,wheelSize,wheelSize));
                            //shapeMobility.append(new Ellipse2D.Double(x, bottomY + wheelOffset, wheelSize, wheelSize), false);
                            //right circle
                            shapes.push(new SO.Ellipse(x + width - wheelSize, bottomY + wheelOffset, wheelSize, wheelSize));
                            //shapeMobility.append(new Ellipse2D.Double(x + width - wheelSize, bottomY + wheelOffset, wheelSize, wheelSize), false);
                            break;
                            
                        case "MP":
                            //line
                            var line = new SO.Line(x,bottomY,x+width,bottomY);
                            shapes.push(line);
                            //shapeMobility.append(new Line2D.Double(x,bottomY,x + width, bottomY), false);
                            //left circle
                            shapes.push(new SO.Ellipse(x, bottomY + wheelOffset, wheelSize, wheelSize));
                            //shapeMobility.append(new Ellipse2D.Double(x, bottomY + wheelOffset, wheelSize, wheelSize), false);
                            //right circle
                            shapes.push(new SO.Ellipse(x + width - wheelSize, bottomY + wheelOffset, wheelSize, wheelSize));
                            //shapeMobility.append(new Ellipse2D.Double(x + width - wheelSize, bottomY + wheelOffset, wheelSize, wheelSize), false);
                            //center wheel
                            shapes.push(new SO.Ellipse(x + (width/2)-(wheelSize/2), bottomY + wheelOffset, wheelSize, wheelSize));
                            //shapeMobility.append(new Ellipse2D.Double(x + (width/2)-(wheelSize/2), bottomY + wheelOffset, wheelSize, wheelSize), false);

                            break;
                            
                        case "MQ":
                            //round rectangle
                            shapes.push(new SO.RoundedRectangle(x, bottomY, width, rrHeight,rrArcWidth));
                            //shapeMobility.append(new RoundRectangle2D.Double(x, bottomY, width, rrHeight, rrArcWidth, rrHeight),false);
                            break;
                            
                        case "MR":
                            //round rectangle
                            shapes.push(new SO.RoundedRectangle(x, bottomY, width, rrHeight,rrArcWidth));
                            //shapeMobility.append(new RoundRectangle2D.Double(x, bottomY, width, rrHeight, rrArcWidth, rrHeight),false);
                            //left circle
                            shapes.push(new SO.Ellipse(x - wheelSize - wheelSize, bottomY, wheelSize, wheelSize));
                            //shapeMobility.append(new Ellipse2D.Double(x - wheelSize - wheelSize, bottomY, wheelSize, wheelSize), false);
                            break;
                            
                        case "MS":
                            //line
                            var line = new SO.Line(x + wheelSize,bottomY + (wheelSize/2),
                                                    x + width - wheelSize, bottomY + (wheelSize/2));
                            shapes.push(line);
                            //shapeMobility.append(new Line2D.Double(x + wheelSize,bottomY + (wheelSize/2),x + width - wheelSize, bottomY + (wheelSize/2)), false);
                            //left circle
                            shapes.push(new SO.Ellipse(x, bottomY, wheelSize, wheelSize));
                            //shapeMobility.append(new Ellipse2D.Double(x, bottomY, wheelSize, wheelSize), false);
                            //right circle
                            shapes.push(new SO.Ellipse(x + width - wheelSize, bottomY, wheelSize, wheelSize));
                            //shapeMobility.append(new Ellipse2D.Double(x + width - wheelSize, bottomY, wheelSize, wheelSize), false);
                            break;
                            
                        case "MT":
                            //line
                            var line = new SO.Line(x,bottomY,x + width, bottomY);
                            shapes.push(line);
                            //shapeMobility.append(new Line2D.Double(x,bottomY,x + width, bottomY), false);
                            //left circle
                            shapes.push(new SO.Ellipse(x + wheelSize, bottomY + wheelOffset, wheelSize, wheelSize));
                            //shapeMobility.append(new Ellipse2D.Double(x + wheelSize, bottomY + wheelOffset, wheelSize, wheelSize), false);
                            //left circle2
                            shapes.push(new SO.Ellipse(x, bottomY + wheelOffset, wheelSize, wheelSize));
                            //shapeMobility.append(new Ellipse2D.Double(x, bottomY + wheelOffset, wheelSize, wheelSize), false);
                            //right circle
                            shapes.push(new SO.Ellipse(x + width - wheelSize, bottomY + wheelOffset, wheelSize, wheelSize));
                            //shapeMobility.append(new Ellipse2D.Double(x + width - wheelSize, bottomY + wheelOffset, wheelSize, wheelSize), false);
                            //right circle2
                            shapes.push(new SO.Ellipse(x + width - wheelSize - wheelSize, bottomY + wheelOffset, wheelSize, wheelSize));
                            //shapeMobility.append(new Ellipse2D.Double(x + width - wheelSize - wheelSize, bottomY + wheelOffset, wheelSize, wheelSize), false);
                            break;
                            
                        case "MU":
                            var muPath = new SO.Path();
                            muPath.moveTo(x,bottomY);
                            muPath.lineTo(x + 5, bottomY + 5);
                            muPath.lineTo(x + width, bottomY + 5);
                            shapes.push(muPath);

                            break;
                            
                        case "MV":
                            var path = new SO.Path();
                        
                            path.moveTo(x,bottomY);
                            path.bezierCurveTo(x, bottomY, x-rrArcWidth, bottomY+3, x, bottomY+rrHeight);
                            path.lineTo(x + width, bottomY + rrHeight);
                            shapes.push(path);
                            break;
                            
                        case "MW":
                            centerX = Math.round(symbolBounds.getCenterX());
                        
                            var mwPath = new SO.Path();
                            mwPath.moveTo(centerX, bottomY + rrHeight+2);
                            mwPath.lineTo(centerX - 3, bottomY);
                            mwPath.lineTo(centerX - 6, bottomY + rrHeight+2);

                            mwPath.moveTo(centerX, bottomY + rrHeight+2);
                            mwPath.lineTo(centerX + 3, bottomY);
                            mwPath.lineTo(centerX + 6, bottomY + rrHeight+2);
                            shapes.push(mwPath);

                            break;
                            
                        case "MX":
                            centerX = Math.round(symbolBounds.getCenterX());
                        
                            var line = new SO.Line(x + width, bottomY,x, bottomY);
                            shapes.push(line);

                            var quarterX = (centerX - x)/2;
                            //var quarterY = (((bottomY + rrHeight) - bottomY)/2);
                            shapes.push(new SO.BCurve(x, bottomY,x+quarterX, bottomY+rrHeight, centerX + quarterX, bottomY + rrHeight, x + width, bottomY));
                            break;
                            
                        case "MY":
                            var incrementX = width / 7,
                            tY = bottomY,
                            mY = (bottomY + (rrHeight/2)),
                            bY = mY + (rrHeight/2);
                            

                            /*var path = new SO.Path();
                            path.arc(x,middleY,r,180,0);
                            path.arc(x + incrementX,middleY,r,180,0, true);
                            path.arc(x + incrementX*2,middleY,r,180,0);
                            path.arc(x + incrementX*3,middleY,r,180,0,true);
                            path.arc(x + incrementX*4,middleY,r,180,0);
                            path.arc(x + incrementX*5,middleY,r,180,0,true);
                            path.arc(x + incrementX*6,middleY,r,180,0);
                            shapes.push(path);//*/
                            
                            var path = new SO.Path();
                            path.moveTo(x,mY);
                            path.bezierCurveTo(x,tY, x + incrementX, tY,x + incrementX, mY);
                            path.bezierCurveTo(x + incrementX,bY, x + incrementX*2, bY,x + incrementX*2, mY);
                            path.bezierCurveTo(x + incrementX*2,tY, x + incrementX*3, tY,x + incrementX*3, mY);
                            path.bezierCurveTo(x + incrementX*3,bY, x + incrementX*4, bY,x + incrementX*4, mY);
                            path.bezierCurveTo(x + incrementX*4,tY, x + incrementX*5, tY,x + incrementX*5, mY);
                            path.bezierCurveTo(x + incrementX*5,bY, x + incrementX*6, bY,x + incrementX*6, mY);
                            path.bezierCurveTo(x + incrementX*6,tY, x + incrementX*7, tY,x + incrementX*7, mY);
                            shapes.push(path);
                            
                            break;
                            
                        default:
                            break;
                    }

                    
                }
                //Draw Towed Array Sonar
                else if(symbolID.charAt(10)===("N")){
                    var offsetY = 1;
                    centerX = symbolBounds.getCenterX();
                    var squareOffset = Math.round(wheelSize/2);
                    middleY = ((rrHeight/2)+bottomY) + offsetY;//+1 for offset from symbol
                    if(symbolID.substring(10, 12) === ("NS"))
                    {
                        //subtract 0.5 becase lines 1 pixel thick get aliased into
                        //a line two pixels wide.
                        //line
                        shapes.push(new SO.Line(centerX-1,bottomY-1,centerX-1, bottomY + rrHeight + 3));
                        //shapeLines.append(new Line2D.Double(centerX,bottomY - 2,centerX, bottomY + rrHeight + 1), false);
                        //line
                        shapes.push(new SO.Line(x,middleY,x + width, middleY));
                        //shapeLines.append(new Line2D.Double(x,middleY,x + width, middleY), false);
                        //square
                        shapes.push(new SO.Rectangle(x-squareOffset, bottomY+offsetY, 5, 5));
                        //shapeSquares.append(new Rectangle2D.Double(x-squareOffset, bottomY, 5, 5), false);
                        //square
                        shapes.push(new SO.Rectangle(Math.round(centerX-squareOffset), bottomY+offsetY, 5, 5));
                        //shapeSquares.append(new Rectangle2D.Double(centerX-squareOffset, bottomY, 5, 5), false);
                        //square
                        shapes.push(new SO.Rectangle(x + width - squareOffset, bottomY+offsetY, 5, 5));
                        //shapeSquares.append(new Rectangle2D.Double(x + width - squareOffset, bottomY, 5, 5), false);
                    }
                    else if(symbolID.substring(10, 12) === ("NL"))
                    {
                        var leftX = x+(centerX - x)/2,
                            rightX = centerX + (x + width - centerX)/2;
                    
                        //line vertical left
                        shapes.push(new SO.Line(leftX,bottomY - 1,leftX, bottomY + rrHeight + 3));
                        //shapeLines.append(new Line2D.Double(leftX,bottomY - 2,leftX, bottomY + rrHeight + 1), false);
                        //line vertical right
                        shapes.push(new SO.Line(rightX,bottomY - 1,rightX, bottomY + rrHeight + 3));
                        //shapeLines.append(new Line2D.Double(rightX,bottomY - 2,rightX, bottomY + rrHeight + 1), false);
                        //line horizontal
                        shapes.push(new SO.Line(x,middleY,x + width, middleY));
                        //shapeLines.append(new Line2D.Double(x,middleY,x + width, middleY), false);
                        //square left
                        shapes.push(new SO.Rectangle(x-squareOffset, bottomY+offsetY, 5, 5));
                        //shapeSquares.append(new Rectangle2D.Double(x-squareOffset, bottomY, 5, 5), false);
                        //square middle
                        shapes.push(new SO.Rectangle(centerX-squareOffset, bottomY+offsetY, 5, 5));
                        //shapeSquares.append(new Rectangle2D.Double(centerX-squareOffset, bottomY, 5, 5), false);
                        //square right
                        shapes.push(new SO.Rectangle(x + width - squareOffset, bottomY+offsetY, 5, 5));
                        //shapeSquares.append(new Rectangle2D.Double(x + width - squareOffset, bottomY, 5, 5), false);
                        //square middle left
                        shapes.push(new SO.Rectangle(leftX - squareOffset, bottomY+offsetY, 5, 5));
                        //shapeSquares.append(new Rectangle2D.Double(leftX - squareOffset, bottomY, 5, 5), false);
                        //square middle right
                        shapes.push(new SO.Rectangle(rightX - squareOffset, bottomY+offsetY, 5, 5));
                        //shapeSquares.append(new Rectangle2D.Double(rightX - squareOffset, bottomY, 5, 5), false);

                    }
                }
                
                //get mobility bounds
                if(shapes !== null && shapes.length > 0)
                {

                    //build mobility bounds
                    mobilityBounds = shapes[0].getBounds();
                    var size = shapes.length;
                    var tempShape = null;
                    for(var i=1; i<size;i++)
                    {
                        tempShape = shapes[i];
                        mobilityBounds.union(tempShape.getBounds());
                    }
                    
                    //grow by one because we use a line thickness of 2.
                    mobilityBounds.grow(1);

                    imageBounds.union(mobilityBounds);
                }
            }
            // </editor-fold>
            
            // <editor-fold defaultstate="collapsed" desc="Build Echelon">
            //Draw Echelon
            var strEchelon = SymbolUtilities.getEchelon(symbolID);//symbolID.substring(11, 12);
            strEchelon = SymbolUtilities.getEchelonText(strEchelon);
            if(strEchelon !== null && SymbolUtilities.hasInstallationModifier(symbolID)===false
                    && SymbolUtilities.canUnitHaveModifier(symbolID, ModifiersUnits.B_ECHELON))
            {

                if(strEchelon!==null)
                {
                    var echelonOffset = 2,
                        outlineOffset = RendererSettings.getTextOutlineWidth();

                    var tiEchelon = new SVGTextInfo(strEchelon,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo,"middle");
                    
                    var y = Math.round(symbolBounds.getY() - echelonOffset),
                        x = Math.round(symbolBounds.getCenterX());
                    tiEchelon.setLocation(x,y);

                    //adjust for outline.
                    tiEchelon.shift(0,-outlineOffset);
                    echelonBounds = tiEchelon.getBounds();
                    imageBounds.union(echelonBounds);
                }
            }
            // </editor-fold>
            
            // <editor-fold defaultstate="collapsed" desc="Build Affiliation Modifier">
            //Draw Affiliation Modifier
            var affiliationModifier = null;
            if(RendererSettings.getDrawAffiliationModifierAsLabel()===false)
            {
                affiliationModifier = SymbolUtilities.getUnitAffiliationModifier(symbolID, symStd);
            }
            if(affiliationModifier !== null)
            {

                var amOffset = 2,
                    outlineOffset = RendererSettings.getTextOutlineWidth();

                var tiAM = new SVGTextInfo(affiliationModifier,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo);
                amBounds = tiAM.getBounds();

                var x,y;
                
                if(echelonBounds !== null && 
                        ((echelonBounds.getX() + echelonBounds.getWidth() > symbolBounds.getX() + symbolBounds.getWidth())))
                {
                    y = Math.round(symbolBounds.getY() - amOffset),
                    x = echelonBounds.getX() + echelonBounds.getWidth();
                }
                else
                {
                    y = Math.round(symbolBounds.getY() - amOffset),
                    x = Math.round(symbolBounds.getX() + symbolBounds.getWidth());
                }
                tiAM.setLocation(x,y);

                //There will never be lowercase characters in an echelon so trim that fat.    
                //Remove the descent from the bounding box.
                //tiAM.getTextBounds().shiftBR(0+outlineOffset,Math.round(-(amBounds.getHeight()*0.3)));                         


                //adjust for outline.
                tiAM.setLocation(x,y-outlineOffset);
                amBounds = tiAM.getOutlineBounds();

                imageBounds.union(amBounds);
            }
            // </editor-fold>

            // <editor-fold defaultstate="collapsed" desc="Build Task Force">
            var tfBounds = null,
                tfRectangle = null;
            if(SymbolUtilities.isTaskForce(symbolID))
            {
                if(echelonBounds !== null)
                {
                    tfRectangle = new SO.Rectangle(echelonBounds.getX()-1,
                                echelonBounds.getY()-1,// + outlineOffset,
                                echelonBounds.getWidth()+3,
                                symbolBounds.getY() - (echelonBounds.getY() - 1));//echelonBounds.getHeight()+3);
                    tfBounds = new SO.Rectangle(echelonBounds.getX()-2,
                                echelonBounds.getY()-2,
                                echelonBounds.getWidth()+5,
                                echelonBounds.getHeight()+4);
                }
                else
                {
                    var height = Math.round(symbolBounds.getHeight() / 4),
                        width = Math.round(symbolBounds.getWidth() / 3);

                    tfRectangle = new SO.Rectangle(symbolBounds.getX() + width,
                    symbolBounds.getY() - height,
                    width,
                    height);

                    tfBounds = new SO.Rectangle(tfRectangle.getX() + -1,
                    tfRectangle.getY() - 1,
                    tfRectangle.getWidth() + 2,
                    tfRectangle.getHeight() + 2);

                }
                imageBounds.union(tfBounds);
            }
            // </editor-fold>

            // <editor-fold defaultstate="collapsed" desc="Build Feint Dummy Indicator">
            var fdiBounds = null,
                fdiTop = null,
                fdiLeft = null,
                fdiRight = null;
            if(SymbolUtilities.isFeintDummy(symbolID) ||
                    SymbolUtilities.isFeintDummyInstallation(symbolID))
            {
                //create feint indicator /\
                fdiLeft = new SO.Point(symbolBounds.getX(),symbolBounds.getY());
                fdiRight = new SO.Point(symbolBounds.getX() + symbolBounds.getWidth(),symbolBounds.getY());

                var affiliation = symbolID.charAt(1);
                if(affiliation===("F") ||
                        affiliation===("A") ||
                        affiliation===("D") ||
                        affiliation===("M") ||
                        affiliation===("J") ||
                        affiliation===("K"))
                {
                    fdiTop = new SO.Point(Math.round(symbolBounds.getCenterX()), Math.round(symbolBounds.getY() - (symbolBounds.getHeight() * .75)));
                }
                else
                {
                    fdiTop = new SO.Point(Math.round(symbolBounds.getCenterX()), Math.round(symbolBounds.getY() - (symbolBounds.getHeight() * .54)));
                }

                fdiBounds = new SO.Rectangle(fdiLeft.getX(),fdiLeft.getY(),1,1);
                fdiBounds.unionPoint(fdiTop);
                fdiBounds.unionPoint(fdiRight);

                if(echelonBounds !== null)
                {
                    var shiftY = (symbolBounds.getY() - echelonBounds.getHeight() - 2);
                    fdiLeft.shift(0,shiftY);
                    fdiTop.shift(0,shiftY);
                    fdiRight.shift(0,shiftY);
                    fdiBounds.shift(0,shiftY);
                }

                imageBounds.union(fdiBounds);

            }
            // </editor-fold>

            // <editor-fold defaultstate="collapsed" desc="Build Installation">
            var instRectangle = null,
                instBounds = null;
            if(SymbolUtilities.hasInstallationModifier(symbolID))
            {//the actual installation symbols have the modifier
                //built in.  everything else, we have to draw it.
                //
                ////get indicator dimensions////////////////////////////////
                var affiliation = SymbolUtilities.getAffiliation(symbolID);
                if(affiliation === 'F' ||
                              affiliation === 'A' ||
                              affiliation === 'D' ||
                              affiliation === 'M' ||
                              affiliation === 'J' ||
                              affiliation === 'K')
                {
                    //4th height, 3rd width
                    height = Math.round(symbolBounds.getHeight() / 4);
                    width = Math.round(symbolBounds.getWidth() / 3);
                }
                else if(affiliation === 'H' || affiliation === 'S')//hostile,suspect
                {
                    //6th height, 3rd width
                    height = Math.round(symbolBounds.getHeight() / 6);
                    width = Math.round(symbolBounds.getWidth() / 3 * 0.9);  
                }
                else if(affiliation === 'N' || affiliation === 'L')//neutral,exercise neutral
                {
                    //6th height, 3rd width
                    height = Math.round(symbolBounds.getHeight() / 6);
                    width = Math.round(symbolBounds.getWidth() / 3);  
                }
                else if(affiliation === 'P' ||
                         affiliation === 'U' ||
                         affiliation === 'G' ||
                         affiliation === 'W')
                {
                    //6th height, 3rd width
                    height = Math.round(symbolBounds.getHeight() / 6);
                    width = Math.round(symbolBounds.getWidth() / 3);  
                }
                else
                {
                    //6th height, 3rd width
                    height = Math.round(symbolBounds.getHeight() / 6);
                    width = Math.round(symbolBounds.getWidth() / 3);   
                }

    //                    if(width * 3 < symbolBounds.getWidth())
    //                        width++;

                //set installation position/////////////////////////////////
                //set position of indicator
                if(affiliation === 'F' ||
                              affiliation === 'A' ||
                              affiliation === 'D' ||
                              affiliation === 'M' ||
                              affiliation === 'J' ||
                              affiliation === 'K' ||
                              affiliation === 'N' ||
                              affiliation === 'L')
                {
                    instRectangle = new SO.Rectangle(symbolBounds.getX() + width,
                        symbolBounds.getY() - height,
                        width,
                        height);
                }
                else if(affiliation === 'H' || affiliation === 'S')//hostile,suspect
                {
                    instRectangle = new SO.Rectangle(symbolBounds.getCenterX() - width/2,
                        Math.round(symbolBounds.getY() - (height * 0.15)),
                        width,
                        height);
                }
                else if(affiliation === 'P' ||
                         affiliation === 'U' ||
                         affiliation === 'G' ||
                         affiliation === 'W')
                {
                    instRectangle = new SO.Rectangle(symbolBounds.getX() + width,
                        Math.round(symbolBounds.getY() - (height * 0.3)),
                        width,
                        height);
                }
                else
                {
                   instRectangle = new SO.Rectangle(symbolBounds.getX() + width,
                        Math.round(symbolBounds.getY() - (height * 0.3)),
                        width,
                        height);     
                }

                /*instRectangle = new SO.Rectangle(symbolBounds.getX() + width,
                symbolBounds.getY() - height,
                width,
                height);//*/

                //generate installation bounds//////////////////////////////
                instBounds = new SO.Rectangle(instRectangle.getX() + -1,
                instRectangle.getY() - 1,
                instRectangle.getWidth() + 2,
                instRectangle.getWidth() + 2);

                imageBounds.union(instBounds);

            }
            // </editor-fold>

            // <editor-fold defaultstate="collapsed" desc="Build HQ Staff">
            var hqBounds = null;
            //Draw HQ Staff
            if(SymbolUtilities.isHQ(symbolID))
            {
                var pt1HQ = null,
                    pt2HQ = null,
                    affiliation = symbolID.charAt(1);
                //get points for the HQ staff
                if(affiliation===("F") ||
                        affiliation===("A") ||
                        affiliation===("D") ||
                        affiliation===("M") ||
                        affiliation===("J") ||
                        affiliation===("K") ||
                        affiliation===("N") ||
                        affiliation===("L"))
                {
                    pt1HQ = new SO.Point(symbolBounds.getX()+1,
                        symbolBounds.getY() + symbolBounds.getHeight());
                    pt2HQ = new SO.Point(pt1HQ.getX(), pt1HQ.getY() + symbolBounds.getHeight());
                }
                else
                {
                    pt1HQ = new SO.Point(symbolBounds.getX()+1,
                        symbolBounds.getY() + (symbolBounds.getHeight()/2));
                    pt2HQ = new SO.Point(pt1HQ.getX(), pt1HQ.getY() + symbolBounds.getHeight());
                }

                //create bounding rectangle for HQ staff.
                hqBounds = new SO.Rectangle(pt1HQ.getX(),pt1HQ.getY(),2,pt2HQ.getY()-pt1HQ.getY());
                //adjust the image bounds accordingly.
                imageBounds.shiftBR(0,pt2HQ.getY()-imageBounds.getBottom());
                //adjust symbol center
                centerPoint.setLocation(pt2HQ.getX(),pt2HQ.getY());
            }

            // </editor-fold>         
            
            // <editor-fold defaultstate="collapsed" desc="Build DOM Arrow">
            var domPoints = null,
                domBounds = null;
            if(modifiers[ModifiersUnits.Q_DIRECTION_OF_MOVEMENT] !== undefined)
            {
                var q = modifiers[ModifiersUnits.Q_DIRECTION_OF_MOVEMENT];

                var isY = (modifiers[ModifiersUnits.Y_LOCATION] !== undefined);

                domPoints = this.createDOMArrowPoints(symbolID, symbolBounds,centerPoint, q, isY);

                domBounds = new SO.Rectangle(domPoints[0].getX(),domPoints[0].getY(),1,1);

                var temp = null;
                for(var i = 1; i < 6; i++)
                {
                    temp = domPoints[i];
                    if(temp !== null)
                        domBounds.unionPoint(temp);
                }
                imageBounds.union(domBounds);
            }

            // </editor-fold>

            // <editor-fold defaultstate="collapsed" desc="Build Operational Condition Indicator">
            var ociBounds = null;
            var ociOffset = 2;
            if(mobilityBounds !== null)
            {
                ociOffset = Math.round(mobilityBounds.bottom - symbolBounds.bottom)+2;
            }
            var ociShape = this.processOperationalConditionIndicator(symbolID, symbolBounds, ociOffset);
            if(ociShape !== null)
            {
                ociBounds = ociShape.getBounds();
            }
            
            imageBounds.union(ociBounds);

            // </editor-fold>
            // 
            // <editor-fold defaultstate="collapsed" desc="Shift Modifiers">
            //adjust points if necessary
            //translation group added in renderUnit, don't shift anything here.
            /*if(imageBounds.getX() < 0 || imageBounds.getY() < 0)
            {
                var shiftX = Math.abs(imageBounds.getX()),
                    shiftY = Math.abs(imageBounds.getY());
                    //<g transform="translate(0,15)"></g>


                centerPoint.shift(shiftX, shiftY);
                symbolBounds.shift(shiftX, shiftY);
                imageBounds.shift(shiftX, shiftY);
            }//*/
            // </editor-fold>

            // <editor-fold defaultstate="collapsed" desc="Draw Modifiers">
            /*if(useBuffer===true)
            {
                buffer = _bufferDisplayModifiers;
                ctx = buffer.getContext('2d');
                ctx.clearRect(0,0,250,250);
            }
            else
            {
                buffer = this.createBuffer(imageBounds.getWidth(),imageBounds.getHeight());
                ctx = buffer.getContext('2d');
            //}*/
            var svgElements = [];
            if(render === true)
            {
           
                //create SVG elements then enclose in group with transform
                //render////////////////////////////////////////////////////////
                if(hqBounds !== null)
                {
                    var hq = new SO.Line(pt1HQ.getX(),pt1HQ.getY(),pt2HQ.getX(),pt2HQ.getY());
                    svgElements.push(hq.toSVGElement('#000000',2));
                }

                if(tfBounds !== null)
                {
                    svgElements.push(tfRectangle.toSVGElement('#000000',2));
                }

                if(instBounds !== null)
                {
                    svgElements.push(instRectangle.toSVGElement(null,null,'#000000'));
                }

                if(echelonBounds !== null)
                {
                    //ctx.lineCap = "butt";
                    //ctx.lineJoin = "miter";
                    //ctx.miterLimit = 3;

                    var temp1 = this.renderTextElement([tiEchelon]);
                    for(var i = 0; i < temp1.length; i++)
                    {
                        svgElements.push(temp1[i]);
                    }
                        
                    echelonBounds = null;
                }   
                
                if(amBounds !== null)
                {
                    var temp2 = this.renderTextElement([tiAM]);
                    for(var j = 0; j < temp2.length; j++)
                    {
                        svgElements.push(temp2[j]);
                    }
                        
                    amBounds = null;
                    tiAM = null;
                }   

                if(fdiBounds !== null)
                {
                    var oldDash = null;
                    var fdiPath = new SO.Path();

                    if(symbolBounds.getWidth()>19)
                    {
                        fdiPath.setLineDash([6,4]);
                    }
                    else
                    {
                        fdiPath.setLineDash([5,3]);
                    }
                    fdiPath.moveTo(fdiLeft.getX(),fdiLeft.getY());
                    fdiPath.lineTo(fdiTop.getX(),fdiTop.getY());
                    fdiPath.lineTo(fdiRight.getX(),fdiRight.getY());
                    
                    svgElements.push(fdiPath.toSVGElement('#000000',2,null));
                    
                    //ctx.lineCap = "butt";
                    //ctx.lineJoin = "miter";
                    //ctx.strokeStyle = "#000000";
                    //ctx.lineWidth = 2;

                    fdiBounds = null;
                }

                if(mobilityBounds !== null)
                {
                                        //ctx.lineCap = "butt";
                    //ctx.lineJoin = "miter";
                    var mobilityLineWidth = 2;
                    if(symbolID.charAt(10)===("N"))
                    {
                        mobilityLineWidth = 1;
                    }


                    var size = shapes.length;
                    var tempShape = null;
                    for(var i=0; i<size;i++)
                    {
                        tempShape = shapes[i];
                        if(tempShape.getShapeType()!==SO.ShapeTypes.RECTANGLE)
                        {
                            svgElements.push(tempShape.toSVGElement('#000000',2,null));
                            //tempShape.stroke(ctx);
                        }
                        else
                        {
                            svgElements.push(tempShape.toSVGElement(null,null,'#000000'));
                            //tempShape.fill(ctx);
                        }
                    }
                    mobilityBounds = null;
                    shapes = null;
                    tempShape = null;
                }

                if(ociBounds !== null)
                {
                    var statusColor = null;
                    var status = symbolID.charAt(3);
                    if(status===("C"))//Fully Capable
                        statusColor = '#00FF00';
                    else if(status===("D"))//Damage
                        statusColor = '#FFFF00';
                    else if(status===("X"))
                        statusColor = '#FF0000';
                    else if(status===("F"))//full to capacity(hospital)
                        statusColor = '#0000FF';

                    /*ctx.lineWidth = 2;
                    ctx.strokeStyle = '#000000';
                    ociShape.stroke(ctx);
                    ctx.fillStyle = statusColor;
                    ociShape.fill(ctx);//*/
                    
                    svgElements.push(ociShape.toSVGElement('#000000',1,statusColor));

                    ociBounds = null;
                    ociShape = null;
                }

                
                if(domBounds !== null)
                {
                    /*ctx.lineWidth = 2;
                    ctx.lineCap = "butt";
                    ctx.lineJoin = "miter";
                    ctx.strokeStyle = "#000000";//*/
                                        
                    var linePath = new SO.Path();
                    linePath.moveTo(domPoints[0].getX(),domPoints[0].getY());
                    if(domPoints[1] !== null)
                        linePath.lineTo(domPoints[1].getX(),domPoints[1].getY());
                    if(domPoints[2] !== null)
                        linePath.lineTo(domPoints[2].getX(),domPoints[2].getY());
                        
                    svgElements.push(linePath.toSVGElement('#000000',2,null));
                    
                    var arrowPath = new SO.Path();
                    arrowPath.moveTo(domPoints[3].getX(),domPoints[3].getY());
                    arrowPath.lineTo(domPoints[4].getX(),domPoints[4].getY());
                    arrowPath.lineTo(domPoints[5].getX(),domPoints[5].getY());
                    arrowPath.closePath();
                    
                    svgElements.push(arrowPath.toSVGElement(null,null,'#000000'));

                }
            }
            // </editor-fold>
            
            // <editor-fold defaultstate="collapsed" desc="Cleanup">
                domPoints = null;
                shapes = null;
                ctx = null;
                buffer = null;
                var hasDOMArrow = domBounds ? true : false;
                domBounds = null;
            // </editor-fold>
            
            //return ;
            if(svgElements !== null && svgElements.length > 0)
                return {svgElements:svgElements, centerPoint:centerPoint, symbolBounds:symbolBounds, imageBounds:imageBounds, hasDOMArrow:hasDOMArrow};
            else
                return null;
                
           
            
    },
            
    processOperationalConditionIndicator: function(symbolID, symbolBounds, offsetY){
            // <editor-fold defaultstate="collapsed" desc="Operational Condition Indicator">
            //create Operational Condition Indicator
            //set color
            var bar = null,
                status, 
                statusColor, 
                barSize = 0, 
                pixelSize = symbolBounds.getHeight();

            status = symbolID.charAt(3);
            
				
			if(_statusColorMap[status] !== undefined)
				statusColor = _statusColorMap[status];
			else
				statusColor = null;

            if(statusColor !== null)
            {
                if(pixelSize > 0)
                barSize = Math.round(pixelSize/5);

                if(barSize < 2)
                    barSize = 2;
                
                offsetY += Math.round(symbolBounds.getY() + symbolBounds.getHeight());
                        
                bar = new SO.Rectangle(symbolBounds.getX()+1, offsetY, Math.round(symbolBounds.getWidth())-2,barSize);

            }
            
            return bar;
            
            // </editor-fold>
    },
    
    /**
     * 
     * @param {SVGInfo} ii
     * @param {String} symbolID
     * @param {type} modifiers
     * @returns {ImageInfo}
     */
    processUnitModifiers: function(si, symbolID, modifiers, fontInfo){
        
        var render = true;
        if(modifiers["RENDER"] !== undefined)
            render = modifiers["RENDER"];
        
        var bufferXL = 5,
        bufferXR = 5,
        bufferY = 2,
        bufferText = 2,
        x = 0,
        y = 0,//best y
        cpofNameX = 0,
        svgElements = [],
        newii = null;
        
        /*var outlineSize = 0;
        if(RendererSettings.getTextOutlineWidth()>2);
        {
            outlineSize = (RendererSettings.getTextOutlineWidth()-1)/2;
        }
        
        if(outlineSize > 0)
        {
            bufferXL += outlineSize;
            bufferXR += outlineSize;
            bufferY += outlineSize;
            bufferText += outlineSize;
        }//*/
        
        var tiArray = new Array(),
        
            descent = fontInfo.measurements.descent,
        
            bounds = null,
            labelBounds = null,
            labelWidth, labelHeight;
        
        var bounds = si.getSymbolBounds().clone(),
            imageBounds = si.getSVGBounds().clone(),
            symbolBounds = si.getSymbolBounds().clone();
            /*centerPoint = si.getAnchorPoint(),
            imageBounds = si.getImageBounds().clone(),
            imageBoundsOld = si.getImageBounds().clone();//*/
    
        var echelon = SymbolUtilities.getEchelon(symbolID),
            echelonText = SymbolUtilities.getEchelonText(echelon),
            amText = SymbolUtilities.getUnitAffiliationModifier(symbolID, symStd);
    
	
		var textColor = null,
			textBackgroundColor = null;
    
        //make room for echelon & mobility.
        if(modifiers.Q)
        {
            //if no DOM, we can just use the image bounds
            bounds = new SO.Rectangle(imageBounds.getX(), symbolBounds.getY(),
                                imageBounds.getWidth(), symbolBounds.getHeight());
        }
        else //dom exists so we need to change our math
        {
            if(echelonText !== null || amText !== null)
            { 
                bounds = new SO.Rectangle(imageBounds.getX(), bounds.getY(),
                                            imageBounds.getWidth(), bounds.getHeight());
            }
            else if(symbolID.substring(10, 12)==="MR")
            {
                x = -(Math.round((symbolBounds.getWidth()-1)/7)*2);
                if(x < bounds.x)
                    bounds.shiftTL(x,0);
            }    
        }//*/
            
        
        cpofNameX = bounds.x + bounds.width + bufferXR;
        
        //check if text is too tall:
        var byLabelHeight = false;
        labelHeight = fontInfo.measurements.fullHeight;
        var maxHeight = (bounds.height);
        if((labelHeight * 3) > maxHeight)
            byLabelHeight = true;
        
        var symStd = modifiers[MilStdAttributes.SymbologyStandard];
        
        //Affiliation Modifier being drawn as a display modifier
        var affiliationModifier = null;
        if(RendererSettings.getDrawAffiliationModifierAsLabel())
        {
            affiliationModifier = SymbolUtilities.getUnitAffiliationModifier(symbolID, symStd);
        }
        if(affiliationModifier !== null)
        {   //Set affiliation modifier
            modifiers[ModifiersUnits.E_FRAME_SHAPE_MODIFIER] = affiliationModifier;
        }//*/
        
        //Check for Valid Country Code
        if(SymbolUtilities.hasValidCountryCode(symbolID))
        {
            modifiers[ModifiersUnits.CC_COUNTRY_CODE] = symbolID.substring(12,14);
        }
        
        //            int y0 = 0;//W    E/F
        //            int y1 = 0;//X/Y  G
        //            int y2 = 0;//V    H 
        //            int y3 = 0;//T    M CC
        //            int y4 = 0;//Z    J/K/L/N/P
        //
        //            y0 = bounds.y - 0;
        //            y1 = bounds.y - labelHeight;
        //            y2 = bounds.y - (labelHeight + (int)bufferText) * 2;
        //            y3 = bounds.y - (labelHeight + (int)bufferText) * 3;
        //            y4 = bounds.y - (labelHeight + (int)bufferText) * 4;
        // <editor-fold defaultstate="collapsed" desc="Build Modifiers">
        var modifierValue = null;
        var tiTemp = null;
        //if(ModifiersUnits.C_QUANTITY in modifiers 
        if(modifiers.C 
                && SymbolUtilities.canUnitHaveModifier(symbolID, ModifiersUnits.C_QUANTITY))
        {
            var text = modifiers[ModifiersUnits.C_QUANTITY];
            //bounds = armyc2.c2sd.renderer.utilities.RendererUtilities.getTextOutlineBounds(textInfoContext, text, new SO.Point(0,0));
            tiTemp = new SVGTextInfo(text,null,fontInfo,null);
            labelBounds = tiTemp.getBounds();
            labelWidth = labelBounds.getWidth();
            x = Math.round((symbolBounds.x + (symbolBounds.width * 0.5)) - (labelWidth * 0.5));
            y = Math.round(symbolBounds.y - bufferY - descent);
            tiTemp.setLocation(x,y);
            tiArray.push(tiTemp);
        }
        
        //if(ModifiersUnits.X_ALTITUDE_DEPTH in modifiers || ModifiersUnits.Y_LOCATION in modifiers)
        if(modifiers.X || modifiers.Y)
        {
            modifierValue = null;
            
            var xm = null,
                ym = null;
                    
            if(modifiers.X) 
                xm = modifiers.X;
            if(modifiers.Y) 
                ym = modifiers.Y;

            if(xm === null && ym !== null)
                modifierValue = ym;
            else if(xm !== null && ym === null)
                modifierValue = xm;
            else if(xm !== null && ym !== null)
                modifierValue = xm + "  " + ym;
            
            tiTemp = new SVGTextInfo(modifierValue,null,fontInfo,"end");
            labelBounds = tiTemp.getBounds();
            labelWidth = labelBounds.getWidth();
            
            if(!byLabelHeight)
            {
                x = bounds.x - bufferXL;
                y = bounds.y + labelHeight - descent;
            }
            else
            {
                x = bounds.x - bufferXL;

                y = (bounds.height );
                y = ((y * 0.5) + (labelHeight * 0.5));

                y = y - ((labelHeight + bufferText));
                y = bounds.y + y;
            }
            
            tiTemp.setLocation(x,y);
            tiArray.push(tiTemp);
        }
        
        if(modifiers.G)
        {
            modifierValue = modifiers.G;
            
            tiTemp = new SVGTextInfo(modifierValue,null,fontInfo,null);
            labelBounds = tiTemp.getBounds();
            labelWidth = labelBounds.getWidth();
            
            if(!byLabelHeight)
            {
                x = bounds.x + bounds.width + bufferXR;
                y = bounds.y + labelHeight - descent;
            }
            else
            {
                x = bounds.x + bounds.width + bufferXR;
                    
                y = (bounds.height );
                y = ((y * 0.5) + (labelHeight * 0.5));

                y = y - ((labelHeight + bufferText));
                y = bounds.y + y;
            }
            
            tiTemp.setLocation(x,y);
            tiArray.push(tiTemp);
            
            //Concession for cpof name label
            if((x + labelWidth + 3) > cpofNameX)
                cpofNameX = x + labelWidth + 3;
        }
        
        if(modifiers.V)
        {
            modifierValue = modifiers.V;
            
            tiTemp = new SVGTextInfo(modifierValue,null,fontInfo,"end");
            labelBounds = tiTemp.getBounds();
            labelWidth = labelBounds.getWidth();
            
          
            x = bounds.x - bufferXL;

            y = (bounds.height );//checkpoint, get box above the point
            y = ((y * 0.5) + ((labelHeight - descent) * 0.5));
            y = bounds.y + y;
            
            
            tiTemp.setLocation(x,y);
            tiArray.push(tiTemp);
        }
        
        if(modifiers.H)
        {
            modifierValue = modifiers.H;

            tiTemp = new SVGTextInfo(modifierValue,null,fontInfo,null);
            labelBounds = tiTemp.getBounds();
            labelWidth = labelBounds.getWidth();
            
            x = bounds.x + bounds.width + bufferXR;
                
            y = (bounds.height );
            y = ((y * 0.5) + ((labelHeight - descent) * 0.5));
            y = bounds.y + y;
            
            tiTemp.setLocation(x,y);
            tiArray.push(tiTemp);
            
            //Concession for cpof name label
            if((x + labelWidth + 3) > cpofNameX)
                cpofNameX = x + labelWidth + 3;
        }
        
        if(modifiers.T)
        {
            modifierValue = modifiers[ModifiersUnits.T_UNIQUE_DESIGNATION_1];
            
            tiTemp = new SVGTextInfo(modifierValue,null,fontInfo,"end");
            labelBounds = tiTemp.getBounds();
            labelWidth = labelBounds.getWidth();
            
            if(!byLabelHeight)
            {
                x = bounds.x - bufferXL;
                y = bounds.y + bounds.height;
            }
            else
            {
                x = bounds.x - bufferXL;
                    
                y = (bounds.height );
                y = ((y * 0.5) + (labelHeight * 0.5));

                y =  y + ((labelHeight + bufferText));
                y = bounds.y + y;
            }
            
            tiTemp.setLocation(x,y);
            tiArray.push(tiTemp);
        }
        
        if(modifiers.M || modifiers.CC)
        {
            modifierValue = "";
            
            if(modifiers[ModifiersUnits.M_HIGHER_FORMATION])
                modifierValue += modifiers[ModifiersUnits.M_HIGHER_FORMATION];
            if(modifiers[ModifiersUnits.CC_COUNTRY_CODE])
            {
                if(modifiers[ModifiersUnits.M_HIGHER_FORMATION])
                    modifierValue += " ";
                modifierValue += modifiers[ModifiersUnits.CC_COUNTRY_CODE];
            }
            
            tiTemp = new SVGTextInfo(modifierValue,null,fontInfo,null);
            labelBounds = tiTemp.getBounds();
            labelWidth = labelBounds.getWidth();
            
            x = bounds.x + bounds.width + bufferXR;
            if(!byLabelHeight)
                y = bounds.y + bounds.height;
            else
            {
                y = (bounds.height );
                y = ((y * 0.5) + (labelHeight * 0.5));

                y =  y + ((labelHeight + bufferText));
                y = bounds.y + y;
            }
            
            tiTemp.setLocation(x,y);
            tiArray.push(tiTemp);
            
            //Concession for cpof name label
            if((x + labelWidth + 3) > cpofNameX)
                cpofNameX = x + labelWidth + 3;
        }
        
        if(modifiers.Z)
        {
            modifierValue = modifiers[ModifiersUnits.Z_SPEED];
            
            tiTemp = new SVGTextInfo(modifierValue,null,fontInfo,"end");
            labelBounds = tiTemp.getBounds();
            labelWidth = labelBounds.getWidth();
            
            x = bounds.x - bufferXL;
            if(!byLabelHeight)
                y = Math.round(bounds.y + bounds.height + labelHeight + bufferText);
            else
            {
                y = (bounds.height );
                y = ((y * 0.5) + (labelHeight * 0.5));

                y = y + ((labelHeight + bufferText)*2);
                y = Math.round(bounds.y + y);
            }
            
            tiTemp.setLocation(x,y);
            tiArray.push(tiTemp);
        }
        
        if(modifiers.J ||
            modifiers.K ||
            modifiers.L ||
            modifiers.N ||
            modifiers.P)
        {
            modifierValue = null;
            
            var jm = null,
                km = null,
                lm = null,
                nm = null,
                pm = null;
        
            if(modifiers.J) 
                jm = modifiers[ModifiersUnits.J_EVALUATION_RATING];
            if(modifiers.K) 
                km = modifiers[ModifiersUnits.K_COMBAT_EFFECTIVENESS];
            if(modifiers.L) 
                lm = modifiers[ModifiersUnits.L_SIGNATURE_EQUIP];
            if(modifiers.N) 
                nm = modifiers[ModifiersUnits.N_HOSTILE];
            if(modifiers.P) 
                pm = modifiers[ModifiersUnits.P_IFF_SIF];
            
            modifierValue = "";
            if(jm !== null && jm!==(""))
                modifierValue = modifierValue + jm;
            if(km !== null && km!==(""))
                modifierValue = modifierValue + " " + km;
            if(lm !== null && lm!==(""))
                modifierValue = modifierValue + " " + lm;
            if(nm !== null && nm!==(""))
                modifierValue = modifierValue + " " + nm;
            if(pm !== null && pm!==(""))
                modifierValue = modifierValue + " " + pm;

            if(modifierValue.charAt(0)===" ")
                modifierValue = modifierValue.substring(1);
            
            tiTemp = new SVGTextInfo(modifierValue,null,fontInfo,null);
            labelBounds = tiTemp.getBounds();
            labelWidth = labelBounds.getWidth();
            
            x = bounds.x + bounds.width + bufferXR;
            if(!byLabelHeight)
                y = Math.round(bounds.y + bounds.height + labelHeight + bufferText);
            else
            {
                y = (bounds.height );
                y = ((y * 0.5) + (labelHeight * 0.5));

                y = y + ((labelHeight + bufferText)*2);
                y = Math.round(bounds.y + y);
            }
            
            tiTemp.setLocation(x,y);
            tiArray.push(tiTemp);
            
            //Concession for cpof name label
            if((x + labelWidth + 3) > cpofNameX)
                cpofNameX = x + labelWidth + 3;
        }
        
        if(modifiers.W)
        {
            modifierValue = modifiers[ModifiersUnits.W_DTG_1];
            
            tiTemp = new SVGTextInfo(modifierValue,null,fontInfo,"end");
            labelBounds = tiTemp.getBounds();
            labelWidth = labelBounds.getWidth();
            
            if(!byLabelHeight)
            {
                x = bounds.x - bufferXL;
                y = bounds.y - bufferY - descent;
            }
            else
            {
                x = bounds.x - bufferXL;

                y = (bounds.height );
                y = ((y * 0.5) + (labelHeight * 0.5));

                y = y - ((labelHeight + bufferText)*2);
                y = bounds.y + y;
            }
            
            tiTemp.setLocation(x,y);
            tiArray.push(tiTemp);
        }
        
        if(modifiers.F || modifiers.E)
        {
            modifierValue = null;
            var E = null,
                F = null;
        
            if(modifiers.E) 
                E = modifiers[ModifiersUnits.E_FRAME_SHAPE_MODIFIER];
            if(modifiers.F) 
                F = modifiers[ModifiersUnits.F_REINFORCED_REDUCED];

            if(E !== null && E!==(""))
                    modifierValue = E;

            if(F !== null && F!==(""))
            {
                if(F.toUpperCase()===("R"))
                    F = "(+)";
                else if(F.toUpperCase()===("D"))
                    F = "(-)";
                else if(F.toUpperCase()===("RD"))
                    F = "(" + String.fromCharCode(177) + ")";
                //else, just treat it like a regular string.
                /*else
                    F = null;//*/
            }

            if(F !== null && F!==(""))
            {
                if(modifierValue !== null && modifierValue!==(""))
                    modifierValue = modifierValue + " " + F;
                else
                    modifierValue = F;
            }
            
            tiTemp = new SVGTextInfo(modifierValue,null,fontInfo,null);
            labelBounds = tiTemp.getBounds();
            labelWidth = labelBounds.getWidth();
            
            if(!byLabelHeight)
            {
                x = bounds.x + bounds.width + bufferXR;               
                y = bounds.y - bufferY - descent;
            }
            else
            {
                x = bounds.x + bounds.width + bufferXR;
                
                y = (bounds.height );
                y = ((y * 0.5) + (labelHeight * 0.5));

                y = y - ((labelHeight + bufferText)*2);
                y = bounds.y + y;
            }
            
            tiTemp.setLocation(x,y);
            tiArray.push(tiTemp);
            
            //Concession for cpof name label
            if((x + labelWidth + 3) > cpofNameX)
                cpofNameX = x + labelWidth + 3;
        }
        
        if(modifiers.AA)
        {
            modifierValue = modifiers[ModifiersUnits.AA_SPECIAL_C2_HQ];
            
            tiTemp = new SVGTextInfo(modifierValue,null,fontInfo,null);
            labelBounds = tiTemp.getBounds();
            labelWidth = labelBounds.getWidth();
            
            x = (symbolBounds.x + (symbolBounds.width * 0.5)) - (labelWidth * 0.5);
                
            y = (symbolBounds.height );//checkpoint, get box above the point
            y = ((y * 0.5) + ((labelHeight - descent) * 0.5));
            y = symbolBounds.y + y;
            
            tiTemp.setLocation(x,y);
            tiArray.push(tiTemp);
        }
        
        if(modifiers.CN)
        {
            modifierValue = modifiers[ModifiersUnits.CN_CPOF_NAME_LABEL];
            
            tiTemp = new SVGTextInfo(modifierValue,null,fontInfo,null);
            labelBounds = tiTemp.getBounds();
            labelWidth = labelBounds.getWidth();
            
            x = cpofNameX;
                
            y = (bounds.height );//checkpoint, get box above the point
            y = ((y * 0.5) + (labelHeight * 0.5));
            y = bounds.y + y;
            
            tiTemp.setLocation(x,y);
            tiArray.push(tiTemp);
        }
        
        if(modifiers.SCC)
        {
            modifierValue = modifiers[ModifiersUnits.SCC_SONAR_CLASSIFICATION_CONFIDENCE];
            
            var scc = 0;
            if(SymbolUtilities.isNumber(modifierValue) && SymbolUtilities.hasModifier(symbolID, ModifiersUnits.SCC_SONAR_CLASSIFICATION_CONFIDENCE))
            {
                scc = parseInt(modifierValue);
                if(scc > 0 && scc < 6)
                {
                    
                    var yPosition = this.getYPositionForSCC(symbolID);
                     
                    tiTemp = new SVGTextInfo(modifierValue,null,fontInfo,null);
                    labelBounds = tiTemp.getBounds();
                    labelWidth = labelBounds.getWidth();
                    
                    x = (bounds.x + (bounds.width * 0.5)) - (labelWidth * 0.5);

                    y = (bounds.height );//checkpoint, get box above the point
                    y = ((y * yPosition) + ((labelHeight - descent) * 0.5));
                    y = bounds.y + y;
                    
                    tiTemp.setLocation(x,y);
                    tiArray.push(tiTemp);
                    
                }
            }

        }
        
        // </editor-fold>
        
        // <editor-fold defaultstate="collapsed" desc="Shift Points and Draw">
        var modifierBounds = null;
        if(tiArray !== null && tiArray.length > 0)
        {

            //build modifier bounds/////////////////////////////////////////
            modifierBounds = imageBounds.clone();
            modifierBounds.union(tiArray[0].getOutlineBounds());
            var size = tiArray.length;
            var tempShape = null;
            if(modifiers[MilStdAttributes.TextColor])
                textColor = modifiers[MilStdAttributes.TextColor];
            else
                textColor = "#000000";
            if(modifiers[MilStdAttributes.TextBackgroundColor])
                textBackgroundColor = modifiers[MilStdAttributes.TextBackgroundColor];
            else
                textBackgroundColor = RendererUtilities.getIdealOutlineColor(textColor,true);
            var outlineWidth = RendererSettings.getTextOutlineWidth();
            for(var i=0; i<size;i++)
            {
                tempShape = tiArray[i];
                modifierBounds.union(tempShape.getOutlineBounds());
                //svgElements.push(tempShape.toSVGElement(textBackgroundColor,outlineWidth,textColor));
            }
            svgElements = this.renderTextElement(tiArray,textColor,textBackgroundColor);
            
        }

            
            
        // <editor-fold defaultstate="collapsed" desc="Cleanup">
        tiArray = null;
        tiTemp = null;
        tempShape = null;
        imageBoundsOld = null;
        ctx = null;
        buffer = null;
        // </editor-fold>
        if(svgElements.length > 0)
        {
            return {svgElements:svgElements, modifierBounds:modifierBounds};
        }
        else
        {
            return null;            
        }
    },
            
    // </editor-fold>
    
    // <editor-fold defaultstate="collapsed" desc="SPTG functions">
    /**
     * 
     * @param {type} symbolID
     * @param {type} modifiers
     * @returns {armyc2.c2sd.renderer.armyc2.c2sd.renderer.utilities.ImageInfo}
     */
    renderSPTG: function (symbolID, modifiers, fontInfo){
        // <editor-fold defaultstate="collapsed" desc="Variables">
        var render = true;
        if(modifiers["RENDER"] !== undefined)
            render = modifiers["RENDER"];
            
        if(!fontInfo)
        {
            fontInfo = RendererSettings.getFontInfo();
        }

	//ctx.font="37.5pt UnitFontsC"; //50 / 96 * 72
	//ctx.font="150pt UnitFontsC"; // * 4 (because font file is 25% of original)
        var pixel = null;//point to center symbol on.
        var basicID = SymbolUtilities.getBasicSymbolIDStrict(symbolID);
        var strSPFont = "";
        var symStd = modifiers[MilStdAttributes.SymbologyStandard];
        var keepUnitRatio = true;
        var intFill = -1;
        var intFrame = -1;
        var fillColor = null;
        var lineColor = SymbolUtilities.getLineColorOfAffiliation(symbolID).toHexString(false);
        var alpha = 1.0,
            lineAlpha = 1.0,
            fillAlpha = 1.0;
	    var fill = null;
	    var frame = null;

        
        var hasDisplayModifiers = false;
        var hasTextModifiers = false;
        var symbolOutlineWidth = RendererSettings.getSinglePointSymbolOutlineWidth();
        
        
        
        // <editor-fold defaultstate="collapsed" desc="Parse Modifiers">
        //determine font size necessary to match desired pixel size/////////////
        var pixelSize = -1;
        if(modifiers[MilStdAttributes.PixelSize])
        {
            pixelSize = modifiers[MilStdAttributes.PixelSize];
        }
        else
        {
            pixelSize = RendererSettings.getDefaultPixelSize();
        }
        if(modifiers[MilStdAttributes.KeepUnitRatio] !== undefined)
        {
            keepUnitRatio = modifiers[MilStdAttributes.KeepUnitRatio];
        }
        
        //Check if we need to set 'N' to "ENY"
        if(symbolID.charAt(1).toUpperCase()==="H")
        {
            modifiers[ModifiersTG.N_HOSTILE] = "ENY";
        }
        
        var icon = false;
        if(modifiers[MilStdAttributes.Icon] !== undefined)
        {
            icon = modifiers[MilStdAttributes.Icon];
        }
        
        if(icon)//icon won't show modifiers or display icons
        {
            keepUnitRatio = false;
            hasDisplayModifiers = false;
            hasTextModifiers = false;
            symbolOutlineWidth = 0;
        }
        else
        {
            hasDisplayModifiers = this.hasDisplayModifiers(symbolID, modifiers);
            hasTextModifiers = this.hasTextModifiers(symbolID, modifiers);
        }
        
        if(modifiers[MilStdAttributes.LineColor] !== undefined)
        {
            lineColor = modifiers[MilStdAttributes.LineColor];
            lineColor = armyc2.c2sd.renderer.utilities.Color.getColorFromHexString(lineColor);
            lineAlpha = lineColor.getAlpha() / 255.0;
            lineColor = lineColor.toHexString(false);
        }
        if(modifiers[MilStdAttributes.FillColor] !== undefined)
        {
            fillColor = modifiers[MilStdAttributes.FillColor];
            fillColor = armyc2.c2sd.renderer.utilities.Color.getColorFromHexString(fillColor);
            fillAlpha = fillColor.getAlpha() / 255.0;
            fillColor = fillColor.toHexString(false);
        }
        if(modifiers[MilStdAttributes.Alpha] !== undefined)
        {
            alpha = modifiers[MilStdAttributes.Alpha] / 255.0;
            if(alpha !== 1)
            {
                lineAlpha = alpha;
                fillAlpha = alpha;
            }
        }
        
        var outlineOffset = symbolOutlineWidth;
        if(outlineOffset > 2)//symbol outline is only ever 0 or 1 for SVG
            outlineOffset = 1;//(outlineOffset-1)/2;
        else
            outlineOffset = 0;

        
        
        // </editor-fold>
        
        var spli = SinglePointLookup.getSPLookupInfo(symbolID,symStd);

        if(spli === null)//default to action point on bad symbolID
        {
                if(modifiers===null)
                        modifiers = {};
                if(modifiers.H !== undefined)
                        modifiers[ModifiersTG.H1_ADDITIONAL_INFO_2] = modifiers[ModifiersTG.H_ADDITIONAL_INFO_1];
                modifiers[ModifiersTG.H_ADDITIONAL_INFO_1] = symbolID.substring(0,10);

                symbolID = "G" + SymbolUtilities.getAffiliation(symbolID) + 
                        "G" + SymbolUtilities.getStatus(symbolID) + "GPP---****X";
                spli = SinglePointLookup.getSPLookupInfo(symbolID,symStd);
        }
        
        // <editor-fold defaultstate="collapsed" desc="Determine font size">
        
        var symbolBounds = null,
            rect = null;
        
        var ratio = 1;
        
        intFrame = SinglePointLookup.getCharCodeFromSymbol(symbolID,symStd);

        if(pixelSize > 0)
        {
            symbolBounds = SymbolSVGDimensions.getSymbolBounds(symbolID, intFrame);
            rect = symbolBounds.clone();

            if(keepUnitRatio===true)
            {
               //scale it somehow for consistency with units.

               //when SymbolSizeMedium = 80;
               //a pixel size of 35 = scale value of 1.0
                //pixelSize = pixelSize * 1.4;
                ratio = pixelSize / 1400;
                               
            }
            else
            {
                //adjust size
                ratio = Math.min((pixelSize / rect.getHeight()), (pixelSize / rect.getWidth()));
            }

            

        }
       
        
        var symbolWidth = Math.ceil(symbolBounds.getWidth() * ratio),
            symbolHeight = Math.ceil(symbolBounds.getHeight() * ratio);

        
        var offsetX = Math.ceil(-symbolBounds.getX()),
            offsetY = Math.ceil(-symbolBounds.getY());
        
        var fillID = null;
        if(SymbolUtilities.hasDefaultFill(symbolID) && fillColor === null)
        {
            fillColor = SymbolUtilities.getFillColorOfAffiliation(symbolID).toHexString(false);
        }
        if(SymbolUtilities.isTGSPWithFill(symbolID))
        {
            fillID = SymbolUtilities.getTGFillSymbolCode(symbolID);
            if(fillID !== null)
                intFill = SinglePointLookup.getCharCodeFromSymbol(fillID,symStd);
        }
        else if(SymbolUtilities.isWeatherSPWithFill(symbolID))
        {
            intFill = intFrame + 1;
            fillColor = SymbolUtilities.getFillColorOfWeather(symbolID).toHexString(false);

        }
        
        var x = Math.ceil((-symbolBounds.getX() * ratio) + outlineOffset),
            y = Math.ceil((-symbolBounds.getY() * ratio) + outlineOffset);
        
        symbolBounds = new SO.Rectangle(outlineOffset,outlineOffset,symbolWidth,symbolHeight);
        
        symbolWidth = Math.ceil(symbolBounds.getWidth()) + (outlineOffset*2);
        symbolHeight = Math.ceil(symbolBounds.getHeight()) + (outlineOffset*2);
    
        var imageBounds = new SO.Rectangle(0,0,symbolWidth,symbolHeight);
    
        
        var centerPoint = new SO.Point(x, y);
        
        var tgPaths = [];
        
        /*if(outlineOffset>0)//svg symbol outline is only ever 0 or 1.
        {
            centerPoint.shift(outlineOffset,outlineOffset);
            x += outlineOffset;
            y += outlineOffset;
            symbolBounds.shift(outlineOffset,outlineOffset);
            symbolBounds.grow(outlineOffset);
        }//*/
        
        if(intFill > 0)
        {
            fill = SPSVGTable.getSVGPath(intFill);
        }
        if(intFrame > 0)
        {
            frame = SPSVGTable.getSVGPath(intFrame);
        }
        
        //do outline first if present
        var seBGGroup = null;
        if(render === true)
        {
            //if(alpha < 1.0)
                //ctx.globalAlpha = alpha;
            
            if(outlineOffset > 0 && frame !== null)
            {
                var oc =RendererUtilities.getIdealOutlineColor(lineColor,true);
                var ol = this.processSVGPath(frame, oc,null,null,null,null,null,lineAlpha);
                //tgPaths.push(ol);
                seBGGroup = '<g transform="translate(' + (x - 1) + ',' + (y - 1) +') scale(' + ratio + ',-' + ratio +')">' + ol + '</g>';
                seBGGroup += '<g transform="translate(' + (x + 1) + ',' + (y - 1) +') scale(' + ratio + ',-' + ratio +')">' + ol + '</g>';
                seBGGroup += '<g transform="translate(' + (x + 1) + ',' + (y + 1) +') scale(' + ratio + ',-' + ratio +')">' + ol + '</g>';
                seBGGroup += '<g transform="translate(' + (x - 1) + ',' + (y + 1) +') scale(' + ratio + ',-' + ratio +')">' + ol + '</g>';
                
            }
            //then do fill if present
            if(fill !== null &&  fillColor !== null)
            {
                fill = this.processSVGPath(fill, fillColor,null,null,null,null,null,fillAlpha);
                tgPaths.push(fill);
            }
            //then draw frame
            if(frame !== null)
            {
                frame = this.processSVGPath(frame, lineColor,null,null,null,null,null,lineAlpha);
                tgPaths.push(frame);
            }
        }
        
        var seGroupTG = '<g transform="translate(' + (x) + ',' + (y) +') scale(' + ratio + ',-' + ratio +')"';
        /*if(alpha !== 1.0)
            seGroupTG +=  ' fill-opacity="' + alpha + '">';
        else//*/
            seGroupTG +=  '>';
         
        if(seBGGroup)
            seGroupTG = seBGGroup + seGroupTG;
        for(var i = 0; i < tgPaths.length; i++)
        {
            seGroupTG += tgPaths[i];
        }
        seGroupTG += '</g>';

        var si = new SVGInfo(seGroupTG,centerPoint,symbolBounds,imageBounds);
        
        //Process Modifiers
        var svgElements = null;
        var svgElementInfo = null;
        var svgElementsDOM = [];
        var siNew = null;
        if(icon === false && (hasTextModifiers || hasDisplayModifiers || SymbolUtilities.isTGSPWithIntegralText(symbolID)))
        {
            if(SymbolUtilities.isTGSPWithSpecialModifierLayout(symbolID) || 
                SymbolUtilities.isTGSPWithIntegralText(symbolID))
            {
                svgElementInfo = this.ProcessTGSPWithSpecialModifierLayout(si,symbolID,modifiers, lineColor,fontInfo);
            }
            else 
            {
                svgElementInfo = this.ProcessTGSPModifiers(si,symbolID,modifiers, lineColor,fontInfo);
            }

        }
        
        var returnSVG = "";
        if(svgElementInfo != null)
        {
            svgElements = svgElementInfo.svgElements;
            imageBounds = svgElementInfo.modifierBounds;

            if(svgElementInfo.hasDOMArrow)
            {
                svgElementsDOM.push(svgElements.pop());
                svgElementsDOM.push(svgElements.pop());
            }
        }
        else
        {
            svgElements = [];
        }
        if(svgElements.length > 0 || svgElementsDOM.length > 0)
        {
            var domSE = [];
            for(var k = 0; k < svgElements.length; k++)
            {
                returnSVG += svgElements[k] + "\n";    
            }
            returnSVG += seGroupTG + "\n";
            if(svgElementsDOM.length > 0)
            {
                returnSVG += svgElementsDOM[0] + "\n";
                returnSVG += svgElementsDOM[1] + "\n";
            }
            
            //make group with translation
            var shiftX = -imageBounds.getX();
            var shiftY = -imageBounds.getY();
            //shift bounds and center point
            imageBounds.shift(shiftX,shiftY);
            symbolBounds.shift(shiftX,shiftY);
            centerPoint.shift(shiftX,shiftY);
            //combine with returnSVG
            //wrap in SVG tag
            
            returnSVG = '<svg width="' + imageBounds.getWidth() + 'px" height="' + imageBounds.getHeight() + 'px" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" version="1.1">'
                        + '<g transform="translate(' + shiftX + ',' + shiftY + ')">'
                        + returnSVG; 
            returnSVG += '</g>';
            returnSVG += '</svg>';//*/
            
            /*returnSVG = '<svg width="' + imageBounds.getWidth() + 'px" height="' + imageBounds.getHeight() + 'px" viewbox="' + imageBounds.getX()  + ' ' + imageBounds.getY() + ' ' + imageBounds.getWidth() + ' ' + imageBounds.getHeight() +  '" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" version="1.1">'
                        + '<g transform="translate(' + shiftX + ',' + shiftY + ')">'
                        + returnSVG; 
            returnSVG += '</svg>';//*/
        }
        else
        {
            returnSVG = '<svg width="' + imageBounds.getWidth() + 'px" height="' + imageBounds.getHeight() + 'px" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" version="1.1">';
            returnSVG += seGroupTG;
            returnSVG += '</svg>';
        }
        

        si = new SVGInfo(returnSVG,centerPoint,symbolBounds,imageBounds);
        if(icon)
            return si;//si.getSquareImageInfo();
        else
            return si;
    },
    /**
     * 
     * @param {ImageInfo} ii
     * @param {String} symbolID
     * @param {Object} modifiers
     * @param {String} overrideColor like "#000000"
     * @returns {ImageInfo}
     */        
    ProcessTGSPWithSpecialModifierLayout: function(si,symbolID,modifiers, overrideColor, fontInfo){
    
        // <editor-fold defaultstate="collapsed" desc="Variables">
        var render = true;
        if(modifiers["RENDER"] !== undefined)
            render = modifiers["RENDER"];
        
        var bufferXL = 5,
            bufferXR = 5,
            bufferY = 2,
            bufferText = 2,
            centerOffset = 1, //getCenterX/Y function seems to go over by a pixel
            x = 0,
            y = 0,
            x2 = 0,
            y2 = 0,
            symStd = modifiers[MilStdAttributes.SymbologyStandard],
            outlineOffset = RendererSettings.getTextOutlineWidth(),
            labelHeight = 0,
            labelWidth = 0,
            newii = null;
    
        var arrMods = new Array();
        var svgElements = [];
        var duplicate = false;
        
        var symbolBounds = si.getSymbolBounds().clone(),
            bounds = symbolBounds.clone(),
            imageBounds = si.getSVGBounds().clone(),
            centerPoint = si.getAnchorPoint().clone();
			
		var textColor = overrideColor,
			textBackgroundColor = null;
    
        centerPoint = new SO.Point(Math.round(si.getAnchorPoint().getX()),Math.round(si.getAnchorPoint().getY()));
    
        var byLabelHeight = false;
        labelHeight = fontInfo.measurements.height;
        labelHeight = Math.round(labelHeight);
        var maxHeight = (bounds.height);
        if((labelHeight * 3) > maxHeight)
            byLabelHeight = true;
        
        var descent = fontInfo.measurements.descent;
        var yForY = -1;
        
        var labelBounds1 = null,//text.getPixelBounds(null, 0, 0);
            labelBounds2 = null,
            strText = "",
            strText1 = "",
            strText2 = "",
            text1 = null,
            text2 = null;

        var basicID = SymbolUtilities.getBasicSymbolIDStrict(symbolID);
        
        if(outlineOffset > 2)
            outlineOffset = ((outlineOffset - 1) /2);
        else
            outlineOffset = 0;
        
        bufferXL += outlineOffset;
        bufferXR += outlineOffset;
        bufferY += outlineOffset;
        bufferText += outlineOffset;//*/
                
        // </editor-fold>
    
        // <editor-fold defaultstate="collapsed" desc="Process Integral Text">
        if(basicID===("G*G*GPRD--****X"))//DLRP (D)
        {

            strText1 = "D";
            
            text1 = new SVGTextInfo(strText1,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo,"end");
            
            labelBounds1 = text1.getBounds();
            if(symStd === RendererSettings.Symbology_2525Bch2_USAS_13_14)
            {
                y = symbolBounds.getY() + symbolBounds.getHeight();
                x = symbolBounds.getX() - bufferXL;
                text1.setLocation(Math.round(x),Math.round(y));
            }
            else//2525C built in
            {
                text1=null;
                //y = symbolBounds.getY() + symbolBounds.getHeight() - bufferY;
                //x = symbolBounds.getX() + symbolBounds.getWidth()/2 - labelBounds1.getWidth()/2;
            }
            
            //ErrorLogger.LogMessage("D: " + String.valueOf(x)+ ", " + String.valueOf(y));
        }
        else if (basicID===("G*G*APU---****X")) //pull-up point (PUP)
        {
            strText1 = "PUP";
            text1 = new SVGTextInfo(strText1,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo);
            
            labelBounds1 = text1.getBounds();
            y = symbolBounds.getCenterY() + ((labelBounds1.getHeight() - descent)/2);
            x = symbolBounds.getX() + symbolBounds.getWidth() + bufferXR;
            
            text1.setLocation(Math.round(x),Math.round(y));
        }
        else if(basicID===("G*M*NZ----****X")) //Nuclear Detonation Ground Zero (N)
        {
//                strText1 = "N";
//                text1 = new TextLayout(strText1, labelFont, frc);
//                labelBounds1 = text1.getPixelBounds(null, 0, 0);
//                y = symbolBounds.getY() + (symbolBounds.getHeight() * 0.8) - centerOffset;
//                x = symbolBounds.getCenterX() - centerOffset - (labelBounds1.getWidth()/2);
        }
        else if(basicID===("G*M*NF----****X"))//Fallout Producing (N)
        {
//                strText1 = "N";
//                text1 = new TextLayout(strText1, labelFont, frc);
//                descent = text1.getDescent();
//                labelBounds1 = text1.getPixelBounds(null, 0, 0);
//                y = symbolBounds.getY() + (symbolBounds.getHeight() * 0.8) - centerOffset;
//                x = symbolBounds.getCenterX() - centerOffset - (labelBounds1.getWidth()/2);
        }
        else if(basicID===("G*M*NEB---****X"))//Release Events Biological (BIO, B)
        {
            //strText1 = "B";
            //text1 = new TextLayout(strText1, labelFont, frc);
            var offset = 1;
            strText2 = "BIO";
            text2 = new SVGTextInfo(strText2,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo,"end");

            labelBounds2 = text2.getBounds();
            //y = symbolBounds.getY() + (symbolBounds.getHeight() * 0.9);
            //x = symbolBounds.getCenterX() - centerOffset - (labelBounds1.getWidth()/2);
            
            y2 = symbolBounds.getCenterY() + ((labelBounds2.getHeight() - descent)*0.5);
            
            x2 = symbolBounds.getX() - bufferXL;

            text2.setLocation(Math.round(x2),Math.round(y2-offset));
            //ErrorLogger.LogMessage("BIO: " + String.valueOf(x2)+ ", " + String.valueOf(y2));
        }
        else if(basicID===("G*M*NEC---****X"))//Release Events Chemical (CML, C)
        {
            //strText1 = "C";
            //text1 = new TextLayout(strText1, labelFont, frc);
            var offset = 1;
            strText2 = "CML";
            text2 = new SVGTextInfo(strText2,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo,"end");
            
            labelBounds2 = text2.getBounds();
            //y = symbolBounds.getY() + (symbolBounds.getHeight() * 0.9);
            //x = symbolBounds.getCenterX() - centerOffset - (labelBounds1.getWidth()/2);

            y2 = symbolBounds.getCenterY() + ((labelBounds2.getHeight() - descent)/2);

            x2 = symbolBounds.getX() - bufferXL;
            
            text2.setLocation(Math.round(x2),Math.round(y2-offset));
        }
        if(text1 !== null)
        {
            arrMods.push(text1);
        }
        if(text2 !== null)
        {
            arrMods.push(text2);
        }
        
        // </editor-fold>
        
        // <editor-fold defaultstate="collapsed" desc="Process Special Modifiers">
        var ti = null;
        if(basicID ===("G*M*NZ----****X") ||//ground zero
                basicID ===("G*M*NEB---****X") ||//biological
                basicID ===("G*M*NEC---****X"))//chemical
        {
            if((labelHeight * 3) > bounds.getHeight())
                    byLabelHeight = true;
        }

        if(basicID ===("G*G*GPPC--****X") ||
                basicID ===("G*G*GPPD--****X"))
        {
            if(modifiers[ModifiersTG.T_UNIQUE_DESIGNATION_1])
            {
                strText = modifiers[ModifiersTG.T_UNIQUE_DESIGNATION_1];
                ti = new SVGTextInfo(strText,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo,"middle");
                labelWidth = Math.round(ti.getTextBounds().getWidth());
                //One modifier symbols and modifier goes in center
                x = bounds.x + (bounds.width * 0.5);
                y = bounds.y + (bounds.height * 0.4);
                y = y + (labelHeight * 0.5);
                
                ti.setLocation(Math.round(x),Math.round(y));
                arrMods.push(ti);
            }
        }
		else if(basicID === "G*G*GPH---****X")       
        {
            if(modifiers[ModifiersTG.H_ADDITIONAL_INFO_1])
            {
                strText = modifiers[ModifiersTG.H_ADDITIONAL_INFO_1];
                ti = new SVGTextInfo(strText,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo,"middle");
                labelWidth = Math.round(ti.getTextBounds().getWidth());
                //One modifier symbols and modifier goes in center
                x = bounds.x + (bounds.width * 0.5);
                y = bounds.y + (bounds.height * 0.5);
                y = y + (labelHeight * 0.5);
                
                ti.setLocation(Math.round(x),Math.round(y));
                arrMods.push(ti);
            }
        }
        else if(basicID ===("G*G*GPRI--****X"))
        {
            if(modifiers.T)
            {
                strText = modifiers[ModifiersTG.T_UNIQUE_DESIGNATION_1];
                ti = new SVGTextInfo(strText,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo,"middle");
                labelWidth = Math.round(ti.getTextBounds().getWidth());
                //One modifier symbols, top third & center
                x = bounds.x + (bounds.width * 0.5);
                y = bounds.y + (bounds.height * 0.25);
                y = y + (labelHeight * 0.5);
                
                ti.setLocation(Math.round(x),Math.round(y));
                arrMods.push(ti);
            }
        }
        else if(basicID ===("G*G*GPPW--****X") ||
                basicID ===("G*F*PCF---****X"))
        {
            if(modifiers.T)
            {
                strText = modifiers[ModifiersTG.T_UNIQUE_DESIGNATION_1];
                ti = new SVGTextInfo(strText,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo);
                
                //One modifier symbols and modifier goes right of center
                x = bounds.x + (bounds.width * 0.75);
                y = bounds.y + (bounds.height * 0.5);
                y = y + ((labelHeight-descent) * 0.5);

                ti.setLocation(Math.round(x),Math.round(y));
                arrMods.push(ti);
            }
        }
        else if(basicID ===("G*G*APP---****X") ||
                basicID ===("G*G*APC---****X"))
        {
            if(modifiers.T)
            {
                strText = modifiers[ModifiersTG.T_UNIQUE_DESIGNATION_1];
                ti = new SVGTextInfo(strText,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo,"middle");
                var labelWidth = ti.getTextBounds().getWidth();
                //One modifier symbols and modifier goes just below of center
                x = bounds.x + (bounds.width * 0.5);
                y = bounds.y + (bounds.height * 0.5);
                y = y + (((bounds.height * 0.5) - labelHeight)/2) + labelHeight - descent;
                
                
                ti.setLocation(Math.round(x),Math.round(y));
                arrMods.push(ti);
            }
        }
        else if(basicID ===("G*G*DPT---****X") || //T (target reference point)
                basicID ===("G*F*PTS---****X") || //t,h,h1 (Point/Single Target)
                basicID ===("G*F*PTN---****X")) //T (nuclear target)
        { //Targets with special modifier positions
            if(modifiers.H && basicID ===("G*F*PTS---****X"))//H
            {
                strText = modifiers[ModifiersTG.H_ADDITIONAL_INFO_1];
                ti = new SVGTextInfo(strText,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo);
                
                x = bounds.getCenterX() + (bounds.width * 0.15);
                y = bounds.y + (bounds.height * 0.75);
                y = y + (labelHeight * 0.5);
                
                ti.setLocation(Math.round(x),Math.round(y));
                arrMods.push(ti);
            }
            if(modifiers.H1 && basicID === ("G*F*PTS---****X"))//H1
            {
                strText = modifiers[ModifiersTG.H1_ADDITIONAL_INFO_2];
                ti = new SVGTextInfo(strText,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo,"end");
                labelWidth = Math.round(ti.getTextBounds().getWidth());
                x = bounds.getCenterX() - (bounds.width * 0.15);
                y = bounds.y + (bounds.height * 0.75);
                y = y + (labelHeight * 0.5);
                
                ti.setLocation(Math.round(x),Math.round(y));
                arrMods.push(ti);
            }
            if(modifiers.T)//T
            {
                strText = modifiers[ModifiersTG.T_UNIQUE_DESIGNATION_1];
                ti = new SVGTextInfo(strText,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo);

                x = bounds.getCenterX() + (bounds.width * 0.15);
                y = bounds.y + (bounds.height * 0.25);
                y = y + (labelHeight * 0.5);

                ti.setLocation(Math.round(x),Math.round(y));
                arrMods.push(ti);
            }

        }
        else if(basicID ===("G*M*NZ----****X") ||//ground zero
                basicID ===("G*M*NEB---****X") ||//biological
                basicID ===("G*M*NEC---****X"))//chemical
        {//NBC
            if(modifiers.N)
            {
                strText = modifiers[ModifiersTG.N_HOSTILE];
                ti = new SVGTextInfo(strText,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo);
                
                x = bounds.x + bounds.width + bufferXR;

                if(!byLabelHeight)
                {
                    y = bounds.y + bounds.height;
                }
                else
                {
                    y = bounds.y + ((bounds.height * 0.5) + ((labelHeight-descent) * 0.5) + (labelHeight - descent + bufferText));
                }
                
                ti.setLocation(Math.round(x),Math.round(y));
                arrMods.push(ti);

            }
            if(modifiers.H)//H
            {
                strText = modifiers[ModifiersTG.H_ADDITIONAL_INFO_1];
                ti = new SVGTextInfo(strText,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo);
                
                x = bounds.x + bounds.width + bufferXR;
                if(!byLabelHeight)
                {
                    y = bounds.y + labelHeight - descent;
                }
                else
                {
                    //y = bounds.y + ((bounds.height * 0.5) + (labelHeight * 0.5) - (labelHeight + bufferText));
                    y = bounds.y + ((bounds.height * 0.5) - ((labelHeight-descent) * 0.5) + ( - descent - bufferText));
                }
                
                ti.setLocation(Math.round(x),Math.round(y));
                arrMods.push(ti);
            }
            if(modifiers.W)//W
            {
                strText = modifiers[ModifiersTG.W_DTG_1];
                ti = new SVGTextInfo(strText,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo,"end");
                
                x = bounds.x - bufferXL;
                if(!byLabelHeight)
                {
                    y = bounds.y + labelHeight - descent;
                }
                else
                {
                    //y = bounds.y + ((bounds.height * 0.5) + (labelHeight * 0.5) - (labelHeight + bufferText));
                    y = bounds.y + ((bounds.height * 0.5) - ((labelHeight-descent) * 0.5) + ( - descent - bufferText));
                }
                
                ti.setLocation(Math.round(x),Math.round(y));
                arrMods.push(ti);
            }
            if(modifiers.V && basicID ===("G*M*NZ----****X"))//V
            {
                strText = modifiers[ModifiersTG.V_EQUIP_TYPE];
                ti = new SVGTextInfo(strText,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo,"end");
                
                //subset of nbc, just nuclear
                x = bounds.x - bufferXL;
                y = bounds.y + ((bounds.height * 0.5) + ((labelHeight - descent) * 0.5));//((bounds.height / 2) - (labelHeight/2));
                
                ti.setLocation(Math.round(x),Math.round(y));
                arrMods.push(ti);
            }
            if(modifiers.T)//T
            {
                strText = modifiers[ModifiersTG.T_UNIQUE_DESIGNATION_1];
                ti = new SVGTextInfo(strText,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo,"end");
                x = bounds.x - bufferXL;
                if(!byLabelHeight)
                {
                    y = bounds.y + bounds.height;
                }
                else
                {
                    //y = bounds.y + ((bounds.height * 0.5) + ((labelHeight-descent) * 0.5) + (labelHeight + bufferText));
                    y = bounds.y + ((bounds.height * 0.5) + ((labelHeight-descent) * 0.5) + (labelHeight - descent + bufferText));
                }
                ti.setLocation(Math.round(x),Math.round(y));
                arrMods.push(ti);
            }
            if(modifiers.Y)//Y
            {
                strText = modifiers[ModifiersTG.Y_LOCATION];
                ti = new SVGTextInfo(strText,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo,"middle");

                //just NBC
                x = bounds.x + (bounds.width * 0.5);

                if(!byLabelHeight)
                {
                    y = bounds.y + bounds.height + labelHeight + bufferY;
                }
                else
                {
                    y = bounds.y + ((bounds.height * 0.5) + ((labelHeight-descent) * 0.5) + ((labelHeight + bufferText)*2));
                    
                }
                yForY = y + descent; //so we know where to start the DOM arrow.
                ti.setLocation(Math.round(x),Math.round(y));
                arrMods.push(ti);

            }
            if(modifiers.C)//C
            {
                strText = modifiers[ModifiersTG.C_QUANTITY];
                ti = new SVGTextInfo(strText,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo,"middle");
                //subset of NBC, just nuclear
                x = bounds.x + (bounds.width * 0.5);
                y = bounds.y - bufferY - descent;
                ti.setLocation(Math.round(x),Math.round(y));
                arrMods.push(ti);

            }
        }
        else if(basicID ===("G*M*OFS---****X"))
        {
            if(modifiers.H)//H
            {
                strText = modifiers[ModifiersTG.H_ADDITIONAL_INFO_1];
                ti = new SVGTextInfo(strText,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo,"middle");
                x = bounds.x + (bounds.width * 0.5);
                y = bounds.y - descent;// + (bounds.height * 0.5);
                //y = y + (labelHeight * 0.5);
                
                ti.setLocation(Math.round(x),Math.round(y));
                arrMods.push(ti);

            }
            if(modifiers.W)//W
            {
                strText = modifiers[ModifiersTG.W_DTG_1];
                ti = new SVGTextInfo(strText,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo,"middle");
                x = bounds.x + (bounds.width * 0.5);
                y = bounds.y + (bounds.height);
                y = y + (labelHeight);
                
                ti.setLocation(Math.round(x),Math.round(y));
                arrMods.push(ti);
            }
            if(modifiers.N)
            {
                strText = modifiers[ModifiersTG.N_HOSTILE];
                ti = new SVGTextInfo(strText,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo);
                var ti2 = new SVGTextInfo(strText,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo,"end");
                x = bounds.x + (bounds.width) + bufferXR;//right
                //x = x + labelWidth;//- (labelBounds.width * 0.75);

                duplicate = true;

                x2 = bounds.x;//left
                x2 = x2 - bufferXL;// - (labelBounds.width * 0.25);

                y = bounds.y + (bounds.height * 0.5);//center
                y = y + ((labelHeight - descent) * 0.5);

                y2 = y;
                
                ti.setLocation(Math.round(x),Math.round(y));
                ti2.setLocation(Math.round(x2),Math.round(y2));
                arrMods.push(ti);
                arrMods.push(ti2);
            }

        }
        // </editor-fold>
        
        // <editor-fold defaultstate="collapsed" desc="DOM Arrow">
        var domPoints = null,
            domBounds = null;
        if(modifiers[ModifiersTG.Q_DIRECTION_OF_MOVEMENT] !== undefined &&
            (basicID ===("G*M*NZ----****X") ||//ground zero
                basicID ===("G*M*NEB---****X") ||//biological
                basicID ===("G*M*NEC---****X")))//chemical)
        {
            var q = modifiers[ModifiersTG.Q_DIRECTION_OF_MOVEMENT];
            var tempBounds = bounds.clone();
            tempBounds.unionPoint(new SO.Point(bounds.getCenterX(),yForY));
            
            domPoints = this.createDOMArrowPoints(symbolID, tempBounds,si.getAnchorPoint(), q, false);

            domBounds = new SO.Rectangle(domPoints[0].getX(),domPoints[0].getY(),1,1);

            var temp = null;
            for(var i = 1; i < 6; i++)
            {
                temp = domPoints[i];
                if(temp !== null)
                    domBounds.unionPoint(temp);
            }
            imageBounds.union(domBounds);
        }
        // </editor-fold>
        
        // <editor-fold defaultstate="collapsed" desc="Shift Points and Draw">
        var modifierBounds = null;
        if(arrMods !== null && arrMods.length > 0)
        {

            //build modifier bounds/////////////////////////////////////////
            modifierBounds = imageBounds.clone();
            modifierBounds.union(arrMods[0].getOutlineBounds());
            var size = arrMods.length;
            var tempShape = null;
            for(var i=1; i<size;i++)
            {
                tempShape = arrMods[i];
                modifierBounds.union(tempShape.getOutlineBounds());
            }

        }


        if(modifierBounds !== null || domBounds !== null){

            imageBounds.union(modifierBounds);
            imageBounds.union(domBounds);
            
            if(render === true)
            {

				if(modifiers[MilStdAttributes.TextColor])
					textColor = modifiers[MilStdAttributes.TextColor];
				if(modifiers[MilStdAttributes.TextBackgroundColor])
					textBackgroundColor = modifiers[MilStdAttributes.TextBackgroundColor];

                svgElements = this.renderTextElement(arrMods, textColor, textBackgroundColor);

                //draw DOM arrow
                var hasDOMArrow = false;
                if(domBounds !== null)
                {
                    /*ctx.lineWidth = 2;
                    ctx.lineCap = "butt";
                    ctx.lineJoin = "miter";
                    ctx.strokeStyle = "#000000";//*/
                                        
                    var linePath = new SO.Path();
                    linePath.moveTo(domPoints[0].getX(),domPoints[0].getY());
                    if(domPoints[1] !== null)
                        linePath.lineTo(domPoints[1].getX(),domPoints[1].getY());
                    if(domPoints[2] !== null)
                        linePath.lineTo(domPoints[2].getX(),domPoints[2].getY());
                        
                    svgElements.push(linePath.toSVGElement('#000000',2,null));
                    
                    var arrowPath = new SO.Path();
                    arrowPath.moveTo(domPoints[3].getX(),domPoints[3].getY());
                    arrowPath.lineTo(domPoints[4].getX(),domPoints[4].getY());
                    arrowPath.lineTo(domPoints[5].getX(),domPoints[5].getY());
                    arrowPath.closePath();
                    
                    svgElements.push(arrowPath.toSVGElement(null,null,'#000000'));
                    hasDOMArrow = true;
                }
            }
            
            if(svgElements !== null && svgElements.length > 0)
                return {svgElements:svgElements, modifierBounds:imageBounds, hasDOMArrow:hasDOMArrow};
            else
                return null;
        }
        else 
            return null;
        // </editor-fold>

    },
    /**
     * 
     * @param {ImageInfo} ii
     * @param {String} symbolID
     * @param {Object} modifiers
     * @param {String} overrideColor like "#000000"
     * @returns {ImageInfo}
     */        
    ProcessTGSPModifiers: function(si,symbolID,modifiers, overrideColor,fontInfo){
    
        // <editor-fold defaultstate="collapsed" desc="Variables">
        var render = true;
        if(modifiers["RENDER"] !== undefined)
            render = modifiers["RENDER"];
        
        var bufferXL = 5,
            bufferXR = 5,
            bufferY = 2,
            bufferText = 2,
            centerOffset = 1, //getCenterX/Y function seems to go over by a pixel
            x = 0,
            y = 0,
            x2 = 0,
            y2 = 0,
            symStd = modifiers[MilStdAttributes.SymbologyStandard],
            outlineWidth = RendererSettings.getTextOutlineWidth(),
            outlineOffset = RendererSettings.getTextOutlineWidth(),
            labelHeight = 0,
            labelWidth = 0,
            newii = null;
    
        var arrMods = new Array();
        var svgElements = [];
        var duplicate = false;
        
        var symbolBounds = si.getSymbolBounds().clone(),
            bounds = symbolBounds.clone(),
            imageBounds = si.getSVGBounds().clone(),
            centerPoint = si.getAnchorPoint().clone();
			
		var textColor = overrideColor,
			textBackgroundColor = null;
    
        centerPoint = new SO.Point(Math.round(si.getAnchorPoint().getX()),Math.round(si.getAnchorPoint().getY()));
    
        var byLabelHeight = false;
        labelHeight = fontInfo.measurements.height;
        labelHeight = Math.round(labelHeight);
        var maxHeight = (bounds.height);
        if((labelHeight * 3) > maxHeight)
            byLabelHeight = true;
        
        var descent = fontInfo.measurements.descent;
        var yForY = -1;
        
        var labelBounds1 = null,//text.getPixelBounds(null, 0, 0);
            labelBounds2 = null,
            strText = "",
            strText1 = "",
            strText2 = "",
            text1 = null,
            text2 = null;

        var basicID = SymbolUtilities.getBasicSymbolIDStrict(symbolID);
        
        if(outlineOffset > 2)
            outlineOffset = ((outlineOffset - 1) /2);
        else
            outlineOffset = 0;
        
        bufferXL += outlineOffset;
        bufferXR += outlineOffset;
        bufferY += outlineOffset;
        bufferText += outlineOffset;
        
        
        // </editor-fold>
            
        // <editor-fold defaultstate="collapsed" desc="Process Modifiers">
        var ti = null;
        
        {
            if(modifiers.N)
            {
                strText = modifiers[ModifiersTG.N_HOSTILE];
                ti = new SVGTextInfo(strText,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo);
                
                x = bounds.x + bounds.width + bufferXR;

                if(!byLabelHeight)
                {
                    y = ((bounds.height / 3) * 2);//checkpoint, get box above the point
                    y = bounds.y + y;
                }
                else
                {
                    //y = ((labelHeight + bufferText) * 3);
                    //y = bounds.y + y - descent;
                    y = bounds.y + bounds.height;
                }
                
                ti.setLocation(x,y);
                arrMods.push(ti);

            }
            if(modifiers.H)//H
            {
                strText = modifiers[ModifiersTG.H_ADDITIONAL_INFO_1];
                ti = new SVGTextInfo(strText,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo,"middle");
                
                x = bounds.x + (bounds.width * 0.5);
                y = bounds.y - descent - outlineOffset - bufferY;
                
                ti.setLocation(x,y);
                arrMods.push(ti);
            }
            if(modifiers.H1)//H1
            {//pretty much just for Action Point
                strText = modifiers[ModifiersTG.H1_ADDITIONAL_INFO_2];
                ti = new SVGTextInfo(strText,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo,"middle");
                
                x = bounds.x + (bounds.width * 0.5);
                y = bounds.y + labelHeight + (bounds.height*0.2);
                
                ti.setLocation(x,y);
                arrMods.push(ti);
            }
            if(modifiers.W)//W
            {
                strText = modifiers[ModifiersTG.W_DTG_1];
                ti = new SVGTextInfo(strText,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo,"end");
                
                x = bounds.x - bufferXL;
                y = bounds.y + labelHeight - descent;
                           
                ti.setLocation(x,y);
                arrMods.push(ti);
            }
            if(modifiers.W1)//W1
            {
                strText = modifiers[ModifiersTG.W1_DTG_2];
                ti = new SVGTextInfo(strText,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo,"end");
                
                x = bounds.x - bufferXL;
                
                y = ((labelHeight + bufferText) * 2);
                y = bounds.y + y;
                                
                ti.setLocation(x,y);
                arrMods.push(ti);
            }
            if(modifiers.T)//T
            {
                strText = modifiers[ModifiersTG.T_UNIQUE_DESIGNATION_1];
                ti = new SVGTextInfo(strText,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo);
                
                x = bounds.x + bounds.width + bufferXR;
                y = bounds.y + labelHeight - descent;
                
                ti.setLocation(x,y);
                arrMods.push(ti);
            }
            if((modifiers.T1) &&//T1
                    (basicID===("G*O*ES----****X") || //emergency distress call
                    basicID===("G*S*PP----****X") || //medevac pick-up point
                    basicID===("G*S*PX----****X")))//ambulance exchange point
            {
                strText = modifiers[ModifiersTG.T1_UNIQUE_DESIGNATION_2];
                ti = new SVGTextInfo(strText,new armyc2.c2sd.renderer.so.Point(0,0),fontInfo,"middle");
                
                //points
                x = bounds.x + (bounds.width * 0.5);

                y = ((bounds.height * 0.60));//633333333
                y = bounds.y + y;
                    
                ti.setLocation(x,y);
                arrMods.push(ti);
            }
          
        }
        
        // </editor-fold>
        
        // <editor-fold defaultstate="collapsed" desc="Shift Points and Draw">
        var modifierBounds = null;
        if(arrMods !== null && arrMods.length > 0)
        {
            if(modifiers[MilStdAttributes.TextColor])
					textColor = modifiers[MilStdAttributes.TextColor];
            if(modifiers[MilStdAttributes.TextBackgroundColor])
                textBackgroundColor = modifiers[MilStdAttributes.TextBackgroundColor];
            else
                textBackgroundColor = RendererUtilities.getIdealOutlineColor(textColor,true);

            //build modifier bounds/////////////////////////////////////////
            modifierBounds = imageBounds.clone();
            modifierBounds.union(arrMods[0].getOutlineBounds());
            var size = arrMods.length;
            var tempShape = null;
            for(var i=1; i<size;i++)
            {
                tempShape = arrMods[i];
                modifierBounds.union(tempShape.getOutlineBounds());
                //svgElements .push(tempShape.toSVGElement(textBackgroundColor,outlineWidth,textColor));
            }
            svgElements = this.renderTextElement(arrMods,textColor,textBackgroundColor);

        }
        
        if(svgElements.length > 0)
        {
            return {svgElements:svgElements, modifierBounds:modifierBounds};
        }
        else
        {
            return null;            
        }


        
        // </editor-fold>

    },
    // </editor-fold>
    
    // <editor-fold defaultstate="collapsed" desc="Support functions">
    /*createBuffer: function(width, height)
    {
	var buffer = _document.createElement('canvas');
	buffer.width = width;
	buffer.height = height;
        
	return buffer;
	
    },//*/
    getYPositionForSCC: function(symbolID)
    {
        var yPosition = 0.32;
        var temp = symbolID.substring(4, 10);
        var affiliation = symbolID.charAt(1);

        if(temp === ("WMGC--"))//GROUND (BOTTOM) MILCO
        {
            if(affiliation === 'H' || 
                    affiliation === 'S')//suspect
                yPosition = 0.29;
            else if(affiliation === 'N' ||
                    affiliation === 'L')//exercise neutral
                yPosition = 0.32;
            else if(affiliation === 'F' ||
                    affiliation === 'A' ||//assumed friend
                    affiliation === 'D' ||//exercise friend
                    affiliation === 'M' ||//exercise assumed friend
                    affiliation === 'K' ||//faker
                    affiliation === 'J')//joker
                yPosition = 0.32;
            else
                yPosition = 0.34;
        }
        else if(temp === ("WMMC--"))//MOORED MILCO
        {
            if(affiliation === 'H' || 
                    affiliation === 'S')//suspect
                yPosition = 0.29;
            else if(affiliation === 'N' ||
                    affiliation === 'L')//exercise neutral
                yPosition = 0.32;
            else if(affiliation === 'F' ||
                    affiliation === 'A' ||//assumed friend
                    affiliation === 'D' ||//exercise friend
                    affiliation === 'M' ||//exercise assumed friend
                    affiliation === 'K' ||//faker
                    affiliation === 'J')//joker
                yPosition = 0.32;
            else
                yPosition = 0.34;
        }
        else if(temp === ("WMFC--"))//FLOATING MILCO
        {
            if(affiliation === 'H' || 
                    affiliation === 'S')//suspect
                yPosition = 0.29;
            else if(affiliation === 'N' ||
                    affiliation === 'L')//exercise neutral
                yPosition = 0.32;
            else if(affiliation === 'F' ||
                    affiliation === 'A' ||//assumed friend
                    affiliation === 'D' ||//exercise friend
                    affiliation === 'M' ||//exercise assumed friend
                    affiliation === 'K' ||//faker
                    affiliation === 'J')//joker
                yPosition = 0.32;
            else
                yPosition = 0.34;
        }
        else if(temp === ("WMC---"))//GENERAL MILCO
        {
            if(affiliation === 'H' || 
                    affiliation === 'S')//suspect
                yPosition = 0.35;
            else if(affiliation === 'N' ||
                    affiliation === 'L')//exercise neutral
                yPosition = 0.39;
            else if(affiliation === 'F' ||
                    affiliation === 'A' ||//assumed friend
                    affiliation === 'D' ||//exercise friend
                    affiliation === 'M' ||//exercise assumed friend
                    affiliation === 'K' ||//faker
                    affiliation === 'J')//joker
                yPosition = 0.39;
            else
                yPosition = 0.39;
        }
        
        return yPosition;
    },
    /**
     * 
     * @param {type} symbolID
     * @param {type} bounds symbolBounds SO.Rectangle
     * @param {type} center SO.Point Location where symbol is centered.
     * @param {type} angle in degrees
     * @param {Boolean} isY Boolean.
     * @returns {Array} of SO.Point.  First 3 items are the line.  Last three
     * are the arrowhead.
     */
    createDOMArrowPoints: function(symbolID, bounds, center, angle, isY){
        var arrowPoints = new Array();
        var pt1 = null,
            pt2 = null,
            pt3 = null;
        
        var length = 40;
        if(SymbolUtilities.isNBC(symbolID))
            length = Math.round(bounds.getHeight() / 2);
        else
            length = bounds.getHeight();
        
        //get endpoint
        var dx2, dy2,
            x1, y1,
            x2, y2;
    
        x1 = Math.round(center.getX());
        y1 = Math.round(center.getY());
        
        pt1 = new SO.Point(x1,y1);
        
        if(SymbolUtilities.isNBC(symbolID) ||
            (SymbolUtilities.isWarfighting(symbolID) && symbolID.charAt(2)===("G")))
        {
            y1 = bounds.getY() + bounds.getHeight();
            pt1 = new SO.Point(x1,y1);
            
            if(isY === true && SymbolUtilities.isNBC(symbolID))//make room for y modifier
            {
                var yModifierOffset = RendererUtilities.measureTextHeight(RendererSettings.getModifierFontName(),
                    RendererSettings.getModifierFontSize(),
                    RendererSettings.getModifierFontStyle()).fullHeight;

                yModifierOffset += RendererSettings.getTextOutlineWidth();
                
                pt1.shift(0,yModifierOffset);
            }
            
            y1 = y1 + length;
            pt2 = new SO.Point(x1,y1);
        }
        
        //get endpoint given start point and an angle
        //x2 = x1 + (length * Math.cos(radians)));
        //y2 = y1 + (length * Math.sin(radians)));
        angle = angle - 90;//in java, east is zero, we want north to be zero
        var radians = 0;
        radians = angle * (Math.PI / 180);//convert degrees to radians
        
        dx2 = x1 + (length * Math.cos(radians));
        dy2 = (y1 + (length * Math.sin(radians)));
        x2 = Math.round(dx2);
        y2 = Math.round(dy2);
        
        //create arrowhead//////////////////////////////////////////////////////
        var arrowWidth = 8.0,//6.5f;//7.0f;//6.5f;//10.0f//default
            theta = 0.7,//0.423,//higher value == shorter arrow head
            xPoints = new Array(),//3
            yPoints = new Array(),//3
            vecLine = new Array(),//2
            vecLeft = new Array(),//2
            fLength,
            th,
            ta,
            baseX, baseY;
        
        xPoints[0] = x2;
        yPoints[0] = y2;

        //build the line vector
        vecLine[0] = (xPoints[0] - x1);
        vecLine[1] = (yPoints[0] - y1);

        //build the arrow base vector - normal to the line
        vecLeft[0] = -vecLine[1];
        vecLeft[1] = vecLine[0];

        //setup length parameters
        fLength = Math.sqrt(vecLine[0] * vecLine[0] + vecLine[1] * vecLine[1]);
        th = arrowWidth / (2.0 * fLength);
        ta = arrowWidth / (2.0 * (Math.tan(theta)/2.0)*fLength);

        //find base of the arrow
        baseX = (xPoints[0] - ta * vecLine[0]);
        baseY = (yPoints[0] - ta * vecLine[1]);

        //build the points on the sides of the arrow
        xPoints[1] = Math.round(baseX + th * vecLeft[0]);
        yPoints[1] = Math.round(baseY + th * vecLeft[1]);
        xPoints[2] = Math.round(baseX - th * vecLeft[0]);
        yPoints[2] = Math.round(baseY - th * vecLeft[1]);

        
        //line.lineTo((int)baseX, (int)baseY);
        pt3 = new SO.Point(Math.round(baseX),Math.round(baseY));
        
        //arrowHead = new Polygon(xPoints, yPoints, 3);
        arrowPoints[0] = pt1;
        arrowPoints[1] = pt2;
        arrowPoints[2] = pt3;
        arrowPoints[3] = new SO.Point(xPoints[0],yPoints[0]);
        arrowPoints[4] = new SO.Point(xPoints[1],yPoints[1]);
        arrowPoints[5] = new SO.Point(xPoints[2],yPoints[2]);
        
        return arrowPoints;
        
    },
            
    hasDisplayModifiers: function(symbolID, modifiers)
    {
        var scheme = symbolID.charAt(0);
        var status = symbolID.charAt(3);
        var affiliation = symbolID.charAt(1);
        if(scheme !== "W")
        {
            if(scheme !== "G" && SymbolUtilities.isEMSNaturalEvent(symbolID) === false)
            {
                switch (status)
                {
                    case "C":
                    case "D":
                    case "X":
                    case "F":
                        return true;
                        break;  
                }

                if((symbolID.substring(10,12)!=="--" && symbolID.substring(10,12)!=="**") || modifiers[ModifiersUnits.Q_DIRECTION_OF_MOVEMENT])
                {
                    return true;
                }
            }   
            else 
            {
                if(SymbolUtilities.isNBC(symbolID) === true && modifiers[ModifiersUnits.Q_DIRECTION_OF_MOVEMENT])
                {
                    return true;
                }
            }
            
            return false;
        }
        else
            return false;
        
    },
            
    hasTextModifiers: function(symbolID, modifiers)
    {
        var symStd  = modifiers[MilStdAttributes.SymbologyStandard] || RendererSettings.getSymbologyStandard();
        var scheme = symbolID.charAt(0);
        if(scheme==="W")
            return false;
        if(scheme==="G")
        {
            var basic = SymbolUtilities.getBasicSymbolIDStrict(symbolID);
            
            var sd = SymbolDefTable.getSymbolDef(basic, symStd);
            
            //var len = _tgTextModifierKeys.length;
            if(sd.modifiers && sd.modifiers !== "")
            {
                var tgSpecificKeys = sd.modifiers.split(".");//modifiers for this specific symbol
                var len = tgSpecificKeys.length;
            
                for(var i=0; i<len; i++)
                {
                    if(modifiers[tgSpecificKeys[i]] !== undefined)
                        return true;
                }
            }
        }
        else if(SymbolUtilities.isEMSNaturalEvent(symbolID) === false)
        {
            
            if(SymbolUtilities.getUnitAffiliationModifier(symbolID,symStd) !== null)
                return true;
            
            if(SymbolUtilities.hasValidCountryCode(symbolID))
                return true;
            
            if(SymbolUtilities.isEMSNaturalEvent(symbolID))
                return false;

            var len = _unitTextModifierKeys.length;
            for(var j=0; j<len; j++)
            {
                if(modifiers[_unitTextModifierKeys[j]] !== undefined)
                    return true;
            }
        }
        return false;
    },
    
    /**
     * renders modifier text to a canvas
     * @param {type} ctx html5 canvas context object
     * @param {type} tiArray array of TextInfo.js objects
     * @param {type} color a hex string "#000000"
     * @returns {void}
     */
    renderTextElement: function(tiArray, color, backgroundColor)
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
                svgElements.push(tempShape.toSVGElement(outlineStyle,outlineWidth,fillStyle));
            }
        }
        else if(tbm === RendererSettings.TextBackgroundMethod_OUTLINE_QUICK)
        {    //TODO: need to update, this is regular outline approach
            for(var i=0; i<size;i++)
            {
                tempShape = tiArray[i];
                svgElements.push(tempShape.toSVGElement(outlineStyle,outlineWidth,fillStyle));
            }
        }
		else if(tbm === RendererSettings.TextBackgroundMethod_COLORFILL)
		{
            for(var i=0; i<size;i++)
            {
                tempShape = tiArray[i];
                svgElements.push(tempShape.getOutlineBounds().toSVGElement(null,null,outlineStyle));
                svgElements.push(tempShape.toSVGElement(null,null,fillStyle));
            }
		}
		else //if(tbm === RendererSettings.TextBackgroundMethod_NONE)
		{
            for(var j=0; j<size;j++)
            {
                tempShape = tiArray[j];
                svgElements.push(tempShape.toSVGElement(null,null,fillStyle));
            }
		}
		
        return svgElements;     
    }

    
    // </editor-fold>
};
}());