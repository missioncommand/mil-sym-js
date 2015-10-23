var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
armyc2.c2sd.renderer.utilities = armyc2.c2sd.renderer.utilities || {};
/** @class */
armyc2.c2sd.renderer.utilities.RendererUtilities = (function () {
    //private vars
    var pastTextMeasurements = {};
    var pastIdealOutlineColors = {};
    var FillPatterns = armyc2.c2sd.renderer.utilities.FillPatterns || null;
    
    //constructor code
    var _canvas = null;
    var _ctx = null;
    if(document && document.createElement)
    {
        _canvas = document.createElement("canvas");
        _canvas.width = 100;
        _canvas.height = 100;
    }

    
    if(_canvas && _canvas.getContext)
    {
        _ctx = _canvas.getContext('2d');
        _ctx.textBaseline = 'top';
    }
    else
    {
        //typcial renderer defaults
        pastTextMeasurements["bold 9pt Arial, sans-serif"] = {width:0,height:10,descent:2,fullHeight:12};
        pastTextMeasurements["bold 10pt Arial, sans-serif"] = {width:0,height:11,descent:3,fullHeight:14};
        pastTextMeasurements["bold 12pt Arial, sans-serif"] = {width:0,height:13,descent:3,fullHeight:16};
        pastTextMeasurements["bold 9pt Arial, serif"] = {width:0,height:10,descent:2,fullHeight:12};
        pastTextMeasurements["bold 10pt Arial, serif"] = {width:0,height:11,descent:3,fullHeight:14};
        pastTextMeasurements["bold 12pt Arial, serif"] = {width:0,height:13,descent:3,fullHeight:16};        
        //GE default font
        pastTextMeasurements["normal 16pt Arial"] = {width:0,height:16,descent:4,fullHeight:20};        
    }
    
    //private functions
    function scanForCharTopAndBottom(pixels,width,height,widthLimit)
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
     * @param {string} text include if you want a width value
     * @returns {armyc2.c2sd.renderer.utilities.RendererUtilities.getFontHeightAndDescent.end|Number|armyc2.c2sd.renderer.utilities.RendererUtilities.getFontHeightAndDescent.row|armyc2.c2sd.renderer.utilities.RendererUtilities.getFontHeightAndDescent.height|armyc2.c2sd.renderer.utilities.RendererUtilities.getFontHeightAndDescent.start}
     */
    function getFontWidthHeightAndDescent(font,text)
    {

        var width = 100,
            height = 100;

        _ctx.font = font;

        _ctx.fillStyle = 'black';
        _ctx.fillRect(0,0,width,height);
        _ctx.fillStyle = 'white';
        
        _ctx.fillText("M",0,0);
        

        var mWidth = Math.ceil(_ctx.measureText("M").width);
        var gWidth = Math.ceil(_ctx.measureText("g").width);
        
        var pixels = _ctx.getImageData(0,0,width,height).data;
        
        var mtb = scanForCharTopAndBottom(pixels,width,height, mWidth);

        _ctx.fillStyle = 'black';
        _ctx.fillRect(0,0,width,height);
        _ctx.fillStyle = 'white';
        
        _ctx.fillText("g",0,0);
        pixels = _ctx.getImageData(0,0,width,height).data;
        
        var gtb = scanForCharTopAndBottom(pixels,width,height, gWidth);

        var height = mtb.bottom - mtb.top;
        var descent = gtb.bottom - mtb.bottom;
        var fullHeight = gtb.bottom - mtb.top;
        
        var textWidth = 0;
        if(text)
            textWidth = _ctx.measureText(text).width;
        
        return {width:textWidth,height:height,descent:descent,fullHeight:fullHeight};
            
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
     function measureTextQuick(fontName, fontSize, fontStyle, text){
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
    
    
    function measureTextIE8(fontName, fontSize, fontStyle, text){
        var doc = document;
		var div = null;
		var textWidth = 0;
		var size = null;
		
        var font = fontStyle + " " + fontSize + "pt " + fontName;
        if(pastTextMeasurements[font])
        {
            size = pastTextMeasurements[font];
            fullHeight = size.fullHeight;
            height = size.height;
            descent = size.descent;
			
            if(text && _ctx)
            {
                    textWidth = _ctx.measureText(text).width;
            }
            else if (text)//use an approximation
            {

                    textWidth = Math.floor(parseFloat(fontSize) / 2.0) * text.length;

            }
			
        }
        else if(doc.createElement)
        {

            div = doc.createElement('DIV');
            div.innerHTML = text;
            div.style.position = 'absolute';
            div.style.top = '-999px';
            //div.style.left = '-999px';
            div.style.fontFamily = fontName;
            div.style.fontWeight = fontStyle ? 'bold' : 'normal';
            div.style.fontSize = fontSize + 'pt';
            doc.body.appendChild(div);
            size = [div.offsetWidth, div.offsetHeight];

            doc.body.removeChild(div);
            div = null;

            textWidth = size[0];
            var fullHeight = size[1],
                height = 0,
                descent =  0;

            size = pastTextMeasurements[font];
            fullHeight = Math.round(fullHeight * 0.9);
            height = Math.round(fullHeight * 0.7);
            descent = Math.round(fullHeight * 0.2);
        }
        else// estimate
        {
            textWidth = Math.floor(parseFloat(fontSize) / 2.0) * text.length;
            fullHeight = Math.floor(parseFloat(fontSize) * 1.35);
            height = Math.round(parseFloat(fontSize) + 1);
            descent = Math.floor(parseFloat(fontSize) / 0.25);
        }
            
        return {width:textWidth,height:height,descent:descent,fullHeight:fullHeight};
    };
    
    function splitFontString(font)
    {
        if(!(font))
        {
            font = armyc2.c2sd.renderer.utilities.RendererSettings.getModifierFont();
        }
        var arrFont = font.split(" "),
        fontStyle = arrFont[0],//style
        fontSize = arrFont[1].replace("pt",""),//size
        fontName = arrFont[2];//name

        if(arrFont.length > 3)
        {
            var backupFonts = arrFont.slice(3);

            for(var i = 0; i < backupFonts.length; i++)
            {
                fontName += " " + backupFonts[i];
            }
        }
        
        return {fontName:fontName, fontSize:fontSize, fontStyle:fontStyle};
    }
    
return{    
    
	/**
     * 
     * @param {String} color like "#FFFFFF"
     * @returns {String}
     */
    getIdealOutlineColor: function(color){
        var idealColor = null;
        
        if(pastIdealOutlineColors[color])
        {
            return pastIdealOutlineColors[color];
        }//*/
        
        if(color !== null && color !==""){
			
            var tempColor = color;
            
			if(tempColor.charAt(0) !== '#')
				tempColor = "#" + tempColor;
			
			var len = tempColor.length;
			
			var alpha = "FF";
            if(len === 9)
			{
				alpha = tempColor.substring(1,3)
				tempColor = "#" + tempColor.substring(3);
			}
            var threshold = armyc2.c2sd.renderer.utilities.RendererSettings.getTextBackgroundAutoColorThreshold();
            
            //hex to rgb
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(tempColor);
            
            var r = parseInt(result[1],16),
                g = parseInt(result[2],16),
                b = parseInt(result[3],16);
        
            var delta = ((r * 0.299) + (g * 0.587) + (b * 0.114));
            
			if((255 - delta < threshold))
			{
				if(len === 9)
					idealColor = "#" + alpha  + "000000";
				else
					idealColor = "#000000";
			}
			else
			{
				if(len === 9)
					idealColor = "#" + alpha  + "FFFFFF";
				else
					idealColor = "#FFFFFF";
			}
        }
        pastIdealOutlineColors[color] = idealColor;
        return idealColor;
    },
    
    
    
    /**
     * Clients should use getTextBounds
     * @param {String} fontName like "Arial" or "Arial, sans-serif" so a backup is
     * available in case 'Arial' is not present.
     * @param {Number} fontSize like 12
     * @param {String} fontStyle like "bold"
     * @param {String} text include if you want a width value.
     * @param {HTML5 context}
     * @returns {Object} {width:Number,height:Number,descent:Number,fullHeight:Number}
     */
     measureText: function(fontName, fontSize, fontStyle, text,ctx){
        
            var font = fontStyle + " " + fontSize + "pt " + fontName;
            var size;
            size = this.measureTextWithFontString(font, text, ctx);
            //console.log("metrics for " + text);
            //console.dir(size);
            return size;
    },
    
    /**
     * Clients should use getTextBounds
     * @param {String} font like "bold 10pt Arial, sans-serif"
     * @param {String} text include if you want a width value
     * @param {HTML5 context} ctx
     * @returns {Object} {width:Number,height:Number,descent:Number,fullHeight:Number}
     */
     measureTextWithFontString: function(font, text, ctx){
        var size;
        var objFont;
        if(pastTextMeasurements[font])
        {
            size = pastTextMeasurements[font];

            if(text && _ctx)
            {
                if(!(ctx))
                {
                    var canvas = document.createElement("canvas");
                    /*var width = 100,
                    height = 100;
                    canvas.width = width;
                    canvas.height = height;//*/
                    var ctx = canvas.getContext('2d');
                    ctx.font = font;
                    
                }

                size.width = ctx.measureText(text).width;
            }
            else if(text)
            {
                objFont = splitFontString(font);
                size.width = measureTextIE8(objFont.fontName, objFont.fontSize, objFont.fontStyle, text).width;
            }
            else
            {
                size.width = 0;
            }
        }
        else
        {
            if(_ctx)
            {
                size = getFontWidthHeightAndDescent(font,text,ctx);
            }
            else
            {
                objFont = splitFontString(font);
                size.width = measureTextIE8(objFont.fontName, objFont.fontSize, objFont.fontStyle, text).width;
            }
            pastTextMeasurements[font] = {height:size.height,fullHeight:size.fullHeight,descent:size.descent};
        }
        return size;
    },
    
    /**
     * 
     * @param {String} fontName like "Arial" or "Arial, sans-serif" so a backup is
     * available in case 'Arial' is not present.
     * @param {Number} fontSize like 12
     * @param {String} fontStyle like "bold"
     * @returns {Object} {height:Number,descent:Number,fullHeight:Number}
     */
    measureTextHeight: function(fontName, fontSize, fontStyle)
    {
            var fontString = fontStyle + " " + fontSize + "pt " + fontName;
            var size = this.measureTextHeightWithFontString(fontString);
            return size;
    },
    
    /**
     * 
     * @param {type} fontString like "bold 10pt Arial, sans-serif"
     * @returns {Object} {height:Number,descent:Number,fullHeight:Number}
     */
    measureTextHeightWithFontString: function(fontString){
        var size;
        
        if(pastTextMeasurements[fontString])
        {
            return pastTextMeasurements[fontString];
        }
        
        if(_ctx)
        {
            size = getFontWidthHeightAndDescent(fontString);
            pastTextMeasurements[fontString] = {height:size.height,fullHeight:size.fullHeight,descent:size.descent};
        }
        else
        {   var objFont = splitFontString(fontString);
            size = measureTextIE8(objFont.fontName, objFont.fontSize, objFont.fontStyle, "text");
            pastTextMeasurements[fontString] = {height:size.height,fullHeight:size.fullHeight,descent:size.descent};
        }
        return size;
    },

    /**
     * 
     * @param {String} text
     * @param {HTML5 canvas context} context optional but faster if one is provided
     * @param {String} fontString like "bold 10pt Arial, sans-serif"
     * @returns {Number}
     */
    measureTextWidthWithFontString: function(text, context,fontString){
        var width;
        
        if(_ctx)
        {
            if(context !== null)
            {
                width = context.measureText(text).width;
            }
            else
            {
                _ctx.font = fontString;
                width = _ctx.measureText(text).width;
            }
        }
        else
        {
            var objFont = splitFontString(fontString);
            width = measureTextIE8(objFont.fontName, objFont.fontSize, objFont.fontStyle, "text").width;
        }
        return width;
    },
    
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
    measureTextWidth: function(text, context, fontName, fontSize, fontStyle)
    {

        if(context)
        {
            var width = context.measureText(text).width;
            return width;
        }
        else
        {
            var fontString = fontStyle + " " + fontSize + "pt " + fontName;
            return this.measureTextWidthWithFontString(text, context, fontString);
        }

    },
	
    /**
     * Assumes the font set on the passed context
     * @param {HTML5 canvas context} context can be null but runs faster with a context
     * @param {String} text
     * @param {armyc2.c2sd.renderer.so.Point} location can be 0,0 if you're only concerned about the width & height
     * @param {String} font like "bold 10pt Arial, sans-serif", required if context not set.
     * @returns {armyc2.c2sd.renderer.so.Rectangle}
     */
    getTextBounds: function(context, text, location, font){

        var size;
            
        var height,
            fullHeight,
            descent,
            width,
            bounds;

        if(_ctx)
        {
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
        }
        else // most likely for IE8
        {
            var objFont = splitFontString(font);
            
            size = measureTextIE8(objFont.fontName, objFont.fontSize, objFont.fontStyle, text);
            bounds = new armyc2.c2sd.renderer.so.Rectangle(location.getX(),location.getY() - size.height,
                                size.width, size.fullHeight);  
        }
        
        /*if(text && 
                (text.indexOf('g') > -1) || 
                (text.indexOf('j') > -1) || 
                (text.indexOf('p') > -1) || 
                (text.indexOf('q') > -1) || 
                (text.indexOf('y') > -1))
        {
            bounds.shiftBR(0,-descent);
        }//*/

        return bounds;
    },
    
    

    
    /**
     * There is no accurate way for getting the descent in JavaScript currently.
     * This should be close for renderer's default modifier font.
     * @param {String} fontName like "Arial" or "Arial, sans-serif" so a backup is
     * available in case 'Arial' is not present.
     * @param {Number} fontSize like 12
     * @param {String} fontStyle like "bold"
     * @returns {Number}
     */
    getFontDescent: function(fontName, fontSize, fontStyle){
        //return Math.ceil(fontSize * 0.26074218888888888888888888888889);
        //return (fontSize * 0.26074218888888888888888888888889);
        var fontString = fontStyle + " " + fontSize + "pt " + fontName;
        var size;
        if(pastTextMeasurements[fontString])
        {
            return pastTextMeasurements[fontString].descent;
        }
        
        if(_ctx)
        {
            size = this.measureText(fontName, fontSize, fontStyle);
        }
        else
        {
            size = measureTextIE8(fontName, fontSize, fontStyle,"");
        }
        pastTextMeasurements[fontString] = {height:size.height,fullHeight:size.fullHeight,descent:size.descent};//size[1];
        return size.descent;//size[1];
    },
    
    /**
     * 
     * @param {type} font
     * @returns {size.descent|Number|pastTextMeasurements.descent}
     */
    getFontDescentWithFontString: function(font){
        //return Math.ceil(fontSize * 0.26074218888888888888888888888889);
        //return (fontSize * 0.26074218888888888888888888888889);
        var objFont = splitFontString(font);
        var fontStyle = objFont.fontStyle,
            fontName = objFont.fontName,
            fontSize = objFont.fontSize;
            
                
        var fontString = fontStyle + " " + fontSize + "pt " + fontName;
        var size;
        if(pastTextMeasurements[fontString])
        {
            return pastTextMeasurements[fontString].descent;
        }
        
        if(_ctx)
        {
            size = this.measureText(fontName, fontSize, fontStyle);
        }
        else
        {
            size = measureTextIE8(fontName, fontSize, fontStyle,"");
        }
        pastTextMeasurements[fontString] = {height:size.height,fullHeight:size.fullHeight,descent:size.descent};//size[1];
        return size.descent;//size[1];
    },
    
    
    /**
     * Checks if the fonts required for single point rendering have finished loading.
     * @returns {Boolean}
     */
    fontsLoaded: function(){
        var returnVal = false;
        
        var arialWidth = measureTextQuick("Arial",12,"normal","A")[0] * 2;
        var unitWidth = measureTextQuick("UnitFont",12,"normal","A")[0];
        var spWidth = measureTextQuick("SinglePoint",12,"normal","A")[0];
        var tgWidth = measureTextQuick("TacticalGraphics",12,"normal","A")[0];
        
        //character index 65 (the letter 'A') was modified to be extra wide (3x)
        //so if the fonts were loaded, their 'A' character should be at least
        //greater than double the width of the Arial 'A' character.
        
        if(unitWidth > arialWidth && spWidth > arialWidth && tgWidth > arialWidth)
            returnVal = true;
        
        //console.log("font 'A' widths: " + unitWidth + ", " + spWidth + ", " + tgWidth + ", " + arialWidth);
        
        return returnVal;
    },
    
    
    /**
     * 
     * @param {type} pattern (back, forward, vertical, horizontal, cross, symbolID)
     * @param {type} lineColor
     * @param {type} fillColor
     * @param {type} lineWidth
     * @returns {html5 canvas}
     */
    getCanvasFillStylePattern: function (pattern, lineColor, fillColor, lineWidth)
    {
        if(FillPatterns)
        {
            FillPatterns.getCanvasFillStylePattern(pattern, lineColor, fillColor, lineWidth);
        }
        else
        {
            return null;
        }
        
    }
};
}());