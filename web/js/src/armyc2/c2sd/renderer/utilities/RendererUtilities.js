var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.utilities = armyc2.c2sd.renderer.utilities || {};
/** @class */
armyc2.c2sd.renderer.utilities.RendererUtilities = {};
/** @class */

    
    /**
     * Do not touch.
     * @type {}
     */
    armyc2.c2sd.renderer.utilities.RendererUtilities.pastTextMeasurements = {};
    armyc2.c2sd.renderer.utilities.RendererUtilities.pastIdealOutlineColors = {};


    /**
     * 
     * @param {String} color like "#FFFFFF"
     * @returns {String}
     */
    armyc2.c2sd.renderer.utilities.RendererUtilities.getIdealOutlineColor = function(color){
        var idealColor = null;
        
        if(armyc2.c2sd.renderer.utilities.RendererUtilities.pastIdealOutlineColors[color])
        {
            return armyc2.c2sd.renderer.utilities.RendererUtilities.pastIdealOutlineColors[color];
        }//*/
        
        if(color !== null && color !==""){
			
            var tempColor = color;
            
            if(tempColor.length === 9)
                    tempColor = "#" + tempColor.substring(3);
            var threshold = armyc2.c2sd.renderer.utilities.RendererSettings.getTextBackgroundAutoColorThreshold();
            
            //hex to rgb
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(tempColor);
            
            var r = parseInt(result[1],16),
                g = parseInt(result[2],16),
                b = parseInt(result[3],16);
        
            var delta = ((r * 0.299) + (g * 0.587) + (b * 0.114));
            
            if((255 - delta < threshold))
            {
                idealColor = "#000000";
            }
            else
            {
                idealColor = "#FFFFFF";
            }
        }
        armyc2.c2sd.renderer.utilities.RendererUtilities.pastIdealOutlineColors[color] = idealColor;
        return idealColor;
    };
    /**
     * 
     * @param {String} fontName
     * @param {Number} fontSize
     * @param {String} fontStyle
     * @param {String} text
     * @returns {Array{width,height}}
     */
    armyc2.c2sd.renderer.utilities.RendererUtilities.measureText = function(fontName, fontSize, fontStyle, text){
                
        var div = document.createElement('DIV');
            div.innerHTML = text;
            div.style.position = 'absolute';
            div.style.top = '-999px';
            //div.style.left = '-999px';
            div.style.fontFamily = fontName;
            div.style.fontWeight = fontStyle ? 'bold' : 'normal';
            div.style.fontSize = fontSize + 'pt';
            document.body.appendChild(div);
            var size = [div.offsetWidth, div.offsetHeight];
            
            document.body.removeChild(div);
            div = null;
            return size;
    };
    
    armyc2.c2sd.renderer.utilities.RendererUtilities.measureTextHeight = function(fontName, fontSize, fontStyle)
    {
        var fontString = fontStyle + " " + fontSize + "pt " + fontName;
        var size;
        if(armyc2.c2sd.renderer.utilities.RendererUtilities.pastTextMeasurements[fontString] !== undefined)
        {
            return armyc2.c2sd.renderer.utilities.RendererUtilities.pastTextMeasurements[fontString];
        }
        
        size = this.measureText(fontName, fontSize, fontStyle, "Hj");
        armyc2.c2sd.renderer.utilities.RendererUtilities.pastTextMeasurements[fontString] = size[1];
        return size[1];
    };
    
    armyc2.c2sd.renderer.utilities.RendererUtilities.measureTextHeightWithFontString = function(fontString){
        var arrFont,
            fontStyle,
            fontSize,
            fontName,
            size;
        
        if(armyc2.c2sd.renderer.utilities.RendererUtilities.pastTextMeasurements[fontString] !== undefined)
        {
            return armyc2.c2sd.renderer.utilities.RendererUtilities.pastTextMeasurements[fontString];
        }
        
        arrFont = fontString.split(" ");
        fontStyle = arrFont[0];//style
        fontSize = arrFont[1].replace("pt","");//size
        fontName = arrFont[2];//name
        
        size = this.measureText(fontName, fontSize, fontStyle, "Hj");
        armyc2.c2sd.renderer.utilities.RendererUtilities.pastTextMeasurements[fontString] = size[1];
        return size[1];

    };

    armyc2.c2sd.renderer.utilities.RendererUtilities.measureTextWidthWithFontString = function(fontString,text){
        var arrFont = fontString.split(" ");
        var fontStyle = arrFont[0];//style
        var fontSize = arrFont[1].replace("pt","");//size
        var fontName = arrFont[2];//name
        
        return this.measureText(fontName, fontSize, fontStyle,text)[0];

    };
    /**
     * 
     * @param {HTML5 canvas context} context can be null but runs faster with a context
     * @param {String} text
     * @param {armyc2.c2sd.renderer.so.Point} location can be 0,0 if you're only concerned about the width & height
     * @param {String} font like "bold 10pt Arial".  if undefined, assumes the modifier font
     * @returns {armyc2.c2sd.renderer.so.Rectangle}
     */
    armyc2.c2sd.renderer.utilities.RendererUtilities.getTextBounds = function(context, text, location, font){

        var arrFont, fontStyle, fontSize, fontName, size;
            
        if(font === undefined)
        {
            font = armyc2.c2sd.renderer.utilities.RendererSettings.getModifierFont();
        }
        
        var height,
            width,
            bounds;
        if(context !== null)
        {
            if(context.font !== font)
            {
                context.font = font;
            }
            width = context.measureText(text).width;
            height = this.measureTextHeightWithFontString(font);
        }       
        else
        {
            width = this.measureTextWidthWithFontString(font, text);
            arrFont = font.split(" ");
            fontStyle = arrFont[0];//style
            fontSize = arrFont[1].replace("pt","");//size
            fontName = arrFont[2];//name

            size = this.measureText(fontName, fontSize, fontStyle,text);
            width = size[0];
            height = size[1];
        }
        

        bounds = new armyc2.c2sd.renderer.so.Rectangle(location.getX(),location.getY() - height,
                            width, height);       

        return bounds;
    };
    
    armyc2.c2sd.renderer.utilities.RendererUtilities.getTextPlacement = function(textInfo, modifierID, symbolID, symbolBounds, context){
        
    };
    
    /**
     * Checks if the fonts required for single point rendering have finished loading.
     * @returns {armyc2.c2sd.renderer.utilities.RendererUtilities.fontsLoaded.returnVal|Boolean}
     */
    armyc2.c2sd.renderer.utilities.RendererUtilities.fontsLoaded = function(){
        var returnVal = false;
        
        var arialWidth = this.measureText("Arial",12,"normal","A")[0] * 2;
        var unitWidth = this.measureText("UnitFont",12,"normal","A")[0];
        var spWidth = this.measureText("SinglePoint",12,"normal","A")[0];
        var tgWidth = this.measureText("TacticalGraphics",12,"normal","A")[0];
        
        //character index 65 (the letter 'A') was modified to be extra wide (3x)
        //so if the fonts were loaded, their 'A' character should be at least
        //greater than double the width of the Arial 'A' character.
        
        if(unitWidth > arialWidth && spWidth > arialWidth && tgWidth > arialWidth)
            returnVal = true;
        
        //console.log("font 'A' widths: " + unitWidth + ", " + spWidth + ", " + tgWidth + ", " + arialWidth);
        
        return returnVal;
    };
    
