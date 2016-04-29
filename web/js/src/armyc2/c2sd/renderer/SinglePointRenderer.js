var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
/** @class */
armyc2.c2sd.renderer.SinglePointRenderer = (function () {
    
    var SymbolUtilities = armyc2.c2sd.renderer.utilities.SymbolUtilities,
        UnitFontLookup = armyc2.c2sd.renderer.utilities.UnitFontLookup,
        RendererSettings = armyc2.c2sd.renderer.utilities.RendererSettings,
        SO = armyc2.c2sd.renderer.so,
        RendererUtilities = armyc2.c2sd.renderer.utilities.RendererUtilities,
        TextInfo = armyc2.c2sd.renderer.utilities.TextInfo,
        ImageInfo = armyc2.c2sd.renderer.utilities.ImageInfo,
        MilStdAttributes = armyc2.c2sd.renderer.utilities.MilStdAttributes,
        SymbolDimensions = armyc2.c2sd.renderer.utilities.SymbolDimensions,
        ModifiersUnits = armyc2.c2sd.renderer.utilities.ModifiersUnits,
        ModifiersTG = armyc2.c2sd.renderer.utilities.ModifiersTG,
        SinglePointLookup = armyc2.c2sd.renderer.utilities.SinglePointLookup,
        SymbolDefTable = armyc2.c2sd.renderer.utilities.SymbolDefTable;
    //var UDT = armyc2.c2sd.renderer.utilities.UnitDefTable;
    
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
    
    
    checkModifierFont: function()
    {
        if(textInfoBuffer===null)
            textInfoBuffer = this.createBuffer(1,1);
        if(textInfoContext===null && textInfoBuffer.getContext !== undefined)
        {
            textInfoContext = textInfoBuffer.getContext('2d');
            textInfoContext.lineCap = "butt";
            textInfoContext.lineJoin = "miter";
            textInfoContext.miterLimit = 3;
        }
        else if(!(textInfoContext))
        {
            textInfoContext = {};//for IE8
        }
        if(textInfoContextFont !== RendererSettings.getModifierFont())
        {
            textInfoContextFont = RendererSettings.getModifierFont();
            textInfoContext.font = textInfoContextFont;
        }
    },
    
    // <editor-fold defaultstate="collapsed" desc="Unit Functions">
    /**
     * 
     * @param {type} symbolID
     * @param {type} modifiers
     * @returns {armyc2.c2sd.renderer.armyc2.c2sd.renderer.utilities.ImageInfo}
     */
    renderUnit: function (symbolID, modifiers)
    {
        // <editor-fold defaultstate="collapsed" desc="Variables">
        var render = true;
        if(modifiers["RENDER"] !== undefined)
            render = modifiers["RENDER"];
        
        var buffer = null,
            ctx = null;
        
        if(render && _bufferUnit === null)
        {
            _bufferUnit = this.createBuffer(_bufferUnitSize,_bufferUnitSize);
            ctx = _bufferUnit.getContext('2d');
            ctx.lineCap = "butt";
            ctx.lineJoin = "miter";
            ctx.miterLimit = 3;
            ctx = null;
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
            fill = (intFill > 0) ? String.fromCharCode(intFill): null,
            frame = (intFrame > 0) ? String.fromCharCode(intFrame): null,
            mapping1 = ufli.getMapping1(symbolID),
            mapping2 = ufli.getMapping2(),
            symbol1 = (mapping1 !==null) ? String.fromCharCode(mapping1) : null,
            symbol2 = (mapping2 !==null) ? String.fromCharCode(mapping2) : null,
            color1 = ufli.getColor1(),
            color2 = ufli.getColor2(),
            alpha = 1.0;
    
        var hasDisplayModifiers = false;
        var hasTextModifiers = false;
        
        var intFrameAssume = -1,
            frameAssume = null;
        
        if(render===false)
            ctx={};
        
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
							fill = String.fromCharCode(intFill);
						}
						intFrameAssume = intFill - 1;
						intFrame = -1;
						frame = null;
					}
					else
					{
						intFrame = intFill + 2;
						intFrameAssume = intFill + 1;
						frame = String.fromCharCode(intFrame);
					}
					
					break;
            }
            if(intFrameAssume > 0)
                frameAssume = String.fromCharCode(intFrameAssume);
        }
            
        this.checkModifierFont();
        
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
        }
        if(modifiers[MilStdAttributes.FillColor] !== undefined)
        {
            fillColor = modifiers[MilStdAttributes.FillColor];
        }
        if(modifiers[MilStdAttributes.Alpha] !== undefined)
        {
            alpha = modifiers[MilStdAttributes.Alpha] / 255.0;
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
        
        var symbolBounds = SymbolDimensions.getUnitBounds(intFill, 50);
        var rect = SymbolDimensions.getUnitBounds(intFill, 50);
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
            ratio = Math.min((pixelSize / rect.getHeight()), (pixelSize / rect.getWidth()));

            //ctx.font="37.5pt UnitFontsC"; //50 / 96 * 72
            
            var fontsize = 50;
            //ratio = ratio / 72 * 96;
            //fontsize = (((fontsize * ratio) ));
            fontsize = (((fontsize * ratio) / 96) * 72);

            strUnitFont = fontsize + "pt UnitFont";
            //ctx.font= "75pt UnitFontsC";
            symbolBounds = SymbolDimensions.getUnitBounds(intFill, (50 * ratio));
        }
        else
        {
            strUnitFont = 150 + "pt UnitFont";
        }
        
        // </editor-fold>
        
        // <editor-fold defaultstate="collapsed" desc="Draw Core Symbol">

        var symbolWidth = Math.round(symbolBounds.getWidth()),
            symbolHeight = Math.round(symbolBounds.getHeight());
        if(render === true)
        {
            if((hasDisplayModifiers === true || hasTextModifiers === true) &&
                    symbolWidth < _bufferUnitSize && symbolHeight < _bufferUnitSize)
            {
                buffer = _bufferUnit;//
                ctx = buffer.getContext('2d');
                ctx.clearRect(0,0,_bufferUnitSize,_bufferUnitSize);
                if(ctx.globalAlpha < 1.0)
                    ctx.globalAlpha = 1.0;
            }
            else
            {//*/
                buffer = this.createBuffer(symbolWidth,symbolHeight);
                ctx = buffer.getContext('2d');
                ctx.lineCap = "butt";
                ctx.lineJoin = "miter";
                ctx.miterLimit = 3;
            }
            ctx.font = strUnitFont;
        
        }
        
        var x = Math.round(symbolBounds.getWidth()/2),
            y = Math.round((symbolBounds.getHeight()/2) + symbolBounds.getY());
	
        if(render === true)
        {
            if(color1 === "")
            {
                color1 = "#000000";
            }
            
            if(alpha < 1.0)
            {
                ctx.globalAlpha = alpha;
            }
			
			if(frameAssume !== null && frameAssume !== ""  && intFrame === -1)
            {
                ctx.fillStyle = "#ffffff";
                ctx.fillText(frameAssume, x, y);
				frameAssume = null;
            }

            if(fill !== null && fill !== "")
            {
                ctx.fillStyle=fillColor;
                ctx.fillText(fill,x,y);
            }

			if(frameAssume !== null && frameAssume !== "")
            {
                ctx.fillStyle = "#ffffff";
                ctx.fillText(frameAssume, x, y);
            }
			
            if(frame !== null && frame !== "")
            {
                ctx.fillStyle = lineColor;
                ctx.fillText(frame, x, y);
            }

            if(symbol2 !== null && symbol2 !== "")
            {
                ctx.fillStyle = color2;
                ctx.fillText(symbol2, x, y);
            }

            if(symbol1 !== null && symbol1 !== "")
            {
                ctx.fillStyle = color1;
                ctx.fillText(symbol1, x, y);
            }
        }
        
        // </editor-fold>
        
        // <editor-fold defaultstate="collapsed" desc="Build Core Symbol ImageInfo">
        //no good on glyhps
        //var tmFrameWidth = ctx.measureText(frame);
        
        //sometimes there's a y offset to help center the symbol
        //need to remove that before creating the imageInfo object.
        symbolBounds.setLocation(0,0);
        
        
        var imageBounds = new SO.Rectangle(0,0,symbolWidth,symbolHeight);
        
        var centerPoint = new SO.Point(x,y);
        
        var ii = new ImageInfo(buffer,centerPoint,symbolBounds,imageBounds);
        
        // </editor-fold>
	
        // <editor-fold defaultstate="collapsed" desc="Process Display Modifiers">
        var iinew = null;
        
        if(hasDisplayModifiers===true)
            iinew = this.processUnitDisplayModifiers(ii, symbolID, modifiers,hasTextModifiers);
        
        if(iinew !== null)
            ii = iinew;
        iinew = null;
        // </editor-fold>
        
        // <editor-fold defaultstate="collapsed" desc="Process Text Modifiers">
        
        if(hasTextModifiers===true)
            iinew = this.processUnitModifiers(ii,symbolID,modifiers);
        
        if(iinew !== null)
            ii = iinew;
        
        // </editor-fold>
        
        // <editor-fold defaultstate="collapsed" desc="Cleanup">
        ctx = null;
        buffer = null;
        // </editor-fold>
        
        if(icon)
            return ii.getSquareImageInfo();
        else
            return ii;
    },
    /**
     * 
     * @param {ImageInfo} ii
     * @param {String} symbolID
     * @param {type} modifiers
     * @returns {ImageInfo}
     */
    processUnitDisplayModifiers: function(ii, symbolID, modifiers){
        
//        if(_bufferDisplayModifiers===null)
//                    _bufferDisplayModifiers = this.createBuffer(250,250);
        var render = true;
        if(modifiers["RENDER"] !== undefined)
            render = modifiers["RENDER"];
                
        var newii = null,
            symbolBounds = ii.getSymbolBounds(),
            imageBounds = ii.getImageBounds(),
            centerPoint = ii.getCenterPoint(),
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
                    bottomY = y+height+1;
            
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
                            middleY = (bottomY + (rrHeight/2));

                            var x = Math.round(x + (incrementX/2));
                            var r = Math.round(incrementX/2);

                            var path = new SO.Path();
                            path.arc(x,middleY,r,180,0);
                            path.arc(x + incrementX,middleY,r,180,0, true);
                            path.arc(x + incrementX*2,middleY,r,180,0);
                            path.arc(x + incrementX*3,middleY,r,180,0,true);
                            path.arc(x + incrementX*4,middleY,r,180,0);
                            path.arc(x + incrementX*5,middleY,r,180,0,true);
                            path.arc(x + incrementX*6,middleY,r,180,0);
                            shapes.push(path);
                            break;
                            
                        default:
                            break;
                    }
                    // <editor-fold defaultstate="collapsed" desc="if else... Build Mobility Modifiers">
                    /*
                    if(mobility === ("MO"))//mobility wheeled (limited cross country)
                    {

                        //line
                        shapes.push(new SO.Line(x,bottomY,x+width,bottomY));
                        //left circle
                        shapes.push(new SO.Ellipse(x,bottomY + wheelOffset,wheelSize,wheelSize));
                        //shapeMobility.append(new Ellipse2D.Double(x, bottomY + wheelOffset, wheelSize, wheelSize), false);
                        //right circle
                        shapes.push(new SO.Ellipse(x + width - wheelSize, bottomY + wheelOffset, wheelSize, wheelSize));
                        //shapeMobility.append(new Ellipse2D.Double(x + width - wheelSize, bottomY + wheelOffset, wheelSize, wheelSize), false);

                    }
                    else if(mobility === ("MP"))//mobility wheeled (cross country)
                    {
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

                    }
                    else if(mobility === ("MQ"))//mobility tracked
                    {
                        //round rectangle
                        shapes.push(new SO.RoundedRectangle(x, bottomY, width, rrHeight,rrArcWidth));
                        //shapeMobility.append(new RoundRectangle2D.Double(x, bottomY, width, rrHeight, rrArcWidth, rrHeight),false);
                    }
                    else if(mobility === ("MR"))//mobility wheeled and tracked combination
                    {
                        //round rectangle
                        shapes.push(new SO.RoundedRectangle(x, bottomY, width, rrHeight,rrArcWidth));
                        //shapeMobility.append(new RoundRectangle2D.Double(x, bottomY, width, rrHeight, rrArcWidth, rrHeight),false);
                        //left circle
                        shapes.push(new SO.Ellipse(x - wheelSize - wheelSize, bottomY, wheelSize, wheelSize));
                        //shapeMobility.append(new Ellipse2D.Double(x - wheelSize - wheelSize, bottomY, wheelSize, wheelSize), false);

                    }
                    else if(mobility === ("MS"))//mobility towed
                    {
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
                    }
                    else if(mobility === ("MT"))//mobility rail
                    {
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
                    }
                    else if(mobility === ("MU"))//mobility over the snow
                    {
                        
                        var muPath = new SO.Path();
                        muPath.moveTo(x,bottomY);
                        muPath.lineTo(x + 5, bottomY + 5);
                        muPath.lineTo(x + width, bottomY + 5);
                        shapes.push(muPath);
//                        shapeMobility.moveTo(x, bottomY);
//                        shapeMobility.lineTo(x + 5, bottomY + 5);
//                        shapeMobility.lineTo(x + width, bottomY + 5);
                    }
                    else if(mobility === ("MV"))//mobility sled
                    {
                        var path = new SO.Path();
                        
                        path.moveTo(x,bottomY);
                        path.bezierCurveTo(x, bottomY, x-rrArcWidth, bottomY+3, x, bottomY+rrHeight);
                        path.lineTo(x + width, bottomY + rrHeight);
                        shapes.push(path);
                    
                    }
                    else if(mobility === ("MW"))//mobility pack animals
                    {
                        centerX = Math.round(symbolBounds.getCenterX());
                        
                        var mwPath = new SO.Path();
                        mwPath.moveTo(centerX, bottomY + rrHeight+2);
                        mwPath.lineTo(centerX - 3, bottomY);
                        mwPath.lineTo(centerX - 6, bottomY + rrHeight+2);
                                                
                        mwPath.moveTo(centerX, bottomY + rrHeight+2);
                        mwPath.lineTo(centerX + 3, bottomY);
                        mwPath.lineTo(centerX + 6, bottomY + rrHeight+2);
                        shapes.push(mwPath);
                        
//                        centerX = Math.round(symbolBounds.getCenterX());
//                        shapeMobility.moveTo(centerX, bottomY + rrHeight+2);
//                        shapeMobility.lineTo(centerX - 3, bottomY);
//                        shapeMobility.lineTo(centerX - 6, bottomY + rrHeight+2);
//                        shapeMobility.moveTo(centerX, bottomY + rrHeight+2);
//                        shapeMobility.lineTo(centerX + 3, bottomY);
//                        shapeMobility.lineTo(centerX + 6, bottomY + rrHeight+2);

                    }
                    else if(mobility === ("MX"))//mobility barge
                    {
                        centerX = Math.round(symbolBounds.getCenterX());
                        
                        var line = new SO.Line(x + width, bottomY,x, bottomY);
                        shapes.push(line);
                        
                        var quarterX = (centerX - x)/2;
                        //var quarterY = (((bottomY + rrHeight) - bottomY)/2);
                        shapes.push(new SO.BCurve(x, bottomY,x+quarterX, bottomY+rrHeight, centerX + quarterX, bottomY + rrHeight, x + width, bottomY));
                        
//                        centerX = bounds.getCenterX();
//                        shapeMobility.moveTo(x+width, bottomY);
//                        shapeMobility.lineTo(x, bottomY);
//                        var quarterX = (centerX - x)/2;
//                        var quarterY = (((bottomY + rrHeight) - bottomY)/2);
//                        shapeMobility.curveTo(x+quarterX, bottomY+rrHeight, centerX + quarterX, bottomY + rrHeight, x + width, bottomY);
                    }
                    else if(mobility === ("MY"))//mobility amphibious
                    {
                        var incrementX = width / 7,
                        middleY = (bottomY + (rrHeight/2));

                        var x = Math.round(x + (incrementX/2));
                        var r = Math.round(incrementX/2);
                        
                        var path = new SO.Path();
                        path.arc(x,middleY,r,180,0);
                        path.arc(x + incrementX,middleY,r,180,0, true);
                        path.arc(x + incrementX*2,middleY,r,180,0);
                        path.arc(x + incrementX*3,middleY,r,180,0,true);
                        path.arc(x + incrementX*4,middleY,r,180,0);
                        path.arc(x + incrementX*5,middleY,r,180,0,true);
                        path.arc(x + incrementX*6,middleY,r,180,0);
                        shapes.push(path);

                    }//*/
                    // </editor-fold>
                    
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

                    var tiEchelon = new TextInfo(strEchelon,0,0,textInfoContext,textInfoContextFont);
                    echelonBounds = tiEchelon.getTextBounds();

                    var y = Math.round(symbolBounds.getY() - echelonOffset),
                        x = Math.round(symbolBounds.getX() + (symbolBounds.getWidth()/2) - 
                                (echelonBounds.getWidth()/2));
                    tiEchelon.setLocation(x,y);

                    //There will never be lowercase characters in an echelon so trim that fat.    
                    //Remove the descent from the bounding box.
                    //tiEchelon.getTextBounds().shiftBR(0,Math.round(-(echelonBounds.getHeight()*0.3)));                         


                    //adjust for outline.
                    echelonBounds = tiEchelon.getTextOutlineBounds();
                    echelonBounds.shift(0,-outlineOffset);// - Math.round(echelonOffset/2));
                    tiEchelon.setLocation(x,y-outlineOffset);

                    imageBounds.union(echelonBounds);
                }
            }
            // </editor-fold>
            
            // <editor-fold defaultstate="collapsed" desc="Build Affiliation Modifier">
            //Draw Echelon
            var affiliationModifier = null;
            if(RendererSettings.getDrawAffiliationModifierAsLabel()===false)
            {
                affiliationModifier = SymbolUtilities.getUnitAffiliationModifier(symbolID, symStd);
            }
            if(affiliationModifier !== null)
            {

                var amOffset = 2,
                    outlineOffset = RendererSettings.getTextOutlineWidth();

                var tiAM = new TextInfo(affiliationModifier,0,0,textInfoContext,textInfoContextFont);
                amBounds = tiAM.getTextBounds();

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
                amBounds = tiAM.getTextOutlineBounds();
                amBounds.shift(0,-outlineOffset);// - Math.round(echelonOffset/2));
                tiAM.setLocation(x,y-outlineOffset);

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
                    width = Math.round(symbolBounds.getWidth() / 3);  
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
                    instRectangle = new SO.Rectangle(symbolBounds.getX() + width,
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
            if(imageBounds.getX() < 0 || imageBounds.getY() < 0)
            {
                var shiftX = Math.abs(imageBounds.getX()),
                    shiftY = Math.abs(imageBounds.getY());

                if(hqBounds !== null)
                {
                    pt1HQ.shift(shiftX,shiftY);
                    pt2HQ.shift(shiftX,shiftY);
                }
                if(echelonBounds !== null)
                {
                    tiEchelon.setLocation(tiEchelon.getLocation().getX() + shiftX, tiEchelon.getLocation().getY() + shiftY);
                }
                if(amBounds)
                {
                    tiAM.setLocation(tiAM.getLocation().getX() + shiftX, tiAM.getLocation().getY() + shiftY);
                }
                if(tfBounds !== null)
                {
                    tfRectangle.shift(shiftX, shiftY);
                    tfBounds.shift(shiftX, shiftY);
                }
                if(instBounds !== null)
                {
                    instRectangle.shift(shiftX, shiftY);
                    instBounds.shift(shiftX, shiftY);
                }
                if(fdiBounds !== null)
                {
                    fdiBounds.shift(shiftX, shiftY);
                    fdiLeft.shift(shiftX, shiftY);
                    fdiTop.shift(shiftX, shiftY);
                    fdiRight.shift(shiftX, shiftY);
                }
                if(ociBounds !== null)
                {
                    ociBounds.shift(shiftX,shiftY);
                    ociShape.shift(shiftX,shiftY);
                }
                if(domBounds !== null)
                {
                    for(var i = 0; i < 6; i++)
                    {
                        temp = domPoints[i];
                        if(temp !== null)
                            temp.shift(shiftX, shiftY);
                    }
                    domBounds.shift(shiftX, shiftY);
                }
                if(mobilityBounds !== null)
                {
                    //shift mobility points
                    var size = shapes.length;
                    var tempShape = null;
                    for(var i=0; i<size;i++)
                    {
                        tempShape = shapes[i];
                        tempShape.shift(shiftX,shiftY);
                    }
                    mobilityBounds.shift(shiftX,shiftY);
                }

                centerPoint.shift(shiftX, shiftY);
                symbolBounds.shift(shiftX, shiftY);
                imageBounds.shift(shiftX, shiftY);
            }
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
            
            if(render === true)
            {
                buffer = this.createBuffer(imageBounds.getWidth(),imageBounds.getHeight());
                ctx = buffer.getContext('2d');
                if(echelonBounds || amBounds)
                {
                    ctx.font = RendererSettings.getModifierFont();
                }
            
            
            
                //render////////////////////////////////////////////////////////
                if(hqBounds !== null)
                {
                    ctx.beginPath();
                    ctx.moveTo(pt1HQ.getX(),pt1HQ.getY());
                    ctx.lineTo(pt2HQ.getX(),pt2HQ.getY());
                    ctx.lineWidth = 2;
                    ctx.strokStyle = '#000000';
                    ctx.stroke();
                }

                if(tfBounds !== null)
                {
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = "#000000";

                    ctx.strokeRect(tfRectangle.getX(), tfRectangle.getY(),
                                    tfRectangle.getWidth(), tfRectangle.getHeight());

                    /*ctx.beginPath();
                    ctx.moveTo(tfRectangle.getX(), tfRectangle.getY());
                    ctx.lineTo(tfRectangle.right, tfRectangle.y);
                    ctx.lineTo(tfRectangle.right, tfRectangle.bottom);
                    ctx.lineTo(tfRectangle.x, tfRectangle.bottom);
                    //ctx.lineTo(tfRectangle.x, tfRectangle.y);
                    ctx.closePath();
                    ctx.stroke();*/
                }

                if(instBounds !== null)
                {
                    ctx.lineWidth = 2;
                    ctx.fillStyle = "#000000";
                    ctx.fillRect(instRectangle.getX(), instRectangle.getY(),
                                    instRectangle.getWidth(), instRectangle.getHeight());
                    /*ctx.beginPath();
                    ctx.moveTo(instRectangle.getX(), instRectangle.getY());
                    ctx.lineTo(instRectangle.right, instRectangle.y);
                    ctx.lineTo(instRectangle.right, instRectangle.bottom);
                    ctx.lineTo(instRectangle.x, instRectangle.bottom);
                    //ctx.lineTo(tfRectangle.x, tfRectangle.y);
                    ctx.closePath();
                    ctx.fill();*/
                }

                if(echelonBounds !== null)
                {
                    this.renderText(ctx,[tiEchelon]);
                    echelonBounds = null;
                    tiEchelon = null;
                }   
                
                if(amBounds !== null)
                {
                    this.renderText(ctx,[tiAM]);
                    /*
                    var textOutlineWidth = RendererSettings.getTextOutlineWidth();
                    if(textOutlineWidth > 0)
                    {
                        ctx.lineWidth = textOutlineWidth;
                        ctx.strokeStyle = "#FFFFFF";
                        ctx.strokeText(tiAM.getText(), tiAM.getLocation().getX(), tiAM.getLocation().getY());
                    }

                    if(modifiers[MilStdAttributes.LineColor] !== undefined)
                        ctx.style = modifiers[MilStdAttributes.LineColor];
                    else
                        ctx.style = "#000000";

                    ctx.fillText(tiAM.getText(), tiAM.getLocation().getX(), tiAM.getLocation().getY());
                    //*/
                    amBounds = null;
                    tiAM = null;
                }   

                if(fdiBounds !== null)
                {
                    var oldDash = null;
                    if(!ctx.setLineDash){//not yet supported but it's coming for html5
                        ctx.setLineDash = function () {};
                    }
                    if(!ctx.getLineDash){//not yet supported but it's coming for html5
                        ctx.getLineDash = function () {};
                    }

                    oldDash = ctx.getLineDash();
                    if(symbolBounds.getWidth()>19)
                    {
                        ctx.setLineDash([6,4]);
                    }
                    else
                    {
                        ctx.setLineDash([5,3]);
                    }
                    ctx.lineCap = "butt";
                    ctx.lineJoin = "miter";
                    ctx.strokeStyle = "#000000";
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.moveTo(fdiLeft.getX(),fdiLeft.getY());
                    ctx.lineTo(fdiTop.getX(),fdiTop.getY());
                    ctx.lineTo(fdiRight.getX(),fdiRight.getY());
                    ctx.stroke();
                    ctx.setLineDash(oldDash);

                    fdiBounds = null;

                }

                if(mobilityBounds !== null)
                {
                                        //ctx.lineCap = "butt";
                    //ctx.lineJoin = "miter";
                    if(symbolID.charAt(10)===("M"))
                    {
                        ctx.lineWidth = 2;
                        ctx.strokeStyle = "#000000";
                        ctx.fillStyle = "#000000";
                    }
                    else //NS or NL
                    {
                        //disable anti-aliasing
                        /*if(ctx.webkitImageSmoothingEnabled)
                            ctx.webkitImageSmoothingEnabled = false;//*/
                        ctx.lineWidth = 1;
                        ctx.strokeStyle = "#000000";
                        ctx.fillStyle = "#000000";
                    }

                    var size = shapes.length;
                    var tempShape = null;
                    for(var i=0; i<size;i++)
                    {
                        tempShape = shapes[i];
                        if(tempShape.getShapeType()!==SO.ShapeTypes.RECTANGLE)
                        {
                            tempShape.stroke(ctx);
                        }
                        else
                        {
                            tempShape.fill(ctx);
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

                    ctx.lineWidth = 2;
                    ctx.strokeStyle = '#000000';
                    ociShape.stroke(ctx);
                    ctx.fillStyle = statusColor;
                    ociShape.fill(ctx);

                    ociBounds = null;
                    ociShape = null;
                }

                //draw original icon.        
                //ctx.drawImage(ii.getImage(),symbolBounds.getX(), symbolBounds.getY());                                               
                ctx.drawImage(ii.getImage(),0,0,
                                symbolBounds.getWidth(), symbolBounds.getHeight(),
                                symbolBounds.getX(),symbolBounds.getY(),
                                symbolBounds.getWidth(), symbolBounds.getHeight());

                if(domBounds !== null)
                {
                    ctx.lineWidth = 2;
                    ctx.lineCap = "butt";
                    ctx.lineJoin = "miter";
                    ctx.strokeStyle = "#000000";
                    ctx.beginPath();
                    ctx.moveTo(domPoints[0].getX(),domPoints[0].getY());
                    if(domPoints[1] !== null)
                        ctx.lineTo(domPoints[1].getX(),domPoints[1].getY());
                    if(domPoints[2] !== null)
                        ctx.lineTo(domPoints[2].getX(),domPoints[2].getY());
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.fillStyle = "#000000";
                    ctx.moveTo(domPoints[3].getX(),domPoints[3].getY());
                    ctx.lineTo(domPoints[4].getX(),domPoints[4].getY());
                    ctx.lineTo(domPoints[5].getX(),domPoints[5].getY());
                    ctx.closePath();
                    ctx.fill();

                    domBounds = null;
                    domPoints = null;
                }
            }
            // </editor-fold>
            
            newii = new ImageInfo(buffer, centerPoint, symbolBounds, imageBounds);
            
            // <editor-fold defaultstate="collapsed" desc="Cleanup">
                shapes = null;
                ctx = null;
                buffer = null;
            // </editor-fold>
            
            //return newii;    
            if(newii !== null)
            {
                return newii;
            }
            else
            {
                return null;
            }
            
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
                /*ctx.lineColor = '#000000';
                ctx.lineWidth = 1;
                ctx.fillColor = statusColor;
                bar.fill(ctx);
                bar.grow(1);
                bar.stroke(ctx);
                
                imageBounds.union(bar.getBounds());//*/
            }
            
            return bar;
            
            // </editor-fold>
    },
    
    /**
     * 
     * @param {ImageInfo} ii
     * @param {String} symbolID
     * @param {type} modifiers
     * @returns {ImageInfo}
     */
    processUnitModifiers: function(ii, symbolID, modifiers){
        
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
        
            descent = RendererUtilities.getFontDescent(RendererSettings.getModifierFontName(),RendererSettings.getModifierFontSize(),RendererSettings.getModifierFontStyle(),"TQgj"),
        
            bounds = null,
            labelBounds = null,
            labelWidth, labelHeight;
        
        var bounds = ii.getSymbolBounds().clone(),
            symbolBounds = ii.getSymbolBounds().clone(),
            centerPoint = ii.getCenterPoint(),
            imageBounds = ii.getImageBounds().clone(),
            imageBoundsOld = ii.getImageBounds().clone();
    
        var echelon = SymbolUtilities.getEchelon(symbolID),
            echelonText = SymbolUtilities.getEchelonText(echelon),
            amText = SymbolUtilities.getUnitAffiliationModifier(symbolID, symStd);
    
	
		var textColor = null,
			textBackgroundColor = null;
    
        //make room for echelon & mobility.
        if(modifiers.Q === undefined)
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
        }
            
            
        this.checkModifierFont();
        
        
        cpofNameX = bounds.x + bounds.width + bufferXR;
        
        //check if text is too tall:
        var byLabelHeight = false;
        labelHeight = RendererUtilities.measureTextHeight(RendererSettings.getModifierFontName(),
                                RendererSettings.getModifierFontSize(),
                                RendererSettings.getModifierFontStyle()).fullHeight;
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
        if(modifiers.C !== undefined 
                && SymbolUtilities.canUnitHaveModifier(symbolID, ModifiersUnits.C_QUANTITY))
        {
            var text = modifiers[ModifiersUnits.C_QUANTITY];
            //bounds = armyc2.c2sd.renderer.utilities.RendererUtilities.getTextOutlineBounds(textInfoContext, text, new SO.Point(0,0));
            tiTemp = new TextInfo(text,0,0,textInfoContext,textInfoContextFont);
            labelBounds = tiTemp.getTextBounds();
            labelWidth = labelBounds.getWidth();
            x = Math.round((symbolBounds.x + (symbolBounds.width * 0.5)) - (labelWidth * 0.5));
            y = Math.round(symbolBounds.y - bufferY - descent);
            tiTemp.setLocation(x,y);
            tiArray.push(tiTemp);
        }
        
        //if(ModifiersUnits.X_ALTITUDE_DEPTH in modifiers || ModifiersUnits.Y_LOCATION in modifiers)
        if(modifiers.X !== undefined || modifiers.Y !== undefined)
        {
            modifierValue = null;
            
            var xm = null,
                ym = null;
                    
            if(modifiers.X !== undefined) 
                xm = modifiers.X;
            if(modifiers.Y !== undefined) 
                ym = modifiers.Y;

            if(xm === null && ym !== null)
                modifierValue = ym;
            else if(xm !== null && ym === null)
                modifierValue = xm;
            else if(xm !== null && ym !== null)
                modifierValue = xm + "  " + ym;
            
            tiTemp = new TextInfo(modifierValue,0,0,textInfoContext, textInfoContextFont);
            labelBounds = tiTemp.getTextBounds();
            labelWidth = labelBounds.getWidth();
            
            if(!byLabelHeight)
            {
                x = bounds.x - labelBounds.width - bufferXL;
                y = bounds.y + labelHeight - descent;
            }
            else
            {
                x = bounds.x - labelBounds.width - bufferXL;

                y = (bounds.height );
                y = ((y * 0.5) + (labelHeight * 0.5));

                y = y - ((labelHeight + bufferText));
                y = bounds.y + y;
            }
            
            tiTemp.setLocation(x,y);
            tiArray.push(tiTemp);
        }
        
        if(modifiers.G !== undefined && modifiers.G !== null)
        {
            modifierValue = modifiers.G;
            
            tiTemp = new TextInfo(modifierValue,0,0,textInfoContext, textInfoContextFont);
            labelBounds = tiTemp.getTextBounds();
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
        
        if(modifiers.V !== undefined)
        {
            modifierValue = modifiers.V;
            
            tiTemp = new TextInfo(modifierValue,0,0,textInfoContext, textInfoContextFont);
            labelBounds = tiTemp.getTextBounds();
            labelWidth = labelBounds.getWidth();
            
          
            x = bounds.x - labelBounds.width - bufferXL;

            y = (bounds.height );//checkpoint, get box above the point
            y = ((y * 0.5) + ((labelHeight - descent) * 0.5));
            y = bounds.y + y;
            
            
            tiTemp.setLocation(x,y);
            tiArray.push(tiTemp);
        }
        
        if(modifiers.H !== undefined)
        {
            modifierValue = modifiers.H;

            tiTemp = new TextInfo(modifierValue,0,0,textInfoContext, textInfoContextFont);
            labelBounds = tiTemp.getTextBounds();
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
        
        if(modifiers.T !== undefined)
        {
            modifierValue = modifiers[ModifiersUnits.T_UNIQUE_DESIGNATION_1];
            
            tiTemp = new TextInfo(modifierValue,0,0,textInfoContext, textInfoContextFont);
            labelBounds = tiTemp.getTextBounds();
            labelWidth = labelBounds.getWidth();
            
            if(!byLabelHeight)
            {
                x = bounds.x - labelWidth - bufferXL;
                y = bounds.y + bounds.height;
            }
            else
            {
                x = bounds.x - labelWidth - bufferXL;
                    
                y = (bounds.height );
                y = ((y * 0.5) + (labelHeight * 0.5));

                y =  y + ((labelHeight + bufferText));
                y = bounds.y + y;
            }
            
            tiTemp.setLocation(x,y);
            tiArray.push(tiTemp);
        }
        
        if(modifiers.M !== undefined || modifiers.CC !== undefined)
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
            
            tiTemp = new TextInfo(modifierValue,0,0,textInfoContext, textInfoContextFont);
            labelBounds = tiTemp.getTextBounds();
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
        
        if(modifiers.Z !== undefined)
        {
            modifierValue = modifiers[ModifiersUnits.Z_SPEED];
            
            tiTemp = new TextInfo(modifierValue,0,0,textInfoContext, textInfoContextFont);
            labelBounds = tiTemp.getTextBounds();
            labelWidth = labelBounds.getWidth();
            
            x = bounds.x - labelWidth - bufferXL;
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
        
        if(modifiers.J !== undefined ||
            modifiers.K !== undefined ||
            modifiers.L !== undefined ||
            modifiers.N !== undefined ||
            modifiers.P !== undefined)
        {
            modifierValue = null;
            
            var jm = null,
                km = null,
                lm = null,
                nm = null,
                pm = null;
        
            if(modifiers.J !== undefined) 
                jm = modifiers[ModifiersUnits.J_EVALUATION_RATING];
            if(modifiers.K !== undefined) 
                km = modifiers[ModifiersUnits.K_COMBAT_EFFECTIVENESS];
            if(modifiers.L !== undefined) 
                lm = modifiers[ModifiersUnits.L_SIGNATURE_EQUIP];
            if(modifiers.N !== undefined) 
                nm = modifiers[ModifiersUnits.N_HOSTILE];
            if(modifiers.P !== undefined) 
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
            
            tiTemp = new TextInfo(modifierValue,0,0,textInfoContext, textInfoContextFont);
            labelBounds = tiTemp.getTextBounds();
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
        
        if(modifiers.W !== undefined)
        {
            modifierValue = modifiers[ModifiersUnits.W_DTG_1];
            
            tiTemp = new TextInfo(modifierValue,0,0,textInfoContext, textInfoContextFont);
            labelBounds = tiTemp.getTextBounds();
            labelWidth = labelBounds.getWidth();
            
            if(!byLabelHeight)
            {
                x = bounds.x - labelWidth - bufferXL;
                y = bounds.y - bufferY - descent;
            }
            else
            {
                x = bounds.x - labelWidth - bufferXL;

                y = (bounds.height );
                y = ((y * 0.5) + (labelHeight * 0.5));

                y = y - ((labelHeight + bufferText)*2);
                y = bounds.y + y;
            }
            
            tiTemp.setLocation(x,y);
            tiArray.push(tiTemp);
        }
        
        if(modifiers.F !== undefined || modifiers.E !== undefined)
        {
            modifierValue = null;
            var E = null,
                F = null;
        
            if(modifiers.E !== undefined) 
                E = modifiers[ModifiersUnits.E_FRAME_SHAPE_MODIFIER];
            if(modifiers.F !== undefined) 
                F = modifiers[ModifiersUnits.F_REINFORCED_REDUCED];

            if(E !== null && E!==(""))
                    modifierValue = E;

            if(F!== null && F!==(""))
            {
                if(F.toUpperCase()===("R"))
                    F = "(+)";
                else if(F.toUpperCase()===("D"))
                    F = "(-)";
                else if(F.toUpperCase()===("RD"))
                    F = "(" + String.fromCharCode(177) + ")";
                else
                    F = null;
            }

            if(F !== null && F!==(""))
            {
                if(modifierValue !== null && modifierValue!==(""))
                    modifierValue = modifierValue + " " + F;
                else
                    modifierValue = F;
            }
            
            tiTemp = new TextInfo(modifierValue,0,0,textInfoContext, textInfoContextFont);
            labelBounds = tiTemp.getTextBounds();
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
        
        if(modifiers.AA !== undefined)
        {
            modifierValue = modifiers[ModifiersUnits.AA_SPECIAL_C2_HQ];
            
            tiTemp = new TextInfo(modifierValue,0,0,textInfoContext, textInfoContextFont);
            labelBounds = tiTemp.getTextBounds();
            labelWidth = labelBounds.getWidth();
            
            x = (symbolBounds.x + (symbolBounds.width * 0.5)) - (labelWidth * 0.5);
                
            y = (symbolBounds.height );//checkpoint, get box above the point
            y = ((y * 0.5) + ((labelHeight - descent) * 0.5));
            y = symbolBounds.y + y;
            
            tiTemp.setLocation(x,y);
            tiArray.push(tiTemp);
        }
        
        if(modifiers.CN !== undefined)
        {
            modifierValue = modifiers[ModifiersUnits.CN_CPOF_NAME_LABEL];
            
            tiTemp = new TextInfo(modifierValue,0,0,textInfoContext, textInfoContextFont);
            labelBounds = tiTemp.getTextBounds();
            labelWidth = labelBounds.getWidth();
            
            x = cpofNameX;
                
            y = (bounds.height );//checkpoint, get box above the point
            y = ((y * 0.5) + (labelHeight * 0.5));
            y = bounds.y + y;
            
            tiTemp.setLocation(x,y);
            tiArray.push(tiTemp);
        }
        
        if(modifiers.SCC !== undefined)
        {
            modifierValue = modifiers[ModifiersUnits.SCC_SONAR_CLASSIFICATION_CONFIDENCE];
            
            var scc = 0;
            if(SymbolUtilities.isNumber(modifierValue) && SymbolUtilities.hasModifier(symbolID, ModifiersUnits.SCC_SONAR_CLASSIFICATION_CONFIDENCE))
            {
                scc = parseInt(modifierValue);
                if(scc > 0 && scc < 6)
                {
                    
                    var yPosition = this.getYPositionForSCC(symbolID);
                     
                    tiTemp = new TextInfo(modifierValue,0,0,textInfoContext, textInfoContextFont);
                    labelBounds = tiTemp.getTextBounds();
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
                modifierBounds = tiArray[0].getTextOutlineBounds();
                var size = tiArray.length;
                var tempShape = null;
                for(var i=1; i<size;i++)
                {
                    tempShape = tiArray[i];
                    modifierBounds.union(tempShape.getTextOutlineBounds());
                }
                
            }

            
            if(modifierBounds !== null){

                imageBounds.union(modifierBounds);

                //shift points if needed////////////////////////////////////////
                if(imageBounds.getX() < 0 || imageBounds.getY() < 0)
                {
                    var shiftX = Math.round(Math.abs(imageBounds.getX())),
                        shiftY = Math.round(Math.abs(imageBounds.getY()));

                    //shift mobility points
                    var size = tiArray.length;
                    var tempShape = null;
                    for(var i=0; i<size;i++)
                    {
                        tempShape = tiArray[i];
                        tempShape.shift(shiftX,shiftY);
                    }
                    modifierBounds.shift(shiftX,shiftY);

                    //shift image points
                    centerPoint.shift(shiftX, shiftY);
                    symbolBounds.shift(shiftX, shiftY);
                    imageBounds.shift(shiftX, shiftY);
                    imageBoundsOld.shift(shiftX, shiftY);
                }

                if(render === true)
                {
					if(modifiers[MilStdAttributes.TextColor])
						textColor = modifiers[MilStdAttributes.TextColor];
					if(modifiers[MilStdAttributes.TextBackgroundColor])
						textBackgroundColor = modifiers[MilStdAttributes.TextBackgroundColor];
					
                    var buffer = this.createBuffer(imageBounds.getWidth(),imageBounds.getHeight());
                    var ctx = buffer.getContext('2d');

                    //draw original icon with potential modifiers.
                    ctx.drawImage(ii.getImage(),imageBoundsOld.getX(),imageBoundsOld.getY());

                    this.renderText(ctx,tiArray,textColor,textBackgroundColor);
                    
                }

                newii = new ImageInfo(buffer, centerPoint, symbolBounds, imageBounds);
                
            }
            // </editor-fold>
            
        // <editor-fold defaultstate="collapsed" desc="Cleanup">
        tiArray = null;
        tiTemp = null;
        tempShape = null;
        imageBoundsOld = null;
        ctx = null;
        buffer = null;
        // </editor-fold>
            
            return newii;
    },
            
    // </editor-fold>
    
    // <editor-fold defaultstate="collapsed" desc="SPTG functions">
    /**
     * 
     * @param {type} symbolID
     * @param {type} modifiers
     * @returns {armyc2.c2sd.renderer.armyc2.c2sd.renderer.utilities.ImageInfo}
     */
    renderSPTG: function (symbolID, modifiers){
        // <editor-fold defaultstate="collapsed" desc="Variables">
        var render = true;
        if(modifiers["RENDER"] !== undefined)
            render = modifiers["RENDER"];
        
        var buffer = null,
            ctx = null;
        
        if(_bufferSymbol === null)
        {
            _bufferSymbol = this.createBuffer(_bufferSymbolSize,_bufferSymbolSize);
            var ctx = _bufferSymbol.getContext('2d');
            ctx.lineCap = "butt";
            ctx.lineJoin = "miter";
            ctx.miterLimit = 3;
            ctx = null;
        }

        var fontSize = 60;
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
        var alpha = 1.0;
	var fill = null;
	var frame = null;
        var scale = -999;
        
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
        }
        if(modifiers[MilStdAttributes.FillColor] !== undefined)
        {
            fillColor = modifiers[MilStdAttributes.FillColor];
        }
        if(modifiers[MilStdAttributes.Alpha] !== undefined)
        {
            alpha = modifiers[MilStdAttributes.Alpha] / 255.0;
        }
        
        var outlineOffset = symbolOutlineWidth;
        if(outlineOffset > 2)
            outlineOffset = (outlineOffset-1)/2;
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

        if(pixelSize > 0)
        {
            symbolBounds = SymbolDimensions.getSymbolBounds(symbolID, symStd, fontSize);
            rect = SymbolDimensions.getSymbolBounds(symbolID, symStd, fontSize);

            if(keepUnitRatio===true)
            {
               //scale it somehow for consistency with units.

               //when SymbolSizeMedium = 80;
               //a pixel size of 35 = scale value of 1.0
               
                if(fontSize===80)//medium
                {
                 scale = pixelSize / 35.0;
                }//TODO: need to adjust multiplier for other scales
                else if(fontSize===60)//small
                {
                 scale = pixelSize / 35.0;
                }
                else if(fontSize===100)//large
                {
                 scale = pixelSize / 35.0;
                }
                else if(fontSize===120)//XL
                {
                 scale = pixelSize / 35.0;
                }
                else
                {
                    scale = pixelSize / 35.0;
                }
               
            }

            //adjust size
            ratio = Math.min((pixelSize / rect.getHeight()), (pixelSize / rect.getWidth()));

        }
        
        //scale overrides pixel size.
        if(scale !== -999)
        {
            ratio = scale;
        }
        
        if(ratio > 0)
        {
            fontSize = fontSize * ratio;
        }
        
        //TODO: if else block does the same thing either way.  probably remove
        /*
        if(pixelSize > 0)
        {
            symbolBounds = SymbolDimensions.getSymbolBounds(symbolID, symStd, fontSize);

            fontSize = (((fontSize) / 96) * 72);
          
            strSPFont = fontSize + "pt SinglePoint";
        }
        else
        {
            symbolBounds = SymbolDimensions.getSymbolBounds(symbolID, symStd, fontSize);
            fontSize = ((fontSize / 96) * 72);
            //ctx.font= "45pt SinglePoint";
            strSPFont = fontSize + "pt SinglePoint";
        }//*/
        symbolBounds = SymbolDimensions.getSymbolBounds(symbolID, symStd, fontSize);
        fontSize = (((fontSize) / 96) * 72);
        strSPFont = fontSize + "pt SinglePoint";
        
        
        // </editor-fold>
        
        this.checkModifierFont();
        
        // </editor-fold>
        
        
        intFrame = SinglePointLookup.getCharCodeFromSymbol(symbolID,symStd);
            

        
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
        
        if(intFill > 0)
            fill = String.fromCharCode(intFill);
	frame = String.fromCharCode(intFrame);
        
        var symbolWidth = Math.round(symbolBounds.getWidth()) + (outlineOffset*2),
            symbolHeight = Math.round(symbolBounds.getHeight()) + (outlineOffset*2);
    
        var imageBounds = new SO.Rectangle(0,0,symbolWidth,symbolHeight);
    
        if(render === true)
        {
            if((hasDisplayModifiers === true || hasTextModifiers === true) &&
                    symbolWidth < _bufferSymbolSize && 
                    symbolHeight < _bufferSymbolSize)
            {
                buffer = _bufferSymbol;//
                ctx = buffer.getContext('2d');
                ctx.clearRect(0,0,_bufferSymbolSize,_bufferSymbolSize);
                if(ctx.globalAlpha < 1.0)
                    ctx.globalAlpha = 1.0;
            }
            else
            {//*/
                buffer = this.createBuffer(symbolWidth,symbolHeight);
                ctx = buffer.getContext('2d');
                ctx.lineCap = "butt";
                ctx.lineJoin = "miter";
                ctx.miterLimit = 3;
            }

            ctx.font = strSPFont;
        }
        var x = Math.round(symbolBounds.getWidth()/2),
            y = Math.round(symbolBounds.getHeight()/2);
    
        var centerPoint = SymbolDimensions.getSymbolCenter(symbolID, symbolBounds);
        
        x = centerPoint.getX();
        y = centerPoint.getY();
        
        
        if(outlineOffset>0)
        {
            centerPoint.shift(outlineOffset,outlineOffset);
            x += outlineOffset;
            y += outlineOffset;
            symbolBounds.shift(outlineOffset,outlineOffset);
            symbolBounds.grow(outlineOffset);
        }
        
        //do outline first if present
        if(render === true)
        {
            if(alpha < 1.0)
                ctx.globalAlpha = alpha;
            
            if(frame !== null && frame !== "")
            {
                if(outlineOffset > 0)
                {
                    ctx.lineWidth = symbolOutlineWidth;
                    ctx.strokeStyle = RendererUtilities.getIdealOutlineColor(lineColor,true);
                    ctx.strokeText(frame, x, y);
                }
            }
            //then do fill if present
            if(fill !== null && fill !== "" && fillColor !== null)
            {
                ctx.fillStyle=fillColor;
                ctx.fillText(fill,x,y);
            }
            //then draw frame
            if(frame !== null && frame !== "")
            {
                ctx.fillStyle = lineColor;
                ctx.fillText(frame, x, y);
            }
        }

                
        var ii = new ImageInfo(buffer,centerPoint,symbolBounds,imageBounds);
        
        //Process Modifiers
        var iiNew = null;
        if(icon === false && (hasTextModifiers || hasDisplayModifiers || SymbolUtilities.isTGSPWithIntegralText(symbolID)))
        {
            if(SymbolUtilities.isTGSPWithSpecialModifierLayout(symbolID) || 
                SymbolUtilities.isTGSPWithIntegralText(symbolID))
            {
                iiNew = this.ProcessTGSPWithSpecialModifierLayout(ii,symbolID,modifiers, lineColor);
            }
            else 
            {
                iiNew = this.ProcessTGSPModifiers(ii,symbolID,modifiers, lineColor);
            }

        }
        
        if(iiNew)
            ii = iiNew;
        
        // <editor-fold defaultstate="collapsed" desc="Cleanup">
        ctx = null;
        buffer = null;
        // </editor-fold>
        
        if(icon)
            return ii.getSquareImageInfo();
        else
            return ii;
    },
    /**
     * 
     * @param {ImageInfo} ii
     * @param {String} symbolID
     * @param {Object} modifiers
     * @param {String} overrideColor like "#000000"
     * @returns {ImageInfo}
     */        
    ProcessTGSPWithSpecialModifierLayout: function(ii,symbolID,modifiers, overrideColor){
    
        // <editor-fold defaultstate="collapsed" desc="Variables">
        var render = true;
        if(modifiers["RENDER"] !== undefined)
            render = modifiers["RENDER"];
        
        var bufferXL = 6,
            bufferXR = 4,
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
        var duplicate = false;
        
        var symbolBounds = ii.getSymbolBounds().clone(),
            bounds = ii.getSymbolBounds().clone(),
            imageBounds = ii.getImageBounds().clone(),
            centerPoint = ii.getCenterPoint().clone();
			
		var textColor = overrideColor,
			textBackgroundColor = null;
    
        centerPoint = new SO.Point(Math.round(ii.getCenterPoint().getX()),Math.round(ii.getCenterPoint().getY()));
    
        var byLabelHeight = false;
        labelHeight = RendererUtilities.measureTextHeight(RendererSettings.getModifierFontName(),
                                RendererSettings.getModifierFontSize(),
                                RendererSettings.getModifierFontStyle()).fullHeight;
        labelHeight = Math.round(labelHeight);
        var maxHeight = (symbolBounds.getHeight());
        if((labelHeight * 3) > maxHeight)
            byLabelHeight = true;
        
        var descent = RendererUtilities.getFontDescent(RendererSettings.getModifierFontName(),RendererSettings.getModifierFontSize(),RendererSettings.getModifierFontStyle(),"TQgj");
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
        
        /*bufferXL += outlineOffset;
        bufferXR += outlineOffset;
        bufferY += outlineOffset;
        bufferText += outlineOffset;//*/
                
        // </editor-fold>
    
        // <editor-fold defaultstate="collapsed" desc="Process Integral Text">
        if(basicID===("G*G*GPRD--****X"))//DLRP (D)
        {

            strText1 = "D";
            
            text1 = new TextInfo(strText1,0,0,textInfoContext);
            
            labelBounds1 = text1.getTextBounds();
            if(symStd === RendererSettings.Symbology_2525Bch2_USAS_13_14)
            {
                y = symbolBounds.getY() + symbolBounds.getHeight();
                x = symbolBounds.getX() - labelBounds1.getWidth() - bufferXL;
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
            text1 = new TextInfo(strText1,0,0,textInfoContext);
            
            labelBounds1 = text1.getTextBounds();
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
            text2 = new TextInfo(strText2,0,0,textInfoContext);

            labelBounds2 = text2.getTextBounds();
            //y = symbolBounds.getY() + (symbolBounds.getHeight() * 0.9);
            //x = symbolBounds.getCenterX() - centerOffset - (labelBounds1.getWidth()/2);
            
            y2 = symbolBounds.getCenterY() + ((labelBounds2.getHeight() - descent)*0.5);
            
            x2 = symbolBounds.getX() - labelBounds2.getWidth() - bufferXL;

            text2.setLocation(Math.round(x2),Math.round(y2-offset));
            //ErrorLogger.LogMessage("BIO: " + String.valueOf(x2)+ ", " + String.valueOf(y2));
        }
        else if(basicID===("G*M*NEC---****X"))//Release Events Chemical (CML, C)
        {
            //strText1 = "C";
            //text1 = new TextLayout(strText1, labelFont, frc);
            var offset = 1;
            strText2 = "CML";
            text2 = new TextInfo(strText2,0,0,textInfoContext);
            
            labelBounds2 = text2.getTextBounds();
            //y = symbolBounds.getY() + (symbolBounds.getHeight() * 0.9);
            //x = symbolBounds.getCenterX() - centerOffset - (labelBounds1.getWidth()/2);

            y2 = symbolBounds.getCenterY() + ((labelBounds2.getHeight() - descent)/2);

            x2 = symbolBounds.getX() - labelBounds2.getWidth() - bufferXL;
            
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
            if(modifiers[ModifiersTG.T_UNIQUE_DESIGNATION_1] !== undefined)
            {
                strText = modifiers[ModifiersTG.T_UNIQUE_DESIGNATION_1];
                ti = new TextInfo(strText,0,0,textInfoContext);
                labelWidth = Math.round(ti.getTextBounds().getWidth());
                //One modifier symbols and modifier goes in center
                x = bounds.x + (bounds.width * 0.5);
                x = x - (labelWidth * 0.5);
                y = bounds.y + (bounds.height * 0.4);
                y = y + (labelHeight * 0.5);
                
                ti.setLocation(Math.round(x),Math.round(y));
                arrMods.push(ti);
            }
        }
		else if(basicID === "G*G*GPH---****X")       
        {
            if(modifiers[ModifiersTG.H_ADDITIONAL_INFO_1] !== undefined)
            {
                strText = modifiers[ModifiersTG.H_ADDITIONAL_INFO_1];
                ti = new TextInfo(strText,0,0,textInfoContext);
                labelWidth = Math.round(ti.getTextBounds().getWidth());
                //One modifier symbols and modifier goes in center
                x = bounds.x + (bounds.width * 0.5);
                x = x - (labelWidth * 0.5);
                y = bounds.y + (bounds.height * 0.5);
                y = y + (labelHeight * 0.5);
                
                ti.setLocation(Math.round(x),Math.round(y));
                arrMods.push(ti);
            }
        }
        else if(basicID ===("G*G*GPRI--****X"))
        {
            if(modifiers.T !== undefined)
            {
                strText = modifiers[ModifiersTG.T_UNIQUE_DESIGNATION_1];
                ti = new TextInfo(strText,0,0,textInfoContext);
                labelWidth = Math.round(ti.getTextBounds().getWidth());
                //One modifier symbols, top third & center
                x = bounds.x + (bounds.width * 0.5);
                x = x - (labelWidth * 0.5);
                y = bounds.y + (bounds.height * 0.25);
                y = y + (labelHeight * 0.5);
                
                ti.setLocation(Math.round(x),Math.round(y));
                arrMods.push(ti);
            }
        }
        else if(basicID ===("G*G*GPPW--****X") ||
                basicID ===("G*F*PCF---****X"))
        {
            if(modifiers.T !== undefined)
            {
                strText = modifiers[ModifiersTG.T_UNIQUE_DESIGNATION_1];
                ti = new TextInfo(strText,0,0,textInfoContext);
                
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
            if(modifiers.T !== undefined)
            {
                strText = modifiers[ModifiersTG.T_UNIQUE_DESIGNATION_1];
                ti = new TextInfo(strText,0,0,textInfoContext);
                var labelWidth = ti.getTextBounds().getWidth();
                //One modifier symbols and modifier goes just below of center
                x = bounds.x + (bounds.width * 0.5);
                x = x - (labelWidth * 0.5);
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
            if(modifiers.H !== undefined &&
                    basicID ===("G*F*PTS---****X"))//H
            {
                strText = modifiers[ModifiersTG.H_ADDITIONAL_INFO_1];
                ti = new TextInfo(strText,0,0,textInfoContext);
                
                x = bounds.getCenterX() + (bounds.width * 0.15);
                y = bounds.y + (bounds.height * 0.75);
                y = y + (labelHeight * 0.5);
                
                ti.setLocation(Math.round(x),Math.round(y));
                arrMods.push(ti);
            }
            if(modifiers.H1 !== undefined &&
                    basicID ===("G*F*PTS---****X"))//H1
            {
                strText = modifiers[ModifiersTG.H1_ADDITIONAL_INFO_2];
                ti = new TextInfo(strText,0,0,textInfoContext);
                labelWidth = Math.round(ti.getTextBounds().getWidth());
                x = bounds.getCenterX() - (bounds.width * 0.15);
                x = x - (labelWidth);
                y = bounds.y + (bounds.height * 0.75);
                y = y + (labelHeight * 0.5);
                
                ti.setLocation(Math.round(x),Math.round(y));
                arrMods.push(ti);
            }
            if(modifiers.T !== undefined)//T
            {
                strText = modifiers[ModifiersTG.T_UNIQUE_DESIGNATION_1];
                ti = new TextInfo(strText,0,0,textInfoContext);

                x = bounds.getCenterX() + (bounds.width * 0.15);
//                    x = x - (labelBounds.width * 0.5);
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
            if(modifiers.N !== undefined)
            {
                strText = modifiers[ModifiersTG.N_HOSTILE];
                ti = new TextInfo(strText,0,0,textInfoContext);
                
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
            if(modifiers.H !== undefined)//H
            {
                strText = modifiers[ModifiersTG.H_ADDITIONAL_INFO_1];
                ti = new TextInfo(strText,0,0,textInfoContext);
                
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
            if(modifiers.W !== undefined)//W
            {
                strText = modifiers[ModifiersTG.W_DTG_1];
                ti = new TextInfo(strText,0,0,textInfoContext);
                labelWidth = Math.round(ti.getTextBounds().getWidth());
                
                x = bounds.x - labelWidth - bufferXL;
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
            if(modifiers.V !== undefined && basicID ===("G*M*NZ----****X"))//V
            {
                strText = modifiers[ModifiersTG.V_EQUIP_TYPE];
                ti = new TextInfo(strText,0,0,textInfoContext);
                
                //subset of nbc, just nuclear
                labelWidth = Math.round(ti.getTextBounds().getWidth());
                x = bounds.x - labelWidth - bufferXL;
                y = bounds.y + ((bounds.height * 0.5) + ((labelHeight - descent) * 0.5));//((bounds.height / 2) - (labelHeight/2));
                
                ti.setLocation(Math.round(x),Math.round(y));
                arrMods.push(ti);
            }
            if(modifiers.T !== undefined)//T
            {
                strText = modifiers[ModifiersTG.T_UNIQUE_DESIGNATION_1];
                ti = new TextInfo(strText,0,0,textInfoContext);
                labelWidth = Math.round(ti.getTextBounds().getWidth());
                x = bounds.x - labelWidth - bufferXL;
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
            if(modifiers.Y !== undefined)//Y
            {
                strText = modifiers[ModifiersTG.Y_LOCATION];
                ti = new TextInfo(strText,0,0,textInfoContext);
                labelWidth = Math.round(ti.getTextBounds().getWidth());
                //just NBC
                //x = bounds.getX() + (bounds.getWidth() * 0.5);
                //x = x - (labelWidth * 0.5);
                x = bounds.x + (bounds.width * 0.5);
                x = x - (labelWidth * 0.5);

                if(!byLabelHeight)
                {
                    y = bounds.y + bounds.height + labelHeight - descent + bufferY;
                }
                else
                {
                    y = bounds.y + ((bounds.height * 0.5) + ((labelHeight-descent) * 0.5) + ((labelHeight + bufferText)*2) - descent);
                    
                }
                yForY = y + descent; //so we know where to start the DOM arrow.
                ti.setLocation(Math.round(x),Math.round(y));
                arrMods.push(ti);

            }
            if(modifiers.C !== undefined)//C
            {
                strText = modifiers[ModifiersTG.C_QUANTITY];
                ti = new TextInfo(strText,0,0,textInfoContext);
                labelWidth = Math.round(ti.getTextBounds().getWidth());
                //subset of NBC, just nuclear
                x = bounds.x + (bounds.width * 0.5);
                x = x - (labelWidth * 0.5);
                y = bounds.y - descent;
                ti.setLocation(Math.round(x),Math.round(y));
                arrMods.push(ti);

            }
        }
        else if(basicID ===("G*M*OFS---****X"))
        {
            if(modifiers.H !== undefined)//H
            {
                strText = modifiers[ModifiersTG.H_ADDITIONAL_INFO_1];
                ti = new TextInfo(strText,0,0,textInfoContext);
                labelWidth = Math.round(ti.getTextBounds().getWidth());
                x = bounds.x + (bounds.width * 0.5);
                x = x - (labelWidth * 0.5);
                y = bounds.y - descent;// + (bounds.height * 0.5);
                //y = y + (labelHeight * 0.5);
                
                ti.setLocation(Math.round(x),Math.round(y));
                arrMods.push(ti);

            }
            if(modifiers.W !== undefined)//W
            {
                strText = modifiers[ModifiersTG.W_DTG_1];
                ti = new TextInfo(strText,0,0,textInfoContext);
                labelWidth = Math.round(ti.getTextBounds().getWidth());
                x = bounds.x + (bounds.width * 0.5);
                x = x - (labelWidth * 0.5);
                y = bounds.y + (bounds.height);
                y = y + (labelHeight);
                
                ti.setLocation(Math.round(x),Math.round(y));
                arrMods.push(ti);
            }
            if(modifiers.N !== undefined)
            {
                strText = modifiers[ModifiersTG.N_HOSTILE];
                ti = new TextInfo(strText,0,0,textInfoContext);
                var ti2 = new TextInfo(strText,0,0,textInfoContext);
                labelWidth = Math.round(ti.getTextBounds().getWidth());
                x = bounds.x + (bounds.width) + bufferXR;//right
                //x = x + labelWidth;//- (labelBounds.width * 0.75);

                duplicate = true;

                x2 = bounds.x;//left
                x2 = x2 - labelWidth - bufferXL;// - (labelBounds.width * 0.25);

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
            
            domPoints = this.createDOMArrowPoints(symbolID, tempBounds,ii.getCenterPoint(), q, false);

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
            modifierBounds = arrMods[0].getTextOutlineBounds();
            var size = arrMods.length;
            var tempShape = null;
            for(var i=1; i<size;i++)
            {
                tempShape = arrMods[i];
                modifierBounds.union(tempShape.getTextOutlineBounds());
            }

        }


        if(modifierBounds !== null || domBounds !== null){

            imageBounds.union(modifierBounds);
            imageBounds.union(domBounds);

            //shift points if needed////////////////////////////////////////
            if(imageBounds.getX() < 0 || imageBounds.getY() < 0)
            {
                var shiftX = Math.abs(imageBounds.getX()),
                    shiftY = Math.abs(imageBounds.getY());

                //shift mobility points
                var size = arrMods.length;
                var tempShape = null;
                for(var i=0; i<size;i++)
                {
                    tempShape = arrMods[i];
                    tempShape.shift(shiftX,shiftY);
                }
                modifierBounds.shift(shiftX,shiftY);
                
                if(domBounds !== null)
                {
                    for(var i = 0; i < 6; i++)
                    {
                        temp = domPoints[i];
                        if(temp !== null)
                            temp.shift(shiftX, shiftY);
                    }
                    domBounds.shift(shiftX, shiftY);
                }

                //shift image points
                centerPoint.shift(shiftX, shiftY);
                symbolBounds.shift(shiftX, shiftY);
                imageBounds.shift(shiftX, shiftY);
            }

            if(render === true)
            {
                var buffer = this.createBuffer(imageBounds.getWidth(),imageBounds.getHeight());
                var ctx = buffer.getContext('2d');

                //draw original icon
                //ctx.drawImage(ii.getImage(),symbolBounds.getX(),symbolBounds.getY());
                ctx.drawImage(ii.getImage(),0,0,
                                symbolBounds.getWidth(), symbolBounds.getHeight(),
                                symbolBounds.getX(),symbolBounds.getY(),
                                symbolBounds.getWidth(), symbolBounds.getHeight());
								
				if(modifiers[MilStdAttributes.TextColor])
					textColor = modifiers[MilStdAttributes.TextColor];
				if(modifiers[MilStdAttributes.TextBackgroundColor])
					textBackgroundColor = modifiers[MilStdAttributes.TextBackgroundColor];

                this.renderText(ctx,arrMods, textColor, textBackgroundColor);

                //draw DOM arrow
                if(domBounds !== null)
                {
                    ctx.lineWidth = 2;
                    ctx.lineCap = "butt";
                    ctx.lineJoin = "miter";
                    ctx.strokeStyle = "#000000";
                    ctx.beginPath();
                    ctx.moveTo(domPoints[0].getX(),domPoints[0].getY());
                    if(domPoints[1] !== null)
                        ctx.lineTo(domPoints[1].getX(),domPoints[1].getY());
                    if(domPoints[2] !== null)
                        ctx.lineTo(domPoints[2].getX(),domPoints[2].getY());
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.fillStyle = "#000000";
                    ctx.moveTo(domPoints[3].getX(),domPoints[3].getY());
                    ctx.lineTo(domPoints[4].getX(),domPoints[4].getY());
                    ctx.lineTo(domPoints[5].getX(),domPoints[5].getY());
                    ctx.closePath();
                    ctx.fill();
                }
            }
            newii = new ImageInfo(buffer, centerPoint, symbolBounds, imageBounds);
            
            // <editor-fold defaultstate="collapsed" desc="Cleanup">
            ctx = null;
            buffer = null;
            // </editor-fold>

            if(newii !== undefined && newii !== null)
                return newii;
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
    ProcessTGSPModifiers: function(ii,symbolID,modifiers, overrideColor){
    
        // <editor-fold defaultstate="collapsed" desc="Variables">
        var render = true;
        if(modifiers["RENDER"] !== undefined)
            render = modifiers["RENDER"];
        
        var bufferXL = 6,
            bufferXR = 4,
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
        var duplicate = false;
        
        var symbolBounds = ii.getSymbolBounds().clone(),
            bounds = ii.getSymbolBounds().clone(),
            imageBounds = ii.getImageBounds().clone(),
            centerPoint = ii.getCenterPoint().clone();
			
		var textColor = overrideColor,
			textBackgroundColor = null;
    
        centerPoint = new SO.Point(Math.round(ii.getCenterPoint().getX()),Math.round(ii.getCenterPoint().getY()));
    
        var byLabelHeight = false;
        labelHeight = RendererUtilities.measureTextHeight(RendererSettings.getModifierFontName(),
                                RendererSettings.getModifierFontSize(),
                                RendererSettings.getModifierFontStyle()).fullHeight;
        labelHeight = Math.round(labelHeight);
        var maxHeight = (symbolBounds.getHeight());
        if((labelHeight * 3) > maxHeight)
            byLabelHeight = true;
        
        var descent = RendererUtilities.getFontDescent(RendererSettings.getModifierFontName(),RendererSettings.getModifierFontSize(),RendererSettings.getModifierFontStyle(),"TQgj");
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
        
        /*bufferXL += outlineOffset;
        bufferXR += outlineOffset;
        bufferY += outlineOffset;
        bufferText += outlineOffset;*/
        
        
        // </editor-fold>
            
        // <editor-fold defaultstate="collapsed" desc="Process Modifiers">
        var ti = null;
        
        {
            if(modifiers.N)
            {
                strText = modifiers[ModifiersTG.N_HOSTILE];
                ti = new TextInfo(strText,0,0,textInfoContext);
                
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
            if(modifiers.H !== undefined)//H
            {
                strText = modifiers[ModifiersTG.H_ADDITIONAL_INFO_1];
                ti = new TextInfo(strText,0,0,textInfoContext);
                labelWidth = Math.round(ti.getTextBounds().getWidth());
                
                x = bounds.x + (bounds.width * 0.5);
                x = x - (labelWidth * 0.5);
                y = bounds.y - descent;
                
                ti.setLocation(x,y);
                arrMods.push(ti);
            }
            if(modifiers.H1 !== undefined)//H1
            {//pretty much just for Action Point
                strText = modifiers[ModifiersTG.H1_ADDITIONAL_INFO_2];
                ti = new TextInfo(strText,0,0,textInfoContext);
                labelWidth = Math.round(ti.getTextBounds().getWidth());
                
                x = bounds.x + (bounds.width * 0.5);
                x = x - (labelWidth * 0.5);
                y = bounds.y + labelHeight + (bounds.height*0.2);
                
                ti.setLocation(x,y);
                arrMods.push(ti);
            }
            if(modifiers.W !== undefined)//W
            {
                strText = modifiers[ModifiersTG.W_DTG_1];
                ti = new TextInfo(strText,0,0,textInfoContext);
                labelWidth = Math.round(ti.getTextBounds().getWidth());
                
                x = bounds.x - labelWidth - bufferXL;
                y = bounds.y + labelHeight - descent;
                           
                ti.setLocation(x,y);
                arrMods.push(ti);
            }
            if(modifiers.W1 !== undefined)//W1
            {
                strText = modifiers[ModifiersTG.W1_DTG_2];
                ti = new TextInfo(strText,0,0,textInfoContext);
                labelWidth = Math.round(ti.getTextBounds().getWidth());
                
                x = bounds.x - labelWidth - bufferXL;
                
                y = ((labelHeight - descent + bufferText) * 2);
                y = bounds.y + y;
                                
                ti.setLocation(x,y);
                arrMods.push(ti);
            }
            if(modifiers.T !== undefined)//T
            {
                strText = modifiers[ModifiersTG.T_UNIQUE_DESIGNATION_1];
                ti = new TextInfo(strText,0,0,textInfoContext);
                
                x = bounds.x + bounds.width + bufferXR;
                y = bounds.y + labelHeight - descent;
                
                ti.setLocation(x,y);
                arrMods.push(ti);
            }
            if((modifiers.T1 !== undefined) &&//T1
                    (basicID===("G*O*ES----****X") || //emergency distress call
                    basicID===("G*S*PP----****X") || //medevac pick-up point
                    basicID===("G*S*PX----****X")))//ambulance exchange point
            {
                strText = modifiers[ModifiersTG.T1_UNIQUE_DESIGNATION_2];
                ti = new TextInfo(strText,0,0,textInfoContext);
                labelWidth = Math.round(ti.getTextBounds().getWidth());
                
                //points
                x = bounds.x + (bounds.width * 0.5);
                x = x - (labelWidth * 0.5);
                //y = bounds.y + (bounds.height * 0.5);

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

            //build modifier bounds/////////////////////////////////////////
            modifierBounds = arrMods[0].getTextOutlineBounds();
            var size = arrMods.length;
            var tempShape = null;
            for(var i=1; i<size;i++)
            {
                tempShape = arrMods[i];
                modifierBounds.union(tempShape.getTextOutlineBounds());
            }

        }


        if(modifierBounds !== null){

            imageBounds.union(modifierBounds);

            //shift points if needed////////////////////////////////////////
            if(imageBounds.getX() < 0 || imageBounds.getY() < 0)
            {
                var shiftX = Math.abs(imageBounds.getX()),
                    shiftY = Math.abs(imageBounds.getY());

                //shift mobility points
                var size = arrMods.length;
                var tempShape = null;
                for(var i=0; i<size;i++)
                {
                    tempShape = arrMods[i];
                    tempShape.shift(shiftX,shiftY);
                }
                modifierBounds.shift(shiftX,shiftY);

                //shift image points
                centerPoint.shift(shiftX, shiftY);
                symbolBounds.shift(shiftX, shiftY);
                imageBounds.shift(shiftX, shiftY);
            }

            if(render === true)
            {
                var buffer = this.createBuffer(imageBounds.getWidth(),imageBounds.getHeight());
                var ctx = buffer.getContext('2d');

                //draw original icon
                //ctx.drawImage(ii.getImage(),symbolBounds.getX(),symbolBounds.getY());
                ctx.drawImage(ii.getImage(),0,0,
                                symbolBounds.getWidth(), symbolBounds.getHeight(),
                                symbolBounds.getX(),symbolBounds.getY(),
                                symbolBounds.getWidth(), symbolBounds.getHeight());

				if(modifiers[MilStdAttributes.TextColor])
					textColor = modifiers[MilStdAttributes.TextColor];
				if(modifiers[MilStdAttributes.TextBackgroundColor])
					textBackgroundColor = modifiers[MilStdAttributes.TextBackgroundColor];
					
                this.renderText(ctx,arrMods, textColor, textBackgroundColor);
            }
            newii = new ImageInfo(buffer, centerPoint, symbolBounds, imageBounds);
            
            // <editor-fold defaultstate="collapsed" desc="Cleanup">
            ctx = null;
            buffer = null;
            // </editor-fold>
            
            return newii;
        }
        // </editor-fold>

    },
    // </editor-fold>
    
    // <editor-fold defaultstate="collapsed" desc="Support functions">
    createBuffer: function(width, height)
    {
	var buffer = _document.createElement('canvas');
	buffer.width = width;
	buffer.height = height;
        
	return buffer;
	
    },
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
    renderText: function(ctx, tiArray, color, backgroundColor)
    {
        ctx.lineCap = "butt";
        ctx.lineJoin = "miter";
        ctx.miterLimit = 3;
        /*ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.miterLimit = 3;*/

        
        ctx.font = RendererSettings.getModifierFont();

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
        

        if(tbm === RendererSettings.TextBackgroundMethod_OUTLINE_QUICK)
        {    
            //draw text outline
            if(outlineWidth > 0)
            {
                ctx.lineWidth = RendererSettings.getTextOutlineWidth();
                ctx.fillStyle = outlineStyle;
                ctx.strokeStyle = outlineStyle;
                for(var i=0; i<size;i++)
                {
                    tempShape = tiArray[i];
                    tempShape.outlineText(ctx);
                }
            }
            //draw text
            ctx.fillStyle = fillStyle;
            for(var j=0; j<size;j++)
            {
                tempShape = tiArray[j];
                tempShape.fillText(ctx);
            }
        }
		else if(tbm === RendererSettings.TextBackgroundMethod_COLORFILL)
		{
			//draw text outline
            if(outlineWidth > 0)
            {
                ctx.fillStyle = outlineStyle;
                for(var i=0; i<size;i++)
                {
                    tempShape = tiArray[i];
					tempShape.getTextOutlineBounds().fill(ctx);
                }
            }
            //draw text
            ctx.fillStyle = fillStyle;
            for(var j=0; j<size;j++)
            {
                tempShape = tiArray[j];
                tempShape.fillText(ctx);
            }
		}
		else if(tbm === RendererSettings.TextBackgroundMethod_NONE)
		{
			//draw text
            ctx.fillStyle = fillStyle;
            for(var j=0; j<size;j++)
            {
                tempShape = tiArray[j];
                tempShape.fillText(ctx);
            }
		}
		else// if(tbm === RendererSettings.TextBackgroundMethod_OUTLINE)
        {
            if(outlineWidth > 0)
                ctx.lineWidth = (outlineWidth * 2) + 1;
            ctx.fillStyle = fillStyle;
            ctx.strokeStyle = outlineStyle;
            for(var i=0; i<size;i++)
            {
                tempShape = tiArray[i];
                if(outlineWidth>0)
                {
                    tempShape.strokeText(ctx);
                }
                tempShape.fillText(ctx);
            }
        }     
    },
    /**
     * 
     * @param {armyc2.c2sd.renderer.utilities.ImageInfo} ii
     * @param {String} symbolID
     * @param {object} modifiers
     * @returns {armyc2.c2sd.renderer.utilities.ImageInfo}
     */
    renderImage: function(ii, symbolID, modifiers)
    {
        var iinew = null;

        var hasTextModifiers = true;
        
        iinew = this.processUnitDisplayModifiers(ii, symbolID, modifiers,hasTextModifiers);

        if(iinew !== null)
            ii = iinew;

        iinew = null;

        iinew = this.processUnitModifiers(ii,symbolID,modifiers);

        if(iinew !== null)
                ii = iinew;
        
        return ii;
    }
    
    // </editor-fold>
};
}());