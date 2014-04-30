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
        
        if(this.pastIdealOutlineColors[color])
        {
            return this.pastIdealOutlineColors[color];
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
        this.pastIdealOutlineColors[color] = idealColor;
        return idealColor;
    };
    /**
     * Clients should use getTextBounds
     * @param {String} fontName like "Arial" or "Arial, sans-serif" so a backup is
     * available in case 'Arial' is not present.
     * @param {Number} fontSize like 12
     * @param {String} fontStyle like "bold"
     * @param {String} text
     * @returns {Array[width,height]}
     */
    armyc2.c2sd.renderer.utilities.RendererUtilities.measureText = function(fontName, fontSize, fontStyle, text){
        var doc = document;
        var div = doc.createElement('DIV');
            div.innerHTML = text;
            div.style.position = 'absolute';
            div.style.top = '-999px';
            //div.style.left = '-999px';
            div.style.fontFamily = fontName;
            div.style.fontWeight = fontStyle ? 'bold' : 'normal';
            div.style.fontSize = fontSize + 'pt';
            doc.body.appendChild(div);
            var size = [div.offsetWidth, div.offsetHeight];
            
            doc.body.removeChild(div);
            div = null;
            return size;
    };
    
    /**
     * Clients should use getTextBounds
     * @param {String} font like "bold 10pt Arial, sans-serif"
     * @param {String} text
     * @returns {Array[width,height]}
     */
    armyc2.c2sd.renderer.utilities.RendererUtilities.measureTextWithFontString = function(font, text){
        var arrFont = font.split(" "),
            fontStyle = arrFont[0],//style
            fontSize = arrFont[1].replace("pt",""),//size
            fontName = arrFont[2],//name
            backupFonts;
        
        if(arrFont.length > 3)
        {
            backupFonts = arrFont.slice(3);
            
            for(var i = 0; i < backupFonts.length; i++)
            {
                fontName += backupFonts[i];
            }
        }
        return this.measureText(fontName, fontSize, fontStyle, text);
    };
    
    /**
     * 
     * @param {String} fontName like "Arial" or "Arial, sans-serif" so a backup is
     * available in case 'Arial' is not present.
     * @param {Number} fontSize like 12
     * @param {String} fontStyle like "bold"
     * @returns {Number}
     */
    armyc2.c2sd.renderer.utilities.RendererUtilities.measureTextHeight = function(fontName, fontSize, fontStyle)
    {
        var fontString = fontStyle + " " + fontSize + "pt " + fontName;
        var size;
        if(this.pastTextMeasurements[fontString] !== undefined)
        {
            return this.pastTextMeasurements[fontString];
        }
        
        size = this.measureText(fontName, fontSize, fontStyle, "Hj");
        this.pastTextMeasurements[fontString] = size[1];
        return size[1];
    };
    
    /**
     * 
     * @param {type} fontString like "bold 10pt Arial, sans-serif"
     * @returns {Number}
     */
    armyc2.c2sd.renderer.utilities.RendererUtilities.measureTextHeightWithFontString = function(fontString){
        var arrFont,
            fontStyle,
            fontSize,
            fontName,
            size;
        
        if(this.pastTextMeasurements[fontString] !== undefined)
        {
            return this.pastTextMeasurements[fontString];
        }
        
        arrFont = fontString.split(" ");
        fontStyle = arrFont[0];//style
        fontSize = arrFont[1].replace("pt","");//size
        fontName = arrFont[2];//name
        
        if(arrFont.length > 3)
        {
            var backupFonts = arrFont.slice(3);
            
            for(var i = 0; i < backupFonts.length; i++)
            {
                fontName += backupFonts[i];
            }
        }
        
        size = this.measureText(fontName, fontSize, fontStyle, "Hj");
        this.pastTextMeasurements[fontString] = size[1];
        return size[1];

    };

    /**
     * 
     * @param {String} text
     * @param {HTML5 canvas context} context optional but faster if one is provided
     * @param {String} fontString like "bold 10pt Arial, sans-serif"
     * @returns {Number}
     */
    armyc2.c2sd.renderer.utilities.RendererUtilities.measureTextWidthWithFontString = function(text, context,fontString){
        var arrFont,
            fontStyle,
            fontSize,
            fontName,
            width;
        
        if(context !== null)
        {
            width = context.measureText(text).width;
            return width;
        }
        else
        {
            arrFont = fontString.split(" ");
            fontStyle = arrFont[0];//style
            fontSize = arrFont[1].replace("pt","");//size
            fontName = arrFont[2];
            if(arrFont.length > 3)
            {
                var backupFonts = arrFont.slice(3);

                for(var i = 0; i < backupFonts.length; i++)
                {
                    fontName +=  backupFonts[i];
                }
            }
            return this.measureText(fontName, fontSize, fontStyle,text)[0];
        }

    };
    
    /**
     * 
     * @param {String} text
     * @param {HTML5 canvas context} context optional but faster if one is provided
     * @param {String} fontName like "Arial" or "Arial, sans-serif" so a backup is
     * available in case 'Arial' is not present.
     * @param {Number} fontSize like 12
     * @param {String} fontStyle like "bold"
     * @returns {Number}
     */
    armyc2.c2sd.renderer.utilities.RendererUtilities.measureTextWidth = function(text, context, fontName, fontSize, fontStyle)
    {
        var width;
        if(context !== null)
        {
            width = context.measureText(text).width;
            return width;
        }
        else
        {
            return this.measureText(fontName, fontSize, fontStyle,text)[0];
        }

    };
    /**
     * Assumes the font set on the passed context
     * @param {HTML5 canvas context} context can be null but runs faster with a context
     * @param {String} text
     * @param {armyc2.c2sd.renderer.so.Point} location can be 0,0 if you're only concerned about the width & height
     * @param {String} font like "bold 10pt Arial, sans-serif", required if context not set.
     * @returns {armyc2.c2sd.renderer.so.Rectangle}
     */
    armyc2.c2sd.renderer.utilities.RendererUtilities.getTextBounds = function(context, text, location, font){

        var arrFont, fontStyle, fontSize, fontName, size;
            
        var height,
            width,
            bounds;
        if(context !== null)
        {
            width = context.measureText(text).width;
            if(font)
                height = this.measureTextHeightWithFontString(font);
            else
                height = this.measureTextHeightWithFontString(context.font);
        }       
        else
        {
            //width = this.measureTextWidthWithFontString(font, text);
            arrFont = font.split(" ");
            fontStyle = arrFont[0];//style
            fontSize = arrFont[1].replace("pt","");//size
            fontName = arrFont[2];//name
            
            if(arrFont.length > 3)
            {
                var backupFonts = arrFont.slice(3);

                for(var i = 0; i < backupFonts.length; i++)
                {
                    fontName += backupFonts[i];
                }
            }

            size = this.measureText(fontName, fontSize, fontStyle,text);
            width = size[0];
            height = size[1];
        }
        

        bounds = new armyc2.c2sd.renderer.so.Rectangle(location.getX(),location.getY() - height,
                            width, height);       

        return bounds;
    };
    
    /**
     * There is no accurate way for getting the descent in JavaScript currently.
     * This should be close for renderer's default modifier font.
     * @param {String} fontName like "Arial" or "Arial, sans-serif" so a backup is
     * available in case 'Arial' is not present.
     * @param {Number} fontSize like 12
     * @param {String} fontStyle like "bold"
     * @param {type} text
     * @returns {Number}
     */
    armyc2.c2sd.renderer.utilities.RendererUtilities.getFontDescent = function(fontName, fontSize, fontStyle, text){
        //return Math.ceil(fontSize * 0.26074218888888888888888888888889);
        return (fontSize * 0.26074218888888888888888888888889);
    };
    
    
    /**
     * Checks if the fonts required for single point rendering have finished loading.
     * @returns {Boolean}
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
    
