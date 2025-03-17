var armyc2 = armyc2 || {};
/** namespace */
armyc2.c2sd = armyc2.c2sd || {};
armyc2.c2sd.renderer = armyc2.c2sd.renderer || {};
/** @class */
armyc2.c2sd.renderer.TacticalGraphicIconRenderer = (function () {
    
    //font size of 60 produces a 40x40 pixel image.
    var fontSizeForTGIcons = 60;
    
return{    
    
    getIcon: function(symbolID, size, color, alpha, symStd){
        
        var id = symbolID;
        if(armyc2.c2sd.renderer.utilities.SymbolUtilities.isWeather(symbolID)===true)
        {
            color = armyc2.c2sd.renderer.utilities.SymbolUtilities.getFillColorOfWeather(symbolID);
            if(color)
                color = color.toHexString(false);
            if(color === null)
                color = armyc2.c2sd.renderer.utilities.SymbolUtilities.getLineColorOfWeather(symbolID).toHexString(false);
        }//*/
        else if(color===null)
        {
            color = armyc2.c2sd.renderer.utilities.SymbolUtilities.getLineColorOfAffiliation(symbolID).toHexString(false);
        }

        if(color.toHexString)
            color = color.toHexString(false);

        var charSymbolIndex = armyc2.c2sd.renderer.utilities.TacticalGraphicLookup.getCharCodeFromSymbol(id,symStd);

        if(charSymbolIndex >= 0)
        {
            var fontSize = fontSizeForTGIcons;//60
            //font size of 60 produces a 40x40 pixel image.
            var ratio = size/40.0;

            var strSymbol = String.fromCharCode(charSymbolIndex);


            var pixel = new armyc2.c2sd.renderer.so.Point(0,0);


            //resize to pixels
            if(ratio > 0)
            {
                fontSize = fontSize * ratio;
            }

            fontSize = (fontSize/96 * 72);

            var buffer = this.createBuffer(size,size),
                ctx = buffer.getContext('2d');
            
            ctx.lineCap = "butt";
            ctx.lineJoin = "miter";
            ctx.miterLimit = 5;
            ctx.fillStyle = color;
            ctx.font = fontSize + "pt TacticalGraphics";
            if(alpha < 1.0)
                ctx.globalAlpha = alpha;
            
            var x = Math.round(size/2),
                y = Math.round(size/2);
            
            ctx.fillText(strSymbol,x,y);

            var centerPoint = new armyc2.c2sd.renderer.so.Point(x,y),
                symbolBounds = new armyc2.c2sd.renderer.so.Rectangle(0,0,size,size),
                imageBounds = symbolBounds.clone();

            var ii = new armyc2.c2sd.renderer.utilities.ImageInfo(buffer,centerPoint,symbolBounds,imageBounds);
            //test
            //ii.SaveImageToFile("C:\\icon.png", ImageInfo.FormatPNG);
            return ii;

        }
    },
    createBuffer: function(width, height)
    {
	var buffer = document.createElement('canvas');
	buffer.width = width;
	buffer.height = height;
	return buffer;
	
    }
};
}());