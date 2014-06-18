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
     * Not accurate but good to check if the rendering fonts have been loaded
     * @param {String} fontName like "Arial" or "Arial, sans-serif" so a backup is
     * available in case 'Arial' is not present.
     * @param {Number} fontSize like 12
     * @param {String} fontStyle like "bold"
     * @param {String} text
     * @returns {Array[width,height]}
     */
    armyc2.c2sd.renderer.utilities.RendererUtilities.measureTextQuick = function(fontName, fontSize, fontStyle, text){
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
            return size;//*/
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
    armyc2.c2sd.renderer.utilities.RendererUtilities.measureText = function(fontName, fontSize, fontStyle, text,ctx){
        
            var font = fontStyle + " " + fontSize + "pt " + fontName;
            var size;
            size = this.measureTextWithFontString(font, text, ctx);
            //console.log("metrics for " + text);
            //console.dir(size);
            return size;
    };
    
    /**
     * Clients should use getTextBounds
     * @param {String} font like "bold 10pt Arial, sans-serif"
     * @param {String} text
     * @param {HTML5 context} ctx
     * @returns {Array[width,height]}
     */
    armyc2.c2sd.renderer.utilities.RendererUtilities.measureTextWithFontString = function(font, text,ctx){
        var size;
        if(this.pastTextMeasurements[font])
        {
            size = this.pastTextMeasurements[font];

            if(text)
            {
                if(!(ctx))
                {
                    var canvas = document.createElement("canvas");
                    /*var width = 100,
                    height = 100;
                    canvas.width = width;
                    canvas.height = height;//*/
                    ctx.font = font;
                    var ctx = canvas.getContext('2d');
                }

                size.width = ctx.measureText(text).width;
            }
            else
                size.width = 0;

        }
        else
        {
            size = armyc2.c2sd.renderer.utilities.RendererUtilities.getFontWidthHeightAndDescent(font,text,ctx);
            this.pastTextMeasurements[font] = {height:size.height,fullHeight:size.fullHeight,descent:size.descent};
        }
        return size;
        /*var arrFont = font.split(" "),
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
        
       
        return this.measureText(fontName, fontSize, fontStyle, text,ctx);//*/
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
        return this.pastTextMeasurements[fontString];//size.fullHeight;//size[1];
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
        return this.pastTextMeasurements[fontString];//size[1];
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
            return this.measureText(fontName, fontSize, fontStyle,text).width;//[0];
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
            return this.measureText(fontName, fontSize, fontStyle,text).width;//[0];
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

        var size;
            
        var height,
            fullHeight,
            descent,
            width,
            bounds;


        if(font)
        {
            size = this.measureTextWithFontString(font,text,context);
        }
        else
        {
            size = this.measureTextWithFontString(context.font,text,context);
        }

        height = size.height;
        fullHeight = size.fullHeight;
        descent = size.descent;
        width = size.width;

        bounds = new armyc2.c2sd.renderer.so.Rectangle(location.getX(),location.getY() - height,
                            Math.round(width), fullHeight);       

        return bounds;
    };
    
    
    armyc2.c2sd.renderer.utilities.RendererUtilities.scanForCharTopAndBottom = function(pixels,width,height,widthLimit)
    {
        var top = -1,
            bottom = -1;
               
        var row = 0,
            col = 0;
    
        var hit = false;
        for(row = 0; row < height; row++)
        {
            if(hit === true || top === -1)
            {
                hit = false;
                for(col = 0; col < widthLimit; col++)
                {

                    var index = ((row * width) + col) * 4;

                    if(top === -1 && pixels[index] !== 0)
                    {
                        top = row - 1;
                        col = width-1;
                        hit = true;
                    }
                    else if(pixels[index] !== 0)
                    {
                        hit = true;
                        bottom = row+1;
                        col = width-1;
                    }
                }
            }
        }
        
        return {top:top,bottom:bottom};
    };

    /**
     * 
     * @param {type} font
     * @param {string} text
     * @returns {armyc2.c2sd.renderer.utilities.RendererUtilities.getFontHeightAndDescent.end|Number|armyc2.c2sd.renderer.utilities.RendererUtilities.getFontHeightAndDescent.row|armyc2.c2sd.renderer.utilities.RendererUtilities.getFontHeightAndDescent.height|armyc2.c2sd.renderer.utilities.RendererUtilities.getFontHeightAndDescent.start}
     */
    armyc2.c2sd.renderer.utilities.RendererUtilities.getFontWidthHeightAndDescent = function(font,text)
    {
        var canvas = document.createElement("canvas");
        var width = 100,
            height = 100;
    
        canvas.width = width;
        canvas.height = height;
        
        var fctx = canvas.getContext('2d');
        fctx.fillRect(0,0,width,height);
        fctx.textBaseline = 'top';
        fctx.fillStyle = 'white';
        fctx.font = font;
        fctx.fillText("M",0,0);
        
        
        var mWidth = Math.ceil(fctx.measureText("M").width);
        var gWidth = Math.ceil(fctx.measureText("g").width);
        
        var pixels = fctx.getImageData(0,0,width,height).data;
        var start = -1;
        var end = -1;
        
        
        var mtb = this.scanForCharTopAndBottom(pixels,width,height, mWidth);

        fctx.fillStyle = 'black';
        fctx.fillRect(0,0,width,height);
        fctx.textBaseline = 'top';
        fctx.fillStyle = 'white';
        fctx.font = font;
        fctx.fillText("g",0,0);
        pixels = fctx.getImageData(0,0,width,height).data;
        
        var gtb = this.scanForCharTopAndBottom(pixels,width,height, gWidth);

        var height = mtb.bottom - mtb.top;
        var descent = gtb.bottom - mtb.bottom;
        var fullHeight = gtb.bottom - mtb.top;
        
        var textWidth = 0;
        if(text)
            textWidth = fctx.measureText(text).width;
        
        return {width:textWidth,height:height,descent:descent,fullHeight:fullHeight};
            
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
        //return (fontSize * 0.26074218888888888888888888888889);
        var fontString = fontStyle + " " + fontSize + "pt " + fontName;
        var size;
        if(this.pastTextMeasurements[fontString] !== undefined)
        {
            return this.pastTextMeasurements[fontString].descent;
        }
        
        size = this.measureText(fontName, fontSize, fontStyle, "Hj");
        this.pastTextMeasurements[fontString] = {height:size.height,fullHeight:size.fullHeight,descent:size.descent};//size[1];
        return size.descent;//size[1];
    };
    
    
    /**
     * Checks if the fonts required for single point rendering have finished loading.
     * @returns {Boolean}
     */
    armyc2.c2sd.renderer.utilities.RendererUtilities.fontsLoaded = function(){
        var returnVal = false;
        
        var arialWidth = this.measureTextQuick("Arial",12,"normal","A")[0] * 2;
        var unitWidth = this.measureTextQuick("UnitFont",12,"normal","A")[0];
        var spWidth = this.measureTextQuick("SinglePoint",12,"normal","A")[0];
        var tgWidth = this.measureTextQuick("TacticalGraphics",12,"normal","A")[0];
        
        //character index 65 (the letter 'A') was modified to be extra wide (3x)
        //so if the fonts were loaded, their 'A' character should be at least
        //greater than double the width of the Arial 'A' character.
        
        if(unitWidth > arialWidth && spWidth > arialWidth && tgWidth > arialWidth)
            returnVal = true;
        
        //console.log("font 'A' widths: " + unitWidth + ", " + spWidth + ", " + tgWidth + ", " + arialWidth);
        
        return returnVal;
    };
    
